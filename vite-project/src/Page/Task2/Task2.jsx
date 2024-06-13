import { useDispatch, useSelector } from 'react-redux';
import { addValueToInp } from '../slice/text.input';



function Task2() {

    const inp = useSelector((all) => all.addValue);
    const dispatch = useDispatch();

    return (
        <>
            <p>
                3. Создайте компонент текстового поля, который позволяет
                пользователю вводить текст и отображает его в
                реальном времени.
            </p>

            <input type="text" onChange={(e) => dispatch(addValueToInp(e.target.value))} />
            <p>{inp}</p>

        </>
    )
}

export default Task2