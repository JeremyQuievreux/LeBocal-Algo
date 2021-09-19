class Contact {
    constructor(id, name, lastname, mail, phone) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.mail = mail;
    this.phone = phone;
    }
}

class Pro extends Contact{
    constructor(id, name, lastname, mail, phone, option) {
        super(id, name, lastname, mail, phone);
        this.entreprise_name = option;
    }
}
class Perso extends Contact{
    constructor(id, name, lastname, mail, phone, option) {
        super(id, name, lastname, mail, phone);
        this.adresse_postal = option;
    }
}
    
let maVoiture = new Voiture(130, “Delorean”);
let saVoiture = new Voiture(150, “Peugeot”);
let voitureLaPlusPuissante =
Voiture. comparaisonPuissance(maVoiture, saVoiture);