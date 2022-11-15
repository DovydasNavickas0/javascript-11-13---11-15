let duomenys ={
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "topping":
    [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5006", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" },
    ]
}

for(let pirmas in duomenys){

    if(typeof duomenys[pirmas] !== "object"){
      console.log(pirmas + " : " +duomenys[pirmas])
    }
    else{
      }
      for(let antras in duomenys[pirmas]){
          for(let trecias in duomenys[pirmas][antras]){
			
      }
    }