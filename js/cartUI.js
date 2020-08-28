let price = 0;

function showItems(){
    const items = getItems();
    
    if(items === null || items.length === 0){

       document.querySelector('.nothing').style.display = 'none';
       document.getElementById('cart').innerHTML = `
       <div class="show-nothing">
           <h1 class=" back2shop">Nothing in the cart</h1>
           <a href="index.html" class="btn btn-warning back2shop">Back to Shopping</a>
       </div>
       
       `
    //    document.getElementById('cart').style.display = <h1 class="text-center">Nothing in cart</h1>;
    //    document.getElementById('.cart').innerHTML = `
    //    <div class="container">
    //        <div class="row">
    //          <div class="col-md-6 mx-auto m-auto">
    //              <h3>Nothing in the cart</cart>
    //          </div>
    //        </div>
    //    </div>
    //    `
       document.querySelector('.main-footer').style.marginTop = '500px';

    }else{
    items.forEach(function(item){
         display(item)
    })
}
};

function getItems(){
    let addtocart;
    if(localStorage.getItem('addtocart') === null){
        addtocart = null;
    } else{
        addtocart = JSON.parse(localStorage.getItem('addtocart'));
    }
    return addtocart
}

let total='';
let pricetotal = 0;
function display(item){
    let image = `${item[1]}`;
    let title = `${item[2]}`;
    let price = `${item[0]}`;
    let iddel = `${item[3]}`;

    let totalprice = parseInt(price);

    pricetotal+=totalprice;

    const list = document.querySelector('.cart-items');

    total+= `<div class="col-md-4" id="addcartimage">
    ${image}
    </div>
    <div class="col-md-5 pt-4">
      <big id="addcarttitle">${title}</big>
     <b><p id="addcartprice" style="font-size: 20px;">₹${price}</p></b>
     <a href="#" id=${iddel} class="btn btn-danger" title="delete" >Delete</a>
    </div>
    <div class="col-md-3 pt-4">
        Delivery in 1 - 3 days
        Free <del>₹40</del>
    </div>
    `
   
   list.innerHTML = total;
}

showItems();

document.getElementById('payprice').innerHTML = `${pricetotal}`;
document.getElementById('paytotal').innerHTML = `₹${pricetotal}`;

function storeDel(target){
    let items = getItems();

    items.forEach(function(item,index){
       if(item[3] === target){
          items.splice(index,1);
       }

       localStorage.setItem('addtocart',JSON.stringify(items));
    });

    // showItems();
    location.reload();
}

//deleting a function
document.querySelector('.cart-items').addEventListener('click',function(e){

    // console.log(e.target.attributes.title.textContent);
    let titleName= e.target.attributes.title.textContent;

    if(titleName === "delete"){
       storeDel(e.target.id)
    }

    e.preventDefault();
})


