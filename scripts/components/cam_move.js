AFRAME.registerComponent('camcol', {
    init:function(){
        
        document.addEventListener("keypress",function(e) {
            //récupération des balises html
            var cam=document.getElementById("cam");
            var el=document.getElementById("cambody");
            var pos=cam.getAttribute("position");
            var camOrientation=(cam.getAttribute("rotation").y)*2*Math.PI/360;
            //ajustement hauteur de la camera
            if (pos.y<0.5) {
                cam.setAttribute("position",'y',0.5);
            }
            //déplacement de la camera
            if (e.keyCode===38) {//up
                pos.z-=1*Math.cos(camOrientation);
                pos.x-=1*Math.sin(camOrientation);
                cam.setAttribute("position",pos);
                el.body.position.set(pos.x,pos.y,pos.z);

            }else if(e.keyCode===40){//down
                pos.z+=1*Math.cos(camOrientation);
                pos.x+=1*Math.sin(camOrientation);
                cam.setAttribute("position",pos);
                el.body.position.set(pos.x,pos.y,pos.z);
            }else if(e.keyCode===37){//left
                pos.z-=1*Math.cos(camOrientation+Math.PI/2);
                pos.x-=1*Math.sin(camOrientation+Math.PI/2);
                cam.setAttribute("position",pos);
                el.body.position.set(pos.x,pos.y,pos.z);
            }
            else if(e.keyCode===39){//right
                pos.z+=1*Math.cos(camOrientation+Math.PI/2);
                pos.x+=1*Math.sin(camOrientation+Math.PI/2);
                cam.setAttribute("position",pos);
                el.body.position.set(pos.x,pos.y,pos.z);
            //effacer le texte
            }else if (e.keyCode===9) {//tab
                var text=document.getElementById("info");
                text.setAttribute("value","");
            }

            
        })
    },

})