import { Link } from 'react-router-dom'
const Home = () => {
  const token = localStorage.getItem("JWT_TOKEN")
  return (
    <>
      <div className=''>
        <section className="py-20">
          <div className=" mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold">Welcome to DEV</h2>
            <p className="mt-4 mb-16 text-lg">
              Share your thoughts, stories, and ideas with the world. Join our platform today!
            </p>
            {!token ? <Link to={"/signup"} className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-md hover:bg-gray-100"> Get Started</Link> :
              <Link to={"/create-blog"} className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-md hover:bg-gray-100">Create Blog</Link>}

          </div>
        </section>

        <section className="py-20">
          <div className=" mx-auto px-6 text-center">
            <h3 className="text-3xl font-semibold text-gray-800">Why Choose DEV?</h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-indigo-600">Create Effortlessly</h4>
                <p className="mt-4 text-gray-600">Write and publish your blogs seamlessly with our easy-to-use editor.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-indigo-600">Engage Your Readers</h4>
                <p className="mt-4 text-gray-600">Connect with a growing community of readers through comments and shares.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-indigo-600">Monetize Content</h4>
                <p className="mt-4 text-gray-600">Start earning with ads and subscriptions as your blog gains popularity.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-4">
            <a href="https://twitter.com" className="hover:text-indigo-400">Twitter</a>
            <a href="https://facebook.com" className="hover:text-indigo-400">Facebook</a>
            <a href="https://instagram.com" className="hover:text-indigo-400">Instagram</a>
          </div>
          <p className="mt-4">&copy; 2024 DEV. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home