export class User implements UserInterface {
    firstname: string = ""
    lastname: string = ""
    username: string = ""
    email: string = ""
    password: string = ""
    drinkPreference: string = ""
    hobbies?: any[] = []

    constructor(
        firstname: string = "",
        lastname: string = "",
        username: string = "",
        email: string = "",
        password: string = "",
        drinkPreference: string = "",
        hobbies: any[] = []
    ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.drinkPreference = drinkPreference;
        this.hobbies = hobbies;
    }
}



interface UserInterface {
    firstname: string
    lastname: string
    username: string
    email: string
    password: string
    drinkPreference: string 
    hobbies?: any[]
}

