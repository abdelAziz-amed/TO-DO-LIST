var taskInput = document.getElementById("taskInput");
var btn = document.getElementById("btn");
var alert = document.getElementById("alert");
var check = document.getElementsByClassName("icon1");
let style = document.getElementsByTagName("a");
// retrive start
localStorage.getItem("hesha");

if (localStorage.getItem("Aziz") == null) {
  var TaskArray = [];
} else {
  TaskArray = JSON.parse(localStorage.getItem("Aziz"));
  display();
}

// end retrive

// function el btn
btn.onclick = function () {
  addTask();
  display();
  clear();
  
};

// add function

function addTask() {
  if (test()){ 
  var result = {
    tasks: taskInput.value,
  };

  TaskArray.push(result);
}}

function display() {
  var cartona = "";
  for (var i = 0; i < TaskArray.length; i++) {
    cartona += `<div class="form-control p-3 habazlm mt-4 d-flex justify-content-between Taskname">
     <a id="style">${TaskArray[i].tasks}</a>
    <div>
     <i onclick="txtStyle(${i})"   class="far icon1  fa-2x fa-check-circle"></i>
    <i onclick="delet(${i})" class="far  icon2 fa-2x fa-times-circle "style="--fa-secondary-opacity: 0.20"></i>
    </div>
    
   
    </div>`;
  }
  document.getElementById("taskCartona").innerHTML = cartona;
  localStorage.setItem("Aziz", JSON.stringify(TaskArray));
}

// end add function

// start clear

function clear() {
  taskInput.value = "";
}

// end clear

// start delete

function delet(index) {
  TaskArray.splice(index, 1);
  display();

  localStorage.setItem("Aziz", JSON.stringify(TaskArray));

}

// end delete

// validation
taskInput.onkeyup=test
function test(){
  
    var taskNAme = /^[a-z 1-9]{2,20}$/;
    if (taskNAme.test(taskInput.value) == true || taskInput.value==undefined) {
      btn.removeAttribute("disabled");
      taskInput.classList.add("is-valid");
      taskInput.classList.remove("is-invalid");
      alert.classList.add("d-none");
      return true;
      
      
    }
    
    else  {
      btn.disabled = "true";
      taskInput.classList.add("is-invalid");
      taskInput.classList.remove("is-valid");
      alert.classList.remove("d-none");
      return false; /* why */
    }
  };



// true function

function txtStyle(index2) {
  style[index2].classList.add("txtStyle");
  style[index2].classList.add("text-muted");
  localStorage.setItem("hesha",(txtStyle(index2)));
}
