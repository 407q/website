export interface Post{
    id:string,
    createdAt:string,
    publishedAt?:string,
    updatedAt:string,
    revisedAt?:string,
    title:string,
    content:string
}
export type Posts=Post[]