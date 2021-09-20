

const contact1 = { name: "quievreux", prenom: "jeremy", mail: "jeremy" };
const contact2 = { name: "jeremy", prenom: "quievreux", mail: "mail" };

const contacts = [contact1,contact2];

contacts.forEach(contact => {
    for (const prop in contact) {
        let valeur = contact[prop];
        if (valeur == "jeremy"){
            console.log("trouver");
            break
        }
    }
});



