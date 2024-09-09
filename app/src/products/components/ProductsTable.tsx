import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useListProducts } from "../hooks/uselistProducts";
import { Box, Button } from "@mui/material";
import { measurementUnist } from "@/src/shared/libs/measurementUnits";
import { Product } from "./ProductForm/ModalProducts";

export const ProductTable = (props: Props) => {
  const { data, isLoading, refetch } = useListProducts({ offset: 0, limit: 100 });

  const rows = (data?.products || []).map(
    (product) => {
      return {
        id: product.id,
        name: product.name,
        unity: measurementUnist.find(item => item.id === product.unity)?.name,
        pvp: `$ ${product.pvp.toFixed(4)}`,
        actions: {
          id: product.id,
          product: {
            name: product.name,
            unity: measurementUnist.find(item => item.id === product.unity),
            productPurchased: product.price.productPurchased,
            productWaste: product.price.productWaste,
            purchaseAmount: product.price.purchaseAmount,
            profit: product.price.profit * 100,
            transportation: product.price.transpotation,
            misellanious: product.price.misellanious,
            mod: product.price.mod,
          }
        }
      }
    });

  const handleModalEdit = (productId: string, product: Product) => {
    props.setProduct(product);
    props.setProductId(productId);
    props.setOpen(true);
  }

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
      width: 120,
      editable: false,
      sortable: true,
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 250,
      renderCell: (params: GridRenderCellParams<any>) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', width: '100%' }} >
          <Button
            variant='contained'
            sx={{width: '110px'}}
            onClick={()=>handleModalEdit(params.value.id, params.value.product)}
          >Editar</Button>
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

interface Props {
  setProductId: (value: string) => void,
  setProduct: (value: Product) => void,
  setOpen: (value: boolean) => void,
}
