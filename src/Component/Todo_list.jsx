import React, { useState } from 'react';
import delete_button from './delete.svg';
import Edit_button from './edit.svg'
import './Todo_list.css';
const Todo_list = () => {
    const[intial_input,setinput]=useState("");
    const[items,setItems]=useState([]);
    const[list_Toggle,setToggle]=useState(true);
    const[edit_list,set_EditList]=useState("")
    const itemsEvent=(e)=>{
      setinput(e.target.value);
      
    }
    
     
    const add_items=()=>{
        if(intial_input==""){
         alert(" empty field not submit")
        }
        else if(intial_input&&!list_Toggle){
        setItems(
          items.map((element)=>{
          if(element.id=== edit_list){
           return {...element,name:intial_input}
          //  console.log(intial_input);
          }
          return element;
          })
        );
        set_EditList("");
        setToggle(true);
        setinput(" ");
          
        }
        else
        {
          const input_Data={id:new Date().getTime().toString(),name:intial_input}
        setItems([...items,input_Data]);
        setinput(" ");
        }
    }
    const delete_items=(index)=>{
        const update_Items=items.filter((element)=>{
         return index!==element.id;
        });
        setItems(update_Items);
    }
      const Edit_items=(id)=>{
      const find_item=items.find((element)=>{
      return id===element.id
     });
     setToggle(false);
     setinput(find_item.name);
     set_EditList(id);
    }
    const Clear_fun=()=>{
        setItems([]);

    }
  return (
    <>
       <div className='main'>
         <div className='todo_list_app'>
          <h2 className='todo_heading'>Todo List</h2>
          <div className='enter_data'>
            <input placeholder='👍Enter a items' value={intial_input} onChange={itemsEvent}/>
         {
           
             list_Toggle ? <button onClick={add_items}>+</button> : <li><img src={Edit_button} className="App_logo_edit1" onClick={add_items}/></li> 
         }
          </div>
          <div className='show_data'>
             {/* <div className='show_list'>
                     <ul>
                        <li>Apple</li>

                     </ul>
                     <div>
                      <img src={delet} className="App-logo_delete" alt="logo" />
                     </div>
                  </div> */}
                {/* <li>{intial_input}</li> */}
                {
                  items.map((value)=>{
                  return(
                    <div className='show_list' key={value.id}>
                     <ul>
                        <li>{value.name}</li>
                     </ul>
                     <div className='right_icon'>
                      <img src={Edit_button} className="App_logo_edit" alt = "edit icon" onClick={()=>Edit_items(value.id)}/>
                      <img src={delete_button} className="App-logo_delete" alt="image path is not correct" onClick={()=>delete_items(value.id)}/>
                     </div>
                  </div>
                  );
                })
                }
            
          </div>
           
        </div>
        
       </div>
       <div className='button_div'>
            <button onClick={Clear_fun}>Clear All</button>
          </div>
    </>
  )
}

export default Todo_list
