const { createOffer } = require('../../../logic/')

module.exports = (req, res, handleError) => {
    const { body: { offername } } = req

    try {
        createOffer(offername)
            .then(() => res.status(201).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}