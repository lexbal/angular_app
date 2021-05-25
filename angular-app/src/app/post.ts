export class Post implements PostInterface {
    title: string = ""
    content: string = ""
    loveIts: number = 0
    created_at?: Date

    constructor() {
        this.created_at = new Date
    }
}



interface PostInterface {
    title: string,
    content: string,
    loveIts: number,
    created_at?: Date
}

