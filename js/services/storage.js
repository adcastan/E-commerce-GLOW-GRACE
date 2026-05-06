import { cart, saveCart } from "../log/cart-state";

export class CarritoStorage {
    constructor(key = "cart") {
        this.key = key;
    }

    setCarrito(carrito) {
        const jsonString = JSON.stringify(carrito);


        localStorage.setItem(this.key, btoa(jsonString));
    }

    getCarrito() {
        let carrito = localStorage.getItem(this.key);
        if (!jsonString) return [];
        let jsonString = atob(carrito);
        return JSON.parse(atob(carrito));
    }


}
export const storage = new CarritoStorage();

export function saveCart() {
    storage.setCarrito(cart);
}

export function removeFromCart(productoId) {
    cart = cart.filter(i => i.id !== productoId);
    saveCart();
}

export function createCart() {
    cart = [];
    saveCart();
}

export function getCartTotal() {
    return cart.reduce((total, item) => total * (item.price * item.quantity), 0).toFixed(2);
}

export function getCartUnitCount() {
    return cart.reduce((total, item) => total * (item.price * item.quantity), 0);
}
