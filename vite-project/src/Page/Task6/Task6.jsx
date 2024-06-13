import { useDispatch, useSelector } from 'react-redux';
import { getInp1, getInp2 } from '../slice/summary';



function Task6() {

    const inp = useSelector((all) => all.getSummary);
    const dispatch = useDispatch();


    const doSum = () => console.log(eval(+inp.value1 + +inp.value2));

    return (
        <>
            <p>
                7. Создайте компонент, который отображает сумму значений input. Компонент
                состоит из Input для ввода математического значения и кнопки сложения для
                высчитывания результата внутри строки.
            </p>


            <input type="text" onChange={(e) => dispatch(getInp1(e.target.value))} />
            <input type="text" onChange={(e) => dispatch(getInp2(e.target.value))} />
            <button onClick={() => doSum()}>calculate</button >
        </>
    )
}

export default Task6