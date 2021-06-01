import axios from "axios";
import config from "../config";

export interface IDefaultResponse {
  status: number;
  code: number;
  message: string;
}

export const getRequest = () =>
  axios.create({
    baseURL: config.apiHost,
  });
