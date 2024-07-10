const express = require('express');
const app = express();
const port = 5500;


app.get('/', (req,res)=>{
    res.json({message:`SERVER IS NOW UP`});
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});