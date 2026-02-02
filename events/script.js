const targetElement = document.body;

const userDetails = {
    email: "ilkin@example.com",
    adress: "Baku, Azerbaijan"
};

const basketList = document.getElementById("basketList");
const completeOrderBtn = document.getElementById("completeOrder");
const buttons = document.querySelectorAll(".add-to-basket");

let basketItems = [];

targetElement.addEventListener("basket:add", (e) => {
    console.log("Basket add event");
    console.log(e.detail.email);
    console.log(e.detail.product);

    basketItems.push(e.detail.product);
    renderBasket();
});

targetElement.addEventListener("order:completed", (e) => {
    alert("Order completed");
    basketItems = [];
    renderBasket();
});

buttons.forEach((btn) => {
    let clickCount = 0;

    btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const product = {
            id: btn.id,
            title: btn.title
        };

        const addToBasketEvent = new CustomEvent("basket:add", {
            detail: {
                email: userDetails.email,
                adress: userDetails.adress,
                product: product
            }
        });

        targetElement.dispatchEvent(addToBasketEvent);

        clickCount++;

        if (clickCount > 5) {
            btn.setAttribute("disabled", true);
            btn.classList.add("!bg-zinc-400");
        }

        console.log("Button clicked");
    });
});

completeOrderBtn.addEventListener("click", () => {
    if (basketItems.length === 0) return;

    const orderCompletedEvent = new CustomEvent("order:completed", {
        detail: {
            email: userDetails.email,
            items: basketItems
        }
    });

    targetElement.dispatchEvent(orderCompletedEvent);
});

function renderBasket() {
    basketList.innerHTML = "";

    basketItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        basketList.appendChild(li);
    });
}
