// src/components/Footer.jsx
function Footer() {
    return (
      <footer style={styles.footer}>
        <p>© 2025 магазин цветов 🌺 | Все права защищены</p>
        <p>Телефон: +7 (771) 123-45-67</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: '#e2b6b9',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      width: '100%',
      boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
    },
  };
  
  export default Footer;
  