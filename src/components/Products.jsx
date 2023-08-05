import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Nav-item">
      <h1>Products</h1>

      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {category.products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Link to={`/details/${product.id}`}>{product.name}</Link>
                  </td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Products;
