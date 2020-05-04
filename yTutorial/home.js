
let message = 'Hello';

// message = message.toLowerCase;

message = message.substring(1);


let amount =123;


amount = amount.toString();
let word = '12314';

amount = Number.parseFloat(word);

amount =4;

let person ={
 name : 'John',
 firstName: 'Knowx'
}

if(amount === 123){
    showMessage(person.firstName);
}else if(amount === 4){
    showMessage(person.name);
}

console.log(typeof person);