import { useDispatch, useSelector } from 'react-redux';
import { checkValid, getInp } from '../slice/password1';



function Task7_2() {

    const inp = useSelector((all) => all.validPwd1);
    const dispatch = useDispatch();


    return (
        <>
            <p>
                8. Реализуйте компонент для ввода пароля с валидацией. Пользователь должен
                ввести пароль, который соответствует определенным требованиям (например,
                содержание букв, цифр и специальных символов).
            </p>


            <input type="text" onChange={(e) => dispatch(getInp(e.target.value))} />
            <button onClick={() => dispatch(checkValid())}>check</button >

            <h1>{String(inp.check)}</h1>
        </>
    )
}

export default Task7_2