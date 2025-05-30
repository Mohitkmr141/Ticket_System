import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    title:{
        type:String,
        required:true
    }
    ,description:{
        type:String
    },
    status:{
        type:String,
        default:"TODO"
    },
    createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    },
    priority:{
        type:String, 
        deadline:Date,
        helpfulNotes:String,
        relatedSkills:[String]
    }
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("tickets", ticketSchema);

export default Ticket;
