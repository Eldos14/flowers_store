// src/pages/FlowerPage.jsx
import { useParams, Link } from 'react-router-dom';

const flowers = [
  { id: 1, name: 'Розы', price: 1500, description: 'Роскошный букет из красных роз.', img: 'https://cvety-vanilla.ru/upload/dev2fun.imagecompress/webp/iblock/4b4/acnod71rngmpdt0uxg2o2vi740k2komx.webp' },
  { id: 2, name: 'Тюльпаны', price: 1200, description: 'Яркие весенние тюльпаны.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0j73e5H7nx3F3olQlRrusp1AlJ0coS7Qs4_Jgn161QMHaYGXNxjbHGZq8701VyKJhjdLZ3KD5PMcTullSGHFwRONUmlQhXphsVgWbEg1-&s=10' },
  { id: 3, name: 'Пионы', price: 1800, description: 'Нежные розовые пионы для любимых.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJH27DWaiiM3cO4-LFyclh4PULcZcZ4DyY4qldWvivJazuQergWlsif-a1l7OObSpEDtuiumcoaqonfU_xbjQ99R4T-5Y4QIeMWcv4AaO2w&s=10' },
];

function FlowerPage({ addToCart }) {
    const { id } = useParams();
    const flower = flowers.find((f) => f.id === Number(id));
  
    if (!flower) return <h2 style={{ textAlign: 'center' }}>Цветок не найден 😢</h2>;
  
    return (
      <main style={styles.main}>
        <img src={flower.img} alt={flower.name} style={styles.img} />
        <h2>{flower.name}</h2>
        <p>{flower.description}</p>
        <p style={styles.price}>{flower.price} ₽</p>
        {/* добавляем обработчик */}
        <button
      style={styles.button}
      onClick={() => {
      addToCart(flower); // добавляем в корзину
      alert(`${flower.name} добавлен в корзину! 🛒`); // уведомление
      }}>
      Добавить в корзину 🛒
      </button>
        <p><Link to="/catalog" style={styles.back}>← Назад в каталог</Link></p>
      </main>
    );
  }
  
  const styles = {
    main: { textAlign: 'center', padding: '40px' },
    img: { width: '300px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' },
    price: { fontWeight: 'bold', fontSize: '1.2rem' },
    button: { backgroundColor: '#ff69b4', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer' },
    back: { textDecoration: 'none', color: '#ff69b4' },
  };
  
  export default FlowerPage;