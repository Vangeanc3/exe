function sort(){
    return Math.floor(Math.random() * 60)
}

let dez = [];
const h2 = document.querySelectorAll('.dzn')

for (let i = 0; dez.length <= 5; i++){
    let retorno = sort();

    if (i == 0){
        dez.push(retorno);
        h2[i].innerHTML = `${retorno}`
        continue
    }

    for(let d of dez){
        if (retorno == d){
            console.log(retorno, " ", d)
            break
        } 
    }
    dez.push(retorno)
    h2[i].innerHTML = `${retorno}`
}

