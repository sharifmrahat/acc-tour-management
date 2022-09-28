const Tour = require("../models/tour");

exports.createToursService = async(data) =>{
    return await Tour.create(data);
}
