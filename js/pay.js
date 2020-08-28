let checkPe = document.querySelector("#phonePe");
let checkUPI = document.querySelector("#UPI")
let phone = document.getElementById("enNumber");
let UPI = document.getElementById("enUPI");


checkPe.addEventListener('click',()=>{
    
    if(checkPe.checked){
        phone.innerHTML = `
        <input class="form-control" id="checkPe" type="number" placeholder="Enter Phone Number">
        <a id="checkPhone-btn" class="btn btn-secondary">Generate OTP</a>
        <div class="invalid-feedback">
                 Enter a valid Number
        </div>
        `

        document.getElementById('checkPhone-btn').addEventListener('click',correctPe);

     function correctPe(){
          let phoneNum = document.getElementById('checkPe');
          const re = /^[0-9]{10}$/;

          if(!re.test(phoneNum.value)){
              phoneNum.classList.add('is-invalid');
          }else{
            phoneNum.classList.remove('is-invalid');
          }
       }
    } 
});

checkUPI.addEventListener('click',()=>{
      
    if(checkUPI.checked){
      UPI.innerHTML = `
         <form class="form-inline">
         <input id="checkUPI" class="form-control pr-2" type="text" placeholder="Enter Pin"> 
         <a id="checkUPI-btn" class="btn btn-secondary">Pay</a>
         </form>
         <div class="invalid-feedback">
                                          Enter a valid Number
          </div>
      `
       
      document.getElementById('checkUPI-btn').addEventListener('click',correctUPI);

      function correctUPI(){
        let phoneUPI = document.getElementById('checkUPI');
        const re = /^[0-9]{4,6}$/;

        if(!re.test(phoneUPI.value)){
            phoneUPI.classList.add('is-invalid');
        }else{
          phoneUPI.classList.remove('is-invalid');
        }
     }
  } 
});

let cvv = document.getElementById('cvc');

cvv.addEventListener('blur',checkCVV);

function checkCVV(){
    const re = /^[0-9]{3}$/;

    if(!re.test(cvv.value)){
        cvv.classList.add('is-invalid');
    }else{
        cvv.classList.remove('is-invalid');
    }
}

let cardNum = document.getElementById('cardNum');

cardNum.addEventListener('blur',checkCard);

function checkCard(){
    const re = /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}[ ]?$/;

    if(!re.test(cardNum.value)){
        cardNum.classList.add('is-invalid');
    }else{
        cardNum.classList.remove('is-invalid');
    }
}

let expire = document.getElementById('expiry');

expire.addEventListener('blur',checkDate);

function checkDate(){
    const re = /[0-1]{1}[0-9]{1}\/[0-9]{2}$/;

    if(!re.test(expire.value)){
        expire.classList.add('is-invalid');
    }else{
        expire.classList.remove('is-invalid');
    }
    
}