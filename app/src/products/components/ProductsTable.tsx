import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useListProducts } from "../hooks/uselistProducts";
import { measurementUnist } from "@/src/shared/libs/measurementUnits";
import { Product } from "./ProductForm/ModalProducts";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { useState } from "react";
import { ModalDelete } from "@/src/shared/components/ModalDelete";
import { ActionButtons } from "./ActionButtons";

export const ProductTable = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");
  const { data, isLoading, refetch } = useListProducts({ offset: 0, limit: 100 });
  const { mutate } = useDeleteProduct(() => {
    refetch();
  });

  const handleModalEdit = (productId: string, product: Product) => {
    props.setProduct(product);
    props.setProductId(productId);
    props.setOpen(true);
  }

  const handleModalDelete = (productId: string) => {
    setOpen(true);
    setProductId(productId);
  }

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
        <ActionButtons
          productId={params.value.id}
          product={params.value.product}
          handleEdit={handleModalEdit}
          handleModalDelete={handleModalDelete}
        />
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
      <ModalDelete
        message="¿Estás seguro de que deseas eliminar este contenido?"
        contentId={productId}
        open={open}
        onClose={setOpen}
        onConfirm={mutate}
      />
    </>
  )
}

interface Props {
  setProductId: (value: string) => void,
  setProduct: (value: Product) => void,
  setOpen: (value: boolean) => void,
}
