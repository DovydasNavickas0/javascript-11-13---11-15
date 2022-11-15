let vardas = "Jonai";
let sveikinimas = "kaledom";

function pasveikinimas(a, b){

  console.log(`Sveikinu su ${b} tave ${a}`);
}

pasveikinimas(vardas, sveikinimas);



let atlyginimas = 900;

function PrintMetinisPajamuDydis(a, b) {
  metinisatlyginimas = b * 12;
  console.log(`${a} metinis atlyginimas yra ${metinisatlyginimas}`);
}

PrintMetinisPajamuDydis(vardas, atlyginimas);


function skaiciuokle(a, c, b){

  switch(c){
    case "+" : x = a + b;
    break;
    case "-" : x = a - b;
    break;
    case "*" : x = a * b;
    break;
    case "/" : x = a / b;
  }

  console.log(`ats.: ${x}`);
}

skaiciuokle(4, "+", 2);
