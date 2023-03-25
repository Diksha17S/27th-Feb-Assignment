const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');
const btn3=document.getElementById('btn3');
const box=document.getElementById('box');

btn1.addEventListener('click',button1);
btn2.addEventListener('click',button2);
btn3.addEventListener('click',button3);
let i=0;
box.innerHTML=i;

function button1(){
   
    // for( let i=0;i<=0;i--){
    //  btn2.value=i;
    //  btn2.appendChild(box);


    // }
    // let i=0;
    // if(i<0){
        // btn1.value=i--;
        // btn1.value=--i;
        i--;
        box.innerHTML=i;
    }
        

//     }
//     else if(i>0){
//         btn2.value=i++;
//         box.innerHTML=i;
//     }
//     else {
//         btn3.value=0;
//         box.innerHTML=i;
//     }
// }
// console.log(button1);

function button2(){
    i++;
    box.innerHTML=i;
}
function button3(){
    i=0;
    box.innerHTML=i;
}