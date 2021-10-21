const express = require('express');
const app = express();
let { people } = require('./data');

//static assets
app.use(express.static('./methods-public'))

// parse jsonTha
app.use(express.json())

//parse form data
app.use(express.urlencoded({ extended: false}))
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    console.log(name);
    if(!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value'});
    }

    res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
    
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name)
    return res.status(200).send(`Welcome ${name}`)

   res.status(401).send('Please provide crednetials')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})
