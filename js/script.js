// Es Mail 

const listMail = ['rosso@gmail.com','blu@gmail.com','verde@gmail.com','giallo@gmail.com'];
const mail = listMail.join(' - ');
const yourMail = (prompt('inserisci la tua Email'));
let messaggio;

if(yourMail === mail){
  messaggio = 'Password corretta';
}else {
  messaggio = 'Password errata';
}
console.log(messaggio)

document.getElementById('output').innerHTML = messaggio;