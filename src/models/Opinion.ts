import mongoose from 'mongoose';

interface IOpinion extends mongoose.Document {
  opinion: string;
}

const OpinionSchema = new mongoose.Schema({
  opinion: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

export default mongoose.model<IOpinion>("Opinion", OpinionSchema);