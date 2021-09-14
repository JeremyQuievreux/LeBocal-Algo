

function compare(a, c) {
    let b = prompt("Valeur de b :")
    if (a > c) {
        a = c;
    }else{
        a = b;
    }
    console.log(a, b , c);
}

let a = prompt("Valeur de a :");
const c = prompt("Valeu de c : ");

compare(a, c);