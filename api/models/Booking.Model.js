import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  place: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'Place' },
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
  checkIn: { type: Date, require: true },
  checkOut: { type: Date, require: true },
  name: { type: Date, require: true },
  phone: { type: Date, require: true },
  price: Number,
});

const BookingModel = mongoose.model('Booking', bookingSchema);

export default BookingModel;