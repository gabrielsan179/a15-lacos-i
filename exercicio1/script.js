let comeCoxinha = prompt("Deseja comer mais coxinhas?").toUpperCase()
let conta = 0

while (comeCoxinha === "S"){
    conta += 2.50
    comeCoxinha = prompt("Deseja comer mais coxinhas?").toUpperCase()
}

console.log(`valor total ${conta} R$`)