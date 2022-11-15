//const fruit = ["apple", "orange", "water melon", "pumpkin", "plum", "pineapple", "banana", "lemon", "cocounut" ];

//console.log(fruit.length);

//for (let i = 0; i < fruit.length; i++){
//  console.log(fruit[i]);
//}

let klasiokas = {
    vardas: "Jolita",
    klase: "js20",
    vidurkis: 8.6,
    pomegiai: {
        1:"vaiksciuoti", 
        2:"plaukimas", 
        3:"tingejimas"}
} 
for(let savybe in klasiokas){

    if(typeof klasiokas[savybe] !== "object"){
        console.log(savybe  + " : " +klasiokas[savybe]);
      } else{
        console.log(savybe + " yra -> vardinu: ")
         for(let antras in klasiokas[savybe]){
           
          console.log(antras + " yra " + klasiokas[savybe][antras]);
        }
      }
    }


//for(let i=0; i<pomegiai.length; i++){
//    if(typeof pomegiai == 'object'){
//        console.log([i], " yra ", pomegiai[i])
//    }
//}


