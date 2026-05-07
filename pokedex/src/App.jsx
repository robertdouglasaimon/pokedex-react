import "./assets/css/App.css";
import Pokedex from './assets/img/pokedex.png'
import Pokemom from './assets/img/blastoise-pokemon.gif'
import Luz from "./assets/components/Luz.jsx";
import { use, useState, useEffect } from "react";

export default function App() {
  const [luzColor, setLuzColor] = useState("blue");
  const [pokemon, setPokemon] = useState(null);
  const [busca, setBusca] = useState("");

  async function carregarPokemon(nomeOuId) {
    try{
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
      const dados = await resposta.json();

      const respostaDescricao = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nomeOuId}`);
      const dadosDescricao = await respostaDescricao.json();

      const descricao = dadosDescricao.flavor_text_entries.find(
          entry => entry.language.name === 'en'
        )?.flavor_text;
      
      setPokemon({
        nome: dados.name,
        id: dados.id,
        tipos: dados.types.map(tipo => tipo.type.name),
        sprite: dados.sprites.other.showdown.front_default,
        descricao,
        cry: `https://play.pokemonshowdown.com/audio/cries/${dados.name}.mp3`,
        habilidades: dados.abilities.map(h => h.ability.name)
      });




      setLuzColor("green"); // Acende a verde quando acha lá na pesquisa
    } catch {
      setLuzColor("red"); // Acende o vermelho se não achar merda nenhuma kkk
    }
  }

  
function handleBusca(evento) {
  const valor = evento.target.value.toLowerCase();
  setBusca(valor);

  // Se for número, busca direto
  if (!isNaN(valor) && valor !== "") {
    carregarPokemon(Number(valor));
  } 
  // Se for texto com mais de 2 letras, busca pelo nome
  else if (valor.length > 2) {
    carregarPokemon(valor);
  }
}


  // Depois que achar o pokemon, limpa a barra de pesquisa para evitar ficar aqueles garrancho no input e também zoar a logica e gerar um null ou undefined. Na duvida, limpa que é safe.
  useEffect(() => {
    if (pokemon) {
      setBusca("");
    }
  }, [pokemon]);

  useEffect(() => {
  if (pokemon?.cry) {
    const audio = new Audio(pokemon.cry);
    audio.play().catch(err => console.log("Erro ao tocar cry:", err));
  }
}, [pokemon]);



  return (
    <>
      <div className="pokedex-wrapper">
        <div className="pokedex-tela">

          <div className="logo-projeto">
            Projeto Pokedex - Turma Web Mobile
            <h2 className="sub-logo">Aluno: Robert Douglas</h2>
          </div>

          <div className="pokedex-tela">
            <Luz color={luzColor} className="luz"/>
            <img className="pokedex-img" src={Pokedex} alt="Pokedex" />

            { pokemon &&
              <>
                <img id="pokemon" src={pokemon.sprite} alt={pokemon.nome} />
                <div className="nome">
                  {pokemon.nome.charAt(0).toUpperCase() + pokemon.nome.slice(1).toLowerCase()}
                </div>
                <div className="descricao">{pokemon.descricao}</div>
                <div className="tipos">
                  {pokemon.tipos.map(tipo => (
                    <span key={tipo} className={`tipo ${tipo}`}>{tipo}</span>
                  ))}
                </div>
                

                {/* <div className="grito">
                  <audio controls src={pokemon.cry}></audio>
                </div> */}
              </>
            }

          </div>
        </div>

        <div className="controles-container">
          <input
            type="text"
            placeholder="Buscar por nome/id"
            className="formulario-pokemon form-control mb-2"
            value={busca}
            onChange={e => setBusca(e.target.value.toLowerCase())}
            onKeyDown={e => {
              if (e.key === "Enter" && busca.trim() !== "") {
                carregarPokemon(busca);
              }
            }}
            
          />

          <button 
            className="botoes-busca btn btn-danger"
            onClick={() => busca.trim() !== "" && carregarPokemon(busca)}
          >
            Buscar
          </button>


          <div className="botoes-dex  d-flex justify-content-between">
            <button 
              className="botao1 btn btn-dark" 
              onClick={() => carregarPokemon(pokemon ? pokemon.id + 1 : 1)}
            >
              Avançar
            </button>

            <button 
              className="botao2 btn btn-dark" 
              onClick={() => carregarPokemon(pokemon && pokemon.id > 1 ? pokemon.id - 1 : 1)}
            >
              Voltar
            </button>
          </div>
          
        </div>

        <div className="quadro-habilidades">
          <h3>Habilidades</h3>
          {pokemon?.habilidades && (
            <ul>
              {pokemon.habilidades.map((hab, index) => (
                <li key={index}>{hab}</li>
              ))}
            </ul>
          )}
        </div>


      </div>

    </>
  );
}
