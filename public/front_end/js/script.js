! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(f, e) {
    var u = [],
        d = u.slice,
        g = u.concat,
        a = u.push,
        o = u.indexOf,
        n = {},
        t = n.toString,
        m = n.hasOwnProperty,
        i = "".trim,
        v = {},
        r = "1.11.0",
        T = function(e, t) {
            return new T.fn.init(e, t)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        c = /-([\da-z])/gi,
        p = function(e, t) {
            return t.toUpperCase()
        };

    function h(e) {
        var t = e.length,
            n = T.type(e);
        return "function" !== n && !T.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    T.fn = T.prototype = {
        jquery: r,
        constructor: T,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : d.call(this)
        },
        pushStack: function(e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return T.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: a,
        sort: u.sort,
        splice: u.splice
    }, T.extend = T.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || T.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (o = arguments[a]))
                for (i in o) e = s[i], s !== (n = o[i]) && (c && n && (T.isPlainObject(n) || (t = T.isArray(n))) ? (t ? (t = !1, r = e && T.isArray(e) ? e : []) : r = e && T.isPlainObject(e) ? e : {}, s[i] = T.extend(c, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, T.extend({
        expando: "jQuery" + (r + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === T.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === T.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return 0 <= e - parseFloat(e)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== T.type(e) || e.nodeType || T.isWindow(e)) return !1;
            try {
                if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (v.ownLast)
                for (t in e) return m.call(e, t);
            for (t in e);
            return void 0 === t || m.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[t.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && T.trim(e) && (f.execScript || function(e) {
                f.eval.call(f, e)
            })(e)
        },
        camelCase: function(e) {
            return e.replace(l, "ms-").replace(c, p)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i = 0,
                o = e.length,
                r = h(e);
            if (n) {
                if (r)
                    for (; i < o && !1 !== t.apply(e[i], n); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break
            } else if (r)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: i && !i.call("\ufeff ") ? function(e) {
            return null == e ? "" : i.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(s, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (o) return o.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n;) e[o++] = t[i++];
            if (n != n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o = 0,
                r = e.length,
                s = [];
            if (h(e))
                for (; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), T.isFunction(e) ? (n = d.call(arguments, 2), (i = function() {
                return e.apply(t || this, n.concat(d.call(arguments)))
            }).guid = e.guid = e.guid || T.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: v
    }), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(n) {
        var e, f, w, r, i, g, x, c, d, m, $, o, v, y, s, a, b, T = "sizzle" + -new Date,
            k = n.document,
            C = 0,
            u = 0,
            l = ne(),
            p = ne(),
            h = ne(),
            S = function(e, t) {
                return e === t && (d = !0), 0
            },
            _ = "undefined",
            A = {}.hasOwnProperty,
            t = [],
            E = t.pop,
            D = t.push,
            N = t.push,
            O = t.slice,
            L = t.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            P = q.replace("w", "w#"),
            M = "\\[" + H + "*(" + q + ")" + H + "*(?:([*^$|!~]?=)" + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + P + ")|)|)" + H + "*\\]",
            z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + M.replace(3, 8) + ")*)|.*)\\)|)",
            I = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            R = new RegExp("^" + H + "*," + H + "*"),
            W = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            F = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
            B = new RegExp(z),
            U = new RegExp("^" + P + "$"),
            X = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /[+~]/,
            J = /'|\\/g,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
            ee = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            N.apply(t = O.call(k.childNodes), k.childNodes), t[k.childNodes.length].nodeType
        } catch (e) {
            N = {
                apply: t.length ? function(e, t) {
                    D.apply(e, O.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function te(e, t, n, i) {
            var o, r, s, a, l, c, d, u, p, h;
            if ((t ? t.ownerDocument || t : k) !== $ && m(t), n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = (t = t || $).nodeType) && 9 !== a) return [];
            if (v && !i) {
                if (o = V.exec(e))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (!(r = t.getElementById(s)) || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && b(t, r) && r.id === s) return n.push(r), n
                    } else {
                        if (o[2]) return N.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && f.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(s)), n
                    }
                if (f.qsa && (!y || !y.test(e))) {
                    if (u = d = T, p = t, h = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = pe(e), (d = t.getAttribute("id")) ? u = d.replace(J, "\\$&") : t.setAttribute("id", u), u = "[id='" + u + "'] ", l = c.length; l--;) c[l] = u + he(c[l]);
                        p = Q.test(e) && de(t.parentNode) || t, h = c.join(",")
                    }
                    if (h) try {
                        return N.apply(n, p.querySelectorAll(h)), n
                    } catch (e) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return function(e, t, n, i) {
                var o, r, s, a, l, c = pe(e);
                if (!i && 1 === c.length) {
                    if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (s = r[0]).type && f.getById && 9 === t.nodeType && v && w.relative[r[1].type]) {
                        if (!(t = (w.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        e = e.slice(r.shift().value.length)
                    }
                    for (o = X.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                        if ((l = w.find[a]) && (i = l(s.matches[0].replace(Z, ee), Q.test(r[0].type) && de(t.parentNode) || t))) {
                            if (r.splice(o, 1), !(e = i.length && he(r))) return N.apply(n, i), n;
                            break
                        }
                }
                return g(e, c)(i, t, !v, n, Q.test(e) && de(t.parentNode) || t), n
            }(e.replace(I, "$1"), t, n, i)
        }

        function ne() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ie(e) {
            return e[T] = !0, e
        }

        function oe(e) {
            var t = $.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function re(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
        }

        function se(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ae(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function le(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ce(s) {
            return ie(function(r) {
                return r = +r, ie(function(e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function de(e) {
            return e && typeof e.getElementsByTagName !== _ && e
        }
        for (e in f = te.support = {}, i = te.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, m = te.setDocument = function(e) {
                var t, l = e ? e.ownerDocument || e : k,
                    n = l.defaultView;
                return l !== $ && 9 === l.nodeType && l.documentElement ? (o = ($ = l).documentElement, v = !i(l), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                    m()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                    m()
                })), f.attributes = oe(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), f.getElementsByTagName = oe(function(e) {
                    return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                }), f.getElementsByClassName = K.test(l.getElementsByClassName) && oe(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), f.getById = oe(function(e) {
                    return o.appendChild(e).id = T, !l.getElementsByName || !l.getElementsByName(T).length
                }), f.getById ? (w.find.ID = function(e, t) {
                    if (typeof t.getElementById !== _ && v) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, w.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete w.find.ID, w.filter.ID = function(e) {
                    var n = e.replace(Z, ee);
                    return function(e) {
                        var t = typeof e.getAttributeNode !== _ && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), w.find.TAG = f.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== _ ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, w.find.CLASS = f.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== _ && v ? t.getElementsByClassName(e) : void 0
                }, s = [], y = [], (f.qsa = K.test(l.querySelectorAll)) && (oe(function(e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && y.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + H + "*(?:value|" + j + ")"), e.querySelectorAll(":checked").length || y.push(":checked")
                }), oe(function(e) {
                    var t = l.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + H + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                })), (f.matchesSelector = K.test(a = o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && oe(function(e) {
                    f.disconnectedMatch = a.call(e, "div"), a.call(e, "[s!='']:x"), s.push("!=", z)
                }), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(o.compareDocumentPosition), b = t || K.test(o.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, S = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === k && b(k, e) ? -1 : t === l || t.ownerDocument === k && b(k, t) ? 1 : c ? L.call(c, e) - L.call(c, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === l ? -1 : t === l ? 1 : o ? -1 : r ? 1 : c ? L.call(c, e) - L.call(c, t) : 0;
                    if (o === r) return se(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? se(s[i], a[i]) : s[i] === k ? -1 : a[i] === k ? 1 : 0
                }, l) : $
            }, te.matches = function(e, t) {
                return te(e, null, null, t)
            }, te.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== $ && m(e), t = t.replace(F, "='$1']"), !(!f.matchesSelector || !v || s && s.test(t) || y && y.test(t))) try {
                    var n = a.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < te(t, $, null, [e]).length
            }, te.contains = function(e, t) {
                return (e.ownerDocument || e) !== $ && m(e), b(e, t)
            }, te.attr = function(e, t) {
                (e.ownerDocument || e) !== $ && m(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && A.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !v) : void 0;
                return void 0 !== i ? i : f.attributes || !v ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, te.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, te.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (d = !f.detectDuplicates, c = !f.sortStable && e.slice(0), e.sort(S), d) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return c = null, e
            }, r = te.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (w = te.selectors = {
                cacheLength: 50,
                createPseudo: ie,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || te.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && te.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && B.test(n) && (t = pe(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = l[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && l(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== _ && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, o) {
                        return function(e) {
                            var t = te.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(h, e, t, f, g) {
                        var m = "nth" !== h.slice(0, 3),
                            v = "last" !== h.slice(-4),
                            y = "of-type" === e;
                        return 1 === f && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, o, r, s, a, l, c = m !== v ? "nextSibling" : "previousSibling",
                                d = e.parentNode,
                                u = y && e.nodeName.toLowerCase(),
                                p = !n && !y;
                            if (d) {
                                if (m) {
                                    for (; c;) {
                                        for (r = e; r = r[c];)
                                            if (y ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                                        l = c = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [v ? d.firstChild : d.lastChild], v && p) {
                                    for (a = (i = (o = d[T] || (d[T] = {}))[h] || [])[0] === C && i[1], s = i[0] === C && i[2], r = a && d.childNodes[a]; r = ++a && r && r[c] || (s = a = 0) || l.pop();)
                                        if (1 === r.nodeType && ++s && r === e) {
                                            o[h] = [C, a, s];
                                            break
                                        }
                                } else if (p && (i = (e[T] || (e[T] = {}))[h]) && i[0] === C) s = i[1];
                                else
                                    for (;
                                        (r = ++a && r && r[c] || (s = a = 0) || l.pop()) && ((y ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++s || (p && ((r[T] || (r[T] = {}))[h] = [C, s]), r !== e)););
                                return (s -= g) === f || s % f == 0 && 0 <= s / f
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || te.error("unsupported pseudo: " + e);
                        return s[T] ? s(r) : 1 < s.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ie(function(e, t) {
                            for (var n, i = s(e, r), o = i.length; o--;) e[n = L.call(e, i[o])] = !(t[n] = i[o])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ie(function(e) {
                        var i = [],
                            o = [],
                            a = g(e.replace(I, "$1"));
                        return a[T] ? ie(function(e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, o), !o.pop()
                        }
                    }),
                    has: ie(function(t) {
                        return function(e) {
                            return 0 < te(t, e).length
                        }
                    }),
                    contains: ie(function(t) {
                        return function(e) {
                            return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                        }
                    }),
                    lang: ie(function(n) {
                        return U.test(n || "") || te.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === o
                    },
                    focus: function(e) {
                        return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ce(function() {
                        return [0]
                    }),
                    last: ce(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ce(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ce(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ce(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ce(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: ce(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[e] = ae(e);
        for (e in {
                submit: !0,
                reset: !0
            }) w.pseudos[e] = le(e);

        function ue() {}

        function pe(e, t) {
            var n, i, o, r, s, a, l, c = p[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = w.preFilter; s;) {
                for (r in (!n || (i = R.exec(s))) && (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = W.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(I, " ")
                    }), s = s.slice(n.length)), w.filter) !(i = X[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? te.error(e) : p(e, a).slice(0)
        }

        function he(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function fe(s, e, t) {
            var a = e.dir,
                l = t && "parentNode" === a,
                c = u++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || l) return s(e, t, n)
            } : function(e, t, n) {
                var i, o, r = [C, c];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || l) {
                            if ((i = (o = e[T] || (e[T] = {}))[a]) && i[0] === C && i[1] === c) return r[2] = i[2];
                            if ((o[a] = r)[2] = s(e, t, n)) return !0
                        }
            }
        }

        function ge(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function me(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
            return s
        }

        function ve(h, f, g, m, v, e) {
            return m && !m[T] && (m = ve(m)), v && !v[T] && (v = ve(v, e)), ie(function(e, t, n, i) {
                var o, r, s, a = [],
                    l = [],
                    c = t.length,
                    d = e || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) te(e, t[i], n);
                        return n
                    }(f || "*", n.nodeType ? [n] : n, []),
                    u = !h || !e && f ? d : me(d, a, h, n, i),
                    p = g ? v || (e ? h : c || m) ? [] : t : u;
                if (g && g(u, p, n, i), m)
                    for (o = me(p, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(u[l[r]] = s));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (o = [], r = p.length; r--;)(s = p[r]) && o.push(u[r] = s);
                            v(null, p = [], o, i)
                        }
                        for (r = p.length; r--;)(s = p[r]) && -1 < (o = v ? L.call(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else p = me(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, i) : N.apply(t, p)
            })
        }

        function ye(e) {
            for (var i, t, n, o = e.length, r = w.relative[e[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = fe(function(e) {
                    return e === i
                }, s, !0), c = fe(function(e) {
                    return -1 < L.call(i, e)
                }, s, !0), d = [function(e, t, n) {
                    return !r && (n || t !== x) || ((i = t).nodeType ? l(e, t, n) : c(e, t, n))
                }]; a < o; a++)
                if (t = w.relative[e[a].type]) d = [fe(ge(d), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[T]) {
                        for (n = ++a; n < o && !w.relative[e[n].type]; n++);
                        return ve(1 < a && ge(d), 1 < a && he(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(I, "$1"), t, a < n && ye(e.slice(a, n)), n < o && ye(e = e.slice(n)), n < o && he(e))
                    }
                    d.push(t)
                }
            return ge(d)
        }
        return ue.prototype = w.filters = w.pseudos, w.setFilters = new ue, g = te.compile = function(e, t) {
            var n, m, v, y, b, i, o = [],
                r = [],
                s = h[e + " "];
            if (!s) {
                for (t || (t = pe(e)), n = t.length; n--;)(s = ye(t[n]))[T] ? o.push(s) : r.push(s);
                s = h(e, (m = r, y = 0 < (v = o).length, b = 0 < m.length, i = function(e, t, n, i, o) {
                    var r, s, a, l = 0,
                        c = "0",
                        d = e && [],
                        u = [],
                        p = x,
                        h = e || b && w.find.TAG("*", o),
                        f = C += null == p ? 1 : Math.random() || .1,
                        g = h.length;
                    for (o && (x = t !== $ && t); c !== g && null != (r = h[c]); c++) {
                        if (b && r) {
                            for (s = 0; a = m[s++];)
                                if (a(r, t, n)) {
                                    i.push(r);
                                    break
                                }
                            o && (C = f)
                        }
                        y && ((r = !a && r) && l--, e && d.push(r))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = v[s++];) a(d, u, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) d[c] || u[c] || (u[c] = E.call(i));
                            u = me(u)
                        }
                        N.apply(i, u), o && !e && 0 < u.length && 1 < l + v.length && te.uniqueSort(i)
                    }
                    return o && (C = f, x = p), d
                }, y ? ie(i) : i))
            }
            return s
        }, f.sortStable = T.split("").sort(S).join("") === T, f.detectDuplicates = !!d, m(), f.sortDetached = oe(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("div"))
        }), oe(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || re("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && oe(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || re("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), oe(function(e) {
            return null == e.getAttribute("disabled")
        }) || re(j, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), te
    }(f);
    T.find = y, T.expr = y.selectors, T.expr[":"] = T.expr.pseudos, T.unique = y.uniqueSort, T.text = y.getText, T.isXMLDoc = y.isXML, T.contains = y.contains;
    var b = T.expr.match.needsContext,
        w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        x = /^.[^:#\[\.,]*$/;

    function $(e, n, i) {
        if (T.isFunction(n)) return T.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return T.grep(e, function(e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (x.test(n)) return T.filter(n, e, i);
            n = T.filter(n, e)
        }
        return T.grep(e, function(e) {
            return 0 <= T.inArray(e, n) !== i
        })
    }
    T.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, T.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                for (t = 0; t < o; t++)
                    if (T.contains(i[t], this)) return !0
            }));
            for (t = 0; t < o; t++) T.find(e, i[t], n);
            return (n = this.pushStack(1 < o ? T.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack($(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack($(this, e || [], !0))
        },
        is: function(e) {
            return !!$(this, "string" == typeof e && b.test(e) ? T(e) : e || [], !1).length
        }
    });
    var k, C = f.document,
        S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (T.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : S.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || k).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(n[1]) && T.isPlainObject(t))
                    for (n in t) T.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if ((i = C.getElementById(n[2])) && i.parentNode) {
                if (i.id !== n[2]) return k.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = C, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : T.isFunction(e) ? void 0 !== k.ready ? k.ready(e) : e(T) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), T.makeArray(e, this))
    }).prototype = T.fn, k = T(C);
    var _ = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function E(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    T.extend({
        dir: function(e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !T(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), T.fn.extend({
        has: function(e) {
            var t, n = T(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (T.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = b.test(e) || "string" != typeof e ? T(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(1 < r.length ? T.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? T.inArray(this[0], T(e)) : T.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.unique(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), T.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T.dir(e, "parentNode", n)
        },
        next: function(e) {
            return E(e, "nextSibling")
        },
        prev: function(e) {
            return E(e, "previousSibling")
        },
        nextAll: function(e) {
            return T.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return T.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T.sibling(e.firstChild)
        },
        contents: function(e) {
            return T.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : T.merge([], e.childNodes)
        }
    }, function(i, o) {
        T.fn[i] = function(e, t) {
            var n = T.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (A[i] || (n = T.unique(n)), _.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var D, N = /\S+/g,
        O = {};

    function L() {
        C.addEventListener ? (C.removeEventListener("DOMContentLoaded", j, !1), f.removeEventListener("load", j, !1)) : (C.detachEvent("onreadystatechange", j), f.detachEvent("onload", j))
    }

    function j() {
        (C.addEventListener || "load" === event.type || "complete" === C.readyState) && (L(), T.ready())
    }
    T.Callbacks = function(o) {
        var e, n;
        o = "string" == typeof o ? O[o] || (n = O[e = o] = {}, T.each(e.match(N) || [], function(e, t) {
            n[t] = !0
        }), n) : T.extend({}, o);
        var i, t, r, s, a, l, c = [],
            d = !o.once && [],
            u = function(e) {
                for (t = o.memory && e, r = !0, a = l || 0, l = 0, s = c.length, i = !0; c && a < s; a++)
                    if (!1 === c[a].apply(e[0], e[1]) && o.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, c && (d ? d.length && u(d.shift()) : t ? c = [] : p.disable())
            },
            p = {
                add: function() {
                    if (c) {
                        var e = c.length;
                        ! function i(e) {
                            T.each(e, function(e, t) {
                                var n = T.type(t);
                                "function" === n ? o.unique && p.has(t) || c.push(t) : t && t.length && "string" !== n && i(t)
                            })
                        }(arguments), i ? s = c.length : t && (l = e, u(t))
                    }
                    return this
                },
                remove: function() {
                    return c && T.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = T.inArray(t, c, n));) c.splice(n, 1), i && (n <= s && s--, n <= a && a--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < T.inArray(e, c) : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], s = 0, this
                },
                disable: function() {
                    return c = d = t = void 0, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return d = void 0, t || p.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(e, t) {
                    return !c || r && !d || (t = [e, (t = t || []).slice ? t.slice() : t], i ? d.push(t) : u(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return p
    }, T.extend({
        Deferred: function(e) {
            var r = [
                    ["resolve", "done", T.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", T.Callbacks("memory")]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return T.Deferred(function(i) {
                            T.each(r, function(e, t) {
                                var n = T.isFunction(o[e]) && o[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && T.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? T.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, T.each(r, function(e, t) {
                var n = t[2],
                    i = t[3];
                s[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, r[1 ^ e][2].disable, r[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var o, t, n, i = 0,
                r = d.call(arguments),
                s = r.length,
                a = 1 !== s || e && T.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : T.Deferred(),
                c = function(t, n, i) {
                    return function(e) {
                        n[t] = this, i[t] = 1 < arguments.length ? d.call(arguments) : e, i === o ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (1 < s)
                for (o = new Array(s), t = new Array(s), n = new Array(s); i < s; i++) r[i] && T.isFunction(r[i].promise) ? r[i].promise().done(c(i, n, r)).fail(l.reject).progress(c(i, t, o)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    }), T.fn.ready = function(e) {
        return T.ready.promise().done(e), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? T.readyWait++ : T.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--T.readyWait : !T.isReady) {
                if (!C.body) return setTimeout(T.ready);
                (T.isReady = !0) !== e && 0 < --T.readyWait || (D.resolveWith(C, [T]), T.fn.trigger && T(C).trigger("ready").off("ready"))
            }
        }
    }), T.ready.promise = function(e) {
        if (!D)
            if (D = T.Deferred(), "complete" === C.readyState) setTimeout(T.ready);
            else if (C.addEventListener) C.addEventListener("DOMContentLoaded", j, !1), f.addEventListener("load", j, !1);
        else {
            C.attachEvent("onreadystatechange", j), f.attachEvent("onload", j);
            var n = !1;
            try {
                n = null == f.frameElement && C.documentElement
            } catch (e) {}
            n && n.doScroll && function t() {
                if (!T.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(t, 50)
                    }
                    L(), T.ready()
                }
            }()
        }
        return D.promise(e)
    };
    var H, q = "undefined";
    for (H in T(v)) break;
    v.ownLast = "0" !== H, v.inlineBlockNeedsLayout = !1, T(function() {
            var e, t, n = C.getElementsByTagName("body")[0];
            n && ((e = C.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = C.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== q && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (v.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
        }),
        function() {
            var e = C.createElement("div");
            if (null == v.deleteExpando) {
                v.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    v.deleteExpando = !1
                }
            }
            e = null
        }(), T.acceptData = function(e) {
            var t = T.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        };
    var P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        M = /([A-Z])/g;

    function z(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(M, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : P.test(n) ? T.parseJSON(n) : n)
                } catch (e) {}
                T.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !T.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function R(e, t, n, i) {
        if (T.acceptData(e)) {
            var o, r, s = T.expando,
                a = e.nodeType,
                l = a ? T.cache : e,
                c = a ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = a ? e[s] = u.pop() || T.guid++ : s), l[c] || (l[c] = a ? {} : {
                toJSON: T.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = T.extend(l[c], t) : l[c].data = T.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[T.camelCase(t)] = n), "string" == typeof t ? null == (o = r[t]) && (o = r[T.camelCase(t)]) : o = r, o
        }
    }

    function W(e, t, n) {
        if (T.acceptData(e)) {
            var i, o, r = e.nodeType,
                s = r ? T.cache : e,
                a = r ? e[T.expando] : T.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    T.isArray(t) ? t = t.concat(T.map(t, T.camelCase)) : t in i ? t = [t] : t = (t = T.camelCase(t)) in i ? [t] : t.split(" "), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !I(i) : !T.isEmptyObject(i)) return
                }(n || (delete s[a].data, I(s[a]))) && (r ? T.cleanData([e], !0) : v.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }
    T.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? T.cache[e[T.expando]] : e[T.expando]) && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        }
    }), T.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = T.data(r), 1 === r.nodeType && !T._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;) 0 === (i = s[n].name).indexOf("data-") && z(r, i = T.camelCase(i.slice(5)), o[i]);
                    T._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                T.data(this, e)
            }) : 1 < arguments.length ? this.each(function() {
                T.data(this, e, t)
            }) : r ? z(r, e, T.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                T.removeData(this, e)
            })
        }
    }), T.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = T._data(e, t), n && (!i || T.isArray(n) ? i = T._data(e, t, T.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = T._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                T.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return T._data(e, n) || T._data(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    T._removeData(e, t + "queue"), T._removeData(e, n)
                })
            })
        }
    }), T.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = T.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = T._data(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = ["Top", "Right", "Bottom", "Left"],
        U = function(e, t) {
            return e = t || e, "none" === T.css(e, "display") || !T.contains(e.ownerDocument, e)
        },
        X = T.access = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === T.type(n))
                for (a in o = !0, n) T.access(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, T.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(T(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        Y = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = C.createDocumentFragment(),
            t = C.createElement("div"),
            n = C.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", v.leadingWhitespace = 3 === t.firstChild.nodeType, v.tbody = !t.getElementsByTagName("tbody").length, v.htmlSerialize = !!t.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), v.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                v.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                v.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function() {
        var e, t, n = C.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (v[e + "Bubbles"] = t in f) || (n.setAttribute(t, "t"), v[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null
    }();
    var G = /^(?:input|select|textarea)$/i,
        K = /^key/,
        V = /^(?:mouse|contextmenu)|click/,
        Q = /^(?:focusinfocus|focusoutblur)$/,
        J = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function ee() {
        return !1
    }

    function te() {
        try {
            return C.activeElement
        } catch (e) {}
    }

    function ne(e) {
        var t = ie.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    T.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, h, f, g, m = T._data(e);
            if (m) {
                for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = T.guid++), (s = m.events) || (s = m.events = {}), (d = m.handle) || ((d = m.handle = function(e) {
                        return typeof T === q || e && T.event.triggered === e.type ? void 0 : T.event.dispatch.apply(d.elem, arguments)
                    }).elem = e), a = (t = (t || "").match(N) || [""]).length; a--;) h = g = (r = J.exec(t[a]) || [])[1], f = (r[2] || "").split(".").sort(), h && (c = T.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = T.event.special[h] || {}, u = T.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && T.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (p = s[h]) || ((p = s[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, f, d) || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), T.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, h, f, g, m = T.hasData(e) && T._data(e);
            if (m && (d = m.events)) {
                for (c = (t = (t || "").match(N) || [""]).length; c--;)
                    if (h = g = (a = J.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                        for (u = T.event.special[h] || {}, p = d[h = (i ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(e, s));
                        l && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, m.handle) || T.removeEvent(e, h, m.handle), delete d[h])
                    } else
                        for (h in d) T.event.remove(e, h + t[c], n, i, !0);
                T.isEmptyObject(d) && (delete m.handle, T._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, i) {
            var o, r, s, a, l, c, d, u = [n || C],
                p = m.call(e, "type") ? e.type : e,
                h = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Q.test(p + T.event.triggered) && (0 <= p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), r = p.indexOf(":") < 0 && "on" + p, (e = e[T.expando] ? e : new T.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), l = T.event.special[p] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !T.isWindow(n)) {
                    for (a = l.delegateType || p, Q.test(a + p) || (s = s.parentNode); s; s = s.parentNode) u.push(s), c = s;
                    c === (n.ownerDocument || C) && u.push(c.defaultView || c.parentWindow || f)
                }
                for (d = 0;
                    (s = u[d++]) && !e.isPropagationStopped();) e.type = 1 < d ? a : l.bindType || p, (o = (T._data(s, "events") || {})[e.type] && T._data(s, "handle")) && o.apply(s, t), (o = r && s[r]) && o.apply && T.acceptData(s) && (e.result = o.apply(s, t), !1 === e.result && e.preventDefault());
                if (e.type = p, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(u.pop(), t)) && T.acceptData(n) && r && n[p] && !T.isWindow(n)) {
                    (c = n[r]) && (n[r] = null), T.event.triggered = p;
                    try {
                        n[p]()
                    } catch (e) {}
                    T.event.triggered = void 0, c && (n[r] = c)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = T.event.fix(e);
            var t, n, i, o, r, s = [],
                a = d.call(arguments),
                l = (T._data(this, "events") || {})[e.type] || [],
                c = T.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = T.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, r = 0;
                        (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, void 0 !== (n = ((T.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (o = [], r = 0; r < a; r++) void 0 === o[n = (i = t[r]).selector + " "] && (o[n] = i.needsContext ? 0 <= T(n, this).index(l) : T.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[T.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = V.test(o) ? this.mouseHooks : K.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new T.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
            return e.target || (e.target = r.srcElement || C), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (o = (i = e.target.ownerDocument || C).documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== te() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === te() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return T.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return T.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? T.event.trigger(o, null, t) : T.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, T.removeEvent = C.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === q && (e[i] = null), e.detachEvent(i, n))
    }, T.Event = function(e, t) {
        return this instanceof T.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (!1 === e.returnValue || e.getPreventDefault && e.getPreventDefault()) ? Z : ee) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || T.now(), void(this[T.expando] = !0)) : new T.Event(e, t)
    }, T.Event.prototype = {
        isDefaultPrevented: ee,
        isPropagationStopped: ee,
        isImmediatePropagationStopped: ee,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Z, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Z, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = Z, this.stopPropagation()
        }
    }, T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, o) {
        T.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return (!n || n !== this && !T.contains(this, n)) && (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), v.submitBubbles || (T.event.special.submit = {
        setup: function() {
            return !T.nodeName(this, "form") && void T.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = T.nodeName(t, "input") || T.nodeName(t, "button") ? t.form : void 0;
                n && !T._data(n, "submitBubbles") && (T.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), T._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && T.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !T.nodeName(this, "form") && void T.event.remove(this, "._submit")
        }
    }), v.changeBubbles || (T.event.special.change = {
        setup: function() {
            return G.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (T.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), T.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), T.event.simulate("change", this, e, !0)
            })), !1) : void T.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                G.test(t.nodeName) && !T._data(t, "changeBubbles") && (T.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || T.event.simulate("change", this.parentNode, e, !0)
                }), T._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return T.event.remove(this, "._change"), !G.test(this.nodeName)
        }
    }), v.focusinBubbles || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var o = function(e) {
            T.event.simulate(i, e.target, T.event.fix(e), !0)
        };
        T.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = T._data(e, i);
                t || e.addEventListener(n, o, !0), T._data(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = T._data(e, i) - 1;
                t ? T._data(e, i, t) : (e.removeEventListener(n, o, !0), T._removeData(e, i))
            }
        }
    }), T.fn.extend({
        on: function(e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                for (r in "string" != typeof t && (n = n || t, t = void 0), e) this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = ee;
            else if (!i) return this;
            return 1 === o && (s = i, (i = function(e) {
                return T().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = T.guid++)), this.each(function() {
                T.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = ee), this.each(function() {
                T.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? T.event.trigger(e, t, n, !0) : void 0
        }
    });
    var ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        oe = / jQuery\d+="(?:null|\d+)"/g,
        re = new RegExp("<(?:" + ie + ")[\\s/>]", "i"),
        se = /^\s+/,
        ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        le = /<([\w:]+)/,
        ce = /<tbody/i,
        de = /<|&#?\w+;/,
        ue = /<(?:script|style|link)/i,
        pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        he = /^$|\/(?:java|ecma)script/i,
        fe = /^true\/(.*)/,
        ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ve = ne(C).appendChild(C.createElement("div"));

    function ye(e, t) {
        var n, i, o = 0,
            r = typeof e.getElementsByTagName !== q ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== q ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || T.nodeName(i, t) ? r.push(i) : T.merge(r, ye(i, t));
        return void 0 === t || t && T.nodeName(e, t) ? T.merge([e], r) : r
    }

    function be(e) {
        Y.test(e.type) && (e.defaultChecked = e.checked)
    }

    function we(e, t) {
        return T.nodeName(e, "table") && T.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function xe(e) {
        return e.type = (null !== T.find.attr(e, "type")) + "/" + e.type, e
    }

    function $e(e) {
        var t = fe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Te(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) T._data(n, "globalEval", !t || T._data(t[i], "globalEval"))
    }

    function ke(e, t) {
        if (1 === t.nodeType && T.hasData(e)) {
            var n, i, o, r = T._data(e),
                s = T._data(t, r),
                a = r.events;
            if (a)
                for (n in delete s.handle, s.events = {}, a)
                    for (i = 0, o = a[n].length; i < o; i++) T.event.add(t, n, a[n][i]);
            s.data && (s.data = T.extend({}, s.data))
        }
    }

    function Ce(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !v.noCloneEvent && t[T.expando]) {
                for (i in (o = T._data(t)).events) T.removeEvent(t, i, o.handle);
                t.removeAttribute(T.expando)
            }
            "script" === n && t.text !== e.text ? (xe(t).text = e.text, $e(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !T.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Y.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, T.extend({
        clone: function(e, t, n) {
            var i, o, r, s, a, l = T.contains(e.ownerDocument, e);
            if (v.html5Clone || T.isXMLDoc(e) || !re.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (ve.innerHTML = e.outerHTML, ve.removeChild(r = ve.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (i = ye(r), a = ye(e), s = 0; null != (o = a[s]); ++s) i[s] && Ce(o, i[s]);
            if (t)
                if (n)
                    for (a = a || ye(e), i = i || ye(r), s = 0; null != (o = a[s]); s++) ke(o, i[s]);
                else ke(e, r);
            return 0 < (i = ye(r, "script")).length && Te(i, !l && ye(e, "script")), i = a = o = null, r
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, s, a, l, c, d, u = e.length, p = ne(t), h = [], f = 0; f < u; f++)
                if ((r = e[f]) || 0 === r)
                    if ("object" === T.type(r)) T.merge(h, r.nodeType ? [r] : r);
                    else if (de.test(r)) {
                for (a = a || p.appendChild(t.createElement("div")), l = (le.exec(r) || ["", ""])[1].toLowerCase(), d = me[l] || me._default, a.innerHTML = d[1] + r.replace(ae, "<$1></$2>") + d[2], o = d[0]; o--;) a = a.lastChild;
                if (!v.leadingWhitespace && se.test(r) && h.push(t.createTextNode(se.exec(r)[0])), !v.tbody)
                    for (o = (r = "table" !== l || ce.test(r) ? "<table>" !== d[1] || ce.test(r) ? 0 : a : a.firstChild) && r.childNodes.length; o--;) T.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (T.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = p.lastChild
            } else h.push(t.createTextNode(r));
            for (a && p.removeChild(a), v.appendChecked || T.grep(ye(h, "input"), be), f = 0; r = h[f++];)
                if ((!i || -1 === T.inArray(r, i)) && (s = T.contains(r.ownerDocument, r), a = ye(p.appendChild(r), "script"), s && Te(a), n))
                    for (o = 0; r = a[o++];) he.test(r.type || "") && n.push(r);
            return a = null, p
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, s = 0, a = T.expando, l = T.cache, c = v.deleteExpando, d = T.event.special; null != (n = e[s]); s++)
                if ((t || T.acceptData(n)) && (r = (o = n[a]) && l[o])) {
                    if (r.events)
                        for (i in r.events) d[i] ? T.event.remove(n, i) : T.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== q ? n.removeAttribute(a) : n[a] = null, u.push(o))
                }
        }
    }), T.fn.extend({
        text: function(e) {
            return X(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || we(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = we(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? T.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || T.cleanData(ye(n)), n.parentNode && (t && T.contains(n.ownerDocument, n) && Te(ye(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && T.cleanData(ye(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && T.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return X(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(oe, "") : void 0;
                if (!("string" != typeof e || ue.test(e) || !v.htmlSerialize && re.test(e) || !v.leadingWhitespace && se.test(e) || me[(le.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ae, "<$1></$2>");
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, T.cleanData(ye(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, i) {
            n = g.apply([], n);
            var e, t, o, r, s, a, l = 0,
                c = this.length,
                d = this,
                u = c - 1,
                p = n[0],
                h = T.isFunction(p);
            if (h || 1 < c && "string" == typeof p && !v.checkClone && pe.test(p)) return this.each(function(e) {
                var t = d.eq(e);
                h && (n[0] = p.call(this, e, t.html())), t.domManip(n, i)
            });
            if (c && (e = (a = T.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === a.childNodes.length && (a = e), e)) {
                for (o = (r = T.map(ye(a, "script"), xe)).length; l < c; l++) t = a, l !== u && (t = T.clone(t, !0, !0), o && T.merge(r, ye(t, "script"))), i.call(this[l], t, l);
                if (o)
                    for (s = r[r.length - 1].ownerDocument, T.map(r, $e), l = 0; l < o; l++) t = r[l], he.test(t.type || "") && !T._data(t, "globalEval") && T.contains(s, t) && (t.src ? T._evalUrl && T._evalUrl(t.src) : T.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ge, "")));
                a = e = null
            }
            return this
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        T.fn[e] = function(e) {
            for (var t, n = 0, i = [], o = T(e), r = o.length - 1; n <= r; n++) t = n === r ? this : this.clone(!0), T(o[n])[s](t), a.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var Se, _e, Ae, Ee, De = {};

    function Ne(e, t) {
        var n = T(t.createElement(e)).appendTo(t.body),
            i = f.getDefaultComputedStyle ? f.getDefaultComputedStyle(n[0]).display : T.css(n[0], "display");
        return n.detach(), i
    }

    function Oe(e) {
        var t = C,
            n = De[e];
        return n || ("none" !== (n = Ne(e, t)) && n || ((t = ((Se = (Se || T("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Se[0].contentDocument).document).write(), t.close(), n = Ne(e, t), Se.detach()), De[e] = n), n
    }(Ee = C.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (_e = Ee.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", v.opacity = /^0.5/.test(_e.style.opacity), v.cssFloat = !!_e.style.cssFloat, Ee.style.backgroundClip = "content-box", Ee.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === Ee.style.backgroundClip, _e = Ee = null, v.shrinkWrapBlocks = function() {
        var e, t, n;
        if (null == Ae) {
            if (!(e = C.getElementsByTagName("body")[0])) return;
            t = C.createElement("div"), n = C.createElement("div"), e.appendChild(t).appendChild(n), Ae = !1, typeof n.style.zoom !== q && (n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", Ae = 3 !== n.offsetWidth), e.removeChild(t), e = t = n = null
        }
        return Ae
    };
    var Le, je, He = /^margin/,
        qe = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
        Pe = /^(top|right|bottom|left)$/;

    function Me(t, n) {
        return {
            get: function() {
                var e = t();
                if (null != e) return e ? void delete this.get : (this.get = n).apply(this, arguments)
            }
        }
    }
    f.getComputedStyle ? (Le = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, je = function(e, t, n) {
            var i, o, r, s, a = e.style;
            return s = (n = n || Le(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || T.contains(e.ownerDocument, e) || (s = T.style(e, t)), qe.test(s) && He.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
        }) : C.documentElement.currentStyle && (Le = function(e) {
            return e.currentStyle
        }, je = function(e, t, n) {
            var i, o, r, s, a = e.style;
            return null == (s = (n = n || Le(e)) ? n[t] : void 0) && a && a[t] && (s = a[t]), qe.test(s) && !Pe.test(t) && (i = a.left, (r = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
        }),
        function() {
            var e, r, i, o, s, a, t = C.createElement("div"),
                l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";

            function n() {
                var e, t, n = C.getElementsByTagName("body")[0];
                n && (e = C.createElement("div"), t = C.createElement("div"), e.style.cssText = l, n.appendChild(e).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", T.swap(n, null != n.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    i = 4 === t.offsetWidth
                }), a = !(s = !(o = !0)), f.getComputedStyle && (s = "1%" !== (f.getComputedStyle(t, null) || {}).top, o = "4px" === (f.getComputedStyle(t, null) || {
                    width: "4px"
                }).width), n.removeChild(e), t = n = null)
            }
            t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (e = t.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", v.opacity = /^0.5/.test(e.style.opacity), v.cssFloat = !!e.style.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === t.style.backgroundClip, e = t = null, T.extend(v, {
                reliableHiddenOffsets: function() {
                    if (null != r) return r;
                    var e, t, n, i = C.createElement("div"),
                        o = C.getElementsByTagName("body")[0];
                    return o ? (i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (e = C.createElement("div")).style.cssText = l, o.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (t = i.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", r = n && 0 === t[0].offsetHeight, o.removeChild(e), i = o = null, r) : void 0
                },
                boxSizing: function() {
                    return null == i && n(), i
                },
                boxSizingReliable: function() {
                    return null == o && n(), o
                },
                pixelPosition: function() {
                    return null == s && n(), s
                },
                reliableMarginRight: function() {
                    var e, t, n, i;
                    if (null == a && f.getComputedStyle) {
                        if (!(e = C.getElementsByTagName("body")[0])) return;
                        t = C.createElement("div"), n = C.createElement("div"), t.style.cssText = l, e.appendChild(t).appendChild(n), (i = n.appendChild(C.createElement("div"))).style.cssText = n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0", i.style.marginRight = i.style.width = "0", n.style.width = "1px", a = !parseFloat((f.getComputedStyle(i, null) || {}).marginRight), e.removeChild(t)
                    }
                    return a
                }
            })
        }(), T.swap = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
            return o
        };
    var ze = /alpha\([^)]*\)/i,
        Ie = /opacity\s*=\s*([^)]*)/,
        Re = /^(none|table(?!-c[ea]).+)/,
        We = new RegExp("^(" + F + ")(.*)$", "i"),
        Fe = new RegExp("^([+-])=(" + F + ")", "i"),
        Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ue = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Xe = ["Webkit", "O", "Moz", "ms"];

    function Ye(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = Xe.length; o--;)
            if ((t = Xe[o] + n) in e) return t;
        return i
    }

    function Ge(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (r[s] = T._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && U(i) && (r[s] = T._data(i, "olddisplay", Oe(i.nodeName)))) : r[s] || (o = U(i), (n && "none" !== n || !o) && T._data(i, "olddisplay", o ? n : T.css(i, "display"))));
        for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function Ke(e, t, n) {
        var i = We.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function Ve(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += T.css(e, n + B[r], !0, o)), i ? ("content" === n && (s -= T.css(e, "padding" + B[r], !0, o)), "margin" !== n && (s -= T.css(e, "border" + B[r] + "Width", !0, o))) : (s += T.css(e, "padding" + B[r], !0, o), "padding" !== n && (s += T.css(e, "border" + B[r] + "Width", !0, o)));
        return s
    }

    function Qe(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Le(e),
            s = v.boxSizing() && "border-box" === T.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (((o = je(e, t, r)) < 0 || null == o) && (o = e.style[t]), qe.test(o)) return o;
            i = s && (v.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + Ve(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function Je(e, t, n, i, o) {
        return new Je.prototype.init(e, t, n, i, o)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = je(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: v.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = T.camelCase(t),
                    l = e.style;
                if (t = T.cssProps[a] || (T.cssProps[a] = Ye(l, a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                if ("string" === (r = typeof n) && (o = Fe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(T.css(e, t)), r = "number"), null != n && n == n && ("number" !== r || T.cssNumber[a] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                    l[t] = "", l[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = T.camelCase(t);
            return t = T.cssProps[a] || (T.cssProps[a] = Ye(e.style, a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = je(e, t, i)), "normal" === r && t in Ue && (r = Ue[t]), "" === n || n ? (o = parseFloat(r), !0 === n || T.isNumeric(o) ? o || 0 : r) : r
        }
    }), T.each(["height", "width"], function(e, o) {
        T.cssHooks[o] = {
            get: function(e, t, n) {
                return t ? 0 === e.offsetWidth && Re.test(T.css(e, "display")) ? T.swap(e, Be, function() {
                    return Qe(e, o, n)
                }) : Qe(e, o, n) : void 0
            },
            set: function(e, t, n) {
                var i = n && Le(e);
                return Ke(0, t, n ? Ve(e, o, n, v.boxSizing() && "border-box" === T.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), v.opacity || (T.cssHooks.opacity = {
        get: function(e, t) {
            return Ie.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = T.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === T.trim(r.replace(ze, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ze.test(r) ? r.replace(ze, o) : r + " " + o)
        }
    }), T.cssHooks.marginRight = Me(v.reliableMarginRight, function(e, t) {
        return t ? T.swap(e, {
            display: "inline-block"
        }, je, [e, "marginRight"]) : void 0
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        T.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + B[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, He.test(o) || (T.cssHooks[o + r].set = Ke)
    }), T.fn.extend({
        css: function(e, t) {
            return X(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (T.isArray(t)) {
                    for (i = Le(e), o = t.length; s < o; s++) r[t[s]] = T.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return Ge(this, !0)
        },
        hide: function() {
            return Ge(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                U(this) ? T(this).show() : T(this).hide()
            })
        }
    }), ((T.Tween = Je).prototype = {
        constructor: Je,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Je.propHooks[this.prop];
            return this.pos = t = this.options.duration ? T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
        }
    }).init.prototype = Je.prototype, (Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[T.cssProps[e.prop]] || T.cssHooks[e.prop]) ? T.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, T.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, T.fx = Je.prototype.init, T.fx.step = {};
    var Ze, et, tt, nt, it, ot, rt, st = /^(?:toggle|show|hide)$/,
        at = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
        lt = /queueHooks$/,
        ct = [function(t, e, n) {
            var i, o, r, s, a, l, c, d, u = this,
                p = {},
                h = t.style,
                f = t.nodeType && U(t),
                g = T._data(t, "fxshow");
            for (i in n.queue || (null == (a = T._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, u.always(function() {
                    u.always(function() {
                        a.unqueued--, T.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = T.css(t, "display"), d = Oe(t.nodeName), "none" === c && (c = d), "inline" === c && "none" === T.css(t, "float") && (v.inlineBlockNeedsLayout && "inline" !== d ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", v.shrinkWrapBlocks() || u.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), e)
                if (o = e[i], st.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        f = !0
                    }
                    p[i] = g && g[i] || T.style(t, i)
                }
            if (!T.isEmptyObject(p))
                for (i in g ? "hidden" in g && (f = g.hidden) : g = T._data(t, "fxshow", {}), r && (g.hidden = !f), f ? T(t).show() : u.done(function() {
                        T(t).hide()
                    }), u.done(function() {
                        var e;
                        for (e in T._removeData(t, "fxshow"), p) T.style(t, e, p[e])
                    }), p) s = ht(f ? g[i] : 0, i, u), i in g || (g[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }],
        dt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = at.exec(t),
                    r = o && o[3] || (T.cssNumber[e] ? "" : "px"),
                    s = (T.cssNumber[e] || "px" !== r && +i) && at.exec(T.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r)
                    for (r = r || s[3], o = o || [], s = +i || 1; s /= a = a || ".5", T.style(n.elem, e, s + r), a !== (a = n.cur() / i) && 1 !== a && --l;);
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };

    function ut() {
        return setTimeout(function() {
            Ze = void 0
        }), Ze = T.now()
    }

    function pt(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = B[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ht(e, t, n) {
        for (var i, o = (dt[t] || []).concat(dt["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function ft(r, e, t) {
        var n, s, i = 0,
            o = ct.length,
            a = T.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Ze || ut(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return a.notifyWith(r, [c, n, t]), n < 1 && o ? t : (a.resolveWith(r, [c]), !1)
            },
            c = a.promise({
                elem: r,
                props: T.extend({}, e),
                opts: T.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = T.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? a.resolveWith(r, [c, e]) : a.rejectWith(r, [c, e]), this
                }
            }),
            d = c.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = T.camelCase(n)], r = e[n], T.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = T.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(d, c.opts.specialEasing); i < o; i++)
            if (n = ct[i].call(c, r, d, c.opts)) return n;
        return T.map(d, ht, c), T.isFunction(c.opts.start) && c.opts.start.call(r, c), T.fx.timer(T.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    T.Animation = T.extend(ft, {
        tweener: function(e, t) {
            T.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], dt[n] = dt[n] || [], dt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ct.unshift(e) : ct.push(e)
        }
    }), T.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || T.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !T.isFunction(t) && t
        };
        return i.duration = T.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in T.fx.speeds ? T.fx.speeds[i.duration] : T.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            T.isFunction(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
        }, i
    }, T.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var o = T.isEmptyObject(t),
                r = T.speed(e, n, i),
                s = function() {
                    var e = ft(this, T.extend({}, t), r);
                    (o || T._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(o, e, r) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = T.timers,
                    i = T._data(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && lt.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                (e || !r) && T.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = T._data(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    o = T.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function(e, i) {
        var o = T.fn[i];
        T.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(pt(i, !0), e, t, n)
        }
    }), T.each({
        slideDown: pt("show"),
        slideUp: pt("hide"),
        slideToggle: pt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        T.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), T.timers = [], T.fx.tick = function() {
        var e, t = T.timers,
            n = 0;
        for (Ze = T.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || T.fx.stop(), Ze = void 0
    }, T.fx.timer = function(e) {
        T.timers.push(e), e() ? T.fx.start() : T.timers.pop()
    }, T.fx.interval = 13, T.fx.start = function() {
        et || (et = setInterval(T.fx.tick, T.fx.interval))
    }, T.fx.stop = function() {
        clearInterval(et), et = null
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function(i, e) {
        return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }, (rt = C.createElement("div")).setAttribute("className", "t"), rt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", tt = rt.getElementsByTagName("a")[0], ot = (it = C.createElement("select")).appendChild(C.createElement("option")), nt = rt.getElementsByTagName("input")[0], tt.style.cssText = "top:1px", v.getSetAttribute = "t" !== rt.className, v.style = /top/.test(tt.getAttribute("style")), v.hrefNormalized = "/a" === tt.getAttribute("href"), v.checkOn = !!nt.value, v.optSelected = ot.selected, v.enctype = !!C.createElement("form").enctype, it.disabled = !0, v.optDisabled = !ot.disabled, (nt = C.createElement("input")).setAttribute("value", ""), v.input = "" === nt.getAttribute("value"), nt.value = "t", nt.setAttribute("type", "radio"), v.radioValue = "t" === nt.value, tt = nt = it = ot = rt = null;
    var gt = /\r/g;
    T.fn.extend({
        val: function(n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = T.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : T.isArray(t) && (t = T.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : T.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                        if (!(!(n = i[l]).selected && l !== o || (v.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && T.nodeName(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = T.makeArray(t), s = o.length; s--;)
                        if (i = o[s], 0 <= T.inArray(T.valHooks.option.get(i), r)) try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                return T.isArray(t) ? e.checked = 0 <= T.inArray(T(e).val(), t) : void 0
            }
        }, v.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var mt, vt, yt = T.expr.attrHandle,
        bt = /^(?:checked|selected)$/i,
        wt = v.getSetAttribute,
        xt = v.input;
    T.fn.extend({
        attr: function(e, t) {
            return X(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }), T.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === q ? T.prop(e, t, n) : (1 === r && T.isXMLDoc(e) || (t = t.toLowerCase(), i = T.attrHooks[t] || (T.expr.match.bool.test(t) ? vt : mt)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = T.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void T.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(N);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = T.propFix[n] || n, T.expr.match.bool.test(n) ? xt && wt || !bt.test(n) ? e[i] = !1 : e[T.camelCase("default-" + n)] = e[i] = !1 : T.attr(e, n, ""), e.removeAttribute(wt ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && T.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), vt = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : xt && wt || !bt.test(n) ? e.setAttribute(!wt && T.propFix[n] || n, n) : e[T.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = yt[t] || T.find.attr;
        yt[t] = xt && wt || !bt.test(t) ? function(e, t, n) {
            var i, o;
            return n || (o = yt[t], yt[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, yt[t] = o), i
        } : function(e, t, n) {
            return n ? void 0 : e[T.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), xt && wt || (T.attrHooks.value = {
        set: function(e, t, n) {
            return T.nodeName(e, "input") ? void(e.defaultValue = t) : mt && mt.set(e, t, n)
        }
    }), wt || (mt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, yt.id = yt.name = yt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, T.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: mt.set
    }, T.attrHooks.contenteditable = {
        set: function(e, t, n) {
            mt.set(e, "" !== t && t, n)
        }
    }, T.each(["width", "height"], function(e, n) {
        T.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"), t) : void 0
            }
        }
    })), v.style || (T.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var $t = /^(?:input|select|textarea|button|object)$/i,
        Tt = /^(?:a|area)$/i;
    T.fn.extend({
        prop: function(e, t) {
            return X(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = T.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), T.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !T.isXMLDoc(e)) && (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : $t.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), v.hrefNormalized || T.each(["href", "src"], function(e, t) {
        T.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), v.optSelected || (T.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }), v.enctype || (T.propFix.enctype = "encoding");
    var kt = /[\t\r\n\f]/g;
    T.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a = 0,
                l = this.length,
                c = "string" == typeof t && t;
            if (T.isFunction(t)) return this.each(function(e) {
                T(this).addClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(N) || []; a < l; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(kt, " ") : " ")) {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = T.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof t && t;
            if (T.isFunction(t)) return this.each(function(e) {
                T(this).removeClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(N) || []; a < l; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(kt, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; 0 <= i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        s = t ? T.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : this.each(T.isFunction(o) ? function(e) {
                T(this).toggleClass(o.call(this, e, this.className, t), t)
            } : function() {
                if ("string" === r)
                    for (var e, t = 0, n = T(this), i = o.match(N) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else(r === q || "boolean" === r) && (this.className && T._data(this, "__className__", this.className), this.className = this.className || !1 === o ? "" : T._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(kt, " ").indexOf(t)) return !0;
            return !1
        }
    }), T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        T.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), T.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ct = T.now(),
        St = /\?/,
        _t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    T.parseJSON = function(e) {
        if (f.JSON && f.JSON.parse) return f.JSON.parse(e + "");
        var o, r = null,
            t = T.trim(e + "");
        return t && !T.trim(t.replace(_t, function(e, t, n, i) {
            return o && t && (r = 0), 0 === r ? e : (o = n || t, r += !i - !n, "")
        })) ? Function("return " + t)() : T.error("Invalid JSON: " + e)
    }, T.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            f.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
    };
    var At, Et, Dt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qt = {},
        Pt = {},
        Mt = "*/".concat("*");
    try {
        Et = location.href
    } catch (e) {
        (Et = C.createElement("a")).href = "", Et = Et.href
    }

    function zt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(N) || [];
            if (T.isFunction(t))
                for (; n = o[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function It(t, o, r, s) {
        var a = {},
            l = t === Pt;

        function c(e) {
            var i;
            return a[e] = !0, T.each(t[e] || [], function(e, t) {
                var n = t(o, r, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(o.dataTypes[0]) || !a["*"] && c("*")
    }

    function Rt(e, t) {
        var n, i, o = T.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && T.extend(!0, e, n), e
    }
    At = Ht.exec(Et.toLowerCase()) || [], T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": T.parseJSON,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rt(Rt(e, T.ajaxSettings), t) : Rt(T.ajaxSettings, e)
        },
        ajaxPrefilter: zt(qt),
        ajaxTransport: zt(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, i, d, u, p, h, f, o, g = T.ajaxSetup({}, t),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? T(m) : T.event,
                y = T.Deferred(),
                b = T.Callbacks("once memory"),
                w = g.statusCode || {},
                r = {},
                s = {},
                x = 0,
                a = "canceled",
                $ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!o)
                                for (o = {}; t = Ot.exec(u);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? u : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = s[n] = s[n] || e, r[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) w[t] = [w[t], e[t]];
                            else $.always(e[$.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || a;
                        return f && f.abort(t), l(0, t), this
                    }
                };
            if (y.promise($).complete = b.add, $.success = $.done, $.error = $.fail, g.url = ((e || g.url || Et) + "").replace(Dt, "").replace(jt, At[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = T.trim(g.dataType || "*").toLowerCase().match(N) || [""], null == g.crossDomain && (n = Ht.exec(g.url.toLowerCase()), g.crossDomain = !(!n || n[1] === At[1] && n[2] === At[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), It(qt, g, t, $), 2 === x) return $;
            for (i in (h = g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Lt.test(g.type), d = g.url, g.hasContent || (g.data && (d = g.url += (St.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = Nt.test(d) ? d.replace(Nt, "$1_=" + Ct++) : d + (St.test(d) ? "&" : "?") + "_=" + Ct++)), g.ifModified && (T.lastModified[d] && $.setRequestHeader("If-Modified-Since", T.lastModified[d]), T.etag[d] && $.setRequestHeader("If-None-Match", T.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && $.setRequestHeader("Content-Type", g.contentType), $.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : g.accepts["*"]), g.headers) $.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, $, g) || 2 === x)) return $.abort();
            for (i in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) $[i](g[i]);
            if (f = It(Pt, g, t, $)) {
                $.readyState = 1, h && v.trigger("ajaxSend", [$, g]), g.async && 0 < g.timeout && (p = setTimeout(function() {
                    $.abort("timeout")
                }, g.timeout));
                try {
                    x = 1, f.send(r, l)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, i) {
                var o, r, s, a, l, c = t;
                2 !== x && (x = 2, p && clearTimeout(p), f = void 0, u = i || "", $.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)
                        for (s in a)
                            if (a[s] && a[s].test(o)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in n) r = l[0];
                    else {
                        for (s in n) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            i || (i = s)
                        }
                        r = r || i
                    }
                    return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                }(g, $, n)), a = function(e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = d.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, $, o), o ? (g.ifModified && ((l = $.getResponseHeader("Last-Modified")) && (T.lastModified[d] = l), (l = $.getResponseHeader("etag")) && (T.etag[d] = l)), 204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, (e || !c) && (c = "error", e < 0 && (e = 0))), $.status = e, $.statusText = (t || c) + "", o ? y.resolveWith(m, [r, c, $]) : y.rejectWith(m, [$, c, s]), $.statusCode(w), w = void 0, h && v.trigger(o ? "ajaxSuccess" : "ajaxError", [$, g, o ? r : s]), b.fireWith(m, [$, c]), h && (v.trigger("ajaxComplete", [$, g]), --T.active || T.event.trigger("ajaxStop")))
            }
            return $
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script")
        }
    }), T.each(["get", "post"], function(e, o) {
        T[o] = function(e, t, n, i) {
            return T.isFunction(t) && (i = i || n, n = t, t = void 0), T.ajax({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            })
        }
    }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), T._evalUrl = function(e) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, T.fn.extend({
        wrapAll: function(t) {
            if (T.isFunction(t)) return this.each(function(e) {
                T(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = T(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(T.isFunction(n) ? function(e) {
                T(this).wrapInner(n.call(this, e))
            } : function() {
                var e = T(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = T.isFunction(t);
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                T.nodeName(this, "body") || T(this).replaceWith(this.childNodes)
            }).end()
        }
    }), T.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !v.reliableHiddenOffsets() && "none" === (e.style && e.style.display || T.css(e, "display"))
    }, T.expr.filters.visible = function(e) {
        return !T.expr.filters.hidden(e)
    };
    var Wt = /%20/g,
        Ft = /\[\]$/,
        Bt = /\r?\n/g,
        Ut = /^(?:submit|button|image|reset|file)$/i,
        Xt = /^(?:input|select|textarea|keygen)/i;

    function Yt(n, e, i, o) {
        var t;
        if (T.isArray(e)) T.each(e, function(e, t) {
            i || Ft.test(n) ? o(n, t) : Yt(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
        });
        else if (i || "object" !== T.type(e)) o(n, e);
        else
            for (t in e) Yt(n + "[" + t + "]", e[t], i, o)
    }
    T.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = T.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = T.ajaxSettings && T.ajaxSettings.traditional), T.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Yt(n, e[n], t, o);
        return i.join("&").replace(Wt, "+")
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && Xt.test(this.nodeName) && !Ut.test(e) && (this.checked || !Y.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : T.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Bt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Bt, "\r\n")
                }
            }).get()
        }
    }), T.ajaxSettings.xhr = void 0 !== f.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Qt() || function() {
            try {
                return new f.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : Qt;
    var Gt = 0,
        Kt = {},
        Vt = T.ajaxSettings.xhr();

    function Qt() {
        try {
            return new f.XMLHttpRequest
        } catch (e) {}
    }
    f.ActiveXObject && T(f).on("unload", function() {
        for (var e in Kt) Kt[e](void 0, !0)
    }), v.cors = !!Vt && "withCredentials" in Vt, (Vt = v.ajax = !!Vt) && T.ajaxTransport(function(l) {
        var c;
        if (!l.crossDomain || v.cors) return {
            send: function(e, r) {
                var t, s = l.xhr(),
                    a = ++Gt;
                if (s.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                    for (t in l.xhrFields) s[t] = l.xhrFields[t];
                for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && s.setRequestHeader(t, e[t] + "");
                s.send(l.hasContent && l.data || null), c = function(e, t) {
                    var n, i, o;
                    if (c && (t || 4 === s.readyState))
                        if (delete Kt[a], c = void 0, s.onreadystatechange = T.noop, t) 4 !== s.readyState && s.abort();
                        else {
                            o = {}, n = s.status, "string" == typeof s.responseText && (o.text = s.responseText);
                            try {
                                i = s.statusText
                            } catch (e) {
                                i = ""
                            }
                            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                        }
                    o && r(n, i, o, s.getAllResponseHeaders())
                }, l.async ? 4 === s.readyState ? setTimeout(c) : s.onreadystatechange = Kt[a] = c : c()
            },
            abort: function() {
                c && c(void 0, !0)
            }
        }
    }), T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e), e
            }
        }
    }), T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), T.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, o = C.head || T("head")[0] || C.documentElement;
            return {
                send: function(e, n) {
                    (i = C.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                    }, o.insertBefore(i, o.firstChild)
                },
                abort: function() {
                    i && i.onload(void 0, !0)
                }
            }
        }
    });
    var Jt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Jt.pop() || T.expando + "_" + Ct++;
            return this[e] = !0, e
        }
    }), T.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = T.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return r || T.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = f[i], f[i] = function() {
            r = arguments
        }, n.always(function() {
            f[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Jt.push(i)), r && T.isFunction(o) && o(r[0]), r = o = void 0
        }), "script") : void 0
    }), T.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || C;
        var i = w.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = T.buildFragment([e], t, o), o && o.length && T(o).remove(), T.merge([], i.childNodes))
    };
    var en = T.fn.load;
    T.fn.load = function(e, t, n) {
        if ("string" != typeof e && en) return en.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return 0 <= a && (i = e.slice(a, e.length), e = e.slice(0, a)), T.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && T.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, T.expr.filters.animated = function(t) {
        return T.grep(T.timers, function(e) {
            return t === e.elem
        }).length
    };
    var tn = f.document.documentElement;

    function nn(e) {
        return T.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    T.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c = T.css(e, "position"),
                d = T(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), r = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < T.inArray("auto", [r, l]) ? (s = (i = d.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), T.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, T.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                T.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (e = r.documentElement, T.contains(e, o) ? (typeof o.getBoundingClientRect !== q && (i = o.getBoundingClientRect()), n = nn(r), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === T.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), T.nodeName(e[0], "html") || (n = e.offset()), n.top += T.css(e[0], "borderTopWidth", !0), n.left += T.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - T.css(i, "marginTop", !0),
                    left: t.left - n.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || tn; e && !T.nodeName(e, "html") && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || tn
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = /Y/.test(o);
        T.fn[t] = function(e) {
            return X(this, function(e, t, n) {
                var i = nn(e);
                return void 0 === n ? i ? o in i ? i[o] : i.document.documentElement[t] : e[t] : void(i ? i.scrollTo(r ? T(i).scrollLeft() : n, r ? n : T(i).scrollTop()) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }), T.each(["top", "left"], function(e, n) {
        T.cssHooks[n] = Me(v.pixelPosition, function(e, t) {
            return t ? (t = je(e, n), qe.test(t) ? T(e).position()[n] + "px" : t) : void 0
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(r, s) {
        T.each({
            padding: "inner" + r,
            content: s,
            "": "outer" + r
        }, function(i, e) {
            T.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return X(this, function(e, t, n) {
                    var i;
                    return T.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? T.css(e, t, o) : T.style(e, t, n, o)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), T.fn.size = function() {
        return this.length
    }, T.fn.andSelf = T.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var on = f.jQuery,
        rn = f.$;
    return T.noConflict = function(e) {
        return f.$ === T && (f.$ = rn), e && f.jQuery === T && (f.jQuery = on), T
    }, typeof e === q && (f.jQuery = f.$ = T), T
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var o, s = window.Slick || {};
    o = 0, (s = function(e, t) {
        var n, i = this;
        i.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return c('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, i.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(e).data("slick") || {}, i.options = c.extend({}, i.defaults, t, n), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = o++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
        var i = this;
        if ("boolean" == typeof t) n = t, t = null;
        else if (t < 0 || t >= i.slideCount) return !1;
        i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? c(e).appendTo(i.$slideTrack) : n ? c(e).insertBefore(i.$slides.eq(t)) : c(e).insertAfter(i.$slides.eq(t)) : !0 === n ? c(e).prependTo(i.$slideTrack) : c(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e)
        }), i.$slidesCache = i.$slides, i.reinit()
    }, s.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, s.prototype.animateSlide = function(e, t) {
        var n = {},
            i = this;
        i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
            left: e
        }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
            top: e
        }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
            animStart: i.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
            },
            complete: function() {
                t && t.call()
            }
        })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function() {
            i.disableTransition(), t.call()
        }, i.options.speed))
    }, s.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = c(e).not(this.$slider)), e
    }, s.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, s.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, s.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, s.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, s.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, s.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, s.prototype.buildDots = function() {
        var e, t, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, s.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, s.prototype.buildRows = function() {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), 0 < a.options.rows) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = e * s + (t * a.options.slidesPerRow + n);
                        r.get(d) && c.appendChild(r.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, s.prototype.checkResponsive = function(e, t) {
        var n, i, o, r = this,
            s = !1,
            a = r.$slider.width(),
            l = window.innerWidth || c(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
            null !== i ? null !== r.activeBreakpoint ? (i !== r.activeBreakpoint || t) && (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = i), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
        }
    }, s.prototype.changeSlide = function(e, t) {
        var n, i, o = this,
            r = c(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case "previous":
                i = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
                break;
            case "next":
                i = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
                break;
            case "index":
                var s = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(s), !1, t), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, s.prototype.checkNavigable = function(e) {
        var t, n;
        if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }, s.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, s.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, s.prototype.cleanUpRows = function() {
        var e;
        0 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, s.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, s.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, s.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }, s.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, s.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, s.prototype.focusHandler = function() {
        var n = this;
        n.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(e) {
            var t = c(this);
            setTimeout(function() {
                n.options.pauseOnFocus && t.is(":focus") && (n.focussed = !0, n.autoPlay())
            }, 0)
        }).on("blur.slick", "*", function(e) {
            c(this), n.options.pauseOnFocus && (n.focussed = !1, n.autoPlay())
        })
    }, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, s.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++i;
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, s.prototype.getLeft = function(e) {
        var t, n, i, o, r = this,
            s = 0;
        return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
    }, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, s.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, s.prototype.getSlick = function() {
        return this
    }, s.prototype.getSlideCount = function() {
        var o, r, e, s = this;
        return e = !0 === s.options.centerMode ? Math.floor(s.$list.width() / 2) : 0, r = -1 * s.swipeLeft + e, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(e, t) {
            var n, i;
            if (n = c(t).outerWidth(), i = t.offsetLeft, !0 !== s.options.centerMode && (i += n / 2), r < i + n) return o = t, !1
        }), Math.abs(c(o).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, s.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, s.prototype.initADA = function() {
        var i = this,
            n = Math.ceil(i.slideCount / i.options.slidesToShow),
            o = i.getNavigableIndexes().filter(function(e) {
                return 0 <= e && e < i.slideCount
            });
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = o.indexOf(e);
            if (c(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + i.instanceUid + e,
                    tabindex: -1
                }), -1 !== t) {
                var n = "slick-slide-control" + i.instanceUid + t;
                c("#" + n).length && c(this).attr({
                    "aria-describedby": n
                })
            }
        }), i.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = o[e];
            c(this).attr({
                role: "presentation"
            }), c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + i.instanceUid + e,
                "aria-controls": "slick-slide" + i.instanceUid + t,
                "aria-label": e + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(i.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.options.focusOnChange ? i.$slides.eq(e).attr({
            tabindex: "0"
        }) : i.$slides.eq(e).removeAttr("tabindex");
        i.activateADA()
    }, s.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, s.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, s.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }, s.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
    }, s.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, s.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, s.prototype.lazyLoad = function() {
        function e(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this),
                    t = c(this).attr("data-lazy"),
                    n = c(this).attr("data-srcset"),
                    i = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    o = document.createElement("img");
                o.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }, o.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                }, o.src = t
            })
        }
        var t, n, i, r = this;
        if (!0 === r.options.centerMode ? !0 === r.options.infinite ? i = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), i = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (0 < n && n--, i <= r.slideCount && i++)), t = r.$slider.find(".slick-slide").slice(n, i), "anticipated" === r.options.lazyLoad)
            for (var o = n - 1, s = i, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(s)), o--, s++;
        e(t), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }, s.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, s.prototype.next = s.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, s.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, s.prototype.pause = s.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, s.prototype.play = s.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, s.prototype.postSlide = function(e) {
        var t = this;
        !t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange)) && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()
    }, s.prototype.prev = s.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, s.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, s.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, n, i, o, r, s = this,
            a = c("img[data-lazy]", s.$slider);
        a.length ? (t = a.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, n]), s.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]), s.progressiveLazyLoad())
        }, r.src = n) : s.$slider.trigger("allImagesLoaded", [s])
    }, s.prototype.refresh = function(e) {
        var t, n, i = this;
        n = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > n && (i.currentSlide = n), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), t = i.currentSlide, i.destroy(!0), c.extend(i, i.initials, {
            currentSlide: t
        }), i.init(), e || i.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, s.prototype.registerBreakpoints = function() {
        var e, t, n, i = this,
            o = i.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
            for (e in i.respondTo = i.options.respondTo || "window", o)
                if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
                    for (t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                    i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
                }
            i.breakpoints.sort(function(e, t) {
                return i.options.mobileFirst ? e - t : t - e
            })
        }
    }, s.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, s.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
        var i = this;
        return "boolean" == typeof e ? e = !0 === (t = e) ? 0 : i.slideCount - 1 : e = !0 === t ? --e : e, !(i.slideCount < 1 || e < 0 || e > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, s.prototype.setCSS = function(e) {
        var t, n, i = this,
            o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
    }, s.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, s.prototype.setFade = function() {
        var n, i = this;
        i.$slides.each(function(e, t) {
            n = i.slideWidth * e * -1, !0 === i.options.rtl ? c(t).css({
                position: "relative",
                right: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, s.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, s.prototype.setOption = s.prototype.slickSetOption = function() {
        var e, t, n, i, o, r = this,
            s = !1;
        if ("object" === c.type(arguments[0]) ? (n = arguments[0], s = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[0], i = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = i;
        else if ("multiple" === o) c.each(n, function(e, t) {
            r.options[e] = t
        });
        else if ("responsive" === o)
            for (t in i)
                if ("array" !== c.type(r.options.responsive)) r.options.responsive = [i[t]];
                else {
                    for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(i[t])
                }
        s && (r.unload(), r.reinit())
    }, s.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, s.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, s.prototype.setSlideClasses = function(e) {
        var t, n, i, o, r = this;
        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
        } else 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
    }, s.prototype.setupInfinite = function() {
        var e, t, n, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
            for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; e -= 1) t = e - 1, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + i.slideCount; e += 1) t = e, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }, s.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, s.prototype.selectHandler = function(e) {
        var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
            n = parseInt(t.attr("data-slick-index"));
        return n || (n = 0), this.slideCount <= this.options.slidesToShow ? void this.slideHandler(n, !1, !0) : void this.slideHandler(n)
    }, s.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a, l = null,
            c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) return !1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
            c.postSlide(i)
        }) : c.postSlide(i))) : !1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function() {
            c.postSlide(i)
        }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
            c.postSlide(o)
        })) : c.postSlide(o), void c.animateHeight()) : void(!0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, function() {
            c.postSlide(o)
        }) : c.postSlide(o)))
    }, s.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, s.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && 315 <= i ? !1 === o.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
    }, s.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
        if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, s.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, s.prototype.swipeMove = function(e) {
        var t, n, i, o, r, s, a = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < s ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, s.prototype.swipeStart = function(e) {
        var t, n = this;
        return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? !(n.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
    }, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, s.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, s.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, s.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, s.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, s.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function() {
        var e, t, n = this,
            i = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            r = n.length;
        for (e = 0; e < r; e++)
            if ("object" == typeof i || void 0 === i ? n[e].slick = new s(n[e], i) : t = n[e].slick[i].apply(n[e].slick, o), void 0 !== t) return t;
        return n
    }
}),
function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function(e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t
    } : n(jQuery)
}(function(n) {
    var e = function() {
            if (n && n.fn && n.fn.select2 && n.fn.select2.amd) var e = n.fn.select2.amd;
            var t, o, c;
            return e && e.requirejs || (e ? o = e : e = {}, function(h) {
                function f(e, t) {
                    return n.call(e, t)
                }

                function a(e, t) {
                    var n, i, o, r, s, a, l, c, d, u, p, h = t && t.split("/"),
                        f = T.map,
                        g = f && f["*"] || {};
                    if (e) {
                        for (s = (e = e.split("/")).length - 1, T.nodeIdCompat && C.test(e[s]) && (e[s] = e[s].replace(C, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), d = 0; d < e.length; d++)
                            if ("." === (p = e[d])) e.splice(d, 1), d -= 1;
                            else if (".." === p) {
                            if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                            0 < d && (e.splice(d - 1, 2), d -= 2)
                        }
                        e = e.join("/")
                    }
                    if ((h || g) && f) {
                        for (d = (n = e.split("/")).length; 0 < d; d -= 1) {
                            if (i = n.slice(0, d).join("/"), h)
                                for (u = h.length; 0 < u; u -= 1)
                                    if ((o = f[h.slice(0, u).join("/")]) && (o = o[i])) {
                                        r = o, a = d;
                                        break
                                    }
                            if (r) break;
                            !l && g && g[i] && (l = g[i], c = d)
                        }!r && l && (r = l, a = c), r && (n.splice(0, a, r), e = n.join("/"))
                    }
                    return e
                }

                function g(t, n) {
                    return function() {
                        var e = i.call(arguments, 0);
                        return "string" != typeof e[0] && 1 === e.length && e.push(null), s.apply(h, e.concat([t, n]))
                    }
                }

                function m(t) {
                    return function(e) {
                        x[t] = e
                    }
                }

                function v(e) {
                    if (f($, e)) {
                        var t = $[e];
                        delete $[e], k[e] = !0, r.apply(h, t)
                    }
                    if (!f(x, e) && !f(k, e)) throw new Error("No " + e);
                    return x[e]
                }

                function l(e) {
                    var t, n = e ? e.indexOf("!") : -1;
                    return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                }

                function y(e) {
                    return e ? l(e) : []
                }
                var r, s, b, w, x = {},
                    $ = {},
                    T = {},
                    k = {},
                    n = Object.prototype.hasOwnProperty,
                    i = [].slice,
                    C = /\.js$/;
                b = function(e, t) {
                    var n, i, o = l(e),
                        r = o[0],
                        s = t[1];
                    return e = o[1], r && (n = v(r = a(r, s))), r ? e = n && n.normalize ? n.normalize(e, (i = s, function(e) {
                        return a(e, i)
                    })) : a(e, s) : (r = (o = l(e = a(e, s)))[0], e = o[1], r && (n = v(r))), {
                        f: r ? r + "!" + e : e,
                        n: e,
                        pr: r,
                        p: n
                    }
                }, w = {
                    require: function(e) {
                        return g(e)
                    },
                    exports: function(e) {
                        var t = x[e];
                        return void 0 !== t ? t : x[e] = {}
                    },
                    module: function(e) {
                        return {
                            id: e,
                            uri: "",
                            exports: x[e],
                            config: (t = e, function() {
                                return T && T.config && T.config[t] || {}
                            })
                        };
                        var t
                    }
                }, r = function(e, t, n, i) {
                    var o, r, s, a, l, c, d, u = [],
                        p = typeof n;
                    if (c = y(i = i || e), "undefined" === p || "function" === p) {
                        for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1)
                            if ("require" === (r = (a = b(t[l], c)).f)) u[l] = w.require(e);
                            else if ("exports" === r) u[l] = w.exports(e), d = !0;
                        else if ("module" === r) o = u[l] = w.module(e);
                        else if (f(x, r) || f($, r) || f(k, r)) u[l] = v(r);
                        else {
                            if (!a.p) throw new Error(e + " missing " + r);
                            a.p.load(a.n, g(i, !0), m(r), {}), u[l] = x[r]
                        }
                        s = n ? n.apply(x[e], u) : void 0, e && (o && o.exports !== h && o.exports !== x[e] ? x[e] = o.exports : s === h && d || (x[e] = s))
                    } else e && (x[e] = n)
                }, t = o = s = function(e, t, n, i, o) {
                    if ("string" == typeof e) return w[e] ? w[e](t) : v(b(e, y(t)).f);
                    if (!e.splice) {
                        if ((T = e).deps && s(T.deps, T.callback), !t) return;
                        t.splice ? (e = t, t = n, n = null) : e = h
                    }
                    return t = t || function() {}, "function" == typeof n && (n = i, i = o), i ? r(h, e, t, n) : setTimeout(function() {
                        r(h, e, t, n)
                    }, 4), s
                }, s.config = function(e) {
                    return s(e)
                }, t._defined = x, (c = function(e, t, n) {
                    if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                    t.splice || (n = t, t = []), f(x, e) || f($, e) || ($[e] = [e, t, n])
                }).amd = {
                    jQuery: !0
                }
            }(), e.requirejs = t, e.require = o, e.define = c), e.define("almond", function() {}), e.define("jquery", [], function() {
                var e = n || $;
                return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
            }), e.define("select2/utils", ["jquery"], function(r) {
                function d(e) {
                    var t = e.prototype,
                        n = [];
                    for (var i in t) "function" == typeof t[i] && "constructor" !== i && n.push(i);
                    return n
                }
                var e = {
                        Extend: function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            var i = {}.hasOwnProperty;
                            for (var o in t) i.call(t, o) && (e[o] = t[o]);
                            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                        },
                        Decorate: function(i, o) {
                            function r() {
                                var e = Array.prototype.unshift,
                                    t = o.prototype.constructor.length,
                                    n = i.prototype.constructor;
                                0 < t && (e.call(arguments, i.prototype.constructor), n = o.prototype.constructor), n.apply(this, arguments)
                            }
                            var e = d(o),
                                t = d(i);
                            o.displayName = i.displayName, r.prototype = new function() {
                                this.constructor = r
                            };
                            for (var n = 0; n < t.length; n++) {
                                var s = t[n];
                                r.prototype[s] = i.prototype[s]
                            }
                            for (var a = function(e) {
                                    var t = function() {};
                                    e in r.prototype && (t = r.prototype[e]);
                                    var n = o.prototype[e];
                                    return function() {
                                        return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments)
                                    }
                                }, l = 0; l < e.length; l++) {
                                var c = e[l];
                                r.prototype[c] = a(c)
                            }
                            return r
                        }
                    },
                    t = function() {
                        this.listeners = {}
                    };
                return t.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                }, t.prototype.trigger = function(e) {
                    var t = Array.prototype.slice,
                        n = t.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, t.prototype.invoke = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
                }, e.Observable = t, e.generateChars = function(e) {
                    for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                    return t
                }, e.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }, e._convertData = function(e) {
                    for (var t in e) {
                        var n = t.split("-"),
                            i = e;
                        if (1 !== n.length) {
                            for (var o = 0; o < n.length; o++) {
                                var r = n[o];
                                (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in i || (i[r] = {}), o == n.length - 1 && (i[r] = e[t]), i = i[r]
                            }
                            delete e[t]
                        }
                    }
                    return e
                }, e.hasScroll = function(e, t) {
                    var n = r(t),
                        i = t.style.overflowX,
                        o = t.style.overflowY;
                    return (i !== o || "hidden" !== o && "visible" !== o) && ("scroll" === i || "scroll" === o || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth)
                }, e.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                        return t[e]
                    })
                }, e.appendMany = function(e, t) {
                    if ("1.7" === r.fn.jquery.substr(0, 3)) {
                        var n = r();
                        r.map(t, function(e) {
                            n = n.add(e)
                        }), t = n
                    }
                    e.append(t)
                }, e
            }), e.define("select2/results", ["jquery", "./utils"], function(p, e) {
                function i(e, t, n) {
                    this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this)
                }
                return e.Extend(i, e.Observable), i.prototype.render = function() {
                    var e = p('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e
                }, i.prototype.clear = function() {
                    this.$results.empty()
                }, i.prototype.displayMessage = function(e) {
                    var t = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var n = p('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        i = this.options.get("translations").get(e.message);
                    n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n)
                }, i.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, i.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null != e.results && 0 !== e.results.length) {
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var i = e.results[n],
                                o = this.option(i);
                            t.push(o)
                        }
                        this.$results.append(t)
                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
                }, i.prototype.position = function(e, t) {
                    t.find(".select2-results").append(e)
                }, i.prototype.sort = function(e) {
                    return this.options.get("sorter")(e)
                }, i.prototype.highlightFirstItem = function() {
                    var e = this.$results.find(".select2-results__option[aria-selected]"),
                        t = e.filter("[aria-selected=true]");
                    0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, i.prototype.setClasses = function() {
                    var t = this;
                    this.data.current(function(e) {
                        var i = p.map(e, function(e) {
                            return e.id.toString()
                        });
                        t.$results.find(".select2-results__option[aria-selected]").each(function() {
                            var e = p(this),
                                t = p.data(this, "data"),
                                n = "" + t.id;
                            null != t.element && t.element.selected || null == t.element && -1 < p.inArray(n, i) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                        })
                    })
                }, i.prototype.showLoading = function(e) {
                    this.hideLoading();
                    var t = {
                            disabled: !0,
                            loading: !0,
                            text: this.options.get("translations").get("searching")(e)
                        },
                        n = this.option(t);
                    n.className += " loading-results", this.$results.prepend(n)
                }, i.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, i.prototype.option = function(e) {
                    var t = document.createElement("li");
                    t.className = "select2-results__option";
                    var n = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    for (var i in e.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]), n) {
                        var o = n[i];
                        t.setAttribute(i, o)
                    }
                    if (e.children) {
                        var r = p(t),
                            s = document.createElement("strong");
                        s.className = "select2-results__group", p(s), this.template(e, s);
                        for (var a = [], l = 0; l < e.children.length; l++) {
                            var c = e.children[l],
                                d = this.option(c);
                            a.push(d)
                        }
                        var u = p("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested"
                        });
                        u.append(a), r.append(s), r.append(u)
                    } else this.template(e, t);
                    return p.data(t, "data", e), t
                }, i.prototype.bind = function(t, e) {
                    var l = this,
                        n = t.id + "-results";
                    this.$results.attr("id", n), t.on("results:all", function(e) {
                        l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), t.on("results:append", function(e) {
                        l.append(e.data), t.isOpen() && l.setClasses()
                    }), t.on("query", function(e) {
                        l.hideMessages(), l.showLoading(e)
                    }), t.on("select", function() {
                        t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), t.on("unselect", function() {
                        t.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), t.on("open", function() {
                        l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible()
                    }), t.on("close", function() {
                        l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant")
                    }), t.on("results:toggle", function() {
                        var e = l.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup")
                    }), t.on("results:select", function() {
                        var e = l.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = e.data("data");
                            "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
                                data: t
                            })
                        }
                    }), t.on("results:previous", function() {
                        var e = l.getHighlightedResults(),
                            t = l.$results.find("[aria-selected]"),
                            n = t.index(e);
                        if (0 !== n) {
                            var i = n - 1;
                            0 === e.length && (i = 0);
                            var o = t.eq(i);
                            o.trigger("mouseenter");
                            var r = l.$results.offset().top,
                                s = o.offset().top,
                                a = l.$results.scrollTop() + (s - r);
                            0 === i ? l.$results.scrollTop(0) : s - r < 0 && l.$results.scrollTop(a)
                        }
                    }), t.on("results:next", function() {
                        var e = l.getHighlightedResults(),
                            t = l.$results.find("[aria-selected]"),
                            n = t.index(e) + 1;
                        if (!(n >= t.length)) {
                            var i = t.eq(n);
                            i.trigger("mouseenter");
                            var o = l.$results.offset().top + l.$results.outerHeight(!1),
                                r = i.offset().top + i.outerHeight(!1),
                                s = l.$results.scrollTop() + r - o;
                            0 === n ? l.$results.scrollTop(0) : o < r && l.$results.scrollTop(s)
                        }
                    }), t.on("results:focus", function(e) {
                        e.element.addClass("select2-results__option--highlighted")
                    }), t.on("results:message", function(e) {
                        l.displayMessage(e)
                    }), p.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                        var t = l.$results.scrollTop(),
                            n = l.$results.get(0).scrollHeight - t + e.deltaY,
                            i = 0 < e.deltaY && t - e.deltaY <= 0,
                            o = e.deltaY < 0 && n <= l.$results.height();
                        i ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                        var t = p(this),
                            n = t.data("data");
                        "true" !== t.attr("aria-selected") ? l.trigger("select", {
                            originalEvent: e,
                            data: n
                        }) : l.options.get("multiple") ? l.trigger("unselect", {
                            originalEvent: e,
                            data: n
                        }) : l.trigger("close", {})
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) {
                        var t = p(this).data("data");
                        l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
                            data: t,
                            element: p(this)
                        })
                    })
                }, i.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, i.prototype.destroy = function() {
                    this.$results.remove()
                }, i.prototype.ensureHighlightVisible = function() {
                    var e = this.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = this.$results.find("[aria-selected]").index(e),
                            n = this.$results.offset().top,
                            i = e.offset().top,
                            o = this.$results.scrollTop() + (i - n),
                            r = i - n;
                        o -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(o)
                    }
                }, i.prototype.template = function(e, t) {
                    var n = this.options.get("templateResult"),
                        i = this.options.get("escapeMarkup"),
                        o = n(e, t);
                    null == o ? t.style.display = "none" : "string" == typeof o ? t.innerHTML = i(o) : p(t).append(o)
                }, i
            }), e.define("select2/keys", [], function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, e, o) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return e.Extend(i, e.Observable), i.prototype.render = function() {
                    var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e
                }, i.prototype.bind = function(e, t) {
                    var n = this,
                        i = (e.id, e.id + "-results");
                    this.container = e, this.$selection.on("focus", function(e) {
                        n.trigger("focus", e)
                    }), this.$selection.on("blur", function(e) {
                        n._handleBlur(e)
                    }), this.$selection.on("keydown", function(e) {
                        n.trigger("keypress", e), e.which === o.SPACE && e.preventDefault()
                    }), e.on("results:focus", function(e) {
                        n.$selection.attr("aria-activedescendant", e.data._resultId)
                    }), e.on("selection:update", function(e) {
                        n.update(e.data)
                    }), e.on("open", function() {
                        n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e)
                    }), e.on("close", function() {
                        n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.focus(), n._detachCloseHandler(e)
                    }), e.on("enable", function() {
                        n.$selection.attr("tabindex", n._tabindex)
                    }), e.on("disable", function() {
                        n.$selection.attr("tabindex", "-1")
                    })
                }, i.prototype._handleBlur = function(e) {
                    var t = this;
                    window.setTimeout(function() {
                        document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e)
                    }, 1)
                }, i.prototype._attachCloseHandler = function(e) {
                    n(document.body).on("mousedown.select2." + e.id, function(e) {
                        var t = n(e.target).closest(".select2");
                        n(".select2.select2-container--open").each(function() {
                            var e = n(this);
                            this != t[0] && e.data("element").select2("close")
                        })
                    })
                }, i.prototype._detachCloseHandler = function(e) {
                    n(document.body).off("mousedown.select2." + e.id)
                }, i.prototype.position = function(e, t) {
                    t.find(".selection").append(e)
                }, i.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, i.prototype.update = function(e) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, i
            }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
                function o() {
                    o.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(o, t), o.prototype.render = function() {
                    var e = o.__super__.render.call(this);
                    return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                }, o.prototype.bind = function(t, e) {
                    var n = this;
                    o.__super__.bind.apply(this, arguments);
                    var i = t.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) {
                        1 === e.which && n.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), t.on("focus", function(e) {
                        t.isOpen() || n.$selection.focus()
                    }), t.on("selection:update", function(e) {
                        n.update(e.data)
                    })
                }, o.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, o.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, o.prototype.selectionContainer = function() {
                    return e("<span></span>")
                }, o.prototype.update = function(e) {
                    if (0 !== e.length) {
                        var t = e[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(t, n);
                        n.empty().append(i), n.prop("title", t.title || t.text)
                    } else this.clear()
                }, o
            }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(i, e, a) {
                function o(e, t) {
                    o.__super__.constructor.apply(this, arguments)
                }
                return a.Extend(o, e), o.prototype.render = function() {
                    var e = o.__super__.render.call(this);
                    return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                }, o.prototype.bind = function(e, t) {
                    var n = this;
                    o.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                        n.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
                        if (!n.options.get("disabled")) {
                            var t = i(this).parent().data("data");
                            n.trigger("unselect", {
                                originalEvent: e,
                                data: t
                            })
                        }
                    })
                }, o.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, o.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, o.prototype.selectionContainer = function() {
                    return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, o.prototype.update = function(e) {
                    if (this.clear(), 0 !== e.length) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var i = e[n],
                                o = this.selectionContainer(),
                                r = this.display(i, o);
                            o.append(r), o.prop("title", i.title || i.text), o.data("data", i), t.push(o)
                        }
                        var s = this.$selection.find(".select2-selection__rendered");
                        a.appendMany(s, t)
                    }
                }, o
            }), e.define("select2/selection/placeholder", ["../utils"], function(e) {
                function t(e, t, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                }
                return t.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, t.prototype.createPlaceholder = function(e, t) {
                    var n = this.selectionContainer();
                    return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                }, t.prototype.update = function(e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id;
                    if (1 < t.length || n) return e.call(this, t);
                    this.clear();
                    var i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i)
                }, t
            }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(i, o) {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                        i._handleClear(e)
                    }), t.on("keypress", function(e) {
                        i._handleKeyboardClear(e, t)
                    })
                }, e.prototype._handleClear = function(e, t) {
                    if (!this.options.get("disabled")) {
                        var n = this.$selection.find(".select2-selection__clear");
                        if (0 !== n.length) {
                            t.stopPropagation();
                            for (var i = n.data("data"), o = 0; o < i.length; o++) {
                                var r = {
                                    data: i[o]
                                };
                                if (this.trigger("unselect", r), r.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }, e.prototype._handleKeyboardClear = function(e, t, n) {
                    n.isOpen() || t.which != o.DELETE && t.which != o.BACKSPACE || this._handleClear(t)
                }, e.prototype.update = function(e, t) {
                    if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
                        var n = i('<span class="select2-selection__clear">&times;</span>');
                        n.data("data", t), this.$selection.find(".select2-selection__rendered").prepend(n)
                    }
                }, e
            }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(i, e, s) {
                function t(e, t, n) {
                    e.call(this, t, n)
                }
                return t.prototype.render = function(e) {
                    var t = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = t, this.$search = t.find("input");
                    var n = e.call(this);
                    return this._transferTabIndex(), n
                }, t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("open", function() {
                        i.$search.trigger("focus")
                    }), t.on("close", function() {
                        i.$search.val(""), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus")
                    }), t.on("enable", function() {
                        i.$search.prop("disabled", !1), i._transferTabIndex()
                    }), t.on("disable", function() {
                        i.$search.prop("disabled", !0)
                    }), t.on("focus", function(e) {
                        i.$search.trigger("focus")
                    }), t.on("results:focus", function(e) {
                        i.$search.attr("aria-activedescendant", e.id)
                    }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                        i.trigger("focus", e)
                    }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                        i._handleBlur(e)
                    }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                        if (e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === s.BACKSPACE && "" === i.$search.val()) {
                            var t = i.$searchContainer.prev(".select2-selection__choice");
                            if (0 < t.length) {
                                var n = t.data("data");
                                i.searchRemoveChoice(n), e.preventDefault()
                            }
                        }
                    });
                    var o = document.documentMode,
                        r = o && o <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                        r ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                        if (r && "input" === e.type) i.$selection.off("input.search input.searchcheck");
                        else {
                            var t = e.which;
                            t != s.SHIFT && t != s.CTRL && t != s.ALT && t != s.TAB && i.handleSearch(e)
                        }
                    })
                }, t.prototype._transferTabIndex = function(e) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, t.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text)
                }, t.prototype.update = function(e, t) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                }, t.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, t.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }), this.$search.val(t.text), this.handleSearch()
                }, t.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "";
                    e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
                }, t
            }), e.define("select2/selection/eventRelay", ["jquery"], function(s) {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this,
                        o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        r = ["opening", "closing", "selecting", "unselecting"];
                    e.call(this, t, n), t.on("*", function(e, t) {
                        if (-1 !== s.inArray(e, o)) {
                            t = t || {};
                            var n = s.Event("select2:" + e, {
                                params: t
                            });
                            i.$element.trigger(n), -1 !== s.inArray(e, r) && (t.prevented = n.isDefaultPrevented())
                        }
                    })
                }, e
            }), e.define("select2/translation", ["jquery", "require"], function(t, n) {
                function i(e) {
                    this.dict = e || {}
                }
                return i.prototype.all = function() {
                    return this.dict
                }, i.prototype.get = function(e) {
                    return this.dict[e]
                }, i.prototype.extend = function(e) {
                    this.dict = t.extend({}, e.all(), this.dict)
                }, i._cache = {}, i.loadPath = function(e) {
                    if (!(e in i._cache)) {
                        var t = n(e);
                        i._cache[e] = t
                    }
                    return new i(i._cache[e])
                }, i
            }), e.define("select2/diacritics", [], function() {
                return {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ω": "ω",
                    "ς": "σ"
                }
            }), e.define("select2/data/base", ["../utils"], function(i) {
                function n(e, t) {
                    n.__super__.constructor.call(this)
                }
                return i.Extend(n, i.Observable), n.prototype.current = function(e) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, n.prototype.query = function(e, t) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, n.prototype.bind = function(e, t) {}, n.prototype.destroy = function() {}, n.prototype.generateResultId = function(e, t) {
                    var n = e.id + "-result-";
                    return n += i.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + i.generateChars(4), n
                }, n
            }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, a) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, e), n.prototype.current = function(e) {
                    var n = [],
                        i = this;
                    this.$element.find(":selected").each(function() {
                        var e = a(this),
                            t = i.item(e);
                        n.push(t)
                    }), e(n)
                }, n.prototype.select = function(o) {
                    var r = this;
                    if (o.selected = !0, a(o.element).is("option")) return o.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(e) {
                        var t = [];
                        (o = [o]).push.apply(o, e);
                        for (var n = 0; n < o.length; n++) {
                            var i = o[n].id; - 1 === a.inArray(i, t) && t.push(i)
                        }
                        r.$element.val(t), r.$element.trigger("change")
                    });
                    else {
                        var e = o.id;
                        this.$element.val(e), this.$element.trigger("change")
                    }
                }, n.prototype.unselect = function(o) {
                    var r = this;
                    if (this.$element.prop("multiple")) {
                        if (o.selected = !1, a(o.element).is("option")) return o.element.selected = !1, void this.$element.trigger("change");
                        this.current(function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var i = e[n].id;
                                i !== o.id && -1 === a.inArray(i, t) && t.push(i)
                            }
                            r.$element.val(t), r.$element.trigger("change")
                        })
                    }
                }, n.prototype.bind = function(e, t) {
                    var n = this;
                    (this.container = e).on("select", function(e) {
                        n.select(e.data)
                    }), e.on("unselect", function(e) {
                        n.unselect(e.data)
                    })
                }, n.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        a.removeData(this, "data")
                    })
                }, n.prototype.query = function(i, e) {
                    var o = [],
                        r = this;
                    this.$element.children().each(function() {
                        var e = a(this);
                        if (e.is("option") || e.is("optgroup")) {
                            var t = r.item(e),
                                n = r.matches(i, t);
                            null !== n && o.push(n)
                        }
                    }), e({
                        results: o
                    })
                }, n.prototype.addOptions = function(e) {
                    t.appendMany(this.$element, e)
                }, n.prototype.option = function(e) {
                    var t;
                    e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                    var n = a(t),
                        i = this._normalizeItem(e);
                    return i.element = t, a.data(t, "data", i), n
                }, n.prototype.item = function(e) {
                    var t = {};
                    if (null != (t = a.data(e[0], "data"))) return t;
                    if (e.is("option")) t = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                    else if (e.is("optgroup")) {
                        t = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var n = e.children("option"), i = [], o = 0; o < n.length; o++) {
                            var r = a(n[o]),
                                s = this.item(r);
                            i.push(s)
                        }
                        t.children = i
                    }
                    return (t = this._normalizeItem(t)).element = e[0], a.data(e[0], "data", t), t
                }, n.prototype._normalizeItem = function(e) {
                    a.isPlainObject(e) || (e = {
                        id: e,
                        text: e
                    });
                    return null != (e = a.extend({}, {
                        text: ""
                    }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), a.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, e)
                }, n.prototype.matches = function(e, t) {
                    return this.options.get("matcher")(e, t)
                }, n
            }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, f, g) {
                function i(e, t) {
                    var n = t.get("data") || [];
                    i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                }
                return f.Extend(i, e), i.prototype.select = function(n) {
                    var e = this.$element.find("option").filter(function(e, t) {
                        return t.value == n.id.toString()
                    });
                    0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n)
                }, i.prototype.convertToOptions = function(e) {
                    function t(e) {
                        return function() {
                            return g(this).val() == e.id
                        }
                    }
                    for (var n = this, i = this.$element.find("option"), o = i.map(function() {
                            return n.item(g(this)).id
                        }).get(), r = [], s = 0; s < e.length; s++) {
                        var a = this._normalizeItem(e[s]);
                        if (0 <= g.inArray(a.id, o)) {
                            var l = i.filter(t(a)),
                                c = this.item(l),
                                d = g.extend(!0, {}, a, c),
                                u = this.option(d);
                            l.replaceWith(u)
                        } else {
                            var p = this.option(a);
                            if (a.children) {
                                var h = this.convertToOptions(a.children);
                                f.appendMany(p, h)
                            }
                            r.push(p)
                        }
                    }
                    return r
                }, i
            }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, r) {
                function n(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t)
                }
                return t.Extend(n, e), n.prototype._applyDefaults = function(e) {
                    var t = {
                        data: function(e) {
                            return r.extend({}, e, {
                                q: e.term
                            })
                        },
                        transport: function(e, t, n) {
                            var i = r.ajax(e);
                            return i.then(t), i.fail(n), i
                        }
                    };
                    return r.extend({}, t, e, !0)
                }, n.prototype.processResults = function(e) {
                    return e
                }, n.prototype.query = function(n, i) {
                    function e() {
                        var e = t.transport(t, function(e) {
                            var t = o.processResults(e, n);
                            o.options.get("debug") && window.console && console.error && (t && t.results && r.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(t)
                        }, function() {
                            e.status && "0" === e.status || o.trigger("results:message", {
                                message: "errorLoading"
                            })
                        });
                        o._request = e
                    }
                    var o = this;
                    null != this._request && (r.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var t = r.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
                }, n
            }), e.define("select2/data/tags", ["jquery"], function(d) {
                function e(e, t, n) {
                    var i = n.get("tags"),
                        o = n.get("createTag");
                    void 0 !== o && (this.createTag = o);
                    var r = n.get("insertTag");
                    if (void 0 !== r && (this.insertTag = r), e.call(this, t, n), d.isArray(i))
                        for (var s = 0; s < i.length; s++) {
                            var a = i[s],
                                l = this._normalizeItem(a),
                                c = this.option(l);
                            this.$element.append(c)
                        }
                }
                return e.prototype.query = function(e, c, d) {
                    var u = this;
                    this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) {
                        for (var i = t.results, o = 0; o < i.length; o++) {
                            var r = i[o],
                                s = null != r.children && !e({
                                    results: r.children
                                }, !0);
                            if ((r.text || "").toUpperCase() === (c.term || "").toUpperCase() || s) return !n && (t.data = i, void d(t))
                        }
                        if (n) return !0;
                        var a = u.createTag(c);
                        if (null != a) {
                            var l = u.option(a);
                            l.attr("data-select2-tag", !0), u.addOptions([l]), u.insertTag(i, a)
                        }
                        t.results = i, d(t)
                    }) : e.call(this, c, d)
                }, e.prototype.createTag = function(e, t) {
                    var n = d.trim(t.term);
                    return "" === n ? null : {
                        id: n,
                        text: n
                    }
                }, e.prototype.insertTag = function(e, t, n) {
                    t.unshift(n)
                }, e.prototype._removeOldTags = function(e) {
                    this._lastTag, this.$element.find("option[data-select2-tag]").each(function() {
                        this.selected || d(this).remove()
                    })
                }, e
            }), e.define("select2/data/tokenizer", ["jquery"], function(u) {
                function e(e, t, n) {
                    var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                }
                return e.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                }, e.prototype.query = function(e, t, n) {
                    var o = this;
                    t.term = t.term || "";
                    var i = this.tokenizer(t, this.options, function(e) {
                        var t, n = o._normalizeItem(e);
                        if (!o.$element.find("option").filter(function() {
                                return u(this).val() === n.id
                            }).length) {
                            var i = o.option(n);
                            i.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([i])
                        }
                        t = n, o.trigger("select", {
                            data: t
                        })
                    });
                    i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.focus()), t.term = i.term), e.call(this, t, n)
                }, e.prototype.tokenizer = function(e, t, n, i) {
                    for (var o = n.get("tokenSeparators") || [], r = t.term, s = 0, a = this.createTag || function(e) {
                            return {
                                id: e.term,
                                text: e.term
                            }
                        }; s < r.length;) {
                        var l = r[s];
                        if (-1 !== u.inArray(l, o)) {
                            var c = r.substr(0, s),
                                d = a(u.extend({}, t, {
                                    term: c
                                }));
                            null != d ? (i(d), r = r.substr(s + 1) || "", s = 0) : s++
                        } else s++
                    }
                    return {
                        term: r
                    }
                }, e
            }), e.define("select2/data/minimumInputLength", [], function() {
                function e(e, t, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n)
                }, e
            }), e.define("select2/data/maximumInputLength", [], function() {
                function e(e, t, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n)
                }, e
            }), e.define("select2/data/maximumSelectionLength", [], function() {
                function e(e, t, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(n, i, o) {
                    var r = this;
                    this.current(function(e) {
                        var t = null != e ? e.length : 0;
                        0 < r.maximumSelectionLength && t >= r.maximumSelectionLength ? r.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: r.maximumSelectionLength
                            }
                        }) : n.call(r, i, o)
                    })
                }, e
            }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return e.Extend(n, e.Observable), n.prototype.render = function() {
                    var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$dropdown = e
                }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, n
            }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(o, e) {
                function t() {}
                return t.prototype.render = function(e) {
                    var t = e.call(this),
                        n = o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = n, this.$search = n.find("input"), t.prepend(n), t
                }, t.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), this.$search.on("keydown", function(e) {
                        i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented()
                    }), this.$search.on("input", function(e) {
                        o(this).off("keyup")
                    }), this.$search.on("keyup input", function(e) {
                        i.handleSearch(e)
                    }), t.on("open", function() {
                        i.$search.attr("tabindex", 0), i.$search.focus(), window.setTimeout(function() {
                            i.$search.focus()
                        }, 0)
                    }), t.on("close", function() {
                        i.$search.attr("tabindex", -1), i.$search.val("")
                    }), t.on("focus", function() {
                        t.isOpen() || i.$search.focus()
                    }), t.on("results:all", function(e) {
                        null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"))
                    })
                }, t.prototype.handleSearch = function(e) {
                    if (!this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, t.prototype.showSearch = function(e, t) {
                    return !0
                }, t
            }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                function e(e, t, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results), e.call(this, t)
                }, e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, e.prototype.removePlaceholder = function(e, t) {
                    for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                        var o = t[i];
                        this.placeholder.id === o.id && n.splice(i, 1)
                    }
                    return n
                }, e
            }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(o) {
                function e(e, t, n, i) {
                    this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return e.prototype.append = function(e, t) {
                    this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                }, e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("query", function(e) {
                        i.lastParams = e, i.loading = !0
                    }), t.on("query:append", function(e) {
                        i.lastParams = e, i.loading = !0
                    }), this.$results.on("scroll", function() {
                        var e = o.contains(document.documentElement, i.$loadingMore[0]);
                        !i.loading && e && i.$results.offset().top + i.$results.outerHeight(!1) + 50 >= i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1) && i.loadMore()
                    })
                }, e.prototype.loadMore = function() {
                    this.loading = !0;
                    var e = o.extend({}, {
                        page: 1
                    }, this.lastParams);
                    e.page++, this.trigger("query:append", e)
                }, e.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more
                }, e.prototype.createLoadingMore = function() {
                    var e = o('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        t = this.options.get("translations").get("loadingMore");
                    return e.html(t(this.lastParams)), e
                }, e
            }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(f, a) {
                function e(e, t, n) {
                    this.$dropdownParent = n.get("dropdownParent") || f(document.body), e.call(this, t, n)
                }
                return e.prototype.bind = function(e, t, n) {
                    var i = this,
                        o = !1;
                    e.call(this, t, n), t.on("open", function() {
                        i._showDropdown(), i._attachPositioningHandler(t), o || (o = !0, t.on("results:all", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }), t.on("results:append", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }))
                    }), t.on("close", function() {
                        i._hideDropdown(), i._detachPositioningHandler(t)
                    }), this.$dropdownContainer.on("mousedown", function(e) {
                        e.stopPropagation()
                    })
                }, e.prototype.destroy = function(e) {
                    e.call(this), this.$dropdownContainer.remove()
                }, e.prototype.position = function(e, t, n) {
                    t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n
                }, e.prototype.render = function(e) {
                    var t = f("<span></span>"),
                        n = e.call(this);
                    return t.append(n), this.$dropdownContainer = t
                }, e.prototype._hideDropdown = function(e) {
                    this.$dropdownContainer.detach()
                }, e.prototype._attachPositioningHandler = function(e, t) {
                    var n = this,
                        i = "scroll.select2." + t.id,
                        o = "resize.select2." + t.id,
                        r = "orientationchange.select2." + t.id,
                        s = this.$container.parents().filter(a.hasScroll);
                    s.each(function() {
                        f(this).data("select2-scroll-position", {
                            x: f(this).scrollLeft(),
                            y: f(this).scrollTop()
                        })
                    }), s.on(i, function(e) {
                        var t = f(this).data("select2-scroll-position");
                        f(this).scrollTop(t.y)
                    }), f(window).on(i + " " + o + " " + r, function(e) {
                        n._positionDropdown(), n._resizeDropdown()
                    })
                }, e.prototype._detachPositioningHandler = function(e, t) {
                    var n = "scroll.select2." + t.id,
                        i = "resize.select2." + t.id,
                        o = "orientationchange.select2." + t.id;
                    this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + o)
                }, e.prototype._positionDropdown = function() {
                    var e = f(window),
                        t = this.$dropdown.hasClass("select2-dropdown--above"),
                        n = this.$dropdown.hasClass("select2-dropdown--below"),
                        i = null,
                        o = this.$container.offset();
                    o.bottom = o.top + this.$container.outerHeight(!1);
                    var r = {
                        height: this.$container.outerHeight(!1)
                    };
                    r.top = o.top, r.bottom = o.top + r.height;
                    var s = this.$dropdown.outerHeight(!1),
                        a = e.scrollTop(),
                        l = e.scrollTop() + e.height(),
                        c = a < o.top - s,
                        d = l > o.bottom + s,
                        u = {
                            left: o.left,
                            top: r.bottom
                        },
                        p = this.$dropdownParent;
                    "static" === p.css("position") && (p = p.offsetParent());
                    var h = p.offset();
                    u.top -= h.top, u.left -= h.left, t || n || (i = "below"), d || !c || t ? !c && d && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (u.top = r.top - h.top - s), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(u)
                }, e.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                }, e.prototype._showDropdown = function(e) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, e
            }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function e(e, t, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                }
                return e.prototype.showSearch = function(e, t) {
                    return !(function e(t) {
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var o = t[i];
                            o.children ? n += e(o.children) : n++
                        }
                        return n
                    }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                }, e
            }), e.define("select2/dropdown/selectOnClose", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("close", function(e) {
                        i._handleSelectOnClose(e)
                    })
                }, e.prototype._handleSelectOnClose = function(e, t) {
                    if (t && null != t.originalSelect2Event) {
                        var n = t.originalSelect2Event;
                        if ("select" === n._type || "unselect" === n._type) return
                    }
                    var i = this.getHighlightedResults();
                    if (!(i.length < 1)) {
                        var o = i.data("data");
                        null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                            data: o
                        })
                    }
                }, e
            }), e.define("select2/dropdown/closeOnSelect", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("select", function(e) {
                        i._selectTriggered(e)
                    }), t.on("unselect", function(e) {
                        i._selectTriggered(e)
                    })
                }, e.prototype._selectTriggered = function(e, t) {
                    var n = t.originalEvent;
                    n && n.ctrlKey || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: t
                    })
                }, e
            }), e.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum,
                            n = "Please delete " + t + " character";
                        return 1 != t && (n += "s"), n
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    }
                }
            }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(f, g, m, v, y, b, w, x, $, T, k, t, C, S, _, A, E, D, N, O, L, j, H, q, P, M, z, I, e) {
                function n() {
                    this.reset()
                }
                return n.prototype.apply = function(t) {
                    if (null == (t = f.extend(!0, {}, this.defaults, t)).dataAdapter) {
                        if (null != t.ajax ? t.dataAdapter = _ : null != t.data ? t.dataAdapter = S : t.dataAdapter = C, 0 < t.minimumInputLength && (t.dataAdapter = T.Decorate(t.dataAdapter, D)), 0 < t.maximumInputLength && (t.dataAdapter = T.Decorate(t.dataAdapter, N)), 0 < t.maximumSelectionLength && (t.dataAdapter = T.Decorate(t.dataAdapter, O)), t.tags && (t.dataAdapter = T.Decorate(t.dataAdapter, A)), null == t.tokenSeparators && null == t.tokenizer || (t.dataAdapter = T.Decorate(t.dataAdapter, E)), null != t.query) {
                            var e = g(t.amdBase + "compat/query");
                            t.dataAdapter = T.Decorate(t.dataAdapter, e)
                        }
                        if (null != t.initSelection) {
                            var n = g(t.amdBase + "compat/initSelection");
                            t.dataAdapter = T.Decorate(t.dataAdapter, n)
                        }
                    }
                    if (null == t.resultsAdapter && (t.resultsAdapter = m, null != t.ajax && (t.resultsAdapter = T.Decorate(t.resultsAdapter, q)), null != t.placeholder && (t.resultsAdapter = T.Decorate(t.resultsAdapter, H)), t.selectOnClose && (t.resultsAdapter = T.Decorate(t.resultsAdapter, z))), null == t.dropdownAdapter) {
                        if (t.multiple) t.dropdownAdapter = L;
                        else {
                            var i = T.Decorate(L, j);
                            t.dropdownAdapter = i
                        }
                        if (0 !== t.minimumResultsForSearch && (t.dropdownAdapter = T.Decorate(t.dropdownAdapter, M)), t.closeOnSelect && (t.dropdownAdapter = T.Decorate(t.dropdownAdapter, I)), null != t.dropdownCssClass || null != t.dropdownCss || null != t.adaptDropdownCssClass) {
                            var o = g(t.amdBase + "compat/dropdownCss");
                            t.dropdownAdapter = T.Decorate(t.dropdownAdapter, o)
                        }
                        t.dropdownAdapter = T.Decorate(t.dropdownAdapter, P)
                    }
                    if (null == t.selectionAdapter) {
                        if (t.multiple ? t.selectionAdapter = y : t.selectionAdapter = v, null != t.placeholder && (t.selectionAdapter = T.Decorate(t.selectionAdapter, b)), t.allowClear && (t.selectionAdapter = T.Decorate(t.selectionAdapter, w)), t.multiple && (t.selectionAdapter = T.Decorate(t.selectionAdapter, x)), null != t.containerCssClass || null != t.containerCss || null != t.adaptContainerCssClass) {
                            var r = g(t.amdBase + "compat/containerCss");
                            t.selectionAdapter = T.Decorate(t.selectionAdapter, r)
                        }
                        t.selectionAdapter = T.Decorate(t.selectionAdapter, $)
                    }
                    if ("string" == typeof t.language)
                        if (0 < t.language.indexOf("-")) {
                            var s = t.language.split("-")[0];
                            t.language = [t.language, s]
                        } else t.language = [t.language];
                    if (f.isArray(t.language)) {
                        var a = new k;
                        t.language.push("en");
                        for (var l = t.language, c = 0; c < l.length; c++) {
                            var d = l[c],
                                u = {};
                            try {
                                u = k.loadPath(d)
                            } catch (e) {
                                try {
                                    d = this.defaults.amdLanguageBase + d, u = k.loadPath(d)
                                } catch (e) {
                                    t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + d + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            a.extend(u)
                        }
                        t.translations = a
                    } else {
                        var p = k.loadPath(this.defaults.amdLanguageBase + "en"),
                            h = new k(t.language);
                        h.extend(p), t.translations = h
                    }
                    return t
                }, n.prototype.reset = function() {
                    function a(e) {
                        return e.replace(/[^\u0000-\u007E]/g, function(e) {
                            return t[e] || e
                        })
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: T.escapeMarkup,
                        language: e,
                        matcher: function e(t, n) {
                            if ("" === f.trim(t.term)) return n;
                            if (n.children && 0 < n.children.length) {
                                for (var i = f.extend(!0, {}, n), o = n.children.length - 1; 0 <= o; o--) null == e(t, n.children[o]) && i.children.splice(o, 1);
                                return 0 < i.children.length ? i : e(t, i)
                            }
                            var r = a(n.text).toUpperCase(),
                                s = a(t.term).toUpperCase();
                            return -1 < r.indexOf(s) ? n : null
                        },
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function(e) {
                            return e
                        },
                        templateResult: function(e) {
                            return e.text
                        },
                        templateSelection: function(e) {
                            return e.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, n.prototype.set = function(e, t) {
                    var n = {};
                    n[f.camelCase(e)] = t;
                    var i = T._convertData(n);
                    f.extend(this.defaults, i)
                }, new n
            }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(i, r, o, s) {
                function e(e, t) {
                    if (this.options = e, null != t && this.fromElement(t), this.options = o.apply(this.options), t && t.is("input")) {
                        var n = i(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = s.Decorate(this.options.dataAdapter, n)
                    }
                }
                return e.prototype.fromElement = function(e) {
                    var t = ["select2"];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                    var n;
                    n = r.fn.jquery && "1." == r.fn.jquery.substr(0, 2) && e[0].dataset ? r.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                    var i = r.extend(!0, {}, n);
                    for (var o in i = s._convertData(i)) - 1 < r.inArray(o, t) || (r.isPlainObject(this.options[o]) ? r.extend(this.options[o], i[o]) : this.options[o] = i[o]);
                    return this
                }, e.prototype.get = function(e) {
                    return this.options[e]
                }, e.prototype.set = function(e, t) {
                    this.options[e] = t
                }, e
            }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(o, c, n, i) {
                var d = function(e, t) {
                    null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), d.__super__.constructor.call(this);
                    var n = e.attr("tabindex") || 0;
                    e.data("old-tabindex", n), e.attr("tabindex", "-1");
                    var i = this.options.get("dataAdapter");
                    this.dataAdapter = new i(e, this.options);
                    var o = this.render();
                    this._placeContainer(o);
                    var r = this.options.get("selectionAdapter");
                    this.selection = new r(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
                    var s = this.options.get("dropdownAdapter");
                    this.dropdown = new s(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
                    var a = this.options.get("resultsAdapter");
                    this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var l = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                        l.trigger("selection:update", {
                            data: e
                        })
                    }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                };
                return n.Extend(d, n.Observable), d.prototype._generateId = function(e) {
                    return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                }, d.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t)
                }, d.prototype._resolveWidth = function(e, t) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var i = this._resolveWidth(e, "style");
                        return null != i ? i : this._resolveWidth(e, "element")
                    }
                    if ("element" == t) {
                        var o = e.outerWidth(!1);
                        return o <= 0 ? "auto" : o + "px"
                    }
                    if ("style" == t) {
                        var r = e.attr("style");
                        if ("string" != typeof r) return null;
                        for (var s = r.split(";"), a = 0, l = s.length; a < l; a += 1) {
                            var c = s[a].replace(/\s/g, "").match(n);
                            if (null !== c && 1 <= c.length) return c[1]
                        }
                        return null
                    }
                    return t
                }, d.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, d.prototype._registerDomEvents = function() {
                    var t = this;
                    this.$element.on("change.select2", function() {
                        t.dataAdapter.current(function(e) {
                            t.trigger("selection:update", {
                                data: e
                            })
                        })
                    }), this.$element.on("focus.select2", function(e) {
                        t.trigger("focus", e)
                    }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != e ? (this._observer = new e(function(e) {
                        o.each(e, t._syncA), o.each(e, t._syncS)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                }, d.prototype._registerDataEvents = function() {
                    var n = this;
                    this.dataAdapter.on("*", function(e, t) {
                        n.trigger(e, t)
                    })
                }, d.prototype._registerSelectionEvents = function() {
                    var n = this,
                        i = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        n.toggleDropdown()
                    }), this.selection.on("focus", function(e) {
                        n.focus(e)
                    }), this.selection.on("*", function(e, t) {
                        -1 === o.inArray(e, i) && n.trigger(e, t)
                    })
                }, d.prototype._registerDropdownEvents = function() {
                    var n = this;
                    this.dropdown.on("*", function(e, t) {
                        n.trigger(e, t)
                    })
                }, d.prototype._registerResultsEvents = function() {
                    var n = this;
                    this.results.on("*", function(e, t) {
                        n.trigger(e, t)
                    })
                }, d.prototype._registerEvents = function() {
                    var n = this;
                    this.on("open", function() {
                        n.$container.addClass("select2-container--open")
                    }), this.on("close", function() {
                        n.$container.removeClass("select2-container--open")
                    }), this.on("enable", function() {
                        n.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function() {
                        n.$container.addClass("select2-container--disabled")
                    }), this.on("blur", function() {
                        n.$container.removeClass("select2-container--focus")
                    }), this.on("query", function(t) {
                        n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function(e) {
                            n.trigger("results:all", {
                                data: e,
                                query: t
                            })
                        })
                    }), this.on("query:append", function(t) {
                        this.dataAdapter.query(t, function(e) {
                            n.trigger("results:append", {
                                data: e,
                                query: t
                            })
                        })
                    }), this.on("keypress", function(e) {
                        var t = e.which;
                        n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(), e.preventDefault()) : t === i.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === i.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault())
                    })
                }, d.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, d.prototype._syncSubtree = function(e, t) {
                    var n = !1,
                        i = this;
                    if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                        if (t)
                            if (t.addedNodes && 0 < t.addedNodes.length)
                                for (var o = 0; o < t.addedNodes.length; o++) {
                                    t.addedNodes[o].selected && (n = !0)
                                } else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
                            else n = !0;
                        n && this.dataAdapter.current(function(e) {
                            i.trigger("selection:update", {
                                data: e
                            })
                        })
                    }
                }, d.prototype.trigger = function(e, t) {
                    var n = d.__super__.trigger,
                        i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (void 0 === t && (t = {}), e in i) {
                        var o = i[e],
                            r = {
                                prevented: !1,
                                name: e,
                                args: t
                            };
                        if (n.call(this, o, r), r.prevented) return void(t.prevented = !0)
                    }
                    n.call(this, e, t)
                }, d.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, d.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, d.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                }, d.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, d.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, d.prototype.focus = function(e) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, d.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                    var t = !e[0];
                    this.$element.prop("disabled", t)
                }, d.prototype.data = function() {
                    this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var t = [];
                    return this.dataAdapter.current(function(e) {
                        t = e
                    }), t
                }, d.prototype.val = function(e) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                    var t = e[0];
                    o.isArray(t) && (t = o.map(t, function(e) {
                        return e.toString()
                    })), this.$element.val(t).trigger("change")
                }, d.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, d.prototype.render = function() {
                    var e = o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
                }, d
            }), e.define("jquery-mousewheel", ["jquery"], function(e) {
                return e
            }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(o, e, r, t) {
                if (null == o.fn.select2) {
                    var s = ["open", "close", "destroy"];
                    o.fn.select2 = function(t) {
                        if ("object" == typeof(t = t || {})) return this.each(function() {
                            var e = o.extend(!0, {}, t);
                            new r(o(this), e)
                        }), this;
                        if ("string" == typeof t) {
                            var n, i = Array.prototype.slice.call(arguments, 1);
                            return this.each(function() {
                                var e = o(this).data("select2");
                                null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i)
                            }), -1 < o.inArray(t, s) ? this : n
                        }
                        throw new Error("Invalid arguments for Select2: " + t)
                    }
                }
                return null == o.fn.select2.defaults && (o.fn.select2.defaults = t), r
            }), {
                define: e.define,
                require: e.require
            }
        }(),
        t = e.require("jquery.select2");
    return n.fn.select2.amd = e, t
}), $(function() {
    $("#login_click").on("click", function(e) {
        var t = $(".oc-dropdown");
        $(this).hasClass("_open") ? ($(this).removeClass("_open"), t.removeClass("_expand")) : ($(this).addClass("_open"), t.addClass("_expand"))
    }), $(".cv-menu").on("click", function(e) {
        var t = $(".mobile-menu");
        $(this).hasClass("_open") ? ($(this).removeClass("_open"), t.removeClass("_expand"), $("body").removeClass("_open")) : ($(this).addClass("_open"), $("body").addClass("_open"), t.addClass("_expand"))
    }), $(".input-nt").on("click", function(e) {
        var t = $(".search-dropdown"),
            n = $(this).parents(".form-select").children(".search-dropdown");
        $(this).hasClass("_open") ? ($(".input-nt").removeClass("_open"), t.removeClass("_expand"), $(this).removeClass("_open"), n.removeClass("_expand")) : ($(".input-nt").removeClass("_open"), t.removeClass("_expand"), $(this).addClass("_open"), n.addClass("_expand"))
    }), $(".search-dropdown li.item-select").on("click", function(e) {
        var t = $(".search-dropdown"),
            n = $(this).parents(".form-select").children(".search-dropdown"),
            i = $(this).parents(".form-select").children(".input-nt"),
            o = $(this).parents(".form-select").children('input[type="hidden"]');
        i.hasClass("_open") && ($(".input-nt").removeClass("_open"), t.removeClass("_expand"), i.html($(this).text()), o.val($(this).text()), $(this).removeClass("_open"), n.removeClass("_expand"))
    }), $("#onClickSearch").on("click", function(e) {
        var t = $(".top-search");
        $(this).hasClass("_open") ? ($(this).removeClass("_open"), t.removeClass("_expand")) : ($(this).addClass("_open"), t.addClass("_expand"))
    }), $(".tab-drop .text-drop").on("click", function(e) {
        var t = $(this).parent().find(".drop-drop");
        $(this).hasClass("_open") ? ($(this).removeClass("_open"), t.removeClass("_expand")) : ($(this).addClass("_open"), t.addClass("_expand"))
    }), $(".tab-drop .drop-drop .item-drop").on("click", function(e) {
        var t = $(this).attr("href"),
            n = $(this).text();
        console.log(n, t), $(this).parents(".tab-drop").find(".text-drop").text(n), e.preventDefault()
    }), $(document).on("click", ".ct-display .i-display", function(e) {
        var t = void 0 !== $(this).attr("data-container") ? $(this).data("container") : $(this).attr("href");
        t = t.replace(/^\#/, ""), $(".ct-display .i-display").removeClass("_current"), $(this).addClass("_current"), $("#" + t).removeClass("_ct_grid").removeClass("_ct_list").addClass($(this).data("display")), l(".page-content.category-page .content-cate .cate-list .cate-wr .cate-item .cit-desc .cit-desc-l p.cdes-main", ".page-content.category-page .content-cate .cate-list .cate-wr .cate-item .cit-desc .cit-desc-l p.cdes-main.p-opening"), e.preventDefault()
    });
    var n = $(".form-select-city .search-dropdown"),
        i = n.outerWidth() - 10,
        o = n.find(".nav-dropdown").length;
    n.find(".nav-dropdown").css("width", i), $(".form-select-city .wrap-select").css("width", o * i);
    var e = $(document).outerWidth();
    if (640 <= e && e <= 768) {
        var t = $(".menu-side").height();
        $(".banner-side.banner-1").css("height", t)
    }

    function r() {
        $(window).scrollTop() < 100 ? $(".go-top").hide() : $(".go-top").show()
    }

    function s() {
        var e = $(document).outerWidth(),
            t = $(".mn-parent-side").outerWidth(),
            n = $(".mn-dropdown-side");
        if (640 < e) {
            var i = $(".container").outerWidth() - 30;
            n.css("width", i - t)
        } else {
            i = $(".container").outerWidth();
            n.css("width", i)
        }
    }

    function a() {
        var e = $(".search-block .form-list .form-item:nth-child(2)").outerWidth(),
            t = $(".search-block .form-list .form-item:nth-child(1)");
        991 < $(document).outerWidth() ? t.css("width", "calc(100% - " + e + "px)") : t.attr("style", "")
    }

    function l(e, t) {
        $(e).css("height", "auto"), $(t).css("height", "auto");
        var n = $(e).height(),
            i = $(t).height();
        i <= n ? $(t).css("height", n) : $(e).css("height", i)
    }
    $(window).resize(function() {
        s(), a(), l(".page-content.category-page .content-cate .cate-list .cate-wr .cate-item .cit-desc .cit-desc-l p.cdes-main", ".page-content.category-page .content-cate .cate-list .cate-wr .cate-item .cit-desc .cit-desc-l p.cdes-main.p-opening"), $(".form-select-city .wrap-select").css("left", 0), i = n.outerWidth() - 10, n.find(".nav-dropdown").css("width", i), $(".form-select-city .wrap-select").css("width", o * i);
        var e = $(document).outerWidth();
        if (641 <= e && e <= 767) {
            var t = $(".menu-side").height();
            $(".banner-side.banner-1").css("height", t)
        } else $(".banner-side.banner-1").attr("style", "")
    }), $(".search-dropdown ul.parent-dropdown li").on("click", function(e) {
        $(this).parents("ul");
        $(this).parents(".wrap-select").animate({
            left: "-" + i
        }, 700)
    }), $(".search-dropdown .btn-back-parent").on("click", function(e) {
        $(this).parents(".sub-dropdown").find("ul");
        $(this).parents(".wrap-select").animate({
            left: 0
        }, 700)
    }), $(".mn-parent-side > li > a").on("click", function(e) {
        var t = $(this).parents("li").find(".mn-dropdown-side");
        $(this).parents("li").hasClass("_current") ? ($(this).parents("li").removeClass("_current"), t.removeClass("_expand")) : ($(".mn-parent-side > li").removeClass("_current"), $(".mn-dropdown-side").removeClass("_expand"), $(this).parents("li").addClass("_current"), t.addClass("_expand")), e.preventDefault()
    }), $(".mn-dropdown-side .btn-back-parent").on("click", function(e) {
        $(this).parents(".mn-dropdown-side").removeClass("_expand"), $(this).parents(".mn-parent-side > li").removeClass("_current")
    }), $(document).on("click", function(e) {
        $(e.target).is($(".input-nt")) || $(e.target).is($(".search-dropdown *")) || ($(".input-nt").removeClass("_open"), $(".search-dropdown").removeClass("_expand")), $(e.target).is($("#login_click")) || $(e.target).is($(".oc-dropdown *")) || ($("#login_click").removeClass("_open"), $(".oc-dropdown").removeClass("_expand")), $(e.target).is($(".cv-menu")) || $(e.target).is($(".cv-menu *")) || $(e.target).is($(".top-poc *")) || ($(".cv-menu").removeClass("_open"), $(".mobile-menu").removeClass("_expand"), $("body").removeClass("_open")), $(e.target).is($("#onClickSearch")) || $(e.target).is($("#onClickSearch *")) || $(e.target).is($(".top-search *")) || ($("#onClickSearch").removeClass("_open"), $(".top-search").removeClass("_expand")), $(e.target).is($(".tab-drop .text-drop")) || $(e.target).is($(".tab-drop .text-drop *")) || ($(".tab-drop .text-drop").removeClass("_open"), $(".tab-drop .drop-drop").removeClass("_expand")), $(e.target).is($(".mn-parent-side > li > a")) || $(e.target).is($(".mn-parent-side > li *")) || ($(".mn-parent-side > li").removeClass("_current"), $(".mn-dropdown-side").removeClass("_expand"))
    }), $(document).on("click", ".dt-thumb .chip-thumb-i", function(e) {
        var t = $(this).data("image"),
            n = $(this).parents(".dt-thumb").find(".ct-replace-img");
        console.log(t, n), n.find("img").attr("src", t)
    }), $(document).on("keydown", function(e) {
        27 === e.keyCode && ($("#login_click").removeClass("_open"), $(".oc-dropdown").removeClass("_expand"), $(".input-nt").removeClass("_open"), $(".search-dropdown").removeClass("_expand"), $(".cv-menu").removeClass("_open"), $(".mobile-menu").removeClass("_expand"), $("#onClickSearch").removeClass("_open"), $(".top-search").removeClass("_expand"), $("body").removeClass("_open"), $(".tab-drop .text-drop").removeClass("_open"), $(".tab-drop .drop-drop").removeClass("_expand"), $(".mn-parent-side > li").removeClass("_current"), $(".mn-dropdown-side").removeClass("_expand"))
    }), $("#click_show_phone").on("click", function(e) {
        var t = $(this).data("number");
        $(this).html('<a href="tel:' + t + '">' + t + "</a>")
    }), $(".top-slider").slick({
        dots: !0,
        autoplay: !0,
        arrows: !1,
        adaptiveHeight: !0
    }), $(".chip-thumb-slider").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 641,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 541,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 481,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 321,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    }), $(".dt-banner-slider").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $("#cate-ad-slider").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".go-top").on("click", function(e) {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 300), e.preventDefault()
    }), r(), $(window).scroll(function() {
        r()
    }), s(), a(), l(".page-content.category-page .content-cate .cate-ad .cate-ad-list .cate-ad-i .cai-desc p.cdes-main", ".page-content.category-page .content-cate .cate-ad .cate-ad-list .cate-ad-i .cai-desc p.cdes-main.p-opening"), l(".page-content.category-page .content-cate .cate-list .cate-wr .cate-item .cit-desc .cit-desc-l p.cdes-main", ".page-content.category-page .content-cate .cate-list .cate-wr .cate-item .cit-desc .cit-desc-l p.cdes-main.p-opening"), $(document).ready(function() {
        $(".fp-input-select1").select2({
            minimumResultsForSearch: -1
        })
    })
});