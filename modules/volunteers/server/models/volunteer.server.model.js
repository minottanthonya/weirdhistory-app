'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Volunteer Schema
 */
var VolunteerSchema = new Schema({
  firstname: {
    type: String,
    default: '',
    required: 'Please provide volunteer first name',
    trim: true
  },
  lastname: {
    type: String,
    default: '',
    required: 'Please provide volunteer last name',
    trim: true
  },
  address: {
    type: String,
    default: '',
    required: 'Please provide volunteer street address',
    trim: true
  },
  city: {
    type: String,
    default: '',
    required: 'Please provide volunteer city',
    trim: true
  },
  state: {
    type: String,
    default: '',
    required: 'Please provide volunteer state',
    trim: true
  },
  zip: {
    type: Number,
    default: '',
    required: 'Please provide volunteer zip code',
    trim: true
  },
  phone: {
    type: Number,
    default: '',
    required: 'Please provide volunteer phone number',
    trim: true
  },
  email: {
    type: String,
    default: '',
    required: 'Please provide volunteer email',
    trim: true
  },
  birthdate: {
    type: Date,
    default: Date.now,
    required: 'Please provide volunteer birthdate'
  },
  position: {
    type: String,
    default: '',
    required: 'Please provide volunteer position',
    trim: true
  },
  startdate: {
    type: Date,
    default: Date.now,
    required: 'Please provide volunteer start date'
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Volunteer', VolunteerSchema);
