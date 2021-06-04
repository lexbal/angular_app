export class Book implements BookInterface {
    title: string = ""
    author: string = ""
    synopsis: string = ""

    constructor(title: string = "", author: string = "") { 
        this.title = title;
        this.author = author;
    }
}



interface BookInterface {
    title: string
    author: string
    synopsis: string
}

