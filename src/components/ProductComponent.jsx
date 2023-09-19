import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import flowerImage from "../assets/images/flower.jpg"; // Import the image
import AcUnitIcon from "@mui/icons-material/AcUnit";

const ProductComponent = () => {
  return (
    <Box>
      <Card sx={{ borderRadius: 3, position: "relative" }}>
        <CardMedia
          component="img"
          image={flowerImage}
          sx={{ maxHeight: "225px" }}
        />
        {/* overlay */}
        <Box
          sx={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, #FFFFFF00, #1A8B8B)",
          }}
        />

        <Box
          sx={{
            content: '""',
            position: "absolute",
            top: 10,
            left: 10,
            width: 24,
            height: 24,
            borderRadius: 5,
            backgroundColor: "#D9D9D9",
          }}
        />

        <Box
          sx={{
            content: '""',
            position: "absolute",
            top: 10,
            right: 10,
            width: 24,
            height: 24,
            borderRadius: 5,
            backgroundColor: "#D9D9D9",
          }}
        />

        <CardContent sx={{ position: "relative", backgroundColor: "#9A9A9A" }}>
          <Stack spacing={1}>
            <Typography
              color="#F5F5F5"
              fontFamily="Inter"
              fontSize="16px"
              fontStyle="normal"
              fontWeight={700}
              lineHeight="normal"
            >
              Product name
            </Typography>
            <Typography
              color="#B6B6B6"
              fontFamily="Inter"
              fontSize="12px"
              fontStyle="normal"
              fontWeight={700}
              lineHeight="normal"
            >
              10 available
            </Typography>
            <Stack direction="row-reverse" spacing={1}>
              <AcUnitIcon fontSize="16px" color="black" />
              <Typography
                color="#F5F5F5"
                fontFamily="Inter"
                fontSize="16px"
                fontStyle="normal"
                fontWeight={700}
                lineHeight="normal"
              >
                333 TIPS
              </Typography>
            </Stack>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D9D9D9",
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              <Typography
                color="#F5F5F5"
                fontFamily="Inter"
                fontSize="16px"
                fontStyle="normal"
                fontWeight={700}
                lineHeight="normal"
              >
                Buy
              </Typography>
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductComponent;
