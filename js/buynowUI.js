let x = JSON.parse(localStorage.getItem('buynow'));

let price = x[0];
let image = x[1];
let title = x[2];

console.log(x)


document.getElementById('buynowimage').innerHTML = `${image}`;
document.getElementById('buynowtitle').innerHTML = `${title}`;
document.getElementById('buynowprice').innerHTML = `₹${price}`;
document.getElementById('payprice').innerHTML = `${price}`;
document.getElementById('paytotal').innerHTML = `₹${price}`;