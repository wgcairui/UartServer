/* eslint-disable camelcase */
/* jshint esversion:8 */
import { Schema } from "./index";


const Schema_Dev_ups = new Schema({
  generateTime: String,
  name: String,
  devid: String,
  brand: String,
  temperature: String,
  status: Number,
  phase: String,
  residual_capacity: Number,
  battery_voltage: Number,
  battery_voltage_negative: Number,
  load_ratio: Number,
  output_frequency: Number,
  input_voltage_l1: Number,
  input_voltage_l2: Number,
  input_voltage_l3: Number,
  output_voltage_l1: Number,
  output_voltage_l2: Number,
  output_voltage_l3: Number,
  output_load: Number,
  smoke: Boolean,
  access_contral: Boolean,
  leak: Boolean,
  shutdown_active: Boolean,
  Test_mode: Boolean,
  Battery_test: Boolean,
  UPS_work_situation: Boolean,
  bypass_mode: Boolean,
  Battery_voltage_state: Boolean,
  grid_state: Boolean,
  DateTime: { type: Date, default: new Date().toLocaleString() },
  "Battery group number": String,
  "Battery standard voltage per unit": String,
  "Battery capacity": Number,
  "Nominal O/P Voltage": Number,
  "Output power factor": Number,
  "Nominal I/P Voltage": Number,
  "Positive BUS voltage": Number,
  "Negative BUS voltage": Number,
  "Output voltage": Number,
  "Rating Output Frequency": Number,
  "Battery remain time": Number,
  "Input voltage": Number,
  "Rating Output Current": Number,
  "Input frequency": Number,
  "Battery piece number": Number,
  DevType: String,
  "P Battery voltage": String,
  "Output current": Number,
  "Ups Mode": String,
  "Rating Voltage": Number,
  "N Battery voltage": String
});

const Schema_Dev_ac = new Schema({
  generateTime: String,
  name: String,
  devid: String,
  brand: String,
  refrigeration_temperature: Number,
  mode: [String],
  refrigeration_stop_deviation: Number,
  evaporation_start_temperature: Number,
  air_change_time: Number,
  opening_delay: Number,
  high_temperature_alarm_point: Number,
  return_air_temperature: Number,
  coil_temperature: Number,
  modified_return_air_temperature: Number,
  Correct_air_outlet_temperature: Number,
  defrosting_temperature_setting: Number,
  heating_opening_deviation: Number,
  heating_stop_deviation: Number,
  refrigeration_start_deviation: Number,
  air_outlet_temperature_deviation: Number,
  Starting_temperature_setting: Number,
  temperature_difference: Number,
  air_supply_temperature: Number,
  DateTime: { type: Date, default: new Date().toLocaleString() }
});
const Schema_Dev_power = new Schema({
  generateTime: String,
  name: String,
  devid: String,
  brand: String,
  active_power: [Number],
  reactive_power: [Number],
  power_factor: [Number],
  quantity: [Number],
  input_voltage: [Number],
  input_voltage_l1: [Number],
  input_voltage_l2: [Number],
  input_voltage_l3: [Number],
  input_current: [Number],
  input_current_l1: [Number],
  input_current_l2: [Number],
  input_current_l3: [Number],
  input_frequency: [Number],
  input_frequency_l1: [Number],
  input_frequency_l2: [Number],
  input_frequency_l3: [Number],
  DateTime: { type: Date, default: new Date().toLocaleString() },
  EffectiveVoltage: Number,
  ActivePower: Number,
  EffectiveCurrent: Number
});

const Schema_Dev_io = new Schema({
  generateTime: String,
  name: String,
  devid: String,
  brand: String,
  power_status: Boolean,
  input_status: Boolean,
  smoke: Boolean,
  access_contral: Boolean,
  leak: Boolean,
  DateTime: { type: Date, default: new Date().toLocaleString() }
});
const Schema_Dev_th = new Schema({
  generateTime: String,
  name: String,
  devid: String,
  brand: String,
  temperature: Number,
  humidity: Number,
  DateTime: { type: Date, default: new Date().toLocaleString() }
});

export {
  Schema_Dev_ac,
  Schema_Dev_io,
  Schema_Dev_power,
  Schema_Dev_th,
  Schema_Dev_ups
};
