export interface Post{
    id:string,
    createdAt:string,
    updatedAt:string,
    publishedAt:string,
    revisedAt:string,
    title:string,
    content:string,
    eyecatch?:string
}
export type Posts=Post[]