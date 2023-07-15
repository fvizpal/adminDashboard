import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
    { // all of these shld have extra params such as required but for simplicity here not done
        userId: String,
        cost: String,
        products:{
            type: [mongoose.Types.ObjectId],
            of:Number
        }
    },
    {timestamps: true }
)

const Transaction = mongoose.model("Transaction", ProductSchema);
export default Transaction;