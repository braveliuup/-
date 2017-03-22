!function() {
    "use strict";
    var e, n, t, i, o = window, a = document, r = Object, s = null, c = !0, l = !1, d = " ", u = "Element", f = "create" + u, m = "DOMTokenList", v = "__defineGetter__", h = "defineProperty", p = "class", g = "List", y = p + g, w = "rel", b = w + g, x = "div", C = "length", E = "contains", T = "apply", M = "HTML", A = ("item " + E + " add remove toggle toString toLocaleString").split(d), L = A[2], S = A[3], N = A[4], D = "prototype", I = h in r || v in r[D] || s, k = function(e, n, t, i) {
        r[h] ? r[h](e, n, {
            configurable: l === I ? c : !!i,
            get: t
        }) : e[v](n, t)
    }, P = function(n, t) {
        var i = this
          , o = []
          , a = {}
          , s = 0
          , u = 0
          , f = function() {
            if (s >= u)
                for (; u < s; ++u)
                    (function(e) {
                        k(i, e, function() {
                            return m(),
                            o[e]
                        }, l)
                    })(u)
        }
          , m = function() {
            var e, i, r = arguments, l = /\s+/;
            if (r[C])
                for (i = 0; i < r[C]; ++i)
                    if (l.test(r[i]))
                        throw e = new SyntaxError('String "' + r[i] + '" ' + E + " an invalid character"),
                        e.code = 5,
                        e.name = "InvalidCharacterError",
                        e;
            for (o = ("" + n[t]).replace(/^\s+|\s+$/g, "").split(l),
            "" === o[0] && (o = []),
            a = {},
            i = 0; i < o[C]; ++i)
                a[o[i]] = c;
            s = o[C],
            f()
        };
        return m(),
        k(i, C, function() {
            return m(),
            s
        }),
        i[A[6]] = i[A[5]] = function() {
            return m(),
            o.join(d)
        }
        ,
        i.item = function(e) {
            return m(),
            o[e]
        }
        ,
        i[E] = function(e) {
            return m(),
            !!a[e]
        }
        ,
        i[L] = function() {
            m[T](i, e = arguments);
            for (var e, r, l = 0, u = e[C]; l < u; ++l)
                r = e[l],
                a[r] || (o.push(r),
                a[r] = c);
            s !== o[C] && (s = o[C] >>> 0,
            n[t] = o.join(d),
            f())
        }
        ,
        i[S] = function() {
            m[T](i, e = arguments);
            for (var e, r = {}, l = 0, u = []; l < e[C]; ++l)
                r[e[l]] = c,
                delete a[e[l]];
            for (l = 0; l < o[C]; ++l)
                r[o[l]] || u.push(o[l]);
            o = u,
            s = u[C] >>> 0,
            n[t] = o.join(d),
            f()
        }
        ,
        i[N] = function(n, t) {
            return m[T](i, [n]),
            e !== t ? t ? (i[L](n),
            c) : (i[S](n),
            l) : a[n] ? (i[S](n),
            l) : (i[L](n),
            c)
        }
        ,
        function(e, n) {
            if (n)
                for (var t = 0; t < 7; ++t)
                    n(e, A[t], {
                        enumerable: l
                    })
        }(i, r[h]),
        i
    }, _ = function(e, n, t) {
        k(e[D], n, function() {
            var e, i = this, o = v + h + n;
            if (i[o])
                return e;
            if (i[o] = c,
            l === I) {
                for (var r, s = _.mirror = _.mirror || a[f](x), d = s.childNodes, u = d[C], m = 0; m < u; ++m)
                    if (d[m]._R === i) {
                        r = d[m];
                        break
                    }
                r || (r = s.appendChild(a[f](x))),
                e = P.call(r, i, t)
            } else
                e = new P(i,t);
            return k(i, n, function() {
                return e
            }),
            delete i[o],
            e
        }, c)
    };
    if (o[m])
        n = a[f](x)[y],
        D = o[m][D],
        n[L][T](n, A),
        2 > n[C] && (t = D[L],
        i = D[S],
        D[L] = function() {
            for (var e = 0, n = arguments; e < n[C]; ++e)
                t.call(this, n[e])
        }
        ,
        D[S] = function() {
            for (var e = 0, n = arguments; e < n[C]; ++e)
                i.call(this, n[e])
        }
        ),
        n[N](g, l) && (D[N] = function(n, t) {
            var i = this;
            return i[(t = e === t ? !i[E](n) : t) ? L : S](n),
            !!t
        }
        );
    else {
        if (I)
            try {
                k({}, "support")
            } catch (O) {
                I = l
            }
        P.polyfill = c,
        o[m] = P,
        _(o[u], y, p + "Name"),
        _(o[M + "Link" + u], b, w),
        _(o[M + "Anchor" + u], b, w),
        _(o[M + "Area" + u], b, w)
    }
}(),
Date.now || (Date.now = function() {
    return (new Date).getTime()
}
),
function() {
    "use strict";
    for (var e = ["webkit", "moz"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) {
        var t = e[n];
        window.requestAnimationFrame = window[t + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var i = 0;
        window.requestAnimationFrame = function(e) {
            var n = Date.now()
              , t = Math.max(i + 16, n);
            return setTimeout(function() {
                e(i = t)
            }, t - n)
        }
        ,
        window.cancelAnimationFrame = clearTimeout
    }
}(),
function() {
    "use strict";
    "remove"in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }
    )
}();
var gn = function(e) {
    return e
}(window.gn || {});
gn.extend = function() {
    for (var e, n, t, i = arguments[0] || {}, o = 1, a = arguments.length; o < a; o++)
        if (null !== (e = arguments[o]))
            for (n in e)
                t = e[n],
                i !== t && void 0 !== t && (i[n] = t);
    return i
}
,
gn.indexOf = function(e, n) {
    for (var t = 0; t < e.length; t++)
        if (e[t] === n)
            return t;
    return -1
}
,
gn.getSupportedProp = function(e) {
    for (var n = document.documentElement, t = 0; t < e.length; t++)
        if (e[t]in n.style)
            return e[t]
}
,
gn.ready = function(e) {
    if ("function" == typeof e)
        return "complete" === document.readyState ? e() : void document.addEventListener("DOMContentLoaded", e, !1)
}
,
gn.isNodeList = function(e) {
    return "undefined" != typeof e.item
}
,
gn.append = function(e, n) {
    var t, i = gn.isNodeList(e) ? e : [e];
    if ("undefined" != typeof n.nodeType && 1 === n.nodeType)
        for (t = i.length; t--; )
            i[t].appendChild(n);
    else if ("string" == typeof n)
        for (t = i.length; t--; )
            i[t].insertAdjacentHTML("beforeend", n);
    else if (gn.isNodeList(n)) {
        var o = document.createDocumentFragment();
        for (t = n.length; t--; )
            o.insertBefore(n[t], o.firstChild);
        for (var a = i.length; a--; )
            i[a].appendChild(o)
    }
}
,
gn.wrap = function(e, n) {
    for (var t = gn.isNodeList(e) ? e : [e], i = t.length; i--; ) {
        var o = i > 0 ? n.cloneNode(!0) : n
          , a = t[i]
          , r = a.parentNode
          , s = a.nextSibling;
        o.appendChild(a),
        s ? r.insertBefore(o, s) : r.appendChild(o)
    }
}
,
gn.unwrap = function(e) {
    for (var n = gn.isNodeList(e) ? e : [e], t = n.length; t--; ) {
        for (var i = n[t], o = i.parentNode; i.firstChild; )
            o.insertBefore(i.firstChild, i);
        o.removeChild(i)
    }
}
;
var tns = function() {
    "use strict";
    function e(e) {
        function o() {
            return "gallery" === ze || "page" === e.slideBy ? je : e.slideBy
        }
        function f() {
            return (Ne + Xe) / je
        }
        function g() {
            if (Re <= je) {
                $e = !1;
                var n;
                An = "gallery" === ze ? 0 : rn,
                An !== n && A.emit("indexChanged", be()),
                xn && l(xn),
                wn && l(wn),
                On && l(On)
            } else
                $e = e.arrowKeys,
                bn && d(xn),
                pn && d(wn),
                Dn && d(On)
        }
        function y() {
            if (r(Be, {
                "data-tns-role": "wrapper"
            }),
            r(Fe, {
                "data-tns-role": "content-wrapper"
            }),
            "vertical" === qe ? r(Fe, {
                "data-tns-hidden": "y"
            }) : r(Be, {
                "data-tns-hidden": "x"
            }),
            "carousel" === ze) {
                var e = Ke && Ye ? W() : Ye ? Ye + Xe : 0;
                Fe.style.cssText = "horizontal" === qe ? "margin: 0 " + e + "px;" : "padding: " + e + "px 0 " + Ye + "px; height: " + G() + "px;"
            }
        }
        function L() {
            Ne = Kn(),
            je = Xn(),
            Se = sn - je - Sn,
            "horizontal" !== qe || Ke || (on = f()),
            Le = Yn(),
            Ge = o()
        }
        function S() {
            "" === He.id && (He.id = tn),
            r(He, {
                "data-tns-role": "content",
                "data-tns-mode": ze,
                "data-tns-axis": qe
            }),
            "horizontal" === qe && (He.style.width = (on + 1) * sn + "px")
        }
        function N() {
            "carousel" === ze && (Ze && r(He, {
                "data-tns-hidden": "y"
            }),
            He.style[fn] = vn + Math.round(-Ee[An]) + "px" + hn)
        }
        function D() {
            navigator.msMaxTouchPoints && (Be.classList.add("ms-touch"),
            m(Be, ["scroll", ue]))
        }
        function I() {
            for (var e = 0; e < Re; e++) {
                var n = We[e];
                n.id = tn + "-item" + e,
                "gallery" === ze && Gn && n.classList.add(Gn),
                r(n, {
                    "aria-hidden": "true"
                });
                var t = "horizontal" === qe ? "right" : "bottom"
                  , i = "";
                "carousel" === ze && (i = "margin-" + t + ": " + Xe + "px;"),
                "horizontal" === qe && (i = "width: " + (on - Xe) + "px; " + i),
                n.style.cssText += i
            }
            if (Ve || Ye) {
                for (var o = document.createDocumentFragment(), a = document.createDocumentFragment(), c = rn; c--; ) {
                    var l = c % Re
                      , d = We[l].cloneNode(!0);
                    if (s(d, "id"),
                    a.insertBefore(d, a.firstChild),
                    "carousel" === ze) {
                        var u = We[Re - 1 - l].cloneNode(!0);
                        s(u, "id"),
                        o.appendChild(u)
                    }
                }
                He.insertBefore(o, He.firstChild),
                He.appendChild(a),
                We = He.children
            }
        }
        function k() {
            pn && (e.controlsContainer ? (Te = wn.children[0],
            Me = wn.children[1],
            r(wn, {
                "aria-label": "Carousel Navigation"
            }),
            r(Te, {
                "data-controls": "prev"
            }),
            r(Me, {
                "data-controls": "next"
            }),
            r(wn.children, {
                "aria-controls": tn,
                tabindex: "-1"
            })) : (gn.append(Be, '<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="' + tn + '" type="button">' + yn[0] + '</button><button data-controls="next" tabindex="0" aria-controls="' + tn + '" type="button">' + yn[1] + "</button></div>"),
            wn = Fe.nextElementSibling,
            Te = wn.children[0],
            Me = wn.children[1]))
        }
        function P() {
            if (bn)
                if (e.navContainer) {
                    r(xn, {
                        "aria-label": "Carousel Pagination"
                    }),
                    Ae = xn.children;
                    for (var n = Ae.length; n--; )
                        r(Ae[n], {
                            "data-nav": n,
                            tabindex: "-1",
                            "aria-selected": "false",
                            "aria-controls": tn + "-item" + n
                        })
                } else {
                    for (var t = "", i = 0; i < Re; i++)
                        t += '<button data-nav="' + i + '" tabindex="-1" aria-selected="false" aria-controls="' + tn + "-item" + i + '" type="button"></button>';
                    t = '<div data-tns-role="nav" aria-label="Carousel Pagination">' + t + "</div>",
                    gn.append(Be, t),
                    xn = wn.nextElementSibling,
                    Ae = xn.children;
                    for (var o = Le; o < Re; o++)
                        r(Ae[o], {
                            hidden: ""
                        });
                    Cn = Le
                }
        }
        function _() {
            Dn && (On ? r(On, {
                "data-action": "stop"
            }) : (xn || (gn.append(Be, '<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),
            xn = Be.querySelector('[data-tns-role="nav"]')),
            gn.append(xn, '<button data-action="stop" type="button">' + Bn + Pn[0] + "</button>"),
            On = xn.querySelector("[data-action]")),
            oe())
        }
        function O() {
            for (var e = An; e < An + je; e++) {
                var n = We[e];
                r(n, {
                    "aria-hidden": "false"
                }),
                "gallery" === ze && (n.style.left = on * (e - An) + "px",
                n.classList.remove(Gn),
                n.classList.add(Rn))
            }
            pn && (r(Me, {
                tabindex: "0"
            }),
            (An === Nn && !Ve || Qe) && (Te.disabled = !0)),
            bn && r(Ae[0], {
                tabindex: "0",
                "aria-selected": "true"
            })
        }
        function z() {
            if ("carousel" === ze && (x && m(He, [x, V]),
            Fn && m(He, [["touchstart", fe], ["touchmove", me], ["touchend", ve], ["touchcancel", ve]])),
            bn)
                for (var e = 0; e < Re; e++)
                    m(Ae[e], [["click", ie], ["keydown", de]]);
            pn && (m(Te, [["click", ne], ["keydown", le]]),
            m(Me, [["click", te], ["keydown", le]])),
            Dn && (m(On, ["click", re]),
            _n && (m(He, ["mouseover", function() {
                zn && (ae(),
                qn = !0)
            }
            ]),
            m(He, ["mouseout", function() {
                !zn && qn && (oe(),
                qn = !1)
            }
            ]))),
            $e && m(document, ["keydown", se]),
            "inner" === Ue ? A.on("outerResized", function() {
                xe(),
                A.emit("innerLoaded", be())
            }) : (m(window, ["resize", Ce]),
            "outer" === Ue && A.on("innerLoaded", B))
        }
        function q() {
            var e = []
              , n = An
              , t = An + je;
            for (Ye && (n -= 1,
            t += 1); n < t; n++) {
                for (var i = We[n].querySelectorAll('[data-tns-role="lazy-img"]'), o = i.length; o--; e.unshift(i[o]))
                    ;
                e.unshift()
            }
            for (var r = e.length; r--; ) {
                var s = e[r];
                s.classList.contains("loaded") || (s.src = a(s, "data-src"),
                s.classList.add("loaded"))
            }
        }
        function B() {
            for (var e = [], n = An; n < An + je; n++)
                for (var t = We[n].querySelectorAll("img"), i = t.length; i--; )
                    e.push(t[i]);
            0 === e.length ? R() : F(e)
        }
        function F(e) {
            for (var n = e.length; n--; )
                u(e[n]) && e.splice(n, 1);
            0 === e.length ? R() : setTimeout(function() {
                F(e)
            }, 16)
        }
        function H() {
            gn.wrap(He, Fe),
            gn.wrap(Fe, Be),
            L(),
            S(),
            I(),
            j(),
            y(),
            N(),
            D(),
            k(),
            P(),
            _(),
            O(),
            z(),
            g(),
            nn && q(),
            Ze && B(),
            A.emit("initialized", be()),
            "inner" === Ue && A.emit("innerLoaded", be())
        }
        function W() {
            return (Ne % on + Xe) / 2
        }
        function R() {
            for (var e, n = [], t = An; t < An + je; t++)
                n.push(We[t].offsetHeight);
            e = Math.max.apply(null, n),
            He.style.height !== e && (w && $(Je),
            He.style.height = e + "px")
        }
        function j() {
            Ee = [0];
            for (var e, n = We[0].getBoundingClientRect()[un], t = 1; t < sn; t++)
                e = We[t].getBoundingClientRect()[un],
                Ee.push(e - n)
        }
        function G() {
            return Ee[An + je] - Ee[An]
        }
        function U() {
            Be.style.msScrollSnapPointsX = "snapInterval(0%, " + on + ")"
        }
        function X() {
            var e, n, t, i;
            An !== Ln && (An > Ln ? (e = Ln,
            n = Math.min(Ln + je, An),
            t = Math.max(Ln + je, An),
            i = An + je) : (e = Math.max(An + je, Ln),
            n = Ln + je,
            t = An,
            i = Math.min(An + je, Ln))),
            Ge % 1 !== 0 && (e = Math.round(e),
            n = Math.round(n),
            t = Math.round(t),
            i = Math.round(i));
            for (var o = e; o < n; o++)
                r(We[o], {
                    "aria-hidden": "true"
                });
            for (var a = t; a < i; a++)
                r(We[a], {
                    "aria-hidden": "false"
                })
        }
        function Y() {
            bn && (En === -1 ? e.navContainer ? Tn = An % Re : (Tn = Math.floor(An % Re / je),
            Ve || Re % je === 0 || An !== Se || (Tn += 1)) : (Tn = En,
            En = -1),
            Tn !== Mn && (r(Ae[Mn], {
                tabindex: "-1",
                "aria-selected": "false"
            }),
            r(Ae[Tn], {
                tabindex: "0",
                "aria-selected": "true"
            }),
            Mn = Tn))
        }
        function K() {
            if (pn && !Ve) {
                var e = []
                  , n = [];
                if (An === Nn ? (e.push(Te),
                n.push(Me),
                ce(Te, Me)) : Qe || An !== Se ? n.push(Te, Me) : (e.push(Me),
                n.push(Te),
                ce(Me, Te)),
                e.length > 0)
                    for (var t = e.length; t--; ) {
                        var i = e[t];
                        i.disabled || (i.disabled = !0,
                        r(i, {
                            tabindex: "-1"
                        }))
                    }
                if (n.length > 0)
                    for (var o = n.length; o--; ) {
                        var a = n[o];
                        a.disabled && (a.disabled = !1,
                        r(a, {
                            tabindex: "0"
                        }))
                    }
            }
        }
        function $(e, n) {
            e = e ? e / 1e3 + "s" : "",
            n = n || He,
            n.style[w] = e,
            "gallery" === ze && (n.style[C] = e),
            "vertical" === qe && (Fe.style[w] = e)
        }
        function J(e, n) {
            void 0 === e && (e = Je),
            w && $(e),
            $n(e, n)
        }
        function Q() {
            r(He, {
                "aria-busy": "true"
            }),
            ln && Jn(),
            An !== Ln && A.emit("indexChanged", be()),
            A.emit("transitionStart", be()),
            J()
        }
        function V(e) {
            if (A.emit("transitionEnd", be(e)),
            "gallery" === ze && an.length > 0)
                for (var n = 0; n < je; n++) {
                    var t = an[n];
                    w && $(0, t),
                    Un && b && (t.style[b] = t.style[E] = ""),
                    t.classList.remove(jn),
                    t.classList.add(Gn),
                    t.style.left = ""
                }
            if (!e || e.target === He && e.propertyName === fn) {
                if (!ln) {
                    var i = An;
                    Jn(),
                    An !== i && (J(0),
                    A.emit("indexChanged", be()))
                }
                X(),
                Y(),
                K(),
                nn && q(),
                Ze && B(),
                "inner" === Ue && A.emit("innerLoaded", be()),
                s(He, "aria-busy"),
                Z()
            }
        }
        function Z() {
            Ln = An
        }
        function ee(e) {
            "true" !== a(He, "aria-busy") && (An += e * Ge,
            Q())
        }
        function ne() {
            ee(-1)
        }
        function te() {
            ee(Qe && An === Se ? -(Se - Nn) / Ge : 1)
        }
        function ie(n) {
            if ("true" !== a(He, "aria-busy")) {
                for (var t, i = n.target || n.srcElement; gn.indexOf(Ae, i) === -1; )
                    i = i.parentNode;
                t = En = Number(a(i, "data-nav"));
                var o = "gallery" === ze ? 0 : rn;
                An = e.navContainer ? t + o : t * je + o,
                An !== Ln && Q()
            }
        }
        function oe() {
            De = setInterval(function() {
                ee(kn)
            }, In),
            r(On, {
                "data-action": "stop"
            }),
            On.innerHTML = Bn + Pn[1],
            zn = !0
        }
        function ae() {
            clearInterval(De),
            r(On, {
                "data-action": "start"
            }),
            On.innerHTML = Bn.replace("Stop", "Start") + Pn[0],
            zn = !1
        }
        function re() {
            zn ? ae() : oe()
        }
        function se(e) {
            switch (e = e || window.event,
            e.keyCode) {
            case M.LEFT:
                ne();
                break;
            case M.RIGHT:
                te()
            }
        }
        function ce(e, n) {
            "object" == typeof e && "object" == typeof n && e === document.activeElement && (e.blur(),
            n.focus())
        }
        function le(e) {
            e = e || window.event;
            var n = e.keyCode
              , t = document.activeElement;
            switch (n) {
            case M.LEFT:
            case M.UP:
            case M.HOME:
            case M.PAGEUP:
                t !== Te && Te.disabled !== !0 && ce(t, Te);
                break;
            case M.RIGHT:
            case M.DOWN:
            case M.END:
            case M.PAGEDOWN:
                t !== Me && Me.disabled !== !0 && ce(t, Me);
                break;
            case M.ENTER:
            case M.SPACE:
                t === Me ? te() : ne()
            }
        }
        function de(e) {
            e = e || window.event;
            var n = e.keyCode
              , t = document.activeElement
              , i = a(t, "data-nav");
            switch (n) {
            case M.LEFT:
            case M.PAGEUP:
                i > 0 && ce(t, t.previousElementSibling);
                break;
            case M.UP:
            case M.HOME:
                0 !== i && ce(t, Ae[0]);
                break;
            case M.RIGHT:
            case M.PAGEDOWN:
                i < Le - 1 && ce(t, t.nextElementSibling);
                break;
            case M.DOWN:
            case M.END:
                i < Le - 1 && ce(t, Ae[Le - 1]);
                break;
            case M.ENTER:
            case M.SPACE:
                ie(e)
            }
        }
        function ue() {
            J(0, He.scrollLeft()),
            Z()
        }
        function fe(e) {
            e.stopPropagation();
            var n = e.changedTouches[0];
            Hn = parseInt(n.clientX),
            Wn = parseInt(n.clientY),
            Ie = Number(He.style[p].slice(11, -3)),
            A.emit("touchStart", be(e))
        }
        function me(e) {
            e.stopPropagation();
            var n = e.changedTouches[0];
            if (ke = parseInt(n.clientX) - Hn,
            Pe = parseInt(n.clientY) - Wn,
            i(t(Pe, ke), 15) === qe) {
                _e = !0,
                e.preventDefault(),
                A.emit("touchMove", be(e));
                var o = "horizontal" === qe ? "X(" + (Ie + ke) : "Y(" + (Ie + Pe);
                $(0),
                He.style[p] = "translate" + o + "px)"
            }
        }
        function ve(e) {
            e.stopPropagation();
            var n = e.changedTouches[0];
            if (ke = parseInt(n.clientX) - Hn,
            Pe = parseInt(n.clientY) - Wn,
            _e) {
                if (_e = !1,
                e.preventDefault(),
                "horizontal" === qe)
                    An = -(Ie + ke) / on,
                    An = ke > 0 ? Math.floor(An) : Math.ceil(An);
                else {
                    var t = -(Ie + Pe);
                    if (t <= 0)
                        An = Nn;
                    else if (t >= Ee[Ee.length - 1])
                        An = Se;
                    else {
                        var i = 0;
                        do
                            i++,
                            An = Pe < 0 ? i + 1 : i;
                        while (i < sn && t >= Math.round(Ee[i + 1]))
                    }
                }
                A.emit("touchEnd", be(e)),
                Q()
            }
        }
        function he() {
            He.style.width = (on + 1) * sn + "px";
            for (var e = sn; e--; )
                We[e].style.width = on - Xe + "px"
        }
        function pe() {
            for (var e = An + 1, n = An + je; e < n; e++)
                We[e].style.left = on * (e - An) + "px"
        }
        function ge() {
            Fe.style.cssText = "margin: 0px " + W() + "px"
        }
        function ye() {
            Fe.style.height = G() + "px"
        }
        function we() {
            if (Le !== Cn)
                if (Le > Cn)
                    for (var e = Cn; e < Le; e++)
                        s(Ae[e], "hidden");
                else
                    for (var n = Le; n < Cn; n++)
                        r(Ae[n], {
                            hidden: ""
                        });
            Cn = Le
        }
        function be(e) {
            return {
                container: He,
                slideItems: We,
                navItems: Ae,
                prevButton: Te,
                nextButton: Me,
                items: je,
                index: An,
                indexCached: Ln,
                navCurrent: Tn,
                navCurrentCached: Mn,
                slideCount: Re,
                cloneCount: rn,
                slideCountNew: sn,
                event: e || {}
            }
        }
        function xe() {
            var n = An
              , t = je;
            L(),
            g(),
            Jn(),
            "horizontal" === qe ? (Ke && Ye ? ge() : (he(),
            "gallery" === ze && pe()),
            j()) : (j(),
            ye()),
            An !== n && (A.emit("indexChanged", be()),
            X(),
            Ve || K()),
            je === t || e.navContainer || (we(),
            Y()),
            (An !== n || "carousel" === ze && !Ke) && J(0),
            Ze && B(),
            (nn && An !== n || je !== t) && q(),
            navigator.msMaxTouchPoints && U()
        }
        function Ce(e) {
            clearTimeout(Oe),
            Oe = setTimeout(function() {
                Ne !== Kn() && (xe(),
                "outer" === Ue && A.emit("outerResized", be(e)))
            }, 500)
        }
        if (e = gn.extend({
            container: document.querySelector(".slider"),
            mode: "carousel",
            axis: "horizontal",
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: !1,
            slideBy: 1,
            controls: !0,
            controlsText: ["prev", "next"],
            controlsContainer: !1,
            nav: !0,
            navContainer: !1,
            arrowKeys: !1,
            speed: 300,
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayDirection: "forward",
            autoplayText: ["start", "stop"],
            autoplayHoverPause: !1,
            autoplayButton: !1,
            animateIn: "tns-fadeIn",
            animateOut: "tns-fadeOut",
            animateNormal: "tns-normal",
            animateDelay: !1,
            loop: !0,
            autoHeight: !1,
            responsive: !1,
            lazyload: !1,
            touch: !0,
            rewind: !1,
            nested: !1
        }, e || {}),
        "object" != typeof e.container || null === e.container)
            return {
                destory: function() {},
                events: A
            };
        var Ee, Te, Me, Ae, Le, Se, Ne, De, Ie, ke, Pe, _e, Oe, ze = e.mode, qe = e.axis, Be = document.createElement("div"), Fe = document.createElement("div"), He = e.container, We = He.children, Re = We.length, je = e.items, Ge = o(), Ue = e.nested, Xe = e.gutter, Ye = "gallery" !== ze && e.edgePadding, Ke = e.fixedWidth, $e = e.arrowKeys, Je = e.speed, Qe = e.rewind, Ve = "gallery" === ze || !e.rewind && e.loop, Ze = "gallery" === ze || e.autoHeight, en = !Ke && e.responsive, nn = e.lazyload, tn = He.id || n(), on = Ke ? Ke + Xe : 0, an = [], rn = Ve ? 2 * Re : Ye ? 1 : 0, sn = "gallery" === ze ? Re + rn : Re + 2 * rn, cn = !(!Ke || Ve || Ye), ln = "gallery" === ze || !Ve, dn = "horizontal" === qe ? "X" : "Y", un = "horizontal" === qe ? "left" : "top", fn = un, mn = "translate", vn = "", hn = "", pn = e.controls, yn = e.controlsText, wn = !!e.controlsContainer && e.controlsContainer, bn = e.nav, xn = e.navContainer || !1, Cn = Re, En = -1, Tn = 0, Mn = 0, An = "gallery" === ze ? 0 : rn, Ln = An, Sn = Ye ? 1 : 0, Nn = Sn, Dn = e.autoplay, In = e.autoplayTimeout, kn = "forward" === e.autoplayDirection ? 1 : -1, Pn = e.autoplayText, _n = e.autoplayHoverPause, On = e.autoplayButton, zn = !1, qn = !1, Bn = "<span hidden>Stop Animation</span>", Fn = e.touch, Hn = 0, Wn = 0, Rn = C ? e.animateIn : "tns-fadeIn", jn = C ? e.animateOut : "tns-fadeOut", Gn = C ? e.animateNormal : "tns-normal", Un = !!C && e.animateDelay;
        p && (fn = p,
        vn = mn + dn + "(",
        hn = ")");
        var Xn = function() {
            return Ke ? function() {
                return Math.max(1, Math.min(Re, Math.floor(Ne / Ke)))
            }
            : function() {
                var n = e.items
                  , t = "object" == typeof en && Object.keys(en);
                if (t)
                    for (var i = 0; i < t.length; i++)
                        Ne >= t[i] && (n = en[t[i]]);
                return Math.max(1, Math.min(Re, n))
            }
        }()
          , Yn = function() {
            return e.navContainer ? function() {
                return Re
            }
            : function() {
                return Math.ceil(Re / je)
            }
        }()
          , Kn = function() {
            return "horizontal" === qe && !Ke && Ye ? function() {
                return Be.clientWidth - 2 * (Ye + Xe)
            }
            : function() {
                return Be.clientWidth
            }
        }();
        H();
        var $n = function() {
            return "carousel" === ze ? function(e, n) {
                n || (n = -Ee[An]),
                cn && An === Se && (n = Math.max(n, -sn * on + Ne + Xe)),
                w || !e ? He.style[fn] = vn + Math.round(n) + "px" + hn : h(He, fn, vn, hn, n, Je, V),
                "vertical" === qe && (Fe.style.height = G() + "px")
            }
            : function() {
                an = [],
                v(We[Ln], [[x, V], [T, V]]),
                m(We[An], [[x, V], [T, V]]),
                function() {
                    for (var e = Ln, n = Ln + je; e < n; e++) {
                        var t = We[e];
                        if (w && $(Je, t),
                        Un && b) {
                            var i = Un * (e - Ln) / 1e3;
                            t.style[b] = i + "s",
                            t.style[E] = i + "s"
                        }
                        t.classList.remove(Rn),
                        t.classList.add(jn),
                        an.push(t)
                    }
                }(),
                function() {
                    for (var e = An, n = An + je; e < n; e++) {
                        var t = We[e];
                        if (w && $(Je, t),
                        Un && b) {
                            var i = Un * (e - An) / 1e3;
                            t.style[b] = i + "s",
                            t.style[E] = i + "s"
                        }
                        t.classList.remove(Gn),
                        t.classList.add(Rn),
                        e > An && (t.style.left = (e - An) * on + "px")
                    }
                }()
            }
        }()
          , Jn = function() {
            return Ve ? function() {
                var e = "carousel" === ze ? Ge + Nn : Nn
                  , n = "carousel" === ze ? Se - Ge : Se;
                if (Ke && Ne % on !== 0 && (n -= 1),
                An > n)
                    for (; An >= e + Re; )
                        An -= Re;
                else if (An < e)
                    for (; An <= n - Re; )
                        An += Re
            }
            : function() {
                An = Math.max(Nn, Math.min(Se, An))
            }
        }();
        return {
            getInfo: be,
            events: A,
            goTo: function(e) {
                if ("next" === e)
                    An += 1;
                else if ("prev" === e || "previous" === e)
                    An -= 1;
                else {
                    var n, t = An % Re;
                    t < 0 && (t += Re),
                    "first" === e ? n = 0 : "last" === e ? n = Re - 1 : "number" == typeof e && (n = e % Re),
                    n < 0 && (n += Re),
                    An += n - t
                }
                An !== Ln && (Jn(),
                Q())
            },
            destory: function() {
                if (gn.unwrap(Be),
                gn.unwrap(Fe),
                Be = Fe = null,
                s(He, ["id", "style", "data-tns-role", "data-tns-features"]),
                Ve)
                    for (var n = rn; n--; )
                        We[0].remove(),
                        We[We.length - 1].remove();
                s(We, ["id", "style", "aria-hidden"]),
                tn = Re = null,
                pn && (e.controlsContainer ? (s(wn, ["aria-label"]),
                s(wn.children, ["aria-controls", "tabindex"]),
                c(wn)) : (wn.remove(),
                wn = Te = Me = null)),
                bn && (e.navContainer ? (s(xn, ["aria-label"]),
                s(Ae, ["aria-selected", "aria-controls", "tabindex"]),
                c(xn)) : (xn.remove(),
                xn = null),
                Ae = null),
                Dn && (e.navContainer || null === xn ? c(On) : (xn.remove(),
                xn = null)),
                c(He),
                $e && v(document, ["keydown", se]),
                v(window, ["resize", Ce])
            }
        }
    }
    function n() {
        return void 0 === window.tnsId ? window.tnsId = 1 : window.tnsId++,
        "tns" + window.tnsId
    }
    function t(e, n) {
        return Math.atan2(e, n) * (180 / Math.PI)
    }
    function i(e, n) {
        return Math.abs(90 - Math.abs(e)) >= 90 - n ? "horizontal" : Math.abs(90 - Math.abs(e)) <= n && "vertical"
    }
    function o(e, n) {
        return e.hasAttribute(n)
    }
    function a(e, n) {
        return e.getAttribute(n)
    }
    function r(e, n) {
        if (e = gn.isNodeList(e) || e instanceof Array ? e : [e],
        "[object Object]" === Object.prototype.toString.call(n))
            for (var t = e.length; t--; )
                for (var i in n)
                    e[t].setAttribute(i, n[i])
    }
    function s(e, n) {
        e = gn.isNodeList(e) || e instanceof Array ? e : [e],
        n = n instanceof Array ? n : [n];
        for (var t = n.length, i = e.length; i--; )
            for (var o = t; o--; )
                e[i].removeAttribute(n[o])
    }
    function c(e) {
        var n = e.cloneNode(!0)
          , t = e.parentNode;
        t.insertBefore(n, e),
        e.remove(),
        e = null
    }
    function l(e) {
        o(e, "hidden") || r(e, {
            hidden: ""
        })
    }
    function d(e) {
        o(e, "hidden") && s(e, "hidden")
    }
    function u(e) {
        return "boolean" == typeof e.complete ? e.complete : "number" == typeof e.naturalWidth ? 0 !== e.naturalWidth : void 0
    }
    function f(e) {
        var n, t = document.createElement("fakeelement");
        for (n in e)
            if (void 0 !== t.style[n])
                return [n, e[n][0], e[n][1]];
        return !1
    }
    function m(e, n) {
        function t(n) {
            e.addEventListener(n[0], n[1], !1)
        }
        if (Array.isArray(n))
            if (Array.isArray(n[0]))
                for (var i = n.length; i--; )
                    t(n[i]);
            else
                t(n)
    }
    function v(e, n) {
        function t(n) {
            e.removeEventListener(n[0], n[1], !1)
        }
        if (Array.isArray(n))
            if (Array.isArray(n[0]))
                for (var i = n.length; i--; )
                    t(n[i]);
            else
                t(n)
    }
    function h(e, n, t, i, o, a, r) {
        function s() {
            a -= c,
            l += d,
            e.style[n] = t + l + "px" + i,
            a > 0 ? setTimeout(s, c) : r()
        }
        var c = Math.min(a, 10)
          , l = Number(e.style[n].slice(t.length, -(i.length + 2)))
          , d = (o - l) / a * c;
        setTimeout(s, c)
    }
    var p = gn.getSupportedProp(["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"])
      , g = {
        transitionDuration: ["transitionDelay", "transitionend"],
        WebkitTransitionDuration: ["WebkitTransitionDelay", "webkitTransitionEnd"],
        MozTransitionDuration: ["MozTransitionDelay", "transitionend"],
        OTransitionDuration: ["OTransitionDelay", "oTransitionEnd"]
    }
      , y = {
        animationDuration: ["animationDelay", "animationend"],
        WebkitAnimationDuration: ["WebkitAnimationDelay", "webkitAnimationEnd"],
        MozAnimationDuration: ["MozAnimationDelay", "animationend"],
        OAnimationDuration: ["OAnimationDelay", "oAnimationEnd"]
    }
      , w = f(g)[0]
      , b = f(g)[1]
      , x = f(g)[2]
      , C = f(y)[0]
      , E = f(y)[1]
      , T = f(y)[2]
      , M = {
        ENTER: 13,
        SPACE: 32,
        PAGEUP: 33,
        PAGEDOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }
      , A = {
        events: {},
        on: function(e, n) {
            this.events[e] = this.events[e] || [],
            this.events[e].push(n)
        },
        off: function(e, n) {
            if (this.events[e])
                for (var t = 0; t < this.events[e].length; t++)
                    if (this.events[e][t] === n) {
                        this.events[e].splice(t, 1);
                        break
                    }
        },
        emit: function(e, n) {
            this.events[e] && this.events[e].forEach(function(e) {
                e(n)
            })
        }
    };
    return e
}();
!function() {
    "use strict";
    function e() {
        var e = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
          , n = "undefined" != typeof InstallTrigger
          , t = /constructor/i.test(window.HTMLElement) || function(e) {
            return "[object SafariRemoteNotification]" === e.toString()
        }(!window.safari || safari.pushNotification)
          , i = !!document.documentMode
          , o = !i && !!window.StyleMedia
          , a = !!window.chrome && !!window.chrome.webstore;
        e ? document.body.classList.add("opera") : n ? document.body.classList.add("firefox") : t ? document.body.classList.add("safari") : i ? document.body.classList.add("ie") : o ? document.body.classList.add("edge") : a && document.body.classList.add("chrome")
    }
    gn.ready(function() {
        function e(e) {
            return e.wheelDelta < 0 || e.detail > 0
        }
        function n() {
            document.body.removeAttribute("data-current-slide"),
            setTimeout(function() {
                i.intro.destory(),
                delete i.intro
            }, 300)
        }
        function t(t) {
            var o = i.intro.getInfo();
            r || (r = !0,
            e(t) ? (i.intro.goTo("next"),
            o.indexCached === o.slideCount - 1 && n()) : i.intro.goTo("prev")),
            s(function() {
                r = !1
            }, 300)
        }
        for (var i = {
            
            intro: tns({
                container: document.querySelector(".c-slides__container"),
                axis: "vertical",
                loop: !1,
                items: 1,
                slideBy: "page",
                navContainer: document.querySelector(".c-slides__controls-container-dots"),
                controlsContainer: document.querySelector(".c-slides__controls-container-arrows")
            })
        }, o = document.querySelectorAll(".js-skip-intro"), a = 0; a < o.length; a++)
            o[a].addEventListener("click", function() {
                n()
            });
        i.intro.events.on("transitionEnd", function() {
            if (i.intro) {
                var e = i.intro.getInfo();
                document.body.setAttribute("data-current-slide", e.index)
            }
        }),
        i.intro.events.on("transitionStart", function() {
            if (i.intro) {
                var e = i.intro.getInfo();
                e.slideItems[e.indexCached].classList.remove("c-slides__slide--active"),
                e.slideItems[e.index].classList.add("c-slides__slide--active")
            }
        }),
        i.intro.events.on("touchEnd", function(e) {
            if (i.intro) {
                var t = i.intro.getInfo();
                t.indexCached === t.slideCount - 1 && t.indexCached === t.index && n()
            }
        }),
        i.intro.getInfo().slideItems[0].classList.add("c-slides__slide--active");
        var r = !1
          , s = function() {
            var e = 0;
            return function(n, t) {
                clearTimeout(e),
                e = setTimeout(n, t)
            }
        }()
          , c = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
        document.attachEvent ? document.querySelector(".c-slides").attachEvent("on" + c, function(e) {
            t(e)
        }) : document.addEventListener && document.querySelector(".c-slides").addEventListener(c, function(e) {
            t(e)
        }, !1)
    }),
    window.onload = function() {
        function n(e) {
            return e > 9 ? e : "0" + e
        }
        var t = 0;
        setInterval(function() {
            ++t,
            document.getElementsByClassName("c-slides__slide-description-timer")[0].innerHTML = "00:" + n(parseInt(t / 60, 10)) + ":" + n(t % 60)
        }, 1e3),
        e()
    }
}();
