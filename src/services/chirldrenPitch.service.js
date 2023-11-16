import ChildrenPitch from "../models/chirldrenPitch.model";

export const getAll = async (options) => {
  return ChildrenPitch.paginate(
    {},
    { ...options, populate: ["idShifts"] }
  );
};
export const getById = async (id) => {
  return ChildrenPitch.findById(id).populate(["idParentPitch"]);
};

export const getChildrenPitchsByParent = (idParentPitch) => {
  return ChildrenPitch.find({ idParentPitch });
};

export const create = async (data) => {
  return ChildrenPitch.create(data);
};

export const update = async (id, data) => {
  return ChildrenPitch.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const remove = async (id) => {
  return ChildrenPitch.findByIdAndDelete(id);
};
