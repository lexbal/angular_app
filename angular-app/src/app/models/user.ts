export class User implements UserInterface {
    username: string = ""
    password: string = ""
}



interface UserInterface {
    username: string,
    password: string
}

