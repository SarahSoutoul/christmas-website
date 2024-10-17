//grab the form
const form = document.querySelector("form");
//grab the ul
const giftList = document.querySelector(".giftList");
const priceList = document.querySelector(".priceList");

//Add event on the form, which is suitable?
//click
//mouseover
//submit 

//create the event listener, call the extractFruit Function
form.addEventListener("submit", extractGiftAndPrice);


function extractGiftAndPrice(e) {
    //function that prevents the page from reloading
    //only use with submit
    e.preventDefault();
    //grab the text
    //e.target is the form, 0 is the first input, value is the text
    addGift(e.target[0].value)
    addPrice(e.target[1].value)
    e.target[0].value="";
    e.target[1].value="";

    calculateTotalPrice()
}

//Add gift to the list
 function addGift(gift) {

    //Create a li el
    const li =document.createElement("li");

    //Assign some text & format it so the first letter is capitalised
    li.innerText = gift.charAt(0).toUpperCase() + gift.slice(1);

    //Append the li to the ul
    giftList.append(li);
}

//Add gift price to the list
function addPrice(price) {

    //Create a li el
    const li = document.createElement("li");

    //Assign some text
    li.innerText = `${price} $`;

    //Append the li to the ul
    priceList.append(li);
}


//Add gift price to the list
function calculateTotalPrice() {
    let total = 0;
    const allPrices = document.querySelectorAll(".priceList li");
    
    allPrices.forEach((element) => {
        let number = Number(element.innerText.replace("$", ""))
        console.log(number)

        let h2 = document.querySelector('.total-container h2');
        total += number 
        console.log(total)
        h2.innerHTML = `Total price: ${total} $`
    })

}
