
const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-red-600">
            <form className="flex flex-col items-center justify-center">
                <input type="email" 
                placeholder="Enter your email"
                className="border-2 border-emerald-600 py-3 px-5 text-xl text-black outline-none bg-white placeholder:text-black rounded-full" />
                <input type="password" 
                placeholder="Enter your password"
                className="border-2 mt-3 border-emerald-600 py-3 px-5 text-xl text-black outline-none bg-white placeholder:text-black rounded-full" />
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login