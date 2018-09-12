export const PRODUCTS = [
    { category: "umi.cms", name: "Samsung cps-ural", image: "https://pp.userapi.com/c844320/v844320655/e8d08/s46glIX8iWY.jpg", slug: 'cps' },
    { category: "bootstrap 4", name: "SportHold", image: 'https://pp.userapi.com/c845322/v845322655/e74a3/bActSxNdI5E.jpg', slug: 'sporthold' },
    { category: "umi.cms", name: "Твое дерево", image: 'https://pp.userapi.com/c844320/v844320655/e8d12/WP4zKiPacPk.jpg', slug: 'tvoederevo' },
    { category: "umi.cms", name: "Divit.pro", image: 'https://pp.userapi.com/c847017/v847017448/e1891/r0XmJup4qHI.jpg', slug: 'divitpro' },
    { category: "umi.cms", name: "Суши бургер", image: 'https://pp.userapi.com/c847017/v847017448/e189b/loO1N2IOwvo.jpg', slug: 'sushiburger' },
    { category: "bitrix", name: "УКК Курсор", image: 'https://pp.userapi.com/c846221/v846221494/e34fd/tEM_DzXoDtI.jpg', slug: 'kursor' },
    { category: "html5", name: "Сауна буль-буль", image: 'https://pp.userapi.com/c847017/v847017448/e18af/5_id6iupe8s.jpg', slug: 'sauna' },
    { category: "html5", name: "NeutronMail", image: 'https://pp.userapi.com/c845419/v845419494/e6ee7/mgGorF5FPwo.jpg', slug: 'neutron' },
    { category: "bitrix", name: "eshop8", image: 'https://pp.userapi.com/c845419/v845419494/e6ef1/YZtrkYFpIqo.jpg', slug: 'eshop' }
];

const uniqueItems = (x, i, array) => array.indexOf(x) === i;
export const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
    uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();