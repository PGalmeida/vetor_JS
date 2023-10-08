let principal = () => {
    let partido = []
    let politico = []
    cadastrarPartido(partido)
    cadastrarPolitico(partido, politico)
    realizarVotacao(politico)
    exibirPoliticoMaisVotado(politico)
    principal();
}

let cadastrarPartido = (partido) => {
    for(let i=0; i<5; i++){
        let novoPartido = {
            codigo: Number(prompt(`Código do partido: `)),
            nome: prompt(`Nome do partido: `),
            sigla: prompt(`Sigla de partido: `),
            presidente: prompt(`Presidente do partido: `),
            num: Number(prompt(`Número do político: `))
        }
        while(partido.some((part) => part.codigo === novoPartido)){
            novoPartido.codigo = Number(prompt(`Código existente, digite um novo`))
        }
        partido.push(novoPartido)
    }
}

let cadastrarPolitico = (partido, politico) => {
    for(let i=0; i<5; i++){
        let novoPolitico = {
            codigoPartido: Number(prompt(`Código do partido: `)),
            nome: prompt(`Nome do político: `),
            votos: 0,
            cargo: prompt(`Cargo que ocupa: `)
        }
        while(!partido.some((part) => part.codigo == novoPolitico.codigoPartido)){
            novoPolitico.codigoPartido = Number(prompt(`Partido não existente, digite novamente: `))
        }
        politico.push(novoPolitico)
    }
}

let realizarVotacao = (politico) => {
    for (let i = 0; i < 10; i++) {
        let codigoPolitico = Number(prompt(`Código do político para o voto ${i + 1}: `));
        let votoPolitico = politico.find((p) => p.codigoPartido === codigoPolitico);

        if (!votoPolitico) {
            alert("Político não encontrado. Voto não registrado.");
        } else {
            votoPolitico.votos++;
            alert(`Voto registrado para ${votoPolitico.nome}.`);
        }
    }
}

let exibirPoliticoMaisVotado = (politico) => {
    let maisVotado = politico[0];
    for (let i = 1; i < politico.length; i++) {
        if (politico[i].votos > maisVotado.votos) {
            maisVotado = politico[i];
        }
    }
    alert(`O político mais votado é: ${maisVotado.nome} com ${maisVotado.votos} votos.`);
}