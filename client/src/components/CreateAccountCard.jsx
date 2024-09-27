function CreateAccountCard() {
    return (
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-center text-gray-900">
                    Welcome
                </h2>
                <p className="text-sm text-center text-gray-600">
                    Create account to start journey with Blog App.
                </p>
            </div>
            <form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Full name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Continue
                    </button>
                </div>
            </form>
            <div className="flex items-center justify-between">
                <hr className="w-full border-gray-300" />
                <span className="px-4 text-sm text-gray-500">OR</span>
                <hr className="w-full border-gray-300" />
            </div>
            <div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"

                >
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                        alt="Google Icon"
                        className="w-7 h-7"
                    />
                    Continue with Google
                </button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-600">
                Already have an account?{" "}
                <a href="/auth?state=login" className="font-medium text-blue-500 hover:text-blue-600">
                    Log in
                </a>
            </p>
        </div>
    )
}

export default CreateAccountCard;