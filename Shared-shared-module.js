(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Shared-shared-module"],{

/***/ "./node_modules/angular-cc-library/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-cc-library/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.CreditCardValidator = __webpack_require__(/*! ./lib/credit-card.validator */ "./node_modules/angular-cc-library/lib/credit-card.validator.js").CreditCardValidator;
exports.CreditCardFormatDirective = __webpack_require__(/*! ./lib/directives/credit-card-format.directive */ "./node_modules/angular-cc-library/lib/directives/credit-card-format.directive.js").CreditCardFormatDirective;
exports.CvcFormatDirective = __webpack_require__(/*! ./lib/directives/cvc-format.directive */ "./node_modules/angular-cc-library/lib/directives/cvc-format.directive.js").CvcFormatDirective;
exports.ExpiryFormatDirective = __webpack_require__(/*! ./lib/directives/expiry-format.directive */ "./node_modules/angular-cc-library/lib/directives/expiry-format.directive.js").ExpiryFormatDirective;
exports.CreditCard = __webpack_require__(/*! ./lib/shared/credit-card */ "./node_modules/angular-cc-library/lib/shared/credit-card.js").CreditCard;
exports.CreditCardDirectivesModule = __webpack_require__(/*! ./lib/directives */ "./node_modules/angular-cc-library/lib/directives.js").CreditCardDirectivesModule;


/***/ }),

/***/ "./node_modules/angular-cc-library/lib/credit-card.validator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/angular-cc-library/lib/credit-card.validator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var credit_card_1 = __webpack_require__(/*! ./shared/credit-card */ "./node_modules/angular-cc-library/lib/shared/credit-card.js");
var CreditCardValidator = (function () {
    function CreditCardValidator() {
    }
    CreditCardValidator.validateCCNumber = function (control) {
        if (forms_1.Validators.required(control) !== undefined && forms_1.Validators.required(control) !== null) {
            return { 'ccNumber': true };
        }
        var num = control.value.toString().replace(/\s+|-/g, '');
        if (!/^\d+$/.test(num)) {
            return { 'ccNumber': true };
        }
        var card = credit_card_1.CreditCard.cardFromNumber(num);
        if (!card) {
            return { 'ccNumber': true };
        }
        if (card.length.includes(num.length) && (card.luhn === false || credit_card_1.CreditCard.luhnCheck(num))) {
            return null;
        }
        var upperlength = card.length[card.length.length - 1];
        if (num.length > upperlength) {
            var registeredNum = num.substring(0, upperlength);
            if (credit_card_1.CreditCard.luhnCheck(registeredNum)) {
                return null;
            }
        }
        return { 'ccNumber': true };
    };
    CreditCardValidator.validateExpDate = function (control) {
        if (forms_1.Validators.required(control) !== undefined && forms_1.Validators.required(control) !== null) {
            return { 'expDate': true };
        }
        if (typeof control.value !== 'undefined' && control.value.length >= 7) {
            var _a = control.value.split(/[\s\/]+/, 2), month = _a[0], year = _a[1], prefix = void 0;
            if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
                prefix = new Date().getFullYear();
                prefix = prefix.toString().slice(0, 2);
                year = prefix + year;
            }
            month = parseInt(month, 10).toString();
            year = parseInt(year, 10).toString();
            if (/^\d+$/.test(month) && /^\d+$/.test(year) && (month >= 1 && month <= 12)) {
                var currentTime = void 0, expiry = void 0;
                expiry = new Date(year, month);
                currentTime = new Date();
                expiry.setMonth(expiry.getMonth() - 1);
                expiry.setMonth(expiry.getMonth() + 1, 1);
                if (expiry > currentTime) {
                    return null;
                }
            }
        }
        return { 'expDate': true };
    };
    return CreditCardValidator;
}());
exports.CreditCardValidator = CreditCardValidator;
//# sourceMappingURL=credit-card.validator.js.map

/***/ }),

/***/ "./node_modules/angular-cc-library/lib/directives.js":
/*!***********************************************************!*\
  !*** ./node_modules/angular-cc-library/lib/directives.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var credit_card_format_directive_1 = __webpack_require__(/*! ./directives/credit-card-format.directive */ "./node_modules/angular-cc-library/lib/directives/credit-card-format.directive.js");
var expiry_format_directive_1 = __webpack_require__(/*! ./directives/expiry-format.directive */ "./node_modules/angular-cc-library/lib/directives/expiry-format.directive.js");
var cvc_format_directive_1 = __webpack_require__(/*! ./directives/cvc-format.directive */ "./node_modules/angular-cc-library/lib/directives/cvc-format.directive.js");
var CREDIT_CARD_LIBRARY_DIRECTIVES = [
    credit_card_format_directive_1.CreditCardFormatDirective,
    expiry_format_directive_1.ExpiryFormatDirective,
    cvc_format_directive_1.CvcFormatDirective
];
var CreditCardDirectivesModule = (function () {
    function CreditCardDirectivesModule() {
    }
    CreditCardDirectivesModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [CREDIT_CARD_LIBRARY_DIRECTIVES],
                    exports: [CREDIT_CARD_LIBRARY_DIRECTIVES]
                },] },
    ];
    CreditCardDirectivesModule.ctorParameters = function () { return []; };
    return CreditCardDirectivesModule;
}());
exports.CreditCardDirectivesModule = CreditCardDirectivesModule;
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/angular-cc-library/lib/directives/credit-card-format.directive.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/angular-cc-library/lib/directives/credit-card-format.directive.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var credit_card_1 = __webpack_require__(/*! ../shared/credit-card */ "./node_modules/angular-cc-library/lib/shared/credit-card.js");
var CreditCardFormatDirective = (function () {
    function CreditCardFormatDirective(el) {
        this.el = el;
        this.target = this.el.nativeElement;
        this.cards = credit_card_1.CreditCard.cards();
    }
    CreditCardFormatDirective.prototype.onKeypress = function (e) {
        if (credit_card_1.CreditCard.restrictNumeric(e)) {
            if (credit_card_1.CreditCard.isCardNumber(e.which, this.target)) {
                this.formatCardNumber(e);
            }
        }
        else {
            e.preventDefault();
            return false;
        }
    };
    CreditCardFormatDirective.prototype.onKeydown = function (e) {
        this.formatBackCardNumber(e);
        this.reFormatCardNumber(e);
    };
    CreditCardFormatDirective.prototype.onKeyup = function (e) {
        this.setCardType(e);
    };
    CreditCardFormatDirective.prototype.onPaste = function (e) {
        this.reFormatCardNumber(e);
    };
    CreditCardFormatDirective.prototype.onChange = function (e) {
        this.reFormatCardNumber(e);
    };
    CreditCardFormatDirective.prototype.onInput = function (e) {
        this.reFormatCardNumber(e);
        this.setCardType(e);
    };
    CreditCardFormatDirective.prototype.formatCardNumber = function (e) {
        var card, digit, length, upperLength, value;
        digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) {
            return;
        }
        value = this.target.value;
        card = credit_card_1.CreditCard.cardFromNumber(value + digit);
        length = (value.replace(/\D/g, '') + digit).length;
        upperLength = 19;
        if (card) {
            upperLength = card.length[card.length.length - 1];
        }
        if (length >= upperLength) {
            return;
        }
    };
    CreditCardFormatDirective.prototype.formatBackCardNumber = function (e) {
        var value = this.target.value;
        var selStart = this.target.selectionStart;
        if (e.which !== 8) {
            return;
        }
        if (selStart != null
            && selStart === this.target.selectionEnd
            && selStart > 0
            && selStart !== value.length
            && value[selStart - 1] === ' ') {
            e.preventDefault();
            if (selStart <= 2) {
                this.target.value = value.slice(selStart);
                this.target.selectionStart = 0;
                this.target.selectionEnd = 0;
            }
            else {
                this.target.value = value.slice(0, selStart - 2) + value.slice(selStart);
                this.target.selectionStart = selStart - 2;
                this.target.selectionEnd = selStart - 2;
            }
        }
    };
    CreditCardFormatDirective.prototype.setCardType = function (e) {
        var card, val = this.target.value, cardType = credit_card_1.CreditCard.cardType(val) || 'unknown';
        if (!this.target.classList.contains(cardType)) {
            for (var i = 0, len = this.cards.length; i < len; i++) {
                card = this.cards[i];
                this.target.classList.remove(card.type);
            }
            this.target.classList.remove('unknown');
            this.target.classList.add(cardType);
            this.target.classList.toggle('identified', cardType !== 'unknown');
        }
    };
    CreditCardFormatDirective.prototype.reFormatCardNumber = function (e) {
        var _this = this;
        setTimeout(function () {
            var value = credit_card_1.CreditCard.replaceFullWidthChars(_this.target.value);
            value = credit_card_1.CreditCard.formatCardNumber(value);
            _this.target.selectionStart = _this.target.selectionEnd = credit_card_1.CreditCard.safeVal(value, _this.target);
        });
    };
    CreditCardFormatDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ccNumber]'
                },] },
    ];
    CreditCardFormatDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    CreditCardFormatDirective.propDecorators = {
        'onKeypress': [{ type: core_1.HostListener, args: ['keypress', ['$event'],] },],
        'onKeydown': [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
        'onKeyup': [{ type: core_1.HostListener, args: ['keyup', ['$event'],] },],
        'onPaste': [{ type: core_1.HostListener, args: ['paste', ['$event'],] },],
        'onChange': [{ type: core_1.HostListener, args: ['change', ['$event'],] },],
        'onInput': [{ type: core_1.HostListener, args: ['input', ['$event'],] },],
    };
    return CreditCardFormatDirective;
}());
exports.CreditCardFormatDirective = CreditCardFormatDirective;
//# sourceMappingURL=credit-card-format.directive.js.map

/***/ }),

/***/ "./node_modules/angular-cc-library/lib/directives/cvc-format.directive.js":
/*!********************************************************************************!*\
  !*** ./node_modules/angular-cc-library/lib/directives/cvc-format.directive.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var credit_card_1 = __webpack_require__(/*! ../shared/credit-card */ "./node_modules/angular-cc-library/lib/shared/credit-card.js");
var CvcFormatDirective = (function () {
    function CvcFormatDirective(el) {
        this.el = el;
        this.target = this.el.nativeElement;
    }
    CvcFormatDirective.prototype.onKeypress = function (e) {
        if (!credit_card_1.CreditCard.restrictNumeric(e) && !credit_card_1.CreditCard.restrictCvc(e.which, this.target)) {
            e.preventDefault();
        }
    };
    CvcFormatDirective.prototype.onPaste = function (e) {
        this.reformatCvc(e);
    };
    CvcFormatDirective.prototype.onChange = function (e) {
        this.reformatCvc(e);
    };
    CvcFormatDirective.prototype.onInput = function (e) {
        this.reformatCvc(e);
    };
    CvcFormatDirective.prototype.reformatCvc = function (e) {
        var _this = this;
        setTimeout(function () {
            var val = credit_card_1.CreditCard.replaceFullWidthChars(_this.target.value);
            val = val.replace(/\D/g, '').slice(0, 4);
            _this.target.selectionStart = _this.target.selectionEnd = credit_card_1.CreditCard.safeVal(val, _this.target);
        });
    };
    CvcFormatDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ccCVC]'
                },] },
    ];
    CvcFormatDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    CvcFormatDirective.propDecorators = {
        'onKeypress': [{ type: core_1.HostListener, args: ['keypress', ['$event'],] },],
        'onPaste': [{ type: core_1.HostListener, args: ['paste', ['$event'],] },],
        'onChange': [{ type: core_1.HostListener, args: ['change', ['$event'],] },],
        'onInput': [{ type: core_1.HostListener, args: ['input', ['$event'],] },],
    };
    return CvcFormatDirective;
}());
exports.CvcFormatDirective = CvcFormatDirective;
//# sourceMappingURL=cvc-format.directive.js.map

/***/ }),

/***/ "./node_modules/angular-cc-library/lib/directives/expiry-format.directive.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-cc-library/lib/directives/expiry-format.directive.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var credit_card_1 = __webpack_require__(/*! ../shared/credit-card */ "./node_modules/angular-cc-library/lib/shared/credit-card.js");
var ExpiryFormatDirective = (function () {
    function ExpiryFormatDirective(el) {
        this.el = el;
        this.target = this.el.nativeElement;
    }
    ExpiryFormatDirective.prototype.onKeypress = function (e) {
        if (credit_card_1.CreditCard.restrictNumeric(e)) {
            if (credit_card_1.CreditCard.restrictExpiry(e.which, this.target)) {
                this.formatExpiry(e);
                this.formatForwardSlashAndSpace(e);
                this.formatForwardExpiry(e);
            }
        }
        else {
            e.preventDefault();
            return false;
        }
    };
    ExpiryFormatDirective.prototype.onKeydown = function (e) {
        if (credit_card_1.CreditCard.restrictNumeric(e) && credit_card_1.CreditCard.restrictExpiry(e.which, this.target)) {
            this.formatBackExpiry(e);
        }
    };
    ExpiryFormatDirective.prototype.onChange = function (e) {
        this.reformatExpiry(e);
    };
    ExpiryFormatDirective.prototype.onInput = function (e) {
        this.reformatExpiry(e);
    };
    ExpiryFormatDirective.prototype.formatExpiry = function (e) {
        var _this = this;
        var digit = String.fromCharCode(e.which), val = "" + this.target.value + digit;
        if (!/^\d+$/.test(digit)) {
            if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
                e.preventDefault();
                setTimeout(function () {
                    _this.target.value = "0" + val + " / ";
                });
            }
            else if (/^\d\d$/.test(val)) {
                e.preventDefault();
                setTimeout(function () {
                    var m1 = parseInt(val[0], 10), m2 = parseInt(val[1], 10);
                    if (m2 > 2 && m1 !== 0) {
                        _this.target.value = "0" + m1 + " / " + m2;
                    }
                    else {
                        _this.target.value = val + " / ";
                    }
                });
            }
        }
    };
    ExpiryFormatDirective.prototype.formatForwardSlashAndSpace = function (e) {
        var which = String.fromCharCode(e.which), val = this.target.value;
        if (!(which === '/' || which === ' ')) {
            return false;
        }
        if (/^\d$/.test(val) && val !== '0') {
            this.target.value = "0" + val + " / ";
        }
    };
    ExpiryFormatDirective.prototype.formatForwardExpiry = function (e) {
        var digit = String.fromCharCode(e.which), val = this.target.value;
        if (!/^\d+$/.test(digit) && /^\d\d$/.test(val)) {
            this.target.value = val + " / ";
        }
    };
    ExpiryFormatDirective.prototype.formatBackExpiry = function (e) {
        var val = this.target.valueOf;
        if (e.which !== 8) {
            return;
        }
        if ((this.target.selectionStart != null) && this.target.selectionStart !== val.length) {
            return;
        }
        if (/\d\s\/\s$/.test(val)) {
            e.preventDefault();
            setTimeout(function () {
                this.target.value = val.replace(/\d\s\/\s$/, '');
            });
        }
    };
    ExpiryFormatDirective.prototype.reformatExpiry = function (e) {
        var _this = this;
        setTimeout(function () {
            var val = _this.target.value;
            val = credit_card_1.CreditCard.replaceFullWidthChars(val);
            val = credit_card_1.CreditCard.formatExpiry(val);
            _this.target.selectionStart = _this.target.selectionEnd = credit_card_1.CreditCard.safeVal(val, _this.target);
        });
    };
    ExpiryFormatDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ccExp]'
                },] },
    ];
    ExpiryFormatDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    ExpiryFormatDirective.propDecorators = {
        'onKeypress': [{ type: core_1.HostListener, args: ['keypress', ['$event'],] },],
        'onKeydown': [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
        'onChange': [{ type: core_1.HostListener, args: ['change', ['$event'],] },],
        'onInput': [{ type: core_1.HostListener, args: ['input', ['$event'],] },],
    };
    return ExpiryFormatDirective;
}());
exports.ExpiryFormatDirective = ExpiryFormatDirective;
//# sourceMappingURL=expiry-format.directive.js.map

/***/ }),

/***/ "./node_modules/angular-cc-library/lib/shared/credit-card.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-cc-library/lib/shared/credit-card.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaultFormat = /(\d{1,4})/g;
var cards = [
    {
        type: 'maestro',
        patterns: [5018, 502, 503, 506, 56, 58, 639, 6220, 67],
        format: defaultFormat,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvvLength: [3],
        luhn: true
    }, {
        type: 'forbrugsforeningen',
        patterns: [600],
        format: defaultFormat,
        length: [16],
        cvvLength: [3],
        luhn: true
    }, {
        type: 'dankort',
        patterns: [5019],
        format: defaultFormat,
        length: [16],
        cvvLength: [3],
        luhn: true
    }, {
        type: 'visa',
        patterns: [4],
        format: defaultFormat,
        length: [13, 16, 19],
        cvvLength: [3],
        luhn: true
    }, {
        type: 'mastercard',
        patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
        format: defaultFormat,
        length: [16],
        cvvLength: [3],
        luhn: true
    }, {
        type: 'amex',
        patterns: [34, 37],
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvvLength: [3, 4],
        luhn: true
    }, {
        type: 'dinersclub',
        patterns: [30, 36, 38, 39],
        format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
        length: [14],
        cvvLength: [3],
        luhn: true
    }, {
        type: 'discover',
        patterns: [60, 64, 65, 622],
        format: defaultFormat,
        length: [16],
        cvvLength: [3],
        luhn: true
    }, {
        type: 'unionpay',
        patterns: [62, 88],
        format: defaultFormat,
        length: [16, 17, 18, 19],
        cvvLength: [3],
        luhn: false
    }, {
        type: 'jcb',
        patterns: [35],
        format: defaultFormat,
        length: [16, 19],
        cvvLength: [3],
        luhn: true
    }
];
var CreditCard = (function () {
    function CreditCard() {
    }
    CreditCard.cards = function () {
        return cards;
    };
    CreditCard.cardFromNumber = function (num) {
        var card, p, pattern, ref;
        num = (num + '').replace(/\D/g, '');
        for (var i = 0, len = cards.length; i < len; i++) {
            card = cards[i];
            ref = card.patterns;
            for (var j = 0, len1 = ref.length; j < len1; j++) {
                pattern = ref[j];
                p = pattern + '';
                if (num.substr(0, p.length) === p) {
                    return card;
                }
            }
        }
    };
    CreditCard.restrictNumeric = function (e) {
        var input;
        if (e.metaKey || e.ctrlKey) {
            return true;
        }
        if (e.which === 32) {
            return false;
        }
        if (e.which === 0) {
            return true;
        }
        if (e.which < 33) {
            return true;
        }
        input = String.fromCharCode(e.which);
        return !!/[\d\s]/.test(input);
    };
    CreditCard.hasTextSelected = function (target) {
        return target.selectionStart !== null && target.selectionStart !== target.selectionEnd;
    };
    CreditCard.cardType = function (num) {
        if (!num) {
            return num;
        }
        var card = this.cardFromNumber(num);
        if (card !== null && typeof card !== 'undefined') {
            return card.type;
        }
        else {
            return null;
        }
    };
    CreditCard.formatCardNumber = function (num) {
        var card, groups, upperLength;
        num = num.replace(/\D/g, '');
        card = this.cardFromNumber(num);
        if (!card) {
            return num;
        }
        upperLength = card.length[card.length.length - 1];
        num = num.slice(0, upperLength);
        if (card.format.global) {
            var matches = num.match(card.format);
            if (matches != null) {
                return matches.join(' ');
            }
        }
        else {
            groups = card.format.exec(num);
            if (groups == null) {
                return;
            }
            groups.shift();
            return groups.filter(Boolean).join(' ');
        }
    };
    CreditCard.safeVal = function (value, target) {
        var cursor = null, last = target.value, result = null;
        try {
            cursor = target.selectionStart;
        }
        catch (error) { }
        target.value = value;
        if (cursor !== null && target === document.activeElement) {
            if (cursor === last.length) {
                cursor = value.length;
            }
            if (last !== value) {
                var prevPair = last.slice(cursor - 1, +cursor + 1 || 9e9), currPair = value.slice(cursor - 1, +cursor + 1 || 9e9), digit = value[cursor];
                if (/\d/.test(digit) && prevPair === (digit + " ") && currPair === (" " + digit)) {
                    cursor = cursor + 1;
                }
            }
            result = cursor;
        }
        return result;
    };
    CreditCard.isCardNumber = function (key, target) {
        var card, digit, value, result;
        digit = String.fromCharCode(key);
        if (!/^\d+$/.test(digit)) {
            return false;
        }
        if (CreditCard.hasTextSelected(target)) {
            return true;
        }
        value = (target.value + digit).replace(/\D/g, '');
        card = CreditCard.cardFromNumber(value);
        if (card) {
            result = value.length <= card.length[card.length.length - 1];
        }
        else {
            result = value.length <= 16;
        }
        return result;
    };
    CreditCard.restrictExpiry = function (key, target) {
        var digit, value;
        digit = String.fromCharCode(key);
        if (!/^\d+$/.test(digit) || this.hasTextSelected(target)) {
            return false;
        }
        value = ("" + target.value + digit).replace(/\D/g, '');
        return value.length > 6;
    };
    CreditCard.replaceFullWidthChars = function (str) {
        if (str === null) {
            str = '';
        }
        var chr, idx, fullWidth = '\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19', halfWidth = '0123456789', value = '', chars = str.split('');
        for (var i = 0; i < chars.length; i++) {
            chr = chars[i];
            idx = fullWidth.indexOf(chr);
            if (idx > -1) {
                chr = halfWidth[idx];
            }
            value += chr;
        }
        return value;
    };
    CreditCard.formatExpiry = function (expiry) {
        var parts = expiry.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/), mon, sep, year;
        if (!parts) {
            return '';
        }
        mon = parts[1] || '';
        sep = parts[2] || '';
        year = parts[3] || '';
        if (year.length > 0) {
            sep = ' / ';
        }
        else if (sep === ' /') {
            mon = mon.substring(0, 1);
            sep = '';
        }
        else if (mon.length === 2 || sep.length > 0) {
            sep = ' / ';
        }
        else if (mon.length === 1 && (mon !== '0' && mon !== '1')) {
            mon = "0" + mon;
            sep = ' / ';
        }
        return "" + mon + sep + year;
    };
    CreditCard.restrictCvc = function (key, target) {
        var digit = String.fromCharCode(key);
        if (!/^\d+$/.test(digit) || this.hasTextSelected(target)) {
            return false;
        }
        var val = "" + target.value + digit;
        return val.length <= 4;
    };
    CreditCard.luhnCheck = function (num) {
        var digit, digits = num.split('').reverse(), odd = true, sum = 0;
        for (var i = 0; i < digits.length; i++) {
            digit = digits[i];
            digit = parseInt(digit, 10);
            if ((odd = !odd)) {
                digit *= 2;
            }
            if (digit > 9) {
                digit -= 9;
            }
            sum += digit;
        }
        return sum % 10 === 0;
    };
    return CreditCard;
}());
exports.CreditCard = CreditCard;
//# sourceMappingURL=credit-card.js.map

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ "./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"clearFixed\"></div>\n  <div class=\"chooseYourPlanSec\">\n      <div class=\"clearFixed\"></div>\n      <div class=\"formSection\">\n        <div class=\"contentWrapper\">\n            <div class=\"formHeading\">Choose Your Plan</div>\n         <form class=\"formWrapper\">\n            <a routerLink=\"/home\"><img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay = \"1.2s\"\n            data-wow-duration = \"1.3s\" style=\"visibility: visible; animation-duration: 2s; \n            animation-name: Ownpulse;\" /></a>\n            <div class=\"clearFixed\"></div>\n            <div class=\"breadcrumbSec\">\n                <div class=\"breadcrumbActive\"> </div>\n                <div class=\"breadIconLine\"></div>\n                \n                <div class=\"starIconDiv\"> </div>\n              </div>\n              <div class=\"clearFixed\">&nbsp;</div>\n          <div class=\"inputHalfLeft chooseMain\">\n           <div class=\"choosePlanSubHeading\">Advance</div>\n           <div class=\"choosePlanDetails advance\">\n            <ul>\n              <li>Feature 1</li>  \n              <li>Feature 2</li>\n              <li>Feature 3</li>\n            </ul>\n            <a mat-flat-button routerLink=\"javascript:void(0)\" class=\"choosePlanMatButton\"> Book Now</a>\n          </div>\n        </div>\n        <div class=\"inputHalfRight chooseMain\">\n          <div class=\"choosePlanSubHeading\">Premium</div>\n          <div class=\"choosePlanDetails\">\n            <ul>\n              <li>Feature 1</li>\n              <li>Feature 2</li>\n              <li>Feature 3</li>\n            </ul>\n            <a mat-flat-button routerLink=\"javascript:void(0)\" class=\"choosePlanMatButton\"> Book Now</a>\n          </div>\n        </div>\n        <div class=\"clearFixed\">&nbsp;</div>\n        <a mat-flat-button routerLink=\"javascript:void(0)\" class=\"choosePlanMatButton choosePlanMatBigButton\"> Start free trial </a>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"clearFixed\"></div>\n<app-innerfooter></app-innerfooter>"

/***/ }),

/***/ "./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChooseYourPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseYourPlanComponent", function() { return ChooseYourPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChooseYourPlanComponent = /** @class */ (function () {
    function ChooseYourPlanComponent() {
    }
    ChooseYourPlanComponent.prototype.ngOnInit = function () {
    };
    ChooseYourPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-your-plan',
            template: __webpack_require__(/*! ./choose-your-plan.component.html */ "./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.html"),
            styles: [__webpack_require__(/*! ./choose-your-plan.component.css */ "./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChooseYourPlanComponent);
    return ChooseYourPlanComponent;
}());



/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearFixed\"></div>\n<div class=\"administratorSection\">\n  <div class=\"clearFixed\"></div>\n  <div class=\"formSection\">\n    <div class=\"contentWrapper\">\n      <div class=\"formHeading\">Registration</div>\n      <form [formGroup]=\"userForm\"  (ngSubmit)=\"onSubmit()\" class=\"formWrapper regWrpp\">\n        <a routerLink=\"/home\">\n          <img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay=\"1.2s\" data-wow-duration=\"1.3s\" style=\"visibility: visible; animation-duration: 2s; animation-name: Ownpulse;\" />\n        </a>\n        <div class=\"clearFixed\"></div>\n        <div class=\"tabSection\">\n          <span class=\"companyTabCommon companyTab\">\n            <a routerLink=\"/companyRegisteration1\">\n              <span>Company\n                <span class=\"activeLine\"></span>\n              </span>\n            </a>\n          </span>\n          <span class=\"companyTabCommon adminTab companyTabactive\">\n            <span>Administrator\n              <span class=\"activeLine\"></span>\n            </span>\n          </span>\n          <!-- <a routerLink=\"/creditCardDetailCompany\" class=\"companyTabCommon rightBorderNone creditCardTab\">\n            <span>Credit Card</span>\n          </a> -->\n        </div>\n        <div class=\"clearFixed\"></div>\n        <div class=\"formMainDiv\">\n          <div class=\"breadcrumbSec\">\n            <div class=\"breadcrumbActive\"> </div>\n            <div class=\"breadIconLine\"></div>\n            <div class=\"starIconDiv\"> </div>\n          </div>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput appPhoneMask formControlName=\"officeNumber\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Office Number\" />\n            <div *ngIf=\"(submitted && userForm.controls['officeNumber'].errors) || userForm.controls['officeNumber'].touched || userForm.controls['officeNumber'].dirty\"\n              class=\"errorMsg\">\n              <div *ngIf=\"userForm.controls['officeNumber'].errors != null && userForm.controls['officeNumber'].errors.pattern\">\n                Office Number allows only numbers.\n              </div>\n            </div>\n          </mat-form-field>\n         \n          <mat-form-field class=\"example-full-width\">\n            <input matInput appPhoneMask formControlName=\"cellNumber\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['cellNumber'].errors }\"\n              type=\"text\" class=\"textAreaCommon\" placeholder=\"Cell Number with Country Code\" required />\n\n            <div *ngIf=\"(submitted && userForm.controls['cellNumber'].errors) || userForm.controls['cellNumber'].touched || userForm.controls['cellNumber'].dirty\"\n              class=\"errorMsg\">\n              <div *ngIf=\"userForm.controls['cellNumber'].errors != null && userForm.controls['cellNumber'].errors.required == true\">\n                Cell Number is required.\n              </div>\n              <div *ngIf=\"userForm.controls['cellNumber'].errors != null && userForm.controls['cellNumber'].errors.pattern\">\n                Cell Number allows only numbers.\n              </div>\n            </div>\n          </mat-form-field>\n          <!-- <mat-form-field class=\"example-full-width matSelectClass\">\n            <mat-select formControlName=\"desig\" placeholder=\"Select Designation\">\n              <mat-option value=\"Designation1\">Designation1</mat-option>\n              <mat-option value=\"Designation2\">Designation2</mat-option>\n            </mat-select>\n          </mat-form-field> -->\n          <div class=\"clearFixed\"></div>\n          <div class=\"clearFixed\">&nbsp;</div>\n          <div class=\"matListMain iAMAddFormBtnDv companyRegis\">\n            <button mat-flat-button class=\"cancelUpdateButton inactiveBtn\" routerLink=\"/\">Cancel</button>\n            <button mat-flat-button class=\"cancelUpdateButton inactiveBtn\" routerLink=\"/companyRegisteration2\">Back</button>\n            <button mat-flat-button class=\"cancelUpdateButton activeBtn\">Next</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"clearFixed\"></div>\n    <app-innerfooter></app-innerfooter>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AdminRegister1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegister1Component", function() { return AdminRegister1Component; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Observable } from 'rxjs';





var AdminRegister1Component = /** @class */ (function () {
    function AdminRegister1Component(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.submitted = false;
        this.mobilePattern = "^[+0-9]+$";
        this.createForm();
        // this.form=fb.group({
        //   phone:['']
        // })
    }
    AdminRegister1Component.prototype.ngOnInit = function () {
    };
    AdminRegister1Component.prototype.createForm = function () {
        this.userForm = this.fb.group({
            officeNumber: [''],
            cellNumber: ['']
            // desig: ['']
        });
    };
    AdminRegister1Component.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        this.router.navigate(["adminRegisteration2"]);
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].verifyMobile, {
            "cellNumber": _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].extension + this.userForm.value.cellNumber.replace(/\D/g, '').substring(0, 10)
        })
            .subscribe(function (res) {
            console.log(res);
            _this.admin = {
                "officeNumber": _this.userForm.value.officeNumber,
                "cellNumber": _this.userForm.value.cellNumber
            };
            if (res.status == 1) {
                localStorage.setItem("admin", JSON.stringify(_this.admin));
                localStorage.setItem("userPhonePin", res.mssg);
                _this.router.navigate(["adminRegisteration2"]);
            }
            else {
                alert("Error: " + res.mssg);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    AdminRegister1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-register1',
            template: __webpack_require__(/*! ./admin-register1.component.html */ "./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.html"),
            styles: [__webpack_require__(/*! ./admin-register1.component.css */ "./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AdminRegister1Component);
    return AdminRegister1Component;
}());



/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/admin-register/admin-register1/phone-number-format.directive.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/admin-register/admin-register1/phone-number-format.directive.ts ***!
  \********************************************************************************************************************/
/*! exports provided: PhoneNumberFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberFormatDirective", function() { return PhoneNumberFormatDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// import { Directive } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Directive({
//   selector: '[appPhoneNumberFormat]'
// })
// export class PhoneNumberFormatDirective {
//   constructor() { }
// }


var PhoneNumberFormatDirective = /** @class */ (function () {
    function PhoneNumberFormatDirective(ngControl) {
        this.ngControl = ngControl;
    }
    PhoneNumberFormatDirective.prototype.onModelChange = function (event) {
        this.onInputChange(event, false);
    };
    PhoneNumberFormatDirective.prototype.keydownBackspace = function (event) {
        this.onInputChange(event.target.value, true);
    };
    PhoneNumberFormatDirective.prototype.onInputChange = function (event, backspace) {
        var newVal = event.replace(/\D/g, '');
        if (backspace && newVal.length <= 3) {
            newVal = newVal.substring(0, newVal.length - 1);
        }
        if (newVal.length === 0) {
            newVal = '';
        }
        else if (newVal.length <= 3) {
            newVal = newVal.replace(/^(\d{0,3})/, '($1)');
        }
        else if (newVal.length <= 6) {
            newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
        }
        else if (newVal.length <= 10) {
            newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
        }
        else {
            newVal = newVal.substring(0, 10);
            newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
        }
        this.ngControl.valueAccessor.writeValue(newVal);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('ngModelChange', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PhoneNumberFormatDirective.prototype, "onModelChange", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown.backspace', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PhoneNumberFormatDirective.prototype, "keydownBackspace", null);
    PhoneNumberFormatDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[formControlName][appPhoneMask]',
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]])
    ], PhoneNumberFormatDirective);
    return PhoneNumberFormatDirective;
}());



/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"clearFixed\"></div>\n  <div class=\"administratorSection\">\n    <div class=\"clearFixed\"></div>\n    <div class=\"formSection\">\n      <div class=\"contentWrapper\">\n          <div class=\"formHeading\">Registration</div>\n          <form [formGroup]=\"userForm\" (ngSubmit)=\"verifyOtp()\" class=\"formWrapper regWrpp\">\n          <a routerLink=\"/home\"><img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay = \"1.2s\" data-wow-duration = \"1.3s\" style=\"visibility: visible; animation-duration: 2s; animation-name: Ownpulse;\" />\n          </a>\n          <div class=\"clearFixed\"></div>\n          <div class=\"tabSection\">\n            <span class=\"companyTabCommon companyTab\">\n              <a routerLink=\"/companyRegisteration1\">\n                <span>Company<span class=\"activeLine\"></span></span>\n              </a>\n            </span>\n            <span class=\"companyTabCommon adminTab companyTabactive\">\n              <span>Administrator<span class=\"activeLine\"></span></span>\n            </span>\n            <!-- <a routerLink=\"/creditCardDetailCompany\" class=\"companyTabCommon rightBorderNone creditCardTab\">\n              <span>Credit Card</span>\n            </a> -->\n          </div>\n          <div class=\"clearFixed\"></div>\n          <div class=\"formMainDiv\">\n            <div class=\"breadcrumbSec\">\n              <div class=\"starIconDiv\"></div>\n              <div class=\"breadIconLine\"></div>\n              <div class=\"breadcrumbActive\"> </div>\n            </div>\n            <mat-form-field *ngIf=\"(!submitted || (userForm.value.otpPin !== userPhonePin))\" class=\"example-full-width\">\n              <input matInput formControlName=\"otpPin\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['otpPin'].errors }\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Phone Number Verification through OTP\" />\n              <div *ngIf=\"(submitted && userForm.controls['otpPin'].errors) || userForm.controls['otpPin'].touched || userForm.controls['otpPin'].dirty\">\n                <div class=\"errorMsg\" *ngIf=\"userForm.controls['otpPin'].errors != null && userForm.controls['otpPin'].errors.required == true\">\n                  OTP Pin is required.\n                </div>\n              </div>\n            </mat-form-field>\n            <div class=\"clearFixed\"></div>\n            <div class=\"clearFixed\"></div>\n            <div class=\"clearFixed\">&nbsp;</div>\n            <div class=\"matListMain iAMAddFormBtnDv companyRegis\">\n              <button mat-flat-button class=\"cancelUpdateButton inactiveBtn\" routerLink=\"/\">Cancel</button>\n              <button mat-flat-button class=\"cancelUpdateButton inactiveBtn\" routerLink=\"/adminRegisteration1\" \n              *ngIf=\"(!submitted || (userForm.value.otpPin !== userPhonePin))\">Back</button>\n              <button mat-flat-button class=\"cancelUpdateButton activeBtn\" *ngIf=\"(!submitted || (userForm.value.otpPin !== userPhonePin))\">Verify</button>\n              <button mat-flat-button class=\"cancelUpdateButton activeBtn\" (click)=\"registerCompany()\" *ngIf=\"(submitted && (userForm.value.otpPin === userPhonePin))\">Submit</button>\n            </div>\n\n            \n          </div>  \n      </form>\n    </div>\n    <div class=\"clearFixed\"></div>\n    <app-innerfooter></app-innerfooter>\n  </div>\n</div>\n\n<div class=\"welcomePopSection\">\n  <div [hidden]=\"isDisplay\" id=\"popup1\" class=\"overlay successOverLay\">\n    <div class=\"popup wow Ownpulse SuccesPopup\" data-wow-delay=\"2s\" data-wow-duration=\"2s\" style=\"animation-duration: 2s; animation-name: Ownpulse;\">\n      <a id=\"closebtn\" class=\"material-icons msgClose\" (click)=\"succesPopupClose()\"  >close</a>\n      <div class=\"content\">        \n        <p class=\"popupSuccessMsg\">You have successfully sadsa registered your Company</p>\n        <p class=\"freeTrialMsg\">Your Free trial period has started</p>\n        <i class=\"material-icons successTick\">done</i>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AdminRegister2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegister2Component", function() { return AdminRegister2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






//import { Observable } from 'rxjs';
var AdminRegister2Component = /** @class */ (function () {
    function AdminRegister2Component(fb, router, http, document, renderer) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.document = document;
        this.renderer = renderer;
        this.isDisplay = true;
        this.submitted = null;
        this.createForm();
    }
    AdminRegister2Component.prototype.ngOnInit = function () {
    };
    AdminRegister2Component.prototype.createForm = function () {
        this.userForm = this.fb.group({
            otpPin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AdminRegister2Component.prototype.verifyOtp = function () {
        this.submitted = true;
        this.userEnteredPin = this.userForm.value.otpPin;
        this.userPhonePin = localStorage.getItem("userPhonePin");
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        if (this.userEnteredPin === this.userPhonePin) {
        }
        else {
            alert("OTP is not matched ... Please Try Again!!");
        }
    };
    AdminRegister2Component.prototype.registerCompany = function () {
        var _this = this;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].registerCompany, {
            "company": JSON.parse(localStorage.getItem("company")),
            "admin": JSON.parse(localStorage.getItem("admin")),
            "userId": sessionStorage.getItem("userId")
        })
            .subscribe(function (res) {
            if (res.status == 1) {
                _this.isDisplay = false;
                //this.router.navigate(["welcome"]);
                _this.renderer.addClass(_this.document.body, 'embedded-body');
            }
            else {
                alert("Error: " + res.mssg);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    AdminRegister2Component.prototype.succesPopupClose = function () {
        this.isDisplay = true;
        this.renderer.removeClass(this.document.body, 'embedded-body');
        this.router.navigate(["dashboard"]);
    };
    AdminRegister2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-register2',
            template: __webpack_require__(/*! ./admin-register2.component.html */ "./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.html"),
            styles: [__webpack_require__(/*! ./admin-register2.component.css */ "./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], Document, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AdminRegister2Component);
    return AdminRegister2Component;
}());



/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"clearFixed\">\n</div>\n  <div class=\"companyRegistSection\">\n    <div class=\"clearFixed\"></div>\n    <div class=\"formSection\"> \n      <div class=\"contentWrapper\">\n          <div class=\"formHeading\">Registration</div>\n          <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit($event)\" class=\"formWrapper regWrpp\">\n            <a routerLink=\"/home\"><img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay = \"1.2s\" data-wow-duration = \"1.3s\" style=\"visibility: visible; animation-duration: 2s; animation-name: Ownpulse;\" />\n            </a>\n            <div class=\"clearFixed\"></div>\n            <div class=\"tabSection\">\n              <span class=\"companyTabCommon companyTab companyTabactive\">\n                <span>Company<span class=\"activeLine\"></span> </span>\n              </span>\n              <a routerLink=\"/adminRegisteration1\" class=\"companyTabCommon adminTab\"><span>Administrator</span>\n              </a>\n              <!-- <a routerLink=\"/creditCardDetailCompany\" class=\"companyTabCommon rightBorderNone creditCardTab\"><span>Credit Card</span>\n              </a> -->\n            </div>\n            <div class=\"clearFixed\"></div>\n            <div class=\"formMainDiv \">\n              <div class=\"clearFixed\"></div>\n              <div class=\"breadcrumbSec\">\n                <div class=\"breadcrumbActive\"> </div>\n                <div class=\"breadIconLine\"></div>\n                <div class=\"starIconDiv\"> </div>\n              </div>\n              <div class=\"clearFixed\"></div>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput formControlName=\"cname\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['cname'].errors }\" type=\"text\" class=\"textAreaCommon redstar\" placeholder=\"Company Name\" required />\n                <div *ngIf=\"(submitted && userForm.controls['cname'].errors) || userForm.controls['cname'].touched || userForm.controls['cname'].dirty\" class=\"errorMsg\">\n                  <div *ngIf=\"userForm.controls['cname'].errors != null && userForm.controls['cname'].errors.required == true\">\n                    Company Name is required.\n                  </div>\n                  <!-- <div *ngIf=\"userForm.controls['cname'].errors != null && userForm.controls['cname'].errors.pattern\">\n                    Company Name allows only alphanumerics and spaces.\n                  </div> -->\n                  <div *ngIf=\"companyExists != null\">\n                    {{companyExists}}\n                  </div>\n                </div>\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput formControlName=\"website\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['website'].errors }\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Company Website (http://www.example.com)\" required />\n                <div *ngIf=\"(submitted && userForm.controls ['website'].errors) || userForm.controls['website'].touched || userForm.controls['website'].dirty\" class=\"errorMsg\"><div *ngIf=\"userForm.controls['website'].errors != null && userForm.controls['website'].errors.required == true\">\n                  Company Website is required.\n                </div>\n                <div *ngIf=\"websiteExists != null\">\n                  {{websiteExists}}\n                </div>\n              </div>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width multiplelineTextarea\">\n              <textarea matInput formControlName=\"cdetail\" class=\"textAreaCommon textArea\" placeholder=\"Company Details\"></textarea>\n            </mat-form-field>\n            <mat-form-field class=\"fileInputMatFormField\">\n              <ngx-mat-file-input formControlName=\"clogo\" type=\"file\" class=\"\" placeholder=\"Company Logo\" data-filetype=\"txt\"></ngx-mat-file-input>\n              <mat-icon matSuffix class=\"browseIcon\">folder</mat-icon>\n            </mat-form-field>\n            <div class=\"clearFixed\"></div>\n            <div class=\"matListMain iAMAddFormBtnDv companyRegis\">\n              <button mat-flat-button class=\"cancelUpdateButton inactiveBtn\" routerLink=\"/\">Cancel</button>\n              \n                  <button mat-flat-button class=\"cancelUpdateButton activeBtn\">Next</button>\n                \n              </div>\n              \n             \n           \n          </div>\n\n          \n        </form>\n      </div>\n      <div class=\"clearFixed\"></div>\n      <app-innerfooter></app-innerfooter>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CompanyRegister1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRegister1Component", function() { return CompanyRegister1Component; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Observable } from 'rxjs';






var CompanyRegister1Component = /** @class */ (function () {
    //websitePattern = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";
    function CompanyRegister1Component(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.submitted = null;
        this.companyExists = null;
        this.websiteExists = null;
        this.companyPattern = "^[a-zA-Z0-9][a-zA-Z0-9 ]+$"; // allow only alphanumerics and spaces.
        this.createForm();
    }
    CompanyRegister1Component.prototype.ngOnInit = function () {
    };
    CompanyRegister1Component.prototype.createForm = function () {
        this.userForm = this.fb.group({
            //cname: ['', [Validators.required, Validators.pattern(this.companyPattern)]],
            cname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            website: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cdetail: [''],
            clogo: ['']
        });
    };
    CompanyRegister1Component.prototype.onSubmit = function (event) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        this.submitted = true;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(event.target[3].files[0])) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target[3].files[0]);
            reader.onload = function () {
                _this.imageBinary = reader.result;
                _this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].imageUpload, {
                    "binaryImage": _this.imageBinary,
                    "email": localStorage.getItem("userEmail")
                })
                    .subscribe(function (res) {
                    /*if(res.status == 1){
                      console.log("Image saved successfully !");
                      this.router.navigate(["companyRegisteration2"]);
                    }
                    else{
                      console.log("Error in Image saving !");
                    }*/
                }, function (err) {
                    console.log("Error in Image saving !");
                });
            };
        }
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].checkCompanyValidity, {
            "cname": this.userForm.value.cname,
            "website": this.userForm.value.website
        })
            .subscribe(function (res) {
            if (res.status == 0) {
                if (res.companyStatus == 0) {
                    _this.companyExists = "This Company is already registered.";
                }
                else {
                    _this.companyExists = "";
                }
                if (res.urlstatus == 0) {
                    _this.websiteExists = "This website does not exist.";
                }
                else if (res.urlstatus == -1) {
                    _this.websiteExists = "This website must be valid. Please include http or https";
                }
                else {
                    _this.websiteExists = "";
                }
            }
            else if (res.status == 1) {
                _this.company = {
                    "cname": _this.userForm.value.cname,
                    "cdetail": _this.userForm.value.cdetail,
                    "website": _this.userForm.value.website,
                    "clogo": localStorage.getItem("userEmail").split("@")[0]
                };
                localStorage.setItem("company", JSON.stringify(_this.company));
                _this.router.navigate(["companyRegisteration2"]);
            }
            else {
                alert("Error: " + res.mssg);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    CompanyRegister1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-register1',
            template: __webpack_require__(/*! ./company-register1.component.html */ "./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.html"),
            styles: [__webpack_require__(/*! ./company-register1.component.css */ "./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CompanyRegister1Component);
    return CompanyRegister1Component;
}());



/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"clearFixed\">\n</div>\n<div class=\"companyAddressSection\">\n  <div class=\"clearFixed\"></div>\n  <div class=\"formSection\">\n    <div class=\"contentWrapper\">\n      <div class=\"formHeading\">Address</div>\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" class=\"formWrapper regWrpp\">\n        <a routerLink=\"/home\"><img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay = \"1.2s\" data-wow-duration = \"1.3s\" style=\"visibility: visible; animation-duration: 2s; animation-name: Ownpulse;\" />\n        </a>\n        <div class=\"clearFixed\"></div>\n        <div class=\"tabSection\">\n          <span class=\"companyTabCommon companyTab companyTabactive\">\n            <span>Company<span class=\"activeLine\"></span> </span>\n          </span>\n          <a routerLink=\"/adminRegisteration1\" class=\"companyTabCommon adminTab\"><span>Administrator</span>\n          </a>\n          <!-- <a routerLink=\"/creditCardDetailCompany\" class=\"companyTabCommon rightBorderNone creditCardTab\"><span>Credit Card</span>\n          </a> -->\n        </div>\n        <div class=\"clearFixed\"></div>\n        <div class=\"formMainDiv\">\n          <div class=\"breadcrumbSec\">\n          <div class=\"starIconDiv\"> </div>\n          <div class=\"breadIconLine\"></div>\n          <div class=\"breadcrumbActive\"></div>\n        </div>\n        <div class=\"clearFixed\"></div>\n        <mat-form-field class=\"inputHalfLeft\">\n          <input matInput formControlName=\"addr1\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Address 1\" />\n        </mat-form-field>\n        <mat-form-field class=\"inputHalfRight\">\n          <input matInput formControlName=\"state\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Province / State\" />\n        </mat-form-field>    \n        <mat-form-field class=\"inputHalfLeft\">\n          <input matInput formControlName=\"addr2\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Address 2\" />\n        </mat-form-field>        \n        <mat-form-field class=\"inputHalfRight\">\n          <input matInput formControlName=\"boxNumber\" type=\"number\" class=\"textAreaCommon\" placeholder=\"Po Box Number\" />\n        </mat-form-field>\n        <mat-form-field class=\"inputHalfLeft\">\n          <input matInput formControlName=\"addr3\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Address 3\" />\n        </mat-form-field>        \n        <mat-form-field class=\"inputHalfRight\">\n          <input matInput formControlName=\"zipCode\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['zipCode'].errors }\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Postal / Zip Code\" required />\n          <div *ngIf=\"(submitted && userForm.controls['zipCode'].errors) || userForm.controls['zipCode'].touched || userForm.controls['zipCode'].dirty\" class=\"errorMsg\">\n            <div *ngIf=\"userForm.controls['zipCode'].errors != null && userForm.controls['zipCode'].errors.required == true\">\n              Zip Code is required.\n            </div>\n            <div *ngIf=\"userForm.controls['zipCode'].errors != null && userForm.controls['zipCode'].errors.pattern\">\n                 Number and uppercase allowed.\n            </div>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"inputHalfLeft floatLeft\">\n          <input matInput formControlName=\"city\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['city'].errors }\" type=\"text\" class=\"textAreaCommon\" placeholder=\"City\" />\n        </mat-form-field>     \n        <mat-form-field class=\"inputHalfRight\">\n          <input matInput formControlName=\"country\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['country'].errors }\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Country\" />\n        </mat-form-field>\n        <div class=\"clearFixed\"></div>\n        <div class=\"matListMain iAMAddFormBtnDv companyRegis\">\n          <button mat-flat-button class=\"cancelUpdateButton inactiveBtn\" routerLink=\"/\">Cancel</button>\n          <button mat-flat-button class=\"cancelUpdateButton inactiveBtn\" routerLink=\"/companyRegisteration1\">Back</button>\n          <button mat-flat-button class=\"cancelUpdateButton activeBtn\" >Next</button>\n        \n        </div>\n       \n\n      </div>\n    </form>\n  </div>\n  <div class=\"clearFixed\"></div>\n  <app-innerfooter></app-innerfooter>\n</div>\n</div> "

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CompanyRegister2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRegister2Component", function() { return CompanyRegister2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs';

var CompanyRegister2Component = /** @class */ (function () {
    function CompanyRegister2Component(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.submitted = null;
        //zipCodePattern = "^[0-9][0-9 ]+$";
        this.zipCodePattern = "^[A-Z0-9]+$";
        this.createForm();
    }
    CompanyRegister2Component.prototype.ngOnInit = function () {
    };
    CompanyRegister2Component.prototype.createForm = function () {
        this.userForm = this.fb.group({
            addr1: [''],
            addr2: [''],
            addr3: [''],
            city: [''],
            state: [''],
            boxNumber: [''],
            zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.zipCodePattern)]],
            country: ['']
        });
    };
    CompanyRegister2Component.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        //this.router.navigate(["adminRegisteration1"]);
        this.company = JSON.parse(localStorage.getItem("company"));
        this.company.address = {
            "addr1": this.userForm.value.addr1,
            "addr2": this.userForm.value.addr2,
            "addr3": this.userForm.value.addr3,
            "city": this.userForm.value.city,
            "country": this.userForm.value.country,
            "zipCode": this.userForm.value.zipCode,
            "boxNumber": this.userForm.value.boxNumber,
            "state": this.userForm.value.state
        };
        console.log(JSON.stringify(this.company));
        localStorage.setItem("company", JSON.stringify(this.company));
        this.router.navigate(["adminRegisteration1"]);
    };
    CompanyRegister2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-register2',
            template: __webpack_require__(/*! ./company-register2.component.html */ "./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.html"),
            styles: [__webpack_require__(/*! ./company-register2.component.css */ "./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CompanyRegister2Component);
    return CompanyRegister2Component;
}());



/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.css":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearFixed\">\n</div>\n<div class=\"creditCardDetails creditCardDetailsTab\">\n  <div class=\"contentWrapper\">\n    <div class=\"formSection\">\n      <div class=\"contentWrapper\">\n        <div class=\"formHeading\">Credit Card Details</div>\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" class=\"formWrapper regWrpp\">\n          <a routerLink=\"/home\">\n            <img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay=\"1.2s\" data-wow-duration=\"1.3s\"\n              style=\"visibility: visible; animation-duration: 2s; \n                animation-name: Ownpulse;\" />\n          </a>\n          <div class=\"clearFixed\"></div>\n          <div class=\"tabSection\">\n            <a routerLink=\"/companyRegisteration1\" class=\"companyTabCommon companyTab\">\n              <span>Company\n                <span class=\"activeLine\"></span>\n              </span>\n            </a>\n            <a routerLink=\"/adminRegisteration1\" class=\"companyTabCommon adminTab\">\n              <span>Administrator</span>\n            </a>\n            <span class=\"companyTabCommon rightBorderNone creditCardTab companyTabactive\">\n              <span>Credit Card\n                <span class=\"activeLine\"></span>\n              </span>\n            </span>\n          </div>\n          <div class=\"clearFixed\"></div>\n          <div class=\"formMainDiv\">            \n            <div class=\"clearFixed\"></div>\n            <mat-form-field class=\"inputHalfLeft\">\n              <input matInput formControlName=\"addr1\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Address1\" />\n            </mat-form-field>\n            <mat-form-field class=\"inputHalfRight\">\n              <input matInput formControlName=\"addr2\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Address2\" />\n            </mat-form-field>\n            <mat-form-field class=\"inputHalfLeft\">\n              <input matInput formControlName=\"zipCode\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Zip Code\" />\n            </mat-form-field>\n            <mat-form-field class=\"inputHalfRight\">\n              <input matInput formControlName=\"state\" type=\"text\" class=\"textAreaCommon\" placeholder=\"State\" />\n            </mat-form-field>\n            <mat-form-field class=\"inputHalfLeft\">\n              <input matInput formControlName=\"city\" type=\"text\" class=\"textAreaCommon\" placeholder=\"City\" />\n            </mat-form-field>\n            <mat-form-field class=\"inputHalfRight\">\n              <input matInput formControlName=\"country\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Country\" />\n            </mat-form-field>\n            <div class=\"clearFixed\"></div>\n            <label class=\"material-checkbox\">\n              <input (change)=\"FieldsChange($event)\" type=\"checkbox\" class=\"checkBox\" />\n              <span class=\"termsAndcondition\">billing address will be your company address.</span>\n              <div *ngIf=\"(submitted && userForm.controls['addBillingBox'].errors) || userForm.controls['addBillingBox'].touched || userForm.controls['addBillingBox'].dirty\"\n                class=\"errorMsg\">\n                <div *ngIf=\"userForm.controls['addBillingBox'].errors != null && userForm.controls['addBillingBox'].errors.required == true\">\n                  Agree check box must be checked.\n                </div>\n              </div>\n            </label>\n            <mat-form-field class=\"inputHalfRight example-full-width\">\n              <input matInput formControlName=\"cardName\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['cardName'].errors }\"\n                type=\"text\" class=\"textAreaCommon\" placeholder=\"Card Holder Name\" required />\n\n              <div *ngIf=\"(submitted && userForm.controls['cardName'].errors) || userForm.controls['cardName'].touched || userForm.controls['cardName'].dirty\"\n                class=\"errorMsg\">\n                <div *ngIf=\"userForm.controls['cardName'].errors != null && userForm.controls['cardName'].errors.required == true\">\n                  Card Holder Name is required.\n                </div>\n                <div *ngIf=\"userForm.controls['cardName'].errors != null && userForm.controls['cardName'].errors.pattern\">\n                  Card Holder Name allows only characters and space.\n                </div>\n              </div>\n            </mat-form-field>\n            <mat-form-field class=\"inputHalfRight example-full-width cardNoMain\">\n              <input matInput formControlName=\"cardNumber\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Card No.\" ccNumber required />\n              <div *ngIf=\"(submitted && userForm.controls['cardNumber'].errors) || userForm.controls['cardNumber'].touched || userForm.controls['cardNumber'].dirty\"\n                class=\"errorMsg\">\n                <div *ngIf=\"userForm.controls['cardNumber'].errors != null && userForm.controls['cardNumber'].errors.ccNumber == true\">\n                  Card Number must be valid.\n                </div>\n              </div>\n            </mat-form-field>\n            <mat-form-field class=\"inputHalfLeft expDate\">\n              <input matInput formControlName=\"expiryDate\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Expiry Date\" ccExp required />\n              <div *ngIf=\"(submitted && userForm.controls['expiryDate'].errors) || userForm.controls['expiryDate'].touched || userForm.controls['expiryDate'].dirty\"\n                class=\"errorMsg\">\n                <div *ngIf=\"userForm.controls['expiryDate'].errors != null && userForm.controls['expiryDate'].errors.expDate == true\">\n                  Card Expiry Date must be valid date.\n                </div>\n              </div>\n            </mat-form-field>\n            <mat-form-field class=\"inputHalfRight expDate\">\n              <input matInput formControlName=\"cvvNumber\" type=\"text\" class=\"textAreaCommon\" placeholder=\"CVV\" required />\n              <div *ngIf=\"(submitted && userForm.controls['cvvNumber'].errors) || userForm.controls['cvvNumber'].touched || userForm.controls['cvvNumber'].dirty\"\n                class=\"errorMsg\">\n                <div *ngIf=\"userForm.controls['cvvNumber'].errors != null && userForm.controls['cvvNumber'].errors.required == true\">\n                  Card CVV Number is required.\n                </div>\n                <div *ngIf=\"userForm.controls['cvvNumber'].errors != null && userForm.controls['cvvNumber'].errors.pattern\">\n                  Card CVV Number must be valid.\n                </div>\n              </div>\n            </mat-form-field>\n            <div class=\"clearFixed\"></div>\n            <div class=\"inputmain\">\n              <label class=\"material-checkbox noBgBorder\">\n                    <input formControlName=\"agreeBox\" type=\"checkbox\" class=\"checkBox\" />\n              <span class=\"termsAndcondition\">I agree to the Terms of Use, Privacy Policy and Disclaimer.</span>\n              <div *ngIf=\"(submitted && userForm.controls['agreeBox'].errors) || userForm.controls['agreeBox'].touched || userForm.controls['agreeBox'].dirty\"\n                class=\"errorMsg\">\n                <div *ngIf=\"userForm.controls['agreeBox'].errors != null && userForm.controls['agreeBox'].errors.required == true\">\n                  Agree check box must be checked.\n                </div>\n              </div>\n              </label>\n            </div>\n            <div class=\"inputmain\">\n              <button mat-flat-button>Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"clearFixed\"></div>\n      <app-innerfooter></app-innerfooter>\n    </div>\n  </div>\n</div>\n<div class=\"welcomePopSection\">\n  <div [hidden]=\"isDisplay\" id=\"popup1\" class=\"overlay successOverLay\">\n    <div class=\"popup wow Ownpulse SuccesPopup\" data-wow-delay=\"2s\" data-wow-duration=\"2s\" style=\"animation-duration: 2s; animation-name: Ownpulse;\">\n      <a id=\"closebtn\" class=\"material-icons msgClose\" routerLink=\"/welcome\">close</a>\n      <div class=\"content\">        \n        <p class=\"popupSuccessMsg\">You have successfully registered your Company</p>\n        <p class=\"freeTrialMsg\">Your Free trial period has started</p>\n        <i class=\"material-icons successTick\">done</i>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: CreditCardDetailCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardDetailCompanyComponent", function() { return CreditCardDetailCompanyComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_cc_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-cc-library */ "./node_modules/angular-cc-library/index.js");
/* harmony import */ var angular_cc_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_cc_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Observable } from 'rxjs';






var CreditCardDetailCompanyComponent = /** @class */ (function () {
    function CreditCardDetailCompanyComponent(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.submitted = null;
        this.cvvPattern = "^[0-9]{3,4}$";
        this.cardNamePattern = "^[a-zA-Z][a-zA-Z ]+$";
        this.isDisplay = true;
        this.createForm();
    }
    CreditCardDetailCompanyComponent.prototype.ngOnInit = function () {
        this.company = JSON.parse(localStorage.getItem("company"));
    };
    CreditCardDetailCompanyComponent.prototype.FieldsChange = function (values) {
        console.log(values.currentTarget.checked);
        if (values.currentTarget.checked == true) {
            this.userForm = this.fb.group({
                addBillingBox: [''],
                addr1: [this.company.address.addr1],
                addr2: [this.company.address.addr2],
                state: [this.company.address.state],
                zipCode: [this.company.address.zipCode],
                city: [this.company.address.city],
                country: [this.company.address.country],
                cardName: [this.userForm.value.cardName],
                cardNumber: [this.userForm.value.cardNumber],
                expiryDate: [this.userForm.value.expiryDate],
                cvvNumber: [this.userForm.value.cvvNumber],
                agreeBox: [this.userForm.value.agreeBox, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
        if (values.currentTarget.checked == false) {
            this.userForm = this.fb.group({
                addBillingBox: [''],
                addr1: [''],
                addr2: [''],
                state: [''],
                zipCode: [''],
                city: [''],
                country: [''],
                cardName: [this.userForm.value.cardName],
                cardNumber: [this.userForm.value.cardNumber],
                expiryDate: [this.userForm.value.expiryDate],
                cvvNumber: [this.userForm.value.cvvNumber],
                agreeBox: [this.userForm.value.agreeBox, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
    };
    CreditCardDetailCompanyComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            addBillingBox: [''],
            addr1: [''],
            addr2: [''],
            state: [''],
            zipCode: [''],
            city: [''],
            country: [''],
            cardName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.cardNamePattern)]],
            cardNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, angular_cc_library__WEBPACK_IMPORTED_MODULE_4__["CreditCardValidator"].validateCCNumber]],
            expiryDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, angular_cc_library__WEBPACK_IMPORTED_MODULE_4__["CreditCardValidator"].validateExpDate]],
            cvvNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.cvvPattern)]],
            agreeBox: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreditCardDetailCompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        //this.router.navigate(["welcome"]);
        this.card = {
            cardName: this.userForm.value.cardName,
            cardNumber: this.userForm.value.cardNumber,
            expiryDate: this.userForm.value.expiryDate,
            cvvNumber: this.userForm.value.cvvNumber
        };
        this.card.address = {
            addr1: this.userForm.value.addr1,
            addr2: this.userForm.value.addr2,
            state: this.userForm.value.state,
            city: this.userForm.value.city,
            country: this.userForm.value.country,
            zipCode: this.userForm.value.zipCode
        };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].registerCompany, {
            "company": JSON.parse(localStorage.getItem("company")),
            "admin": JSON.parse(localStorage.getItem("admin")),
            "card": this.card,
            "userId": sessionStorage.getItem("userId")
        })
            .subscribe(function (res) {
            if (res.status == 1) {
                _this.isDisplay = false;
                //this.router.navigate(["welcome"]);
            }
            else {
                alert("Error: " + res.mssg);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    // gotoWelcome(){
    //   console.log("welcome.popupHide");
    //   // this.previousRouteService.isHidden = true;
    //   this.router.navigate(["welcome"]);
    // }
    CreditCardDetailCompanyComponent.prototype.popupHide = function () {
        this.isDisplay = true;
    };
    CreditCardDetailCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-card-detail-company',
            template: __webpack_require__(/*! ./credit-card-detail-company.component.html */ "./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.html"),
            styles: [__webpack_require__(/*! ./credit-card-detail-company.component.css */ "./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CreditCardDetailCompanyComponent);
    return CreditCardDetailCompanyComponent;
}());



/***/ }),

/***/ "./src/app/Shared/confirm-password/confirm-password.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Shared/confirm-password/confirm-password.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/confirm-password/confirm-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Shared/confirm-password/confirm-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearFixed\"></div>\r\n<div class=\"registrationOneSection forgotPassword\" *ngIf=\"linkExp\">This link has expired !! Please try again.</div>\r\n<div class=\"registrationOneSection forgotPassword\" *ngIf=\"linkValid\">\r\n  <div class=\"formSection\">\r\n    <div class=\"contentWrapper\">\r\n      <div class=\"formHeading\">Confirm Password</div>\r\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" class=\"formWrapper regWrpp\">\r\n        <a routerLink=\"/home\">\r\n          <img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay=\"1.2s\" data-wow-duration=\"1.3s\"\r\n            style=\"visibility: visible; animation-duration: 2s; animation-name: Ownpulse;\" />\r\n        </a>\r\n        <div class=\"clearFixed\"></div>\r\n        <div class=\"successMsgCentre\">{{resetResp}}</div>\r\n        <div class=\"clearFixed\"></div> \r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput formControlName=\"confirmPass1\" type=\"password\" class=\"textAreaCommon\" placeholder=\"Password\" />\r\n          <div *ngIf=\"(submitted && userForm.controls['confirmPass1'].errors) || userForm.controls['confirmPass1'].touched || userForm.controls['confirmPass1'].dirty\"\r\n          class=\"errorMsg\">\r\n            <div *ngIf=\"userForm.controls['confirmPass1'].errors != null && userForm.controls['confirmPass1'].errors.required == true\">\r\n                Password is required.\r\n            </div>\r\n            <div *ngIf=\"userForm.controls['confirmPass1'].errors != null && userForm.controls['confirmPass1'].errors.pattern\">\r\n              Password must contain atleast one special character, one number and one upper case letter and between 8 and 32 characters\r\n              in length.\r\n            </div>\t\t\t\r\n          </div>\r\n        </mat-form-field>\r\n        <div class=\"clearfixed\"></div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput formControlName=\"confirmpass2\" type=\"password\" class=\"textAreaCommon\" placeholder=\"Confirm Password\" />\r\n          <div *ngIf=\"(submitted && userForm.controls['confirmpass2'].errors) || userForm.controls['confirmpass2'].touched || userForm.controls['confirmpass2'].dirty\" class=\"errorMsg\">          <div *ngIf=\"userForm.controls['confirmpass2'].errors != null && userForm.controls     ['confirmpass2'].errors.required == true\">\r\n            Password is required.\r\n             </div>\r\n          </div>\r\n        </mat-form-field>\r\n        <div class=\"clearFixed\"></div>\r\n        <div class=\"inputmain\">\r\n          <button mat-flat-button>Submit</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"clearFixed\"></div>\r\n<app-innerfooter></app-innerfooter>"

/***/ }),

/***/ "./src/app/Shared/confirm-password/confirm-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Shared/confirm-password/confirm-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordComponent", function() { return ConfirmPasswordComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Observable } from 'rxjs';





var ConfirmPasswordComponent = /** @class */ (function () {
    function ConfirmPasswordComponent(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.submitted = null;
        this.linkExp = false;
        this.linkValid = false;
        this.passwPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$";
        this.createForm();
    }
    ConfirmPasswordComponent.prototype.ngOnInit = function () {
        this.dataurl1 = window.location.href;
        this.dataurl = this.dataurl1.split("data=");
        this.dataurl = this.dataurl[1].toString().split("%3D");
        this.data = atob(this.dataurl[0]).toString().split("&");
        this.data = this.data.toString().split("&");
        this.data = this.data.toString().split(",");
        this.email1 = this.data[0].toString().split("=");
        this.time1 = this.data[1].toString().split("=");
        this.email = this.email1[1];
        this.time = this.time1[1];
        this.date = new Date().getTime();
        this.timeDiffHrs = (this.date - this.time) / (1000 * 60 * 60);
        if (this.timeDiffHrs > 24) {
            this.linkExp = true;
            return;
        }
        else {
            this.linkValid = true;
        }
    };
    ConfirmPasswordComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            confirmPass1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.passwPattern)]],
            confirmpass2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    ConfirmPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = false;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].resetPassword, {
            "email": this.email,
            "passw": this.userForm.value.confirmpass2
        })
            .subscribe(function (res) {
            if (res.status == 1) {
                _this.resetResp = "your password has been reset. ";
                _this.router.navigate(["login"]);
            }
            else {
                alert("Error: " + res.mssg);
            }
        });
    };
    ConfirmPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-password',
            template: __webpack_require__(/*! ./confirm-password.component.html */ "./src/app/Shared/confirm-password/confirm-password.component.html"),
            styles: [__webpack_require__(/*! ./confirm-password.component.css */ "./src/app/Shared/confirm-password/confirm-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ConfirmPasswordComponent);
    return ConfirmPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Shared/forget-password/forget-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Shared/forget-password/forget-password.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/forget-password/forget-password.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Shared/forget-password/forget-password.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registrationOneSection forgotPassword mainWrapper\">\n  <div class=\"formSection\">\n    <div class=\"contentWrapper\">\n      <div class=\"formHeading\">Forgot Password</div>\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" class=\"formWrapper regWrpp\">\n        <a routerLink=\"/home\">\n          <img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay=\"1.2s\" data-wow-duration=\"1.3s\"\n            style=\"visibility: visible; animation-duration: 2s; animation-name: Ownpulse;\" />\n        </a>\n        <div class=\"clearFixed\"></div>\n        <div class=\"successMsgCentre\" *ngIf=\"show\">{{logiResp}}</div>\n        <div class=\"clearFixed\"></div>\n        <div class=\"breadcrumbSec\"></div>\n        <mat-form-field class=\"example-full-width\" *ngIf=\"fieldShow\">\n          <input matInput formControlName=\"email\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Email\" />\n          <div *ngIf=\"submitted != null && !submitted\" class=\"errorMsg\">\n            <div *ngIf=\"userForm.controls['email'].errors != null && userForm.controls['email'].errors.required == true\">Email is required.              \n            </div>\n            <div *ngIf=\"userForm.controls['email'].errors != null && userForm.controls['email'].errors.pattern\">\n              Email must be a valid email address.\n            </div>\n          </div>\n        </mat-form-field>\n        <div class=\"clearFixed\"></div>\n        <div class=\"inputmain\" *ngIf=\"fieldShow\">\n          <button mat-flat-button>Submit</button>\n        </div>     \n        <p class=\"haveAccount\" *ngIf=\"fieldShow\">Have you an account?\n          <a routerLink=\"/login\">Login</a>\n        </p>\n      </form>\n    </div>\n    <div class=\"clearFixed\"></div>\n    <app-innerfooter></app-innerfooter>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Shared/forget-password/forget-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Shared/forget-password/forget-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Observable } from 'rxjs';





var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.submitted = null;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.createForm();
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.show = false;
        this.fieldShow = true;
    };
    ForgetPasswordComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]]
        });
    };
    ForgetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = false;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        else {
            var href = "email=" + this.userForm.value.email + "&timeStamp=" + Date.now();
            console.log(encodedString);
            var encodedString = btoa(href); // base64 encode the parameters for password reset
            var psswdResetUrl = "http://" + window.location.host + "/ConfirmPassword?data=" + encodedString;
            console.log(psswdResetUrl);
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].forgotPassword, {
                "link": psswdResetUrl,
                "email": this.userForm.value.email
            })
                .subscribe(function (res) {
                _this.logiResp = "Email has been sent to your email address.";
                console.log(res);
                _this.show = true;
                _this.fieldShow = false;
            });
        }
        this.submitted = true;
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/Shared/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/Shared/forget-password/forget-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Shared/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/Shared/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/Shared/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginSection\">\r\n    <div class=\"contentWrapper\">\r\n        <div class=\"formHeading\">Login</div>\r\n        <div class=\"loginWrapper\">\r\n            <img src=\"assets/Images/loginRightImg.jpg\" alt=\"\" class=\"rightLoginImg\" />\r\n            <div class=\"loginFormSection\">\r\n                <a routerLink=\"/\">\r\n                    <img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse loginLogoSmall\" data-wow-delay=\"1.2s\" data-wow-duration=\"1.3s\"\r\n                        style=\"visibility: visible; animation-duration: 2s; \r\n               animation-name: Ownpulse;\" />\r\n                </a>\r\n                <div class=\"clearFixed\"></div>\r\n\r\n                <div class=\"clearFixed\"></div>\r\n                \r\n                <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n                        <div class=\"PassEmailMainDv\">\r\n                                <div [hidden]=\"emailOrPass\" class=\"errorMsg PassEmailNotmatchError\">\r\n                                        Email/Password not matched\r\n                                    </div>\r\n                                </div>\r\n                                    <div class=\"clearFixed\"></div>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput formControlName=\"email\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Email\" (focus)=\"onPassFocus()\" />\r\n                        <div *ngIf=\"(submitted && userForm.controls['email'].errors) || userForm.controls['email'].touched || userForm.controls['email'].dirty\"\r\n                            class=\"errorMsg\">\r\n                            <div *ngIf=\"userForm.controls['email'].errors != null && userForm.controls['email'].errors.required == true\">\r\n                                Email is required.\r\n                            </div>\r\n                            <div *ngIf=\"userForm.controls['email'].errors != null && userForm.controls['email'].errors.pattern\">\r\n                                Email must be a valid email address.\r\n                            </div>\r\n                        </div>\r\n                    </mat-form-field>\r\n                    <div class=\"clearFixed\"></div>\r\n                    <mat-form-field class=\"example-full-width loginPassMatClass\">\r\n                        <input matInput formControlName=\"passw\" class=\"textAreaCommon\" placeholder=\"Password\" [type]=\"hide ? 'text' : 'password'\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['passw'].errors }\" (focus)=\"onPassFocus()\" />\r\n                        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                        <div *ngIf=\"(submitted && userForm.controls['passw'].errors) || userForm.controls['passw'].touched || userForm.controls['passw'].dirty\"\r\n                            class=\"errorMsg\">\r\n                            <div *ngIf=\"userForm.controls['passw'].errors != null && userForm.controls['passw'].errors.required == true\">\r\n                                Password is required.\r\n                            </div>  \r\n                               <!-- <div *ngIf=\"userForm.controls['passw'].errors != null && userForm.controls['passw'].errors.pattern\">\r\n                              Password must contain atleast one special character, one number and one upper case letter and between 8 and 32 characters\r\n                              in length.\r\n                            </div>\t\t\t\t\t\t\t -->\r\n                        </div> \r\n                    </mat-form-field>\r\n                    \r\n                    <div class=\"clearFixed\"></div>\r\n                    <div class=\"inputmain\">\r\n                        <a routerLink=\"/forgetPassword\" class=\"forgotPass\">Forgot Password?</a>\r\n                    </div>\r\n                    <div class=\"clearFixed\"></div>\r\n                    <div class=\"inputmain\">\r\n                        <button mat-flat-button type=\"submit\">Login</button>\r\n                    </div>\r\n                    <p class=\"haveAccount\">Don't have an account?\r\n                        <a routerLink=\"/userRegisteration1\">Sign Up</a>\r\n                    </p>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n        <app-innerfooter></app-innerfooter>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Shared/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    // passwPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$";
    function LoginComponent(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.emailOrPass = true;
        this.submitted = null;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onPassFocus = function () {
        this.emailOrPass = true;
    };
    LoginComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]],
            passw: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userLogin, {
            "email": this.userForm.value.email,
            "passw": this.userForm.value.passw
        }).subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                sessionStorage.clear();
                localStorage.clear();
                sessionStorage.setItem("userId", res.mssg[0].id);
                localStorage.setItem("userEmail", res.mssg[0].userEmail);
                localStorage.setItem("userFName", res.mssg[0].firstName);
                localStorage.setItem("userLName", res.mssg[0].lastName);
                for (var i = 0; i < res.company.length; i++) {
                    if (res.company[i].creatorEmail == res.mssg[0].userEmail) {
                        console.log("Default Company Id = : " + res.company[i].id);
                        localStorage.setItem("companyId", res.company[i].id);
                        localStorage.setItem("company", JSON.stringify(res.company[i]));
                    }
                }
                sessionStorage.setItem('isLogin', 'true');
                _this.router.navigate(["dashboard"]);
            }
            else {
                _this.emailOrPass = false;
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Shared/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Shared/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Shared/shared-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/Shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guard_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guard/login.guard */ "./src/app/guard/login.guard.ts");
/* harmony import */ var _guard_dashboard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guard/dashboard.guard */ "./src/app/guard/dashboard.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/Shared/login/login.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/Shared/forget-password/forget-password.component.ts");
/* harmony import */ var _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-password/confirm-password.component */ "./src/app/Shared/confirm-password/confirm-password.component.ts");
/* harmony import */ var _user_registeration_registeration1_registeration1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-registeration/registeration1/registeration1.component */ "./src/app/Shared/user-registeration/registeration1/registeration1.component.ts");
/* harmony import */ var _user_registeration_registeration2_registeration2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-registeration/registeration2/registeration2.component */ "./src/app/Shared/user-registeration/registeration2/registeration2.component.ts");
/* harmony import */ var _user_registeration_registeration3_registeration3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-registeration/registeration3/registeration3.component */ "./src/app/Shared/user-registeration/registeration3/registeration3.component.ts");
/* harmony import */ var _company_admin_registeration_company_register_company_register1_company_register1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./company-admin-registeration/company-register/company-register1/company-register1.component */ "./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.ts");
/* harmony import */ var _company_admin_registeration_company_register_company_register2_company_register2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company-admin-registeration/company-register/company-register2/company-register2.component */ "./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.ts");
/* harmony import */ var _company_admin_registeration_admin_register_admin_register1_admin_register1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company-admin-registeration/admin-register/admin-register1/admin-register1.component */ "./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.ts");
/* harmony import */ var _company_admin_registeration_admin_register_admin_register2_admin_register2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./company-admin-registeration/admin-register/admin-register2/admin-register2.component */ "./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.ts");
/* harmony import */ var _company_admin_registeration_credit_card_credit_card_detail_company_credit_card_detail_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component */ "./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.ts");
/* harmony import */ var _choose_plan_choose_your_plan_choose_your_plan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./choose-plan/choose-your-plan/choose-your-plan.component */ "./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.ts");
/* harmony import */ var _sharedlayout_innerfooter_innerfooter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sharedlayout/innerfooter/innerfooter.component */ "./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    { path: 'forgetPassword', component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    { path: 'ConfirmPassword', component: _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmPasswordComponent"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    { path: 'userRegisteration1', component: _user_registeration_registeration1_registeration1_component__WEBPACK_IMPORTED_MODULE_7__["Registeration1Component"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    { path: 'userRegisteration2', component: _user_registeration_registeration2_registeration2_component__WEBPACK_IMPORTED_MODULE_8__["Registeration2Component"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    { path: 'userRegisteration3', component: _user_registeration_registeration3_registeration3_component__WEBPACK_IMPORTED_MODULE_9__["Registeration3Component"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    { path: 'companyRegisteration1', component: _company_admin_registeration_company_register_company_register1_company_register1_component__WEBPACK_IMPORTED_MODULE_10__["CompanyRegister1Component"], canActivate: [_guard_dashboard_guard__WEBPACK_IMPORTED_MODULE_3__["DashboardGuard"]] },
    { path: 'companyRegisteration2', component: _company_admin_registeration_company_register_company_register2_company_register2_component__WEBPACK_IMPORTED_MODULE_11__["CompanyRegister2Component"], canActivate: [_guard_dashboard_guard__WEBPACK_IMPORTED_MODULE_3__["DashboardGuard"]] },
    { path: 'adminRegisteration1', component: _company_admin_registeration_admin_register_admin_register1_admin_register1_component__WEBPACK_IMPORTED_MODULE_12__["AdminRegister1Component"], canActivate: [_guard_dashboard_guard__WEBPACK_IMPORTED_MODULE_3__["DashboardGuard"]] },
    { path: 'adminRegisteration2', component: _company_admin_registeration_admin_register_admin_register2_admin_register2_component__WEBPACK_IMPORTED_MODULE_13__["AdminRegister2Component"], canActivate: [_guard_dashboard_guard__WEBPACK_IMPORTED_MODULE_3__["DashboardGuard"]] },
    { path: 'creditCardDetailCompany', component: _company_admin_registeration_credit_card_credit_card_detail_company_credit_card_detail_company_component__WEBPACK_IMPORTED_MODULE_14__["CreditCardDetailCompanyComponent"], canActivate: [_guard_dashboard_guard__WEBPACK_IMPORTED_MODULE_3__["DashboardGuard"]] },
    { path: 'ChooseYourPlan', component: _choose_plan_choose_your_plan_choose_your_plan_component__WEBPACK_IMPORTED_MODULE_15__["ChooseYourPlanComponent"], canActivate: [_guard_dashboard_guard__WEBPACK_IMPORTED_MODULE_3__["DashboardGuard"]] }
];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());

var routingComponents = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"],
    _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmPasswordComponent"],
    _user_registeration_registeration1_registeration1_component__WEBPACK_IMPORTED_MODULE_7__["Registeration1Component"],
    _user_registeration_registeration2_registeration2_component__WEBPACK_IMPORTED_MODULE_8__["Registeration2Component"],
    _user_registeration_registeration3_registeration3_component__WEBPACK_IMPORTED_MODULE_9__["Registeration3Component"],
    _company_admin_registeration_company_register_company_register1_company_register1_component__WEBPACK_IMPORTED_MODULE_10__["CompanyRegister1Component"],
    _company_admin_registeration_company_register_company_register2_company_register2_component__WEBPACK_IMPORTED_MODULE_11__["CompanyRegister2Component"],
    _company_admin_registeration_admin_register_admin_register1_admin_register1_component__WEBPACK_IMPORTED_MODULE_12__["AdminRegister1Component"],
    _company_admin_registeration_admin_register_admin_register2_admin_register2_component__WEBPACK_IMPORTED_MODULE_13__["AdminRegister2Component"],
    _company_admin_registeration_credit_card_credit_card_detail_company_credit_card_detail_company_component__WEBPACK_IMPORTED_MODULE_14__["CreditCardDetailCompanyComponent"],
    _choose_plan_choose_your_plan_choose_your_plan_component__WEBPACK_IMPORTED_MODULE_15__["ChooseYourPlanComponent"],
    _sharedlayout_innerfooter_innerfooter_component__WEBPACK_IMPORTED_MODULE_16__["InnerfooterComponent"]
];


/***/ }),

/***/ "./src/app/Shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/Shared/material/material.module.ts");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/Shared/shared-routing.module.ts");
/* harmony import */ var angular_cc_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-cc-library */ "./node_modules/angular-cc-library/index.js");
/* harmony import */ var angular_cc_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_cc_library__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/Shared/login/login.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/Shared/forget-password/forget-password.component.ts");
/* harmony import */ var _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm-password/confirm-password.component */ "./src/app/Shared/confirm-password/confirm-password.component.ts");
/* harmony import */ var _user_registeration_registeration1_registeration1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-registeration/registeration1/registeration1.component */ "./src/app/Shared/user-registeration/registeration1/registeration1.component.ts");
/* harmony import */ var _user_registeration_registeration2_registeration2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-registeration/registeration2/registeration2.component */ "./src/app/Shared/user-registeration/registeration2/registeration2.component.ts");
/* harmony import */ var _user_registeration_registeration3_registeration3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-registeration/registeration3/registeration3.component */ "./src/app/Shared/user-registeration/registeration3/registeration3.component.ts");
/* harmony import */ var _company_admin_registeration_company_register_company_register1_company_register1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company-admin-registeration/company-register/company-register1/company-register1.component */ "./src/app/Shared/company-admin-registeration/company-register/company-register1/company-register1.component.ts");
/* harmony import */ var _company_admin_registeration_company_register_company_register2_company_register2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./company-admin-registeration/company-register/company-register2/company-register2.component */ "./src/app/Shared/company-admin-registeration/company-register/company-register2/company-register2.component.ts");
/* harmony import */ var _company_admin_registeration_admin_register_admin_register1_admin_register1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./company-admin-registeration/admin-register/admin-register1/admin-register1.component */ "./src/app/Shared/company-admin-registeration/admin-register/admin-register1/admin-register1.component.ts");
/* harmony import */ var _company_admin_registeration_admin_register_admin_register2_admin_register2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company-admin-registeration/admin-register/admin-register2/admin-register2.component */ "./src/app/Shared/company-admin-registeration/admin-register/admin-register2/admin-register2.component.ts");
/* harmony import */ var _company_admin_registeration_credit_card_credit_card_detail_company_credit_card_detail_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component */ "./src/app/Shared/company-admin-registeration/credit-card/credit-card-detail-company/credit-card-detail-company.component.ts");
/* harmony import */ var _choose_plan_choose_your_plan_choose_your_plan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./choose-plan/choose-your-plan/choose-your-plan.component */ "./src/app/Shared/choose-plan/choose-your-plan/choose-your-plan.component.ts");
/* harmony import */ var _sharedlayout_innerfooter_innerfooter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sharedlayout/innerfooter/innerfooter.component */ "./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.ts");
/* harmony import */ var _company_admin_registeration_admin_register_admin_register1_phone_number_format_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company-admin-registeration/admin-register/admin-register1/phone-number-format.directive */ "./src/app/Shared/company-admin-registeration/admin-register/admin-register1/phone-number-format.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_routing_module__WEBPACK_IMPORTED_MODULE_4__["SharedRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                angular_cc_library__WEBPACK_IMPORTED_MODULE_5__["CreditCardDirectivesModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgetPasswordComponent"],
                _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmPasswordComponent"],
                _user_registeration_registeration1_registeration1_component__WEBPACK_IMPORTED_MODULE_9__["Registeration1Component"],
                _user_registeration_registeration2_registeration2_component__WEBPACK_IMPORTED_MODULE_10__["Registeration2Component"],
                _user_registeration_registeration3_registeration3_component__WEBPACK_IMPORTED_MODULE_11__["Registeration3Component"],
                _company_admin_registeration_company_register_company_register1_company_register1_component__WEBPACK_IMPORTED_MODULE_12__["CompanyRegister1Component"],
                _company_admin_registeration_company_register_company_register2_company_register2_component__WEBPACK_IMPORTED_MODULE_13__["CompanyRegister2Component"],
                _company_admin_registeration_admin_register_admin_register1_admin_register1_component__WEBPACK_IMPORTED_MODULE_14__["AdminRegister1Component"],
                _company_admin_registeration_admin_register_admin_register2_admin_register2_component__WEBPACK_IMPORTED_MODULE_15__["AdminRegister2Component"],
                _company_admin_registeration_credit_card_credit_card_detail_company_credit_card_detail_company_component__WEBPACK_IMPORTED_MODULE_16__["CreditCardDetailCompanyComponent"],
                _sharedlayout_innerfooter_innerfooter_component__WEBPACK_IMPORTED_MODULE_18__["InnerfooterComponent"],
                _choose_plan_choose_your_plan_choose_your_plan_component__WEBPACK_IMPORTED_MODULE_17__["ChooseYourPlanComponent"],
                _company_admin_registeration_admin_register_admin_register1_phone_number_format_directive__WEBPACK_IMPORTED_MODULE_19__["PhoneNumberFormatDirective"]
            ],
            exports: [
                _company_admin_registeration_admin_register_admin_register1_phone_number_format_directive__WEBPACK_IMPORTED_MODULE_19__["PhoneNumberFormatDirective"]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"innerFooter\">\n    <a routerLink=\"/\">Security</a>\n    <a routerLink=\"/\"> Legal</a>\n    <a routerLink=\"/\">Privacy</a>\n</div>\n"

/***/ }),

/***/ "./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.ts ***!
  \**************************************************************************/
/*! exports provided: InnerfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerfooterComponent", function() { return InnerfooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InnerfooterComponent = /** @class */ (function () {
    function InnerfooterComponent() {
    }
    InnerfooterComponent.prototype.ngOnInit = function () {
    };
    InnerfooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-innerfooter',
            template: __webpack_require__(/*! ./innerfooter.component.html */ "./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.html"),
            styles: [__webpack_require__(/*! ./innerfooter.component.css */ "./src/app/Shared/sharedlayout/innerfooter/innerfooter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InnerfooterComponent);
    return InnerfooterComponent;
}());



/***/ }),

/***/ "./src/app/Shared/user-registeration/registeration1/registeration1.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/Shared/user-registeration/registeration1/registeration1.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/user-registeration/registeration1/registeration1.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/Shared/user-registeration/registeration1/registeration1.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearFixed\"></div>\n<div class=\"registrationOneSection\">\n  <div class=\"formSection\">\n    <div class=\"contentWrapper\">\n      <div class=\"formHeading\">Registration</div>\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" class=\"formWrapper regWrpp\">\n        <a routerLink=\"/home\">\n          <img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay=\"1.2s\" data-wow-duration=\"1.3s\"\n            style=\"visibility: visible; animation-duration: 2s; animation-name: Ownpulse;\" />\n        </a>\n        <div class=\"clearFixed\"></div>\n        <div class=\"breadcrumbSec\">\n          <div class=\"breadcrumbActive\"></div>\n          <div class=\"breadIconLine\"></div>\n          <div class=\"starIconDiv\"> </div>\n          <div class=\"breadIconLine\"></div>\n          <div class=\"starIconDiv\"> </div>\n        </div>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput formControlName=\"fname\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['fname'].errors }\" type=\"text\"\n            class=\"textAreaCommon\" placeholder=\"First Name\" />\n          <div *ngIf=\"(submitted && userForm.controls['fname'].errors) || userForm.controls['fname'].touched || userForm.controls['fname'].dirty\"\n            class=\"errorMsg\">\n            <div *ngIf=\"userForm.controls['fname'].errors != null && userForm.controls['fname'].errors.required == true\">\n              First Name is required.\n            </div>\n            <div *ngIf=\"userForm.controls['fname'].errors != null && userForm.controls['fname'].errors.pattern\">\n              Only Characters are allowed in First Name.\n            </div>\n          </div>\n        </mat-form-field>\n        <div class=\"clearFixed\"></div>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput formControlName=\"lname\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Last Name\" />\n          <div *ngIf=\"(submitted && userForm.controls['lname'].errors) || userForm.controls['lname'].touched || userForm.controls['lname'].dirty\"\n            class=\"errorMsg\">\n            <div *ngIf=\"userForm.controls['lname'].errors != null && userForm.controls['lname'].errors.required == true\">\n              Last Name is required.\n            </div>\n            <div *ngIf=\"userForm.controls['lname'].errors != null && userForm.controls['lname'].errors.pattern\">\n              Only Characters are allowed in Last Name.\n            </div>\n          </div>\n        </mat-form-field>\n        <div class=\"clearFixed\"></div>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput formControlName=\"email\" type=\"text\" class=\"textAreaCommon\" placeholder=\"Email\" [(ngModel)]=\"invitedEmail\" />\n          <div *ngIf=\"(submitted && userForm.controls['email'].errors) || userForm.controls['email'].touched || userForm.controls['email'].dirty\"\n            class=\"errorMsg\">\n            <div *ngIf=\"userForm.controls['email'].errors != null && userForm.controls['email'].errors.required == true\">\n              Email is required.\n            </div>\n            <div *ngIf=\"userForm.controls['email'].errors != null && userForm.controls['email'].errors.pattern\">\n              Email must be a valid email address.\n            </div>\n          </div>\n        </mat-form-field>\n        <div class=\"clearFixed\"></div>\n        <div class=\"inputmain\">\n          <button mat-flat-button>Next</button>\n        </div>\n        <p class=\"haveAccount\">Have you an account?\n          <a routerLink=\"/login\">Login</a>\n        </p>\n      </form>\n    </div>\n    <div class=\"clearFixed\"></div>\n    <app-innerfooter></app-innerfooter>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Shared/user-registeration/registeration1/registeration1.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Shared/user-registeration/registeration1/registeration1.component.ts ***!
  \**************************************************************************************/
/*! exports provided: Registeration1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registeration1Component", function() { return Registeration1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs';


var Registeration1Component = /** @class */ (function () {
    function Registeration1Component(fb, router, http) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.submitted = null;
        this.invitedData = '';
        this.invitedEmail = '';
        this.fnamePattern = "^[a-zA-Z]*$";
        this.lnamePattern = "^[a-zA-Z]*$";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.createForm();
    }
    Registeration1Component.prototype.ngOnInit = function () {
        var register1URL = window.location.href;
        if (register1URL.includes("data=")) {
            localStorage.clear();
            console.log(" user is Invited ");
            var data = atob(register1URL.split("data=")[1].split("%3D")[0]);
            this.invitedData = data;
            console.log("data = : " + data);
            this.invitedEmail = data.split("&")[0].split("=")[1];
        }
        else {
            console.log(" user is self ");
        }
    };
    Registeration1Component.prototype.createForm = function () {
        this.userForm = this.fb.group({
            fname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.fnamePattern)]],
            lname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.lnamePattern)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]]
        });
    };
    Registeration1Component.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        if (this.invitedData.length > 0 && this.userForm.value.email != this.invitedData.split("&")[0].split("=")[1]) {
            alert("OOPs! Email doesn't match the invited Email address");
            return;
        }
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].emailVerificationUserRegistration, {
            "fname": this.userForm.value.fname,
            "email": this.userForm.value.email,
            "invitedEmail": this.invitedData.length
        })
            .subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                localStorage.setItem("userEmailPin", res.mssg);
                localStorage.setItem("fname", _this.userForm.value.fname);
                localStorage.setItem("lname", _this.userForm.value.lname);
                localStorage.setItem("email", _this.userForm.value.email);
                if (_this.invitedData.length > 0) {
                    localStorage.setItem("invitedData", _this.invitedData);
                    _this.router.navigate(["userRegisteration3"]);
                }
                else {
                    _this.router.navigate(["userRegisteration2"]);
                }
            }
            else {
                alert("Error: " + res.mssg);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    Registeration1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registeration1',
            template: __webpack_require__(/*! ./registeration1.component.html */ "./src/app/Shared/user-registeration/registeration1/registeration1.component.html"),
            styles: [__webpack_require__(/*! ./registeration1.component.css */ "./src/app/Shared/user-registeration/registeration1/registeration1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Registeration1Component);
    return Registeration1Component;
}());



/***/ }),

/***/ "./src/app/Shared/user-registeration/registeration2/registeration2.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/Shared/user-registeration/registeration2/registeration2.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/user-registeration/registeration2/registeration2.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/Shared/user-registeration/registeration2/registeration2.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearFixed\"></div>\n<div class=\"registrationOneSection registrationStepTwo mainWrapper\">\n  <div class=\"formSection\">\n    <div class=\"contentWrapper\">\n      <div class=\"formHeading\">Registration</div>\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" class=\"formWrapper regWrpp\">\n        <a routerLink=\"/home\">\n          <img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay=\"1.2s\" data-wow-duration=\"1.3s\"\n            style=\"visibility: visible; animation-duration: 2s; \n          animation-name: Ownpulse;\" />\n        </a>\n        <div class=\"clearFixed\"></div>\n        <div class=\"breadcrumbSec\">\n          <div class=\"breadcrumbActive\"> </div>\n          <div class=\"breadIconLine\"></div>\n          <div class=\"breadcrumbActive\"></div>\n          <div class=\"breadIconLine\"></div>\n          <div class=\"starIconDiv\"> </div>\n        </div>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput formControlName=\"otpPin\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['otpPin'].errors }\" type=\"text\"\n            class=\"textAreaCommon\" placeholder=\"Enter PIN sent to your Email\" />\n          <div *ngIf=\"(submitted && userForm.controls['otpPin'].errors) || userForm.controls['otpPin'].touched || userForm.controls['otpPin'].dirty\">\n            <div class=\"errorMsg\" *ngIf=\"userForm.controls['otpPin'].errors != null && userForm.controls['otpPin'].errors.required == true\">\n              OTP Pin is required.\n            </div>\n          </div>\n        </mat-form-field>\n        <div class=\"clearFixed\"></div>\n        <div class=\"inputmain\">\n          <button mat-flat-button>Next</button>\n        </div>\n        <p class=\"haveAccount\">Have you an account?\n          <a routerLink=\"/login\">Login</a>\n        </p>\n      </form>\n    </div>\n    <div class=\"clearFixed\"></div>\n    <app-innerfooter></app-innerfooter>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Shared/user-registeration/registeration2/registeration2.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Shared/user-registeration/registeration2/registeration2.component.ts ***!
  \**************************************************************************************/
/*! exports provided: Registeration2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registeration2Component", function() { return Registeration2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Registeration2Component = /** @class */ (function () {
    function Registeration2Component(fb, router) {
        this.fb = fb;
        this.router = router;
        this.submitted = null;
        this.createForm();
    }
    Registeration2Component.prototype.ngOnInit = function () {
    };
    Registeration2Component.prototype.createForm = function () {
        this.userForm = this.fb.group({
            otpPin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Registeration2Component.prototype.onSubmit = function () {
        this.submitted = true;
        this.userEnteredPin = this.userForm.value.otpPin;
        this.userEmailPin = localStorage.getItem("userEmailPin");
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        else if (this.userEnteredPin === this.userEmailPin) {
            this.router.navigate(["userRegisteration3"]);
        }
        else {
            alert("OTP is not matched ... Please Try Again!!");
        }
    };
    Registeration2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registeration2',
            template: __webpack_require__(/*! ./registeration2.component.html */ "./src/app/Shared/user-registeration/registeration2/registeration2.component.html"),
            styles: [__webpack_require__(/*! ./registeration2.component.css */ "./src/app/Shared/user-registeration/registeration2/registeration2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Registeration2Component);
    return Registeration2Component;
}());



/***/ }),

/***/ "./src/app/Shared/user-registeration/registeration3/registeration3.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/Shared/user-registeration/registeration3/registeration3.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Shared/user-registeration/registeration3/registeration3.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/Shared/user-registeration/registeration3/registeration3.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearFixed\"></div>\n<div class=\"registrationOneSection registrationStepThree mainWrapper\">\n  <div class=\"clearFixed\"></div>\n  <div class=\"formSection\">\n    <div class=\"contentWrapper\">\n      <div class=\"formHeading\">Registration</div>\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" class=\"formWrapper regWrpp\">\n        <a routerLink=\"/home\">\n          <img src=\"assets/Images/innerLogo.png\" alt=\"\" class=\"innerLogoDiv wow Ownpulse\" data-wow-delay=\"1.2s\" data-wow-duration=\"1.3s\"\n            style=\"visibility: visible; animation-duration: 2s; \n          animation-name: Ownpulse;\" />\n        </a>\n        <div class=\"clearFixed\"></div>\n        <div class=\"breadcrumbSec\">\n          <div class=\"breadcrumbActive\"> </div>\n          <div class=\"breadIconLine\"></div>\n          <div class=\"breadcrumbActive\"> </div>\n          <div class=\"breadIconLine\"></div>\n          <div class=\"breadcrumbActive\"></div>\n        </div>\n        <mat-form-field class=\"example-full-width passField\">\n          <input matInput formControlName=\"passw\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['passw'].errors }\" type=\"password\"\n            class=\"textAreaCommon\" placeholder=\"Password\" />\n          <div class=\"errorMsg\" *ngIf=\"(submitted && userForm.controls['passw'].errors) || userForm.controls['passw'].touched || userForm.controls['passw'].dirty\">\n            <div *ngIf=\"userForm.controls['passw'].errors != null && userForm.controls['passw'].errors.required == true\">\n              Password is required.\n            </div>\n            <div *ngIf=\"userForm.controls['passw'].errors != null && userForm.controls['passw'].errors.pattern\">\n              Password must contain at least one special character, one number and one uppercase letter and between 8 and 32 characters\n              in length.\n            </div>\n          </div>\n        </mat-form-field>\n        <div class=\"clearFixed\"></div>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput formControlName=\"confirmPassw\" [ngClass]=\"{ 'is-invalid': submitted && userForm.controls['confirmPassw'].errors }\"\n            type=\"password\" class=\"textAreaCommon\" placeholder=\"Confirm Password\" />\n\n          <div class=\"errorMsg\" *ngIf=\"(submitted && userForm.controls['confirmPassw'].errors) || userForm.controls['confirmPassw'].touched || userForm.controls['confirmPassw'].dirty\">\n            <div *ngIf=\"userForm.controls['confirmPassw'].errors != null && userForm.controls['confirmPassw'].errors.required == true\">\n              Confirm Password is required.\n            </div>\n            <div *ngIf=\"userForm.controls['confirmPassw'].errors == null && passwMatch != null && !passwMatch\">\n              Password and Confirm Password must match.\n            </div>\n          </div>\n        </mat-form-field>\n        <div class=\"clearFixed\"></div>\n        <div class=\"inputmain\">\n          <button mat-flat-button>Submit</button>\n        </div>\n        <p class=\"haveAccount\">Have you an account?\n          <a routerLink=\"/login\">Login</a>\n        </p>\n      </form>\n    </div>\n    <div class=\"clearFixed\"></div>\n    <app-innerfooter></app-innerfooter>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Shared/user-registeration/registeration3/registeration3.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Shared/user-registeration/registeration3/registeration3.component.ts ***!
  \**************************************************************************************/
/*! exports provided: Registeration3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registeration3Component", function() { return Registeration3Component; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_common_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/common-util.service */ "./src/app/services/common-util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var Registeration3Component = /** @class */ (function () {
    function Registeration3Component(fb, router, http, CommonUtilService, document, renderer) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.CommonUtilService = CommonUtilService;
        this.document = document;
        this.renderer = renderer;
        this.submitted = null;
        this.passwMatch = null;
        this.passwPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$";
        this.createForm();
    }
    Registeration3Component.prototype.ngOnInit = function () {
    };
    Registeration3Component.prototype.createForm = function () {
        this.userForm = this.fb.group({
            passw: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.passwPattern)]],
            confirmPassw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Registeration3Component.prototype.onSubmit = function () {
        this.submitted = true;
        this.passwMatch = false;
        this.fname = localStorage.getItem("fname");
        this.lname = localStorage.getItem("lname");
        this.email = localStorage.getItem("email");
        this.passw = this.userForm.value.passw;
        this.confirmPassw = this.userForm.value.confirmPassw;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        if (this.passw == this.confirmPassw) {
            this.passwMatch = true;
            if (localStorage.getItem("invitedData")) {
                var data = localStorage.getItem("invitedData");
                var pType = data.split("&")[1].split("pType=")[1];
                var pIds = data.split("&")[2].split("pIds=")[1];
                var companyId = data.split("&")[3].split("companyId=")[1];
                this.userRegisterInvited(pType, pIds, companyId);
            }
            else {
                this.userRegisterSelf();
            }
        }
        else {
            console.log("passw didn't match");
            this.passwMatch = false;
            this.submitted = false;
        }
    };
    Registeration3Component.prototype.userRegisterSelf = function () {
        var _this = this;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].registerUser, {
            "fname": this.fname,
            "lname": this.lname,
            "email": this.email,
            "passw": this.passw
        })
            .subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                sessionStorage.setItem('userId', res.userId);
                sessionStorage.setItem('isLogin', 'true');
                _this.CommonUtilService.isWelcomePopUpHidden = false;
                _this.router.navigate(["dashboard"]);
                _this.renderer.addClass(_this.document.body, 'embedded-body');
            }
            else {
                alert("Error: " + res.mssg);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    Registeration3Component.prototype.userRegisterInvited = function (pType, pIds, companyId) {
        var _this = this;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].registerUserInvited, {
            "fname": this.fname,
            "lname": this.lname,
            "email": this.email,
            "passw": this.passw,
            "pType": pType,
            "pIds": pIds,
            "companyId": companyId
        })
            .subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                sessionStorage.setItem('userId', res.userId);
                sessionStorage.setItem('isLogin', 'true');
                _this.CommonUtilService.isWelcomePopUpHidden = false;
                _this.router.navigate(["dashboard"]);
                _this.renderer.addClass(_this.document.body, 'embedded-body');
            }
            else {
                alert("Error: " + res.mssg);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    Registeration3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registeration3',
            template: __webpack_require__(/*! ./registeration3.component.html */ "./src/app/Shared/user-registeration/registeration3/registeration3.component.html"),
            styles: [__webpack_require__(/*! ./registeration3.component.css */ "./src/app/Shared/user-registeration/registeration3/registeration3.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_common_util_service__WEBPACK_IMPORTED_MODULE_5__["CommonUtilService"],
            Document, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], Registeration3Component);
    return Registeration3Component;
}());



/***/ })

}]);
//# sourceMappingURL=Shared-shared-module.js.map