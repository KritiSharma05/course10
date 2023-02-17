var users1 = /** @class */ (function () {
    function users1(username, password, contact, email, address) {
        this._username = username;
        this._password = password;
        this._contact = contact;
        this._email = email;
        this._address = address;
    }
    Object.defineProperty(users1.prototype, "contact", {
        get: function () {
            return this._contact;
        },
        set: function (value) {
            this._contact = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(users1.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(users1.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(users1.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(users1.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    return users1;
}());
var userdata = function (formData) {
    var form = Object.fromEntries(new FormData(formData));
    var contact = new users1(form.username, form.password, form.contact, form.email, form.address);
    Message(contact);
};
function Message(contact) {
    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    };
    fetch('http://localhost:3000/users', requestOptions)
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data); });
    window.alert("Thanks ".concat(contact.username, ",\nYou will reecvieve notifications to this ").concat(contact.email));
}
