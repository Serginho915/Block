let finalPrice = 0;
let potatoSize;
let sauceType;

let bound = prompt('hamburger or cheeseburger?');
if(bound === 'cheeseburger'){
    finalPrice = finalPrice + 15;
    let doubleCheese = confirm(`Would you like to add double cheese?`);
    if(doubleCheese){
        finalPrice = finalPrice + 5;
    }
}
else{
    bound = 'hamburger'
    finalPrice = finalPrice + 10;
}
    
let potato = confirm(`Would you like potato?`);

if(potato){
     potatoSize = prompt(`Choose potato size: small/middle/big`);

    if(potatoSize === 'middle'){
        finalPrice = finalPrice + 15;
    }
    else if(potatoSize === 'big'){
        finalPrice = finalPrice + 20;
    }
    else{
        potatoSize = 'small';
        finalPrice = finalPrice + 10;
    }

}
let sauce = confirm(`Would you like a sauce?`);
if(sauce){
    sauceType = prompt(`Choose sauce: ketchup/mayo`);
    if(sauceType === 'mayo'){
        finalPrice = finalPrice + 3;
    }
    else{
        finalPrice = finalPrice + 2;
        sauceType = 'ketchup';
    }

}

    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bound 🍔: ${bound}  </li>`);
		
       if(potato) 
        document.write('<li> Potato 🍟: ${potatoSize}  </li> ');
       if(sauce)  
       document.write(' <li> Sauce 🧂: ${sauceType} </li> ');
       document.write(`</ul>
		Final price: ${finalPrice} `);




