import React from 'react';
import CarouselSlider from '../components/CarouselSlider';
import '../styles/pages/Home.css'


const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <div className="home-title">
          <h2>Welcome to the Home Page</h2>
        </div>
          <CarouselSlider />
      </div>
      <p>This is the content of the home page.</p>
      <p>
        Enter His gates with thanksgiving and His courts with praise; give thanks to Him and praise His name. Here at Full
        Gospel Pentecostal Church, we welcome you all with open arms and the joy of fellowship. We encourage you to come
        join with us in worshiping the Lord in spirit and in truth. We pray that as you accompany us, the Lord will
        become very real to you and that His grace would permeate all areas of your life. True worship is not just an
        emotional experience. It springs from the very soul and leaves no part of our being untouched. We at FGPC invite
        you to come worship the Lord with us and make music in His name. We also pray that the Word of God delivered to
        you every week makes an impact on your life and challenges you to live in a manner that brings joy to the heart
        of the Lord. The Bible says that the Word of the Lord is a lamp unto our feet and a light unto our path. We
        believe that the Lord will speak to you through His word and bring clarity and healing into your lives that
        nothing can surpass.
      </p>
      <p>
        Enter His gates with thanksgiving and His courts with praise; give thanks to Him and praise His name. Here at Full
        Gospel Pentecostal Church, we welcome you all with open arms and the joy of fellowship. We encourage you to come
        join with us in worshiping the Lord in spirit and in truth. We pray that as you accompany us, the Lord will
        become very real to you and that His grace would permeate all areas of your life. True worship is not just an
        emotional experience. It springs from the very soul and leaves no part of our being untouched. We at FGPC invite
        you to come worship the Lord with us and make music in His name. We also pray that the Word of God delivered to
        you every week makes an impact on your life and challenges you to live in a manner that brings joy to the heart
        of the Lord. The Bible says that the Word of the Lord is a lamp unto our feet and a light unto our path. We
        believe that the Lord will speak to you through His word and bring clarity and healing into your lives that
        nothing can surpass.
      </p>

      <p>
        If you are already a part of a church, we encourage you to be faithful there. However, if you are looking for a
        home church, pray and see if this is where the Lord wants you to be planted. Come, worship the Lord with us. Let
        us taste and see that the Lord is good.
      </p>
    </div>
  );
};

export default HomePage;