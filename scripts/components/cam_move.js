AFRAME.registerComponent('camcol', {
    init:function(){
        
        document.addEventListener("keypress",function(e) {
            var cam=document.getElementById("cam")
            var el=document.getElementById("cambody")
            var pos=cam.getAttribute("position")
            
            //ajustement hauteur de la camera
            if (pos.y<0.5) {
                cam.setAttribute("position",'y',0.5)
            }
            //déplacement de la camera
            if (e.keyCode===38) {
                pos.z-=1
                cam.setAttribute("position",pos)
                el.body.position.set(pos.x,pos.y,pos.z)

            }else if(e.keyCode===40){
                pos.z+=1
                cam.setAttribute("position",pos)
                el.body.position.set(pos.x,pos.y,pos.z)
            }else if(e.keyCode===37){
                pos.x-=1
                cam.setAttribute("position",pos)
                el.body.position.set(pos.x,pos.y,pos.z)
            }
            else if(e.keyCode===39){
                pos.x+=1
                cam.setAttribute("position",pos)
                el.body.position.set(pos.x,pos.y,pos.z)
            //effacement du texte
            }else if (e.keyCode===9) {
                var text=document.getElementById("info")
                text.setAttribute("value","")
            }

            
        })
    },

})