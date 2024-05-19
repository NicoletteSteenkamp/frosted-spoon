import React from 'react';
import chocolateCroissant from '../images/chocolate-croissant.jpg';
import blueberryMuffin from '../images/blueberry-muffin.jpg';
import almondTart from '../images/almond-tart.jpg';
import cinnamonRoll from '../images/cinnamon-roll.jpg';
import applePie from '../images/apple-pie.jpg';

const MenuPage = () => (
  <div>
    <h1>Our Menu</h1>
    <div className="menu-grid">
      <div className="menu-item">
        <img src={chocolateCroissant} alt="Chocolate Croissant" />
        <p>Indulge in layers of buttery, flaky pastry enveloping rich, dark chocolate. Our chocolate croissant is a delightful combination of crispiness and smooth, velvety chocolate, perfect for satisfying your sweet cravings.</p>
      </div>
      <div className="menu-item">
        <img src={blueberryMuffin} alt="Blueberry Muffin" />
        <p>Bursting with juicy blueberries and a hint of sweetness, our blueberry muffin is a classic favorite. Moist and tender, each bite offers a burst of fruity flavor, making it a delightful treat for any time of day.</p>
      </div>
      <div className="menu-item">
        <img src={almondTart} alt="Almond Tart" />
        <p>Delicate almond flavors blend harmoniously in our almond tart, featuring a buttery crust and a luscious almond filling. Topped with crunchy almond slices, it's a heavenly indulgence for almond lovers.</p>
      </div>
      <div className="menu-item">
        <img src={cinnamonRoll} alt="Cinnamon Roll" />
        <p>Sink your teeth into our irresistible cinnamon roll, swirled with cinnamon sugar and topped with a generous drizzle of icing. Soft, fluffy, and fragrant with cinnamon, it's the ultimate comfort pastry to brighten your day.</p>
      </div>
      <div className="menu-item">
        <img src={applePie} alt="Apple Pie" />
        <p>Savor the nostalgic charm of our classic apple pie, filled with tender apples spiced with cinnamon and nestled in a flaky, golden crust. Each slice offers a taste of home-baked goodness that's sure to warm your heart.</p>
      </div>
    </div>
  </div>
);

export default MenuPage;
