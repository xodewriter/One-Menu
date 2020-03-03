// Topnav - Base Container
const topnav = document.querySelector('.topnav'); // Parent
// Scroll Container
const scrollable = topnav.children[0].children[0].children[1];
// List Items
const topnavMenuALI = scrollable.children;
// Icon array
const navIcons = [ 'home.svg', 'face.svg', 'list-todo.svg', 'calendar.svg', 'mail.svg' ];


let topnavDecoration = ( e ) => {
  for( let i=0; i < topnavMenuALI.length; i++ ) {
    let LI = topnavMenuALI[i];
    let text = LI.innerHTML;
    let icon =  `<img class="icn" src="./img/${navIcons[i]}" />`;
    let arrow = `<img class="arrow" src="./img/arrow-right.svg" />`;

    LI.innerHTML = icon + text + arrow;

  }
};

topnavDecoration(); 

export { topnavDecoration }