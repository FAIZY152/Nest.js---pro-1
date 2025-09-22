export interface POST {
    id: number;
    title: string;
    content: string;
    authorName: string;
    createdAt: Date;
    updatedAt?: Date;
}