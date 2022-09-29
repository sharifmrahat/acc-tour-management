const { createToursService, getToursService, getToursByIdService, updateTourByIdService, getTopToursService } = require("../services/tour.services");


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

exports.updateTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await updateTourByIdService(id, req.body);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
  }


  exports.getTrendingTour = async (req, res, next) => {
    try {
      const queries = {sort: "-viewed", limit: 3}
      const tours = await getTopToursService(queries);
      res.status(200).send(tours);
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
      next(error);
    }
  }

  exports.getCheapestTour = async (req, res, next) => {
    try {
      const queries = {sort: "price", limit: 3}
      const tours = await getTopToursService(queries);
      res.status(200).send(tours);
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
      next(error);
    }
  }
