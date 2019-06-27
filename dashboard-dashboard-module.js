(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/@angular/common/fesm5/http.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/fesm5/http.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license Angular v7.2.15
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
var HttpBackend = /** @class */ (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHeaders` class represents the header configuration options for an HTTP request.
 * Instances should be assumed immutable with lazy parsing.
 *
 * @publicApi
 */
var HttpHeaders = /** @class */ (function () {
    /**  Constructs a new HTTP header object with the given values.*/
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name_1 = line.slice(0, index);
                        var key = name_1.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a header by a given name.
     *
     * @param name The header name to check for existence.
     *
     * @returns Whether the header exits.
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns the first header value that matches a given name.
     *
     * @param name The header name to retrieve.
     *
     * @returns A string if the header exists, null otherwise
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers.
     *
     * @returns A list of header names.
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns a list of header values for a given header name.
     *
     * @param name The header name from which to retrieve the values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * Appends a new header value to the existing set of
     * header values.
     *
     * @param name The header name for which to append the values.
     *
     * @returns A clone of the HTTP header object with the value appended.
     */
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * Sets a header value for a given name. If the header name already exists,
     * its value is replaced with the given value.
     *
     * @param name The header name.
     * @param value Provides the value to set or overide for a given name.
     *
     * @returns A clone of the HTTP header object with the newly set header value.
     */
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * Deletes all header values for a given name.
     *
     * @param name The header name.
     * @param value The header values to delete for a given name.
     *
     * @returns A clone of the HTTP header object.
     */
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, other.headers.get(key));
            _this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    };
    HttpHeaders.prototype.clone = function (update) {
        var clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    HttpHeaders.prototype.applyUpdate = function (update) {
        var key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(value));
                this.headers.set(key, base);
                break;
            case 'd':
                var toDelete_1 = update.value;
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(_this.normalizedNames.get(key), _this.headers.get(key)); });
    };
    return HttpHeaders;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A class that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values. If you pass URL query parameters
 * without encoding, the query parameters can get misinterpreted at the receiving end.
 * Use the `HttpParameterCodec` class to encode and decode the query-string values.
 *
 * @publicApi
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    HttpUrlEncodingCodec.prototype.encodeKey = function (key) { return standardEncoding(key); };
    HttpUrlEncodingCodec.prototype.encodeValue = function (value) { return standardEncoding(value); };
    HttpUrlEncodingCodec.prototype.decodeKey = function (key) { return decodeURIComponent(key); };
    HttpUrlEncodingCodec.prototype.decodeValue = function (value) { return decodeURIComponent(value); };
    return HttpUrlEncodingCodec;
}());
function paramParser(rawParams, codec) {
    var map$$1 = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], 2), key = _a[0], val = _a[1];
            var list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable - all mutation operations return a new instance.
 *
 * @publicApi
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var value = options.fromObject[key];
                _this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return this.map.has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var res = this.map.get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return this.map.get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(this.map.keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var eKey = _this.encoder.encodeKey(key);
            return _this.map.get(key).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            .join('&');
    };
    HttpParams.prototype.clone = function (update) {
        var clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return _this.map.set(key, _this.cloneFrom.map.get(key)); });
            this.updates.forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var base = (update.op === 'a' ? _this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        _this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var base_1 = _this.map.get(update.param) || [];
                            var idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                _this.map.set(update.param, base_1);
                            }
                            else {
                                _this.map.delete(update.param);
                            }
                        }
                        else {
                            _this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    };
    return HttpParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var method = update.method || this.method;
        var url = update.url || this.url;
        var responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var headers = update.headers || this.headers;
        var params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, update.setHeaders[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, update.setParams[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
var HttpResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 *
 * @see [HTTP Guide](guide/http)
 *
 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
* ```
 *
 * @publicApi
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            var headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            var params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (req) { return _this.handler.handle(req); }));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof HttpResponse; }));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.body; }));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, options);
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpHandler])
    ], HttpClient);
    return HttpClient;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * @publicApi
 */
var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NoopInterceptor);
    return NoopInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
var JsonpCallbackContext = /** @class */ (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * @publicApi
 */
var JsonpClientBackend = /** @class */ (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var callback = _this.nextCallback();
            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var body = null;
            // Whether the response callback has been called.
            var finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpCallbackContext, Object])
    ], JsonpClientBackend);
    return JsonpClientBackend;
}());
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @publicApi
 */
var JsonpInterceptor = /** @class */ (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpClientBackend])
    ], JsonpInterceptor);
    return JsonpInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for @{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 *
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * @publicApi
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var status = xhr.status === 1223 ? 204 : xhr.status;
                var statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error: error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var onError = function (error) {
                var url = partialFromXhr().url;
                var res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [XhrFactory])
    ], HttpXhrBackend);
    return HttpXhrBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
var HttpXsrfTokenExtractor = /** @class */ (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = /** @class */ (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_COOKIE_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, String, String])
    ], HttpXsrfCookieExtractor);
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = /** @class */ (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_HEADER_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpXsrfTokenExtractor, String])
    ], HttpXsrfInterceptor);
    return HttpXsrfInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    HttpInterceptingHandler.prototype.handle = function (req) {
        if (this.chain === null) {
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpBackend, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], HttpInterceptingHandler);
    return HttpInterceptingHandler;
}());
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    HttpClientXsrfModule_1 = HttpClientXsrfModule;
    /**
     * Disable the default XSRF protection.
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    var HttpClientXsrfModule_1;
    HttpClientXsrfModule = HttpClientXsrfModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                HttpXsrfInterceptor,
                { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
            ],
        })
    ], HttpClientXsrfModule);
    return HttpClientXsrfModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
    HttpClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            /**
             * Optional configuration for XSRF protection.
             */
            imports: [
                HttpClientXsrfModule.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                }),
            ],
            /**
             * Configures the [dependency injector](guide/glossary#injector) where it is imported
             * with supporting services for HTTP communications.
             */
            providers: [
                HttpClient,
                { provide: HttpHandler, useClass: HttpInterceptingHandler },
                HttpXhrBackend,
                { provide: HttpBackend, useExisting: HttpXhrBackend },
                BrowserXhr,
                { provide: XhrFactory, useExisting: BrowserXhr },
            ],
        })
    ], HttpClientModule);
    return HttpClientModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                JsonpClientBackend,
                { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
            ],
        })
    ], HttpClientJsonpModule);
    return HttpClientJsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./src/app/dashboard/all-student/all-student.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/all-student/all-student.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container{\n    max-height: 300px;\n    overflow: auto;\n}\n\n.students-table{\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 100%;\n    border: 1px solid #DCE2E5;\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.15);\n}\n\n.students-table>thead>tr>th{\n    color: #4a7080;\n    font-size:12px;\n    padding: 10px 24px;\n    background: #f3f6f9;\n    text-align: left;\n      width:100px;\n    border-bottom:1px solid #DCE2E5;\n}\n\n.students-table>tbody>tr>td{\n    font-size:12px;\n    padding: 10px 24px;\n     width:100px;\n    border-bottom:1px solid #DCE2E5;\n}\n\n.students-table>tbody>tr>td:last-child{\n  text-align: right;\n}\n\n.students-table>tbody>tr>td>i{\n    margin: 0 10px 0 0;\n}\n\n.attendance{\n    font-size: 12px;\n    padding: 5px 10px;\n    background: #DCEAEF;\n    border-radius:10px;\n    color:#002D3F;\n}\n\n.input-container{\n    position: relative;\n}\n\n.input-container:after{\n    content: \"\\e906\";\n    position: absolute;\n    top:10px;\n    right:10px;\n    font-family: 'classroom';\n    font-size: 16px;\n    color: #808d92;\n}\n\n.input-field{\n    padding: 10px;\n    border-radius:2px;\n    box-shadow: none;\n    border: 1px solid #DCE2E5;\n    width: 225px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FsbC1zdHVkZW50L2FsbC1zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO01BQ2QsV0FBVztJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7S0FDakIsV0FBVztJQUNaLCtCQUErQjtBQUNuQzs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2FsbC1zdHVkZW50L2FsbC1zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGFpbmVye1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc3R1ZGVudHMtdGFibGV7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRENFMkU1O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwwLDAsMC4xNSk7XG59XG5cbi5zdHVkZW50cy10YWJsZT50aGVhZD50cj50aHtcbiAgICBjb2xvcjogIzRhNzA4MDtcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgYmFja2dyb3VuZDogI2YzZjZmOTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6MTAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RDRTJFNTtcbn1cblxuLnN0dWRlbnRzLXRhYmxlPnRib2R5PnRyPnRke1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICAgd2lkdGg6MTAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RDRTJFNTtcbn1cbi5zdHVkZW50cy10YWJsZT50Ym9keT50cj50ZDpsYXN0LWNoaWxke1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnN0dWRlbnRzLXRhYmxlPnRib2R5PnRyPnRkPml7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xufVxuXG4uYXR0ZW5kYW5jZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0RDRUFFRjtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgY29sb3I6IzAwMkQzRjtcbn1cblxuLmlucHV0LWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dC1jb250YWluZXI6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcXGU5MDZcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjEwcHg7XG4gICAgcmlnaHQ6MTBweDtcbiAgICBmb250LWZhbWlseTogJ2NsYXNzcm9vbSc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjODA4ZDkyO1xufVxuXG4uaW5wdXQtZmllbGR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOjJweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0UyRTU7XG4gICAgd2lkdGg6IDIyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/all-student/all-student.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/all-student/all-student.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-students-container\">\n  <div class=\"data-content\">\n    <div class=\"section-header\">\n      <div class=\"flex align-items-center\">\n        <h6>Fail Students ({{failStudents.length}})</h6>\n        <a href=\"\">View all</a>\n      </div>\n      <div class=\"input-container\">\n        <input type=\"text\" class=\"input-field\" placeholder=\"Search By Name, ID\"\n          (keyup)=\"search('failStudents',$event.target.value)\">\n      </div>\n    </div>\n    <div class=\"table-container\">\n      <table class=\"students-table\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Severity</th>\n            <th>Name</th>\n            <th colspan=\"3\"></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"failStudentsSearchResults.length\">\n          <tr *ngFor=\"let failedStudent of failStudentsSearchResults\">\n            <td>{{failedStudent.id}}</td>\n            <td [ngClass]=\"{'fail-warning': failedStudent.severity == 'Warning', 'fail-critical': failedStudent.severity == 'Critical'}\"><i [ngClass]=\"{'cr-warning': failedStudent.severity == 'Warning', 'cr-critical': failedStudent.severity == 'Critical'}\"></i>{{failedStudent.severity}}</td>\n            <td>{{failedStudent.name}}</td>\n            <td colspan=\"3\"> <span class=\"attendance\" *ngIf=\"failedStudent.lowAttendance\">Low Attendance</span> </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"!failStudentsSearchResults.length\">\n          <tr>\n            <td colspan=\"6\"><div class=\"text-center\">No Results Found!!</div> </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"data-content\">\n    <div class=\"section-header\">\n      <div class=\"flex align-items-center\">\n        <h6>Pass Students ({{passStudents.length}})</h6>\n        <a href=\"\">View all</a>\n      </div>\n      <div class=\"input-container\">\n        <input type=\"text\" class=\"input-field\" placeholder=\"Search By Name, ID\"\n          (keyup)=\"search('passStudents',$event.target.value)\">\n      </div>\n    </div>\n    <div class=\"table-container\">\n      <table class=\"students-table\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Severity</th>\n            <th>Name</th>\n            <th colspan=\"3\"></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"passStudentsSearchResults.length\">\n          <tr *ngFor=\"let passedStudent of passStudentsSearchResults\">\n            <td>{{passedStudent.id}}</td>\n            <td><i class=\"cr-info\"></i>{{passedStudent.severity}}</td>\n            <td>{{passedStudent.name}}</td>\n            <td colspan=\"3\"> <span class=\"attendance\" *ngIf=\"passedStudent.lowAttendance\">Low Attendance</span> </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"!passStudentsSearchResults.length\">\n            <tr>\n              <td colspan=\"6\"><div class=\"text-center\">No Results Found!!</div></td>\n            </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/all-student/all-student.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/all-student/all-student.component.ts ***!
  \****************************************************************/
/*! exports provided: AllStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllStudentComponent", function() { return AllStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/data.service */ "./src/app/dashboard/utility/data.service.ts");



var AllStudentComponent = /** @class */ (function () {
    function AllStudentComponent(dataService) {
        this.dataService = dataService;
        this.failStudents = [];
        this.failStudentsSearchResults = [];
        this.passStudents = [];
        this.passStudentsSearchResults = [];
    }
    AllStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.allFailStudents$.subscribe(function (data) {
            _this.failStudents = data;
            _this.failStudentsSearchResults = data;
        });
        this.dataService.allPassStudents$.subscribe(function (data) {
            _this.passStudents = data;
            _this.passStudentsSearchResults = data;
        });
    };
    AllStudentComponent.prototype.search = function (record, queryString) {
        if (record === "failStudents") {
            this.failStudentsSearchResults = this.failStudents.filter(function (obj) {
                return obj.id == queryString || obj.name.toLowerCase().includes(queryString.toLowerCase());
            });
        }
        else {
            this.passStudentsSearchResults = this.passStudents.filter(function (obj) {
                return obj.id == queryString || obj.name.toLowerCase().includes(queryString.toLowerCase());
            });
        }
    };
    AllStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-student',
            template: __webpack_require__(/*! ./all-student.component.html */ "./src/app/dashboard/all-student/all-student.component.html"),
            styles: [__webpack_require__(/*! ./all-student.component.css */ "./src/app/dashboard/all-student/all-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utility_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AllStudentComponent);
    return AllStudentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/common/dashboard-api.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/common/dashboard-api.service.ts ***!
  \***********************************************************/
/*! exports provided: DashboardApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardApiService", function() { return DashboardApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DashboardApiService = /** @class */ (function () {
    function DashboardApiService(http) {
        this.http = http;
        this.getAllStudentUrl = "https://my-json-server.typicode.com/uxrtest/demo/db";
    }
    DashboardApiService.prototype.getAllStudents = function () {
        var fullUrl = "" + this.getAllStudentUrl;
        return this.http.get(fullUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    DashboardApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DashboardApiService);
    return DashboardApiService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _all_student_all_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-student/all-student.component */ "./src/app/dashboard/all-student/all-student.component.ts");
/* harmony import */ var _fail_student_fail_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fail-student/fail-student.component */ "./src/app/dashboard/fail-student/fail-student.component.ts");
/* harmony import */ var _pass_student_pass_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pass-student/pass-student.component */ "./src/app/dashboard/pass-student/pass-student.component.ts");







var routes = [
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], children: [
            { path: '', pathMatch: 'full', component: _all_student_all_student_component__WEBPACK_IMPORTED_MODULE_4__["AllStudentComponent"] },
            { path: 'passtudent', component: _pass_student_pass_student_component__WEBPACK_IMPORTED_MODULE_6__["PassStudentComponent"] },
            { path: 'failstudent', component: _fail_student_fail_student_component__WEBPACK_IMPORTED_MODULE_5__["FailStudentComponent"] },
            { path: 'allstudent', component: _all_student_all_student_component__WEBPACK_IMPORTED_MODULE_4__["AllStudentComponent"] },
        ]
    },
    { path: '**', redirectTo: 'dashboard' },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _pass_student_pass_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pass-student/pass-student.component */ "./src/app/dashboard/pass-student/pass-student.component.ts");
/* harmony import */ var _fail_student_fail_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fail-student/fail-student.component */ "./src/app/dashboard/fail-student/fail-student.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_dashboard_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/dashboard-api.service */ "./src/app/dashboard/common/dashboard-api.service.ts");
/* harmony import */ var _all_student_all_student_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-student/all-student.component */ "./src/app/dashboard/all-student/all-student.component.ts");










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _pass_student_pass_student_component__WEBPACK_IMPORTED_MODULE_4__["PassStudentComponent"], _fail_student_fail_student_component__WEBPACK_IMPORTED_MODULE_5__["FailStudentComponent"], _all_student_all_student_component__WEBPACK_IMPORTED_MODULE_9__["AllStudentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [
                _common_dashboard_api_service__WEBPACK_IMPORTED_MODULE_8__["DashboardApiService"]
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  padding: 100px 340px 60px 80px;\n  background: #fff;\n  height: 100%;\n  overflow: auto;\n}\n.students-data {\n  border: 1px solid #dce2e5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.sdata {\n  padding: 16px;\n  border-right: 1px solid #dce2e5;\n  width: 33.33%;\n  height: 140px;\n  border-bottom: 2px solid transparent;\n  text-align: center;\n  position: relative;\n}\n.sdata h5 i {\n    margin: 0 0 0 10px;\n}\n.sdata:last-child {\n  border-right: none;\n}\n.sdata.active {\n  background: #f5fcfc;\n  border-bottom-color: #00bcbc;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);\n}\n.count-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 30px 0 0;\n}\n.count-list li {\n  text-align: center;\n  font-size: 12px;\n  color: #49535e;\n  padding: 0 30px;\n}\n.count-list li .count {\n  font-size: 24px;\n  color: #3b6475;\n  display: block;\n  margin: 0 0 10px;\n}\n.chart-data {\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  right: 20px;\n  z-index: 99;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  font-size: 12px;\n}\n.critical-legend {\n  color: #dd3131;\n  font-family: \"OpenSans-SemiBold\";\n}\n.warning-legend {\n  color: #e29619;\n  font-family: \"OpenSans-SemiBold\";\n}\n.pass-legend {\n  color:#78B5D9;\n  font-family: \"OpenSans-SemiBold\";\n}\n.distinction-legend {\n  color:#009CDB;\n  font-family: \"OpenSans-SemiBold\";\n}\n.chart-data li {\n  width:30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDJDQUEyQztBQUM3QztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDEwMHB4IDM0MHB4IDYwcHggODBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5zdHVkZW50cy1kYXRhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTJlNTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zZGF0YSB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkY2UyZTU7XG4gIHdpZHRoOiAzMy4zMyU7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2RhdGEgaDUgaSB7XG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuLnNkYXRhOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5zZGF0YS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjVmY2ZjO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDBiY2JjO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uY291bnQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAzMHB4IDAgMDtcbn1cblxuLmNvdW50LWxpc3QgbGkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0OTUzNWU7XG4gIHBhZGRpbmc6IDAgMzBweDtcbn1cbi5jb3VudC1saXN0IGxpIC5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzYjY0NzU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuXG4uY2hhcnQtZGF0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiA5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY3JpdGljYWwtbGVnZW5kIHtcbiAgY29sb3I6ICNkZDMxMzE7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zLVNlbWlCb2xkXCI7XG59XG4ud2FybmluZy1sZWdlbmQge1xuICBjb2xvcjogI2UyOTYxOTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaUJvbGRcIjtcbn1cbi5wYXNzLWxlZ2VuZCB7XG4gIGNvbG9yOiM3OEI1RDk7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zLVNlbWlCb2xkXCI7XG59XG4uZGlzdGluY3Rpb24tbGVnZW5kIHtcbiAgY29sb3I6IzAwOUNEQjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaUJvbGRcIjtcbn1cblxuLmNoYXJ0LWRhdGEgbGkge1xuICB3aWR0aDozMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"students-data\">\n    <div class=\"all sdata active\" [ngClass]=\"{'active': (router.url === '/dashboard/allstudent'||router.url === '/dashboard')}\" (click)=\"navigateToUrl('allstudent')\">\n      <h5 class=\"text-center\">All Students</h5>\n      <ul class=\"count-list\">\n        <li>\n          <span class=\"count\">{{allStudentsData.length}}</span>\n          Total\n        </li>\n        <li>\n          <span class=\"count\">{{allFailStudents.length}}</span>\n          Fail\n        </li>\n        <li>\n          <span class=\"count\">{{allPassStudents.length}}</span>\n          Pass\n        </li>\n      </ul>\n    </div>\n    <div class=\"fail sdata\" [ngClass]=\"{'active': router.url === '/dashboard/failstudent'}\" (click)=\"navigateToUrl('failstudent')\">\n      <h5 class=\"text-center\">Fail <i class=\"cr-help\"></i></h5>\n      <div id=\"fail-chart-container\" style=\"width:250px; height:120px; position: relative;margin: 0 auto\">\n      \n      </div>\n      <ul class=\"chart-data\">\n        <li class=\"warning-legend\">{{studentWarningCount}} Warning</li>\n        <li class=\"critical-legend\">{{studentCriticalCount}} Critical</li>\n      </ul>\n    </div>\n    <div class=\"pass sdata\" [ngClass]=\"{'active': router.url === '/dashboard/passtudent'}\" (click)=\"navigateToUrl('passtudent')\">\n      <h5 class=\"text-center\">Pass <i class=\"cr-help\"></i></h5>\n      <div id=\"pass-chart-container\" style=\"width:250px; height:120px; position: relative;margin: 0 auto\"></div>\n      <ul class=\"chart-data\">\n        <li class=\"pass-legend\">{{studentPassCount}} Other</li>\n        <li class=\"distinction-legend\">{{studentDistinctionCount}} Distinction</li>\n      </ul>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data.service */ "./src/app/dashboard/utility/data.service.ts");
/* harmony import */ var _common_dashboard_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/dashboard-api.service */ "./src/app/dashboard/common/dashboard-api.service.ts");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(apiService, dataService, router) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.router = router;
        this.allStudentsData = [];
        this.allFailStudents = [];
        this.studentWarningCount = 0;
        this.studentCriticalCount = 0;
        this.allPassStudents = [];
        this.studentDistinctionCount = 0;
        this.studentPassCount = 0;
        this.failDonutOptions = {
            chart: {
                backgroundColor: 'transparent',
                margin: [0, 0, 0, 0],
                spacingTop: 0,
                spacingBottom: 0,
                spacingLeft: 0,
                spacingRight: 0,
            },
            colors: ["#DD3131", "#E29619"],
            credits: {
                enabled: false
            },
            title: {
                text: "",
                align: 'center',
                verticalAlign: 'middle',
                y: 0,
                style: { 'color': '#3B6475', 'fontSize': '24px', 'font-family': 'OpenSans-Regular' }
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    states: {
                        hover: {
                            enabled: false
                        },
                        inactive: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    center: ['50%', '40%'],
                    size: '70%'
                }
            },
            series: [{
                    type: 'pie',
                    innerSize: '80%',
                    data: [0, 0]
                }]
        };
        this.passDonutOptions = {
            chart: {
                backgroundColor: 'transparent',
                margin: [0, 0, 0, 0],
                spacingTop: 0,
                spacingBottom: 0,
                spacingLeft: 0,
                spacingRight: 0,
            },
            colors: ["#009CDB", "#78B5D9"],
            credits: {
                enabled: false
            },
            title: {
                text: "",
                align: 'center',
                verticalAlign: 'middle',
                y: 0,
                style: { 'color': '#3B6475', 'fontSize': '24px', 'font-family': 'OpenSans-Regular' }
            },
            tooltip: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    states: {
                        hover: {
                            enabled: false
                        },
                        inactive: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    center: ['50%', '40%'],
                    size: '70%'
                }
            },
            series: [{
                    type: 'pie',
                    innerSize: '80%',
                    data: [0, 0]
                }]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllStudents().subscribe(function (data) {
            _this.allStudentsData = data.students;
            _this.dataService.allStudentsData$.next(_this.allStudentsData);
            _this.getFailStudent();
            _this.getLowAttendance();
        });
    };
    DashboardComponent.prototype.getFailStudent = function () {
        var _this = this;
        this.allStudentsData.map(function (student) {
            var counter = 0;
            for (var property in student.marks) {
                if (student.marks.hasOwnProperty(property)) {
                    if (student.marks[property] < 35) {
                        counter++;
                    }
                }
            }
            if (counter === 1) {
                student.severity = "Warning";
                _this.studentWarningCount++;
                _this.allFailStudents.push(student);
            }
            else if (counter > 1) {
                student.severity = "Critical";
                _this.studentCriticalCount++;
                _this.allFailStudents.push(student);
            }
        });
        this.failDonutOptions.title.text = this.allFailStudents.length;
        this.failDonutOptions.series[0].data = [this.studentCriticalCount, this.studentWarningCount];
        highcharts__WEBPACK_IMPORTED_MODULE_3__["chart"]('fail-chart-container', this.failDonutOptions);
        this.dataService.allFailStudents$.next(this.allFailStudents);
        this.getPassStudent();
    };
    DashboardComponent.prototype.getPassStudent = function () {
        var _this = this;
        var allUniquePassStudent = this.allStudentsData.filter(function (obj) {
            return !_this.allFailStudents.some(function (obj2) {
                return obj.id == obj2.id;
            });
        });
        allUniquePassStudent.map(function (passStudent) {
            var total = 0;
            for (var subject in passStudent.marks) {
                if (passStudent.marks.hasOwnProperty(subject)) {
                    total += passStudent.marks[subject];
                }
            }
            if ((total / Object.keys(passStudent.marks).length) > 75) {
                passStudent.severity = "Distinction";
                _this.studentDistinctionCount++;
            }
            else {
                passStudent.severity = "Pass";
                _this.studentPassCount++;
            }
        });
        this.allPassStudents = allUniquePassStudent.slice();
        this.dataService.allPassStudents$.next(this.allPassStudents);
        this.passDonutOptions.title.text = this.allPassStudents.length;
        this.passDonutOptions.series[0].data = [this.studentDistinctionCount, this.studentPassCount];
        highcharts__WEBPACK_IMPORTED_MODULE_3__["chart"]('pass-chart-container', this.passDonutOptions);
    };
    DashboardComponent.prototype.getLowAttendance = function () {
        this.allStudentsData.map(function (student) {
            var attendence = (Object.keys(student.attendance).map(function (key) { return Number(student.attendance[key].replace("%", "")); }).reduce(function (previous, current) { return previous + current; }) / Object.keys(student.attendance).length);
            if (attendence < 60) {
                student["lowAttendance"] = String(attendence);
            }
        });
    };
    DashboardComponent.prototype.navigateToUrl = function (path) {
        var url = "/dashboard/" + path;
        this.router.navigateByUrl(url);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_dashboard_api_service__WEBPACK_IMPORTED_MODULE_5__["DashboardApiService"], _utility_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/fail-student/fail-student.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/fail-student/fail-student.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container{\n    height: calc(100% - 220px);\n    overflow: auto;\n}\n\n.students-table{\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 100%;\n    border: 1px solid #DCE2E5;\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.15);\n}\n\n.students-table>thead>tr>th{\n    color: #4a7080;\n    font-size:12px;\n   padding: 10px 24px;\n    background: #f3f6f9;\n    text-align: left;\n    border-bottom:1px solid #DCE2E5;\n     width:100px;\n}\n\n.students-table>tbody>tr>td{\n    font-size:12px;\n     padding: 10px 24px;\n     width:100px;\n    border-bottom:1px solid #DCE2E5;\n}\n\n.students-table>tbody>tr>td:last-child{\n  text-align: right;\n}\n\n.students-table>tbody>tr>td>i{\n    margin: 0 10px 0 0;\n}\n\n.attendance{\n    font-size: 12px;\n    padding: 5px 10px;\n    background: #DCEAEF;\n    border-radius:10px;\n    color:#002D3F;\n\n}\n\n.input-container{\n    position: relative;\n}\n\n.input-container:after{\n    content: \"\\e906\";\n    position: absolute;\n    top:10px;\n    right:10px;\n    font-family: 'classroom';\n    font-size: 16px;\n    color: #808d92;\n}\n\n.input-field{\n    padding: 10px;\n    border-radius:2px;\n    box-shadow: none;\n    border: 1px solid #DCE2E5;\n    width: 225px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZhaWwtc3R1ZGVudC9mYWlsLXN0dWRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0dBQ2Ysa0JBQWtCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsK0JBQStCO0tBQzlCLFdBQVc7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0tBQ2Isa0JBQWtCO0tBQ2xCLFdBQVc7SUFDWiwrQkFBK0I7QUFDbkM7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZmFpbC1zdHVkZW50L2ZhaWwtc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIyMHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnN0dWRlbnRzLXRhYmxle1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RDRTJFNTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsMCwwLDAuMTUpO1xufVxuXG4uc3R1ZGVudHMtdGFibGU+dGhlYWQ+dHI+dGh7XG4gICAgY29sb3I6ICM0YTcwODA7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgYmFja2dyb3VuZDogI2YzZjZmOTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNEQ0UyRTU7XG4gICAgIHdpZHRoOjEwMHB4O1xufVxuXG4uc3R1ZGVudHMtdGFibGU+dGJvZHk+dHI+dGR7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICAgd2lkdGg6MTAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RDRTJFNTtcbn1cbi5zdHVkZW50cy10YWJsZT50Ym9keT50cj50ZDpsYXN0LWNoaWxke1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zdHVkZW50cy10YWJsZT50Ym9keT50cj50ZD5pe1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbn1cbi5hdHRlbmRhbmNle1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRENFQUVGO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBjb2xvcjojMDAyRDNGO1xuXG59XG5cbi5pbnB1dC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5wdXQtY29udGFpbmVyOmFmdGVye1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA2XCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDoxMHB4O1xuICAgIHJpZ2h0OjEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdjbGFzc3Jvb20nO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzgwOGQ5Mjtcbn1cblxuLmlucHV0LWZpZWxke1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoycHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRENFMkU1O1xuICAgIHdpZHRoOiAyMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/fail-student/fail-student.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/fail-student/fail-student.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data-content\">\n    <div class=\"section-header\">\n      <div class=\"flex align-items-center\">\n        <h5>Fail Students ({{failStudents.length}})</h5>\n        <a href=\"\">View all</a>\n      </div>\n      <div class=\"input-container\">\n        <input type=\"text\" class=\"input-field\" placeholder=\"Search By Name, ID\"\n          (keyup)=\"search($event.target.value)\">\n      </div>\n    </div>\n    <div class=\"table-container\">\n      <table class=\"students-table\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Severity</th>\n            <th>Name</th>\n            <th colspan=\"3\"></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"failStudentsSearchResults.length\">\n          <tr *ngFor=\"let failedStudent of failStudentsSearchResults\">\n            <td>{{failedStudent.id}}</td>\n            <td [ngClass]=\"{'fail-warning': failedStudent.severity == 'Warning', 'fail-critical': failedStudent.severity == 'Critical'}\"><i [ngClass]=\"{'cr-warning': failedStudent.severity == 'Warning', 'cr-critical': failedStudent.severity == 'Critical'}\"></i>{{failedStudent.severity}}</td>\n            <td>{{failedStudent.name}}</td>\n            <td colspan=\"3\"> <span class=\"attendance\" *ngIf=\"failedStudent.lowAttendance\">Low Attendance</span> </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"!failStudentsSearchResults.length\">\n          <tr>\n            <td colspan=\"6\"><div class=\"text-center\">No Results Found!!</div> </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/fail-student/fail-student.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/fail-student/fail-student.component.ts ***!
  \******************************************************************/
/*! exports provided: FailStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailStudentComponent", function() { return FailStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/data.service */ "./src/app/dashboard/utility/data.service.ts");



var FailStudentComponent = /** @class */ (function () {
    function FailStudentComponent(dataService) {
        this.dataService = dataService;
        this.failStudents = [];
        this.failStudentsSearchResults = [];
    }
    FailStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.allFailStudents$.subscribe(function (data) {
            _this.failStudents = data;
            _this.failStudentsSearchResults = data;
        });
    };
    FailStudentComponent.prototype.search = function (queryString) {
        this.failStudentsSearchResults = this.failStudents.filter(function (obj) {
            return obj.id == queryString || obj.name.toLowerCase().includes(queryString.toLowerCase());
        });
    };
    FailStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fail-student',
            template: __webpack_require__(/*! ./fail-student.component.html */ "./src/app/dashboard/fail-student/fail-student.component.html"),
            styles: [__webpack_require__(/*! ./fail-student.component.css */ "./src/app/dashboard/fail-student/fail-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utility_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], FailStudentComponent);
    return FailStudentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/pass-student/pass-student.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/pass-student/pass-student.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container{\n    height: calc(100% - 220px);\n    overflow: auto;\n}\n\n.students-table{\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 100%;\n    border: 1px solid #DCE2E5;\n    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.15);\n}\n\n.students-table>thead>tr>th{\n    color: #4a7080;\n    font-size:12px;\n    padding: 10px 24px;\n    background: #f3f6f9;\n    text-align: left;\n    width:100px;\n    border-bottom:1px solid #DCE2E5;\n}\n\n.students-table>tbody>tr>td{\n    font-size:12px;\n     padding: 10px 24px;\n    width: 100px;\n    border-bottom:1px solid #DCE2E5;\n}\n\n.students-table>tbody>tr>td:last-child{\n  text-align: right;\n}\n\n.students-table>tbody>tr>td>i{\n    margin: 0 10px 0 0;\n}\n\n.attendance{\n    font-size: 12px;\n    padding: 5px 10px;\n    background: #DCEAEF;\n    border-radius:10px;\n    color:#002D3F;\n}\n\n.input-container{\n    position: relative;\n}\n\n.input-container:after{\n    content: \"\\e906\";\n    position: absolute;\n    top:10px;\n    right:10px;\n    font-family: 'classroom';\n    font-size: 16px;\n    color: #808d92;\n}\n\n.input-field{\n    padding: 10px;\n    border-radius:2px;\n    box-shadow: none;\n    border: 1px solid #DCE2E5;\n    width: 225px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Bhc3Mtc3R1ZGVudC9wYXNzLXN0dWRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7S0FDYixrQkFBa0I7SUFDbkIsWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3Bhc3Mtc3R1ZGVudC9wYXNzLXN0dWRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMjBweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zdHVkZW50cy10YWJsZXtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0UyRTU7XG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcbn1cblxuLnN0dWRlbnRzLXRhYmxlPnRoZWFkPnRyPnRoe1xuICAgIGNvbG9yOiAjNGE3MDgwO1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmNmY5O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RDRTJFNTtcbn1cblxuLnN0dWRlbnRzLXRhYmxlPnRib2R5PnRyPnRke1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNEQ0UyRTU7XG59XG4uc3R1ZGVudHMtdGFibGU+dGJvZHk+dHI+dGQ6bGFzdC1jaGlsZHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc3R1ZGVudHMtdGFibGU+dGJvZHk+dHI+dGQ+aXtcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG5cbi5hdHRlbmRhbmNle1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRENFQUVGO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBjb2xvcjojMDAyRDNGO1xufVxuXG4uaW5wdXQtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHV0LWNvbnRhaW5lcjphZnRlcntcbiAgICBjb250ZW50OiBcIlxcZTkwNlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MTBweDtcbiAgICByaWdodDoxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnY2xhc3Nyb29tJztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM4MDhkOTI7XG59XG5cbi5pbnB1dC1maWVsZHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RDRTJFNTtcbiAgICB3aWR0aDogMjI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/pass-student/pass-student.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/pass-student/pass-student.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data-content\">\n    <div class=\"section-header\">\n      <div class=\"flex align-items-center\">\n        <h5>Pass Students ({{passStudents.length}})</h5>\n        <a href=\"\">View all</a>\n      </div>\n      <div class=\"input-container\">\n        <input type=\"text\" class=\"input-field\" placeholder=\"Search By Name, ID\"\n          (keyup)=\"search($event.target.value)\">\n      </div>\n    </div>\n    <div class=\"table-container\">\n      <table class=\"students-table\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Severity</th>\n            <th>Name</th>\n            <th colspan=\"3\"></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"passStudentsSearchResults.length\">\n          <tr *ngFor=\"let passedStudent of passStudentsSearchResults\">\n            <td>{{passedStudent.id}}</td>\n            <td><i class=\"cr-info\"></i>{{passedStudent.severity}}</td>\n            <td>{{passedStudent.name}}</td>\n            <td colspan=\"3\"> <span class=\"attendance\" *ngIf=\"passedStudent.lowAttendance\">Low Attendance</span> </td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"!passStudentsSearchResults.length\">\n            <tr>\n              <td colspan=\"6\"><div class=\"text-center\">No Results Found!!</div> </td>\n            </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/pass-student/pass-student.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/pass-student/pass-student.component.ts ***!
  \******************************************************************/
/*! exports provided: PassStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassStudentComponent", function() { return PassStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/data.service */ "./src/app/dashboard/utility/data.service.ts");



var PassStudentComponent = /** @class */ (function () {
    function PassStudentComponent(dataService) {
        this.dataService = dataService;
        this.passStudents = [];
        this.passStudentsSearchResults = [];
    }
    PassStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.allPassStudents$.subscribe(function (data) {
            _this.passStudents = data;
            _this.passStudentsSearchResults = data;
        });
    };
    PassStudentComponent.prototype.search = function (queryString) {
        this.passStudentsSearchResults = this.passStudents.filter(function (obj) {
            return obj.id == queryString || obj.name.toLowerCase().includes(queryString.toLowerCase());
        });
    };
    PassStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pass-student',
            template: __webpack_require__(/*! ./pass-student.component.html */ "./src/app/dashboard/pass-student/pass-student.component.html"),
            styles: [__webpack_require__(/*! ./pass-student.component.css */ "./src/app/dashboard/pass-student/pass-student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utility_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PassStudentComponent);
    return PassStudentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map