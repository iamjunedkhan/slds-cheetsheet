import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import FlipMove from 'react-flip-move';

import PopUp from './Components/PopUp';
import { col1data, col2data, col3data, col4data } from './data';
import HIddenComp from './Components/HIddenComp';
import Footer from './Components/Footer';

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

      <div style={{ "min-height": "350px" }} className='flex flex-wrap '>


        {/* { 
      data.map(d => {

        if(d.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            return  <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} search={search} /> ;
        return  '';
      })} */}

        <div className=' w-full sm:w-1/2 lg:w-1/4 md:w-1/3'>
          <FlipMove>
            {
              col1data.map(d => {
                let filterClasses = d.classes.filter(cls => cls.includes(search));
                if (filterClasses.length > 0)
                  return <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} search={search} />;
                return <HIddenComp />
              })}
          </FlipMove>
        </div>


        <div className=' w-full sm:w-1/2 lg:w-1/4 md:w-1/3'>
          <FlipMove>
            {
              col2data.map(d => {

                let filterClasses = d.classes.filter(cls => cls.includes(search));
                if (filterClasses.length > 0)
                  return <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} search={search} />;
                return <HIddenComp />
              })}
          </FlipMove>
        </div>

        <div className=' w-full sm:w-1/2 lg:w-1/4 md:w-1/3'>
          <FlipMove>
            {
              col3data.map(d => {

                let filterClasses = d.classes.filter(cls => cls.includes(search));
                if (filterClasses.length > 0)
                  return <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} search={search} />;
                return <HIddenComp />
              })}
          </FlipMove>
        </div>

        <div className=' w-full sm:w-1/2 lg:w-1/4 md:w-1/3'>
          <FlipMove>
            {
              col4data.map(d => {

                let filterClasses = d.classes.filter(cls => cls.includes(search));
                if (filterClasses.length > 0)
                  return <Card key={d.title} data={d} setCopyClass={setCopyClass} setVisible={setVisible} search={search} />;
                return <HIddenComp />
              })}
          </FlipMove>
        </div>





      </div>

      <Footer />
    </div>
  );
}

export default App;
