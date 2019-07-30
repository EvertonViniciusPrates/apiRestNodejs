// contactController.js
// Import newsletter model
Newsletter = require('./newsletterModel');
// Handle index actions
exports.index = function (req, res) {
    Newsletter.get(function (err, newsletter) {
        res.json(newsletter)
    });
};
// Handle create newsletter actions
exports.new = function (req, res) {
    var newsletter = new Newsletter();
    newsletter.cardTitle = req.body.cardTitle ? req.body.cardTitle : newsletter.cardTitle;
    newsletter.img = req.body.img;
    newsletter.description = req.body.description;
    newsletter.lastUpdate = req.body.lastUpdate;
    // save the newsletter and check for errors
    newsletter.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New newsletter created!',
            data: newsletter
        });
    });
};
// Handle view newsletter info
exports.view = function (req, res) {
    Newsletter.findById(req.params._id, function (err, newsletter) {
        if (err)
            res.send(err);
        res.json({
            message: 'Newsletter details loading..',
            data: newsletter
        });
    });
};
// Handle update newsletter info
exports.update = function (req, res) {
    Newsletter.findById(req.params._id, function (err, newsletter) {
        if (err)
            res.send(err);
        newsletter.cardTitle = req.body.cardTitle ? req.body.cardTitle : newsletter.cardTitle;
        newsletter.img = req.body.img;
        newsletter.description = req.body.description;
        newsletter.lastUpdate = req.body.lastUpdate;
        // save the newsletter and check for errors
        newsletter.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Newsletter Info updated',
                data: newsletter
            });
        });
    });
};
// Handle delete newsletter
exports.delete = function (req, res) {
    Newsletter.remove({
        _id: req.params._id
    }, function (err, newsletter) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Newsletter deleted'
        });
    });
};