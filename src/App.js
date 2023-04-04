import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import FlipMove from 'react-flip-move';

import PopUp from './Components/PopUp';
import { data, col1data, col2data, col3data, col4data } from './data';
import HIddenComp from './Components/HIddenComp';

function App() {
  const [copyClass, setCopyClass] = useState('');
  const [visible, setVisible] = useState('hidden');
  const [search, setSearch] = useState('');
  return (
    <div className="" >
      {/* <div className="" style={{'background':'#063b49'}}> */}
      <Header setSearch={setSearch} search={search} />
      <PopUp cls={copyClass} visible={visible} />
      {/* <h1 className='text-white'>Hello</h1> */}

      <div className='flex flex-wrap'>


        {/* { 
      data.map(d => {

        if(d.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            return  <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} /> ;
        return  '';
      })} */}

        <div className=' w-full sm:w-1/2 lg:w-1/4 md:w-1/3'>
          <FlipMove>
            {
              col1data.map(d => {

                if (d.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                  return <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} />;
                  return <HIddenComp />
              })}
          </FlipMove>
        </div>

        
        <div className=' w-full sm:w-1/2 lg:w-1/4 md:w-1/3'>
          <FlipMove>
            {
              col2data.map(d => {

                if (d.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                  return <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} />;
                  return <HIddenComp />
              })}
          </FlipMove>
        </div>

        <div className=' w-full sm:w-1/2 lg:w-1/4 md:w-1/3'>
          <FlipMove>
            {
              col3data.map(d => {

                if (d.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                  return <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} />;
                  return <HIddenComp />
              })}
          </FlipMove>
        </div>

        <div className=' w-full sm:w-1/2 lg:w-1/4 md:w-1/3'>
          <FlipMove>
            {
              col4data.map(d => {

                if (d.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                  return <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} />;
                  return <HIddenComp />
              })}
          </FlipMove>
        </div>



        

      </div>
    </div>
  );
}

export default App;
