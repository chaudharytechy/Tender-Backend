import mongoose from "mongoose";

const tenderSchema = new mongoose.Schema({
  tenderName: {
    type: String,
    required: true,
    trim: true, // Removes unnecessary spaces
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  bufferTime: {
    type: Number,
    required: true,
    default: 5, // Default buffer time in minutes (or adjust as needed)
  },
  tenderDescription: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Tender = mongoose.model("Tender", tenderSchema);
export default Tender;
