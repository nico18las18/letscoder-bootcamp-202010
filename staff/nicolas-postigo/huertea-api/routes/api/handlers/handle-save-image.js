const Busboy = require('busboy')
const { SaveOfferImage } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { params: { offerId } } = req

    const busboy = new Busboy({ headers: req.headers })

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) =>
        SaveOfferImage(offerId, file)
            .catch(handleError)
    )

    busboy.on('finish', () => res.status(204).send())

    req.pipe(busboy)
}