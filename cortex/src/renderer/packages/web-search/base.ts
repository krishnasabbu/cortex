
export interface SearchResultItem {
  title: string
  link: string
  snippet: string
}

export interface SearchResult {
  items: SearchResultItem[]
}

abstract class WebSearch {
  abstract search(query: string, signal?: AbortSignal): Promise<SearchResult>

  
}

export default WebSearch
