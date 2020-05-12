const rice = document.getElementById('rice');
const soup = document.getElementById('soup');
const oshinko = document.getElementById('oshinko');
const sarada = document.getElementById('sarada');
const egg = document.getElementById('egg');




rice.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove0);
}
soup.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove1);
}
oshinko.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove2);
}
sarada.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove3);
}
egg.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove4);
}

const onMouseMove0 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = rice.offsetWidth;
  let height = rice.offsetHeight;
  rice.style.top = (y - height / 2) + 'px';
  rice.style.left = (x - width / 2) + 'px';
}
const onMouseMove1 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = soup.offsetWidth;
  let height = soup.offsetHeight;
  soup.style.top = (y - height / 2) + 'px';
  soup.style.left = (x - width / 2) + 'px';
}
const onMouseMove2 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = oshinko.offsetWidth;
  let height = oshinko.offsetHeight;
  oshinko.style.top = (y - height / 2) + 'px';
  oshinko.style.left = (x - width / 2) + 'px';
}
const onMouseMove3 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = sarada.offsetWidth;
  let height = sarada.offsetHeight;
  sarada.style.top = (y - height / 2) + 'px';
  sarada.style.left = (x - width / 2) + 'px';
}
const onMouseMove4 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = egg.offsetWidth;
  let height = egg.offsetHeight;
  egg.style.top = (y - height / 2) + 'px';
  egg.style.left = (x - width / 2) + 'px';
}

rice.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = rice.offsetWidth;
  let height = rice.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove0);
}

soup.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = soup.offsetWidth;
  let height = soup.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove1);
}
oshinko.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = oshinko.offsetWidth;
  let height = oshinko.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove2);
}
sarada.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = sarada.offsetWidth;
  let height = sarada.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove3);
}
egg.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = egg.offsetWidth;
  let height = egg.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove4);
}