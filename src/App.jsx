import { Box, Grid, Typography } from "@mui/material";
import "./App.css";
import ProductComponent from "./components/ProductComponent";

function App() {
  return (
    <Box p={3}>
      <Typography variant="h2">Products</Typography>
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((index) => (
          <Grid item key={index} xs={12} md={6} lg={4} xl={3}>
            <ProductComponent />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
