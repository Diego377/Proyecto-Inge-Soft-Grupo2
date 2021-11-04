// import sumar from "./App.js"; 

describe("GESTOR DE TAREAS", () => {
  it("Debería devolver un string: ", () => {
    expect(crearTareaBasic("Este es un string")).toEqual("Recibido");
  });
  it("Debería devolver el título que se ingrese: ", () => {
    expect(crearTarea("Ir a pasear al perro",0)).toEqual("Ir a pasear al perro");
  });
  it("Debería agregar la tarea a una lista de tamaño infinito para el primer elemento: ", () => {
    expect(crearTarea("Ir a pasear al gato",0)).toEqual("Ir a pasear al perro");
  });
  it("Debería agregar la tarea a una lista de tamaño infinito para el primer elemento: ", () => {
    expect(crearTareas(["Ir a pasear al perico", "Ver TikTok"],3)).toEqual("Ver TikTok");
  });
  it("Deberia crear una Tarea con su titulo y su descripcion", () => {
    expect(asignarDescripcion("Ir a pasear al perico", "Llevarlo al parque a dar tres vueltas")).toEqual("Descrito");
  });
  it("Deberia modificar la descripcion de una Tarea", () => {
    expect(modificarDescripcion("Ir a pasear al perico", "Llevarlo al parque a dar cien vueltas")).toEqual("Cambiado");
  });
});

var lista = [];
var tam = 0;

class Tarea {
  constructor(id, titulo, descripcion) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}

function crearTareaBasic(cadena) {
  return "Recibido";
}

function crearTarea(cadena, index) {
  
  lista.push(cadena);
  return lista[index];
}

function crearTareas(cadenas, index) {
  var ind = 0;
  cadenas.forEach(tarea => {
    crearTarea(tarea, ind);
    ind++;
  });
  return lista[index];
}

function asignarDescripcion(titulo, descripcion){
  var tarea = new Tarea(titulo, descripcion, tam);
  tam++;
  var indice = lista.indexOf(titulo);
  lista[indice] = tarea;
  return "Descrito";
}

function modificarDescripcion(titulo,descripcionMod){
  var indice = buscarTarea(titulo);
  lista[indice].descripcion = descripcionMod;
  return "Cambiado";
}

function buscarTarea(titulo){
  var ind = 0;
  for (var i = 0; i < lista.lenght; i++) {
    if( lista[i].titulo == titulo){
      ind = i;
    }
 }
 return ind;
}