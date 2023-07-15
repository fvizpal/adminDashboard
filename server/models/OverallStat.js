import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
    { // all of these shld have extra params such as required but for simplicity here not done
        totalCustomers: Number,
        year
    },
    {timestamps: true }
)

const OverallStat = mongoose.model("OverallStat", OverallStatSchemaSchema);
export default OverallStat;