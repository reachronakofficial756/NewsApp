import { useState,useEffect } from "react";
import SideBar from "./components/SideBar";
import axios from "axios"; 
import { Routes, Route } from "react-router-dom";
import General from "./Pages/General";


function App() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [news, setNews] = useState([]);

  //axios call to fetch news... it directly get the json data from the newsapi.. it occurs only when the activeCategory changes
      useEffect(() => {
        axios.get(`https://api.mediastack.com/v1/news?access_key=9c2a552302e35c83ac8056e0b26fad45&categories=${activeCategory.toLowerCase()}&limit=8&countries=in&languages=en`) 
          .then((response) => {
           setNews(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [activeCategory]);
  //  console.log(news); 
  
  return (
    <>
      <SideBar activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>

      <Routes>
        <Route path={`/`} element={<General category={activeCategory} news={news}/>}/>
      </Routes>
      
    </>
  );
}

export default App;
