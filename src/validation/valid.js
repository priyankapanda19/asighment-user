const mongoose = require("mongoose");


const checkEmptyBody = (obj) => { return Object.keys(obj).length > 0 }


//-------------------Value Validation--------------------------->>
const isEmpty = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

// ----------------Name Validation-------------------------->>
const isValidName = function (name) {
    const nameRegex = /^[A-Z a-z]{1,50}$/;
    return nameRegex.test(name);
  };

  //<<----------------Validation for Phone No. ---------------->>

const isValidPhone = function (phone) {
    return /^((\+91)?|91)?[6789][0-9]{9}$/.test(phone);
  };
//<<---------------dob--------------------->>
const isValidDob=function(dob){
    return /^\d{4}-\d{2}-\d{2}$/.test(dob)
}
  

  module.exports={isValidPhone,isValidDob,isValidName,isEmpty,checkEmptyBody}