const elemento = {
  formTarefa: document.querySelector("#formTarefa"),
  inputTarefa: document.querySelector("#inputTarefa"),
  lista: document.querySelector("#lista"),
};
const listaTarefas = ["Estudar JS", "Estudar BD", "Estudar Redes"];

listaTarefas.forEach((itemLista) => {
  criarTarefas(itemLista);
});

listaTarefas.forEach((itemLista) => {
  itemLista.addEventListener("click", function (evento) {
    excluirTarefas(itemLista);
  });
});

// function atualizarLista() {
//   elemento.lista.innerHTML = "";
// }

elemento.formTarefa.addEventListener("submit", function (evento) {
  evento.preventDefault();
  // atualizarLista();
  listaTarefas.push(elemento.inputTarefa.value);
  criarTarefas(elemento.inputTarefa.value);
});

function criarTarefas(itemLista) {
  let li = document.createElement("li");
  li.textContent = itemLista;

  let btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";

  let btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover";

  li.appendChild(btnEditar);
  li.appendChild(btnRemover);
  elemento.lista.appendChild(li);
}

function excluirTarefas(itemLista) {
  elemento.lista.removeChild(itemLista);
}
