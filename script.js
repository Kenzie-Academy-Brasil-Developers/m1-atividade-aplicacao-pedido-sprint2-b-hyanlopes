// Pedido de um cliente que montaremos conforme id dos itens
let pedido = {
  nomes: [],
  precoTotal: 0,
  pesos: {
    'gramas': 0,
    'mililitros': 0
  },
}

// Função será responsável por atualizar a variável nomes
function definirNome(minhaListaDeProdutos){
  for (let i = 0; i < minhaListaDeProdutos.length ; i++){
      pedido.nomes.push(cardapio[minhaListaDeProdutos[i]]['nome'])
  }
  return pedido
}
// console.log(definirNome([1,2,6,5]))


// Função será responsável por atualizar a variável precoTotal
function definirPrecoTotal(minhaListaDeProdutos){
  for (let i = 0; i < minhaListaDeProdutos.length; i++){
    pedido.precoTotal += cardapio[minhaListaDeProdutos[i]].preco
  }
}
// console.log(definirPrecoTotal([1,2,6,5]))

// Função será responsável por atualizar a variável pesos
function definirGramasEMililitros (minhaListaDeProdutos){
  let mililitros = 0
  let gramas = 0
  for(let i = 0; i < minhaListaDeProdutos.length; i++){
    if(minhaListaDeProdutos[i]>5){
      gramas += cardapio[minhaListaDeProdutos[i]].peso
    } else {
      mililitros += cardapio[minhaListaDeProdutos[i]].peso
    }
  }
  pedido.pesos.gramas = gramas
  pedido.pesos.mililitros=mililitros
}
// console.log(definirGramasEMililitros([1,2,6,5]))

// Função será responsavel por atualizar a variavel minhaListaDeProdutos 
// function encontrarItensPeloId(idList){
//   let id = 0
//   let filtro = cardapio.filter(function(elemento,indice){
//     // console.log(elemento)
//     id = idList[0]
//     return elemento.id
//   })
//   // let result = []
//   // for (let i = 0; i<idList.length; i++){
//   //   // result.push(idList[i])
//   //   return idList[i]
//   // }
//   // return result
//   return filtro

// }
// encontrarItensPeloId([1])


// Função será responsável pela apresentação do pedido. Obs: usar console.log() invés return na string criada.
function apresentacao() {
  document.write(`Pedidos: ${pedido.nomes }  <br>`)
  document.write(`Preço total do seu pedido: <span style="color:red">R$ ${pedido.precoTotal},00 </span><br>`)
  document.write(`O peso dos seus lanches é ${pedido.pesos.mililitros}gramas, ${pedido.pesos.gramas}ml`)
}

// Função principal da nossa aplicação, será responsável por chamar as funções.
function principal(idDosProdutosComprados){
  // objetos que serão filtrados conforme o id dos itens. Obs: esse sera nosso array de objetos.
  const minhaListaDeProdutos = idDosProdutosComprados;

  // atualizar nomes
  definirNome(minhaListaDeProdutos);

  // atualiar pesos
  definirGramasEMililitros(minhaListaDeProdutos);

  // atualizar precoTotal
  definirPrecoTotal(minhaListaDeProdutos);

  // apresentação do pedido
  apresentacao()
}

