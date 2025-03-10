import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<h1>Hello</h1>)
// root.render(
//     <ul>
//         <li>Super popular JS library</li>
//         <li>will help me even more </li>
//         <li>Cool Logo</li>
//         <li>D</li>
//     </ul>
// )

const reactElement =  <h1>Hello </h1>
console.log(reactElement);


root.render(reactElement);