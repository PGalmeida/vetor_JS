function bike(){
    let bikes = []
    let marcas = ["CALOI", "SCOTT", "CANONDALE"]

    for(let i=0;i<10;i++){
        let bike = {
            marca: prompt(`Entre com a marca: `).toUpperCase(),
            modelo: prompt(`Entre com o modelo: `),
            quadro: prompt(`Entre com o quadro: `),
            aro: Number(prompt(`Entre com o aro: `)),
            ano: Number(prompt(`Entre com o ano: `)),
            preco: Number(prompt(`Entre com o preço: `))
            
        }
        while(!marcas.includes(bike.marca)){
            bike.marca = prompt("Entre a marca correta da bike").toUpperCase()
        }
        bikes.push(bike)
    }

    let somapreco = 0
    for(i=0;i<bikes.length;i++){
        somapreco = somapreco + bikes[i].preco
    }
    alert(`a média de preço das bikes é: ${somapreco/bikes.length}`)

    let objantigo = bikes[0]

    for(i=0;i<bikes.length;i++){
        if(bikes[i].ano < objantigo.ano){
            objantigo = bikes[i]
        }
    }
    alert(`A bike mais antiga: ${objantigo}`)

    let caloi = []

    for(i=0;i<bikes.length;i++){
        if(bikes[i].marca == 'CALOI'){
            caloi.push(bikes[i])
        }
    }
    alert(`Quais bikes são da coloi: ${caloi}`)

    let arocont = 0

    for(i=0;i<bikes.length;i++){
        if(bikes[i].aro == 29){
            arocont++
        }
    }
    alert(`quantas bikes possuem aro 29: ${arocont}`)

    let objmaior = bikes[0]

    for(i=0;i<bikes.length;i++){
        if(bikes[i].quadro > objmaior.quadro){
            objmaior = bikes[i]
        }
    }
    alert(`A bike mais antiga: ${objmaior}`)
}