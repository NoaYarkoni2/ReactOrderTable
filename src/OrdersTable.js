import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Table from './Table';


const API_URL = 'http://localhost:5165/api/sessions'; 

const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-all-session`);
      console.log('Fetch Orders Response:', response.data);
      return response.data;
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

    const tbodyData = orders.map(order => ({
        'SESS_TMPL_ID': order.SESS_TMPL_ID,
        'TOTAL': order.TOTAL,
        'DELIVERY_CHARGE': order.DELIVERY_CHARGE,
        'DELIVERY_METHOD': order.DELIVERY_METHOD,
        'PAYMENT_METHOD': order.PAYMENT_METHOD,
        'CREATED': order.CREATED,
        'ENDED': order.ENDED,
        'SESSION': order.SESSION,
        'CUST_NAME': order.CUST_NAME,
        'ORDER_NUM': order.ORDER_NUM,
        'CITY': order.CITY,
        'STREET_ADDR': order.STREET_ADDR,
        'NOTES': order.NOTES,
        'STATUS': order.STATUS,
    }));

    const theadData = [
        'SESS_TMPL_ID',
        'TOTAL',
        'DELIVERY_CHARGE',
        'DELIVERY_METHOD',
        'PAYMENT_METHOD',
        'CREATED',
        'ENDED',
        'SESSION',
        'CUST_NAME',
        'ORDER_NUM',
        'CITY',
        'STREET_ADDR',
        'NOTES',
        'STATUS',
    ];
    
    return (
        <div>
        <h1>Sessions Table</h1>
        <Table theadData={theadData} tbodyData={tbodyData} />
    </div>
   
  );

}

export default OrdersTable;

