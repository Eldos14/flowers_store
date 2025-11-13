// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🌸 магазин цветов</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Главная</Link>
        <Link to="/catalog" style={styles.link}>Каталог</Link>
        <Link to="/cart" style={styles.link}>Корзина 🛒</Link>
        <Link to="/contact" style={styles.link}>Контакты</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#ffb6c1',
    color: 'white',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: { display: 'flex', gap: '20px' },
  link: { color: 'white', textDecoration: 'none', fontWeight: 'bold' },
};

export default Header;
