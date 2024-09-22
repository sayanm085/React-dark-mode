import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif" alt="product_image1" />
            </a>
            <div className="px-5 pb-5 flex flex-col items-center">
                <img className='rounded-full w-44 absolute -mt-28 ' src="https://avatars.githubusercontent.com/u/154863207?v=4" alt="" />
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mt-20">
                        Sayan Mondal
                    </h1>
                    <p className="text-base tracking-tight text-gray-700 dark:text-white text-center mt-2">
                    ⚡ Fun fact The "Hello, world!" program is considered the simplest program a beginner can write. It's often used as a first-time exercise to learn a new programming language.
                    </p>
                <div className="flex items-center justify-between">
                
                    <a
                        href="https://github.com/sayanm085"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4" 
                    >
                        GitHub Link
                    </a>
                </div>
            </div>
        </div>
    );
}

