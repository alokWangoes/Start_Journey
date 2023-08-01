export const Login = () => {
    return (
      <div className=" flex content-center  justify-center my-20">
        <div className="flex h-2/5 w-3/4 rounded-xl bg-transparent border-[#9CBAE4]   bg-[#DCB4F5] flex-col border-2 content-center justify-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-5xl leading-9 tracking-tight font-Aclonica text-[#827BA9]">
              Log in
            </h2>
            <p className="mt-10 ml-0 text-center text-[#3D318A] font-Roboto font-normal">
              Dont you have an account?
              <a
                href="#"
                className="m-2 font-semibold leading-6 text-[#E8608A] underline hover:text-indigo-500 font-Roboto"
              >
                Sign up
              </a>
            </p>
          </div>
  
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 font-Roboto text-[#3D318A]"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Please enter your email"
                    required
                    className="block font-Roboto w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: p-3 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block font-Roboto text-sm font-medium leading-6 text-[#3D318A]"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Please enter your password"
                    required
                    className="block font-Roboto w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: p-3 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
  
                <div className="mt-5 flex font-Roboto">
                  <input type="checkbox" />
                  <label className="text-[#827BA9] text-sm">
                    
                    Remember for 30 days
                  </label>
                  <div className="text-sm ml-16">
                    <a href="#" className="font-Roboto text-[#827BA9] underline ">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
  
              <div className="w-1/4 m-auto">
                <button
                  type="submit"
                  className="flex items-center  justify-center rounded-md bg-gradient-to-tl from-[#AD7FB1] to-[#8981B8] w-24 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  font-Aclonica"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  