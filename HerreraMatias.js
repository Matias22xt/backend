class Usuario {
    constructor(nombre, apellido, libros, mascotas){
      this.nombre = nombre;
      this.apellido = apellido;
     this.libros = libros;
     this.mascotas = mascotas; 
   }
 
    getFullName() {
      return `${this.nombre} ${this.apellido}`
    }
 
    addMascotas(mascotas) {
      this.mascotas.push(mascotas);
    }
 
    countMascotas() {
      return this.mascotas.length;
    }
 
    getMascotas(){
     return this.mascotas.map((mascotas) => `${mascotas}`);
    }
 
    addBook(nombre, autor) {
      this.libros.push({nombre: nombre, autor: autor});
   }
 
    getBookNames() {
     return this.libros.map((libros) => `${libros.nombre}`)
    }
  }
 
  const Matias = new Usuario("Matias", "Herrera",
    [{nombre: "Blancanieves y los siete enanitos", autor: "Jacob Grimm"},
    {nombre: "El Rey León", autor: "Chris Sanders"}
   ], ["Tigre", "León"]);
 
    console.log(Matias.getFullName());
    console.log(Matias.countMascotas());
    console.log(Matias.getMascotas());
    Matias.addMascotas("Caballo");
    console.log(Matias.countMascotas());
    console.log(Matias.getMascotas());
    Matias.addBook("Pinocho", "La bella durmiente");
   console.log(Matias.getBookNames());