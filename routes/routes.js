const express=require("express");
const router=express.Router();
const demoCopy=require('../model/demo');

router.post('/',(req,res)=>{
    
    const userObj= new demoCopy({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });

    userObj.save()
    .then(data=>{
        res.status(200).json({message:"successfull"})
    }).catch(
        err=>{
            res.status(400).json({message:"failed"})
        }
    );


});
// router.get('/', async (req, res) => {
//     const { email } = req.query;
  
//     try {
//       // Assuming you have a MongoDB model named 'demoCopy'
//       const userData = await demoCopy.findOne({ email });
  
//       if (userData) {
//         // Data found for the given email
//         const { name, email } = userData;
//         res.status(200).json({ message: 'success', data: { name, email } });
//       } else {
//         // No data found for the given email
//         res.status(404).json({ message: 'not found' });
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ message: 'internal server error' });
//     }
//   });

module.exports=router;