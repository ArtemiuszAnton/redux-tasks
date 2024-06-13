import { useDispatch, useSelector } from 'react-redux';
import { changeState } from '../slice/language';



function Task9() {

    const lang = useSelector((all) => all.changeLanguage);
    const dispatch = useDispatch();

    const input = {
        ru: 'привет',
        en: 'hi',
        lt: 'labas'
    }

    return (
        <>
            <p>
                10. Создайте компонент, который позволяет пользователю выбирать язык
                интерфейса. При выборе языка текст на странице должен изменяться
                соответствующим образом.
            </p>

            <h1>{input[lang]}</h1>

            <button onClick={() => dispatch(changeState('ru'))}>ru</button>
            <button onClick={() => dispatch(changeState('en'))}>en</button>
            <button onClick={() => dispatch(changeState('lt'))}>lt</button>

        </>
    )
}

export default Task9