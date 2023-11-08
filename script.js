document.getElementById("carousel")
var carouselblock = new Array();
carouselblock = document.querySelectorAll(".carousel > .block3card");
console.log(carouselblock)

// for(let a = 0; a < carouselblock.length; a++)
// {
//     console.log(a)
//     carouselblock.length[a].remove(carouselblock);

// }

let i = 0;
function next()
{
    
    
    if(i<5)
    {
        i++
        let move = (344 * -i);
        carousel.style.transform = "translateX("+ move + "px)";
    }
    
}
function prev()
{
    
    if(i> -5)
    {
        i--
        let move = (-344 * i);
        carousel.style.transform = "translateX("+ move + "px)";
    }
}