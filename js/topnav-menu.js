// -----------------------------------------------------
//  Topnav Menu States
//  1. Open
//  2. Closed
//  3. Viewport Height < 500px 
//  4. Viewport Height > 500px
// -----------------------------------------------------

// Variables

let open             = false; // Sets default menu open / close state
const btn            = document.querySelector('.btn');
const burger         = document.querySelector('.burger');
const body           = document.querySelector('BODY');
const mask           = document.createElement('DIV');
const topnav         = document.querySelector('.topnav');

// Button click event listener  

let topnavMenu = btn.addEventListener( 'click', ( e ) => {
  if( !open ) {
    open = true;
    btn.classList.add('open'); 
    burger.classList.add('open');
    body.classList.add('open');
    body.appendChild(mask);
    mask.classList.add('mask');
    topnav.classList.add('o-topnav'); // open topnav
  } else {
    open = false;
    btn.classList.remove('open'); 
    burger.classList.remove('open');
    body.classList.remove('open');
    body.removeChild(mask);
    topnav.classList.remove('o-topnav');
  }
});


// IF USER EXPANDS SCREEN WHILE MENU IS OPEN


let timeout;
let viewportWidth;

let setViewportWidth = () => {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

let dothis = () => {
  // Debouncing prevents spatic behaviour
  if ( !timeout ) {
    // Resets timeout var if it's not null
    // Otherwise, wait until timer is cleared
    timeout = setTimeout( () => {
      timeout = null;
      setViewportWidth(); // sets upated vw size
      if ( viewportWidth >= 768 ) {
        if ( open ) {
          open = false;
          btn.classList.remove('open'); 
          burger.classList.remove('open');
          body.classList.remove('open');
          body.removeChild(mask);
          topnav.classList.remove('o-topnav');
        }
      }
    }, 66)
  }
}

window.addEventListener( 'load', dothis );
window.addEventListener( 'resize', dothis );


export { topnavMenu }