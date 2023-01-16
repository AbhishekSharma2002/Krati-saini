import React from 'react'
import Background from './back.jpg';
const krati = new URL("./Krati.jpg", import.meta.url)
const profile = new URL("./InstaProfile.jpg", import.meta.url)

export default function () {
    return (
        <>
            <div  style={{
                backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', width: '100%', height: '550px'
            }}>
                <div className='ml-8 flex'>
                    <img className='rounded-2xl shadow-xl shadow-purple-700 w-80 h-96' src={krati} alt=''></img>
                    <div className='drop-shadow-2xl bg-slate-200  p-4 ml-10 rounded-br-full shadow-xl shadow-blue-300 '>
                        <p className='  text-3xl uppercase text-purple-600 font-semibold '>"Hello Everybody", Welcome to my website. I am from Bhopal. </p>
                        <a className='text-xl font-semibold hover:text-blue-500 hover:underline' href='https://www.instagram.com/kratisaini_/'>@To Visit instagram account click here!</a>
                        <a href='https://www.instagram.com/kratisaini_/'><img className='rounded-xl mt-5 ml-4 shadow-xl shadow-gray-400' alt='' src={profile}></img></a>
                    </div>
                </div>
            </div>
        </>
    )
}
