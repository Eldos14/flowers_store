function Cart({ cartItems }) {
    if (cartItems.length === 0) {
      return (
        <main style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2>🛒 Корзина</h2>
          <p>Пока корзина пуста 🌸</p>
        </main>
      );
    }
  
    return (
      <main style={{ textAlign: 'center', padding: '40px' }}>
        <h2>🛒 Корзина</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <h3>{item.name}</h3>
              <p>{item.price} ₽</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  
  export default Cart;
  