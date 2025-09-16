// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);
        for (const cart of carts) {
            const contDiv = document.createElement('div');
            contDiv.classList.add('cartContainer');

            const cartInfo = document.createElement('div');
            cartInfo.innerHTML =`
                <h3><strong>Id:</strong> ${cart.id}</h3>
                <p><strong>Discounted Total:</strong> ${cart.discountedTotal}</p>
                <p><strong>User Id:</strong> ${cart.userId}</p>
                <p><strong>Total:</strong> ${cart.total}</p>
                <p><strong>Total Products:</strong> ${cart.totalProducts}</p>
                <p><strong>Total Quantity:</strong> ${cart.totalQuantity}</p>
                `;
            const olProducts = document.createElement('ol');
            for (const product of cart.products) {
                let liProduct = document.createElement('li');
                liProduct.innerHTML = `
                    <p><strong>Id:</strong> ${product.id}</p>
                    <p><strong>Title:</strong> ${product.title}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Quantity:</strong> ${product.quantity}</p>
                    <p><strong>Total:</strong> ${product.total}</p>
                    <p><strong>Discount Percentage:</strong> ${product.discountPercentage}</p>
                    <p><strong>Discounted Total:</strong> ${product.discountedTotal}</p>
                `;
                let imgProduct = document.createElement('img');
                imgProduct.src = product.thumbnail;
                liProduct.appendChild(imgProduct);
                olProducts.append(liProduct);
            }

            contDiv.append(cartInfo, olProducts);
            cartsDiv.appendChild(contDiv);

        }
    });
