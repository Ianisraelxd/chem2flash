function ef(e, t) {
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
function tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Lu = { exports: {} },
  Co = {},
  Tu = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fr = Symbol.for("react.element"),
  nf = Symbol.for("react.portal"),
  rf = Symbol.for("react.fragment"),
  of = Symbol.for("react.strict_mode"),
  lf = Symbol.for("react.profiler"),
  sf = Symbol.for("react.provider"),
  uf = Symbol.for("react.context"),
  af = Symbol.for("react.forward_ref"),
  cf = Symbol.for("react.suspense"),
  ff = Symbol.for("react.memo"),
  df = Symbol.for("react.lazy"),
  ds = Symbol.iterator;
function pf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ds && e[ds]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pu = {
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
    (this.updater = n || Pu);
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
    (this.updater = n || Pu);
}
var gl = (vl.prototype = new Ou());
gl.constructor = vl;
Ru(gl, xn.prototype);
gl.isPureReactComponent = !0;
var ps = Array.isArray,
  Iu = Object.prototype.hasOwnProperty,
  yl = { current: null },
  Du = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mu(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Iu.call(t, r) && !Du.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), f = 0; f < s; f++) u[f] = arguments[f + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: fr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: yl.current,
  };
}
function hf(e, t) {
  return {
    $$typeof: fr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function mf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hs = /\/+/g;
function Ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? mf("" + e.key)
    : t.toString(36);
}
function Ar(e, t, n, r, o) {
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
          case fr:
          case nf:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Ho(l, 0) : r),
      ps(o)
        ? ((n = ""),
          e != null && (n = e.replace(hs, "$&/") + "/"),
          Ar(o, t, n, "", function (f) {
            return f;
          }))
        : o != null &&
          (wl(o) &&
            (o = hf(
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
      var u = r + Ho(i, s);
      l += Ar(i, t, n, u, o);
    }
  else if (((u = pf(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Ho(i, s++)), (l += Ar(i, t, n, u, o));
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
    Ar(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function vf(e) {
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
  Fr = { transition: null },
  gf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Fr,
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
O.Fragment = rf;
O.Profiler = lf;
O.PureComponent = vl;
O.StrictMode = of;
O.Suspense = cf;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gf;
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
      Iu.call(t, u) &&
        !Du.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var f = 0; f < u; f++) s[f] = arguments[f + 2];
    r.children = s;
  }
  return { $$typeof: fr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: uf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sf, _context: e }),
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
  return { $$typeof: af, render: e };
};
O.isValidElement = wl;
O.lazy = function (e) {
  return { $$typeof: df, _payload: { _status: -1, _result: e }, _init: vf };
};
O.memo = function (e, t) {
  return { $$typeof: ff, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
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
Tu.exports = O;
var y = Tu.exports;
const Au = tf(y),
  yf = ef({ __proto__: null, default: Au }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf = y,
  xf = Symbol.for("react.element"),
  Sf = Symbol.for("react.fragment"),
  kf = Object.prototype.hasOwnProperty,
  Cf = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fu(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) kf.call(t, r) && !Ef.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: xf,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Cf.current,
  };
}
Co.Fragment = Sf;
Co.jsx = Fu;
Co.jsxs = Fu;
Lu.exports = Co;
var a = Lu.exports,
  wi = {},
  Bu = { exports: {} },
  Se = {},
  qu = { exports: {} },
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
  function t(T, P) {
    var z = T.length;
    T.push(P);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        J = T[Q];
      if (0 < o(J, P)) (T[Q] = P), (T[z] = J), (z = Q);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var P = T[0],
      z = T.pop();
    if (z !== P) {
      T[0] = z;
      e: for (var Q = 0, J = T.length, yr = J >>> 1; Q < yr; ) {
        var kt = 2 * (Q + 1) - 1,
          $o = T[kt],
          Ct = kt + 1,
          wr = T[Ct];
        if (0 > o($o, z))
          Ct < J && 0 > o(wr, $o)
            ? ((T[Q] = wr), (T[Ct] = z), (Q = Ct))
            : ((T[Q] = $o), (T[kt] = z), (Q = kt));
        else if (Ct < J && 0 > o(wr, z)) (T[Q] = wr), (T[Ct] = z), (Q = Ct);
        else break e;
      }
    }
    return P;
  }
  function o(T, P) {
    var z = T.sortIndex - P.sortIndex;
    return z !== 0 ? z : T.id - P.id;
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
    f = [],
    h = 1,
    m = null,
    g = 3,
    x = !1,
    S = !1,
    k = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(T) {
    for (var P = n(f); P !== null; ) {
      if (P.callback === null) r(f);
      else if (P.startTime <= T)
        r(f), (P.sortIndex = P.expirationTime), t(u, P);
      else break;
      P = n(f);
    }
  }
  function w(T) {
    if (((k = !1), d(T), !S))
      if (n(u) !== null) (S = !0), Wo(j);
      else {
        var P = n(f);
        P !== null && Vo(w, P.startTime - T);
      }
  }
  function j(T, P) {
    (S = !1), k && ((k = !1), p(N), (N = -1)), (x = !0);
    var z = g;
    try {
      for (
        d(P), m = n(u);
        m !== null && (!(m.expirationTime > P) || (T && !ve()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (g = m.priorityLevel);
          var J = Q(m.expirationTime <= P);
          (P = e.unstable_now()),
            typeof J == "function" ? (m.callback = J) : m === n(u) && r(u),
            d(P);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var yr = !0;
      else {
        var kt = n(f);
        kt !== null && Vo(w, kt.startTime - P), (yr = !1);
      }
      return yr;
    } finally {
      (m = null), (g = z), (x = !1);
    }
  }
  var _ = !1,
    v = null,
    N = -1,
    I = 5,
    R = -1;
  function ve() {
    return !(e.unstable_now() - R < I);
  }
  function Cn() {
    if (v !== null) {
      var T = e.unstable_now();
      R = T;
      var P = !0;
      try {
        P = v(!0, T);
      } finally {
        P ? En() : ((_ = !1), (v = null));
      }
    } else _ = !1;
  }
  var En;
  if (typeof c == "function")
    En = function () {
      c(Cn);
    };
  else if (typeof MessageChannel < "u") {
    var fs = new MessageChannel(),
      bc = fs.port2;
    (fs.port1.onmessage = Cn),
      (En = function () {
        bc.postMessage(null);
      });
  } else
    En = function () {
      E(Cn, 0);
    };
  function Wo(T) {
    (v = T), _ || ((_ = !0), En());
  }
  function Vo(T, P) {
    N = E(function () {
      T(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || x || ((S = !0), Wo(j));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = g;
      }
      var z = g;
      g = P;
      try {
        return T();
      } finally {
        g = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, P) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var z = g;
      g = T;
      try {
        return P();
      } finally {
        g = z;
      }
    }),
    (e.unstable_scheduleCallback = function (T, P, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        T)
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
        (T = {
          id: h++,
          callback: P,
          priorityLevel: T,
          startTime: z,
          expirationTime: J,
          sortIndex: -1,
        }),
        z > Q
          ? ((T.sortIndex = z),
            t(f, T),
            n(u) === null &&
              T === n(f) &&
              (k ? (p(N), (N = -1)) : (k = !0), Vo(w, z - Q)))
          : ((T.sortIndex = J), t(u, T), S || x || ((S = !0), Wo(j))),
        T
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (T) {
      var P = g;
      return function () {
        var z = g;
        g = P;
        try {
          return T.apply(this, arguments);
        } finally {
          g = z;
        }
      };
    });
})(Uu);
qu.exports = Uu;
var jf = qu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wu = y,
  xe = jf;
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
var Vu = new Set(),
  Qn = {};
function Wt(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) Vu.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xi = Object.prototype.hasOwnProperty,
  Nf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ms = {},
  vs = {};
function _f(e) {
  return xi.call(vs, e)
    ? !0
    : xi.call(ms, e)
    ? !1
    : Nf.test(e)
    ? (vs[e] = !0)
    : ((ms[e] = !0), !1);
}
function Lf(e, t, n, r) {
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
function Tf(e, t, n, r) {
  if (t === null || typeof t > "u" || Lf(e, t, n, r)) return !0;
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
    (Tf(t, n, o, r) && (n = null),
    r || o === null
      ? _f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ze = Wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sr = Symbol.for("react.element"),
  Gt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  Cl = Symbol.for("react.strict_mode"),
  Si = Symbol.for("react.profiler"),
  $u = Symbol.for("react.provider"),
  Hu = Symbol.for("react.context"),
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
var V = Object.assign,
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
var Go = !1;
function Ko(e, t) {
  if (!e || Go) return "";
  Go = !0;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var o = f.stack.split(`
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
    (Go = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function Pf(e) {
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
      return (e = Ko(e.type, !1)), e;
    case 11:
      return (e = Ko(e.type.render, !1)), e;
    case 1:
      return (e = Ko(e.type, !0)), e;
    default:
      return "";
  }
}
function Ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Gt:
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
      case Hu:
        return (e.displayName || "Context") + ".Consumer";
      case $u:
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
function Rf(e) {
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
function Gu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zf(e) {
  var t = Gu(e) ? "checked" : "value",
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
  e._valueTracker || (e._valueTracker = zf(e));
}
function Ku(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yr(e) {
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
  return V({}, t, {
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
function Yu(e, t) {
  (t = t.checked), t != null && kl(e, "checked", t, !1);
}
function Ni(e, t) {
  Yu(e, t);
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
    ? _i(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _i(e, t.type, vt(t.defaultValue)),
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
function _i(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
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
function Li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return V({}, t, {
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
      if (In(n)) {
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
function Ti(e, t) {
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
function Gn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
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
  Of = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function (e) {
  Of.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]);
  });
});
function bu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
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
var If = V(
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
function Pi(e, t) {
  if (t) {
    if (If[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    t && ((t = Lo(t)), Oi(e.stateNode, e.type, t));
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
var Yo = !1;
function ia(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return ra(e, t, n);
  } finally {
    (Yo = !1), (sn !== null || un !== null) && (oa(), na());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Lo(n);
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
var Ii = !1;
if (Ke)
  try {
    var Nn = {};
    Object.defineProperty(Nn, "passive", {
      get: function () {
        Ii = !0;
      },
    }),
      window.addEventListener("test", Nn, Nn),
      window.removeEventListener("test", Nn, Nn);
  } catch {
    Ii = !1;
  }
function Df(e, t, n, r, o, i, l, s, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var Fn = !1,
  Xr = null,
  Jr = !1,
  Di = null,
  Mf = {
    onError: function (e) {
      (Fn = !0), (Xr = e);
    },
  };
function Af(e, t, n, r, o, i, l, s, u) {
  (Fn = !1), (Xr = null), Df.apply(Mf, arguments);
}
function Ff(e, t, n, r, o, i, l, s, u) {
  if ((Af.apply(this, arguments), Fn)) {
    if (Fn) {
      var f = Xr;
      (Fn = !1), (Xr = null);
    } else throw Error(C(198));
    Jr || ((Jr = !0), (Di = f));
  }
}
function Vt(e) {
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
  if (Vt(e) !== e) throw Error(C(188));
}
function Bf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(C(188));
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
  return (e = Bf(e)), e !== null ? ua(e) : null;
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
  qf = xe.unstable_shouldYield,
  Uf = xe.unstable_requestPaint,
  G = xe.unstable_now,
  Wf = xe.unstable_getCurrentPriorityLevel,
  _l = xe.unstable_ImmediatePriority,
  ca = xe.unstable_UserBlockingPriority,
  Zr = xe.unstable_NormalPriority,
  Vf = xe.unstable_LowPriority,
  fa = xe.unstable_IdlePriority,
  Eo = null,
  Ue = null;
function $f(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : Gf,
  Hf = Math.log,
  Qf = Math.LN2;
function Gf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hf(e) / Qf) | 0)) | 0;
}
var Er = 64,
  jr = 4194304;
function Dn(e) {
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
    s !== 0 ? (r = Dn(s)) : ((i &= l), i !== 0 && (r = Dn(i)));
  } else (l = n & ~o), l !== 0 ? (r = Dn(l)) : i !== 0 && (r = Dn(i));
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
function Kf(e, t) {
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
function Yf(e, t) {
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
      ? (!(s & n) || s & r) && (o[l] = Kf(s, t))
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
function da() {
  var e = Er;
  return (Er <<= 1), !(Er & 4194240) && (Er = 64), e;
}
function Xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - De(t)),
    (e[t] = n);
}
function Xf(e, t) {
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
function Ll(e, t) {
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
  Tl,
  ma,
  va,
  ga,
  Ai = !1,
  Nr = [],
  st = null,
  ut = null,
  at = null,
  Yn = new Map(),
  Xn = new Map(),
  nt = [],
  Jf =
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
      Yn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function _n(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = hr(t)), t !== null && Tl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Zf(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (st = _n(st, e, t, n, r, o)), !0;
    case "dragenter":
      return (ut = _n(ut, e, t, n, r, o)), !0;
    case "mouseover":
      return (at = _n(at, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Yn.set(i, _n(Yn.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Xn.set(i, _n(Xn.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function ya(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Vt(t);
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
function Br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zi = r), n.target.dispatchEvent(r), (zi = null);
    } else return (t = hr(n)), t !== null && Tl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ns(e, t, n) {
  Br(e) && n.delete(t);
}
function bf() {
  (Ai = !1),
    st !== null && Br(st) && (st = null),
    ut !== null && Br(ut) && (ut = null),
    at !== null && Br(at) && (at = null),
    Yn.forEach(Ns),
    Xn.forEach(Ns);
}
function Ln(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ai ||
      ((Ai = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, bf)));
}
function Jn(e) {
  function t(o) {
    return Ln(o, e);
  }
  if (0 < Nr.length) {
    Ln(Nr[0], e);
    for (var n = 1; n < Nr.length; n++) {
      var r = Nr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    st !== null && Ln(st, e),
      ut !== null && Ln(ut, e),
      at !== null && Ln(at, e),
      Yn.forEach(t),
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
function ed(e, t, n, r) {
  var o = M,
    i = an.transition;
  an.transition = null;
  try {
    (M = 1), Pl(e, t, n, r);
  } finally {
    (M = o), (an.transition = i);
  }
}
function td(e, t, n, r) {
  var o = M,
    i = an.transition;
  an.transition = null;
  try {
    (M = 4), Pl(e, t, n, r);
  } finally {
    (M = o), (an.transition = i);
  }
}
function Pl(e, t, n, r) {
  if (eo) {
    var o = Fi(e, t, n, r);
    if (o === null) li(e, t, r, to, n), js(e, r);
    else if (Zf(o, e, t, n, r)) r.stopPropagation();
    else if ((js(e, r), t & 4 && -1 < Jf.indexOf(e))) {
      for (; o !== null; ) {
        var i = hr(o);
        if (
          (i !== null && ha(i),
          (i = Fi(e, t, n, r)),
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
function Fi(e, t, n, r) {
  if (((to = null), (e = Nl(r)), (e = zt(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
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
      switch (Wf()) {
        case _l:
          return 1;
        case ca:
          return 4;
        case Zr:
        case Vf:
          return 16;
        case fa:
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
  qr = null;
function xa() {
  if (qr) return qr;
  var e,
    t = Rl,
    n = t.length,
    r,
    o = "value" in ot ? ot.value : ot.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (qr = o.slice(e, 1 < r ? 1 - r : void 0));
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
function _r() {
  return !0;
}
function _s() {
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
        ? _r
        : _s),
      (this.isPropagationStopped = _s),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _r));
      },
      persist: function () {},
      isPersistent: _r,
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
  pr = V({}, Sn, { view: 0, detail: 0 }),
  nd = ke(pr),
  Jo,
  Zo,
  Tn,
  jo = V({}, pr, {
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
        : (e !== Tn &&
            (Tn && e.type === "mousemove"
              ? ((Jo = e.screenX - Tn.screenX), (Zo = e.screenY - Tn.screenY))
              : (Zo = Jo = 0),
            (Tn = e)),
          Jo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zo;
    },
  }),
  Ls = ke(jo),
  rd = V({}, jo, { dataTransfer: 0 }),
  od = ke(rd),
  id = V({}, pr, { relatedTarget: 0 }),
  bo = ke(id),
  ld = V({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sd = ke(ld),
  ud = V({}, Sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ad = ke(ud),
  cd = V({}, Sn, { data: 0 }),
  Ts = ke(cd),
  fd = {
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
  dd = {
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
  pd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pd[e]) ? !!t[e] : !1;
}
function Ol() {
  return hd;
}
var md = V({}, pr, {
    key: function (e) {
      if (e.key) {
        var t = fd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dd[e.keyCode] || "Unidentified"
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
  vd = ke(md),
  gd = V({}, jo, {
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
  Ps = ke(gd),
  yd = V({}, pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ol,
  }),
  wd = ke(yd),
  xd = V({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sd = ke(xd),
  kd = V({}, jo, {
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
  Cd = ke(kd),
  Ed = [9, 13, 27, 32],
  Il = Ke && "CompositionEvent" in window,
  Bn = null;
Ke && "documentMode" in document && (Bn = document.documentMode);
var jd = Ke && "TextEvent" in window && !Bn,
  Sa = Ke && (!Il || (Bn && 8 < Bn && 11 >= Bn)),
  Rs = " ",
  zs = !1;
function ka(e, t) {
  switch (e) {
    case "keyup":
      return Ed.indexOf(t.keyCode) !== -1;
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
var Yt = !1;
function Nd(e, t) {
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
function _d(e, t) {
  if (Yt)
    return e === "compositionend" || (!Il && ka(e, t))
      ? ((e = xa()), (qr = Rl = ot = null), (Yt = !1), e)
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
var Ld = {
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
  return t === "input" ? !!Ld[e.type] : t === "textarea";
}
function Ea(e, t, n, r) {
  ta(r),
    (t = no(t, "onChange")),
    0 < t.length &&
      ((n = new zl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qn = null,
  Zn = null;
function Td(e) {
  Da(e, 0);
}
function No(e) {
  var t = Zt(e);
  if (Ku(t)) return e;
}
function Pd(e, t) {
  if (e === "change") return t;
}
var ja = !1;
if (Ke) {
  var ei;
  if (Ke) {
    var ti = "oninput" in document;
    if (!ti) {
      var Is = document.createElement("div");
      Is.setAttribute("oninput", "return;"),
        (ti = typeof Is.oninput == "function");
    }
    ei = ti;
  } else ei = !1;
  ja = ei && (!document.documentMode || 9 < document.documentMode);
}
function Ds() {
  qn && (qn.detachEvent("onpropertychange", Na), (Zn = qn = null));
}
function Na(e) {
  if (e.propertyName === "value" && No(Zn)) {
    var t = [];
    Ea(t, Zn, e, Nl(e)), ia(Td, t);
  }
}
function Rd(e, t, n) {
  e === "focusin"
    ? (Ds(), (qn = t), (Zn = n), qn.attachEvent("onpropertychange", Na))
    : e === "focusout" && Ds();
}
function zd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return No(Zn);
}
function Od(e, t) {
  if (e === "click") return No(t);
}
function Id(e, t) {
  if (e === "input" || e === "change") return No(t);
}
function Dd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ae = typeof Object.is == "function" ? Object.is : Dd;
function bn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!xi.call(t, o) || !Ae(e[o], t[o])) return !1;
  }
  return !0;
}
function Ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function As(e, t) {
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
function _a(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _a(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function La() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function Dl(e) {
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
function Md(e) {
  var t = La(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _a(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Dl(n)) {
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
          (o = As(n, i));
        var l = As(n, r);
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
var Ad = Ke && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  Bi = null,
  Un = null,
  qi = !1;
function Fs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qi ||
    Xt == null ||
    Xt !== Yr(r) ||
    ((r = Xt),
    "selectionStart" in r && Dl(r)
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
      (r = no(Bi, "onSelect")),
      0 < r.length &&
        ((t = new zl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
function Lr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jt = {
    animationend: Lr("Animation", "AnimationEnd"),
    animationiteration: Lr("Animation", "AnimationIteration"),
    animationstart: Lr("Animation", "AnimationStart"),
    transitionend: Lr("Transition", "TransitionEnd"),
  },
  ni = {},
  Ta = {};
Ke &&
  ((Ta = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jt.animationend.animation,
    delete Jt.animationiteration.animation,
    delete Jt.animationstart.animation),
  "TransitionEvent" in window || delete Jt.transitionend.transition);
function _o(e) {
  if (ni[e]) return ni[e];
  if (!Jt[e]) return e;
  var t = Jt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ta) return (ni[e] = t[n]);
  return e;
}
var Pa = _o("animationend"),
  Ra = _o("animationiteration"),
  za = _o("animationstart"),
  Oa = _o("transitionend"),
  Ia = new Map(),
  Bs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yt(e, t) {
  Ia.set(e, t), Wt(t, [e]);
}
for (var ri = 0; ri < Bs.length; ri++) {
  var oi = Bs[ri],
    Fd = oi.toLowerCase(),
    Bd = oi[0].toUpperCase() + oi.slice(1);
  yt(Fd, "on" + Bd);
}
yt(Pa, "onAnimationEnd");
yt(Ra, "onAnimationIteration");
yt(za, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(Oa, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
Wt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function qs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ff(r, t, void 0, e), (e.currentTarget = null);
}
function Da(e, t) {
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
            f = s.currentTarget;
          if (((s = s.listener), u !== i && o.isPropagationStopped())) break e;
          qs(o, s, f), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (f = s.currentTarget),
            (s = s.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          qs(o, s, f), (i = u);
        }
    }
  }
  if (Jr) throw ((e = Di), (Jr = !1), (Di = null), e);
}
function F(e, t) {
  var n = t[Hi];
  n === void 0 && (n = t[Hi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ma(t, e, 2, !1), n.add(r));
}
function ii(e, t, n) {
  var r = 0;
  t && (r |= 4), Ma(n, e, r, t);
}
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Tr]) {
    (e[Tr] = !0),
      Vu.forEach(function (n) {
        n !== "selectionchange" && (qd.has(n) || ii(n, !1, e), ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || ((t[Tr] = !0), ii("selectionchange", !1, t));
  }
}
function Ma(e, t, n, r) {
  switch (wa(t)) {
    case 1:
      var o = ed;
      break;
    case 4:
      o = td;
      break;
    default:
      o = Pl;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ii ||
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
    var f = i,
      h = Nl(n),
      m = [];
    e: {
      var g = Ia.get(e);
      if (g !== void 0) {
        var x = zl,
          S = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = vd;
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
            x = Ls;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = od;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = wd;
            break;
          case Pa:
          case Ra:
          case za:
            x = sd;
            break;
          case Oa:
            x = Sd;
            break;
          case "scroll":
            x = nd;
            break;
          case "wheel":
            x = Cd;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = ad;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ps;
        }
        var k = (t & 4) !== 0,
          E = !k && e === "scroll",
          p = k ? (g !== null ? g + "Capture" : null) : g;
        k = [];
        for (var c = f, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (
            (d.tag === 5 &&
              w !== null &&
              ((d = w),
              p !== null && ((w = Kn(c, p)), w != null && k.push(tr(c, w, d)))),
            E)
          )
            break;
          c = c.return;
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
            (zt(S) || S[Ye]))
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
              (x = f),
              (S = S ? zt(S) : null),
              S !== null &&
                ((E = Vt(S)), S !== E || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((x = null), (S = f)),
          x !== S)
        ) {
          if (
            ((k = Ls),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Ps),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (E = x == null ? g : Zt(x)),
            (d = S == null ? g : Zt(S)),
            (g = new k(w, c + "leave", x, n, h)),
            (g.target = E),
            (g.relatedTarget = d),
            (w = null),
            zt(h) === f &&
              ((k = new k(p, c + "enter", S, n, h)),
              (k.target = d),
              (k.relatedTarget = E),
              (w = k)),
            (E = w),
            x && S)
          )
            t: {
              for (k = x, p = S, c = 0, d = k; d; d = Qt(d)) c++;
              for (d = 0, w = p; w; w = Qt(w)) d++;
              for (; 0 < c - d; ) (k = Qt(k)), c--;
              for (; 0 < d - c; ) (p = Qt(p)), d--;
              for (; c--; ) {
                if (k === p || (p !== null && k === p.alternate)) break t;
                (k = Qt(k)), (p = Qt(p));
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
          ((g = f ? Zt(f) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var j = Pd;
        else if (Os(g))
          if (ja) j = Id;
          else {
            j = zd;
            var _ = Rd;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (j = Od);
        if (j && (j = j(e, f))) {
          Ea(m, j, n, h);
          break e;
        }
        _ && _(e, g, f),
          e === "focusout" &&
            (_ = g._wrapperState) &&
            _.controlled &&
            g.type === "number" &&
            _i(g, "number", g.value);
      }
      switch (((_ = f ? Zt(f) : window), e)) {
        case "focusin":
          (Os(_) || _.contentEditable === "true") &&
            ((Xt = _), (Bi = f), (Un = null));
          break;
        case "focusout":
          Un = Bi = Xt = null;
          break;
        case "mousedown":
          qi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qi = !1), Fs(m, n, h);
          break;
        case "selectionchange":
          if (Ad) break;
        case "keydown":
        case "keyup":
          Fs(m, n, h);
      }
      var v;
      if (Il)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Yt
          ? ka(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Sa &&
          n.locale !== "ko" &&
          (Yt || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Yt && (v = xa())
            : ((ot = h),
              (Rl = "value" in ot ? ot.value : ot.textContent),
              (Yt = !0))),
        (_ = no(f, N)),
        0 < _.length &&
          ((N = new Ts(N, e, null, n, h)),
          m.push({ event: N, listeners: _ }),
          v ? (N.data = v) : ((v = Ca(n)), v !== null && (N.data = v)))),
        (v = jd ? Nd(e, n) : _d(e, n)) &&
          ((f = no(f, "onBeforeInput")),
          0 < f.length &&
            ((h = new Ts("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: f }),
            (h.data = v)));
    }
    Da(m, t);
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
      (i = Kn(e, n)),
      i != null && r.unshift(tr(e, i, o)),
      (i = Kn(e, t)),
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
      f = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      f !== null &&
      ((s = f),
      o
        ? ((u = Kn(n, i)), u != null && l.unshift(tr(n, u, s)))
        : o || ((u = Kn(n, i)), u != null && l.push(tr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ud = /\r\n?/g,
  Wd = /\u0000|\uFFFD/g;
function Ws(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ud,
      `
`
    )
    .replace(Wd, "");
}
function Pr(e, t, n) {
  if (((t = Ws(t)), Ws(e) !== t && n)) throw Error(C(425));
}
function ro() {}
var Ui = null,
  Wi = null;
function Vi(e, t) {
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
var $i = typeof setTimeout == "function" ? setTimeout : void 0,
  Vd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Vs = typeof Promise == "function" ? Promise : void 0,
  $d =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Vs < "u"
      ? function (e) {
          return Vs.resolve(null).then(e).catch(Hd);
        }
      : $i;
function Hd(e) {
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
function $s(e) {
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
  qe = "__reactFiber$" + kn,
  nr = "__reactProps$" + kn,
  Ye = "__reactContainer$" + kn,
  Hi = "__reactEvents$" + kn,
  Qd = "__reactListeners$" + kn,
  Gd = "__reactHandles$" + kn;
function zt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $s(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = $s(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hr(e) {
  return (
    (e = e[qe] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Lo(e) {
  return e[nr] || null;
}
var Qi = [],
  bt = -1;
function wt(e) {
  return { current: e };
}
function B(e) {
  0 > bt || ((e.current = Qi[bt]), (Qi[bt] = null), bt--);
}
function A(e, t) {
  bt++, (Qi[bt] = e.current), (e.current = t);
}
var gt = {},
  le = wt(gt),
  pe = wt(!1),
  At = gt;
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
  B(pe), B(le);
}
function Hs(e, t, n) {
  if (le.current !== gt) throw Error(C(168));
  A(le, t), A(pe, n);
}
function Aa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, Rf(e) || "Unknown", o));
  return V({}, n, r);
}
function io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (At = le.current),
    A(le, e),
    A(pe, pe.current),
    !0
  );
}
function Qs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Aa(e, t, At)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(pe),
      B(le),
      A(le, e))
    : B(pe),
    A(pe, n);
}
var $e = null,
  To = !1,
  ui = !1;
function Fa(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function Kd(e) {
  (To = !0), Fa(e);
}
function xt() {
  if (!ui && $e !== null) {
    ui = !0;
    var e = 0,
      t = M;
    try {
      var n = $e;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (To = !1);
    } catch (o) {
      throw ($e !== null && ($e = $e.slice(e + 1)), aa(_l, xt), o);
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
  Ft = null,
  He = 1,
  Qe = "";
function Pt(e, t) {
  (en[tn++] = so), (en[tn++] = lo), (lo = e), (so = t);
}
function Ba(e, t, n) {
  (Ce[Ee++] = He), (Ce[Ee++] = Qe), (Ce[Ee++] = Ft), (Ft = e);
  var r = He;
  e = Qe;
  var o = 32 - De(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - De(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (He = (1 << (32 - De(t) + o)) | (n << o) | r),
      (Qe = i + e);
  } else (He = (1 << i) | (n << o) | r), (Qe = e);
}
function Ml(e) {
  e.return !== null && (Pt(e, 1), Ba(e, 1, 0));
}
function Al(e) {
  for (; e === lo; )
    (lo = en[--tn]), (en[tn] = null), (so = en[--tn]), (en[tn] = null);
  for (; e === Ft; )
    (Ft = Ce[--Ee]),
      (Ce[Ee] = null),
      (Qe = Ce[--Ee]),
      (Ce[Ee] = null),
      (He = Ce[--Ee]),
      (Ce[Ee] = null);
}
var we = null,
  ye = null,
  q = !1,
  Ie = null;
function qa(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Gs(e, t) {
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
          ? ((n = Ft !== null ? { id: He, overflow: Qe } : null),
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
function Gi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ki(e) {
  if (q) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Gs(e, t)) {
        if (Gi(e)) throw Error(C(418));
        t = ct(n.nextSibling);
        var r = we;
        t && Gs(e, t)
          ? qa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (we = e));
      }
    } else {
      if (Gi(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (we = e);
    }
  }
}
function Ks(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Rr(e) {
  if (e !== we) return !1;
  if (!q) return Ks(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vi(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Gi(e)) throw (Ua(), Error(C(418)));
    for (; t; ) qa(e, t), (t = ct(t.nextSibling));
  }
  if ((Ks(e), e.tag === 13)) {
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
  (ye = we = null), (q = !1);
}
function Fl(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var Yd = Ze.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var uo = wt(null),
  ao = null,
  nn = null,
  Bl = null;
function ql() {
  Bl = nn = ao = null;
}
function Ul(e) {
  var t = uo.current;
  B(uo), (e._currentValue = t);
}
function Yi(e, t, n) {
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
    (Bl = nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Le(e) {
  var t = e._currentValue;
  if (Bl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nn === null)) {
      if (ao === null) throw Error(C(308));
      (nn = e), (ao.dependencies = { lanes: 0, firstContext: e });
    } else nn = nn.next = e;
  return t;
}
var Ot = null;
function Wl(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function Wa(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Wl(t)) : ((n.next = o.next), (o.next = n)),
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
function Vl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Va(e, t) {
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
function Ge(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Wl(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Wr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ll(e, n);
  }
}
function Ys(e, t) {
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
      f = u.next;
    (u.next = null), l === null ? (i = f) : (l.next = f), (l = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== l &&
        (s === null ? (h.firstBaseUpdate = f) : (s.next = f),
        (h.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var m = o.baseState;
    (l = 0), (h = f = u = null), (s = i);
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
              m = V({}, m, g);
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
          h === null ? ((f = h = x), (u = m)) : (h = h.next = x),
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
      (o.firstBaseUpdate = f),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (qt |= l), (e.lanes = l), (e.memoizedState = m);
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
var $a = new Wu.Component().refs;
function Xi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Po = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      o = pt(e),
      i = Ge(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ft(e, i, o)),
      t !== null && (Me(t, e, o, r), Wr(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      o = pt(e),
      i = Ge(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ft(e, i, o)),
      t !== null && (Me(t, e, o, r), Wr(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = pt(e),
      o = Ge(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = ft(e, o, r)),
      t !== null && (Me(t, e, r, n), Wr(t, e, r));
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
function Ha(e, t, n) {
  var r = !1,
    o = gt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Le(i))
      : ((o = he(t) ? At : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? pn(e, o) : gt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Po),
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
    t.state !== e && Po.enqueueReplaceState(t, t.state, null);
}
function Ji(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = $a), Vl(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Le(i))
    : ((i = he(t) ? At : le.current), (o.context = pn(e, i))),
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
      t !== o.state && Po.enqueueReplaceState(o, o.state, null),
      co(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Pn(e, t, n) {
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
            s === $a && (s = o.refs = {}),
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
  function t(p, c) {
    if (e) {
      var d = p.deletions;
      d === null ? ((p.deletions = [c]), (p.flags |= 16)) : d.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function o(p, c) {
    return (p = ht(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, c, d) {
    return (
      (p.index = d),
      e
        ? ((d = p.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((p.flags |= 2), c) : d)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, c, d, w) {
    return c === null || c.tag !== 6
      ? ((c = mi(d, p.mode, w)), (c.return = p), c)
      : ((c = o(c, d)), (c.return = p), c);
  }
  function u(p, c, d, w) {
    var j = d.type;
    return j === Kt
      ? h(p, c, d.props.children, w, d.key)
      : c !== null &&
        (c.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === et &&
            bs(j) === c.type))
      ? ((w = o(c, d.props)), (w.ref = Pn(p, c, d)), (w.return = p), w)
      : ((w = Kr(d.type, d.key, d.props, null, p.mode, w)),
        (w.ref = Pn(p, c, d)),
        (w.return = p),
        w);
  }
  function f(p, c, d, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = vi(d, p.mode, w)), (c.return = p), c)
      : ((c = o(c, d.children || [])), (c.return = p), c);
  }
  function h(p, c, d, w, j) {
    return c === null || c.tag !== 7
      ? ((c = Mt(d, p.mode, w, j)), (c.return = p), c)
      : ((c = o(c, d)), (c.return = p), c);
  }
  function m(p, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = mi("" + c, p.mode, d)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Sr:
          return (
            (d = Kr(c.type, c.key, c.props, null, p.mode, d)),
            (d.ref = Pn(p, null, c)),
            (d.return = p),
            d
          );
        case Gt:
          return (c = vi(c, p.mode, d)), (c.return = p), c;
        case et:
          var w = c._init;
          return m(p, w(c._payload), d);
      }
      if (In(c) || jn(c))
        return (c = Mt(c, p.mode, d, null)), (c.return = p), c;
      zr(p, c);
    }
    return null;
  }
  function g(p, c, d, w) {
    var j = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return j !== null ? null : s(p, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Sr:
          return d.key === j ? u(p, c, d, w) : null;
        case Gt:
          return d.key === j ? f(p, c, d, w) : null;
        case et:
          return (j = d._init), g(p, c, j(d._payload), w);
      }
      if (In(d) || jn(d)) return j !== null ? null : h(p, c, d, w, null);
      zr(p, d);
    }
    return null;
  }
  function x(p, c, d, w, j) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(d) || null), s(c, p, "" + w, j);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Sr:
          return (p = p.get(w.key === null ? d : w.key) || null), u(c, p, w, j);
        case Gt:
          return (p = p.get(w.key === null ? d : w.key) || null), f(c, p, w, j);
        case et:
          var _ = w._init;
          return x(p, c, d, _(w._payload), j);
      }
      if (In(w) || jn(w)) return (p = p.get(d) || null), h(c, p, w, j, null);
      zr(c, w);
    }
    return null;
  }
  function S(p, c, d, w) {
    for (
      var j = null, _ = null, v = c, N = (c = 0), I = null;
      v !== null && N < d.length;
      N++
    ) {
      v.index > N ? ((I = v), (v = null)) : (I = v.sibling);
      var R = g(p, v, d[N], w);
      if (R === null) {
        v === null && (v = I);
        break;
      }
      e && v && R.alternate === null && t(p, v),
        (c = i(R, c, N)),
        _ === null ? (j = R) : (_.sibling = R),
        (_ = R),
        (v = I);
    }
    if (N === d.length) return n(p, v), q && Pt(p, N), j;
    if (v === null) {
      for (; N < d.length; N++)
        (v = m(p, d[N], w)),
          v !== null &&
            ((c = i(v, c, N)), _ === null ? (j = v) : (_.sibling = v), (_ = v));
      return q && Pt(p, N), j;
    }
    for (v = r(p, v); N < d.length; N++)
      (I = x(v, p, N, d[N], w)),
        I !== null &&
          (e && I.alternate !== null && v.delete(I.key === null ? N : I.key),
          (c = i(I, c, N)),
          _ === null ? (j = I) : (_.sibling = I),
          (_ = I));
    return (
      e &&
        v.forEach(function (ve) {
          return t(p, ve);
        }),
      q && Pt(p, N),
      j
    );
  }
  function k(p, c, d, w) {
    var j = jn(d);
    if (typeof j != "function") throw Error(C(150));
    if (((d = j.call(d)), d == null)) throw Error(C(151));
    for (
      var _ = (j = null), v = c, N = (c = 0), I = null, R = d.next();
      v !== null && !R.done;
      N++, R = d.next()
    ) {
      v.index > N ? ((I = v), (v = null)) : (I = v.sibling);
      var ve = g(p, v, R.value, w);
      if (ve === null) {
        v === null && (v = I);
        break;
      }
      e && v && ve.alternate === null && t(p, v),
        (c = i(ve, c, N)),
        _ === null ? (j = ve) : (_.sibling = ve),
        (_ = ve),
        (v = I);
    }
    if (R.done) return n(p, v), q && Pt(p, N), j;
    if (v === null) {
      for (; !R.done; N++, R = d.next())
        (R = m(p, R.value, w)),
          R !== null &&
            ((c = i(R, c, N)), _ === null ? (j = R) : (_.sibling = R), (_ = R));
      return q && Pt(p, N), j;
    }
    for (v = r(p, v); !R.done; N++, R = d.next())
      (R = x(v, p, N, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && v.delete(R.key === null ? N : R.key),
          (c = i(R, c, N)),
          _ === null ? (j = R) : (_.sibling = R),
          (_ = R));
    return (
      e &&
        v.forEach(function (Cn) {
          return t(p, Cn);
        }),
      q && Pt(p, N),
      j
    );
  }
  function E(p, c, d, w) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Kt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Sr:
          e: {
            for (var j = d.key, _ = c; _ !== null; ) {
              if (_.key === j) {
                if (((j = d.type), j === Kt)) {
                  if (_.tag === 7) {
                    n(p, _.sibling),
                      (c = o(_, d.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  _.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === et &&
                    bs(j) === _.type)
                ) {
                  n(p, _.sibling),
                    (c = o(_, d.props)),
                    (c.ref = Pn(p, _, d)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, _);
                break;
              } else t(p, _);
              _ = _.sibling;
            }
            d.type === Kt
              ? ((c = Mt(d.props.children, p.mode, w, d.key)),
                (c.return = p),
                (p = c))
              : ((w = Kr(d.type, d.key, d.props, null, p.mode, w)),
                (w.ref = Pn(p, c, d)),
                (w.return = p),
                (p = w));
          }
          return l(p);
        case Gt:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(p, c.sibling),
                    (c = o(c, d.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = vi(d, p.mode, w)), (c.return = p), (p = c);
          }
          return l(p);
        case et:
          return (_ = d._init), E(p, c, _(d._payload), w);
      }
      if (In(d)) return S(p, c, d, w);
      if (jn(d)) return k(p, c, d, w);
      zr(p, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = o(c, d)), (c.return = p), (p = c))
          : (n(p, c), (c = mi(d, p.mode, w)), (c.return = p), (p = c)),
        l(p))
      : n(p, c);
  }
  return E;
}
var mn = Qa(!0),
  Ga = Qa(!1),
  mr = {},
  We = wt(mr),
  rr = wt(mr),
  or = wt(mr);
function It(e) {
  if (e === mr) throw Error(C(174));
  return e;
}
function $l(e, t) {
  switch ((A(or, t), A(rr, e), A(We, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ti(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ti(t, e));
  }
  B(We), A(We, t);
}
function vn() {
  B(We), B(rr), B(or);
}
function Ka(e) {
  It(or.current);
  var t = It(We.current),
    n = Ti(t, e.type);
  t !== n && (A(rr, e), A(We, n));
}
function Hl(e) {
  rr.current === e && (B(We), B(rr));
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
var Vr = Ze.ReactCurrentDispatcher,
  ci = Ze.ReactCurrentBatchConfig,
  Bt = 0,
  W = null,
  Y = null,
  Z = null,
  po = !1,
  Wn = !1,
  ir = 0,
  Xd = 0;
function re() {
  throw Error(C(321));
}
function Gl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function Kl(e, t, n, r, o, i) {
  if (
    ((Bt = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vr.current = e === null || e.memoizedState === null ? ep : tp),
    (e = n(r, o)),
    Wn)
  ) {
    i = 0;
    do {
      if (((Wn = !1), (ir = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (Z = Y = null),
        (t.updateQueue = null),
        (Vr.current = np),
        (e = n(r, o));
    } while (Wn);
  }
  if (
    ((Vr.current = ho),
    (t = Y !== null && Y.next !== null),
    (Bt = 0),
    (Z = Y = W = null),
    (po = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Yl() {
  var e = ir !== 0;
  return (ir = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (W.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Te() {
  if (Y === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? W.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(C(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (W.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fi(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = Y,
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
      f = i;
    do {
      var h = f.lane;
      if ((Bt & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var m = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        u === null ? ((s = u = m), (l = r)) : (u = u.next = m),
          (W.lanes |= h),
          (qt |= h);
      }
      f = f.next;
    } while (f !== null && f !== i);
    u === null ? (l = r) : (u.next = s),
      Ae(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (W.lanes |= i), (qt |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function di(e) {
  var t = Te(),
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
    Ae(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ya() {}
function Xa(e, t) {
  var n = W,
    r = Te(),
    o = t(),
    i = !Ae(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (de = !0)),
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
    Bt & 30 || Ja(n, t, o);
  }
  return o;
}
function Ja(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
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
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function tc(e) {
  var t = Xe(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function eu(e) {
  var t = Be();
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
    (e = e.dispatch = bd.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nc() {
  return Te().memoizedState;
}
function $r(e, t, n, r) {
  var o = Be();
  (W.flags |= e),
    (o.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ro(e, t, n, r) {
  var o = Te();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var l = Y.memoizedState;
    if (((i = l.destroy), r !== null && Gl(r, l.deps))) {
      o.memoizedState = sr(t, n, i, r);
      return;
    }
  }
  (W.flags |= e), (o.memoizedState = sr(1 | t, n, i, r));
}
function tu(e, t) {
  return $r(8390656, 8, e, t);
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
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uc(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ac(e, t, n) {
  return Bt & 21
    ? (Ae(n, t) || ((n = da()), (W.lanes |= n), (qt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Jd(e, t) {
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
  return Te().memoizedState;
}
function Zd(e, t, n) {
  var r = pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fc(e))
  )
    dc(t, n);
  else if (((n = Wa(e, t, n, r)), n !== null)) {
    var o = ue();
    Me(n, e, r, o), pc(n, t, r);
  }
}
function bd(e, t, n) {
  var r = pt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fc(e)) dc(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = s), Ae(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Wl(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wa(e, t, o, r)),
      n !== null && ((o = ue()), Me(n, e, r, o), pc(n, t, r));
  }
}
function fc(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function dc(e, t) {
  Wn = po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ll(e, n);
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
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Le,
    useEffect: tu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $r(4194308, 4, ic.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
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
        (e = e.dispatch = Zd.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: eu,
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = eu(!1),
        t = e[0];
      return (e = Jd.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        o = Be();
      if (q) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(C(349));
        Bt & 30 || Ja(r, t, n);
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
      var e = Be(),
        t = b.identifierPrefix;
      if (q) {
        var n = Qe,
          r = He;
        (n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Xd++), (t = ":" + t + "r" + n.toString(32) + ":");
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
    useReducer: fi,
    useRef: nc,
    useState: function () {
      return fi(lr);
    },
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      var t = Te();
      return ac(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(lr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Ya,
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
    useReducer: di,
    useRef: nc,
    useState: function () {
      return di(lr);
    },
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      var t = Te();
      return Y === null ? (t.memoizedState = e) : ac(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = di(lr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: Ya,
    useSyncExternalStore: Xa,
    useId: cc,
    unstable_isNewReconciler: !1,
  };
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Pf(r)), (r = r.return);
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
  (n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vo || ((vo = !0), (ul = r)), Zi(e, t);
    }),
    n
  );
}
function mc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3);
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
            (dt === null ? (dt = new Set([this])) : dt.add(this));
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
              : ((t = Ge(-1, 1)), (t.tag = 2), ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var op = Ze.ReactCurrentOwner,
  de = !1;
function se(e, t, n, r) {
  t.child = e === null ? Ga(t, null, n, r) : mn(t, e.child, n, r);
}
function iu(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    cn(t, o),
    (r = Kl(e, t, n, r, i, o)),
    (n = Yl()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Je(e, t, o))
      : (q && n && Ml(t), (t.flags |= 1), se(e, t, r, o), t.child)
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
      : ((e = Kr(n.type, null, r, t, t.mode, o)),
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
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (de = !0);
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
        A(on, ge),
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
          A(on, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        A(on, ge),
        (ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(on, ge),
      (ge |= r);
  return se(e, t, o, n), t.child;
}
function yc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bi(e, t, n, r, o) {
  var i = he(n) ? At : le.current;
  return (
    (i = pn(t, i)),
    cn(t, o),
    (n = Kl(e, t, n, r, i, o)),
    (r = Yl()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Je(e, t, o))
      : (q && r && Ml(t), (t.flags |= 1), se(e, t, n, o), t.child)
  );
}
function su(e, t, n, r, o) {
  if (he(n)) {
    var i = !0;
    io(t);
  } else i = !1;
  if ((cn(t, o), t.stateNode === null))
    Hr(e, t), Ha(t, n, r), Ji(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Le(f))
      : ((f = he(n) ? At : le.current), (f = pn(t, f)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== f) && Zs(t, l, r, f)),
      (tt = !1);
    var g = t.memoizedState;
    (l.state = g),
      co(t, r, l, o),
      (u = t.memoizedState),
      s !== r || g !== u || pe.current || tt
        ? (typeof h == "function" && (Xi(t, n, h, r), (u = t.memoizedState)),
          (s = tt || Js(t, n, s, r, g, u, f))
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
          (l.context = f),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Va(e, t),
      (s = t.memoizedProps),
      (f = t.type === t.elementType ? s : ze(t.type, s)),
      (l.props = f),
      (m = t.pendingProps),
      (g = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Le(u))
        : ((u = he(n) ? At : le.current), (u = pn(t, u)));
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
        (f = tt || Js(t, n, f, r, g, S, u) || !1)
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
        (r = f))
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
    ? Hs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hs(e, t.context, !1),
    $l(e, t.containerInfo);
}
function uu(e, t, n, r, o) {
  return hn(), Fl(o), (t.flags |= 256), se(e, t, n, r), t.child;
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
    A(U, o & 1),
    e === null)
  )
    return (
      Ki(t),
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
                : (i = Io(l, r, 0, null)),
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
    (t = Io({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Or(e, t, n, r) {
  return (
    r !== null && Fl(r),
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
        (r = Io({ mode: "visible", children: r.children }, o, 0, null)),
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
  if (((s = (l & e.childLanes) !== 0), de || s)) {
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
          ((i.retryLane = o), Xe(e, o), Me(r, e, o, -1));
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
      (q = !0),
      (Ie = null),
      e !== null &&
        ((Ce[Ee++] = He),
        (Ce[Ee++] = Qe),
        (Ce[Ee++] = Ft),
        (He = e.id),
        (Qe = e.overflow),
        (Ft = t)),
      (t = Zl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function au(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yi(e.return, t, n);
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
  if ((A(U, r), !(t.mode & 1))) t.memoizedState = null;
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
function Hr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (qt |= t.lanes),
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
      Ka(t);
      break;
    case 1:
      he(t.type) && io(t);
      break;
    case 4:
      $l(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      A(uo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xc(e, t, n)
          : (A(U, U.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      A(U, U.current & 1);
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
        A(U, U.current),
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
    (e = t.stateNode), It(We.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ji(e, o)), (r = ji(e, r)), (i = []);
        break;
      case "select":
        (o = V({}, o, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Li(e, o)), (r = Li(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ro);
    }
    Pi(n, r);
    var l;
    n = null;
    for (f in o)
      if (!r.hasOwnProperty(f) && o.hasOwnProperty(f) && o[f] != null)
        if (f === "style") {
          var s = o[f];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Qn.hasOwnProperty(f)
              ? i || (i = [])
              : (i = i || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (
        ((s = o != null ? o[f] : void 0),
        r.hasOwnProperty(f) && u !== s && (u != null || s != null))
      )
        if (f === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(f, n)), (n = u);
        else
          f === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(f, u))
            : f === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(f, "" + u)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (Qn.hasOwnProperty(f)
                ? (u != null && f === "onScroll" && F("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(f, u));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Ec = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!q)
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
  switch ((Al(t), t.tag)) {
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
        B(pe),
        B(le),
        Ql(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (fl(Ie), (Ie = null)))),
        rl(e, t),
        oe(t),
        null
      );
    case 5:
      Hl(t);
      var o = It(or.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return oe(t), null;
        }
        if (((e = It(We.current)), Rr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[qe] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mn.length; o++) F(Mn[o], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              ys(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              xs(r, i), F("invalid", r);
          }
          Pi(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Qn.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  F("scroll", r);
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
            (e[qe] = t),
            (e[nr] = r),
            kc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ri(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mn.length; o++) F(Mn[o], e);
                o = r;
                break;
              case "source":
                F("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (o = r);
                break;
              case "details":
                F("toggle", e), (o = r);
                break;
              case "input":
                ys(e, r), (o = ji(e, r)), F("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = V({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                xs(e, r), (o = Li(e, r)), F("invalid", e);
                break;
              default:
                o = r;
            }
            Pi(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? ea(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Zu(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Gn(e, u)
                    : typeof u == "number" && Gn(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qn.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && F("scroll", e)
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
        if (((n = It(or.current)), It(We.current), Rr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (i = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (B(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && ye !== null && t.mode & 1 && !(t.flags & 128))
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
            i[qe] = t;
          } else
            hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (i = !1);
        } else Ie !== null && (fl(Ie), (Ie = null)), (i = !0);
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
      if ((B(U), (i = t.memoizedState), i === null)) return oe(t), null;
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
                return A(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > yn &&
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
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !q)
            )
              return oe(t), null;
          } else
            2 * G() - i.renderingStartTime > yn &&
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
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = U.current),
          A(U, r ? (n & 1) | 2 : n & 1),
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
  switch ((Al(t), t.tag)) {
    case 1:
      return (
        he(t.type) && oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vn(),
        B(pe),
        B(le),
        Ql(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Hl(t), null;
    case 13:
      if ((B(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(U), null;
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
var Ir = !1,
  ie = !1,
  ap = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        $(e, t, r);
      }
    else n.current = null;
}
function ol(e, t, n) {
  try {
    n();
  } catch (r) {
    $(e, t, r);
  }
}
var cu = !1;
function cp(e, t) {
  if (((Ui = eo), (e = La()), Dl(e))) {
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
            f = 0,
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
                (g === n && ++f === o && (s = l),
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
  for (Wi = { focusedElem: e, selectionRange: n }, eo = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
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
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ze(t.type, k),
                      E
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
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
          $(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (S = cu), (cu = !1), S;
}
function Vn(e, t, n) {
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
        (delete t[qe], delete t[nr], delete t[Hi], delete t[Qd], delete t[Gd])),
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
function fu(e) {
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
  Oe = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; ) _c(e, t, n), (n = n.sibling);
}
function _c(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(Eo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || rn(n, t);
    case 6:
      var r = ee,
        o = Oe;
      (ee = null),
        be(e, t, n),
        (ee = r),
        (Oe = o),
        ee !== null &&
          (Oe
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Oe
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
        (o = Oe),
        (ee = n.stateNode.containerInfo),
        (Oe = !0),
        be(e, t, n),
        (ee = r),
        (Oe = o);
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
          $(n, t, s);
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
function du(e) {
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
              (ee = s.stateNode), (Oe = !1);
              break e;
            case 3:
              (ee = s.stateNode.containerInfo), (Oe = !0);
              break e;
            case 4:
              (ee = s.stateNode.containerInfo), (Oe = !0);
              break e;
          }
          s = s.return;
        }
        if (ee === null) throw Error(C(160));
        _c(i, l, o), (ee = null), (Oe = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (f) {
        $(o, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Lc(t, e), (t = t.sibling);
}
function Lc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), Fe(e), r & 4)) {
        try {
          Vn(3, e, e.return), zo(3, e);
        } catch (k) {
          $(e, e.return, k);
        }
        try {
          Vn(5, e, e.return);
        } catch (k) {
          $(e, e.return, k);
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
          Gn(o, "");
        } catch (k) {
          $(e, e.return, k);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Yu(o, i),
              Ri(s, l);
            var f = Ri(s, i);
            for (l = 0; l < u.length; l += 2) {
              var h = u[l],
                m = u[l + 1];
              h === "style"
                ? ea(o, m)
                : h === "dangerouslySetInnerHTML"
                ? Zu(o, m)
                : h === "children"
                ? Gn(o, m)
                : kl(o, h, m, f);
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
            $(e, e.return, k);
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
          $(e, e.return, k);
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
          $(e, e.return, k);
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
            (ts = G())),
        r & 4 && du(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (f = ie) || h), Pe(t, e), (ie = f)) : Pe(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !h && e.mode & 1)
        )
          for (L = e, h = e.child; h !== null; ) {
            for (m = L = h; L !== null; ) {
              switch (((g = L), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, g, g.return);
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
                      $(r, n, k);
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
              x !== null ? ((x.return = g), (L = x)) : hu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (o = m.stateNode),
                  f
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
                $(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = f ? "" : m.memoizedProps;
              } catch (k) {
                $(e, e.return, k);
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
      Pe(t, e), Fe(e), r & 4 && du(e);
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
          r.flags & 32 && (Gn(o, ""), (r.flags &= -33));
          var i = fu(e);
          sl(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = fu(e);
          ll(e, s, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      $(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fp(e, t, n) {
  (L = e), Tc(e);
}
function Tc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ir;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || ie;
        s = Ir;
        var f = ie;
        if (((Ir = l), (ie = u) && !f))
          for (L = o; L !== null; )
            (l = L),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? mu(o)
                : u !== null
                ? ((u.return = l), (L = u))
                : mu(o);
        for (; i !== null; ) (L = i), Tc(i), (i = i.sibling);
        (L = o), (Ir = s), (ie = f);
      }
      pu(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : pu(e);
  }
}
function pu(e) {
  for (; L !== null; ) {
    var t = L;
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
                      : ze(t.type, n.memoizedProps);
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
                var f = t.alternate;
                if (f !== null) {
                  var h = f.memoizedState;
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
        $(t, t.return, g);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function hu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function mu(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zo(4, t);
          } catch (u) {
            $(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              $(t, o, u);
            }
          }
          var i = t.return;
          try {
            il(t);
          } catch (u) {
            $(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            il(t);
          } catch (u) {
            $(t, l, u);
          }
      }
    } catch (u) {
      $(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (L = s);
      break;
    }
    L = t.return;
  }
}
var dp = Math.ceil,
  mo = Ze.ReactCurrentDispatcher,
  bl = Ze.ReactCurrentOwner,
  _e = Ze.ReactCurrentBatchConfig,
  D = 0,
  b = null,
  K = null,
  te = 0,
  ge = 0,
  on = wt(0),
  X = 0,
  ur = null,
  qt = 0,
  Oo = 0,
  es = 0,
  $n = null,
  fe = null,
  ts = 0,
  yn = 1 / 0,
  Ve = null,
  vo = !1,
  ul = null,
  dt = null,
  Dr = !1,
  it = null,
  go = 0,
  Hn = 0,
  al = null,
  Qr = -1,
  Gr = 0;
function ue() {
  return D & 6 ? G() : Qr !== -1 ? Qr : (Qr = G());
}
function pt(e) {
  return e.mode & 1
    ? D & 2 && te !== 0
      ? te & -te
      : Yd.transition !== null
      ? (Gr === 0 && (Gr = da()), Gr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wa(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Hn) throw ((Hn = 0), (al = null), Error(C(185)));
  dr(e, n, r),
    (!(D & 2) || e !== b) &&
      (e === b && (!(D & 2) && (Oo |= n), X === 4 && rt(e, te)),
      me(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((yn = G() + 500), To && xt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Yf(e, t);
  var r = br(e, e === b ? te : 0);
  if (r === 0)
    n !== null && Es(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Es(n), t === 1))
      e.tag === 0 ? Kd(vu.bind(null, e)) : Fa(vu.bind(null, e)),
        $d(function () {
          !(D & 6) && xt();
        }),
        (n = null);
    else {
      switch (pa(r)) {
        case 1:
          n = _l;
          break;
        case 4:
          n = ca;
          break;
        case 16:
          n = Zr;
          break;
        case 536870912:
          n = fa;
          break;
        default:
          n = Zr;
      }
      n = Ac(n, Pc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pc(e, t) {
  if (((Qr = -1), (Gr = 0), D & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (fn() && e.callbackNode !== n) return null;
  var r = br(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
  else {
    t = r;
    var o = D;
    D |= 2;
    var i = zc();
    (b !== e || te !== t) && ((Ve = null), (yn = G() + 500), Dt(e, t));
    do
      try {
        mp();
        break;
      } catch (s) {
        Rc(e, s);
      }
    while (!0);
    ql(),
      (mo.current = i),
      (D = o),
      K !== null ? (t = 0) : ((b = null), (te = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Mi(e)), o !== 0 && ((r = o), (t = cl(e, o)))), t === 1)
    )
      throw ((n = ur), Dt(e, 0), rt(e, r), me(e, G()), n);
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
        throw ((n = ur), Dt(e, 0), rt(e, r), me(e, G()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Rt(e, fe, Ve);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = ts + 500 - G()), 10 < t))
          ) {
            if (br(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = $i(Rt.bind(null, e, fe, Ve), t);
            break;
          }
          Rt(e, fe, Ve);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - De(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = G() - r),
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
                : 1960 * dp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $i(Rt.bind(null, e, fe, Ve), r);
            break;
          }
          Rt(e, fe, Ve);
          break;
        case 5:
          Rt(e, fe, Ve);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return me(e, G()), e.callbackNode === n ? Pc.bind(null, e) : null;
}
function cl(e, t) {
  var n = $n;
  return (
    e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256),
    (e = yo(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && fl(t)),
    e
  );
}
function fl(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
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
            if (!Ae(i(), o)) return !1;
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
  if (D & 6) throw Error(C(327));
  fn();
  var t = br(e, 0);
  if (!(t & 1)) return me(e, G()), null;
  var n = yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mi(e);
    r !== 0 && ((t = r), (n = cl(e, r)));
  }
  if (n === 1) throw ((n = ur), Dt(e, 0), rt(e, t), me(e, G()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rt(e, fe, Ve),
    me(e, G()),
    null
  );
}
function ns(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((yn = G() + 500), To && xt());
  }
}
function Ut(e) {
  it !== null && it.tag === 0 && !(D & 6) && fn();
  var t = D;
  D |= 1;
  var n = _e.transition,
    r = M;
  try {
    if (((_e.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (_e.transition = n), (D = t), !(D & 6) && xt();
  }
}
function rs() {
  (ge = on.current), B(on);
}
function Dt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((Al(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oo();
          break;
        case 3:
          vn(), B(pe), B(le), Ql();
          break;
        case 5:
          Hl(r);
          break;
        case 4:
          vn();
          break;
        case 13:
          B(U);
          break;
        case 19:
          B(U);
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
    (K = e = ht(e.current, null)),
    (te = ge = t),
    (X = 0),
    (ur = null),
    (es = Oo = qt = 0),
    (fe = $n = null),
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
    var n = K;
    try {
      if ((ql(), (Vr.current = ho), po)) {
        for (var r = W.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        po = !1;
      }
      if (
        ((Bt = 0),
        (Z = Y = W = null),
        (Wn = !1),
        (ir = 0),
        (bl.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (ur = t), (K = null);
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
          var f = u,
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
              x.mode & 1 && nu(i, f, t),
              (t = x),
              (u = f);
            var S = t.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              nu(i, f, t), os();
              break e;
            }
            u = Error(C(426));
          }
        } else if (q && s.mode & 1) {
          var E = ru(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              ou(E, l, s, i, t),
              Fl(gn(u, s));
            break e;
          }
        }
        (i = u = gn(u, s)),
          X !== 4 && (X = 2),
          $n === null ? ($n = [i]) : $n.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = hc(i, u, t);
              Ys(i, p);
              break e;
            case 1:
              s = u;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (dt === null || !dt.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = mc(i, s, t);
                Ys(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ic(n);
    } catch (j) {
      (t = j), K === n && n !== null && (K = n = n.return);
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
    b === null || (!(qt & 268435455) && !(Oo & 268435455)) || rt(b, te);
}
function yo(e, t) {
  var n = D;
  D |= 2;
  var r = zc();
  (b !== e || te !== t) && ((Ve = null), Dt(e, t));
  do
    try {
      hp();
      break;
    } catch (o) {
      Rc(e, o);
    }
  while (!0);
  if ((ql(), (D = n), (mo.current = r), K !== null)) throw Error(C(261));
  return (b = null), (te = 0), X;
}
function hp() {
  for (; K !== null; ) Oc(K);
}
function mp() {
  for (; K !== null && !qf(); ) Oc(K);
}
function Oc(e) {
  var t = Mc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ic(e) : (K = t),
    (bl.current = null);
}
function Ic(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = up(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = sp(n, t, ge)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Rt(e, t, n) {
  var r = M,
    o = _e.transition;
  try {
    (_e.transition = null), (M = 1), vp(e, t, n, r);
  } finally {
    (_e.transition = o), (M = r);
  }
  return null;
}
function vp(e, t, n, r) {
  do fn();
  while (it !== null);
  if (D & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Xf(e, i),
    e === b && ((K = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      Ac(Zr, function () {
        return fn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var l = M;
    M = 1;
    var s = D;
    (D |= 4),
      (bl.current = null),
      cp(e, n),
      Lc(n, e),
      Md(Wi),
      (eo = !!Ui),
      (Wi = Ui = null),
      (e.current = n),
      fp(n),
      Uf(),
      (D = s),
      (M = l),
      (_e.transition = i);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (it = e), (go = o)),
    (i = e.pendingLanes),
    i === 0 && (dt = null),
    $f(n.stateNode),
    me(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (vo) throw ((vo = !1), (e = ul), (ul = null), e);
  return (
    go & 1 && e.tag !== 0 && fn(),
    (i = e.pendingLanes),
    i & 1 ? (e === al ? Hn++ : ((Hn = 0), (al = e))) : (Hn = 0),
    xt(),
    null
  );
}
function fn() {
  if (it !== null) {
    var e = pa(go),
      t = _e.transition,
      n = M;
    try {
      if (((_e.transition = null), (M = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (go = 0), D & 6)) throw Error(C(331));
        var o = D;
        for (D |= 4, L = e.current; L !== null; ) {
          var i = L,
            l = i.child;
          if (L.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var f = s[u];
                for (L = f; L !== null; ) {
                  var h = L;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (L = m);
                  else
                    for (; L !== null; ) {
                      h = L;
                      var g = h.sibling,
                        x = h.return;
                      if ((jc(h), h === f)) {
                        L = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = x), (L = g);
                        break;
                      }
                      L = x;
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
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (L = l);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (L = p);
                break e;
              }
              L = i.return;
            }
        }
        var c = e.current;
        for (L = c; L !== null; ) {
          l = L;
          var d = l.child;
          if (l.subtreeFlags & 2064 && d !== null) (d.return = l), (L = d);
          else
            e: for (l = c; L !== null; ) {
              if (((s = L), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zo(9, s);
                  }
                } catch (j) {
                  $(s, s.return, j);
                }
              if (s === l) {
                L = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (L = w);
                break e;
              }
              L = s.return;
            }
        }
        if (
          ((D = o), xt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(Eo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (_e.transition = t);
    }
  }
  return !1;
}
function gu(e, t, n) {
  (t = gn(n, t)),
    (t = hc(e, t, 1)),
    (e = ft(e, t, 1)),
    (t = ue()),
    e !== null && (dr(e, 1, t), me(e, t));
}
function $(e, t, n) {
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
            (dt === null || !dt.has(r)))
        ) {
          (e = gn(n, e)),
            (e = mc(t, e, 1)),
            (t = ft(t, e, 1)),
            (e = ue()),
            t !== null && (dr(t, 1, e), me(t, e));
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
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > G() - ts)
        ? Dt(e, 0)
        : (es |= n)),
    me(e, t);
}
function Dc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Xe(e, t)), e !== null && (dr(e, t, n), me(e, n));
}
function yp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dc(e, n);
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
  r !== null && r.delete(t), Dc(e, n);
}
var Mc;
Mc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), lp(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), q && t.flags & 1048576 && Ba(t, so, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hr(e, t), (e = t.pendingProps);
      var o = pn(t, le.current);
      cn(t, n), (o = Kl(null, t, r, e, o, n));
      var i = Yl();
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
            Vl(t),
            (o.updater = Po),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ji(t, r, e, n),
            (t = el(null, t, r, !0, i, n)))
          : ((t.tag = 0), q && i && Ml(t), se(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hr(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Sp(r)),
          (e = ze(r, e)),
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
            t = lu(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ze(r, o)),
        bi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ze(r, o)),
        su(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((wc(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Va(e, t),
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
                q = !0,
                Ie = null,
                n = Ga(t, null, r, n),
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
        Ka(t),
        e === null && Ki(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Vi(r, o) ? (l = null) : i !== null && Vi(r, i) && (t.flags |= 32),
        yc(e, t),
        se(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ki(t), null;
    case 13:
      return xc(e, t, n);
    case 4:
      return (
        $l(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ze(r, o)),
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
          A(uo, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Ae(i.value, l)) {
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
                      (u = Ge(-1, n & -n)), (u.tag = 2);
                      var f = i.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var h = f.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (f.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Yi(i.return, n, t),
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
                  Yi(l, n, t),
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
        (o = ze(r, t.pendingProps)),
        (o = ze(r.type, o)),
        lu(e, t, r, o, n)
      );
    case 15:
      return vc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ze(r, o)),
        Hr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), io(t)) : (e = !1),
        cn(t, n),
        Ha(t, r, o),
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
function Ac(e, t) {
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
function Kr(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) is(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Kt:
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
        return Io(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $u:
              l = 10;
              break e;
            case Hu:
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
function Io(e, t, n, r) {
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
    Vl(i),
    e
  );
}
function Cp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(C(170));
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
    if (he(n)) return Aa(e, n, t);
  }
  return t;
}
function Bc(e, t, n, r, o, i, l, s, u) {
  return (
    (e = ls(n, r, !0, e, o, i, l, s, u)),
    (e.context = Fc(null)),
    (n = e.current),
    (r = ue()),
    (o = pt(n)),
    (i = Ge(r, o)),
    (i.callback = t ?? null),
    ft(n, i, o),
    (e.current.lanes = o),
    dr(e, o, r),
    me(e, r),
    e
  );
}
function Do(e, t, n, r) {
  var o = t.current,
    i = ue(),
    l = pt(o);
  return (
    (n = Fc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ge(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ft(o, t, l)),
    e !== null && (Me(e, o, l, i), Wr(e, o, l)),
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
var qc =
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
  Do(e, t, null, null);
};
Mo.prototype.unmount = us.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      Do(null, e, null, null);
    }),
      (t[Ye] = null);
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
function Ao(e) {
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
        var f = wo(l);
        i.call(f);
      };
    }
    var l = Bc(t, r, e, 0, null, !1, !1, "", wu);
    return (
      (e._reactRootContainer = l),
      (e[Ye] = l.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var f = wo(u);
      s.call(f);
    };
  }
  var u = ls(e, 0, !1, null, null, !1, !1, "", wu);
  return (
    (e._reactRootContainer = u),
    (e[Ye] = u.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      Do(t, u, n, r);
    }),
    u
  );
}
function Fo(e, t, n, r, o) {
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
    Do(t, l, e, o);
  } else l = jp(n, t, e, o, r);
  return wo(l);
}
ha = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 &&
          (Ll(t, n | 1), me(t, G()), !(D & 6) && ((yn = G() + 500), xt()));
      }
      break;
    case 13:
      Ut(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var o = ue();
          Me(r, e, 1, o);
        }
      }),
        ss(e, 1);
  }
};
Tl = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ue();
      Me(t, e, 134217728, n);
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
      Me(n, e, t, r);
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
            var o = Lo(r);
            if (!o) throw Error(C(90));
            Ku(r), Ni(r, o);
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
var Np = { usingClientEntryPoint: !1, Events: [hr, Zt, Lo, ta, na, ns] },
  zn = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  _p = {
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
      (Eo = Mr.inject(_p)), (Ue = Mr);
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
    o = qc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ls(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ye] = t.current),
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
  if (!Ao(t)) throw Error(C(200));
  return Fo(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!as(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = qc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Bc(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Ye] = t.current),
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
  if (!Ao(t)) throw Error(C(200));
  return Fo(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Ao(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = ns;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ao(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Fo(e, t, n, !1, r);
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
Uc(), (Bu.exports = Se);
var Lp = Bu.exports,
  xu = Lp;
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
function Tp(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: l = "/",
      search: s = "",
      hash: u = "",
    } = $t(o.location.hash.substr(1));
    return (
      !l.startsWith("/") && !l.startsWith(".") && (l = "/" + l),
      dl(
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
        f = u.indexOf("#");
      s = f === -1 ? u : u.slice(0, f);
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
function H(e, t) {
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
function Pp() {
  return Math.random().toString(36).substr(2, 8);
}
function ku(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function dl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ar(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? $t(t) : t,
      { state: n, key: (t && t.key) || r || Pp() }
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
function $t(e) {
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
    f = h();
  f == null && ((f = 0), l.replaceState(ar({}, l.state, { idx: f }), ""));
  function h() {
    return (l.state || { idx: null }).idx;
  }
  function m() {
    s = lt.Pop;
    let E = h(),
      p = E == null ? null : E - f;
    (f = E), u && u({ action: s, location: k.location, delta: p });
  }
  function g(E, p) {
    s = lt.Push;
    let c = dl(k.location, E, p);
    n && n(c, E), (f = h() + 1);
    let d = ku(c, f),
      w = k.createHref(c);
    try {
      l.pushState(d, "", w);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      o.location.assign(w);
    }
    i && u && u({ action: s, location: k.location, delta: 1 });
  }
  function x(E, p) {
    s = lt.Replace;
    let c = dl(k.location, E, p);
    n && n(c, E), (f = h());
    let d = ku(c, f),
      w = k.createHref(c);
    l.replaceState(d, "", w),
      i && u && u({ action: s, location: k.location, delta: 0 });
  }
  function S(E) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof E == "string" ? E : xo(E);
    return (
      (c = c.replace(/ $/, "%20")),
      H(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, p)
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
      let p = S(E);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
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
  let r = typeof t == "string" ? $t(t) : t,
    o = wn(r.pathname || "/", n);
  if (o == null) return null;
  let i = Wc(e);
  Op(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) {
    let u = $p(o);
    l = Wp(i[s], u);
  }
  return l;
}
function Wc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, s) => {
    let u = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (H(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let f = mt([r, u.relativePath]),
      h = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (H(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + f + '".')
      ),
      Wc(i.children, t, h, f)),
      !(i.path == null && !i.index) &&
        t.push({ path: f, score: qp(f, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let u of Vc(i.path)) o(i, l, u);
    }),
    t
  );
}
function Vc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Vc(r.join("/")),
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
const Ip = /^:[\w-]+$/,
  Dp = 3,
  Mp = 2,
  Ap = 1,
  Fp = 10,
  Bp = -2,
  Eu = (e) => e === "*";
function qp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Eu) && (r += Bp),
    t && (r += Mp),
    n
      .filter((o) => !Eu(o))
      .reduce((o, i) => o + (Ip.test(i) ? Dp : i === "" ? Ap : Fp), r)
  );
}
function Up(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Wp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      u = l === n.length - 1,
      f = o === "/" ? t : t.slice(o.length) || "/",
      h = pl(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        f
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let m = s.route;
    i.push({
      params: r,
      pathname: mt([o, h.pathname]),
      pathnameBase: Kp(mt([o, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== "/" && (o = mt([o, h.pathnameBase]));
  }
  return i;
}
function pl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Vp(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((f, h, m) => {
      let { paramName: g, isOptional: x } = h;
      if (g === "*") {
        let k = s[m] || "";
        l = i.slice(0, i.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const S = s[m];
      return (
        x && !S ? (f[g] = void 0) : (f[g] = (S || "").replace(/%2F/g, "/")), f
      );
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function Vp(e, t, n) {
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
function $p(e) {
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
function Hp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? $t(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Qp(n, t)) : t,
    search: Yp(r),
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
function Gp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function $c(e, t) {
  let n = Gp(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Hc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = $t(e))
    : ((o = ar({}, e)),
      H(
        !o.pathname || !o.pathname.includes("?"),
        gi("?", "pathname", "search", o)
      ),
      H(
        !o.pathname || !o.pathname.includes("#"),
        gi("#", "pathname", "hash", o)
      ),
      H(!o.search || !o.search.includes("#"), gi("#", "search", "hash", o)));
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
  let u = Hp(o, s),
    f = l && l !== "/" && l.endsWith("/"),
    h = (i || l === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (f || h) && (u.pathname += "/"), u;
}
const mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Kp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Yp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
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
const Bo = y.createContext(null),
  Gc = y.createContext(null),
  St = y.createContext(null),
  qo = y.createContext(null),
  Ht = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Kc = y.createContext(null);
function bp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  vr() || H(!1);
  let { basename: r, navigator: o } = y.useContext(St),
    { hash: i, pathname: l, search: s } = Uo(e, { relative: n }),
    u = l;
  return (
    r !== "/" && (u = l === "/" ? r : mt([r, l])),
    o.createHref({ pathname: u, search: s, hash: i })
  );
}
function vr() {
  return y.useContext(qo) != null;
}
function gr() {
  return vr() || H(!1), y.useContext(qo).location;
}
function Yc(e) {
  y.useContext(St).static || y.useLayoutEffect(e);
}
function eh() {
  let { isDataRoute: e } = y.useContext(Ht);
  return e ? ph() : th();
}
function th() {
  vr() || H(!1);
  let e = y.useContext(Bo),
    { basename: t, future: n, navigator: r } = y.useContext(St),
    { matches: o } = y.useContext(Ht),
    { pathname: i } = gr(),
    l = JSON.stringify($c(o, n.v7_relativeSplatPath)),
    s = y.useRef(!1);
  return (
    Yc(() => {
      s.current = !0;
    }),
    y.useCallback(
      function (f, h) {
        if ((h === void 0 && (h = {}), !s.current)) return;
        if (typeof f == "number") {
          r.go(f);
          return;
        }
        let m = Hc(f, JSON.parse(l), i, h.relative === "path");
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
    { matches: o } = y.useContext(Ht),
    { pathname: i } = gr(),
    l = JSON.stringify($c(o, r.v7_relativeSplatPath));
  return y.useMemo(() => Hc(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function nh(e, t) {
  return rh(e, t);
}
function rh(e, t, n, r) {
  vr() || H(!1);
  let { navigator: o } = y.useContext(St),
    { matches: i } = y.useContext(Ht),
    l = i[i.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let u = l ? l.pathnameBase : "/";
  l && l.route;
  let f = gr(),
    h;
  if (t) {
    var m;
    let E = typeof t == "string" ? $t(t) : t;
    u === "/" || ((m = E.pathname) != null && m.startsWith(u)) || H(!1),
      (h = E);
  } else h = f;
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
        qo.Provider,
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
  let e = dh(),
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
          Ht.Provider,
          { value: this.props.routeContext },
          y.createElement(Kc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function sh(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(Bo);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Ht.Provider, { value: t }, r)
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
    h >= 0 || H(!1), (l = l.slice(0, Math.min(l.length, h + 1)));
  }
  let u = !1,
    f = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < l.length; h++) {
      let m = l[h];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (f = h),
        m.route.id)
      ) {
        let { loaderData: g, errors: x } = n,
          S =
            m.route.loader &&
            g[m.route.id] === void 0 &&
            (!x || x[m.route.id] === void 0);
        if (m.route.lazy || S) {
          (u = !0), f >= 0 ? (l = l.slice(0, f + 1)) : (l = [l[0]]);
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
        (f < 0 && g === 0
          ? (hh("route-fallback", !1), (S = !0), (E = null))
          : f === g &&
            ((S = !0), (E = m.route.hydrateFallbackElement || null))));
    let p = t.concat(l.slice(0, g + 1)),
      c = () => {
        let d;
        return (
          x
            ? (d = k)
            : S
            ? (d = E)
            : m.route.Component
            ? (d = y.createElement(m.route.Component, null))
            : m.route.element
            ? (d = m.route.element)
            : (d = h),
          y.createElement(sh, {
            match: m,
            routeContext: { outlet: h, matches: p, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? y.createElement(lh, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: x,
          children: c(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : c();
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
  let t = y.useContext(Bo);
  return t || H(!1), t;
}
function ch(e) {
  let t = y.useContext(Gc);
  return t || H(!1), t;
}
function fh(e) {
  let t = y.useContext(Ht);
  return t || H(!1), t;
}
function Jc(e) {
  let t = fh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || H(!1), n.route.id;
}
function dh() {
  var e;
  let t = y.useContext(Kc),
    n = ch(So.UseRouteError),
    r = Jc(So.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ph() {
  let { router: e } = ah(Xc.UseNavigateStable),
    t = Jc(So.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Yc(() => {
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
function Re(e) {
  H(!1);
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
  vr() && H(!1);
  let u = t.replace(/^\/*/, "/"),
    f = y.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: l,
        future: cr({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, i, l]
    );
  typeof r == "string" && (r = $t(r));
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
        { value: f },
        y.createElement(qo.Provider, { children: n, value: k })
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
      r.type !== Re && H(!1), !r.props.index || !r.props.children || H(!1);
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
  Nu = yf[Ch];
function Eh(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = y.useRef();
  i.current == null && (i.current = Tp({ window: o, v5Compat: !0 }));
  let l = i.current,
    [s, u] = y.useState({ action: l.action, location: l.location }),
    { v7_startTransition: f } = r || {},
    h = y.useCallback(
      (m) => {
        f && Nu ? Nu(() => u(m)) : u(m);
      },
      [u, f]
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
  Ne = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: s,
        target: u,
        to: f,
        preventScrollReset: h,
        unstable_viewTransition: m,
      } = t,
      g = Zc(t, wh),
      { basename: x } = y.useContext(St),
      S,
      k = !1;
    if (typeof f == "string" && Nh.test(f) && ((S = f), jh))
      try {
        let d = new URL(window.location.href),
          w = f.startsWith("//") ? new URL(d.protocol + f) : new URL(f),
          j = wn(w.pathname, x);
        w.origin === d.origin && j != null
          ? (f = j + w.search + w.hash)
          : (k = !0);
      } catch {}
    let E = bp(f, { relative: o }),
      p = Lh(f, {
        replace: l,
        state: s,
        target: u,
        preventScrollReset: h,
        relative: o,
        unstable_viewTransition: m,
      });
    function c(d) {
      r && r(d), d.defaultPrevented || p(d);
    }
    return y.createElement(
      "a",
      ko({}, g, { href: S || E, onClick: k || i ? r : c, ref: n, target: u })
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
        unstable_viewTransition: f,
        children: h,
      } = t,
      m = Zc(t, xh),
      g = Uo(u, { relative: m.relative }),
      x = gr(),
      S = y.useContext(Gc),
      { navigator: k, basename: E } = y.useContext(St),
      p = S != null && Th(g) && f === !0,
      c = k.encodeLocation ? k.encodeLocation(g).pathname : g.pathname,
      d = x.pathname,
      w =
        S && S.navigation && S.navigation.location
          ? S.navigation.location.pathname
          : null;
    o ||
      ((d = d.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (c = c.toLowerCase())),
      w && E && (w = wn(w, E) || w);
    const j = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
    let _ = d === c || (!l && d.startsWith(c) && d.charAt(j) === "/"),
      v =
        w != null &&
        (w === c || (!l && w.startsWith(c) && w.charAt(c.length) === "/")),
      N = { isActive: _, isPending: v, isTransitioning: p },
      I = _ ? r : void 0,
      R;
    typeof i == "function"
      ? (R = i(N))
      : (R = [
          i,
          _ ? "active" : null,
          v ? "pending" : null,
          p ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let ve = typeof s == "function" ? s(N) : s;
    return y.createElement(
      Ne,
      ko({}, m, {
        "aria-current": I,
        className: R,
        ref: n,
        style: ve,
        to: u,
        unstable_viewTransition: f,
      }),
      typeof h == "function" ? h(N) : h
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
var _u;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(_u || (_u = {}));
function _h(e) {
  let t = y.useContext(Bo);
  return t || H(!1), t;
}
function Lh(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    u = eh(),
    f = gr(),
    h = Uo(e, { relative: l });
  return y.useCallback(
    (m) => {
      if (yh(m, n)) {
        m.preventDefault();
        let g = r !== void 0 ? r : xo(f) === xo(h);
        u(e, {
          replace: g,
          state: o,
          preventScrollReset: i,
          relative: l,
          unstable_viewTransition: s,
        });
      }
    },
    [f, u, h, r, o, n, e, i, l, s]
  );
}
function Th(e, t) {
  t === void 0 && (t = {});
  let n = y.useContext(kh);
  n == null && H(!1);
  let { basename: r } = _h(ml.useViewTransitionState),
    o = Uo(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = wn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = wn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return pl(o.pathname, l) != null || pl(o.pathname, i) != null;
}
const Ph = "./assets/logo-1EnBdt9n.png",
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
              children: a.jsx(Ne, {
                to: "/",
                children: a.jsx("img", {
                  className: "mn-logo",
                  src: Ph,
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
                to: "/quiz1",
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
  Ih = "./assets/potions-k4AqN0YE.png",
  Dh = "./assets/pots-D9_ZT1TQ.png",
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
        a.jsx("div", {
          className: "lessontext",
          children: a.jsx("p", { children: "Lessons" }),
        }),
        a.jsxs("div", {
          className: "hex",
          children: [
            a.jsx(Ne, {
              style: { textDecoration: "none", color: "black" },
              to: "/seb",
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
                        a.jsx("p", {
                          style: { textAlign: "center" },
                          children: "Spontaneous Process",
                        }),
                      ],
                    }),
                  }),
                  a.jsx("div", { className: "hexagon2" }),
                ],
              }),
            }),
            a.jsx(Ne, {
              style: { textDecoration: "none", color: "black" },
              to: "/less2",
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
                        a.jsxs("p", {
                          style: { textAlign: "center", fontSize: 6.5 },
                          children: [
                            " ",
                            "Entropy & Second Law of Thermodynamics",
                          ],
                        }),
                      ],
                    }),
                  }),
                  a.jsx("div", { className: "hexagon2" }),
                ],
              }),
            }),
            a.jsx(Ne, {
              style: { textDecoration: "none", color: "black" },
              to: "/less3",
              children: a.jsxs("div", {
                className: "ultraman",
                children: [
                  a.jsx("div", { className: "hexagon1" }),
                  a.jsx("div", {
                    className: "centerhex",
                    children: a.jsxs("div", {
                      className: "centerhex-content",
                      children: [
                        a.jsx("img", {
                          src: Ih,
                          id: "potion",
                          alt: "",
                          srcset: "",
                        }),
                        a.jsx("p", {
                          style: { textAlign: "center" },
                          children: "Gibbs Energy",
                        }),
                      ],
                    }),
                  }),
                  a.jsx("div", { className: "hexagon2" }),
                ],
              }),
            }),
            a.jsx(Ne, {
              style: { textDecoration: "none", color: "black" },
              to: "/less4",
              children: a.jsxs("div", {
                className: "ultraman",
                children: [
                  a.jsx("div", { className: "hexagon1" }),
                  a.jsx("div", {
                    className: "centerhex",
                    children: a.jsxs("div", {
                      className: "centerhex-content",
                      children: [
                        a.jsx("img", { src: Dh, alt: "", srcset: "" }),
                        a.jsx("p", {
                          style: { textAlign: "center", fontSize: 7.5 },
                          children: "The Concept of Equilibrium",
                        }),
                      ],
                    }),
                  }),
                  a.jsx("div", { className: "hexagon2" }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  Ah = "./assets/gian-CtgZRV7s.jpg",
  Fh = "./assets/cutee-BbYKFRLE.jpg",
  Bh = "./assets/hahaha-CNfwTKFW.jpg",
  qh = "./assets/john-BDlzG5Jl.jpg",
  Uh = "./assets/grupings-BymBKAH3.png",
  Wh = "./assets/cultibv-CJhV9zOV.png",
  Vh = "./assets/pogi-B9-KkGqB.png",
  $h = () =>
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
                a.jsx("img", { src: Vh, alt: "" }),
                a.jsx("img", { src: Fh, alt: "" }),
                a.jsx("img", { src: Bh, alt: "" }),
                a.jsx("img", { src: Ah, alt: "" }),
                a.jsx("img", { src: qh, alt: "" }),
              ],
            }),
            a.jsx("br", {}),
            a.jsx("br", {}),
            a.jsxs("div", {
              className: "mainbody-last",
              children: [
                a.jsx("img", { src: Wh, alt: "" }),
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
        "It is the kinetic energy of molecules and flows from higher to lower temperature.",
      option1: "A) Heat",
      option2: "B) Temperature.",
      option3: "C) Pressure.",
      option4: "D) Work.",
      ans: 1,
    },
    {
      question:
        "Performed by a system where the energy transferred by the system to its surroundings.",
      option1: "A) Heat",
      option2: "B) Temperature",
      option3: "C) Pressure",
      option4: "D) Work",
      ans: 4,
    },
    {
      question:
        "It refers to the total energy of a system, including the kinetic energy of molecules and the potential energy stored in the chemical bonds between molecules.",
      option1: "A. Entropy",
      option2: "B. Internal Energy",
      option3: "C. Enthalpy",
      option4: "D. Free energy",
      ans: 2,
    },
    {
      question:
        "It offers a definition of a system, which is the specific part of the universe that is being studied and observed.",
      option1: "A. Thermodynamics",
      option2: "B. Kinetics",
      option3: "C. Equilibrium",
      option4: "D. Reactivity",
      ans: 1,
    },
    {
      question:
        "Systems that involve the transfer of energy and matter are classified as ____ systems.",
      option1: "A. Open systems",
      option2: "B. Closed systems",
      option3: "C. Isolated systems",
      option4: "D. None of the above",
      ans: 1,
    },
    {
      question:
        "It is a type of system that only allows for the exchange of energy with the surroundings and not matter.",
      option1: "A. Open systems",
      option2: "B. Closed systems",
      option3: "C. Isolated systems",
      option4: "D. None of the above",
      ans: 2,
    },
    {
      question:
        "In an__________, there is no exchange of matter or energy between the system and its surroundings.",
      option1: "A. Open systems",
      option2: "B. Closed systems",
      option3: "C. Isolated systems",
      option4: "D. None of the above",
      ans: 3,
    },
    {
      question:
        "An ________ releases energy in the form of light or heat, transferring it to the surroundings.",
      option1: "A. Exothermic reactions",
      option2: "B. Endothermic reactions",
      option3: "C. Photosynthesis",
      option4: "D. Decomposition",
      ans: 1,
    },
    {
      question:
        "A chemical reaction in which a substance rapidly mixes with oxygen to create heat.",
      option1: "A. Decomposition",
      option2: "B. Sublimation",
      option3: "C. Combustion",
      option4: "D. Condensation",
      ans: 3,
    },
    {
      question:
        "It refers to a chemical reaction that requires heat energy from the surroundings to form products. In simpler terms, these reactions absorb heat instead of releasing it.",
      option1: "A. Exothermic reactions",
      option2: "B. Endothermic reactions",
      option3: "C. Photosynthesis",
      option4: "D. Decomposition",
      ans: 2,
    },
    {
      question:
        "It states that energy cannot be created or destroyed, only transformed from one form to another.",
      option1: "A. First Law of thermodynamics",
      option2: "B. Second law of thermodynamics",
      option3: "C. Third law of thermodynamics",
      option4: "D. Zeroth law of Thermodynamics",
      ans: 1,
    },
    {
      question:
        "It states that when temperature approaches absolute zero, a system's entropy approaches a constant value.",
      option1: "A. First Law of thermodynamics",
      option2: "B. Second law of thermodynamics",
      option3: "C. Third law of thermodynamics",
      option4: "D. Zeroth law of Thermodynamics",
      ans: 3,
    },
    {
      question:
        "It refers to two systems that are in equilibrium with one another and are thermally balanced.",
      option1: "A. First Law of thermodynamics",
      option2: "B. Second law of thermodynamics",
      option3: "C. Third law of thermodynamics",
      option4: "D. Zeroth law of Thermodynamics",
      ans: 4,
    },
    {
      question:
        "It refers to the amount of energy present in a thermodynamic system that can be measured through enthalpy.",
      option1: "A. Entropy",
      option2: "B. Enthalpy",
      option3: "C. Volume",
      option4: "D. Pressure",
      ans: 2,
    },
    {
      question: "What statement best defines entropy?",
      option1: "A. The measure of disorder in a system.",
      option2: "B. The heat content of a system.",
      option3: "C. The measure of energy in a system.",
      option4: "D. The measure of the volume of a system.",
      ans: 1,
    },
    {
      question:
        "Which statement best describes the differences between entropy and enthalpy?",
      option1:
        "A) Entropy measures the overall amount of energy in a system, while enthalpy measures the randomness of activity.",
      option2:
        "B) Entropy measures the randomness of activity in a system, while enthalpy measures the overall amount of energy.",
      option3:
        "C) Entropy measures the randomness of activity in a system, while enthalpy measures the specific heat capacity.",
      option4:
        "D) Entropy measures the specific heat capacity, while enthalpy measures the randomness of activity in a system.",
      ans: 2,
    },
    {
      question:
        "It refers to the amount of heat required to change the phase of a given mass of substance.",
      option1: "A. Heat",
      option2: "B. Density",
      option3: "C. Specific Heat",
      option4: "D. Latent Heat",
      ans: 4,
    },
    {
      question:
        "It is a physical or chemical change that occurs naturally. These processes occur without the need for an outside force and continue until equilibrium is determined.",
      option1: "A. Controlled",
      option2: "B. Forced",
      option3: "C. Spontaneous",
      option4: "D. Induced",
      ans: 3,
    },
    {
      question:
        "Why is melting considered spontaneous while freezing is non-spontaneous?",
      option1:
        "A. Melting requires an input of energy, whereas freezing releases energy.",
      option2:
        "B. Melting leads to an increase in entropy, while freezing leads to a decrease in entropy.",
      option3:
        "C. Melting occurs at higher temperatures, while freezing occurs at lower temperatures.",
      option4:
        "D. Melting occurs in the presence of an outside force, while freezing occurs naturally without any external intervention.",
      ans: 2,
    },
    {
      question:
        "Intermolecular interactions are broken as ice melts (which requires energy), yet order is disrupted (leading in increased entropy). Because water can be ______ predictable than ice, it melts spontaneously at ambient temperatures.",
      option1: "A. Less",
      option2: "B. More",
      option3: "C. Equal",
      option4: "D. Unchanged",
      ans: 2,
    },
    {
      question:
        "The process of liquid water converting to vapor at temperatures higher than the boiling point, 100°C, is ________ because it increases entropy.",
      option1: "A. Entropy",
      option2: "B. Enthalpy",
      option3: "C. Spontaneous",
      option4: "D. Non-spontaneous",
      ans: 3,
    },
  ],
  Hh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Et[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, f] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(null),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      p = y.useRef(null),
      c = [S, k, E, p];
    y.useEffect(() => {
      m(40),
        e > 0 &&
          e < Et.length &&
          (r(Et[e]),
          i(!1),
          c.forEach((v) => {
            v.current.classList.remove("incorrect"),
              v.current.classList.remove("correct");
          }));
    }, [e]),
      y.useEffect(() => {
        const v = setInterval(() => {
          h > 0 && !o ? m((N) => N - 1) : h === 0 && !o && w();
        }, 1e3);
        return () => clearInterval(v);
      }, [h, o]);
    const d = (v, N) => {
        o ||
          (n.ans === N
            ? (v.target.classList.add("correct"),
              i(!0),
              s((I) => I + 1),
              x("Correct!"))
            : (v.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              x("Incorrect!")));
      },
      w = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          x("Time's up! The correct answer is:");
      },
      j = () => {
        o && (e === Et.length - 1 ? f(!0) : (t((v) => v + 1), x(null)));
      },
      _ = () => {
        t(0), r(Et[0]), s(0), i(!1), f(!1), x(null);
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "Spontaneous Process" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Et.length],
                }),
                a.jsx("button", { onClick: _, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                a.jsx("div", {
                  className: "anscover",
                  children: a.jsxs("ul", {
                    children: [
                      a.jsx("li", {
                        ref: S,
                        onClick: (v) => d(v, 1),
                        children: n.option1,
                      }),
                      a.jsx("li", {
                        ref: k,
                        onClick: (v) => d(v, 2),
                        children: n.option2,
                      }),
                      a.jsx("li", {
                        ref: E,
                        onClick: (v) => d(v, 3),
                        children: n.option3,
                      }),
                      a.jsx("li", {
                        ref: p,
                        onClick: (v) => d(v, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                a.jsx("div", { className: "selected-option", children: g }),
                a.jsx("button", { onClick: j, disabled: !o, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Et.length, " questions"],
                }),
                a.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", h],
                }),
              ],
            }),
      ],
    });
  },
  Qh = () => a.jsx("div", { className: "main-seb", children: a.jsx(Hh, {}) }),
  Gh = () =>
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
            a.jsx(Ne, {
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
            a.jsx(Ne, {
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
            a.jsx(Ne, {
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
      question: "Why do chemical processes tend to favor one direction?",
      option1: "a) Due to the law of conservation of energy.",
      option2: "b) Because of the first law of thermodynamics.",
      option3: "c) According to the second law of thermodynamics.",
      option4: "d) Based on the law of mass action.",
      ans: 3,
    },
    {
      question: "What does the second law of thermodynamics state?",
      option1: "A. Energy cannot be created or destroyed.",
      option2: "B. The entropy of an isolated system will always increase.",
      option3:
        "C. The total energy of a system and its surroundings remain constant.",
      option4: "D. The entropy of an isolated system will always decrease.",
      ans: 2,
    },
    {
      question: "A reaction is spontaneous if:",
      option1: "A. The change in Gibbs free energy is positive.",
      option2: "B. The change in Gibbs free energy is negative.",
      option3: "C. The change in entropy is negative.",
      option4: "D. The change in entropy is positive.",
      ans: 2,
    },
    {
      question:
        "At absolute zero temperature (0 K), what is the entropy of a perfect crystalline substance according to the third law of thermodynamics?",
      option1: "a) Zero",
      option2: "b) Infinite",
      option3: "c) Undefined",
      option4: "d) Variable",
      ans: 3,
    },
    {
      question:
        "What happens to the entropy of the universe in an equilibrium process?",
      option1: "a) It increases.",
      option2: "b) It decreases.",
      option3: "c) It remains unchanged.",
      option4: "d) It fluctuates randomly.",
      ans: 3,
    },
    {
      question:
        "Determine S for the reaction: SO3(g) + H2O(l) → H2SO4(l) Given: S°(J/K·mol): SO3 = 256.2 H2O = 69.9 H2SO4 = 156.9",
      option1: "A. − 169.2J/K ",
      option2: "B. − 168.2J/K",
      option3: "C. − 169.23J/K",
      option4: "D. − 163.2J/K",
      ans: 1,
    },
    {
      question:
        "Calculate S for the reaction SO2(s) + NO2(g) → SO3(g) + NO(g) Given: S°(J/K·mol): SO2 = 248.5 NO2 = 240.5 SO3 = 256.2 NO = 210.6",
      option1: "A. −12.2J/K",
      option2: "B. −26.2J/K",
      option3: "C. −22.2J/K",
      option4: "D. −22.6J/K",
      ans: 3,
    },
    {
      question:
        "Predict whether the entropy change positive or negative (O2(g) — 2O(g)).",
      option1: "A. Positive",
      option2: "B. Negative",
      option3: "C. Maybe",
      option4: "D. Positive - Negative",
      ans: 1,
    },
    {
      question:
        "The entropy change positive or negative 2 H2(g) + O2(g) — 2 H2O(l)",
      option1: "A. Positive",
      option2: "B. Negative ",
      option3: "C. Maybe",
      option4: "D. Positive - Negative",
      ans: 2,
    },
    {
      question:
        "According to the general rules for predicting entropy change of the system, what can be inferred if a reaction produces more gas molecules than it consumes?",
      option1: "a) The reaction is nonspontaneous.",
      option2: "b) The entropy change (Δ𝑆∘ ) is positive.",
      option3: "c) The entropy change (Δ𝑆∘ ) is negative.",
      option4: "d) The entropy change (Δ𝑆∘) is zero.",
      ans: 2,
    },
  ],
  Kh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(jt[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, f] = y.useState(!1),
      [h, m] = y.useState(60),
      [g, x] = y.useState(null),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      p = y.useRef(null),
      c = [S, k, E, p];
    y.useEffect(() => {
      m(60),
        e > 0 &&
          e < jt.length &&
          (r(jt[e]),
          i(!1),
          c.forEach((v) => {
            v.current.classList.remove("incorrect"),
              v.current.classList.remove("correct");
          }));
    }, [e]),
      y.useEffect(() => {
        const v = setInterval(() => {
          h > 0 && !o ? m((N) => N - 1) : h === 0 && !o && w();
        }, 1e3);
        return () => clearInterval(v);
      }, [h, o]);
    const d = (v, N) => {
        o ||
          (n.ans === N
            ? (v.target.classList.add("correct"),
              i(!0),
              s((I) => I + 1),
              x("Correct!"))
            : (v.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              x("Incorrect!")));
      },
      w = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          x("Time's up! The correct answer is:");
      },
      j = () => {
        o && (e === jt.length - 1 ? f(!0) : (t((v) => v + 1), x(null)));
      },
      _ = () => {
        t(0), r(jt[0]), s(0), i(!1), f(!1), x(null);
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "Entropy & Second Law of Thermodynamics" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", jt.length],
                }),
                a.jsx("button", { onClick: _, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                a.jsx("div", {
                  className: "anscover",
                  children: a.jsxs("ul", {
                    children: [
                      a.jsx("li", {
                        ref: S,
                        onClick: (v) => d(v, 1),
                        children: n.option1,
                      }),
                      a.jsx("li", {
                        ref: k,
                        onClick: (v) => d(v, 2),
                        children: n.option2,
                      }),
                      a.jsx("li", {
                        ref: E,
                        onClick: (v) => d(v, 3),
                        children: n.option3,
                      }),
                      a.jsx("li", {
                        ref: p,
                        onClick: (v) => d(v, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                a.jsx("div", { className: "selected-option", children: g }),
                a.jsx("button", { onClick: j, disabled: !o, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", jt.length, " questions"],
                }),
                a.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", h],
                }),
              ],
            }),
      ],
    });
  },
  Nt = [
    {
      question: "What does Gibbs free energy represent in a chemical reaction?",
      option1: "A.The overall energy change of the response.",
      option2: "B. The enthalpy change in the reaction.",
      option3:
        "C. The energy available to perform productive work in the reaction.",
      option4: "D. The entropy change of the reaction.",
      ans: 3,
    },
    {
      question:
        "Which factor does not enter into the Gibbs free energy equation?",
      option1: "A. Enthalpy change (ΔH)",
      option2: "B. Temperature (T)",
      option3: "C. Entropy change (ΔS)",
      option4: "D. Pressure change (ΔP)",
      ans: 4,
    },
    {
      question:
        "Which factor determines whether a reaction occurs spontaneously or not?",
      option1: "A. Activation energy",
      option2: "B. Enthalpy change",
      option3: "C. Entropy change",
      option4: "D. Kinetic energy",
      ans: 3,
    },
    {
      question: "How can a negative ΔG affect the spontaneity of a reaction?",
      option1: "A. Reactions are always spontaneous.",
      option2: "B. Reaction is not spontaneous.",
      option3: "C. The reaction is spontaneous only at high temperatures.",
      option4: "D. The reaction occurs spontaneously only at low temperatures.",
      ans: 1,
    },
    {
      question:
        "Which of the following statements about Gibbs free energy is CORRECT?",
      option1: "A. A positive ΔG suggests a spontaneous reaction.",
      option2: "B. A negative ΔG indicates non-spontaneous reactions.",
      option3: "C. A negative ΔG indicates spontaneous reactions.",
      option4: "D. ΔG is always zero in all reactions.",
      ans: 3,
    },
    {
      question:
        "At constant temperature and pressure, what conditions will cause a reaction to be spontaneous?",
      option1: "A. ΔG < 0",
      option2: "B. ΔG = 0",
      option3: "C. ΔG > 0",
      option4: "D. ΔG = ΔH - TΔS",
      ans: 1,
    },
    {
      question:
        "How does Gibbs free energy relate to temperature and reaction spontaneity?",
      option1:
        "A. Increasing temperature decreases the spontaneity of a reaction if ΔG is negative, but increases spontaneity if ΔG is positive.",
      option2:
        "B. Increasing temperature always increases the spontaneity of a reaction, regardless of the sign of ΔG.",
      option3:
        "C. Temperature does not affect the spontaneity of a reaction; only the concentration of reactants matters.",
      option4:
        "D. Increasing temperature decreases the spontaneity of a reaction if ΔG is positive, but increases spontaneity if ΔG is negative.",
      ans: 1,
    },
    {
      question:
        "How does increasing the temperature affect the Gibbs free energy change in an exothermic reaction?",
      option1: "A. Reduces the magnitude of ΔG.",
      option2: "B. Increases the magnitude of ΔG.",
      option3: "C. Does not change the magnitude of ΔG.",
      option4: "D. Inverts the sign of ΔG.",
      ans: 1,
    },
    {
      question:
        "Which of the following describes the link between Gibbs free energy change (ΔG) and equilibrium constant (K)?",
      option1: "A. ΔG = RTln(K)",
      option2: "B. ΔG = -RTln(K)",
      option3: "C. ΔG = -RT/K",
      option4: "D. ΔG = RT/K",
      ans: 1,
    },
    {
      question:
        "In a reversible process at equilibrium, what is the relationship between ΔG and the reaction quotient (Q)?",
      option1: "A. ΔG = RTln(Q)",
      option2: "B. ΔG = RTln(K)",
      option3: "C. ΔG = 0",
      option4: "D. ΔG = -RTln(Q)",
      ans: 3,
    },
    {
      question:
        "Which statement is correct for the standard Gibbs free energy change (ΔG°) of a reaction?",
      option1:
        "A. It is dependent on the initial concentrations of reactants and products.",
      option2: "B. It equals 0 for all reactions.",
      option3: "C. It depends on the reaction's temperature.",
      option4:
        "D. The Gibbs free energy change occurs when all reactants and products are in their normal states.",
      ans: 4,
    },
    {
      question:
        "A measurement used to determine how much work can be done in a thermodynamic system at its maximum while maintaining constant pressure and temperature.",
      option1: "A. Free energy",
      option2: "B. Gibbs Free energy",
      option3: "C. Kinetic Energy",
      option4: "D. Energy",
      ans: 1,
    },
    {
      question: "At equilibrium, can Gibbs Free Energy be negative?",
      option1:
        "A. Yes, Gibbs Free Energy can be negative at equilibrium if the reaction is exothermic.",
      option2: "B. No, Gibbs Free Energy remains constant at equilibrium.",
      option3:
        "C. Yes, Gibbs Free Energy can be negative at equilibrium if the forward reaction is favored.",
      option4: "D. No, Gibbs Free Energy is always positive at equilibrium.",
      ans: 3,
    },
    {
      question:
        "How does the spontaneity of a chemical reaction relate to the Gibbs free energy (ΔG)?",
      option1:
        "A. ΔG is the change in Gibbs free energy of a system, indicating the energy available to do work and determining the spontaneity of a reaction.",
      option2:
        "B. ΔG measures the total energy change in a system, influencing the spontaneity but not the rate of the reaction.",
      option3:
        "C. ΔG quantifies the system's energy change, indicating whether a reaction absorbs or releases heat.",
      option4:
        "D.ΔG represents the change in system entropy, suggesting whether a reaction maintains constant temperature.",
      ans: 1,
    },
    {
      question:
        "Investigate the connection between a reaction's spontaneity and its Gibbs free energy (ΔG). If the computed value of ΔG for a certain reaction is -20 kJ/mol at 25°C, ascertain if the reaction is spontaneous or not.",
      option1: "A. Spontaneous",
      option2: "B. Non-spontaneous",
      option3: "C. Cannot be determined",
      option4: "D. Depends on the temperature",
      ans: 1,
    },
  ],
  Yh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(Nt[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, f] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(null),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      p = y.useRef(null),
      c = [S, k, E, p];
    y.useEffect(() => {
      m(40),
        e > 0 &&
          e < Nt.length &&
          (r(Nt[e]),
          i(!1),
          c.forEach((v) => {
            v.current.classList.remove("incorrect"),
              v.current.classList.remove("correct");
          }));
    }, [e]),
      y.useEffect(() => {
        const v = setInterval(() => {
          h > 0 && !o ? m((N) => N - 1) : h === 0 && !o && w();
        }, 1e3);
        return () => clearInterval(v);
      }, [h, o]);
    const d = (v, N) => {
        o ||
          (n.ans === N
            ? (v.target.classList.add("correct"),
              i(!0),
              s((I) => I + 1),
              x("Correct!"))
            : (v.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              x("Incorrect!")));
      },
      w = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          x("Time's up! The correct answer is:");
      },
      j = () => {
        o && (e === Nt.length - 1 ? f(!0) : (t((v) => v + 1), x(null)));
      },
      _ = () => {
        t(0), r(Nt[0]), s(0), i(!1), f(!1), x(null);
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "Gibbs Energy" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", Nt.length],
                }),
                a.jsx("button", { onClick: _, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                a.jsx("div", {
                  className: "anscover",
                  children: a.jsxs("ul", {
                    children: [
                      a.jsx("li", {
                        ref: S,
                        onClick: (v) => d(v, 1),
                        children: n.option1,
                      }),
                      a.jsx("li", {
                        ref: k,
                        onClick: (v) => d(v, 2),
                        children: n.option2,
                      }),
                      a.jsx("li", {
                        ref: E,
                        onClick: (v) => d(v, 3),
                        children: n.option3,
                      }),
                      a.jsx("li", {
                        ref: p,
                        onClick: (v) => d(v, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                a.jsx("div", { className: "selected-option", children: g }),
                a.jsx("button", { onClick: j, disabled: !o, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", Nt.length, " questions"],
                }),
                a.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", h],
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
            a.jsx(Ne, {
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
            a.jsx(Ne, {
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
            a.jsx(Ne, {
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
  _t = [
    {
      question: "What is chemical equilibrium?",
      option1: "A. A state in which reactions stop.",
      option2: "B. A state where reactants are completely consumed.",
      option3:
        "C. A dynamic state in which the forward and reverse reaction rates are equal.",
      option4:
        "D. A condition in which reactants and products are in uneven quantities.",
      ans: 3,
    },
    {
      question:
        "What happens when the reactant and product concentrations reach equilibrium?",
      option1: "A. Reactants are always absorbed fully.",
      option2: "B. Products are always consumed completely.",
      option3: "C. The concentrations of reactants and products stay constant.",
      option4:
        "D. Concentrations of reactants and products continue to increase indefinitely.",
      ans: 3,
    },
    {
      question:
        "How does temperature affect the position of equilibrium in an endothermic reaction?",
      option1: "A. Equilibrium moves to the left.",
      option2: "B. Equilibrium moves to the right.",
      option3: "C. Equilibrium remains unchanged.",
      option4: "D. Equilibrium becomes unstable.",
      ans: 2,
    },
    {
      question: "What does the equilibrium constant (Kc) represent?",
      option1: "A. The rate of the forward reaction.",
      option2:
        "B. The ratio of product concentrations to reactant concentrations in equilibrium.",
      option3: "C. The initial concentration of reactants.",
      option4: "D. The total quantity of reactants and products in a system.",
      ans: 2,
    },
    {
      question:
        "What happens if you increase the concentration of a reactant in an equilibrium system?",
      option1: "A. The equilibrium adjusts to consume more reactants.",
      option2: "B. The equilibrium moves to consume more product.",
      option3: "C. The equilibrium shifts to oppose the change.",
      option4: "D. Equilibrium remains unchanged.",
      ans: 3,
    },
    {
      question: "What is the role of dynamic equilibrium in chemical systems?",
      option1: "A. It indicates that the reaction has stopped.",
      option2:
        "B. It represents a balance between reactants and products, with no further change in concentrations.",
      option3: "C. It indicates that the reaction has been completed.",
      option4: "D. It suggests that the reaction happens instantly.",
      ans: 2,
    },
    {
      question:
        "What term is synonymous with a state of equilibrium in a reversible reaction?",
      option1: "A) Balance state",
      option2: "B) Resting state",
      option3: "C) Equivalence state",
      option4: "D) Chemical plateau",
      ans: 1,
    },
    {
      question:
        "At what stage of a reversible reaction are the rates of the forward and backward reactions not equal?",
      option1: "A) Initial stage",
      option2: "B) Intermediate stage",
      option3: "C) Final stage",
      option4: "D) Equilibrium stage",
      ans: 4,
    },
    {
      question:
        "In a state of chemical equilibrium, what happens to the concentrations of reactants and products?",
      option1: "A) They fluctuate wildly",
      option2: "B) They remain constant",
      option3: "C) They decrease continuously",
      option4: "D) They increase indefinitely",
      ans: 2,
    },
    {
      question:
        "Which law describes the ratio of the concentrations of products to reactants in a reversible reaction?",
      option1: "A) Law of mass conservation",
      option2: "B) Law of action reaction",
      option3: "C) Law of mass action",
      option4: "D) Law of constant composition",
      ans: 3,
    },
    {
      question:
        "What is the equilibrium constant expression denoted by when using molar concentrations?",
      option1: "A) Kp",
      option2: "B) Kw",
      option3: "C) Kc",
      option4: "D) Kf",
      ans: 3,
    },
    {
      question:
        "How are equilibrium constants for homogeneous gaseous equilibria expressed?",
      option1: "A) In terms of molar concentrations",
      option2: "B) In terms of partial pressures",
      option3: "C) In terms of molality",
      option4: "D) In terms of mass fractions",
      ans: 2,
    },
    {
      question:
        "What factor primarily determines the position of equilibrium in a reversible reaction?",
      option1: "A) Temperature",
      option2: "B) Catalyst presence",
      option3: "C) Pressure",
      option4: "D) Concentration of reactants and products",
      ans: 4,
    },
    {
      question: "At equilibrium, which of the following statements is true?",
      option1: "A) Reactants are consumed at a faster rate",
      option2: "B) Products are formed at a slower rate",
      option3: "C) Forward and backward reactions stop",
      option4: "D) Forward and backward reactions occur at equal rates",
      ans: 4,
    },
    {
      question:
        "What happens to a system at chemical equilibrium when reaction conditions change?",
      option1: "A) The equilibrium shifts",
      option2: "B) The equilibrium constant changes",
      option3: "C) The reaction stops completely",
      option4: "D) The equilibrium becomes irreversible",
      ans: 1,
    },
  ],
  Jh = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(_t[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, f] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(null),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      p = y.useRef(null),
      c = [S, k, E, p];
    y.useEffect(() => {
      m(40),
        e > 0 &&
          e < _t.length &&
          (r(_t[e]),
          i(!1),
          c.forEach((v) => {
            v.current.classList.remove("incorrect"),
              v.current.classList.remove("correct");
          }));
    }, [e]),
      y.useEffect(() => {
        const v = setInterval(() => {
          h > 0 && !o ? m((N) => N - 1) : h === 0 && !o && w();
        }, 1e3);
        return () => clearInterval(v);
      }, [h, o]);
    const d = (v, N) => {
        o ||
          (n.ans === N
            ? (v.target.classList.add("correct"),
              i(!0),
              s((I) => I + 1),
              x("Correct!"))
            : (v.target.classList.add("incorrect"),
              c[n.ans - 1].current.classList.add("correct"),
              i(!0),
              x("Incorrect!")));
      },
      w = () => {
        i(!0),
          c[n.ans - 1].current.classList.add("correct"),
          x("Time's up! The correct answer is:");
      },
      j = () => {
        o && (e === _t.length - 1 ? f(!0) : (t((v) => v + 1), x(null)));
      },
      _ = () => {
        t(0), r(_t[0]), s(0), i(!1), f(!1), x(null);
      };
    return a.jsxs("div", {
      className: "container",
      children: [
        a.jsx("h1", { children: "The Concept of Equilibrium" }),
        a.jsx("hr", {}),
        u
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", {
                  children: ["You Scored ", l, " out of ", _t.length],
                }),
                a.jsx("button", { onClick: _, children: "Reset" }),
              ],
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsxs("h2", { children: [e + 1, ". ", n.question] }),
                a.jsx("div", {
                  className: "anscover",
                  children: a.jsxs("ul", {
                    children: [
                      a.jsx("li", {
                        ref: S,
                        onClick: (v) => d(v, 1),
                        children: n.option1,
                      }),
                      a.jsx("li", {
                        ref: k,
                        onClick: (v) => d(v, 2),
                        children: n.option2,
                      }),
                      a.jsx("li", {
                        ref: E,
                        onClick: (v) => d(v, 3),
                        children: n.option3,
                      }),
                      a.jsx("li", {
                        ref: p,
                        onClick: (v) => d(v, 4),
                        children: n.option4,
                      }),
                    ],
                  }),
                }),
                a.jsx("div", { className: "selected-option", children: g }),
                a.jsx("button", { onClick: j, disabled: !o, children: "Next" }),
                a.jsxs("div", {
                  className: "index",
                  children: [e + 1, " of ", _t.length, " questions"],
                }),
                a.jsxs("div", {
                  className: "timer",
                  children: ["Time Left: ", h],
                }),
              ],
            }),
      ],
    });
  },
  Lt = [
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
      [n, r] = y.useState(Lt[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, f] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      p = y.useRef(null),
      c = [S, k, E, p];
    y.useEffect(() => {
      if (!Lt || Lt.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(Lt[e]);
    }, [e]),
      y.useEffect(() => {
        const v = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : d();
        }, 1e3);
        return () => clearTimeout(v);
      }, [h, o]);
    const d = () => {
        o || (i(!0), x("Time's up! You ran out of time."));
      },
      w = (v, N) => {
        o ||
          (n.ans === N
            ? ((v.target.textContent = "Correct!"),
              v.target.classList.add("correct"),
              i(!0),
              s((I) => I + 1),
              x("Correct!"))
            : ((v.target.textContent = "Wrong"),
              v.target.classList.add("incorrect"),
              i(!0),
              c[n.ans - 1].current.classList.add("correct"),
              x("Incorrect.")));
      },
      j = () => {
        if (o) {
          if (e === Lt.length - 1) {
            f(!0);
            return;
          }
          t((v) => v + 1),
            i(!1),
            m(40),
            c.forEach((v) => {
              v.current.classList.remove("incorrect"),
                v.current.classList.remove("correct");
            }),
            x("");
        }
      },
      _ = () => {
        t(0), s(0), i(!1), f(!1), m(40), x("");
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
                  children: ["You Scored ", l, " out of ", Lt.length],
                }),
                a.jsx("button", { onClick: _, children: "Reset" }),
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
                      ref: p,
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
  Tt = [
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
      [n, r] = y.useState(Tt[e]),
      [o, i] = y.useState(!1),
      [l, s] = y.useState(0),
      [u, f] = y.useState(!1),
      [h, m] = y.useState(40),
      [g, x] = y.useState(""),
      S = y.useRef(null),
      k = y.useRef(null),
      E = y.useRef(null),
      p = y.useRef(null),
      c = [S, k, E, p];
    y.useEffect(() => {
      if (!Tt || Tt.length === 0) {
        console.error("Data is missing or empty.");
        return;
      }
      r(Tt[e]);
    }, [e]),
      y.useEffect(() => {
        const v = setTimeout(() => {
          h > 0 && !o ? m(h - 1) : d();
        }, 1e3);
        return () => clearTimeout(v);
      }, [h, o]);
    const d = () => {
        o || (i(!0), x("Time's up! You ran out of time."));
      },
      w = (v, N) => {
        o ||
          (n.ans === N
            ? ((v.target.textContent = "Correct!"),
              v.target.classList.add("correct"),
              i(!0),
              s((I) => I + 1),
              x("Correct!"))
            : ((v.target.textContent = "Wrong"),
              v.target.classList.add("incorrect"),
              i(!0),
              c[n.ans - 1].current.classList.add("correct"),
              x("Incorrect.")));
      },
      j = () => {
        if (o) {
          if (e === Tt.length - 1) {
            f(!0);
            return;
          }
          t((v) => v + 1),
            i(!1),
            m(40),
            c.forEach((v) => {
              v.current.classList.remove("incorrect"),
                v.current.classList.remove("correct");
            }),
            x("");
        }
      },
      _ = () => {
        t(0), s(0), i(!1), f(!1), m(40), x("");
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
                  children: ["You Scored ", l, " out of ", Tt.length],
                }),
                a.jsx("button", { onClick: _, children: "Reset" }),
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
                      ref: p,
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
                  children: [e + 1, " of ", Tt.length, " questions"],
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
          a.jsx(Re, { path: "/", element: a.jsx(Mh, {}) }),
          a.jsx(Re, { path: "/abouts", element: a.jsx($h, {}) }),
          a.jsx(Re, { path: "/seb", element: a.jsx(Qh, {}) }),
          a.jsx(Re, { path: "/quiz1", element: a.jsx(Gh, {}) }),
          a.jsx(Re, { path: "/quiz2", element: a.jsx(Xh, {}) }),
          a.jsx(Re, { path: "/less2", element: a.jsx(Kh, {}) }),
          a.jsx(Re, { path: "/less3", element: a.jsx(Yh, {}) }),
          a.jsx(Re, { path: "/less4", element: a.jsx(Jh, {}) }),
          a.jsx(Re, { path: "/less22", element: a.jsx(Zh, {}) }),
          a.jsx(Re, { path: "/less23", element: a.jsx(bh, {}) }),
        ],
      }),
    ],
  });
}
wi.createRoot(document.getElementById("root")).render(
  a.jsx(Au.StrictMode, { children: a.jsx(em, {}) })
);
