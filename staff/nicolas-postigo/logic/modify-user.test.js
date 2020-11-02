(function () {
    
    console.log('TEST modifyUser()');
    (function () {
        var fullname = 'AAAAA' + Math.random();
        var email = 'AAAAA' + Math.random() + '@mail.com';
        var password = 'pass-' + Math.random();
        var repassword = password
        call('POST',
            'https://b00tc4mp.herokuapp.com/api/v2/users',
            { 'Content-type': 'application/json' },
            '{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '", "repassword": "' + repassword + '" }',
            function (status) {
                console.assert(status === 201, "should status be 201")
                call('POST',
                    'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
                    { 'Content-type': 'application/json' },
                    '{ "username": "' + email + '", "password": "' + password + '" }',
                    function (status, response) {
                        var resText = JSON.parse(response)
                        token = resText.token
                        console.assert(status === 200, "should status be 200"); {
                            console.log(' should succed modifying a user');
                                modifyUser({age: 35}, token, function (error, item) {
                                console.assert(error === null, 'should error be null');
                                call('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users',
                                    {
                                        'Authorization': 'Bearer ' + token,
                                        'Content-type': 'application/json'
                                    },
                                    '{ "password": "' + password + '" }',
                                    function (status, response) {
                                        console.assert(status === 204, 'should status be 204');
                                        console.assert(response.length === 0, 'should response be empty');

                                    })
                            })
                        }

                    })
            });
        })();

})();
