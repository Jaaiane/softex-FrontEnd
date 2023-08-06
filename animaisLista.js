let animais = [
    ["cachorro", "mamífero", 3],
    ["gato", "felino", 2],
    ["leão", "felino",5],
    ["Girafa", "mamífero",4],
    ["Tigre", "felino",6],
]

console.log ("Informações sobre os animais:")

for (let i = 0; i < animais.length; i++) {
    console.log (`${animais[i][0]}   |   ${animais[i][1]}   |   ${animais[i][2]}`) 
}