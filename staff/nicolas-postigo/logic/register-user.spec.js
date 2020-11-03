var { random } = Math

describe('SPEC registerUser()', function () {
    describe('when user does not exist', function () {
        let fullname, email, password, token

        beforeEach(function (done) {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
            done()

        })

        it('should succeed on registering a new user', function (done) {
            registerUser(fullname, email, password, repassword, function (error) {
                expect(error).toBeNull()


                done()
            })
        })

        afterEach(function (done) {
            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                { 'Content-type': 'application/json' },
                JSON.stringify({ username: email, password }),
                function (status, response) {
                    expect(status).toBe(200)
                    expect(response.length).toBeGreaterThan(0)

                    token = JSON.parse(response).token

                    expect(token.length).toBeGreaterThan(0)
                    call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                        {
                            Authorization: `Bearer ${token}`,
                            'Content-type': 'application/json'
                        },
                        JSON.stringify({ password }),
                        function (status, response) {
                            expect(status).toBe(204)
                            expect(response.length).toBe(0)

                            done()
                        })
                })

        })

    })
    describe(' when user already exists', function () {
        let fullname, email, password, token

        beforeEach(function (done) {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                { 'Content-type': 'application/json' },
                JSON.stringify({ fullname, username: email, password }),
                function (status, response) {
                    expect(status).toBe(201)
                    expect(response.length).toBe(0)

                    done()
                })
        })
        it('should fail registering a user that already exists', function (done) {
            registerUser(fullname, email, password, repassword, function (error) {

                expect(error).toBeInstanceOf(Error)



                done()
            })
        })

        afterEach(function (done) {
            call('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                { 'Content-type': 'application/json' },
                JSON.stringify({ username: email, password }),
                function (status, response) {
                    expect(status).toBe(200)
                    expect(response.length).toBeGreaterThan(0)

                    token = JSON.parse(response).token

                    expect(token.length).toBeGreaterThan(0)
                    call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                        {
                            Authorization: `Bearer ${token}`,
                            'Content-type': 'application/json'
                        },
                        JSON.stringify({ password }),
                        function (status, response) {
                            expect(status).toBe(204)
                            expect(response.length).toBe(0)

                            done()
                        })
                })

        })
    })
    describe('when fullname is not a string', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = [1, true, null, undefined, {}, [], function () { }, new Date].random()
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
        })

        it('should fail on non-string fullname', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(TypeError, `${fullname} is not a full name`)
        })
    })

    describe('when email is not a string', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = `fullname-${random()}`
            email = [1, true, null, undefined, {}, [], function () { }, new Date].random()
            password = `password-${random()}`
            repassword = password
        })

        it('should fail on non-string email', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(TypeError, `${email} is not an e-mail`)
        })
    })
    describe('when password is not a string', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = [1, true, null, undefined, {}, [], function () { }, new Date].random()
            repassword = password
        })

        it('should fail on non-string password', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(TypeError, `${password} is not a password`)
        })
    })
    describe('when repeating password that is not a string', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = [1, true, null, undefined, {}, [], function () { }, new Date].random()
        })

        it('should fail on non-string repeated password', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(TypeError, `${repassword} is not a password repeat`)
        })
    })

    describe('when fullname is empty or blank', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = ['', ' ', '\t', '\n'].random()
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password
            
        })

        it('should fail on empty or blank fullname', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(Error, 'full name is empty or blank')
        })
    })

    describe('when email is empty or blank', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = `fullname-${random()}`
            email = ['', ' ', '\t', '\n'].random()
            password = `password-${random()}`
            repassword = password
            
        })

        it('should fail on empty or blank email', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(Error, 'e-mail is empty or blank')
        })
    })

    describe('when password is empty or blank', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = ['', ' ', '\t', '\n'].random()
            repassword = password
            
        })

        it('should fail on empty or blank password', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(Error, 'password is empty or blank')
        })
    })

    describe('when repassword is empty or blank', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = ['', ' ', '\t', '\n'].random()
            
        })

        it('should fail on empty or blank repassword', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(Error, 'password repeat is empty or blank')
        })
    })

    describe('when email is not a valid email', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = `fullname-${random()}`
            email = ["nico@mail", "nico.com", "@mail.com", "@mail@com", "com"].random()
            password = `password-${random()}`
            repassword = password
            
        })

        it('should fail on an invalid email', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(Error, 'invalid e-mail')
        })
    })

    describe('when passwords do not match', function () {
        let fullname, email, password, repassword

        beforeEach(function () {
            fullname = `fullname-${random()}`
            email = `email-${random()}@mail.com`
            password = `password-${random()}`
            repassword = password + "ole"
            
        })

        it('should fail on non matching passwords', function () {
            expect(function () {
                registerUser(fullname, email, password, repassword, function () { })
            }).toThrowError(Error, 'passwords don\'t match')
        })
    })
})