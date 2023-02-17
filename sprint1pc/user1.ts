
class users1 {
    private _username: string;
    private _password: string;
    private _contact: string;
    private _email: string;
    private _address: string;
    constructor(username: string, password: string, contact:string,email:string,address:string) {
        this._username = username;
        this._password = password;
        this._contact = contact;
        this._email = email;
        this._address = address;
    }
    set contact(value:string) {
        this._contact = value;
    }
    set email(value:string) {
        this._email = value;
    }
    set address(value: string) {
        this._address = value;
    }
    set password(value: string) {
        this._password = value;
    }
    set username(value: string) {
        this._password = value;
    }
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    get email(){
        return this._email;
    }
    get address(){
        return this._address;
    }
    get contact(){
        return this._contact;
    }
    
   
}
const userdata = (formData: any) => {
    let form = Object.fromEntries(new FormData(formData));
    const contact:users1 = new users1(<string>form.username, <string>form.password,<string>form.contact,<string>form.email, <string>form.address);
    Message(contact);   
}

function Message(contact:users1){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    };
    fetch('http://localhost:3000/users', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data) );
    window.alert(`Thanks ${contact.username},\nYou will reecvieve notifications to this ${contact.email}`);
}

