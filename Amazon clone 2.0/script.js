async function fetchItems(){
  const querySnapshot = await db.collection( "items").get();
  
   let items =[];

  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    items.push({
      id: doc.id,
      image:doc.data().image,
      name: doc.data().name,
      make:doc.data().make,
      rating:doc.data().rating,
      price:doc.data().price
    })
  });
  // console.log(items);
  generateItems(items)
}

// add items in firebase
function addToCart(item){
  // console.log(item);
  let cartItem =db.collection("cart-items").doc(item.id);
  cartItem.get().then(function(doc){
    if(doc.exists){
      cartItem.update({
        quantity: doc.data().quantity +1
      })
    } else{
      cartItem.set(
        {  image: item.image,
           name: item.name,
           make: item.make,
           rating: item.rating,
           price: item.price,
           quantity:1
         })
    }
  })
 
}

function generateItems(items){

  let itemsHTML = "";
  items.forEach((item)=>{
    let doc = document.createElement("div");
    doc.classList.add("main-products","mr-5" );
    doc.innerHTML =`<div class="product-image w-40 h-52 mt-4 bg-white rounded-lg p-4 flex justify-center items-center ">
    <img class=" w-32 h-24 object-contain hover:scale-[1.1]" src="${item.image}">
  </div>
  <div class="product-name text-gray-700 font-bold mt-2 text-sm">
  ${item.name}
  </div>
  <div class="product-make text-green-700 font-bold">
  ${item.make}
  </div>
  <div class="product-rating text-yellow font-bold my-1"> 
    ⭐⭐⭐⭐⭐${item.rating}
  </div>
  <div class="product-price font-bold text-green-700 text-lg">
  ${numeral(item.price).format('$0,0.00')}
  </div>
  ` 
  //  itemsHTML +=`<div class="main-products ml-2 cursor-pointer ">
   
  // </div>`
  //creating add cart button 
  let addToCartEl = document.createElement("div");

  addToCartEl.classList.add( "add-to-card","h-8", "w-28" , "bg-yellow-500","text-white","rounded", "text-md" ,"cursor-pointer","hover:bg-yellow-600","flex", "justify-center", "items-center", "mt-2");
  addToCartEl.innerHTML = "Add to card";

  addToCartEl.addEventListener("click", function(){
    addToCart(item)
  })

  doc.appendChild(addToCartEl);
  document.querySelector(".main-section-products").appendChild(doc);
  

  })

  }
fetchItems();