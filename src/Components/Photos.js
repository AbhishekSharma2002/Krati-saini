import React from 'react'
const photo1 = new URL("./photo1.jpg", import.meta.url)
const photo2 = new URL("./photo2.jpg", import.meta.url)
const photo3 = new URL("./photo3.jpg", import.meta.url)
const photo4 = new URL("./photo4.jpg", import.meta.url)
const photo5 = new URL("./photo5.jpg", import.meta.url)
const photo6 = new URL("./photo6.jpg", import.meta.url)
const photo7 = new URL("./photo7.jpg", import.meta.url)
const photo8 = new URL("./photo8.jpg", import.meta.url)
const photo9 = new URL("./photo9.jpg", import.meta.url)
const photo10 = new URL("./photo10.jpg", import.meta.url)
const photo11 = new URL("./photo11.jpg", import.meta.url)
const photo12 = new URL("./photo12.jpg", import.meta.url)
const photo13 = new URL("./photo13.jpg", import.meta.url)
const photo14 = new URL("./photo14.jpg", import.meta.url)
const photo15 = new URL("./photo15.jpg", import.meta.url)
const photo16 = new URL("./photo16.jpg", import.meta.url)
const photo17 = new URL("./photo17.jpg", import.meta.url)
const photo18 = new URL("./photo18.jpg", import.meta.url)
const photo19 = new URL("./photo19.jpg", import.meta.url)
const photo20 = new URL("./photo20.jpg", import.meta.url)
const photo21 = new URL("./photo21.jpg", import.meta.url)
const photo22 = new URL("./photo22.jpg", import.meta.url)
const photo23 = new URL("./photo23.jpg", import.meta.url)

export default function Photos() {
  return (
    <>
      <div className='grid grid-cols-3 space-y-9 space-x-3'>
        <img className='h-auto w-auto shadow-xl shadow-yellow-500 rounded-2xl' src={photo1} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-sky-500 rounded-2xl' src={photo2} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-yellow-300 rounded-2xl' src={photo3} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-gray-700 rounded-2xl' src={photo4} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-yellow-300 rounded-2xl' src={photo5} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-sky-700 rounded-2xl' src={photo6} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-amber-600 rounded-2xl' src={photo7} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-pink-500 rounded-2xl' src={photo8} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-blue-400 rounded-2xl' src={photo9} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-black rounded-2xl' src={photo10} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-black rounded-2xl' src={photo11} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-sky-300 rounded-2xl' src={photo12} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-green-700 rounded-2xl' src={photo13} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-yellow-600 rounded-2xl' src={photo14} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-sky-200 rounded-2xl' src={photo15} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-orange-500 rounded-2xl' src={photo16} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-black rounded-2xl' src={photo17} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-red-600 rounded-2xl' src={photo18} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-gray-700 rounded-2xl' src={photo19} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-pink-600 rounded-2xl' src={photo20} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-orange-600 rounded-2xl' src={photo21} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-black rounded-2xl' src={photo22} alt=''></img>
        <img className='h-auto w-auto shadow-xl shadow-pink-400 rounded-2xl' src={photo23} alt=''></img>

      </div>
    </>
  )
}
