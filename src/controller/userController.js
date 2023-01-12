const userModel = require("../model/userModel");
const validation = require("../validation/valid");

let {isEmpty,isValidPhone,isValidDob,isValidName} = validation;

//-------------post Api for creating author--------------------->>>

const createUser = async function (req, res) {
  try {
    const data = req.body;
    
    if (Object.keys(data).length == 0) {
      return res.status(400).send({ status: "false", message: "All fields are mandatory" });
      }
   
    let {  name, mobile,dob,isIndian} = data;
    if (!isEmpty(name)) {
      return res.status(400).send({ status: false, message: "Name must be present " });
    }
    if (!isValidName(name))
    return res.status(400).send({ status: false, message: "Please  enter valid name" });
 
    if (!isEmpty(dob)) {
        return res.status(400).send({ status: false, message: "DOB must be present " });
    }
        if (!isValidDob(dob))
    return res.status(400).send({ status: false, message: "Please Enter valid dob like:YYYY-MM-DD" });
 
      
      if (!isEmpty(isIndian)) {
        return res.status(400).send({ status: false, message: "Name must be present " });
      }
      if (typeof isIndian!="boolean")
      return res.status(400).send({ status: false, message: "Please Enter boolean value" });
   
    if (!mobile)
    return res.status(400).send({ status: false, message: "Please Enter Your phone Number" });
    if (!isValidPhone(mobile))
    return res.status(400).send({ status: false, message: "Please Enter Valid phone Number" });
 

  let existedphone = await userModel.findOne({ mobile });
  if (existedphone)
    return res.status(400).send({status: false,message: "This Mobile No. is already registered"});

    
    
    const result = await userModel.create(data);
    res.status(201).send({ status: true, message: "new user is created", data: result });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};


module.exports.createUser = createUser;














