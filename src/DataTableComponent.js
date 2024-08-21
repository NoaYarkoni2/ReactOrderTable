import React from 'react';
import DataTable from 'react-data-table-component';
import { columnMapping } from './columnMapping';



export default function DataTableComponent({ theadData, tbodyData }) {
    // Convert theadData to columns format required by DataTable
    const columns = theadData.map((heading) => ({
        name: columnMapping[heading.toUpperCase()] || heading,
        selector: row => row[heading],
        sortable: true,
    }));
    console.log('Columns:', columns);

    return (
        <DataTable
            columns={columns}
            data={tbodyData}
            pagination
            highlightOnHover
            striped
        />
    );
}

