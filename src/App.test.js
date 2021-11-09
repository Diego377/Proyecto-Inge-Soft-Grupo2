// import sumar from "./App.js"; 
import * as taskManager from './App.js'

describe("GESTOR DE TAREAS", () => {
  it("Debería devolver un string: ", () => {
    expect(taskManager.createBasicTask("Este es un string")).toEqual("Recibido");
  });
  it("Debería devolver el título que se ingrese: ", () => {
    expect(taskManager.createTask("Ir a pasear al perro",0)).toEqual("Ir a pasear al perro");
  });
  it("Debería agregar la tarea a una lista de tamaño infinito para el primer elemento: ", () => {
    expect(taskManager.createTask("Ir a pasear al gato",0)).toEqual("Ir a pasear al perro");
  });
  it("Debería agregar la tarea a una lista de tamaño infinito para el primer elemento: ", () => {
    expect(taskManager.createTasks(["Ir a pasear al perico", "Ver TikTok"],3)).toEqual("Ver TikTok");
  });
  it("Deberia crear una Tarea con su titulo y su descripcion", () => {
    expect(taskManager.addDescription("Ir a pasear al perico", "Llevarlo al parque a dar tres vueltas")).toEqual("Descrito");
  });
  it("Deberia modificar la descripcion de una Tarea", () => {
    expect(taskManager.changeDescription("Ir a pasear al perico", "Llevarlo al parque a dar cien vueltas")).toEqual("Cambiado");
  });
  it("Deberia agregar una categoria valida a una Tarea", () => {
    expect(taskManager.addCategory("Ir a pasear al perico", "Personal")).toEqual("Categorizado");
  });
  it("Deberia agregar una categoria valida a una Tarea", () => {
    expect(taskManager.addCategory("Ir a pasear al perico", "Mascotita")).toEqual("No Categorizado");
  });
  it("Deberia verificar una categoria", () => {
    expect(taskManager.checkCategory("Mascotita")).toEqual(false);
  });
  it("Deberia agregar una fecha limite a una Tarea", () => {
    expect(taskManager.addDeadline("Ir a pasear al perico","2025-01-01")).toEqual("Fecha Asignada");
  });
  it("Deberia modoficar una fecha limite a una Tarea", () => {
    expect(taskManager.changeDeadline("Ir a pasear al perico","2025-01-02")).toEqual("Cambiado");
  });
});
