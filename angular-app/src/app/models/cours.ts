export class Cours implements CoursInterface {
    titre: string = ""
    nb_etud: number = 0
}



interface CoursInterface {
    titre: string
    nb_etud: number
}

