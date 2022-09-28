const { createToursService } = require("../services/tour.services");

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
