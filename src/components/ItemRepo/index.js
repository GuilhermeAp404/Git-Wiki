/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {ItemRepoContainer} from './styles'

const ItemRepo = ({repo, handleRemoveRepo}) =>{
    const handleRemove = ()=> {
        handleRemoveRepo(repo.id)
    }

    return (  
        <ItemRepoContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a className='remove' onClick={handleRemove} href='#' >Remover</a>
            <a className='look' href={repo.html_url} target='blank'>Ver em outra página</a>
            <hr/>
        </ItemRepoContainer>
    )
}

export default ItemRepo