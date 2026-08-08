import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { useState } from "react";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  // Main selected image
  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );

  return (
    <motion.div
      className="section page details-layout"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* LEFT SIDE */}
      <div className="grid-2">

       
        <motion.img
          src={selectedImage}
          alt={product.name}
          className="details-main-img"
          whileHover={{ scale: 1.02 }}
        />

        
        <div className="small-images">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} ${index}`}
              onClick={() => setSelectedImage(img)}
              className={
                selectedImage === img
                  ? "active-thumb"
                  : ""
              }
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid-2 ">
        <h1>{product.name}</h1>
        <p>{product.description}</p><br/>

        
        <h3>Ingredients</h3>
        <div className="ingredient-chip">
        <ul className="list">
          {product.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>
        <br/>
        <h3>Benefits</h3>
        <div className="ingredient-chip">
        <ul className="list">
          {product.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>

        {/* TURMERIC VARIANTS DROPDOWN */}
{product.variants && (
  <div className="turmeric-section">
    <h2>Turmeric Types</h2>

    {product.variants.map((variant, index) => (
      <details
        className="turmeric-dropdown"
        key={index}
      >
        <summary>{variant.name}</summary>

        <div className="turmeric-content">

          <div className="spec-table">
            {Object.entries(variant.details).map(
              ([key, value]) => (
                <div className="spec-row" key={key}>
                  <span className="spec-label">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(
                        /^./,
                        (str) => str.toUpperCase()
                      )}
                  </span>

                  <span className="spec-value">
                    {value}
                  </span>
                </div>
              )
            )}
          </div>

        </div>
      </details>
    ))}
  </div>
)}
      </div>

              {/* CUSTOM ORDERS */}

     {product.category === "Snacks" && (
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
     )}
    </motion.div>
  );
}

export default ProductDetails;