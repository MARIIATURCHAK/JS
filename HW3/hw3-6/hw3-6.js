let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://imockups.com/storage/product/2074/tNnB5yG2k2egkyBxZjYX.png'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://kaffekapslen.media/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/y/o/yogi-tea-womens-tea-0011.jpg'
    },
];
for (let product of products) {
    document.write(`
            <div class="product-card">
                <h3 class="product-title">${product.title}. Price – ${product.price}<h3>
                <img src="${product.image}" alt="" class="product-image">
            </div>`);
}

