const rice = document.getElementById('rice');
const soup = document.getElementById('soup');
const oshinko = document.getElementById('oshinko');
const sarada = document.getElementById('sarada');
const egg = document.getElementById('egg');
const nattou = document.getElementById('nattou');
const nori = document.getElementById('nori');
const katubushi = document.getElementById('katubushi');
const mayopote = document.getElementById('mayopote');
const shouyu = document.getElementById('shouyu');
const sanshou = document.getElementById('sanshou');
const noriPlate = document.getElementById('nori-plate');
const salmon = document.getElementById('salmon');




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
nattou.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove5);
}
nori.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove6);
}
katubushi.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove7);
}
mayopote.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove8);
}
shouyu.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove9);
}
sanshou.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove10);
}
noriPlate.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove11);
}
salmon.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove12);
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
const onMouseMove5 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = nattou.offsetWidth;
  let height = nattou.offsetHeight;
  nattou.style.top = (y - height / 2) + 'px';
  nattou.style.left = (x - width / 2) + 'px';
}
const onMouseMove6 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = nori.offsetWidth;
  let height = nori.offsetHeight;
  nori.style.top = (y - height / 1.5) + 'px';
  nori.style.left = (x - width * 2.5)+ 'px';
}
const onMouseMove7 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = katubushi.offsetWidth;
  let height = katubushi.offsetHeight;
  katubushi.style.top = (y - height / 1.5) + 'px';
  katubushi.style.left = (x - width * 2.5) + 'px';
}
const onMouseMove8 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = mayopote.offsetWidth;
  let height = mayopote.offsetHeight;
  mayopote.style.top = (y - height / 2) + 'px';
  mayopote.style.left = (x - width * 2.5) + 'px';
}
const onMouseMove9 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = shouyu.offsetWidth;
  let height = shouyu.offsetHeight;
  shouyu.style.top = (y - height / 1.5) + 'px';
  shouyu.style.left = (x - width * 2.5) + 'px';
}
const onMouseMove10 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = sanshou.offsetWidth;
  let height = sanshou.offsetHeight;
  sanshou.style.top = (y - height / 1.5) + 'px';
  sanshou.style.left = (x - width * 2.5) + 'px';
}
const onMouseMove11 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = noriPlate.offsetWidth;
  let height = noriPlate.offsetHeight;
  noriPlate.style.top = (y - height / 2) + 'px';
  noriPlate.style.left = (x - width * 1.5) + 'px';
}
const onMouseMove12 = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = salmon.offsetWidth;
  let height = salmon.offsetHeight;
  salmon.style.top = (y - height / 2) + 'px';
  salmon.style.left = (x - width * 2) + 'px';
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

nattou.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = nattou.offsetWidth;
  let height = nattou.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove5);
}

nori.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = nori.offsetWidth;
  let height = nori.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove6);
}

katubushi.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = katubushi.offsetWidth;
  let height = katubushi.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove7);
}

mayopote.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = mayopote.offsetWidth;
  let height = mayopote.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove8);
}

shouyu.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = shouyu.offsetWidth;
  let height = shouyu.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove9);
}

sanshou.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = sanshou.offsetWidth;
  let height = sanshou.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove10);
}
noriPlate.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = noriPlate.offsetWidth;
  let height = noriPlate.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove11);
}
salmon.onmouseup = function(event) {
  let x = event.clientX;
  let y = event.clientY;
  let width = salmon.offsetWidth;
  let height = salmon.offsetHeight;
  let plateRect = plate.getBoundingClientRect();
  if((x >= plateRect.left && x<=(plateRect.left + plateRect.width)) && (y >= plateRect.top && y <= (plateRect.top + plateRect.height))){

}
document.removeEventListener('mousemove', onMouseMove12);
}



