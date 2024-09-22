export default function Gaddjets({ url, title, description, price }) {
  return (
    <div className="product-card">
      <img src={url} alt={title} className="product-image" loading="lazy" />
      <div className="product-info">
        <h3 className="product-name">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">Price: {price}</p>
        <button className="add-to-cart-btn">Додати в кошик</button>
      </div>
    </div>
  );
}
