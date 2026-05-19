import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} />

        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
      </Link>
    </motion.div>
  );
}

export default ProductCard;