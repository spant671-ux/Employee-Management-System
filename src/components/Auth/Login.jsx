import { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)

    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
            <form 
            className="flex flex-col items-center justify-center"
            onSubmit={(e) => {
              submitHandler(e)
            }}>
              
                <input type="email"
                required 
                placeholder="Enter your email"
                value = {email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-full" />

                <input type="password" 
                required
                placeholder="Enter your password"
                value = {password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                className="border-2 mt-3 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-full" />

                <button className="border-none mt-7 bg-emerald-600 py-3 px-5 text-xl outline-none rounded-full">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login