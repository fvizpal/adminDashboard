import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
    { // all of these shld have extra params such as required but for simplicity here not done
        productId: String,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData:[
            {
                month:String,
                totalSales: Number,
                totalUnits:Number
            }
        ],
        dailyData:{
            date: String,
            totalSales: Number,
            totalUnits: Number,
        },
    },
    {timestamps: true }
)

const Product = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;