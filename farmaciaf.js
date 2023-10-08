    function farmacias() {
        let farmacias = [];
        let remedios = [];
        entradaDados(farmacias);
        entradaRemedio(farmacias, remedios);
        comprarRemedios(farmacias, remedios);
        mostrarEstoque(remedios);
    }

    function entradaDados(farmacias) {
        for (let i = 0; i < 1; i++) {
            let aux = Number(prompt('Entre com o código da farmácia: '));
            while (farmacias.find(farmacia => farmacia.cod === aux)) {
                aux = Number(prompt('Código existente, insira um diferente: '));
            }
            let objFarmacia = {
                cod: aux,
                nome: prompt(`Entre com o nome da farmácia: `),
                endereco: prompt(`Entre com o endereço da farmácia: `)
            };
            farmacias.push(objFarmacia);
        }
    }

    function entradaRemedio(farmacias, remedios) {
        for (let i = 0; i < 1; i++) {
            let codigoFarmacia = Number(prompt('Entre com o código da farmácia para adicionar um remédio: '));
            let farmaciaExistente = farmacias.find(farmacia => farmacia.cod === codigoFarmacia);

            while (!farmaciaExistente) {
                codigoFarmacia = Number(prompt('Código de farmácia não encontrado. Insira um código válido: '));
                farmaciaExistente = farmacias.find(farmacia => farmacia.cod === codigoFarmacia);
            }

            let objRemedio = {
                nome: prompt('Entre com o nome do remédio: '),
                qtdeEstoque: Number(prompt('Entre com a quantidade em estoque: ')),
                preco: Number(prompt('Entre com o preço: '))
            };
            remedios.push(objRemedio);
        }
    }

    function comprarRemedios(farmacias, remedios) {
        for (let i = 0; i < 5; i++) {
            let codigoFarmacia = Number(prompt('Entre com o código da farmácia para comprar um remédio: '));
            let farmaciaExistente = farmacias.find(farmacia => farmacia.cod === codigoFarmacia);

            while (!farmaciaExistente) {
                codigoFarmacia = Number(prompt('Código de farmácia não encontrado. Insira um código válido: '));
                farmaciaExistente = farmacias.find(farmacia => farmacia.cod === codigoFarmacia);
            }

            let nomeRemedio = prompt('Entre com o nome do remédio a ser comprado: ');
            let remedio = remedios.find(remedios => remedios.nome === nomeRemedio && remedios.codigoFarmacia === codigoFarmacia);

            if (remedio) {
                let quantidadeCompra = Number(prompt('Quantidade a ser comprada: '));
                if (quantidadeCompra <= remedio.qtdeEstoque) {
                    remedio.qtdeEstoque -= quantidadeCompra;
                    alert(`Compra de ${quantidadeCompra} ${nomeRemedio} efetuada com sucesso!`);
                } else {
                    alert(`Estoque insuficiente para a compra de ${quantidadeCompra} ${nomeRemedio}.`);
                }
            } else {
                alert(`Remédio ${nomeRemedio} não encontrado na farmácia.`);
            }
        }
    }

    function mostrarEstoque(remedios) {
        console.log("Estoque de remédios:");
        for (let i = 0; i < remedios.length; i++) {
            console.log(`Nome: ${remedios[i].nome}, Quantidade em Estoque: ${remedios[i].qtdeEstoque}`);
        }
    }

    farmacias();
