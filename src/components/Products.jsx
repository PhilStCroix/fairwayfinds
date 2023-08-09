import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  // State to hold the categories
  const [categories, setCategories] = useState([]);

  // Fetch categories data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories from the API
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        // Set the fetched categories in state
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Nav-item" id="products">
      {/* Heading to indicate that all products are in one place */}
      <h1 style={{ color: "white" }}>All Our Products in one Place</h1>

      {/* Render each category */}
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-container"
          id={category.name}
        >
          {/* Display the name of the category */}
          <h2 className="category-name" style={{ color: "white" }}>
            {category.name}
          </h2>
          {/* Table to display the products */}
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
                {/* Render each product within the category */}
                {category.products.map((product) => (
                  <tr key={product.id}>
                    {/* Display the product image */}
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "50px" }}
                      />
                    </td>
                    {/* Display the product name with a link to its details */}
                    <td>
                      <Link to={`/details/${product.id}`}>{product.name}</Link>
                    </td>
                    {/* Display the product price */}
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
