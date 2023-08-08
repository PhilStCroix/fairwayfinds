import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Nav-item" id="products">
      <h1 style={{ color: "white" }}>All Our Products in one Place</h1>

      {categories.map((category) => (
        <div
          key={category.id}
          className="category-container"
          id={category.name}
        >
          <h2 className="category-name" style={{ color: "white" }}>
            {category.name}
          </h2>
          <div className="table-container" id={category.name}>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {category.products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>
                      <Link to={`/details/${product.id}`}>{product.name}</Link>
                    </td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
