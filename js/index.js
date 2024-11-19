function t(t, e, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function u(t) {
      try {
        a(r.next(t));
      } catch (t) {
        o(t);
      }
    }
    function c(t) {
      try {
        a(r.throw(t));
      } catch (t) {
        o(t);
      }
    }
    function a(t) {
      var e;
      t.done
        ? i(t.value)
        : ((e = t.value),
          e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              })).then(u, c);
    }
    a((r = r.apply(t, e || [])).next());
  });
}
function e(t, e) {
  var n,
    r,
    i,
    o = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    u = Object.create(
      ("function" == typeof Iterator ? Iterator : Object).prototype,
    );
  return (
    (u.next = c(0)),
    (u.throw = c(1)),
    (u.return = c(2)),
    "function" == typeof Symbol &&
      (u[Symbol.iterator] = function () {
        return this;
      }),
    u
  );
  function c(c) {
    return function (a) {
      return (function (c) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; u && ((u = 0), c[0] && (o = 0)), o; )
          try {
            if (
              ((n = 1),
              r &&
                (i =
                  2 & c[0]
                    ? r.return
                    : c[0]
                      ? r.throw || ((i = r.return) && i.call(r), 0)
                      : r.next) &&
                !(i = i.call(r, c[1])).done)
            )
              return i;
            switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
              case 0:
              case 1:
                i = c;
                break;
              case 4:
                return o.label++, { value: c[1], done: !1 };
              case 5:
                o.label++, (r = c[1]), (c = [0]);
                continue;
              case 7:
                (c = o.ops.pop()), o.trys.pop();
                continue;
              default:
                if (
                  !((i = o.trys),
                  (i = i.length > 0 && i[i.length - 1]) ||
                    (6 !== c[0] && 2 !== c[0]))
                ) {
                  o = 0;
                  continue;
                }
                if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                  o.label = c[1];
                  break;
                }
                if (6 === c[0] && o.label < i[1]) {
                  (o.label = i[1]), (i = c);
                  break;
                }
                if (i && o.label < i[2]) {
                  (o.label = i[2]), o.ops.push(c);
                  break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
            }
            c = e.call(t, o);
          } catch (t) {
            (c = [6, t]), (r = 0);
          } finally {
            n = i = 0;
          }
        if (5 & c[0]) throw c[1];
        return { value: c[0] ? c[1] : void 0, done: !0 };
      })([c, a]);
    };
  }
}
"function" == typeof SuppressedError && SuppressedError;
var n,
  r =
    ((n = 0),
    function () {
      return (
        (n += 1),
        "u"
          .concat(
            "0000"
              .concat(((Math.random() * Math.pow(36, 4)) | 0).toString(36))
              .slice(-4),
          )
          .concat(n)
      );
    });
function i(t) {
  for (var e = [], n = 0, r = t.length; n < r; n++) e.push(t[n]);
  return e;
}
function o(t, e) {
  var n = (t.ownerDocument.defaultView || window)
    .getComputedStyle(t)
    .getPropertyValue(e);
  return n ? parseFloat(n.replace("px", "")) : 0;
}
function u(t, e) {
  void 0 === e && (e = {});
  var n,
    r,
    i,
    u =
      e.width ||
      ((r = o((n = t), "border-left-width")),
      (i = o(n, "border-right-width")),
      n.clientWidth + r + i),
    c =
      e.height ||
      (function (t) {
        var e = o(t, "border-top-width"),
          n = o(t, "border-bottom-width");
        return t.clientHeight + e + n;
      })(t);
  return { width: u, height: c };
}
var c = 16384;
function a(t, e) {
  return (
    void 0 === e && (e = {}),
    t.toBlob
      ? new Promise(function (n) {
          t.toBlob(n, e.type ? e.type : "image/png", e.quality ? e.quality : 1);
        })
      : new Promise(function (n) {
          for (
            var r = window.atob(
                t
                  .toDataURL(
                    e.type ? e.type : void 0,
                    e.quality ? e.quality : void 0,
                  )
                  .split(",")[1],
              ),
              i = r.length,
              o = new Uint8Array(i),
              u = 0;
            u < i;
            u += 1
          )
            o[u] = r.charCodeAt(u);
          n(new Blob([o], { type: e.type ? e.type : "image/png" }));
        })
  );
}
function s(t) {
  return new Promise(function (e, n) {
    var r = new Image();
    (r.decode = function () {
      return e(r);
    }),
      (r.onload = function () {
        return e(r);
      }),
      (r.onerror = n),
      (r.crossOrigin = "anonymous"),
      (r.decoding = "async"),
      (r.src = t);
  });
}
function l(n) {
  return t(this, void 0, void 0, function () {
    return e(this, function (t) {
      return [
        2,
        Promise.resolve()
          .then(function () {
            return new XMLSerializer().serializeToString(n);
          })
          .then(encodeURIComponent)
          .then(function (t) {
            return "data:image/svg+xml;charset=utf-8,".concat(t);
          }),
      ];
    });
  });
}
function f(n, r, i) {
  return t(this, void 0, void 0, function () {
    var t, o, u;
    return e(this, function (e) {
      return (
        (t = "http://www.w3.org/2000/svg"),
        (o = document.createElementNS(t, "svg")),
        (u = document.createElementNS(t, "foreignObject")),
        o.setAttribute("width", "".concat(r)),
        o.setAttribute("height", "".concat(i)),
        o.setAttribute("viewBox", "0 0 ".concat(r, " ").concat(i)),
        u.setAttribute("width", "100%"),
        u.setAttribute("height", "100%"),
        u.setAttribute("x", "0"),
        u.setAttribute("y", "0"),
        u.setAttribute("externalResourcesRequired", "true"),
        o.appendChild(u),
        u.appendChild(n),
        [2, l(o)]
      );
    });
  });
}
var h = function (t, e) {
  if (t instanceof e) return !0;
  var n = Object.getPrototypeOf(t);
  return null !== n && (n.constructor.name === e.name || h(n, e));
};
function d(t, e, n) {
  var r = ".".concat(t, ":").concat(e),
    o = n.cssText
      ? (function (t) {
          var e = t.getPropertyValue("content");
          return ""
            .concat(t.cssText, " content: '")
            .concat(e.replace(/'|"/g, ""), "';");
        })(n)
      : (function (t) {
          return i(t)
            .map(function (e) {
              var n = t.getPropertyValue(e),
                r = t.getPropertyPriority(e);
              return ""
                .concat(e, ": ")
                .concat(n)
                .concat(r ? " !important" : "", ";");
            })
            .join(" ");
        })(n);
  return document.createTextNode("".concat(r, "{").concat(o, "}"));
}
function v(t, e, n) {
  var i = window.getComputedStyle(t, n),
    o = i.getPropertyValue("content");
  if ("" !== o && "none" !== o) {
    var u = r();
    try {
      e.className = "".concat(e.className, " ").concat(u);
    } catch (t) {
      return;
    }
    var c = document.createElement("style");
    c.appendChild(d(u, n, i)), e.appendChild(c);
  }
}
var p = "application/font-woff",
  g = "image/jpeg",
  m = {
    woff: p,
    woff2: p,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: g,
    jpeg: g,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml",
    webp: "image/webp",
  };
function w(t) {
  var e = (function (t) {
    var e = /\.([^./]*?)$/g.exec(t);
    return e ? e[1] : "";
  })(t).toLowerCase();
  return m[e] || "";
}
function b(t) {
  return -1 !== t.search(/^(data:)/);
}
function y(t, e) {
  return "data:".concat(e, ";base64,").concat(t);
}
function S(n, r, i) {
  return t(this, void 0, void 0, function () {
    var t, o;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return [4, fetch(n, r)];
        case 1:
          if (404 === (t = e.sent()).status)
            throw new Error('Resource "'.concat(t.url, '" not found'));
          return [4, t.blob()];
        case 2:
          return (
            (o = e.sent()),
            [
              2,
              new Promise(function (e, n) {
                var r = new FileReader();
                (r.onerror = n),
                  (r.onloadend = function () {
                    try {
                      e(i({ res: t, result: r.result }));
                    } catch (t) {
                      n(t);
                    }
                  }),
                  r.readAsDataURL(o);
              }),
            ]
          );
      }
    });
  });
}
var x = {};
function E(n, r, i) {
  return t(this, void 0, void 0, function () {
    var t, o, u, c, a;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          if (
            ((t = (function (t, e, n) {
              var r = t.replace(/\?.*/, "");
              return (
                n && (r = t),
                /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")),
                e ? "[".concat(e, "]").concat(r) : r
              );
            })(n, r, i.includeQueryParams)),
            null != x[t])
          )
            return [2, x[t]];
          i.cacheBust &&
            (n += (/\?/.test(n) ? "&" : "?") + new Date().getTime()),
            (e.label = 1);
        case 1:
          return (
            e.trys.push([1, 3, , 4]),
            [
              4,
              S(n, i.fetchRequestInit, function (t) {
                var e = t.res,
                  n = t.result;
                return (
                  r || (r = e.headers.get("Content-Type") || ""),
                  (function (t) {
                    return t.split(/,/)[1];
                  })(n)
                );
              }),
            ]
          );
        case 2:
          return (u = e.sent()), (o = y(u, r)), [3, 4];
        case 3:
          return (
            (c = e.sent()),
            (o = i.imagePlaceholder || ""),
            (a = "Failed to fetch resource: ".concat(n)),
            c && (a = "string" == typeof c ? c : c.message),
            a && console.warn(a),
            [3, 4]
          );
        case 4:
          return (x[t] = o), [2, o];
      }
    });
  });
}
function C(n) {
  return t(this, void 0, void 0, function () {
    var t;
    return e(this, function (e) {
      return "data:," === (t = n.toDataURL())
        ? [2, n.cloneNode(!1)]
        : [2, s(t)];
    });
  });
}
function P(n, r) {
  return t(this, void 0, void 0, function () {
    var t, i, o, u;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return n.currentSrc
            ? ((t = document.createElement("canvas")),
              (i = t.getContext("2d")),
              (t.width = n.clientWidth),
              (t.height = n.clientHeight),
              null == i || i.drawImage(n, 0, 0, t.width, t.height),
              [2, s(t.toDataURL())])
            : ((o = n.poster), (u = w(o)), [4, E(o, u, r)]);
        case 1:
          return [2, s(e.sent())];
      }
    });
  });
}
function R(n) {
  var r;
  return t(this, void 0, void 0, function () {
    return e(this, function (t) {
      switch (t.label) {
        case 0:
          return (
            t.trys.push([0, 3, , 4]),
            (
              null === (r = null == n ? void 0 : n.contentDocument) ||
              void 0 === r
                ? void 0
                : r.body
            )
              ? [4, L(n.contentDocument.body, {}, !0)]
              : [3, 2]
          );
        case 1:
          return [2, t.sent()];
        case 2:
          return [3, 4];
        case 3:
          return t.sent(), [3, 4];
        case 4:
          return [2, n.cloneNode(!1)];
      }
    });
  });
}
var T = function (t) {
  return null != t.tagName && "SLOT" === t.tagName.toUpperCase();
};
function A(t, e) {
  return (
    h(e, Element) &&
      ((function (t, e) {
        var n = e.style;
        if (n) {
          var r = window.getComputedStyle(t);
          r.cssText
            ? ((n.cssText = r.cssText), (n.transformOrigin = r.transformOrigin))
            : i(r).forEach(function (i) {
                var o = r.getPropertyValue(i);
                if ("font-size" === i && o.endsWith("px")) {
                  var u =
                    Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1;
                  o = "".concat(u, "px");
                }
                h(t, HTMLIFrameElement) &&
                  "display" === i &&
                  "inline" === o &&
                  (o = "block"),
                  "d" === i &&
                    e.getAttribute("d") &&
                    (o = "path(".concat(e.getAttribute("d"), ")")),
                  n.setProperty(i, o, r.getPropertyPriority(i));
              });
        }
      })(t, e),
      (function (t, e) {
        v(t, e, ":before"), v(t, e, ":after");
      })(t, e),
      (function (t, e) {
        h(t, HTMLTextAreaElement) && (e.innerHTML = t.value),
          h(t, HTMLInputElement) && e.setAttribute("value", t.value);
      })(t, e),
      (function (t, e) {
        if (h(t, HTMLSelectElement)) {
          var n = e,
            r = Array.from(n.children).find(function (e) {
              return t.value === e.getAttribute("value");
            });
          r && r.setAttribute("selected", "");
        }
      })(t, e)),
    e
  );
}
function L(n, r, o) {
  return t(this, void 0, void 0, function () {
    return e(this, function (u) {
      return o || !r.filter || r.filter(n)
        ? [
            2,
            Promise.resolve(n)
              .then(function (n) {
                return (function (n, r) {
                  return t(this, void 0, void 0, function () {
                    return e(this, function (t) {
                      return h(n, HTMLCanvasElement)
                        ? [2, C(n)]
                        : h(n, HTMLVideoElement)
                          ? [2, P(n, r)]
                          : h(n, HTMLIFrameElement)
                            ? [2, R(n)]
                            : [2, n.cloneNode(!1)];
                    });
                  });
                })(n, r);
              })
              .then(function (o) {
                return (function (n, r, o) {
                  var u, c;
                  return t(this, void 0, void 0, function () {
                    var t;
                    return e(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return (
                            (t = []),
                            0 ===
                              (t =
                                T(n) && n.assignedNodes
                                  ? i(n.assignedNodes())
                                  : h(n, HTMLIFrameElement) &&
                                      (null === (u = n.contentDocument) ||
                                      void 0 === u
                                        ? void 0
                                        : u.body)
                                    ? i(n.contentDocument.body.childNodes)
                                    : i(
                                        (null !== (c = n.shadowRoot) &&
                                        void 0 !== c
                                          ? c
                                          : n
                                        ).childNodes,
                                      )).length || h(n, HTMLVideoElement)
                              ? [2, r]
                              : [
                                  4,
                                  t.reduce(function (t, e) {
                                    return t
                                      .then(function () {
                                        return L(e, o);
                                      })
                                      .then(function (t) {
                                        t && r.appendChild(t);
                                      });
                                  }, Promise.resolve()),
                                ]
                          );
                        case 1:
                          return e.sent(), [2, r];
                      }
                    });
                  });
                })(n, o, r);
              })
              .then(function (t) {
                return A(n, t);
              })
              .then(function (n) {
                return (function (n, r) {
                  return t(this, void 0, void 0, function () {
                    var t, i, o, u, c, a, s, l, f, h, d, v, p;
                    return e(this, function (e) {
                      switch (e.label) {
                        case 0:
                          if (
                            0 ===
                            (t = n.querySelectorAll
                              ? n.querySelectorAll("use")
                              : []).length
                          )
                            return [2, n];
                          (i = {}), (p = 0), (e.label = 1);
                        case 1:
                          return p < t.length
                            ? ((o = t[p]),
                              (u = o.getAttribute("xlink:href"))
                                ? ((c = n.querySelector(u)),
                                  (a = document.querySelector(u)),
                                  c || !a || i[u]
                                    ? [3, 3]
                                    : ((s = i), (l = u), [4, L(a, r, !0)]))
                                : [3, 3])
                            : [3, 4];
                        case 2:
                          (s[l] = e.sent()), (e.label = 3);
                        case 3:
                          return p++, [3, 1];
                        case 4:
                          if ((f = Object.values(i)).length) {
                            for (
                              h = "http://www.w3.org/1999/xhtml",
                                (d = document.createElementNS(
                                  h,
                                  "svg",
                                )).setAttribute("xmlns", h),
                                d.style.position = "absolute",
                                d.style.width = "0",
                                d.style.height = "0",
                                d.style.overflow = "hidden",
                                d.style.display = "none",
                                v = document.createElementNS(h, "defs"),
                                d.appendChild(v),
                                p = 0;
                              p < f.length;
                              p++
                            )
                              v.appendChild(f[p]);
                            n.appendChild(d);
                          }
                          return [2, n];
                      }
                    });
                  });
                })(n, r);
              }),
          ]
        : [2, null];
    });
  });
}
var N = /url\((['"]?)([^'"]+?)\1\)/g,
  k = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
  I = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function D(n, r, i, o, u) {
  return t(this, void 0, void 0, function () {
    var t, c, a, s;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return (
            e.trys.push([0, 5, , 6]),
            (t = i
              ? (function (t, e) {
                  if (t.match(/^[a-z]+:\/\//i)) return t;
                  if (t.match(/^\/\//)) return window.location.protocol + t;
                  if (t.match(/^[a-z]+:/i)) return t;
                  var n = document.implementation.createHTMLDocument(),
                    r = n.createElement("base"),
                    i = n.createElement("a");
                  return (
                    n.head.appendChild(r),
                    n.body.appendChild(i),
                    e && (r.href = e),
                    (i.href = t),
                    i.href
                  );
                })(r, i)
              : r),
            (c = w(r)),
            (a = void 0),
            u ? [4, u(t)] : [3, 2]
          );
        case 1:
          return (s = e.sent()), (a = y(s, c)), [3, 4];
        case 2:
          return [4, E(t, c, o)];
        case 3:
          (a = e.sent()), (e.label = 4);
        case 4:
          return [
            2,
            n.replace(
              ((l = r),
              (f = l.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")),
              new RegExp("(url\\(['\"]?)(".concat(f, ")(['\"]?\\))"), "g")),
              "$1".concat(a, "$3"),
            ),
          ];
        case 5:
          return e.sent(), [3, 6];
        case 6:
          return [2, n];
      }
      var l, f;
    });
  });
}
function M(t) {
  return -1 !== t.search(N);
}
function H(n, r, i) {
  return t(this, void 0, void 0, function () {
    var t, o;
    return e(this, function (e) {
      return M(n)
        ? ((t = (function (t, e) {
            var n = e.preferredFontFormat;
            return n
              ? t.replace(I, function (t) {
                  for (;;) {
                    var e = k.exec(t) || [],
                      r = e[0],
                      i = e[2];
                    if (!i) return "";
                    if (i === n) return "src: ".concat(r, ";");
                  }
                })
              : t;
          })(n, i)),
          (o = (function (t) {
            var e = [];
            return (
              t.replace(N, function (t, n, r) {
                return e.push(r), t;
              }),
              e.filter(function (t) {
                return !b(t);
              })
            );
          })(t)),
          [
            2,
            o.reduce(function (t, e) {
              return t.then(function (t) {
                return D(t, e, r, i);
              });
            }, Promise.resolve(t)),
          ])
        : [2, n];
    });
  });
}
function V(n, r, i) {
  var o;
  return t(this, void 0, void 0, function () {
    var t, u;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return (t =
            null === (o = r.style) || void 0 === o
              ? void 0
              : o.getPropertyValue(n))
            ? [4, H(t, null, i)]
            : [3, 2];
        case 1:
          return (
            (u = e.sent()),
            r.style.setProperty(n, u, r.style.getPropertyPriority(n)),
            [2, !0]
          );
        case 2:
          return [2, !1];
      }
    });
  });
}
function j(n, r) {
  return t(this, void 0, void 0, function () {
    return e(this, function (t) {
      switch (t.label) {
        case 0:
          return [4, V("background", n, r)];
        case 1:
          return t.sent() ? [3, 3] : [4, V("background-image", n, r)];
        case 2:
          t.sent(), (t.label = 3);
        case 3:
          return [4, V("mask", n, r)];
        case 4:
          return t.sent() ? [3, 6] : [4, V("mask-image", n, r)];
        case 5:
          t.sent(), (t.label = 6);
        case 6:
          return [2];
      }
    });
  });
}
function O(n, r) {
  return t(this, void 0, void 0, function () {
    var t, i, o;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return ((t = h(n, HTMLImageElement)) && !b(n.src)) ||
            (h(n, SVGImageElement) && !b(n.href.baseVal))
            ? [4, E((i = t ? n.src : n.href.baseVal), w(i), r)]
            : [2];
        case 1:
          return (
            (o = e.sent()),
            [
              4,
              new Promise(function (e, r) {
                (n.onload = e), (n.onerror = r);
                var i = n;
                i.decode && (i.decode = e),
                  "lazy" === i.loading && (i.loading = "eager"),
                  t ? ((n.srcset = ""), (n.src = o)) : (n.href.baseVal = o);
              }),
            ]
          );
        case 2:
          return e.sent(), [2];
      }
    });
  });
}
function q(n, r) {
  return t(this, void 0, void 0, function () {
    var t, o;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return (
            (t = i(n.childNodes)),
            (o = t.map(function (t) {
              return F(t, r);
            })),
            [
              4,
              Promise.all(o).then(function () {
                return n;
              }),
            ]
          );
        case 1:
          return e.sent(), [2];
      }
    });
  });
}
function F(n, r) {
  return t(this, void 0, void 0, function () {
    return e(this, function (t) {
      switch (t.label) {
        case 0:
          return h(n, Element) ? [4, j(n, r)] : [3, 4];
        case 1:
          return t.sent(), [4, O(n, r)];
        case 2:
          return t.sent(), [4, q(n, r)];
        case 3:
          t.sent(), (t.label = 4);
        case 4:
          return [2];
      }
    });
  });
}
var U = {};
function z(n) {
  return t(this, void 0, void 0, function () {
    var t, r;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return null != (t = U[n]) ? [2, t] : [4, fetch(n)];
        case 1:
          return [4, e.sent().text()];
        case 2:
          return (
            (r = e.sent()), (t = { url: n, cssText: r }), (U[n] = t), [2, t]
          );
      }
    });
  });
}
function B(n, r) {
  return t(this, void 0, void 0, function () {
    var i,
      o,
      u,
      c,
      a = this;
    return e(this, function (s) {
      return (
        (i = n.cssText),
        (o = /url\(["']?([^"')]+)["']?\)/g),
        (u = i.match(/url\([^)]+\)/g) || []),
        (c = u.map(function (u) {
          return t(a, void 0, void 0, function () {
            var t;
            return e(this, function (e) {
              return (
                (t = u.replace(o, "$1")).startsWith("https://") ||
                  (t = new URL(t, n.url).href),
                [
                  2,
                  S(t, r.fetchRequestInit, function (t) {
                    var e = t.result;
                    return (i = i.replace(u, "url(".concat(e, ")"))), [u, e];
                  }),
                ]
              );
            });
          });
        })),
        [
          2,
          Promise.all(c).then(function () {
            return i;
          }),
        ]
      );
    });
  });
}
function W(t) {
  if (null == t) return [];
  for (
    var e = [],
      n = t.replace(/(\/\*[\s\S]*?\*\/)/gi, ""),
      r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    ;

  ) {
    if (null === (u = r.exec(n))) break;
    e.push(u[0]);
  }
  n = n.replace(r, "");
  for (
    var i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
      o = new RegExp(
        "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
        "gi",
      );
    ;

  ) {
    var u;
    if (null === (u = i.exec(n))) {
      if (null === (u = o.exec(n))) break;
      i.lastIndex = o.lastIndex;
    } else o.lastIndex = i.lastIndex;
    e.push(u[0]);
  }
  return e;
}
function $(n, r) {
  return t(this, void 0, void 0, function () {
    var t, o;
    return e(this, function (e) {
      return (
        (t = []),
        (o = []),
        n.forEach(function (t) {
          if ("cssRules" in t)
            try {
              i(t.cssRules || []).forEach(function (e, n) {
                if (e.type === CSSRule.IMPORT_RULE) {
                  var i = n + 1,
                    u = z(e.href)
                      .then(function (t) {
                        return B(t, r);
                      })
                      .then(function (e) {
                        return W(e).forEach(function (e) {
                          try {
                            t.insertRule(
                              e,
                              e.startsWith("@import")
                                ? (i += 1)
                                : t.cssRules.length,
                            );
                          } catch (t) {
                            console.error(
                              "Error inserting rule from remote css",
                              { rule: e, error: t },
                            );
                          }
                        });
                      })
                      .catch(function (t) {
                        console.error("Error loading remote css", t.toString());
                      });
                  o.push(u);
                }
              });
            } catch (i) {
              var e =
                n.find(function (t) {
                  return null == t.href;
                }) || document.styleSheets[0];
              null != t.href &&
                o.push(
                  z(t.href)
                    .then(function (t) {
                      return B(t, r);
                    })
                    .then(function (n) {
                      return W(n).forEach(function (n) {
                        e.insertRule(n, t.cssRules.length);
                      });
                    })
                    .catch(function (t) {
                      console.error("Error loading remote stylesheet", t);
                    }),
                ),
                console.error("Error inlining remote css file", i);
            }
        }),
        [
          2,
          Promise.all(o).then(function () {
            return (
              n.forEach(function (e) {
                if ("cssRules" in e)
                  try {
                    i(e.cssRules || []).forEach(function (e) {
                      t.push(e);
                    });
                  } catch (t) {
                    console.error(
                      "Error while reading CSS rules from ".concat(e.href),
                      t,
                    );
                  }
              }),
              t
            );
          }),
        ]
      );
    });
  });
}
function _(t) {
  return t
    .filter(function (t) {
      return t.type === CSSRule.FONT_FACE_RULE;
    })
    .filter(function (t) {
      return M(t.style.getPropertyValue("src"));
    });
}
function G(n, r) {
  return t(this, void 0, void 0, function () {
    return e(this, function (t) {
      switch (t.label) {
        case 0:
          if (null == n.ownerDocument)
            throw new Error("Provided element is not within a Document");
          return [4, $(i(n.ownerDocument.styleSheets), r)];
        case 1:
          return [2, _(t.sent())];
      }
    });
  });
}
function Q(n, r) {
  return t(this, void 0, void 0, function () {
    var t;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return [4, G(n, r)];
        case 1:
          return (
            (t = e.sent()),
            [
              4,
              Promise.all(
                t.map(function (t) {
                  var e = t.parentStyleSheet ? t.parentStyleSheet.href : null;
                  return H(t.cssText, e, r);
                }),
              ),
            ]
          );
        case 2:
          return [2, e.sent().join("\n")];
      }
    });
  });
}
function X(n, r) {
  return t(this, void 0, void 0, function () {
    var t, i, o, u, c;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return null == r.fontEmbedCSS
            ? [3, 1]
            : ((i = r.fontEmbedCSS), [3, 5]);
        case 1:
          return r.skipFonts ? ((o = null), [3, 4]) : [3, 2];
        case 2:
          return [4, Q(n, r)];
        case 3:
          (o = e.sent()), (e.label = 4);
        case 4:
          (i = o), (e.label = 5);
        case 5:
          return (
            (t = i) &&
              ((u = document.createElement("style")),
              (c = document.createTextNode(t)),
              u.appendChild(c),
              n.firstChild
                ? n.insertBefore(u, n.firstChild)
                : n.appendChild(u)),
            [2]
          );
      }
    });
  });
}
function J(n, r) {
  return (
    void 0 === r && (r = {}),
    t(this, void 0, void 0, function () {
      var t, i, o, c;
      return e(this, function (e) {
        switch (e.label) {
          case 0:
            return (
              (t = u(n, r)), (i = t.width), (o = t.height), [4, L(n, r, !0)]
            );
          case 1:
            return [4, X((c = e.sent()), r)];
          case 2:
            return e.sent(), [4, F(c, r)];
          case 3:
            return (
              e.sent(),
              (function (t, e) {
                var n = t.style;
                e.backgroundColor && (n.backgroundColor = e.backgroundColor),
                  e.width && (n.width = "".concat(e.width, "px")),
                  e.height && (n.height = "".concat(e.height, "px"));
                var r = e.style;
                null != r &&
                  Object.keys(r).forEach(function (t) {
                    n[t] = r[t];
                  });
              })(c, r),
              [4, f(c, i, o)]
            );
          case 4:
            return [2, e.sent()];
        }
      });
    })
  );
}
function K(n, r) {
  return (
    void 0 === r && (r = {}),
    t(this, void 0, void 0, function () {
      var t, i, o, a, l, f, h, d, v;
      return e(this, function (e) {
        switch (e.label) {
          case 0:
            return (t = u(n, r)), (i = t.width), (o = t.height), [4, J(n, r)];
          case 1:
            return [4, s(e.sent())];
          case 2:
            return (
              (a = e.sent()),
              (l = document.createElement("canvas")),
              (f = l.getContext("2d")),
              (h =
                r.pixelRatio ||
                (function () {
                  var t, e;
                  try {
                    e = process;
                  } catch (t) {}
                  var n = e && e.env ? e.env.devicePixelRatio : null;
                  return (
                    n && ((t = parseInt(n, 10)), Number.isNaN(t) && (t = 1)),
                    t || window.devicePixelRatio || 1
                  );
                })()),
              (d = r.canvasWidth || i),
              (v = r.canvasHeight || o),
              (l.width = d * h),
              (l.height = v * h),
              r.skipAutoScale ||
                (function (t) {
                  (t.width > c || t.height > c) &&
                    (t.width > c && t.height > c
                      ? t.width > t.height
                        ? ((t.height *= c / t.width), (t.width = c))
                        : ((t.width *= c / t.height), (t.height = c))
                      : t.width > c
                        ? ((t.height *= c / t.width), (t.width = c))
                        : ((t.width *= c / t.height), (t.height = c)));
                })(l),
              (l.style.width = "".concat(d)),
              (l.style.height = "".concat(v)),
              r.backgroundColor &&
                ((f.fillStyle = r.backgroundColor),
                f.fillRect(0, 0, l.width, l.height)),
              f.drawImage(a, 0, 0, l.width, l.height),
              [2, l]
            );
        }
      });
    })
  );
}
function Y(n, r) {
  return (
    void 0 === r && (r = {}),
    t(this, void 0, void 0, function () {
      var t, i, o, c;
      return e(this, function (e) {
        switch (e.label) {
          case 0:
            return (t = u(n, r)), (i = t.width), (o = t.height), [4, K(n, r)];
          case 1:
            return (
              (c = e.sent()),
              [2, c.getContext("2d").getImageData(0, 0, i, o).data]
            );
        }
      });
    })
  );
}
function Z(n, r) {
  return (
    void 0 === r && (r = {}),
    t(this, void 0, void 0, function () {
      return e(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, K(n, r)];
          case 1:
            return [2, t.sent().toDataURL()];
        }
      });
    })
  );
}
function tt(n, r) {
  return (
    void 0 === r && (r = {}),
    t(this, void 0, void 0, function () {
      return e(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, K(n, r)];
          case 1:
            return [2, t.sent().toDataURL("image/jpeg", r.quality || 1)];
        }
      });
    })
  );
}
function et(n, r) {
  return (
    void 0 === r && (r = {}),
    t(this, void 0, void 0, function () {
      return e(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, K(n, r)];
          case 1:
            return [4, a(t.sent())];
          case 2:
            return [2, t.sent()];
        }
      });
    })
  );
}
function nt(n, r) {
  return (
    void 0 === r && (r = {}),
    t(this, void 0, void 0, function () {
      return e(this, function (t) {
        return [2, Q(n, r)];
      });
    })
  );
}

export const toPng = (selector, name = "img") =>
  Z(document.querySelector(selector)).then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = name + ".png";
    link.href = dataUrl;
    link.click();
  });

export const toJpeg = (selector) =>
  tt(document.querySelector(selector), { quality: 0.95 }).then(
    function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    },
  );

export {
  nt as getFontEmbedCSS,
  et as toBlob,
  K as toCanvas,
  // tt as toJpeg,
  Y as toPixelData,
  // Z as toPng,
  J as toSvg,
};
