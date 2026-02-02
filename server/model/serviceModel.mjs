import mongoose from "mongoose";

/* ===========================
   SERVICE LEVEL ONE
========================= */
const serviceOneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  shortDescription: String,
  hasOwnPage: { type: Boolean, default: false },
  pageContent: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

/* ===========================
   SERVICE LEVEL TWO
========================= */
const serviceTwoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  serviceOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceOne',
    required: true
  },
  hasOwnPage: { type: Boolean, default: false },
  pageContent: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

/* ============================
   SERVICE LEVEL THREE
========================= */
const serviceThreeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  serviceOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceOne',
    required: true
  },
  serviceTwo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceTwo',
    required: true
  },
  hasOwnPage: { type: Boolean, default: true },
  pageContent: { type: String, required: true },
  shortDescription: String,
  featuredImage: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  relatedServices: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceThree'
  }]
}, { timestamps: true });

/* =========================
   SERVICE LEVEL FOUR
========================= */
const serviceFourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  serviceOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceOne',
    required: true
  },
  serviceTwo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceTwo',
    required: true
  },
  serviceThree: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceThree',
    required: true
  },
  hasOwnPage: { type: Boolean, default: true },
  pageContent: { type: String, required: true },
  shortDescription: String,
  featuredImage: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  relatedServices: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceFour'
  }]
}, { timestamps: true });

/* =========================
   SERVICE LEVEL FIVE (MAIN)
========================= */
const serviceFiveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },

  serviceOne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceOne',
    required: true
  },
  serviceTwo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceTwo',
    required: true
  },
  serviceThree: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceThree',
    required: true
  },
  serviceFour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceFour',
    required: true
  },

  hasOwnPage: { type: Boolean, default: true },
  pageContent: { type: String, required: true },
  shortDescription: String,
  featuredImage: String,

  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },

  relatedServices: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceFive'
  }]
}, { timestamps: true });

/* =========================
   INDEXES
========================= */
serviceOneSchema.index({ slug: 1 });
serviceTwoSchema.index({ slug: 1, serviceOne: 1 });
serviceThreeSchema.index({ slug: 1, serviceOne: 1, serviceTwo: 1 });
serviceFourSchema.index({ slug: 1, serviceOne: 1, serviceTwo: 1, serviceThree: 1 });
serviceFiveSchema.index(
  { slug: 1, serviceOne: 1, serviceTwo: 1, serviceThree: 1, serviceFour: 1 },
  { unique: true }
);

/* =========================
   MODEL REGISTRATION
========================= */
const ServiceOne = mongoose.model('ServiceOne', serviceOneSchema);
const ServiceTwo = mongoose.model('ServiceTwo', serviceTwoSchema);
const ServiceThree = mongoose.model('ServiceThree', serviceThreeSchema);
const ServiceFour = mongoose.model('ServiceFour', serviceFourSchema);
const ServiceFive = mongoose.model('ServiceFive', serviceFiveSchema);

/* =========================
   EXPORT ALL MODELS
========================= */
export { ServiceFive, ServiceFour, ServiceOne, ServiceThree, ServiceTwo };
export default ServiceFive;
