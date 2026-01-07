const loginBtn = document.getElementById('loginBtn')

const handleLogin = async (e) => {
    e.preventDefault()

    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value

    if (!email || !password) {
        alert('fill in all fields')
        return
    }

    try {
        const response = await fetch(
            'https://ilkinibadov.com/api/b/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            }
        )

        if (!response.ok) {
            throw new Error('login failed')
        }

        const data = await response.json()

        console.log(data)

        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)

    } catch (error) {
        console.error(error)
        alert('login failed')
    }
}

loginBtn.addEventListener('click', handleLogin)
