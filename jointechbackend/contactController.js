// contactController.js
// Import newsletter model
Newsletter = require('./newsletterModel');
// Handle index actions
exports.index = function (req, res) {
    Newsletter.get(function (err, newsletter) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "NewsLetters retrieved successfully",
            data: newsletter
        });
    });
};
// Handle create newsletter actions
exports.new = function (req, res) {
    var newsletter = new Newsletter();
    newsletter.name = req.body.name ? req.body.name : newsletter.name;
    newsletter.gender = req.body.gender;
    newsletter.email = req.body.email;
    newsletter.phone = req.body.phone;
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
        newsletter.name = req.body.name ? req.body.name : newsletter.name;
        newsletter.gender = req.body.gender;
        newsletter.email = req.body.email;
        newsletter.phone = req.body.phone;
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
        _id: req.params.contact_id
    }, function (err, newsletter) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Newsletter deleted'
        });
    });
};