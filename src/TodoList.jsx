import React, {useState} from "react";
import "./TodoList.css";
import icon from './assets/icon.png'

function TodoList() {

  
  const [lista, setLista] = useState([])
  const [novoItem, setNovoItem] = useState("");
  
  function adicionaItem(form){
    form.preventDefault();
    if(!novoItem){
      return;
    }
    setLista([...lista, {text: novoItem, isCompleted:false }])
    
    setNovoItem("");
    document.getElementById('input-entrada').focus();
  }
  
  function clicou(index){
    const listaAux = [...lista];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setLista(listaAux);
  }

    function deleta(index){
      const listaAux = [...lista];
      listaAux.splice(index, 1)
      setLista(listaAux)

    }

    function deletaTudo(){
      setLista([]);
    }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit ={adicionaItem}>
        <input type="text" placeholder="Adicione uma tarefa" 
        value={novoItem}
        onChange={(e) => { setNovoItem(e.target.value) }}
      />


        <button className="add" type="submit" >Adicionar</button>
      </form>
    <div className="listaTarefas">
      <div>
    {

      lista.map((item, index) => (
      <div key={index} className={item.isCompleted ? "item completo" : "item"}>
      <span onClick={()=>{clicou(index)}}>{item.text}</span>
      <button onClick={()=> {deleta(index)}} className="del">Deletar</button>
  </div>
      ))
}
{
  lista.length > 0 &&
  <button onClick={()=> {deletaTudo()}} className="deleteAll">Apagar Tudo</button>
}      
        
    </div>
    
    </div>

    
    </div>
   
  )
}

export default TodoList;
