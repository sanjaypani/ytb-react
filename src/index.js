import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MyComponent() {
    return (
        <main>
            <img src="react_logo.png" alt="logo" width="48"/>
            <h1>Fun Fact About React!</h1>
            <ul>
                <li>Was First release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200k starts on GitHub </li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of apps and mobiles</li>
            </ul>
        </main>
    )
}

function Page() {}

root.render(
    <MyComponent/>
);

//imperative Style
/*const h1  = document.createElement("h1");
h1.textContent = "This is Imperative Coding"
h1.className = "header"
document.getElementById("root").appendChild(h1)*/

//}