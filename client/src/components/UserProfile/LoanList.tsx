import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Props = {
  loans: any;
}

const LoanList = ({loans}: Props) => {
  const columns: GridColDef[] = [
    { field: 'total', headerName: 'Total', type: 'number', width: 150 },
    { field: 'paid', headerName: 'Amount Paid', type: 'number', width: 150 },
    { field: 'oustanding', headerName: 'Amount Outstanding', type: 'number', width: 150 },
    { field: 'apr', headerName: 'APR', type: 'number', width: 150 },
    { field: 'term', headerName: 'Loan Term', type: 'number', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={loans}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight={true}
        disableSelectionOnClick={true}
      />
    </div>
  )
}

export default LoanList;