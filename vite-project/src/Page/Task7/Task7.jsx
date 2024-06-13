import { useDispatch, useSelector } from 'react-redux';
import { checkValid } from '../slice/password';



function Task7() {

    const inp = useSelector((all) => all.validPwd);
    const dispatch = useDispatch();

    const validation = () => console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(inp));


    return (
        <>
            <p>
                8. Реализуйте компонент для ввода пароля с валидацией. Пользователь должен
                ввести пароль, который соответствует определенным требованиям (например,
                содержание букв, цифр и специальных символов).
            </p>


            <input type="text" onChange={(e) => dispatch(checkValid(e.target.value))} />
            <button onClick={validation()}>check</button >
        </>
    )
}

export default Task7