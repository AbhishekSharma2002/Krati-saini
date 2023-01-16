import React from 'react'
import infoLogo from './infoLogo.jpg';
import insta from './insta.png';
import github from './github.png';
import link from './link.png';

export default function Footer() {
    return (
        <>
            <div className='flex mt-4 mb-3 justify-between'>
                <div className='flex' >
                    <img className='ml-3 h-w-16 w-16 rounded-full' src={infoLogo} alt=''></img>
                    <p className='mt-4 text-2xl font-semibold ml-4'>ABHISHEK SHARMA</p>
                    <p className='mt-3 ml-2 text-slate-400 text-3xl'>|</p>
                    <p className='mt-5 ml-3 text-slate-400'>Copyright © 2022 abhisheksharma735580@gmail.com</p>
                </div>
                <div className='flex space-x-3 mt-5 mr-7'>
                    <a href='https://www.instagram.com/abhishek_sharma7376/'><img className='h-5 w-5' src={insta} alt=''></img></a>
                    <a href='https://github.com/AbhishekSharma2002/'><img className='h-5 w-5' src={github} alt=''></img></a>
                    <a href='https://www.linkedin.com/in/abhishek-sharma-8a9b5b23a/'><img className='h-5 w-5' src={link} alt=''></img></a>
                </div>
            </div>
        </>
    )
}
