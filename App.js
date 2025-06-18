import './App.css';
import Navbar from './Navbar';
import React from 'react';  
import HeroSection from './heroSection';
import Cart from './Cart';
import { useState } from 'react';
import FeaturesSection from './FeatureSection';
import ProductShow from  "./ProductShow";
import NewItem from './NewItem';
import TagPro from './TagPro';
import Footer from './Footer';
function App() {
   const [showList, setShowList] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState(null);
    const[herostyle, setHeroStyle] = React.useState()

    const handleListClick = () => {
        setShowList(true);
        setSelectedCategory(null);
    };
  return (
    <div className="App" id='Home'>
      <Navbar onCategorySelect={setSelectedCategory} 
        onListClick={handleListClick}
      />
       {!showList ? (
                <div>
                    {!selectedCategory && (
                        <div>
                            <HeroSection />
                            <NewItem />
                            <ProductShow />
                            <FeaturesSection />
                        </div>
                    )}
                <Cart herostyle={herostyle} setHeroStyle={setHeroStyle} selectedCategory={selectedCategory} setSelectedCategory ={setSelectedCategory}/>
                <Footer/>
                </div>
            ) : (
                <TagPro onClose={() => setShowList(false)} />
            )}
      <div>
       
      </div>
    </div>
  );
}

export default App;
