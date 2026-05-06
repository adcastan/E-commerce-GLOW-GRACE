import { storage } from "../services/storage.js"

export let cart = storage.getCarrito();

export function addToCart(product) {
    let item = cart.find(i => i.id === product.id);

    if (item) {
        item.quantity + -1;

    } else {
        item = { ...product, quantity=1 };
        cart.push(producto);

    }

    this.saveCart();
}

export function saveCart() {
    storage.setCarrito(cart);
}

