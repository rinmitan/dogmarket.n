const sexSelect = document.getElementById("sex");
const priceSelect = document.getElementById("price");

function filterDogs() {

  const keyword = document.getElementById("search").value.toLowerCase();
  const sex = sexSelect.value;
  const price = priceSelect.value;

  document.querySelectorAll(".card").forEach(card => {

    let show = true;

    const name = card.dataset.name.toLowerCase();
    const dogSex = card.dataset.sex;
    const dogPrice = Number(card.dataset.price);

    // 犬種検索
    if (keyword && !name.includes(keyword)) {
      show = false;
    }

    // 性別検索
    if (sex && dogSex !== sex) {
      show = false;
    }

    // 価格検索
    if (price) {
      const [min, max] = price.split("-").map(Number);

      if (dogPrice < min || dogPrice > max) {
        show = false;
      }
    }

    card.style.display = show ? "block" : "none";

  });

}

document.getElementById("search").addEventListener("keyup", filterDogs);
sexSelect.addEventListener("change", filterDogs);
priceSelect.addEventListener("change", filterDogs);

const modal = document.getElementById("dogModal");

const close = document.getElementById("close");

document.querySelectorAll(".detailBtn").forEach(btn=>{

btn.addEventListener("click",function(){

const card=this.parentElement;

document.getElementById("dogImage").src=card.dataset.image;

document.getElementById("dogName").textContent=card.dataset.name;

document.getElementById("dogSex").textContent="性別："+card.dataset.sex;

document.getElementById("dogAge").textContent="月齢："+card.dataset.age;

document.getElementById("dogPrefecture").textContent="所在地："+card.dataset.prefecture;

document.getElementById("dogPrice").textContent="価格："+card.dataset.price;

document.getElementById("dogDescription").textContent=card.dataset.description;

modal.style.display="flex";

});

});

close.onclick=function(){

modal.style.display="none";

}

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

}

const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function () {
  const keyword = search.value.toLowerCase();

  cards.forEach(card => {
    const breed = card.querySelector("h3").textContent.toLowerCase();

    if (breed.includes(keyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY",
});

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
this
).then(function(){

document.getElementById("result").innerHTML =
"送信完了しました！";

document.getElementById("contact-form").reset();

}, function(error){

document.getElementById("result").innerHTML =
"送信に失敗しました";

console.log(error);

});

});

function setStatus(statusElement, status) {

    statusElement.className = "status";

    if (status === "販売中") {
        statusElement.classList.add("sale");
        statusElement.textContent = "🟢 販売中";
    }

    if (status === "商談中") {
        statusElement.classList.add("meeting");
        statusElement.textContent = "🔴 商談中";
    }

    if (status === "売約済み") {
        statusElement.classList.add("sold");
        statusElement.textContent = "⚫ 売約済み";
    }

}
