let list = document.querySelectorAll(".sidebar__list a");
function activeLink() {
  list.forEach((item) =>
    item.classList.remove("hovered"));
  this.classList.add("hovered")
}

list.forEach((item) =>{
item.addEventListener('click', activeLink)
})



let layoutList = document.querySelectorAll(".layout__list > li")


console.log(layoutList);
function layoutFuc() {
  layoutList.forEach((item) =>
    item.classList.remove("li_hover"));
  this.classList.add("li_hover")}

layoutList.forEach((item) => {
  item.addEventListener("click" , layoutFuc)
})



const links = document.querySelectorAll('.menu__nav ul li a');
console.log(links);
links.forEach(link => {
  link.addEventListener('click', function (event) {
    links.forEach(item => item.classList.remove('menu__nav--active'));

    event.target.classList.add('menu__nav--active');
   

  });
});
