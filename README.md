# Trello-js
1. Create html file
2. Create styles in the .css
3. Create app.js
4. Pick the element 'item' by querySelector
5. Add to the .html parameter draggable="true" for moving item-element
6. Add into .js eventListener with parameters dragstart and dragend
7. Create functions for each event (whén this event happens)
8. Create the item invisible by classList.add when we start to drag it (event.target) 
9. Add 'hold' in .css
10. Add class 'hide' for close element
11. Add setTimeout for make the item under the mouse
12. Create placeholde in .js
13. Add eventListener for placeholder
14. Create functions for each event dragenter, dragleave, drop
15. Create functionality for 5 tasks: create veriable 'items'
16. Add a loop for items and in the function dragstart() add the class 'active' for dragged item
17. Create array activeItem in the drop()
18. Add condition and add this item by event.target.parentNode.append(item) to the placeholder