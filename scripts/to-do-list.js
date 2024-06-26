const todoList = [];

document.querySelector('.js-btn-add').addEventListener('click', ()=>{
    addToToDoList()
})

function addToToDoList(){
    todo = document.querySelector('.input-todo-name').value;
    date = document.querySelector('.input-todo-date').value;
    todoList.push([todo,date]);
    console.log(todoList);

    refreshToDoContainer()

    clearSearchBar()
}

function refreshToDoContainer(){
    containerDiv = document.querySelector('.todo-list-container');

    let todoListHTML = '';

    // For each vs forloop

    todoList.forEach((todo,index)=>{
        const html = `<div class = 'todo-list-container-element'>
                        <p class = '.todo-element'>${todo[0]}</p> 
                        <p class = '.todo-element'>${todo[1]}</p>
                        <button class = "btn-delete js-btn-delete"')'>Delete</button> </div>`;
        todoListHTML += html;
    })

    // for(let i = 0; i<todoList.length; i++){
    //     const todo = todoList[i];
    //     const html = `<div class = 'todo-list-container-element'>
    //                     <p class = '.todo-element'>${todo[0]}</p> 
    //                     <p class = '.todo-element'>${todo[1]}</p>
    //                     <button class = "btn-delete" onclick = 'deleteElement(${i})'>Delete</button> </div>`;
    //     todoListHTML += html;
    // }

    containerDiv.innerHTML = todoListHTML;
    document.querySelectorAll('.js-btn-delete').forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            deleteElement(index);
        })
        
    })
    
}

function clearSearchBar(){
    document.querySelector('.input-todo-name').value = null;
}

function deleteElement(index){
    todoList.splice(index,1)
    refreshToDoContainer();

}