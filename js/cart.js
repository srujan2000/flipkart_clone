let add1 = document.getElementById('addtocart1');
let price1 = add1.previousElementSibling.attributes.value.textContent;
let image1 = add1.parentElement.previousElementSibling.previousElementSibling.innerHTML;
let title1 = add1.attributes.title.textContent;

let add2 = document.getElementById('addtocart2');
let price2 = add2.previousElementSibling.attributes.value.textContent;;
let image2 = add2.parentElement.previousElementSibling.previousElementSibling.innerHTML;
let title2 = add2.attributes.title.textContent;

let add3 = document.getElementById('addtocart3');
let price3 = add3.previousElementSibling.attributes.value.textContent;
let image3 = add3.parentElement.previousElementSibling.previousElementSibling.innerHTML;
let title3 = add3.attributes.title.textContent;

let add4 = document.getElementById('addtocart4');
let price4 = add4.previousElementSibling.attributes.value.textContent;
let image4 = add4.parentElement.previousElementSibling.previousElementSibling.innerHTML;
let title4 = add4.attributes.title.textContent;

let count=0;

let arr1 = [price1,image1,title1,"del-1"];
let arr2 = [price2,image2,title2,"del-2"];
let arr3 = [price3,image3,title3,"del-3"];
let arr4 = [price4,image4,title4,"del-4"];


function getItems(){
    let addtocart;
    if(localStorage.getItem('addtocart') === null){
        addtocart = []
    } else{
        addtocart = JSON.parse(localStorage.getItem('addtocart'));
    }
    return addtocart
}


add1.addEventListener('click',function(){
    count++;
    const items = getItems();
    items.push(arr1);
    localStorage.setItem('addtocart',JSON.stringify(items))
});

add2.addEventListener('click',function(){
    count++;
    const items = getItems();
    items.push(arr2);
    localStorage.setItem('addtocart',JSON.stringify(items))
});

add3.addEventListener('click',function(){
    count++;
    const items = getItems();
    items.push(arr3);
    localStorage.setItem('addtocart',JSON.stringify(items))
});

add4.addEventListener('click',function(){
    count++;
    const items = getItems();
    items.push(arr4);
    localStorage.setItem('addtocart',JSON.stringify(items))
});
