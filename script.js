    const card=((image,name,ingredients,price,Category) => {
     let html= `<div class="card">
    <img src=${image}>
    <h2>${name}</h2>
    <p id="price">${price}</p>
    <p id="ingredients">${ingredients}</p>
    <p id="Category">Category:${Category}</p>
    </div>
    `
    document.querySelector(".menu").insertAdjacentHTML("beforeend",html)

})
function all(){
    document.querySelector(".menu").innerHTML=""
    card("redsaucepasta.jpg","Red Sauce Pasta","Freshly made Pasta with seasonal ingredients","$100","Starters")
    card("Noodles.jpg","Noodles","Savor the unique blend of exotic spices in every bite of our specialty noodles.","$80","Starters")
    card("Manchurian.jpg","Manchurian","Delight in our irresistible Manchurian, bursting with flavor and crunch.","$40","Starters")
    card("main.jpg","Rice","Enjoy our delectable rice dish, packed with aromatic flavors and fluffy perfection.","$100","Mains")
    card("main2.jpg","Kadhai Paneer","Savor the bold flavors and aromatic spices of our tantalizing Kadhai Paneer","$100","Mains")
    card("main3.jpg","Fried Chicken","Delight in the crispy, succulent perfection of our signature fried chicken.","$100","Mains")
    card("desert1.jpg","Icecream","Indulge in the creamy delight of our handcrafted ice cream, bursting with flavor in every scoop.","$100","Deserts")
    card("desert2.jpg","Cake","Enjoy the decadent delight of our red velvet cake.","$100","Deserts")
    card("Beverage1.jpg","Punjabi Lassi","Quench your thirst with our creamy lassi.","$100","Beverages")
    card("Beverage2.jpg","Coca Cola","Sip the iconic refreshment: Coca-Cola.","$100","Beverages")
}
function Starters(){
    document.querySelector(".menu").innerHTML=""
    card("redsaucepasta.jpg","Red Sauce Pasta","Freshly made Pasta with seasonal ingredients","$100","Starters")
    card("Noodles.jpg","Noodles","Savor the unique blend of exotic spices in every bite of our specialty noodles.","$80","Starters")
    card("Manchurian.jpg","Manchurian","Delight in our irresistible Manchurian, bursting with flavor and crunch.","$40","Starters")

    
}
function Mains(){
    document.querySelector(".menu").innerHTML=""
    card("main.jpg","Rice","Enjoy our delectable rice dish, packed with aromatic flavors and fluffy perfection.","$100","Mains")
    card("main2.jpg","Kadhai Paneer","Savor the bold flavors and aromatic spices of our tantalizing Kadhai Paneer","$100","Mains")
    card("main3.jpg","Fried Chicken","Delight in the crispy, succulent perfection of our signature fried chicken.","$100","Mains")
}
function Deserts(){
    document.querySelector(".menu").innerHTML=""
    card("desert1.jpg","Icecream","Indulge in the creamy delight of our handcrafted ice cream, bursting with flavor in every scoop.","$100","Deserts")
    card("desert2.jpg","Cake","Enjoy the decadent delight of our red velvet cake.","$100","Deserts")
}
function Beverages(){
    document.querySelector(".menu").innerHTML=""
    card("Beverage1.jpg","Punjabi Lassi","Quench your thirst with our creamy lassi.","$100","Beverages")
    card("Beverage2.jpg","Coca Cola","Sip the iconic refreshment: Coca-Cola.","$100","Beverages")
}
all();
document.querySelector("#All").addEventListener("click",all)
document.querySelector("#Starters").addEventListener("click",Starters)
document.querySelector("#Mains").addEventListener("click",Mains)
document.querySelector("#Deserts").addEventListener("click",Deserts)
document.querySelector("#Beverages").addEventListener("click",Beverages)

document.querySelector("#Input").addEventListener("search",(e) => {

    if(e.target.value==="Starters"){
      Starters()
    }

    else if(e.target.value==="Mains"){
      Mains()
    }

    else if(e.target.value==="Deserts"){
      Deserts()
    }

    else if(e.target.value==="Beverages"){
      Beverages()
    }
    else if(e.target.value==="All"){
      all()
    }
  }
  )


