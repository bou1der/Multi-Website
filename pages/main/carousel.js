const carousel = document.querySelector('.carousel')
var direction;
var nextButton = document.querySelector('.next')
nextButton.onclick = next;
function next(){
    direction = -1;
    carousel.style.transform = "translateX("+ (-344) + "px)";
    nextButton.onclick = null;
};

var prevButton = document.querySelector('.prev')
prevButton.onclick = prev ;
function prev(){
    direction = 1;
    carousel.style.transform = "translateX("+ 344 + "px)";
    prevButton.onclick = null;

}

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
    },100)
    setTimeout(function(){
        prevButton.onclick = prev;
        nextButton.onclick = next;
    }, 150)
});