const fetchItem = async (itemID) => { // função assíncrona que recebe um item como parâmetro
  // seu código aqui
const url = `https://api.mercadolibre.com/items/${itemID}`; // pega a url e coloca numa variável - usa o template literals para acessar o item
 try {
   const response = await fetch(url); // recebe a api da url e guarda numa variável. Está em await por que ele vai esperar o resultado para poder seguir.
   const data = response.json(); // pega a api e organiza em json (JavaScript Object Notation), salva numa variáveç
   return data; // retorna a api
 } catch (error) { // caso o try não funcione o catch devolve um erro
  return `${error}`; // retorna uma striing de erro
 }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
