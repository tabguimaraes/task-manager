const elemento = {
  formTarefa: document.querySelector("#formTarefa"),
  inputTarefa: document.querySelector("#inputTarefa"),
  lista: document.querySelector("#lista"),
};
const listaTarefas = ["Estudar JS", "Estudar BD", "Estudar Redes"];

function atualizarLista() {
  elemento.lista.innerHTML = "";
}

elemento.formTarefa.addEventListener("submit", function (evento) {
  evento.preventDefault();

  listaTarefas.push(elemento.inputTarefa.value);
  elemento.inputTarefa.value = "";
  atualizarLista();
});

function adicionarTarefa() {
  const elemento = {
    li: criarElemento(),
  };
  console.log(elemento.li);
  //   li.appendChild(btnEditar);
  //   li.appendChild(btnRemover);
  //   elemento.lista.appendChild(li);

  //   btnEditar.addEventListener("click", () => {
  //     let nomeTarefa = prompt("Digite o novo nome da tarefa: ");
  //     if (nomeTarefa) {
  //       listaTarefas[index] = nomeTarefa;
  //       atualizarLista();
  //     }
  //   });

  //   btnRemover.addEventListener("click", (evento) => {
  //     listaTarefas.splice(index, index);
  //     atualizarLista();
  //   });
  // });
}

adicionarTarefa();

// atualizarLista();

function criarElemento() {
  listaTarefas.forEach((itemLista, index) => {
    let li = document.createElement("li");
    li.textContent = itemLista;

    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";

    let btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
  });
  return li, btnEditar, btnRemover;
}
