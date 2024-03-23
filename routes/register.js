const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
     return cb(null, file.fieldname + '-' + uniqueSuffix)
  },
});
// const upload = multer({ dest: 'uploads/' })
const upload = multer({ storage: storage });

const { Router } = require("express");
const register = require("../models/register.js");

const router = Router();

router.post('/submitProblem', upload.single('photo'), async (req, res) => {
    try {
        // Check if all required fields are present
        const { category, location, city, pincode, problemDescription } = req.body;
        if (!category || !location || !city || !pincode || !problemDescription) {
            return res.status(400).send('All fields are required');
        }

        // Create a new registration document
        const newRegistration = new register({
            category: category,
            location: location,
            city: city,
            pincode: pincode,
            problemDescription: problemDescription,
            photos: {
              path: req.file.path,
                // filename: req.file.originalname,
                // contentType: req.file.mimetype,
                // data: req.file.buffer
            }
        });
    
        // Save the registration to the database
        await newRegistration.save();
        console.log(req.body)
    
        res.status(201).send('Registration successful');
    } catch (error) {
        console.error('Error registering:', error);
        res.status(500).send('Error registering');
    }
});

module.exports = router;
