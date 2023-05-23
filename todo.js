/* 
Things to add:
    - Make the 'type your task' text disappear on click
    - Make eventListener for Submit button
        - Make clicking add task to list
        - Make a message pop up and fade out instead of requiring clicking ok?
    - Make Remove Completed Tasks button work
        - Add an Are you sure? prompt
    - Add CSS on-hover styling to buttons and textbox

    - Local storage to persist through refreshes?  Cookies?
    - Create archive button/move items to separate <ul>
    - Create fade-out for tasks?
*/

let submitButton = document.querySelector("#submitButton")

submitButton.addEventListener("click", () => alert('Task Added!'))

let taskContainer = document.querySelector('fieldset')
console.log(taskContainer)

const newTask = () => {
    let newCheckbox = document.createElement('input')
    newCheckbox.type = 'checkbox'
    newCheckbox.id = 'init1'

    let newLabel = document.createElement('label')
    newLabel.setAttribute("for", "init1")
    newLabel.innerHTML = 'Test'

    let insertBreak = document.createElement('br')

    taskContainer.appendChild(newCheckbox)
    taskContainer.appendChild(newLabel)
    taskContainer.appendChild(insertBreak)
}


// function(task) {
//     console.log(task)
// }