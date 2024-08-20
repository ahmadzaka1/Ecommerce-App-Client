import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmIxMzBiMmYzMGZmMDdjZDg2NTliMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTM5ODQ0NSwiZXhwIjoxNzExNjU3NjQ1fQ.q3inlGoEkMxQXonwDUO_xCG0KoDToBSpY8HHhMB-TmM";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
