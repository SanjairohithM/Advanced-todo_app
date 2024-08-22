
import Header from './Header';
import Contant from './Contant';
import Footer from './Footer';
import { useState ,useEffect} from 'react';
import Additem from './Additem';
import Searchitem from './Searchitem';






function App() {
  const API_URL ='http://localhost:3000/items';
  const[items,setItems]=useState([]);

  const[newItem,setNewItem]=useState('')
  const[search,setSearch]=useState('')

  useEffect(()=> {
    const fetchItems =async()=>{
      try{
        const response =await fetch(API_URL);
        console.log(response)
        const listItems  =await response.json();
        console.log(listItems);     
      }
      catch(err){
        console.log(err.stack)
      }
    }
    (async () => await fetchItems())()
  },[])

  const addItem =(item) => {
    const id= items.length ? items[items.length-1].id +1 : 1;
    const addNewItem ={id, checked:false, item}
    const listItems =[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id===id ? {...item,checked:!item.checked}:item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))

  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))

  }
  const handleSubmit =(e) =>{
    e.preventDefault()
    if(!newItem)return;
    console.log(newItem)
    addItem(newItem)
    setNewItem( ' ')
  }
 
 
  


  return (
    <div className="App">
        <Header title="todo-list" />
        <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
        <Searchitem
          search={search}
          setSearch={setSearch}
        />
        
        <Contant 
          items = {items.filter(item =>(item.item).toLowerCase().includes(search.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
        <Footer 
        lenth={items.length}
        />
    </div>
  );
}

export default App;
