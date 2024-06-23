import React, { useState } from "react";
import AddProduct from "../components/products/AddProduct";
import AddCategory from "../components/products/AddCategory";
import { Button } from "@mui/material";

const AdminPage = () => {
  const [open, setOpen] = useState(false);

  const handleToggleCategoryForm = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {!open && (
        <Button onClick={handleToggleCategoryForm}>Add Category</Button>
      )}
      <AddProduct />
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
