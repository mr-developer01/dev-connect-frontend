// import { useState } from "react";

// const useApiRequest = (url: string, method = "GET") => {
//   const [data, setData] = useState<any>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error] = useState<any>(null);

//   const getData = async (options: any = {}) => {
//     setLoading(true);
//     const token = window.localStorage.getItem("token");
//     const res = await fetch(url, {
//       method,
//       ...options,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if(method === "DELETE"){
//       setLoading(false)
//       return;
//     }
//     const data = await res?.json();

//     setData(data);
//     setLoading(false);
//   };

//   return { data, loading, error, getData };
// };

// export default useApiRequest;
