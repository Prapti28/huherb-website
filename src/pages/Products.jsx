import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

function Products() {
  const snacks = products.filter(p => p.category === "Snacks");
  const spices = products.filter(p => p.category === "Spices");

  return (
    <section className="section page">
      <h1>Our Products</h1>
      <p className="section-sub">Explore our carefully selected range of nutritious and traditional Indian food products, crafted to support healthy living and authentic taste.</p>
      {/* Snacks */}
      <h2>Snacks (Laddoos)</h2>
      <p className="section-sub">Healthy and nutritious traditional laddoos made with wholesome ingredients for energy, wellness, and everyday nourishment.</p>
      <motion.div className="product-grid">
        {snacks.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {/* Spices */}
      <h2 style={{ marginTop: "40px" }}>Spices</h2>
      <p className="section-sub">Premium-quality Indian spices carefully sourced to deliver authentic flavor, purity, and wellness benefits.</p>
      <motion.div className="product-grid">
        {spices.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

              {/* CUSTOM ORDERS */}
      <div className="custom-order-box">
        <h3>✨ Custom Orders Available</h3>

        <p>
          Looking for something special? We also accept customized
          orders based on your preferences and requirements.
        </p>

        <a
          href="https://wa.me/919967296890?text=Hello%20I%20am%20interested%20in%20placing%20a%20customized%20laddoo%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="custom-order-btn"
        >
          📲 Request a Custom Order
        </a>
      </div>
    </section>
  );
}

export default Products;