import Tender from "../model/tenderSchema.js";
import Bidding from "../model/bidSchema.js";
import mongoose from "mongoose";
class Controller {
  // Insert tender
  static insertTender = async (req, res) => {
    try {
      const { tenderName, startTime, endTime, bufferTime, tenderDescription } = req.body;
      console.log(req.body)

      // Create a new tender
      const tender = new Tender({
        tenderName,
        startTime,
        endTime,
        bufferTime,
        tenderDescription,
      });

      await tender.save(); // Save the tender to the database

      res.status(201).json({
        success: true,
        message: "Tender inserted successfully",
        data: tender,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error inserting tender",
        error: error.message,
      });
    }
  };

  // View all tenders
  static viewAllTenders = async (req, res) => {
    try {
      const tenders = await Tender.find(); // Fetch all tenders from the database
      res.status(200).json({
        success: true,
        message: "All tenders fetched successfully",
        data: tenders,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching tenders",
        error: error.message,
      });
    }
  };

 // Insert bid
static insertBid = async (req, res) => {
    try {
      const { companyName, tenderID, biddingCost } = req.body;
  
     
  
     console.log(req.body)
  
    

      const bid = new Bidding({
        companyName, // Assuming this is a valid ObjectId
        tenderID,    // Ensure this is a valid ObjectId too
        biddingCost,
        datePlaced: new Date(), // Automatically set the bid date to the current date
      });
  console.log(bid,"jglerj")
      await bid.save(); // Save the bid to the database
  
      res.status(201).json({
        success: true,
        message: "Bid submitted successfully",
        data: bid,
      });
    } catch (error) {
        console.log(error)
      res.status(500).json({
        success: false,
        message: "Error submitting bid",
        error: error.message,
      });
    }
  };
  

  // View bids for a specific tender, sorted by bidding cost in ascending order
  static viewBid = async (req, res) => {
    try {
      // Fetch all bids for the given tender, sorted by biddingCost in ascending order
      const bids = await Bidding.find()
        .populate("companyName", "name") // Populating the name field of the user model
        .sort({ biddingCost: 1 }); // Sort in ascending order

      res.status(200).json({
        success: true,
        message: `Bids for tender ${tenderID} fetched and sorted by price successfully`,
        data: bids,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching bids",
        error: error.message,
      });
    }
  };
}

export default Controller;
