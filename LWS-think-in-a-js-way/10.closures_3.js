//  10.closures_3.js
console.log('10.closures_3.js');



// onnanno OOP language a 'private' keyword ta jei kaaj kore
// JS a amra closure er maddhome sherokom kaaj korte pari

// OOP te private property gula k oi class bade onno kono class theke directly access kora jai na

// ------------------------------------------------



function bankAccount (initialBalance) {
    var balance = initialBalance;

    return function () {
        return balance;
    }
}


var account = bankAccount(100000);
console.log(account());
// console.log(balance);

// balance -> is now a private property
// balance k baire thike directly access kora jacche na
// 'get' typer func diye access korte partesi
