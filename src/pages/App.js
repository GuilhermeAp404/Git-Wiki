import gitLogo from '../assets/gitlogo.png'

import { Container } from './styles';
//api requeste
import {api} from '../services/api'


//components
import Input from '../components/Input'
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';

function App() {
  const [currentSearch, setCurrenteSearch] = useState('')
  const [repos, setRepos] = useState([])

  const handleOnClick = async()=>{
    await api.get(`repos/${currentSearch}`)
    .then(data=>{
      const exist = repos.find((repo)=>repo.id===data.data.id)
      
      if(!exist){
        setRepos(prev=>[...prev, data.data])
        setCurrenteSearch('')
        return
      }
      alert('Esse repositorio ja foi adicionado')

    }).catch(err =>{
      if(err.response.status===404){
        alert('Repositorio não encontrado')
      }
    })
  }

  const handleRemoveRepo = (id)=>{
    const removeIndex = repos.findIndex(repo=> repo.id===id)
    repos.splice(removeIndex, 1)
    setRepos([...repos])
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Git Hub Logo" />
      <Input type="text" value={currentSearch} placeholder="Digite o nome do repositório aqui..." onChange={(e)=>setCurrenteSearch(e.target.value)}/>
      <Button onClick={handleOnClick}/>
      {repos.map(repo =>
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} key={repo.id}/>
      )}
    </Container>
  );
}

export default App;
