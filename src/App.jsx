import './App.css';
import Card from '../components/Card';

function App() {
  return (
    <div className="App">
      <img src="./public/awning.png" alt="awning" />
      <h1 className="title">Food Truck Favorites</h1>
      <div className="cards">
        <Card
          name="Tong"
          image={'./public/1.jpg'}
          description="Bangladeshi"
          link="https://www.facebook.com/Bangladeshistreetfoods/"
        />
        <Card
          name="Patacon Pisao"
          image={'./public/2.jpg'}
          description="Venezuelan"
          link="https://www.pataconpisaonyc.com/menus/"
        />
        <Card
          name="Jerk Pan"
          image={'./public/3.jpg'}
          description="Jamaican"
          link="https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/"
        />
        <Card
          name="Mom's Mono"
          image={'./public/4.jpeg'}
          description="Tibetan"
          link="https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/"
        />
        <Card
          name="Makina Cafe"
          image={'./public/5.jpg'}
          description="Ethiopian"
          link="https://makinacafenyc.com/"
        />
        <Card
          name="King Souvlaki of Astoria"
          image={'./public/6.jpg'}
          description="Greek"
          link="https://kingsouvlakinyc.com/"
        />
        <Card
          name="Ling's Sweet Mini Cakes"
          image={'./public/7.jpg'}
          description="Chinese"
          link="https://canalstreet.market/"
        />
        <Card
          name="NY Dosas"
          image={'./public/8.jpg'}
          description="Vegetarian"
          link="https://nydosas.com/menu/"
        />
        <Card
          name="Mysttik Masala"
          image="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42"
          description="Indian"
          link="https://indianfoodny.com/"
        />
        <Card
          name="The Halal Guys"
          image="https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024"
          description="Middle Eastern"
          link="https://thehalalguys.com/menu/"
        />
      </div>
    </div>
  );
}

export default App;
