export class CarritoStorage{
    constructor(key= "cart"){
        this.key=key;
    }

    setCarrito(carrito){
        const jsonString = JSON.stringify(carrito);

        localStorage.setItem(this.key, jsonString);
    }

    getCarrito(){
        let carrito = localStorage.getItem(this.key);
        return JSON.parse(carrito);
    }


}