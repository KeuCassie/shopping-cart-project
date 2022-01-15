const fetchProducts = async () => {
  const apiMercadoLivre = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const apiFetch = await fetch(apiMercadoLivre);
  const apiJson = await apiFetch.json();
  return apiJson.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
