import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Table from './Table';


const API_URL = 'http://localhost:5165/api/sessions'; 

const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-all-session`);
      console.log('Fetch Orders Response:', response.data);
      const flattenedData = response.data.flat(); // Flatten the array of arrays into a single array
      return flattenedData;
    //   return response.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      return [];
    }
  };



const OrdersTable = () =>{
    const {data: orders, error, isLoading} = useQuery({
        queryFn: () => fetchOrders(),
        queryKey: ["orders"],
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
    
    console.log('Orders:', orders);


    const theadData = orders.length > 0 ? Object.keys(orders[0]) : [];
    const tbodyData = orders;
    
    return (
        <div>
        <h1>Sessions Table</h1>
        <Table theadData={theadData} tbodyData={tbodyData} />
    </div>
   
  );

}

export default OrdersTable;

