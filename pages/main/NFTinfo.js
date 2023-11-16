
let button = document.querySelectorAll('.ButPlaceBid');
const alertWin = document.querySelector('.NFTinfo');
const closenft = document.querySelector('.CloseNFT')
alertWin.remove();

button.forEach((elem)=> {
 elem.addEventListener('click', func);
})

document.body.addEventListener('scroll', () =>{
    var offset = window.scrollY
    console.log(offset)
})
function func(){
    alertWin.style.top = window.pageYOffset
    document.body.append(alertWin)
}
closenft.addEventListener('click', function(){
    alertWin.remove();
});
   

console.log(button);
console.log(alertWin)