function ed(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function td(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _u = { exports: {} },
  Co = {},
  Pu = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr = Symbol.for("react.element"),
  nd = Symbol.for("react.portal"),
  rd = Symbol.for("react.fragment"),
  od = Symbol.for("react.strict_mode"),
  id = Symbol.for("react.profiler"),
  ld = Symbol.for("react.provider"),
  sd = Symbol.for("react.context"),
  ud = Symbol.for("react.forward_ref"),
  ad = Symbol.for("react.suspense"),
  cd = Symbol.for("react.memo"),
  dd = Symbol.for("react.lazy"),
  fs = Symbol.iterator;
function fd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fs && e[fs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Tu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ru = Object.assign,
  zu = {};
function xn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zu),
    (this.updater = n || Tu);
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ou() {}
Ou.prototype = xn.prototype;
function vl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zu),
    (this.updater = n || Tu);
}
var gl = (vl.prototype = new Ou());
gl.constructor = vl;
Ru(gl, xn.prototype);
gl.isPureReactComponent = !0;
var ps = Array.isArray,
  Du = Object.prototype.hasOwnProperty,
  yl = { current: null },
  Iu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mu(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Du.call(t, r) && !Iu.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: dr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: yl.current,
  };
}
function pd(e, t) {
  return {
    $$typeof: dr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function hd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hs = /\/+/g;
function qo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hd("" + e.key)
    : t.toString(36);
}
function Fr(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case dr:
          case nd:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + qo(l, 0) : r),
      ps(o)
        ? ((n = ""),
          e != null && (n = e.replace(hs, "$&/") + "/"),
          Fr(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (wl(o) &&
            (o = pd(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(hs, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), ps(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + qo(i, s);
      l += Fr(i, t, n, u, o);
    }
  else if (((u = fd(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + qo(i, s++)), (l += Fr(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function xr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Fr(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function md(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Wr = { transition: null },
  vd = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Wr,
    ReactCurrentOwner: yl,
  };
O.Children = {
  map: xr,
  forEach: function (e, t, n) {
    xr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
O.Component = xn;
O.Fragment = rd;
O.Profiler = id;
O.PureComponent = vl;
O.StrictMode = od;
O.Suspense = ad;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vd;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ru({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = yl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Du.call(t, u) &&
        !Iu.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: dr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: sd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ld, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Mu;
O.createFactory = function (e) {
  var t = Mu.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: ud, render: e };
};
O.isValidElement = wl;
O.lazy = function (e) {
  return { $$typeof: dd, _payload: { _status: -1, _result: e }, _init: md };
};
O.memo = function (e, t) {
  return { $$typeof: cd, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Wr.transition;
  Wr.transition = {};
  try {
    e();
  } finally {
    Wr.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ae.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
O.useId = function () {
  return ae.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ae.current.useRef(e);
};
O.useState = function (e) {
  return ae.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ae.current.useTransition();
};
O.version = "18.2.0";
Pu.exports = O;
var y = Pu.exports;
const Fu = td(y),
  gd = ed({ __proto__: null, default: Fu }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd = y,
  wd = Symbol.for("react.element"),
  xd = Symbol.for("react.fragment"),
  Sd = Object.prototype.hasOwnProperty,
  kd = yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wu(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Sd.call(t, r) && !Cd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: wd,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: kd.current,
  };
}
Co.Fragment = xd;
Co.jsx = Wu;
Co.jsxs = Wu;
_u.exports = Co;
var a = _u.exports,
  wi = {},
  Au = { exports: {} },
  Se = {},
  Bu = { exports: {} },
  Uu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, T) {
    var z = P.length;
    P.push(T);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        J = P[Q];
      if (0 < o(J, T)) (P[Q] = T), (P[z] = J), (z = Q);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var T = P[0],
      z = P.pop();
    if (z !== T) {
      P[0] = z;
      e: for (var Q = 0, J = P.length, yr = J >>> 1; Q < yr; ) {
        var kt = 2 * (Q + 1) - 1,
          Ho = P[kt],
          Ct = kt + 1,
          wr = P[Ct];
        if (0 > o(Ho, z))
          Ct < J && 0 > o(wr, Ho)
            ? ((P[Q] = wr), (P[Ct] = z), (Q = Ct))
            : ((P[Q] = Ho), (P[kt] = z), (Q = kt));
        else if (Ct < J && 0 > o(wr, z)) (P[Q] = wr), (P[Ct] = z), (Q = Ct);
        else break e;
      }
    }
    return T;
  }
  function o(P, T) {
    var z = P.sortIndex - T.sortIndex;
    return z !== 0 ? z : P.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    c = [],
    h = 1,
    m = null,
    g = 3,
    x = !1,
    S = !1,
    k = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= P)
        r(c), (T.sortIndex = T.expirationTime), t(u, T);
      else break;
      T = n(c);
    }
  }
  function w(P) {
    if (((k = !1), p(P), !S))
      if (n(u) !== null) (S = !0), Vo(j);
      else {
        var T = n(c);
        T !== null && $o(w, T.startTime - P);
      }
  }
  function j(P, T) {
    (S = !1), k && ((k = !1), f(L), (L = -1)), (x = !0);
    var z = g;
    try {
      for (
        p(T), m = n(u);
        m !== null && (!(m.expirationTime > T) || (P && !ve()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (g = m.priorityLevel);
          var J = Q(m.expirationTime <= T);
          (T = e.unstable_now()),
            typeof J == "function" ? (m.callback = J) : m === n(u) && r(u),
            p(T);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var yr = !0;
      else {
        var kt = n(c);
        kt !== null && $o(w, kt.startTime - T), (yr = !1);
      }
      return yr;
    } finally {
      (m = null), (g = z), (x = !1);
    }
  }
  var N = !1,
    v = null,
    L = -1,
    D = 5,
    R = -1;
  function ve() {
    return !(e.unstable_now() - R < D);
  }
  function Cn() {
    if (v !== null) {
      var P = e.unstable_now();
      R = P;
      var T = !0;
      try {
        T = v(!0, P);
      } finally {
        T ? En() : ((N = !1), (v = null));
      }
    } else N = !1;
  }
  var En;
  if (typeof d == "function")
    En = function () {
      d(Cn);
    };
  else if (typeof MessageChannel < "u") {
    var ds = new MessageChannel(),
      bc = ds.port2;
    (ds.port1.onmessage = Cn),
      (En = function () {
        bc.postMessage(null);
      });
  } else
    En = function () {
      E(Cn, 0);
    };
  function Vo(P) {
    (v = P), N || ((N = !0), En());
  }
  function $o(P, T) {
    L = E(function () {
      P(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || x || ((S = !0), Vo(j));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = g;
      }
      var z = g;
      g = T;
      try {
        return P();
      } finally {
        g = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, T) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = g;
      g = P;
      try {
        return T();
      } finally {
        g = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, T, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        P)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = z + J),
        (P = {
          id: h++,
          callback: T,
          priorityLevel: P,
          startTime: z,
          expirationTime: J,
          sortIndex: -1,
        }),
        z > Q
          ? ((P.sortIndex = z),
            t(c, P),
            n(u) === null &&
              P === n(c) &&
              (k ? (f(L), (L = -1)) : (k = !0), $o(w, z - Q)))
          : ((P.sortIndex = J), t(u, P), S || x || ((S = !0), Vo(j))),
        P
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (P) {
      var T = g;
      return function () {
        var z = g;
        g = T;
        try {
          return P.apply(this, arguments);
        } finally {
          g = z;
        }
      };
    });
})(Uu);
Bu.exports = Uu;
var Ed = Bu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vu = y,
  xe = Ed;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $u = new Set(),
  Qn = {};
function Vt(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) $u.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xi = Object.prototype.hasOwnProperty,
  jd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ms = {},
  vs = {};
function Nd(e) {
  return xi.call(vs, e)
    ? !0
    : xi.call(ms, e)
    ? !1
    : jd.test(e)
    ? (vs[e] = !0)
    : ((ms[e] = !0), !1);
}
function Ld(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _d(e, t, n, r) {
  if (t === null || typeof t > "u" || Ld(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xl = /[\-:]([a-z])/g;
function Sl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xl, Sl);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xl, Sl);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xl, Sl);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kl(e, t, n, r) {
  var o = ne.hasOwnProperty(t) ? ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_d(t, n, o, r) && (n = null),
    r || o === null
      ? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sr = Symbol.for("react.element"),
  Kt = Symbol.for("react.portal"),
  Yt = Symbol.for("react.fragment"),
  Cl = Symbol.for("react.strict_mode"),
  Si = Symbol.for("react.profiler"),
  Hu = Symbol.for("react.provider"),
  qu = Symbol.for("react.context"),
  El = Symbol.for("react.forward_ref"),
  ki = Symbol.for("react.suspense"),
  Ci = Symbol.for("react.suspense_list"),
  jl = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  Qu = Symbol.for("react.offscreen"),
  gs = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gs && e[gs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  Qo;
function On(e) {
  if (Qo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qo = (t && t[1]) || "";
    }
  return (
    `
` +
    Qo +
    e
  );
}
var Ko = !1;
function Yo(e, t) {
  if (!e || Ko) return "";
  Ko = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var u =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Ko = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function Pd(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yo(e.type, !1)), e;
    case 11:
      return (e = Yo(e.type.render, !1)), e;
    case 1:
      return (e = Yo(e.type, !0)), e;
    default:
      return "";
  }
}
function Ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yt:
      return "Fragment";
    case Kt:
      return "Portal";
    case Si:
      return "Profiler";
    case Cl:
      return "StrictMode";
    case ki:
      return "Suspense";
    case Ci:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qu:
        return (e.displayName || "Context") + ".Consumer";
      case Hu:
        return (e._context.displayName || "Context") + ".Provider";
      case El:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case jl:
        return (
          (t = e.displayName || null), t !== null ? t : Ei(e.type) || "Memo"
        );
      case et:
        (t = e._payload), (e = e._init);
        try {
          return Ei(e(t));
        } catch {}
    }
  return null;
}
function Td(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ei(t);
    case 8:
      return t === Cl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ku(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rd(e) {
  var t = Ku(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function kr(e) {
  e._valueTracker || (e._valueTracker = Rd(e));
}
function Yu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ku(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ji(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ys(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gu(e, t) {
  (t = t.checked), t != null && kl(e, "checked", t, !1);
}
function Ni(e, t) {
  Gu(e, t);
  var n = vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Li(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Li(e, t.type, vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ws(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Li(e, t, n) {
  (t !== "number" || Gr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dn = Array.isArray;
function ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function _i(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Dn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vt(n) };
}
function Xu(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ss(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ju(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ju(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Cr,
  Zu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Cr = Cr || document.createElement("div"),
          Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  zd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function bu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ea(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = bu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Od = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ti(e, t) {
  if (t) {
    if (Od[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Ri(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zi = null;
function Nl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Oi = null,
  sn = null,
  un = null;
function ks(e) {
  if ((e = hr(e))) {
    if (typeof Oi != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = _o(t)), Oi(e.stateNode, e.type, t));
  }
}
function ta(e) {
  sn ? (un ? un.push(e) : (un = [e])) : (sn = e);
}
function na() {
  if (sn) {
    var e = sn,
      t = un;
    if (((un = sn = null), ks(e), t)) for (e = 0; e < t.length; e++) ks(t[e]);
  }
}
function ra(e, t) {
  return e(t);
}
function oa() {}
var Go = !1;
function ia(e, t, n) {
  if (Go) return e(t, n);
  Go = !0;
  try {
    return ra(e, t, n);
  } finally {
    (Go = !1), (sn !== null || un !== null) && (oa(), na());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _o(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Di = !1;
if (Ye)
  try {
    var Nn = {};
    Object.defineProperty(Nn, "passive", {
      get: function () {
        Di = !0;
      },
    }),
      window.addEventListener("test", Nn, Nn),
      window.removeEventListener("test", Nn, Nn);
  } catch {
    Di = !1;
  }
function Dd(e, t, n, r, o, i, l, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Wn = !1,
  Xr = null,
  Jr = !1,
  Ii = null,
  Id = {
    onError: function (e) {
      (Wn = !0), (Xr = e);
    },
  };
function Md(e, t, n, r, o, i, l, s, u) {
  (Wn = !1), (Xr = null), Dd.apply(Id, arguments);
}
function Fd(e, t, n, r, o, i, l, s, u) {
  if ((Md.apply(this, arguments), Wn)) {
    if (Wn) {
      var c = Xr;
      (Wn = !1), (Xr = null);
    } else throw Error(C(198));
    Jr || ((Jr = !0), (Ii = c));
  }
}
function $t(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function la(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cs(e) {
  if ($t(e) !== e) throw Error(C(188));
}
function Wd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $t(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Cs(o), e;
        if (i === r) return Cs(o), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function sa(e) {
  return (e = Wd(e)), e !== null ? ua(e) : null;
}
function ua(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ua(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var aa = xe.unstable_scheduleCallback,
  Es = xe.unstable_cancelCallback,
  Ad = xe.unstable_shouldYield,
  Bd = xe.unstable_requestPaint,
  K = xe.unstable_now,
  Ud = xe.unstable_getCurrentPriorityLevel,
  Ll = xe.unstable_ImmediatePriority,
  ca = xe.unstable_UserBlockingPriority,
  Zr = xe.unstable_NormalPriority,
  Vd = xe.unstable_LowPriority,
  da = xe.unstable_IdlePriority,
  Eo = null,
  Be = null;
function $d(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : Qd,
  Hd = Math.log,
  qd = Math.LN2;
function Qd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hd(e) / qd) | 0)) | 0;
}
var Er = 64,
  jr = 4194304;
function In(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function br(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = In(s)) : ((i &= l), i !== 0 && (r = In(i)));
  } else (l = n & ~o), l !== 0 ? (r = In(l)) : i !== 0 && (r = In(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - De(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Kd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Yd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - De(i),
      s = 1 << l,
      u = o[l];
    u === -1
      ? (!(s & n) || s & r) && (o[l] = Kd(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Mi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fa() {
  var e = Er;
  return (Er <<= 1), !(Er & 4194240) && (Er = 64), e;
}
function Xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - De(t)),
    (e[t] = n);
}
function Gd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - De(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function _l(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var M = 0;
function pa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ha,
  Pl,
  ma,
  va,
  ga,
  Fi = !1,
  Nr = [],
  st = null,
  ut = null,
  at = null,
  Gn = new Map(),
  Xn = new Map(),
  nt = [],
  Xd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function js(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function Ln(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = hr(t)), t !== null && Pl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Jd(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (st = Ln(st, e, t, n, r, o)), !0;
    case "dragenter":
      return (ut = Ln(ut, e, t, n, r, o)), !0;
    case "mouseover":
      return (at = Ln(at, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Gn.set(i, Ln(Gn.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Xn.set(i, Ln(Xn.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function ya(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = la(n)), t !== null)) {
          (e.blockedOn = t),
            ga(e.priority, function () {
              ma(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ar(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zi = r), n.target.dispatchEvent(r), (zi = null);
    } else return (t = hr(n)), t !== null && Pl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ns(e, t, n) {
  Ar(e) && n.delete(t);
}
function Zd() {
  (Fi = !1),
    st !== null && Ar(st) && (st = null),
    ut !== null && Ar(ut) && (ut = null),
    at !== null && Ar(at) && (at = null),
    Gn.forEach(Ns),
    Xn.forEach(Ns);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fi ||
      ((Fi = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Zd)));
}
function Jn(e) {
  function t(o) {
    return _n(o, e);
  }
  if (0 < Nr.length) {
    _n(Nr[0], e);
    for (var n = 1; n < Nr.length; n++) {
      var r = Nr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    st !== null && _n(st, e),
      ut !== null && _n(ut, e),
      at !== null && _n(at, e),
      Gn.forEach(t),
      Xn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    ya(n), n.blockedOn === null && nt.shift();
}
var an = Ze.ReactCurrentBatchConfig,
  eo = !0;
function bd(e, t, n, r) {
  var o = M,
    i = an.transition;
  an.transition = null;
  try {
    (M = 1), Tl(e, t, n, r);
  } finally {
    (M = o), (an.transition = i);
  }
}
function ef(e, t, n, r) {
  var o = M,
    i = an.transition;
  an.transition = null;
  try {
    (M = 4), Tl(e, t, n, r);
  } finally {
    (M = o), (an.transition = i);
  }
}
function Tl(e, t, n, r) {
  if (eo) {
    var o = Wi(e, t, n, r);
    if (o === null) li(e, t, r, to, n), js(e, r);
    else if (Jd(o, e, t, n, r)) r.stopPropagation();
    else if ((js(e, r), t & 4 && -1 < Xd.indexOf(e))) {
      for (; o !== null; ) {
        var i = hr(o);
        if (
          (i !== null && ha(i),
          (i = Wi(e, t, n, r)),
          i === null && li(e, t, r, to, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else li(e, t, r, null, n);
  }
}
var to = null;
function Wi(e, t, n, r) {
  if (((to = null), (e = Nl(r)), (e = zt(e)), e !== null))
    if (((t = $t(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = la(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (to = e), null;
}
function wa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ud()) {
        case Ll:
          return 1;
        case ca:
          return 4;
        case Zr:
        case Vd:
          return 16;
        case da:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null,
  Rl = null,
  Br = null;
function xa() {
  if (Br) return Br;
  var e,
    t = Rl,
    n = t.length,
    r,
    o = "value" in ot ? ot.value : ot.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Br = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Lr() {
  return !0;
}
function Ls() {
  return !1;
}
function ke(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Lr
        : Ls),
      (this.isPropagationStopped = Ls),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Lr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lr));
      },
      persist: function () {},
      isPersistent: Lr,
    }),
    t
  );
}
var Sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zl = ke(Sn),
  pr = $({}, Sn, { view: 0, detail: 0 }),
  tf = ke(pr),
  Jo,
  Zo,
  Pn,
  jo = $({}, pr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ol,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Pn &&
            (Pn && e.type === "mousemove"
              ? ((Jo = e.screenX - Pn.screenX), (Zo = e.screenY - Pn.screenY))
              : (Zo = Jo = 0),
            (Pn = e)),
          Jo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zo;
    },
  }),
  _s = ke(jo),
  nf = $({}, jo, { dataTransfer: 0 }),
  rf = ke(nf),
  of = $({}, pr, { relatedTarget: 0 }),
  bo = ke(of),
  lf = $({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sf = ke(lf),
  uf = $({}, Sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  af = ke(uf),
  cf = $({}, Sn, { data: 0 }),
  Ps = ke(cf),
  df = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ff = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  pf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pf[e]) ? !!t[e] : !1;
}
function Ol() {
  return hf;
}
var mf = $({}, pr, {
    key: function (e) {
      if (e.key) {
        var t = df[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ff[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ol,
    charCode: function (e) {
      return e.type === "keypress" ? Ur(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ur(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  vf = ke(mf),
  gf = $({}, jo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ts = ke(gf),
  yf = $({}, pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ol,
  }),
  wf = ke(yf),
  xf = $({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sf = ke(xf),
  kf = $({}, jo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Cf = ke(kf),
  Ef = [9, 13, 27, 32],
  Dl = Ye && "CompositionEvent" in window,
  An = null;
Ye && "documentMode" in document && (An = document.documentMode);
var jf = Ye && "TextEvent" in window && !An,
  Sa = Ye && (!Dl || (An && 8 < An && 11 >= An)),
  Rs = " ",
  zs = !1;
function ka(e, t) {
  switch (e) {
    case "keyup":
      return Ef.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ca(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function Nf(e, t) {
  switch (e) {
    case "compositionend":
      return Ca(t);
    case "keypress":
      return t.which !== 32 ? null : ((zs = !0), Rs);
    case "textInput":
      return (e = t.data), e === Rs && zs ? null : e;
    default:
      return null;
  }
}
function Lf(e, t) {
  if (Gt)
    return e === "compositionend" || (!Dl && ka(e, t))
      ? ((e = xa()), (Br = Rl = ot = null), (Gt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _f = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Os(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_f[e.type] : t === "textarea";
}
function Ea(e, t, n, r) {
  ta(r),
    (t = no(t, "onChange")),
    0 < t.length &&
      ((n = new zl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Bn = null,
  Zn = null;
function Pf(e) {
  Ia(e, 0);
}
function No(e) {
  var t = Zt(e);
  if (Yu(t)) return e;
}
function Tf(e, t) {
  if (e === "change") return t;
}
var ja = !1;
if (Ye) {
  var ei;
  if (Ye) {
    var ti = "oninput" in document;
    if (!ti) {
      var Ds = document.createElement("div");
      Ds.setAttribute("oninput", "return;"),
        (ti = typeof Ds.oninput == "function");
    }
    ei = ti;
  } else ei = !1;
  ja = ei && (!document.documentMode || 9 < document.documentMode);
}
function Is() {
  Bn && (Bn.detachEvent("onpropertychange", Na), (Zn = Bn = null));
}
function Na(e) {
  if (e.propertyName === "value" && No(Zn)) {
    var t = [];
    Ea(t, Zn, e, Nl(e)), ia(Pf, t);
  }
}
function Rf(e, t, n) {
  e === "focusin"
    ? (Is(), (Bn = t), (Zn = n), Bn.attachEvent("onpropertychange", Na))
    : e === "focusout" && Is();
}
function zf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return No(Zn);
}
function Of(e, t) {
  if (e === "click") return No(t);
}
function Df(e, t) {
  if (e === "input" || e === "change") return No(t);
}
function If(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : If;
function bn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!xi.call(t, o) || !Me(e[o], t[o])) return !1;
  }
  return !0;
}
function Ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fs(e, t) {
  var n = Ms(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ms(n);
  }
}
function La(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? La(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _a() {
  for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gr(e.document);
  }
  return t;
}
function Il(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Mf(e) {
  var t = _a(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    La(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Il(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Fs(n, i));
        var l = Fs(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ff = Ye && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  Ai = null,
  Un = null,
  Bi = !1;
function Ws(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bi ||
    Xt == null ||
    Xt !== Gr(r) ||
    ((r = Xt),
    "selectionStart" in r && Il(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && bn(Un, r)) ||
      ((Un = r),
      (r = no(Ai, "onSelect")),
      0 < r.length &&
        ((t = new zl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
function _r(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jt = {
    animationend: _r("Animation", "AnimationEnd"),
    animationiteration: _r("Animation", "AnimationIteration"),
    animationstart: _r("Animation", "AnimationStart"),
    transitionend: _r("Transition", "TransitionEnd"),
  },
  ni = {},
  Pa = {};
Ye &&
  ((Pa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jt.animationend.animation,
    delete Jt.animationiteration.animation,
    delete Jt.animationstart.animation),
  "TransitionEvent" in window || delete Jt.transitionend.transition);
function Lo(e) {
  if (ni[e]) return ni[e];
  if (!Jt[e]) return e;
  var t = Jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Pa) return (ni[e] = t[n]);
  return e;
}
var Ta = Lo("animationend"),
  Ra = Lo("animationiteration"),
  za = Lo("animationstart"),
  Oa = Lo("transitionend"),
  Da = new Map(),
  As =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yt(e, t) {
  Da.set(e, t), Vt(t, [e]);
}
for (var ri = 0; ri < As.length; ri++) {
  var oi = As[ri],
    Wf = oi.toLowerCase(),
    Af = oi[0].toUpperCase() + oi.slice(1);
  yt(Wf, "on" + Af);
}
yt(Ta, "onAnimationEnd");
yt(Ra, "onAnimationIteration");
yt(za, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(Oa, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Vt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Vt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Vt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Vt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function Bs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Fd(r, t, void 0, e), (e.currentTarget = null);
}
function Ia(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== i && o.isPropagationStopped())) break e;
          Bs(o, s, c), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          Bs(o, s, c), (i = u);
        }
    }
  }
  if (Jr) throw ((e = Ii), (Jr = !1), (Ii = null), e);
}
function W(e, t) {
  var n = t[qi];
  n === void 0 && (n = t[qi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ma(t, e, 2, !1), n.add(r));
}
function ii(e, t, n) {
  var r = 0;
  t && (r |= 4), Ma(n, e, r, t);
}
var Pr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Pr]) {
    (e[Pr] = !0),
      $u.forEach(function (n) {
        n !== "selectionchange" && (Bf.has(n) || ii(n, !1, e), ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pr] || ((t[Pr] = !0), ii("selectionchange", !1, t));
  }
}
function Ma(e, t, n, r) {
  switch (wa(t)) {
    case 1:
      var o = bd;
      break;
    case 4:
      o = ef;
      break;
    default:
      o = Tl;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Di ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function li(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = zt(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  ia(function () {
    var c = i,
      h = Nl(n),
      m = [];
    e: {
      var g = Da.get(e);
      if (g !== void 0) {
        var x = zl,
          S = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = vf;
            break;
          case "focusin":
            (S = "focus"), (x = bo);
            break;
          case "focusout":
            (S = "blur"), (x = bo);
            break;
          case "beforeblur":
          case "afterblur":
            x = bo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = _s;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = rf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = wf;
            break;
          case Ta:
          case Ra:
          case za:
            x = sf;
            break;
          case Oa:
            x = Sf;
            break;
          case "scroll":
            x = tf;
            break;
          case "wheel":
            x = Cf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = af;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ts;
        }
        var k = (t & 4) !== 0,
          E = !k && e === "scroll",
          f = k ? (g !== null ? g + "Capture" : null) : g;
        k = [];
        for (var d = c, p; d !== null; ) {
          p = d;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              f !== null && ((w = Yn(d, f)), w != null && k.push(tr(d, w, p)))),
            E)
          )
            break;
          d = d.return;
        }
        0 < k.length &&
          ((g = new x(g, S, null, n, h)), m.push({ event: g, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          g &&
            n !== zi &&
            (S = n.relatedTarget || n.fromElement) &&
            (zt(S) || S[Ge]))
        )
          break e;
        if (
          (x || g) &&
          ((g =
            h.window === h
              ? h
              : (g = h.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          x
            ? ((S = n.relatedTarget || n.toElement),
              (x = c),
              (S = S ? zt(S) : null),
              S !== null &&
                ((E = $t(S)), S !== E || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((x = null), (S = c)),
          x !== S)
        ) {
          if (
            ((k = _s),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Ts),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (E = x == null ? g : Zt(x)),
            (p = S == null ? g : Zt(S)),
            (g = new k(w, d + "leave", x, n, h)),
            (g.target = E),
            (g.relatedTarget = p),
            (w = null),
            zt(h) === c &&
              ((k = new k(f, d + "enter", S, n, h)),
              (k.target = p),
              (k.relatedTarget = E),
              (w = k)),
            (E = w),
            x && S)
          )
            t: {
              for (k = x, f = S, d = 0, p = k; p; p = Qt(p)) d++;
              for (p = 0, w = f; w; w = Qt(w)) p++;
              for (; 0 < d - p; ) (k = Qt(k)), d--;
              for (; 0 < p - d; ) (f = Qt(f)), p--;
              for (; d--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Qt(k)), (f = Qt(f));
              }
              k = null;
            }
          else k = null;
          x !== null && Us(m, g, x, k, !1),
            S !== null && E !== null && Us(m, E, S, k, !0);
        }
      }
      e: {
        if (
          ((g = c ? Zt(c) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var j = Tf;
        else if (Os(g))
          if (ja) j = Df;
          else {
            j = zf;
            var N = Rf;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (j = Of);
        if (j && (j = j(e, c))) {
          Ea(m, j, n, h);
          break e;
        }
        N && N(e, g, c),
          e === "focusout" &&
            (N = g._wrapperState) &&
            N.controlled &&
            g.type === "number" &&
            Li(g, "number", g.value);
      }
      switch (((N = c ? Zt(c) : window), e)) {
        case "focusin":
          (Os(N) || N.contentEditable === "true") &&
            ((Xt = N), (Ai = c), (Un = null));
          break;
        case "focusout":
          Un = Ai = Xt = null;
          break;
        case "mousedown":
          Bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bi = !1), Ws(m, n, h);
          break;
        case "selectionchange":
          if (Ff) break;
        case "keydown":
        case "keyup":
          Ws(m, n, h);
      }
      var v;
      if (Dl)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Gt
          ? ka(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Sa &&
          n.locale !== "ko" &&
          (Gt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Gt && (v = xa())
            : ((ot = h),
              (Rl = "value" in ot ? ot.value : ot.textContent),
              (Gt = !0))),
        (N = no(c, L)),
        0 < N.length &&
          ((L = new Ps(L, e, null, n, h)),
          m.push({ event: L, listeners: N }),
          v ? (L.data = v) : ((v = Ca(n)), v !== null && (L.data = v)))),
        (v = jf ? Nf(e, n) : Lf(e, n)) &&
          ((c = no(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new Ps("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = v)));
    }
    Ia(m, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function no(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Yn(e, n)),
      i != null && r.unshift(tr(e, i, o)),
      (i = Yn(e, t)),
      i != null && r.push(tr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Us(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      o
        ? ((u = Yn(n, i)), u != null && l.unshift(tr(n, u, s)))
        : o || ((u = Yn(n, i)), u != null && l.push(tr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Uf = /\r\n?/g,
  Vf = /\u0000|\uFFFD/g;
function Vs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Uf,
      `
`
    )
    .replace(Vf, "");
}
function Tr(e, t, n) {
  if (((t = Vs(t)), Vs(e) !== t && n)) throw Error(C(425));
}
function ro() {}
var Ui = null,
  Vi = null;
function $i(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Hi = typeof setTimeout == "function" ? setTimeout : void 0,
  $f = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $s = typeof Promise == "function" ? Promise : void 0,
  Hf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $s < "u"
      ? function (e) {
          return $s.resolve(null).then(e).catch(qf);
        }
      : Hi;
function qf(e) {
  setTimeout(function () {
    throw e;
  });
}
function si(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Jn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Jn(t);
}
function ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  Ae = "__reactFiber$" + kn,
  nr = "__reactProps$" + kn,
  Ge = "__reactContainer$" + kn,
  qi = "__reactEvents$" + kn,
  Qf = "__reactListeners$" + kn,
  Kf = "__reactHandles$" + kn;
function zt(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[Ae])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Hs(e); e !== null; ) {
          if ((n = e[Ae])) return n;
          e = Hs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hr(e) {
  return (
    (e = e[Ae] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function _o(e) {
  return e[nr] || null;
}
var Qi = [],
  bt = -1;
function wt(e) {
  return { current: e };
}
function A(e) {
  0 > bt || ((e.current = Qi[bt]), (Qi[bt] = null), bt--);
}
function F(e, t) {
  bt++, (Qi[bt] = e.current), (e.current = t);
}
var gt = {},
  le = wt(gt),
  pe = wt(!1),
  Ft = gt;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function oo() {
  A(pe), A(le);
}
function qs(e, t, n) {
  if (le.current !== gt) throw Error(C(168));
  F(le, t), F(pe, n);
}
function Fa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, Td(e) || "Unknown", o));
  return $({}, n, r);
}
function io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (Ft = le.current),
    F(le, e),
    F(pe, pe.current),
    !0
  );
}
function Qs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Fa(e, t, Ft)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(pe),
      A(le),
      F(le, e))
    : A(pe),
    F(pe, n);
}
var He = null,
  Po = !1,
  ui = !1;
function Wa(e) {
  He === null ? (He = [e]) : He.push(e);
}
function Yf(e) {
  (Po = !0), Wa(e);
}
function xt() {
  if (!ui && He !== null) {
    ui = !0;
    var e = 0,
      t = M;
    try {
      var n = He;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (Po = !1);
    } catch (o) {
      throw (He !== null && (He = He.slice(e + 1)), aa(Ll, xt), o);
    } finally {
      (M = t), (ui = !1);
    }
  }
  return null;
}
var en = [],
  tn = 0,
  lo = null,
  so = 0,
  Ce = [],
  Ee = 0,
  Wt = null,
  qe = 1,
  Qe = "";
function Tt(e, t) {
  (en[tn++] = so), (en[tn++] = lo), (lo = e), (so = t);
}
function Aa(e, t, n) {
  (Ce[Ee++] = qe), (Ce[Ee++] = Qe), (Ce[Ee++] = Wt), (Wt = e);
  var r = qe;
  e = Qe;
  var o = 32 - De(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - De(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (qe = (1 << (32 - De(t) + o)) | (n << o) | r),
      (Qe = i + e);
  } else (qe = (1 << i) | (n << o) | r), (Qe = e);
}
function Ml(e) {
  e.return !== null && (Tt(e, 1), Aa(e, 1, 0));
}
function Fl(e) {
  for (; e === lo; )
    (lo = en[--tn]), (en[tn] = null), (so = en[--tn]), (en[tn] = null);
  for (; e === Wt; )
    (Wt = Ce[--Ee]),
      (Ce[Ee] = null),
      (Qe = Ce[--Ee]),
      (Ce[Ee] = null),
      (qe = Ce[--Ee]),
      (Ce[Ee] = null);
}
var we = null,
  ye = null,
  B = !1,
  Oe = null;
function Ba(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ks(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ye = ct(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wt !== null ? { id: qe, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yi(e) {
  if (B) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Ks(e, t)) {
        if (Ki(e)) throw Error(C(418));
        t = ct(n.nextSibling);
        var r = we;
        t && Ks(e, t)
          ? Ba(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (we = e));
      }
    } else {
      if (Ki(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (we = e);
    }
  }
}
function Ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Rr(e) {
  if (e !== we) return !1;
  if (!B) return Ys(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$i(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Ki(e)) throw (Ua(), Error(C(418)));
    for (; t; ) Ba(e, t), (t = ct(t.nextSibling));
  }
  if ((Ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function Ua() {
  for (var e = ye; e; ) e = ct(e.nextSibling);
}
function hn() {
  (ye = we = null), (B = !1);
}
function Wl(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Gf = Ze.ReactCurrentBatchConfig;
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var uo = wt(null),
  ao = null,
  nn = null,
  Al = null;
function Bl() {
  Al = nn = ao = null;
}
function Ul(e) {
  var t = uo.current;
  A(uo), (e._currentValue = t);
}
function Gi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function cn(e, t) {
  (ao = e),
    (Al = nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Le(e) {
  var t = e._currentValue;
  if (Al !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nn === null)) {
      if (ao === null) throw Error(C(308));
      (nn = e), (ao.dependencies = { lanes: 0, firstContext: e });
    } else nn = nn.next = e;
  return t;
}
var Ot = null;
function Vl(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function Va(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Vl(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function $l(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $a(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Vl(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Vr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _l(e, n);
  }
}
function Gs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function co(e, t, n, r) {
  var o = e.updateQueue;
  tt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), l === null ? (i = c) : (l.next = c), (l = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== l &&
        (s === null ? (h.firstBaseUpdate = c) : (s.next = c),
        (h.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var m = o.baseState;
    (l = 0), (h = c = u = null), (s = i);
    do {
      var g = s.lane,
        x = s.eventTime;
      if ((r & g) === g) {
        h !== null &&
          (h = h.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var S = e,
            k = s;
          switch (((g = t), (x = n), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                m = S.call(x, m, g);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (g = typeof S == "function" ? S.call(x, m, g) : S),
                g == null)
              )
                break e;
              m = $({}, m, g);
              break e;
            case 2:
              tt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [s]) : g.push(s));
      } else
        (x = {
          eventTime: x,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((c = h = x), (u = m)) : (h = h.next = x),
          (l |= g);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (g = s),
          (s = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (u = m),
      (o.baseState = u),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Bt |= l), (e.lanes = l), (e.memoizedState = m);
  }
}
function Xs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(C(191, o));
        o.call(r);
      }
    }
}
var Ha = new Vu.Component().refs;
function Xi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var To = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $t(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      o = pt(e),
      i = Ke(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, o)),
      t !== null && (Ie(t, e, o, r), Vr(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      o = pt(e),
      i = Ke(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, o)),
      t !== null && (Ie(t, e, o, r), Vr(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = pt(e),
      o = Ke(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = dt(e, o, r)),
      t !== null && (Ie(t, e, r, n), Vr(t, e, r));
  },
};
function Js(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bn(n, r) || !bn(o, i)
      : !0
  );
}
function qa(e, t, n) {
  var r = !1,
    o = gt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Le(i))
      : ((o = he(t) ? Ft : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? pn(e, o) : gt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = To),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Zs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && To.enqueueReplaceState(t, t.state, null);
}
function Ji(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Ha), $l(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Le(i))
    : ((i = he(t) ? Ft : le.current), (o.context = pn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Xi(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && To.enqueueReplaceState(o, o.state, null),
      co(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === Ha && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function bs(e) {
  var t = e._init;
  return t(e._payload);
}
function Qa(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [d]), (f.flags |= 16)) : p.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function o(f, d) {
    return (f = ht(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, d, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < d ? ((f.flags |= 2), d) : p)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, p, w) {
    return d === null || d.tag !== 6
      ? ((d = mi(p, f.mode, w)), (d.return = f), d)
      : ((d = o(d, p)), (d.return = f), d);
  }
  function u(f, d, p, w) {
    var j = p.type;
    return j === Yt
      ? h(f, d, p.props.children, w, p.key)
      : d !== null &&
        (d.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === et &&
            bs(j) === d.type))
      ? ((w = o(d, p.props)), (w.ref = Tn(f, d, p)), (w.return = f), w)
      : ((w = Yr(p.type, p.key, p.props, null, f.mode, w)),
        (w.ref = Tn(f, d, p)),
        (w.return = f),
        w);
  }
  function c(f, d, p, w) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== p.containerInfo ||
      d.stateNode.implementation !== p.implementation
      ? ((d = vi(p, f.mode, w)), (d.return = f), d)
      : ((d = o(d, p.children || [])), (d.return = f), d);
  }
  function h(f, d, p, w, j) {
    return d === null || d.tag !== 7
      ? ((d = Mt(p, f.mode, w, j)), (d.return = f), d)
      : ((d = o(d, p)), (d.return = f), d);
  }
  function m(f, d, p) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = mi("" + d, f.mode, p)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Sr:
          return (
            (p = Yr(d.type, d.key, d.props, null, f.mode, p)),
            (p.ref = Tn(f, null, d)),
            (p.return = f),
            p
          );
        case Kt:
          return (d = vi(d, f.mode, p)), (d.return = f), d;
        case et:
          var w = d._init;
          return m(f, w(d._payload), p);
      }
      if (Dn(d) || jn(d))
        return (d = Mt(d, f.mode, p, null)), (d.return = f), d;
      zr(f, d);
    }
    return null;
  }
  function g(f, d, p, w) {
    var j = d !== null ? d.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return j !== null ? null : s(f, d, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sr:
          return p.key === j ? u(f, d, p, w) : null;
        case Kt:
          return p.key === j ? c(f, d, p, w) : null;
        case et:
          return (j = p._init), g(f, d, j(p._payload), w);
      }
      if (Dn(p) || jn(p)) return j !== null ? null : h(f, d, p, w, null);
      zr(f, p);
    }
    return null;
  }
  function x(f, d, p, w, j) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(p) || null), s(d, f, "" + w, j);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Sr:
          return (f = f.get(w.key === null ? p : w.key) || null), u(d, f, w, j);
        case Kt:
          return (f = f.get(w.key === null ? p : w.key) || null), c(d, f, w, j);
        case et:
          var N = w._init;
          return x(f, d, p, N(w._payload), j);
      }
      if (Dn(w) || jn(w)) return (f = f.get(p) || null), h(d, f, w, j, null);
      zr(d, w);
    }
    return null;
  }
  function S(f, d, p, w) {
    for (
      var j = null, N = null, v = d, L = (d = 0), D = null;
      v !== null && L < p.length;
      L++
    ) {
      v.index > L ? ((D = v), (v = null)) : (D = v.sibling);
      var R = g(f, v, p[L], w);
      if (R === null) {
        v === null && (v = D);
        break;
      }
      e && v && R.alternate === null && t(f, v),
        (d = i(R, d, L)),
        N === null ? (j = R) : (N.sibling = R),
        (N = R),
        (v = D);
    }
    if (L === p.length) return n(f, v), B && Tt(f, L), j;
    if (v === null) {
      for (; L < p.length; L++)
        (v = m(f, p[L], w)),
          v !== null &&
            ((d = i(v, d, L)), N === null ? (j = v) : (N.sibling = v), (N = v));
      return B && Tt(f, L), j;
    }
    for (v = r(f, v); L < p.length; L++)
      (D = x(v, f, L, p[L], w)),
        D !== null &&
          (e && D.alternate !== null && v.delete(D.key === null ? L : D.key),
          (d = i(D, d, L)),
          N === null ? (j = D) : (N.sibling = D),
          (N = D));
    return (
      e &&
        v.forEach(function (ve) {
          return t(f, ve);
        }),
      B && Tt(f, L),
      j
    );
  }
  function k(f, d, p, w) {
    var j = jn(p);
    if (typeof j != "function") throw Error(C(150));
    if (((p = j.call(p)), p == null)) throw Error(C(151));
    for (
      var N = (j = null), v = d, L = (d = 0), D = null, R = p.next();
      v !== null && !R.done;
      L++, R = p.next()
    ) {
      v.index > L ? ((D = v), (v = null)) : (D = v.sibling);
      var ve = g(f, v, R.value, w);
      if (ve === null) {
        v === null && (v = D);
        break;
      }
      e && v && ve.alternate === null && t(f, v),
        (d = i(ve, d, L)),
        N === null ? (j = ve) : (N.sibling = ve),
        (N = ve),
        (v = D);
    }
    if (R.done) return n(f, v), B && Tt(f, L), j;
    if (v === null) {
      for (; !R.done; L++, R = p.next())
        (R = m(f, R.value, w)),
          R !== null &&
            ((d = i(R, d, L)), N === null ? (j = R) : (N.sibling = R), (N = R));
      return B && Tt(f, L), j;
    }
    for (v = r(f, v); !R.done; L++, R = p.next())
      (R = x(v, f, L, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && v.delete(R.key === null ? L : R.key),
          (d = i(R, d, L)),
          N === null ? (j = R) : (N.sibling = R),
          (N = R));
    return (
      e &&
        v.forEach(function (Cn) {
          return t(f, Cn);
        }),
      B && Tt(f, L),
      j
    );
  }
  function E(f, d, p, w) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Yt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Sr:
          e: {
            for (var j = p.key, N = d; N !== null; ) {
              if (N.key === j) {
                if (((j = p.type), j === Yt)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (d = o(N, p.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  N.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === et &&
                    bs(j) === N.type)
                ) {
                  n(f, N.sibling),
                    (d = o(N, p.props)),
                    (d.ref = Tn(f, N, p)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === Yt
              ? ((d = Mt(p.props.children, f.mode, w, p.key)),
                (d.return = f),
                (f = d))
              : ((w = Yr(p.type, p.key, p.props, null, f.mode, w)),
                (w.ref = Tn(f, d, p)),
                (w.return = f),
                (f = w));
          }
          return l(f);
        case Kt:
          e: {
            for (N = p.key; d !== null; ) {
              if (d.key === N)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === p.containerInfo &&
                  d.stateNode.implementation === p.implementation
                ) {
                  n(f, d.sibling),
                    (d = o(d, p.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = vi(p, f.mode, w)), (d.return = f), (f = d);
          }
          return l(f);
        case et:
          return (N = p._init), E(f, d, N(p._payload), w);
      }
      if (Dn(p)) return S(f, d, p, w);
      if (jn(p)) return k(f, d, p, w);
      zr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, p)), (d.return = f), (f = d))
          : (n(f, d), (d = mi(p, f.mode, w)), (d.return = f), (f = d)),
        l(f))
      : n(f, d);
  }
  return E;
}
var mn = Qa(!0),
  Ka = Qa(!1),
  mr = {},
  Ue = wt(mr),
  rr = wt(mr),
  or = wt(mr);
function Dt(e) {
  if (e === mr) throw Error(C(174));
  return e;
}
function Hl(e, t) {
  switch ((F(or, t), F(rr, e), F(Ue, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pi(t, e));
  }
  A(Ue), F(Ue, t);
}
function vn() {
  A(Ue), A(rr), A(or);
}
function Ya(e) {
  Dt(or.current);
  var t = Dt(Ue.current),
    n = Pi(t, e.type);
  t !== n && (F(rr, e), F(Ue, n));
}
function ql(e) {
  rr.current === e && (A(Ue), A(rr));
}
var U = wt(0);
function fo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ai = [];
function Ql() {
  for (var e = 0; e < ai.length; e++)
    ai[e]._workInProgressVersionPrimary = null;
  ai.length = 0;
}
var $r = Ze.ReactCurrentDispatcher,
  ci = Ze.ReactCurrentBatchConfig,
  At = 0,
  V = null,
  G = null,
  Z = null,
  po = !1,
  Vn = !1,
  ir = 0,
  Xf = 0;
function re() {
  throw Error(C(321));
}
function Kl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Yl(e, t, n, r, o, i) {
  if (
    ((At = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($r.current = e === null || e.memoizedState === null ? ep : tp),
    (e = n(r, o)),
    Vn)
  ) {
    i = 0;
    do {
      if (((Vn = !1), (ir = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (Z = G = null),
        (t.updateQueue = null),
        ($r.current = np),
        (e = n(r, o));
    } while (Vn);
  }
  if (
    (($r.current = ho),
    (t = G !== null && G.next !== null),
    (At = 0),
    (Z = G = V = null),
    (po = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Gl() {
  var e = ir !== 0;
  return (ir = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function _e() {
  if (G === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = Z === null ? V.memoizedState : Z.next;
  if (t !== null) (Z = t), (G = e);
  else {
    if (e === null) throw Error(C(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function di(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = G,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      c = i;
    do {
      var h = c.lane;
      if ((At & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = m), (l = r)) : (u = u.next = m),
          (V.lanes |= h),
          (Bt |= h);
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? (l = r) : (u.next = s),
      Me(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (V.lanes |= i), (Bt |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fi(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Me(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ga() {}
function Xa(e, t) {
  var n = V,
    r = _e(),
    o = t(),
    i = !Me(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (fe = !0)),
    (r = r.queue),
    Xl(ba.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sr(9, Za.bind(null, n, r, o, t), void 0, null),
      b === null)
    )
      throw Error(C(349));
    At & 30 || Ja(n, t, o);
  }
  return o;
}
function Ja(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Za(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ec(t) && tc(e);
}
function ba(e, t, n) {
  return n(function () {
    ec(t) && tc(e);
  });
}
function ec(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function tc(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function eu(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bf.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nc() {
  return _e().memoizedState;
}
function Hr(e, t, n, r) {
  var o = We();
  (V.flags |= e),
    (o.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ro(e, t, n, r) {
  var o = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var l = G.memoizedState;
    if (((i = l.destroy), r !== null && Kl(r, l.deps))) {
      o.memoizedState = sr(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (o.memoizedState = sr(1 | t, n, i, r));
}
function tu(e, t) {
  return Hr(8390656, 8, e, t);
}
function Xl(e, t) {
  return Ro(2048, 8, e, t);
}
function rc(e, t) {
  return Ro(4, 2, e, t);
}
function oc(e, t) {
  return Ro(4, 4, e, t);
}
function ic(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function lc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ro(4, 4, ic.bind(null, t, e), n)
  );
}
function Jl() {}
function sc(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uc(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ac(e, t, n) {
  return At & 21
    ? (Me(n, t) || ((n = fa()), (V.lanes |= n), (Bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function Jf(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (ci.transition = r);
  }
}
function cc() {
  return _e().memoizedState;
}
function Zf(e, t, n) {
  var r = pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dc(e))
  )
    fc(t, n);
  else if (((n = Va(e, t, n, r)), n !== null)) {
    var o = ue();
    Ie(n, e, r, o), pc(n, t, r);
  }
}
function bf(e, t, n) {
  var r = pt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dc(e)) fc(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Me(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Vl(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Va(e, t, o, r)),
      n !== null && ((o = ue()), Ie(n, e, r, o), pc(n, t, r));
  }
}
function dc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function fc(e, t) {
  Vn = po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _l(e, n);
  }
}
var ho = {
    readContext: Le,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  ep = {
    readContext: Le,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Le,
    useEffect: tu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hr(4194308, 4, ic.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zf.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: eu,
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = eu(!1),
        t = e[0];
      return (e = Jf.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        o = We();
      if (B) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(C(349));
        At & 30 || Ja(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        tu(ba.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        sr(9, Za.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = b.identifierPrefix;
      if (B) {
        var n = Qe,
          r = qe;
        (n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Xf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  tp = {
    readContext: Le,
    useCallback: sc,
    useContext: Le,
    useEffect: Xl,
    useImperativeHandle: lc,
    useInsertionEffect: rc,
    useLayoutEffect: oc,
    useMemo: uc,
    useReducer: di,
    useRef: nc,
    useState: function () {
      return di(lr);
    },
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      var t = _e();
      return ac(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = di(lr)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: Ga,
    useSyncExternalStore: Xa,
    useId: cc,
    unstable_isNewReconciler: !1,
  },
  np = {
    readContext: Le,
    useCallback: sc,
    useContext: Le,
    useEffect: Xl,
    useImperativeHandle: lc,
    useInsertionEffect: rc,
    useLayoutEffect: oc,
    useMemo: uc,
    useReducer: fi,
    useRef: nc,
    useState: function () {
      return fi(lr);
    },
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      var t = _e();
      return G === null ? (t.memoizedState = e) : ac(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(lr)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: Ga,
    useSyncExternalStore: Xa,
    useId: cc,
    unstable_isNewReconciler: !1,
  };
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Pd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function pi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var rp = typeof WeakMap == "function" ? WeakMap : Map;
function hc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vo || ((vo = !0), (ul = r)), Zi(e, t);
    }),
    n
  );
}
function mc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Zi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Zi(e, t),
          typeof r != "function" &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function nu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rp();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = gp.bind(null, e, t, n)), t.then(e, e));
}
function ru(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ou(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var op = Ze.ReactCurrentOwner,
  fe = !1;
function se(e, t, n, r) {
  t.child = e === null ? Ka(t, null, n, r) : mn(t, e.child, n, r);
}
function iu(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    cn(t, o),
    (r = Yl(e, t, n, r, i, o)),
    (n = Gl()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Je(e, t, o))
      : (B && n && Ml(t), (t.flags |= 1), se(e, t, r, o), t.child)
  );
}
function lu(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !is(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), vc(e, t, i, r, o))
      : ((e = Yr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(l, r) && e.ref === t.ref)
    )
      return Je(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ht(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vc(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Je(e, t, o);
  }
  return bi(e, t, n, r, o);
}
function gc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(on, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(on, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        F(on, ge),
        (ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(on, ge),
      (ge |= r);
  return se(e, t, o, n), t.child;
}
function yc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bi(e, t, n, r, o) {
  var i = he(n) ? Ft : le.current;
  return (
    (i = pn(t, i)),
    cn(t, o),
    (n = Yl(e, t, n, r, i, o)),
    (r = Gl()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Je(e, t, o))
      : (B && r && Ml(t), (t.flags |= 1), se(e, t, n, o), t.child)
  );
}
function su(e, t, n, r, o) {
  if (he(n)) {
    var i = !0;
    io(t);
  } else i = !1;
  if ((cn(t, o), t.stateNode === null))
    qr(e, t), qa(t, n, r), Ji(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Le(c))
      : ((c = he(n) ? Ft : le.current), (c = pn(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && Zs(t, l, r, c)),
      (tt = !1);
    var g = t.memoizedState;
    (l.state = g),
      co(t, r, l, o),
      (u = t.memoizedState),
      s !== r || g !== u || pe.current || tt
        ? (typeof h == "function" && (Xi(t, n, h, r), (u = t.memoizedState)),
          (s = tt || Js(t, n, s, r, g, u, c))
            ? (m ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = c),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      $a(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Re(t.type, s)),
      (l.props = c),
      (m = t.pendingProps),
      (g = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Le(u))
        : ((u = he(n) ? Ft : le.current), (u = pn(t, u)));
    var x = n.getDerivedStateFromProps;
    (h =
      typeof x == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== m || g !== u) && Zs(t, l, r, u)),
      (tt = !1),
      (g = t.memoizedState),
      (l.state = g),
      co(t, r, l, o);
    var S = t.memoizedState;
    s !== m || g !== S || pe.current || tt
      ? (typeof x == "function" && (Xi(t, n, x, r), (S = t.memoizedState)),
        (c = tt || Js(t, n, c, r, g, S, u) || !1)
          ? (h ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, S, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, S, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (l.props = r),
        (l.state = S),
        (l.context = u),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return el(e, t, n, r, i, o);
}
function el(e, t, n, r, o, i) {
  yc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Qs(t, n, !1), Je(e, t, i);
  (r = t.stateNode), (op.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = mn(t, e.child, null, i)), (t.child = mn(t, null, s, i)))
      : se(e, t, s, i),
    (t.memoizedState = r.state),
    o && Qs(t, n, !0),
    t.child
  );
}
function wc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qs(e, t.context, !1),
    Hl(e, t.containerInfo);
}
function uu(e, t, n, r, o) {
  return hn(), Wl(o), (t.flags |= 256), se(e, t, n, r), t.child;
}
var tl = { dehydrated: null, treeContext: null, retryLane: 0 };
function nl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xc(e, t, n) {
  var r = t.pendingProps,
    o = U.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    F(U, o & 1),
    e === null)
  )
    return (
      Yi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Do(l, r, 0, null)),
              (e = Mt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = nl(n)),
              (t.memoizedState = tl),
              e)
            : Zl(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return ip(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = ht(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = ht(s, i)) : ((i = Mt(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? nl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = tl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ht(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Zl(e, t) {
  return (
    (t = Do({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Or(e, t, n, r) {
  return (
    r !== null && Wl(r),
    mn(t, e.child, null, n),
    (e = Zl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ip(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pi(Error(C(422)))), Or(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Do({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Mt(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && mn(t, e.child, null, l),
        (t.child.memoizedState = nl(l)),
        (t.memoizedState = tl),
        i);
  if (!(t.mode & 1)) return Or(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(C(419))), (r = pi(i, r, void 0)), Or(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), fe || s)) {
    if (((r = b), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Xe(e, o), Ie(r, e, o, -1));
    }
    return os(), (r = pi(Error(C(421)))), Or(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yp.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = ct(o.nextSibling)),
      (we = t),
      (B = !0),
      (Oe = null),
      e !== null &&
        ((Ce[Ee++] = qe),
        (Ce[Ee++] = Qe),
        (Ce[Ee++] = Wt),
        (qe = e.id),
        (Qe = e.overflow),
        (Wt = t)),
      (t = Zl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function au(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gi(e.return, t, n);
}
function hi(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Sc(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((se(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && au(e, n, t);
        else if (e.tag === 19) au(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && fo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          hi(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && fo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        hi(t, !0, n, null, i);
        break;
      case "together":
        hi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lp(e, t, n) {
  switch (t.tag) {
    case 3:
      wc(t), hn();
      break;
    case 5:
      Ya(t);
      break;
    case 1:
      he(t.type) && io(t);
      break;
    case 4:
      Hl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      F(uo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xc(e, t, n)
          : (F(U, U.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      F(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        F(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gc(e, t, n);
  }
  return Je(e, t, n);
}
var kc, rl, Cc, Ec;
kc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
rl = function () {};
Cc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Dt(Ue.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ji(e, o)), (r = ji(e, r)), (i = []);
        break;
      case "select":
        (o = $({}, o, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = _i(e, o)), (r = _i(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ro);
    }
    Ti(n, r);
    var l;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var s = o[c];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Qn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Qn.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && W("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ec = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function sp(e, t, n) {
  var r = t.pendingProps;
  switch ((Fl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return he(t.type) && oo(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vn(),
        A(pe),
        A(le),
        Ql(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (dl(Oe), (Oe = null)))),
        rl(e, t),
        oe(t),
        null
      );
    case 5:
      ql(t);
      var o = Dt(or.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return oe(t), null;
        }
        if (((e = Dt(Ue.current)), Rr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ae] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mn.length; o++) W(Mn[o], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W("error", r), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              ys(r, i), W("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                W("invalid", r);
              break;
            case "textarea":
              xs(r, i), W("invalid", r);
          }
          Ti(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Qn.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              kr(r), ws(r, i, !0);
              break;
            case "textarea":
              kr(r), Ss(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ro);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ju(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ae] = t),
            (e[nr] = r),
            kc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ri(n, r)), n)) {
              case "dialog":
                W("cancel", e), W("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mn.length; o++) W(Mn[o], e);
                o = r;
                break;
              case "source":
                W("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), (o = r);
                break;
              case "details":
                W("toggle", e), (o = r);
                break;
              case "input":
                ys(e, r), (o = ji(e, r)), W("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = $({}, r, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                xs(e, r), (o = _i(e, r)), W("invalid", e);
                break;
              default:
                o = r;
            }
            Ti(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? ea(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Zu(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Kn(e, u)
                    : typeof u == "number" && Kn(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qn.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && W("scroll", e)
                      : u != null && kl(e, i, u, l));
              }
            switch (n) {
              case "input":
                kr(e), ws(e, r, !1);
                break;
              case "textarea":
                kr(e), Ss(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ln(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ln(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ro);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Ec(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Dt(or.current)), Dt(Ue.current), Rr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ae] = t),
            (i = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Tr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ae] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (A(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && ye !== null && t.mode & 1 && !(t.flags & 128))
          Ua(), hn(), (t.flags |= 98560), (i = !1);
        else if (((i = Rr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[Ae] = t;
          } else
            hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (i = !1);
        } else Oe !== null && (dl(Oe), (Oe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? X === 0 && (X = 3) : os())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        vn(), rl(e, t), e === null && er(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Ul(t.type._context), oe(t), null;
    case 17:
      return he(t.type) && oo(), oe(t), null;
    case 19:
      if ((A(U), (i = t.memoizedState), i === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Rn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = fo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Rn(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > yn &&
            ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !B)
            )
              return oe(t), null;
          } else
            2 * K() - i.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = U.current),
          F(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        rs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function up(e, t) {
  switch ((Fl(t), t.tag)) {
    case 1:
      return (
        he(t.type) && oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vn(),
        A(pe),
        A(le),
        Ql(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ql(t), null;
    case 13:
      if ((A(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A(U), null;
    case 4:
      return vn(), null;
    case 10:
      return Ul(t.type._context), null;
    case 22:
    case 23:
      return rs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dr = !1,
  ie = !1,
  ap = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function ol(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var cu = !1;
function cp(e, t) {
  if (((Ui = eo), (e = _a()), Il(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            c = 0,
            h = 0,
            m = e,
            g = null;
          t: for (;;) {
            for (
              var x;
              m !== n || (o !== 0 && m.nodeType !== 3) || (s = l + o),
                m !== i || (r !== 0 && m.nodeType !== 3) || (u = l + r),
                m.nodeType === 3 && (l += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (g = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (g === n && ++c === o && (s = l),
                g === i && ++h === r && (u = l),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = g), (g = m.parentNode);
            }
            m = x;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vi = { focusedElem: e, selectionRange: n }, eo = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    E = S.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Re(t.type, k),
                      E
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (w) {
          H(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (S = cu), (cu = !1), S;
}
function $n(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ol(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function zo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function il(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ae], delete t[nr], delete t[qi], delete t[Qf], delete t[Kf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Nc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function du(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ro));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ll(e, t, n), e = e.sibling; e !== null; ) ll(e, t, n), (e = e.sibling);
}
function sl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sl(e, t, n), e = e.sibling; e !== null; ) sl(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; ) Lc(e, t, n), (n = n.sibling);
}
function Lc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(Eo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || rn(n, t);
    case 6:
      var r = ee,
        o = ze;
      (ee = null),
        be(e, t, n),
        (ee = r),
        (ze = o),
        ee !== null &&
          (ze
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? si(e.parentNode, n)
              : e.nodeType === 1 && si(e, n),
            Jn(e))
          : si(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (o = ze),
        (ee = n.stateNode.containerInfo),
        (ze = !0),
        be(e, t, n),
        (ee = r),
        (ze = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && ol(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      be(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (rn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          H(n, t, s);
        }
      be(e, t, n);
      break;
    case 21:
      be(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), be(e, t, n), (ie = r))
        : be(e, t, n);
      break;
    default:
      be(e, t, n);
  }
}
function fu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ap()),
      t.forEach(function (r) {
        var o = wp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ee = s.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = s.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = s.stateNode.containerInfo), (ze = !0);
              break e;
          }
          s = s.return;
        }
        if (ee === null) throw Error(C(160));
        Lc(i, l, o), (ee = null), (ze = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (c) {
        H(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _c(t, e), (t = t.sibling);
}
function _c(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), Fe(e), r & 4)) {
        try {
          $n(3, e, e.return), zo(3, e);
        } catch (k) {
          H(e, e.return, k);
        }
        try {
          $n(5, e, e.return);
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 1:
      Pe(t, e), Fe(e), r & 512 && n !== null && rn(n, n.return);
      break;
    case 5:
      if (
        (Pe(t, e),
        Fe(e),
        r & 512 && n !== null && rn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Kn(o, "");
        } catch (k) {
          H(e, e.return, k);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Gu(o, i),
              Ri(s, l);
            var c = Ri(s, i);
            for (l = 0; l < u.length; l += 2) {
              var h = u[l],
                m = u[l + 1];
              h === "style"
                ? ea(o, m)
                : h === "dangerouslySetInnerHTML"
                ? Zu(o, m)
                : h === "children"
                ? Kn(o, m)
                : kl(o, h, m, c);
            }
            switch (s) {
              case "input":
                Ni(o, i);
                break;
              case "textarea":
                Xu(o, i);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? ln(o, !!i.multiple, x, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ln(o, !!i.multiple, i.defaultValue, !0)
                      : ln(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[nr] = i;
          } catch (k) {
            H(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (k) {
          H(e, e.return, k);
        }
      break;
    case 4:
      Pe(t, e), Fe(e);
      break;
    case 13:
      Pe(t, e),
        Fe(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ts = K())),
        r & 4 && fu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || h), Pe(t, e), (ie = c)) : Pe(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (m = _ = h; _ !== null; ) {
              switch (((g = _), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $n(4, g, g.return);
                  break;
                case 1:
                  rn(g, g.return);
                  var S = g.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      H(r, n, k);
                    }
                  }
                  break;
                case 5:
                  rn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    hu(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = g), (_ = x)) : hu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (o = m.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = m.stateNode),
                      (u = m.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = bu("display", l)));
              } catch (k) {
                H(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (k) {
                H(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Pe(t, e), Fe(e), r & 4 && fu(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Kn(o, ""), (r.flags &= -33));
          var i = du(e);
          sl(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = du(e);
          ll(e, s, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      H(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dp(e, t, n) {
  (_ = e), Pc(e);
}
function Pc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Dr;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || ie;
        s = Dr;
        var c = ie;
        if (((Dr = l), (ie = u) && !c))
          for (_ = o; _ !== null; )
            (l = _),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? mu(o)
                : u !== null
                ? ((u.return = l), (_ = u))
                : mu(o);
        for (; i !== null; ) (_ = i), Pc(i), (i = i.sibling);
        (_ = o), (Dr = s), (ie = c);
      }
      pu(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (_ = i)) : pu(e);
  }
}
function pu(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || zo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Xs(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xs(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Jn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        ie || (t.flags & 512 && il(t));
      } catch (g) {
        H(t, t.return, g);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function hu(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function mu(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zo(4, t);
          } catch (u) {
            H(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              H(t, o, u);
            }
          }
          var i = t.return;
          try {
            il(t);
          } catch (u) {
            H(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            il(t);
          } catch (u) {
            H(t, l, u);
          }
      }
    } catch (u) {
      H(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var fp = Math.ceil,
  mo = Ze.ReactCurrentDispatcher,
  bl = Ze.ReactCurrentOwner,
  Ne = Ze.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  Y = null,
  te = 0,
  ge = 0,
  on = wt(0),
  X = 0,
  ur = null,
  Bt = 0,
  Oo = 0,
  es = 0,
  Hn = null,
  de = null,
  ts = 0,
  yn = 1 / 0,
  $e = null,
  vo = !1,
  ul = null,
  ft = null,
  Ir = !1,
  it = null,
  go = 0,
  qn = 0,
  al = null,
  Qr = -1,
  Kr = 0;
function ue() {
  return I & 6 ? K() : Qr !== -1 ? Qr : (Qr = K());
}
function pt(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Gf.transition !== null
      ? (Kr === 0 && (Kr = fa()), Kr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wa(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < qn) throw ((qn = 0), (al = null), Error(C(185)));
  fr(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (Oo |= n), X === 4 && rt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((yn = K() + 500), Po && xt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Yd(e, t);
  var r = br(e, e === b ? te : 0);
  if (r === 0)
    n !== null && Es(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Es(n), t === 1))
      e.tag === 0 ? Yf(vu.bind(null, e)) : Wa(vu.bind(null, e)),
        Hf(function () {
          !(I & 6) && xt();
        }),
        (n = null);
    else {
      switch (pa(r)) {
        case 1:
          n = Ll;
          break;
        case 4:
          n = ca;
          break;
        case 16:
          n = Zr;
          break;
        case 536870912:
          n = da;
          break;
        default:
          n = Zr;
      }
      n = Fc(n, Tc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Tc(e, t) {
  if (((Qr = -1), (Kr = 0), I & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = br(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
  else {
    t = r;
    var o = I;
    I |= 2;
    var i = zc();
    (b !== e || te !== t) && (($e = null), (yn = K() + 500), It(e, t));
    do
      try {
        mp();
        break;
      } catch (s) {
        Rc(e, s);
      }
    while (!0);
    Bl(),
      (mo.current = i),
      (I = o),
      Y !== null ? (t = 0) : ((b = null), (te = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Mi(e)), o !== 0 && ((r = o), (t = cl(e, o)))), t === 1)
    )
      throw ((n = ur), It(e, 0), rt(e, r), me(e, K()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !pp(o) &&
          ((t = yo(e, r)),
          t === 2 && ((i = Mi(e)), i !== 0 && ((r = i), (t = cl(e, i)))),
          t === 1))
      )
        throw ((n = ur), It(e, 0), rt(e, r), me(e, K()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Rt(e, de, $e);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = ts + 500 - K()), 10 < t))
          ) {
            if (br(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Hi(Rt.bind(null, e, de, $e), t);
            break;
          }
          Rt(e, de, $e);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - De(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * fp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hi(Rt.bind(null, e, de, $e), r);
            break;
          }
          Rt(e, de, $e);
          break;
        case 5:
          Rt(e, de, $e);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Tc.bind(null, e) : null;
}
function cl(e, t) {
  var n = Hn;
  return (
    e.current.memoizedState.isDehydrated && (It(e, t).flags |= 256),
    (e = yo(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && dl(t)),
    e
  );
}
function dl(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function pp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Me(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rt(e, t) {
  for (
    t &= ~es,
      t &= ~Oo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - De(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function vu(e) {
  if (I & 6) throw Error(C(327));
  dn();
  var t = br(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mi(e);
    r !== 0 && ((t = r), (n = cl(e, r)));
  }
  if (n === 1) throw ((n = ur), It(e, 0), rt(e, t), me(e, K()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rt(e, de, $e),
    me(e, K()),
    null
  );
}
function ns(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((yn = K() + 500), Po && xt());
  }
}
function Ut(e) {
  it !== null && it.tag === 0 && !(I & 6) && dn();
  var t = I;
  I |= 1;
  var n = Ne.transition,
    r = M;
  try {
    if (((Ne.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ne.transition = n), (I = t), !(I & 6) && xt();
  }
}
function rs() {
  (ge = on.current), A(on);
}
function It(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $f(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Fl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oo();
          break;
        case 3:
          vn(), A(pe), A(le), Ql();
          break;
        case 5:
          ql(r);
          break;
        case 4:
          vn();
          break;
        case 13:
          A(U);
          break;
        case 19:
          A(U);
          break;
        case 10:
          Ul(r.type._context);
          break;
        case 22:
        case 23:
          rs();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = ht(e.current, null)),
    (te = ge = t),
    (X = 0),
    (ur = null),
    (es = Oo = Bt = 0),
    (de = Hn = null),
    Ot !== null)
  ) {
    for (t = 0; t < Ot.length; t++)
      if (((n = Ot[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Ot = null;
  }
  return e;
}
function Rc(e, t) {
  do {
    var n = Y;
    try {
      if ((Bl(), ($r.current = ho), po)) {
        for (var r = V.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        po = !1;
      }
      if (
        ((At = 0),
        (Z = G = V = null),
        (Vn = !1),
        (ir = 0),
        (bl.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (ur = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = te),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            h = s,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var g = h.alternate;
            g
              ? ((h.updateQueue = g.updateQueue),
                (h.memoizedState = g.memoizedState),
                (h.lanes = g.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var x = ru(l);
          if (x !== null) {
            (x.flags &= -257),
              ou(x, l, s, i, t),
              x.mode & 1 && nu(i, c, t),
              (t = x),
              (u = c);
            var S = t.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              nu(i, c, t), os();
              break e;
            }
            u = Error(C(426));
          }
        } else if (B && s.mode & 1) {
          var E = ru(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              ou(E, l, s, i, t),
              Wl(gn(u, s));
            break e;
          }
        }
        (i = u = gn(u, s)),
          X !== 4 && (X = 2),
          Hn === null ? (Hn = [i]) : Hn.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = hc(i, u, t);
              Gs(i, f);
              break e;
            case 1:
              s = u;
              var d = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ft === null || !ft.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = mc(i, s, t);
                Gs(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dc(n);
    } catch (j) {
      (t = j), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zc() {
  var e = mo.current;
  return (mo.current = ho), e === null ? ho : e;
}
function os() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    b === null || (!(Bt & 268435455) && !(Oo & 268435455)) || rt(b, te);
}
function yo(e, t) {
  var n = I;
  I |= 2;
  var r = zc();
  (b !== e || te !== t) && (($e = null), It(e, t));
  do
    try {
      hp();
      break;
    } catch (o) {
      Rc(e, o);
    }
  while (!0);
  if ((Bl(), (I = n), (mo.current = r), Y !== null)) throw Error(C(261));
  return (b = null), (te = 0), X;
}
function hp() {
  for (; Y !== null; ) Oc(Y);
}
function mp() {
  for (; Y !== null && !Ad(); ) Oc(Y);
}
function Oc(e) {
  var t = Mc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Dc(e) : (Y = t),
    (bl.current = null);
}
function Dc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = up(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Y = null);
        return;
      }
    } else if (((n = sp(n, t, ge)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Rt(e, t, n) {
  var r = M,
    o = Ne.transition;
  try {
    (Ne.transition = null), (M = 1), vp(e, t, n, r);
  } finally {
    (Ne.transition = o), (M = r);
  }
  return null;
}
function vp(e, t, n, r) {
  do dn();
  while (it !== null);
  if (I & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Gd(e, i),
    e === b && ((Y = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ir ||
      ((Ir = !0),
      Fc(Zr, function () {
        return dn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var l = M;
    M = 1;
    var s = I;
    (I |= 4),
      (bl.current = null),
      cp(e, n),
      _c(n, e),
      Mf(Vi),
      (eo = !!Ui),
      (Vi = Ui = null),
      (e.current = n),
      dp(n),
      Bd(),
      (I = s),
      (M = l),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (Ir && ((Ir = !1), (it = e), (go = o)),
    (i = e.pendingLanes),
    i === 0 && (ft = null),
    $d(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (vo) throw ((vo = !1), (e = ul), (ul = null), e);
  return (
    go & 1 && e.tag !== 0 && dn(),
    (i = e.pendingLanes),
    i & 1 ? (e === al ? qn++ : ((qn = 0), (al = e))) : (qn = 0),
    xt(),
    null
  );
}
function dn() {
  if (it !== null) {
    var e = pa(go),
      t = Ne.transition,
      n = M;
    try {
      if (((Ne.transition = null), (M = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (go = 0), I & 6)) throw Error(C(331));
        var o = I;
        for (I |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            l = i.child;
          if (_.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (_ = c; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $n(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (_ = m);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var g = h.sibling,
                        x = h.return;
                      if ((jc(h), h === c)) {
                        _ = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = x), (_ = g);
                        break;
                      }
                      _ = x;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var E = k.sibling;
                    (k.sibling = null), (k = E);
                  } while (k !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (_ = l);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $n(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (_ = f);
                break e;
              }
              _ = i.return;
            }
        }
        var d = e.current;
        for (_ = d; _ !== null; ) {
          l = _;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (_ = p);
          else
            e: for (l = d; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zo(9, s);
                  }
                } catch (j) {
                  H(s, s.return, j);
                }
              if (s === l) {
                _ = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (_ = w);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((I = o), xt(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(Eo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ne.transition = t);
    }
  }
  return !1;
}
function gu(e, t, n) {
  (t = gn(n, t)),
    (t = hc(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = ue()),
    e !== null && (fr(e, 1, t), me(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) gu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ft === null || !ft.has(r)))
        ) {
          (e = gn(n, e)),
            (e = mc(t, e, 1)),
            (t = dt(t, e, 1)),
            (e = ue()),
            t !== null && (fr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > K() - ts)
        ? It(e, 0)
        : (es |= n)),
    me(e, t);
}
function Ic(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Xe(e, t)), e !== null && (fr(e, t, n), me(e, n));
}
function yp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ic(e, n);
}
function wp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Ic(e, n);
}
var Mc;
Mc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), lp(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), B && t.flags & 1048576 && Aa(t, so, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qr(e, t), (e = t.pendingProps);
      var o = pn(t, le.current);
      cn(t, n), (o = Yl(null, t, r, e, o, n));
      var i = Gl();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), io(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            $l(t),
            (o.updater = To),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ji(t, r, e, n),
            (t = el(null, t, r, !0, i, n)))
          : ((t.tag = 0), B && i && Ml(t), se(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qr(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Sp(r)),
          (e = Re(r, e)),
          o)
        ) {
          case 0:
            t = bi(null, t, r, e, n);
            break e;
          case 1:
            t = su(null, t, r, e, n);
            break e;
          case 11:
            t = iu(null, t, r, e, n);
            break e;
          case 14:
            t = lu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Re(r, o)),
        bi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Re(r, o)),
        su(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((wc(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          $a(e, t),
          co(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = gn(Error(C(423)), t)), (t = uu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = gn(Error(C(424)), t)), (t = uu(e, t, r, n, o));
            break e;
          } else
            for (
              ye = ct(t.stateNode.containerInfo.firstChild),
                we = t,
                B = !0,
                Oe = null,
                n = Ka(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hn(), r === o)) {
            t = Je(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ya(t),
        e === null && Yi(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        $i(r, o) ? (l = null) : i !== null && $i(r, i) && (t.flags |= 32),
        yc(e, t),
        se(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Yi(t), null;
    case 13:
      return xc(e, t, n);
    case 4:
      return (
        Hl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Re(r, o)),
        iu(e, t, r, o, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          F(uo, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Me(i.value, l)) {
            if (i.children === o.children && !pe.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Ke(-1, n & -n)), (u.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (c.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Gi(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(C(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Gi(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        se(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        cn(t, n),
        (o = Le(o)),
        (r = r(o)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Re(r, t.pendingProps)),
        (o = Re(r.type, o)),
        lu(e, t, r, o, n)
      );
    case 15:
      return vc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Re(r, o)),
        qr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), io(t)) : (e = !1),
        cn(t, n),
        qa(t, r, o),
        Ji(t, r, o, n),
        el(null, t, r, !0, e, n)
      );
    case 19:
      return Sc(e, t, n);
    case 22:
      return gc(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Fc(e, t) {
  return aa(e, t);
}
function xp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function je(e, t, n, r) {
  return new xp(e, t, n, r);
}
function is(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sp(e) {
  if (typeof e == "function") return is(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === El)) return 11;
    if (e === jl) return 14;
  }
  return 2;
}
function ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yr(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) is(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Yt:
        return Mt(n.children, o, i, t);
      case Cl:
        (l = 8), (o |= 8);
        break;
      case Si:
        return (
          (e = je(12, n, t, o | 2)), (e.elementType = Si), (e.lanes = i), e
        );
      case ki:
        return (e = je(13, n, t, o)), (e.elementType = ki), (e.lanes = i), e;
      case Ci:
        return (e = je(19, n, t, o)), (e.elementType = Ci), (e.lanes = i), e;
      case Qu:
        return Do(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hu:
              l = 10;
              break e;
            case qu:
              l = 9;
              break e;
            case El:
              l = 11;
              break e;
            case jl:
              l = 14;
              break e;
            case et:
              (l = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Mt(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function Do(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = Qu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mi(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function vi(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kp(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xo(0)),
    (this.expirationTimes = Xo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ls(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new kp(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $l(i),
    e
  );
}
function Cp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Fa(e, n, t);
  }
  return t;
}
function Ac(e, t, n, r, o, i, l, s, u) {
  return (
    (e = ls(n, r, !0, e, o, i, l, s, u)),
    (e.context = Wc(null)),
    (n = e.current),
    (r = ue()),
    (o = pt(n)),
    (i = Ke(r, o)),
    (i.callback = t ?? null),
    dt(n, i, o),
    (e.current.lanes = o),
    fr(e, o, r),
    me(e, r),
    e
  );
}
function Io(e, t, n, r) {
  var o = t.current,
    i = ue(),
    l = pt(o);
  return (
    (n = Wc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(o, t, l)),
    e !== null && (Ie(e, o, l, i), Vr(e, o, l)),
    l
  );
}
function wo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ss(e, t) {
  yu(e, t), (e = e.alternate) && yu(e, t);
}
function Ep() {
  return null;
}
var Bc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function us(e) {
  this._internalRoot = e;
}
Mo.prototype.render = us.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Io(e, t, null, null);
};
Mo.prototype.unmount = us.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      Io(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function Mo(e) {
  this._internalRoot = e;
}
Mo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = va();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && ya(e);
  }
};
function as(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wu() {}
function jp(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = wo(l);
        i.call(c);
      };
    }
    var l = Ac(t, r, e, 0, null, !1, !1, "", wu);
    return (
      (e._reactRootContainer = l),
      (e[Ge] = l.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = wo(u);
      s.call(c);
    };
  }
  var u = ls(e, 0, !1, null, null, !1, !1, "", wu);
  return (
    (e._reactRootContainer = u),
    (e[Ge] = u.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      Io(t, u, n, r);
    }),
    u
  );
}
function Wo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = wo(l);
        s.call(u);
      };
    }
    Io(t, l, e, o);
  } else l = jp(n, t, e, o, r);
  return wo(l);
}
ha = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 &&
          (_l(t, n | 1), me(t, K()), !(I & 6) && ((yn = K() + 500), xt()));
      }
      break;
    case 13:
      Ut(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var o = ue();
          Ie(r, e, 1, o);
        }
      }),
        ss(e, 1);
  }
};
Pl = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ue();
      Ie(t, e, 134217728, n);
    }
    ss(e, 134217728);
  }
};
ma = function (e) {
  if (e.tag === 13) {
    var t = pt(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = ue();
      Ie(n, e, t, r);
    }
    ss(e, t);
  }
};
va = function () {
  return M;
};
ga = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
Oi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ni(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = _o(r);
            if (!o) throw Error(C(90));
            Yu(r), Ni(r, o);
          }
        }
      }
      break;
    case "textarea":
      Xu(e, n);
      break;
    case "select":
      (t = n.value), t != null && ln(e, !!n.multiple, t, !1);
  }
};
ra = ns;
oa = Ut;
var Np = { usingClientEntryPoint: !1, Events: [hr, Zt, _o, ta, na, ns] },
  zn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Lp = {
    bundleType: zn.bundleType,
    version: zn.version,
    rendererPackageName: zn.rendererPackageName,
    rendererConfig: zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zn.findFiberByHostInstance || Ep,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mr.isDisabled && Mr.supportsFiber)
    try {
      (Eo = Mr.inject(Lp)), (Be = Mr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Np;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!as(t)) throw Error(C(200));
  return Cp(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!as(e)) throw Error(C(299));
  var n = !1,
    r = "",
    o = Bc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ls(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ge] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new us(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = sa(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Ut(e);
};
Se.hydrate = function (e, t, n) {
  if (!Fo(t)) throw Error(C(200));
  return Wo(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!as(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Bc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Ac(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Ge] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Mo(t);
};
Se.render = function (e, t, n) {
  if (!Fo(t)) throw Error(C(200));
  return Wo(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Fo(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Wo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = ns;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fo(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Wo(e, t, n, !1, r);
};
Se.version = "18.2.0-next-9e3b772b8-20220608";
function Uc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc);
    } catch (e) {
      console.error(e);
    }
}
Uc(), (Au.exports = Se);
var _p = Au.exports,
  xu = _p;
(wi.createRoot = xu.createRoot), (wi.hydrateRoot = xu.hydrateRoot);
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ar() {
  return (
    (ar = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ar.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lt || (lt = {}));
const Su = "popstate";
function Pp(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: l = "/",
      search: s = "",
      hash: u = "",
    } = Ht(o.location.hash.substr(1));
    return (
      !l.startsWith("/") && !l.startsWith(".") && (l = "/" + l),
      fl(
        "",
        { pathname: l, search: s, hash: u },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(o, i) {
    let l = o.document.querySelector("base"),
      s = "";
    if (l && l.getAttribute("href")) {
      let u = o.location.href,
        c = u.indexOf("#");
      s = c === -1 ? u : u.slice(0, c);
    }
    return s + "#" + (typeof i == "string" ? i : xo(i));
  }
  function r(o, i) {
    cs(
      o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return Rp(t, n, r, e);
}
function q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function cs(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Tp() {
  return Math.random().toString(36).substr(2, 8);
}
function ku(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ar(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ht(t) : t,
      { state: n, key: (t && t.key) || r || Tp() }
    )
  );
}
function xo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ht(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Rp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = lt.Pop,
    u = null,
    c = h();
  c == null && ((c = 0), l.replaceState(ar({}, l.state, { idx: c }), ""));
  function h() {
    return (l.state || { idx: null }).idx;
  }
  function m() {
    s = lt.Pop;
    let E = h(),
      f = E == null ? null : E - c;
    (c = E), u && u({ action: s, location: k.location, delta: f });
  }
  function g(E, f) {
    s = lt.Push;
    let d = fl(k.location, E, f);
    n && n(d, E), (c = h() + 1);
    let p = ku(d, c),
      w = k.createHref(d);
    try {
      l.pushState(p, "", w);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      o.location.assign(w);
    }
    i && u && u({ action: s, location: k.location, delta: 1 });
  }
  function x(E, f) {
    s = lt.Replace;
    let d = fl(k.location, E, f);
    n && n(d, E), (c = h());
    let p = ku(d, c),
      w = k.createHref(d);
    l.replaceState(p, "", w),
      i && u && u({ action: s, location: k.location, delta: 0 });
  }
  function S(E) {
    let f = o.location.origin !== "null" ? o.location.origin : o.location.href,
      d = typeof E == "string" ? E : xo(E);
    return (
      (d = d.replace(/ $/, "%20")),
      q(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, f)
    );
  }
  let k = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(E) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Su, m),
        (u = E),
        () => {
          o.removeEventListener(Su, m), (u = null);
        }
      );
    },
    createHref(E) {
      return t(o, E);
    },
    createURL: S,
    encodeLocation(E) {
      let f = S(E);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: g,
    replace: x,
    go(E) {
      return l.go(E);
    },
  };
  return k;
}
var Cu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Cu || (Cu = {}));
function zp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ht(t) : t,
    o = wn(r.pathname || "/", n);
  if (o == null) return null;
  let i = Vc(e);
  Op(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) {
    let u = Hp(o);
    l = Vp(i[s], u);
  }
  return l;
}
function Vc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, s) => {
    let u = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (q(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = mt([r, u.relativePath]),
      h = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (q(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Vc(i.children, t, h, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: Bp(c, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let u of $c(i.path)) o(i, l, u);
    }),
    t
  );
}
function $c(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = $c(r.join("/")),
    s = [];
  return (
    s.push(...l.map((u) => (u === "" ? i : [i, u].join("/")))),
    o && s.push(...l),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Op(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Up(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Dp = /^:[\w-]+$/,
  Ip = 3,
  Mp = 2,
  Fp = 1,
  Wp = 10,
  Ap = -2,
  Eu = (e) => e === "*";
function Bp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Eu) && (r += Ap),
    t && (r += Mp),
    n
      .filter((o) => !Eu(o))
      .reduce((o, i) => o + (Dp.test(i) ? Ip : i === "" ? Fp : Wp), r)
  );
}
function Up(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Vp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      u = l === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      h = pl(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        c
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let m = s.route;
    i.push({
      params: r,
      pathname: mt([o, h.pathname]),
      pathnameBase: Yp(mt([o, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== "/" && (o = mt([o, h.pathnameBase]));
  }
  return i;
}
function pl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $p(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((c, h, m) => {
      let { paramName: g, isOptional: x } = h;
      if (g === "*") {
        let k = s[m] || "";
        l = i.slice(0, i.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const S = s[m];
      return (
        x && !S ? (c[g] = void 0) : (c[g] = (S || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function $p(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cs(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Hp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      cs(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function wn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function qp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Ht(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Qp(n, t)) : t,
    search: Gp(r),
    hash: Xp(o),
  };
}
function Qp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function gi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Kp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Hc(e, t) {
  let n = Kp(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function qc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Ht(e))
    : ((o = ar({}, e)),
      q(
        !o.pathname || !o.pathname.includes("?"),
        gi("?", "pathname", "search", o)
      ),
      q(
        !o.pathname || !o.pathname.includes("#"),
        gi("#", "pathname", "hash", o)
      ),
      q(!o.search || !o.search.includes("#"), gi("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    s;
  if (l == null) s = n;
  else {
    let m = t.length - 1;
    if (!r && l.startsWith("..")) {
      let g = l.split("/");
      for (; g[0] === ".."; ) g.shift(), (m -= 1);
      o.pathname = g.join("/");
    }
    s = m >= 0 ? t[m] : "/";
  }
  let u = qp(o, s),
    c = l && l !== "/" && l.endsWith("/"),
    h = (i || l === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || h) && (u.pathname += "/"), u;
}
const mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Yp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Gp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Xp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Jp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Qc = ["post", "put", "patch", "delete"];
new Set(Qc);
const Zp = ["get", ...Qc];
new Set(Zp);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cr() {
  return (
    (cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cr.apply(this, arguments)
  );
}
const Ao = y.createContext(null),
  Kc = y.createContext(null),
  St = y.createContext(null),
  Bo = y.createContext(null),
  qt = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Yc = y.createContext(null);
function bp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  vr() || q(!1);
  let { basename: r, navigator: o } = y.useContext(St),
    { hash: i, pathname: l, search: s } = Uo(e, { relative: n }),
    u = l;
  return (
    r !== "/" && (u = l === "/" ? r : mt([r, l])),
    o.createHref({ pathname: u, search: s, hash: i })
  );
}
function vr() {
  return y.useContext(Bo) != null;
}
function gr() {
  return vr() || q(!1), y.useContext(Bo).location;
}
function Gc(e) {
  y.useContext(St).static || y.useLayoutEffect(e);
}
function eh() {
  let { isDataRoute: e } = y.useContext(qt);
  return e ? ph() : th();
}
function th() {
  vr() || q(!1);
  let e = y.useContext(Ao),
    { basename: t, future: n, navigator: r } = y.useContext(St),
    { matches: o } = y.useContext(qt),
    { pathname: i } = gr(),
    l = JSON.stringify(Hc(o, n.v7_relativeSplatPath)),
    s = y.useRef(!1);
  return (
    Gc(() => {
      s.current = !0;
    }),
    y.useCallback(
      function (c, h) {
        if ((h === void 0 && (h = {}), !s.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let m = qc(c, JSON.parse(l), i, h.relative === "path");
        e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : mt([t, m.pathname])),
          (h.replace ? r.replace : r.push)(m, h.state, h);
      },
      [t, r, l, i, e]
    )
  );
}
function Uo(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(St),
    { matches: o } = y.useContext(qt),
    { pathname: i } = gr(),
    l = JSON.stringify(Hc(o, r.v7_relativeSplatPath));
  return y.useMemo(() => qc(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function nh(e, t) {
  return rh(e, t);
}
function rh(e, t, n, r) {
  vr() || q(!1);
  let { navigator: o } = y.useContext(St),
    { matches: i } = y.useContext(qt),
    l = i[i.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let u = l ? l.pathnameBase : "/";
  l && l.route;
  let c = gr(),
    h;
  if (t) {
    var m;
    let E = typeof t == "string" ? Ht(t) : t;
    u === "/" || ((m = E.pathname) != null && m.startsWith(u)) || q(!1),
      (h = E);
  } else h = c;
  let g = h.pathname || "/",
    x = g;
  if (u !== "/") {
    let E = u.replace(/^\//, "").split("/");
    x = "/" + g.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let S = zp(e, { pathname: x }),
    k = uh(
      S &&
        S.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, s, E.params),
            pathname: mt([
              u,
              o.encodeLocation
                ? o.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? u
                : mt([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && k
    ? y.createElement(
        Bo.Provider,
        {
          value: {
            location: cr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: lt.Pop,
          },
        },
        k
      )
    : k;
}
function oh() {
  let e = fh(),
    t = Jp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    null
  );
}
const ih = y.createElement(oh, null);
class lh extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          qt.Provider,
          { value: this.props.routeContext },
          y.createElement(Yc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function sh(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(Ao);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(qt.Provider, { value: t }, r)
  );
}
function uh(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let h = l.findIndex(
      (m) => m.route.id && (s == null ? void 0 : s[m.route.id])
    );
    h >= 0 || q(!1), (l = l.slice(0, Math.min(l.length, h + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < l.length; h++) {
      let m = l[h];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (c = h),
        m.route.id)
      ) {
        let { loaderData: g, errors: x } = n,
          S =
            m.route.loader &&
            g[m.route.id] === void 0 &&
            (!x || x[m.route.id] === void 0);
        if (m.route.lazy || S) {
          (u = !0), c >= 0 ? (l = l.slice(0, c + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((h, m, g) => {
    let x,
      S = !1,
      k = null,
      E = null;
    n &&
      ((x = s && m.route.id ? s[m.route.id] : void 0),
      (k = m.route.errorElement || ih),
      u &&
        (c < 0 && g === 0
          ? (hh("route-fallback", !1), (S = !0), (E = null))
          : c === g &&
            ((S = !0), (E = m.route.hydrateFallbackElement || null))));
    let f = t.concat(l.slice(0, g + 1)),
      d = () => {
        let p;
        return (
          x
            ? (p = k)
            : S
            ? (p = E)
            : m.route.Component
            ? (p = y.createElement(m.route.Component, null))
            : m.route.element
            ? (p = m.route.element)
            : (p = h),
          y.createElement(sh, {
            match: m,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? y.createElement(lh, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: x,
          children: d(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Xc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Xc || {}),
  So = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(So || {});
function ah(e) {
  let t = y.useContext(Ao);
  return t || q(!1), t;
}
function ch(e) {
  let t = y.useContext(Kc);
  return t || q(!1), t;
}
function dh(e) {
  let t = y.useContext(qt);
  return t || q(!1), t;
}
function Jc(e) {
  let t = dh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || q(!1), n.route.id;
}
function fh() {
  var e;
  let t = y.useContext(Yc),
    n = ch(So.UseRouteError),
    r = Jc(So.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ph() {
  let { router: e } = ah(Xc.UseNavigateStable),
    t = Jc(So.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Gc(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, cr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const ju = {};
function hh(e, t, n) {
  !t && !ju[e] && (ju[e] = !0);
}
function Te(e) {
  q(!1);
}
function mh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = lt.Pop,
    navigator: i,
    static: l = !1,
    future: s,
  } = e;
  vr() && q(!1);
  let u = t.replace(/^\/*/, "/"),
    c = y.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: l,
        future: cr({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, i, l]
    );
  typeof r == "string" && (r = Ht(r));
  let {
      pathname: h = "/",
      search: m = "",
      hash: g = "",
      state: x = null,
      key: S = "default",
    } = r,
    k = y.useMemo(() => {
      let E = wn(h, u);
      return E == null
        ? null
        : {
            location: { pathname: E, search: m, hash: g, state: x, key: S },
            navigationType: o,
          };
    }, [u, h, m, g, x, S, o]);
  return k == null
    ? null
    : y.createElement(
        St.Provider,
        { value: c },
        y.createElement(Bo.Provider, { children: n, value: k })
      );
}
function vh(e) {
  let { children: t, location: n } = e;
  return nh(hl(t), n);
}
new Promise(() => {});
function hl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === y.Fragment) {
        n.push.apply(n, hl(r.props.children, i));
        return;
      }
      r.type !== Te && q(!1), !r.props.index || !r.props.children || q(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = hl(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ko() {
  return (
    (ko = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ko.apply(this, arguments)
  );
}
function Zc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function gh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function yh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !gh(e);
}
const wh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  xh = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Sh = "6";
try {
  window.__reactRouterVersion = Sh;
} catch {}
const kh = y.createContext({ isTransitioning: !1 }),
  Ch = "startTransition",
  Nu = gd[Ch];
function Eh(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = y.useRef();
  i.current == null && (i.current = Pp({ window: o, v5Compat: !0 }));
  let l = i.current,
    [s, u] = y.useState({ action: l.action, location: l.location }),
    { v7_startTransition: c } = r || {},
    h = y.useCallback(
      (m) => {
        c && Nu ? Nu(() => u(m)) : u(m);
      },
      [u, c]
    );
  return (
    y.useLayoutEffect(() => l.listen(h), [l, h]),
    y.createElement(mh, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
      future: r,
    })
  );
}
const jh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Nh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ve = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: s,
        target: u,
        to: c,
        preventScrollReset: h,
        unstable_viewTransition: m,
      } = t,
      g = Zc(t, wh),
      { basename: x } = y.useContext(St),
      S,
      k = !1;
    if (typeof c == "string" && Nh.test(c) && ((S = c), jh))
      try {
        let p = new URL(window.location.href),
          w = c.startsWith("//") ? new URL(p.protocol + c) : new URL(c),
          j = wn(w.pathname, x);
        w.origin === p.origin && j != null
          ? (c = j + w.search + w.hash)
          : (k = !0);
      } catch {}
    let E = bp(c, { relative: o }),
      f = _h(c, {
        replace: l,
        state: s,
        target: u,
        preventScrollReset: h,
        relative: o,
        unstable_viewTransition: m,
      });
    function d(p) {
      r && r(p), p.defaultPrevented || f(p);
    }
    return y.createElement(
      "a",
      ko({}, g, { href: S || E, onClick: k || i ? r : d, ref: n, target: u })
    );
  }),
  yi = y.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: l = !1,
        style: s,
        to: u,
        unstable_viewTransition: c,
        children: h,
      } = t,
      m = Zc(t, xh),
      g = Uo(u, { relative: m.relative }),
      x = gr(),
      S = y.useContext(Kc),
      { navigator: k, basename: E } = y.useContext(St),
      f = S != null && Ph(g) && c === !0,
      d = k.encodeLocation ? k.encodeLocation(g).pathname : g.pathname,
      p = x.pathname,
      w =
        S && S.navigation && S.navigation.location
          ? S.navigation.location.pathname
          : null;
    o ||
      ((p = p.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (d = d.toLowerCase())),
      w && E && (w = wn(w, E) || w);
    const j = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
    let N = p === d || (!l && p.startsWith(d) && p.charAt(j) === "/"),
      v =
        w != null &&
        (w === d || (!l && w.startsWith(d) && w.charAt(d.length) === "/")),
      L = { isActive: N, isPending: v, isTransitioning: f },
      D = N ? r : void 0,
      R;
    typeof i == "function"
      ? (R = i(L))
      : (R = [
          i,
          N ? "active" : null,
          v ? "pending" : null,
          f ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let ve = typeof s == "function" ? s(L) : s;
    return y.createElement(
      Ve,
      ko({}, m, {
        "aria-current": D,
        className: R,
        ref: n,
        style: ve,
        to: u,
        unstable_viewTransition: c,
      }),
      typeof h == "function" ? h(L) : h
    );
  });
var ml;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ml || (ml = {}));
var Lu;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Lu || (Lu = {}));
function Lh(e) {
  let t = y.useContext(Ao);
  return t || q(!1), t;
}
function _h(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    u = eh(),
    c = gr(),
    h = Uo(e, { relative: l });
  return y.useCallback(
    (m) => {
      if (yh(m, n)) {
        m.preventDefault();
        let g = r !== void 0 ? r : xo(c) === xo(h);
        u(e, {
          replace: g,
          state: o,
          preventScrollReset: i,
          relative: l,
          unstable_viewTransition: s,
        });
      }
    },
    [c, u, h, r, o, n, e, i, l, s]
  );
}
function Ph(e, t) {
  t === void 0 && (t = {});
  let n = y.useContext(kh);
  n == null && q(!1);
  let { basename: r } = Lh(ml.useViewTransitionState),
    o = Uo(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = wn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = wn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return pl(o.pathname, l) != null || pl(o.pathname, i) != null;
}
const Th = "./assets/logo-1EnBdt9n.png",
  Rh = () => {
    const [e, t] = y.useState(!1);
    return a.jsxs("div", {
      className: "navbar",
      children: [
        a.jsxs("div", {
          className: "mobilemen",
          children: [
            a.jsx("div", {
              className: "nav-logo",
              children: a.jsx(Ve, {
                to: "/",
                children: a.jsx("img", {
                  className: "mn-logo",
                  src: Th,
                  alt: "",
                }),
              }),
            }),
            a.jsxs("div", {
              className: "menu",
              onClick: () => {
                t(!e);
              },
              children: [
                a.jsx("span", {}),
                a.jsx("span", {}),
                a.jsx("span", {}),
              ],
            }),
          ],
        }),
        a.jsxs("ul", {
          className: e ? "open" : "",
          children: [
            a.jsx("li", {
              children: a.jsx(yi, {
                style: { textDecoration: "none", color: "black" },
                to: "/",
                children: "Home",
              }),
            }),
            a.jsx("li", {
              children: a.jsx(yi, {
                style: { textDecoration: "none", color: "black" },
                to: "/seb",
                children: "Quiz",
              }),
            }),
            a.jsx("li", {
              children: a.jsx(yi, {
                style: { textDecoration: "none", color: "black" },
                to: "/abouts",
                children: "Abouts",
              }),
            }),
          ],
        }),
      ],
    });
  },
  zh = "./assets/tuldok-CN_Q1VBx.png",
  Oh = "./assets/hexxx-Dr_7KJ6h.png",
  Dh = "./assets/potions-k4AqN0YE.png",
  Ih = "./assets/pots-D9_ZT1TQ.png",
  Mh = () =>
    a.jsxs("div", {
      className: "mn",
      children: [
        a.jsxs("div", {
          className: "mn-title",
          children: [
            a.jsx("h1", { children: "Introduction to the Website" }),
            a.jsx("p", {
              children:
                "Welcome to the Chem 2 Flash, where you can easily learn Chemistry 2! Whether you're a student tackling chemistry or someone curious about chemicals, our platform is here to help. We have simple flashcards to break down tough topics, making it easier for you to understand and do well in Chemistry 2. Use our user-friendly study tools and start your journey to becoming a Chemistry 2 pro with our Chem 2 Flash",
            }),
            a.jsx("br", {}),
            a.jsx("hr", {}),
            a.jsx("div", {
              className: "serch",
              children: a.jsx("input", {
                type: "search",
                name: "search",
                placeholder: "Search..",
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "hex",
          children: [
            a.jsx(Ve, {
              style: { textDecoration: "none", color: "black" },
              to: "/quiz1",
              children: a.jsxs("div", {
                className: "ultraman",
                children: [
                  a.jsx("div", { className: "hexagon1" }),
                  a.jsx("div", {
                    className: "centerhex",
                    children: a.jsxs("div", {
                      className: "centerhex-content",
                      children: [
                        a.jsx("img", { src: zh, alt: "", srcset: "" }),
                        a.jsx("p", { children: "Module 1" }),
                      ],
                    }),
                  }),
                  a.jsx("div", { className: "hexagon2" }),
                ],
              }),
            }),
            a.jsx(Ve, {
              style: { textDecoration: "none", color: "black" },
              to: "/quiz2",
              children: a.jsxs("div", {
                className: "ultraman",
                children: [
                  a.jsx("div", { className: "hexagon1" }),
                  a.jsx("div", {
                    className: "centerhex",
                    children: a.jsxs("div", {
                      className: "centerhex-content",
                      children: [
                        a.jsx("img", { src: Oh, alt: "", srcset: "" }),
                        a.jsx("p", { children: "Module 2" }),
                      ],
                    }),
                  }),
                  a.jsx("div", { className: "hexagon2" }),
                ],
              }),
            }),
            a.jsxs("div", {
              className: "ultraman",
              children: [
                a.jsx("div", { className: "hexagon1" }),
                a.jsx("div", {
                  className: "centerhex",
                  children: a.jsxs("div", {
                    className: "centerhex-content",
                    children: [
                      a.jsx("img", {
                        src: Dh,
                        id: "potion",
                        alt: "",
                        srcset: "",
                      }),
                      a.jsx("p", { children: "Module 3" }),
                    ],
                  }),
                }),
                a.jsx("div", { className: "hexagon2" }),
              ],
            }),
            a.jsxs("div", {
              className: "ultraman",
              children: [
                a.jsx("div", { className: "hexagon1" }),
                a.jsx("div", {
                  className: "centerhex",
                  children: a.jsxs("div", {
                    className: "centerhex-content",
                    children: [
                      a.jsx("img", { src: Ih, alt: "", srcset: "" }),
                      a.jsx("p", { children: "Module 3" }),
                    ],
                  }),
                }),
                a.jsx("div", { className: "hexagon2" }),
              ],
            }),
          ],
        }),
      ],
    }),
  Fh = "./assets/gian-CtgZRV7s.jpg",
  Wh = "./assets/cutee-BbYKFRLE.jpg",
  Ah = "./assets/hahaha-CNfwTKFW.jpg",
  Bh = "./assets/john-BDlzG5Jl.jpg",
  Uh = "./assets/grupings-BymBKAH3.png",
  Vh = "./assets/cultibv-CJhV9zOV.png",
  $h = "./assets/pogi-B9-KkGqB.png",
  Hh = () =>
    a.jsxs("div", {
      className: "main",
      children: [
        a.jsx("div", {
          className: "main-content",
          children: a.jsx("div", {
            className: "description",
            children: a.jsxs("div", {
              className: "contents",
              children: [
                a.jsxs("div", {
                  className: "aboutus-section-text",
                  children: [
                    a.jsx("h1", { children: "About us" }),
                    a.jsxs("p", {
                      children: [
                        "We envision a world with equitable access to science ",
                        a.jsx("br", {}),
                        "learning and career resources.",
                      ],
                    }),
                  ],
                }),
                a.jsx("img", { src: Uh, alt: "ian" }),
              ],
            }),
          }),
        }),
        a.jsxs("div", {
          className: "mainbody",
          children: [
            a.jsx("h1", { children: "Our Team" }),
            a.jsx("p", {
              children:
                "Meet the minds behind Chem 2 Flash We apply our skills and talents to transforming science education.",
            }),
            a.jsxs("div", {
              className: "pictures",
              children: [
                a.jsx("img", { src: $h, alt: "" }),
                a.jsx("img", { src: Wh, alt: "" }),
                a.jsx("img", { src: Ah, alt: "" }),
                a.jsx("img", { src: Fh, alt: "" }),
                a.jsx("img", { src: Bh, alt: "" }),
              ],
            }),
            a.jsx("br", {}),
            a.jsx("br", {}),
            a.jsxs("div", {
              className: "mainbody-last",
              children: [
                a.jsx("img", { src: Vh, alt: "" }),
                a.jsxs("div", {
                  className: "paddme",
                  children: [
                    a.jsx("h1", {
                      children:
                        "Customize a learning path to suit individual needs.",
                    }),
                    a.jsx("p", {
                      children:
                        "Learning is not a one-size-fits-all experience. Chem 2 Flash provides the flexibility for individuals in school, university, or the workforce to tailor their learning to suit their unique needs. By offering a versatile range of content, such as assessments, and simulations.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Et = [
    {
      question:
        "How can water show us that one thing can be solid, liquid, and gas?",
      option1: "A) Because it can only be in one state at a time.",
      option2: "B) Due to its ability to exist as ice, liquid, and vapor.",
      option3: "C) Because it defies the usual states of matter.",
      option4: "D) None of the above.",
      ans: 2,
    },
    {
      question:
        "What makes solid particles different from liquid and gas particles in how they're arranged?",
      option1: "A) Solid particles are always moving.",
      option2: "B) Liquid particles have a fixed arrangement.",
      option3: "C) Solid particles have a rigid position but can vibrate.",
      option4: "D) Gas particles are tightly packed.",
      ans: 3,
    },
    {
      question:
        "Why does the energy of moving particles in liquids let them flow, but only for short distances?",
      option1: "A) Because they have low energy.",
      option2:
        "B) The energy overcomes attractive forces, allowing short-distance movement.",
      option3: "C) Energy doesn't affect the flow of liquids.",
      option4: "D) Only gases can flow.",
      ans: 2,
    },
    {
      question:
        "Even though they can vibrate, why do particles in solids stay in one place?",
      option1: "A) They have low kinetic energy.",
      option2: "B) Solid particles don't vibrate.",
      option3: "C) The particles are held in a rigid position.",
      option4: "D) They are attracted to each other.",
      ans: 3,
    },
    {
      question:
        "How do the forces that pull particles together affect how matter behaves in different forms?",
      option1: "A) They don't have any effect.",
      option2: "B) Forces only impact gas behavior.",
      option3: "C) They influence the behavior of matter in different states.",
      option4: "D) Forces make solids flow easily.",
      ans: 3,
    },
    {
      question:
        "What's the role of energy in making liquid particles move, and how is it different from gas particles?",
      option1: "A) Energy doesn't affect particle movement.",
      option2:
        "B) High energy in liquids overcomes attractive forces, allowing movement.",
      option3: "C) Gas particles have low energy.",
      option4: "D) Liquid and gas particles have the same kinetic energy.",
      ans: 2,
    },
    {
      question: "What makes particles in solids stay in an organized pattern?",
      option1: "A) They have low energy.",
      option2: "B) Orderly arrangement is not a characteristic of solids.",
      option3: "C) Attractive forces between particles.",
      option4: "D) The absence of particle vibration.",
      ans: 3,
    },
    {
      question:
        "Why do people often talk about water when they discuss different forms of matter?",
      option1: "A) Because water can only exist as a liquid.",
      option2: "B) It's a common example that can be solid, liquid, and gas.",
      option3: "C) Water has no impact on discussions about states of matter.",
      option4: "D) It's just a tradition.",
      ans: 2,
    },
    {
      question:
        "How do particles in gases become independent by overcoming their pulling forces?",
      option1: "A) Gases always remain tightly packed.",
      option2: "B) They become independent by having low kinetic energy.",
      option3: "C) High kinetic energy in gases overcomes attractive forces.",
      option4: "D) Gases don't have pulling forces.",
      ans: 3,
    },
    {
      question:
        "Why is energy important when water changes from ice to liquid to vapor?",
      option1: "A) Energy has no role in state changes.",
      option2: "B) Energy keeps water in a solid state.",
      option3:
        "C) Energy is crucial for the transition between different states.",
      option4: "D) Water changes states without any energy involvement.",
      ans: 3,
    },
  ],
  qh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Et[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, c] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      f = y.useRef(null),
      d = [S, k, E, f];
    y.useEffect(() => {
      if (!Et || Et.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(Et[e]);
    }, [e]),
      y.useEffect(() => {
        const v = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : p();
        }, 1e3);
        return () => clearTimeout(v);
      }, [h, o]);
    const p = () => {
        o || (i(!0), x("Time's up! You ran out of time."));
      },
      w = (v, L) => {
        o ||
          (n.ans === L
            ? ((v.target.textContent = "Correct!"),
              v.target.classList.add("correct"),
              i(!0),
              s((D) => D + 1),
              x("Correct!"))
            : ((v.target.textContent = "Wrong"),
              v.target.classList.add("incorrect"),
              i(!0),
              d[n.ans - 1].current.classList.add("correct"),
              x("Incorrect.")));
      },
      j = () => {
        if (o) {
          if (e === Et.length - 1) {
            c(!0);
            return;
          }
          t((v) => v + 1),
            i(!1),
            m(40),
            d.forEach((v) => {
              v.current.classList.remove("incorrect"),
                v.current.classList.remove("correct");
            }),
            x("");
        }
      },
      N = () => {
        t(0), s(0), i(!1), c(!1), m(40), x("");
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "Module 1" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Et.length],
                }),
                a.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: [e + 1, ". ", n == null ? void 0 : n.question],
                }),
                a.jsxs("ul", {
                  children: [
                    a.jsx("li", {
                      ref: S,
                      onClick: (v) => {
                        w(v, 1);
                      },
                      children: n == null ? void 0 : n.option1,
                    }),
                    a.jsx("li", {
                      ref: k,
                      onClick: (v) => {
                        w(v, 2);
                      },
                      children: n == null ? void 0 : n.option2,
                    }),
                    a.jsx("li", {
                      ref: E,
                      onClick: (v) => {
                        w(v, 3);
                      },
                      children: n == null ? void 0 : n.option3,
                    }),
                    a.jsx("li", {
                      ref: f,
                      onClick: (v) => {
                        w(v, 4);
                      },
                      children: n == null ? void 0 : n.option4,
                    }),
                  ],
                }),
                !o &&
                  a.jsxs("div", {
                    className: "timer",
                    children: ["Time remaining: ", h, " seconds"],
                  }),
                a.jsx("div", { className: "answer-status", children: g }),
                a.jsx("button", { onClick: j, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Et.length, " questions"],
                }),
              ],
            }),
      ],
    });
  },
  Qh = () => a.jsx("div", { className: "main-seb", children: a.jsx(qh, {}) }),
  Kh = () =>
    a.jsxs("div", {
      className: "main",
      children: [
        a.jsxs("div", {
          className: "menu",
          children: [
            a.jsx("h1", {
              children:
                "Lesson 1: The properties of liquids and solids to the nature of forces between particles",
            }),
            a.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            a.jsx(Ve, {
              style: { textDecoration: "none" },
              to: "/seb",
              children: a.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "menu",
          children: [
            a.jsx("h1", {
              children: "Lesson 2: Intermolecular and Intramolecular Forces ",
            }),
            a.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            a.jsx(Ve, {
              style: { textDecoration: "none" },
              to: "/less2",
              children: a.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "menu",
          children: [
            a.jsx("h1", { children: "Lesson 3: Viscosity" }),
            a.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            a.jsx(Ve, {
              style: { textDecoration: "none" },
              to: "/less3",
              children: a.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
      ],
    }),
  jt = [
    {
      question:
        "What makes the forces holding solids, liquids, and gases together different?",
      option1: "A) Their color.",
      option2: "B) Their strength.",
      option3: "C) Their temperature.",
      option4: "D) Their magnetism.",
      ans: 2,
    },
    {
      question:
        "How does particles being close in solids and liquids affect their volume and motion?",
      option1: "A) They shrink.",
      option2: "B) They take up space and move less randomly.",
      option3: "C) They turn into gas.",
      option4: "D) Volume stays the same.",
      ans: 2,
    },
    {
      question:
        "In making an ionic bond, what happens when electrons are transferred?",
      option1: "A) Electrons move randomly.",
      option2: "B) No electrons involved.",
      option3: "C) Electrons move from metal to nonmetal.",
      option4: "D) Electrons are shared.",
      ans: 3,
    },
    {
      question:
        "What's the usual form of all ionic compounds at room temperature?",
      option1: "A) Gas.",
      option2: "B) Liquid.",
      option3: "C) Solid.",
      option4: "D) Plasma.",
      ans: 3,
    },
    {
      question:
        "How are metallic bonds different from ionic bonds regarding electrons?",
      option1: "A) Electrons move in metallic, not in ionic.",
      option2: "B) Metallic bonds don't involve electrons.",
      option3: "C) Electrons are shared in both.",
      option4: "D) No electron movement.",
      ans: 1,
    },
    {
      question: "What's a covalent compound, and how do electrons shape it?",
      option1: "A) Random electron action.",
      option2: "B) Metal electrons bond with positive ions.",
      option3: "C) Electrons shift from metal to nonmetal.",
      option4: "D) Electrons are shared among nonmetals, forming molecules.",
      ans: 4,
    },
    {
      question:
        "What are London dispersion forces, and how do they change with atom size?",
      option1: "A) Permanent pulls, unaffected by atom size.",
      option2: "B) Tied to magnetism.",
      option3: "C) Temporary pulls, growing with larger atoms.",
      option4: "D) Influenced by atom color.",
      ans: 3,
    },
    {
      question:
        "Why are Dipole-Dipole Forces strong, and what makes them strong?",
      option1: "A) Strong with opposite charges.",
      option2: "B) Weak without charges.",
      option3: "C) Tied to temperature changes.",
      option4: "D) Strong with similar charges.",
      ans: 1,
    },
    {
      question:
        "How does Ion-Dipole Forces show up, and what happens in a watery solution?",
      option1: "A) Ions interact with water molecules.",
      option2: "B) Ionic compounds dissolve with no change.",
      option3: "C) No ions and water interaction.",
      option4: "D) Ion-Dipole Forces separate ions.",
      ans: 1,
    },
    {
      question:
        "What's special about Hydrogen Bonds, and where do they happen?",
      option1: "A) Related to electron moves.",
      option2: "B) Never in any molecules.",
      option3: "C) Only in metals.",
      option4: "D) Like dipole-dipole for O-H, H-F, and N-H molecules.",
      ans: 1,
    },
  ],
  Yh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(jt[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, c] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      f = y.useRef(null),
      d = [S, k, E, f];
    y.useEffect(() => {
      if (!jt || jt.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(jt[e]);
    }, [e]),
      y.useEffect(() => {
        const v = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : p();
        }, 1e3);
        return () => clearTimeout(v);
      }, [h, o]);
    const p = () => {
        o || (i(!0), x("Time's up! You ran out of time."));
      },
      w = (v, L) => {
        o ||
          (n.ans === L
            ? ((v.target.textContent = "Correct!"),
              v.target.classList.add("correct"),
              i(!0),
              s((D) => D + 1),
              x("Correct!"))
            : ((v.target.textContent = "Wrong"),
              v.target.classList.add("incorrect"),
              i(!0),
              d[n.ans - 1].current.classList.add("correct"),
              x("Incorrect.")));
      },
      j = () => {
        if (o) {
          if (e === jt.length - 1) {
            c(!0);
            return;
          }
          t((v) => v + 1),
            i(!1),
            m(40),
            d.forEach((v) => {
              v.current.classList.remove("incorrect"),
                v.current.classList.remove("correct");
            }),
            x("");
        }
      },
      N = () => {
        t(0), s(0), i(!1), c(!1), m(40), x("");
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "Lesson 2" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", jt.length],
                }),
                a.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: [e + 1, ". ", n == null ? void 0 : n.question],
                }),
                a.jsxs("ul", {
                  children: [
                    a.jsx("li", {
                      ref: S,
                      onClick: (v) => {
                        w(v, 1);
                      },
                      children: n == null ? void 0 : n.option1,
                    }),
                    a.jsx("li", {
                      ref: k,
                      onClick: (v) => {
                        w(v, 2);
                      },
                      children: n == null ? void 0 : n.option2,
                    }),
                    a.jsx("li", {
                      ref: E,
                      onClick: (v) => {
                        w(v, 3);
                      },
                      children: n == null ? void 0 : n.option3,
                    }),
                    a.jsx("li", {
                      ref: f,
                      onClick: (v) => {
                        w(v, 4);
                      },
                      children: n == null ? void 0 : n.option4,
                    }),
                  ],
                }),
                !o &&
                  a.jsxs("div", {
                    className: "timer",
                    children: ["Time remaining: ", h, " seconds"],
                  }),
                a.jsx("div", { className: "answer-status", children: g }),
                a.jsx("button", { onClick: j, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", jt.length, " questions"],
                }),
              ],
            }),
      ],
    });
  },
  Nt = [
    {
      question: "What does viscosity measure in a liquid?",
      option1: "A) Ability to resist flowing.",
      option2: "B) Temperature resistance.",
      option3: "C) Boiling point.",
      option4: "D) Evaporation rate.",
      ans: 1,
    },
    {
      question: "How is maple syrup's viscosity compared to water?",
      option1: "A) Less thickness.",
      option2: "B) Similar thickness.",
      option3: "C) More thickness.",
      option4: "D) No thickness.",
      ans: 3,
    },
    {
      question:
        "What happens to the thickness of a liquid as its temperature increases?",
      option1: "A) It gets thinner.",
      option2: "B) It gets thicker.",
      option3: "C) It stays the same.",
      option4: "D) It becomes immeasurable.",
      ans: 1,
    },
    {
      question:
        "What is vaporization, and how is it related to boiling and condensation?",
      option1: "A) Boiling and condensation are forms of vaporization.",
      option2: "B) Turning into vapor during boiling.",
      option3: "C) Boiling is a type of turning back to liquid.",
      option4: "D) Vaporization is unrelated to boiling and condensation.",
      ans: 1,
    },
    {
      question: "How are gas and vapor different?",
      option1: "A) They are the same.",
      option2: "B) Gas refers to a liquid at room temperature.",
      option3:
        "C) Vapor is a gaseous state of a substance at room temperature.",
      option4: "D) Vapor refers to a solid at room temperature.",
      ans: 3,
    },
    {
      question:
        "What characterizes substances with high escaping tendency and volatility?",
      option1: "A) Strong forces holding them together.",
      option2: "B) Low boiling points.",
      option3: "C) Weak forces holding them together.",
      option4: "D) High turning into liquid rates.",
      ans: 3,
    },
    {
      question: "Which statement about the boiling point of water is correct?",
      option1: "A) It is higher at lower temperatures.",
      option2: "B) It is unrelated to vapor pressure.",
      option3:
        "C) It is the temperature where vapor pressure equals atmospheric pressure.",
      option4: "D) It decreases as the temperature rises.",
      ans: 3,
    },
    {
      question: "What defines the usual boiling point of a substance?",
      option1: "A) The temperature at which bubbles form.",
      option2: "B) When vapor pressure is lower than atmospheric pressure.",
      option3: "C) Equal vapor pressure to atmospheric pressure.",
      option4: "D) The highest temperature achievable.",
      ans: 3,
    },
    {
      question:
        "What characterizes the total energy change during the process of turning into vapor?",
      option1: "A) Decreases.",
      option2: "B) Stays the same.",
      option3: "C) Increases.",
      option4: "D) Reaches a minimum.",
      ans: 3,
    },
    {
      question:
        "What is the term for the heat needed to turn a liquid into vapor at its boiling point?",
      option1: "A) Heat of turning back into liquid.",
      option2: "B) Vapor pressure.",
      option3: "C) Heat of turning into vapor.",
      option4: "D) Boiling heat.",
      ans: 3,
    },
  ],
  Gh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Nt[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, c] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      f = y.useRef(null),
      d = [S, k, E, f];
    y.useEffect(() => {
      if (!Nt || Nt.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(Nt[e]);
    }, [e]),
      y.useEffect(() => {
        const v = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : p();
        }, 1e3);
        return () => clearTimeout(v);
      }, [h, o]);
    const p = () => {
        o || (i(!0), x("Time's up! You ran out of time."));
      },
      w = (v, L) => {
        o ||
          (n.ans === L
            ? ((v.target.textContent = "Correct!"),
              v.target.classList.add("correct"),
              i(!0),
              s((D) => D + 1),
              x("Correct!"))
            : ((v.target.textContent = "Wrong"),
              v.target.classList.add("incorrect"),
              i(!0),
              d[n.ans - 1].current.classList.add("correct"),
              x("Incorrect.")));
      },
      j = () => {
        if (o) {
          if (e === Nt.length - 1) {
            c(!0);
            return;
          }
          t((v) => v + 1),
            i(!1),
            m(40),
            d.forEach((v) => {
              v.current.classList.remove("incorrect"),
                v.current.classList.remove("correct");
            }),
            x("");
        }
      },
      N = () => {
        t(0), s(0), i(!1), c(!1), m(40), x("");
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "Lesson 2" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Nt.length],
                }),
                a.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: [e + 1, ". ", n == null ? void 0 : n.question],
                }),
                a.jsxs("ul", {
                  children: [
                    a.jsx("li", {
                      ref: S,
                      onClick: (v) => {
                        w(v, 1);
                      },
                      children: n == null ? void 0 : n.option1,
                    }),
                    a.jsx("li", {
                      ref: k,
                      onClick: (v) => {
                        w(v, 2);
                      },
                      children: n == null ? void 0 : n.option2,
                    }),
                    a.jsx("li", {
                      ref: E,
                      onClick: (v) => {
                        w(v, 3);
                      },
                      children: n == null ? void 0 : n.option3,
                    }),
                    a.jsx("li", {
                      ref: f,
                      onClick: (v) => {
                        w(v, 4);
                      },
                      children: n == null ? void 0 : n.option4,
                    }),
                  ],
                }),
                !o &&
                  a.jsxs("div", {
                    className: "timer",
                    children: ["Time remaining: ", h, " seconds"],
                  }),
                a.jsx("div", { className: "answer-status", children: g }),
                a.jsx("button", { onClick: j, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Nt.length, " questions"],
                }),
              ],
            }),
      ],
    });
  },
  Xh = () =>
    a.jsxs("div", {
      className: "main",
      children: [
        a.jsxs("div", {
          className: "menu",
          children: [
            a.jsx("h1", {
              children: "Lesson 1: CRYSTALLINE SOLIDS and AMORPHOUS SOLIDS",
            }),
            a.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            a.jsx(Ve, {
              style: { textDecoration: "none" },
              to: "/less21",
              children: a.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "menu",
          children: [
            a.jsx("h1", {
              children: "Lesson 2: Intermolecular and Intramolecular Forces ",
            }),
            a.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            a.jsx(Ve, {
              style: { textDecoration: "none" },
              to: "/less22",
              children: a.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "menu",
          children: [
            a.jsx("h1", { children: "Lesson 3: Viscosity" }),
            a.jsx("p", {
              children:
                "This module is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat tempora aspernatur consectetur, veritatis possimus consequuntur unde asperiores animi vero odio nobis quisquam debitis cumque iusto sunt nesciunt rem adipisci.",
            }),
            a.jsx(Ve, {
              style: { textDecoration: "none" },
              to: "/less23",
              children: a.jsx("div", {
                className: "btn",
                children: "Start the Quiz!",
              }),
            }),
          ],
        }),
      ],
    }),
  Lt = [
    {
      question:
        "What term translates to 'without form' in Greek roots and is used to describe solids without regular geometric patterns?",
      option1: "a. Amorphous",
      option2: "b. Covalent",
      option3: "c. Crystalline",
      option4: "d. Disordered",
      ans: 1,
    },
    {
      question:
        "What do we call solids with highly ordered arrangements of particles forming a crystal lattice?",
      option1: "a. Amorphous Solids",
      option2: "b. Covalent Solids",
      option3: "c. Crystalline Solids",
      option4: "d. Ordered Solids",
      ans: 3,
    },
    {
      question: "Which type of solids is often referred to as 'true solids'?",
      option1: "a. Covalent Solids",
      option2: "b. Amorphous Solids",
      option3: "c. Crystalline Solids",
      option4: "d. Genuine Solids",
      ans: 3,
    },
    {
      question:
        "What do we call solids with a three-dimensional network of covalently bonded atoms?",
      option1: "a. Covalent Solids",
      option2: "b. Amorphous Solids",
      option3: "c. Crystalline Solids",
      option4: "d. Complex Solids",
      ans: 1,
    },
    {
      question:
        "Which type of solids is described as having a 'sea' of delocalized electrons within a metallic crystal?",
      option1: "a. Amorphous Solids",
      option2: "b. Covalent Solids",
      option3: "c. Metallic Solids",
      option4: "d. Electron Solids",
      ans: 3,
    },
    {
      question:
        "What term is used for the unique force that holds atoms together in metallic crystals?",
      option1: "a. Metallic Bonding",
      option2: "b. Covalent Bonding",
      option3: "c. Ionic Bonding",
      option4: "d. Atomic Bonding",
      ans: 1,
    },
    {
      question:
        "Which type of solids is composed of atoms or molecules held together by intermolecular forces?",
      option1: "a. Molecular Solids",
      option2: "b. Covalent Solids",
      option3: "c. Crystalline Solids",
      option4: "d. Intermolecular Solids",
      ans: 1,
    },
    {
      question:
        "What are solids that melt at higher temperatures and are composed of molecules with permanent dipole moments?",
      option1: "a. Molecular Solids",
      option2: "b. Amorphous Solids",
      option3: "c. Crystalline Solids",
      option4: "d. High-Melting Solids",
      ans: 1,
    },
    {
      question:
        "Which type of solids has a uniform distribution of atomic nuclei within a 'sea' of delocalized electrons?",
      option1: "a. Amorphous Solids",
      option2: "b. Molecular Solids",
      option3: "c. Metallic Solids",
      option4: "d. Nuclei Solids",
      ans: 3,
    },
    {
      question:
        "Which type of covalent solid is an exceptional example composed of planar sheets of covalent crystals held together in layers by noncovalent forces?",
      option1: "a. Diamond",
      option2: "b. Graphite",
      option3: "c. Ionic Solid",
      option4: "d. Layered Solid",
      ans: 2,
    },
    {
      question:
        "In amorphous solids, particles are not arranged in regular geometric patterns. What Greek-rooted term translates to 'without form,' describing the amorphous nature?",
      option1: "a. Symmetric",
      option2: "b. Amorphous",
      option3: "c. Isotropic",
      option4: "d. Shapeless",
      ans: 2,
    },
    {
      question:
        "What term is used to describe the characteristic manner of liquids in which particles of amorphous solids are trapped during the cooling process?",
      option1: "a. Supercooled liquids",
      option2: "b. Nanoparticles",
      option3: "c. Covalent networks",
      option4: "d. Trapped Liquids",
      ans: 1,
    },
    {
      question:
        "Which type of solid is known for having high thermal and electrical conductivity, metallic lustre, and malleability?",
      option1: "a. Amorphous Solid",
      option2: "b. Molecular Solid",
      option3: "c. Metallic Solid",
      option4: "d. Conductive Solid",
      ans: 3,
    },
    {
      question:
        "What makes amorphous solids different from crystalline solids in terms of their arrangement?",
      option1: "a. Regular geometric patterns",
      option2: "b. Definite shape",
      option3: "c. Irregular surfaces",
      option4: "d. Random arrangement",
      ans: 3,
    },
    {
      question:
        "Which type of solids has particles trapped in a disarranged characteristic manner during the cooling process?",
      option1: "a. Covalent Solids",
      option2: "b. Amorphous Solids",
      option3: "c. Crystalline Solids",
      option4: "d. Disordered Solids",
      ans: 2,
    },
  ],
  Jh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Lt[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, c] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      f = y.useRef(null),
      d = [S, k, E, f];
    y.useEffect(() => {
      if (!Lt || Lt.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(Lt[e]);
    }, [e]),
      y.useEffect(() => {
        const v = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : p();
        }, 1e3);
        return () => clearTimeout(v);
      }, [h, o]);
    const p = () => {
        o || (i(!0), x("Time's up! You ran out of time."));
      },
      w = (v, L) => {
        o ||
          (n.ans === L
            ? ((v.target.textContent = "Correct!"),
              v.target.classList.add("correct"),
              i(!0),
              s((D) => D + 1),
              x("Correct!"))
            : ((v.target.textContent = "Wrong"),
              v.target.classList.add("incorrect"),
              i(!0),
              d[n.ans - 1].current.classList.add("correct"),
              x("Incorrect.")));
      },
      j = () => {
        if (o) {
          if (e === Lt.length - 1) {
            c(!0);
            return;
          }
          t((v) => v + 1),
            i(!1),
            m(40),
            d.forEach((v) => {
              v.current.classList.remove("incorrect"),
                v.current.classList.remove("correct");
            }),
            x("");
        }
      },
      N = () => {
        t(0), s(0), i(!1), c(!1), m(40), x("");
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "Lesson 1" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Lt.length],
                }),
                a.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: [e + 1, ". ", n == null ? void 0 : n.question],
                }),
                a.jsxs("ul", {
                  children: [
                    a.jsx("li", {
                      ref: S,
                      onClick: (v) => {
                        w(v, 1);
                      },
                      children: n == null ? void 0 : n.option1,
                    }),
                    a.jsx("li", {
                      ref: k,
                      onClick: (v) => {
                        w(v, 2);
                      },
                      children: n == null ? void 0 : n.option2,
                    }),
                    a.jsx("li", {
                      ref: E,
                      onClick: (v) => {
                        w(v, 3);
                      },
                      children: n == null ? void 0 : n.option3,
                    }),
                    a.jsx("li", {
                      ref: f,
                      onClick: (v) => {
                        w(v, 4);
                      },
                      children: n == null ? void 0 : n.option4,
                    }),
                  ],
                }),
                !o &&
                  a.jsxs("div", {
                    className: "timer",
                    children: ["Time remaining: ", h, " seconds"],
                  }),
                a.jsx("div", { className: "answer-status", children: g }),
                a.jsx("button", { onClick: j, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Lt.length, " questions"],
                }),
              ],
            }),
      ],
    });
  },
  _t = [
    {
      question:
        "What is the main characteristic of evaporation and melting processes in phase changes?",
      option1: "a. Release of heat",
      option2: "b. Solid to gas transformation",
      option3: "c. Absorption of heat",
      option4: "d. Liquid to gas transformation",
      ans: 3,
    },
    {
      question:
        "Which process involves changing the phase of a substance from solid to gas without passing the liquid phase?",
      option1: "a. Evaporation",
      option2: "b. Sublimation",
      option3: "c. Melting",
      option4: "d. Deposition",
      ans: 2,
    },
    {
      question: "What is the critical point on a phase diagram?",
      option1: "a. Point B",
      option2: "b. Point C",
      option3: "c. Point D",
      option4: "d. Point X",
      ans: 2,
    },
    {
      question: "At the Triple Point, what coexists?",
      option1: "a. Solid and gas",
      option2: "b. Liquid and gas",
      option3: "c. Solid, liquid, and gas",
      option4: "d. Solid and liquid",
      ans: 3,
    },
    {
      question: "What is the significance of Point C on the phase diagram?",
      option1: "a. Melting point",
      option2: "b. Boiling point",
      option3: "c. Critical point",
      option4: "d. Triple point",
      ans: 3,
    },
    {
      question:
        "Where is the gas phase most stable according to the phase diagram?",
      option1: "a. Low pressure and low temperature",
      option2: "b. High pressure and low temperature",
      option3: "c. Low pressure and high temperature",
      option4: "d. High pressure and high temperature",
      ans: 1,
    },
    {
      question:
        "What phase is stable upon extending to low temperature and high pressures?",
      option1: "a. Solid",
      option2: "b. Liquid",
      option3: "c. Gas",
      option4: "d. Plasma",
      ans: 1,
    },
    {
      question: "What is the normal sublimation point of CO2?",
      option1: "a. Letter X",
      option2: "b. Letter Y",
      option3: "c. Letter C",
      option4: "d. Letter D",
      ans: 2,
    },
    {
      question:
        "Which curve in the heating and cooling graphs indicates a decrease in temperature?",
      option1: "a. Graph (a)",
      option2: "b. Graph (b)",
      option3: "c. Both graphs",
      option4: "d. Neither graph",
      ans: 2,
    },
    {
      question:
        "During which segment does the substance's temperature remain constant despite continued heat input?",
      option1: "a. Segment B",
      option2: "b. Segment C",
      option3: "c. Segment D",
      option4: "d. Segment E",
      ans: 1,
    },
    {
      question:
        "What process involves changing from liquid to gas with heat absorption in the heating curve?",
      option1: "a. Melting",
      option2: "b. Boiling",
      option3: "c. Condensation",
      option4: "d. Sublimation",
      ans: 2,
    },
    {
      question:
        "In the cooling curve, what is represented by a decrease in temperature?",
      option1: "a. Freezing",
      option2: "b. Condensation",
      option3: "c. Evaporation",
      option4: "d. Melting",
      ans: 1,
    },
    {
      question:
        "What phase change process occurs during Segment D of a heating curve?",
      option1: "a. Boiling",
      option2: "b. Evaporation",
      option3: "c. Melting",
      option4: "d. Condensation",
      ans: 2,
    },
    {
      question:
        "Which point on the phase diagram represents the normal melting or freezing point of water?",
      option1: "a. Letter A",
      option2: "b. Letter B",
      option3: "c. Letter C",
      option4: "d. Letter D",
      ans: 2,
    },
    {
      question: "What is the purpose of a plateau in the heating curve?",
      option1: "a. To indicate a phase transition",
      option2: "b. To show a constant temperature",
      option3: "c. To represent a change in pressure",
      option4: "d. To measure heat release",
      ans: 1,
    },
  ],
  Zh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(_t[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, c] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      f = y.useRef(null),
      d = [S, k, E, f];
    y.useEffect(() => {
      if (!_t || _t.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(_t[e]);
    }, [e]),
      y.useEffect(() => {
        const v = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : p();
        }, 1e3);
        return () => clearTimeout(v);
      }, [h, o]);
    const p = () => {
        o || (i(!0), x("Time's up! You ran out of time."));
      },
      w = (v, L) => {
        o ||
          (n.ans === L
            ? ((v.target.textContent = "Correct!"),
              v.target.classList.add("correct"),
              i(!0),
              s((D) => D + 1),
              x("Correct!"))
            : ((v.target.textContent = "Wrong"),
              v.target.classList.add("incorrect"),
              i(!0),
              d[n.ans - 1].current.classList.add("correct"),
              x("Incorrect.")));
      },
      j = () => {
        if (o) {
          if (e === _t.length - 1) {
            c(!0);
            return;
          }
          t((v) => v + 1),
            i(!1),
            m(40),
            d.forEach((v) => {
              v.current.classList.remove("incorrect"),
                v.current.classList.remove("correct");
            }),
            x("");
        }
      },
      N = () => {
        t(0), s(0), i(!1), c(!1), m(40), x("");
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "Lesson 2" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", _t.length],
                }),
                a.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: [e + 1, ". ", n == null ? void 0 : n.question],
                }),
                a.jsxs("ul", {
                  children: [
                    a.jsx("li", {
                      ref: S,
                      onClick: (v) => {
                        w(v, 1);
                      },
                      children: n == null ? void 0 : n.option1,
                    }),
                    a.jsx("li", {
                      ref: k,
                      onClick: (v) => {
                        w(v, 2);
                      },
                      children: n == null ? void 0 : n.option2,
                    }),
                    a.jsx("li", {
                      ref: E,
                      onClick: (v) => {
                        w(v, 3);
                      },
                      children: n == null ? void 0 : n.option3,
                    }),
                    a.jsx("li", {
                      ref: f,
                      onClick: (v) => {
                        w(v, 4);
                      },
                      children: n == null ? void 0 : n.option4,
                    }),
                  ],
                }),
                !o &&
                  a.jsxs("div", {
                    className: "timer",
                    children: ["Time remaining: ", h, " seconds"],
                  }),
                a.jsx("div", { className: "answer-status", children: g }),
                a.jsx("button", { onClick: j, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", _t.length, " questions"],
                }),
              ],
            }),
      ],
    });
  },
  Pt = [
    {
      question: "What does percent concentration by mass measure?",
      option1: "a) Volume of solute per unit volume of solvent",
      option2: "b) Mass of solute per unit volume of solution",
      option3: "c) Mass of solute per 100 units of solution mass",
      option4: "d) Moles of solute per unit volume of solution",
      ans: 3,
    },
    {
      question:
        "Which formula correctly calculates percent concentration by mass?",
      option1: "a) Mass of solute/Volume of solution×100",
      option2: "b) Mass of solute/Mass of solvent×100",
      option3: "c) Volume of solute/Volume of solution×100",
      option4: "d) Volume of solute/Volume of solvent×100",
      ans: 2,
    },
    {
      question:
        "What is the percent concentration by mass if 20 grams of salt are dissolved in 80 grams of water?",
      option1: "a) 25%",
      option2: "b) 20%",
      option3: "c) 80%",
      option4: "d) 100%",
      ans: 2,
    },
    {
      question:
        "Percent concentration by volume is typically used for which type of solutions?",
      option1: "a) Solid-liquid solutions",
      option2: "b) Gas-liquid solutions",
      option3: "c) Solid-solid solutions",
      option4: "d) Gas-solid solutions",
      ans: 2,
    },
    {
      question:
        "Which of the following expressions correctly represents percent concentration by volume?",
      option1: "a) Volume of solute/Volume of solvent×100",
      option2: "b) Volume of solute/Volume of solution×100",
      option3: "c) Volume of solute/Mass of solvent×100",
      option4: "d) Mass of solute/Volume of solvent×100",
      ans: 1,
    },
    {
      question:
        "If 50 mL of ethanol are mixed with 150 mL of water to form a solution, what is the percent concentration by volume of ethanol?",
      option1: "a) 25%",
      option2: "b) 75%",
      option3: "c) 33.3%",
      option4: "d) 50%",
      ans: 4,
    },
    {
      question:
        "What is the correct formula to calculate percent concentration by mass-volume?",
      option1: "a) Mass of solute/Volume of solution×100",
      option2: "b) Mass of solute/Mass of solvent×100",
      option3: "c) Volume of solute/Volume of solution×100",
      option4: "d) Volume of solute/Mass of solvent×100",
      ans: 4,
    },
    {
      question: "What does percent concentration by mass-volume indicate?",
      option1: "a) The mass of solute per 100 units of solvent volume",
      option2: "b) The mass of solute per 100 units of solution volume",
      option3: "c) The volume of solute per 100 units of solvent volume",
      option4: "d) The volume of solute per 100 units of solution volume",
      ans: 2,
    },
    {
      question:
        "If 50 grams of NaCl are dissolved in 200 mL of water, what is the percent concentration by mass-volume of NaCl in the solution?",
      option1: "a) 25%",
      option2: "b) 10%",
      option3: "c) 20%",
      option4: "d) 5%",
      ans: 3,
    },
    {
      question:
        "Percent concentration by mass-volume is commonly used in which type of solutions?",
      option1: "a) Solutions involving gasses",
      option2: "b) Solutions involving solids",
      option3: "c) Solutions involving liquids",
      option4: "d) Solutions involving immiscible liquid",
      ans: 4,
    },
    {
      question: "How is the percent concentration by mass-volume calculated?",
      option1: "a) Mass of solute / Volume of solvent * 100",
      option2: "b) Mass of solute / Volume of solution * 100",
      option3: "c) Volume of solute / Volume of solvent * 100",
      option4: "d) Volume of solute / Mass of solvent * 100",
      ans: 4,
    },
    {
      question:
        "A solution contains 30 grams of sugar dissolved in 150 milliliters of water. What is the percent concentration by mass?",
      option1: "a) 20%",
      option2: "b) 25%",
      option3: "c) 15%",
      option4: "d) 10%",
      ans: 2,
    },
    {
      question:
        "A solution contains 40 milliliters of ethanol mixed with 160 milliliters of water. What is the percent concentration by volume of ethanol?",
      option1: "a) 25%",
      option2: "b) 20%",
      option3: "c) 30%",
      option4: "d) 40%",
      ans: 1,
    },
    {
      question:
        "A solution contains 25 grams of solute dissolved in 200 milliliters of solution. What is the percent concentration by mass-volume?",
      option1: "a) 12.5%",
      option2: "b) 10%",
      option3: "c) 20%",
      option4: "d) 15%",
      ans: 1,
    },
    {
      question:
        "A solution contains 50 milliliters of solute mixed with 100 grams of water. What is the percent concentration by mass-volume?",
      option1: "a) 33.3%",
      option2: "b) 50%",
      option3: "c) 25%",
      option4: "d) 20%",
      ans: 1,
    },
    {
      question:
        "What does percent by volume (% vol/vol) measure in a solution?",
      option1: "a) Volume of solute per unit volume of solvent",
      option2: "b) Volume of solute per 100 units of solution volume",
      option3: "c) Volume of solute per unit volume of solution",
      option4: "d) Moles of solute per unit volume of solution",
      ans: 2,
    },
    {
      question: "Which formula correctly calculates percent by volume?",
      option1: "a) Volume of solute/Volume of solvent×100",
      option2: "b) Volume of solute/Volume of solution×100",
      option3: "c) Volume of solute/Mass of solvent×100",
      option4: "d) Mass of solute/Volume of solvent×100",
      ans: 1,
    },
    {
      question:
        "What is the percent by volume if 30 mL of ethanol are mixed with 70 mL of water?",
      option1: "a) 30%",
      option2: "b) 70%",
      option3: "c) 100%",
      option4: "d) 50%",
      ans: 4,
    },
    {
      question:
        "Percent by volume is typically used for which type of solutions?",
      option1: "a) Solid-liquid solutions",
      option2: "b) Gas-liquid solutions",
      option3: "c) Solid-solid solutions",
      option4: "d) Gas-solid solutions",
      ans: 2,
    },
    {
      question:
        "If 25 mL of acetic acid are mixed with 75 mL of water, what is the volume/volume percent of acetic acid in the solution?",
      option1: "a) 25%",
      option2: "b) 30%",
      option3: "c) 35%",
      option4: "d) 40%",
      ans: 4,
    },
    {
      question:
        "Volume/volume percent is commonly used in which type of solutions?",
      option1: "a) Solutions involving gasses",
      option2: "b) Solutions involving solids",
      option3: "c) Solutions involving liquids",
      option4: "d) Solutions involving immiscible liquids",
      ans: 3,
    },
    {
      question: "How is the volume/volume percent (% vol/vol) calculated?",
      option1: "a) Volume of solute / Volume of solvent * 100",
      option2: "b) Volume of solute / Volume of solution * 100",
      option3: "c) Volume of solute / Mass of solvent * 100",
      option4: "d) Mass of solute / Volume of solvent * 100",
      ans: 2,
    },
    {
      question:
        "A solution contains 30 mL of ethanol mixed with 170 mL of water. What is the volume/volume percent of ethanol?",
      option1: "a) 15%",
      option2: "b) 20%",
      option3: "c) 25%",
      option4: "d) 30%",
      ans: 2,
    },
    {
      question:
        "A solution contains 40 mL of solute dissolved in 200 mL of solution. What is the volume/volume percent?",
      option1: "a) 20%",
      option2: "b) 30%",
      option3: "c) 40%",
      option4: "d) 50%",
      ans: 3,
    },
    {
      question:
        "A solution contains 50 mL of solute mixed with 100 mL of solvent. What is the volume/volume percent?",
      option1: "a) 33.3%",
      option2: "b) 50%",
      option3: "c) 25%",
      option4: "d) 20%",
      ans: 2,
    },
    {
      question:
        "A solution contains 60 mL of solute dissolved in 140 mL of solution. What is the volume/volume percent?",
      option1: "a) 30%",
      option2: "b) 40%",
      option3: "c) 50%",
      option4: "d) 42.9%",
      ans: 1,
    },
  ],
  bh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Pt[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, c] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      f = y.useRef(null),
      d = [S, k, E, f];
    y.useEffect(() => {
      if (!Pt || Pt.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(Pt[e]);
    }, [e]),
      y.useEffect(() => {
        const v = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : p();
        }, 1e3);
        return () => clearTimeout(v);
      }, [h, o]);
    const p = () => {
        o || (i(!0), x("Time's up! You ran out of time."));
      },
      w = (v, L) => {
        o ||
          (n.ans === L
            ? ((v.target.textContent = "Correct!"),
              v.target.classList.add("correct"),
              i(!0),
              s((D) => D + 1),
              x("Correct!"))
            : ((v.target.textContent = "Wrong"),
              v.target.classList.add("incorrect"),
              i(!0),
              d[n.ans - 1].current.classList.add("correct"),
              x("Incorrect.")));
      },
      j = () => {
        if (o) {
          if (e === Pt.length - 1) {
            c(!0);
            return;
          }
          t((v) => v + 1),
            i(!1),
            m(40),
            d.forEach((v) => {
              v.current.classList.remove("incorrect"),
                v.current.classList.remove("correct");
            }),
            x("");
        }
      },
      N = () => {
        t(0), s(0), i(!1), c(!1), m(40), x("");
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "Lesson 2" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Pt.length],
                }),
                a.jsx("button", { onClick: N, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: [e + 1, ". ", n == null ? void 0 : n.question],
                }),
                a.jsxs("ul", {
                  children: [
                    a.jsx("li", {
                      ref: S,
                      onClick: (v) => {
                        w(v, 1);
                      },
                      children: n == null ? void 0 : n.option1,
                    }),
                    a.jsx("li", {
                      ref: k,
                      onClick: (v) => {
                        w(v, 2);
                      },
                      children: n == null ? void 0 : n.option2,
                    }),
                    a.jsx("li", {
                      ref: E,
                      onClick: (v) => {
                        w(v, 3);
                      },
                      children: n == null ? void 0 : n.option3,
                    }),
                    a.jsx("li", {
                      ref: f,
                      onClick: (v) => {
                        w(v, 4);
                      },
                      children: n == null ? void 0 : n.option4,
                    }),
                  ],
                }),
                !o &&
                  a.jsxs("div", {
                    className: "timer",
                    children: ["Time remaining: ", h, " seconds"],
                  }),
                a.jsx("div", { className: "answer-status", children: g }),
                a.jsx("button", { onClick: j, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Pt.length, " questions"],
                }),
              ],
            }),
      ],
    });
  };
function em() {
  return a.jsxs(Eh, {
    children: [
      a.jsx(Rh, {}),
      a.jsxs(vh, {
        children: [
          a.jsx(Te, { path: "/", element: a.jsx(Mh, {}) }),
          a.jsx(Te, { path: "/abouts", element: a.jsx(Hh, {}) }),
          a.jsx(Te, { path: "/seb", element: a.jsx(Qh, {}) }),
          a.jsx(Te, { path: "/quiz1", element: a.jsx(Kh, {}) }),
          a.jsx(Te, { path: "/quiz2", element: a.jsx(Xh, {}) }),
          a.jsx(Te, { path: "/less2", element: a.jsx(Yh, {}) }),
          a.jsx(Te, { path: "/less3", element: a.jsx(Gh, {}) }),
          a.jsx(Te, { path: "/less21", element: a.jsx(Jh, {}) }),
          a.jsx(Te, { path: "/less22", element: a.jsx(Zh, {}) }),
          a.jsx(Te, { path: "/less23", element: a.jsx(bh, {}) }),
        ],
      }),
    ],
  });
}
wi.createRoot(document.getElementById("root")).render(
  a.jsx(Fu.StrictMode, { children: a.jsx(em, {}) })
);
