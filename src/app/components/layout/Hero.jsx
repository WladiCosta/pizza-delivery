import Image from 'next/image'
import React from 'react'
import {Button} from "@nextui-org/button"
import Aright from '../icons/ar-right'

const Hero = () => {
  return (
    
    <section className='hero'>
        <div className='py-12'>
            <h1 className='text-4xl font-semibold'>Tudo fica  melhor com uma<span className='text-primary ml-1'>Pizza</span></h1>
            <p className='my-6 text-gray-500 text-sm'>Pizza é a peça que faltava para completar cada dia,
             uma alegria de vida simples mas deliciosa</p>

            <div className='flex gap-4 text-sm'>
                <Button className='flex gap-2 bg-primary rounded-full text-white uppercase px-4 py-2'>
                    peça agora
                    <Aright />
                </Button>
                <Button className='flex gap-2 py-2 text-gray-600 font-semibold'>
                    Saiba Mais
                    <Aright />
                </Button>
            </div>

        </div>
        <div className='relative hidden sm:block'>
            <Image 
            src={"/pizza.png"} 
            alt={"pizza"} 
            layout={'fill'} 
            objectFit={'contain'} />
        </div>
    </section>
    
  )
}

export default Hero