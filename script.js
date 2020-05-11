
// const tage = function(name) {
//   document.getElementById(name);
// }

// const rice = document.getElementById('rice');

const moving = function(name) {
  const tage = function(name) {
    document.getElementById(name);
  }

  tage(name).onmousedown = function(event) {
    document.addEventListener('mousemove',onMouseMove);
  }
  
  const onMouseMove = function(event){ 
    let x = event.clientX;
    let y = event.clientY;
    let width = tage(name).offsetWidth;
    let height = tage(name).offsetHeight;
    rice.style.top = (y - height / 2) + 'px';
    rice.style.left = (x - width / 2) + 'px';
  }
  tage(name).onmouseup = function(event) {
    let x = event.clientX;
    let y = event.clientY;
    let width = tage(name).offsetWidth;
    let height = tage(name).offsetHeight;
    let plateRect = plate.getBoundingClientRect();
    if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){
  
  }
  document.removeEventListener('mousemove', onMouseMove);
  }
}

moving(rice)



// tage(rice).onmousedown = function(event) {
//   document.addEventListener('mousemove',onMouseMove);
// }
// tage(soup).onmousedown = function(event) {
//   document.addEventListener('mousemove',onMouseMove);
// }
// tage(oshinko).onmousedown = function(event) {
//   document.addEventListener('mousemove',onMouseMove);
// }

const onMouseMove = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = rice.offsetWidth;
  let height = rice.offsetHeight;
  rice.style.top = (y - height / 2) + 'px';
  rice.style.left = (x - width / 2) + 'px';
}

rice.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = rice.offsetWidth;
  let height = rice.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove);
}