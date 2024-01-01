let MainDiv=document.getElementById('MainDiv');
let ScreenWidth=Number(window.innerWidth);
let Screenheight=Number(window.innerHeight);


MainDiv.addEventListener("mouseover",function(){

    let bottom =Math.floor(Math.random()*Screenheight);
    let top =Math.floor(Math.random()*Screenheight);
    

    let right =Math.floor(Math.random()*ScreenWidth);
    let left =Math.floor(Math.random()*ScreenWidth);

    MainDiv.style.position='absolute';
    MainDiv.style.bottom=`${bottom}px`;
    MainDiv.style.top=`${top}px`;
    MainDiv.style.right=`${right}px`;
    MainDiv.style.left=`${left}px`;
})



