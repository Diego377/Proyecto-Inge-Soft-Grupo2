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
});

var lista = [];

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

