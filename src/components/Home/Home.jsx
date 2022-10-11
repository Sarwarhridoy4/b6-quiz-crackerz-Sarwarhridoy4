import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Item from "../Item/Item";


const Home = () => {
    
    const topics = useLoaderData().data;
    // console.log(topics);
    
  return (
    <div>
          <Banner></Banner>
          <div className='topic-container grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3'>
          {
              topics.map(topic => <Item key={topic.id} item={topic}></Item>)
          }
    </div>
    </div>
  );
};

export default Home;
