const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('pro visa consultant server is running')
})

app.listen(port, () => {
    console.log(`pro visa consultant server running on ${port}`);
})