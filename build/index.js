var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_server = require("react-dom/server");

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache")), defaultCache = createEmotionCache();
function createEmotionCache() {
  return (0, import_cache.default)({ key: "cha" });
}

// app/entry.server.tsx
var import_create_instance = __toESM(require("@emotion/server/create-instance"));

// app/context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), ClientStyleContext = (0, import_react.createContext)(
  null
);

// app/entry.server.tsx
var import_react3 = require("@emotion/react"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.RemixServer, { context: remixContext, url: request.url }) }) })
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.RemixServer, { context: remixContext, url: request.url }) }) })
  );
  return responseHeaders.set("Content-Type", "text/html"), new import_node.Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-YAWV5O73.css";

// app/root.tsx
var import_react9 = require("react"), import_react10 = require("@emotion/react"), import_react11 = require("@chakra-ui/react");

// app/context/AuthProvider.tsx
var import_react4 = __toESM(require("react")), import_jsx_runtime2 = require("react/jsx-runtime"), AuthContext = import_react4.default.createContext(null);
AuthContext.displayName = "AuthContext";
function AuthProvider({
  user,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AuthContext.Provider, { value: user, ...props });
}
var useAuthProvider = () => {
  let context = import_react4.default.useContext(AuthContext);
  if (!context)
    throw new Error("useAuthProvider must be used within a AuthProvider");
  return context;
}, AuthProvider_default = AuthProvider;

// app/utils/session.server.ts
var import_node3 = require("@remix-run/node");

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/utils.js
var { toString } = Object.prototype, { getPrototypeOf } = Object, kindOf = ((cache) => (thing) => {
  let str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kindOfTest = (type) => (type = type.toLowerCase(), (thing) => kindOf(thing) === type), typeOfTest = (type) => (thing) => typeof thing === type, { isArray } = Array, isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? result = ArrayBuffer.isView(val) : result = val && val.buffer && isArrayBuffer(val.buffer), result;
}
var isString = typeOfTest("string"), isFunction = typeOfTest("function"), isNumber = typeOfTest("number"), isObject = (thing) => thing !== null && typeof thing == "object", isBoolean = (thing) => thing === !0 || thing === !1, isPlainObject = (val) => {
  if (kindOf(val) !== "object")
    return !1;
  let prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}, isDate = kindOfTest("Date"), isFile = kindOfTest("File"), isBlob = kindOfTest("Blob"), isFileList = kindOfTest("FileList"), isStream = (val) => isObject(val) && isFunction(val.pipe), isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData == "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
}, isURLSearchParams = kindOfTest("URLSearchParams"), trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = !1 } = {}) {
  if (obj === null || typeof obj > "u")
    return;
  let i, l;
  if (typeof obj != "object" && (obj = [obj]), isArray(obj))
    for (i = 0, l = obj.length; i < l; i++)
      fn.call(null, obj[i], i, obj);
  else {
    let keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj), len = keys.length, key;
    for (i = 0; i < len; i++)
      key = keys[i], fn.call(null, obj[key], key, obj);
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  let keys = Object.keys(obj), i = keys.length, _key;
  for (; i-- > 0; )
    if (_key = keys[i], key === _key.toLowerCase())
      return _key;
  return null;
}
var _global = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  let { caseless } = isContextDefined(this) && this || {}, result = {}, assignValue = (val, key) => {
    let targetKey = caseless && findKey(result, key) || key;
    isPlainObject(result[targetKey]) && isPlainObject(val) ? result[targetKey] = merge(result[targetKey], val) : isPlainObject(val) ? result[targetKey] = merge({}, val) : isArray(val) ? result[targetKey] = val.slice() : result[targetKey] = val;
  };
  for (let i = 0, l = arguments.length; i < l; i++)
    arguments[i] && forEach(arguments[i], assignValue);
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => (forEach(b, (val, key) => {
  thisArg && isFunction(val) ? a[key] = bind(val, thisArg) : a[key] = val;
}, { allOwnKeys }), a), stripBOM = (content) => (content.charCodeAt(0) === 65279 && (content = content.slice(1)), content), inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2), constructor.prototype.constructor = constructor, Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  }), props && Object.assign(constructor.prototype, props);
}, toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props, i, prop, merged = {};
  if (destObj = destObj || {}, sourceObj == null)
    return destObj;
  do {
    for (props = Object.getOwnPropertyNames(sourceObj), i = props.length; i-- > 0; )
      prop = props[i], (!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop] && (destObj[prop] = sourceObj[prop], merged[prop] = !0);
    sourceObj = filter2 !== !1 && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}, endsWith = (str, searchString, position) => {
  str = String(str), (position === void 0 || position > str.length) && (position = str.length), position -= searchString.length;
  let lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}, toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  let arr = new Array(i);
  for (; i-- > 0; )
    arr[i] = thing[i];
  return arr;
}, isTypedArray = ((TypedArray) => (thing) => TypedArray && thing instanceof TypedArray)(typeof Uint8Array < "u" && getPrototypeOf(Uint8Array)), forEachEntry = (obj, fn) => {
  let iterator = (obj && obj[Symbol.iterator]).call(obj), result;
  for (; (result = iterator.next()) && !result.done; ) {
    let pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}, matchAll = (regExp, str) => {
  let matches, arr = [];
  for (; (matches = regExp.exec(str)) !== null; )
    arr.push(matches);
  return arr;
}, isHTMLForm = kindOfTest("HTMLFormElement"), toCamelCase = (str) => str.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(m, p1, p2) {
    return p1.toUpperCase() + p2;
  }
), hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype), isRegExp = kindOfTest("RegExp"), reduceDescriptors = (obj, reducer) => {
  let descriptors2 = Object.getOwnPropertyDescriptors(obj), reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    (ret = reducer(descriptor, name, obj)) !== !1 && (reducedDescriptors[name] = ret || descriptor);
  }), Object.defineProperties(obj, reducedDescriptors);
}, freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1)
      return !1;
    let value = obj[name];
    if (isFunction(value)) {
      if (descriptor.enumerable = !1, "writable" in descriptor) {
        descriptor.writable = !1;
        return;
      }
      descriptor.set || (descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      });
    }
  });
}, toObjectSet = (arrayOrString, delimiter) => {
  let obj = {}, define = (arr) => {
    arr.forEach((value) => {
      obj[value] = !0;
    });
  };
  return isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter)), obj;
}, noop = () => {
}, toFiniteNumber = (value, defaultValue) => (value = +value, Number.isFinite(value) ? value : defaultValue), ALPHA = "abcdefghijklmnopqrstuvwxyz", DIGIT = "0123456789", ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}, generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "", { length } = alphabet;
  for (; size--; )
    str += alphabet[Math.random() * length | 0];
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  let stack = new Array(10), visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0)
        return;
      if (!("toJSON" in source)) {
        stack[i] = source;
        let target = isArray(source) ? [] : {};
        return forEach(source, (value, key) => {
          let reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        }), stack[i] = void 0, target;
      }
    }
    return source;
  };
  return visit(obj, 0);
}, isAsyncFn = kindOfTest("AsyncFunction"), isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch), utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = message, this.name = "AxiosError", code && (this.code = code), config && (this.config = config), request && (this.request = request), response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype, descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: !0 });
AxiosError.from = (error, code, config, request, response, customProps) => {
  let axiosError = Object.create(prototype);
  return utils_default.toFlatObject(error, axiosError, function(obj) {
    return obj !== Error.prototype;
  }, (prop) => prop !== "isAxiosError"), AxiosError.call(axiosError, error.message, code, config, request, response), axiosError.cause = error, axiosError.name = error.name, customProps && Object.assign(axiosError, customProps), axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/platform/node/classes/FormData.js
var import_form_data = __toESM(require("form-data"), 1), FormData_default = import_form_data.default;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  return path ? path.concat(key).map(function(token, i) {
    return token = removeBrackets(token), !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "") : key;
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj))
    throw new TypeError("target must be an object");
  formData = formData || new (FormData_default || FormData)(), options = utils_default.toFlatObject(options, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  let metaTokens = options.metaTokens, visitor = options.visitor || defaultVisitor, dots = options.dots, indexes = options.indexes, useBlob = (options.Blob || typeof Blob < "u" && Blob) && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor))
    throw new TypeError("visitor must be a function");
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value))
      return value.toISOString();
    if (!useBlob && utils_default.isBlob(value))
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    return utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value) ? useBlob && typeof Blob == "function" ? new Blob([value]) : Buffer.from(value) : value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value == "object") {
      if (utils_default.endsWith(key, "{}"))
        key = metaTokens ? key : key.slice(0, -2), value = JSON.stringify(value);
      else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value)))
        return key = removeBrackets(key), arr.forEach(function(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === !0 ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        }), !1;
    }
    return isVisitable(value) ? !0 : (formData.append(renderKey(path, key, dots), convertValue(value)), !1);
  }
  let stack = [], exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (!utils_default.isUndefined(value)) {
      if (stack.indexOf(value) !== -1)
        throw Error("Circular reference detected in " + path.join("."));
      stack.push(value), utils_default.forEach(value, function(el, key) {
        (!(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        )) === !0 && build(el, path ? path.concat(key) : [key]);
      }), stack.pop();
    }
  }
  if (!utils_default.isObject(obj))
    throw new TypeError("data must be an object");
  return build(obj), formData;
}
var toFormData_default = toFormData;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  let charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [], params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function(encoder) {
  let _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url2, params, options) {
  if (!params)
    return url2;
  let _encode = options && options.encode || encode2, serializeFn = options && options.serialize, serializedParams;
  if (serializeFn ? serializedParams = serializeFn(params, options) : serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode), serializedParams) {
    let hashmarkIndex = url2.indexOf("#");
    hashmarkIndex !== -1 && (url2 = url2.slice(0, hashmarkIndex)), url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    return this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : !1,
      runWhen: options ? options.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    this.handlers[id] && (this.handlers[id] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function(h) {
      h !== null && fn(h);
    });
  }
}, InterceptorManager_default = InterceptorManager;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
};

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/platform/node/classes/URLSearchParams.js
var import_url = __toESM(require("url"), 1), URLSearchParams_default = import_url.default.URLSearchParams;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/platform/node/index.js
var node_default = {
  isNode: !0,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: typeof Blob < "u" && Blob || null
  },
  protocols: ["http", "https", "file", "data"]
};

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/platform/common/utils.js
var utils_exports = {};
__export(utils_exports, {
  hasBrowserEnv: () => hasBrowserEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv
});
var hasBrowserEnv = typeof window < "u" && typeof document < "u", hasStandardBrowserEnv = ((product) => hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0)(typeof navigator < "u" && navigator.product), hasStandardBrowserWebWorkerEnv = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")();

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/platform/index.js
var platform_default = {
  ...utils_exports,
  ...node_default
};

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      return platform_default.isNode && utils_default.isBuffer(value) ? (this.append(key, value.toString("base64")), !1) : helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => match[0] === "[]" ? "" : match[1] || match[0]);
}
function arrayToObject(arr) {
  let obj = {}, keys = Object.keys(arr), i, len = keys.length, key;
  for (i = 0; i < len; i++)
    key = keys[i], obj[key] = arr[key];
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__")
      return !0;
    let isNumericKey = Number.isFinite(+name), isLast = index >= path.length;
    return name = !name && utils_default.isArray(target) ? target.length : name, isLast ? (utils_default.hasOwnProp(target, name) ? target[name] = [target[name], value] : target[name] = value, !isNumericKey) : ((!target[name] || !utils_default.isObject(target[name])) && (target[name] = []), buildPath(path, value, target[name], index) && utils_default.isArray(target[name]) && (target[name] = arrayToObject(target[name])), !isNumericKey);
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    let obj = {};
    return utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    }), obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/defaults/index.js
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue))
    try {
      return (parser || JSON.parse)(rawValue), utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError")
        throw e;
    }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function(data, headers) {
    let contentType = headers.getContentType() || "", hasJSONContentType = contentType.indexOf("application/json") > -1, isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data) && (data = new FormData(data)), utils_default.isFormData(data))
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data))
      return data;
    if (utils_default.isArrayBufferView(data))
      return data.buffer;
    if (utils_default.isURLSearchParams(data))
      return headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), data.toString();
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1)
        return toURLEncodedForm(data, this.formSerializer).toString();
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        let _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    return isObjectPayload || hasJSONContentType ? (headers.setContentType("application/json", !1), stringifySafely(data)) : data;
  }],
  transformResponse: [function(data) {
    let transitional2 = this.transitional || defaults.transitional, forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing, JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      let strictJSONParsing = !(transitional2 && transitional2.silentJSONParsing) && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing)
          throw e.name === "SyntaxError" ? AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response) : e;
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform_default.classes.FormData,
    Blob: platform_default.classes.Blob
  },
  validateStatus: function(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), parseHeaders_default = (rawHeaders) => {
  let parsed = {}, key, val, i;
  return rawHeaders && rawHeaders.split(`
`).forEach(function(line) {
    i = line.indexOf(":"), key = line.substring(0, i).trim().toLowerCase(), val = line.substring(i + 1).trim(), !(!key || parsed[key] && ignoreDuplicateOf[key]) && (key === "set-cookie" ? parsed[key] ? parsed[key].push(val) : parsed[key] = [val] : parsed[key] = parsed[key] ? parsed[key] + ", " + val : val);
  }), parsed;
};

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  return value === !1 || value == null ? value : utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  let tokens = /* @__PURE__ */ Object.create(null), tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, match;
  for (; match = tokensRE.exec(str); )
    tokens[match[1]] = match[2];
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2))
    return filter2.call(this, value, header);
  if (isHeaderNameFilter && (value = header), !!utils_default.isString(value)) {
    if (utils_default.isString(filter2))
      return value.indexOf(filter2) !== -1;
    if (utils_default.isRegExp(filter2))
      return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => char.toUpperCase() + str);
}
function buildAccessors(obj, header) {
  let accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: !0
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    let self2 = this;
    function setHeader(_value, _header, _rewrite) {
      let lHeader = normalizeHeader(_header);
      if (!lHeader)
        throw new Error("header name must be a non-empty string");
      let key = utils_default.findKey(self2, lHeader);
      (!key || self2[key] === void 0 || _rewrite === !0 || _rewrite === void 0 && self2[key] !== !1) && (self2[key || _header] = normalizeValue(_value));
    }
    let setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    return utils_default.isPlainObject(header) || header instanceof this.constructor ? setHeaders(header, valueOrRewrite) : utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header) ? setHeaders(parseHeaders_default(header), valueOrRewrite) : header != null && setHeader(valueOrRewrite, header, rewrite), this;
  }
  get(header, parser) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      if (key) {
        let value = this[key];
        if (!parser)
          return value;
        if (parser === !0)
          return parseTokens(value);
        if (utils_default.isFunction(parser))
          return parser.call(this, value, key);
        if (utils_default.isRegExp(parser))
          return parser.exec(value);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    if (header = normalizeHeader(header), header) {
      let key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return !1;
  }
  delete(header, matcher) {
    let self2 = this, deleted = !1;
    function deleteHeader(_header) {
      if (_header = normalizeHeader(_header), _header) {
        let key = utils_default.findKey(self2, _header);
        key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher)) && (delete self2[key], deleted = !0);
      }
    }
    return utils_default.isArray(header) ? header.forEach(deleteHeader) : deleteHeader(header), deleted;
  }
  clear(matcher) {
    let keys = Object.keys(this), i = keys.length, deleted = !1;
    for (; i--; ) {
      let key = keys[i];
      (!matcher || matchHeaderValue(this, this[key], key, matcher, !0)) && (delete this[key], deleted = !0);
    }
    return deleted;
  }
  normalize(format) {
    let self2 = this, headers = {};
    return utils_default.forEach(this, (value, header) => {
      let key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value), delete self2[header];
        return;
      }
      let normalized = format ? formatHeader(header) : String(header).trim();
      normalized !== header && delete self2[header], self2[normalized] = normalizeValue(value), headers[normalized] = !0;
    }), this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    let obj = /* @__PURE__ */ Object.create(null);
    return utils_default.forEach(this, (value, header) => {
      value != null && value !== !1 && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    }), obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    let computed = new this(first);
    return targets.forEach((target) => computed.set(target)), computed;
  }
  static accessor(header) {
    let accessors = (this[$internals] = this[$internals] = {
      accessors: {}
    }).accessors, prototype3 = this.prototype;
    function defineAccessor(_header) {
      let lHeader = normalizeHeader(_header);
      accessors[lHeader] || (buildAccessors(prototype3, _header), accessors[lHeader] = !0);
    }
    return utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header), this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  let config = this || defaults_default, context = response || config, headers = AxiosHeaders_default.from(context.headers), data = context.data;
  return utils_default.forEach(fns, function(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  }), headers.normalize(), data;
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message ?? "canceled", AxiosError_default.ERR_CANCELED, config, request), this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: !0
});
var CanceledError_default = CanceledError;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  let validateStatus2 = response.config.validateStatus;
  !response.status || !validateStatus2 || validateStatus2(response.status) ? resolve(response) : reject(new AxiosError_default(
    "Request failed with status code " + response.status,
    [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
    response.config,
    response.request,
    response
  ));
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL3, relativeURL) {
  return relativeURL ? baseURL3.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL3;
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL3, requestedURL) {
  return baseURL3 && !isAbsoluteURL(requestedURL) ? combineURLs(baseURL3, requestedURL) : requestedURL;
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/adapters/http.js
var import_proxy_from_env = require("proxy-from-env"), import_http = __toESM(require("http"), 1), import_https = __toESM(require("https"), 1), import_util2 = __toESM(require("util"), 1), import_follow_redirects = __toESM(require("follow-redirects"), 1), import_zlib = __toESM(require("zlib"), 1);

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/env/data.js
var VERSION = "1.6.7";

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url2) {
  let match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
  return match && match[1] || "";
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/fromDataURI.js
var DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function fromDataURI(uri, asBlob, options) {
  let _Blob = options && options.Blob || platform_default.classes.Blob, protocol = parseProtocol(uri);
  if (asBlob === void 0 && _Blob && (asBlob = !0), protocol === "data") {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    let match = DATA_URL_PATTERN.exec(uri);
    if (!match)
      throw new AxiosError_default("Invalid URL", AxiosError_default.ERR_INVALID_URL);
    let mime = match[1], isBase64 = match[2], body = match[3], buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
    if (asBlob) {
      if (!_Blob)
        throw new AxiosError_default("Blob is not supported", AxiosError_default.ERR_NOT_SUPPORT);
      return new _Blob([buffer], { type: mime });
    }
    return buffer;
  }
  throw new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_NOT_SUPPORT);
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/adapters/http.js
var import_stream5 = __toESM(require("stream"), 1);

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/AxiosTransformStream.js
var import_stream2 = __toESM(require("stream"), 1);

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0, threshold = 1e3 / freq, timer = null;
  return function(force, args) {
    let now = Date.now();
    if (force || now - timestamp > threshold)
      return timer && (clearTimeout(timer), timer = null), timestamp = now, fn.apply(null, args);
    timer || (timer = setTimeout(() => (timer = null, timestamp = Date.now(), fn.apply(null, args)), threshold - (now - timestamp)));
  };
}
var throttle_default = throttle;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  let bytes = new Array(samplesCount), timestamps = new Array(samplesCount), head = 0, tail = 0, firstSampleTS;
  return min = min !== void 0 ? min : 1e3, function(chunkLength) {
    let now = Date.now(), startedAt = timestamps[tail];
    firstSampleTS || (firstSampleTS = now), bytes[head] = chunkLength, timestamps[head] = now;
    let i = tail, bytesCount = 0;
    for (; i !== head; )
      bytesCount += bytes[i++], i = i % samplesCount;
    if (head = (head + 1) % samplesCount, head === tail && (tail = (tail + 1) % samplesCount), now - firstSampleTS < min)
      return;
    let passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/AxiosTransformStream.js
var kInternals = Symbol("internals"), AxiosTransformStream = class extends import_stream2.default.Transform {
  constructor(options) {
    options = utils_default.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => !utils_default.isUndefined(source[prop])), super({
      readableHighWaterMark: options.chunkSize
    });
    let self2 = this, internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    }, _speedometer = speedometer_default(internals.ticksRate * options.samplesCount, internals.timeWindow);
    this.on("newListener", (event) => {
      event === "progress" && (internals.isCaptured || (internals.isCaptured = !0));
    });
    let bytesNotified = 0;
    internals.updateProgress = throttle_default(function() {
      let totalBytes = internals.length, bytesTransferred = internals.bytesSeen, progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self2.destroyed)
        return;
      let rate = _speedometer(progressBytes);
      bytesNotified = bytesTransferred, process.nextTick(() => {
        self2.emit("progress", {
          loaded: bytesTransferred,
          total: totalBytes,
          progress: totalBytes ? bytesTransferred / totalBytes : void 0,
          bytes: progressBytes,
          rate: rate || void 0,
          estimated: rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : void 0
        });
      });
    }, internals.ticksRate);
    let onFinish = () => {
      internals.updateProgress(!0);
    };
    this.once("end", onFinish), this.once("error", onFinish);
  }
  _read(size) {
    let internals = this[kInternals];
    return internals.onReadCallback && internals.onReadCallback(), super._read(size);
  }
  _transform(chunk, encoding, callback) {
    let self2 = this, internals = this[kInternals], maxRate = internals.maxRate, readableHighWaterMark = this.readableHighWaterMark, timeWindow = internals.timeWindow, divider = 1e3 / timeWindow, bytesThreshold = maxRate / divider, minChunkSize = internals.minChunkSize !== !1 ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    function pushChunk(_chunk, _callback) {
      let bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes, internals.bytes += bytes, internals.isCaptured && internals.updateProgress(), self2.push(_chunk) ? process.nextTick(_callback) : internals.onReadCallback = () => {
        internals.onReadCallback = null, process.nextTick(_callback);
      };
    }
    let transformChunk = (_chunk, _callback) => {
      let chunkSize = Buffer.byteLength(_chunk), chunkRemainder = null, maxChunkSize = readableHighWaterMark, bytesLeft, passed = 0;
      if (maxRate) {
        let now = Date.now();
        (!internals.ts || (passed = now - internals.ts) >= timeWindow) && (internals.ts = now, bytesLeft = bytesThreshold - internals.bytes, internals.bytes = bytesLeft < 0 ? -bytesLeft : 0, passed = 0), bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0)
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        bytesLeft < maxChunkSize && (maxChunkSize = bytesLeft);
      }
      maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize && (chunkRemainder = _chunk.subarray(maxChunkSize), _chunk = _chunk.subarray(0, maxChunkSize)), pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err)
        return callback(err);
      _chunk ? transformChunk(_chunk, transformNextChunk) : callback(null);
    });
  }
  setLength(length) {
    return this[kInternals].length = +length, this;
  }
}, AxiosTransformStream_default = AxiosTransformStream;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/adapters/http.js
var import_events = __toESM(require("events"), 1);

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/formDataToStream.js
var import_util = require("util"), import_stream3 = require("stream");

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/readBlob.js
var { asyncIterator } = Symbol, readBlob = async function* (blob) {
  blob.stream ? yield* blob.stream() : blob.arrayBuffer ? yield await blob.arrayBuffer() : blob[asyncIterator] ? yield* blob[asyncIterator]() : yield blob;
}, readBlob_default = readBlob;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/formDataToStream.js
var BOUNDARY_ALPHABET = utils_default.ALPHABET.ALPHA_DIGIT + "-_", textEncoder = new import_util.TextEncoder(), CRLF = `\r
`, CRLF_BYTES = textEncoder.encode(CRLF), CRLF_BYTES_COUNT = 2, FormDataPart = class {
  constructor(name, value) {
    let { escapeName } = this.constructor, isStringValue = utils_default.isString(value), headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
    isStringValue ? value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF)) : headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`, this.headers = textEncoder.encode(headers + CRLF), this.contentLength = isStringValue ? value.byteLength : value.size, this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT, this.name = name, this.value = value;
  }
  async *encode() {
    yield this.headers;
    let { value } = this;
    utils_default.isTypedArray(value) ? yield value : yield* readBlob_default(value), yield CRLF_BYTES;
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, (match) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[match]);
  }
}, formDataToStream = (form, headersHandler, options) => {
  let {
    tag = "form-data-boundary",
    size = 25,
    boundary = tag + "-" + utils_default.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils_default.isFormData(form))
    throw TypeError("FormData instance required");
  if (boundary.length < 1 || boundary.length > 70)
    throw Error("boundary must be 10-70 characters long");
  let boundaryBytes = textEncoder.encode("--" + boundary + CRLF), footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF + CRLF), contentLength = footerBytes.byteLength, parts = Array.from(form.entries()).map(([name, value]) => {
    let part = new FormDataPart(name, value);
    return contentLength += part.size, part;
  });
  contentLength += boundaryBytes.byteLength * parts.length, contentLength = utils_default.toFiniteNumber(contentLength);
  let computedHeaders = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`
  };
  return Number.isFinite(contentLength) && (computedHeaders["Content-Length"] = contentLength), headersHandler && headersHandler(computedHeaders), import_stream3.Readable.from(async function* () {
    for (let part of parts)
      yield boundaryBytes, yield* part.encode();
    yield footerBytes;
  }());
}, formDataToStream_default = formDataToStream;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js
var import_stream4 = __toESM(require("stream"), 1), ZlibHeaderTransformStream = class extends import_stream4.default.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk), callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0 && (this._transform = this.__transform, chunk[0] !== 120)) {
      let header = Buffer.alloc(2);
      header[0] = 120, header[1] = 156, this.push(header, encoding);
    }
    this.__transform(chunk, encoding, callback);
  }
}, ZlibHeaderTransformStream_default = ZlibHeaderTransformStream;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/callbackify.js
var callbackify = (fn, reducer) => utils_default.isAsyncFn(fn) ? function(...args) {
  let cb = args.pop();
  fn.apply(this, args).then((value) => {
    try {
      reducer ? cb(null, ...reducer(value)) : cb(null, value);
    } catch (err) {
      cb(err);
    }
  }, cb);
} : fn, callbackify_default = callbackify;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/adapters/http.js
var zlibOptions = {
  flush: import_zlib.default.constants.Z_SYNC_FLUSH,
  finishFlush: import_zlib.default.constants.Z_SYNC_FLUSH
}, brotliOptions = {
  flush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH
}, isBrotliSupported = utils_default.isFunction(import_zlib.default.createBrotliDecompress), { http: httpFollow, https: httpsFollow } = import_follow_redirects.default, isHttps = /https:?/, supportedProtocols = platform_default.protocols.map((protocol) => protocol + ":");
function dispatchBeforeRedirect(options, responseDetails) {
  options.beforeRedirects.proxy && options.beforeRedirects.proxy(options), options.beforeRedirects.config && options.beforeRedirects.config(options, responseDetails);
}
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== !1) {
    let proxyUrl = (0, import_proxy_from_env.getProxyForUrl)(location);
    proxyUrl && (proxy = new URL(proxyUrl));
  }
  if (proxy) {
    if (proxy.username && (proxy.auth = (proxy.username || "") + ":" + (proxy.password || "")), proxy.auth) {
      (proxy.auth.username || proxy.auth.password) && (proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || ""));
      let base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
      options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
    let proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost, options.host = proxyHost, options.port = proxy.port, options.path = location, proxy.protocol && (options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`);
  }
  options.beforeRedirects.proxy = function(redirectOptions) {
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}
var isHttpAdapterSupported = typeof process < "u" && utils_default.kindOf(process) === "process", wrapAsync = (asyncExecutor) => new Promise((resolve, reject) => {
  let onDone, isDone, done = (value, isRejected) => {
    isDone || (isDone = !0, onDone && onDone(value, isRejected));
  }, _resolve = (value) => {
    done(value), resolve(value);
  }, _reject = (reason) => {
    done(reason, !0), reject(reason);
  };
  asyncExecutor(_resolve, _reject, (onDoneHandler) => onDone = onDoneHandler).catch(_reject);
}), resolveFamily = ({ address, family }) => {
  if (!utils_default.isString(address))
    throw TypeError("address must be a string");
  return {
    address,
    family: family || (address.indexOf(".") < 0 ? 6 : 4)
  };
}, buildAddressEntry = (address, family) => resolveFamily(utils_default.isObject(address) ? address : { address, family }), http_default = isHttpAdapterSupported && function(config) {
  return wrapAsync(async function(resolve, reject, onDone) {
    let { data, lookup, family } = config, { responseType, responseEncoding } = config, method = config.method.toUpperCase(), isDone, rejected = !1, req;
    if (lookup) {
      let _lookup = callbackify_default(lookup, (value) => utils_default.isArray(value) ? value : [value]);
      lookup = (hostname, opt, cb) => {
        _lookup(hostname, opt, (err, arg0, arg1) => {
          if (err)
            return cb(err);
          let addresses = utils_default.isArray(arg0) ? arg0.map((addr) => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];
          opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
        });
      };
    }
    let emitter = new import_events.default(), onFinished = () => {
      config.cancelToken && config.cancelToken.unsubscribe(abort), config.signal && config.signal.removeEventListener("abort", abort), emitter.removeAllListeners();
    };
    onDone((value, isRejected) => {
      isDone = !0, isRejected && (rejected = !0, onFinished());
    });
    function abort(reason) {
      emitter.emit("abort", !reason || reason.type ? new CanceledError_default(null, config, req) : reason);
    }
    emitter.once("abort", reject), (config.cancelToken || config.signal) && (config.cancelToken && config.cancelToken.subscribe(abort), config.signal && (config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort)));
    let fullPath = buildFullPath(config.baseURL, config.url), parsed = new URL(fullPath, "http://localhost"), protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === "data:") {
      let convertedData;
      if (method !== "GET")
        return settle(resolve, reject, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config
        });
      try {
        convertedData = fromDataURI(config.url, responseType === "blob", {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config);
      }
      return responseType === "text" ? (convertedData = convertedData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (convertedData = utils_default.stripBOM(convertedData))) : responseType === "stream" && (convertedData = import_stream5.default.Readable.from(convertedData)), settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: "OK",
        headers: new AxiosHeaders_default(),
        config
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1)
      return reject(new AxiosError_default(
        "Unsupported protocol " + protocol,
        AxiosError_default.ERR_BAD_REQUEST,
        config
      ));
    let headers = AxiosHeaders_default.from(config.headers).normalize();
    headers.set("User-Agent", "axios/" + VERSION, !1);
    let onDownloadProgress = config.onDownloadProgress, onUploadProgress = config.onUploadProgress, maxRate = config.maxRate, maxUploadRate, maxDownloadRate;
    if (utils_default.isSpecCompliantForm(data)) {
      let userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
      data = formDataToStream_default(data, (formHeaders) => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || void 0
      });
    } else if (utils_default.isFormData(data) && utils_default.isFunction(data.getHeaders)) {
      if (headers.set(data.getHeaders()), !headers.hasContentLength())
        try {
          let knownLength = await import_util2.default.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
        } catch {
        }
    } else if (utils_default.isBlob(data))
      data.size && headers.setContentType(data.type || "application/octet-stream"), headers.setContentLength(data.size || 0), data = import_stream5.default.Readable.from(readBlob_default(data));
    else if (data && !utils_default.isStream(data)) {
      if (!Buffer.isBuffer(data))
        if (utils_default.isArrayBuffer(data))
          data = Buffer.from(new Uint8Array(data));
        else if (utils_default.isString(data))
          data = Buffer.from(data, "utf-8");
        else
          return reject(new AxiosError_default(
            "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
            AxiosError_default.ERR_BAD_REQUEST,
            config
          ));
      if (headers.setContentLength(data.length, !1), config.maxBodyLength > -1 && data.length > config.maxBodyLength)
        return reject(new AxiosError_default(
          "Request body larger than maxBodyLength limit",
          AxiosError_default.ERR_BAD_REQUEST,
          config
        ));
    }
    let contentLength = utils_default.toFiniteNumber(headers.getContentLength());
    utils_default.isArray(maxRate) ? (maxUploadRate = maxRate[0], maxDownloadRate = maxRate[1]) : maxUploadRate = maxDownloadRate = maxRate, data && (onUploadProgress || maxUploadRate) && (utils_default.isStream(data) || (data = import_stream5.default.Readable.from(data, { objectMode: !1 })), data = import_stream5.default.pipeline([data, new AxiosTransformStream_default({
      length: contentLength,
      maxRate: utils_default.toFiniteNumber(maxUploadRate)
    })], utils_default.noop), onUploadProgress && data.on("progress", (progress) => {
      onUploadProgress(Object.assign(progress, {
        upload: !0
      }));
    }));
    let auth;
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password || "";
      auth = username + ":" + password;
    }
    if (!auth && parsed.username) {
      let urlUsername = parsed.username, urlPassword = parsed.password;
      auth = urlUsername + ":" + urlPassword;
    }
    auth && headers.delete("authorization");
    let path;
    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config.params,
        config.paramsSerializer
      ).replace(/^\?/, "");
    } catch (err) {
      let customErr = new Error(err.message);
      return customErr.config = config, customErr.url = config.url, customErr.exists = !0, reject(customErr);
    }
    headers.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""),
      !1
    );
    let options = {
      path,
      method,
      headers: headers.toJSON(),
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth,
      protocol,
      family,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };
    !utils_default.isUndefined(lookup) && (options.lookup = lookup), config.socketPath ? options.socketPath = config.socketPath : (options.hostname = parsed.hostname, options.port = parsed.port, setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path));
    let transport, isHttpsRequest = isHttps.test(options.protocol);
    if (options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent, config.transport ? transport = config.transport : config.maxRedirects === 0 ? transport = isHttpsRequest ? import_https.default : import_http.default : (config.maxRedirects && (options.maxRedirects = config.maxRedirects), config.beforeRedirect && (options.beforeRedirects.config = config.beforeRedirect), transport = isHttpsRequest ? httpsFollow : httpFollow), config.maxBodyLength > -1 ? options.maxBodyLength = config.maxBodyLength : options.maxBodyLength = 1 / 0, config.insecureHTTPParser && (options.insecureHTTPParser = config.insecureHTTPParser), req = transport.request(options, function(res) {
      if (req.destroyed)
        return;
      let streams = [res], responseLength = +res.headers["content-length"];
      if (onDownloadProgress) {
        let transformStream = new AxiosTransformStream_default({
          length: utils_default.toFiniteNumber(responseLength),
          maxRate: utils_default.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on("progress", (progress) => {
          onDownloadProgress(Object.assign(progress, {
            download: !0
          }));
        }), streams.push(transformStream);
      }
      let responseStream = res, lastRequest = res.req || req;
      if (config.decompress !== !1 && res.headers["content-encoding"])
        switch ((method === "HEAD" || res.statusCode === 204) && delete res.headers["content-encoding"], (res.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "deflate":
            streams.push(new ZlibHeaderTransformStream_default()), streams.push(import_zlib.default.createUnzip(zlibOptions)), delete res.headers["content-encoding"];
            break;
          case "br":
            isBrotliSupported && (streams.push(import_zlib.default.createBrotliDecompress(brotliOptions)), delete res.headers["content-encoding"]);
        }
      responseStream = streams.length > 1 ? import_stream5.default.pipeline(streams, utils_default.noop) : streams[0];
      let offListeners = import_stream5.default.finished(responseStream, () => {
        offListeners(), onFinished();
      }), response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders_default(res.headers),
        config,
        request: lastRequest
      };
      if (responseType === "stream")
        response.data = responseStream, settle(resolve, reject, response);
      else {
        let responseBuffer = [], totalResponseBytes = 0;
        responseStream.on("data", function(chunk) {
          responseBuffer.push(chunk), totalResponseBytes += chunk.length, config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength && (rejected = !0, responseStream.destroy(), reject(new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          )));
        }), responseStream.on("aborted", function() {
          if (rejected)
            return;
          let err = new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          );
          responseStream.destroy(err), reject(err);
        }), responseStream.on("error", function(err) {
          req.destroyed || reject(AxiosError_default.from(err, null, config, lastRequest));
        }), responseStream.on("end", function() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            responseType !== "arraybuffer" && (responseData = responseData.toString(responseEncoding), (!responseEncoding || responseEncoding === "utf8") && (responseData = utils_default.stripBOM(responseData))), response.data = responseData;
          } catch (err) {
            return reject(AxiosError_default.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      emitter.once("abort", (err) => {
        responseStream.destroyed || (responseStream.emit("error", err), responseStream.destroy());
      });
    }), emitter.once("abort", (err) => {
      reject(err), req.destroy(err);
    }), req.on("error", function(err) {
      reject(AxiosError_default.from(err, null, config, req));
    }), req.on("socket", function(socket) {
      socket.setKeepAlive(!0, 1e3 * 60);
    }), config.timeout) {
      let timeout = parseInt(config.timeout, 10);
      if (Number.isNaN(timeout)) {
        reject(new AxiosError_default(
          "error trying to parse `config.timeout` to int",
          AxiosError_default.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));
        return;
      }
      req.setTimeout(timeout, function() {
        if (isDone)
          return;
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
        config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          req
        )), abort();
      });
    }
    if (utils_default.isStream(data)) {
      let ended = !1, errored = !1;
      data.on("end", () => {
        ended = !0;
      }), data.once("error", (err) => {
        errored = !0, req.destroy(err);
      }), data.on("close", () => {
        !ended && !errored && abort(new CanceledError_default("Request stream has been aborted", config, req));
      }), data.pipe(req);
    } else
      req.end(data);
  });
};

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/cookies.js
var cookies_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      let cookie = [name + "=" + encodeURIComponent(value)];
      utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString()), utils_default.isString(path) && cookie.push("path=" + path), utils_default.isString(domain) && cookie.push("domain=" + domain), secure === !0 && cookie.push("secure"), document.cookie = cookie.join("; ");
    },
    read(name) {
      let match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    let msie = /(msie|trident)/i.test(navigator.userAgent), urlParsingNode = document.createElement("a"), originURL;
    function resolveURL(url2) {
      let href = url2;
      return msie && (urlParsingNode.setAttribute("href", href), href = urlParsingNode.href), urlParsingNode.setAttribute("href", href), {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    return originURL = resolveURL(window.location.href), function(requestURL) {
      let parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0, _speedometer = speedometer_default(50, 250);
  return (e) => {
    let loaded = e.loaded, total = e.lengthComputable ? e.total : void 0, progressBytes = loaded - bytesNotified, rate = _speedometer(progressBytes), inRange = loaded <= total;
    bytesNotified = loaded;
    let data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate || void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = !0, listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest < "u", xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function(resolve, reject) {
    let requestData = config.data, requestHeaders = AxiosHeaders_default.from(config.headers).normalize(), { responseType, withXSRFToken } = config, onCanceled;
    function done() {
      config.cancelToken && config.cancelToken.unsubscribe(onCanceled), config.signal && config.signal.removeEventListener("abort", onCanceled);
    }
    let contentType;
    if (utils_default.isFormData(requestData)) {
      if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv)
        requestHeaders.setContentType(!1);
      else if ((contentType = requestHeaders.getContentType()) !== !1) {
        let [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    let request = new XMLHttpRequest();
    if (config.auth) {
      let username = config.auth.username || "", password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    let fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), !0), request.timeout = config.timeout;
    function onloadend() {
      if (!request)
        return;
      let responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      ), response = {
        data: !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function(value) {
        resolve(value), done();
      }, function(err) {
        reject(err), done();
      }, response), request = null;
    }
    if ("onloadend" in request ? request.onloadend = onloadend : request.onreadystatechange = function() {
      !request || request.readyState !== 4 || request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0) || setTimeout(onloadend);
    }, request.onabort = function() {
      request && (reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request)), request = null);
    }, request.onerror = function() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request)), request = null;
    }, request.ontimeout = function() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded", transitional2 = config.transitional || transitional_default;
      config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage), reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      )), request = null;
    }, platform_default.hasStandardBrowserEnv && (withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config)), withXSRFToken || withXSRFToken !== !1 && isURLSameOrigin_default(fullPath))) {
      let xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
      xsrfValue && requestHeaders.set(config.xsrfHeaderName, xsrfValue);
    }
    requestData === void 0 && requestHeaders.setContentType(null), "setRequestHeader" in request && utils_default.forEach(requestHeaders.toJSON(), function(val, key) {
      request.setRequestHeader(key, val);
    }), utils_default.isUndefined(config.withCredentials) || (request.withCredentials = !!config.withCredentials), responseType && responseType !== "json" && (request.responseType = config.responseType), typeof config.onDownloadProgress == "function" && request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, !0)), typeof config.onUploadProgress == "function" && request.upload && request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress)), (config.cancelToken || config.signal) && (onCanceled = (cancel) => {
      request && (reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel), request.abort(), request = null);
    }, config.cancelToken && config.cancelToken.subscribe(onCanceled), config.signal && (config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled)));
    let protocol = parseProtocol(fullPath);
    if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: http_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var renderReason = (reason) => `- ${reason}`, isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === !1, adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    let { length } = adapters, nameOrAdapter, adapter, rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      if (adapter = nameOrAdapter, !isResolvedHandle(nameOrAdapter) && (adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()], adapter === void 0))
        throw new AxiosError_default(`Unknown adapter '${id}'`);
      if (adapter)
        break;
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      let reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === !1 ? "is not supported by the environment" : "is not available in the build")
      ), s = length ? reasons.length > 1 ? `since :
` + reasons.map(renderReason).join(`
`) : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken && config.cancelToken.throwIfRequested(), config.signal && config.signal.aborted)
    throw new CanceledError_default(null, config);
}
function dispatchRequest(config) {
  return throwIfCancellationRequested(config), config.headers = AxiosHeaders_default.from(config.headers), config.data = transformData.call(
    config,
    config.transformRequest
  ), ["post", "put", "patch"].indexOf(config.method) !== -1 && config.headers.setContentType("application/x-www-form-urlencoded", !1), adapters_default.getAdapter(config.adapter || defaults_default.adapter)(config).then(function(response) {
    return throwIfCancellationRequested(config), response.data = transformData.call(
      config,
      config.transformResponse,
      response
    ), response.headers = AxiosHeaders_default.from(response.headers), response;
  }, function(reason) {
    return isCancel(reason) || (throwIfCancellationRequested(config), reason && reason.response && (reason.response.data = transformData.call(
      config,
      config.transformResponse,
      reason.response
    ), reason.response.headers = AxiosHeaders_default.from(reason.response.headers))), Promise.reject(reason);
  });
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  let config = {};
  function getMergedValue(target, source, caseless) {
    return utils_default.isPlainObject(target) && utils_default.isPlainObject(source) ? utils_default.merge.call({ caseless }, target, source) : utils_default.isPlainObject(source) ? utils_default.merge({}, source) : utils_default.isArray(source) ? source.slice() : source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a, caseless);
    } else
      return getMergedValue(a, b, caseless);
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b))
      return getMergedValue(void 0, b);
  }
  function defaultToConfig2(a, b) {
    if (utils_default.isUndefined(b)) {
      if (!utils_default.isUndefined(a))
        return getMergedValue(void 0, a);
    } else
      return getMergedValue(void 0, b);
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2)
      return getMergedValue(a, b);
    if (prop in config1)
      return getMergedValue(void 0, a);
  }
  let mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), !0)
  };
  return utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function(prop) {
    let merge2 = mergeMap[prop] || mergeDeepProperties, configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  }), config;
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === !1)
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    return version && !deprecatedWarnings[opt] && (deprecatedWarnings[opt] = !0, console.warn(
      formatMessage(
        opt,
        " has been deprecated since v" + version + " and will be removed in the near future"
      )
    )), validator2 ? validator2(value, opt, opts) : !0;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options != "object")
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  let keys = Object.keys(options), i = keys.length;
  for (; i-- > 0; ) {
    let opt = keys[i], validator2 = schema[opt];
    if (validator2) {
      let value = options[opt], result = value === void 0 || validator2(value, opt, options);
      if (result !== !0)
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (allowUnknown !== !0)
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators, Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig, this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;
        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
        let stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        err.stack ? stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, "")) && (err.stack += `
` + stack) : err.stack = stack;
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    typeof configOrUrl == "string" ? (config = config || {}, config.url = configOrUrl) : config = configOrUrl || {}, config = mergeConfig(this.defaults, config);
    let { transitional: transitional2, paramsSerializer, headers } = config;
    transitional2 !== void 0 && validator_default.assertOptions(transitional2, {
      silentJSONParsing: validators2.transitional(validators2.boolean),
      forcedJSONParsing: validators2.transitional(validators2.boolean),
      clarifyTimeoutError: validators2.transitional(validators2.boolean)
    }, !1), paramsSerializer != null && (utils_default.isFunction(paramsSerializer) ? config.paramsSerializer = {
      serialize: paramsSerializer
    } : validator_default.assertOptions(paramsSerializer, {
      encode: validators2.function,
      serialize: validators2.function
    }, !0)), config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    ), config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    let requestInterceptorChain = [], synchronousRequestInterceptors = !0;
    this.interceptors.request.forEach(function(interceptor) {
      typeof interceptor.runWhen == "function" && interceptor.runWhen(config) === !1 || (synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous, requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected));
    });
    let responseInterceptorChain = [];
    this.interceptors.response.forEach(function(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise, i = 0, len;
    if (!synchronousRequestInterceptors) {
      let chain = [dispatchRequest.bind(this), void 0];
      for (chain.unshift.apply(chain, requestInterceptorChain), chain.push.apply(chain, responseInterceptorChain), len = chain.length, promise = Promise.resolve(config); i < len; )
        promise = promise.then(chain[i++], chain[i++]);
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    for (i = 0; i < len; ) {
      let onFulfilled = requestInterceptorChain[i++], onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    for (i = 0, len = responseInterceptorChain.length; i < len; )
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    let fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function(method) {
  Axios.prototype[method] = function(url2, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function(method) {
  function generateHTTPMethod(isForm) {
    return function(url2, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod(), Axios.prototype[method + "Form"] = generateHTTPMethod(!0);
});
var Axios_default = Axios;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class {
  constructor(executor) {
    if (typeof executor != "function")
      throw new TypeError("executor must be a function.");
    let resolvePromise;
    this.promise = new Promise(function(resolve) {
      resolvePromise = resolve;
    });
    let token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      for (; i-- > 0; )
        token._listeners[i](cancel);
      token._listeners = null;
    }), this.promise.then = (onfulfilled) => {
      let _resolve, promise = new Promise((resolve) => {
        token.subscribe(resolve), _resolve = resolve;
      }).then(onfulfilled);
      return promise.cancel = function() {
        token.unsubscribe(_resolve);
      }, promise;
    }, executor(function(message, config, request) {
      token.reason || (token.reason = new CanceledError_default(message, config, request), resolvePromise(token.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(listener) : this._listeners = [listener];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners)
      return;
    let index = this._listeners.indexOf(listener);
    index !== -1 && this._listeners.splice(index, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    return {
      token: new CancelToken(function(c) {
        cancel = c;
      }),
      cancel
    };
  }
}, CancelToken_default = CancelToken;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === !0;
}

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  let context = new Axios_default(defaultConfig), instance2 = bind(Axios_default.prototype.request, context);
  return utils_default.extend(instance2, Axios_default.prototype, context, { allOwnKeys: !0 }), utils_default.extend(instance2, context, null, { allOwnKeys: !0 }), instance2.create = function(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  }, instance2;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/.pnpm/axios@1.6.7/node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  getAdapter,
  mergeConfig: mergeConfig2
} = axios_default;

// app/utils/axios.server.ts
var instance = axios_default.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:5000"
}), axios_server_default = instance;

// app/utils/session.server.ts
var tokenName = "access_token";
async function login({
  email,
  password
}) {
  var _a;
  try {
    return (await axios_server_default.post("/auth/merchant/login", {
      username: email,
      password
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}
async function adminLogin({
  email,
  password
}) {
  var _a;
  try {
    return (await axios_server_default.post("/auth/admin/login", {
      username: email,
      password
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}
async function packageHandlerLogin({
  email,
  password
}) {
  var _a;
  try {
    return (await axios_server_default.post("/auth/packageHandler/login", {
      username: email,
      password
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}
async function register(regFormData) {
  var _a;
  let {
    name,
    email,
    phone,
    password,
    shopName,
    shopEmail,
    shopAddress,
    shopProductType,
    shopSubProductType,
    pickupAddress,
    pickupAreaId,
    pickupPhone
  } = regFormData;
  try {
    return (await axios_server_default.post("/auth/merchant/register", {
      name,
      email,
      phone,
      password,
      shopName,
      shopEmail,
      shopAddress,
      shopProductType,
      shopSubProductType,
      pickupAddress,
      pickupAreaId,
      pickupPhone
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}
var sessionSecret = process.env.SESSION_SECRET || "defaultSecretKey";
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node3.createCookieSessionStorage)({
  cookie: {
    name: "DELIVERY_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: !0,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let session = await getUserSession(request), userId = session.get("userId"), role = session.get("role");
  return !userId || typeof userId != "number" || role != "merchant" ? null : userId;
}
async function getAdminId(request) {
  let session = await getUserSession(request), userId = session.get("userId"), role = session.get("role");
  return !userId || typeof userId != "number" || role != "admin" ? null : userId;
}
async function getPackageHandlerId(request) {
  let session = await getUserSession(request), userId = session.get("userId"), role = session.get("role");
  return !userId || typeof userId != "number" || role != "pickupman" && role != "deliveryman" ? null : userId;
}
async function getUserToken(request) {
  let access_token = (await getUserSession(request)).get(tokenName);
  return !access_token || typeof access_token != "string" ? logout(request) : access_token;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let session = await getUserSession(request), userId = session.get("userId"), role = session.get("role");
  if (!userId || typeof userId != "number" || role !== "merchant") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node3.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function requireAdminUserId(request, redirectTo = new URL(request.url).pathname) {
  let session = await getUserSession(request), userId = session.get("userId"), role = session.get("role");
  if (!userId || typeof userId != "number" || role !== "admin") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node3.redirect)(`/admin/login?${searchParams}`);
  }
  return userId;
}
async function requirePackageHandlerUserId(request, redirectTo = new URL(request.url).pathname) {
  let session = await getUserSession(request), userId = session.get("userId"), role = session.get("role");
  if (!userId || typeof userId != "number" || role !== "pickupman" && role !== "deliveryman") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node3.redirect)(`/packagehandler/login?${searchParams}`);
  }
  return userId;
}
async function getUser(request) {
  let access_token = await getUserToken(request);
  if (typeof access_token != "string")
    return null;
  try {
    return await axios_server_default.get("/users/me", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request, redirectTo) {
  let session = await getUserSession(request);
  return (0, import_node3.redirect)(redirectTo || "/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, access_token, role, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), session.set(tokenName, access_token), session.set("role", role), (0, import_node3.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/context/ShopProvider.tsx
var import_react5 = __toESM(require("react")), import_jsx_runtime3 = require("react/jsx-runtime"), storeActiveShopCookie = (shop) => {
  let shopCookie = JSON.stringify(shop);
  document.cookie = `xshop=activeShop${shopCookie}activeShop; path=/; max-age=2592000 ; samesite=lax; secure `;
}, ShopContext = import_react5.default.createContext(null);
ShopContext.displayName = "ShopContext";
function ShopProvider({ ...props }) {
  let [activeShop, setActiveShop] = import_react5.default.useState(null), storeActiveShop = import_react5.default.useCallback((shop) => {
    let lsShop = window.localStorage.getItem("xshop");
    if (lsShop) {
      let lsShopData = JSON.parse(lsShop);
      setActiveShop(lsShopData), storeActiveShopCookie(lsShopData);
    } else
      window.localStorage.setItem("xshop", JSON.stringify(shop)), storeActiveShopCookie(shop), setActiveShop(shop);
  }, []), chnageActiveShop = import_react5.default.useCallback((shop) => {
    window.localStorage.setItem("xshop", JSON.stringify(shop)), storeActiveShopCookie(shop), setActiveShop(shop);
  }, []);
  import_react5.default.useEffect(() => {
    let lsShop = window.localStorage.getItem("xshop");
    if (lsShop) {
      let lsShopData = JSON.parse(lsShop);
      setActiveShop(lsShopData), storeActiveShopCookie(lsShopData);
    }
    console.log("Run useEffect in ShopProvider storeActiveShop");
  }, []);
  let resetShopProvider = () => {
    window.localStorage.removeItem("xshop"), setActiveShop(null);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    ShopContext.Provider,
    {
      value: {
        // shops,
        // storeShops,
        activeShop,
        storeActiveShop,
        chnageActiveShop,
        resetShopProvider
      },
      ...props
    }
  );
}
var useShopProvider = () => {
  let context = import_react5.default.useContext(ShopContext);
  if (!context)
    throw new Error("useShopProvider must be used within a ShopProvider");
  return context;
}, ShopProvider_default = ShopProvider;

// app/root.tsx
var import_react_query = require("react-query"), import_devtools = require("react-query/devtools");

// app/context/TopProgressBarProvider.tsx
var import_react6 = __toESM(require("react")), import_jsx_runtime4 = require("react/jsx-runtime"), TopProgressBarContext = import_react6.default.createContext(null);
TopProgressBarContext.displayName = "TopProgressBarContext";
function TopProgressBarProvider({ ...props }) {
  let [progress, setProgress] = import_react6.default.useState(0);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    TopProgressBarContext.Provider,
    {
      value: { progress, setProgress },
      ...props
    }
  );
}
var useTopProgressBarProvider = () => {
  let context = import_react6.default.useContext(TopProgressBarContext);
  if (context === void 0)
    throw new Error(
      "useTopProgressBarProvider must be used within a TopProgressBarProvider"
    );
  return context;
}, TopProgressBarProvider_default = TopProgressBarProvider;

// app/context/ThemeContext.tsx
var import_react7 = __toESM(require("react")), import_jsx_runtime5 = require("react/jsx-runtime"), ThemeContext = import_react7.default.createContext(null);
ThemeContext.displayName = "ThemeContext";
var setTheme = (theme2, setState, stateValue) => {
  localStorage.setItem("theme", theme2), document.documentElement.className = theme2, setState(stateValue);
};
function ThemeProvider(props) {
  let [isSideMenuOpen, setIsSideMenuOpen] = import_react7.default.useState(!1), [isDarkMode, setIsDarkMode] = import_react7.default.useState(!1);
  import_react7.default.useEffect(() => {
    window.localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? setTheme("dark", setIsDarkMode, !0) : setTheme("light", setIsDarkMode, !1);
  }, []);
  let toggleDarkMode = () => {
    window.localStorage.theme === "dark" ? setTheme("light", setIsDarkMode, !1) : setTheme("dark", setIsDarkMode, !0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ThemeContext.Provider,
    {
      value: {
        isSideMenuOpen,
        setIsSideMenuOpen,
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode
      },
      ...props
    }
  );
}
var useThemeProvider = () => {
  let context = import_react7.default.useContext(ThemeContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}, ThemeContext_default = ThemeProvider;

// app/root.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), links = () => [{ rel: "stylesheet", href: app_default }], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), loader = async ({ request }) => {
  let res = await getUser(request), user = res == null ? void 0 : res.data;
  return (0, import_node4.json)({
    user: {
      user: user || {}
    }.user,
    ENV: {
      API_BASE_URL: process.env.API_BASE_URL
    }
  });
}, Document = (0, import_react10.withEmotionCache)(
  ({
    children,
    title = "Remix: So great, it's funny!",
    ENV
  }, emotionCache) => {
    let serverStyleData = (0, import_react9.useContext)(ServerStyleContext), clientStyleData = (0, import_react9.useContext)(ClientStyleContext);
    return (0, import_react9.useEffect)(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData == null || clientStyleData.reset();
    }, []), /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("head", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react8.Meta, {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("title", { children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react8.Links, {}),
        serverStyleData == null ? void 0 : serverStyleData.map(
          ({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "style",
            {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            },
            key
          )
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("body", { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react8.ScrollRestoration, {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "script",
          {
            dangerouslySetInnerHTML: {
              __html: `window.ENV = ${JSON.stringify(ENV)}`
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react8.Scripts, {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react8.LiveReload, {})
      ] })
    ] });
  }
), theme = (0, import_react11.extendTheme)({
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'Raleway', sans-serif"
  },
  colors: {
    primary: import_react11.baseTheme.colors.red
  }
}), queryClient = new import_react_query.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !1
    }
  }
});
function App() {
  let { user, ENV } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Document, { ENV, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TopProgressBarProvider_default, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ThemeContext_default, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AuthProvider_default, { user, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_query.QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_devtools.ReactQueryDevtools, { initialIsOpen: !1 }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ShopProvider_default, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react11.ChakraProvider, { theme, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react8.Outlet, {}) }) })
  ] }) }) }) }) });
}
function CatchBoundary() {
  let caught = (0, import_react8.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "error-container", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("h1", { children: [
    caught.status,
    " ",
    caught.statusText
  ] }) }) });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Document, { title: "Uh-oh!", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "error-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { children: "App Error" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { children: error.message })
  ] }) });
}

// app/routes/admin/parcel-action/assign/$parcelNumber.tsx
var parcelNumber_exports = {};
__export(parcelNumber_exports, {
  action: () => action,
  default: () => parcelNumber_default,
  loader: () => loader2,
  meta: () => meta2
});
var import_react19 = __toESM(require("react"));

// app/components/admin/AdminLayout.tsx
var import_react17 = __toESM(require("react"));

// app/utils/index.ts
var import_node5 = require("@remix-run/node"), import_validator2 = __toESM(require("validator")), classNames = (...classes) => classes.filter(Boolean).join(" ");
function validateUrl(url2) {
  return [
    "/",
    "/dashboard",
    "/admin",
    "/admin/dashboard",
    "/packagehandler",
    "/packagehandler/dashboard"
  ].includes(url2) ? url2 : "/dashboard";
}
function validateEmail(email) {
  if (typeof email != "string" || !import_validator2.default.isEmail(email))
    return "Invalid email address";
}
function validatePassword(password) {
  if (typeof password != "string" || password.length < 6)
    return "Passwords must be at least 6 characters long";
}
var badRequest = (data) => (0, import_node5.json)(data, { status: 400 }), calculateDeliveryCharge = ({
  weight,
  zoneId,
  parcelPrices
}) => {
  if (!zoneId)
    return 0;
  let charge = parcelPrices.data.find((item) => item.id === zoneId);
  return charge ? weight <= 500 ? charge.pricing.KG05_PRICE : weight <= 1e3 ? charge.pricing.KG1_PRICE : weight <= 2e3 ? charge.pricing.KG2_PRICE : weight <= 3e3 ? charge.pricing.KG3_PRICE : weight <= 4e3 ? charge.pricing.KG4_PRICE : weight <= 5e3 ? charge.pricing.KG5_PRICE : Math.round(charge.pricing.KG5_PRICE / 5e3 * weight) : 0;
};

// app/components/admin/Header.tsx
var import_react12 = require("@headlessui/react"), import_react13 = require("@remix-run/react");
var import_jsx_runtime7 = require("react/jsx-runtime");
function Header({
  isSideMenuOpen,
  toggleDarkMode,
  isDarkMode
}) {
  let { setIsSideMenuOpen } = useThemeProvider(), { name } = useAuthProvider(), avatarUrl = "/img/avatar.png";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("header", { className: "z-10 py-4 bg-white shadow-md dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "button",
      {
        className: "p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple",
        onClick: () => setIsSideMenuOpen(!isSideMenuOpen),
        "aria-label": "Menu",
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "svg",
          {
            className: "w-6 h-6",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "path",
              {
                fillRule: "evenodd",
                d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                clipRule: "evenodd"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("ul", { className: "flex items-center flex-shrink-0 space-x-6 ml-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          className: "rounded-md focus:outline-none focus:shadow-outline-purple",
          onClick: () => toggleDarkMode(),
          "aria-label": "Toggle color mode",
          children: isDarkMode ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "svg",
            {
              className: "w-5 h-5",
              "aria-hidden": "true",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" })
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "svg",
            {
              className: "w-5 h-5",
              "aria-hidden": "true",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                  clipRule: "evenodd"
                }
              )
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react12.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react12.Menu.Button,
          {
            className: "align-middle rounded-full focus:shadow-outline-purple focus:outline-none",
            "aria-label": "Account",
            "aria-haspopup": "true",
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "img",
              {
                className: "object-cover w-8 h-8 rounded-full",
                src: avatarUrl,
                alt: "",
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          import_react12.Menu.Items,
          {
            as: "ul",
            className: "absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700",
            "aria-label": "submenu",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react12.Menu.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "svg",
                  {
                    className: "w-4 h-4 mr-3",
                    "aria-hidden": "true",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: name })
              ] }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react12.Menu.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
                import_react13.Link,
                {
                  className: "inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200",
                  type: "submit",
                  to: "/admin/logout",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                      "svg",
                      {
                        className: "w-4 h-4 mr-3",
                        "aria-hidden": "true",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Log out" })
                  ]
                }
              ) }) })
            ]
          }
        )
      ] }) })
    ] })
  ] }) });
}
var Header_default = Header;

// app/components/admin/SideBar/DesktopSidebar.tsx
var import_react15 = require("@remix-run/react");

// app/components/admin/SideBar/SideBarHelper.tsx
var import_react14 = require("@headlessui/react"), import_react_router_dom = require("react-router-dom"), import_md = require("react-icons/md"), import_bs = require("react-icons/bs"), import_tb = require("react-icons/tb");
var import_ci = require("react-icons/ci"), import_fi = require("react-icons/fi"), import_jsx_runtime8 = require("react/jsx-runtime"), sideBarMenus = [
  {
    name: "Dashboard",
    url: "/admin/dashboard",
    icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_md.MdOutlineSpaceDashboard, { size: "1.2rem" })
  },
  {
    name: "Merchant list",
    url: "/admin/merchant-list",
    icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_fi.FiUsers, { size: "1.2rem" })
  },
  {
    name: "Shop list",
    url: "/admin/shop-list",
    icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_ci.CiShop, { size: "1.2rem" })
  },
  {
    name: "Parcel requests",
    url: "/admin/parcel-requests",
    icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_bs.BsFileEarmarkBarGraph, { size: "1.2rem" })
  },
  {
    name: "Parcel action",
    url: "/",
    icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_md.MdPendingActions, { size: "1.2rem" }),
    children: [
      {
        name: "Receive parcel",
        url: "/admin/parcel-action/receive"
      }
    ]
  },
  {
    name: "Field handlers",
    url: "/sales/all",
    icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_tb.TbTruckDelivery, { size: "1.2rem" }),
    children: [
      {
        name: "Handler list",
        url: "/admin/package-handlers/list"
      },
      {
        name: "Add new",
        url: "/admin/package-handlers/add-new"
      }
    ]
  },
  {
    name: "Merchant payments",
    url: "/admin/merchant-payments",
    icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_bs.BsFileEarmarkBarGraph, { size: "1.2rem" }),
    children: [
      {
        name: "list",
        url: "/admin/merchant-payments"
      },
      {
        name: "Add new",
        url: "/admin/merchant-payments/add-new"
      }
    ]
  }
];
function SideBarMenuItem({ item }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "relative px-6 py-3", children: item.children ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react14.Disclosure, { defaultOpen: !0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      import_react14.Disclosure.Button,
      {
        "aria-label": "sidebar-parent-menu",
        className: "w-full inline-flex items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "inline-flex items-center", children: item.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "ml-4", children: item.name }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "svg",
            {
              className: "w-4 h-4 ml-auto",
              "aria-hidden": "true",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M19 9l-7 7-7-7" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react14.Disclosure.Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ul", { className: "p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900", children: item.children.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "li",
      {
        className: "px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",
        "aria-label": "submenu",
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_react_router_dom.NavLink,
          {
            className: ({ isActive }) => classNames(
              "w-full",
              isActive ? "text-gray-800 dark:text-gray-100" : null
            ),
            to: child.url,
            children: child.name
          }
        )
      },
      i
    )) }) })
  ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_react_router_dom.NavLink,
    {
      className: ({ isActive }) => classNames(
        "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ",
        isActive ? "text-gray-800 dark:text-gray-100" : null
      ),
      to: item.url,
      end: !0,
      "aria-label": "sidebar-parent-menu",
      children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
        isActive ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "span",
          {
            className: "absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg",
            "aria-hidden": "true"
          }
        ) : null,
        item.icon,
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "ml-4", children: item.name })
      ] })
    }
  ) });
}
var sideBarMenusSize = sideBarMenus.length, sideBarMenusTotalSize = sideBarMenus.reduce(
  (acc, cur) => {
    var _a;
    return acc + (cur.children && cur.children.length > 0 ? 1 + ((_a = cur.children) == null ? void 0 : _a.length) : 1);
  },
  0
);

// app/components/admin/SideBar/DesktopSidebar.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function DesktopSidebar({
  title,
  menus
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("aside", { className: "z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "py-4 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_react15.Link,
      {
        className: "ml-6 text-lg font-bold text-gray-800 dark:text-gray-200",
        to: "/",
        children: title
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("ul", { className: "mt-6", children: menus != null && menus.length ? menus.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SideBarMenuItem, { item }, index)) : null })
  ] }) });
}
var DesktopSidebar_default = DesktopSidebar;

// app/components/admin/SideBar/MobileSidebar.tsx
var import_react16 = require("@remix-run/react");
var import_jsx_runtime10 = require("react/jsx-runtime");
function MobileSidebar({
  title,
  menus
}) {
  let { setIsSideMenuOpen, isSideMenuOpen } = useThemeProvider();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: isSideMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        onClick: () => setIsSideMenuOpen(!1),
        "aria-label": "mobile-sidebar-overlay",
        className: "fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("aside", { className: " fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "py-4 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_react16.Link,
        {
          className: "ml-6 text-lg font-bold text-gray-800 dark:text-gray-200",
          to: "/",
          children: title
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { className: "mt-6", children: menus != null && menus.length ? menus.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        SideBarMenuItem,
        {
          item
        },
        index
      )) : null })
    ] }) })
  ] }) });
}
var MobileSidebar_default = MobileSidebar;

// app/components/admin/AdminLayout.tsx
var import_react_top_loading_bar = __toESM(require("react-top-loading-bar"));
var import_jsx_runtime11 = require("react/jsx-runtime");
function AdminLayout({ children }) {
  let { isDarkMode, isSideMenuOpen, toggleDarkMode } = useThemeProvider(), { progress, setProgress } = useTopProgressBarProvider();
  return import_react17.default.useEffect(() => {
    setProgress(100);
  }, [setProgress]), /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_top_loading_bar.default, { color: "#7e3af2", progress }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "div",
      {
        className: classNames(
          "flex h-screen bg-gray-50 dark:bg-gray-900",
          isSideMenuOpen ? "overflow-hidden" : null
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DesktopSidebar_default, { title: "DPDNS-Admin", menus: sideBarMenus }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MobileSidebar_default, { title: "DPDMS-Admin", menus: sideBarMenus }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-col flex-1 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              Header_default,
              {
                isDarkMode,
                isSideMenuOpen,
                toggleDarkMode
              }
            ),
            children
          ] })
        ]
      }
    )
  ] });
}
var AdminLayout_default = AdminLayout;

// app/routes/admin/parcel-action/assign/$parcelNumber.tsx
var import_node6 = require("@remix-run/node");
var import_react20 = require("@remix-run/react"), import_react21 = require("@chakra-ui/react");

// app/utils/admin/parcels.ts
var getParcelsForAdmin = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get(
      "/parcels/all?shop=true&deliveryArea=true&pickup=true",
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, getParcelsForAdminByParcelNumber = async (request, parcelNumber) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get(
      `/parcels/${parcelNumber}?deliveryArea=true&pickup=true`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, updateParcelForAdminByParcelNumber = async (request, parcelNumber, data) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.patch(`/parcels/${parcelNumber}`, data, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, assignFieldPackageHandlerToParcel = async (request, data) => {
  var _a;
  let { parcelNumber, handlerType, handlerId } = data;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.patch(
      `/parcels?parcelNumber=${parcelNumber}&handlerType=${handlerType}&handlerId=${handlerId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, receiveParcelByAdmin = async (request, parcelNumber) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.patch(
      `/parcels/admin/receive/${parcelNumber}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/components/common/ParcelStatusBadge.tsx
var import_react18 = require("@chakra-ui/react"), import_ci2 = require("react-icons/ci"), import_md2 = require("react-icons/md"), import_cg = require("react-icons/cg"), import_gi = require("react-icons/gi"), import_ai = require("react-icons/ai"), import_jsx_runtime12 = require("react/jsx-runtime");
function ParcelStatusBadge({
  status
}) {
  let colorScheme = status === "pending" ? "cyan" : status === "cancelled" ? "red" : "green", title = status === "pending" ? "Pending" : status == "cancelled" ? "Cancelled" : status == "picking-up" ? "Picking up" : status == "in-transit" ? "In transit" : status == "processing" ? "Processing" : "Delivered";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_react18.Badge,
    {
      colorScheme,
      variant: "outline",
      borderRadius: 5,
      p: "2",
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react18.Flex, { align: "center", gap: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react18.Icon, { as: status === "pending" ? import_cg.CgSandClock : status === "cancelled" ? import_md2.MdOutlineCancel : status === "picking-up" ? import_gi.GiCardPickup : status === "in-transit" ? import_ai.AiOutlineFieldTime : status === "processing" ? import_gi.GiSandsOfTime : import_ci2.CiDeliveryTruck, fontSize: "lg" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react18.Text, { as: "span", children: title })
      ] })
    }
  );
}

// app/routes/admin/parcel-action/assign/$parcelNumber.tsx
var import_react_query2 = require("react-query");

// app/utils/admin/CSR_API/index.ts
var baseURL = typeof window < "u" && window.ENV.API_BASE_URL, configAxios = axios_default.create({
  baseURL
}), getUserRolesClient = (areaId, roleName, userToken) => configAxios.get(
  `/filed-package-handlers?areaId=${areaId}&${roleName ? `roleName=${roleName}` : ""}`,
  {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  }
);

// app/routes/admin/parcel-action/assign/$parcelNumber.tsx
var import_jsx_runtime13 = require("react/jsx-runtime"), action = async ({ request }) => {
  let form = await request.formData(), parcelNumber = form.get("parcelNumber"), handlerType = form.get("handlerType"), handlerId = form.get("handlerId");
  if (typeof parcelNumber != "string" || typeof handlerType != "string" || typeof handlerId != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = {
    parcelNumber,
    handlerType,
    handlerId
  };
  try {
    let createdPackageHandler = await assignFieldPackageHandlerToParcel(
      request,
      {
        ...fields,
        handlerId: Number(handlerId)
      }
    );
  } catch (error) {
    return badRequest({
      formError: error
    });
  }
  return (0, import_node6.redirect)("/admin/parcel-requests");
}, loader2 = async ({ params, request }) => {
  await requireAdminUserId(request);
  let userToken = await getUserToken(request), parcel = await getParcelsForAdminByParcelNumber(
    request,
    params.parcelNumber
  );
  return parcel && parcel.message ? {
    error: parcel.message,
    parcel: null
  } : parcel ? { parcel, userToken } : {
    error: "Something went wrong",
    parcel: null
  };
}, meta2 = ({
  data
}) => {
  var _a, _b;
  return data ? {
    title: `${(_a = data.parcel) == null ? void 0 : _a.customerName} - ${(_b = data.parcel) == null ? void 0 : _b.parcelNumber}`
  } : {
    title: "Wrong path"
  };
}, ParcelActionAssign = () => {
  var _a, _b, _c;
  let actionData = (0, import_react20.useActionData)(), { parcel, userToken } = (0, import_react20.useLoaderData)(), transition = (0, import_react20.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "addNewPackageHandler", [handlerType, setHandlerType] = import_react19.default.useState(), { data: userRoles } = (0, import_react_query2.useQuery)({
    queryKey: ["userRoles", (_b = parcel == null ? void 0 : parcel.parcelDeliveryArea) == null ? void 0 : _b.id, handlerType],
    queryFn: () => {
      var _a2, _b2;
      return getUserRolesClient(
        handlerType === "deliveryman" ? parcel == null ? void 0 : parcel.parcelDeliveryAreaId : (_b2 = (_a2 = parcel == null ? void 0 : parcel.parcelPickUp) == null ? void 0 : _a2.area) == null ? void 0 : _b2.id,
        handlerType,
        userToken
      );
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: [
      "Assign package handler for",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react21.Text, { as: "span", color: "purple.500", children: [
        "#",
        parcel == null ? void 0 : parcel.parcelNumber
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react21.Text, { mb: "8", children: [
      "Current status:",
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        ParcelStatusBadge,
        {
          status: parcel == null ? void 0 : parcel.parcelStatus.name
        }
      )
    ] }),
    (actionData == null ? void 0 : actionData.formError) && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react21.Alert, { status: "error", mb: "8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react21.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react21.AlertTitle, { mr: 2, children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react21.AlertDescription, { children: actionData.formError })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react20.Form, { method: "post", className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react21.FormControl, { isRequired: !0, isReadOnly: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react21.FormLabel, { className: "dark:text-white", children: "Parcel number" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_react21.Input,
            {
              type: "text",
              name: "parcelNumber",
              placeholder: "Enter name",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: parcel == null ? void 0 : parcel.parcelNumber
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react21.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react21.FormLabel, { children: "Package handler type" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
            import_react21.Select,
            {
              name: "handlerType",
              placeholder: "Select type",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              onChange: (e) => setHandlerType(e.target.value),
              defaultValue: handlerType || void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "pickupman", children: "Pickup man" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "deliveryman", children: "Delivery man" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react21.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react21.FormLabel, { children: "Package handler" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_react21.Select,
            {
              name: "handlerId",
              placeholder: "Select type",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: (_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.handlerId,
              children: userRoles != null && userRoles.data.data.length ? userRoles == null ? void 0 : userRoles.data.data.map((role) => {
                var _a2;
                return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  "option",
                  {
                    value: role.id,
                    children: (_a2 = role == null ? void 0 : role.User) == null ? void 0 : _a2.name
                  },
                  role.id
                );
              }) : null
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_react21.Button,
        {
          type: "submit",
          name: "_action",
          value: "addNewPackageHandler",
          colorScheme: "purple",
          isLoading: isSubmitting,
          alignSelf: "flex-start",
          mb: "4",
          children: "Assign"
        }
      )
    ] })
  ] }) }) });
}, parcelNumber_default = ParcelActionAssign;

// app/routes/admin/package-handlers/$handlerId.tsx
var handlerId_exports = {};
__export(handlerId_exports, {
  action: () => action2,
  default: () => handlerId_default,
  loader: () => loader3,
  meta: () => meta3
});
var import_react22 = __toESM(require("react"));
var import_node7 = require("@remix-run/node"), import_react23 = require("@remix-run/react");
var import_react24 = require("@chakra-ui/react");

// app/components/common/SearchableAreaSelect.tsx
var import_react_query3 = require("react-query");

// app/utils/merchant/CSR_API/index.ts
var baseURL2 = typeof window < "u" && window.ENV.API_BASE_URL, configAxios2 = axios_default.create({
  baseURL: baseURL2
}), getShopParentCategories = () => configAxios2.get("/shop-product-categories/parent?child=true"), getServiceAreaTree = () => configAxios2.get("/service-area/tree"), getParcelProductParentCateogires = () => configAxios2.get("/shop-product-categories/parcel-parent");

// app/components/common/SearchableSelectInput.tsx
var import_chakra_react_select = require("chakra-react-select"), import_react_window = require("react-window"), import_jsx_runtime14 = require("react/jsx-runtime"), height = 35;
function MenuList(props) {
  let { options, children, maxHeight, getValue } = props, [value] = getValue(), initialOffset = options.indexOf(value) * height;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    import_react_window.FixedSizeList,
    {
      width: "100%",
      height: maxHeight,
      itemCount: children.length,
      itemSize: height,
      initialScrollOffset: initialOffset,
      style: { backgroundColor: "white" },
      children: ({ index }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, { children: children[index] })
    }
  );
}
var SearchableSelect = ({ options, name, defaultValue, onChange }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  import_chakra_react_select.Select,
  {
    filterOption: (0, import_chakra_react_select.createFilter)({
      ignoreAccents: !1
    }),
    components: { MenuList },
    options,
    useBasicStyles: !0,
    placeholder: "Choose pickup area",
    chakraStyles: {
      placeholder: (provider) => ({
        ...provider,
        color: "black"
      })
    },
    selectedOptionColorScheme: "primary",
    focusBorderColor: "primary.500",
    name,
    defaultValue,
    isRequired: !0,
    onChange
  }
), SearchableSelectInput_default = SearchableSelect;

// app/components/common/SearchableAreaSelect.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function SearchableAreaSelect({
  name,
  defaultValue,
  onChange
}) {
  var _a;
  let { data: serviceArea, isLoading } = (0, import_react_query3.useQuery)({
    queryKey: "serviceArea",
    queryFn: () => getServiceAreaTree()
  }), pickupAreaOptions = [];
  return isLoading || (_a = serviceArea == null ? void 0 : serviceArea.data) == null || _a.divisions.forEach((div) => {
    var _a2;
    (_a2 = div == null ? void 0 : div.districts) == null || _a2.forEach((dis) => {
      var _a3;
      (_a3 = dis == null ? void 0 : dis.areas) == null || _a3.forEach((area) => {
        pickupAreaOptions.push({
          label: div.name + " - " + dis.name + " - " + area.name,
          value: area.id.toString(),
          area: area.name,
          zoneId: area.zonesId
        });
      });
    });
  }), /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    SearchableSelectInput_default,
    {
      options: pickupAreaOptions,
      name,
      defaultValue,
      onChange
    }
  );
}
var SearchableAreaSelect_default = SearchableAreaSelect;

// app/utils/admin/roles.ts
var getUserRoles = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get("/roles", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/utils/admin/fieldPackageHandlers.ts
var getFieldPackageHandlers = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get("/filed-package-handlers", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, getFieldPackageHandlerById = async (request, id) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get(`/filed-package-handlers/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, addFieldPackageHandler = async (request, {
  name,
  email,
  phone,
  password,
  address,
  areaId,
  roleId
}) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.post(
      "/filed-package-handlers",
      {
        name,
        email,
        phone,
        password,
        address,
        areaId,
        roleId
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, updateFieldPackageHandler = async (request, id, {
  name,
  email,
  phone,
  password,
  address,
  areaId,
  roleId
}) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.patch(
      `/filed-package-handlers/${id}`,
      {
        name,
        email,
        phone,
        password,
        address,
        areaId,
        roleId
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/routes/admin/package-handlers/$handlerId.tsx
var import_jsx_runtime16 = require("react/jsx-runtime"), action2 = async ({ request, params }) => {
  let form = await request.formData(), name = form.get("name"), email = form.get("email"), phone = form.get("phone"), password = form.get("password"), address = form.get("address"), areaId = form.get("areaId"), roleId = form.get("roleId");
  if (typeof name != "string" || typeof email != "string" || typeof phone != "string" || typeof password != "string" || typeof address != "string" || typeof areaId != "string" || typeof roleId != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = {
    name,
    email,
    phone,
    password,
    address,
    areaId,
    roleId
  }, fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  try {
    let createdPackageHandler = await updateFieldPackageHandler(
      request,
      params.handlerId,
      {
        name,
        email,
        phone,
        password,
        address,
        areaId: Number(areaId),
        roleId: Number(roleId)
      }
    );
    return (0, import_node7.redirect)("/admin/package-handlers/list");
  } catch (error) {
    return badRequest({
      formError: error
    });
  }
}, loader3 = async ({ params, request }) => {
  await requireAdminUserId(request);
  let fieldPackageHandler = await getFieldPackageHandlerById(
    request,
    params.handlerId
  );
  if (fieldPackageHandler && fieldPackageHandler.message)
    return {
      error: fieldPackageHandler.message,
      fieldPackageHandler: null
    };
  if (!fieldPackageHandler)
    return {
      error: "Something went wrong",
      fieldPackageHandler: null
    };
  let userRoles = await getUserRoles(request);
  return userRoles && userRoles.message ? {
    error: userRoles.message,
    userRoles: null
  } : userRoles ? { fieldPackageHandler, userRoles } : {
    error: "Something went wrong",
    userRoles: null
  };
}, meta3 = ({
  data
}) => {
  var _a;
  return data ? {
    title: `${(_a = data.fieldPackageHandler) == null ? void 0 : _a.User.name}`
  } : {
    title: "Wrong path"
  };
};
function SingleFieldPackageHandler() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
  let { fieldPackageHandler, userRoles } = (0, import_react23.useLoaderData)(), actionData = (0, import_react23.useActionData)(), transition = (0, import_react23.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "updatePackageHandler", [show, setShow] = import_react22.default.useState(!1), handleClick = () => setShow(!show), defaultArea = {
    label: `${(_d = (_c = (_b = fieldPackageHandler == null ? void 0 : fieldPackageHandler.area) == null ? void 0 : _b.district) == null ? void 0 : _c.division) == null ? void 0 : _d.name} - ${(_f = (_e = fieldPackageHandler == null ? void 0 : fieldPackageHandler.area) == null ? void 0 : _e.district) == null ? void 0 : _f.name} - ${(_g = fieldPackageHandler == null ? void 0 : fieldPackageHandler.area) == null ? void 0 : _g.name}`,
    value: fieldPackageHandler == null ? void 0 : fieldPackageHandler.areaId.toString()
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: [
      "Modify ",
      fieldPackageHandler == null ? void 0 : fieldPackageHandler.User.name,
      "'s information"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.Box, { id: "form-error-message", mb: "5", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react24.Alert, { status: "error", variant: "left-accent", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.AlertDescription, { children: actionData.formError })
    ] }) : null }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react23.Form, { method: "post", className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react24.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.FormLabel, { className: "dark:text-white", children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_react24.Input,
            {
              type: "text",
              name: "name",
              placeholder: "Enter name",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: fieldPackageHandler == null ? void 0 : fieldPackageHandler.User.name
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          import_react24.FormControl,
          {
            isInvalid: !!((_i = (_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.email) != null && _i.length),
            isRequired: !0,
            mb: "4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.FormLabel, { className: "dark:text-white", children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                import_react24.Input,
                {
                  type: "email",
                  name: "email",
                  placeholder: "Enter email address",
                  focusBorderColor: "primary.500",
                  className: "dark:text-white",
                  defaultValue: fieldPackageHandler == null ? void 0 : fieldPackageHandler.User.email,
                  "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.email ? "email-error" : void 0
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.FormErrorMessage, { children: (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.email ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_jsx_runtime16.Fragment, { children: actionData.fieldErrors.email }) : null })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react24.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.FormLabel, { className: "dark:text-white", children: "Phone" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_react24.Input,
            {
              type: "text",
              name: "phone",
              placeholder: "Enter phone number",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: fieldPackageHandler == null ? void 0 : fieldPackageHandler.User.phone
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          import_react24.FormControl,
          {
            isInvalid: !!((_m = (_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.password) != null && _m.length),
            isRequired: !0,
            mb: "4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.FormLabel, { className: "dark:text-white", children: "Password" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react24.InputGroup, { size: "md", children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  import_react24.Input,
                  {
                    type: show ? "text" : "password",
                    name: "password",
                    placeholder: "Enter password",
                    focusBorderColor: "primary.500",
                    "aria-invalid": Boolean(
                      (_n = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _n.password
                    ) || void 0,
                    "aria-errormessage": (_o = actionData == null ? void 0 : actionData.fieldErrors) != null && _o.password ? "password-error" : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  import_react24.Button,
                  {
                    h: "1.75rem",
                    size: "sm",
                    onClick: handleClick,
                    variant: "outline",
                    fontWeight: "normal",
                    children: show ? "Hide" : "Show"
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.FormErrorMessage, { children: (_p = actionData == null ? void 0 : actionData.fieldErrors) != null && _p.password ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_jsx_runtime16.Fragment, { children: actionData.fieldErrors.password }) : null })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react24.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.FormLabel, { className: "dark:text-white", children: "Address" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_react24.Input,
            {
              type: "text",
              name: "address",
              placeholder: "Enter address",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: fieldPackageHandler == null ? void 0 : fieldPackageHandler.address
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react24.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.FormLabel, { children: "Area" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            SearchableAreaSelect_default,
            {
              name: "areaId",
              defaultValue: defaultArea
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react24.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react24.FormLabel, { children: "Role" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_react24.Select,
            {
              name: "roleId",
              placeholder: "Select role",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: (_s = (_r = (_q = fieldPackageHandler == null ? void 0 : fieldPackageHandler.User) == null ? void 0 : _q.roles[0]) == null ? void 0 : _r.role) == null ? void 0 : _s.id,
              children: userRoles != null && userRoles.data.length ? (_t = userRoles == null ? void 0 : userRoles.data) == null ? void 0 : _t.map((role) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "option",
                {
                  value: role.id,
                  children: role.name
                },
                role.id
              )) : null
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        import_react24.Button,
        {
          type: "submit",
          name: "_action",
          value: "updatePackageHandler",
          colorScheme: "purple",
          isLoading: isSubmitting,
          alignSelf: "flex-start",
          mb: "4",
          children: "Update"
        }
      )
    ] })
  ] }) }) });
}
var handlerId_default = SingleFieldPackageHandler;

// app/routes/packagehandler/parcel-to/delivery.tsx
var delivery_exports = {};
__export(delivery_exports, {
  action: () => action3,
  default: () => delivery_default,
  loader: () => loader4,
  meta: () => meta4
});

// app/components/packagehandler/PackageHandlerLayout.tsx
var import_react30 = __toESM(require("react"));

// app/components/packagehandler/Header.tsx
var import_react25 = require("@headlessui/react"), import_react26 = require("@remix-run/react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function Header2({
  isSideMenuOpen,
  toggleDarkMode,
  isDarkMode
}) {
  let { setIsSideMenuOpen } = useThemeProvider(), { name } = useAuthProvider(), avatarUrl = "/img/avatar.png";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("header", { className: "z-10 py-4 bg-white shadow-md dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        className: "p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple",
        onClick: () => setIsSideMenuOpen(!isSideMenuOpen),
        "aria-label": "Menu",
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "svg",
          {
            className: "w-6 h-6",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              "path",
              {
                fillRule: "evenodd",
                d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                clipRule: "evenodd"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("ul", { className: "flex items-center flex-shrink-0 space-x-6 ml-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "button",
        {
          className: "rounded-md focus:outline-none focus:shadow-outline-purple",
          onClick: () => toggleDarkMode(),
          "aria-label": "Toggle color mode",
          children: isDarkMode ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "svg",
            {
              className: "w-5 h-5",
              "aria-hidden": "true",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" })
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "svg",
            {
              className: "w-5 h-5",
              "aria-hidden": "true",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                  clipRule: "evenodd"
                }
              )
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react25.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_react25.Menu.Button,
          {
            className: "align-middle rounded-full focus:shadow-outline-purple focus:outline-none",
            "aria-label": "Account",
            "aria-haspopup": "true",
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              "img",
              {
                className: "object-cover w-8 h-8 rounded-full",
                src: avatarUrl,
                alt: "",
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          import_react25.Menu.Items,
          {
            as: "ul",
            className: "absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700",
            "aria-label": "submenu",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react25.Menu.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                  "svg",
                  {
                    className: "w-4 h-4 mr-3",
                    "aria-hidden": "true",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: name })
              ] }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react25.Menu.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
                import_react26.Link,
                {
                  className: "inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200",
                  type: "submit",
                  to: "/packagehandler/logout",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                      "svg",
                      {
                        className: "w-4 h-4 mr-3",
                        "aria-hidden": "true",
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "Log out" })
                  ]
                }
              ) }) })
            ]
          }
        )
      ] }) })
    ] })
  ] }) });
}
var Header_default2 = Header2;

// app/components/packagehandler/SideBar/DesktopSidebar.tsx
var import_react28 = require("@remix-run/react");

// app/components/packagehandler/SideBar/SideBarHelper.tsx
var import_react27 = require("@headlessui/react"), import_react_router_dom2 = require("react-router-dom"), import_md3 = require("react-icons/md"), import_tb2 = require("react-icons/tb");
var import_jsx_runtime18 = require("react/jsx-runtime"), sideBarMenus2 = [
  {
    name: "Dashboard",
    url: "/packagehandler/dashboard",
    icon: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_md3.MdOutlineSpaceDashboard, { size: "1.2rem" })
  },
  {
    name: "Parcel to pickup",
    url: "/packagehandler/parcel-to/pickup",
    icon: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_tb2.TbTruckDelivery, { size: "1.2rem" })
  },
  {
    name: "Parcel to delivery",
    url: "/packagehandler/parcel-to/delivery",
    icon: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_tb2.TbTruckDelivery, { size: "1.2rem" })
  }
  // {
  //     name: 'Parcel action',
  //     url: '/',
  //     icon: <MdPendingActions size="1.2rem" />,
  //     children: [
  //         {
  //             name: 'Receive parcel',
  //             url: '/packagehandler/parcel-action/receive',
  //         },
  //     ],
  // },
];
function SideBarMenuItem2({ item }) {
  var _a, _b;
  let { roles } = useAuthProvider();
  return item.name == "Parcel to pickup" && ((_a = roles[0]) == null ? void 0 : _a.role.name) !== "pickupman" || item.name == "Parcel to delivery" && ((_b = roles[0]) == null ? void 0 : _b.role.name) !== "deliveryman" ? null : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("li", { className: "relative px-6 py-3", children: item.children ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react27.Disclosure, { defaultOpen: !0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      import_react27.Disclosure.Button,
      {
        "aria-label": "sidebar-parent-menu",
        className: "w-full inline-flex items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "inline-flex items-center", children: item.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "ml-4", children: item.name }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "svg",
            {
              className: "w-4 h-4 ml-auto",
              "aria-hidden": "true",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: "M19 9l-7 7-7-7" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react27.Disclosure.Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: "p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900", children: item.children.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "li",
      {
        className: "px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",
        "aria-label": "submenu",
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          import_react_router_dom2.NavLink,
          {
            className: ({ isActive }) => classNames(
              "w-full",
              isActive ? "text-gray-800 dark:text-gray-100" : null
            ),
            to: child.url,
            children: child.name
          }
        )
      },
      i
    )) }) })
  ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_react_router_dom2.NavLink,
    {
      className: ({ isActive }) => classNames(
        "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ",
        isActive ? "text-gray-800 dark:text-gray-100" : null
      ),
      to: item.url,
      end: !0,
      "aria-label": "sidebar-parent-menu",
      children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
        isActive ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "span",
          {
            className: "absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg",
            "aria-hidden": "true"
          }
        ) : null,
        item.icon,
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "ml-4", children: item.name })
      ] })
    }
  ) });
}

// app/components/packagehandler/SideBar/DesktopSidebar.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function DesktopSidebar2({
  title,
  menus
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("aside", { className: "z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "py-4 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      import_react28.Link,
      {
        className: "ml-6 text-lg font-bold text-gray-800 dark:text-gray-200",
        to: "/",
        children: title
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "mt-6", children: menus != null && menus.length ? menus.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SideBarMenuItem2, { item }, index)) : null })
  ] }) });
}
var DesktopSidebar_default2 = DesktopSidebar2;

// app/components/packagehandler/SideBar/MobileSidebar.tsx
var import_react29 = require("@remix-run/react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function MobileSidebar2({
  title,
  menus
}) {
  let { setIsSideMenuOpen, isSideMenuOpen } = useThemeProvider();
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: isSideMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        onClick: () => setIsSideMenuOpen(!1),
        "aria-label": "mobile-sidebar-overlay",
        className: "fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("aside", { className: " fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "py-4 text-gray-500 dark:text-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        import_react29.Link,
        {
          className: "ml-6 text-lg font-bold text-gray-800 dark:text-gray-200",
          to: "/",
          children: title
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "mt-6", children: menus != null && menus.length ? menus.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        SideBarMenuItem2,
        {
          item
        },
        index
      )) : null })
    ] }) })
  ] }) });
}
var MobileSidebar_default2 = MobileSidebar2;

// app/components/packagehandler/PackageHandlerLayout.tsx
var import_react_top_loading_bar2 = __toESM(require("react-top-loading-bar"));
var import_jsx_runtime21 = require("react/jsx-runtime");
function PackageHandlerLayout({ children }) {
  let { isDarkMode, isSideMenuOpen, toggleDarkMode } = useThemeProvider(), { progress, setProgress } = useTopProgressBarProvider();
  return import_react30.default.useEffect(() => {
    setProgress(100);
  }, [setProgress]), /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_top_loading_bar2.default, { color: "#7e3af2", progress }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      "div",
      {
        className: classNames(
          "flex h-screen bg-gray-50 dark:bg-gray-900",
          isSideMenuOpen ? "overflow-hidden" : null
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            DesktopSidebar_default2,
            {
              title: "DPDMS-PackageHandler",
              menus: sideBarMenus2
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            MobileSidebar_default2,
            {
              title: "DPDMS-PackageHandler",
              menus: sideBarMenus2
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-col flex-1 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              Header_default2,
              {
                isDarkMode,
                isSideMenuOpen,
                toggleDarkMode
              }
            ),
            children
          ] })
        ]
      }
    )
  ] });
}
var PackageHandlerLayout_default = PackageHandlerLayout;

// app/utils/packagehandler/parcel.ts
var getParcelsToPickUp = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get(
      "/parcels/packagehandler/to-pickup?shop=true&deliveryArea=true&pickup=true&parcelUser=true",
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, getParcelsToDelivery = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get(
      "/parcels/packagehandler/to-deliver?shop=true&deliveryArea=true&pickup=true&parcelUser=true",
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, deliverParcelByPackageHandler = async (request, parcelNumber) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.patch(
      `/parcels/packagehandler/delivered/${parcelNumber}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/routes/packagehandler/parcel-to/delivery.tsx
var import_react32 = require("@remix-run/react");
var import_react_table2 = require("@tanstack/react-table");

// app/components/common/DataTable.tsx
var React9 = __toESM(require("react")), import_react31 = require("@chakra-ui/react"), import_icons = require("@chakra-ui/icons"), import_react_table = require("@tanstack/react-table"), import_jsx_runtime22 = require("react/jsx-runtime");
function DataTable({
  data,
  columns: columns6
}) {
  let [sorting, setSorting] = React9.useState([]), table = (0, import_react_table.useReactTable)({
    columns: columns6,
    data,
    getCoreRowModel: (0, import_react_table.getCoreRowModel)(),
    onSortingChange: setSorting,
    getSortedRowModel: (0, import_react_table.getSortedRowModel)(),
    state: {
      sorting
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react31.Box, { maxH: "500px", overflowY: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_react31.Table, { variant: "striped", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react31.Thead, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react31.Tr, { children: headerGroup.headers.map((header) => {
      let meta32 = header.column.columnDef.meta;
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
        import_react31.Th,
        {
          colSpan: header.colSpan,
          onClick: header.column.getToggleSortingHandler(),
          isNumeric: meta32 == null ? void 0 : meta32.isNumeric,
          className: "cursor-pointer",
          children: [
            header.isPlaceholder ? null : (0, import_react_table.flexRender)(
              header.column.columnDef.header,
              header.getContext()
            ),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react31.chakra.span, { pl: "4", children: header.column.getIsSorted() ? header.column.getIsSorted() === "desc" ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_icons.TriangleDownIcon, { "aria-label": "sorted descending" }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_icons.TriangleUpIcon, { "aria-label": "sorted ascending" }) : null })
          ]
        },
        header.id
      );
    }) }, headerGroup.id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react31.Tbody, { children: table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react31.Tr, { children: row.getVisibleCells().map((cell) => {
      let meta32 = cell.column.columnDef.meta;
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_react31.Td,
        {
          isNumeric: meta32 == null ? void 0 : meta32.isNumeric,
          children: (0, import_react_table.flexRender)(
            cell.column.columnDef.cell,
            cell.getContext()
          )
        },
        cell.id
      );
    }) }, row.id)) })
  ] }) });
}

// app/routes/packagehandler/parcel-to/delivery.tsx
var import_react33 = require("@chakra-ui/react");
var import_jsx_runtime23 = require("react/jsx-runtime"), columnHelper = (0, import_react_table2.createColumnHelper)(), columns = [
  columnHelper.accessor((row) => row.parcelNumber, {
    id: "parcelNumber",
    cell: (info) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.Text, { color: "purple.500", children: info.getValue() }),
    header: () => "Parcel number",
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("parcelStatus", {
    header: () => "Status",
    cell: (info) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ParcelStatusBadge, { status: info.getValue().name }),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("parcelProductType", {
    cell: (info) => info.renderValue(),
    header: () => "Product type",
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("customerName", {
    cell: (info) => info.renderValue(),
    header: () => "Customer name",
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("customerPhone", {
    cell: (info) => info.renderValue(),
    header: () => "Customer phone",
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("parcelDeliveryArea", {
    cell: (info) => {
      var _a;
      return (_a = info.renderValue()) == null ? void 0 : _a.name;
    },
    header: () => "Delivery Area",
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("customerAddress", {
    cell: (info) => info.renderValue(),
    header: () => "Delivery Address",
    footer: (info) => info.column.id
  }),
  columnHelper.accessor("parcelNumber", {
    cell: (info) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_react32.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "input",
        {
          type: "hidden",
          name: "parcelNumber",
          value: info.getValue()
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        import_react33.Button,
        {
          type: "submit",
          name: "_action",
          value: "deliver",
          colorScheme: "purple",
          children: "Deliver"
        }
      )
    ] }),
    header: () => "Delivery Address",
    footer: (info) => info.column.id
  })
], meta4 = () => ({
  title: "Deliverable parcel list"
}), action3 = async ({ request }) => {
  let parcelNumber = (await request.formData()).get("parcelNumber");
  if (typeof parcelNumber != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  try {
    let deliverParcel = await deliverParcelByPackageHandler(
      request,
      parcelNumber
    );
    return deliverParcel && deliverParcel.message ? badRequest({
      formError: deliverParcel.message
    }) : deliverParcel ? {
      formSuccess: {
        message: "Parcel delivered successfully"
      }
    } : badRequest({
      formError: "Something went wrong"
    });
  } catch (error) {
    return badRequest({
      formError: error
    });
  }
}, loader4 = async ({ request }) => {
  await requirePackageHandlerUserId(request);
  let parcels = await getParcelsToDelivery(request);
  return parcels && parcels.message ? {
    error: parcels.message,
    parcels: null
  } : parcels ? { parcels } : {
    error: "Something went wrong",
    parcels: null
  };
};
function ParcelToDelivery() {
  var _a;
  let { parcels } = (0, import_react32.useLoaderData)(), actionData = (0, import_react32.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(PackageHandlerLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Parcel to deliver list" }),
    actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.Box, { id: "form-error-message", mb: "5", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_react33.Alert, { status: "error", variant: "left-accent", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.AlertDescription, { children: actionData.formError })
    ] }) }) : null,
    (_a = actionData == null ? void 0 : actionData.formSuccess) != null && _a.message ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.Box, { id: "form-error-message", mb: "5", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_react33.Alert, { status: "success", variant: "left-accent", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.AlertTitle, { children: "Success!" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react33.AlertDescription, { children: actionData.formSuccess.message })
    ] }) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(DataTable, { columns, data: parcels == null ? void 0 : parcels.data })
  ] }) }) });
}
var delivery_default = ParcelToDelivery;

// app/routes/(merchant)/parcel-tracking/index.tsx
var parcel_tracking_exports = {};
__export(parcel_tracking_exports, {
  default: () => parcel_tracking_default,
  loader: () => loader5,
  meta: () => meta5
});
var import_icons4 = require("@chakra-ui/icons"), import_react38 = require("@chakra-ui/react"), import_react39 = require("@remix-run/react"), import_moment = __toESM(require("moment"));

// app/components/merchant/Navbar.tsx
var import_react34 = require("@chakra-ui/react"), import_icons2 = require("@chakra-ui/icons"), import_react35 = require("@remix-run/react");
var import_jsx_runtime24 = require("react/jsx-runtime"), Links2 = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Parcels", href: "/parcel-list" },
  { title: "Payments", href: "/payments-list" }
], NavLink3 = ({ children, href }) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  import_react34.Link,
  {
    as: import_react35.Link,
    px: 2,
    py: 1,
    rounded: "md",
    _hover: {
      textDecoration: "none",
      bg: (0, import_react34.useColorModeValue)("gray.200", "gray.700")
    },
    to: href,
    children
  }
);
function MerchantNav() {
  let { activeShop, resetShopProvider } = useShopProvider(), { isOpen, onOpen, onClose } = (0, import_react34.useDisclosure)();
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    import_react34.Box,
    {
      as: "nav",
      bg: (0, import_react34.useColorModeValue)("white", "gray.900"),
      py: 3,
      borderBottom: "1px",
      borderColor: "gray.200",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.Container, { maxW: "container.xl", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
          import_react34.Flex,
          {
            h: 16,
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.Flex, { align: "center", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                import_react34.Stack,
                {
                  direction: "row",
                  align: "center",
                  spacing: { md: 0, base: 2 },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      import_react34.IconButton,
                      {
                        variant: "outline",
                        size: "md",
                        icon: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_icons2.CloseIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_icons2.HamburgerIcon, {}),
                        "aria-label": "Open Menu",
                        display: { md: "none" },
                        onClick: isOpen ? onClose : onOpen
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react34.HStack, { alignItems: "center", spacing: "4", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                        import_react34.Link,
                        {
                          as: import_react35.Link,
                          to: "/",
                          fontWeight: "extrabold",
                          fontSize: "4xl",
                          mb: "0",
                          _hover: { textDecoration: "unset" },
                          children: [
                            "DPDM",
                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                              import_react34.Text,
                              {
                                color: "primary.500",
                                display: "inline",
                                children: "S"
                              }
                            )
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        import_react35.Form,
                        {
                          method: "get",
                          action: "/parcel-tracking",
                          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react34.Flex, { children: [
                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                              import_react34.Input,
                              {
                                type: "text",
                                name: "parcelNumber",
                                placeholder: "Parcel Number",
                                roundedRight: "none",
                                bgColor: "white",
                                size: "md",
                                required: !0
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                              import_react34.Button,
                              {
                                type: "submit",
                                name: "_action",
                                value: "track",
                                colorScheme: "primary",
                                roundedLeft: "none",
                                size: "md",
                                px: "8",
                                children: "Track"
                              }
                            )
                          ] })
                        }
                      )
                    ] })
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.Flex, { alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react34.Stack, { direction: "row", spacing: 7, children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                  import_react34.HStack,
                  {
                    as: "nav",
                    spacing: 4,
                    display: { base: "none", md: "flex" },
                    ml: "auto",
                    children: [
                      Links2.map((link) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        NavLink3,
                        {
                          href: link.href,
                          children: link.title
                        },
                        link.title
                      )),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        import_react34.Button,
                        {
                          colorScheme: "primary",
                          fontWeight: "normal",
                          as: import_react35.Link,
                          to: "/create-parcel",
                          children: "Create Parcel"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react34.Menu, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                    import_react34.MenuButton,
                    {
                      as: import_react34.Button,
                      rounded: "full",
                      variant: "link",
                      cursor: "pointer",
                      minW: 0,
                      children: activeShop ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        import_react34.Avatar,
                        {
                          size: "sm",
                          name: activeShop.name
                        }
                      ) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.Avatar, { size: "sm" })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react34.MenuList, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react34.MenuGroup, { title: "Profile", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        import_react34.MenuItem,
                        {
                          _focus: { bg: "primary.50" },
                          as: import_react35.Link,
                          to: "/shop-list",
                          children: "My Shops"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        import_react34.MenuItem,
                        {
                          _focus: { bg: "primary.50" },
                          as: import_react35.Link,
                          to: "/pickup-list",
                          children: "Manage Pickup Location"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        import_react34.MenuItem,
                        {
                          _focus: { bg: "primary.50" },
                          as: import_react35.Link,
                          to: "/settings/password",
                          children: "Shop Settings"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.MenuDivider, {}),
                    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.MenuGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                      import_react34.Link,
                      {
                        as: import_react35.Link,
                        to: "/logout",
                        _hover: {
                          textDecoration: "unset"
                        },
                        onClick: resetShopProvider,
                        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                          import_react34.MenuItem,
                          {
                            _focus: {
                              bg: "primary.50"
                            },
                            children: "Logout"
                          }
                        )
                      }
                    ) })
                  ] })
                ] })
              ] }) })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react34.Drawer, { isOpen, placement: "left", onClose, children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.DrawerOverlay, {}),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react34.DrawerContent, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.DrawerCloseButton, {}),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.DrawerHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_react34.Heading, { fontWeight: "extrabold", children: [
              "RED",
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.Text, { color: "primary.500", display: "inline", children: "X" })
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.DrawerBody, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react34.Stack, { as: "nav", spacing: 4, children: Links2.map((link) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavLink3, { href: link.href, children: link.title }, link.title)) }) })
          ] })
        ] })
      ]
    }
  ) });
}

// app/components/Navbar.tsx
var import_react36 = require("@chakra-ui/react"), import_icons3 = require("@chakra-ui/icons"), import_react37 = require("@remix-run/react"), import_bs2 = require("react-icons/bs"), import_jsx_runtime25 = require("react/jsx-runtime"), Links3 = ["Dashboard", "Parcels", "Payments", "Coupon"], NavLink4 = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
  import_react36.Link,
  {
    px: 2,
    py: 1,
    rounded: "md",
    _hover: {
      textDecoration: "none",
      bg: (0, import_react36.useColorModeValue)("gray.200", "gray.700")
    },
    href: "#",
    children
  }
);
function Navbar() {
  let { isOpen, onOpen, onClose } = (0, import_react36.useDisclosure)();
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    import_react36.Box,
    {
      as: "nav",
      bg: (0, import_react36.useColorModeValue)("white", "gray.900"),
      py: 3,
      borderBottom: "1px",
      borderColor: "gray.200",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Container, { maxW: "container.xl", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
          import_react36.Flex,
          {
            h: 16,
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Flex, { align: "center", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
                import_react36.Stack,
                {
                  direction: "row",
                  align: "center",
                  spacing: { md: 0, base: 2 },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                      import_react36.IconButton,
                      {
                        variant: "outline",
                        size: "md",
                        icon: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_icons3.CloseIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_icons3.HamburgerIcon, {}),
                        "aria-label": "Open Menu",
                        display: { md: "none" },
                        onClick: isOpen ? onClose : onOpen
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.HStack, { alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
                      import_react36.Link,
                      {
                        as: import_react37.Link,
                        to: "/",
                        fontWeight: "extrabold",
                        fontSize: "4xl",
                        mb: "0",
                        _hover: { textDecoration: "unset" },
                        children: [
                          "DPDM",
                          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                            import_react36.Text,
                            {
                              color: "primary.500",
                              display: "inline",
                              children: "S"
                            }
                          )
                        ]
                      }
                    ) }) })
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Flex, { alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Stack, { direction: "row", spacing: 7, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
                import_react36.HStack,
                {
                  as: "nav",
                  spacing: 4,
                  display: { base: "none", md: "flex" },
                  ml: "auto",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_react36.Flex, { align: "center", gap: "2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                        import_react36.Icon,
                        {
                          as: import_bs2.BsFillTelephoneFill,
                          fontSize: "2xl",
                          color: "primary.500"
                        }
                      ),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Text, { as: "span", children: "CALL US" }),
                      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                        import_react36.Link,
                        {
                          href: "tel:09610007339",
                          color: "primary.500",
                          fontWeight: "bold",
                          children: "09610007339"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                      import_react36.Button,
                      {
                        colorScheme: "primary",
                        fontWeight: "normal",
                        variant: "outline",
                        px: "8",
                        size: "lg",
                        as: import_react37.Link,
                        to: "/login",
                        children: "Log in"
                      }
                    )
                  ]
                }
              ) }) })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_react36.Drawer, { isOpen, placement: "left", onClose, children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.DrawerOverlay, {}),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_react36.DrawerContent, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.DrawerCloseButton, {}),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.DrawerHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_react36.Heading, { fontWeight: "extrabold", children: [
              "RED",
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Text, { color: "red", display: "inline", children: "X" })
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.DrawerBody, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react36.Stack, { as: "nav", spacing: 4, children: Links3.map((link) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(NavLink4, { children: link }, link)) }) })
          ] })
        ] })
      ]
    }
  ) });
}

// app/components/Layout.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function Layout({ children }) {
  let { id, roles } = useAuthProvider();
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
    id && roles[0].role.name == "merchant" ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(MerchantNav, {}) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Navbar, {}),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("main", { children })
  ] });
}
var Layout_default = Layout;

// app/utils/merchant/shops.ts
var addShop = async (request, {
  shopName,
  shopEmail,
  shopAddress,
  pickupAddress,
  pickupArea,
  pickupPhone,
  shopProductType,
  shopSubProductType
}) => {
  var _a;
  try {
    let access_token = await getUserToken(request), shop = (await axios_server_default.post(
      "/shops",
      {
        name: shopName,
        email: shopEmail,
        address: shopAddress,
        productType: shopProductType,
        productSubType: shopSubProductType
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data, pickupPointRes = await axios_server_default.post(
      `/shops/${shop.id}/pickup-points`,
      {
        name: pickupAddress,
        address: pickupAddress,
        areaId: Number(pickupArea),
        phone: pickupPhone,
        isActive: !0
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    );
    return shop;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, updateShop = async (request, {
  updateShopId,
  updateShopName,
  updateShopEmail,
  updateShopAddress
}) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.patch(
      `/shops/${updateShopId}`,
      {
        name: updateShopName,
        email: updateShopEmail,
        address: updateShopAddress
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, getShops = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get("/shops", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, getShopIdFromCookie = (request) => {
  let coockies = request.headers.get("cookie");
  if (coockies) {
    let activeShopData = coockies.split("activeShop").find(
      (coockie) => coockie.includes("userId")
    );
    return activeShopData ? JSON.parse(activeShopData).id : null;
  }
  return null;
}, getShopPickUpPoints = async (request, extendOptions) => {
  var _a;
  let options = {
    areaTree: !0,
    activeOnly: !1,
    ...extendOptions
  };
  try {
    let shopId = getShopIdFromCookie(request);
    if (!shopId)
      return null;
    let access_token = await getUserToken(request);
    return (await axios_server_default.get(
      `/shops/${shopId}/pickup-points?areaTree=${options == null ? void 0 : options.areaTree}&activeOnly=${options == null ? void 0 : options.activeOnly}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, addShopPickUpPoint = async (request, {
  pickupName,
  pickupAddress,
  pickupArea,
  pickupPhone
}) => {
  var _a;
  try {
    let shopId = getShopIdFromCookie(request);
    if (!shopId)
      return null;
    let access_token = await getUserToken(request);
    return (await axios_server_default.post(
      `/shops/${shopId}/pickup-points`,
      {
        name: pickupName,
        address: pickupAddress,
        areaId: Number(pickupArea),
        phone: pickupPhone,
        isActive: !0
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, updateShopPickUpPoint = async (request, {
  pickupId,
  pickupName,
  pickupAddress,
  pickupArea,
  pickupPhone,
  pickupStatus
}) => {
  var _a;
  try {
    let shopId = getShopIdFromCookie(request);
    if (!shopId)
      return null;
    let access_token = await getUserToken(request);
    return (await axios_server_default.patch(
      `/shops/${shopId}/pickup-points/${pickupId}`,
      {
        name: pickupName,
        address: pickupAddress,
        areaId: Number(pickupArea),
        phone: pickupPhone,
        isActive: pickupStatus === "active"
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/utils/merchant/parcels.ts
var addParcel = async (request, {
  customerName,
  customerPhone,
  customerAddress,
  parcelCashCollection,
  parcelWeight,
  parcelCharge,
  parcelPrice,
  parcelDeliveryAreaId,
  parcelPickUpId,
  parcelProductCategoriesId,
  parcelProductType,
  customerParcelInvoiceId,
  parcelExtraInformation
}) => {
  var _a;
  try {
    let shopsId = getShopIdFromCookie(request);
    if (!shopsId)
      return null;
    let access_token = await getUserToken(request);
    return (await axios_server_default.post(
      "/parcels",
      {
        customerName,
        customerPhone,
        customerAddress,
        parcelWeight,
        parcelDeliveryAreaId,
        parcelCashCollection,
        parcelPrice,
        parcelProductType,
        parcelProductCategoriesId,
        parcelPickUpId,
        parcelStatusId: 1,
        parcelCharge,
        shopsId,
        customerParcelInvoiceId,
        parcelExtraInformation
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, getParcels = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get(
      "/parcels?pickup=true&shop=true&deliveryArea=true",
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, getParcelPricing = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get("/parcels/pricing", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, getParcelTimelineByParcelNumber = async (request, parcelNumber) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get(
      `/parcel-timeline/${parcelNumber}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
}, cancelParcelByParcelNumber = async (request, parcelNumber) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.delete(`/parcels/${parcelNumber}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/routes/(merchant)/parcel-tracking/index.tsx
var import_jsx_runtime27 = require("react/jsx-runtime"), loader5 = async ({ request }) => {
  let parcelNumber = new URL(request.url).searchParams.get("parcelNumber"), parcelTimeline = await getParcelTimelineByParcelNumber(
    request,
    parcelNumber
  );
  return parcelTimeline && parcelTimeline.message ? {
    error: parcelTimeline.message,
    parcelTimeline: null
  } : parcelTimeline ? { parcelTimeline } : {
    error: "Something is wrong. Please reload the browser.",
    parcelTimeline: null
  };
}, meta5 = ({
  data
}) => {
  var _a;
  return data ? {
    title: `Parcel timeline - ${(_a = data.parcelTimeline) == null ? void 0 : _a.parcelNumber}}`
  } : {
    title: "Wrong path"
  };
};
function ParcelTracking() {
  var _a, _b;
  let { parcelTimeline, error } = (0, import_react39.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react38.Container, { maxW: "container.xl", py: "8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      import_react38.Heading,
      {
        as: "h3",
        fontSize: "3xl",
        pb: "6",
        borderBottom: "4px",
        borderColor: "primary.500",
        display: "inline-block",
        children: "Track parcel"
      }
    ),
    error ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Box, { mt: "12", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react38.Alert, { status: "error", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.AlertDescription, { children: error })
    ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react38.Flex, { mt: "12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Box, { w: "70%", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        import_react38.VStack,
        {
          pos: "relative",
          alignItems: "start",
          spacing: "12",
          _after: {
            content: '""',
            position: "absolute",
            insetY: "0",
            left: "2.5%",
            translateX: "-50%",
            width: "1px",
            bgColor: "green.500",
            zIndex: "0"
          },
          children: (_a = parcelTimeline == null ? void 0 : parcelTimeline.ParcelTimeline) != null && _a.length ? parcelTimeline.ParcelTimeline.map(
            (timeline) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
              import_react38.Flex,
              {
                gap: "4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    import_react38.Flex,
                    {
                      p: "4",
                      w: "12",
                      h: "12",
                      border: "1px",
                      borderColor: "green.500",
                      rounded: "full",
                      alignItems: "center",
                      justifyContent: "center",
                      bgColor: "white",
                      pos: "relative",
                      zIndex: "10",
                      children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_icons4.CheckIcon, { color: "green.500" })
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
                    import_react38.VStack,
                    {
                      spacing: "2",
                      alignItems: "start",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { fontWeight: "bold", children: timeline.message }),
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { fontSize: "xs", children: (0, import_moment.default)(
                          timeline.createdAt
                        ).format(
                          "MMMM Do YYYY, h:mm a"
                        ) })
                      ]
                    }
                  ) })
                ]
              },
              timeline.id
            )
          ) : null
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react38.Box, { w: "30%", bgColor: "blackAlpha.50", p: "8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          import_react38.Heading,
          {
            as: "h4",
            fontSize: "lg",
            pb: "6",
            borderBottom: "4px",
            borderColor: "primary.500",
            display: "inline-block",
            children: "Customer and order details"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react38.VStack, { spacing: "6", alignItems: "start", mt: "8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react38.Box, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { children: "Parcel ID" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { fontWeight: "bold", children: parcelTimeline == null ? void 0 : parcelTimeline.parcelNumber })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react38.Box, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { children: "Customer Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { fontWeight: "bold", children: parcelTimeline == null ? void 0 : parcelTimeline.customerName })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react38.Box, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { children: "Area" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { fontWeight: "bold", children: (_b = parcelTimeline == null ? void 0 : parcelTimeline.parcelDeliveryArea) == null ? void 0 : _b.name })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react38.Box, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { children: "Placed At" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react38.Text, { fontWeight: "bold", children: (0, import_moment.default)(
              parcelTimeline == null ? void 0 : parcelTimeline.createdAt
            ).format("MMMM Do YYYY, h:mm a") })
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
}
var parcel_tracking_default = ParcelTracking;

// app/routes/(merchant)/payments-list/invoice.tsx
var invoice_exports = {};
__export(invoice_exports, {
  default: () => invoice_default,
  loader: () => loader6,
  meta: () => meta6
});
var import_react40 = require("@chakra-ui/react"), import_react41 = require("react"), import_react_to_print = __toESM(require("react-to-print")), import_jsx_runtime28 = require("react/jsx-runtime"), meta6 = () => ({
  title: "Payments List"
}), loader6 = async ({ request }) => null;
function InvoicePage() {
  let componentRef = (0, import_react41.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_react40.Container, { maxW: "container.xl", py: "8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      import_react_to_print.default,
      {
        trigger: () => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react40.Button, { colorScheme: "primary", children: "Print" }),
        content: () => componentRef == null ? void 0 : componentRef.current
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("section", { ref: componentRef, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "max-w-5xl mx-auto bg-white", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("article", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "bg-[white] rounded-b-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "p-9", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "space-y-6 text-slate-700", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react40.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
        import_react40.Text,
        {
          fontWeight: "extrabold",
          fontSize: "4xl",
          mb: "0",
          _hover: {
            textDecoration: "unset"
          },
          children: [
            "DPDM",
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              import_react40.Text,
              {
                color: "primary.500",
                display: "inline",
                children: "S"
              }
            )
          ]
        }
      ) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "p-9", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "grid grid-cols-4 gap-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "text-sm font-light text-slate-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-sm font-normal text-slate-700", children: "Invoice Detail:" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "Unwrapped" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "Fake Street 123" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "San Javier" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "CA 1234" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "text-sm font-light text-slate-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-sm font-normal text-slate-700", children: "Billed To" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "The Boring Company" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "Tesla Street 007" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "Frisco" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "CA 0000" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "text-sm font-light text-slate-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-sm font-normal text-slate-700", children: "Invoice Number" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "000000" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "mt-2 text-sm font-normal text-slate-700", children: "Date of Issue" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "00.00.00" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "text-sm font-light text-slate-500", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-sm font-normal text-slate-700", children: "Terms" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "0 Days" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "mt-2 text-sm font-normal text-slate-700", children: "Due" }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { children: "00.00.00" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "p-9", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "flex flex-col mx-0 mt-8", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("table", { className: "min-w-full divide-y divide-slate-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0",
              children: "Description"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            "th",
            {
              scope: "col",
              className: "hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell",
              children: "Quantity"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            "th",
            {
              scope: "col",
              className: "hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell",
              children: "Rate"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            "th",
            {
              scope: "col",
              className: "py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0",
              children: "Amount"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("tbody", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("td", { className: "py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "font-medium text-slate-700", children: "Delivery charge" }),
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mt-0.5 text-slate-500 sm:hidden", children: "1 unit at 200.00 Tk" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell", children: "1" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell", children: "200.00 Tk" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0", children: "200.00 Tk" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("td", { className: "py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "font-medium text-slate-700", children: "COD Charge" }),
              /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mt-0.5 text-slate-500 sm:hidden", children: "1 unit at $.00" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell", children: "1" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell", children: "2.00 Tk" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0", children: "2.00 Tk" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("tfoot", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "th",
              {
                scope: "row",
                colSpan: 3,
                className: "hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0",
                children: "Subtotal"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "th",
              {
                scope: "row",
                className: "pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden",
                children: "Subtotal"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0", children: "200.00 Tk" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "th",
              {
                scope: "row",
                colSpan: 3,
                className: "hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0",
                children: "Discount"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "th",
              {
                scope: "row",
                className: "pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden",
                children: "Discount"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0", children: "0.00 Tk" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "th",
              {
                scope: "row",
                colSpan: 3,
                className: "hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0",
                children: "Tax"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "th",
              {
                scope: "row",
                className: "pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden",
                children: "Tax"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0", children: "0.00 Tk" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "th",
              {
                scope: "row",
                colSpan: 3,
                className: "hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0",
                children: "Total"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "th",
              {
                scope: "row",
                className: "pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden",
                children: "Total"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("td", { className: "pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0", children: "200.00 Tk" })
          ] })
        ] })
      ] }) }) })
    ] }) }) }) })
  ] }) });
}
var invoice_default = InvoicePage;

// app/routes/admin/merchant-payments/add-new.tsx
var add_new_exports = {};
__export(add_new_exports, {
  default: () => add_new_default,
  loader: () => loader7,
  meta: () => meta7
});
var import_react42 = require("@remix-run/react"), import_react43 = require("@chakra-ui/react"), import_jsx_runtime29 = require("react/jsx-runtime"), meta7 = () => ({
  title: "Add new merchant payment"
}), loader7 = async ({ request }) => null;
function MerchantPaymentAdd() {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Add new merchant payment" }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_react42.Form, { method: "post", className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_react43.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react43.FormLabel, { children: "Select the parcel" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
            import_react43.Select,
            {
              name: "parcelId",
              placeholder: "Select parcel",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { value: "1", children: "Parcel 1" }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { value: "2", children: "Parcel 2" }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { value: "3", children: "Parcel 3" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_react43.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react43.FormLabel, { className: "dark:text-white", children: "Total payent amount" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            import_react43.Input,
            {
              type: "text",
              name: "name",
              placeholder: "Enter name",
              focusBorderColor: "primary.500",
              className: "dark:text-white"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        import_react43.Button,
        {
          type: "submit",
          name: "_action",
          value: "addNewPackageHandler",
          colorScheme: "purple",
          alignSelf: "flex-start",
          mb: "4",
          as: import_react42.Link,
          to: "/admin/merchant-payments",
          children: "Add"
        }
      )
    ] })
  ] }) }) });
}
var add_new_default = MerchantPaymentAdd;

// app/routes/admin/parcel-requests/$parcelId.tsx
var parcelId_exports = {};
__export(parcelId_exports, {
  action: () => action4,
  default: () => parcelId_default,
  loader: () => loader8,
  meta: () => meta8
});
var import_node8 = require("@remix-run/node"), import_react44 = require("@remix-run/react");
var import_react45 = require("@chakra-ui/react");
var import_jsx_runtime30 = require("react/jsx-runtime"), action4 = async ({ request, params }) => {
  let form = await request.formData(), customerName = form.get("customerName"), customerAddress = form.get("customerAddress"), customerPhone = form.get("customerPhone"), customerParcelInvoiceId = form.get("customerParcelInvoiceId"), parcelExtraInformation = form.get("parcelExtraInformation");
  if (typeof customerName != "string" || typeof customerAddress != "string" || typeof customerPhone != "string" || typeof customerParcelInvoiceId != "string" || typeof parcelExtraInformation != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = {
    customerName,
    customerAddress,
    customerPhone,
    customerParcelInvoiceId,
    parcelExtraInformation
  };
  try {
    let createdPackageHandler = await updateParcelForAdminByParcelNumber(
      request,
      params.parcelId,
      fields
    );
    return (0, import_node8.redirect)("/admin/parcel-requests");
  } catch (error) {
    return badRequest({
      formError: error
    });
  }
}, loader8 = async ({ params, request }) => {
  await requireAdminUserId(request);
  let parcel = await getParcelsForAdminByParcelNumber(
    request,
    params.parcelId
  );
  return parcel && parcel.message ? {
    error: parcel.message,
    parcel: null
  } : parcel ? { parcel } : {
    error: "Something went wrong",
    parcel: null
  };
}, meta8 = ({
  data
}) => {
  var _a, _b;
  return data ? {
    title: `${(_a = data.parcel) == null ? void 0 : _a.customerName} - ${(_b = data.parcel) == null ? void 0 : _b.parcelNumber}`
  } : {
    title: "Wrong path"
  };
};
function SingleFieldPackageHandler2() {
  var _a;
  let { parcel } = (0, import_react44.useLoaderData)(), actionData = (0, import_react44.useActionData)(), transition = (0, import_react44.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "updateParcel";
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: [
      "Modify parcel",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react45.Text, { as: "span", color: "purple.500", children: [
        "#",
        parcel == null ? void 0 : parcel.parcelNumber
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react45.Box, { id: "form-error-message", mb: "5", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react45.Alert, { status: "error", variant: "left-accent", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react45.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react45.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react45.AlertDescription, { children: actionData.formError })
    ] }) : null }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react44.Form, { method: "post", className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react45.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react45.FormLabel, { className: "dark:text-white", children: "Customer name" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_react45.Input,
            {
              type: "text",
              name: "customerName",
              placeholder: "Enter customer name",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: parcel == null ? void 0 : parcel.customerName
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react45.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react45.FormLabel, { className: "dark:text-white", children: "Customer phone" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_react45.Input,
            {
              type: "text",
              name: "customerPhone",
              placeholder: "Enter customer phone number",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: parcel == null ? void 0 : parcel.customerPhone
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react45.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react45.FormLabel, { className: "dark:text-white", children: "Customer address" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_react45.Input,
            {
              type: "text",
              name: "customerAddress",
              placeholder: "Enter customer address",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: parcel == null ? void 0 : parcel.customerAddress
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react45.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react45.FormLabel, { className: "dark:text-white", children: "Customer parcel invoice id" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_react45.Input,
            {
              type: "text",
              name: "customerParcelInvoiceId",
              placeholder: "Enter invoice ID",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: (parcel == null ? void 0 : parcel.customerParcelInvoiceId) || ""
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react45.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react45.FormLabel, { className: "dark:text-white", children: "Parcel extra information" }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_react45.Textarea,
            {
              name: "parcelExtraInformation",
              placeholder: "Parcel extra information",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: (parcel == null ? void 0 : parcel.parcelExtraInformation) || ""
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        import_react45.Button,
        {
          type: "submit",
          name: "_action",
          value: "updateParcel",
          colorScheme: "purple",
          isLoading: isSubmitting,
          alignSelf: "flex-start",
          mb: "4",
          children: "Update"
        }
      )
    ] })
  ] }) }) });
}
var parcelId_default = SingleFieldPackageHandler2;

// app/routes/packagehandler/parcel-to/pickup.tsx
var pickup_exports = {};
__export(pickup_exports, {
  default: () => pickup_default,
  loader: () => loader9,
  meta: () => meta9
});
var import_react46 = require("@remix-run/react");
var import_react_table3 = require("@tanstack/react-table");
var import_react47 = require("@chakra-ui/react"), import_jsx_runtime31 = require("react/jsx-runtime"), columnHelper2 = (0, import_react_table3.createColumnHelper)(), columns2 = [
  columnHelper2.accessor((row) => row.parcelNumber, {
    id: "parcelNumber",
    cell: (info) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react47.Text, { color: "purple.500", children: info.getValue() }),
    header: () => "Parcel number",
    footer: (info) => info.column.id
  }),
  columnHelper2.accessor("parcelStatus", {
    header: () => "Status",
    cell: (info) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ParcelStatusBadge, { status: info.getValue().name }),
    footer: (info) => info.column.id
  }),
  columnHelper2.accessor("shop", {
    cell: (info) => {
      var _a;
      return (_a = info.renderValue()) == null ? void 0 : _a.name;
    },
    header: () => "Shop",
    footer: (info) => info.column.id
  }),
  columnHelper2.accessor("parcelUser", {
    cell: (info) => {
      var _a;
      return (_a = info.renderValue()) == null ? void 0 : _a.name;
    },
    header: () => "Shop Owner",
    footer: (info) => info.column.id
  }),
  columnHelper2.accessor("parcelUser", {
    cell: (info) => {
      var _a;
      return (_a = info.renderValue()) == null ? void 0 : _a.phone;
    },
    header: () => "Owner phone",
    footer: (info) => info.column.id
  }),
  columnHelper2.accessor("parcelPickUp.area", {
    cell: (info) => {
      var _a;
      return (_a = info.renderValue()) == null ? void 0 : _a.name;
    },
    header: () => "Pickup Area",
    footer: (info) => info.column.id
  }),
  columnHelper2.accessor("parcelPickUp", {
    cell: (info) => {
      var _a;
      return (_a = info.renderValue()) == null ? void 0 : _a.address;
    },
    header: () => "Pickup Address",
    footer: (info) => info.column.id
  })
], meta9 = () => ({
  title: "Dashboard",
  description: "Dashboard"
}), loader9 = async ({ request }) => {
  await requirePackageHandlerUserId(request);
  let parcels = await getParcelsToPickUp(request);
  return parcels && parcels.message ? {
    error: parcels.message,
    parcels: null
  } : parcels ? { parcels } : {
    error: "Something went wrong",
    parcels: null
  };
};
function ParcelToPickup() {
  let { parcels } = (0, import_react46.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(PackageHandlerLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Parcel to pickup list" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(DataTable, { columns: columns2, data: parcels == null ? void 0 : parcels.data })
  ] }) }) });
}
var pickup_default = ParcelToPickup;

// app/routes/(merchant)/create-parcel/index.tsx
var create_parcel_exports = {};
__export(create_parcel_exports, {
  action: () => action5,
  default: () => create_parcel_default,
  loader: () => loader10,
  meta: () => meta10
});
var import_react52 = require("@chakra-ui/react"), import_node9 = require("@remix-run/node"), import_react53 = require("@remix-run/react"), import_react54 = __toESM(require("react"));

// app/components/merchant/create-parcel/ParcelInfoInputs.tsx
var import_react49 = require("@chakra-ui/react");

// app/context/CreateParcelContext.tsx
var import_react48 = __toESM(require("react"));
var import_react_query4 = require("react-query");
var import_jsx_runtime32 = require("react/jsx-runtime"), CreateParcelContext = import_react48.default.createContext(
  null
);
CreateParcelContext.displayName = "CreateParcelContext";
var CreateParcelProvider = ({
  pickupPoints,
  parcelPrices,
  ...props
}) => {
  let { data: parcelProductParentCat } = (0, import_react_query4.useQuery)({
    queryKey: "parcelProductParentCategories",
    queryFn: () => getParcelProductParentCateogires()
  }), [cashCollectionAmount, setCashCollectionAmount] = import_react48.default.useState(0), COD_CHARGE = import_react48.default.useMemo(() => cashCollectionAmount < 1 || !cashCollectionAmount ? 0 : cashCollectionAmount / 100, [cashCollectionAmount]), [selectedArea, setSelectedArea] = import_react48.default.useState(), [weight, setWeight] = import_react48.default.useState(0), deliveryCharge = import_react48.default.useMemo(() => calculateDeliveryCharge({
    weight,
    zoneId: selectedArea == null ? void 0 : selectedArea.zoneId,
    parcelPrices
  }), [parcelPrices, selectedArea == null ? void 0 : selectedArea.zoneId, weight]), totalCharge = import_react48.default.useMemo(() => deliveryCharge + COD_CHARGE, [COD_CHARGE, deliveryCharge]);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    CreateParcelContext.Provider,
    {
      value: {
        parcelPrices,
        pickupPoints,
        selectedArea,
        setSelectedArea,
        parcelProductParentCat,
        deliveryCharge,
        weight,
        setWeight,
        COD_CHARGE,
        totalCharge,
        cashCollectionAmount,
        setCashCollectionAmount
      },
      ...props
    }
  );
}, useCreateParcelContext = () => {
  let context = import_react48.default.useContext(CreateParcelContext);
  if (!context)
    throw new Error(
      "useCreateParcelContext must be used within a CreateParcelContext.Provider"
    );
  return context;
};

// app/components/merchant/create-parcel/ParcelInfoInputs.tsx
var import_jsx_runtime33 = require("react/jsx-runtime"), ParcelInfoInputs = ({ setCheckCondition }) => {
  let {
    parcelProductParentCat,
    setSelectedArea,
    setWeight,
    setCashCollectionAmount
  } = useCreateParcelContext();
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.GridItem, { colSpan: { base: 6, lg: 4 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.Heading, { size: "lg", mb: 5, children: "Create new parcel" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.Heading, { as: "h5", fontSize: "md", py: 5, children: "Customer information" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: "5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Full Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_react49.Input,
          {
            type: "text",
            name: "customerName",
            placeholder: "Customer name",
            focusBorderColor: "primary.500"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Phone number" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_react49.Input,
          {
            type: "text",
            name: "customerPhone",
            placeholder: "Customer phone number",
            focusBorderColor: "primary.500"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Customer address" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_react49.Input,
          {
            type: "text",
            name: "customerAddress",
            placeholder: "Customer address",
            focusBorderColor: "primary.500"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormLabel, { children: [
          "Invoice Id ",
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("small", { children: "(Optional)" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_react49.Input,
          {
            type: "text",
            name: "customerParcelInvoiceId",
            placeholder: "Invoice Id",
            focusBorderColor: "primary.500"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.Heading, { as: "h5", fontSize: "md", my: 5, children: "Delivery information" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: "5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Percel weight (gm)" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
          import_react49.NumberInput,
          {
            name: "parcelWeight",
            defaultValue: "500",
            min: 500,
            max: 2e4,
            step: 500,
            focusBorderColor: "primary.500",
            onChange: (_, valueNumber) => setWeight(valueNumber),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.NumberInputField, { placeholder: "500gm", prefix: "gm" }),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.NumberInputStepper, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.NumberIncrementStepper, {}),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.NumberDecrementStepper, {})
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Delivery area" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          SearchableAreaSelect_default,
          {
            name: "parcelDeliveryAreaId",
            onChange: (e) => setSelectedArea({
              area: e == null ? void 0 : e.area,
              zoneId: e == null ? void 0 : e.zoneId
            })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Cash collection ammount" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_react49.NumberInput,
          {
            name: "parcelCashCollection",
            focusBorderColor: "primary.500",
            min: 0,
            onChange: (_, value) => setCashCollectionAmount(value),
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.NumberInputField, { placeholder: "Cash collection ammount" })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Percel product price" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_react49.Input,
          {
            type: "text",
            name: "parcelPrice",
            placeholder: "Percel price",
            focusBorderColor: "primary.500"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Select percel product type" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.RadioGroup, { name: "parcelProductType", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.Stack, { direction: "row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.Radio, { value: "fragile", children: "Fragile" }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.Radio, { value: "liquid", children: "Liquid" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Product category" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_react49.Select,
          {
            placeholder: "Choose product category",
            name: "parcelProductCategoriesId",
            focusBorderColor: "primary.500",
            children: parcelProductParentCat != null && parcelProductParentCat.data.length ? parcelProductParentCat == null ? void 0 : parcelProductParentCat.data.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("option", { value: cat.id, children: cat.name }, cat.id)) : null
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_react49.FormControl, { my: 5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react49.FormLabel, { children: "Extra information (ex: Parcel details, delivery, etc.)" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        import_react49.Textarea,
        {
          name: "parcelExtraInformation",
          focusBorderColor: "primary.500",
          placeholder: "Extra information",
          rows: 5
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      import_react49.Checkbox,
      {
        colorScheme: "primary",
        onChange: (e) => setCheckCondition(e.target.checked),
        children: "Please mention product price. If the product is lost or damage the Amount of compensation will be determine based on the product price."
      }
    )
  ] });
}, ParcelInfoInputs_default = ParcelInfoInputs;

// app/components/merchant/create-parcel/ShopAndParcelInfo.tsx
var import_react50 = require("@chakra-ui/react");
var import_react51 = require("@remix-run/react");
var import_jsx_runtime34 = require("react/jsx-runtime"), ShopAndParcelInfo = ({ actionData }) => {
  var _a;
  let { activeShop } = useShopProvider(), { pickupPoints, deliveryCharge, COD_CHARGE, totalCharge } = useCreateParcelContext();
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.GridItem, { colSpan: { base: 6, lg: 2 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Stack, { bg: "whitesmoke", px: 5, py: 10, spacing: 5, children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Flex, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Text, { fontWeight: "bold", fontSize: "lg", children: activeShop == null ? void 0 : activeShop.name }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Spacer, {}),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_react50.Link,
          {
            as: import_react51.Link,
            to: "/shop-list",
            color: "primary.500",
            _hover: { textDecoration: "none" },
            fontWeight: "bold",
            children: "Change"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.FormLabel, { children: "Pickup point" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_react50.Select,
          {
            placeholder: "Choose pickup point",
            name: "parcelPickUpId",
            focusBorderColor: "primary.500",
            bg: "white",
            children: pickupPoints.data.length ? pickupPoints.data.map((pickupPoint) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
              "option",
              {
                value: pickupPoint.id,
                children: pickupPoint.name
              },
              pickupPoint.id
            )) : null
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Text, { fontWeight: "bold", fontSize: "lg", children: "Delivery charge" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Stack, { spacing: 5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Flex, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Text, { children: "Delivery charge" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Spacer, {}),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Text, { children: [
            deliveryCharge,
            " TK"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Flex, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Text, { children: "COD charge" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Spacer, {}),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Text, { children: [
            COD_CHARGE,
            " Tk"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Divider, { borderColor: "gray.500" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Flex, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Text, { fontWeight: "bold", fontSize: "lg", children: "Total" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Spacer, {}),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Flex, { alignItems: "center", gap: 1, children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
            import_react50.Input,
            {
              name: "parcelCharge",
              value: totalCharge,
              variant: "unstyled",
              textAlign: "right",
              readOnly: !0
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.Text, { children: "Tk" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Box, { my: "5", children: [
      actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Alert, { status: "error", variant: "left-accent", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.AlertIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.AlertTitle, { children: "Error!" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.AlertDescription, { children: actionData.formError })
      ] }) : null,
      (_a = actionData == null ? void 0 : actionData.formSuccess) != null && _a.message ? /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_react50.Alert, { status: "success", variant: "left-accent", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.AlertIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.AlertTitle, { children: "Success!" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react50.AlertDescription, { children: actionData.formSuccess.message })
      ] }) : null
    ] })
  ] });
}, ShopAndParcelInfo_default = ShopAndParcelInfo;

// app/routes/(merchant)/create-parcel/index.tsx
var import_jsx_runtime35 = require("react/jsx-runtime"), meta10 = () => ({
  title: "Create new parcel"
}), loader10 = async ({ request }) => {
  await requireUserId(request);
  let pickupPoints = await getShopPickUpPoints(request, {
    activeOnly: !0
  }), parcelPrices = await getParcelPricing(request);
  return pickupPoints && pickupPoints.message ? {
    error: pickupPoints.message,
    pickupPoints: { data: [] },
    parcelPrices
  } : pickupPoints ? { pickupPoints, parcelPrices } : {
    error: "Something is wrong. Please reload the browser.",
    pickupPoints: { data: [] },
    parcelPrices
  };
}, action5 = async ({ request }) => {
  let form = await request.formData(), customerName = form.get("customerName"), customerPhone = form.get("customerPhone"), customerAddress = form.get("customerAddress"), customerParcelInvoiceId = form.get("customerParcelInvoiceId"), parcelWeight = form.get("parcelWeight"), parcelDeliveryAreaId = form.get("parcelDeliveryAreaId"), parcelCashCollection = form.get("parcelCashCollection"), parcelPrice = form.get("parcelPrice"), parcelProductType = form.get("parcelProductType"), parcelProductCategoriesId = form.get("parcelProductCategoriesId"), parcelExtraInformation = form.get("parcelExtraInformation"), parcelPickUpId = form.get("parcelPickUpId"), parcelCharge = form.get("parcelCharge");
  if (typeof customerName != "string" || typeof customerPhone != "string" || typeof customerAddress != "string" || typeof customerParcelInvoiceId != "string" || typeof parcelWeight != "string" || typeof parcelDeliveryAreaId != "string" || typeof parcelCashCollection != "string" || typeof parcelPrice != "string" || typeof parcelProductType != "string" || typeof parcelProductCategoriesId != "string" || typeof parcelExtraInformation != "string" || typeof parcelPickUpId != "string" || typeof parcelCharge != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = {
    customerName,
    customerPhone,
    customerAddress,
    customerParcelInvoiceId,
    parcelWeight: Number(parcelWeight),
    parcelDeliveryAreaId: Number(parcelDeliveryAreaId),
    parcelCashCollection: Number(parcelCashCollection),
    parcelPrice: Number(parcelPrice),
    parcelProductType,
    parcelProductCategoriesId: Number(parcelProductCategoriesId),
    parcelExtraInformation,
    parcelPickUpId: Number(parcelPickUpId),
    parcelCharge: Number(parcelCharge)
  }, fieldErrors = {};
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  let newParcel = await addParcel(request, { ...fields });
  return newParcel && newParcel.message ? badRequest({
    formError: newParcel.message
  }) : newParcel ? (0, import_node9.json)({
    formSuccess: { message: "Parcel created successful" },
    data: fields
  }) : badRequest({
    formError: "Something went wrong. Please try again."
  });
};
function CreateParcel() {
  var _a;
  let { pickupPoints, parcelPrices } = (0, import_react53.useLoaderData)(), actionData = (0, import_react53.useActionData)(), formRef = import_react54.default.useRef(null);
  import_react54.default.useEffect(() => {
    formRef.current && actionData != null && actionData.formSuccess && formRef.current.reset();
  }, [actionData == null ? void 0 : actionData.formSuccess]);
  let [checkCondition, setCheckCondition] = import_react54.default.useState(!1), transition = (0, import_react53.useTransition)(), createButtonLoading = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "creatingParcel";
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    CreateParcelProvider,
    {
      pickupPoints,
      parcelPrices,
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react52.Container, { maxW: "container.xl", py: "8", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react53.Form, { method: "post", ref: formRef, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_react52.Grid, { templateColumns: "repeat(6, 1fr)", gap: 5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          ParcelInfoInputs_default,
          {
            setCheckCondition
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ShopAndParcelInfo_default, { actionData }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
          import_react52.GridItem,
          {
            colSpan: { base: 6, lg: 4 },
            display: "flex",
            py: 5,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                import_react52.Button,
                {
                  colorScheme: "primary",
                  variant: "outline",
                  size: "lg",
                  as: import_react53.Link,
                  to: "/",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react52.Spacer, {}),
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                import_react52.Button,
                {
                  colorScheme: "primary",
                  size: "lg",
                  isDisabled: !checkCondition,
                  type: "submit",
                  name: "_action",
                  value: "creatingParcel",
                  isLoading: createButtonLoading,
                  children: "Submit"
                }
              )
            ]
          }
        )
      ] }) }) }) })
    }
  );
}
var create_parcel_default = CreateParcel;

// app/routes/(merchant)/payments-list/index.tsx
var payments_list_exports = {};
__export(payments_list_exports, {
  PaymentsTableTr: () => PaymentsTableTr,
  default: () => payments_list_default,
  loader: () => loader11,
  meta: () => meta11
});
var import_react55 = require("@chakra-ui/react"), import_react56 = require("@remix-run/react");
var import_moment2 = __toESM(require("moment")), import_jsx_runtime36 = require("react/jsx-runtime"), meta11 = () => ({
  title: "Payments List"
}), loader11 = async ({ request }) => await requireUserId(request);
function PaymentList() {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react55.Container, { maxW: "container.xl", py: "8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Heading, { as: "h2", size: "lg", children: "Your all payments" }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.TableContainer, { my: 10, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react55.Table, { size: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Thead, { bg: "gray.100", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react55.Tr, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Th, { children: "Invoice ID" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Th, { children: "Created At" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Th, { children: "Cash Collection" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Th, { children: "Delivery Charge" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Th, { children: "COD Charge" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Th, { children: "Total Paid" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Th, { children: "Download" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react55.Tbody, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          PaymentsTableTr,
          {
            payment: {
              id: 1,
              invoiseId: "123456789",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 100,
              deliveryCharge: 10,
              codCharge: 1,
              totalPaid: 90
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          PaymentsTableTr,
          {
            payment: {
              id: 1,
              invoiseId: "454189161",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 1500,
              deliveryCharge: 150,
              codCharge: 15,
              totalPaid: 1335
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          PaymentsTableTr,
          {
            payment: {
              id: 1,
              invoiseId: "5644812069",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 1e3,
              deliveryCharge: 100,
              codCharge: 10,
              totalPaid: 890
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          PaymentsTableTr,
          {
            payment: {
              id: 1,
              invoiseId: "123456789",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 100,
              deliveryCharge: 10,
              codCharge: 1,
              totalPaid: 90
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          PaymentsTableTr,
          {
            payment: {
              id: 1,
              invoiseId: "987654321",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 1500,
              deliveryCharge: 150,
              codCharge: 15,
              totalPaid: 1335
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          PaymentsTableTr,
          {
            payment: {
              id: 1,
              invoiseId: "123456789",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 1e3,
              deliveryCharge: 100,
              codCharge: 10,
              totalPaid: 890
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          PaymentsTableTr,
          {
            payment: {
              id: 1,
              invoiseId: "2394984564",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 100,
              deliveryCharge: 10,
              codCharge: 1,
              totalPaid: 90
            }
          }
        )
      ] })
    ] }) })
  ] }) });
}
function PaymentsTableTr({ payment }) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react55.Tr, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Td, { children: payment.invoiseId }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Td, { children: (0, import_moment2.default)(payment.createdAt).format("LL") }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Td, { children: payment.cashCollection }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Td, { children: payment.deliveryCharge }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Td, { children: payment.codCharge }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Td, { children: payment.totalPaid }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react55.Td, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      import_react55.Button,
      {
        colorScheme: "blue",
        size: "sm",
        as: import_react56.Link,
        to: "/payments-list/invoice",
        children: "Download"
      }
    ) })
  ] });
}
var payments_list_default = PaymentList;

// app/routes/admin/package-handlers/add-new.tsx
var add_new_exports2 = {};
__export(add_new_exports2, {
  action: () => action6,
  default: () => add_new_default2,
  loader: () => loader12,
  meta: () => meta12
});
var import_react57 = __toESM(require("react"));
var import_node10 = require("@remix-run/node"), import_react58 = require("@remix-run/react");
var import_react59 = require("@chakra-ui/react");
var import_jsx_runtime37 = require("react/jsx-runtime"), meta12 = () => ({
  title: "Add new package handler"
}), action6 = async ({ request }) => {
  let form = await request.formData(), name = form.get("name"), email = form.get("email"), phone = form.get("phone"), password = form.get("password"), address = form.get("address"), areaId = form.get("areaId"), roleId = form.get("roleId");
  if (typeof name != "string" || typeof email != "string" || typeof phone != "string" || typeof password != "string" || typeof address != "string" || typeof areaId != "string" || typeof roleId != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = {
    name,
    email,
    phone,
    password,
    address,
    areaId,
    roleId
  }, fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  try {
    let createdPackageHandler = await addFieldPackageHandler(request, {
      name,
      email,
      phone,
      password,
      address,
      areaId: Number(areaId),
      roleId: Number(roleId)
    });
  } catch (error) {
    return badRequest({
      formError: error
    });
  }
  return (0, import_node10.redirect)("/admin/package-handlers/list");
}, loader12 = async ({ request }) => {
  await requireAdminUserId(request);
  let userRoles = await getUserRoles(request);
  return userRoles && userRoles.message ? {
    error: userRoles.message,
    userRoles: null
  } : userRoles ? { userRoles } : {
    error: "Something went wrong",
    userRoles: null
  };
};
function PackagehandlersAdd() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  let actionData = (0, import_react58.useActionData)(), { userRoles } = (0, import_react58.useLoaderData)(), transition = (0, import_react58.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "addNewPackageHandler", [show, setShow] = import_react57.default.useState(!1), handleClick = () => setShow(!show);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Add new package handler" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.Box, { id: "form-error-message", mb: "5", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_react59.Alert, { status: "error", variant: "left-accent", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.AlertDescription, { children: actionData.formError })
    ] }) : null }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_react58.Form, { method: "post", className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_react59.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.FormLabel, { className: "dark:text-white", children: "Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            import_react59.Input,
            {
              type: "text",
              name: "name",
              placeholder: "Enter name",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: (_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.name
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
          import_react59.FormControl,
          {
            isInvalid: !!((_d = (_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email) != null && _d.length),
            isRequired: !0,
            mb: "4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.FormLabel, { className: "dark:text-white", children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                import_react59.Input,
                {
                  type: "email",
                  name: "email",
                  placeholder: "Enter email address",
                  focusBorderColor: "primary.500",
                  className: "dark:text-white",
                  defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.email,
                  "aria-errormessage": (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.email ? "email-error" : void 0
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.FormErrorMessage, { children: (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.email ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: actionData.fieldErrors.email }) : null })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_react59.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.FormLabel, { className: "dark:text-white", children: "Phone" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            import_react59.Input,
            {
              type: "text",
              name: "phone",
              placeholder: "Enter phone number",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: (_h = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _h.phone
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
          import_react59.FormControl,
          {
            isInvalid: !!((_j = (_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password) != null && _j.length),
            isRequired: !0,
            mb: "4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.FormLabel, { className: "dark:text-white", children: "Password" }),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_react59.InputGroup, { size: "md", children: [
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                  import_react59.Input,
                  {
                    type: show ? "text" : "password",
                    name: "password",
                    placeholder: "Enter password",
                    focusBorderColor: "primary.500",
                    "aria-invalid": Boolean(
                      (_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.password
                    ) || void 0,
                    "aria-errormessage": (_l = actionData == null ? void 0 : actionData.fieldErrors) != null && _l.password ? "password-error" : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                  import_react59.Button,
                  {
                    h: "1.75rem",
                    size: "sm",
                    onClick: handleClick,
                    variant: "outline",
                    fontWeight: "normal",
                    children: show ? "Hide" : "Show"
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.FormErrorMessage, { children: (_m = actionData == null ? void 0 : actionData.fieldErrors) != null && _m.password ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: actionData.fieldErrors.password }) : null })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_react59.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.FormLabel, { className: "dark:text-white", children: "Address" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            import_react59.Input,
            {
              type: "text",
              name: "address",
              placeholder: "Enter address",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: (_n = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _n.address
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_react59.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.FormLabel, { children: "Area" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(SearchableAreaSelect_default, { name: "areaId" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_react59.FormControl, { isRequired: !0, mb: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react59.FormLabel, { children: "Role" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            import_react59.Select,
            {
              name: "roleId",
              placeholder: "Select role",
              focusBorderColor: "primary.500",
              className: "dark:text-white",
              defaultValue: (_o = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _o.roleId,
              children: userRoles != null && userRoles.data.length ? (_p = userRoles == null ? void 0 : userRoles.data) == null ? void 0 : _p.map((role) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                "option",
                {
                  value: role.id,
                  children: role.name
                },
                role.id
              )) : null
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        import_react59.Button,
        {
          type: "submit",
          name: "_action",
          value: "addNewPackageHandler",
          colorScheme: "purple",
          isLoading: isSubmitting,
          alignSelf: "flex-start",
          mb: "4",
          children: "Add"
        }
      )
    ] })
  ] }) }) });
}
var add_new_default2 = PackagehandlersAdd;

// app/routes/admin/merchant-payments/index.tsx
var merchant_payments_exports = {};
__export(merchant_payments_exports, {
  PaymentsTableTr: () => PaymentsTableTr2,
  default: () => merchant_payments_default,
  meta: () => meta13
});
var import_react60 = require("@chakra-ui/react"), import_moment3 = __toESM(require("moment"));
var import_react61 = require("@remix-run/react"), import_jsx_runtime38 = require("react/jsx-runtime"), meta13 = () => ({
  title: "Merchant payments - Dashboard",
  description: "Merchant payments"
});
function ShopList() {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Merchant payments" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_react60.Table, { variant: "striped", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Thead, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_react60.Tr, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Th, { children: "Invoice ID" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Th, { children: "Merchant name" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Th, { children: "Shop name" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Th, { children: "Created At" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Th, { children: "Cash Collection" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Th, { children: "Delivery Charge" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Th, { children: "COD Charge" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Th, { children: "Total Paid" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Th, { children: "Download" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_react60.Tbody, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          PaymentsTableTr2,
          {
            payment: {
              id: 1,
              invoiseId: "123456789",
              merchantName: "Md Maruf Ahmed",
              shopName: "Shop1",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 100,
              deliveryCharge: 10,
              codCharge: 1,
              totalPaid: 90
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          PaymentsTableTr2,
          {
            payment: {
              id: 1,
              invoiseId: "454189161",
              merchantName: "Md Maruf Ahmed",
              shopName: "Shop1",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 1500,
              deliveryCharge: 150,
              codCharge: 15,
              totalPaid: 1335
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          PaymentsTableTr2,
          {
            payment: {
              id: 1,
              invoiseId: "5644812069",
              merchantName: "Md Maruf Ahmed",
              shopName: "Shop1",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 1e3,
              deliveryCharge: 100,
              codCharge: 10,
              totalPaid: 890
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          PaymentsTableTr2,
          {
            payment: {
              id: 1,
              invoiseId: "123456789",
              merchantName: "Md Maruf Ahmed",
              shopName: "Shop1",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 100,
              deliveryCharge: 10,
              codCharge: 1,
              totalPaid: 90
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          PaymentsTableTr2,
          {
            payment: {
              id: 1,
              invoiseId: "987654321",
              merchantName: "Md Maruf Ahmed",
              shopName: "Shop1",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 1500,
              deliveryCharge: 150,
              codCharge: 15,
              totalPaid: 1335
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          PaymentsTableTr2,
          {
            payment: {
              id: 1,
              invoiseId: "123456789",
              merchantName: "Md Maruf Ahmed",
              shopName: "Shop1",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 1e3,
              deliveryCharge: 100,
              codCharge: 10,
              totalPaid: 890
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          PaymentsTableTr2,
          {
            payment: {
              id: 1,
              invoiseId: "2394984564",
              merchantName: "Md Maruf Ahmed",
              shopName: "Shop1",
              createdAt: (/* @__PURE__ */ new Date()).toString(),
              updatedAt: (/* @__PURE__ */ new Date()).toString(),
              cashCollection: 100,
              deliveryCharge: 10,
              codCharge: 1,
              totalPaid: 90
            }
          }
        )
      ] })
    ] })
  ] }) }) });
}
function PaymentsTableTr2({ payment }) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_react60.Tr, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Td, { children: payment.invoiseId }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Td, { children: payment.merchantName }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Td, { children: payment.shopName }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Td, { children: (0, import_moment3.default)(payment.createdAt).format("LL") }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Td, { children: payment.deliveryCharge }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Td, { children: payment.codCharge }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Td, { children: payment.totalPaid }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react60.Td, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      import_react60.Button,
      {
        colorScheme: "blue",
        size: "sm",
        as: import_react61.Link,
        to: "/payments-list/invoice",
        children: "Download"
      }
    ) })
  ] });
}
var merchant_payments_default = ShopList;

// app/routes/(merchant)/parcel-list/index.tsx
var parcel_list_exports = {};
__export(parcel_list_exports, {
  ParcelTableTr: () => ParcelTableTr,
  action: () => action7,
  default: () => parcel_list_default,
  loader: () => loader13,
  meta: () => meta14
});
var import_react62 = require("@chakra-ui/react");
var import_bs3 = require("react-icons/bs");
var import_react63 = require("@remix-run/react"), import_moment4 = __toESM(require("moment"));
var import_jsx_runtime39 = require("react/jsx-runtime"), meta14 = () => ({
  title: "Pracel List"
}), action7 = async ({ request }) => {
  let parcelNumber = (await request.formData()).get("parcelNumber");
  if (typeof parcelNumber != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  try {
    let cancelParcel = await cancelParcelByParcelNumber(
      request,
      parcelNumber
    );
    return cancelParcel && cancelParcel.message ? badRequest({
      formError: cancelParcel.message
    }) : cancelParcel ? {
      formSuccess: {
        message: "Parcel has been cancelled successfully"
      }
    } : badRequest({
      formError: "Something went wrong"
    });
  } catch (error) {
    return badRequest({
      formError: error
    });
  }
}, loader13 = async ({ request }) => {
  await requireUserId(request);
  let parcels = await getParcels(request);
  return parcels && parcels.message ? {
    error: parcels.message,
    parcels: null
  } : parcels ? { parcels } : {
    error: "Something went wrong",
    parcels: null
  };
};
function ParcelList() {
  let { error, parcels } = (0, import_react63.useLoaderData)(), actionData = (0, import_react63.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Container, { maxW: "container.xl", py: "8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Heading, { as: "h2", size: "lg", children: "Your all parcel" }),
    actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Box, { id: "form-error-message", mb: "5", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Alert, { status: "error", variant: "left-accent", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.AlertDescription, { children: actionData.formError })
    ] }) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.TableContainer, { my: 10, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Table, { size: "lg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Thead, { bg: "gray.100", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Tr, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Th, { children: "Action" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Th, { children: "Creation Date" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Th, { children: "Pickup Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Th, { children: "ID" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Th, { children: "Shop" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Th, { children: "Customer Details" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Th, { children: "Status" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Th, { children: "Payment Info" }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Th, { children: "Last Update" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Tbody, { children: [
        error ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Tr, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Td, { colSpan: 9, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Text, { color: "red.500", children: error }) }) }) : null,
        parcels != null && parcels.data.length ? parcels == null ? void 0 : parcels.data.map((parcel) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          ParcelTableTr,
          {
            parcel
          },
          parcel.id
        )) : /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Tr, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Td, { colSpan: 9, textAlign: "center", children: "No parcel found" }) })
      ] })
    ] }) })
  ] }) });
}
function ParcelTableTr({ parcel }) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Tr, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Td, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
        import_react62.MenuButton,
        {
          as: import_react62.Button,
          colorScheme: "primary",
          variant: "outline",
          children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Icon, { as: import_bs3.BsThreeDotsVertical })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.MenuList, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react63.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          "input",
          {
            type: "hidden",
            name: "parcelNumber",
            value: parcel.parcelNumber
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          import_react62.MenuItem,
          {
            color: "red.500",
            as: "button",
            type: "submit",
            name: "_action",
            value: "cancelParcel",
            isDisabled: parcel.parcelStatus.name !== "pending",
            children: "Cancel"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Td, { children: (0, import_moment4.default)(parcel.createdAt).format("LL") }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Td, { children: (_a = parcel.parcelPickUp) == null ? void 0 : _a.name }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Td, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Stack, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Text, { children: [
        "ID: ",
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("b", { children: parcel.parcelNumber.toUpperCase() })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Text, { children: [
        "Invoice: ",
        parcel.customerParcelInvoiceId
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Td, { children: (_b = parcel == null ? void 0 : parcel.shop) == null ? void 0 : _b.name }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Td, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Text, { children: parcel.customerName }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Text, { children: parcel.customerPhone }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Text, { children: parcel.customerAddress }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Text, { children: (_c = parcel == null ? void 0 : parcel.parcelDeliveryArea) == null ? void 0 : _c.district.name }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Text, { children: (_d = parcel == null ? void 0 : parcel.parcelDeliveryArea) == null ? void 0 : _d.name })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Td, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ParcelStatusBadge, { status: parcel.parcelStatus.name }) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Td, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Text, { children: [
        "Tk. ",
        parcel.parcelCashCollection,
        " Cash Collection"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_react62.Text, { children: [
        "Tk. ",
        parcel.parcelCharge,
        " Charge"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react62.Td, { children: (0, import_moment4.default)(parcel.updatedAt).format("LL") })
  ] });
}
var parcel_list_default = ParcelList;

// app/routes/(merchant)/pickup-list/index.tsx
var pickup_list_exports = {};
__export(pickup_list_exports, {
  action: () => action8,
  default: () => pickup_list_default,
  loader: () => loader14,
  meta: () => meta15
});
var import_node11 = require("@remix-run/node"), import_react72 = require("@chakra-ui/react");
var import_react73 = require("@remix-run/react");

// app/components/merchant/pickup-list/PickupListGrid.tsx
var import_react65 = require("@chakra-ui/react"), import_bs4 = require("react-icons/bs"), import_ri = require("react-icons/ri");

// app/context/PickupPointProvider.tsx
var import_react64 = __toESM(require("react")), import_jsx_runtime40 = require("react/jsx-runtime"), PickupPointContext = import_react64.default.createContext(
  null
);
PickupPointContext.displayName = "PickupPointContext";
var PickupPointProvider = ({ ...props }) => {
  let [pickupPoint, setPickupPoint] = import_react64.default.useState(
    null
  );
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    PickupPointContext.Provider,
    {
      value: { pickupPoint, setPickupPoint },
      ...props
    }
  );
}, usePickupPoint = () => {
  let context = import_react64.default.useContext(
    PickupPointContext
  );
  if (context === void 0)
    throw new Error(
      "usePickupPoint must be used within a PickupPointProvider"
    );
  return context;
}, PickupPointProvider_default = PickupPointProvider;

// app/components/merchant/pickup-list/PickupListGrid.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function PickupListGrid({
  pickupPoints,
  onOpen,
  onEditDrawerOpen
}) {
  let { setPickupPoint } = usePickupPoint();
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    import_react65.SimpleGrid,
    {
      columns: { sm: 2, md: 3, lg: 4 },
      spacingX: "40px",
      spacingY: "20px",
      mt: "12",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          import_react65.Center,
          {
            bg: "gray.100",
            borderRadius: "base",
            height: { base: "200px", sm: "auto" },
            cursor: "pointer",
            onClick: onOpen,
            children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_react65.Flex, { direction: "column", align: "center", gap: "2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                import_react65.Icon,
                {
                  as: import_bs4.BsFillPlusCircleFill,
                  color: "primary.500",
                  fontSize: "2xl"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react65.Text, { color: "primary.500", children: "Add new pickup point" })
            ] })
          }
        ),
        pickupPoints.data.length ? pickupPoints.data.map((pickupPoint) => /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
          import_react65.Card,
          {
            variant: "outline",
            cursor: "pointer",
            onMouseEnter: () => setPickupPoint(pickupPoint),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react65.CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_react65.Heading, { size: "md", children: [
                " ",
                pickupPoint.name
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react65.CardBody, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react65.Text, { children: pickupPoint.address }) }),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_react65.CardFooter, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react65.Spacer, {}),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                  import_react65.Icon,
                  {
                    as: import_ri.RiPencilLine,
                    fontSize: "xl",
                    cursor: "pointer",
                    onClick: onEditDrawerOpen
                  }
                )
              ] })
            ]
          },
          pickupPoint.id
        )) : null
      ]
    }
  );
}
var PickupListGrid_default = PickupListGrid;

// app/components/merchant/pickup-list/AddPickupPointDrawer.tsx
var import_react66 = __toESM(require("react")), import_react67 = require("@chakra-ui/react"), import_react68 = require("@remix-run/react");
var import_jsx_runtime42 = require("react/jsx-runtime");
function AddPickupPointDrawer({
  onClose,
  isOpen,
  actionData
}) {
  var _a, _b;
  let formRef = import_react66.default.useRef(null), firstField = import_react66.default.useRef(null), transition = (0, import_react68.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "addShopPickup";
  return import_react66.default.useEffect(() => {
    var _a2, _b2;
    (_a2 = actionData == null ? void 0 : actionData.formSuccess) != null && _a2.message.length && ((_b2 = formRef.current) == null || _b2.reset(), onClose());
  }, [actionData, onClose]), /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.Drawer, { placement: "right", size: "lg", onClose, isOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.DrawerOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react68.Form, { method: "post", ref: formRef, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.DrawerContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.DrawerHeader, { borderBottomWidth: "1px", children: "Add new shop pickup point" }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.DrawerBody, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.Stack, { spacing: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.FormLabel, { children: "Pickup name" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              import_react67.Input,
              {
                type: "text",
                name: "pickupName",
                focusBorderColor: "primary.500",
                ref: firstField,
                placeholder: "Enter pickup name"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.FormLabel, { children: "Pickup address" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              import_react67.Input,
              {
                type: "text",
                name: "pickupAddress",
                focusBorderColor: "primary.500",
                placeholder: "Enter pickup address"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.FormLabel, { children: "Pickup area" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(SearchableAreaSelect_default, { name: "pickupArea" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.FormLabel, { children: "Pickup phone" }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
              import_react67.Input,
              {
                type: "text",
                name: "pickupPhone",
                focusBorderColor: "primary.500",
                placeholder: "Pickup phone"
              }
            )
          ] })
        ] }),
        (_b = actionData == null ? void 0 : actionData.formError) != null && _b.length ? /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.Alert, { status: "error", mt: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.AlertIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.AlertTitle, { children: "Error!" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.AlertDescription, { children: actionData.formError })
        ] }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_react67.DrawerFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          import_react67.Button,
          {
            variant: "outline",
            mr: 3,
            onClick: onClose,
            type: "reset",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          import_react67.Button,
          {
            colorScheme: "primary",
            type: "submit",
            name: "_action",
            value: "addShopPickup",
            children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react67.Spinner, {}) : "Save"
          }
        )
      ] })
    ] }) })
  ] });
}
var AddPickupPointDrawer_default = AddPickupPointDrawer;

// app/components/merchant/pickup-list/EditPickupPointDrawer.tsx
var import_react69 = __toESM(require("react")), import_react70 = require("@chakra-ui/react"), import_react71 = require("@remix-run/react");
var import_jsx_runtime43 = require("react/jsx-runtime");
function EditPickupPointDrawer({
  onClose,
  isOpen,
  actionData
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let formRef = import_react69.default.useRef(null), firstField = import_react69.default.useRef(null), transition = (0, import_react71.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "updateShopPickup";
  import_react69.default.useEffect(() => {
    var _a2, _b2;
    (_a2 = actionData == null ? void 0 : actionData.formSuccess) != null && _a2.message.length && ((_b2 = formRef.current) == null || _b2.reset(), onClose());
  }, [actionData, onClose]);
  let { pickupPoint } = usePickupPoint(), defaultArea = {
    label: `${(_d = (_c = (_b = pickupPoint == null ? void 0 : pickupPoint.area) == null ? void 0 : _b.district) == null ? void 0 : _c.division) == null ? void 0 : _d.name} - ${(_f = (_e = pickupPoint == null ? void 0 : pickupPoint.area) == null ? void 0 : _e.district) == null ? void 0 : _f.name} - ${(_g = pickupPoint == null ? void 0 : pickupPoint.area) == null ? void 0 : _g.name}`,
    value: pickupPoint == null ? void 0 : pickupPoint.areaId.toString()
  };
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.Drawer, { placement: "right", size: "lg", onClose, isOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.DrawerOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react71.Form, { method: "post", ref: formRef, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.DrawerContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.DrawerHeader, { borderBottomWidth: "1px", children: "Update shop pickup point" }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.DrawerBody, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.Stack, { spacing: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            "input",
            {
              type: "hidden",
              name: "pickupId",
              defaultValue: pickupPoint == null ? void 0 : pickupPoint.id
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.FormLabel, { children: "Pickup name" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              import_react70.Input,
              {
                type: "text",
                name: "pickupName",
                focusBorderColor: "primary.500",
                ref: firstField,
                placeholder: "Enter pickup name",
                defaultValue: pickupPoint == null ? void 0 : pickupPoint.name
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.FormLabel, { children: "Pickup address" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              import_react70.Input,
              {
                type: "text",
                name: "pickupAddress",
                focusBorderColor: "primary.500",
                placeholder: "Enter pickup address",
                defaultValue: pickupPoint == null ? void 0 : pickupPoint.address
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.FormLabel, { children: "Pickup area" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              SearchableAreaSelect_default,
              {
                name: "pickupArea",
                defaultValue: defaultArea
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.FormLabel, { children: "Pickup phone" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              import_react70.Input,
              {
                type: "text",
                name: "pickupPhone",
                focusBorderColor: "primary.500",
                placeholder: "Pickup phone",
                defaultValue: pickupPoint == null ? void 0 : pickupPoint.phone
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.FormLabel, { children: "Pickup Location Status" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
              import_react70.Select,
              {
                name: "pickupStatus",
                focusBorderColor: "primary.500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    "option",
                    {
                      value: "active",
                      selected: pickupPoint == null ? void 0 : pickupPoint.isActive,
                      children: "Active"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    "option",
                    {
                      value: "inactive",
                      selected: !(pickupPoint != null && pickupPoint.isActive),
                      children: "Inactive"
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        (_h = actionData == null ? void 0 : actionData.formError) != null && _h.length ? /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.Alert, { status: "error", mt: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.AlertIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.AlertTitle, { children: "Error!" }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.AlertDescription, { children: actionData.formError })
        ] }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_react70.DrawerFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          import_react70.Button,
          {
            variant: "outline",
            mr: 3,
            onClick: onClose,
            type: "reset",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          import_react70.Button,
          {
            colorScheme: "primary",
            type: "submit",
            name: "_action",
            value: "updateShopPickup",
            children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react70.Spinner, {}) : "Save"
          }
        )
      ] })
    ] }) })
  ] });
}
var EditPickupPointDrawer_default = EditPickupPointDrawer;

// app/routes/(merchant)/pickup-list/index.tsx
var import_jsx_runtime44 = require("react/jsx-runtime"), meta15 = () => ({
  title: "Pickup point list"
}), loader14 = async ({ request }) => {
  await requireUserId(request);
  let access_token = await getUserToken(request), pickupPoints = await getShopPickUpPoints(request);
  return pickupPoints && pickupPoints.message ? {
    error: pickupPoints.message,
    pickupPoints: { data: [] }
  } : pickupPoints ? { pickupPoints, access_token } : {
    error: "Something is wrong. Please reload the browser.",
    pickupPoints: { data: [] }
  };
}, action8 = async ({ request }) => {
  let form = await request.formData(), action16 = form.get("_action"), pickupName = form.get("pickupName"), pickupAddress = form.get("pickupAddress"), pickupArea = form.get("pickupArea"), pickupPhone = form.get("pickupPhone"), pickupId = form.get("pickupId"), pickupStatus = form.get("pickupStatus");
  switch (action16) {
    case "addShopPickup": {
      if (typeof pickupName != "string" || typeof pickupAddress != "string" || typeof pickupArea != "string" || typeof pickupPhone != "string")
        return badRequest({
          formError: "Form not submitted correctly."
        });
      let pickupPoint = await addShopPickUpPoint(request, {
        pickupName,
        pickupAddress,
        pickupArea,
        pickupPhone
      });
      return pickupPoint && pickupPoint.message ? badRequest({
        formError: pickupPoint.message
      }) : pickupPoint ? (0, import_node11.json)({
        formSuccess: { message: "New Pickup point add successfully" }
      }) : badRequest({
        formError: "Something went wrong. Please try again."
      });
    }
    case "updateShopPickup": {
      if (typeof pickupId != "string" || typeof pickupName != "string" || typeof pickupAddress != "string" || typeof pickupArea != "string" || typeof pickupPhone != "string" || typeof pickupStatus != "string")
        return badRequest({
          formError: "Form not submitted correctly."
        });
      let pickupPoint = await updateShopPickUpPoint(request, {
        pickupId,
        pickupName,
        pickupAddress,
        pickupArea,
        pickupPhone,
        pickupStatus
      });
      return pickupPoint && pickupPoint.message ? badRequest({
        formError: pickupPoint.message
      }) : pickupPoint ? (0, import_node11.json)({
        formSuccess: { message: "Pickup point update successful" }
      }) : badRequest({
        formError: "Something went wrong. Please try again."
      });
    }
    default:
      return badRequest({ formError: "Form not submitted correctly." });
  }
};
function PickupList() {
  let { pickupPoints, error } = (0, import_react73.useLoaderData)(), actionData = (0, import_react73.useActionData)(), {
    onOpen: onPickupPointOpen,
    isOpen: isPickupPointOpen,
    onClose: onPickupPointClose
  } = (0, import_react72.useDisclosure)(), {
    onOpen: onEditPickupPointOpen,
    isOpen: isEditPickupPointOpen,
    onClose: onEditPickupPointClose
  } = (0, import_react72.useDisclosure)({
    // isOpen: true,
  });
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PickupPointProvider_default, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react72.Container, { maxW: "container.xl", py: "8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      import_react72.Heading,
      {
        as: "h3",
        fontSize: "3xl",
        pb: "6",
        borderBottom: "4px",
        borderColor: "primary.500",
        display: "inline-block",
        children: "Pickup points"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      AddPickupPointDrawer_default,
      {
        actionData,
        isOpen: isPickupPointOpen,
        onClose: onPickupPointClose
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      EditPickupPointDrawer_default,
      {
        actionData,
        isOpen: isEditPickupPointOpen,
        onClose: onEditPickupPointClose
      }
    ),
    error ? /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react72.Alert, { status: "error", variant: "left-accent", my: "5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react72.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react72.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react72.AlertDescription, { children: error })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      PickupListGrid_default,
      {
        pickupPoints,
        onOpen: onPickupPointOpen,
        onEditDrawerOpen: onEditPickupPointOpen
      }
    )
  ] }) }) });
}
var pickup_list_default = PickupList;

// app/routes/admin/package-handlers/list.tsx
var list_exports = {};
__export(list_exports, {
  default: () => list_default,
  loader: () => loader15,
  meta: () => meta16
});
var import_react74 = require("@chakra-ui/react"), import_react75 = require("@remix-run/react");
var import_jsx_runtime45 = require("react/jsx-runtime"), meta16 = () => ({
  title: "Parcel Requests - Dashboard",
  description: "Parcel Requests"
}), loader15 = async ({ request }) => {
  await requireAdminUserId(request);
  let fieldPackageHandlers = await getFieldPackageHandlers(request);
  return fieldPackageHandlers && fieldPackageHandlers.message ? {
    error: fieldPackageHandlers.message,
    fieldPackageHandlers: null
  } : fieldPackageHandlers ? { fieldPackageHandlers } : {
    error: "Something went wrong",
    fieldPackageHandlers: null
  };
};
function Packagehandlers() {
  let { fieldPackageHandlers } = (0, import_react75.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Field package handlers" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_react74.Table, { variant: "striped", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Thead, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_react74.Tr, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Th, { children: "Name" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Th, { children: "Phone" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Th, { children: "Address" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Th, { children: "Role" }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Th, { children: "Area" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Tbody, { children: fieldPackageHandlers != null && fieldPackageHandlers.data.length ? fieldPackageHandlers == null ? void 0 : fieldPackageHandlers.data.map(
        (fieldPackageHandler) => /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_react74.Tr, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Td, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
            import_react75.Link,
            {
              to: `/admin/package-handlers/${fieldPackageHandler.id}`,
              className: "text-purple-700",
              children: [
                " ",
                fieldPackageHandler.User.name
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Td, { children: fieldPackageHandler.User.phone }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Td, { children: fieldPackageHandler.address }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Td, { children: fieldPackageHandler.User.roles[0].role.name }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react74.Td, { children: fieldPackageHandler.area.name })
        ] }, fieldPackageHandler.id)
      ) : null })
    ] })
  ] }) }) });
}
var list_default = Packagehandlers;

// app/routes/admin/parcel-action/receive.tsx
var receive_exports = {};
__export(receive_exports, {
  action: () => action9,
  default: () => receive_default,
  loader: () => loader16,
  meta: () => meta17
});
var import_react76 = __toESM(require("react"));
var import_react77 = require("@remix-run/react");
var import_react78 = require("@chakra-ui/react");
var import_jsx_runtime46 = require("react/jsx-runtime"), meta17 = () => ({
  title: "Receive Parcel by Admin"
}), action9 = async ({ request }) => {
  let parcelNumber = (await request.formData()).get("parcelNumber");
  if (typeof parcelNumber != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  try {
    let createdPackageHandler = await receiveParcelByAdmin(
      request,
      parcelNumber
    );
    return createdPackageHandler && createdPackageHandler.message ? badRequest({
      formError: createdPackageHandler.message
    }) : createdPackageHandler ? {
      formSuccess: {
        message: "Parcel receive successfully"
      }
    } : badRequest({
      formError: "Something went wrong"
    });
  } catch (error) {
    return badRequest({
      formError: error
    });
  }
}, loader16 = async ({ request }) => await requireAdminUserId(request), ParcelActionReceive = () => {
  var _a, _b, _c;
  let actionData = (0, import_react77.useActionData)(), transition = (0, import_react77.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "receiveParcel", formRef = import_react76.default.useRef(null), focusInput = import_react76.default.useRef(null);
  return import_react76.default.useEffect(() => {
    var _a2, _b2;
    isSubmitting || ((_a2 = formRef.current) == null || _a2.reset(), (_b2 = focusInput.current) == null || _b2.focus());
  }, [isSubmitting]), /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Parcel action receive" }),
    actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react78.Box, { id: "form-error-message", mb: "5", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(import_react78.Alert, { status: "error", variant: "left-accent", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react78.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react78.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react78.AlertDescription, { children: actionData.formError })
    ] }) }) : null,
    (_b = actionData == null ? void 0 : actionData.formSuccess) != null && _b.message ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react78.Box, { id: "form-error-message", mb: "5", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(import_react78.Alert, { status: "success", variant: "left-accent", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react78.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react78.AlertTitle, { children: "Success!" }),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react78.AlertDescription, { children: actionData.formSuccess.message })
    ] }) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
      import_react77.Form,
      {
        method: "post",
        className: "flex flex-col gap-5",
        ref: formRef,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(import_react78.FormControl, { isRequired: !0, mb: "4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react78.FormLabel, { className: "dark:text-white", children: "Parcel number" }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              import_react78.Input,
              {
                type: "text",
                name: "parcelNumber",
                placeholder: "Enter parcel number",
                focusBorderColor: "primary.500",
                className: "dark:text-white",
                defaultValue: (_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.parcelNumber,
                ref: focusInput
              }
            )
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
            import_react78.Button,
            {
              type: "submit",
              name: "_action",
              value: "receiveParcel",
              colorScheme: "purple",
              isLoading: isSubmitting,
              alignSelf: "flex-start",
              mb: "4",
              children: "Receive"
            }
          )
        ]
      }
    )
  ] }) }) });
}, receive_default = ParcelActionReceive;

// app/routes/admin/parcel-requests/index.tsx
var parcel_requests_exports = {};
__export(parcel_requests_exports, {
  default: () => parcel_requests_default,
  loader: () => loader17,
  meta: () => meta18
});
var import_react79 = __toESM(require("react"));
var import_react_table4 = require("@tanstack/react-table");
var import_react80 = require("@remix-run/react");
var import_moment5 = __toESM(require("moment")), import_react81 = require("@chakra-ui/react"), import_jsx_runtime47 = require("react/jsx-runtime"), columnHelper3 = (0, import_react_table4.createColumnHelper)(), columns3 = [
  columnHelper3.accessor("createdAt", {
    cell: (info) => (0, import_moment5.default)(info.getValue()).format("LL"),
    footer: (info) => info.column.id
  }),
  columnHelper3.accessor((row) => row.parcelNumber, {
    id: "parcelNumber",
    cell: (info) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      import_react80.Link,
      {
        to: `/admin/parcel-requests/${info.getValue()}`,
        className: "text-purple-700 underline underline-offset-2",
        children: info.getValue()
      }
    ),
    header: () => "Parcel number",
    footer: (info) => info.column.id
  }),
  columnHelper3.accessor("parcelStatus", {
    header: () => "Status",
    cell: (info) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ParcelStatusBadge, { status: info.getValue().name }),
    footer: (info) => info.column.id
  }),
  columnHelper3.accessor("shop", {
    cell: (info) => {
      var _a;
      return (_a = info.renderValue()) == null ? void 0 : _a.name;
    },
    header: () => "Shop",
    footer: (info) => info.column.id
  }),
  columnHelper3.accessor("parcelPickUp.area", {
    cell: (info) => {
      var _a;
      return (_a = info.renderValue()) == null ? void 0 : _a.name;
    },
    header: () => "Pickup Area",
    footer: (info) => info.column.id
  }),
  columnHelper3.accessor("parcelDeliveryArea", {
    cell: (info) => {
      var _a;
      return (_a = info.renderValue()) == null ? void 0 : _a.name;
    },
    header: () => "Delivery Area",
    footer: (info) => info.column.id
  }),
  columnHelper3.accessor("parcelNumber", {
    cell: (info) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      import_react80.Link,
      {
        to: `/admin/parcel-action/assign/${info.renderValue()}`,
        className: "text-purple-700 underline underline-offset-2",
        children: "Action"
      }
    ),
    header: () => "Action",
    footer: (info) => info.column.id
  })
], meta18 = () => ({
  title: "Parcel Requests - Dashboard",
  description: "Parcel Requests"
}), loader17 = async ({ request }) => {
  await requireAdminUserId(request);
  let parcels = await getParcelsForAdmin(request);
  return parcels && parcels.message ? {
    error: parcels.message,
    parcels: null
  } : parcels ? { parcels } : {
    error: "Something went wrong",
    parcels: null
  };
};
function ParcelRequests() {
  let { parcels } = (0, import_react80.useLoaderData)(), [query, setQuery] = import_react79.default.useState(""), [status, setStatus] = import_react79.default.useState(""), filteredData = import_react79.default.useMemo(() => parcels ? parcels.data.filter(
    (parcel) => parcel.parcelNumber.includes(query) && (status !== "" ? parcel.parcelStatus.name === status : !0)
  ) : [], [parcels, query, status]);
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Parcel requests" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_react81.Flex, { justifyContent: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        import_react81.Input,
        {
          placeholder: "Search parcel number",
          w: "50%",
          value: query,
          onChange: (e) => setQuery(e.target.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
        import_react81.Select,
        {
          placeholder: "All",
          value: status,
          w: "25%",
          onChange: (e) => setStatus(e.target.value),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "pending", children: "Pending" }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "picking-up", children: "Picking Up" }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "processing", children: "Processing" }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "in-transit", children: "In Transit" }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "delivered", children: "Delivered" }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("option", { value: "cancelled", children: "Cancelled" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(DataTable, { columns: columns3, data: filteredData })
  ] }) }) });
}
var parcel_requests_default = ParcelRequests;

// app/routes/(merchant)/dashboard/index.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  OrderSummary: () => OrderSummary,
  PaymentSummary: () => PaymentSummary,
  default: () => dashboard_default,
  loader: () => loader18,
  meta: () => meta19
});
var import_react83 = require("@chakra-ui/react"), import_react84 = require("@remix-run/react");

// app/components/merchant/dashboard/OverViewCard.tsx
var import_react82 = require("@chakra-ui/react"), import_ai2 = require("react-icons/ai"), import_jsx_runtime48 = require("react/jsx-runtime");
function OverViewCard({ order }) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react82.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react82.CardBody, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react82.HStack, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_react82.Stat, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react82.StatNumber, { children: order.value }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
      import_react82.StatLabel,
      {
        mt: "1",
        display: "flex",
        alignItems: "center",
        gap: 2,
        children: [
          order.labelText,
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
            import_react82.Tooltip,
            {
              hasArrow: !0,
              label: order.tooltipText,
              bg: "white",
              color: "black",
              p: 4,
              rounded: "base",
              shadow: "dark-lg",
              children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
                import_react82.Icon,
                {
                  as: import_ai2.AiOutlineQuestionCircle,
                  color: "gray.500"
                }
              ) })
            }
          )
        ]
      }
    )
  ] }) }) }) });
}
var OverViewCard_default = OverViewCard;

// app/routes/(merchant)/dashboard/index.tsx
var import_react85 = __toESM(require("react"));
var import_jsx_runtime49 = require("react/jsx-runtime"), OrderSummary = [
  {
    id: 1,
    labelText: "Orders placed",
    value: 3,
    tooltipText: "Total sum of parcels that have been created and picked up by DPDMS"
  },
  {
    id: 2,
    labelText: "Orders delivered",
    value: 1,
    tooltipText: "Total sum of parcels that have been delivered"
  },
  {
    id: 3,
    labelText: "Orders in transit",
    value: 0,
    tooltipText: "Total number of parcels that are going to be delivered soon"
  },
  {
    id: 5,
    labelText: "Successful Delivery",
    value: "90%",
    tooltipText: "The percentage of sucessful deliveries"
  }
], PaymentSummary = [
  {
    id: 1,
    labelText: "Total sales using DPDMS",
    value: "Tk. 13219.00",
    tooltipText: "Sum of all the cash collection amount of the parcels that have been picked up by DPDMS"
  },
  {
    id: 2,
    labelText: "Total delivery fees paid",
    value: "Tk. 2996.80",
    tooltipText: "Total delivery charge of all the parcels that have been picked up by DPDMS"
  },
  {
    id: 3,
    labelText: "Payment Processing",
    value: "Tk. 0",
    tooltipText: "Total invoiced amount after delivery completion"
  },
  {
    id: 4,
    labelText: "Paid amount",
    value: "Tk. 10353.50",
    tooltipText: "Total amount that have been disbursed to the merchant"
  }
], meta19 = () => ({
  title: "Dashboard"
}), loader18 = async ({
  request
}) => {
  await requireUserId(request);
  let shops = await getShops(request);
  return shops && shops.message ? {
    error: shops.message,
    shops: { data: [] }
  } : shops ? { shops } : {
    error: "Something is wrong. Please reload the browser.",
    shops: { data: [] }
  };
};
function Dashboard() {
  let { shops, error } = (0, import_react84.useLoaderData)(), { activeShop, storeActiveShop, resetShopProvider } = useShopProvider();
  return import_react85.default.useEffect(() => {
    shops.data.length ? activeShop || storeActiveShop(shops.data[0]) : resetShopProvider();
  }, [storeActiveShop, shops, activeShop, resetShopProvider]), /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react83.Box, { bg: "whitesmoke", minH: "100vh", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_react83.Container, { maxW: "container.xl", py: "8", children: [
    error && /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_react83.Alert, { status: "error", variant: "left-accent", my: "5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react83.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react83.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react83.AlertDescription, { children: error })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_react83.Heading, { size: "lg", children: [
      "Welcome, ",
      activeShop == null ? void 0 : activeShop.name
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_react83.Box, { my: "10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react83.Text, { as: "small", fontSize: "sm", color: "gray.600", children: "Overview of your order summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        import_react83.SimpleGrid,
        {
          mt: "5",
          columns: { sm: 2, md: 3 },
          spacing: "10",
          children: OrderSummary.length ? OrderSummary.map((order) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            OverViewCard_default,
            {
              order
            },
            order.id
          )) : null
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_react83.Box, { my: "10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react83.Text, { as: "small", fontSize: "sm", color: "gray.600", children: "Overview of your payment summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        import_react83.SimpleGrid,
        {
          mt: "5",
          columns: { sm: 2, md: 3 },
          spacing: "10",
          children: PaymentSummary.length ? PaymentSummary.map((order) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            OverViewCard_default,
            {
              order
            },
            order.id
          )) : null
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_react83.Text, { children: [
      "Call us",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_react83.Text, { as: "span", fontWeight: "bold", color: "primary.500", children: [
        "01234567891",
        " "
      ] }),
      "| any question?",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        import_react83.Link,
        {
          as: import_react84.Link,
          to: "/",
          fontWeight: "bold",
          color: "primary.500",
          children: "FAQ"
        }
      )
    ] })
  ] }) }) });
}
var dashboard_default = Dashboard;

// app/routes/(merchant)/shop-list/index.tsx
var shop_list_exports = {};
__export(shop_list_exports, {
  action: () => action10,
  default: () => shop_list_default,
  loader: () => loader19,
  meta: () => meta20
});
var import_node12 = require("@remix-run/node"), import_react96 = require("@chakra-ui/react"), import_react97 = require("@remix-run/react");

// app/components/merchant/shop-list/ShopListGrid.tsx
var import_react86 = require("@chakra-ui/react"), import_bs5 = require("react-icons/bs"), import_ri2 = require("react-icons/ri");
var import_jsx_runtime50 = require("react/jsx-runtime");
function ShopListGrid({
  shops,
  onAddShopDrawerOpen,
  onEditDrawerOpen
}) {
  let { activeShop, chnageActiveShop } = useShopProvider();
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    import_react86.SimpleGrid,
    {
      columns: { sm: 2, md: 3, lg: 4 },
      spacingX: "40px",
      spacingY: "20px",
      mt: "12",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          import_react86.Center,
          {
            bg: "gray.100",
            borderRadius: "base",
            height: { base: "200px", sm: "auto" },
            cursor: "pointer",
            onClick: onAddShopDrawerOpen,
            children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_react86.Flex, { direction: "column", align: "center", gap: "2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                import_react86.Icon,
                {
                  as: import_bs5.BsFillPlusCircleFill,
                  color: "primary.500",
                  fontSize: "2xl"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react86.Text, { color: "primary.500", children: "Add new shop" })
            ] })
          }
        ),
        shops.data.length ? shops.data.map((shop) => /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
          import_react86.Card,
          {
            variant: "outline",
            borderColor: (activeShop == null ? void 0 : activeShop.id) === shop.id ? "primary.500" : "gray.200",
            cursor: "pointer",
            onClick: () => chnageActiveShop(shop),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react86.CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_react86.Heading, { size: "md", children: [
                " ",
                shop.name
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react86.CardBody, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react86.Text, { children: shop.address }) }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_react86.CardFooter, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react86.Spacer, {}),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                  import_react86.Icon,
                  {
                    as: import_ri2.RiPencilLine,
                    fontSize: "xl",
                    cursor: "pointer",
                    onClick: () => onEditDrawerOpen()
                  }
                )
              ] })
            ]
          },
          shop.id
        )) : null
      ]
    }
  );
}
var ShopListGrid_default = ShopListGrid;

// app/components/merchant/shop-list/AddShopDrawer.tsx
var import_react89 = __toESM(require("react")), import_react90 = require("@chakra-ui/react"), import_react91 = require("@remix-run/react");

// app/context/ShopProductCatSelect.tsx
var import_react87 = require("@chakra-ui/react"), import_react88 = __toESM(require("react")), import_react_query5 = require("react-query");
var import_jsx_runtime51 = require("react/jsx-runtime"), ShopProductCatSelectContext = import_react88.default.createContext(null);
ShopProductCatSelectContext.displayName = "ShopProductCatSelectContext";
var ShopProductCatSelectProvider = (props) => {
  let [productChildCat, setProductChildCat] = import_react88.default.useState(), { data: productParentCategories } = (0, import_react_query5.useQuery)({
    queryKey: "shopProductParentCat",
    queryFn: () => getShopParentCategories()
  }), handleProductChildCat = (e) => {
    let selectedCat = productParentCategories == null ? void 0 : productParentCategories.data.find(
      (cat) => cat.name === e.target.value
    );
    setProductChildCat({
      data: selectedCat == null ? void 0 : selectedCat.childs
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    ShopProductCatSelectContext.Provider,
    {
      value: {
        productParentCategories,
        productChildCat,
        handleProductChildCat
      },
      ...props
    }
  );
}, useShopProductCatSelect = () => {
  let context = import_react88.default.useContext(ShopProductCatSelectContext);
  if (!context)
    throw new Error(
      "useShopProductCatSelect must be used within a ShopProductCatSelectProvider"
    );
  return context;
}, ShopProductParentCategoriesSelect = (props) => {
  let { productParentCategories, handleProductChildCat } = useShopProductCatSelect();
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_react87.Select,
    {
      focusBorderColor: "primary.500",
      onChange: handleProductChildCat,
      ...props,
      children: productParentCategories != null && productParentCategories.data.length ? productParentCategories == null ? void 0 : productParentCategories.data.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("option", { value: cat.name, children: cat.name }, cat.id)) : null
    }
  );
}, ShopProductChildCategoriesSelect = (props) => {
  var _a;
  let { productChildCat } = useShopProductCatSelect();
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react87.Select, { focusBorderColor: "primary.500", ...props, children: (_a = productChildCat == null ? void 0 : productChildCat.data) != null && _a.length ? productChildCat == null ? void 0 : productChildCat.data.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("option", { value: cat.name, children: cat.name }, cat.id)) : null });
};

// app/components/merchant/shop-list/AddShopDrawer.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
function AddShopDrawer({
  onClose,
  isOpen,
  actionData
}) {
  var _a, _b, _c, _d, _e, _f, _g;
  let formRef = import_react89.default.useRef(null), firstField = import_react89.default.useRef(null), transition = (0, import_react91.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "addShop";
  return import_react89.default.useEffect(() => {
    var _a2, _b2;
    (_a2 = actionData == null ? void 0 : actionData.formSuccess) != null && _a2.message.length && ((_b2 = formRef.current) == null || _b2.reset(), onClose());
  }, [actionData, onClose]), /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.Drawer, { placement: "right", size: "lg", onClose, isOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.DrawerOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react91.Form, { method: "post", ref: formRef, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.DrawerContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.DrawerHeader, { borderBottomWidth: "1px", children: "Add new shop" }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.DrawerBody, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ShopProductCatSelectProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
          import_react90.SimpleGrid,
          {
            columns: { base: 1, md: 2 },
            spacing: "4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.FormControl, { isRequired: !0, children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.FormLabel, { children: "Shop name" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  import_react90.Input,
                  {
                    type: "text",
                    name: "shopName",
                    focusBorderColor: "primary.500",
                    ref: firstField,
                    placeholder: "Shop name"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
                import_react90.FormControl,
                {
                  isInvalid: !!((_c = (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.shopEmail) != null && _c.length),
                  isRequired: !0,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.FormLabel, { children: "Shop email" }),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                      import_react90.Input,
                      {
                        type: "email",
                        name: "shopEmail",
                        placeholder: "Email address",
                        focusBorderColor: "primary.500",
                        defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.shopEmail,
                        "aria-errormessage": (_e = actionData == null ? void 0 : actionData.fieldErrors) != null && _e.shopEmail ? "email-error" : void 0
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.FormErrorMessage, { children: (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.shopEmail ? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_jsx_runtime52.Fragment, { children: actionData.fieldErrors.shopEmail }) : null })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.FormControl, { isRequired: !0, children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.FormLabel, { children: "Shop address" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  import_react90.Input,
                  {
                    type: "text",
                    name: "shopAddress",
                    focusBorderColor: "primary.500",
                    placeholder: "Shop address"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.FormControl, { isRequired: !0, children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.FormLabel, { children: "Pickup address" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  import_react90.Input,
                  {
                    type: "text",
                    name: "pickupAddress",
                    focusBorderColor: "primary.500",
                    placeholder: "Pickup address"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.FormControl, { isRequired: !0, children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.FormLabel, { children: "Pickup area" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SearchableAreaSelect_default, { name: "pickupArea" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.FormControl, { isRequired: !0, children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.FormLabel, { children: "Pickup phone" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  import_react90.Input,
                  {
                    type: "text",
                    name: "pickupPhone",
                    focusBorderColor: "primary.500",
                    placeholder: "Pickup phone"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.FormControl, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.FormLabel, { children: "Product Type" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  ShopProductParentCategoriesSelect,
                  {
                    placeholder: "Choose product type",
                    name: "productType"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.FormControl, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.FormLabel, { children: "Product Sub Category Type" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                  ShopProductChildCategoriesSelect,
                  {
                    placeholder: "Choose sub Category type",
                    name: "subProductType"
                  }
                )
              ] })
            ]
          }
        ) }),
        (_g = actionData == null ? void 0 : actionData.formError) != null && _g.length ? /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.Alert, { status: "error", mt: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.AlertIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.AlertTitle, { children: "Error!" }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.AlertDescription, { children: actionData.formError })
        ] }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_react90.DrawerFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          import_react90.Button,
          {
            variant: "outline",
            mr: 3,
            onClick: onClose,
            type: "reset",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          import_react90.Button,
          {
            colorScheme: "primary",
            type: "submit",
            name: "_action",
            value: "addShop",
            children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react90.Spinner, {}) : "Save"
          }
        )
      ] })
    ] }) })
  ] });
}
var AddShopDrawer_default = AddShopDrawer;

// app/components/merchant/shop-list/EditShopDrawer.tsx
var import_react92 = __toESM(require("react")), import_react93 = require("@chakra-ui/react"), import_react94 = require("@remix-run/react"), import_react95 = require("@remix-run/react");
var import_jsx_runtime53 = require("react/jsx-runtime");
function EditShopDrawer({
  onClose,
  isOpen,
  actionData
}) {
  var _a, _b, _c, _d, _e, _f, _g;
  let formRef = import_react92.default.useRef(null), firstField = import_react92.default.useRef(null), { activeShop, chnageActiveShop } = useShopProvider(), transition = (0, import_react94.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "editShop";
  return import_react92.default.useEffect(() => {
    var _a2, _b2, _c2;
    (_a2 = actionData == null ? void 0 : actionData.formSuccess) != null && _a2.message.length && (chnageActiveShop((_b2 = actionData == null ? void 0 : actionData.formSuccess) == null ? void 0 : _b2.shop), (_c2 = formRef.current) == null || _c2.reset(), onClose());
  }, [actionData, onClose, chnageActiveShop]), /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.Drawer, { placement: "right", size: "lg", onClose, isOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.DrawerOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react94.Form, { method: "post", ref: formRef, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.DrawerContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.DrawerHeader, { borderBottomWidth: "1px", children: "Edit shop" }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.DrawerBody, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
            "input",
            {
              type: "hidden",
              name: "updateShopId",
              value: activeShop == null ? void 0 : activeShop.id
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.FormLabel, { children: "Shop name" }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
              import_react93.Input,
              {
                type: "text",
                name: "updateShopName",
                focusBorderColor: "primary.500",
                ref: firstField,
                placeholder: "Shop name",
                defaultValue: activeShop == null ? void 0 : activeShop.name
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
            import_react93.FormControl,
            {
              isInvalid: !!((_c = (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.updateShopEmail) != null && _c.length),
              isRequired: !0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.FormLabel, { children: "Shop email" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                  import_react93.Input,
                  {
                    type: "email",
                    name: "updateShopEmail",
                    placeholder: "Email address",
                    focusBorderColor: "primary.500",
                    defaultValue: (_d = actionData == null ? void 0 : actionData.fields) != null && _d.updateShopEmail ? actionData.fields.updateShopEmail : activeShop == null ? void 0 : activeShop.email,
                    "aria-errormessage": (_e = actionData == null ? void 0 : actionData.fieldErrors) != null && _e.updateShopEmail ? "email-error" : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.FormErrorMessage, { children: (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.updateShopEmail ? actionData.fieldErrors.updateShopEmail : null })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.FormLabel, { children: "Shop address" }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
              import_react93.Input,
              {
                type: "text",
                name: "updateShopAddress",
                focusBorderColor: "primary.500",
                placeholder: "Shop address",
                defaultValue: activeShop == null ? void 0 : activeShop.address
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.Alert, { status: "warning", mt: "10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.AlertIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.AlertDescription, { children: [
            "Pickup locations for this shop cannot be edited here Go to",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
              import_react93.Link,
              {
                as: import_react95.Link,
                to: "/pickup-list",
                color: "primary.500",
                children: "Pickup Location"
              }
            )
          ] })
        ] }),
        (_g = actionData == null ? void 0 : actionData.formError) != null && _g.length ? /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.Alert, { status: "error", mt: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.AlertIcon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.AlertTitle, { children: "Error!" }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.AlertDescription, { children: actionData.formError })
        ] }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_react93.DrawerFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          import_react93.Button,
          {
            variant: "outline",
            mr: 3,
            onClick: onClose,
            type: "reset",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          import_react93.Button,
          {
            colorScheme: "primary",
            type: "submit",
            name: "_action",
            value: "editShop",
            children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react93.Spinner, {}) : "Save"
          }
        )
      ] })
    ] }) })
  ] });
}
var EditShopDrawer_default = EditShopDrawer;

// app/routes/(merchant)/shop-list/index.tsx
var import_jsx_runtime54 = require("react/jsx-runtime"), meta20 = () => ({
  title: "Shop list"
}), loader19 = async ({
  request
}) => {
  await requireUserId(request);
  let shops = await getShops(request);
  return shops && shops.message ? {
    error: shops.message,
    shops: { data: [] }
  } : shops ? { shops } : {
    error: "Something is wrong. Please reload the browser.",
    shops: { data: [] }
  };
}, action10 = async ({ request }) => {
  let form = await request.formData(), action16 = form.get("_action"), shopName = form.get("shopName"), shopEmail = form.get("shopEmail"), shopAddress = form.get("shopAddress"), pickupAddress = form.get("pickupAddress"), pickupArea = form.get("pickupArea"), pickupPhone = form.get("pickupPhone"), shopProductType = form.get("productType"), shopSubProductType = form.get("subProductType"), updateShopId = form.get("updateShopId"), updateShopName = form.get("updateShopName"), updateShopEmail = form.get("updateShopEmail"), updateShopAddress = form.get("updateShopAddress");
  switch (action16) {
    case "addShop": {
      if (typeof shopName != "string" || typeof shopEmail != "string" || typeof shopAddress != "string" || typeof pickupAddress != "string" || typeof pickupArea != "string" || typeof pickupPhone != "string" || typeof shopProductType != "string" || typeof shopSubProductType != "string")
        return badRequest({
          formError: "Form not submitted correctly."
        });
      let fields = {
        shopName,
        shopEmail,
        shopAddress,
        pickupAddress,
        pickupArea,
        pickupPhone,
        shopProductType,
        shopSubProductType
      }, fieldErrors = {
        shopEmail: validateEmail(shopEmail)
      };
      if (Object.values(fieldErrors).some(Boolean))
        return badRequest({ fieldErrors, fields });
      let shop = await addShop(request, fields);
      return shop && shop.message ? badRequest({
        formError: shop.message
      }) : shop ? (0, import_node12.json)({
        formSuccess: { message: "Shop created successful", shop }
      }) : badRequest({
        formError: "Something went wrong. Please try again."
      });
    }
    case "editShop": {
      if (typeof updateShopId != "string" || typeof updateShopName != "string" || typeof updateShopEmail != "string" || typeof updateShopAddress != "string")
        return badRequest({
          formError: "Form not submitted correctly."
        });
      let fields = {
        updateShopId,
        updateShopName,
        updateShopEmail,
        updateShopAddress
      }, fieldErrors = {
        updateShopEmail: validateEmail(updateShopEmail)
      };
      if (Object.values(fieldErrors).some(Boolean))
        return badRequest({ fieldErrors, fields });
      let shop = await updateShop(request, fields);
      return shop && shop.message ? badRequest({
        formError: shop.message
      }) : shop ? (0, import_node12.json)({
        formSuccess: { message: "Shop update successful", shop }
      }) : badRequest({
        formError: "Something went wrong. Please try again."
      });
    }
    default:
      return badRequest({ formError: "Form not submitted correctly." });
  }
};
function Index() {
  let { shops, error } = (0, import_react97.useLoaderData)(), actionData = (0, import_react97.useActionData)(), {
    isOpen: isAddShopDrawerOpen,
    onOpen: onAddShopDrawerOpen,
    onClose: onAddShopDrawerClose
  } = (0, import_react96.useDisclosure)(), { isOpen, onOpen, onClose } = (0, import_react96.useDisclosure)();
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(import_react96.Container, { maxW: "container.xl", py: "8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
      import_react96.Heading,
      {
        as: "h3",
        fontSize: "3xl",
        pb: "6",
        borderBottom: "4px",
        borderColor: "primary.500",
        display: "inline-block",
        children: "My Shops"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
      AddShopDrawer_default,
      {
        isOpen: isAddShopDrawerOpen,
        onClose: onAddShopDrawerClose,
        actionData
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
      EditShopDrawer_default,
      {
        isOpen,
        onClose,
        actionData
      }
    ),
    error ? /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(import_react96.Alert, { status: "error", variant: "left-accent", my: "5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react96.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react96.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react96.AlertDescription, { children: error })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
      ShopListGrid_default,
      {
        shops,
        onAddShopDrawerOpen,
        onEditDrawerOpen: onOpen
      }
    )
  ] }) });
}
var shop_list_default = Index;

// app/routes/admin/merchant-list/index.tsx
var merchant_list_exports = {};
__export(merchant_list_exports, {
  default: () => merchant_list_default,
  loader: () => loader20,
  meta: () => meta21
});
var import_react98 = require("@remix-run/react"), import_react_table5 = require("@tanstack/react-table");

// app/utils/admin/users.ts
var getMerchantByAdmin = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get("/users/merchant", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/routes/admin/merchant-list/index.tsx
var import_jsx_runtime55 = require("react/jsx-runtime"), columnHelper4 = (0, import_react_table5.createColumnHelper)(), columns4 = [
  columnHelper4.accessor("name", {
    header: () => "Merchant Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper4.accessor("email", {
    header: () => "Merchant Email",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper4.accessor("phone", {
    header: () => "Merchant Phone",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper4.accessor("isActive", {
    header: () => "Is Active",
    cell: (info) => info.getValue() ? "Yes" : "No",
    footer: (info) => info.column.id
  })
], meta21 = () => ({
  title: "Merchant list - Dashboard",
  description: "Merchant list"
}), loader20 = async ({ request }) => {
  await requireAdminUserId(request);
  let merchants = await getMerchantByAdmin(request);
  return merchants && merchants.message ? {
    error: merchants.message,
    merchants: null
  } : merchants ? { merchants } : {
    error: "Something went wrong",
    merchants: null
  };
};
function MerchantList() {
  let { merchants } = (0, import_react98.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Merchant list" }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(DataTable, { columns: columns4, data: merchants })
  ] }) }) });
}
var merchant_list_default = MerchantList;

// app/routes/packagehandler/dashboard.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2,
  loader: () => loader21,
  meta: () => meta22
});
var import_jsx_runtime56 = require("react/jsx-runtime"), meta22 = () => ({
  title: "Dashboard",
  description: "Dashboard"
}), loader21 = async ({ request }) => await requirePackageHandlerUserId(request);
function Home() {
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(PackageHandlerLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Dashboard" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "svg",
          {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("path", { d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400", children: "Total clients" }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-lg font-semibold text-gray-700 dark:text-gray-200", children: "6389" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "svg",
          {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "path",
              {
                fillRule: "evenodd",
                d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
                clipRule: "evenodd"
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400", children: "Account balance" }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-lg font-semibold text-gray-700 dark:text-gray-200", children: "$ 46,760.89" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "svg",
          {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400", children: "New sales" }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-lg font-semibold text-gray-700 dark:text-gray-200", children: "376" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          "svg",
          {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "path",
              {
                fillRule: "evenodd",
                d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
                clipRule: "evenodd"
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400", children: "Pending contacts" }),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-lg font-semibold text-gray-700 dark:text-gray-200", children: "35" })
        ] })
      ] })
    ] })
  ] }) }) });
}
var dashboard_default2 = Home;

// app/routes/admin/shop-list/index.tsx
var shop_list_exports2 = {};
__export(shop_list_exports2, {
  default: () => shop_list_default2,
  loader: () => loader22,
  meta: () => meta23
});
var import_react99 = require("@remix-run/react"), import_react_table6 = require("@tanstack/react-table");

// app/utils/admin/shops.ts
var getShopsByAdmin = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get("/shops/all", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/routes/admin/shop-list/index.tsx
var import_jsx_runtime57 = require("react/jsx-runtime"), columnHelper5 = (0, import_react_table6.createColumnHelper)(), columns5 = [
  columnHelper5.accessor("name", {
    header: () => "Shop Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper5.accessor("address", {
    header: () => "Shop Address",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper5.accessor("productType", {
    header: () => "Shop Product Type",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id
  }),
  columnHelper5.accessor("user", {
    header: () => "Merchant Name",
    cell: (info) => {
      var _a;
      return (_a = info.getValue()) == null ? void 0 : _a.name;
    },
    footer: (info) => info.column.id
  }),
  columnHelper5.accessor("user", {
    header: () => "Merchant Phone",
    cell: (info) => {
      var _a;
      return (_a = info.getValue()) == null ? void 0 : _a.phone;
    },
    footer: (info) => info.column.id
  })
], meta23 = () => ({
  title: "Shop list - Dashboard",
  description: "Shop list"
}), loader22 = async ({ request }) => {
  await requireAdminUserId(request);
  let shops = await getShopsByAdmin(request);
  return shops && shops.message ? {
    error: shops.message,
    shops: null
  } : shops ? { shops } : {
    error: "Something went wrong",
    shops: null
  };
};
function ShopList2() {
  let { shops } = (0, import_react99.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Shop list" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(DataTable, { columns: columns5, data: shops == null ? void 0 : shops.data })
  ] }) }) });
}
var shop_list_default2 = ShopList2;

// app/routes/packagehandler/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader23
});
var loader23 = async ({ request }) => logout(request, "/packagehandler/login");

// app/routes/packagehandler/index.tsx
var packagehandler_exports = {};
__export(packagehandler_exports, {
  default: () => packagehandler_default,
  loader: () => loader24
});
var import_react100 = require("@remix-run/react");
var import_jsx_runtime58 = require("react/jsx-runtime"), loader24 = async ({ request }) => await requirePackageHandlerUserId(request);
function Home2() {
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(PackageHandlerLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react100.Outlet, {}) }) });
}
var packagehandler_default = Home2;

// app/routes/packagehandler/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action11,
  default: () => login_default,
  loader: () => loader25,
  meta: () => meta24
});
var import_react101 = __toESM(require("react")), import_react102 = require("@chakra-ui/react"), import_node13 = require("@remix-run/node"), import_react103 = require("@remix-run/react");
var import_jsx_runtime59 = require("react/jsx-runtime"), meta24 = () => ({
  title: "Login",
  description: "Login to your account"
}), action11 = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), redirectTo = validateUrl(
    form.get("redirectTo") || "/packagehandler/dashboard"
  );
  if (typeof email != "string" || typeof password != "string" || typeof redirectTo != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = { email, password }, fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  let user = await packageHandlerLogin({ email, password });
  return user && user.message ? badRequest({
    fields,
    formError: user.message
  }) : user ? createUserSession(
    user.user.id,
    user.access_token,
    user.user.roles[0].role.name,
    redirectTo
  ) : badRequest({
    fields,
    formError: "Something is wrong! Please try again."
  });
}, loader25 = async ({ request }) => await getPackageHandlerId(request) ? (0, import_node13.redirect)("/packagehandler/dashboard") : null;
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let actionData = (0, import_react103.useActionData)(), [searchParams] = (0, import_react103.useSearchParams)(), transition = (0, import_react103.useTransition)(), [show, setShow] = import_react101.default.useState(!1), handleClick = () => setShow(!show), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "login";
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex flex-col overflow-y-auto md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "h-32 md:h-auto md:w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
        "img",
        {
          "aria-hidden": "true",
          className: "object-cover w-full h-full dark:hidden",
          src: "/img/login-office.jpeg",
          alt: "Office"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
        "img",
        {
          "aria-hidden": "true",
          className: "hidden object-cover w-full h-full dark:block",
          src: "/img/login-office-dark.jpeg",
          alt: "Office"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "flex items-center justify-center p-6 sm:p-12 md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h1", { className: "mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200", children: "Login" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_react103.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react102.Box, { id: "form-error-message", mb: "5", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
          import_react102.Alert,
          {
            status: "error",
            variant: "left-accent",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react102.AlertIcon, {}),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react102.AlertTitle, { children: "Error!" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react102.AlertDescription, { children: actionData.formError })
            ]
          }
        ) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
          import_react102.FormControl,
          {
            isInvalid: !!((_c = (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.email) != null && _c.length),
            isRequired: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react102.FormLabel, { className: "dark:text-white", children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                import_react102.Input,
                {
                  type: "email",
                  name: "email",
                  placeholder: "maruf@gmail.com",
                  focusBorderColor: "primary.500",
                  className: "dark:text-white",
                  defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.email,
                  "aria-errormessage": (_e = actionData == null ? void 0 : actionData.fieldErrors) != null && _e.email ? "email-error" : void 0
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react102.FormErrorMessage, { children: (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.email ? /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_jsx_runtime59.Fragment, { children: actionData.fieldErrors.email }) : null })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
          import_react102.FormControl,
          {
            mt: "4",
            isInvalid: !!((_h = (_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.password) != null && _h.length),
            isRequired: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react102.FormLabel, { className: "dark:text-white", children: "Password" }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_react102.InputGroup, { size: "md", children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                  import_react102.Input,
                  {
                    type: show ? "text" : "password",
                    name: "password",
                    placeholder: "Enter password",
                    focusBorderColor: "primary.500",
                    "aria-invalid": Boolean(
                      (_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password
                    ) || void 0,
                    "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.password ? "password-error" : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react102.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                  import_react102.Button,
                  {
                    h: "1.75rem",
                    size: "sm",
                    onClick: handleClick,
                    variant: "outline",
                    fontWeight: "normal",
                    children: show ? "Hide" : "Show"
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react102.FormErrorMessage, { children: (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_jsx_runtime59.Fragment, { children: actionData.fieldErrors.password }) : null })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          import_react102.Button,
          {
            type: "submit",
            name: "_action",
            value: "login",
            className: "w-full mt-8",
            colorScheme: "purple",
            isLoading: isSubmitting,
            children: "Log in"
          }
        )
      ] })
    ] }) })
  ] }) }) });
}
var login_default = Login;

// app/routes/(merchant)/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action12,
  default: () => register_default,
  loader: () => loader26,
  meta: () => meta25
});
var import_node14 = require("@remix-run/node"), import_react108 = require("@chakra-ui/react");

// app/components/common/loginRegLeftSide.tsx
var import_react104 = require("@chakra-ui/react"), import_jsx_runtime60 = require("react/jsx-runtime");
function LoginRegLeftSide({
  title,
  subtitle
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
    import_react104.Box,
    {
      className: "relative overflow-hidden md:flex w-1/2 justify-around items-center hidden",
      bgGradient: "linear(to-r, primary.700, primary.600)",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react104.Heading, { className: "text-white font-bold text-4xl font-sans", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react104.Text, { className: "text-white mt-1", children: subtitle })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" })
      ]
    }
  );
}
var loginRegLeftSide_default = LoginRegLeftSide;

// app/components/merchant/RegisterForm.tsx
var import_react105 = __toESM(require("react")), import_react106 = require("@chakra-ui/react"), import_react107 = require("@remix-run/react");
var import_jsx_runtime61 = require("react/jsx-runtime");
function RegisterForm({
  actionData,
  transition
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
  let formRef = import_react105.default.useRef(null), [show, setShow] = import_react105.default.useState(!1), handleClick = () => setShow(!show), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "signup", toast = (0, import_react106.useToast)({
    isClosable: !0
  }), errorToast = "error-toast", successToast = "success-toast";
  return import_react105.default.useEffect(() => {
    var _a2, _b2, _c2;
    (_a2 = actionData == null ? void 0 : actionData.formSuccess) != null && _a2.message.length && !toast.isActive(successToast) && (toast({
      id: successToast,
      title: actionData.formSuccess.message,
      description: "Login now",
      status: "success"
    }), (_b2 = formRef.current) == null || _b2.reset()), (_c2 = actionData == null ? void 0 : actionData.formError) != null && _c2.length && !toast.isActive(errorToast) && toast({
      id: errorToast,
      title: actionData.formError,
      status: "error"
    });
  }, [actionData, toast]), /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
    import_react107.Form,
    {
      ref: formRef,
      method: "post",
      className: "w-3/4 lg:w-3/4 h-full py-10 xl:py-20",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.Box, { id: "form-error-message", mb: "5", children: [
          actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.Alert, { status: "error", variant: "left-accent", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.AlertIcon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.AlertTitle, { children: "Error!" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.AlertDescription, { children: actionData.formError })
          ] }) : null,
          (_b = actionData == null ? void 0 : actionData.formSuccess) != null && _b.message ? /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.Alert, { status: "success", variant: "left-accent", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.AlertIcon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.AlertTitle, { children: "Success!" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.AlertDescription, { children: [
              actionData.formSuccess.message,
              ".",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                import_react106.Link,
                {
                  as: import_react107.Link,
                  to: "/login",
                  textDecoration: "underline",
                  children: "Login here"
                }
              )
            ] })
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.Text, { className: "text-gray-700 mt-1 font-bold mb-3", children: "Personal Inforamtion" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Full Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              import_react106.Input,
              {
                type: "text",
                name: "fullName",
                placeholder: "Maruf Ahmed",
                focusBorderColor: "primary.500"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
            import_react106.FormControl,
            {
              isInvalid: !!((_d = (_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email) != null && _d.length),
              isRequired: !0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Email" }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                  import_react106.Input,
                  {
                    type: "email",
                    name: "email",
                    placeholder: "jane@gmail.com",
                    focusBorderColor: "primary.500",
                    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.email,
                    "aria-errormessage": (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.email ? "email-error" : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormErrorMessage, { children: (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.email ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_jsx_runtime61.Fragment, { children: actionData.fieldErrors.email }) : null })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Phone Number" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              import_react106.Input,
              {
                type: "tel",
                name: "phone",
                placeholder: "+8801234678910",
                focusBorderColor: "primary.500"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.Text, { className: "text-gray-700 font-bold mt-6", children: "Shop Information" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.Text, { as: "small", className: "text-gray-700 mb-5 block", children: "If you have more thant one busines, you can create multiple shops later" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(ShopProductCatSelectProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Shop Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              import_react106.Input,
              {
                type: "text",
                name: "shopName",
                placeholder: "Shop Name",
                focusBorderColor: "primary.500"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
            import_react106.FormControl,
            {
              isInvalid: !!((_i = (_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.shopEmail) != null && _i.length),
              isRequired: !0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Shop Email" }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                  import_react106.Input,
                  {
                    type: "email",
                    name: "shopEmail",
                    placeholder: "Email address",
                    focusBorderColor: "primary.500",
                    "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.shopEmail ? "email-error" : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormErrorMessage, { children: (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.shopEmail ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_jsx_runtime61.Fragment, { children: actionData.fieldErrors.shopEmail }) : null })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Shop Address" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              import_react106.Input,
              {
                type: "text",
                name: "shopAddress",
                placeholder: "Shop Address",
                focusBorderColor: "primary.500"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.FormControl, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Product Type" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              ShopProductParentCategoriesSelect,
              {
                placeholder: "Choose product type",
                name: "productType"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.FormControl, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Product Sub Category Type" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              ShopProductChildCategoriesSelect,
              {
                placeholder: "Choose sub Category type",
                name: "subProductType"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.Text, { className: "text-gray-700 font-bold mt-6", children: "Pickup Information" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.Text, { as: "small", className: "text-gray-700 mb-5 block", children: "If you have more thant one pickup location, aditional pickup can be created later" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.FormControl, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Pickup Address" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              import_react106.Input,
              {
                type: "text",
                name: "pickupAddress",
                placeholder: "Pickup Address",
                focusBorderColor: "primary.500"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.FormControl, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Pickup Area" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(SearchableAreaSelect_default, { name: "pickupArea" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.FormControl, { isRequired: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Pickup Phone Number" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              import_react106.Input,
              {
                type: "tel",
                name: "pickupPhone",
                placeholder: "+8801234678910",
                focusBorderColor: "primary.500"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.Text, { className: "text-gray-700 font-bold mt-6 mb-3", children: "Create Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: "4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
            import_react106.FormControl,
            {
              isInvalid: !!((_m = (_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.password) != null && _m.length),
              isRequired: !0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Password" }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.InputGroup, { size: "md", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                    import_react106.Input,
                    {
                      type: show ? "text" : "password",
                      name: "password",
                      placeholder: "Enter password",
                      focusBorderColor: "primary.500",
                      "aria-invalid": Boolean((_n = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _n.password) || void 0,
                      "aria-errormessage": (_o = actionData == null ? void 0 : actionData.fieldErrors) != null && _o.password ? "password-error" : void 0
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                    import_react106.Button,
                    {
                      h: "1.75rem",
                      size: "sm",
                      onClick: handleClick,
                      variant: "outline",
                      fontWeight: "normal",
                      children: show ? "Hide" : "Show"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormErrorMessage, { children: (_p = actionData == null ? void 0 : actionData.fieldErrors) != null && _p.password ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_jsx_runtime61.Fragment, { children: actionData.fieldErrors.password }) : null })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
            import_react106.FormControl,
            {
              isInvalid: !!((_r = (_q = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _q.confirmPassword) != null && _r.length),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormLabel, { children: "Confirm Password" }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.InputGroup, { size: "md", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                    import_react106.Input,
                    {
                      type: show ? "text" : "password",
                      name: "confirmPassword",
                      placeholder: "Confirm Password",
                      focusBorderColor: "primary.500",
                      "aria-invalid": Boolean(
                        (_s = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _s.confirmPassword
                      ) || void 0,
                      "aria-errormessage": (_t = actionData == null ? void 0 : actionData.fieldErrors) != null && _t.confirmPassword ? "confirmPassword-error" : void 0
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                    import_react106.Button,
                    {
                      h: "1.75rem",
                      size: "sm",
                      onClick: handleClick,
                      variant: "outline",
                      fontWeight: "normal",
                      children: show ? "Hide" : "Show"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.FormErrorMessage, { children: (_u = actionData == null ? void 0 : actionData.fieldErrors) != null && _u.confirmPassword ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_jsx_runtime61.Fragment, { children: actionData.fieldErrors.confirmPassword }) : null })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          import_react106.Button,
          {
            type: "submit",
            variant: "solid",
            colorScheme: "primary",
            w: "full",
            mt: "5",
            name: "_action",
            value: "signup",
            disabled: isSubmitting,
            children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.Spinner, {}) : "Sign up"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_react106.Text, { mt: "5", children: [
          "Already have account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react106.Link, { as: import_react107.Link, to: "/login", color: "primary.700", children: "Login" })
        ] })
      ]
    }
  );
}
var RegisterForm_default = RegisterForm;

// app/routes/(merchant)/register.tsx
var import_react109 = require("@remix-run/react"), import_jsx_runtime62 = require("react/jsx-runtime"), meta25 = () => ({
  title: "Register"
});
function validateConfirmPassword({
  password,
  confirmPassword
}) {
  if (password !== confirmPassword)
    return "Confirm Password didn't match";
}
var action12 = async ({ request }) => {
  let form = await request.formData(), name = form.get("fullName"), email = form.get("email"), phone = form.get("phone"), shopName = form.get("shopName"), shopEmail = form.get("shopEmail"), shopAddress = form.get("shopAddress"), shopProductType = form.get("productType"), shopSubProductType = form.get("subProductType"), password = form.get("password"), confirmPassword = form.get("confirmPassword"), pickupAddress = form.get("pickupAddress"), pickupArea = form.get("pickupArea"), pickupPhone = form.get("pickupPhone");
  if (typeof name != "string" || typeof email != "string" || typeof phone != "string" || typeof shopName != "string" || typeof shopEmail != "string" || typeof shopAddress != "string" || typeof shopProductType != "string" || typeof shopSubProductType != "string" || typeof password != "string" || typeof confirmPassword != "string" || typeof pickupAddress != "string" || typeof pickupArea != "string" || typeof pickupPhone != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = {
    name,
    email,
    phone,
    shopName,
    shopEmail,
    shopAddress,
    shopProductType,
    shopSubProductType,
    password,
    confirmPassword,
    pickupAddress,
    pickupArea,
    pickupPhone
  }, fieldErrors = {
    email: validateEmail(email),
    shopEmail: validateEmail(shopEmail),
    password: validatePassword(password),
    confirmPassword: validateConfirmPassword({ password, confirmPassword })
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  let user = await register({
    name,
    email,
    phone,
    password,
    shopName,
    shopEmail,
    shopAddress,
    shopProductType,
    shopSubProductType,
    pickupAddress,
    pickupAreaId: Number(pickupArea),
    pickupPhone
  });
  return user && user.message ? badRequest({
    fields,
    formError: user.message
  }) : user ? { formSuccess: { message: "Registration Successful" } } : badRequest({
    fields,
    formError: "Something is wrong! Please try again."
  });
}, loader26 = async ({ request }) => await getUserId(request) ? (0, import_node14.redirect)("/dashboard") : null;
function Register() {
  let actionData = (0, import_react109.useActionData)(), transition = (0, import_react109.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "md:flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      loginRegLeftSide_default,
      {
        title: "Add your information",
        subtitle: "Please tell a bit about you and your business"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react108.Box, { className: "flex md:w-1/2 justify-center items-center bg-white overflow-y-auto h-full", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      RegisterForm_default,
      {
        actionData,
        transition
      }
    ) })
  ] }) });
}
var register_default = Register;

// app/routes/(merchant)/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => settings_default,
  loader: () => loader27,
  meta: () => meta26
});
var import_react110 = require("@chakra-ui/react");
var import_react111 = require("@remix-run/react");
var import_react112 = require("@remix-run/react"), import_jsx_runtime63 = require("react/jsx-runtime"), meta26 = () => ({
  title: "Settings"
}), loader27 = async ({ request }) => await requireUserId(request);
function Settings() {
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react110.Box, { bg: "whitesmoke", minH: "100vh", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_react110.Container, { maxW: "container.xl", py: "8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
      import_react110.Heading,
      {
        as: "h3",
        fontSize: "3xl",
        pb: "6",
        borderBottom: "4px",
        borderColor: "primary.500",
        display: "inline-block",
        children: "Settings"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react110.Box, { mt: "8", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_react110.Flex, { gap: "8", overflowX: "auto", mb: "8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
        import_react112.NavLink,
        {
          to: "/settings",
          end: !0,
          className: ({ isActive }) => isActive ? "p-5 text-white text-center w-full bg-red-500" : "p-5 text-gray-900 text-center w-full bg-white",
          children: "Payment method"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
        import_react112.NavLink,
        {
          to: "/settings/password",
          className: ({ isActive }) => isActive ? "p-5 text-white text-center w-full bg-red-500" : "p-5 text-gray-900 text-center w-full bg-white",
          children: "Password change"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react111.Outlet, {})
  ] }) }) });
}
var settings_default = Settings;

// app/routes/(merchant)/settings/password.tsx
var password_exports = {};
__export(password_exports, {
  action: () => action13,
  default: () => password_default,
  loader: () => loader28,
  meta: () => meta27
});
var import_react113 = __toESM(require("react")), import_node15 = require("@remix-run/node"), import_react114 = require("@chakra-ui/react"), import_react115 = require("@remix-run/react");

// app/utils/merchant/settings.ts
var changePassword = async (request, { oldPassword, newPassword, confirmPassword }) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.patch(
      "/change-password/merchant",
      {
        oldPassword,
        newPassword,
        confirmPassword
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    )).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/routes/(merchant)/settings/password.tsx
var import_jsx_runtime64 = require("react/jsx-runtime"), meta27 = () => ({
  title: "Password - Settings"
}), loader28 = async ({ request }) => await requireUserId(request), action13 = async ({ request }) => {
  let form = await request.formData(), currentPassword = form.get("currentPassword"), newPassword = form.get("newPassword"), confirmPassword = form.get("confirmPassword");
  if (typeof currentPassword != "string" || typeof newPassword != "string" || typeof confirmPassword != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = {
    currentPassword,
    newPassword,
    confirmPassword
  }, newPassUser = await changePassword(request, {
    oldPassword: currentPassword,
    newPassword,
    confirmPassword
  });
  return newPassUser && newPassUser.message ? badRequest({
    formError: newPassUser.message,
    fields
  }) : newPassUser ? (0, import_node15.json)({
    formSuccess: { message: "Password changed successfully." }
  }) : badRequest({
    formError: "Something is wrong. Please try again.",
    fields
  });
};
function PasswordSettings() {
  var _a, _b, _c;
  let actionData = (0, import_react115.useActionData)(), transition = (0, import_react115.useTransition)(), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "changePassword", [show, setShow] = import_react113.default.useState(!1), handleShowPass = () => setShow(!show);
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_jsx_runtime64.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.Heading, { as: "h4", fontSize: "2xl", pb: "6", display: "inline-block", children: "Change your password." }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react115.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: "4", my: "6", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react114.FormControl, { isRequired: !0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.FormLabel, { children: "Current password" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react114.InputGroup, { size: "md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
            import_react114.Input,
            {
              type: show ? "text" : "password",
              name: "currentPassword",
              placeholder: "Enter password",
              focusBorderColor: "primary.500"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
            import_react114.Button,
            {
              h: "1.75rem",
              size: "sm",
              onClick: handleShowPass,
              variant: "outline",
              fontWeight: "normal",
              children: show ? "Hide" : "Show"
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react114.SimpleGrid, { columns: { base: 1, md: 2 }, spacing: "4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react114.FormControl, { isRequired: !0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.FormLabel, { children: "New password" }),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react114.InputGroup, { size: "md", children: [
            /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
              import_react114.Input,
              {
                type: show ? "text" : "password",
                name: "newPassword",
                placeholder: "Enter password",
                focusBorderColor: "primary.500"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
              import_react114.Button,
              {
                h: "1.75rem",
                size: "sm",
                onClick: handleShowPass,
                variant: "outline",
                fontWeight: "normal",
                children: show ? "Hide" : "Show"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react114.FormControl, { isRequired: !0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.FormLabel, { children: "Confirm new password" }),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react114.InputGroup, { size: "md", children: [
            /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
              import_react114.Input,
              {
                type: show ? "text" : "password",
                name: "confirmPassword",
                placeholder: "Confirm Password",
                focusBorderColor: "primary.500"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
              import_react114.Button,
              {
                h: "1.75rem",
                size: "sm",
                onClick: handleShowPass,
                variant: "outline",
                fontWeight: "normal",
                children: show ? "Hide" : "Show"
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
        import_react114.Button,
        {
          type: "submit",
          name: "_action",
          value: "changePassword",
          colorScheme: "primary",
          mt: "8",
          px: "8",
          py: "6",
          isLoading: isSubmitting,
          children: "Update"
        }
      ),
      (_b = actionData == null ? void 0 : actionData.formError) != null && _b.length ? /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react114.Alert, { status: "error", mt: "4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.AlertIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.AlertTitle, { children: "Error!" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.AlertDescription, { children: actionData.formError })
      ] }) : null,
      (_c = actionData == null ? void 0 : actionData.formSuccess) != null && _c.message ? /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_react114.Alert, { status: "success", mt: "4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.AlertIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.AlertTitle, { children: "Success!" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react114.AlertDescription, { children: actionData.formSuccess.message })
      ] }) : null
    ] })
  ] });
}
var password_default = PasswordSettings;

// app/routes/(merchant)/settings/index.tsx
var settings_exports2 = {};
__export(settings_exports2, {
  default: () => settings_default2,
  loader: () => loader29,
  meta: () => meta28
});
var import_react116 = require("@chakra-ui/react"), import_react117 = require("@remix-run/react");
var import_jsx_runtime65 = require("react/jsx-runtime"), meta28 = () => ({
  title: "Payment method - Settings"
}), loader29 = async ({ request }) => await requireUserId(request);
function PaymentMethodSettings() {
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_jsx_runtime65.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react116.Heading, { as: "h4", fontSize: "2xl", pb: "6", display: "inline-block", children: "Manage your payment method." }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react116.Text, { children: "Update your bkash account to receive payment from DPDMS" }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react117.Form, { children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
      import_react116.SimpleGrid,
      {
        columns: { sm: 3 },
        gap: "4",
        border: "1px",
        borderColor: "primary.500",
        rounded: "md",
        mt: "8",
        p: "4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react116.Center, { w: "full", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react116.Text, { children: "Bkash Number" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react116.Center, { w: "full", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_react116.Editable, { defaultValue: "01789393745", children: [
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react116.EditablePreview, {}),
            /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react116.EditableInput, { placeholder: "do something" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react116.Center, { w: "full", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
            import_react116.Button,
            {
              colorScheme: "primary",
              type: "submit",
              isDisabled: !0,
              children: "Update"
            }
          ) })
        ]
      }
    ) })
  ] });
}
var settings_default2 = PaymentMethodSettings;

// app/routes/(merchant)/logout.tsx
var logout_exports2 = {};
__export(logout_exports2, {
  loader: () => loader30
});
var loader30 = async ({ request }) => logout(request);

// app/routes/(merchant)/index.tsx
var merchant_exports = {};
__export(merchant_exports, {
  default: () => merchant_default,
  loader: () => loader31,
  meta: () => meta29
});
var import_react118 = require("@chakra-ui/react"), import_node16 = require("@remix-run/node"), import_react119 = require("@remix-run/react");
var import_jsx_runtime66 = require("react/jsx-runtime"), meta29 = () => ({
  title: "Home"
}), loader31 = async ({ request }) => await getUserId(request) ? (0, import_node16.redirect)("/dashboard") : null;
function Home3() {
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_jsx_runtime66.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(Layout_default, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
      import_react118.Box,
      {
        bgImage: "url(/img/delivery.jpg)",
        bgPos: "bottom",
        bgSize: "cover",
        bgRepeat: "no-repeat",
        minH: "600px",
        h: "600px",
        pos: "relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
            import_react118.Box,
            {
              pos: "absolute",
              inset: "0",
              bgColor: "blackAlpha.700",
              zIndex: "0"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
            import_react118.Container,
            {
              maxW: "container.xl",
              pos: "relative",
              zIndex: "10",
              h: "100%",
              children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react118.Flex, { alignItems: "center", h: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react118.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_react118.Heading, { color: "white", lineHeight: "base", children: [
                "\u09A6\u09C7\u09B6\u099C\u09C1\u09A1\u09BC\u09C7 \u09A6\u09CD\u09B0\u09C1\u09A4\u09A4\u09AE \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF ",
                /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("br", {}),
                " \u09B8\u09C7\u09AC\u09BE \u09AA\u09C7\u09A4\u09C7 DPDMS ",
                /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("br", {}),
                " \u0995\u09C1\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09A5\u09BE\u0995\u09C1\u09A8!"
              ] }) }) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react118.Box, { bgColor: "black", py: "8", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
      import_react118.Container,
      {
        maxW: "container.xl",
        pos: "relative",
        zIndex: "10",
        h: "100%",
        children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
          import_react118.Flex,
          {
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react118.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react118.Text, { color: "white", lineHeight: "base", children: "\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u0995\u09BF\u0982 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8 \u09A6\u09BF\u09AF\u09BC\u09C7 \u0995\u09C1\u09B0\u09BF\u09DF\u09BE\u09B0 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u0995 \u0995\u09B0\u09C1\u09A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react118.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react119.Form, { method: "get", action: "/parcel-tracking", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_react118.Flex, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
                  import_react118.Input,
                  {
                    type: "text",
                    name: "parcelNumber",
                    placeholder: "Parcel Number",
                    roundedRight: "none",
                    bgColor: "white",
                    size: "lg",
                    required: !0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
                  import_react118.Button,
                  {
                    type: "submit",
                    name: "_action",
                    value: "track",
                    colorScheme: "primary",
                    roundedLeft: "none",
                    size: "lg",
                    children: "Track"
                  }
                )
              ] }) }) })
            ]
          }
        )
      }
    ) })
  ] }) });
}
var merchant_default = Home3;

// app/routes/(merchant)/login.tsx
var login_exports2 = {};
__export(login_exports2, {
  action: () => action14,
  default: () => Login2,
  loader: () => loader32,
  meta: () => meta30
});
var import_react123 = __toESM(require("react")), import_node17 = require("@remix-run/node"), import_react124 = require("@remix-run/react");

// app/components/merchant/LoginForm.tsx
var import_react120 = __toESM(require("react")), import_react121 = require("@remix-run/react"), import_react122 = require("@chakra-ui/react"), import_jsx_runtime67 = require("react/jsx-runtime");
function LoginForm({
  actionData,
  searchParams,
  transition
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let [show, setShow] = import_react120.default.useState(!1), handleClick = () => setShow(!show), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "login";
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(import_react121.Form, { method: "post", className: "w-3/4 lg:w-2/4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.Box, { id: "form-error-message", mb: "5", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(import_react122.Alert, { status: "error", variant: "left-accent", children: [
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.AlertIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.AlertTitle, { children: "Error!" }),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.AlertDescription, { children: actionData.formError })
    ] }) : null }),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
      "input",
      {
        type: "hidden",
        name: "redirectTo",
        value: searchParams.get("redirectTo") ?? void 0
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
      import_react122.FormControl,
      {
        isInvalid: !!((_c = (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.email) != null && _c.length),
        isRequired: !0,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.FormLabel, { children: "Email" }),
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
            import_react122.Input,
            {
              type: "email",
              name: "email",
              placeholder: "maruf@gmail.com",
              focusBorderColor: "primary.500",
              defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.email,
              "aria-errormessage": (_e = actionData == null ? void 0 : actionData.fieldErrors) != null && _e.email ? "email-error" : void 0
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.FormErrorMessage, { children: (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.email ? /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_jsx_runtime67.Fragment, { children: actionData.fieldErrors.email }) : null })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
      import_react122.FormControl,
      {
        mt: "4",
        isInvalid: !!((_h = (_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.password) != null && _h.length),
        isRequired: !0,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.FormLabel, { children: "Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(import_react122.InputGroup, { size: "md", children: [
            /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
              import_react122.Input,
              {
                type: show ? "text" : "password",
                name: "password",
                placeholder: "Enter password",
                focusBorderColor: "primary.500",
                "aria-invalid": Boolean((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password) || void 0,
                "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.password ? "password-error" : void 0
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
              import_react122.Button,
              {
                h: "1.75rem",
                size: "sm",
                onClick: handleClick,
                variant: "outline",
                fontWeight: "normal",
                children: show ? "Hide" : "Show"
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.FormErrorMessage, { children: (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_jsx_runtime67.Fragment, { children: actionData.fieldErrors.password }) : null })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
      import_react122.Button,
      {
        type: "submit",
        variant: "solid",
        colorScheme: "primary",
        w: "full",
        mt: "10",
        name: "_action",
        value: "login",
        disabled: isSubmitting,
        children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.Spinner, {}) : "Log in"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("hr", { className: "my-8" }),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.Text, { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react122.Link, { as: import_react121.Link, to: "/register", color: "primary.700", children: "Create account" }) })
  ] });
}
var LoginForm_default = LoginForm;

// app/routes/(merchant)/login.tsx
var import_jsx_runtime68 = require("react/jsx-runtime"), meta30 = () => ({
  title: "Login"
}), action14 = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), redirectTo = validateUrl(
    form.get("redirectTo") || "/dashboard"
  );
  if (typeof email != "string" || typeof password != "string" || typeof redirectTo != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = { email, password }, fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  let user = await login({ email, password });
  return user && user.message ? badRequest({
    fields,
    formError: user.message
  }) : user ? createUserSession(
    user.user.id,
    user.access_token,
    user.user.roles[0].role.name,
    redirectTo
  ) : badRequest({
    fields,
    formError: "Something is wrong! Please try again."
  });
}, loader32 = async ({ request }) => await getUserId(request) ? (0, import_node17.redirect)("/dashboard") : null;
function Login2() {
  let actionData = (0, import_react124.useActionData)(), [searchParams] = (0, import_react124.useSearchParams)(), transition = (0, import_react124.useTransition)(), { resetShopProvider } = useShopProvider();
  return import_react123.default.useEffect(() => {
    resetShopProvider();
  }, [resetShopProvider]), /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "h-screen md:flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
      loginRegLeftSide_default,
      {
        title: "Welcome!",
        subtitle: "Enter your email and password to login to the dashboard"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "flex md:w-1/2 justify-center py-10 items-center bg-white", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
      LoginForm_default,
      {
        actionData,
        searchParams,
        transition
      }
    ) })
  ] }) });
}

// app/routes/admin/dashboard.tsx
var dashboard_exports3 = {};
__export(dashboard_exports3, {
  default: () => dashboard_default3,
  loader: () => loader33,
  meta: () => meta31
});
var import_ci3 = require("react-icons/ci"), import_md4 = require("react-icons/md");

// app/utils/admin/statistics.ts
var getAdminStatistics = async (request) => {
  var _a;
  try {
    let access_token = await getUserToken(request);
    return (await axios_server_default.get("/statistics/admin", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })).data;
  } catch (error) {
    return error instanceof AxiosError2 ? (_a = error.response) == null ? void 0 : _a.data : null;
  }
};

// app/routes/admin/dashboard.tsx
var import_react125 = require("@remix-run/react"), import_jsx_runtime69 = require("react/jsx-runtime"), meta31 = () => ({
  title: "Dashboard",
  description: "Dashboard"
}), loader33 = async ({ request }) => (await requireAdminUserId(request), { adminStatistics: await getAdminStatistics(request) });
function Home4() {
  let { adminStatistics } = (0, import_react125.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("main", { className: "h-full overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "container px-5 mx-auto grid", children: [
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("h2", { className: "my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200", children: "Dashboard" }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: "p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
          "svg",
          {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("path", { d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400", children: "Total merchant" }),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "text-lg font-semibold text-gray-700 dark:text-gray-200", children: adminStatistics == null ? void 0 : adminStatistics.merchants })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: "p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_ci3.CiShop, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400", children: "Total Shops" }),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "text-lg font-semibold text-gray-700 dark:text-gray-200", children: adminStatistics == null ? void 0 : adminStatistics.shops })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: "p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
          "svg",
          {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400", children: "Total parcel request" }),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "text-lg font-semibold text-gray-700 dark:text-gray-200", children: adminStatistics == null ? void 0 : adminStatistics.parcels })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800", children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: "p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_md4.MdOutlinePendingActions, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "mb-2 text-sm font-medium text-gray-600 dark:text-gray-400", children: "Pending parcel request" }),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "text-lg font-semibold text-gray-700 dark:text-gray-200", children: adminStatistics == null ? void 0 : adminStatistics.pendingParcels })
        ] })
      ] })
    ] })
  ] }) }) });
}
var dashboard_default3 = Home4;

// app/routes/admin/logout.tsx
var logout_exports3 = {};
__export(logout_exports3, {
  loader: () => loader34
});
var loader34 = async ({ request }) => logout(request, "/admin/login");

// app/routes/admin/index.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default,
  loader: () => loader35
});
var import_react126 = require("@remix-run/react");
var import_jsx_runtime70 = require("react/jsx-runtime"), loader35 = async ({ request }) => await requireAdminUserId(request);
function Home5() {
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_jsx_runtime70.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(AdminLayout_default, { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_react126.Outlet, {}) }) });
}
var admin_default = Home5;

// app/routes/admin/login.tsx
var login_exports3 = {};
__export(login_exports3, {
  action: () => action15,
  default: () => login_default2,
  loader: () => loader36
});
var import_react127 = __toESM(require("react")), import_react128 = require("@chakra-ui/react"), import_node18 = require("@remix-run/node"), import_react129 = require("@remix-run/react");
var import_jsx_runtime71 = require("react/jsx-runtime"), action15 = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), redirectTo = validateUrl(
    form.get("redirectTo") || "/admin/dashboard"
  );
  if (typeof email != "string" || typeof password != "string" || typeof redirectTo != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = { email, password }, fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  let user = await adminLogin({ email, password });
  return user && user.message ? badRequest({
    fields,
    formError: user.message
  }) : user ? createUserSession(
    user.user.id,
    user.access_token,
    user.user.roles[0].role.name,
    redirectTo
  ) : badRequest({
    fields,
    formError: "Something is wrong! Please try again."
  });
}, loader36 = async ({ request }) => await getAdminId(request) ? (0, import_node18.redirect)("/admin/dashboard") : null;
function Login3() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let actionData = (0, import_react129.useActionData)(), [searchParams] = (0, import_react129.useSearchParams)(), transition = (0, import_react129.useTransition)(), [show, setShow] = import_react127.default.useState(!1), handleClick = () => setShow(!show), isSubmitting = transition.state === "submitting" && ((_a = transition.submission) == null ? void 0 : _a.formData.get("_action")) === "login";
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "flex flex-col overflow-y-auto md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "h-32 md:h-auto md:w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
        "img",
        {
          "aria-hidden": "true",
          className: "object-cover w-full h-full dark:hidden",
          src: "/img/login-office.jpeg",
          alt: "Office"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
        "img",
        {
          "aria-hidden": "true",
          className: "hidden object-cover w-full h-full dark:block",
          src: "/img/login-office-dark.jpeg",
          alt: "Office"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "flex items-center justify-center p-6 sm:p-12 md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("h1", { className: "mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200", children: "Login" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(import_react129.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react128.Box, { id: "form-error-message", mb: "5", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
          import_react128.Alert,
          {
            status: "error",
            variant: "left-accent",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react128.AlertIcon, {}),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react128.AlertTitle, { children: "Error!" }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react128.AlertDescription, { children: actionData.formError })
            ]
          }
        ) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
          import_react128.FormControl,
          {
            isInvalid: !!((_c = (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.email) != null && _c.length),
            isRequired: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react128.FormLabel, { className: "dark:text-white", children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                import_react128.Input,
                {
                  type: "email",
                  name: "email",
                  placeholder: "maruf@gmail.com",
                  focusBorderColor: "primary.500",
                  className: "dark:text-white",
                  defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.email,
                  "aria-errormessage": (_e = actionData == null ? void 0 : actionData.fieldErrors) != null && _e.email ? "email-error" : void 0
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react128.FormErrorMessage, { children: (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.email ? /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_jsx_runtime71.Fragment, { children: actionData.fieldErrors.email }) : null })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
          import_react128.FormControl,
          {
            mt: "4",
            isInvalid: !!((_h = (_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.password) != null && _h.length),
            isRequired: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react128.FormLabel, { className: "dark:text-white", children: "Password" }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(import_react128.InputGroup, { size: "md", children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                  import_react128.Input,
                  {
                    type: show ? "text" : "password",
                    name: "password",
                    placeholder: "Enter password",
                    focusBorderColor: "primary.500",
                    "aria-invalid": Boolean(
                      (_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password
                    ) || void 0,
                    "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.password ? "password-error" : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react128.InputRightElement, { width: "4.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                  import_react128.Button,
                  {
                    h: "1.75rem",
                    size: "sm",
                    onClick: handleClick,
                    variant: "outline",
                    fontWeight: "normal",
                    children: show ? "Hide" : "Show"
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react128.FormErrorMessage, { children: (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_jsx_runtime71.Fragment, { children: actionData.fieldErrors.password }) : null })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
          import_react128.Button,
          {
            type: "submit",
            name: "_action",
            value: "login",
            className: "w-full mt-8",
            colorScheme: "purple",
            isLoading: isSubmitting,
            children: "Log in"
          }
        )
      ] })
    ] }) })
  ] }) }) });
}
var login_default2 = Login3;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WRI275RE.js", imports: ["/build/_shared/chunk-G3QOGFJU.js", "/build/_shared/chunk-IVJ4XICP.js", "/build/_shared/chunk-UIEBZBYG.js", "/build/_shared/chunk-BQZEWFQC.js", "/build/_shared/chunk-ADMCF34Z.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JO7ONGLM.js", imports: ["/build/_shared/chunk-XX26MIWF.js", "/build/_shared/chunk-256QIPBT.js", "/build/_shared/chunk-47KJIH2H.js", "/build/_shared/chunk-VZQVWFLO.js", "/build/_shared/chunk-Y32DGCAU.js", "/build/_shared/chunk-IV56V4AQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/(merchant)/create-parcel/index": { id: "routes/(merchant)/create-parcel/index", parentId: "root", path: "merchant?/create-parcel", index: !0, caseSensitive: void 0, module: "/build/routes/(merchant)/create-parcel/index-4QATCNSO.js", imports: ["/build/_shared/chunk-SULAKSNO.js", "/build/_shared/chunk-KQ6UMYME.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/dashboard/index": { id: "routes/(merchant)/dashboard/index", parentId: "root", path: "merchant?/dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/(merchant)/dashboard/index-7G7FQLHX.js", imports: ["/build/_shared/chunk-KNDIIZZ6.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/index": { id: "routes/(merchant)/index", parentId: "root", path: "merchant?", index: !0, caseSensitive: void 0, module: "/build/routes/(merchant)/index-6NIIFSEN.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/login": { id: "routes/(merchant)/login", parentId: "root", path: "merchant?/login", index: void 0, caseSensitive: void 0, module: "/build/routes/(merchant)/login-JMT4DT3F.js", imports: ["/build/_shared/chunk-3CILI5MF.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/logout": { id: "routes/(merchant)/logout", parentId: "root", path: "merchant?/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/(merchant)/logout-2T4XPR7E.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/parcel-list/index": { id: "routes/(merchant)/parcel-list/index", parentId: "root", path: "merchant?/parcel-list", index: !0, caseSensitive: void 0, module: "/build/routes/(merchant)/parcel-list/index-4LRTFB2L.js", imports: ["/build/_shared/chunk-7LQJ775B.js", "/build/_shared/chunk-KNDIIZZ6.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-OZGN54SX.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/parcel-tracking/index": { id: "routes/(merchant)/parcel-tracking/index", parentId: "root", path: "merchant?/parcel-tracking", index: !0, caseSensitive: void 0, module: "/build/routes/(merchant)/parcel-tracking/index-MYH2EIVA.js", imports: ["/build/_shared/chunk-OZGN54SX.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/payments-list/index": { id: "routes/(merchant)/payments-list/index", parentId: "root", path: "merchant?/payments-list", index: !0, caseSensitive: void 0, module: "/build/routes/(merchant)/payments-list/index-YXRXLR2I.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-OZGN54SX.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/payments-list/invoice": { id: "routes/(merchant)/payments-list/invoice", parentId: "root", path: "merchant?/payments-list/invoice", index: void 0, caseSensitive: void 0, module: "/build/routes/(merchant)/payments-list/invoice-B5G7I7RL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/pickup-list/index": { id: "routes/(merchant)/pickup-list/index", parentId: "root", path: "merchant?/pickup-list", index: !0, caseSensitive: void 0, module: "/build/routes/(merchant)/pickup-list/index-LU4G7MQU.js", imports: ["/build/_shared/chunk-WRCYRIQC.js", "/build/_shared/chunk-SULAKSNO.js", "/build/_shared/chunk-KQ6UMYME.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/register": { id: "routes/(merchant)/register", parentId: "root", path: "merchant?/register", index: void 0, caseSensitive: void 0, module: "/build/routes/(merchant)/register-SLNLPY54.js", imports: ["/build/_shared/chunk-3CILI5MF.js", "/build/_shared/chunk-D5ZIPDUY.js", "/build/_shared/chunk-SULAKSNO.js", "/build/_shared/chunk-KQ6UMYME.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/settings": { id: "routes/(merchant)/settings", parentId: "root", path: "merchant?/settings", index: void 0, caseSensitive: void 0, module: "/build/routes/(merchant)/settings-NFKCPRO5.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/settings/index": { id: "routes/(merchant)/settings/index", parentId: "routes/(merchant)/settings", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/(merchant)/settings/index-SG2IQ3FA.js", imports: ["/build/_shared/chunk-IV56V4AQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/settings/password": { id: "routes/(merchant)/settings/password", parentId: "routes/(merchant)/settings", path: "password", index: void 0, caseSensitive: void 0, module: "/build/routes/(merchant)/settings/password-MR6UGRE5.js", imports: ["/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-VZQVWFLO.js", "/build/_shared/chunk-IV56V4AQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/(merchant)/shop-list/index": { id: "routes/(merchant)/shop-list/index", parentId: "root", path: "merchant?/shop-list", index: !0, caseSensitive: void 0, module: "/build/routes/(merchant)/shop-list/index-EZNOC3Z5.js", imports: ["/build/_shared/chunk-D5ZIPDUY.js", "/build/_shared/chunk-WRCYRIQC.js", "/build/_shared/chunk-SULAKSNO.js", "/build/_shared/chunk-KQ6UMYME.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UFA7HEOT.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/dashboard": { id: "routes/admin/dashboard", parentId: "root", path: "admin/dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/dashboard-RWAACFGS.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "root", path: "admin", index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-IDU5KGFV.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/login": { id: "routes/admin/login", parentId: "root", path: "admin/login", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/login-JQLF5GD3.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-NMVNDKLV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/logout": { id: "routes/admin/logout", parentId: "root", path: "admin/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/logout-JJFZ7SVF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/merchant-list/index": { id: "routes/admin/merchant-list/index", parentId: "root", path: "admin/merchant-list", index: !0, caseSensitive: void 0, module: "/build/routes/admin/merchant-list/index-RQRYW3LQ.js", imports: ["/build/_shared/chunk-VNKSFTYS.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/merchant-payments/add-new": { id: "routes/admin/merchant-payments/add-new", parentId: "root", path: "admin/merchant-payments/add-new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/merchant-payments/add-new-N2EV7O7R.js", imports: ["/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/merchant-payments/index": { id: "routes/admin/merchant-payments/index", parentId: "root", path: "admin/merchant-payments", index: !0, caseSensitive: void 0, module: "/build/routes/admin/merchant-payments/index-ILI7GMGI.js", imports: ["/build/_shared/chunk-OZGN54SX.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/package-handlers/$handlerId": { id: "routes/admin/package-handlers/$handlerId", parentId: "root", path: "admin/package-handlers/:handlerId", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/package-handlers/$handlerId-PFEOKS5O.js", imports: ["/build/_shared/chunk-SULAKSNO.js", "/build/_shared/chunk-KQ6UMYME.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/package-handlers/add-new": { id: "routes/admin/package-handlers/add-new", parentId: "root", path: "admin/package-handlers/add-new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/package-handlers/add-new-4JN562YK.js", imports: ["/build/_shared/chunk-SULAKSNO.js", "/build/_shared/chunk-KQ6UMYME.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/package-handlers/list": { id: "routes/admin/package-handlers/list", parentId: "root", path: "admin/package-handlers/list", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/package-handlers/list-SQU4ODZV.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/parcel-action/assign/$parcelNumber": { id: "routes/admin/parcel-action/assign/$parcelNumber", parentId: "root", path: "admin/parcel-action/assign/:parcelNumber", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/parcel-action/assign/$parcelNumber-MRP33EGG.js", imports: ["/build/_shared/chunk-KQ6UMYME.js", "/build/_shared/chunk-7LQJ775B.js", "/build/_shared/chunk-KNDIIZZ6.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/parcel-action/receive": { id: "routes/admin/parcel-action/receive", parentId: "root", path: "admin/parcel-action/receive", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/parcel-action/receive-WMWD4GGI.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/parcel-requests/$parcelId": { id: "routes/admin/parcel-requests/$parcelId", parentId: "root", path: "admin/parcel-requests/:parcelId", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/parcel-requests/$parcelId-7TU4YNUO.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/parcel-requests/index": { id: "routes/admin/parcel-requests/index", parentId: "root", path: "admin/parcel-requests", index: !0, caseSensitive: void 0, module: "/build/routes/admin/parcel-requests/index-ZKHJIPAN.js", imports: ["/build/_shared/chunk-VNKSFTYS.js", "/build/_shared/chunk-7LQJ775B.js", "/build/_shared/chunk-KNDIIZZ6.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-OZGN54SX.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/shop-list/index": { id: "routes/admin/shop-list/index", parentId: "root", path: "admin/shop-list", index: !0, caseSensitive: void 0, module: "/build/routes/admin/shop-list/index-JS4ZL5M4.js", imports: ["/build/_shared/chunk-VNKSFTYS.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-UX6CTIA3.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-HONJD4ZI.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/packagehandler/dashboard": { id: "routes/packagehandler/dashboard", parentId: "root", path: "packagehandler/dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/packagehandler/dashboard-7RJEKDQT.js", imports: ["/build/_shared/chunk-SAUX33CG.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/packagehandler/index": { id: "routes/packagehandler/index", parentId: "root", path: "packagehandler", index: !0, caseSensitive: void 0, module: "/build/routes/packagehandler/index-BF5QZLLH.js", imports: ["/build/_shared/chunk-SAUX33CG.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/packagehandler/login": { id: "routes/packagehandler/login", parentId: "root", path: "packagehandler/login", index: void 0, caseSensitive: void 0, module: "/build/routes/packagehandler/login-JPLDCBDS.js", imports: ["/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-NMVNDKLV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/packagehandler/logout": { id: "routes/packagehandler/logout", parentId: "root", path: "packagehandler/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/packagehandler/logout-VH3QWTXJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/packagehandler/parcel-to/delivery": { id: "routes/packagehandler/parcel-to/delivery", parentId: "root", path: "packagehandler/parcel-to/delivery", index: void 0, caseSensitive: void 0, module: "/build/routes/packagehandler/parcel-to/delivery-K3TGTNZI.js", imports: ["/build/_shared/chunk-SAUX33CG.js", "/build/_shared/chunk-VNKSFTYS.js", "/build/_shared/chunk-7LQJ775B.js", "/build/_shared/chunk-KNDIIZZ6.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/packagehandler/parcel-to/pickup": { id: "routes/packagehandler/parcel-to/pickup", parentId: "root", path: "packagehandler/parcel-to/pickup", index: void 0, caseSensitive: void 0, module: "/build/routes/packagehandler/parcel-to/pickup-WIYLKTDG.js", imports: ["/build/_shared/chunk-SAUX33CG.js", "/build/_shared/chunk-VNKSFTYS.js", "/build/_shared/chunk-7LQJ775B.js", "/build/_shared/chunk-KNDIIZZ6.js", "/build/_shared/chunk-DLQ5GVGL.js", "/build/_shared/chunk-C665PDYN.js", "/build/_shared/chunk-V67GGFBU.js", "/build/_shared/chunk-J6A6V3BP.js", "/build/_shared/chunk-H4X6NM2E.js", "/build/_shared/chunk-I7VJZA6D.js", "/build/_shared/chunk-NMVNDKLV.js", "/build/_shared/chunk-7HVO6CPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "205053eb", hmr: void 0, url: "/build/manifest-205053EB.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/admin/parcel-action/assign/$parcelNumber": {
    id: "routes/admin/parcel-action/assign/$parcelNumber",
    parentId: "root",
    path: "admin/parcel-action/assign/:parcelNumber",
    index: void 0,
    caseSensitive: void 0,
    module: parcelNumber_exports
  },
  "routes/admin/package-handlers/$handlerId": {
    id: "routes/admin/package-handlers/$handlerId",
    parentId: "root",
    path: "admin/package-handlers/:handlerId",
    index: void 0,
    caseSensitive: void 0,
    module: handlerId_exports
  },
  "routes/packagehandler/parcel-to/delivery": {
    id: "routes/packagehandler/parcel-to/delivery",
    parentId: "root",
    path: "packagehandler/parcel-to/delivery",
    index: void 0,
    caseSensitive: void 0,
    module: delivery_exports
  },
  "routes/(merchant)/parcel-tracking/index": {
    id: "routes/(merchant)/parcel-tracking/index",
    parentId: "root",
    path: "merchant?/parcel-tracking",
    index: !0,
    caseSensitive: void 0,
    module: parcel_tracking_exports
  },
  "routes/(merchant)/payments-list/invoice": {
    id: "routes/(merchant)/payments-list/invoice",
    parentId: "root",
    path: "merchant?/payments-list/invoice",
    index: void 0,
    caseSensitive: void 0,
    module: invoice_exports
  },
  "routes/admin/merchant-payments/add-new": {
    id: "routes/admin/merchant-payments/add-new",
    parentId: "root",
    path: "admin/merchant-payments/add-new",
    index: void 0,
    caseSensitive: void 0,
    module: add_new_exports
  },
  "routes/admin/parcel-requests/$parcelId": {
    id: "routes/admin/parcel-requests/$parcelId",
    parentId: "root",
    path: "admin/parcel-requests/:parcelId",
    index: void 0,
    caseSensitive: void 0,
    module: parcelId_exports
  },
  "routes/packagehandler/parcel-to/pickup": {
    id: "routes/packagehandler/parcel-to/pickup",
    parentId: "root",
    path: "packagehandler/parcel-to/pickup",
    index: void 0,
    caseSensitive: void 0,
    module: pickup_exports
  },
  "routes/(merchant)/create-parcel/index": {
    id: "routes/(merchant)/create-parcel/index",
    parentId: "root",
    path: "merchant?/create-parcel",
    index: !0,
    caseSensitive: void 0,
    module: create_parcel_exports
  },
  "routes/(merchant)/payments-list/index": {
    id: "routes/(merchant)/payments-list/index",
    parentId: "root",
    path: "merchant?/payments-list",
    index: !0,
    caseSensitive: void 0,
    module: payments_list_exports
  },
  "routes/admin/package-handlers/add-new": {
    id: "routes/admin/package-handlers/add-new",
    parentId: "root",
    path: "admin/package-handlers/add-new",
    index: void 0,
    caseSensitive: void 0,
    module: add_new_exports2
  },
  "routes/admin/merchant-payments/index": {
    id: "routes/admin/merchant-payments/index",
    parentId: "root",
    path: "admin/merchant-payments",
    index: !0,
    caseSensitive: void 0,
    module: merchant_payments_exports
  },
  "routes/(merchant)/parcel-list/index": {
    id: "routes/(merchant)/parcel-list/index",
    parentId: "root",
    path: "merchant?/parcel-list",
    index: !0,
    caseSensitive: void 0,
    module: parcel_list_exports
  },
  "routes/(merchant)/pickup-list/index": {
    id: "routes/(merchant)/pickup-list/index",
    parentId: "root",
    path: "merchant?/pickup-list",
    index: !0,
    caseSensitive: void 0,
    module: pickup_list_exports
  },
  "routes/admin/package-handlers/list": {
    id: "routes/admin/package-handlers/list",
    parentId: "root",
    path: "admin/package-handlers/list",
    index: void 0,
    caseSensitive: void 0,
    module: list_exports
  },
  "routes/admin/parcel-action/receive": {
    id: "routes/admin/parcel-action/receive",
    parentId: "root",
    path: "admin/parcel-action/receive",
    index: void 0,
    caseSensitive: void 0,
    module: receive_exports
  },
  "routes/admin/parcel-requests/index": {
    id: "routes/admin/parcel-requests/index",
    parentId: "root",
    path: "admin/parcel-requests",
    index: !0,
    caseSensitive: void 0,
    module: parcel_requests_exports
  },
  "routes/(merchant)/dashboard/index": {
    id: "routes/(merchant)/dashboard/index",
    parentId: "root",
    path: "merchant?/dashboard",
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/(merchant)/shop-list/index": {
    id: "routes/(merchant)/shop-list/index",
    parentId: "root",
    path: "merchant?/shop-list",
    index: !0,
    caseSensitive: void 0,
    module: shop_list_exports
  },
  "routes/admin/merchant-list/index": {
    id: "routes/admin/merchant-list/index",
    parentId: "root",
    path: "admin/merchant-list",
    index: !0,
    caseSensitive: void 0,
    module: merchant_list_exports
  },
  "routes/packagehandler/dashboard": {
    id: "routes/packagehandler/dashboard",
    parentId: "root",
    path: "packagehandler/dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/admin/shop-list/index": {
    id: "routes/admin/shop-list/index",
    parentId: "root",
    path: "admin/shop-list",
    index: !0,
    caseSensitive: void 0,
    module: shop_list_exports2
  },
  "routes/packagehandler/logout": {
    id: "routes/packagehandler/logout",
    parentId: "root",
    path: "packagehandler/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/packagehandler/index": {
    id: "routes/packagehandler/index",
    parentId: "root",
    path: "packagehandler",
    index: !0,
    caseSensitive: void 0,
    module: packagehandler_exports
  },
  "routes/packagehandler/login": {
    id: "routes/packagehandler/login",
    parentId: "root",
    path: "packagehandler/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/(merchant)/register": {
    id: "routes/(merchant)/register",
    parentId: "root",
    path: "merchant?/register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/(merchant)/settings": {
    id: "routes/(merchant)/settings",
    parentId: "root",
    path: "merchant?/settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/(merchant)/settings/password": {
    id: "routes/(merchant)/settings/password",
    parentId: "routes/(merchant)/settings",
    path: "password",
    index: void 0,
    caseSensitive: void 0,
    module: password_exports
  },
  "routes/(merchant)/settings/index": {
    id: "routes/(merchant)/settings/index",
    parentId: "routes/(merchant)/settings",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: settings_exports2
  },
  "routes/(merchant)/logout": {
    id: "routes/(merchant)/logout",
    parentId: "root",
    path: "merchant?/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports2
  },
  "routes/(merchant)/index": {
    id: "routes/(merchant)/index",
    parentId: "root",
    path: "merchant?",
    index: !0,
    caseSensitive: void 0,
    module: merchant_exports
  },
  "routes/(merchant)/login": {
    id: "routes/(merchant)/login",
    parentId: "root",
    path: "merchant?/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports2
  },
  "routes/admin/dashboard": {
    id: "routes/admin/dashboard",
    parentId: "root",
    path: "admin/dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports3
  },
  "routes/admin/logout": {
    id: "routes/admin/logout",
    parentId: "root",
    path: "admin/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports3
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "root",
    path: "admin",
    index: !0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/login": {
    id: "routes/admin/login",
    parentId: "root",
    path: "admin/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports3
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
