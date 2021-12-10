export const myAction = (value) => {
  return {
    type: "MY_ACTION",
    payload: value,
  };
};

export const getPokemom = (value) => {
  return {
    type: "GET_POKEMON",
    payload: value,
  };
};
