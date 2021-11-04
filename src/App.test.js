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
  it("Deberia agregar una categoria valida a una Tarea", () => {
    expect(agregarCategoria("Ir a pasear al perico", "Personal")).toEqual("Categorizado");
  });
  it("Deberia agregar una categoria valida a una Tarea", () => {
    expect(agregarCategoria("Ir a pasear al perico", "Mascotita")).toEqual("No Categorizado");
  });
  it("Deberia verificar una categoria", () => {
    expect(verificarCat("Mascotita")).toEqual(false);
  });
});

var lista = [];
var categorias = ["Trabajo", "Personal", "Quehaceres", "Familia"];
var tam = 0;

class Tarea {
  constructor(id, titulo, descripcion, categoria) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.categoria = categoria;
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
  var tarea = new Tarea(tam, titulo, descripcion, "");
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

function agregarCategoria(titulo,categoria){
  var estado = "No Categorizado";
  if( verificarCat(categoria) == true ){
    var indice = buscarTarea(titulo);
    lista[indice].categoria = categoria;
    estado = "Categorizado";
  }
  return estado;
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

var diccionarioCategorias = new Object();

// or the shorthand way
// var diccionarioCategorias = {};
// var diccionarioCategorias = {
//   Categoria: "Trabajo",
//   "one": 1,
//   1: "some value"
// };


function verificarCat(categoria){
  var verificado = false;
  var indice = categorias.indexOf(categoria);
  if(indice >= 0){
    verificado = true;
  }
  return verificado;
}