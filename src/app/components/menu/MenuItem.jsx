import React from 'react'

const MenuItem = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
            <div className='bg-gray-200 p-4 rounded-lg text-center'>
                <img src="/pizza.png" alt='pizza'/>
                <h4 className=' text-xl font-semibold my-2 '>Pizza de Pepperoni</h4>
                <p className='text-gray-500 text-sm'>Uma pizza de pepperoni, coberta com queijo derretido e generosas fatias de salame picante.</p>
                <Button className='bg-primary text-white px-6 py-2 rounded-full mt-2 outline-none'>Adicionar no carrinho R$49</Button>
            </div>
        </div>
  )
}

export default MenuItem