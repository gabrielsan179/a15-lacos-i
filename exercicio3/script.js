const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
let ranking = 1
for(let i = maioresPaises.length - 1; i >= 0; i--){
    console.log(`${ranking} - ${maioresPaises[i]}`)
    ranking ++
}