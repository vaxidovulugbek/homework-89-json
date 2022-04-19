

let elItemImg = document.querySelector("#itemimg")
let elList = document.querySelector("#list")

  let xhr = new XMLHttpRequest()
  xhr.open("GET", "https://reqres.in/api/users")

  xhr.onload = function() {
    let date = JSON.parse(xhr.responseText)
    renderHTML(date)
  }
  xhr.send()

function renderHTML (el) {
  // console.log(el.data);
  let htmlstring = ""
  el.data.forEach(element => {
    // console.log(element);
    let li = document.createElement("li")
    li.classList = "item"
    li.innerHTML = `<div id="whiteel" class="hoverel"></div>
     <button id="removeBtnn" class="removeBtn">Remove User</button>
  <div class="item__subinfo">
  <img id="itemimg" class="item__img" src="${element.avatar}" alt="">
  <div class="item__names">
    <h2 id="itemtitle" class="item__title">${element.first_name}</h2>
    <p id="itemsubtitle" class="item__subtitle">${element.last_name}</p>
  </div>
  </div>
  <div class="item__infos"><p class="item__infocom">COMPANY</p> <span class="item__subinfocom">Google</span></div>
  <div class="item__infos"><p class="item__infocom">EMAIL</p> <span class="item__subinfocom">${element.email}</span></div>
  <div class="item__infos"><p class="item__infocom">PHONE</p> <span class="item__subinfocom">2323232 23Lorem, ipsum dolor.</span></div>
  <div class="item__infos"><p class="item__infocom">WEBSITE</p> <span class="item__subinfocom">Lorem, ipsum dolor.</span></div>`
  elList.appendChild(li)
  });
  let elRemoveBtn = document.querySelectorAll(".removeBtn")
  elRemoveBtn.forEach(item => {
    console.log(item);
    item.addEventListener("click", removeEL)
  })
  function removeEL(e) {
    e.target.previousElementSibling.classList.add("hoverelw")
    const myTimeout = setTimeout(removeel, 400);
    function removeel () {
      elList.removeChild(e.target.parentElement)
    }
    }
}

































// JSON.parse(ourrequest.responseText)
// elItemImg

// let ourrequest = new XMLHttpRequest()
// ourrequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json")
// ourrequest.onload = function () {
//   let outdate = JSON.parse(ourrequest.responseText)
//   renderHTML(outdate)
// }
// ourrequest.send()

// function renderHTML (data) {
//   console.log(data);
//   let htmlstring = ""
//   data.forEach(element => {
//     htmlstring += "<p>" + element.name + " is a " + element.species + "</p>"
//   });
//   document.querySelector("#demo").innerHTML = htmlstring
// }



// let btn1 = document.querySelector("#json")
// let btn2 = document.querySelector("#json2")

// btn1.addEventListener("click", loadhttp)
// function loadhttp() {
//   let ourrequest = new XMLHttpRequest()
//   ourrequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json")

//   ourrequest.onload = function () {
//     let outdate = JSON.parse(ourrequest.responseText)
//     renderHTML(outdate)
//   }
//   ourrequest.send()
// }

// function renderHTML (data) {
//   console.log(data);
//   let htmlstring = ""
//   data.forEach(element => {
//     htmlstring += "<p>" + element.name + " is a " + element.species + "</p>"
//   });
//   document.querySelector("#demo").innerHTML = htmlstring
// }































































