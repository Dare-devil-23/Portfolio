import React from 'react'
import sahith from "../assets/sahith.jpeg";
export default function About() {
  return (
    <main className='w-[80%] mt-5' >
        <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24'
        id='about'>
            <div className='w-full h-[420px] flex items-center justify-center'>
                <div className='w-[275px] h-[340px] bg-emerald-200 rounded-md'>
                    <img src={sahith} alt="Sahith" />
                </div>
            </div>

            <div></div>
        </section>
    </main>
  )
}
