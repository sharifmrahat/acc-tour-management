const { createToursService, getToursService, getToursByIdService } = require("../services/tour.services");


module.exports.getTours = async (req, res, next) => {
  try {
    const tours = await getToursService(req.query);
    res.status(200).send(tours);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};

module.exports.createTours = async (req, res, next) => {
    try {
      const tour = await createToursService(req.body);
      tour.logger();
      res.status(200).json({ success: true, data: tour });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
      next(error);
    }
  };

exports.getTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tour = await getToursByIdService(id);
    res.status(200).json({ success: true, data: tour });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
  }
