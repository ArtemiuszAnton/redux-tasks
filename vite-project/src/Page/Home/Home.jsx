import { Link } from 'react-router-dom'

function Home() {
    return <>
        <h1>redux tasks</h1>

        <p><Link to={'/task1'}>Перейти к задаче 1</Link></p>
        <p><Link to={'/task2'}>Перейти к задаче 2</Link></p>
        <p><Link to={'/task9'}>Перейти к задаче 9</Link></p>

    </>
}
export default Home