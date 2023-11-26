import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateSizeType,
  DeleteSizeType,
  GetQuantityType,
  GetSizeByShoeIdType,
  GetSizeType,
  UpdateSizeType,
} from "./type";
import { BASE_URL, getToken } from "@/utils";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk("size/self", async (param: GetSizeType) => {
  try {
    const resp = await axios.get(`${baseUrl}/size/self/${param.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getAll = createAsyncThunk("size/get-all", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/size/get-all`, {});
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getSizeQuantity = createAsyncThunk(
  "size/get-quantity",
  async (param: GetQuantityType) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/size/get-quantity?shoeId=${param.shoeId}&sizeCode=${param.sizeCode}`
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const getByShoeId = createAsyncThunk(
  "size/getByShoeId",
  async (params: GetSizeByShoeIdType) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/size/get-by-shoe-id/${params.shoeId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const create = createAsyncThunk(
  "size/create",
  async (param: CreateSizeType) => {
    try {
      const resp = await axios.post(`${baseUrl}/size/create`, param, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const update = createAsyncThunk(
  "size/update",
  async (param: UpdateSizeType) => {
    try {
      const resp = await axios.post(`${baseUrl}/size/update`, param, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const deletes = createAsyncThunk(
  "size/delete",
  async (param: DeleteSizeType) => {
    try {
      const resp = await axios.post(`${baseUrl}/size/delete`, param, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

export const sizeAsyncAction = {
  getOne,
  getAll,
  getByShoeId,
  getSizeQuantity,
  create,
  update,
  deletes,
};
