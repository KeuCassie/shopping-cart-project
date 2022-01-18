const fetchItem = async (itemID) => {
  // seu código aqui
const url = `https://api.mercadolibre.com/items/${itemID}`;
 // pega a url e coloca numa variável
 try {
   const response = await fetch(url);
   const data = response.json();
   return data;
 } catch (error) {
  return `${error}`;
 }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
