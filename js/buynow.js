let addb1 = document.getElementById('buynow1');
let priceb1 = addb1.previousElementSibling.previousElementSibling.attributes.value.textContent;
let imageb1 = addb1.parentElement.previousElementSibling.previousElementSibling.innerHTML;
let titleb1 = addb1.attributes.title.textContent;


let addb2 = document.getElementById('buynow2');
let priceb2 = addb2.previousElementSibling.previousElementSibling.attributes.value.textContent;
let imageb2 = addb2.parentElement.previousElementSibling.previousElementSibling.innerHTML;
let titleb2 = addb2.attributes.title.textContent;

let addb3 = document.getElementById('buynow3');
let priceb3 = addb3.previousElementSibling.previousElementSibling.attributes.value.textContent;
let imageb3 = addb3.parentElement.previousElementSibling.previousElementSibling.innerHTML;
let titleb3 = addb3.attributes.title.textContent;

let addb4 = document.getElementById('buynow4');
let priceb4 = addb4.previousElementSibling.previousElementSibling.attributes.value.textContent;
let imageb4 = addb4.parentElement.previousElementSibling.previousElementSibling.innerHTML;
let titleb4 = addb4.attributes.title.textContent;



let arrb1 = [priceb1,imageb1,titleb1];
let arrb2 = [priceb2,imageb2,titleb2];
let arrb3 = [priceb3,imageb3,titleb3];
let arrb4 = [priceb4,imageb4,titleb4];


addb1.addEventListener('click',function(){
    let buynow = [];
    localStorage.setItem('buynow',JSON.stringify(arrb1));
})

addb2.addEventListener('click',function(){
    let buynow = [];
    localStorage.setItem('buynow',JSON.stringify(arrb2));
})

addb3.addEventListener('click',function(){
    let buynow = [];
    localStorage.setItem('buynow',JSON.stringify(arrb3));
})

addb4.addEventListener('click',function(){
    let buynow = [];
    localStorage.setItem('buynow',JSON.stringify(arrb4));
})
