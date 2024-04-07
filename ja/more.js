const addProduct =()=>{
    const productField =document.getElementById('product');
    const productQuantity =document.getElementById('product-quntity');

    const product =productField.value;
    const quntity =productQuantity.value;
    productField.value =' ';
    productQuantity.value =' ';
    console.log(product,quntity);
    displayProduct(product,quntity);
    saveProductLocalStore(product,quntity);
}

const displayProduct =(product ,quntity) =>{
    const ul =document.getElementById('unorder');
    const li =document.createElement('li');
    li.innerText=`${product}-${quntity}`;
    ul.appendChild(li);
}

const card =()=>{
    let cart ={};
    const storeCard =localStorage.getItem('cart');
    if(storeCard){
        cart =JSON.parse(storeCard);
    }
    return cart;
}
const saveProductLocalStore =(product,quntity)=>{
    const cart =card();
    cart[product] =quntity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify)
    

}