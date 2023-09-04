import React from 'react'
import { getSession, signIn } from "next-auth/react"


const RoleForGoogle = () => {

    const handleChangeRole = async (role: String) => {
        const session = await getSession()
        const email = session?.user?.email

        fetch("/api/changeRole", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, role }),
        })
            .then(() => {
                signIn('google', { callbackUrl: '/' })
            })
    }


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">
                <h1 className="mb-4 p-4 font-bold text-2xl text-[#002D74]  text-center ">
                    Do you want to become a seller?
                </h1>
                <div className="flex justify-center">
                    <button onClick={() => handleChangeRole("user")} className="shadow-2xl flex-col bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                        <div className="">User</div>

                    </button>
                    <button onClick={() => handleChangeRole("seller")} className="shadow-2xl bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-2xl flex-col justify-center items-center m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        </svg>
                        <h2>Seller</h2>

                    </button>
                </div>
            </div>
        </div>

    )
}

export default RoleForGoogle