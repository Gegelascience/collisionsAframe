
document.addEventListener('collisions', function(e) {

  if (e.detail.els[0].id!='road') {
    var cam=document.getElementById('cam')
    cam.setAttribute('position',{x:0,y:0.5,z:50})
    var textInfo=document.getElementById('info')
    if (e.target.id=='redCar') {
      textInfo.setAttribute('value','Tu es mort ! Tu as percute la voiture rouge.')
    } else {
      textInfo.setAttribute('value','Tu es mort ! Tu as percute la voiture jaune.')
    }

  }
  
});

