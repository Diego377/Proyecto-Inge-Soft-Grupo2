const Title = document.querySelector("#Title-input");
const Description = document.querySelector("#Description-input");
const Category = document.querySelector("#Category-input");

form.addEventListener("submit", (event) => {
    var ListTask = "";
    ListTask = ListTask + "\n" +  Title.value;

    print(ListTask);
});


//   "Pasear al perro" + "\n" + "Pasear al perico"
//   let task = class Task {
//   builder (Title, Description) {
//     this.Title = Title;
//     this.Description = Description;
//   }
//   // Getter
//   get Title() {
//      return this.Title();
//    }
//   // Método
//   calcArea () {
//     return this.alto * this.ancho;
//   }
// }











import { directive } from "@babel/types";

// alert("Presiona OK si estas list@ para empezar con javascript");
const task = document.querySelector('#task-input');
const form = document.querySelector('#task-manager-form');
const category = document.querySelector('#category-select');
const description = document.querySelector('#description-input');
const date = document.querySelector('#date-input');
const array = new Array();
const taskList = document.querySelector('#task-list');
// var hoy = new Date();
// const form_tiempo = document.querySelector('#saludador-con-tiempo-form');
// var hora = hoy.getHours()
// alert(hora)

// alert(nombre.value);
form.addEventListener("submit", (event) =>{
  array.push(task.value);
  event.preventDefault();
  for (let index = 0; index < array.length; index++) {
    let aux = taskList.value;
    taskList.innerHTML = aux + "<p>" + array[index] + "</p>";
  }
  // const aux = array.length - 1;
  // taskList.innerHTML = "<p>" + aux + "</p>"
  // const aux = taskList.value;
  // alert(array[0]);
  // alert("Task: " + task.value + " as "+ category.value + " with the description... "+ description.value + " and deadline date... "+ date.value);
});


