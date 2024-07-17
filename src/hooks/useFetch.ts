import { useEffect, useState } from "react";

const useFetch = (
  { API_URL } = {
    API_URL: "http://3.38.98.134/jobs",
  }
) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      if (result.data) {
        setData(result.data);
        // console.log("ddddasf",result);
        
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
  };
};

export default useFetch;
