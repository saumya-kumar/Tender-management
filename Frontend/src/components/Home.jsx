import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { tenders } from '../utils/tenderData'; // Assuming you have tender data
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTenders, setCurrentTenders] = useState([]);
  const [completedTenders, setCompletedTenders] = useState([]);

  useEffect(() => {
    const runningTenders = tenders.filter(tender => new Date(tender.deadline) >= new Date());
    const completedBiddingTenders = tenders.filter(tender => new Date(tender.deadline) < new Date());

    setCurrentTenders(runningTenders);
    setCompletedTenders(completedBiddingTenders);
  }, []);

  return (
    <div className="w-full px-6 py-8 flex flex-col items-center bg-gray-900 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Tender Management</h1>
      </header>

      <div className="w-full flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-8">
        {/* Currently Running Tenders */}
        <motion.div
          className="w-full lg:w-1/3 bg-gradient-to-b from-gray-700 to-gray-800 shadow-2xl rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white border-b-2 border-gray-600 pb-2">
            Currently Running Tenders
          </h2>
          <div className="overflow-hidden max-h-[500px]">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -100 }}
              transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            >
              <ul className="space-y-4">
                {currentTenders.map(tender => (
                  <li key={tender.id}>
                    <Link to={`/tender/${tender.id}`} className="flex items-start space-x-2 text-blue-400 hover:text-blue-300">
                      <span className="text-lg">➤</span>
                      <div>
                        <h3 className="font-semibold text-md text-white">{tender.name}</h3>
                        <p className="text-sm text-gray-400">{tender.deadline}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Completed Bidding Tenders */}
        <motion.div
          className="w-full lg:w-1/3 bg-gradient-to-b from-gray-700 to-gray-800 shadow-2xl rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white border-b-2 border-gray-600 pb-2">
            Completed Bidding Tenders
          </h2>
          <div className="overflow-hidden max-h-[550px]">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -100 }}
              transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            >
              <ul className="space-y-4">
                {completedTenders.map(tender => (
                  <li key={tender.id}>
                    <Link to={`/tender/${tender.id}`} className="flex items-start space-x-2 text-red-400 hover:text-red-300">
                      <span className="text-lg">➤</span>
                      <div>
                        <h3 className="font-semibold text-md text-white">{tender.name}</h3>
                        <p className="text-sm text-gray-400">{tender.deadline}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Notices */}
        <motion.div
          className="w-full lg:w-1/3 bg-gradient-to-b from-gray-700 to-gray-800 shadow-2xl rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white border-b-2 border-gray-600 pb-2">
            Notices
          </h2>
          <div className="overflow-hidden max-h-[500px]">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -100 }}
              transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            >
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <span className="text-lg text-green-400">➤</span>
                  <div>
                    <h3 className="font-semibold text-md text-white">National Fellowship for PhD of ST Students</h3>
                    <p className="text-sm text-gray-400">Year 2024-2025</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-lg text-green-400">➤</span>
                  <div>
                    <h3 className="font-semibold text-md text-white">Hostel Reporting Instructions</h3>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
