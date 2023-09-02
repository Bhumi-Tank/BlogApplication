export enum ArticleStatus {
    draft = 0,
    publish = 1
}

export interface IArticleInfo {
    id: number;
    title: string;
    author: string;
    content: string;
    status: ArticleStatus;
    publishedDate: any;
    creationDate: any;
}