let principal = () => {
    let vetfarmacia = []
    let vetremedio = []
    cadastrafarmacia(vetfarmacia)
    cadastraremedio(vetfarmacia, vetremedio)
    vendaremedio(vetremedio)
}

let cadastrafarmacia = (vetfarmacia) => {
    for(let i=0; i<5; i++){
        let novaFarmacia = {
            codigo: Number(prompt(`Código da farmacia: `)),
            nome: prompt(`Nome da farmacia: `),
            endereco: prompt(`Endereço da farmacia: `)
        }
        while(vetfarmacia.some((farm) => farm.codigo == novaFarmacia)){
            novaFarmacia.codigo = Number(prompt(`Código existente, digite um novo`))
        }
        vetfarmacia.push(novaFarmacia)
    }
}

let cadastraremedio = (vetfarmacia, vetremedio) => {
    for(let i=0; i<5; i++){
        let novoRemedio = {
            codigofarmacia: Number(prompt(`Código da farmacia: `)),
            nome: prompt(`Nome do remedio: `),
            qtde: prompt(`quantidade de remedio: `),
            preco: Number(prompt(`Preço do remedio`))
        }
        while(!vetfarmacia.some((farm) => farm.codigo == novoRemedio.codigofarmacia)){
            novoRemedio.codigofarmacia = Number(prompt(`Farmacia não existente, digite novamente`))
        }
        vetremedio.push(novoRemedio)
    }
}

let vendaremedio = (vetremedio) => {
    for(let cont=0;cont<5;cont++){
    let objvenda = {
        codigo: Number(prompt(`Código do remedio: `)),
        nome: prompt(`Nome do remédio: `),
        qtde: Number(prompt(`Qtde vendida`))
    }
    let achou = false
    for(let i=0; i<vetremedio.lenth; i++){
        if(vetremedio[i].codigofarmacia == objvenda.codigo && vetremedio[i].nome == objvenda.nome){
            achou = true
            if(vetremedio[i].qtde >= objvenda.qtde){
                vetremedio[i].qtde = vetremedio[i].qtde - objvenda.qtde
            }
            else{
                alert(`Estoque insuficiente para esta venda`)
            }
        }
    }
    if(!achou){
        alert(`Produto não encontrado`)
    }
}
}