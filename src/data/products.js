import azfish from '../images/azfish.jpg';
import bakucaviar from '../images/bakucaviar.jpg';
import ipkoil from '../images/ipkoil.jpg';
import pm from '../images/pm.jpg';
import zzb from '../images/zzbeton.jpg';
import olta from '../images/olta.jpg';
import armatinal from '../images/armatinal.png';
import ocufa from '../images/oc.png';
import megafon from '../images/megafon.png';

export const PRODUCTS = [
    { category: "php", name: "Megafon Jazz Band", image: megafon, slug: 'megafon' },
    { category: "html5", name: "Azerbaijan Fish Farm", image: azfish, slug: 'azfish' },
    { category: "html5", name: "Baku Caviar", image: bakucaviar, slug: 'bakucaviar' },
    { category: "bitrix", name: "ipkoil", image: ipkoil, slug: 'ipkoil' },
    { category: "bitrix", name: "pm-beton", image: pm, slug: 'pm' },
    { category: "wordpress", name: "Зининский завод бетона", image: zzb, slug: 'zzb' },
    { category: "bitrix", name: "Travel Baikal", image: olta, slug: 'olta' },
    { category: "bitrix", name: "ООО 'АР-Матинал'", image: armatinal, slug: 'armatinal' },
    { category: "bitrix", name: "Офис Центер", image: ocufa, slug: 'ocufa' },
    { category: "html5", name: "Твое дерево", image: 'https://pp.userapi.com/c844320/v844320655/e8d12/WP4zKiPacPk.jpg', slug: 'tvoederevo' },
    { category: "bitrix", name: "УКК Курсор", image: 'https://pp.userapi.com/c846221/v846221494/e34fd/tEM_DzXoDtI.jpg', slug: 'kursor' },
    { category: "html5", name: "Сауна буль-буль", image: 'https://pp.userapi.com/c847017/v847017448/e18af/5_id6iupe8s.jpg', slug: 'sauna' },
    { category: "bitrix", name: "eshop8", image: 'https://pp.userapi.com/c845419/v845419494/e6ef1/YZtrkYFpIqo.jpg', slug: 'eshop' }
];

const uniqueItems = (x, i, array) => array.indexOf(x) === i;
export const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
    uniqueItems
);

PRODUCT_CATEGORIES.push("all");
PRODUCT_CATEGORIES.sort();
