const pixels =document.getElementById('pixels-text');

const getWidth=()=>
{
    let width=document.documentElement.clientWidth;
    pixels.innerText=`${width}px`;
   
    /*para buscar algo dentro */
}
getWidth();//para entrar automaticamente, inicializarlo
/*evento*/

window.addEventListener('resize', getWidth);
