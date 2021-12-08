let x = 0;
slideright()
let main = document.querySelector('#main');
let width = main.offsetWidth;
console.log(main)
function slideright()
{
   let pictur = document.getElementById('slide')
   
   x++
   switch (x) {
       case 0:
           pictur.src = "./assets/img/books1.jpg"
          
           console.log(x)
           break;
       case 1: 
       pictur.src = "./assets/img/books2.jpg"
       console.log(x)
       break;
       case 2: 
       pictur.src = "./assets/img/books3.jpg"
       console.log(x)
       x = -1
       break;
       
   }
   setTimeout(slideright, 10000);
}

function formvalidation() {

let fname = document.getElementById('fname')
if (fname.value == "")
{
    fname.focus()
    alert("Fornavn skal udfyldes!");
    return false;
}
let ename = document.getElementById('ename')
if (ename.value == "")
{
    ename.focus()
    alert("Efternavn skal udfyldes!");
    return false;
}

let email = document.getElementById('email')
if (!email.value)
{
    alert("Email skal udfyldes!")
    email.focus()
}else {
    if (!isValidEmail(email.value)) {
    alert("Email skal udfyldes korrekt!")
    email.focus()
}
}



let check = document.getElementById('check')
if (!check.checked){

alert("Betingelserne er ikke accepteret")
return false
}
else {
    alert("sendt!")
    return true
}
 
}


function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}


function kontakt() {

    document.getElementById('main').style.height = "0px"
    setTimeout(function hide_show() {
    document.getElementById('page_one').style.display = "none"
    document.getElementById('page_two').style.display = "grid";
    document.getElementById('main').style.height = "600px"
    },1000)
    
    
    }
    function forside() {
        if (width <= 680) {
            document.getElementById('main').style.height = "0px"
        setTimeout(function hide_show() {
        document.getElementById('page_one').style.display = "grid"
        document.getElementById('page_two').style.display = "none";
        document.getElementById('main').style.height = "1800px"
        },1000)
        } else {
            document.getElementById('main').style.height = "0px"
            setTimeout(function hide_show() {
            document.getElementById('page_one').style.display = "grid"
            document.getElementById('page_two').style.display = "none";
            document.getElementById('main').style.height = "1050px"
            },1000)
  
        }
        
        
        
        }