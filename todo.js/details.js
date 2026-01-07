const detailsContainer = document.getElementById("detailsContainer")

const params = new URLSearchParams(window.location.search)
const todoId = params.get("id")

async function getTodoDetails() {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    )
    const todo = await res.json()

    renderDetails(todo)
  } catch (error) {
    console.log("Error:", error)
  }
}

function renderDetails(todo) {
  detailsContainer.innerHTML = `
    <div class="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">
      <h2 class="text-2xl font-bold">ID: ${todo.id}</h2>
      <p class="text-lg text-gray-700">${todo.title}</p>

      <span class="text-sm font-semibold ${
        todo.completed ? "text-blue-500" : "text-red-500"
      }">
        ${todo.completed ? "True" : "False"}
      </span>
    </div>
  `
}

getTodoDetails()
