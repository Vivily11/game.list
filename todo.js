function addTodo(){
  todoList.innerHTML+='<li>'+todoField.value+'</li>'
  todoField.value="";
}

function addTodo() {
  todoList.innerHTML += '<li><input type="checkbox"> ' + todoField.value + '</li>';
  todoField.value = "";
}