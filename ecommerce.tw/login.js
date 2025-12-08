const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const loginBtn = document.getElementById('loginBtn')
const rememberMe = document.getElementById('rememberMe') 

let userData = {}

emailInput.addEventListener("input", (e) => {
    userData = {
        ...userData,
        email: e.target.value
    }
})

passwordInput.addEventListener("input", (e) => {
    userData = {
        ...userData,
        password: e.target.value
    }
})

const loginUser = async () => {
    try {
        const res = await fetch("https://ilkinibadov.com/api/v1/auth/login",{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-type": "application/json"
            }
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)

            if(rememberMe.checked){
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("refreshToken", data.refreshToken)

            } else{
            sessionStorage.setItem("accessToken", data.accessToken)
            sessionStorage.setItem("refreshToken", data.refreshToken)

            }

            window.location.href = "http://127.0.0.1:5501/homepage.html"
        } else {
            alert("Email or password is incorrect!")
        }
    } catch (error) {
        console.error(error);
    }
}

loginBtn.addEventListener("click", loginUser)
