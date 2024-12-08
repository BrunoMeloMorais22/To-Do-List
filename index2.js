
function adicionartarefa(){
    const tarefa = document.getElementById("tarefa").value;

    if (tarefa === ""){
        alert("Digite uma tarefa, por favor!")
        return;
    }
    const li = document.createElement("li");
    li.textContent = tarefa;

    li.onclick = () => editartarefa(li)

    document.getElementById("lista").appendChild(li);
    document.getElementById("tarefa").value = "";
}

function removeritens(){
    document.getElementById("lista").innerHTML = ""
    localStorage.removeItem("tarefa")
}

function editartarefa(liElement){
    const textoAtual = liElement.textContent

    const input = document.createElement("input");
    input.type = "text";
    input.value = textoAtual;

    liElement.textContent = "";
    liElement.appendChild(input);

    input.addEventListener("blur", () => salvarEdicao(liElement, input));
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") salvarEdicao(liElement, input);
    })
}
function salvarEdicao(liElement){
    liElement.textContent = input.value || "tarefa sem nome" 
}