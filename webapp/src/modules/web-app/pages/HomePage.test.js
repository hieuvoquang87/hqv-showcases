import React from "react";
import { render } from "@testing-library/react";
import { HomePage } from "./HomePage";

const mockOnInit = () => {}
const mockPokemonData = {
  1: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    id: "1",
  },
  2: { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/", id: "2" },
  3: { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/", id: "3" },
  4: {
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
    id: "4",
  },
};

test("rendering page pokemon data", () => {
  const { getByText } = render(<HomePage onInit={mockOnInit} pokemons={mockPokemonData}/>);
  const bulbasaur = getByText(/bulbasaur/i);
  const ivysaur = getByText(/ivysaur/i);
  const charmander = getByText(/charmander/i);
  
  expect(bulbasaur).toBeInTheDocument();
  expect(ivysaur).toBeInTheDocument();
  expect(charmander).toBeInTheDocument();
});
