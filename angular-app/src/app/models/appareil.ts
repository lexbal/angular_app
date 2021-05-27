export class Appareil implements AppareilInterface {
    id: number = 0
    name: string = ""
    status: string = ""
    date?: Date
}

interface AppareilInterface {
    id: number,
    name: string,
    status: string,
    date?: Date
}

