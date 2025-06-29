

let slide_1 = document.querySelector(".slide_1"),
    slide_2 = document.querySelector(".slide_2"),
    slide_3 = document.querySelector(".slide_3"),
    slide_4 = document.querySelector(".slide_4"),
    slide_5 = document.querySelector(".slide_5"),
    showingbig = document.querySelector(".showing_big"),
    p_name = document.querySelector(".product_name"),
    p_price = document.querySelector(".product_price"),
    p_quotes = document.querySelector(".product_quotes");

function slide1() {
    slide_1.style = `background:none;`
    slide_2.style = `background:rgba(255,255, 255, 0.5);`
    slide_3.style = `background:rgba(255,255, 255, 0.5);`
    slide_4.style = `background:rgba(255,255, 255, 0.5);`
    slide_5.style = `background:rgba(255,255, 255, 0.5);`
    showingbig.innerHTML = `<img src="./image/chicken biriyani.png" alt="">`
    p_name.innerText = "Mutton Biriyani"
    p_price.innerText = `$15`
    p_quotes.innerText = "Savor the rich aroma, bold spices , and melt-in-your-mouth goodness of our authentic, handcrated biriyani!"
}
function slide2() {
    slide_2.style = `background:none;`
    slide_1.style = `background:rgba(255,255, 255, 0.5);`
    slide_3.style = `background:rgba(255,255, 255, 0.5);`
    slide_4.style = `background:rgba(255,255, 255, 0.5);`
    slide_5.style = `background:rgba(255,255, 255, 0.5);`
    showingbig.innerHTML = `<img src="./image/chilli chicken.png" alt="">`
    p_name.innerText = "Chilli Chicken"
    p_price.innerText = `$30`
    p_quotes.innerText = "Rice, spice, and everything nice – that’s what Biryani is made of! 🌶️🍚"
}
function slide3() {
    slide_3.style = `background:none;`
    slide_2.style = `background:rgba(255,255, 255, 0.5);`
    slide_1.style = `background:rgba(255,255, 255, 0.5);`
    slide_4.style = `background:rgba(255,255, 255, 0.5);`
    slide_5.style = `background:rgba(255,255, 255, 0.5);`
    showingbig.innerHTML = `<img src="./image/mundi biriayani.png" alt="">`
    p_name.innerText = "Mandhi Biriyani"
    p_price.innerText = `$45`
    p_quotes.innerText = "They say home is where the heart is—I say home is where the biryani is made by me! 🏡🍚"
}
function slide4() {
    slide_4.style = `background:none;`
    slide_2.style = `background:rgba(255,255, 255, 0.5);`
    slide_3.style = `background:rgba(255,255, 255, 0.5);`
    slide_1.style = `background:rgba(255,255, 255, 0.5);`
    slide_5.style = `background:rgba(255,255, 255, 0.5);`
    showingbig.innerHTML = `<img src="./image/hydrabad dum biriyani.png" alt="">`
    p_name.innerText = "Hydrabad Dum Biriyani"
    p_price.innerText = `$25`
    p_quotes.innerText = `The dish was first made by the Nizam’s
     chefs using locally produced rice, saffron, and premium
      quality meat and spices. The recipe has since been passed down generations,
       and Hyderabadi Biryani has become a world-famous dish.`
}
function slide5() {
    slide_5.style = `background:none;`
    slide_2.style = `background:rgba(255,255, 255, 0.5);`
    slide_3.style = `background:rgba(255,255, 255, 0.5);`
    slide_4.style = `background:rgba(255,255, 255, 0.5);`
    slide_1.style = `background:rgba(255,255, 255, 0.5);`
    showingbig.innerHTML = `<img src="./image/chettinaad chicken.png" alt="">`
    p_name.innerText = "Chettinad Cheicken"
    p_price.innerText = `$55`
    p_quotes.innerText = "Biryani made by me: a labor of love served on a plate. Let’s savor the goodness together! 😊🍲"
}



let prod_1 = document.querySelector(".prod-1"),
    biriyanis = document.querySelector(".biriyani"),
    chickenrices = document.querySelector(".chickenrice"),
    friess = document.querySelector(".fries"),
    combos = document.querySelector(".combo"),
    categoryone = document.querySelector(".category1"),
    // headd=document.querySelector("head")
    prod_imgs = document.querySelector(".category2");
// document.head.appendchild(afterstyle);
// console.log(categoryone);

// console.log(headd);
// headd.innerHTML.appendchild(afterstyle)
// console.log(headd);


if (window.innerWidth<460) {
    // alert("jjjj")
     biriyanis.innerHTML=`<img class="btn-imag-js btn-imag-js-1" src="./image/hydrabad dum biriyani.png" alt="">`
    chickenrices.innerHTML=`<img class="btn-imag-js btn-imag-js-2" src="./image2/chicken rice.png" alt="">`
    friess.innerHTML=` <img class="btn-imag-js btn-imag-js-3" src="./image2/zhtrgsk4-removebg-preview.png" alt="">`
    combos.innerHTML=`<img class="btn-imag-js btn-imag-js-4" src="./image2/chicken rice.png" alt="">`
}
// console.log(document.headd.appendchild(afterstyle))
function biriyani() {
    prod_1.innerHTML = `<div>
                         <h1>Hydrabadi Dum Biriyani</h1>
                                <p>Savor the rich aroma, bold spices , and melt-in-your-mouth goodness of our
                                    authentic, handcrated biriyani!</p>
                                <div class="home_order">
                                    <button><i class="fa-solid fa-greater-than"></i>
                                        <p> Order Now </p>
                                    </button>
                                </div>
                            </div>
                           
                            <div class="prod-img">
                                <img class="prod-img-child" src="./image/hydrabad dum biriyani.png" alt="">
                            </div>`

    biriyanis.style = ` background: none;color: white;`
    chickenrices.style = `background-color:white; color:black`
    friess.style = `background-color:white; color:black`
    combos.style = `background-color:white; color:black`
    // prod_imgs.style=`  height: 80%;`
    categoryone.classList.add('button1');
    categoryone.classList.remove('button2');
    categoryone.classList.remove('button3');
    categoryone.classList.remove('button4');

    if (window.innerWidth<460) {
         biriyanis.innerHTML =`<img class="btn-imag-js btn-imag-js-1" src="./image/hydrabad dum biriyani.png" alt=""> biriyani `
          chickenrices.innerHTML=`<img class="btn-imag-js btn-imag-js-2" src="./image2/chicken rice.png" alt="">`
    friess.innerHTML=` <img class="btn-imag-js btn-imag-js-3" src="./image2/zhtrgsk4-removebg-preview.png" alt="">`
    combos.innerHTML=`<img class="btn-imag-js btn-imag-js-4" src="./image2/chicken rice.png" alt="">`


    biriyanis.style=`display: flex;flex-direction: column;border:border-radius:10px;justify-content:center;align-items:center;
    background: none;color: white;
    `
    }

}


function chickenrice() {
    prod_1.innerHTML = `<div>
                         <h1>Yangzhou Fried Rice</h1>
                                <p>Young Chow fried rice, holds a cherished position in the family of Chinese fried rice dishes.
                                 in many different ways</p>
                                <div class="home_order">
                                    <button><i class="fa-solid fa-greater-than"></i>
                                        <p> Order Now </p>
                                    </button>
                                </div>
                            </div>
                            
                            <div class="prod-img">
                                <img class="prod-img-child" src="./image2/chicken rice.png" alt="">
                            </div>`
    chickenrices.style = ` background: none;color: white;`
    biriyanis.style = `background-color:white; color:black`
    friess.style = `background-color:white; color:black`
    combos.style = `background-color:white; color:black`
    //  prod_imgs.style=`  height: 80%;`
    categoryone.classList.add('button2');
    categoryone.classList.remove('button1');
    categoryone.classList.remove('button3');
    categoryone.classList.remove('button4');

 if (window.innerWidth<460) {
         biriyanis.innerHTML =`<img class="btn-imag-js btn-imag-js-1" src="./image/hydrabad dum biriyani.png" alt=""> `
          chickenrices.innerHTML=`<img class="btn-imag-js btn-imag-js-2" src="./image2/chicken rice.png" alt=""> chicken_rice`
    friess.innerHTML=` <img class="btn-imag-js btn-imag-js-3" src="./image2/zhtrgsk4-removebg-preview.png" alt="">`
    combos.innerHTML=`<img class="btn-imag-js btn-imag-js-4" src="./image2/chicken rice.png" alt="">`


    chickenrices.style=`display: flex;flex-direction: column;border:border-radius:10px;justify-content:center;align-items:center;
    background: none;color: white;
    `
    }
}

function fries() {
    prod_1.innerHTML = `<div><h1>Karaage Chilly <br> chicken</h1>
                                <p> Karaage is made using bite-size pieces of chicken thighs
                                 marinated in soy sauce, sake, mirin.</p>
                                <div class="home_order">
                                    <button><i class="fa-solid fa-greater-than"></i>
                                        <p> Order Now </p>
                                    </button>
                                </div>
                            </div>
                           
                            <div class="prod-img">
                                <img class="prod-img-child" src="./image2/zhtrgsk4-removebg-preview.png" alt="">
                            </div>`
    friess.style = ` background: none;color: white;`
    biriyanis.style = `background-color:white; color:black`
    chickenrices.style = `background-color:white; color:black`
    combos.style = `background-color:white; color:black`
    //  prod_imgs.style=`transform:translateY(30px)`
    categoryone.classList.add('button3');
    categoryone.classList.remove('button2');
    categoryone.classList.remove('button1');
    categoryone.classList.remove('button4');

    
 if (window.innerWidth<460) {
         biriyanis.innerHTML =`<img class="btn-imag-js btn-imag-js-1" src="./image/hydrabad dum biriyani.png" alt=""> `
          chickenrices.innerHTML=`<img class="btn-imag-js btn-imag-js-2" src="./image2/chicken rice.png" alt=""> `
    friess.innerHTML=` <img class="btn-imag-js btn-imag-js-3" src="./image2/zhtrgsk4-removebg-preview.png" alt=""> fries`
    combos.innerHTML=`<img class="btn-imag-js btn-imag-js-4" src="./image2/chicken rice.png" alt="">`


    friess.style=`display: flex;flex-direction: column;border:border-radius:10px;justify-content:center;align-items:center;background: none;color: white;
    `
    }
}

function combo() {
    prod_1.innerHTML = `<div>
                         <h1> Fried Rice + Coke (refill)</h1>
                                <p>Young Chow fried rice, holds a cherished position in the family of Chinese fried rice dishes.
                                 It’s considered the  different ways</p>
                                <div class="home_order">
                                    <button><i class="fa-solid fa-greater-than"></i>
                                        <p> Order Now </p>
                                    </button>
                                </div>
                            </div>
                     
                            <div class="prod-img">
                                <img class="prod-img-child" src="./image2/chicken rice.png" alt="">
                            </div>`
    combos.style = ` background: none;color: white;`
    biriyanis.style = `background-color:white; color:black`
    friess.style = `background-color:white; color:black`
    chickenrices.style = `background-color:white; color:black`
    //  prod_imgs.style=`  height: 80%;`
    categoryone.classList.add('button4');
    categoryone.classList.remove('button2');
    categoryone.classList.remove('button3');
    categoryone.classList.remove('button1');
   
 if (window.innerWidth<460) {
         biriyanis.innerHTML =`<img class="btn-imag-js btn-imag-js-1" src="./image/hydrabad dum biriyani.png" alt=""> `
          chickenrices.innerHTML=`<img class="btn-imag-js btn-imag-js-2" src="./image2/chicken rice.png" alt=""> `
    friess.innerHTML=` <img class="btn-imag-js btn-imag-js-3" src="./image2/zhtrgsk4-removebg-preview.png" alt=""> `
    combos.innerHTML=`<img class="btn-imag-js btn-imag-js-4" src="./image2/chicken rice.png" alt=""> combo`


    combos.style=`display: flex;flex-direction: column;border:border-radius:10px;justify-content:center;align-items:center;
    background: none;color: white;
    `
    }
}



let ans_plus = document.querySelectorAll(".ans-plus"),
    hidd_p = document.querySelectorAll(".hidd-p-comm");


// console.log(ans_plus);
// console.log(hidd_p);


function ansvisib(valuee) {
    for (let anss = 0; anss < hidd_p.length; anss++) {
        if (valuee === anss) {

            // console.log(anss);

            hidd_p[valuee].style = "display:block ;transition: all 4s;"
        }
        else {
            hidd_p[anss].style = "display:none"
        }

    }
}




// let mandi_div_h1=document.querySelector(".mandi-div-h1-detail"),
//  mandi_div_p=document.querySelector(".mandi-div-p-detail"),
//  mandi_img=document.querySelector(".mandi-img");

const names = ["MANDHI", "AMBUR", "AWADHI", "DINDIGUL"];
name2 = ["Chicken Mandi Biryani is served on giant plates; heaps of fluffy orange rice garnished with almonds,raisins, cashew and fried onions.",
    "In South India especially in Tamil Nadu, Ambur Biryani would be the one that a lot of people love the most. A biryani is a delightful treat with tons of flavors!",
    "the Nawabs of Awadh, who were of the Persian origin. Their royal dishes were aromatic and delicious, flavored with spices, herbs, nuts, plant extracts and saffron.",
    "For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates. "
]
 
 image_mandi_changing=[`<img class="mandi-img-child" src="./image/mundi biriayani.png" alt="">`,
    ` <img class="mandi-img-child" src="./image/chettinaad chicken.png" alt="">`,
    `<img class="mandi-img-child" src="./image2/awadhi-removebg-preview.png" alt="">`,
    ` <img class="mandi-img-child" src="./image/hydrabad dum biriyani.png" alt="">`
 ]
const mandi_div_h1 = document.querySelector(".mandi-div-h1-detail"),
    mandi_div_p = document.querySelector(".mandi-div-p-detail"),
    mandi_img = document.querySelector(".mandi-img");
let index = 0;
function showName() {
    //  Fade in
    mandi_div_h1.style.opacity = 1;
    mandi_div_p.style.opacity = 1;
    mandi_img.style.opacity = 1;

    //nikkum for 2s (after fade-in)
    setTimeout(() => {
        // Step 3: Fade out
        mandi_div_h1.style.opacity = 0;
        mandi_div_p.style.opacity = 0;
        mandi_img.style.opacity = 0;
    }, 4000); // 4s la maraiyum

    //  After full invisible, change name and repeat
    setTimeout(() => {
        index = (index + 1) % names.length;
        mandi_div_h1.innerText = names[index];

         index = (index) % name2.length;
        mandi_div_p.innerText = name2[index];

        index = (index) % image_mandi_changing.length;
        mandi_img.innerHTML = image_mandi_changing[index];
        showName(); // Loop
    }, 4500); // 4.5s la athuvey visible agum 
}

showName();
// changing_cont();




let split_child1=document.querySelector(".split-child1"),
split_child2=document.querySelector(".split-child2"),
split_child3=document.querySelector(".split-child3"),
split_child4=document.querySelector(".split-child4");

split_main=document.querySelector(".split-main")
 function splitdiv(){
        split_child2.style= `left:-50%`
         split_child3.style= `left:100%`
         split_main.style=`border-radius:0px`
         setTimeout(() => {
             split_main.style=`border-radius:40px`
            split_child1.style=`left:0%`
            split_child4.style=`left:50%`

         }, 500);
 }


 let menu_view=document.querySelector(".fa-eye"),
 navmenu=document.querySelector(".nav_menu");
//  navmenu2=true;
 

 function menuview() {
    // alert("fun")
    if (menu_view.classList.contains("fa-eye") && window.innerWidth >= 767)  {
        navmenu.style= `left:60%;display:flex; `
        // navmenu2=false
        menu_view.classList.remove("fa-eye")
    menu_view.classList.add("fa-eye-slash")
                
    }
    else if (menu_view.classList.contains("fa-eye-slash") && window.innerWidth >=600) {
          navmenu.style= `left:100%;display:none; `
        // navmenu2=true
        menu_view.classList.add("fa-eye");
    menu_view.classList.remove("fa-eye-slash")
    } 
    else if (menu_view.classList.contains("fa-eye") &&  window.innerWidth < 767)  {
        navmenu.style= `left:30%;display:flex; `
        // navmenu2=false
        menu_view.classList.remove("fa-eye")
    menu_view.classList.add("fa-eye-slash")
                
    }
     else if (menu_view.classList.contains("fa-eye-slash") && window.innerWidth <767) {
          navmenu.style= `right:0%;display:none;`
        // navmenu2=true
        menu_view.classList.add("fa-eye");
    menu_view.classList.remove("fa-eye-slash")
    } 
 }



 let review_scroll_var=document.querySelector(".review-main")
 innerhtmll_review=review_scroll_var.innerHTML
 review_scroll_var.innerHTML=innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review + innerhtmll_review  ;


let triggered = false; // ✅ To avoid running multiple times

function triggerOn600() {
  if (window.innerWidth < 600 && !triggered  ) {
    // ✅ Function triggered only once
    triggered = true;
  navmenu.innerHTML=`
      <div class="nav_loc">
                <div>
                    <label for="loc">Location</label> <br />
                    <select name="Location" class="loc_sel" name="Location" id="loc">
                        <option class="option" value="0">Order Now</option>
                        <option class="option" value="1">chennai</option>
                        <option class="option" value="2">Bengalore</option>
                        <option class="option" value="3">Tiruvannamalai</option>
                    </select>
                </div>
                <p style="display: inline;">delivery</p>
            </div>
                 <p>Search</p>
                <p>Outlets</p>
                <p>Menu</p>
                <p>Bulk orders</p>
                <p>Book A Table</p>
                 <div class="order">
                <button>Order Now</button>
            </div>
     `
     menu_view.style=`right:-25%`
     document.querySelector(".order1").style=`display:none`
     document.querySelector(".nav_loc").style=`display:none`
   

  }

  // Reset trigger if screen gets bigger again
   else if (window.innerWidth>= 600 && triggered) {
    triggered = false;
     navmenu.innerHTML=`
     
                 <p>Search</p>
                <p>Outlets</p>
                <p>Menu</p>
                <p>Bulk orders</p>
                <p>Book A Table</p>
     `
      menu_view.style=`right:-1%`
     document.querySelector(".order1").style=`display:flex`
     document.querySelector(".nav_loc").style=`display:flex`

     
  }
}
triggerOn600()
setInterval(triggerOn600, 0);

// function detectScreenSize() {
//   const width = window.innerWidth;
//   triggerOn600(width);
// }
//  console.log(width);
 
// ✅ Run on page load
// detectScreenSize();

// ✅ Run on resize
// window.addEventListener("resize", detectScreenSize);

//    navmenu.innerHTML=`
//       <div class="nav_loc">
//                 <div>
//                     <label for="loc">Location</label> <br />
//                     <select name="Location" class="loc_sel" name="Location" id="loc">
//                         <option class="option" value="0">Order Now</option>
//                         <option class="option" value="1">chennai</option>
//                         <option class="option" value="2">Bengalore</option>
//                         <option class="option" value="3">Tiruvannamalai</option>
//                     </select>
//                 </div>
//                 <p style="display: inline;">delivery</p>
//             </div>
//                  <p>Search</p>
//                 <p>Outlets</p>
//                 <p>Menu</p>
//                 <p>Bulk orders</p>
//                 <p>Book A Table</p>
//      `
// console.log(window.innerWidth);

    //   if (menu_view.classList.contains("fa-eye"))  {
    //     navmenu.style= `left:30%;display:flex;`
    //     navmenu2=false
    //     menu_view.classList.remove("fa-eye")
    // menu_view.classList.add("fa-eye-slash")
                
    // }
    // else if (menu_view.classList.contains("fa-eye-slash")) {
    //       navmenu.style= `left:100%;display:none;`
    //     navmenu2=true
    //     menu_view.classList.add("fa-eye");
    // menu_view.classList.remove("fa-eye-slash")
    // }
//      document.querySelector(".nav_loc").style=`display:none`