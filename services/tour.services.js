const Tour = require("../models/tour");

exports.getToursService = async (query) => {
  const { limit, sort, page = 1 } = query;

  let skipped, sorted, fields;
  if (page) {
    skipped = (page - 1) * parseInt(limit);
  }
  if (sort) {
    sorted = sort.split(",").join(" ");
  }
  if (query.fields) {
    fields = query.fields.split(",").join(" ");
  }

  const totalTour = await Tour.countDocuments();
  const totalPage = Math.ceil(totalTour / limit) || 1;
  const tours = await Tour.find()
    .skip(skipped)
    .sort(sorted)
    .select(fields)
    .limit(+limit);

  return { totalTour, totalPage, tours };
};

exports.createToursService = async (data) => {
  return await Tour.create(data);
};
