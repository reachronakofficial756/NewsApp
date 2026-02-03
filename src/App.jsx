import { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import General from "./Pages/General";


function App() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [news, setNews] = useState([]);
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  //axios call to fetch news... it directly get the json data from the newsapi.. it occurs only when the activeCategory changes
  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://api.mediastack.com/v1/news?access_key=9c2a552302e35c83ac8056e0b26fad45&categories=${activeCategory.toLowerCase()}&limit=100&countries=in&languages=en`)
      .then((response) => {
        setNews(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [activeCategory]);
  //  console.log(news); 

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <SideBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path={`/`} element={<General category={activeCategory} news={news} isLoading={isLoading} />} />
      </Routes>

    </div>
  );
}

export default App;
