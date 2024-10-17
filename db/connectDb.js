import mongoose from "mongoose";

const connect=()=>{
    mongoose.connect("mongodb://localhost:27017/tenderapp")
    .then(()=>{
        console.log("connected")
    })
    .catch((error)=>{
        console.error(error)
    })
}
export default connect
