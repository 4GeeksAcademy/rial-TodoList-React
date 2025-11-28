import { useState } from "react";

const Task = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleAddItem = (e) => {
        if (e.key === "Enter" && task.trim() !== '') {

            // return; // No agregar elementos vacíos

            setTaskList([...taskList, task]);
            setTask(''); // Limpiar el input
        }
    };

    const handlerDelete = (index) => {

        const newTaskList = taskList.filter((_, indx) => indx !== index);
        setTaskList(newTaskList);
    };

    return (
        <div className="container-fluid">

            <div className="row text-center mt-3">
                <h1>Todos</h1>
            </div>

            <div className="row text-center mt-3">
                <div className="col-4 offset-4">
                    <div>
                        <input type="text" onChange={e => setTask(e.target.value)} value={task} onKeyDown={handleAddItem} placeholder="Añadir tarea y presionar enter" className="w-100"/>
                    </div>
                </div>
            </div>

            <div className="row text-start mt-3">
                <div className="col-4 offset-4 border">
                    <ul>
                        {
                            taskList.map((item, index) => {
                                return (
                                    <div className="d-flex justify-content-between border border-dark mb-2" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} key={index}>
                                        <li>{item}</li>
                                        {hoveredIndex === index && (<button onClick={() => handlerDelete(index)} className="btn btn-danger btn-sm">Delete</button>)}
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Task;