// src/app/page.js
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <main className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Welcome to Our Shop</h1>
        <p className="text-gray-700 mb-6">Find the best products for you!</p>

        <ul>
          <li className="mb-4">
            <Link href="/product/1">
              <a className="block p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
                Product 1
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/product/2">
              <a className="block p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
                Product 2
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/product/3">
              <a className="block p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
                Product 3
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
