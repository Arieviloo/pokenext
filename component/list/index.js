import React from 'react'

export default function List({pok}) {
  return (
    <div>
      {pok.map(e => <li>{e.pokemon_species.name}</li>)}
      
    </div>
  )
}
