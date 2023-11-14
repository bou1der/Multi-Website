
let button = document.querySelectorAll('.ButPlaceBid');
const alertWin = document.querySelector('.alert');
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
function back(){
    alertWin.remove();
}
console.log(button);
console.log(alertWin)