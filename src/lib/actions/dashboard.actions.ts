"use server";

import { httpRoutes } from "@/config/http.routes.config";
import { formatData } from "../utils";

export const getSectorChartData = async ({ clientId, view }: sectorChartProps) => {
    try {
      const res = await fetch('vivekfinancial.in:8080/XpertDashSynTest/DashboardPerformanceNew/Chart', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          clientId: clientId,
          view: view,
          expiresInMins: 30,
        }),
      });
      console.log(clientId, view, "clientid, view");
      const data = await res.json();
      //data is coming in csv format to convert to json we created a function in utils (formatData)
      const formatedData = formatData(data);
      return formatedData;
    } catch (error) {
      console.log(error);
    }
}

export const getCompaniesChartData = async ({ clientId, view }: sectorChartProps) => {
  try {
    const res = await fetch('vivekfinancial.in:8080/XpertDashSynTest/DashboardPerformanceNew/Chart', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({
        clientId: clientId,
        view: view,
        expiresInMins: 30,
      }),
    });
    console.log(clientId, view, "clientid, view");
    const data = await res.json();
    //data is coming in csv format to convert to json we created a function in utils (formatData)
    const formatedData = formatData(data);
    return formatedData;
  } catch (error) {
    console.log(error);
  }
}

export const dummyTest = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      const data = await res.json();
      console.log(data);
      return data;
    }
    catch (error) {
        console.log(error);
    }
}

