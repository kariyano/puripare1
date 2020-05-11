const rice = document.getElementById('rice');

rice.onmousedown = function(event) {
  document.addEventListener('mousemove',onMouseMove);
}

const onMouseMove = function(event){ 
  let x = event.clientX;
  let y = event.clientY;
  let width = rice.offsetWidth;
  let height = rice.offsetHeight;
  rice.style.top = (y - height / 2) + 'px';
  rice.style.left = (x - width / 2) + 'px';
}
