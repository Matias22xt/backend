const Conteiner =require("./clase.js")
const productos = new Conteiner("./productos.json")

async function ejecutar(){
    const objeto3={
        nombre: "Portillo Malbec",
        precio: 920,
        thumbnail:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/portillo-malbecc1-03c650826290e6aee715949251039734-480-0.jpg"

    }
    const objeto2={
        nombre: "Johnnie Walker Red Label 750 Ml",
        precio: 5.925,
        thumbnail:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/red-label-750-ml1-2cc5c0a70f3e86311016262835929050-1024-1024.jpg"

    }
    const objeto1={
        nombre: "Fernet Branca 1 Lt",
        precio: 1.800,
        thumbnail:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/fernet-fernet1-91d5664bb3aba475a316190256095692-1024-1024.jpg"

    }
await productos.getById(1).then(id=>console.log(id))

}
ejecutar()