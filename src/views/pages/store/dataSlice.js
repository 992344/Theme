import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetPRoduct, apiDeleteProduct } from "services/SalesService";

export const getProducts = createAsyncThunk(
  "salesProductManagement/data/getProducts",
  async () => {
    const response = await apiGetPRoduct();
    return response.data;
  }
);

export const deleteProduct = async (data) => {
  const response = await apiDeleteProduct(data);
  return response.data;
};

const dataSlice = createSlice({
  name: "salesProductManagement/data",
  initialState: {
    loading: false,
    productList: [],
  },
  reducers: {
    updateProductList: (state, action) => {
      state.productList = action.payload;
    },
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.productList = action.payload.data;
      state.tableData.total = action.payload.total;
      state.loading = false;
    },
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
  },
});

export const {
  updateProductList,
  setTableData,
  setFilterData,
  setSortedColumn,
} = dataSlice.actions;

export default dataSlice.reducer;
