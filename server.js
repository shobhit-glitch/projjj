const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs =require('ejs');

app.set('view engine','ejs');

const MONGODB_URI='mongodb+srv://shobhitsinghid:xqmk8WYTvdmZfA92@cluster0.2qxpaq3.mongodb.net/jiomain';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

const notesSchema ={
    name: String,
    dateofbirth: Date,
    gender: String,
    Nationality: String,
    Address: String,
    phone: Number,
    email : String,
    school: String,
    gyear : Number,
    Percentage : Number,
    Achievements : String,
    programme: String,
    course: String,
    answer1 : String,
    answer2 : String,


}

const notes = mongoose.model('notes',notesSchema);

// app.get('/',(req,res)=> {
//     res.sendFile(__dirname+'/index.html')
// }) THIS AABOVE CODE WAS FOR HTML FILES

//THE BELOW CODE IS FOR ejs type
// app.get('/',(req,res)=>{
//     let name
//     res.render('index',{
//         userName: name= 'Marina'
//     })
// })

// app.get('/topstudent', async (req, res) => {
//     try {
//       const notes = await notes.aggregate([
//         { $sort: { Percentage: -1 } }, // Sort the documents in descending order of percentage
//         { $limit: 100 } // Retrieve only the top 100 documents
//       ]);
  
//       res.json(notes);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   });
// notes.find().then(
//     notes => res.render('index',{
//         studentlist: notes
//     })
//     ).catch(
//         err => console.log(err)
//         );





// app.get('/', async (req,res)=>{
//     try{
//         const studentlist =await notes.find();
//         console.log(studentlist);
//         res.render('index',{
//             studentlist: notes
//         });
//     }
//     catch (err){
//         console.log(err);
//     }
// })




app.get('/', async (req, res) => {
    try {
      const studentlist = await notes.find().sort({Percentage: -1}).limit(3);
      console.log(studentlist);
      res.render('index', {
        studentlist: studentlist
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });












// app.get('/', (req,res)=>{
//     notes.find((err,val)=>{
//         if(err)
//         {
//             console.log(err)
//         }else{
//             res.json(val)
//         }
//     })

// })


// app.get('/notes', (req, res) => {
//     // Get all of the notes from the notes collection.
//     const notes = await notes.find();
  
//     // Render the notes to HTML.
//     res.render('notes', { notes });
//   });

// async function appGet(req, res) {
//     // Get all of the notes from the notes collection.
//     const notes = await notes.find();
  
//     // Render the notes to HTML.
//     res.render('notes', { notes });
// }




app.listen(4000, function(){
    console.log('server is running ');
}) 