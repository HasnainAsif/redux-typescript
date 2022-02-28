import { Dispatch } from 'redux';

export const getPokemon = () => (dispatch: Dispatch) => {
  try {
    dispatch({
      type: 'LOADING_POKEMON',
    });
  } catch (e) {}
};
