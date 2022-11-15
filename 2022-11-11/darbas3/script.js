const klasiokai =[
["Jolita", "zp20/1", 1, "kunciene@gmail"],
["Linas", "zp20/1", 2, "linas@gmail"],
["Kostas", "zp20/1", 3, "kostas@gmail"],
["Andrius", "zp20/1", 4, "andrius@gmail"]
];

console.log(klasiokai[2][3]) // finds a specific part [x][y] (start counting from zero) 


let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    course: ['html', 'css', 'js'],
   wife: null
}

let paverciu = JSON.stringify(student);


console.log(typeof paverciu)
console.log(paverciu)

localStorage.setItem('email', 'passwd');
const email = localStorage.getItem('email');
console.log(email)





