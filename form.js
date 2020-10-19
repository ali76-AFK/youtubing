let search = document.querySelector('.site');
let btn = document.querySelector('.btn');
let back = document.querySelector('.sear');
let rot = document.querySelector('.rot');
let side = document.querySelector('.side');


let x =0, i=0;



btn.addEventListener('click',function(e) {
    e.preventDefault();
    x = search.value;
    console.log(x);
    if(x=='monster'){
        window.location.href = "https://www.youtube.com/watch?v=r_0JjYUe5jo&ab_channel=LyricalLemonade";
    }
    else if(x=='blackpeas'){
        window.location.href = "https://www.youtube.com/watch?v=WpYeekQkAdc&list=WL&index=59&ab_channel=BlackEyedPeasVEVO";
    }
    else if(x=='mamati-mash'){
        window.location.href = 'https://www.youtube.com/watch?v=OohmXquy62M&list=WL&index=55&ab_channel=RemixTM';
    }
    else if(x=='كارتون'){
        window.location.href = "https://www.youtube.com/watch?v=jwegtZyW9W0&list=WL&index=57&ab_channel=ElMegheny";
    }
    else {
        window.location.href = "https://www.youtube.com/";
    }

})

// switch(search.value){
//     case 1:{
//         console.log('ali');
//         // window.location.replace("https://forum.arduino.cc/index.php?topic=509923.0");
//         }break;
//     case 2:{
//         console.log('mee');
//         // window.location.replace("https://forum.arduino.cc/index.php?topic=509923.0");
//         }break;    
// }

// if(x==1){
//     window.location.href = "https://forum.arduino.cc/index.php?topic=509923.0";
// }
// else if(x==2){
//     window.location.href = "https://forum.arduino.cc/index.php?topic=509923.0";
// }

rot.addEventListener('click', function(){
    i = i+1;
    console.log(i);
    if(i%2==1){
        rot.classList.remove('rot');
        rot.classList.add('rver');
        // side.style.right = '0%';
        side.classList.remove('hide');
    }
    else if(i%2==0){
        rot.classList.remove('rver');
        rot.classList.add('rot');
        // side.style.left = '0%';
        side.classList.add('hide');
    }
})



