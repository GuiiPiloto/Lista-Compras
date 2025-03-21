let products = [];

document.getElementById('add-product').addEventListener('click', () => {
    const productName = document.getElementById('product-name').value.trim();
    const productValue = parseFloat(document.getElementById('product-value').value.trim());

    if (productName === '') {   
        alert('Nome do produto não pode ser vazio.');
        return;
    }

    if (isNaN(productValue) || productValue <= 0) {
        alert('Valor do produto deve ser um número maior que zero.');
        return;
    }

    products.push({ name: productName, value: productValue });
    updateProductList();
    updateTotalValue();
    clearInputs();
});

document.getElementById('clear-list').addEventListener('click', () => {
    products = [];
    updateProductList();
    updateTotalValue();
});

function updateProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.textContent = `${product.name}: R$ ${product.value.toFixed(2)}`;
        productList.appendChild(productDiv);
    });
}

function updateTotalValue() {
    const totalValue = products.reduce((total, product) => total + product.value, 0);
    document.getElementById('total-value').value = `R$ ${totalValue.toFixed(2)}`;
}

function clearInputs() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-value').value = '';
}
