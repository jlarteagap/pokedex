import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endPointUrl) {
  console.log(endPointUrl);
  try {
    const url = `${API_HOST}/pokemon/?limit=20&offset=0`;
    const res = await fetch(endPointUrl || url);
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonDetailsByUrl(url) {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}
