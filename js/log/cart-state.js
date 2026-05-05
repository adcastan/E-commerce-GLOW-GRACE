import { storage }  from "../services/storage.js"

export let cart = storage.getCarrito();

export function addToCart(product){
    cart.push(producto);
    this.saveCart();
}

export function saveCart(){
    storage.setCarrito(cart);
}