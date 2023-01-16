import React from 'react'
import logo from './logo.jpg';

export default function Youtube() {
    return (
        <>
            <div>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <img className="h-w-20 w-20 rounded-full" src={logo} alt="ChitChat Logo"></img>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">Krati Saini</div>
                        <p className="text-slate-500 hover:text-blue-700"><a href='https://www.youtube.com/@kratisaini18/featured'>@kratisaini18</a></p>
                        <p className="text-slate-500 w-32">24.8K subscribers</p>
                    </div>
                    <div className=''>
                        <button className='p-3 text-white transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 rounded-md'><a href='https://www.youtube.com/@kratisaini18/featured'>SUBSCRIBE</a></button>
                    </div>
                </div>
                <div className='flex justify-evenly mt-8'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4RDjcTATzYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xcgVMV_S8SQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
               
 
            </div>
        </>
    )
}
