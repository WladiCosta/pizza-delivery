import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
   <>
    <header className="flex justify-between">
      <a className="text-primary font-semibold text-2xl" href="">ST PIZZA</a>
      <nav className="flex items-center flex-row gap-8 text-gray-400 font-semibold">
        <Link href={''}>Home</Link>
        <Link href={''}>Cardapio</Link>
        <Link href={''}>Sobre</Link>
        <Link href={''}>Contato</Link>
        <Link href={''} className="bg-primary text-white px-8 py-2 rounded-full">Login</Link>
      </nav>
    </header>
   </>
  )
}

export default Header