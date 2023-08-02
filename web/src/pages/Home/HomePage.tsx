import React, { useState, useEffect } from 'react';
import CarouselSlider from '../../components/CarouselSlider';
import './Home.css'
import { HomePageContent } from './IHomePage'
import API_BASE_URL from '../../ApiInterface';


const HomePage: React.FC = () => {

  const [homePageContent, setHomePageContent] = useState<HomePageContent[]>([]);

  useEffect(() => {
    fetchHomePageContent();
  }, []);

  const fetchHomePageContent = () => {
    fetch(`${API_BASE_URL}/homepagecontent`, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setHomePageContent(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="home-container">
      <div className="image-container">
        <div className="home-title">
          <h2>Welcome to the Home Page</h2>
        </div>
          <CarouselSlider />
      </div>
      {homePageContent.map((content) => (
        <div key={content.id}>
          <h3>{content.title}</h3>
          <p>{content.body}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;