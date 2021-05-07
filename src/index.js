import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/app.css';
import Board from './Board';


function App() {
    return (
        <div className="App">
                <Board />
        </div>
    )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)