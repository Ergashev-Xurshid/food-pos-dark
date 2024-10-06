// select item 
let list = document.querySelectorAll(".sidebar__list a");
function activeLink() {
  list.forEach((item) =>
    item.classList.remove("hovered"));
  this.classList.add("hovered")
}

list.forEach((item) =>{
item.addEventListener('click', activeLink)})


const links = document.querySelectorAll('.menu__nav ul li a');
console.log(links);
links.forEach(link => {
  link.addEventListener('click', function (event) {
    links.forEach(item => item.classList.remove('menu__nav--active'));

    event.target.classList.add('menu__nav--active');
    let text = event.target.textContent.toLowerCase();

    cards.forEach(card => {
      const h3 = card.querySelector('h3');
      const cardTitle = h3.innerHTML.toLowerCase();

      if (text === "hot dishes") {
        card.style.display = 'block';
      }
      else if (cardTitle.includes("soup") && (text == "soup")) {
        card.style.display = 'block';
      } else if (cardTitle.includes("noodles") && (text == "grill")) {
        card.style.display = 'block';
      }
      else {
        card.style.display = "none"
      }
    });

  });
});

//searchInput 

const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');


searchInput.addEventListener('input', function (e) {
  const inputValue = e.target.value.toLowerCase();

  cards.forEach(card => {
    const h3 = card.querySelector('h3');
    const cardTitle = h3.innerHTML.toLowerCase();

    if (cardTitle.includes(inputValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});


const orders_list = document.querySelector(".orders_list");
let i = 0;

cards.forEach(card => {
  card.addEventListener("click", (e) => {
    const h3 = card.querySelector('h3');
    const img = card.querySelector('img').outerHTML;

    const existingItem = [...orders_list.children].find(item => {
      const itemTitle = item.querySelector('h4').textContent;
      return itemTitle === h3.textContent;
    });

    if (existingItem) {
      const howSpan = existingItem.querySelector('#how');
      i++;
      howSpan.textContent = i; 
      const priceParagraph = existingItem.querySelector('p');
      priceParagraph.textContent = `$ ${i * 2.29}`; 
    } else {
      i++;

      let orItem = document.createElement("DIV");
      orItem.classList.add("orders_item");
      orItem.innerHTML = `
        <div class="row">
          <div class="row">
            ${img}
            <div class="orders_item_card">
              <h4>${h3.textContent}</h4> 
              <span>$2.29</span>
            </div>
          </div>
          <div class="row">
            <span id="how">${i}</span>
            <p>$ ${i * 2.29}</p> 
          </div>
        </div>
        <div class="orders__massege">
          <input type="text" placeholder="Please, just a little bit spicy only.">
          <button class="remove-button"><i style="color: #ff7ca3;" class="fa-solid fa-trash"></i></button>
        </div>
      `;

      i = 0
      orders_list.appendChild(orItem);


      const removeButton = orItem.querySelector('.remove-button');
      removeButton.addEventListener('click', () => {
        const howSpan = orItem.querySelector('#how');
        let howValue = parseInt(howSpan.textContent); 

        if (howValue > 1) {
          howValue--; 
          howSpan.textContent = howValue;
          const priceParagraph = orItem.querySelector('p');
          priceParagraph.textContent = `$ ${howValue * 2.29}`; 
        } else {
          orItem.remove(); 
          i = 0
        }
      });
    }
  });

});


let elCard =  document.querySelectorAll(".payment__card")
elCard.forEach((item) => {
  item.addEventListener("click" , (e) => {

    elCard.forEach((dell) => dell.classList.remove("pay_clik"))

    item.classList.add("pay_clik") 
  })
})

const orders = document.getElementById("orders")
const payment = document.getElementById("payment")
const ordersList = document.querySelector(".orders_list")

let orSub = orders.querySelector("button")
orSub.addEventListener("click" , () => {

  if (ordersList.children.length > 0) {
    orders.style.display = "none"
    payment.style.display = " block"
  }

})

let pay_cancel = document.querySelector(".pay_cancel")
pay_cancel.addEventListener("click" , () => {
  orders.style.display = "block"
  payment.style.display = " none"
})


