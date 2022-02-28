export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_FAIL = 'POKEMON_FAIL';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';

type PokemonAbility = {
  ability: {
    name: String;
    url: String;
  };
  base_experience: Number;
};
type PokemonSprites = {
  front_default: String;
};

type StatsType = { base_stat: Number; stat: { name: String; url: String } };
type PokemonStat = {
  stats: StatsType[];
};

interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}
interface PokemonFail {
  type: typeof POKEMON_FAIL;
}
interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
}
