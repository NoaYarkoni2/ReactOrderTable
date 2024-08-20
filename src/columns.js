export const columns = [
    { name: 'Session Template ID', selector: row => row.SESS_TMPL_ID, sortable: true },
    { name: 'Total', selector: row => row.TOTAL, sortable: true },
    { name: 'Delivery Charge', selector: row => row.DELIVERY_CHARGE, sortable: true },
    { name: 'Delivery Method', selector: row => row.DELIVERY_METHOD, sortable: true },
    { name: 'Payment Method', selector: row => row.PAYMENT_METHOD, sortable: true },
    { name: 'Created Date', selector: row => row.CREATED, sortable: true },
    { name: 'Ended Date', selector: row => row.ENDED, sortable: true },
    { name: 'Session ID', selector: row => row.SESSION, sortable: true },
    { name: 'Customer Name', selector: row => row.CUST_NAME, sortable: true },
    { name: 'Order Number', selector: row => row.ORDER_NUM, sortable: true },
    { name: 'City', selector: row => row.CITY, sortable: true },
    { name: 'Street Address', selector: row => row.STREET_ADDR, sortable: true },
    { name: 'Notes', selector: row => row.NOTES, sortable: true },
    { name: 'Status', selector: row => row.STATUS, sortable: true },
  ];
  