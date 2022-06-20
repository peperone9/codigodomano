 // menu no mobile->
const butmobile = document.getElementById('button_mob');
function Menutoggle(){
    const nav = document.getElementById('header');
    nav.classList.toggle('active');
}
butmobile.addEventListener("click", Menutoggle);
// slider->
let count=1;
document.getElementById("radio1").checked = true;
setInterval(function(){
    nextimg();
}, 5000)
function nextimg(){
    count++;
    if (count>5){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}