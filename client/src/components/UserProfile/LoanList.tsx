import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Props = {
  loans: any;
}

const LoanList = ({loans}: Props) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 100 },
    { field: 'total', headerName: 'Total', type: 'number', width: 100 },
    { field: 'paid', headerName: 'Paid', type: 'number', width: 100 },
    { field: 'oustanding', headerName: 'Outstanding', type: 'number', width: 125 },
    { field: 'apr', headerName: 'APR', type: 'number', width: 100 },
    { field: 'term', headerName: 'Loan Term', type: 'number', width: 150 },
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

export default LoanList;