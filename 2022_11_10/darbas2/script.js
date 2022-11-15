let vidurkis = 9;
let lankomumas = true;

if (vidurkis > 8 && lankomumas){
  console.log(`Jusu vidurkis yra  ${vidurkis} ir lankomumas geras, todel stipendija gaus`);

}
else {
    console.log(' Deja negausite stipendijos');
}

let vardas = "Dovydas";
let prisijunges = false;

if(prisijunges){
  console.log(`Hello ${vardas}`);
} else {console.log('Hello guest')}

let vardas1 = "Tomas";
let alga = 801;
let vedes = true;

if (vedes == false && alga > 800){
  console.log('Sveikinu paskola gausite');
}
else if (vedes == true && alga > 1000){
  console.log('Jums paskola bus suteikta');
}
else{
  console.log('Atvykite susitvarke dokumentus');
}

let pazymys = 9

switch (pazymys) {
  case 1: 
  case 2: 
  case 3: console.log('Neigiamas');
  break;
  case 4:
  case 5: console.log('Teigiamas, bet reikia stengtis');
  break;
  case 6:
  case 7: console.log('Vidutinis lygis, ar tau to gana');
  break;
  case 8:
  case 9: console.log('Pasidziauk savimi');
  break;
  case 10: console.log('Super');
}