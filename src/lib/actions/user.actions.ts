"use server";

import { httpRoutes } from "@/config/http.routes.config";
import { cookies } from "next/headers";

export const signIn = async ({ clientid, password }: signInProps) => {
  const cookieStore = cookies();

  try {
    console.log("called");
    const res = await fetch(httpRoutes.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({
        username: clientid,
        password: password,
        expiresInMins: 30,
      }),
    });
    console.log(clientid, password, "clientid, password");
    console.log(httpRoutes.login, "login url");
    const data = await res.json();
    cookieStore.set("user", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async ({ ...userData }: SignUpParams) => {
  try {
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

export const getLoggedInUser = async () => {
    try {
      const cookieStore = cookies();
      const userDetails = cookieStore.get("user");
      console.log(userDetails);
      return userDetails?.value ? JSON.parse(userDetails.value) : null;
    } catch (error) {
      console.log(error);
    }
  };

export const logoutAccount = async () => {
    try {
        cookies().delete("user");
        return true
    } catch (error) {
        console.log(error);
    }
}