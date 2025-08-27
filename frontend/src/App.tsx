import { useState } from "react";
import LoginIllustration from "./components";
import axios from 'axios'


function App() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = () => {
    setError('')
    if (!username || !password) {
      setError('Username və password bo. ola bilmez')
      return
    }
    console.log("aaaa", typeof username)
    setLoading(true)

    axios.post('http://127.0.0.1:8000/api/wialon-get-token/', {
      username,
      password
    }).then((response) => window.location.href = `https://local.caspiannavtel.az/?token=${response.data.token}`)
      .catch((error) => console.error("Login error:", error))
      .finally(() => setLoading(false))

  };


  return (
    <>
      <div className="flex min-h-screen">


        {/* Left side - Enhanced Red Gradient with Illustration */}
        <div className="w-1/2 bg-gradient-to-br from-[#16a2db] via-[#047cab] to-[#014661] flex items-center justify-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
            <div className="absolute top-32 right-16 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/25 rounded-full"></div>
            <div className="absolute bottom-32 right-10 w-12 h-12 border border-white/30 rounded-full"></div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-700/20 to-transparent"></div>
          <LoginIllustration />

        </div>

        {/* Right side - Login Form with Red Accents */}
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-white to-red-50/30 p-8 shadow-lg">
          <div className="max-w-md w-full">
            <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#16a2db] to-[#01506f] font-bold mb-6">Login Form</h2>

            <input

              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => { setUsername(e.target.value) }}
              className="mt-4 w-full p-3 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16a2db] focus:border-[#01506f] transition-colors duration-300"
            />

            <input

              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className="mt-4 w-full p-3 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16a2db] focus:border-[#01506f] transition-colors duration-300"
            />


            <div className="flex items-center mt-4">
              <a href="/forgot-password" className="text-sm text-[#16a2db] hover:text-[#1696db] hover:underline transition-colors duration-300">
                Forgot Password?
              </a>
            </div>
            <button onClick={handleLogin} className="mt-6 w-full bg-gradient-to-r from-[#16a2db] via-[#047cab] to-[#014661] text-white py-3 rounded-md hover:from-[#0c95cb] hover:via-[#047cab] hover:to-[#014661] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Login {loading && <p>Loading...</p>}
            </button>
            {error && <p>{error}</p>}
          </div>
        </div>


      </div>



    </>
  )
}

export default App
