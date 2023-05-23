/* 
Things to add:
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

let isBoxChecked = document.querySelector('#removerButton')
isBoxChecked.addEventListener("click", () => taskRemover())


let id_increent = 0

const newTask = () => {
    let userString = document.getElementById('inputBox').value

    if (userString === "") {
        alert('Please input text before clicking "Add to List!"')
    } else {
        ++id_increent

        let newCheckbox = document.createElement('input')
        newCheckbox.type = 'checkbox'
        newCheckbox.className = 'checkbox'
        newCheckbox.id = 'Task' + id_increent

        let newLabel = document.createElement('label')
        newLabel.setAttribute("for", 'Task' + id_increent)
        newLabel.innerHTML = userString

        let insertBreak = document.createElement('br')

        taskContainer.appendChild(newCheckbox)
        taskContainer.appendChild(newLabel)
        taskContainer.appendChild(insertBreak)
        
        document.getElementById('inputBox').value = "";
}}

const taskRemover = () => {
    //document.querySelector('#checked')
    console.log('isBoxChecked')
}