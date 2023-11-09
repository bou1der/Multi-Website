// document.getElementById("carousel")
// // var carouselblock = new Array();
// var carouselblock = document.querySelector(".carousel")
// // console.log(carouselblock)

// // for(let a = 0; a < carouselblock.length; a++)
// // {
// //     console.log(a)
// //     carouselblock.length[a].remove(carouselblock);

// // }
// let i = 0;
// function next()
// {
    
    
//     if(true)
//     {
//         i++
//         let firstEl = document.querySelector(".carousel > div")

//         var test = firstEl.cloneNode(true);
//         carouselblock.append(test);
//         carouselblock.append(test);
//         console.log(carouselblock)
//         let move = (344 * -i);
//         carousel.style.transform = "translateX("+ move + "px)";
//     }
    
// }
// function prev()
// {
    
//     if(true)
//     {
//         i--
//         let move = (-344 * i);
//         carousel.style.transform = "translateX("+ move + "px)";
//     }
// }
const carousel = document.querySelector('.carousel')
var direction;

document.querySelector('.next').addEventListener('click', function(){
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    carousel.style.transform = "translateX("+ (-344) + "px)";
});

document.querySelector('.prev').addEventListener('click', function(){
    direction = 1;
    carousel.style.justifyContent = 'flex-end';
    carousel.style.transform = "translateX("+ 344 + "px)";
});

carousel.addEventListener('transitionend', function(){

    if(direction == -1){
        carousel.appendChild(carousel.firstElementChild);
    }else if(direction == 1){
        carousel.prepend(carousel.lastElementChild);
    }
    
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
    setTimeout(function(){
        carousel.style.transition = 'transform 0.1s ease-in-out';
    },500)
    
});