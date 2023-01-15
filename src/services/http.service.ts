import axios, { Method } from "axios";
import { auth } from "../firebase/firebase.config";

type Params = Record<string, string | number | boolean | undefined | any[]>;

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api" : "//localhost:3030/api";
let ID_TOKEN: string | undefined;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = BASE_URL;

// Create a function to set the ID token as an HTTP header for all axios requests.
const setAuthHeader = async () => {
  // Get the ID token from Firebase.
  ID_TOKEN = await auth.currentUser?.getIdToken();
  // Set the ID token as an HTTP header for all axios requests.
  axios.defaults.headers.common["Authorization"] = `Bearer ${ID_TOKEN}`;
};

// Create a function to send an HTTP request using axios.
export async function sendRequest({
  method = "GET",
  endpoint,
  params,
  data,
}: {
  method: Method;
  endpoint: string;
  params?: Params;
  data?: any;
}) {
  try {
    ID_TOKEN ?? (await setAuthHeader());
    // Send the request.
    const res = await axios({
      method,
      url: endpoint,
      params,
      data,
    });
    return res.data;
  } catch (error) {
    //TODO: Handle the error.
    throw error;
  }
}
