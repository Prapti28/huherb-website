import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Hu-Herb – Authentic Indian Nutrition, Delivered Globally</h1>
          <p>
           Hu-Herb brings premium-quality traditional Indian food products to homes and businesses worldwide. From nutritious laddoos to pure turmeric, we deliver authentic taste, wellness, and trust across global markets.
          </p>
          <div className="hero-btns">
            <Link to="/products" className="btn">
              Explore Products
            </Link>

            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Choose Hu-Herb?</h2>
        <p>We combine traditional Indian nutrition with modern quality standards to deliver authentic products trusted by customers globally.</p>
        <div className="why-grid">
          <div className="why-card"><h3>Premium Quality</h3>
            <p>We source and distribute carefully selected food products made with quality ingredients and authentic preparation methods.</p>
          </div>
          <div className="why-card"><h3>Global Distribution</h3>
          <p>Serving customers and businesses across different regions with reliable product availability and consistent quality.</p>
          </div>
          <div className="why-card"><h3>Natural Ingredients</h3>
          <p>Our products are crafted using natural ingredients with a focus on nutrition, wellness, and traditional goodness.</p>
          </div>
          <div className="why-card"><h3>Trusted Standards</h3>
          <p>We prioritize food safety, verified certifications, and customer trust in every product we distribute.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Popular Products</h2>
        <div className="product-grid">
          {products.slice(0, 2).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Testimonials</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <p className="review-text">“The laddoos taste fresh and homemade.”</p>
          </div>
          <div className="review-card">
            <p className="review-text">“Good quality turmeric with natural aroma.”</p>
          </div>
          <div className="review-card">
            <p className="review-text">“Healthy, tasty, and perfect for daily use.”</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;