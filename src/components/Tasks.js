import React from 'react';

const tasks =[{
    id: 1,
    title: "Test Title",
    isDeleted: false
},
{
    id: 2,
    title: "Test Task 2",
    isDeleted: false
}
]


const Tasks = () =>{
    return(
        <div>
            { tasks.map(task => <p>ID: { task.id } Title: { task.title }</p>) }
        </div>
    )
}

export default Tasks;