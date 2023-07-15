import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    base: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL }), // while deploying react app base url will be different so we keep it into .env
    reducerPath: "adminApi",
    tagTypes: ["User", "Products","Customers"],
    endpoints: (build) => ({
        getUser : build.query({
            query: (id) => `general/user/${id}`, // above base url will be atached beforehand to this url
            provideTags: ["User"]
        }),
        getProducts: build.query({
            query: () => "client/products",
            provideTags: ["Products"],
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            provideTags: ["Customers"],
        }),
        getTransactions: build.query({
            query: ({page,pageSize,sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params:{page,pageSize,sort,search},
            }),
            providesTags:["Transactions"],
        }),
        getGeography: build.query({
            query: () => "client/geography",
            provideTags:["Geography"],
        }),
        getSales: build.query({
            query:() => "sales/sales",
            providesTags:["Sales"]
        })
    }),
})

export const {
    useGetUserQuery,
    useGetProductQuery
    useGetCustomersQuery
    useGetTransactionsQuery
    useGetGeographyQuery,
    useGetSalesQuery
} = api;