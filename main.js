let btn = document.querySelector(".button");

let input = document.querySelector(".input");

let tasksContainer = document.querySelector(".main-tasks");

let counter = 0;


getTaskFromLocalStorage();

btn.addEventListener("click" , () => {

    // check if the input is empty
    if (input.value !== "") {
        createTask(input.value);
        input.value = "";
        saveTaskInLocalstorage ();
    } 
})



function createTask (taskText) {

            // create the task and add it to the main-tasks div
            let div = document.createElement("div");
            div.className = "task";
            let task = document.querySelector(".task")
            tasksContainer.appendChild(div);
        
            let p = document.createElement("p");
            p.innerHTML = taskText;
            div.appendChild(p);
        
            document.querySelector(".input").value = "";
        
            let state = document.createElement("div");
            state.className = "task-state";
            div.appendChild(state);
        
            let check = document.createElement("i");
            check.className = "fa-solid fa-check check";
            state.appendChild(check)
        
            let remove = document.createElement("i");
            remove.className = "fa-solid fa-trash trash";
            state.appendChild(remove);

            // check.addEventListener("click" , () => {
            //     p.classList.toggle("done")
            // })
            
            // remove.addEventListener("click" , (e) => {
            //     e.target.parentElement.parentElement.remove();
            // })

            return div ;
}


tasksContainer.addEventListener("click" , e => {
    let taskElement = e.target.closest(".task");
    let p = taskElement.querySelector("p");

    if (e.target.classList.contains("check") || e.target.parentElement.classList.contains("task")) {
        p.classList.toggle("done");
    }

    if (e.target.classList.contains("trash")) {
        p.parentElement.remove();
        saveTaskInLocalstorage ();
    }
})

function saveTaskInLocalstorage () {
    localStorage.setItem("task" , tasksContainer.innerHTML);
}

function getTaskFromLocalStorage () {
    tasksContainer.innerHTML = localStorage.getItem("task");
}   