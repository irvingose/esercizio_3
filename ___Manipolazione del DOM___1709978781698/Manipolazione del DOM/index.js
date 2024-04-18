//const ul = document.querySelector(`#my-ul`);

const addProduct = () => {
  const getTask = document.getElementById("inputTask");
  const newTask = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskList = document.getElementById("#my-ul");
  taskList.appendChild(newTask);
};
