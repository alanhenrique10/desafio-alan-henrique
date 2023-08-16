class CaixaDaLanchonete {
  constructor() {
    this.cardapio = {
      cafe: 3.0,
      chantily: 1.5,
      suco: 6.2,
      sanduiche: 6.5,
      queijo: 2.0,
      salgado: 7.25,
      combo1: 9.5,
      combo2: 7.5,
    };

    this.extras = {
      chantily: "cafe",
      queijo: "sanduiche",
    };
  }

  calcularValorDaCompra(formaDePagamento, itens) {
    //variavel para posição inicial do carrinho de compras = 0
    let total = 0;

    // Validação de carrinho vazio e sem forma de pagamento
    if (itens.length === 0) return "Não há itens no carrinho de compra!";
    if (!["debito", "dinheiro", "credito"].includes(formaDePagamento))
      return "Forma de pagamento inválida!";

    //Estrutura de repetição para percorrer o array atribuido a itens na funçao calcularValorCompra
    for (let item of itens) {
      const [codigo, quantidade] = item.split(",");

      // Validações a serem realizadas em cada loop de atribuição do item ao array atribuiddo a variável constante acima
      if (!this.cardapio[codigo]) return "Item inválido!";
      if (Number(quantidade) <= 0) return "Quantidade inválida!";
      if (
        this.extras[codigo] &&
        !itens.some((i) => i.startsWith(this.extras[codigo]))
      ) {
        return "Item extra não pode ser pedido sem o principal";
      }
      //Attribuição do resultado o loop ao total do valor do carrinho
      total += this.cardapio[codigo] * Number(quantidade);
    }

    // Aplicação do desconto no dinheiro ou taxa de credito
    if (formaDePagamento === "dinheiro") {
      total *= 0.95;
    } else if (formaDePagamento === "credito") {
      total *= 1.03;
    }

    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
