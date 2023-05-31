import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {
    DataGrid,
    GridCellParams,
    GridColDef,
    GridEventListener,
    GridRenderCellParams,
    GridValidRowModel
} from '@mui/x-data-grid';
import {Box} from "@mui/material";
import {ModalImg} from "./modal/ModalImg";
import {getData} from "./function/getData";
import {Data} from "./types";
import {ModalRow} from "./modal/ModalRow";


const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70,
        type: "number"
    },
    {
        field: 'name',
        headerName: 'name',
        width: 150,
        cellClassName: (params: GridCellParams<any, number>) => {
            if (params.value == null) {
                return '';
            }
            return clsx('super-app', {
                odd: params.row.id % 2 !== 0,
                even: params.row.id % 2 === 0,
            });
        },
    },
    {
        field: 'image',
        headerName: 'image',
        width: 300,
        renderCell: (params: GridRenderCellParams<GridValidRowModel>) => <ModalImg src={params.row.image}/>
    },
    {
        field: 'created',
        headerName: 'created',
        width: 250,
        renderCell: (params: GridRenderCellParams<Date>) => {
            const date = new Date().toString()
            return <div> {date}</div>
        },
    }
];


function App() {
    const [data, setData] = useState<Data[]>([])
    const [open, setOpen] = useState(false);

    const [currentData, setCurrentData] = useState<null | Data>(null)

    useEffect(() => {getData().then(res => { setData(res)})}, [])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getRowHeight = React.useCallback(() => ('auto'), []);

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        handleOpen()
        setCurrentData(params.row)
    };

    return (
        <Box
            sx={{
                height: 700,
                width: '80%',
                margin: '32px auto',
                '& .super-app.odd': {
                    backgroundColor: 'rgba(157, 255, 118, 0.49)',
                    color: '#ff0000',
                    fontWeight: '600',
                },
                '& .super-app.even': {
                    backgroundColor: '#d47483',
                    color: '#0055c4',
                    fontWeight: '600',
                },
            }}
        >
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 10},
                    },
                }}
                getRowHeight={getRowHeight}
                onRowClick={handleRowClick}
                pageSizeOptions={[10, 20]}
            />
            <ModalRow currentData={currentData} open={open} handleClose={handleClose}/>
        </Box>
    );
}

export default App;
