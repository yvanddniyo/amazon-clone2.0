


function getCartItems(){
db.collection("cart-items").onSnapshot((snapshot) =>{
    let totalCount = 0;
    snapshot.forEach((doc )=> {
        totalCount +=doc.data().quantity;
    });
    setCartCounter(totalCount);
  })
}
function setCartCounter(totalCount){
  // cart-items-number
  document.querySelector(".cart-items-number").innerText = totalCount
}
getCartItems()