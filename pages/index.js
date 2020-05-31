import React from 'react'
import axios from 'axios'
import List from '../component/list/index'
import Nome from '../component/nome'

export default function Home(props) {
  console.log("Home -> props", props)
  return (
    <div>
      Deu bom!!
      <List pok={props.pokemon}/>
      <Nome props={props.data}/>

      <style>
        {`
          body {
            background-color: ;
          }
        `}
      </style>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const data = res.data
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokedex/2")
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    })
    .then(res => {
      return res.pokemon_entries
    });
  

  return {
    props: {
      pokemon,
      data
    }, // will be passed to the page component as props
  }
}
