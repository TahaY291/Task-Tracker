// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Tasks from "./components/Tasks";
// import AddTask from "./components/AddTask";

// function App() {
//   const [showAddTask, setShowAddTask] = useState(false)
//   const [tasks, settasks] = useState([]);

//   useEffect(()=>{
//     const getTasks = async ()=>{
//       const taskFromServer = await fetchData()
//       settasks(taskFromServer)
//     }
//     getTasks()
//   },[])

//   const fetchData = async ()=>{
//     const res = await fetch("http://localhost:5000/tasks")
//     const data = await res.json()
//     return data
//   }

//   async function deleteTask(id) {
//     const res = await fetch(`http://localhost:5000/tasks/${id}`, {
//       method: 'DELETE',
//     })
//     //We should control the response status to decide if we will change the state or not.
//     settasks(tasks.filter((task) => task.id !== id))
     
//   }

//   function onToggle(id) {
//     console.log(id);
//     settasks(tasks.map((task)=> (task.id === id ? {...task , reminder: !task.reminder} : task)))
//   }

//   function addTask(task) {
//     let id = Math.floor(Math.random()*1000)
//     let newTask = {id, ...task}
//     settasks(prev=> [...prev, newTask])
//   }

//   return (
//     <div className="container">
//       <Header onAdd={setShowAddTask} showAdd={showAddTask} />
//       {showAddTask && <AddTask addTask={addTask} />}
//       <Tasks tasks={tasks}  onDelete={deleteTask} onToggle={onToggle} />
//     </div>
//   );
// }

// export default App;
