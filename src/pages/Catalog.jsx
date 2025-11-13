// src/pages/Catalog.jsx
import { Link } from 'react-router-dom';

const flowers = [
  { id: 1, name: 'Розы', price: 1500, img: 'https://cvety-vanilla.ru/upload/dev2fun.imagecompress/webp/iblock/4b4/acnod71rngmpdt0uxg2o2vi740k2komx.webp' },
  { id: 2, name: 'Тюльпаны', price: 1200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0j73e5H7nx3F3olQlRrusp1AlJ0coS7Qs4_Jgn161QMHaYGXNxjbHGZq8701VyKJhjdLZ3KD5PMcTullSGHFwRONUmlQhXphsVgWbEg1-&s=10' },
  { id: 3, name: 'Пионы', price: 1800, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJH27DWaiiM3cO4-LFyclh4PULcZcZ4DyY4qldWvivJazuQergWlsif-a1l7OObSpEDtuiumcoaqonfU_xbjQ99R4T-5Y4QIeMWcv4AaO2w&s=10' },
];

function Catalog() {
  return (
    <main style={styles.main}>
      <h2>Наш каталог 🌺</h2>
      <div style={styles.grid}>
        {flowers.map((f) => (
          <Link to={`/flower/${f.id}`} key={f.id} style={styles.card}>
            <img src={f.img} alt={f.name} style={styles.img} />
            <h3>{f.name}</h3>
            <p>{f.price}  ₸</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

const styles = {
  main: { textAlign: 'center', padding: '40px' },
  grid: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' },
  card: {
    width: '220px',
    textDecoration: 'none',
    color: 'black',
    backgroundColor: '#fff0f5',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: '0.3s',
  },
  img: { width: '100%', borderRadius: '8px' },
};

export default Catalog;
