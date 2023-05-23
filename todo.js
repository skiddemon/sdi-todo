/* 
Things to add:
    - Don't allow empty string input
    - Reorder so new tasks are pushed to top rather than bottom.
    - Make Remove Completed Tasks button work
        - Add an Are you sure? prompt
    - Add CSS on-hover styling to buttons and textbox

    - Local storage to persist through refreshes?  Cookies?
    - Create archive button/move items to separate <ul>
    - Create fade-out for tasks?
*/

let submitButton = document.querySelector("#submitButton")
submitButton.addEventListener("click", () => newTask())

let taskContainer = document.querySelector('fieldset')
console.log(taskContainer)



const newTask = () => {
    let userString = document.getElementById('inputBox').value

    let newCheckbox = document.createElement('input')
    newCheckbox.type = 'checkbox'
    newCheckbox.id = 'init1'

    let newLabel = document.createElement('label')
    newLabel.setAttribute("for", "init1")
    newLabel.innerHTML = userString

    let insertBreak = document.createElement('br')

    taskContainer.appendChild(newCheckbox)
    taskContainer.appendChild(newLabel)
    taskContainer.appendChild(insertBreak)
    
    document.getElementById('inputBox').value = "";
}

let isBoxChecked = document.querySelector('#checked')
console.log(isBoxChecked)

// function(task) {
//     console.log(task)
// }