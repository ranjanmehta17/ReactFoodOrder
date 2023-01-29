import React from 'react';
import ReactDOM from 'react-dom/client';
import { getRestaurantData } from './src/constant/constants';

restaurantList = getRestaurantData();
const f=""

const Title = () => (
  <a href="/">
    <img className="logo" src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logo" />
  </a>
);

const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);




// cofig driven UI

const BurgerKing = {
  name: "Burger King",
  image: "https://b.zmtcdn.com/data/dish_photos/2ac/03c10b0097d30e5fd485965c627d32ac.png",
  cuisine: ["Burger", "American"],
  rating: 4.2,
};
 
const RestrauntCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => { 
  return (

    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />

      <h2>{name}</h2>
      <h3>{cuisines?.join(",")}</h3>
      <h4>{lastMileTravelString}minutes</h4>
    </div>
  );
};

const Body = () => {

  return (
    <div className="restraunt-list">
      <RestrauntCard restaurant={restaurantList[0].data} />
      <RestrauntCard restaurant={restaurantList[1].data} />
      <RestrauntCard restaurant={restaurantList[2].data} />
      <RestrauntCard restaurant={restaurantList[3].data} />
      <RestrauntCard restaurant={restaurantList[4].data} />
      <RestrauntCard restaurant={restaurantList[5].data} />
      {/* <RestrauntCard restaurant={restaurantList[7]} />
      <RestrauntCard restaurant={restaurantList[8]} />
      <RestrauntCard restaurant={restaurantList[9]} />
      <RestrauntCard restaurant={restaurantList[10]} />
      <RestrauntCard restaurant={restaurantList[11]} />
      <RestrauntCard restaurant={restaurantList[12]} />
      <RestrauntCard restaurant={restaurantList[13]} />
      <RestrauntCard restaurant={restaurantList[14]} /> */}
    </div>

  );
};

const Footer = () => {
  return (
    <h4>Footer</h4>
  );
};

// const styleObj=

const AppLayout = () => {
  return (
    <>

      <Header />
      <Body />
      <Footer />

    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
// passing element inside root
root.render(<AppLayout />);
