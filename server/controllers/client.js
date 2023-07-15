import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js"
import Transaction from "../models/Transaction.js";
import getCountryIso3 from "country-iso-2-to-3"

export const getProducts = async( req, res) => {
    try {
        const products = await Product.find(); // getting all the products there are

        const productWithStats = await Promise.all(
            products.map(async(product)=> {
                const stat = await ProductStat.find({
                    productId: product._id
                })
                return {
                    ...product._doc,  // not sure whats this
                    stat,
                }
            })
        );
            // there is aggregate functions to make this faster // in sql that is equivalent to joins mongo has ots own such functionalities
        res.status(200).json(productWithStats); //returning to the frontend
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
export const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: "uder"}).select("-password");
        res.status(200).json(customers);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getTransactions = async(req,res) =>{
    try{ //we are doing server side pagination
        // sort will look like this : {"field", "userId","sort":"desc"} // this is what the material ui will be sending
        const {page = 1, pageSize} = req.query // this is grabbing these values from the frontend
        
        //formatted sort shld look like :{userid: -1}
        const generateSort = () => {
            const sortparsed = JSON.parse(sort);
            const sortFormatted ={
                [sortParsed.field]: sortparsed.sort = 'asc' ? 1 : -1
            };

            return sortFormatted;
        }
        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const transactions = await Transaction.find({
            $or:[
                { cost: { $regex: new RegExp(search, "i") } }
                {userId:{ $regex: new RegExp(search,"i") } }
            ],

        })
        .sort(sortFormatted)
        .skip(page = pageSize)
        .limit(pageSize);

        const total = await Transaction.countDocuments({
            name:{regex}
        })
        
        res.status(200).json({
            transactions,
            total,
        })
        const transactions
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const getGeography = async(req, res)=>{
    try{
        const users = await User.find();
        // this is formatting for nivo to be able to use 
        const mappedLocations = users.reduce((acc, {country}) => {
            const countryISO3 = getCountryIso3(country);
            if(!acc[countryISO3]){
                acc[countryISO3] = 0;
            }
            acc[countryISO3]++;
            return acc;
        }, {});

        const formattedLocations = Object.entries(mappedLocations).map(
            ([country, count])=>{
                return { id:country, value: count}
            }
        );

        res.status(200).json(formattedLocations);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}