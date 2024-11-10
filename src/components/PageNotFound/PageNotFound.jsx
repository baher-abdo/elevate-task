import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <main class="grid h-screen place-items-center bg-white px-6 lg:px-8">
  <div class="text-center">
    <p class="text-2xl font-semibold text-emerald-400">404</p>
    <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Page not found</h1>
    <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <Link to="/" className="flex w-full justify-center rounded-md bg-emerald-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Go back home</Link>
    </div>
  </div>
</main>
  )
}
