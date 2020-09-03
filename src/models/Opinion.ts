import mongoose from 'mongoose';

const OpinionSchema = new mongoose.Schema({
  opinion: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

export default mongoose.model("Opinion", OpinionSchema);