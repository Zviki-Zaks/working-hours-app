import { UserInfo } from "../model/user-model";
import { sendRequest } from "./http.service";

const ENDPOINT = "/user";

export async function getUserInfo(): Promise<UserInfo> {
  try {
    return await sendRequest({
      method: "GET",
      endpoint: ENDPOINT,
    });
  } catch (error) {
    //TODO: Handle the error.
    console.log("Can't get user");
    throw error;
  }
}

export async function addUser(userCredential: UserInfo): Promise<UserInfo> {
  try {
    return await sendRequest({
      method: "POST",
      endpoint: ENDPOINT,
      data: userCredential,
    });
  } catch (error) {
    //TODO: Handle the error.
    console.log("Can't adding user");
    throw error;
  }
}
