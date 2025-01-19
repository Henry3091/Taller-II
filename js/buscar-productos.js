// search.js
function searchProduct() {
    // Obtener el valor de búsqueda ingresado por el usuario
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    
    // Obtener todos los elementos de los productos
    const productItems = document.querySelectorAll('.product-item');

    // Recorrer todos los productos y filtrar por nombre
    productItems.forEach(item => {
        const productName = item.querySelector('.card-title').textContent.toLowerCase();
        
        // Si el nombre del producto incluye el texto de búsqueda, mostrarlo, de lo contrario, ocultarlo
        if (productName.includes(searchValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
