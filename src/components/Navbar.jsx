import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    let [search, setSearch] = useState('');
    let navigate = useNavigate();
    let handleSearch = (e) => {
        navigate('/?search=' + search);
    }
    return (

        <nav className={'border border-b-1'}>
            <ul className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
                <li className='flex items-center gap-3 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder='search books...' className='outline-none' />
                    <button onClick={handleSearch} className='text-white bg-primary px-3 py-1 rounded-2xl flex items-center gap-1'>

                        <span className='hidden md:block'> Search </span>
                    </button>
                </li>
                <Link to="/" className='flex items-center gap-3 md:-ml-32 cursor-pointer'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                    <span className='text-2xl font-bold text-primary hidden md:block'>
                        Book Store
                    </span>
                </Link>
                <li className='flex gap-3 item-center'>
                    <Link to='/create' className='text-white bg-primary px-3 py-2 rounded-2xl flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className='hidden md:block'>
                            Create book
                        </span>
                    </Link>

                    <div className='w-11'>
                        <img src='https://th.bing.com/th/id/OIP.7muQf2IaQW4Ntgls7IysuwHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7' alt='w-full rounded-full' />
                    </div>
                </li>

            </ul>
        </nav>
    )
}
