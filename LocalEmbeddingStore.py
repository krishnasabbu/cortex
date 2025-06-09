import os
import faiss
import pickle
import uuid
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import normalize


class LocalEmbeddingStore:
    def __init__(self, base_dir="data"):
        self.base_dir = base_dir
        os.makedirs(self.base_dir, exist_ok=True)

    def _get_paths(self, index_name):
        folder = os.path.join(self.base_dir, index_name)
        return folder, os.path.join(folder, "index.faiss"), os.path.join(folder, "metadata.pkl")

    def create(self, documents: list[str], filenames: list[str], index_name: str = None):
        if not index_name:
            index_name = str(uuid.uuid4())

        chunks, metadata = [], []
        for doc, fname in zip(documents, filenames):
            words = doc.split()
            for i in range(0, len(words), 300):
                chunk = " ".join(words[i:i + 300])
                chunks.append(chunk)
                metadata.append({"filename": fname, "start_idx": i})

        vectorizer = TfidfVectorizer()
        tfidf_matrix = normalize(vectorizer.fit_transform(chunks).toarray(), norm='l2')

        dim = tfidf_matrix.shape[1]
        index = faiss.IndexFlatL2(dim)
        index.add(tfidf_matrix.astype(np.float32))

        folder, index_path, meta_path = self._get_paths(index_name)
        os.makedirs(folder, exist_ok=True)

        faiss.write_index(index, index_path)
        with open(meta_path, "wb") as f:
            pickle.dump((chunks, metadata, vectorizer), f)

        return {"index_name": index_name, "path": folder, "chunks": len(chunks)}

    def search(self, query: str, index_name: str, k: int = 5, threshold: float = 0.2):
        folder, index_path, meta_path = self._get_paths(index_name)
        if not (os.path.exists(index_path) and os.path.exists(meta_path)):
            raise FileNotFoundError(f"No index found for '{index_name}'")

        index = faiss.read_index(index_path)
        with open(meta_path, "rb") as f:
            chunks, metadata, vectorizer = pickle.load(f)

        query_vec = normalize(vectorizer.transform([query]).toarray(), norm='l2').astype(np.float32)
        distances, indices = index.search(query_vec, k)

        results = []
        for dist, idx in zip(distances[0], indices[0]):
            similarity = 1 / (1 + dist)
            if similarity >= threshold:
                results.append({
                    "filename": metadata[idx]["filename"],
                    "start_idx": metadata[idx]["start_idx"],
                    "text": chunks[idx],
                    "similarity": round(similarity, 3)
                })

        return results
