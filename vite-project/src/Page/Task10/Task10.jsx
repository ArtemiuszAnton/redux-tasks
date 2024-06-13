import { useDispatch, useSelector } from 'react-redux';
import { addTasks, deleteTasks } from '../slice/tasks';
import { useState } from 'react';



function Task10() {

    const [inp, getInp] = useState('');

    const tasks = useSelector((all) => all.acceptTasks);
    const dispatch = useDispatch();

    return (
        <>
            <p>
                11. Реализуйте компонент "Список задач", который позволяет пользователю
                добавлять, удалять и отмечать задачи как выполненные.
            </p>

            <h1>{tasks.map((el) => {
                return <p>{el}<button onClick={()=> dispatch(deleteTasks(el))}>delete task</button></p>
            })}</h1>
            <input type="text" onChange={(e) => getInp(e.target.value)} />
            <button onClick={() => dispatch(addTasks(inp))}>add task</button >



        </>
    )
}

export default Task10