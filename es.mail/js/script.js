// Es Mail 

const listMail = ['rosso@gmail.com','blu@gmail.com','verde@gmail.com','giallo@gmail.com'];
const yourMail = (prompt('inserisci la tua Email'));
let messaggio;


for(let i = 0; i < listMail.length; i++){
const mail = listMail[i]

  if (yourMail === mail){
    messaggio = 'Mail corretta';
  }else if(yourMail !== mail) {
    messaggio = 'Mail errata';
  }
  console.log(messaggio)
  
}

document.getElementById('output').innerHTML = messaggio;