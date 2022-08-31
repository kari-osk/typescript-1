import './App.css';

interface IPokemon {
  id: number;
  nome: string;
  kilos?: number;
  pokemon: boolean;
  categoria: string;
}

const pokemons: IPokemon[] = [
  {
    id: 1,
    nome: "bulbasaur",
    kilos: 6.9,
    pokemon: true,
    categoria: "semente",
  },
  {
    id: 2,
    nome: "charmander",
    kilos: 8.5,
    pokemon: true,
    categoria: "lagarto",
  },
  {
    id: 3,
    nome: "charizard",
    kilos: 95.5,
    pokemon: true,
    categoria: "chama",
  },
  {
    id: 4,
    nome: "ash",
    pokemon: false,
    categoria: "treinador",
  },

]


function App(props: IPokemon) {
  return (
    <div className="App">
      <h1>Centro Pokemon</h1>
      {
        pokemons.map((pokemons) => {
          return (
            <div key={pokemons.id} className='card'>
              <h3>Nome: {pokemons.nome}</h3>
              <p>
                {pokemons.pokemon ? 'É Pokemon: sim.' : 'É Pokemon: não.'}
              </p>
              <p>Categoria: {pokemons.categoria}</p>
              <p>
                {pokemons.kilos ? 'Peso: ' + pokemons.kilos + ' kg' : ' - '}
              </p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
