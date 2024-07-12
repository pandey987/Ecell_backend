const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require("./user.js");
const Admin = require("./admin.js");
const EventSchema = new Schema({
   
    title:{
        type: String,
        // required: true
    },
    description:{
        type: String,
        // required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    posterlink:{
        type:String,
        default: "https://media.istockphoto.com/id/952066494/photo/silhouettes-of-group-of-businessperson-global-business-network-concept.jpg?s=2048x2048&w=is&k=20&c=zVPZKqitdEkm9QUAhSo3tzWcC7HT-0q_r7ZVZQK2H60="
    },
    day:{
        type:String,
        default:"1"
    },
    month:{
        type:String,
        default:"Jan"
    },
    eventtime:{
        type:String,
        default:"05:00"
    },
    coordinator:{
        type:String,
        default:"E-CELL"
    },
    date:{
        type: Date,
        default: Date.now
    },
    status :{
        type : String,
        // required : true
    },
    users :[{
        type : Schema.Types.ObjectId,
        ref : "User"
    }],
    owner :{
        type : Schema.Types.ObjectId,
        ref : "Admin"
    },

  });

  module.exports = mongoose.model('Event', EventSchema);