import React from 'react';
import welcomeImage from '../images/welcome-image.png'; 

const HomePage = () => (
  <div>
    <img src={welcomeImage} alt="Welcome" /> 
    <h2>🍰 Welcome to Frosted Spoon Bakery! 🍰</h2>
    <p>
      Indulge in the sweet symphony of flavors and the comforting warmth of freshly baked delights. At Frosted Spoon Bakery, we craft each treat with love and passion, creating moments of joy with every bite.
      Step into our bakery, where the aroma of freshly baked goods fills the air and your senses come alive. From delicate pastries to decadent cakes, our artisanal creations are made from the finest ingredients, ensuring every bite is a taste of perfection.
      Whether you're celebrating a special occasion or simply treating yourself to a moment of bliss, Frosted Spoon Bakery is here to delight your palate and sweeten your day.
      Join us on a culinary journey filled with sweetness, warmth, and the simple pleasures of life. Welcome to Frosted Spoon Bakery, where every moment is deliciously unforgettable!
    </p>
  </div>
);

export default HomePage;

