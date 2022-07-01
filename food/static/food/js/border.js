var bcart = document.querySelector('#bcart');
var btotal = document.querySelector('#btotal');

// add Pizza

function addBurger(bid){
    burgerId = '#bur' + bid;
    var name = document.querySelector(burgerId).innerHTML;
    var radio = 'burger' + bid;
    var pri = document.getElementsByName(radio);
    var size,price;
    if(pri[0].checked){
        price = pri[0].value;
        size = 'M';
    }
    else{
        price = pri[1].value;
        size = 'L';
    }
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartsize = orders.length;
    
    orders[cartsize] = [name,size,price];
    localStorage.setItem('orders',JSON.stringify(orders));
    
    total = Number(total) + Number(price);
    localStorage.setItem('total',total);

    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    butto = '<div class="del" onclick="removeBurger(' + cartsize + ')">x</div>';
    btotal.innerHTML = 'Total: ' + total + ' $';
    bcart.innerHTML += '<li>'+ name + ' ' + size + ': ' +  price + ' $' + butto +'</li>';
}


function bshoppingCart(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartsize = orders.length;
    bcart.innerHTML = '';
    for(let i=0;i<cartsize;i++){
        butto = '<div class="del" onclick="removeBurger(' + i + ')">x</div>';
        bcart.innerHTML += '<li>'+ orders[i][0] + ' ' + orders[i][1] + ': ' +  orders[i][2] + ' $' + butto +'</li>';
    }
    btotal.innerHTML = 'Total: ' + total + ' $';
}


bshoppingCart();

/*
function a(){
    var total = localStorage.getItem('total');
    total = Number(total) - Number(total);
    localStorage.setItem('total',total);
}

a();*/

function removeBurger(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');

    total = Number(total)-Number(orders[n][2]);
    orders.splice(n,1);

    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;

    localStorage.setItem('orders',JSON.stringify(orders));
    localStorage.setItem('total',total);

    bshoppingCart();
}