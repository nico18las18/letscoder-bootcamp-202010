module.exports = {
    validateEmail(email) {
        if (typeof email !== 'string') throw new TypeError(`${email} is not an e-mail`)

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
    },

    validatePassword(password) {
        if (typeof password !== 'string') throw new TypeError(password + ' is not a password')

        if (!password.trim().length) throw new Error('password is empty or blank')
    },

    validateCallback(callback) {
        if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    },

    validateFullname(fullname) {
        if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a fullname')

        if (!fullname.trim().length) throw new Error('fullname is empty or blank')
    },

    validateId(id) {
        if (typeof id !== 'string') throw new TypeError(id + ' is not a id')

        if (!id.trim().length) throw new Error('id is empty or blank')

    },

    validateToken(token) {
        if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

        if (!token.trim().length) throw new Error('token is empty or blank')
    },

    validateText(text) {
        if (typeof text !== 'string') throw new TypeError(text + ' is not a text')

        if (!text.trim().length) throw new Error('text is empty or blank')
    },

    validateTags(tags) {
        if (!(tags instanceof Array)) throw new TypeError(`${tags} is not an array`)

        tags.forEach(tag => {
            if (typeof tag !== 'string') throw new TypeError(tag + ' is not a tag')

            if (!tag.trim().length) throw new Error('tag is empty or blank')
        })
    },

    validateUpdate(update) {
        if (typeof update !== "object") throw new TypeError("update is not an object")
        if (Object.keys(update).length === 0) throw new TypeError("update is blank or empty")
    },
    
    validateOffer(offername) {
        if (typeof offername !== 'string') throw new TypeError(offername + ' is not a offername')

        if (!offername.trim().length) throw new Error('offername is empty or blank')
    },

    validateTitleoffer(titleoffer) {
        if (typeof titleoffer !== 'string') throw new TypeError(titleoffer + ' is not a titleoffer')

        if (!titleoffer.trim().length) throw new Error('titleoffer is empty or blank')
    },
    validateOfferAddress(offeraddress) {
        if (typeof offeraddress !== 'string') throw new TypeError(offeraddress + ' is not a offeraddress')

        if (!offeraddress.trim().length) throw new Error('offeraddress is empty or blank')
    },

    validatePhoneContact(phonecontact) {
        if (typeof phonecontact !== 'string') throw new TypeError(phonecontact + ' is not a phonecontact')

        if (!phonecontact.trim().length) throw new Error('phonecontact is empty or blank')
    },
    validateEmailContact(emailcontact) {
        if (typeof emailcontact !== 'string') throw new TypeError(emailcontact + ' is not a emailcontact')

        if (!emailcontact.trim().length) throw new Error('emailcontact is empty or blank')
    },
    validateFile(file) {
        if (!(file instanceof File)) throw new TypeError(`${file} is not file`)
    }

}