const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 




app.use(express.static('Views')); 

app.get('/*', (req, res) => { 
    res.send('404 Not Found');
});

app.listen(PORT, () => { 
    console.log(`Server is up and running on port ${PORT}`);
})