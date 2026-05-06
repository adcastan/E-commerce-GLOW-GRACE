import { obtenerProductos } from "../services/api.js";
import { addToCart, getCartUnitCount } from "../log/cart-state.js";

let allProducts = [];

const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('product-search');
const cartCounter = document.getElementById('cart-counter');

document.addEventListener('DOMContentLoaded', async () => {
    allProducts = await obtenerProductos();
    updateCartCounter();
    renderProducts(allProducts);
    setupEventListeners();
});

function renderProducts(products) {
    if (products.length === 0) {
        productsGrid.innerHTML = `<p class="lodader">No se encontraron datos</p>`
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
    <div class="sale-badge">Oferta</div>
    <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
     <div class="product-info">
        <h3>titulo</h3>
        <div class="price-container">
            <span class="old-price">${product.price * 1.25}</span>
            <span class="product-price">${product.price}</span>
        </div>
        <button class="btn-primary add-to-cart-btn">
            Agregar al carrito
        </button>
    </div>
</div>`

    ).join("");

    const buttons = document.querySelectorAll('add-to-cart-btn');
    buttons.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            const id = parseInt(btn.getAttribute('data-id'));
            const product= allProducts.find(p =>p.id ===id);
            addToCart(product);
            updateCartCounter();
        });
    })

    function updateCartCounter(){
        if(cartCounter){
           /* console.log(cartCounter.textContent)
            let counter = parseInt(cartCounter.textContent);
            cartCounter.textContent= (cartCounter+1);
            cartCounter.textContent= counter;
            */

            cartCounter.textContent=getCartUnitCount();
        }
    }

    function setupEventListeners(){
        searchInput.addEventListener('input', (e)=>filterProducts(e.target.value));
        
    }

    function filterProducts(filtro){
        const filtered = allProducts.filter(product=>{
            product.title.toLowerCase().includes(filtro.toLowerCase);
        })
        renderProducts(filtered);
    }
}

