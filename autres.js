var sites = { 
    links: [
        {href: 'https://www.example.com/v1/contact-us/ca'},
        {href: 'https://www.example.com/v1/contact-us/au'},
        {href: 'https://www.example.com/v1/contact-us/us'},
        {href: 'https://www.example.com/v1/dontcontact-us/us'}
    ]
};

const regex = new RegExp('/contact\\b', 'g');
const matchedSites = sites.links.filter(({href}) => href.match(regex));
console.log(matchedSites);

//****** */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
//***** */
function suffisammentGrand(element) {
    return element >= 10;
  }
  var filtre = [12, 5, 8, 130, 44].filter(suffisammentGrand);
  // filtre vaut [12, 130, 44]
//***** */
const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// expected output: true
// #^guitare#
//***** */  
let result = contacts.filter(contact => contact.name ==  findInput);


//***** */

function verifierCorrespondance(contact) {
    let regex = new RegExp(`${findInput.value}*`);
    let result = regex.test(contact.name);
    if (result) {
        return contact;
    }
}

let filteredContacts = contacts.filter(verifierCorrespondance);