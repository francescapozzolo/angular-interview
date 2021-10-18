export class Post {
    body: string;
    id: number;
    title: string;
    userId: number

    constructor(post: any) {
        this.body = post.body || '';
        this.id = post.id || null;
        this.title = post.title || '';
        this.userId = post.userId || null
    }
}