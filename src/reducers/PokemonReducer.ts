interface initialStateI {}

const initialState: initialStateI = {};

const pokemonReducer = (
  state: initialStateI = initialState,
  { type, payload }: any
): initialStateI => {
  switch (type) {
    case 'first':
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default pokemonReducer;
