const Product = require('../models/productModel');

exports.getAddProduct = (req, res, next) => {
    res.render('new-product', {
        pageTitle: 'Add Product',
        path: '/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, price, description);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getProductDetails = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('product-details', {
            product: product,
            pageTitle: 'Product Details',
            path: '/products'
        });
    });
};



