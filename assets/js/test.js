'use strict'

// get ui variables
const UIList = document.getElementById("myList");


console.log('console from test.js')

var i
//to create a new list item
function newElement(event) {
  event.preventDefault()

  const inputValue = document.getElementById("myInput").value;

  if(inputValue.trim().length === 0) {
    alert("enter a new task!");
    return;
  }

  
  // create li tag and add classes
  const li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

  li.textContent = inputValue

  // create span tag
  const span = document.createElement("span");

  // create checkbox and add attributes and classes
  const checkbox = document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  checkbox.classList.add("form-check-input","me-1")



  // create icon and add classes
  const icon = document.createElement("i")
  icon.classList.add("text-danger", "bi", 'bi-trash')

  span.appendChild(checkbox)
  span.appendChild(icon)
  li.appendChild(span)

  UIList.appendChild(li);

  // reset form value after submission
  event.currentTarget.reset();
}




     