let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());

let coffeeTracker = [];

//db connect to mongo db
const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://jaidenmalia:Charlie927@cluster0.khn3aso.mongodb.net/?retryWrites=true&w=majority");
db.on("ready", () => {
    console.log("Connected to the database");
});
db.connect();

//add values to data
db.push("coffeeTrackerData", obj);

//add route on server that is listening for a post request
app.post('/noCups', (req, res) => {
    console.log(req.body);
    let currentDate = Date();
    let obj = {
        date: currentDate,
        coffee: req.body.number
    }
    coffeeTracker.push(obj);
    console.log(coffeeTracker);
    res.json({task: "success"});
})


app.use('/', express.static('public'));

app.listen(5000, () => {
    console.log('listening at local host 5000');
})

//add route to get all coffee track indo
app.get('/getCups', (req, res) => {
    db.get("coffeeTrackerData").then(coffeeData => {
        let obj = {data: coffeeTracker};
        res.json(obj);
    })
   
})
