const User = require("../models/user");
const mailgun = require('mailgun-js')


var api_key = 'XXXXXXXXXXXXXXXXXXXXXXX';
var domain = 'www.mydomain.com';
const mg = mailgun({apiKey: api_key, domain: domain});

// exports.signup = (req, res) => {
//     console.log(req.body);
//     const {name, email, password} = req.body;
//     User.findOne({email}).exec((err, user) => {
//         if(user) {
//             return res.status(404).json({error: "User with this email is already exist"});
//         }
//         let newUser = new User({name, email, password});
//         newUser.save((err, success) => {
//             if(err) {
//                 console.log("Error in signup: ", err)
//                 return res.status(404).json({error: err})
//             }
//             res.json({
//                 message: "Sgnup Successful"
//             })
//         })
//     });
    
// }


exports.signup = (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    User.findOne({email}).exec((err, user) => {
        if(user) {
            return res.status(404).json({error: "User with this email is already exist"});
        }
        let newUser = new User({name, email, password});
        newUser.save((err, success) => {
            if(err) {
                console.log("Error in signup: ", err)
                return res.status(404).json({error: err})
            }
            res.json({
                message: "Sgnup Successful"
            })
        })
    });
    
}

