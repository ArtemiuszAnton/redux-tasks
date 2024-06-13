import { useDispatch, useSelector } from 'react-redux';
import { showParagraf, hideParagraf } from '../slice/show';



function Task4() {

    const flag = useSelector((all) => all.swapFlag);
    const dispatch = useDispatch();

    return (
        <>
            <p>
                5. Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть".
                При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст
                скрывается.
            </p>

            <h1>{flag ? 'TEXT' : ''}</h1>

            <button onClick={() => dispatch(showParagraf())}>Показать</button>
            <button onClick={() => dispatch(hideParagraf())}>Скрыть</button>
        </>
    )
}

export default Task4