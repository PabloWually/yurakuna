import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useListProducts } from "../hooks/uselistProducts";
import { Box, Button } from "@mui/material";

export const ProductTable = () => {
  const { data, isLoading, refetch } = useListProducts({ offset: 0, limit: 100 });

  const rows = (data?.products || []).map(product => product);

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'name',
      headerName: 'Nombre',
      width: 150,
      editable: true,
      sortable: true,
    },
    {
      field: 'unity',
      headerName: 'Unidad',
      width: 150,
      editable: false,
      sortable: true,
    },
    {
      field: 'pvp',
      headerName: 'PVP',
      width: 50,
      editable: false,
      sortable: true,
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 250,
      renderCell: (params: GridRenderCellParams<any>) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', width: '100%' }} >
          <Button variant='contained' sx={{width: '110px'}} >Editar</Button>
          <Button variant='contained' sx={{width: '110px'}} >Eliminar</Button>
        </Box>
      ),
    }

  ];
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

    </>
  )
}
