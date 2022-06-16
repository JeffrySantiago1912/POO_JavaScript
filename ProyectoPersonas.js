//Clase Persona//
class Persona {

  constructor(nombre, apellido, edad) {
    this._nombre_ = nombre;
    this._apellido_ = apellido;
    this._edad_ = edad;
  }

  get nombre() {
    return this._nombre_;
  }

  set nombre(nombre) {
    this._nombre_ = nombre;
  }

  get apellido() {
    return this._apellido_;
  }

  set apellido(apellido) {
    this._apellido_ = apellido;
  }

  get edad() {
    return this._edad_;
  }

  set edad(edad) {
    this._edad_ = edad;
  }

  toString() {
    return "Nombre: " + this._nombre_ + " " + this._apellido_ + ", " + "Edad: " + this.edad
    
  }
}

//Clase Empleado//
class Empleado extends Persona {

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._sueldo_ = sueldo;
  }

  get sueldo() {
    return this._sueldo_;
  }

  set sueldo(sueldo) {
    this._sueldo_ = sueldo;
  }

  toString() {
    return super.toString() + ", " + "sueldo: " + this._sueldo_;
  }
}

//Clase Cliente//
class Cliente extends Persona {
    
  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._fechaRegistro_ = fechaRegistro;
  }

  get fechaRegistro() {
    return this._fechaRegistro_;
  }

  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro_ = fechaRegistro;
  }

  toString() {
    return super.toString() + ", "+ "fecha " + this._fechaRegistro_;
  }
}

//Prueba en ejecucion//
let persona1 = new Persona("Jeffry", "Santiago", 22);
console.log(persona1.toString());

console.log("\n");

let persona2 = new Empleado("Ariel", "Henriquez", 25, 55000);
console.log(persona2.toString());

console.log("\n");

let persona3 = new Cliente("Frederick", "Perez", 30, new Date());
console.log(persona3.toString());
