function Contact(id, name, lastname, mail, phone) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.mail = mail;
    this.phone = phone;
};
    
function Pro (id, name, lastname, mail, phone, option) {
    Contact.call(this, id, name, lastname, mail, phone);
    this.entreprise = option;
};

function Perso (id, name, lastname, mail, phone, option){
    Contact.call(this, id, name, lastname, mail, phone);
    this.adressePostal = option;
}


if (inputCat == "perso") {
    let newEntry = new Perso(inputName, InputLastname, inputMail, inputPhone, inputOption);
} else {
    let newEntry = new Pro(inputName, InputLastname, inputMail, inputPhone, inputOption);
}
// oush dans le array



let contact = new Contact("quievreux", "Jeremy", "mon mail", "0600000000");

console.log(contact);

let contactPro = new Pro("quievreux", "Jeremy", "mon mail", "0600000000", "Entreprise");

console.log(contactPro);

let contactPerso = new Perso("quievreux", "Jeremy", "mon mail", "0600000000", "adresse postal");

console.log(contactPerso);