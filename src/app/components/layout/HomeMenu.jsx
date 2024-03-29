import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { MenuItemData } from '@/app/constantes/data'

const HomeMenu = () => {
  return (
    <section className=''>
        <div className='absolute justify-start h-full w-full left-0 right-0'>
            <div className='absolute left-0 top-[-70px] text-left z-[-10]'>
                <Image src={'/sallad1.png'} alt='sallad' width={109} height={189} />

            </div>
            <div className='absolute top-[-100px] right-0 z-[-10]'>
                <Image src={'/sallad2.png'} alt='sallad' width={107} height={195} />

            </div>
        </div>

        <div className='text-center my-[80px]'>
            <h3 className='uppercase text-gray-400 font-semibold leading-4'>Finalizar Pedido</h3>
            <h2 className='text-4xl text-primary font-bold italic'>Cardápio</h2>
        </div>
      
        <div className='flex justify-center items-center h-screen my-[90vh] mx-[5vh] sm:my-10 relative'> 
                <div className='absolute grid grid-cols-1 sm:grid-cols-3 gap-6 z-[20]' >
                {MenuItemData.map((item, index) => (
                        <div className='w-auto h-auto flex flex-col px-2 py-2 bg-gray-200 rounded-lg items-center justify-center '  key={index}>

                            <Image
                                className='' 
                                src={item.src}
                                width={item.width}
                                height={item.height}
                            />
                            <h4 className='text-sm sm:text-xl sm:font-semibold my-2' >{item.pizza_name}</h4>
                            <p className='text-gray-500 text-sm py-1 px-2 mx-auto'>{item.description}</p>
                            <Button className='bg-primary text-white px-6 py-2 rounded-full m-4 outline-none'>Adicionar no carrinho R${item.price}</Button>

                        </div>
                    ))}
                </div>
        </div>
        
    </section>
  )
}

export default HomeMenu