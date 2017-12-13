var todoList = {
  todos: [],
  
  //adding an object to array
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
   // this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    //this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
   // this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    //this.displayTodos();
  },
  //switching the boolean of completeness 
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
   // this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // case 1: if everything is true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      //case 2: if something is false, make everything true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

   // this.displayTodos();
  }
};

//getting access to html elements
//var displayTodosButton = document.getElementById('displayTodosButton');
//var toggleAllButton = document.getElementById('toggleAllButton');

// run displayTodos method when clickin the displayTodosButton
//displayTodosButton.addEventListener('click', function() {
//  todoList.displayTodos(); 
//});

//run toggleAll method whrn clicking the button
//toggleAllButton.addEventListener('click', function() {
//  todoList.toggleAll();
//})

var handlers = {
  //displayTodos: function() {
    //todoList.displayTodos();
  //},
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};  

//object for displaying todo items dynamicaly
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
