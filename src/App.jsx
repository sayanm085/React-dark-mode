import { useEffect, useState } from 'react';
import{ThemeContextProvider,} from './Contexts/Context'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {


  const[thememode,setthememode]=useState("light");

  const darkmode =()=>{
    setthememode("dark")

  }

  const lightmode =()=>{
    setthememode("light")
  }

  useEffect(() => {
     document.querySelector("html").classList.remove("light", "dark");
     document.querySelector("html").classList.add(thememode);
  }, [thememode]);


  return (
    <ThemeContextProvider value={{thememode,darkmode,lightmode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"> <ThemeBtn/>  </div>
          <div className="w-full max-w-xl mx-auto"> <Card/>     </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App
