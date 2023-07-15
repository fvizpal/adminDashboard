import React from 'react'
import {
    Box,
    useTheme
} from "mui/material";
import { useGetCustomersquery } from 'state/api';
import Header from 'components/Header';
import { DataGrid } from '@mui/x-data-grid';

const customers = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCustomersquery();

    const columns = [
        {
            field: "_id",
            headername: "ID",
            flex: 1,
        },
        {
            field: "name",
            headername: "Name",
            flex: 0.5,
        },
        {
            field: "email",
            headername: "Email",
            flex: 1,
        },
        {
            field: "phoneNumber",
            headername: "Phone Number",
            flex: 0.5,
            renderCell: (params) ->{
                return params.value.replace()
            }
        },
        {
            field: "country",
            headername: "Country",
            flex: 0.4,
        },
        {
            field: "country",
            headername: "Country",
            flex: 0.4,
        },
        {
            field: "occupation",
            headername: "Occupation",
            flex: 1,
        },
        {
            field: "role",
            headername: "Role",
            flex: 0.5,
        },
    ];

  return 
    <Box m="1.5rem 2.5rem">
        <Header title="CUSTOMERS" subtitle="List of customers" />
        <Box
            mt="40px"
            height="75vh"
            sx={{ // these are classname picked from inspect html that we are styling
                "& .MuiDatagrid-root":{
                    border:"none"
                },
                "& .MuiDataGrid-cell":{
                    
                }
            }}
        >
            <DataGrid 
                loading ={isLoading || !data}
                getRowsId={(rows)=> rows._id}
                rows={data || []}
                columns = {colums}
            />
        </Box>
    </Box>
}
// what we did here is called client side pagination having data from server directly 
// we dont have all data at once // if we click next then again it takes from server
export default customers