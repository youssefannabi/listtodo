import React,{useState} from 'react';
import './App.css'

function App( ) {

  
  const [value,setValue]=useState('')
  const [tasks,seTasks]=useState([])


 const addvalue  =()=> { return (seTasks([...tasks , {task : value , id: tasks.length}]) )}

const submitvalue=(e)=> {
  e.preventDefault();
  return (
  addvalue(),
  setValue("")
)}

  

const changeValue = id => {
 let  x = prompt("enter new task here") ;
 seTasks(tasks.map(el => ( el.id == id) ? { id : id ,value: x } : el ))
}

const removevalue = id => {
  let  newTasks = [...tasks];

  newTasks.splice(id, 1);
  seTasks(newTasks);
};



  return (
  <div  className="all">
     
      <form onSubmit={submitvalue}>
      <input onChange={ event => setValue(event.target.value)} value={value} />
      
      <button type="submit"> click to add </button>
      
      
       </form>
  
  
   <ul>{tasks.map((e,id)=>(  <li key={id}>
     <span>  {e.task}  </span> 
     <span>  {e.value}  </span> 
     <button onClick={() => removevalue(e.id)}>x</button>
     <button onClick={() => changeValue(e.id)}>change</button>
     </li>
     
     ))}
</ul>
    </div>
    
  )
}

export default App;
