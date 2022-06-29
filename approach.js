

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

getUniqueProductCount(listOfProducts)
getUniquePrducts(listOfProducts);

 function getUniqueProductCount(data){
 
 let uniqueitem= {};

 for(const item of data){
   if(uniqueitem[item.productName]==undefined){ 
    uniqueitem[item.productName]=1;
   }else{
    uniqueitem[item.productName]=uniqueitem[item.productName]+1
   }
   
 }
 
 console.log(uniqueitem)
 
 }
 
 
 
 function getUniquePrducts(data){
    const newData=[];
    
   
    
    for(const item of data){
    if(newData[0]==undefined){
      newData.push(item);
    }else{
       for(var i=0; i<newData.length; i++){
          if(newData[i].productName==item.productName){
             newData[i].quantity=newData[i].quantity+item.quantity;
             break;
          }
       }
       if(i==newData.length){
        newData.push(item)
       }
    }
    }
     console.log(newData)
   
 }
 