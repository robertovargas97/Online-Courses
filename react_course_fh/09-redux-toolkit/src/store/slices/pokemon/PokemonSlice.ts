import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PokemonSliceState {
  page: number;
  pokemons: Array<Record<string, unknown>>;
  isLoading: boolean;
}

const initialState: PokemonSliceState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state /* action: PayloadAction<number> */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<number>) => {
      console.log("set Pokemons");
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
