
  
  var productPrices = document.querySelectorAll(".unitPrice");
  var unitQuantities = document.querySelectorAll(".formInput")

  function createArrayOfTotalPricePerProduct(){
  newArray=[];
  for (var i =0;i<productPrices.length;i=i+1){
    product = productPrices[i].innerHTML*unitQuantities[i].value;
    newArray.push(product)
    }
    return newArray
  }
//This sets the Total Price of Each Product on the Webpage automatically
for(i=0;i<document.querySelectorAll(".totalPriceProduct").length;i=i+1){
document.querySelectorAll(".totalPriceProduct")[i].innerHTML= createArrayOfTotalPricePerProduct()[i]}

  
  
function deleteItem(e){

}

// function getPriceByProduct(array1,array2){for(var i =0;i<array1.length;i=i+1)

// }

// function updatePriceByProduct(productPrice, index){
// var unitPrice = parseInt(document.getElementById("unitPrice").innerHTML);
// var quantityOfItem= parseInt(document.getElementById("formInput").value);
// var totalPriceOfProductOrdered = unitPrice*quantityOfItem
// return arrayOfTotalPriceOfProductOrdered
// }

// function getTotalPrice(arrayOfPrices) {for (var i=0;i<arrayOfPrices.length;i=i+1)
//   sumOfPrices = sumOfPrices +arrayOfPrices[i]
  
// }

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };