import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Props = {
  loans: any;
}

const CurrentInvestmentsList = ({loans}: Props) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 100 },
    { field: 'total', headerName: 'Amount', type: 'number', width: 100 },
    { field: 'apr', headerName: 'APR', type: 'number', width: 100 },
    { field: 'term', headerName: 'Loan Term', type: 'number', width: 100 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={loans}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 50, 100]}
        disableSelectionOnClick={true}
      />
    </div>
  )
}

export default CurrentInvestmentsList;