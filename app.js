//pick all items
const items = document.querySelectorAll('.item')
//pick the placeholder element
const placeholders = document.querySelectorAll('.placeholder')

for (const item of items) {
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)

    function dragstart(event) {
        //console.log('drag satrt', event.target)
    
        //start to drag the item and it and it becomes invisible in the previous place
        event.target.classList.add('hold')
        event.target.classList.add('active')
        
        //setTimeout for the item stayed under the mouse
        setTimeout(() => event.target.classList.add('hide'), 0)
    
       // take each placeholder from array
       for (const placeholder of placeholders) {
           placeholder.addEventListener('dragover', dragover)
           placeholder.addEventListener('dragenter', dragenter)
           placeholder.addEventListener('dragleave', dragleave)
           placeholder.addEventListener('drop', drop)
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
    activeItem = Array.from(document.getElementsByClassName('active'))
    if (activeItem[0] === item) {
        if (event.target.classList.contains('item')) { 
            event.target.parentNode.append(item)
            event.target.classList.remove('hovered')
            activeItem[0].classList.remove('active')
        } else {
            event.target.append(item)
            event.target.classList.remove('hovered')   
            activeItem[0].classList.remove('active')
        }
    } 
}
}    

function dragend(event){
    //event.target.className = 'item'
    event.target.classList.remove('hold', 'hide')
}
} 