/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn.jsx';

const Header = () => {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    let personInfo = useSelector((state) => state.auth.userData);
    const [info, setInfo] = useState(null);

    useEffect(() => {
        setInfo(personInfo?.data?.data?.person);
    }, [authStatus, personInfo]);

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true,
            person: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
            person: true
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
            person: true
        },
        {
            name: "Create Tender",
            slug: "/create-tender",
            person: (info === "Admin"),
            active: authStatus,
        },
        {
            name: "All Tender",
            slug: "/all-tender",
            person: (info === "Admin"),
            active: authStatus,
        },
        {
            name: "Bid Tender",
            slug: "/tenders",
            person: (info === "Vendor"),
            active: authStatus,
        },
    ];

    return (
        <header className="py-6 shadow-lg bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white sticky top-0 z-50">
            <div className="w-full px-16">
                <nav className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <button onClick={() => navigate('/')} className="text-white hover:text-yellow-500 transition duration-300">
                            TenderHub
                        </button>
                    </div>
                    <ul className="flex space-x-4">
                        {navItems.map((item) =>
                            item.active && item.person ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-block px-6 py-2 text-lg font-medium transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-black rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
