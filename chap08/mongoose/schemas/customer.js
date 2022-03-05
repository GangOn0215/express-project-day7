const mongoose = require('mongoose');

const {Schema} = mongoose;
const customerSchema = new Schema({
  /**
   * 
   * required : 필수 값
   * unique : 고유성
   */
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    require: true,
    unique: true 
  },
  address: {
    type: String
  }
});

const Customer = mongoose.model('Customer', customerSchema);  //스키마를 사용해서 모델 생성
module.exports = Customer;