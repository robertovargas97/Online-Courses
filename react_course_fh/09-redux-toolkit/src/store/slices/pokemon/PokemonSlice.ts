import { createSlice } from "@reduxjs/toolkit";

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
    myReducer: (state /* action: PayloadAction<number> */) => {},
  },
});

export const { myReducer } = pokemonSlice.actions;
