import React from 'react'
import bg from "../../assets/background.jpg"

export default function SectionHero() {
    return (
        <section className='relative overflow-hidden'>
            {/* content */}
            <div className='bg-gradient-to-t from-white to-white/0 py-20'>
                <div className="container">
                    <h1 className='text-5xl font-bold  text-center'>Welcome to Our Website</h1>
                    <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            {/* background */}
            <img src={bg} className='absolute top-0 size-full object-cover left-0 -z-10' />
        </section>
    )
}
