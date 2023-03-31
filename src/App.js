import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import PopUp from './Components/PopUp';
import { data } from './data';

function App() {
  return (
    <div className="">
    {/* <div className="" style={{'background':'#063b49'}}> */}
      <Header/>
      <PopUp />
      <h1 className='text-white'>Hello</h1>
      <div className='flex flex-wrap'>
     { 
      data.map(d => {
      return <Card key={d.title} data={d} />
      })}   
      </div>
    </div>
  );
}

export default App;
