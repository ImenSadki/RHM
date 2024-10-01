const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, },
    email: { type: String,  unique: true }, // Email unique
    position: { type: String },
    salary: { type: Number}
});


const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
