const homeContainer = document.getElementById('homeContainer')
const darkmodeBtn = document.getElementById("darkmodeBtn")
let limit = 8

darkmodeBtn.addEventListener("click", () => {
    const darkmode = localStorage.getItem("darkmode")
    localStorage.setItem("darkmode", darkmode === "light" ? "dark" : "light")
    const currentMode = localStorage.getItem("darkmode")
    console.log(currentMode);
    const body = document.getElementById("body")

    if (currentMode === "light") {
            body.classList.remove("bg-slate-900", "text-white")
            body.classList.add("bg-white", "text-black")
        } else {
            body.classList.remove("bg-white", "text-black")
            body.classList.add("bg-slate-900", "text-white") }

})


const viewMoreBtn = document.getElementById('viewMoreBtn')

viewMoreBtn.addEventListener('click', () => {
    limit += 8
    getAllProducts()
})

const getAllProducts = async () => {
    try {
        const res = await fetch("https://ilkinibadov.com/api/v1/products")
        const data = await res.json()
        if (data.totalProducts <= limit) {
            viewMoreBtn.classList.add('hidden')
        }
        const limitedProducts = data.products.slice(0, limit)
        homeContainer.innerHTML = ""
        renderItems(limitedProducts)
    } catch (error) {
        console.error(error)
    }
}

getAllProducts()

const renderItems = (products) => {
    products.forEach(product => {
        const div = document.createElement("div")
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')

        img.src = product.images[0]
        img.classList.add("size-50", "object-contain", "mx-auto")

        h3.innerText = product.title
        h3.classList.add("font-bold", "mt-2",)

        p.innerText = product.description.slice(0, 55)
        p.classList.add("text-xs", "my-2")

        span.innerText = `${product.currency}${product.price}`
        span.classList.add("text-red-500", "text-md", "font-semibold")

        div.classList.add("border", "border-zinc-300", "px-3", "py-2", "rounded-md", "shadow-xl", "flex", "flex-col")

        div.append(img, h3, p, span)
        homeContainer.append(div)
    })
}

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkmode") || "light"

  const body = document.getElementById("body")

  if (savedMode === "light") {
    body.classList.remove("bg-slate-900", "text-white")
    body.classList.add("bg-white", "text-black")
  } else {
    body.classList.remove("bg-white", "text-black")
    body.classList.add("bg-slate-900", "text-white")
  }
})