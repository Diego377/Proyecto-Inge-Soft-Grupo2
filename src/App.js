var list = [];
var categories = ["Trabajo", "Personal", "Quehaceres", "Familia"];
var tam = 0;

class Task {
  constructor(id, title, description, category, deadline) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.deadline = deadline;
  }


  
  createBasicTask(nameTask){
    return "Recibido";
  }
  createTask(nameTask, index){
    var task = new Task(index,nameTask, "", "","")
    list.push(task);
    return list[index].title;
  }
  
  createTasks(nameTasks, index){
    var ind = 0;
    nameTasks.forEach(task => {
      createTask(task, ind);
      ind++;
    });
    return list[index].title;
  }
  
  addDescription(nameTask, description){
    var task = new Task(tam, nameTask, description, "");
    tam++;
    var index = list.indexOf(nameTask);
    list[index] = task;
    return "Descrito";
  }
  
  changeDescription(title,newDescription){
    var index = findTask(title);
    list[index].description = newDescription;
    return "Cambiado";
  }
  
  addCategory(title,category){
    var state = "No Categorizado";
    if( checkCategory(category) == true ){
      var index = findTask(title);
      list[index].category = category;
      state = "Categorizado";
    }
    return state;
  }
  
  findTask(title){
    var ind = 0;
    for (var i = 0; i < list.lenght; i++) {
      if( list[i].title == title){
        ind = i;
      }
   }
   return ind;
  }
  
  addDeadline(title,deadline){
    var state;
    var index = findTask(title);
    list[index].deadline = deadline;
    state = "Fecha Asignada";
    return state;
  }
  
  changeDeadline(title,newDeadline){
    var index = findTask(title);
    list[index].deadline = newDeadline;
    return "Cambiado";
  }
  
  //var categoryDictionary = new Object();
  // or the shorthand way
  // var diccionarioCategorias = {};
  // var diccionarioCategorias = {
  //   Categoria: "Trabajo",
  //   "one": 1,
  //   1: "some value"
  // };
  
  
  checkCategory(category){
    var check = false;
    var index = categories.indexOf(category);
    if(index >= 0){
      check = true;
    }
    return check
  }
}

export function classTast(id, title, description, category, deadline) {
  let tmp = new Task(id, title, description, category, deadline);
  return tmp;
}

export function createBasicTask(nameTask){
  return "Recibido";
}

export function createTask(nameTask, index){
  var task = new Task(index,nameTask, "", "","")
  list.push(task);
  return list[index].title;
}

export function createTasks(nameTasks, index){
  var ind = 0;
  nameTasks.forEach(task => {
    createTask(task, ind);
    ind++;
  });
  return list[index].title;
}

export function addDescription(nameTask, description){
  var task = new Task(tam, nameTask, description, "");
  tam++;
  var index = list.indexOf(nameTask);
  list[index] = task;
  return "Descrito";
}

export function changeDescription(title,newDescription){
  var index = findTask(title);
  list[index].description = newDescription;
  return "Cambiado";
}

export function addCategory(title,category){
  var state = "No Categorizado";
  if( checkCategory(category) == true ){
    var index = findTask(title);
    list[index].category = category;
    state = "Categorizado";
  }
  return state;
}

export function findTask(title){
  var ind = 0;
  for (var i = 0; i < list.lenght; i++) {
    if( list[i].title == title){
      ind = i;
    }
 }
 return ind;
}

export function addDeadline(title,deadline){
  var state;
  var index = findTask(title);
  list[index].deadline = deadline;
  state = "Fecha Asignada";
  return state;
}

export function changeDeadline(title,newDeadline){
  var index = findTask(title);
  list[index].deadline = newDeadline;
  return "Cambiado";
}

//var categoryDictionary = new Object();
// or the shorthand way
// var diccionarioCategorias = {};
// var diccionarioCategorias = {
//   Categoria: "Trabajo",
//   "one": 1,
//   1: "some value"
// };


export function checkCategory(category){
  var check = false;
  var index = categories.indexOf(category);
  if(index >= 0){
    check = true;
  }
  return check;
}



// import * as gestor from './gestorTareas.js'