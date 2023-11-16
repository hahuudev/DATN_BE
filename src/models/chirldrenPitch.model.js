import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const childrenPitchSchema = new mongoose.Schema(
  {
    idParentPitch: {
      type: mongoose.ObjectId,
      ref: "Pitch",
      required: true,
    },
    code_chirldren_pitch: { // mã số sân nhé
      type: Number,
    },
    idShifts: [
      {
        type: mongoose.ObjectId,
        ref: "Shift",
      },
    ],
    date: {
      type: String,
    }
  },

  { timestamps: true, versionKey: false }
);

childrenPitchSchema.plugin(mongoosePaginate);

export default mongoose.model("ChildrenPitch", childrenPitchSchema);