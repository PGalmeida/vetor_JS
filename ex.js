function exe1(){
    let vet = []

    for(let i = 0; i < 6; i++){
        vet[i] = Number(prompt(`Informe o ${i+1}° elemento`))
    }

    let pares = []
    let impares = []
    let iPares = []
    let iImpares = []
    
    for(let i = 0; i < 6; i++){
        if(vet[i] % 2 == 0){
            pares[iPares] = vet[i]
            iPares++
        }
        else{
            impares[iImpares] = vet[i]
            iImpares++
        }
    }
    alert(`Valores pares ${iPares} e a quantidade é ${pares.length}`)
    alert(`Valores impares ${iImpares} e a quantidade é ${impares.length}`)
}

function exe2(){
    let vet = []
    let mul2 = []
    let mul3 = []
    let mul23 = []

    for(let i = 0; i < 7; i++){
        vet[i] = Number(prompt('Informe o elemento'))

    }
    for(let i = 0; i < 7; i++){
        if((vet[i] % 2 == 0) && (vet[i] % 3 == 0)){
            mul2.push(vet[i]); mul3.push(vet[i]);
            mul23.push(vet[i]);
        }
        else if (vet[i] % 2 == 0){
            mul2.push(vet[i])
        }
        else if(vet[i] % 3 ==0){
            mul3.push(vet[i])
        }
    }

    alert(`Multiplo de 2 e 3 ${mul23} com quantidade ${mul23.length}`)
    alert(`Multiplo de 2 ${mul2} com quantidade ${mul2.length}`)
    alert(`Multiplo de 3 ${mul3} com quantidade ${mul3.length}`)
}

function exe3(){
    let codigos = []
    let estoque = []

    for(let i = 0; i < 5; i++){
        codigos[i] = Number(prompt(`Informe o codigo do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe o estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt('Informe o codigo do cliente'))

    while(cliente != 0){

    let codigo = Number(prompt('Qual codigo do produto para comprar'))
    let qtde = Number(prompt('Qual a quantidade desejada para comprar'))
    let achou = false

    for(let i=0;i<4;i++){
        if(codigo == codigos[i]){
            achou = true
            if(estoque[i] >= qtde){
                estoque[i] = estoque[i] - qtde
            }
            else{
                alert('Estoque insuficiente')
            }
        }   
    }
    if(!achou){
        alert('Produto não existe')
    }

    cliente = Number(prompt('Informe o codigo do cliente. Digite 0 para encerrar'))

    }
    console.log(estoque)
}

function exe4(){
    let num = []
    
    for(let i = 0; i < 15; i++){
        num[i] = Number(prompt('Entre com um número'))
    }

    let posicao = []

    for(let i = 0; i < 15; i++){
        if(num[i] == 30){
            posicao.push(i)
        }
    }

    alert(`posições igais a 30 ${posicao}`)
}

function exe5(){
    let logica = []
    let linguagem = []
    for(let i=0;i<10;i++){
        logica[i] = Number(prompt('Informe aluno que faz lógica'))
    }
    for(let i=0;i<10;i++){
        linguagem[i] = Number(prompt('Informe aluno que faz linguagem'))
    }

    let comum = []
    for(let i=0;i<10;i++){
        if(linguagem.includes(logica[i])){
            comum.push(logica[i])
        }
    }
    console.log(`Alunos que foram ambas ${comum}`)
}

function exe6(){
    let nomes = []
    let salarios = []

    for(let i=0;i<10;i++){
        nomes[i] = prompt('Informe o nome')
        salarios[i] = Number(prompt('Informe salário'))

    }

    let maior = salarios[0]
    let menor = salarios[0]

    for(let i=0;i<10;i++){
        if(salarios[i] > maior){
            maior = salarios[i]
        }
        if(salarios[i] < menor){
            menor = salarios[i]
        }
    }
    let nomeMaior = nomes[salarios.indexOf(maior)]
    let nomeManor = nomes[salarios.indexOf(menor)]
    console.log(`${nomeMaior} vai receber o salário ${maior}`)
    console.log(`${nomeManor} vai receber o salário ${menor}`)
}

function exeprova(){
    let codigos = []
    let nomes = []

   for(let i = 0; i < 5; i++){
    let aux = Number(prompt('Entre com o código'))
    while (codigos.includes(aux)){
        aux = Number(prompt('Código existente, insira um diferente'))
    }
    codigos[i] = aux
    nomes[i] = prompt('Entre com o nome')
   }

   let codigo = Number(prompt('Informe um código'))
   let posicao = codigos.indexOf(codigo)
   if(posicao == -1){
    alert('Códico não está presente no vetor')
   }
   else{
    alert(`Nome do aluno é ${nomes[posicao]}`)
   }

}

function exe7(){
    let vetor = []

    for(let i = 0; i < 10; i++){
        vetor[i] = Number(prompt('Entre com um número real'))
    }

    let negativo = 0
    let positivo = 0

    for(let i = 0; i < 10; i++){
        if(vetor[i] < 0){
            negativo++;
        }
        else if(vetor[i] > 0){
            positivo = positivo + vetor[i];
        }
    }

    alert(`A quantidade de negativo é ${negativo}`)
    alert(`A soma dos números positivos é ${positivo}`)
}

function exe8(){
    let nome = []
    let media = []

    for(let i = 0; i < 7; i++){
        nome[i] = prompt('Entre com o nome do aluno')
        media[i] = Number(prompt('Entre com a média final do aluno'))
    }

    let maiorMedia = media[0]
    let nomeMaiorMedia = nome[0]

    for(let i = 0; i < 7; i++){
        if(media[i] > maiorMedia){
            maiorMedia = media[i]
            nomeMaiorMedia = nome[i]
        }
    }
    alert(`aluno com maior média ${nomeMaiorMedia}`)

    for(let i = 0; i < 7; i++){
        if(media[i] < 5){
            let final = (10 - media[i]).toFixed(2)
            alert(`${nome[i]} precisa tirar ${final} no exame final para ser aprovado`)
        }
    }
}

function exe9(){
    let nome = []
    let codigo = []
    let preco = []

    for(let i = 0; i < 2; i++){
        nome[i] = prompt('Entre com o nome do produto')
        codigo[i] = Number(prompt('Entre com o código do ptoduto'))
        preco[i] = Number(prompt('Entre com o preço do produto'))
    }

    alert(`Relatório dos produtos que sofrerão aumento: `)

    for (let i = 0; i < 2; i++) {
        let aumento = 0
        let relatorio = ""

        if(codigo[i] % 2 == 0 && preco[i] > 10000){
            aumento = 0.2
            relatorio = (`Nome ${nome[i]}, códico ${codigo[i]} e preço ${preco[i]}`)
        }
        else if(codigo[i] % 2 == 0){
            aumento = 0.15
            relatorio = (`Nome ${nome[i]}, códico ${codigo[i]} e preço ${preco[i]}`)
        }
        else if(preco[i] > 10000){
            aumento = 0.1
            relatorio = (`Nome ${nome[i]}, códico ${codigo[i]} e preço ${preco[i]}`)
        }

        if(aumento > 0){
            let novopreco = preco[i] + (preco[i] * aumento)
            relatorio += "- Novo preço: " + novopreco.toFixed(2)
            alert(`${relatorio}`)
        }
    }
}