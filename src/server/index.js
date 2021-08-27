const express = require('express');
const app = express();
const cros = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(cros());
app.use(bodyParser.json());
app.use('/api', (req, res) => {
   //console.log(req.query.name);
    return res.json({username: 'yongjin'});
});

app.listen(port, ()=>{console.log(`express is running on ${port}`)});