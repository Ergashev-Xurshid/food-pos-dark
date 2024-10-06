let list = document.querySelectorAll(".sidebar__list a");
function activeLink() {
  list.forEach((item) =>
    item.classList.remove("hovered"));
  this.classList.add("hovered")
}

list.forEach((item) =>{
item.addEventListener('click', activeLink)})



// view
let most_list = document.querySelector(".most__list")
let view = document.querySelector('.view')


view.addEventListener("click" ,() => {
  if(view.textContent == "View All"){
  most_list.style.overflow = "scroll" ;
  most_list.style.height = "450px" ;
  view.textContent = " Back";
  } else {
    most_list.style.overflow = "hidden";  
    most_list.style.height = "200px";   
    view.textContent = "View All";      
  }
})


