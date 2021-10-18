export class Comment {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
    isEditable?: boolean

    constructor(comment: any) {
        this.body = comment.body || '';
        this.email = comment.email || '';
        this.id = comment.id || null;
        this.name = comment.name || '';
        this.postId = comment.postId || null;
        this.isEditable = comment.isEditable || false
    }
}