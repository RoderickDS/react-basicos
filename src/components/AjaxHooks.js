import React, { useEffect, useState } from 'react';

function Pokemon({avatar, name}) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks (){
  const [pokemons, setPokemons] = useState([]);
//VERSION DEL FETCH CON ASYNC
useEffect(() => {
const getPokemons = async (url) => {
  let res = await fetch(url),
    json = await res.json();
    //console.log(json);
    json.results.forEach(async (el) => {
      let res = await fetch(el.url),
      json = await res.json();

          //console.log(json);
          let pokemon = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default,
          };

          setPokemons((pokemons)=>[...pokemons, pokemon]);       
});
    }
;

getPokemons("https://pokeapi.co/api/v2/pokemon/");

//VERSION DEL FETCH NORMAL

/*useEffect(() => {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  fetch(url)
  .then((res) => res.json())
  .then((json) => {
    //console.log(json);
    json.results.forEach((el) => {
      fetch(el.url)
        .then((res) => res.json())
        .then((json) => {
          //console.log(json);
          let pokemon = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default,
          };
          /*esta es la funcion que permite modificar el estado de la variable(pokemons)
          se pasa pokemons como argunmento ya que es la variable que actualiza
          setPokemons((pokemons)=>[...pokemons, pokemon]);        
        });
    });
  });

*/
}, []);
  return (
    <>
      <h2>Peticiones Asíncronas en hooks</h2> 
      {pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}    
    </>
  );
}