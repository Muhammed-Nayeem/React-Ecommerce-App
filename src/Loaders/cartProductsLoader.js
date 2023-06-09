import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
  const res = await fetch("/products.json");
  const products = await res.json();

  //if cart data is in data base than do async-await:
  const storedCart = getShoppingCart();
  const savedCart = [];

  for (const id in storedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  //if need to return multiple data:
  //option 1: return [products, savedCart];
  //option 2: return {products, cart: savedCart};
  
  return savedCart;
};

export default cartProductsLoader;
