export interface NewsResponse {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      null | string;
    title:       null | string;
    description: string;
    url:         string;
    urlToImage:  null | string;
    publishedAt: Date;
    content:     string;
}

export interface Source {
    id:   null | string;
    name: string;
}
