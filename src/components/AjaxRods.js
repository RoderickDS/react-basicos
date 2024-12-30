import React, { useEffect, useState } from 'react';

function ListaUsuarios({name, avatar}){
  return(
    <figure>
      <img src={avatar} alt={name}/>
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export default function AjaxRods(){
const [usuarios, setUsuarios] = useState([]);

const getUsuarios = () => {
  let url = "https://reqres.in/api/users?page=2";
  fetch(url)
  .then((res) => res.json())
  .then((json) => { json.data.forEach((el) => {
    let usuario = {
       id: el.id,
       name: el.first_name,
       avatar: el.avatar, 
    };
    setUsuarios((usuarios)=>[...usuarios, usuario])
  })
    
  }, error => {
    console.log(error)
  })
}

useEffect(() => {
  getUsuarios()
},[])

  return(
    <>
    <h2>Ejercicio Ajax por RODS</h2>
    {usuarios.map((el) => <ListaUsuarios key={el.id} name={el.name} avatar={el.avatar}/>)}
    </>
  )
}