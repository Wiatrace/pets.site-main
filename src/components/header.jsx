import React, {useState} from "react";
import logo from '../image/koala-svgrepo-com.svg'
import { Link } from "react-router-dom";
import QuickSearch from "../components/QuickSearch";
const Header = ()=>{

  let [card, setCard]=useState([]);

  let [query, setQuery]=useState('');

  const send=()=>{
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
      };

      fetch("https://pets.сделай.site/api/search?query="+query, requestOptions)
          .then(response => response.json())
          .then(result => {console.log(result)


              let data=result.data.orders.map((item)=>item.description)
              let set=new Set(data)
              let uniq=Array.from(set)

              data=uniq.map((value, index)=><option value={value} key={value}></option>)


              setCard(data)
              console.log(card)
          })



          .catch(error => console.log('error', error));
  }

  const search = (e) => {
      setQuery(e.target.value)

      if (query.length>2) setTimeout(send, 1000);
  }

return(
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand" style={{"marginLeft": "10%"}} href="zxc.html"><img src={logo} style={{'width': '50px','height': '70px;'}} alt=""/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Переключатель навигации">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" style={{'marginLeft': '20.5%'}}>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" aria-current="page" href="zxc.html">Главная</Link>
              </li>
              <li className="nav-item">
                <Link to={'/search'} className="nav-link" href="zxc2.html">Поиск по объявлениям</Link>
              </li>
              <li className="nav-item">
                <Link to={'/addobjav'} className="nav-link" href="zxc5.html">Добавить объявление</Link>
              </li>
              <li className="nav-item">
                <Link to={'/lk'} className="nav-link" href="zxc6.html">Личный кабинет</Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link" href="zxc6.html">Вход</Link>
              </li>
              <li className="nav-item">
                <Link to={'/registration'} className="nav-link" href="zxc6.html">Регистрация</Link>
              </li>
            </ul>
          </div>
          <nav className="navbar" >
            <div className="container-fluid">
            <QuickSearch/>

            </div>
          </nav>
        </div>
      </nav>
</div>
);
};
export default Header;