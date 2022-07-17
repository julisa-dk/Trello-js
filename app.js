//pick the element item
const item = document.querySelector('.item')
//pick the placeholder element
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

// take each placeholder from array
for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}
function dragstart(event){
    //console.log('drag satrt', event.target)

    //start to drag the item and it and it becomes invisible in the previous place
    event.target.classList.add('hold')
    //setTimeout for the item stayed under the mouse
    setTimeout(() =>
    event.target.classList.add('hide'), 0)
}

function dragend(){
    //event.target.className = 'item'
    event.target.classList.remove('hold', 'hide')
}

// overrides the behavior that allows dragging elements
function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')  
}

function dragleave(event) {
    event.target.classList.remove('hovered')  
}

function drop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}