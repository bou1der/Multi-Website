let button = document.querySelectorAll('.ButPlaceBid');
const alertWin = document.querySelector('.NFTinfo');
const closenft = document.querySelector('.CloseNFT');
const alertContent = document.querySelector('.NFTcontent')
alertWin.remove();

button.forEach((elem)=> {
 elem.addEventListener('click', func);
})

function func(clikedbutton){
    let NFTsrc = clikedbutton.target.parentElement.parentElement.querySelector('img').getAttribute('src');
    alertContent.querySelector('.NFTselected > img').src = NFTsrc
    document.body.prepend(alertWin)
    alertWin.style.height = document.body.clientHeight + "px"
    alertContent.style.top = window.scrollY + 'px'
    setTimeout(function(){
    alertWin.style.opacity = 1;
    }, 100);
}
closenft.addEventListener('click', function(){
    alertWin.style.opacity = 0;
    setTimeout(function(){
    alertWin.remove();
    }, 200);
    
});