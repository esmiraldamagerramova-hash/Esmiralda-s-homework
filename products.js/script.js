const container = document.getElementById('container')

const getAllProducts = async () => {
    try {
        const res = await fetch ("https://ilkinibadov.com/api/v1/products")
        const data = await res.json()
        renderItems(data.products);
    } catch (error) {
        console.error(error);
        
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
        img.setAttribute('src', product.images[0])
        h3.innerText = product.title
        h3.classList.add("font-bold")
        img.classList.add("size-50", "object-contain")
        p.classList.add("text-xs", "my-2")
        div.classList.add("border", "border-zinc-300", "px-3", "py-2", "rounded-md")
        span.classList.add("text-red-500" , "text-md")
        p.innerText = product.description.slice(0,55)
        span.innerText = `${product.currency}${product.price}`
        div.append(img)
        div.append(h3)
        div.append(p)
        div.append(span)
        container.append(div)
    });
}