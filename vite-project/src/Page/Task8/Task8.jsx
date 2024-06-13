import { useDispatch, useSelector } from 'react-redux';
import { plusSize, minusSize } from '../slice/size';



function Task8() {

    const size = useSelector((all) => all.changeSize);
    const dispatch = useDispatch();

    return (
        <>
            <p>
                9. Создайте компонент, который позволяет пользователю управлять размером
                текста на странице с помощью кнопок "увеличить" и "уменьшить".
            </p>

            <h1 style={{ fontSize: size }}>TEXT</h1>
            <button onClick={() => dispatch(plusSize())}>+1</button>
            <button onClick={() => dispatch(minusSize())}>-1</button>

        </>
    )
}

export default Task8