import React from 'react'

export default function Footer() {

    const currentYear = new Date()

  return (
    <footer
    className="bg-slate-100 text-center lg:text-left shadow-[0px_1px_3px_0px_rgba(0,0,0,0.75)]">
    <div className="p-4 text-center text-neutral-700">
      {`© ${currentYear.getFullYear()} Copyright: `}
      <a
        className="text-neutral-700 font-medium"
        href="#"
      >Shopee</a>
    </div>
  </footer>
  )
}
