import { useDispatch, useSelector } from 'react-redux';
import { checkOnPalindrome } from '../slice/palindrome';



function Task3() {

    const inp = useSelector((all) => all.Palindrome);
    const dispatch = useDispatch();

    return (
        <>
            <p>
                4. Создайте компонент формы. По клику на кнопку собрать данные из input и
                проверить вводимую строку на палиндром
            </p>

            <input type="text" onChange={(e) => dispatch(checkOnPalindrome(e.target.value))} />
            <button onClick={() => console.log(inp == '' ? '' :
                inp == inp.split('').reverse().join('') ? 'palindrome' : 'not palindrome')}>
                check
            </button>
        </>
    )
}

export default Task3