import React from 'react';

export default function Table({ theadData, tbodyData }) {
    return (
        <table>
            <thead>
                <tr>
                    {theadData.map((heading) => (
                        <th key={heading}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {theadData.map((key) => (
                            <td key={`${rowIndex}-${key}`}>{row[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
