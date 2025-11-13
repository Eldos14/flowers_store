import { Link } from "react-router-dom";

// src/pages/Home.jsx
function Home() {
    return (
      <main style={styles.main}>
        <h2>Добро пожаловать в магазин цветов 🌸</h2>
        <p>Самые свежие букеты для любого повода!</p>
        <Link to="/catalog">
        <button style={styles.button}>Посмотреть каталог</button>
        </Link>
      </main>
    );
  }
  
  const styles = {
    main: {
      textAlign: 'center',
      padding: '60px 20px',
    },
    button: {
      backgroundColor: '#ff69b4',
      border: 'none',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
    },
  };
  
  export default Home;
  