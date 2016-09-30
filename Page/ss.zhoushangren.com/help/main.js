var i=document.getElementsByTagName('img');
if(i.length===0){
    return false;
}
var z=i;
for(var y=0;y<z.length;y++){
    z[y].src='loading.gif';
}
var img=new Array();
for(var x=0;x<i.length;x++){
    img[x]=new Image();
    img[x].src=i[x].src;
}
window.onload=function(){
    for(var x=0;x<i.length;x++){
        i[x].src=i[x].src;
    }
}