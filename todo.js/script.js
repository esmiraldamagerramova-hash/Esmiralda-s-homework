const homeContainer = document.getElementById("homeContainer")

const timeInfo = document.createElement("div")
timeInfo.className =
  "text-center text-xl text-black mb-4"

homeContainer.before(timeInfo)

async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await res.json()

    const fetchTime = Date.now()
    const strTime = new Date(fetchTime).toString()

    timeInfo.textContent = `Last fetch time: ${strTime}`

    renderCards(todos)
    
    todos.forEach(todo => {
      const key = `todo_${todo.id}`
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, 'true')
      }
    })
  } catch (error) {
    console.log("Fetch error:", error)
  }
}

function renderCards(todos) {
  homeContainer.innerHTML = ""

  todos.forEach(todo => {
    const card = document.createElement("div")

    card.className =
      "bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition cursor-pointer"

    card.innerHTML = `
      <h3 class="text-lg font-semibold">ID: ${todo.id}</h3>
      <p class="text-gray-700">${todo.title}</p>
      <span class="text-sm font-medium ${
        todo.completed ? "text-blue-500" : "text-red-500"
      }">
        ${todo.completed ? "True" : "False"}
      </span>
    `

    card.addEventListener("click", () => {
      window.location.href = `details.html?id=${todo.id}`
    })

    homeContainer.appendChild(card)
  })
}

getTodos()
