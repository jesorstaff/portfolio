import mercan from '../images/mercan.jpg';
import ramazan from '../images/ramazan.png';

export const PRODUCTS = [
    { category: "react.js", name: "Marcan", image: mercan, slug: 'mercan' },
    { category: "react.js", name: "Ramazan", image: ramazan, slug: 'ramazan' },
    { category: "react.js", name: "Reactjs", image: "https://sun1-13.userapi.com/c830401/v830401494/16f984/d4TUfcXMF90.jpg", slug: 'myPortfolio' }
];

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
export const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
    uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();
