const colorone=document.getElementById('colorone');
const colortwo=document.getElementById('colortwo');
const bodybg=document.getElementById('bodybg');
function setbgcolor(){
    bodybg.style.background=`linear-gradient(to right,${colorone.value},${colortwo.value})`;

}
colorone.addEventListener('input',setbgcolor);
colortwo.addEventListener('input',setbgcolor);