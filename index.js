const inputTask = document.querySelector(".input");
const buttonAdd = document.querySelector(".boton-agregar");
const containerTask = document.querySelector(".container");

class Item{
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }

    crearDiv(nuevaTarea){

        const inputItem= document.createElement("input");
        inputItem.type="text";
        inputItem.disabled=true;
        inputItem.classList.add("item-input");
        inputItem.value=nuevaTarea;
        const item = document.createElement("div")
        item.classList.add("item");

        const botonEditar = document.createElement("button");
        botonEditar.innerHTML=`<i class="fa-solid fa-lock"></i>`;
        botonEditar.classList.add("boton-editar");

        const botonRemover = document.createElement("button");
        botonRemover.innerHTML=`<i class="fa-solid fa-trash"></i>`;
        botonRemover.classList.add("boton-remover");

        const divContenedor = document.createElement("div");
        divContenedor.classList.add("div-contenedor");

        item.appendChild(inputItem);
        divContenedor.appendChild(item);
        divContenedor.appendChild(botonEditar);
        divContenedor.appendChild(botonRemover);

        containerTask.appendChild(divContenedor);

        botonEditar.addEventListener("click", ()=>{
           inputItem.disabled = !inputItem.disabled;
           if(inputItem.disabled===false){
            botonEditar.innerHTML=`<i class='fas fa-lock-open'></i>`;
           }else{
                botonEditar.innerHTML=`<i class="fa-solid fa-lock"></i>`;

           }
            


        });

        botonRemover.addEventListener("click", ()=>{
            divContenedor.remove();
        })

    }
}

function chequearInput(){
    if(inputTask.value.trim()!==""){
        const task = new Item(inputTask.value);
    }else{
        alert("la tarea no puede estar vacía");
    }

    inputTask.value="";
}

buttonAdd.addEventListener("click", chequearInput);

inputTask.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {  // Verifica si la tecla presionada es "Enter"
        chequearInput();  // Llama a la función chequearInput
    }
});