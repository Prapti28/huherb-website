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
        <h2 className="product-price">
          {product.price}/{product.weight}
        </h2>
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
      </div>
    </motion.div>
  );
}

export default ProductDetails;