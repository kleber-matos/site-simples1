function comprar(){
   var comprou= window.document.querySelector('button')
   var res = window.document.querySelector('#res')
   
   comprou = 1 + 0;
   
   res.innerHTML = `${comprou}`

  
}

var reset = document.querySelector('#can');

reset.addEventListener("click" , function() {
    location.reload();
})