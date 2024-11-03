/* eslint-disable no-unused-vars */
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import TenderCard from './TenderCard';

const AllTenders = () => {

  const [error, setError] = useState("");
  const [listTender, setListTender] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/tender");
        setListTender(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);


  return (
     
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">All Tenders</h1>
      <div className="space-y-8">
        {listTender.length > 0 && listTender.map((tender, index) => (
          <motion.div
            key={tender.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 * index }}
          >
            <TenderCard tender={tender} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllTenders;
