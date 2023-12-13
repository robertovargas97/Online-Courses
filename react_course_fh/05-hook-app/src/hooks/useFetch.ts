import { useEffect, useState } from "react";

type ResponseType = {
  data: Record<string, any> | null;
  isLoading: boolean;
  error: any;
};

export const useFetch = (url: string): ResponseType => {
  const initialState: ResponseType = {
    data: null,
    isLoading: true,
    error: null,
  };
  const [state, setState] = useState(initialState);

  const fecthPokemon = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const response = await fetch(url);
    if (response.status === 404) {
      setState({
        data: null,
        isLoading: false,
        error: "Not Found",
      });
    } 
    else {
      const data = await response.json();

      setState({
        data: data,
        isLoading: false,
        error: null,
      });
    }
  };

  useEffect(() => {
    fecthPokemon();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};
