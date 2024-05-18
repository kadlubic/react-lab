
import './App.css';
import {useState} from "react";


function App() {
    const [email, setEmail] = useState('magda@agh.edu.pl');
    const [jestZalogowany, setJestZalogowany] = useState(false);


    function handleChange(event) {
        setEmail(event.target.value);
    }

    function logout() {
    setJestZalogowany(false);
    setEmail(" ");
    }

    let content;
    if (jestZalogowany) {
        content = <div>
            <h2>Twoj e-mail to {email}</h2>
            <button onClick={() => setJestZalogowany(false)}>Wyloguj się</button>
        </div>
    } else {
        content = <div>
            <input type="text" onChange={handleChange}></input>
            <button onClick={() => setJestZalogowany(true)}>Zaloguj się</button>
            </div>
        }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}
export default App;