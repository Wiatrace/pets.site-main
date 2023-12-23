import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';
import AnimalCarousel from '../components/slider'
import Subscribe from '../components/subscribe';
import React, { useEffect, useState } from 'react';
const Main = ()=>{
  let [card, setCard]=useState({data:{orders:[]}});
  useEffect(()=>req_card(card, setCard), []);
  function req_card(card, setCard) {
      fetch("https://pets.сделай.site/api/pets")
          .then(response => response.json())
          .then(result => {
              console.log(result)
              setCard(result)
          })
          .catch(error => console.log('error', error));
  }
  let  cards=card.data.orders.map((order, index)=>{
      return<Card data={order}/>;
  })
  return(
      <div>
          <Header/>
          <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
          <div style={{width: '50%', margin: '0 auto'}}>
              <AnimalCarousel/>
              </div>
          <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
              {cards}
          </div>
          <h2 className="text-center text-white bg-primary m-2">Подпишитесь на наши новости!</h2>
          <Subscribe/>
          <Footer/>
      </div>
  );
};
export default Main;