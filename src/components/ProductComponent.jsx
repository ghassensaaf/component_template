/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import flowerImage from '../assets/images/flower.jpg'; // Import the image
import AcUnitIcon from '@mui/icons-material/AcUnit';

const ProductComponent = () => {
  return (
    <Box>
      <Card sx={{borderRadius: 5, position:'relative'}}>
        <CardMedia component="img" image={flowerImage} sx={{height:'225px'}} />
        {/* overlay */}
        <Box sx={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(65, 64, 64, 0.5)',
          }}
        />

        <Box sx={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '225px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(26, 139, 139, 0.5))', 
        }}
        />

        <Box sx={{
          content: '""',
          position: 'absolute',
          top: 10,
          left: 10,
          width: 24,
          height: 24,
          borderRadius: 5,
          backgroundColor: '#D9D9D9'
          }}
        />
        
        <Box sx={{
          content: '""',
          position: 'absolute',
          top: 10,
          right: 10,
          width: 24,
          height: 24,
          borderRadius: 5,
          backgroundColor: '#D9D9D9'
          }}
        />

        <CardContent sx={{position:'relative' , pb:'1rem !important'}}>
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
            <Button variant="contained" sx={{backgroundColor:'#D9D9D9', borderRadius: 3, textTransform: 'none', boxShadow: 0, py: 1.5}}>
              <Typography 
                color="#000"
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
  )
}

export default ProductComponent;
