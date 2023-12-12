import ServiceModel from "../models/service.model";

export const getAll = async () => {
    return ServiceModel.find();
}

export const getOneService = async (serviceId) => {
  return ServiceModel.findById(serviceId).populate("admin_pitch_id");
};

export const create = async (data) => {
  return await ServiceModel.create(data);
};

export const update = async (service) => {
  const { id, ...body } = service;
  return await ServiceModel.findByIdAndUpdate(service.id, body, { new: true });
};

export const remove = async (serviceId) => {
  return await ServiceModel.findByIdAndDelete(serviceId);
};
