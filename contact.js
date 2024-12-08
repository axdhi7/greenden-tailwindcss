var sidenav =document.getElementById("sidenavbar")
var menuicon =document.getElementById("menui")
var closenav =document.getElementById("closenav")

menui.addEventListener("click",function(){
    sidenav.style.right=0

})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})