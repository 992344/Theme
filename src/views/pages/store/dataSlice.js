import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSalesProducts, apiDeleteSalesProducts,apiGetSupplier } from 'services/SalesService'

export const getProducts = createAsyncThunk('salesProductList/data/getProducts',async (data) => {
    const response = await apiGetSalesProducts(data)
    console.log(response.data)
    return response.data
})

export const deleteProduct = async (data) => {
    const response = await apiDeleteSalesProducts(data)
    return response.data
}

// export const getProductSPo = createAsyncThunk('salesProductList/data/getProductSP',async()=>{
//     const response = await  apiGetSupplier()
//     console.log(response.data)
//     return response.data
// })

export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: ''
    }
}

export const initialFilterData = {
    name: '',
    category: ['bags', 'cloths', 'devices', 'shoes', 'watches'],
    status: [0, 1, 2],
    productStatus: 0,
}

const dataSlice = createSlice({
    name: 'salesProductList/data',
    initialState: {
        loading: false,
        productList: [],
        tableData: initialTableData,
        filterData: initialFilterData,
        productSPdata:[]
    },
    reducers: {
        updateProductList: (state, action) => {
            state.productList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setFilterData: (state, action) => {
            state.filterData = action.payload
        },
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.productList = action.payload.data
            // state.tableData.total = action.payload.total
            state.loading = false
        },
        [getProducts.pending]: (state) => {
            state.loading = true
        },
        
    }
})

export const { updateProductList, setTableData, setFilterData, setSortedColumn } = dataSlice.actions

export default dataSlice.reducer
