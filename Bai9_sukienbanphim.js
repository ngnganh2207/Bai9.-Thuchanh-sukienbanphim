function upAp(){
    let element=document.getElementById("nobita");
    element.style.top= parseInt(element.style.top) -5 +'px';
}
function  downAp(){
    let element=document.getElementById("nobita");
    element.style.top=parseInt(element.style.top) +5 +"px";/*chú ý*/
}
function leftAp(){
    let element=document.getElementById("nobita");
    element.style.left=parseInt(element.style.left) -5 +'px';
}
function  rightAp(){
    let element= document.getElementById("nobita");
    element.style.left=parseInt(element.style.left) +5 +'px';
}
function moveSelection(evt){/*chú ý (evt) bắt buộc phải nhập để gọi hàm keycode*/
    switch(evt.keyCode){
        case 37:
            leftAp();
            break;
        case 39:
            rightAp();
            break;
        case 38:
            upAp();
            break;
        case 40:
            downAp();
            break;
    }
 }
 function docReady(){
    window.addEventListener('keydown',moveSelection);
 }
