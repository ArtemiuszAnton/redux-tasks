import { useDispatch, useSelector } from 'react-redux';
import { checkValid } from '../slice/email';



function Task5() {

    const inp = useSelector((all) => all.validEmail);
    const dispatch = useDispatch();

    const isValid = () => {
        if (/^[a-zA-Z0-9]+@[A-Za-z]+\.+[a-zA-Z]+$/gm.test(inp)) console.log(true)
        else console.log(false);
    }

    return (
        <>
            <p>
                6. Создайте компонент, который отображает проверку почты (true, false) на
                валидность регулярному выражению. Валидатор состоит из Input для ввода почты
                и кнопки для запуска валидатора.
            </p>


            <input type="text" onChange={(e) => dispatch(checkValid(e.target.value))} />
            <button onClick={isValid}>check email</button >
        </>
    )
}

export default Task5