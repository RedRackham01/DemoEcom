import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout.jsx";
import axios from "axios";
import FlexBetween from "./../components/FlexBetween";
import { Box, Typography, Slider, Rating, FormControlLabel, Checkbox, Button, Paper } from "@mui/material";
import FilterPaper from "./../components/FilterPaper.jsx";
import ProductCard from "./../components/ProductCard.jsx";

const ProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);

  //get-all-categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/categories");
      if (data) {
        console.log(data);
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setLoading(false);
      setProducts(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //initial fetch
  useEffect(() => {
    getAllCategory();
    getAllProducts();
  }, []);

  //handling filters
  useEffect(() => {
    setLoading(true);
    let filtered = [...products];
    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category));
    }
    // Filter by price
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);
    // Filter by ratings
    if (selectedRating > 0) {
      filtered = filtered.filter((product) => product.rating.rate >= selectedRating);
    }
    setFilteredProducts(filtered);
    setLoading(false);
  }, [selectedCategories, priceRange, selectedRating, products]);

  // Reset filters
  const handleResetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSelectedRating(0);
  };

  return (
    <Layout>
      <Box p={4} sx={{ minHeight: "100vh", display: "flex", justifyContent: "space-between", flexDirection: "row", gap: 2 }}>
        {/*-------Filter Panel---------*/}
        <Box sx={{ backgroundColor: "#23262f", width: { xs: "100%", sm: "30%", md: "25%" }, p: { md: 2 } }}>
          <FilterPaper>
            <Typography variant="h6" gutterBottom>
              Categories
            </Typography>
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    sx={{ color: "#afafad" }}
                    checked={selectedCategories.includes(category)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, e.target.value]);
                      } else {
                        setSelectedCategories(selectedCategories.filter((c) => c !== e.target.value));
                      }
                    }}
                    value={category}
                  />
                }
                label={category}
                sx={{ display: "flex" }}
              />
            ))}
          </FilterPaper>

          <FilterPaper>
            <Typography variant="h6" gutterBottom>
              Price Range
            </Typography>
            <Slider value={priceRange} onChange={(e, newValue) => setPriceRange(newValue)} valueLabelDisplay="auto" min={0} max={1000} step={50} marks aria-labelledby="range-slider" sx={{ mb: 2 }} />
            <Typography>
              Price: ${priceRange[0]} - ${priceRange[1]}
            </Typography>
          </FilterPaper>

          <FilterPaper>
            <Typography variant="h6" gutterBottom>
              Ratings
            </Typography>
            <Rating value={selectedRating} onChange={(e, newValue) => setSelectedRating(newValue)} precision={0.5} sx={{ mb: 2 }} />
            <Typography>Minimum Rating: {selectedRating}</Typography>
          </FilterPaper>

          <Button variant="outlined" color="primary" onClick={handleResetFilters} sx={{ mx: 10, mt: 5 }}>
            Reset All Filters
          </Button>
        </Box>

        {/*-------Products Panel---------*/}
        <Box sx={{ flex: 1, ml: { md: 2 }, display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} sx={{ width: { xs: "100%", md: "32%" }, mb: 2 }}>
                <img src={product.image} alt={product.title} style={{ backgroundColor: "white", width: "100%", height: "250px", objectFit: "contain", borderRadius: "8px" }} />
                <Typography variant="h6" mt={2}>
                  {product.title}
                </Typography>
                <Typography variant="body1">${product.price}</Typography>
                <Box sx={{ mt: 1, p: 1, borderRadius: "25px", backgroundColor: "#4a4a4a", display:"flex", gap:1 }}>
                  {product.rating.rate}
                  <Rating sx={{ color: "white" }} value={product.rating.rate} readOnly precision={0.5} />
                </Box>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Buy Now
                </Button>
              </ProductCard>
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductPage;
