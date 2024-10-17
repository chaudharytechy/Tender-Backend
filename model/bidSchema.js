import mongoose from "mongoose";

const bidSchema = new mongoose.Schema({
  companyName: {
    type:String,
    required: true,
  },
  tenderID: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the tender on which the bid is placed
    ref: "Tender", // Assumes you have a Tender model
    required: true,
  },
  bidingCost: {
   type:String, 
   
  },
  datePlaced: {
    type: Date,
    
  },
});

const Bidding = mongoose.model("Bidding", bidSchema);
export default Bidding;
