/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const TenderDetails = () => {
    const { id } = useParams();

    const personInfo = useSelector((state) => state.auth.userData.data.data.person);
    const personInfoString = JSON.stringify(personInfo);
    const parsedPersonInfo = JSON.parse(personInfoString);

    const [bid, setBid] = useState([]);
    const [tender,setTender] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/tender/${id}`);
                setBid(response.data.data.bids);
                setTender(response.data.data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, [id]);



    const handleAcceptTender = async () => {
        try {
            console.log('accept');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="bg-gray-900 py-6">
            <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-3xl mx-auto rounded-xl shadow-lg p-6">
                    <div className="bg-gray-700 rounded-lg p-6 transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300 border border-gray-900">
                        <h1 className="text-3xl text-center font-bold mb-4 text-gray-100 hover:text-blue-400 transition-colors duration-300">
                            {tender.tenderName}
                        </h1>
                        <p className="text-gray-100 text-center mb-6 text-lg leading-relaxed">
                            {tender.description}
                        </p>
                        <p className="text-gray-100 mb-4 text-lg">
                            <strong className="text-blue-400">Base Amount:</strong> ${tender.basePrice}
                        </p>
                        <p className="text-gray-100 mb-4 text-lg">
                            <strong className="text-blue-400">Deadline:</strong> {tender.deadline}
                        </p>
                        <p className="text-gray-100 mb-4 text-lg">
                            <strong className="text-blue-400">Location:</strong> {tender.location}
                        </p>

                        {
                            parsedPersonInfo === 'Admin' ? (
                                <>
                                    <p className="text-gray-100 mb-4 text-lg">
                                        <strong className="text-blue-400">Bid:</strong>
                                        <ul className="list-disc list-inside">
                                            {bid && bid.length > 0 ? (
                                                bid.map((bid, index) => (
                                                    <li key={index} className="text-gray-300">
                                                        {bid.bidAmount}
                                                    </li>
                                                ))
                                            ) : (
                                                <li className="text-gray-300">No bids available.</li>
                                            )}
                                        </ul>
                                    </p>
                                    <p className="text-gray-100 mb-4 text-lg">
                                        <strong className="text-blue-400">Accept Tender:</strong>
                                        <button
                                            onClick={handleAcceptTender}
                                            className="bg-blue-600 text-lg font-bold text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            Accept
                                        </button>
                                    </p>
                                </>
                            ) : null
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenderDetails;
