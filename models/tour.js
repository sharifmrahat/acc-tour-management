const mongoose = require("mongoose");

//Tour Schema
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tour name is required."],
      trim: true,
      unique: [true, "Tour name must be unique"],
      minLength: [3, "Tour name must be minimum 3 characters."],
      maxLength: [100, "Tour name must be within 100 characters"],
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    viewed: {
      type: Number,
      required: true,
      min: [0, "viewed can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Viewed must be an integer number",
    },
  },
  {
    timestamps: true,
  }
);

tourSchema.pre("save", function (next) {
  if (this.viewed != 0) {
    this.viewed = 0;
  }
  next();
});

tourSchema.methods.logger = function () {
  console.log(` Data saved for ${this.name}`);
};

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
