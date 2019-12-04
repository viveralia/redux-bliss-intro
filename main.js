// import * as Redux from "redux";

// Nodes
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const todos = {
  0: {
    text: "Ir al cine",
    done: false
  },
  1: {
    text: "Cenar",
    done: true
  },
  2: {
    text: "Grabar",
    done: false
  }
};

// Functions
const drawTodos = () => {
  ul.innerHTML = "";
  for (const key in todos) {
    let li = document.createElement("li");
    li.id = key;
    const doneClass = todos[key].done && "done";
    li.innerHTML = `
        <span class="${doneClass}">${todos[key].text}</span>
        <span id="${key}">X</span>
    `;
    ul.appendChild(li);
  }
};

const setListeners = li => {
  li.addEventListener("click", e => {
    const key = e.target.id;
    todos[key].done = !todos[key].done;
    drawTodos();
  });
};

// Listeners
input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const text = e.target.value;
    const id = Object.keys(todos).length;
    todos[id] = { text, done: false };
    drawTodos();
    input.value = "";
  }
});

// Init
drawTodos();
