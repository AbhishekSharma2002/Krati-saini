import React from 'react'
// import Background from './back.jpg';
import video1 from "./1.mp4";
import video2 from "./2.mp4";
import video3 from "./3.mp4";
import video4 from "./4.mp4";
import video5 from "./5.mp4";
import video6 from "./6.mp4";
import video7 from "./7.mp4";
import video8 from "./8.mp4";
import video9 from "./9.mp4";
import video10 from "./10.mp4";
import video11 from "./11.mp4";
import video12 from "./12.mp4";
import video13 from "./13.mp4";
import video14 from "./14.mp4";
import video15 from "./15.mp4";
import video16 from "./16.mp4";
import video17 from "./17.mp4";


export default function Reels() {
  return (
    // <div className='' style={{
    //   backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', width: '100%', height: '650px'
    // }}>
        <div className='grid  grid-cols-5 gap-8 bg-slate-200'>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video1} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video2} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video3} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video4} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video5} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video6} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video7} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video8} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video9} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video10} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video11} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video12} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video13} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video14} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video15} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video16} type="video/mp4"></video>
            <video className='w-auto h-auto ml-4 shadow-xl shadow-blue-400 rounded-xl ' controls src={video17} type="video/mp4"></video>
        </div>
    // </div>
  )
}
