require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
let addCount = 0;
let updateCount = 0;
mongoose.connect('')
app.post('/api/add', (req, res) => {
    // Logic to add data
    addCount++;
    res.json({ message: 'Data added successfully' });
});

// API to edit data
app.put('/api/edit/:id', (req, res) => {
    // Logic to edit data
    updateCount++;
    res.json({ message: 'Data updated successfully' });
});

// API to get count
app.get('/api/count', (req, res) => {
    res.json({ addCount, updateCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
