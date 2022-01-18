const fetchProducts = async (item) => {
  const apiMercadoLivre = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  try {
  const apiFetch = await fetch(apiMercadoLivre);
  const objJson = await apiFetch.json();
  const data = objJson.results;
  return data;
  } catch (error) {
    return `${error}`;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
