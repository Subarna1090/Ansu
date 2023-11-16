import mongoose from "mongoose";

const empSchema=mongoose.Schema({
    ename:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    emobile:{
        type: String,
        required: true
    }
   },
    {
        timestamps: true,
    }
);

export default mongoose.model("Emp",empSchema)