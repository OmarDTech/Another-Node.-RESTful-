const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling post request to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
        message: 'You Discoverd the special ID',
        id: Id
    });

    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }   
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(201).json({
        message: 'Deleted Product!'
    });
});

module.exports = router;