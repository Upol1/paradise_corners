import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvider";

const EditProduct = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct, editProduct } = useProduct();

  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleClick = () => {
    editProduct(id, product);
  };

  if (!oneProduct) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        EDIT PRODUCT
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        onChange={handleInput}
        value={product.title}
      />
      <TextField
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
        value={product.description}
      />
      <TextField
        onChange={handleInput}
        name="image"
        fullWidth
        label="Image"
        variant="outlined"
        value={product.image}
      />
      <TextField
        onChange={handleInput}
        name="price"
        fullWidth
        label="Price"
        type="number"
        variant="outlined"
        value={product.price}
      />
      <Button onClick={handleClick} fullWidth variant="outlined">
        EDIT Product
      </Button>
    </Box>
  );
};

export default EditProduct;
