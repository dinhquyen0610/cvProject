import { useState, createContext, useEffect, useRef, useContext } from 'react'


import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Main from './Component/Main/Main';
import './App.css'

export const Persondata=new createContext();

 function App() {

  const [person,setPerson]= useState({image:"no_load.png",listSkill:[]})
 
  useEffect(()=>{
    async function fetchPostList(){
      try{
        const requestUrl= 'https://my.api.mockaroo.com/myCV.json?key=70973d50'
        const response= await fetch(requestUrl)
        const responseJson= await response.json();
        console.log(responseJson)
        setPerson(responseJson);
      }
      catch(err){
        console.log(err)
      }
    }
    fetchPostList()
  },[])
  return (
    //Persondata: là useContext dùng để truyền các value qua các component con cháu mà không cần thông qua prop
    <Persondata.Provider value={person}>
      {console.log("App-render")}
      <div className='container'>
        <Header />
        <div className='wrap'>
          <Sidebar/>
          <Main />
        </div>
      </div>
    </Persondata.Provider>
  )
}
export default App;

