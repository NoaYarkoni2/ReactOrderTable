
import React from 'react';
import DataTable from 'react-data-table-component';
import { columns } from './columns';  // Adjust the path as necessary

const DataTableComponent = ({ data }) => {
    console.log(data);
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      highlightOnHover
    />
  );
};

export default DataTableComponent;