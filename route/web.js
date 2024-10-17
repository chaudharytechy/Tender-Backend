import express from 'express'
import Controller from '../controller/Controller.js';



const router=express.Router()


router.post("/tenderInsert", Controller.insertTender);
router.get("/viewTender",Controller.viewAllTenders)

router.post("/insertBid",Controller.insertBid)
router.get("/viewAllBid",Controller.viewBid)



export default router