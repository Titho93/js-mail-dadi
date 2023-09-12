let cubeA = document.getElementById('cubeA');
let cubeB = document.getElementById('cubeB');
let result = document.getElementById('Victory');
const min = 0;
const max = 6;
const btn = document.getElementById('estrai');
let messaggio;

btn.addEventListener('click', function(){
  let dadoA = Math.floor(Math.random() * (max - min + 1 )) + min 
  let dadoB = Math.floor(Math.random() * (max - min + 1 )) + min

  if (dadoA > dadoB){
    messaggio = 'Player one win';
  }else if (dadoA < dadoB){
    messaggio = 'Player two win';
  }else if (dadoA = dadoB){
    messaggio = 'Tie'
  }
  console.log(messaggio)

  cubeA.append (dadoA);
  cubeB.append (dadoB);
  result.append (messaggio);

})





