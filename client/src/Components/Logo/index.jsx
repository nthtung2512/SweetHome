import React, { useState, useEffect } from "react";
import { Link } from "@mui/material";
const Logo = () => {
  return (
    <Link href="/" sx={{display: "flex", alignItems: "center", textDecoration: "none"}}>
        <img src="./Images/armchair.png" width="30px" height="auto" alt="logo"/>
        <p style={{color: "rgb(127, 24, 127)", cursor: "pointer", fontSize: "20px", fontWeight: "bold"}}>SweetHome</p>
    </Link>
  );
};

export default Logo;

