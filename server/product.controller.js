const { v4: uuidv4 } = require('uuid');

exports.getAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  const products = [
    { id: uuidv4(), name: 'Bell Pepper', imagePath: `/images/product-1.jpg`, status: 30, price: 120, discountPrice: 80 },
    { id: uuidv4(), name: 'Strawberry', imagePath: '/images/product-2.jpg', status: 0, price: 119, discountPrice: 119 },
    { id: uuidv4(), name: 'Green Beans', imagePath: '/images/product-3.jpg', status: 0, price: 119, discountPrice: 119 },
    { id: uuidv4(), name: 'Purple Cabbage', imagePath: '/images/product-4.jpg', status: 0, price: 119, discountPrice: 119 },
    { id: uuidv4(), name: 'Tomatoe', imagePath: `/images/product-5.jpg`, status: 30, price: 120, discountPrice: 80 },
    { id: uuidv4(), name: 'Brocolli', imagePath: '/images/product-6.jpg', status: 0, price: 119, discountPrice: 119 },
    { id: uuidv4(), name: 'Carrots', imagePath: '/images/product-7.jpg', status: 0, price: 119, discountPrice: 98 },
    { id: uuidv4(), name: 'Fruit Juice', imagePath: '/images/product-8.jpg', status: 0, price: 119, discountPrice: 202 }
  ];
  res.send(products);
};

exports.createAccount = (req, res) => {

  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  res.send({ message: "The system has recored your data" });
}