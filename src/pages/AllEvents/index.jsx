import React from 'react';
import './style.css';
import EventCard from '../../components/EventCard';
import axios from '../../axios';

export default function AllEvents() {
    const [loading, setLoading] = React.useState(false);
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          await axios.get('/event/')
          .then((res) => {
            console.log(res.data)
            setPosts((res.data).reverse());
          })
          .catch((err) => {
            console.log(err);
          })
          setLoading(false);
        }
        fetchData();
      }, []);

    
            
  return (
    <div className="container">
    <h1 className="main-title">Все мероприятия</h1>

    <div className="filtr-box">
        <span className="filtr-title">
            Фильтрация
        </span>
        <div className="filtr-search">
            <svg height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.16659" cy="9.16683" r="5.83333" stroke="#111111" strokeWidth="2"/>
                <path d="M16.6667 16.6665L14.1667 14.1665" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input className="filtr-search-input" type="text" placeholder="Поиск"/>
        </div>

        <div className="select-place">
            <select defaultValue="" name="" id="">
                {/* <option disabled selected>Место проведения</option>
                <option >Бишкек</option>
                <option >Балыкчы</option>
                <option >Ош</option> */}
            </select>
        </div>

        <div className="filtr-date">
            <input type="date"/>
        </div>
        <div className="clear"></div>
    </div>
            
    <div className="events-content">
        {posts.map((post) => (
            <EventCard
                id={post.id}
                nameRu={post.nameRu}
                nameKg={post.nameKg}
                date={post.stareDateTime}
            />
        ))}
    </div>
</div>
  )
}
