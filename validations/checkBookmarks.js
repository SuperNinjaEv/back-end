// MIDDLEWARE
// Creating validation middleware will allow us to check/confirm that our data is how we want it

const checkRequest = (req, res, next) => {
    if (req.body.name && req.body.url && req.body.category) {
        return next();
    } else {
        res.status(400).json({ error: "Body is missing required fields or isn't present" })
    };
};

const checkId = (req, res, next) => {
    if (req.params.id) {
        return next();
    } else {
        res.status(400).json({ error: "Missing required id, or id not found" })
    };
};

const validateUrl = (req, res, next) => {
    if (
        req.body.url.substring(0, 7) === "http://" ||
        req.body.url.substring(0, 8) === "https://"
    ) {
        return next();
    } else {
        res.status(400).json({ error: "You forgot to enter http:// OR https://" })
    }
}

module.exports = { checkRequest, checkId, validateUrl };
