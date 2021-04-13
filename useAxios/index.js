import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [refetch, setRefetch] = useState(0);
  const onRefetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setRefetch(Date.now());
  };

  useEffect(() => {
    if (!options.url) {
      return;
    }

    axiosInstance
      .get(options.url)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
          error: null,
        });
      })
      .catch((error) => {
        setState({ ...state, data: null, error });
      });
  }, [refetch]);

  return { ...state, onRefetch };
};

export default useAxios;
