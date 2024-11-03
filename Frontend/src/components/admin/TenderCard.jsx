/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const TenderCard = ({ tender }) => {
  const personInfo = useSelector((state) => state.auth.userData.data.data.person);
  const personInfoString = JSON.stringify(personInfo);
  const parsedPersonInfo = JSON.parse(personInfoString);
  const tenderInfo = {
    tenderName : tender.itemName,
    tenderType : tender.tendertype,
    basePrice : tender.basePrice,
    deadline : tender.deadline,
    location : tender.location,
    description :tender.description,
    deal : false
  }

  return (
    
    <motion.div
      className="p-5 bg-gray-800 shadow-lg w-5/6 mx-auto rounded-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-900"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-100 transition-colors duration-300 hover:text-blue-400">
          {tenderInfo.tenderName}
        </h3>
        { parsedPersonInfo === 'Admin' ? (
          <Link
            to={`/tender/${tender._id}`}
            className="text-blue-400 text-sm font-semibold transition-transform duration-300 hover:scale-105"
          >
            View Details
          </Link>
        ) : (
          <Link
            className="text-blue-400 text-sm font-semibold transition-transform duration-300 hover:scale-105"
            to={`/bid-tender/${tender._id}`}
          >
            Bid Tender
          </Link>
        )}
      </div>
      <p className="mt-2 text-gray-300">{tenderInfo.description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-400 text-sm">
          Base Amount:{' '}
          <span className="font-semibold text-gray-200">${tenderInfo.basePrice}</span>
        </p>
        <p className="text-gray-400 text-sm">
          Deadline:{' '}
          <span className="font-semibold text-gray-200">{tenderInfo.deadline}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default TenderCard;
