function ex(){
    let obj = {
        a : Number(prompt(`Entre com o valor de A: `)),
        b : Number(prompt(`Entre com o valor de B:`)),
        c : Number(prompt(`Entre com o valor de C: `)),
        delta : 0
    }
    obj.delta = (obj.b ** 2) - 4 * obj.a * obj.c

    alert(`O valor do delta é ${obj.delta}`)
}

function ex1(){
    let soma = 0
    for(i=0;i<10;i++){
        let obj = {
            cod: Number(prompt(`Entre com o código: `)),
            nome: prompt(`Entre com o nome: `),
            p1: Number(prompt(`Entre com a nota 1: `)),
            p2: Number(prompt(`Entre com a nota 2: `)),
            media:0
        }

        obj.media = (obj.p1 + obj.p2) / 2

        alert(`O aluno ${obj.nome} tem média ${obj.media}`)

        soma = soma + obj.media
    }

    alert(`A média da turma é ${soma/10}`)
}

function ex(){
    let filmes = []
    for(let i=0; i<4; i++){
        let objfilme = {
            cod: Number(prompt(`Entre com o código: `)),
            tit: prompt(`Entre com o título: `),
            class: Number(prompt(`Entre com a classificação`)),
            aval: Number(prompt(`Entre com a avaliação: `)),
            dura: Number(prompt(`Entre com a duração: `))
        }
        filmes.push(objfilme)
    }

    let soma = 0
    for(i=0; i<4; i++){
        soma = soma + filmes[i].class
    }
    alert(`A média da classificação etária é ${soma/4}`)

    let maislongo = filmes[0].dura
    let maiscurto = filmes[0].dura
    let titmaislongo = filmes[0].tit 
    let titmaiscurto = filmes[0].tit
    for(i=1;i<4;i++){
        if(filmes[i].dura > maislongo){
            maislongo = filmes[i].dura
            titmaislongo = filmes[0].tit
        }
        if(filmes[i].dura < maiscurto){
            maiscurto = filmes[i].dura
            titmaiscurto = filmes[i].tit
        }
    }
    alert(`O filme ${titmaislongo} tem a maior duração com ${maislongo}min`)
    alert(`O filme ${titmaiscurto} tem a menor duração com ${maiscurto}min`)

    let melhor = filmes[0].aval
    for(i=1;i<4;i++){
        if(filmes[i].aval > melhor){
            melhor = filmes[i].aval
        }
    }
    alert(`O filme com melhor avaliação é ${melhor}`)
}

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
}