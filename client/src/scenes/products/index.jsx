import React from 'react'
import { 
    Box, 
    Card, 
    CardActions, 
    CardContent,
    Collapse,
    Button,
    Typograpy,
    Rating,
    useTheme,
    useMediaQuery,
} from "@mui/materials";
import { useGetProductquery } from 'state/api';
import Header from 'components/Header';
import { useScrollTrigger } from '@mui/material';

const Product =({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat
}) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card
            sx={{
                backgroundImage: "None",
                backgroundColor: theme.palette.background.alt,
                borderRadius:"0.5rem"
            }}
        >
            <CardContent>
                <Typograpy sx= {{ fontSize: 14}}
                    color={theme.palette.secondary[700]}
                    gutterBottom
                >
                    {category}
                </Typograpy>
                <Typograpy variant="h5" component="div">
                    {name}
                </Typograpy>
            </CardContent>
        </Card>
    )
}


const Products = () => { //isloading is provided by the toolkit
    const {data, isLoading} = useGetProductQuery();
    const isNonMobile = useMediaQuery("(min-width: 100px)");

  return (
    <Box>
        <Header title = "PRODUCTS" subtitle="See your products" />
        {data || !isLoading ? (
            <Box mt="20px" diplay="grid" gridTemplatesColumn="repeat(4,minmax(0, 1fr))" justifyContent="space-between" rowGap="20px" columnGap="1.33%"
                sx={{
                    "& > div":{ gridColumn: isNonMobile ? undefined : "span 4"}
                }}
            >
                {data.map(                  
                    _id,
                    name,
                    description,
                    price,
                    rating,
                    category,
                    supply,
                    stat
                    )=>(
                    <Product 
                    _id={ }
                    name={ }
                    description={ }
                    price={ }
                    rating={ }
                    category={ }
                    supply={ }
                    stat
                    />
                )}
            </Box>
        ): (
            <>Loading...</>
        )}
    </Box>
  )
}

export default Products