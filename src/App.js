import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './StylingAndCss/Stylesheet';
import Inline from './StylingAndCss/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Forms/Form'
import LifecycleA from './LifecyclesMethods/LifecycleA';
import FragmentDemo from './Fragments/FragmentDemo';
import Table from './Fragments/Table';

function App() {
  return (
    <div className="App">
      <Table/>
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline primary = {false}/> */}
      {/* <Stylesheet primary = {true} /> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message></Message> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" >
        <button>Click</button>
      </Greet> */}
      {/* <Welcome name="Clark" heroName="Superman"></Welcome> */}
      
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  //ReactDOM.render(element, document.getElementById('root'));
}



export default App;