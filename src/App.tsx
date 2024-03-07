

import  { useState,useCallback } from 'react'

const App = () => {

  const myUsers= [{
    id: 0,
    name: 'Johnson ',
    age: 12,
    email:'Panshak04@gmail.com'
  }, {
    id: 1,
    name: 'Mario',
    age: 90,
    email:'Panshak04@gmail.com'
  }, {
    id: 2,
    name: 'Faith',
    age: 56,
    email:'Panshak04@gmail.com'
  }, {
    id: 3,
    name: 'Love',
    age: 67,  
    email:'Panshak04@gmail.com'
  }, {
    id: 4,
    name: 'Apollo',
    age: 5,
    email:'Panshak04@gmail.com'
  }];

const [User,setStudent]=useState(myUsers);


  const registerStudent = () => {
   
    setStudent([{
   id:5,
  name: 'Hpollo',
  age: 8,
  email:'Panshak04@gmail.com'
}, ...User]);


  };


  const deleteStudent = (index: number) => {
        const newUser = User.filter((_, id) => id !== index);
        setStudent(newUser);
      };

      return (
        <ul>
          {User.map((user,id) => (
            <li key={id}>
              <div>
                {/* <p>id:{user.id}</p> */}
                <p>name:{user.name}</p>
                <p>age:{user.age}</p>
                <p>email:{user.email}</p>

                <div className="">
                  <button onClick={registerStudent}>registerStudent</button>
                  <button onClick={() => deleteStudent(id)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
     );
    };




export default App;























// const[myNumber,setCount] = useState(1);

// function addCount() {
//   setCount(myNumber +1);

// }

// function deleteCount() {
//   setCount(myNumber - 1);
// }

//   return (
//     <div>
// <h1>{myNumber}</h1>
//  <button onClick={addCount}>Add</button>
// <button onClick={deleteCount}>Delete</button>

//     </div>
//   )












































// import { useState } from "react";
// import Alert from "./components/Alert";

// // const Appp = () => {
// //   const [state,setState] = useState([])
// //   function getName(){
// //   /// implement server call
// //   }

// //   return <div>
// //     <h1>

// //     </h1>
// //     <p></p>

// // <input type="text" name="" id="" />

// //   </div>

// // }

// function App() {
//   const [todos, setTodos] = useState(["sdfas", "sdfa", "sdfads"]);

//   const addTodo = () => {
//     setTodos(["New Todo", ...todos]);
//   };

//   const deleteTodo = (index: number) => {
//     const newTodos = todos.filter((_, idx) => idx !== index);

//     setTodos(newTodos);
//   };

//   const editTodo = (index: number) => {
//     const element = document.getElementById(`todo_${index}`);
//     if (element !== null) {
//       const inputValue = (element as HTMLInputElement).value;
//       if (inputValue.length === 0) {
//         alert("Cannot be empty");
//       } else {
//         const newTodos = todos.map((todo, idx) => {
//           if (idx === index) {
//             return inputValue;
//           } else {
//             return todo;
//           }
//         });

//         setTodos(newTodos);
//       }
//     }
//   };

//   return (
//     <div>
//       <Alert>
//         Hello <span>Wworld</span>
//       </Alert>

//       <ul>
//         {todos.map((todo, index) => {
//           return (
//             <li key={index}>
//               <div>
//                 <p>{todo}</p>

//                 <div className="">
//                   <input
//                     type="text"
//                     placeholder="update todo"
//                     name=""
//                     id={`todo_${index}`}
//                   />
//                   <button onClick={addTodo}>Add</button>
//                   <button onClick={() => deleteTodo(index)}>Delete</button>
//                   <button onClick={() => editTodo(index)}>edit</button>
//                 </div>
//               </div>
//             </li>
//           );
//         })}
//       </ul>

//       {/* <button onClick={addTodo}>Add</button> */}
//       {/* <button onClick={deleteButton}>Delete</button> */}
//     </div>
//   );
// }

// export default App;

// // // import Message from './Message';
// // import ListGroup from './components/ListGroup';
// // // function App() {
// // //   return <div><Message/></div>
// // // }

// // function App() {

// //   let items = [
// //     'New York',
// //     'Lagos',
// //     'Paris',
// //     'London',
// //     'Canada'
// // ];

// // const handleSelectItem=(item:string)=>{
// //   console.log(item);

// // }
// //   return (
// //   <div>
// //     <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>

// //     </div>
// //   )
// // }

// // export default App;