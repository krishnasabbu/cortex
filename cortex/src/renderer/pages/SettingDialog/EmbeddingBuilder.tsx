import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Settings, Theme, Embeddings } from 'src/shared/types';

export default function EmbeddingBuilder(props: {
  settingsEdit: Settings;
  setSettingsEdit: (settings: Settings) => void;
  changeModeWithPreview: (newMode: Theme) => void;
}) {
  const { settingsEdit, setSettingsEdit } = props;
  const embeddings = settingsEdit.embeddings || [];

  const [selectedEmbedding, setSelectedEmbedding] = useState<Embeddings | null>(null);

  const handleSave = async () => {
    const updated = [...(settingsEdit.embeddings || [])];
    const existingIndex = updated.findIndex((e) => e.id === selectedEmbedding?.id);

    let newEmbedding = { ...selectedEmbedding! };

    if (!newEmbedding.id) {
        newEmbedding.id = crypto.randomUUID(); // Or your own ID generation method
    }

    if (existingIndex >= 0) {
        updated[existingIndex] = newEmbedding;
    } else {
        updated.push(newEmbedding);
    }

    try {
        // Example API call to save embeddings
       const res = await fetch('http://127.0.0.1:8000/v1/embedding-store/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEmbedding),
            });

        const responseJson = await res.json();

        console.log("responsefromembeddeings ==="+JSON.stringify(responseJson));

        setSettingsEdit({ ...settingsEdit, embeddings: updated });
        setSelectedEmbedding(null);
    } catch (error) {
        console.error('Failed to save embedding:', error);
    }
  };

  const handleDelete = (index: number) => {
    const updated = [...embeddings];
    updated.splice(index, 1);
    setSettingsEdit({ ...settingsEdit, embeddings: updated });
  };

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Embedding Builder
      </Typography>

      <Box display="flex" height="600px">
        {/* Left Sidebar */}
        <Box width="30%" pr={2} borderRight="1px solid #ccc">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Embeddings</Typography>
            <IconButton
              color="primary"
              onClick={() =>
                setSelectedEmbedding({ id: '', name: '', icon: '', path: '', index: '' })
              }
            >
              <AddIcon />
            </IconButton>
          </Box>

          {embeddings.map((embedding, index) => (
            <Box
              key={embedding.id}
              p={1}
              mb={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderRadius={1}
              border="1px solid #ccc"
            >
              <Typography variant="body2" noWrap>
                {embedding.name}
              </Typography>
              <Box>
                <IconButton
                  size="small"
                  onClick={() => setSelectedEmbedding(embedding)}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Right Panel */}
        <Box flex={1} pl={2}>
          <Typography variant="h6">Create / Edit Embedding</Typography>
          <Divider sx={{ my: 2 }} />
          {selectedEmbedding && (
            <Box display="flex" flexDirection="column" gap={2} maxWidth="400px">
              <TextField
                label="Name"
                value={selectedEmbedding.name}
                onChange={(e) =>
                  setSelectedEmbedding({ ...selectedEmbedding, name: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Icon"
                value={selectedEmbedding.icon}
                onChange={(e) =>
                  setSelectedEmbedding({ ...selectedEmbedding, icon: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Path"
                value={selectedEmbedding.path}
                onChange={(e) =>
                  setSelectedEmbedding({ ...selectedEmbedding, path: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Index"
                value={selectedEmbedding.index}
                onChange={(e) =>
                  setSelectedEmbedding({ ...selectedEmbedding, index: e.target.value })
                }
                fullWidth
              />
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                  disabled={
                    !selectedEmbedding.name ||
                    !selectedEmbedding.path ||
                    !selectedEmbedding.index
                  }
                >
                  Save Embedding
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
