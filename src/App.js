import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import PopUp from './Components/PopUp';
import { data } from './data';

function App() {
  const [copyClass,setCopyClass] = useState('');
  const [visible,setVisible] = useState('hidden');
  const [search,setSearch] = useState('');
  return (
    <div className="" >
    {/* <div className="" style={{'background':'#063b49'}}> */}
      <Header setSearch ={setSearch} search={search}/>
      <PopUp cls={copyClass} visible={visible} />
      {/* <h1 className='text-white'>Hello</h1> */}
      <div className='flex flex-wrap'>
     { 
      data.map(d => {

        if(d.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            return  <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} /> ;
      })}   
      </div>
    </div>
  );
}

export default App;
