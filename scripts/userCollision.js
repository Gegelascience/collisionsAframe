function collisionCam() {
  var cam=document.getElementById('cam')
  cam.setAttribute('position',{x:0,y:0.5,z:50})
  console.log('Tu es mort.')
}


document.addEventListener('collisions', function(e) {collisionCam()});

