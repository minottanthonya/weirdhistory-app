'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Employee Schema
 */
var EmployeeSchema = new Schema({
  firstname: {
    type: String,
    default: '',
    required: 'Please provide employee first name',
    trim: true
  },
  lastname: {
    type: String,
    default: '',
    required: 'Please provide employee last name',
    trim: true
  },
  address: {
    type: String,
    default: '',
    required: 'Please provide employee street address',
    trim: true
  },
  city: {
    type: String,
    default: '',
    required: 'Please provide employee city',
    trim: true
  },
  state: {
    type: String,
    default: '',
    required: 'Please provide employee state',
    trim: true
  },
  zip: {
    type: Number,
    default: '',
    required: 'Please provide employee zip code',
    trim: true
  },
  phone: {
    type: Number,
    default: '',
    required: 'Please provide employee phone number',
    trim: true
  },
  email: {
    type: String,
    default: '',
    required: 'Please provide employee email',
    trim: true
  },
  birthdate: {
    type: Date,
    default: Date.now(),
    required: 'Please provide employee birthdate',
    trim: true
  },
  position: {
    type: String,
    default: '',
    required: 'Please provide employee position',
    trim: true
  },
  wage: {
    type: Number,
    default: 0,
    min: 0,
    max: 40.00,
    required: 'Please provide employee wage',
    trim: true
  },
  hiredate: {
    type: Date,
    default: Date.now(),
    required: 'Please provide employee hire date',
    trim: true
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

mongoose.model('Employee', EmployeeSchema);
