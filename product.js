//Selecting side navbar,menuicon

var sidenav =document.getElementById("sidenavbar")
var menuicon =document.getElementById("menui")
var closenav =document.getElementById("closenav")

menui.addEventListener("click",function(){
    sidenav.style.right=0

})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

/*Product search functionality
var productcontainer=document.getElementById("product-container")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexof(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})*/
const productContainer = document.getElementById("product-container");
const search = document.getElementById("search");
const productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    const enteredValue = event.target.value.toUpperCase();
    productList.forEach((product) => {
        const productName = product.querySelector("h1").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
});