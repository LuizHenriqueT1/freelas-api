const  mongoose  = require('mongoose');

const JobSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
})

mongoose.model('Job', JobSchema);