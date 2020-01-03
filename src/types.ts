export interface PageType {
  number: number
  isEmpty: boolean
  isLeft: boolean
  isRight: boolean
  heading: {
    h1?: any
    h2?: any
    h3?: any
    h4?: any
    h5?: any
    h6?: any
  }
}

export interface Block {
  id: number
  class: "Image" | "Text" | "Link" | "Channel" | "Embed"
  title: string
  content_html: string
  description_html: string
  hasImage?: boolean
  imageUrl?: string
  dimensions?: {
    width: number
    height: number
  }
  image?: {
    thumb: {
      url: string
    }
    display: {
      url: string
    }
    large: {
      url: string
    }
    original: {
      url: string
    }
  }
  source?: {
    url: string
    title: string
  }
  connected_by_username?: string
  user: {
    username: string
  }
}

export interface URLOptions {
  author: boolean
  source: boolean
  description: boolean
  toc: boolean
}

export interface Channel {
  title: string
  slug: string
  metadata?: {
    description: string
  }
  collaborators?: [
    {
      id?: number
      username?: string
    }
  ]
  owner: {
    class: "User" | "Group"
    username?: string
    name?: string
    slug?: string
  }
}
