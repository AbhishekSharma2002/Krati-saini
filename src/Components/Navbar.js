import React from 'react'
import Background from './back3.jpg';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <div className='sticky top-0 z-10 '>
        
            <div className='' style={{
                backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', width: '100%', height: '75px'
            }}>
                <div className='flex justify-between'>
                    <p className='font-bold text-blue-800 text-3xl mt-4 ml-8 sm'>Krati Saini</p>
                    <div className='flex space-x-3 font-semibold text-lg mt-4 mr-72 bg-slate-300 rounded-lg pl-8 pr-8 shadow-lg shadow-blue-400'>
                        <p className='hover:text-blue-600 cursor-pointer'><Link to="Home">Home |</Link></p>
                        <p className='hover:text-blue-600 cursor-pointer'><Link to="Reels">Reels |</Link></p>
                        <p className='hover:text-blue-600 cursor-pointer'><Link to="Photos">Photos |</Link></p>
                        <p className='hover:text-blue-600 cursor-pointer'><Link to="Biography">Biography |</Link></p>
                        <p className='hover:text-blue-600 cursor-pointer'><Link to="Youtube">Youtube chennal |</Link></p>
                        <p className='hover:text-blue-600 cursor-pointer'>Creater Info</p>
                    </div>
                </div>
            </div>
            </div>


        </>
    )
}
