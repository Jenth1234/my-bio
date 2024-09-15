// src/components/SearchBar.js
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    // Redirect to search results page with searchTerm query parameter
    router.push(`/search?query=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <form onSubmit={handleSearch} className="mb-6">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="p-2 w-full border-none outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  )
}
