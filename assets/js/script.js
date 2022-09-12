async function salvar(){

    //Caturando o valor digitado nos inputs
    const lembrete = document.getElementById('lembrete').value
    const data = document.getElementById('data').value

    //Se esiverem vazios ("") ou nulo, mostro um alerta
    if(lembrete === null || lembrete === "" || data === null || data === ""){
        alert("Os campos lembrete e data precisam ser informados")
    } 

    //Se não, sigo com o fluxo
    else {
        const url = 'https://project-my-notes.herokuapp.com/mynotes/salvar'
        const requisicao = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "noteText": lembrete,
            "date": data 
        }),
        headers:{
            'Content-Type' : 'application/json'
            }
        })

        //Após enviar os dados, limpo os campos dos inputs
        document.getElementById('lembrete').value = ""
        document.getElementById('data').value = ""

        //Chamo minha function listar para assim que seja salvo, meus dados atualizados já sejam recarregados na tela
        listar()
    }
}  

async function listar() {
    const url = 'https://project-my-notes.herokuapp.com/mynotes/listar'

    //Faço a requisição
    const requisicao = await fetch(url);

    //Recebo minha resposta em JSON
    const resposta = await requisicao.json();

    //Começo a montar minha table
    const render = (resposta = []) => {
        let tabela = ""
        
        //Percorrendo as datas da minha resposta
        for (const dataTemp of resposta) {
            
            //Para cada data recebida da minha resposta, 
            //crio uma linha e nessa linha, seto a data que vem do banco, formatando-a para o padrão brasileiro
            tabela += 
            `<dt id="linhaData">
                ${dataTemp.date.split('-').reverse().join('/')}
            </dt>`

            //Percorrendo os lembretes da minha resposta
            for(const noteModel of dataTemp.noteModel){

                //Para cada lembrete, associado a uma data, monto uma linha e nessa linha, seto o lembrete  
                tabela += 
                `<dd>
                    ${noteModel.noteText}
                    <button id="btnExcluir" onclick="excluir(${noteModel.id})">X</button>
                </dd>`
            }
        }
        //Coloco tudo isso dentro da minha table
        document.getElementById('dados').innerHTML = tabela
    };
    //E renderizo em tela
    render(resposta)
}

async function excluir(id){
    //Faço a requisição passando o id do lembrete que deve ser excluído
    const url = `https://project-my-notes.herokuapp.com/mynotes/${id}/deletar`
    const requisicao = await fetch(url, {
        method: 'DELETE'
    });

    //Assim que é excluído, chamo minha function listar, para atualizar os dados em tela
    listar()
}

//Função responsável por não deixar selecionar uma data menor que a data atual
function formataData(data = new Date){
    //Capturo o dia atual
	var dia = data.getDate() 

    /*Capturo o mes atual
    (adiciono mais 1, pois me é retornado um array de 0 à 11, referente aos meses de JAN à DEZ)*/
	var mes = data.getMonth()+1 

    //Capturo o ano atual                           
	var ano = data.getFullYear()
	
    /*Se o dia ou o mes tiver apenas um caracter, 
    adiciono um 0 na frente para que fique dentro do padrão brasileiro. 
    EX: recebo 1/1/2022, com a formatação fica: 01/01/2022*/
	if(dia.toString().length == 1) dia = '0'+dia
	if(mes.toString().length == 1) mes = '0'+mes

    /*Substituo a barra '/' por um hífen '-', 
    para que minha propriedade 'min' do input da data, consiga reconhecer como uma data válida.
    Recebo como retorno uma data atual, formatada no padrão americano*/
    var dataFormat = ano+'-'+mes+'-'+dia 

    /*Pelo id, seleciono o meu input data e digo que a propriedade 'min' dele, será a minha data formatada
    para quando o usuário selecionar a data, ele não consiga selecionar um data menor que a data atual*/
    document.getElementById("data").min = dataFormat
}
  
listar()
formataData()

