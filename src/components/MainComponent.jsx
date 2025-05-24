import React, { useState, useEffect } from "react";
import {
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { TVChartContainer } from "./common/TVChartContainer";
import Table from "./Table";
import { useSelector } from "react-redux";
import "./style.css";
import TokenInfo from "./common/TokenInfo";

const MainComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  
  const selectedToken = useSelector(state => state.tokenReducer?.selectedToken);

  useEffect(() => {
    if (selectedToken) {
      setIsMenuOpen(true);
    }
  }, [selectedToken]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#191919",
        paddingRight: "7vw",
      }}
    >
      {/* Main content */}
      <Grid
        item
        xs={isMenuOpen ? 9 : 12}
        sx={{ transition: "width 0.5s", position: "relative" }}
      >
        <TVChartContainer height={isMenuOpen ? 70 : 70} />
        <Table height={isMenuOpen ? 70 : 90} />
        {/* Collapse button */}
        {isLargeScreen && (
          <button className="menubutton" onClick={toggleMenu}>
            <div style={{ marginTop: "-35%" }}>{isMenuOpen ? "›" : "‹"}</div>
          </button>
        )}
      </Grid>

      {/* Menu or additional content */}
      {isMenuOpen && (
        <Grid 
          item 
          xs={3} 
          className="font-header right-panel"
        >
          <TokenInfo selectedToken={selectedToken} />
        </Grid>
      )}
    </Grid>
  );
};

export default MainComponent;