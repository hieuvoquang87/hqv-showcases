import React from "react";
import { render } from "@testing-library/react";
import { DetailPage } from "./DetailPage";

const mockSelectedPokemon = {
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1/",
  id: "1",
  imageUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  types: [
    {
      slot: 1,
      type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    },
    {
      slot: 2,
      type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    },
  ],
  height: 7,
  weight: 69,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  locations: [
    "32.734778,-117.152630",
    "32.734196,-117.139709",
    "32.833744,-117.067149",
    "32.819219,-117.029244",
    "32.907707,-116.797917",
  ],
};

test("rendering page with back button", () => {
  const { getByText } = render(<DetailPage selectedPokemon={mockSelectedPokemon}/>);
  const backBtn = getByText(/Back/i);
  expect(backBtn).toBeInTheDocument();
});

test("rendering page with Pokemon detail", () => {
  const { getByText } = render(<DetailPage selectedPokemon={mockSelectedPokemon}/>);

  const pokemonHeight = getByText(/7/i);
  expect(pokemonHeight).toBeInTheDocument();

  const pokemonWeight = getByText(/69/i);
  expect(pokemonWeight).toBeInTheDocument();

  const pokemonType = getByText(/grass/i);
  expect(pokemonType).toBeInTheDocument();
});
