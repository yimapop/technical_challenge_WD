const mongoose = require('mongoose');
const Phone = require('./models/Phone.model')

const MONGO_URI = 'mongodb://localhost/technical-challenge-app'     

mongoose
    .connect(MONGO_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo: ", err))

const phones = [
    {
        "id": 0,
        "name": "iPhone 7",
        "manufacturer": "Apple",
        "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
        "color": "black",
        "price": 769,
        "imageFileName": "IPhone_7.png",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2
    },
    {
        "id": 1,
        "name": "Galaxy S7",
        "manufacturer": "Samsung",
        "description": "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
        "color": "grey",
        "price": 209,
        "imageFileName": "Galaxy_S7.png",
        "screen": "5,1 inch Quad-HD",
        "processor": "Snapdragon 820",
        "ram": 4
    },
    {
        "id": 2,
        "name": "Honor 10",
        "manufacturer": "Huawei",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "blue",
        "price": 399,
        "imageFileName": "Honor_10.png",
        "screen": "5,84 inch Full-HD",
        "processor": "Kirin 970",
        "ram": 6
    },
    {
        "id": 3,
        "name": "P10 Lite",
        "manufacturer": "Huawei",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "white",
        "price": 249,
        "imageFileName": "P10_Lite.jpg",
        "screen": "5,2 inch Full-HD",
        "processor": "Kirin 658",
        "ram": 4
    },
    {
        "id": 4,
        "name": "Nokia 7.1",
        "manufacturer": "Nokia",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 275,
        "imageFileName": "Nokia_7.1.jpg",
        "screen": "5,84 inch Full-HD",
        "processor": "Octa-core",
        "ram": 4
    },
    {
        "id": 5,
        "name": "Zen Phone 5",
        "manufacturer": "Asus",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 359,
        "imageFileName": "ZenPhone_5.jpg",
        "screen": "6,2 inch Full-HD",
        "processor": "Snapdragon 636",
        "ram": 6
    },
    {
        "id": 6,
        "name": "MI A2",
        "manufacturer": "Xiaomi",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 179,
        "imageFileName": "Xiaomi_MI_A2.jpeg",
        "screen": "5,99 inch Full-HD",
        "processor": "Snapdragon 660",
        "ram": 6
    },
    {
        "id": 7,
        "name": "Moto G6",
        "manufacturer": "Motorola",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 199,
        "imageFileName": "Moto_G6.png",
        "screen": "5,7 inch Full-HD",
        "processor": "Snapdragon 450",
        "ram": 3
    }
]

Phone
    .create(phones)
    .then(phonesFromDB => {
        console.log(`Created ${phonesFromDB.length} phones`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating phones from the DB: ${err}`));
