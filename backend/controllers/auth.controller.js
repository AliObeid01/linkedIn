const User = require('../models/user.model');
const Company = require('../models/company.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { name, email, password, type } = req.body;

  if(type == "user") {
    try {
    
      const user = new User();
      user.name = name;
      user.email = email;
      user.type= type;
      user.password = await bcrypt.hash(password, 10);
  
      await user.save();
      res.json(user);
  
    } catch(err) {
      res.status(400).json({
        message: err.message
      });
    }
  }

  else{
      try {
          const company = new Company();
          company.name = name;
          company.email = email;
          company.type= type;
          company.password = await bcrypt.hash(password, 10);

          await company.save();
          res.json(company);

      } catch(err) {
          res.status(400).json({
            message: err.message
          });
      }
  }
}

const signin = async (req, res) => {
  const {email, password, type} = req.body;

  if(type == "user") {
    const user = await User.findOne({email});

  if(!user) return res.status(404).json({message: "Invalid Credentials"});

  const isMatch = bcrypt.compare(password, user.password);
  if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

  const token = jwt.sign({email: user.email}, process.env.JWT_SECRET_KEY, {
    expiresIn: '10h'
  });

  res.status(200).json(token)
  }
  
else{
  const company = await Company.findOne({email});

  if(!company) return res.status(404).json({message: "Invalid Credentials"});

  const isMatch = bcrypt.compare(password, company.password);
  if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});

  const token = jwt.sign({email: company.email}, process.env.JWT_SECRET_KEY, {
    expiresIn: '10h'
  });
  res.status(200).json(token)
}
}

module.exports = {
  signin,
  signup
}
