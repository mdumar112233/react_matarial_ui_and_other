import './App.css';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import News from './components/News/News';
import Rechart from './components/Rechart/Rechart';
import axios from 'axios';

function App() {
 const [articles, setArticles] = useState([]);
//  useEffect(() => {
//    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4a6e8cda346d45208029acf84ce4eef9';
//    fetch(url)
//    .then(res => res.json())
//    .then(data => setArticles(data.articles))
//  }, []);
 useEffect(() => {
  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4a6e8cda346d45208029acf84ce4eef9';
  axios(url)
  .then(data => setArticles(data.data.articles))
 } ,[])

  return (
    <div>
      <Button color="primary">Hello World</Button>
      {
        articles.map(article => <News article={article}></News>)
      }
      <Rechart></Rechart>
    </div>
  );
}



export default App;
