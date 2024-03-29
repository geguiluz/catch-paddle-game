// ZIM js Interactive Media framework http://zimjs.com by Dan Zen http://danzen.com (c) 2018
// Also see http://zimjs.com/distill to minify only the functions in your app
// free to use in applications - donations welcome of course! http://zimjs.com/donate

if (void 0 === zon)
    var zon = !0;
if (void 0 === zns)
    var zns = !1;
var zog = zon ? console.log.bind(console) : function() {}
;
function zid(e) {
    return z_d("1"),
    document.getElementById(e)
}
function zss(e) {
    if (z_d("2"),
    document.getElementById(e))
        return document.getElementById(e).style;
    zon && zog("zim wrap - zss(): id not found")
}
function zgo(e, t, o, n, r, i) {
    if (z_d("3"),
    !(zot(t) && "" != t || "_self" == t)) {
        var a = "";
        return o && (a += "width=" + o + ","),
        n && (a += "height=" + n + ","),
        r && (a += "fullscreen=yes,"),
        i && (a += "modal=yes,alwaysRaised=yes"),
        window.open(e, t, a)
    }
    window.location.href = e
}
function zum(e) {
    if (z_d("4"),
    !zot(e))
        return Number(String(e).replace(/[^\d\.\-]/g, ""))
}
function zot(e) {
    return null == e
}
function zop(e) {
    z_d("5"),
    zot(e) || (e.stopImmediatePropagation && e.stopImmediatePropagation(),
    window.event && (window.event.cancelBubble = !0))
}
function zil() {
    z_d("6");
    var e = function(e) {
        e || (e = event),
        e.keyCode && 32 <= e.keyCode && e.keyCode <= 40 && e.preventDefault()
    }
      , t = function(e) {
        e || (e = event),
        e.preventDefault()
    }
      , o = t;
    return window.addEventListener("keydown", e),
    window.addEventListener("wheel", t),
    window.addEventListener("DOMMouseScroll", o),
    [e, t, o]
}
function zet(r) {
    return z_d("6.1"),
    new function() {
        var a = this;
        this.on = function(e, t) {
            if (!(zot(r) || zot(e) || zot(t)))
                for (var o = a.tags, n = 0; n < o.length; n++)
                    o[n].addEventListener(e, t)
        }
        ,
        this.off = function(e, t) {
            if (!(zot(r) || zot(e) || zot(t)))
                for (var o = a.tags, n = 0; n < o.length; n++)
                    o[n].removeEventListener(e, t)
        }
        ,
        Object.defineProperty(a, "tags", {
            get: function() {
                return zot(r) ? [] : "string" == typeof r || r instanceof String ? document.querySelectorAll(r) : "string" == typeof r.innerHTML ? [r] : []
            },
            set: function(e) {}
        }),
        this.css = function(e, t) {
            for (var o = a.tags, n = 0; n < o.length; n++)
                if (1 == arguments.length && e.constructor === {}.constructor)
                    for (var r in e)
                        o[n].style[r] = e[r];
                else {
                    if (1 == arguments.length)
                        return a.tags[0].style[e];
                    o[n].style[e] = t
                }
        }
        ,
        this.prop = function(e, t) {
            if (!zot(e)) {
                for (var o = a.tags, n = [], r = 0; r < o.length; r++)
                    if (zot(t))
                        if (e.constructor === {}.constructor)
                            for (var i in e)
                                o[r][i] = e[i];
                        else
                            n.push(o[r][e]);
                    else
                        o[r][e] = t;
                return zot(t) ? n : void 0
            }
        }
    }
}
function isDUO(e) {
    return 1 == e.length && null != e[0] && e[0].constructor === {}.constructor
}
function zob(e, t, o, n) {
    if (isDUO(t)) {
        z_d("7");
        var r, i, a, l = t[0], s = zot(o) ? e.toString().split(/\n/, 1)[0].match(/\((.*)\)/)[1].replace(/\s+/g, "").split(",") : o.replace(/\s+/g, "").split(","), c = [];
        for (r = 0; r < s.length; r++)
            i = s[r].split("=")[0],
            s[r] = i,
            c.push(l[i]);
        for (r in l)
            s.indexOf(r) < 0 && zon && zog(e, "bad argument " + r);
        return !(a = e.prototype.isPrototypeOf(n) ? new (e.bind.apply(e, [null].concat(c))) : e.apply(null, c)) || a
    }
}
function zik(e) {
    if (z_d("7.5"),
    !zot(e)) {
        if (e.constructor === {}.constructor || Array.isArray(e) || "function" == typeof e) {
            if (Array.isArray(e))
                return zik(e[Math.floor(Math.random() * e.length)]);
            if (e.constructor === {}.constructor)
                return zot(e.noZik) ? zot(e.max) ? e : (zot(e.integer) && (e.integer = !1),
                zim.rand(e.min, e.max, e.integer, e.negative)) : e.noZik;
            if ("function" == typeof e)
                return zik(e())
        }
        return e
    }
}
var ignore, zta = zon ? console.table.bind(console) : function() {}
;
function z_d(e) {
    zim && (zim.DISTILL || window.DISTILL) && zim.distillery.push(e)
}
function zimify(e, t) {
    z_d("83.3");
    var o = {
        drag: function(e, t, o, n, r, i, a, l, s, c, d, u, h, g, p, f) {
            return isDUO(arguments) ? (e.obj = this,
            zim.drag(e)) : zim.drag(this, e, t, o, n, r, i, a, l, s, c, d, u, h, g, p, f)
        },
        noDrag: function() {
            return zim.noDrag(this)
        },
        dragBoundary: function(e) {
            return zim.dragBoundary(this, e)
        },
        dragRect: function(e) {
            return zim.dragBoundary(this, e)
        },
        transform: function(e, t, o, n, r, i, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w) {
            return isDUO(arguments) ? (e.obj = this,
            zim.transform(e)) : zim.transform(this, e, t, o, n, r, i, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w)
        },
        setSwipe: function(e) {
            return zim.setSwipe(this, e)
        },
        gesture: function(e, t, o, n, r, i, a, l, s, c, d, u, h, g, p) {
            return isDUO(arguments) ? (e.obj = this,
            zim.gesture(e)) : zim.gesture(this, e, t, o, n, r, i, a, l, s, c, d, u, h, g, p)
        },
        noGesture: function(e, t, o) {
            if (isDUO(arguments))
                return e.obj = this,
                zim.noGesture(e);
            zim.noGesture(this, e, t, o)
        },
        gestureBoundary: function(e, t) {
            return zim.gestureBoundary(this, e, t)
        },
        gestureRect: function(e, t) {
            return zim.gestureBoundary(this, e, t)
        },
        hitTestPoint: function(e, t, o) {
            return zim.hitTestPoint(this, e, t, o)
        },
        hitTestReg: function(e, t) {
            return zim.hitTestReg(this, e, t)
        },
        hitTestRect: function(e, t, o) {
            return zim.hitTestRect(this, e, t, o)
        },
        hitTestCircle: function(e, t, o) {
            return zim.hitTestCircle(this, e, t, o)
        },
        hitTestCircles: function(e, t) {
            return zim.hitTestCircles(this, e, t)
        },
        hitTestBounds: function(e, t, o) {
            return zim.hitTestBounds(this, e, t, o)
        },
        boundsToGlobal: function(e, t, o) {
            return zim.boundsToGlobal(this, e, t, o)
        },
        resetBounds: function(e, t, o, n) {
            return zim.resetBounds(this, e, t, o, n)
        },
        hitTestGrid: function(e, t, o, n, r, i, a, l, s, c, d, u) {
            return zim.hitTestGrid(this, e, t, o, n, r, i, a, l, s, c, d, u)
        },
        animate: function(e, t, o, n, r, i, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, S, P, E, M, I, j, O, Y, L, D, X, R) {
            return isDUO(arguments) ? (e.target = this,
            zim.animate(e)) : zim.animate(this, e, t, o, n, r, i, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, S, P, E, M, I, j, O, Y, L, D, X, R)
        },
        pauseAnimate: function() {
            return this
        },
        stopAnimate: function() {
            return this
        },
        wiggle: function(e, t, o, n, r, i, a, l, s, c, d, u, h) {
            return isDUO(arguments) ? (e.target = this,
            zim.wiggle(e)) : zim.wiggle(this, e, t, o, n, r, i, a, l, s, c, d, u, h)
        },
        loop: function(e, t, o, n, r) {
            return zim.loop(this, e, t, o, n, r)
        },
        copyMatrix: function(e) {
            return zim.copyMatrix(this, e)
        },
        cur: function(e) {
            return zim.cur(this, e)
        },
        sha: function(e, t, o, n) {
            return zim.sha(this, e, t, o, n)
        },
        pos: function(e, t, o, n, r, i, a, l, s, c) {
            return isDUO(arguments) ? (e.obj = this,
            zim.pos(e)) : zim.pos(this, e, t, o, n, r, i, a, l, s, c)
        },
        loc: function(e, t, o, n, r, i, a) {
            return isDUO(arguments) ? (e.obj = this,
            zim.loc(e)) : zim.loc(this, e, t, o, n, r, i, a)
        },
        mov: function(e, t) {
            return isDUO(arguments) ? (e.obj = this,
            zim.mov(e)) : zim.mov(this, e, t)
        },
        top: function() {
            return zim.top(this)
        },
        bot: function() {
            return zim.bot(this)
        },
        ord: function(e) {
            return zim.ord(this, e)
        },
        dep: function(e) {
            return zim.dep(this, e)
        },
        alp: function(e) {
            return zim.alp(this, e)
        },
        hov: function(e, t) {
            return zim.hov(this, e, t)
        },
        rot: function(e) {
            return zim.rot(this, e)
        },
        siz: function(e, t, o) {
            return zim.siz(this, e, t, o)
        },
        ske: function(e, t) {
            return zim.ske(this, e, t)
        },
        reg: function(e, t) {
            return zim.reg(this, e, t)
        },
        sca: function(e, t) {
            return zim.sca(this, e, t)
        },
        scaleTo: function(e, t, o, n, r) {
            return isDUO(arguments) ? (e.obj = this,
            zim.scaleTo(e)) : zim.scaleTo(this, e, t, o, n, r)
        },
        fit: function(e, t, o, n, r) {
            return isDUO(arguments) ? (e.obj = this,
            zim.fit(e)) : zim.fit(this, e, t, o, n, r)
        },
        outline: function(e, t) {
            return isDUO(arguments) ? (e.obj = this,
            zim.outline(e)) : zim.outline(this, e, t)
        },
        addTo: function(e, t, o) {
            return isDUO(arguments) ? (e.obj = this,
            zim.addTo(e)) : zim.addTo(this, e, t, o)
        },
        removeFrom: function(e) {
            return zim.removeFrom(this, e)
        },
        added: function(e, t, o) {
            return zim.added(this, e, t, o)
        },
        tap: function(e, t, o, n) {
            return zim.tap(this, e, t, o, n)
        },
        noTap: function() {
            return zim.noTap(this)
        },
        change: function(e, t) {
            return zim.change(this, e, t)
        },
        noChange: function() {
            return zim.noChange(this)
        },
        centerReg: function(e, t, o) {
            return isDUO(arguments) ? (e.obj = this,
            zim.centerReg(e)) : zim.centerReg(this, e, t, o)
        },
        center: function(e, t, o) {
            return isDUO(arguments) ? (e.obj = this,
            zim.center(e)) : zim.center(this, e, t, o)
        },
        place: function(e) {
            return zim.place(this, e)
        },
        placeReg: function(e) {
            return zim.placeReg(this, e)
        },
        expand: function(e, t) {
            return zim.expand(this, e, t)
        },
        setMask: function(e, t) {
            return zim.setMask(this, e, t)
        },
        cloneProps: function(e) {
            return e.type = this.type,
            e.group = this.group,
            e.style = this.style,
            e.alpha = this.alpha,
            e.rotation = this.rotation,
            e.mouseEnabled = this.mouseEnabled,
            e.tickEnabled = this.tickEnabled,
            e.name = this.name,
            e.regX = this.regX,
            e.regY = this.regY,
            e.visible = this.visible,
            e.shadow = this.shadow,
            zim.copyMatrix(e, this),
            e.compositeOperation = this.compositeOperation,
            e.snapToPixel = this.snapToPixel,
            e.filters = null == this.filters ? null : this.filters.slice(0),
            e.mask = this.mask,
            e.hitArea = this.hitArea,
            this._bounds && e.setBounds(this._bounds.x, this._bounds.y, this._bounds.width, this._bounds.height),
            e
        },
        cloneChildren: function(e) {
            e.children.length && e.removeAllChildren();
            for (var t = e.children, o = 0, n = this.children.length; o < n; o++) {
                var r = this.children[o].clone();
                r.parent = e,
                t.push(r)
            }
            return e
        }
    };
    if (!zot(t)) {
        t = [];
        for (var n in o)
            t.push(n);
        return t
    }
    for (var r in o)
        o.hasOwnProperty(r) && (e[r] = o[r]);
    return Object.defineProperty(e, "width", {
        enumerable: !0,
        get: function() {
            var e = this.getBounds();
            return zot(e) ? null : e.width * this.scaleX
        },
        set: function(e) {
            var t = this.getBounds();
            if (zot(t) || 0 == t.width)
                zog("width needs bounds set with setBounds()");
            else {
                var o = e / t.width;
                this.scaleX = this.scaleY = o
            }
        }
    }),
    Object.defineProperty(e, "height", {
        enumerable: !0,
        get: function() {
            var e = this.getBounds();
            return zot(e) ? null : e.height * this.scaleY
        },
        set: function(e) {
            var t = this.getBounds();
            if (zot(t) || 0 == t.height)
                zog("height needs bounds set with setBounds()");
            else {
                var o = e / t.height;
                this.scaleX = this.scaleY = o
            }
        }
    }),
    Object.defineProperty(e, "widthOnly", {
        enumerable: !0,
        get: function() {
            var e = this.getBounds();
            return zot(e) ? null : e.width * this.scaleX
        },
        set: function(e) {
            var t = this.getBounds();
            if (zot(t) || 0 == t.width)
                zog("widthOnly needs bounds set with setBounds()");
            else {
                var o = e / t.width;
                this.scaleX = o
            }
        }
    }),
    Object.defineProperty(e, "heightOnly", {
        enumerable: !0,
        get: function() {
            var e = this.getBounds();
            return zot(e) ? null : e.height * this.scaleY
        },
        set: function(e) {
            var t = this.getBounds();
            if (zot(t) || 0 == t.height)
                zog("heightOnly needs bounds set with setBounds()");
            else {
                var o = e / t.height;
                this.scaleY = o
            }
        }
    }),
    Object.defineProperty(e, "depth", {
        enumerable: !0,
        get: function() {
            return this._depth
        },
        set: function(e) {
            if (this._depth = e,
            !zot(this.vrChannel)) {
                var t = this.vrParallaxDistance ? e * this.vrParallax * this.vrParallaxDistance : 0;
                "left" == this.vrChannel ? this.x = this.vrStartX + e + t : "right" == this.vrChannel && (this.x = this.vrStartX - e + t)
            }
        }
    }),
    Object.defineProperty(e, "blendMode", {
        enumerable: !0,
        get: function() {
            return this.compositeOperation
        },
        set: function(e) {
            this.compositeOperation = e
        }
    }),
    e
}
function zimplify(e) {
    z_d("83.35"),
    document.Window = Window,
    document.Blob = Blob,
    ignore = "ignore",
    zot(e) && (e = []),
    Array.isArray(e) || (e = [e]);
    var t = zimify(null, !0)
      , o = ["loop", "stopAnimate", "pauseAnimate", "animate", "wiggle"];
    for (var n in zim)
        (-1 == t.indexOf(n) || 0 <= o.indexOf(n)) && -1 == e.indexOf(n) && (window[n] = zim[n]);
    window.KEYFOCUS = zim.KEYFOCUS,
    window.OPTIMIZE = zim.OPTIMIZE,
    window.ACTIONEVENT = zim.ACTIONEVENT,
    window.STYLE = zim.STYLE
}
var zim = function(m) {
    return m.Wonder = function(n, r, i, a, e) {
        var t;
        if (t = zob(m.Wonder, arguments, "wid, client, app, notes, server", this))
            return t;
        if (z_d("82"),
        zot(n))
            zog("zim.Wonder() - please provide Wonder ID (see https://zimjs.com/wonder/)");
        else {
            zot(e) && (e = "http://54.237.229.197:3001/wonder");
            var o = this;
            zot(m.wonderSession) && (m.wonderSession = "W" + m.rand(1e5, 999999));
            var l, s = [], c = setInterval(p, 1e3), d = 0, u = setInterval(function() {
                28 < d && (s.push({
                    id: n,
                    c: r,
                    a: i,
                    n: a,
                    k: l,
                    t: "e",
                    v: "frequency max - terminated",
                    s: m.wonderSession
                }),
                zog("zim.Wonder() - frequency max - terminated"),
                o.dispose()),
                d = 0
            }, 3e4);
            this.countsOff = {},
            this.timesOff = {},
            this.ordersOff = {},
            this.count = function(e) {
                f(e, "count") && (l = e,
                s.push({
                    id: n,
                    c: r,
                    a: i,
                    n: a,
                    k: e,
                    t: "c",
                    v: 1,
                    s: m.wonderSession
                }))
            }
            ;
            var h = {};
            this.timeStart = function(e) {
                f(e, "time") && (o.timeEnd(e),
                h[l = e] = (new Date).getTime())
            }
            ;
            var g = {};
            this.timePause = function(e) {
                f(e, "time") && (g[e] || (g[e] = (new Date).getTime()))
            }
            ,
            this.timeUnpause = function(e) {
                if (f(e, "time") && g[e]) {
                    var t = (new Date).getTime() - g[e];
                    h[e] && (h[e] += t),
                    delete g[e]
                }
            }
            ,
            this.timeEnd = function(e) {
                if (f(e, "time") && h[e]) {
                    var t = g[e] ? g[e] : (new Date).getTime()
                      , o = Math.round((t - h[e]) / 1e3);
                    delete g[e],
                    delete h[e],
                    s.push({
                        id: n,
                        c: r,
                        a: i,
                        n: a,
                        k: e,
                        t: "t",
                        v: o,
                        s: m.wonderSession
                    })
                }
            }
            ,
            this.order = function(e, t) {
                f(e, "order") && (l = e,
                zot(t) ? zog("zim.Wonder order() - please provide an item") : s.push({
                    id: n,
                    c: r,
                    a: i,
                    n: a,
                    k: e,
                    t: "o",
                    v: t,
                    s: m.wonderSession
                }))
            }
            ,
            this.countOff = function(e) {
                o.countsOff[e] = 1
            }
            ,
            this.countOn = function(e) {
                delete o.countOff[e]
            }
            ,
            this.timeOff = function(e) {
                o.timesOff[e] = 1
            }
            ,
            this.timeOn = function(e) {
                delete o.timesOff[e]
            }
            ,
            this.orderOff = function(e) {
                o.ordersOff[e] = 1
            }
            ,
            this.orderOn = function(e) {
                delete o.ordersOff[e]
            }
            ,
            this.dispose = function() {
                return p(),
                clearInterval(c),
                clearInterval(u),
                !0
            }
        }
        function p() {
            0 < s.length && (m.async(e + "?wonder=" + JSON.stringify(s)),
            s = [],
            d++)
        }
        function f(e, t) {
            return zot(e) ? (zog("zim.Wonder " + t + " - please provide a keyword"),
            !1) : !o[t + "sOff"][e]
        }
    }
    ,
    m
}((zim = function(kt) {
    function d(e, t, o, n, r) {
        var i = e * e;
        return t + (3 * -t + e * (3 * t - t * e)) * e + (3 * o + e * (-6 * o + 3 * o * e)) * e + (3 * n - 3 * n * e) * i + r * (i * e)
    }
    if (kt.orange = "#f58e25",
    kt.green = "#acd241",
    kt.pink = "#e472c4",
    kt.blue = "#50c4b7",
    kt.brown = "#d1a170",
    kt.yellow = "#ebcb35",
    kt.purple = "#993399",
    kt.red = "#fb4758",
    kt.silver = "#999999",
    kt.tin = "#777777",
    kt.grey = "#555555",
    kt.gray = "#555555",
    kt.lighter = "#eeeeee",
    kt.moon = "#dddddd",
    kt.light = "#cccccc",
    kt.dark = "#333333",
    kt.darker = "#111111",
    kt.black = "#000000",
    kt.white = "#ffffff",
    kt.clear = "rgba(0,0,0,0)",
    kt.faint = "rgba(0,0,0,.01)",
    kt.shuffle = function(e) {
        if (z_d("8"),
        !zot(e)) {
            var t, o, n = e.length;
            if (0 == n)
                return e;
            for (; --n; )
                t = Math.floor(Math.random() * (n + 1)),
                o = e[n],
                e[n] = e[t],
                e[t] = o;
            return e
        }
    }
    ,
    kt.rand = function(e, t, o, n) {
        return z_d("9"),
        zot(e) && zot(t) ? Math.random() : ((zot(e) || isNaN(e)) && (e = 0),
        (zot(t) || isNaN(t)) && (t = 0),
        e % 1 == 0 && t % 1 == 0 || (o = !1),
        zot(o) && (o = !0),
        n && .5 < Math.random() && (e *= -1,
        t *= -1),
        o && (t < e ? e++ : e < t && t++),
        0 == e && 0 == t ? 0 : (r = 0 == t ? Math.random() * e : Math.min(e, t) + Math.random() * (Math.max(e, t) - Math.min(e, t)),
        o ? Math.floor(r) : r));
        var r
    }
    ,
    kt.series = function() {
        var e;
        if (z_d("13.61"),
        0 == arguments.length)
            return function() {}
            ;
        e = 1 == arguments.length && Array.isArray(arguments[0]) ? arguments[0] : arguments;
        var t = 0
          , o = function() {
            return e[t++ % e.length]
        };
        return o.array = e,
        o
    }
    ,
    kt.makeSeries = function(e) {
        if (z_d("13.6"),
        zot(e))
            return function() {}
            ;
        var t = 0
          , o = function() {
            return e[t++ % e.length]
        };
        return o.array = e,
        o
    }
    ,
    kt.loop = function(e, t, o, n, r, i) {
        var a;
        if (a = zob(kt.loop, arguments, "obj, call, reverse, step, start, end"))
            return a;
        if (z_d("9.5"),
        !zot(e) && !zot(t)) {
            zot(o) && (o = !1),
            (zot(n) || n <= 0) && (n = 1);
            var l = "number" == typeof e ? "number" : e.constructor === Array ? "array" : e.constructor === {}.constructor ? "object" : e instanceof NodeList ? "nodelist" : "invalid";
            if ("invalid" != l)
                if ("number" == l || "array" == l || "nodelist" == l) {
                    if (0 == (d = g((u = "number" == l ? e : e.length) - 1)))
                        return;
                    if (o)
                        for (var s = r; i <= s; s -= n) {
                            if ("number" == l)
                                var c = t(s, d, r, i, e);
                            else if ("array" == l)
                                c = t(e[s], s, d, r, i, e);
                            else
                                c = t(e.item(s), s, d, r, i, e);
                            if (void 0 !== c)
                                return c
                        }
                    else
                        for (s = r; s <= i; s += n) {
                            if ("number" == l)
                                c = t(s, d, r, i, e);
                            else if ("array" == l)
                                c = t(e[s], s, d, r, i, e);
                            else
                                c = t(e.item(s), s, d, r, i, e);
                            if (void 0 !== c)
                                return c
                        }
                } else if ("object" == l) {
                    var d, u = 0, h = [];
                    for (var s in e)
                        u++,
                        h.push(s);
                    if (0 == (d = g(u - 1)))
                        return;
                    if (o)
                        for (s = r; i <= s; s -= n) {
                            if (void 0 !== (c = t(h[s], e[h[s]], s, d, r, i, e)))
                                return c
                        }
                    else
                        for (s = r; s <= i; s += n) {
                            if (void 0 !== (c = t(h[s], e[h[s]], s, d, r, i, e)))
                                return c
                        }
                }
        }
        function g(e) {
            return zot(r) && (r = o ? e : 0),
            zot(i) && (i = o ? 0 : e),
            o && r < i || !o && i < r ? 0 : (r < 0 && i) < 0 || e < r && e < i ? 0 : (r = Math.max(0, Math.min(r, e)),
            i = Math.max(0, Math.min(i, e)),
            Math.floor((o ? r - i : i - r) / n) + 1)
        }
    }
    ,
    kt.timeout = function(t, o) {
        if (z_d("9.7"),
        !zot(o) && "function" == typeof o) {
            zot(t) && (t = 1e3),
            t = zik(t);
            var n = {
                startTime: Date.now(),
                time: 0,
                paused: !1,
                done: !1
            }
              , r = n.startTime;
            return n.pause = function(e) {
                zot(e) && (e = !0),
                e ? cancelAnimationFrame(n.rid) : (r = Date.now(),
                i()),
                n.paused = e
            }
            ,
            n.clear = function() {
                for (var e in n && cancelAnimationFrame(n.rid),
                n)
                    delete n[e];
                n.pause = function() {}
                ,
                n.clear = function() {}
            }
            ,
            i(),
            n
        }
        function i() {
            var e = Date.now();
            if (n.time += e - r,
            r = e,
            n.time >= t)
                return n.done = !0,
                o(n),
                void n.clear();
            n.rid = requestAnimationFrame(i)
        }
    }
    ,
    kt.interval = function(e, o, t, n) {
        if (z_d("9.8"),
        !zot(o) && "function" == typeof o && (zot(e) && (e = 1e3),
        zot(n) && (n = !1),
        zot(t) || !(isNaN(t) || t <= 0))) {
            zot(t) && (t = -1);
            var r, i = {
                count: 0,
                total: t,
                paused: !1,
                time: e,
                active: !0
            };
            return n && setTimeout(function() {
                o(i),
                l()
            }, 10),
            i.pause = function(e, t) {
                zot(e) && (e = !0),
                e ? (clearTimeout(r),
                clearTimeout(i.id),
                cancelAnimationFrame(i.rid),
                i.pauseTimeLeft = i.interval - (Date.now() - i.startTime)) : (r = setTimeout(function() {
                    i.count++,
                    o(i),
                    a(),
                    l()
                }, t ? 0 : i.pauseTimeLeft),
                i.pauseTimeLeft = null),
                i.paused = e
            }
            ,
            i.clear = function() {
                i.active = !1,
                clearTimeout(r),
                cancelAnimationFrame(i.rid),
                clearTimeout(i.id);
                var e = i.count;
                for (var t in i)
                    delete i[t];
                i.active = !1,
                i.count = e,
                i.pause = function() {}
                ,
                i.clear = function() {}
            }
            ,
            a(),
            i
        }
        function a() {
            i.startTime = Date.now(),
            i.interval = zik(i.time),
            i.id = setTimeout(function() {
                i.paused || i.active && (i.rid = requestAnimationFrame(a),
                i.count++,
                o(i),
                l())
            }, i.interval)
        }
        function l() {
            -1 != t && i.count >= (n ? i.total - 1 : i.total) && i.clear()
        }
    }
    ,
    kt.async = function(e, t) {
        if (z_d("29"),
        !zot(e)) {
            var o, n = document.createElement("script");
            if (t) {
                var r = t.toString().split(/\n/, 1)[0].match(/^function\s?([^\s(]*)/)[1];
                kt.async[r] = (o = n,
                function(e) {
                    o && o.parentNode.removeChild(o),
                    o = null,
                    t(e)
                }
                )
            } else
                kt.async.z_s && kt.async.z_s.parentNode && kt.async.z_s.parentNode.removeChild(kt.async.z_s),
                kt.async.z_s = n;
            e.match(/\?/) || (e += "?"),
            n.setAttribute("src", e + "&r=" + Math.random()),
            document.getElementsByTagName("head")[0].appendChild(n)
        }
    }
    ,
    kt.convertColorCheck = !1,
    kt.convertColor = function(e, o, n) {
        if (kt.convertColorCheck || (z_d("27.5"),
        kt.convertColorCheck = !0),
        zot(o) && (o = "hex"),
        zot(n),
        "rgb" == o || "rgba" == o) {
            function t(e) {
                var t;
                return /^#([A-Fa-f0-9]{3}){1,2}$/.test(e) ? (3 == (t = e.substring(1).split("")).length && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
                t = "0x" + t.join(""),
                "rgb" == o ? "rgb(" + [t >> 16 & 255, t >> 8 & 255, 255 & t] + ")" : "rgba(" + [t >> 16 & 255, t >> 8 & 255, 255 & t].join(",") + "," + n + ")") : "rgb" == o ? "rgb(0,0,0)" : "rgba(0,0,0,1)"
            }
            return "#" == e.charAt(0) ? t(e) : t(kt.convertColor(e))
        }
        if ("hex" == o) {
            if ("#" == e.charAt(0))
                return e
        } else
            "#" == e.charAt(0) && 3 == (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2));
        var r = ["black", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]
          , i = ["000000", "f0f8ff", "faebd7", "00ffff", "7fffd4", "f0ffff", "f5f5dc", "ffe4c4", "ffebcd", "0000ff", "8a2be2", "a52a2a", "deb887", "5f9ea0", "7fff00", "d2691e", "ff7f50", "6495ed", "fff8dc", "dc143c", "00ffff", "00008b", "008b8b", "b8860b", "a9a9a9", "a9a9a9", "006400", "bdb76b", "8b008b", "556b2f", "ff8c00", "9932cc", "8b0000", "e9967a", "8fbc8f", "483d8b", "2f4f4f", "2f4f4f", "00ced1", "9400d3", "ff1493", "00bfff", "696969", "696969", "1e90ff", "b22222", "fffaf0", "228b22", "ff00ff", "dcdcdc", "f8f8ff", "ffd700", "daa520", "808080", "808080", "008000", "adff2f", "f0fff0", "ff69b4", "cd5c5c", "4b0082", "fffff0", "f0e68c", "e6e6fa", "fff0f5", "7cfc00", "fffacd", "add8e6", "f08080", "e0ffff", "fafad2", "d3d3d3", "d3d3d3", "90ee90", "ffb6c1", "ffa07a", "20b2aa", "87cefa", "778899", "778899", "b0c4de", "ffffe0", "00ff00", "32cd32", "faf0e6", "ff00ff", "800000", "66cdaa", "0000cd", "ba55d3", "9370db", "3cb371", "7b68ee", "00fa9a", "48d1cc", "c71585", "191970", "f5fffa", "ffe4e1", "ffe4b5", "ffdead", "000080", "fdf5e6", "808000", "6b8e23", "ffa500", "ff4500", "da70d6", "eee8aa", "98fb98", "afeeee", "db7093", "ffefd5", "ffdab9", "cd853f", "ffc0cb", "dda0dd", "b0e0e6", "800080", "663399", "ff0000", "bc8f8f", "4169e1", "8b4513", "fa8072", "f4a460", "2e8b57", "fff5ee", "a0522d", "c0c0c0", "87ceeb", "6a5acd", "708090", "708090", "fffafa", "00ff7f", "4682b4", "d2b48c", "008080", "d8bfd8", "ff6347", "40e0d0", "ee82ee", "f5deb3", "ffffff", "f5f5f5", "ffff00", "9acd32"];
        return "string" == o ? r[-1 != i.indexOf(e.toLowerCase()) ? i.indexOf(e) : 0] : "#" + i[-1 != r.indexOf(e.toLowerCase()) ? r.indexOf(e) : 0]
    }
    ,
    kt.colorRangeCheck = !1,
    kt.colorRange = function(e, t, o) {
        o = Math.max(0, Math.min(1, o)),
        kt.colorRangeCheck || (z_d("27.6"),
        kt.colorRangeCheck = !0);
        for (var n, r, i = kt.convertColor(e, "rgb"), a = kt.convertColor(t, "rgb"), l = (e = i.substring(4, i.length - 1).split(","),
        t = a.substring(4, a.length - 1).split(","),
        "#"), s = 0; s < e.length; s++)
            n = t[s] - e[s],
            (r = Math.floor(parseInt(e[s], 10) + n * o).toString(16)).length < 2 && (r = "0" + r),
            l += r;
        return l
    }
    ,
    kt.pointAlongCurve = function(e, t, o) {
        if (z_d("27.7"),
        e && e[0] && e[1] && e[2] && e[3]) {
            var n = d(t, e[0].x, e[1].x, e[2].x, e[3].x)
              , r = d(t, e[0].y, e[1].y, e[2].y, e[3].y);
            if (o) {
                var i = t + .05;
                if (1 < i) {
                    i -= .05;
                    var a = d(t -= .05, e[0].x, e[1].x, e[2].x, e[3].x)
                      , l = d(t, e[0].y, e[1].y, e[2].y, e[3].y)
                } else
                    a = n,
                    l = r;
                var s = d(i, e[0].x, e[1].x, e[2].x, e[3].x)
                  , c = d(i, e[0].y, e[1].y, e[2].y, e[3].y);
                return {
                    x: n,
                    y: r,
                    angle: kt.angle(a, l, s, c)
                }
            }
            return {
                x: n,
                y: r
            }
        }
    }
    ,
    kt.distanceAlongCurve = function(e) {
        return z_d("27.8"),
        (dist(e[0], e[3]) + (dist(e[0], e[1]) + dist(e[1], e[2]) + dist(e[2], e[3]))) / 2
    }
    ,
    kt.closestPointAlongCurve = function(a, e, t, o, n) {
        z_d("27.9");
        var l, s = 1e7, c = 0, d = 0;
        return zot(t) && (t = 10),
        kt.loop(e, function(r, i, e) {
            kt.loop(t, function(e, t) {
                var o = kt.pointAlongCurve(r, e / t)
                  , n = kt.dist(a, o);
                n < s && (s = n,
                l = o,
                c = i,
                d = e)
            })
        }),
        n ? (c * t + d) / (e.length * t) * 100 : o ? l : c
    }
    ,
    kt.transformPoints = function(e, t, o, n, r) {
        if (z_d("27.95"),
        !zot(e) && Array.isArray(e)) {
            zot(n) && (n = 0),
            zot(r) && (r = 0);
            e = kt.copy(e);
            var i, a = n, l = r;
            "rotation" == t && (0 != n && (e = kt.transformPoints(e, "x", -a)),
            0 != r && (e = kt.transformPoints(e, "y", -l)));
            for (var s = 0; s < e.length; s++)
                if (i = e[s],
                Array.isArray(i))
                    if ("x" == t)
                        i[0] += o;
                    else if ("y" == t)
                        i[1] += o;
                    else if ("scaleX" == t)
                        i[0] = (i[0] - n) * o + n,
                        i[4] = i[4] * o,
                        i[6] = i[6] * o;
                    else if ("scaleY" == t)
                        i[1] = (i[1] - r) * o + r,
                        i[5] = i[5] * o,
                        i[7] = i[7] * o;
                    else if ("scale" == t)
                        i[0] = (i[0] - n) * o + n,
                        i[4] = i[4] * o,
                        i[6] = i[6] * o,
                        i[1] = (i[1] - r) * o + r,
                        i[5] = i[5] * o,
                        i[7] = i[7] * o;
                    else if ("rotation" == t) {
                        var c = o * Math.PI / 180
                          , d = i[0]
                          , u = i[1];
                        i[0] = d * Math.cos(c) - u * Math.sin(c),
                        i[1] = u * Math.cos(c) + d * Math.sin(c),
                        d = i[4],
                        u = i[5],
                        i[4] = d * Math.cos(c) - u * Math.sin(c),
                        i[5] = u * Math.cos(c) + d * Math.sin(c),
                        d = i[6],
                        u = i[7],
                        i[6] = d * Math.cos(c) - u * Math.sin(c),
                        i[7] = u * Math.cos(c) + d * Math.sin(c)
                    }
            return "rotation" == t && (0 != n && (e = kt.transformPoints(e, "x", a)),
            0 != r && (e = kt.transformPoints(e, "y", l))),
            e
        }
    }
    ,
    kt.makeID = function(e, t, o) {
        var n;
        z_d("13.5"),
        zot(e) && (e = "mixed"),
        zot(t) && (t = 5),
        zot(o) && (o = "uppercase");
        var r = [2, 3, 4, 5, 6, 7, 8, 9]
          , i = "abcdefghjkmnpqrstuvwxyz".split("");
        n = e.constructor === Array ? e : "numbers" == e ? r : "letters" == e ? i : r.concat(i);
        for (var a, l, s = "", c = 0; c < t; c++)
            a = n[Math.floor(Math.random() * n.length)],
            l = Math.random(),
            "uppercase" == o || "mixed" == o && .5 < l ? a.toUpperCase && (a = a.toUpperCase()) : a.toLowerCase && (a = a.toLowerCase()),
            s += String(a);
        return s
    }
    ,
    kt.swapProperties = function(e, t, o) {
        if (z_d("17.1"),
        zot(t) || zot(o) || zot(t[e]) || zot(o[e]))
            return !1;
        var n = o[e];
        return o[e] = t[e],
        t[e] = n,
        !0
    }
    ,
    kt.mobile = function(e) {
        return z_d("28"),
        zot(e) && (e = !0),
        /ip(hone|od|ad)/i.test(navigator.userAgent) ? "ios" : /android|nexus/i.test(navigator.userAgent) ? "android" : /blackberry/i.test(navigator.userAgent) ? "blackberry" : /nokia|phone|mobile/i.test(navigator.userAgent) ? "windows" : /opera mini|webos/i.test(navigator.userAgent) ? "other" : !(!e || void 0 === window.orientation)
    }
    ,
    kt.vee = function(e) {
        return z_d("28.5"),
        !zot(e) && (Array.isArray(e) || e.constructor == {}.constructor && (!zot(e.max) || !zot(e.noZik)) || "function" == typeof e)
    }
    ,
    kt.extend = function(e, t, o, n, r) {
        var i;
        if (i = zob(kt.extend, arguments, "subclass, superclass, override, prefix, prototype"))
            return i;
        if (!zot(e) && !zot(t) || !zon) {
            zot(n) && (n = "super"),
            zot(o) && (o = []),
            Array.isArray(o) || (o = [o]),
            zot(r) && (r = !0);
            var a = {};
            for (var l in e.prototype)
                Object.defineProperty(a, l, Object.getOwnPropertyDescriptor(e.prototype, l));
            for (l in h.prototype = t.prototype,
            e.prototype = new h,
            a)
                Object.defineProperty(e.prototype, l, Object.getOwnPropertyDescriptor(a, l));
            var s = e.prototype
              , c = Object.getPrototypeOf && Object.getPrototypeOf(s) || s.__proto__;
            if (c) {
                var d;
                s[(n += "_") + "constructor"] = c.constructor;
                for (var u = 0; u < o.length; u++)
                    "function" == typeof c[d = o[u]] && (s[n + d] = c[d]);
                if (r)
                    for (d in c)
                        s.hasOwnProperty(d) && "function" == typeof c[d] && (s[n + d] = c[d])
            }
            return e
        }
        function h() {
            this.constructor = e
        }
        zog("zim.extend() - please supply a class and its superclass")
    }
    ,
    kt.copyCheck = !1,
    kt.copy = function(e, t, o) {
        if (kt.copyCheck || (z_d("10"),
        kt.copyCheck = !0),
        zot(t) && (t = !1),
        zot(o) && (o = !0),
        null == e || !(e instanceof Array || e.constructor == {}.constructor))
            return t && null != e && e.clone && e.type && ("Container" != e.type && "Stage" != e.type && "StageGL" != e.type || o) ? e.clone() : e;
        if (e instanceof Array) {
            for (var n = [], r = 0; r < e.length; r++)
                n[r] = kt.copy(e[r], t, o);
            return n
        }
        if (e.constructor == {}.constructor) {
            var i = {};
            for (var a in e) {
                var l = kt.copy(e[a], t, o);
                e.hasOwnProperty(a) && (i[a] = l)
            }
            return i
        }
    }
    ,
    kt.mergeCheck = !1,
    kt.merge = function() {
        kt.mergeCheck || (z_d("12"),
        kt.mergeCheck = !0);
        var e, t, o = {};
        for (e = 0; e < arguments.length; e++)
            for (t in arguments[e])
                arguments[e].hasOwnProperty(t) && (o[t] = arguments[e][t]);
        return o
    }
    ,
    kt.arraysEqual = function(e, t, o) {
        if (z_d("11"),
        zot(e) || zot(t))
            return !1;
        if (zot(o) && (o = !0),
        e.length != t.length)
            return !1;
        for (var n = 0; n < e.length; n++)
            if (e[n]instanceof Array && t[n]instanceof Array) {
                if (!kt.arraysEqual(e[n], t[n], o))
                    return !1
            } else {
                if (o && e[n] != t[n])
                    return !1;
                if (!o)
                    return kt.arraysEqual(e.sort(), t.sort(), !0)
            }
        return !0
    }
    ,
    kt.isEmpty = function(e) {
        if (z_d("11.5"),
        !zot(e)) {
            var t = 0;
            for (var o in e) {
                t++;
                break
            }
            return 0 == t
        }
    }
    ,
    kt.isJSON = function(e) {
        z_d("11.6");
        try {
            return JSON.parse(e).constructor == {}.constructor
        } catch (e) {
            return !1
        }
    }
    ,
    kt.zut = function(e) {
        if (zot(e) || "object" == typeof e)
            return !0
    }
    ,
    kt.zimDecimalCheck = !1,
    kt.decimals = function(e, t, o, n, r, i, a) {
        if (kt.zimDecimalCheck || z_d("13"),
        kt.zimDecimalCheck = !0,
        zot(e))
            return 0;
        zot(t) && (t = 1),
        zot(o) && (o = 0),
        zot(n) && (n = 0),
        zot(n) && (n = 0),
        zot(r) && (r = !0),
        zot(i) && (i = !1);
        var l = Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
        if (i) {
            var s = l - Math.floor(l);
            l = kt.decimals(Math.floor(l) + 60 * s / 100, 2)
        }
        var c = kt.sign(l);
        if (0 < o) {
            var d = String(l).indexOf(".")
              , u = String(l).length;
            d < 0 && (d = u++,
            l += ".");
            for (var h = 0; h < o - (u - d - 1); h++)
                l += "0"
        }
        if (0 < n) {
            -1 == c && (l = l.substr(1, l.length - 1));
            d = String(l).indexOf("."),
            u = String(l).length;
            var g = d < 0 ? u : d;
            for (h = 0; h < n - g; h++)
                l = "0" + l;
            -1 == c && (l = "-" + l)
        }
        return 0 < o + n && !r && 0 == Number(l) && (l = 0),
        i && (l = String(l).replace(".", ":")),
        kt.zut(a) ? l : null
    }
    ,
    kt.zimSignCheck = !1,
    kt.sign = function(e) {
        return kt.zimSignCheck || z_d("13.1"),
        kt.zimSignCheck = !0,
        e ? e < 0 ? -1 : 1 : 0
    }
    ,
    kt.constrain = function(e, t, o, n) {
        if (z_d("13.2"),
        !zot(e))
            return zot(t) && (t = 0),
            zot(o) && (o = Number.MAX_VALUE),
            o < t && (o = max2 = t,
            t = max2),
            zot(n) && (n = !1),
            n && e < 0 ? Math.max(-o, Math.min(e, -t)) : Math.max(t, Math.min(e, o))
    }
    ,
    kt.zimDistCheck = !1,
    kt.dist = function(e, t, o, n) {
        if (kt.zimDistCheck || z_d("13.3"),
        kt.zimDistCheck = !0,
        !zot(e) && !zot(t))
            return zot(e.x) || zot(t.x) ? (zot(o) && (o = 0),
            zot(n) && (n = 0)) : (n = t.y,
            o = t.x,
            t = e.y,
            e = e.x),
            Math.sqrt(Math.pow(o - e, 2) + Math.pow(n - t, 2))
    }
    ,
    kt.angle = function(e, t, o, n) {
        if (z_d("13.4"),
        !zot(e) && !zot(t))
            return zot(o) && (o = e,
            e = 0),
            zot(n) && (n = t,
            t = 0),
            (180 * Math.atan2(n - t, o - e) / Math.PI + 360) % 360
    }
    ,
    kt.smoothStep = function(e, t, o) {
        z_d("13.7");
        var n = kt.constrain((e - t) / (o - t), 0, 1);
        return n * n * n * (n * (6 * n - 15) + 10)
    }
    ,
    kt.Noise = function(e) {
        "use strict";
        z_d("13.9"),
        zot(e) && (e = 1e6 * Math.random());
        var t = e;
        this.seed = e;
        var H = this
          , V = {};
        function o(e) {
            var t = new Uint32Array(1);
            return t[0] = 1664525 * e[0] + 1013904223,
            t
        }
        function n(e, t, o) {
            this.dx = -t - e * V.SQUISH_2D,
            this.dy = -o - e * V.SQUISH_2D,
            this.xsb = t,
            this.ysb = o
        }
        function r(e, t, o, n) {
            this.dx = -t - e * V.SQUISH_3D,
            this.dy = -o - e * V.SQUISH_3D,
            this.dz = -n - e * V.SQUISH_3D,
            this.xsb = t,
            this.ysb = o,
            this.zsb = n
        }
        function i(e, t, o, n, r) {
            this.dx = -t - e * V.SQUISH_4D,
            this.dy = -o - e * V.SQUISH_4D,
            this.dz = -n - e * V.SQUISH_4D,
            this.dw = -r - e * V.SQUISH_4D,
            this.xsb = t,
            this.ysb = o,
            this.zsb = n,
            this.wsb = r
        }
        V.NORM_2D = 1 / 47,
        V.NORM_3D = 1 / 103,
        V.NORM_4D = 1 / 30,
        V.SQUISH_2D = (Math.sqrt(3) - 1) / 2,
        V.SQUISH_3D = (Math.sqrt(4) - 1) / 3,
        V.SQUISH_4D = (Math.sqrt(5) - 1) / 4,
        V.STRETCH_2D = (1 / Math.sqrt(3) - 1) / 2,
        V.STRETCH_3D = (1 / Math.sqrt(4) - 1) / 3,
        V.STRETCH_4D = (1 / Math.sqrt(5) - 1) / 4,
        V.base2D = [[1, 1, 0, 1, 0, 1, 0, 0, 0], [1, 1, 0, 1, 0, 1, 2, 1, 1]],
        V.base3D = [[0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1], [2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 3, 1, 1, 1], [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1]],
        V.base4D = [[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1], [3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 4, 1, 1, 1, 1], [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 1, 1, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 1], [3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 2, 1, 1, 0, 0, 2, 1, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 1, 1, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 1]],
        V.gradients2D = [5, 2, 2, 5, -5, 2, -2, 5, 5, -2, 2, -5, -5, -2, -2, -5],
        V.gradients3D = [-11, 4, 4, -4, 11, 4, -4, 4, 11, 11, 4, 4, 4, 11, 4, 4, 4, 11, -11, -4, 4, -4, -11, 4, -4, -4, 11, 11, -4, 4, 4, -11, 4, 4, -4, 11, -11, 4, -4, -4, 11, -4, -4, 4, -11, 11, 4, -4, 4, 11, -4, 4, 4, -11, -11, -4, -4, -4, -11, -4, -4, -4, -11, 11, -4, -4, 4, -11, -4, 4, -4, -11],
        V.gradients4D = [3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, -3, 1, 1, 1, -1, 3, 1, 1, -1, 1, 3, 1, -1, 1, 1, 3, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3, 1, 1, -1, 1, 3, -3, -1, 1, 1, -1, -3, 1, 1, -1, -1, 3, 1, -1, -1, 1, 3, 3, 1, -1, 1, 1, 3, -1, 1, 1, 1, -3, 1, 1, 1, -1, 3, -3, 1, -1, 1, -1, 3, -1, 1, -1, 1, -3, 1, -1, 1, -1, 3, 3, -1, -1, 1, 1, -3, -1, 1, 1, -1, -3, 1, 1, -1, -1, 3, -3, -1, -1, 1, -1, -3, -1, 1, -1, -1, -3, 1, -1, -1, -1, 3, 3, 1, 1, -1, 1, 3, 1, -1, 1, 1, 3, -1, 1, 1, 1, -3, -3, 1, 1, -1, -1, 3, 1, -1, -1, 1, 3, -1, -1, 1, 1, -3, 3, -1, 1, -1, 1, -3, 1, -1, 1, -1, 3, -1, 1, -1, 1, -3, -3, -1, 1, -1, -1, -3, 1, -1, -1, -1, 3, -1, -1, -1, 1, -3, 3, 1, -1, -1, 1, 3, -1, -1, 1, 1, -3, -1, 1, 1, -1, -3, -3, 1, -1, -1, -1, 3, -1, -1, -1, 1, -3, -1, -1, 1, -1, -3, 3, -1, -1, -1, 1, -3, -1, -1, 1, -1, -3, -1, 1, -1, -1, -3, -3, -1, -1, -1, -1, -3, -1, -1, -1, -1, -3, -1, -1, -1, -1, -3],
        V.lookupPairs2D = [0, 1, 1, 0, 4, 1, 17, 0, 20, 2, 21, 2, 22, 5, 23, 5, 26, 4, 39, 3, 42, 4, 43, 3],
        V.lookupPairs3D = [0, 2, 1, 1, 2, 2, 5, 1, 6, 0, 7, 0, 32, 2, 34, 2, 129, 1, 133, 1, 160, 5, 161, 5, 518, 0, 519, 0, 546, 4, 550, 4, 645, 3, 647, 3, 672, 5, 673, 5, 674, 4, 677, 3, 678, 4, 679, 3, 680, 13, 681, 13, 682, 12, 685, 14, 686, 12, 687, 14, 712, 20, 714, 18, 809, 21, 813, 23, 840, 20, 841, 21, 1198, 19, 1199, 22, 1226, 18, 1230, 19, 1325, 23, 1327, 22, 1352, 15, 1353, 17, 1354, 15, 1357, 17, 1358, 16, 1359, 16, 1360, 11, 1361, 10, 1362, 11, 1365, 10, 1366, 9, 1367, 9, 1392, 11, 1394, 11, 1489, 10, 1493, 10, 1520, 8, 1521, 8, 1878, 9, 1879, 9, 1906, 7, 1910, 7, 2005, 6, 2007, 6, 2032, 8, 2033, 8, 2034, 7, 2037, 6, 2038, 7, 2039, 6],
        V.lookupPairs4D = [0, 3, 1, 2, 2, 3, 5, 2, 6, 1, 7, 1, 8, 3, 9, 2, 10, 3, 13, 2, 16, 3, 18, 3, 22, 1, 23, 1, 24, 3, 26, 3, 33, 2, 37, 2, 38, 1, 39, 1, 41, 2, 45, 2, 54, 1, 55, 1, 56, 0, 57, 0, 58, 0, 59, 0, 60, 0, 61, 0, 62, 0, 63, 0, 256, 3, 258, 3, 264, 3, 266, 3, 272, 3, 274, 3, 280, 3, 282, 3, 2049, 2, 2053, 2, 2057, 2, 2061, 2, 2081, 2, 2085, 2, 2089, 2, 2093, 2, 2304, 9, 2305, 9, 2312, 9, 2313, 9, 16390, 1, 16391, 1, 16406, 1, 16407, 1, 16422, 1, 16423, 1, 16438, 1, 16439, 1, 16642, 8, 16646, 8, 16658, 8, 16662, 8, 18437, 6, 18439, 6, 18469, 6, 18471, 6, 18688, 9, 18689, 9, 18690, 8, 18693, 6, 18694, 8, 18695, 6, 18696, 9, 18697, 9, 18706, 8, 18710, 8, 18725, 6, 18727, 6, 131128, 0, 131129, 0, 131130, 0, 131131, 0, 131132, 0, 131133, 0, 131134, 0, 131135, 0, 131352, 7, 131354, 7, 131384, 7, 131386, 7, 133161, 5, 133165, 5, 133177, 5, 133181, 5, 133376, 9, 133377, 9, 133384, 9, 133385, 9, 133400, 7, 133402, 7, 133417, 5, 133421, 5, 133432, 7, 133433, 5, 133434, 7, 133437, 5, 147510, 4, 147511, 4, 147518, 4, 147519, 4, 147714, 8, 147718, 8, 147730, 8, 147734, 8, 147736, 7, 147738, 7, 147766, 4, 147767, 4, 147768, 7, 147770, 7, 147774, 4, 147775, 4, 149509, 6, 149511, 6, 149541, 6, 149543, 6, 149545, 5, 149549, 5, 149558, 4, 149559, 4, 149561, 5, 149565, 5, 149566, 4, 149567, 4, 149760, 9, 149761, 9, 149762, 8, 149765, 6, 149766, 8, 149767, 6, 149768, 9, 149769, 9, 149778, 8, 149782, 8, 149784, 7, 149786, 7, 149797, 6, 149799, 6, 149801, 5, 149805, 5, 149814, 4, 149815, 4, 149816, 7, 149817, 5, 149818, 7, 149821, 5, 149822, 4, 149823, 4, 149824, 37, 149825, 37, 149826, 36, 149829, 34, 149830, 36, 149831, 34, 149832, 37, 149833, 37, 149842, 36, 149846, 36, 149848, 35, 149850, 35, 149861, 34, 149863, 34, 149865, 33, 149869, 33, 149878, 32, 149879, 32, 149880, 35, 149881, 33, 149882, 35, 149885, 33, 149886, 32, 149887, 32, 150080, 49, 150082, 48, 150088, 49, 150098, 48, 150104, 47, 150106, 47, 151873, 46, 151877, 45, 151881, 46, 151909, 45, 151913, 44, 151917, 44, 152128, 49, 152129, 46, 152136, 49, 152137, 46, 166214, 43, 166215, 42, 166230, 43, 166247, 42, 166262, 41, 166263, 41, 166466, 48, 166470, 43, 166482, 48, 166486, 43, 168261, 45, 168263, 42, 168293, 45, 168295, 42, 168512, 31, 168513, 28, 168514, 31, 168517, 28, 168518, 25, 168519, 25, 280952, 40, 280953, 39, 280954, 40, 280957, 39, 280958, 38, 280959, 38, 281176, 47, 281178, 47, 281208, 40, 281210, 40, 282985, 44, 282989, 44, 283001, 39, 283005, 39, 283208, 30, 283209, 27, 283224, 30, 283241, 27, 283256, 22, 283257, 22, 297334, 41, 297335, 41, 297342, 38, 297343, 38, 297554, 29, 297558, 24, 297562, 29, 297590, 24, 297594, 21, 297598, 21, 299365, 26, 299367, 23, 299373, 26, 299383, 23, 299389, 20, 299391, 20, 299584, 31, 299585, 28, 299586, 31, 299589, 28, 299590, 25, 299591, 25, 299592, 30, 299593, 27, 299602, 29, 299606, 24, 299608, 30, 299610, 29, 299621, 26, 299623, 23, 299625, 27, 299629, 26, 299638, 24, 299639, 23, 299640, 22, 299641, 22, 299642, 21, 299645, 20, 299646, 21, 299647, 20, 299648, 61, 299649, 60, 299650, 61, 299653, 60, 299654, 59, 299655, 59, 299656, 58, 299657, 57, 299666, 55, 299670, 54, 299672, 58, 299674, 55, 299685, 52, 299687, 51, 299689, 57, 299693, 52, 299702, 54, 299703, 51, 299704, 56, 299705, 56, 299706, 53, 299709, 50, 299710, 53, 299711, 50, 299904, 61, 299906, 61, 299912, 58, 299922, 55, 299928, 58, 299930, 55, 301697, 60, 301701, 60, 301705, 57, 301733, 52, 301737, 57, 301741, 52, 301952, 79, 301953, 79, 301960, 76, 301961, 76, 316038, 59, 316039, 59, 316054, 54, 316071, 51, 316086, 54, 316087, 51, 316290, 78, 316294, 78, 316306, 73, 316310, 73, 318085, 77, 318087, 77, 318117, 70, 318119, 70, 318336, 79, 318337, 79, 318338, 78, 318341, 77, 318342, 78, 318343, 77, 430776, 56, 430777, 56, 430778, 53, 430781, 50, 430782, 53, 430783, 50, 431e3, 75, 431002, 72, 431032, 75, 431034, 72, 432809, 74, 432813, 69, 432825, 74, 432829, 69, 433032, 76, 433033, 76, 433048, 75, 433065, 74, 433080, 75, 433081, 74, 447158, 71, 447159, 68, 447166, 71, 447167, 68, 447378, 73, 447382, 73, 447386, 72, 447414, 71, 447418, 72, 447422, 71, 449189, 70, 449191, 70, 449197, 69, 449207, 68, 449213, 69, 449215, 68, 449408, 67, 449409, 67, 449410, 66, 449413, 64, 449414, 66, 449415, 64, 449416, 67, 449417, 67, 449426, 66, 449430, 66, 449432, 65, 449434, 65, 449445, 64, 449447, 64, 449449, 63, 449453, 63, 449462, 62, 449463, 62, 449464, 65, 449465, 63, 449466, 65, 449469, 63, 449470, 62, 449471, 62, 449472, 19, 449473, 19, 449474, 18, 449477, 16, 449478, 18, 449479, 16, 449480, 19, 449481, 19, 449490, 18, 449494, 18, 449496, 17, 449498, 17, 449509, 16, 449511, 16, 449513, 15, 449517, 15, 449526, 14, 449527, 14, 449528, 17, 449529, 15, 449530, 17, 449533, 15, 449534, 14, 449535, 14, 449728, 19, 449729, 19, 449730, 18, 449734, 18, 449736, 19, 449737, 19, 449746, 18, 449750, 18, 449752, 17, 449754, 17, 449784, 17, 449786, 17, 451520, 19, 451521, 19, 451525, 16, 451527, 16, 451528, 19, 451529, 19, 451557, 16, 451559, 16, 451561, 15, 451565, 15, 451577, 15, 451581, 15, 451776, 19, 451777, 19, 451784, 19, 451785, 19, 465858, 18, 465861, 16, 465862, 18, 465863, 16, 465874, 18, 465878, 18, 465893, 16, 465895, 16, 465910, 14, 465911, 14, 465918, 14, 465919, 14, 466114, 18, 466118, 18, 466130, 18, 466134, 18, 467909, 16, 467911, 16, 467941, 16, 467943, 16, 468160, 13, 468161, 13, 468162, 13, 468163, 13, 468164, 13, 468165, 13, 468166, 13, 468167, 13, 580568, 17, 580570, 17, 580585, 15, 580589, 15, 580598, 14, 580599, 14, 580600, 17, 580601, 15, 580602, 17, 580605, 15, 580606, 14, 580607, 14, 580824, 17, 580826, 17, 580856, 17, 580858, 17, 582633, 15, 582637, 15, 582649, 15, 582653, 15, 582856, 12, 582857, 12, 582872, 12, 582873, 12, 582888, 12, 582889, 12, 582904, 12, 582905, 12, 596982, 14, 596983, 14, 596990, 14, 596991, 14, 597202, 11, 597206, 11, 597210, 11, 597214, 11, 597234, 11, 597238, 11, 597242, 11, 597246, 11, 599013, 10, 599015, 10, 599021, 10, 599023, 10, 599029, 10, 599031, 10, 599037, 10, 599039, 10, 599232, 13, 599233, 13, 599234, 13, 599235, 13, 599236, 13, 599237, 13, 599238, 13, 599239, 13, 599240, 12, 599241, 12, 599250, 11, 599254, 11, 599256, 12, 599257, 12, 599258, 11, 599262, 11, 599269, 10, 599271, 10, 599272, 12, 599273, 12, 599277, 10, 599279, 10, 599282, 11, 599285, 10, 599286, 11, 599287, 10, 599288, 12, 599289, 12, 599290, 11, 599293, 10, 599294, 11, 599295, 10],
        V.p2D = [0, 0, 1, -1, 0, 0, -1, 1, 0, 2, 1, 1, 1, 2, 2, 0, 1, 2, 0, 2, 1, 0, 0, 0],
        V.p3D = [0, 0, 1, -1, 0, 0, 1, 0, -1, 0, 0, -1, 1, 0, 0, 0, 1, -1, 0, 0, -1, 0, 1, 0, 0, -1, 1, 0, 2, 1, 1, 0, 1, 1, 1, -1, 0, 2, 1, 0, 1, 1, 1, -1, 1, 0, 2, 0, 1, 1, 1, -1, 1, 1, 1, 3, 2, 1, 0, 3, 1, 2, 0, 1, 3, 2, 0, 1, 3, 1, 0, 2, 1, 3, 0, 2, 1, 3, 0, 1, 2, 1, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 0, 1, 0, 2, 0, 2, 0, 1, 1, 0, 0, 1, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, -1, 1, 2, 0, 0, 0, 0, 1, -1, 1, 1, 2, 0, 0, 0, 0, 1, 1, 1, -1, 2, 3, 1, 1, 1, 2, 0, 0, 2, 2, 3, 1, 1, 1, 2, 2, 0, 0, 2, 3, 1, 1, 1, 2, 0, 2, 0, 2, 1, 1, -1, 1, 2, 0, 0, 2, 2, 1, 1, -1, 1, 2, 2, 0, 0, 2, 1, -1, 1, 1, 2, 0, 0, 2, 2, 1, -1, 1, 1, 2, 0, 2, 0, 2, 1, 1, 1, -1, 2, 2, 0, 0, 2, 1, 1, 1, -1, 2, 0, 2, 0],
        V.p4D = [0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 1, 0, -1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 2, 1, 1, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 0, 2, 1, 0, 1, 0, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 0, 2, 0, 1, 1, 0, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 0, 2, 1, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 0, 2, 0, 1, 0, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 0, 2, 0, 0, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 1, 4, 2, 1, 1, 0, 4, 1, 2, 1, 0, 4, 1, 1, 2, 0, 1, 4, 2, 1, 0, 1, 4, 1, 2, 0, 1, 4, 1, 1, 0, 2, 1, 4, 2, 0, 1, 1, 4, 1, 0, 2, 1, 4, 1, 0, 1, 2, 1, 4, 0, 2, 1, 1, 4, 0, 1, 2, 1, 4, 0, 1, 1, 2, 1, 2, 1, 1, 0, 0, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 1, 2, 1, 0, 1, 0, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 1, 2, 0, 1, 1, 0, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 1, 2, 1, 0, 0, 1, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 1, 2, 0, 1, 0, 1, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 1, 2, 0, 0, 1, 1, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 2, 0, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 2, 0, 0, 0, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 2, 0, 0, 0, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 0, 2, 0, 0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 2, 0, 0, 2, 3, 1, 1, 1, 0, 2, 1, 1, 1, -1, 2, 0, 0, 2, 0, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 0, 0, 2, 0, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 0, 2, 0, 2, 3, 1, 1, 0, 1, 2, 1, 1, -1, 1, 2, 0, 0, 0, 2, 2, 3, 1, 0, 1, 1, 2, 1, -1, 1, 1, 2, 0, 0, 0, 2, 2, 3, 0, 1, 1, 1, 2, -1, 1, 1, 1, 2, 0, 0, 0, 2, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 0, 0, 0, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 0, 0, 0, 0, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 0, 0, 0, 0, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 0, 0, 0, 0, 0, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 0, 0, 0, 0, 0, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 0, 0, 0, 0, 0, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 2, 2, 0, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 2, 2, 0, 0, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 2, 0, 0, 0, 2, 1, 1, 1, -1, 0, 1, 1, 1, 0, -1, 2, 0, 2, 0, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 2, 0, 2, 0, 0, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 2, 0, 2, 0, 0, 2, 1, 1, -1, 1, 0, 1, 1, 0, 1, -1, 2, 0, 0, 2, 0, 2, 1, -1, 1, 1, 0, 1, 0, 1, 1, -1, 2, 0, 0, 2, 0, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 2, 0, 0, 2, 0, 2, 1, 1, -1, 0, 1, 1, 1, 0, -1, 1, 2, 0, 0, 0, 2, 2, 1, -1, 1, 0, 1, 1, 0, 1, -1, 1, 2, 0, 0, 0, 2, 2, 1, -1, 0, 1, 1, 1, 0, -1, 1, 1, 2, 0, 0, 0, 2, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, 1, 1, -1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, 1, -1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 1, 1, 1, -1, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, 1, -1, 1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, 1, 1, -1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, 1, 1, -1, 1, 3, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 1, -1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, 1, -1, 1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, 1, -1, 1, 1, 3, 1, 0, 1, 0, 0, 2, 0, 2, 0, 0, 2, -1, 1, 1, 1, 3, 1, 0, 0, 1, 0, 2, 0, 0, 2, 0, 2, -1, 1, 1, 1, 3, 1, 0, 0, 0, 1, 2, 0, 0, 0, 2, 2, -1, 1, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 4, 1, 1, 1, 1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 4, 1, 1, 1, 1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 4, 1, 1, 1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 4, 1, 1, 1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 4, 1, 1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 4, 1, 1, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 2, 1, 1, 1, -1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 2, 1, 1, 1, -1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 2, 1, 1, 1, -1, 3, 3, 2, 1, 0, 0, 3, 1, 2, 0, 0, 2, 1, 1, -1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, 1, -1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 2, 1, 1, -1, 1, 3, 3, 2, 0, 1, 0, 3, 1, 0, 2, 0, 2, 1, -1, 1, 1, 3, 3, 2, 0, 0, 1, 3, 1, 0, 0, 2, 2, 1, -1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, 1, -1, 1, 1, 3, 3, 0, 2, 1, 0, 3, 0, 1, 2, 0, 2, -1, 1, 1, 1, 3, 3, 0, 2, 0, 1, 3, 0, 1, 0, 2, 2, -1, 1, 1, 1, 3, 3, 0, 0, 2, 1, 3, 0, 0, 1, 2, 2, -1, 1, 1, 1];
        for (var a = [], l = 0; l < V.p2D.length; l += 4) {
            for (var s = V.base2D[V.p2D[l]], c = null, d = null, u = 0; u < s.length; u += 3)
                d = new n(s[u],s[u + 1],s[u + 2]),
                null === c ? a[l / 4] = d : c.next = d,
                c = d;
            d.next = new n(V.p2D[l + 1],V.p2D[l + 2],V.p2D[l + 3])
        }
        this.lookup2D = [];
        for (l = 0; l < V.lookupPairs2D.length; l += 2)
            this.lookup2D[V.lookupPairs2D[l]] = a[V.lookupPairs2D[l + 1]];
        var h = [];
        for (l = 0; l < V.p3D.length; l += 9) {
            for (s = V.base3D[V.p3D[l]],
            c = null,
            d = null,
            u = 0; u < s.length; u += 4)
                d = new r(s[u],s[u + 1],s[u + 2],s[u + 3]),
                null === c ? h[l / 9] = d : c.next = d,
                c = d;
            d.next = new r(V.p3D[l + 1],V.p3D[l + 2],V.p3D[l + 3],V.p3D[l + 4]),
            d.next.next = new r(V.p3D[l + 5],V.p3D[l + 6],V.p3D[l + 7],V.p3D[l + 8])
        }
        this.lookup3D = [];
        for (l = 0; l < V.lookupPairs3D.length; l += 2)
            this.lookup3D[V.lookupPairs3D[l]] = h[V.lookupPairs3D[l + 1]];
        var g = [];
        for (l = 0; l < V.p4D.length; l += 16) {
            for (s = V.base4D[V.p4D[l]],
            c = null,
            d = null,
            u = 0; u < s.length; u += 5)
                d = new i(s[u],s[u + 1],s[u + 2],s[u + 3],s[u + 4]),
                null === c ? g[l / 16] = d : c.next = d,
                c = d;
            d.next = new i(V.p4D[l + 1],V.p4D[l + 2],V.p4D[l + 3],V.p4D[l + 4],V.p4D[l + 5]),
            d.next.next = new i(V.p4D[l + 6],V.p4D[l + 7],V.p4D[l + 8],V.p4D[l + 9],V.p4D[l + 10]),
            d.next.next.next = new i(V.p4D[l + 11],V.p4D[l + 12],V.p4D[l + 13],V.p4D[l + 14],V.p4D[l + 15])
        }
        this.lookup4D = [];
        for (l = 0; l < V.lookupPairs4D.length; l += 2)
            this.lookup4D[V.lookupPairs4D[l]] = g[V.lookupPairs4D[l + 1]];
        this.perm = new Uint8Array(256),
        this.perm2D = new Uint8Array(256),
        this.perm3D = new Uint8Array(256),
        this.perm4D = new Uint8Array(256);
        var p = new Uint8Array(256);
        for (l = 0; l < 256; l++)
            p[l] = l;
        (e = new Uint32Array(1))[0] = t,
        e = o(o(o(e)));
        for (l = 255; 0 <= l; l--) {
            e = o(e);
            var f = new Uint32Array(1);
            f[0] = (e[0] + 31) % (l + 1),
            f[0] < 0 && (f[0] += l + 1),
            this.perm[l] = p[f[0]],
            this.perm2D[l] = 14 & this.perm[l],
            this.perm3D[l] = this.perm[l] % 24 * 3,
            this.perm4D[l] = 252 & this.perm[l],
            p[f[0]] = p[l]
        }
        this.simplex1D = function(e) {
            return H.simplex2D(e, 1)
        }
        ,
        this.simplex2D = function(e, t) {
            var o = (e + t) * V.STRETCH_2D
              , n = [e + o, t + o]
              , r = n[0]
              , i = n[1]
              , a = [Math.floor(r), Math.floor(i)]
              , l = a[0]
              , s = a[1]
              , c = (l + s) * V.SQUISH_2D
              , d = [e - (l + c), t - (s + c)]
              , u = d[0]
              , h = d[1]
              , g = [r - l, i - s]
              , p = g[0]
              , f = g[1]
              , m = p + f
              , z = new Uint32Array(4);
            z[0] = p - f + 1,
            z[1] = m,
            z[2] = m + f,
            z[3] = m + p;
            for (var v = z[0] | z[1] << 1 | z[2] << 2 | z[3] << 4, y = H.lookup2D[v], b = 0; void 0 !== y; ) {
                var w = [u + y.dx, h + y.dy]
                  , x = w[0]
                  , C = w[1]
                  , k = 2 - x * x - C * C;
                if (0 < k) {
                    var T = [l + y.xsb, s + y.ysb]
                      , A = T[0]
                      , B = T[1]
                      , S = H.perm2D[H.perm[255 & A] + B & 255];
                    b += (k *= k) * k * (V.gradients2D[S] * x + V.gradients2D[S + 1] * C)
                }
                y = y.next
            }
            return b * V.NORM_2D
        }
        ,
        this.simplex3D = function(e, t, o) {
            var n = (e + t + o) * V.STRETCH_3D
              , r = [e + n, t + n, o + n]
              , i = r[0]
              , a = r[1]
              , l = r[2]
              , s = [Math.floor(i), Math.floor(a), Math.floor(l)]
              , c = s[0]
              , d = s[1]
              , u = s[2]
              , h = (c + d + u) * V.SQUISH_3D
              , g = [e - (c + h), t - (d + h), o - (u + h)]
              , p = g[0]
              , f = g[1]
              , m = g[2]
              , z = [i - c, a - d, l - u]
              , v = z[0]
              , y = z[1]
              , b = z[2]
              , w = v + y + b
              , x = new Uint32Array(7);
            x[0] = y - b + 1,
            x[1] = v - y + 1,
            x[2] = v - b + 1,
            x[3] = w,
            x[4] = w + b,
            x[5] = w + y,
            x[6] = w + v;
            for (var C = x[0] | x[1] << 1 | x[2] << 2 | x[3] << 3 | x[4] << 5 | x[5] << 7 | x[6] << 9, k = H.lookup3D[C], T = 0; void 0 !== k; ) {
                var A = [p + k.dx, f + k.dy, m + k.dz]
                  , B = A[0]
                  , S = A[1]
                  , P = A[2]
                  , E = 2 - B * B - S * S - P * P;
                if (0 < E) {
                    var M = [c + k.xsb, d + k.ysb, u + k.zsb]
                      , I = M[0]
                      , j = M[1]
                      , O = M[2]
                      , Y = H.perm3D[H.perm[H.perm[255 & I] + j & 255] + O & 255];
                    T += (E *= E) * E * (V.gradients3D[Y] * B + V.gradients3D[Y + 1] * S + V.gradients3D[Y + 2] * P)
                }
                k = k.next
            }
            return T * V.NORM_3D
        }
        ,
        this.simplex4D = function(e, t, o, n) {
            var r = (e + t + o + n) * V.STRETCH_4D
              , i = [e + r, t + r, o + r, n + r]
              , a = i[0]
              , l = i[1]
              , s = i[2]
              , c = i[3]
              , d = [Math.floor(a), Math.floor(l), Math.floor(s), Math.floor(c)]
              , u = d[0]
              , h = d[1]
              , g = d[2]
              , p = d[3]
              , f = (u + h + g + p) * V.SQUISH_4D
              , m = e - (u + f)
              , z = t - (h + f)
              , v = o - (g + f)
              , y = n - (p + f)
              , b = [a - u, l - h, s - g, c - p]
              , w = b[0]
              , x = b[1]
              , C = b[2]
              , k = b[3]
              , T = w + x + C + k
              , A = new Uint32Array(11);
            A[0] = C - k + 1,
            A[1] = x - C + 1,
            A[2] = x - k + 1,
            A[3] = w - x + 1,
            A[4] = w - C + 1,
            A[5] = w - k + 1,
            A[6] = T << 6,
            A[7] = T + k,
            A[8] = T + C,
            A[9] = T + x,
            A[10] = T + w;
            for (var B = A[0] | A[1] << 1 | A[2] << 2 | A[3] << 3 | A[4] << 4 | A[5] << 5 | A[6] << 6 | A[7] << 8 | A[8] << 11 | A[9] << 14 | A[10] << 17, S = H.lookup4D[B], P = 0; void 0 !== S; ) {
                var E = [m + S.dx, z + S.dy, v + S.dz, y + S.dw]
                  , M = E[0]
                  , I = E[1]
                  , j = E[2]
                  , O = E[3]
                  , Y = 2 - M * M - I * I - j * j - O * O;
                if (0 < Y) {
                    var L = [u + S.xsb, h + S.ysb, g + S.zsb, p + S.wsb]
                      , D = L[0]
                      , X = L[1]
                      , R = L[2]
                      , _ = L[3]
                      , W = H.perm4D[H.perm[H.perm[H.perm[255 & D] + X & 255] + R & 255] + _ & 255];
                    P += (Y *= Y) * Y * (V.gradients4D[W] * M + V.gradients4D[W + 1] * I + V.gradients4D[W + 2] * j + V.gradients4D[W + 3] * O)
                }
                S = S.next
            }
            return P * V.NORM_4D
        }
    }
    ,
    kt.Point = function(e, t, o, n) {
        z_d("13.45"),
        zot(e) && (e = 0),
        zot(t) && (t = 0),
        zot(o) && (o = 0),
        zot(n) && (n = 0),
        this.x = e,
        this.y = t,
        this.z = o,
        this.w = n
    }
    ,
    kt.Boundary = function(e, t, o, n) {
        z_d("13.46"),
        zot(e) || zot(t) || zot(o) || zot(n) || (this.x = e,
        this.y = t,
        this.width = o,
        this.height = n,
        this.contract = function(e, t, o, n) {
            return zot(e) || (zot(t) && (t = e),
            zot(o) ? o = 2 * e : o += e,
            zot(n) ? n = 2 * t : n += t,
            this.x += e,
            this.y += t,
            this.width -= o,
            this.height -= n),
            this
        }
        )
    }
    ,
    kt.Damp = function(e, t) {
        z_d("14");
        var o;
        if (o = zob(kt.Damp, arguments, "startValue, damp", this))
            return o;
        this.lastValue = zot(e) ? 0 : e,
        this.damp = zot(t) ? .1 : t
    }
    ,
    kt.Damp.prototype.convert = function(e) {
        return this.lastValue = this.lastValue + (e - this.lastValue) * this.damp
    }
    ,
    kt.Damp.prototype.immediate = function(e) {
        return this.lastValue = e,
        this
    }
    ,
    kt.Proportion = function(t, o, n, r, i, a) {
        var e, l, s;
        if (e = zob(kt.Proportion, arguments, "baseMin, baseMax, targetMin, targetMax, factor, targetRound", this))
            return e;
        z_d("15"),
        zot(n) && (n = 0),
        zot(r) && (r = 1),
        zot(i) && (i = 1),
        zot(a) && (a = !1),
        this.convert = function(e) {
            if (!isNaN(e))
                return e = Math.max(e, t),
                e = Math.min(e, o),
                l = (e - t) / (o - t),
                s = 0 < i ? n + (r - n) * l : r - (r - n) * l,
                a && (s = Math.round(s)),
                s
        }
    }
    ,
    kt.ProportionDamp = function(e, t, o, n, r, i, a) {
        var l;
        if (l = zob(kt.ProportionDamp, arguments, "baseMin, baseMax, targetMin, targetMax, damp, factor, targetRound", this))
            return l;
        z_d("16"),
        zot(o) && (o = 0),
        zot(n) && (n = 1),
        zot(r) && (r = .1),
        zot(i) && (i = 1),
        zot(a) && (a = !1),
        this.damp = r;
        var s, c, d, u, h = this, g = 0;
        s = e,
        g = o;
        var p = setInterval(f, 20);
        function f() {
            isNaN(s) || (s = Math.max(s, e),
            s = Math.min(s, t),
            c = (s - e) / (t - e),
            d = n - o,
            g += ((u = 0 < i ? o + d * c : n - d * c) - g) * h.damp)
        }
        this.immediate = function(e) {
            return h.convert(e),
            f(),
            g = u,
            a && (g = Math.round(g)),
            h
        }
        ,
        this.convert = function(e) {
            return s = e,
            a ? Math.round(g) : g
        }
        ,
        this.dispose = function() {
            return clearInterval(p),
            !0
        }
    }
    ,
    kt.Dictionary = function(e) {
        z_d("17"),
        this.length = 0,
        this.unique = e;
        var o = this.objects = []
          , n = this.values = [];
        this.add = function(e, t) {
            zot(e) || (zot(t) && (t = !0),
            this.unique && this.remove(e),
            o.push(e),
            n.push(t),
            this.length++)
        }
        ,
        this.at = function(e) {
            if (!zot(e)) {
                var t = o.indexOf(e);
                return -1 < t ? n[t] : null
            }
        }
        ,
        this.remove = function(e) {
            if (zot(e))
                return !1;
            var t = o.indexOf(e);
            return -1 < t && (o.splice(t, 1),
            n.splice(t, 1),
            this.length--,
            !0)
        }
        ,
        this.clear = function() {
            return o = this.objects = [],
            n = this.values = [],
            this.length = null,
            this
        }
        ,
        this.dispose = function() {
            return n = o = null,
            !(this.length = null)
        }
    }
    ,
    kt.scrollX = function(e, t) {
        return z_d("18"),
        kt.abstractScroll("X", "Left", e, t)
    }
    ,
    kt.scrollY = function(e, t) {
        return z_d("19"),
        kt.abstractScroll("Y", "Top", e, t)
    }
    ,
    kt.abstractScroll = function(e, t, o, n) {
        z_d("20");
        var r = "X" == e ? "Y" : "X";
        if (zot(o)) {
            var i = navigator.applicationName;
            if (-1 != navigator.userAgent.indexOf("Safari") || "Safari" == i)
                ;return document.documentElement && document.documentElement["scroll" + t] || document.body["scroll" + t]
        }
        if (zot(n))
            window.scrollTo(kt["scroll" + r](), o);
        else {
            n < 50 && (n = 50);
            var a = n / 50
              , l = kt["scroll" + e]()
              , s = (o - l) / a
              , c = 0
              , d = setInterval(function() {
                c++,
                l += s,
                window.scrollTo(kt["scroll" + r](), l),
                a <= c && (window.scrollTo(kt["scroll" + r](), o),
                clearInterval(d))
            }, 50)
        }
        return o
    }
    ,
    kt.windowWidth = function() {
        return z_d("21"),
        isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth
    }
    ,
    kt.windowHeight = function() {
        return z_d("22"),
        isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight
    }
    ,
    kt.getQueryString = function(e) {
        if (z_d("22.5"),
        zot(e) && (e = location.search.replace("?", "")),
        "" != e) {
            for (var t = e.split("&"), o = {}, n = 0; n < t.length; n++) {
                var r = t[n].split("=");
                void 0 === o[r[0]] ? o[r[0]] = decodeURIComponent((r[1] + "").replace(/\+/g, "%20")) : "string" == typeof o[r[0]] ? o[r[0]] = [o[r[0]], decodeURIComponent((r[1] + "").replace(/\+/g, "%20"))] : o[r[0]].push(decodeURIComponent((r[1] + "").replace(/\+/g, "%20")))
            }
            return o
        }
    }
    ,
    kt.swapHTML = function(e, t) {
        return z_d("17.2"),
        kt.swapProperties("innerHTML", zid(e), zid(t))
    }
    ,
    kt.urlEncode = function(e) {
        z_d("23");
        e = (e + "").toString();
        return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
    }
    ,
    kt.urlDecode = function(e) {
        return z_d("24"),
        decodeURIComponent((e + "").replace(/\+/g, "%20"))
    }
    ,
    kt.setCookie = function(e, t, o) {
        if (z_d("25"),
        !zot(e) && !zot(t)) {
            if (o) {
                var n = new Date;
                n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3);
                var r = "; expires=" + n.toGMTString()
            } else
                r = "";
            return document.cookie = e + "=" + escape(t) + r + "; path=/",
            !0
        }
    }
    ,
    kt.getCookie = function(e) {
        z_d("26");
        var t, o = document.cookie.split(/;\s*/), n = new Array;
        for (l = 0; l < o.length; l++)
            n[(t = o[l].split("="))[0]] = t[1];
        if (void 0 !== n[e])
            return unescape(n[e])
    }
    ,
    kt.deleteCookie = function(e) {
        return z_d("27"),
        !zot(kt.getCookie(e)) && (kt.setCookie(e, "", -1),
        !0)
    }
    ,
    "undefined" == typeof createjs)
        return zon && zog("ZIM >= 4.3.0 requires createjs namespace to be loaded (import createjs before zim)"),
        kt;
    function Se(e, t) {
        t ? (e.mouseChildren = !0,
        e.mouseEnabled = !0,
        e._enabled = !0) : (e.mouseChildren = !1,
        e.mouseEnabled = !1,
        e._enabled = !1)
    }
    kt.Stage = function(e) {
        z_d("50.44"),
        this.cjsStage_constructor(e),
        this.type = "Stage",
        this.cache = function(e, t, o, n, r, i) {
            if (zot(o))
                if (zot(e)) {
                    var a = this.getBounds();
                    if (!zot(a)) {
                        var l = 0 < this.borderWidth ? this.borderWidth / 2 : 0;
                        e = a.x - l,
                        t = a.y - l,
                        o = a.width + 2 * l,
                        n = a.height + 2 * l
                    }
                } else
                    o = e,
                    n = t,
                    t = e = 0;
            return this.cjsStage_cache(e, t, o, n, r, i),
            this
        }
        ,
        this.loop = function(e, t, o, n, r) {
            return kt.loop(this, e, t, o, n, r)
        }
        ,
        this.hitTestGrid = function(e, t, o, n, r, i, a, l, s, c, d, u) {
            return kt.hitTestGrid(this, e, t, o, n, r, i, a, l, s, c, d, u)
        }
    }
    ,
    kt.extend(kt.Stage, createjs.Stage, ["cache"], "cjsStage", !1),
    kt.StageGL = function(e, t) {
        z_d("50.45"),
        this.cjsStageGL_constructor(e, t),
        this.type = "StageGL",
        this.cache = function(e, t, o, n, r, i) {
            if (zot(o))
                if (zot(e)) {
                    var a = this.getBounds();
                    if (!zot(a)) {
                        var l = 0 < this.borderWidth ? this.borderWidth / 2 : 0;
                        e = a.x - l,
                        t = a.y - l,
                        o = a.width + 2 * l,
                        n = a.height + 2 * l
                    }
                } else
                    o = e,
                    n = t,
                    t = e = 0;
            return this.cjsStageGL_cache(e, t, o, n, r, i),
            this
        }
        ,
        this.loop = function(e, t, o, n, r) {
            return kt.loop(this, e, t, o, n, r)
        }
        ,
        this.hitTestGrid = function(e, t, o, n, r, i, a, l, s, c, d, u) {
            return kt.hitTestGrid(this, e, t, o, n, r, i, a, l, s, c, d, u)
        }
    }
    ,
    kt.extend(kt.StageGL, createjs.StageGL, ["cache"], "cjsStageGL", !1),
    kt.containerCheck = !1,
    kt.Container = function(e, t, o, n, r, i, a) {
        var l;
        if (l = zob(kt.Container, arguments, "a, b, c, d, style, group, inherit", this))
            return l;
        kt.containerCheck || (z_d("50.5"),
        kt.containerCheck = !0),
        this.cjsContainer_constructor(),
        this.type = "Container",
        this.group = i;
        var s = !1 === r ? {} : kt.getStyle(this.type, this.group, a);
        zot(e) && (e = null != s.a ? s.a : null),
        zot(t) && (t = null != s.b ? s.b : null),
        zot(o) && (o = null != s.c ? s.c : null),
        zot(n) && (n = null != s.d ? s.d : null);
        var c = d(e, t, o, n);
        function d(e, t, o, n) {
            var r = [];
            return zot(e) ? r = [e, t, o, n] : zot(o) ? (r[0] = 0,
            r[2] = e,
            r[1] = 0,
            r[3] = t) : (r[0] = e,
            r[2] = o,
            r[1] = t,
            r[3] = n),
            zot(r[3]) && (r[3] = r[2]),
            r
        }
        zot(e) || this.setBounds(c[0], c[1], c[2], c[3]),
        this.cache = function(e, t, o, n, r, i) {
            var a = this.getBounds();
            if (zot(o))
                if (zot(e)) {
                    if (!zot(a)) {
                        var l = 0 < this.borderWidth ? this.borderWidth / 2 : 0;
                        e = a.x - l,
                        t = a.y - l,
                        o = a.width + 2 * l,
                        n = a.height + 2 * l
                    }
                } else
                    o = e,
                    n = t,
                    t = e = 0;
            return this.cjsContainer_cache(e, t, o, n, r, i),
            a && this.setBounds(a.x, a.y, a.width, a.height),
            this
        }
        ,
        !(this.setBounds = function(e, t, o, n) {
            var r = d(e, t, o, n);
            return this.cjsContainer_setBounds(r[0], r[1], r[2], r[3]),
            this
        }
        ) !== r && Me(this, s),
        this.clone = function() {
            var e = this.getBounds();
            return zot(e) && (e = {
                x: null,
                y: null,
                width: null,
                height: null
            }),
            this.cloneChildren(this.cloneProps(new kt.Container(e.x,e.y,e.width,e.height,r,this.group,a)))
        }
        ,
        this.hasProp = function(e) {
            return !zot(this[e]) || this.hasOwnProperty(e)
        }
    }
    ,
    kt.Container.prototype.dispose = function() {
        return function e(t) {
            t.removeAllEventListeners();
            if (t.numChildren)
                for (var o = t.numChildren - 1; 0 <= o; o--)
                    e(t.getChildAt(o));
            t.parent && t.parent.removeChild(t)
        }(this),
        !0
    }
    ,
    zimify(kt.Container.prototype),
    kt.extend(kt.Container, createjs.Container, ["cache", "setBounds", "clone"], "cjsContainer", !1),
    kt.Shape = function(e, t, o, n, r, i, a, l) {
        var s;
        if (s = zob(kt.Shape, arguments, "a, b, c, d, graphics, style, group, inherit", this))
            return s;
        z_d("50.6"),
        this.cjsShape_constructor(r),
        this.type = "Shape",
        this.group = a;
        var c = !1 === i ? {} : kt.getStyle(this.type, this.group, l)
          , d = this;
        zot(e) && (e = null != c.a ? c.a : null),
        zot(t) && (t = null != c.b ? c.b : null),
        zot(o) && (o = null != c.c ? c.c : null),
        zot(n) && (n = null != c.d ? c.d : null);
        var u = h(e, t, o, n);
        function h(e, t, o, n) {
            var r = [];
            return zot(o) ? (r[0] = 0,
            r[2] = e,
            r[1] = 0,
            r[3] = t) : (r[0] = e,
            r[2] = o,
            r[1] = t,
            r[3] = n),
            zot(r[3]) && (r[3] = r[2]),
            r
        }
        zot(e) || this.setBounds(u[0], u[1], u[2], u[3]),
        this.cache = function(e, t, o, n, r, i) {
            if (zot(o))
                if (zot(e)) {
                    var a = this.getBounds();
                    if (!zot(a)) {
                        var l = 0 < this.borderWidth ? this.borderWidth / 2 : 0;
                        e = a.x - l,
                        t = a.y - l,
                        o = a.width + 2 * l,
                        n = a.height + 2 * l
                    }
                } else
                    o = e,
                    n = t,
                    t = e = 0;
            return this.cjsShape_cache(e, t, o, n, r, i),
            this
        }
        ,
        !(this.setBounds = function(e, t, o, n) {
            var r = h(e, t, o, n);
            return this.cjsShape_setBounds(r[0], r[1], r[2], r[3]),
            this
        }
        ) !== i && Me(this, c),
        this.clone = function(e) {
            zot(e) && (e = !0);
            var t = this.getBounds();
            zot(t) && (t = {
                x: null,
                y: null,
                width: null,
                height: null
            });
            var o = d.cloneProps(new kt.Shape(t.x,t.y,t.width,t.height,r,i,a,l));
            return o.graphics = e ? d.graphics.clone() : d.graphics,
            o
        }
        ,
        this.hasProp = function(e) {
            return !zot(this[e]) || this.hasOwnProperty(e)
        }
        ,
        this.dispose = function() {
            this.graphics.c(),
            this.removeAllEventListeners(),
            this.parent && this.parent.removeChild(this)
        }
    }
    ,
    kt.extend(kt.Shape, createjs.Shape, ["cache", "clone", "setBounds"], "cjsShape", !1),
    zimify(kt.Shape.prototype),
    kt.Bitmap = function(l, s, c, e, t, o, n) {
        var r;
        if (r = zob(kt.Bitmap, arguments, "image, width, height, id, style, group, inherit", this))
            return r;
        z_d("50.7"),
        this.cjsBitmap_constructor(l);
        var d = this;
        this.type = "Bitmap",
        this.group = o;
        var i = !1 === t ? {} : kt.getStyle(this.type, this.group, n);
        this.id = d.fileID = null != i.id ? i.id : e,
        zot(s) && (s = null != i.width ? i.width : null),
        zot(c) && (c = null != i.height ? i.height : null),
        zot(s) || zot(c) || d.setBounds(0, 0, s, c),
        zot(s) && (s = 100),
        zot(c) && (c = 100),
        Tt && (Tt.canvas.getContext("2d") ? this.imageData = Tt.canvas.getContext("2d").createImageData(s, c) : this.imageData = document.createElement("canvas").getContext("2d").createImageData(s, c),
        this.drawImageData = function(e, t, o, n, r, i) {
            if (zot(e) && (e = 0),
            zot(t) && (t = 0),
            zot(o) && (o = 0),
            zot(n) && (n = 0),
            zot(r) && (r = s),
            zot(i) && (i = c),
            !d.proxyCanvas) {
                var a = d.proxyCanvas = document.createElement("canvas");
                a.setAttribute("width", s),
                a.setAttribute("height", c),
                d.proxyContext = a.getContext("2d"),
                l = d.image = a
            }
            d.proxyContext && d.proxyContext.putImageData(d.imageData, e, t, o, n, r, i)
        }
        ,
        zot(l) && d.drawImageData(),
        l.match && l.match(/data:image/i) && setTimeout(function() {
            d.stage && d.stage.update(),
            setTimeout(function() {
                d.stage && d.stage.update()
            }, 50)
        }, 50)),
        !(this.cache = function(e, t, o, n, r, i) {
            if (zot(o))
                if (zot(e)) {
                    if (!zot(l = this.getBounds())) {
                        var a = 0 < this.borderWidth ? this.borderWidth / 2 : 0;
                        e = l.x - a,
                        t = l.y - a,
                        o = l.width + 2 * a,
                        n = l.height + 2 * a
                    }
                } else
                    o = e,
                    n = t,
                    t = e = 0;
            var l = this.getBounds();
            return this.cjsBitmap_cache(e, t, o, n, r, i),
            this.setBounds(l.x, l.y, l.width, l.height),
            this
        }
        ) !== t && Me(this, i),
        this.clone = function() {
            return this.cloneProps(new kt.Bitmap(l,d.width,d.height,d.fileID,t,this.group,n))
        }
        ,
        this.hasProp = function(e) {
            return !zot(this[e]) || this.hasOwnProperty(e)
        }
        ,
        this.dispose = function() {
            this.removeAllEventListeners(),
            this.parent && this.parent.removeChild(this)
        }
    }
    ,
    kt.Bitmap.fromData = function(e, t) {
        var o = new kt.Bitmap(e);
        setTimeout(function() {
            t(o)
        }, 50)
    }
    ,
    kt.extend(kt.Bitmap, createjs.Bitmap, ["cache", "clone"], "cjsBitmap", !1),
    zimify(kt.Bitmap.prototype),
    kt.Sprite = function(e, t, o, n, r, i, a, l, s, c, d, u, h, g, p, f, m, z) {
        var v;
        if (v = zob(kt.Sprite, arguments, "image, cols, rows, count, offsetX, offsetY, spacingX, spacingY, width, height, animations, json, id, globalControl, spriteSheet, style, group, inherit", this))
            return v;
        z_d("50.8"),
        this.type = "Sprite",
        this.group = m;
        var y, b = !1 === f ? {} : kt.getStyle(this.type, this.group, z), O = this;
        if (zot(u) && !zot(e)) {
            zot(t) && (t = null != b.cols ? b.cols : 1),
            zot(o) && (o = null != b.rows ? b.rows : 1),
            zot(n) && (n = null != b.count ? b.count : t * o),
            zot(r) && (r = null != b.offsetX ? b.offsetX : 0),
            zot(i) && (i = null != b.offsetY ? b.offsetY : 0),
            zot(a) && (a = null != b.spacingX ? b.spacingX : 0),
            zot(l) && (l = null != b.spacingY ? b.spacingY : 0),
            zot(s) && (s = null != b.width ? b.width : e.width),
            zot(c) && (c = null != b.height ? b.height : e.height);
            var w = (s - r + a) / t - a
              , x = (c - i + l) / o - l
              , C = []
              , k = 0;
            e: for (var T = 0; T < o; T++)
                for (var A = 0; A < t; A++) {
                    if (++k > n)
                        break e;
                    C.push([r + A * (w + a), i + T * (x + l), w, x])
                }
            P(e, C, d)
        } else if (p)
            d = (y = p).animations;
        else {
            if (!u)
                return;
            if (C = u.frames,
            d = u.animations,
            zot(e)) {
                var B = u.images ? u.images[0] : null
                  , S = B.split("/").pop();
                if ("EmptyAsset" != frame.asset(S).type)
                    P(frame.asset(S), C, d);
                else if ("EmptyAsset" != frame.asset(B).type) {
                    frame.asset(B);
                    P(frame.asset(B), C, d)
                } else
                    y = new createjs.SpriteSheet(u)
            } else
                P(e, C, d)
        }
        function P(e, t, o) {
            var n = {
                images: [e.image],
                frames: t,
                animations: o || []
            };
            y = new createjs.SpriteSheet(n)
        }
        this.animations = d,
        this.cjsSprite_constructor(y),
        zot(h) && (h = kt.makeID()),
        this.id = h,
        zot(g) && (g = !0),
        O.globalControl = g;
        var Y, L = 0;
        this.parseFrames = function(e, t, o, n) {
            var i = []
              , a = Number.MAX_VALUE
              , l = 0;
            if (zot(e))
                zot(t) && (t = 0),
                zot(o) && (o = O.totalFrames - 1),
                s(t, o);
            else {
                if (zot(O.animations) || zot(O.animations[e]))
                    return [];
                r(O.animations[e])
            }
            function r(e) {
                var t;
                Array.isArray(e) ? (s((t = e)[0], t[1], t[3]),
                t[2] && !zot(O.animations[t[2]]) && r(O.animations[t[2]])) : e.constructor == {}.constructor ? function(e) {
                    if (zot(e.frames))
                        return;
                    zot(e.speed) && (e.speed = 1);
                    for (var t = 0; t < e.frames.length; t++)
                        e.speed < a && (a = e.speed),
                        e.speed > l && (l = e.speed),
                        i.push({
                            f: e.frames[t],
                            s: e.speed
                        });
                    e.next && !zot(O.animations[e.next]) && r(O.animations[e.next])
                }(e) : isNaN(e) || i.push({
                    f: Math.floor(e),
                    s: 1
                })
            }
            function s(e, t, o) {
                if (zot(o) && (o = 1),
                e < t)
                    for (var n = e; n <= t; n++)
                        r(n);
                else
                    for (n = t; n <= e; n++)
                        r(e - (n - t));
                function r(e) {
                    o < a && (a = o),
                    l < o && (l = o),
                    i.push({
                        f: e,
                        s: o
                    })
                }
            }
            if (n)
                return i;
            a = kt.constrain(kt.decimals(a), .1),
            l = kt.constrain(kt.decimals(l), .1);
            for (var c, d = [], u = a != l, h = 0; h < i.length; h++)
                if (c = i[h],
                u)
                    for (var g = 0; g < kt.constrain(Math.round(a < 1 ? c.s / a : c.s), .1); g++)
                        d.push(c.f);
                else
                    d.push(c.f);
            return d
        }
        ,
        this.run = function(e, t, o, n, r, i, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k) {
            var T, A;
            if (T = zob(this.run, arguments, "time, label, call, params, wait, waitedCall, waitedParams, loop, loopCount, loopWait, loopCall, loopParams, loopWaitCall, loopWaitParams, rewind, rewindWait, rewindCall, rewindParams, rewindWaitCall, rewindWaitParams, startFrame, endFrame, tweek, id, globalControl"))
                return T;
            if (zot(x) && (x = 1),
            zot(C) || (O.id = C),
            zot(k) || (O.globalControl = k),
            Array.isArray(t)) {
                var B, S;
                A = [];
                for (var P, E = 0, M = 0; M < t.length; M++) {
                    (B = t[M]).lookup = O.parseFrames(B.label, B.startFrame, B.endFrame),
                    0 == M && (P = B.lookup[0]),
                    delete B.startFrame,
                    delete B.endFrame,
                    B.obj = kt.merge(B.obj, {
                        normalizedFrame: B.lookup.length - 1
                    }),
                    B.set = kt.merge(B.set, {
                        normalizedFrames: {
                            noZik: B.lookup
                        },
                        normalizedFrame: 0
                    }),
                    zot(B.wait) && (B.wait = E * x),
                    S = B.label,
                    delete B.label,
                    A.push(B),
                    E = 0;
                    var I = zot(B.time) ? e : B.time;
                    0 < w - b && (E = I / (w - b) / 2)
                }
                if (0 == A.length)
                    return this;
                1 == A.length ? (e = A[0].time,
                t = S,
                j()) : O.gotoAndStop(P)
            } else
                j();
            function j() {
                Y = O.parseFrames(t, b, w),
                L = 0,
                O.gotoAndStop(Y[L]),
                b = w = null,
                A = {
                    normalizedFrame: Y.length - 1
                }
            }
            if (zot(e) && (e = 1e3),
            O.running && O.stopAnimate(O.id),
            O.running = !0,
            !Array.isArray(A)) {
                E = 0;
                0 < w - b && (E = e / Math.abs(w - b) / 2),
                Y && 0 < Y.length && (E = e / Y.length / 2),
                zot(c) && (c = E * x),
                zot(f) && (f = E * x)
            }
            return kt.animate({
                target: O,
                obj: A,
                time: e,
                ease: "linear",
                call: function() {
                    o && "function" == typeof o && o(n || O),
                    O.running = !1,
                    O.stop()
                },
                params: n,
                wait: r,
                waitedCall: i,
                waitedParams: a,
                loop: l,
                loopCount: s,
                loopWait: c,
                loopCall: d,
                loopParams: u,
                loopWaitCall: h,
                loopWaitParams: g,
                rewind: p,
                rewindWait: f,
                rewindCall: m,
                rewindParams: z,
                rewindWaitCall: v,
                rewindWaitParams: y,
                override: !1,
                id: O.id
            }),
            O.runPaused = !1,
            O
        }
        ,
        this.runPaused = !0,
        this.pauseRun = function(e) {
            return zot(e) && (e = !0),
            O.runPaused = e,
            O.globalControl ? kt.pauseAnimate(e, O.id) : O.pauseAnimate(e, O.id),
            O
        }
        ,
        this.stopRun = function() {
            return O.runPaused = !0,
            O.running = !1,
            O.globalControl ? kt.stopAnimate(O.id) : O.stopAnimate(O.id),
            O
        }
        ,
        Object.defineProperty(this, "frame", {
            get: function() {
                return this.currentFrame
            },
            set: function(e) {
                e = Math.round(e),
                this.paused ? this.gotoAndStop(e) : this.gotoAndPlay(e)
            }
        }),
        Object.defineProperty(this, "normalizedFrame", {
            get: function() {
                return L
            },
            set: function(e) {
                L = Math.round(e),
                this.gotoAndStop(Y[L])
            }
        }),
        Object.defineProperty(this, "normalizedFrames", {
            get: function() {
                return Y
            },
            set: function(e) {
                Y = e
            }
        }),
        Object.defineProperty(this, "totalFrames", {
            get: function() {
                return y.getNumFrames()
            },
            set: function(e) {
                zog("zim.Sprite - totalFrames is read only")
            }
        }),
        !1 !== f && Me(this, b),
        this.clone = function() {
            return this.cloneProps(new kt.Sprite(e,t,o,n,r,i,a,l,s,c,d,u,null,g,p,f,this.group,z))
        }
        ,
        this.hasProp = function(e) {
            return !zot(this[e]) || this.hasOwnProperty(e)
        }
        ,
        this.dispose = function() {
            this.removeAllEventListeners(),
            this.parent && this.parent.removeChild(this)
        }
    }
    ,
    kt.extend(kt.Sprite, createjs.Sprite, "clone", "cjsSprite", !1),
    zimify(kt.Sprite.prototype),
    kt.MovieClip = function(e, t, o, n, r, i, a) {
        var l;
        if (l = zob(kt.MovieClip, arguments, "mode, startPosition, loop, labels, style, group, inherit", this))
            return l;
        z_d("50.9"),
        this.type = "MovieClip",
        this.group = i;
        var s = !1 === r ? {} : kt.getStyle(this.type, this.group, a);
        zot(e) && (e = null != s.mode ? s.mode : null),
        zot(t) && (t = null != s.startPosition ? s.startPosition : null),
        zot(o) && (o = null != s.loop ? s.loop : null),
        zot(n) && (n = null != s.labels ? s.labels : null),
        this.cjsMovieClip_constructor(e, t, o, n),
        !1 !== r && Me(this, s),
        this.clone = function() {
            return this.cloneProps(new kt.MovieClip(e,t,o,n,r,this.group,a))
        }
        ,
        this.hasProp = function(e) {
            return !zot(this[e]) || this.hasOwnProperty(e)
        }
        ,
        this.dispose = function() {
            this.removeAllEventListeners(),
            this.parent && this.parent.removeChild(this)
        }
    }
    ,
    kt.extend(kt.MovieClip, createjs.MovieClip, "clone", "cjsMovieClip", !1),
    zimify(kt.MovieClip.prototype),
    kt.Circle = function(e, t, o, n, r, i, a, l) {
        var s;
        if (s = zob(kt.Circle, arguments, "radius, color, borderColor, borderWidth, dashed, style, group, inherit", this))
            return s;
        z_d("51"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Circle",
        this.group = a;
        var c = !1 === i ? {} : kt.getStyle(this.type, this.group, l);
        zot(e) && (e = null != c.radius ? c.radius : 50),
        zot(r) && (r = null != c.dashed && c.dashed),
        zot(o) && (o = null != c.borderColor ? c.borderColor : null),
        zot(n) && (n = null != c.borderWidth ? c.borderWidth : null),
        o < 0 || n < 0 ? o = n = null : null != o && null == n && (n = 1),
        zot(t) && (t = null != c.color ? c.color : 0 < n ? "rgba(0,0,0,0)" : "black");
        var d = this
          , u = e
          , h = t
          , g = o
          , p = n;
        this.mouseChildren = !1;
        var f = this.shape = new createjs.Shape;
        this.addChild(f);
        var m, z, v, y, b, w, x = f.graphics;
        function C() {
            x.c(),
            d.colorCommand = m = x.f(h).command,
            (zot(p) || 0 < p) && (zot(g) && zot(p) || (zot(g) && (g = "black"),
            d.borderColorCommand = z = x.s(g).command,
            d.borderWidthCommand = v = x.ss(p).command,
            r && (d.borderDashedCommand = y = x.sd([10, 10], 5).command))),
            x.dc(0, 0, u),
            d.setBounds(-u, -u, 2 * u, 2 * u)
        }
        C(),
        Object.defineProperty(d, "color", {
            get: function() {
                return h
            },
            set: function(e) {
                zot(e) && (e = "black"),
                h = e,
                m.style = h
            }
        }),
        this.setColorRange = function(e, t) {
            return zot(t) ? (b = d.color,
            w = e) : (b = zot(e) ? d.color : e,
            w = t),
            d
        }
        ;
        var k = 0;
        Object.defineProperty(d, "colorRange", {
            get: function() {
                return k
            },
            set: function(e) {
                k = e,
                zot(b) || zot(w) || (d.color = kt.colorRange(b, w, e))
            }
        }),
        Object.defineProperty(d, "borderColor", {
            get: function() {
                return g
            },
            set: function(e) {
                g = e,
                z ? z.style = g : C()
            }
        }),
        Object.defineProperty(d, "borderWidth", {
            get: function() {
                return p
            },
            set: function(e) {
                0 < e || (e = 0),
                p = e,
                v && 0 != p ? (v.width = p,
                r && (y.segments = [20, 10],
                y.offset = 5)) : C()
            }
        }),
        Object.defineProperty(d, "radius", {
            get: function() {
                return u
            },
            set: function(e) {
                u = e,
                C()
            }
        }),
        !1 !== i && Me(this, c),
        this.clone = function() {
            return d.cloneProps(new kt.Circle(d.radius,d.color,d.borderColor,d.borderWidth,r,i,this.group,l))
        }
    }
    ,
    kt.extend(kt.Circle, kt.Container, "clone", "zimContainer", !1),
    kt.Rectangle = function(e, t, o, n, r, i, a, l, s, c) {
        var d;
        if (d = zob(kt.Rectangle, arguments, "width, height, color, borderColor, borderWidth, corner, dashed, style, group, inherit", this))
            return d;
        z_d("52"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Rectangle",
        this.group = s;
        var u = !1 === l ? {} : kt.getStyle(this.type, this.group, c);
        zot(e) && (e = null != u.width ? u.width : 100),
        zot(t) && (t = null != u.height ? u.height : 100),
        zot(i) && (i = null != u.corner ? u.corner : 0),
        zot(a) && (a = null != u.dashed && u.dashed),
        zot(n) && (n = null != u.borderColor ? u.borderColor : null),
        zot(r) && (r = null != u.borderWidth ? u.borderWidth : null),
        n < 0 || r < 0 ? n = r = null : null != n && null == r && (r = 1),
        zot(o) && (o = null != u.color ? u.color : 0 < r ? "rgba(0,0,0,0)" : "black");
        var h = this
          , g = o
          , p = n
          , f = r;
        this.mouseChildren = !1;
        var m = this.shape = new createjs.Shape;
        this.addChild(m);
        var z, v, y, b, w, x = m.graphics;
        function C() {
            x.c(),
            h.colorCommand = z = x.f(g).command,
            (zot(f) || 0 < f) && (zot(p) && zot(f) || (zot(p) && (p = "black"),
            h.borderColorCommand = v = x.s(p).command,
            h.borderWidthCommand = y = x.ss(f).command,
            a && (h.borderDashedCommand = borderDashedObj = x.sd([10, 10], 5).command))),
            Array.isArray(i) ? x.rc(0, 0, e, t, i[0], i[1], i[2], i[3]) : 0 < i ? x.rr(0, 0, e, t, i) : x.r(0, 0, e, t),
            h.setBounds(0, 0, e, t)
        }
        C(),
        Object.defineProperty(h, "color", {
            get: function() {
                return g
            },
            set: function(e) {
                zot(e) && (e = "black"),
                g = e,
                z.style = g
            }
        }),
        this.setColorRange = function(e, t) {
            return zot(t) ? (b = h.color,
            w = e) : (b = zot(e) ? h.color : e,
            w = t),
            h
        }
        ;
        var k = 0;
        Object.defineProperty(h, "colorRange", {
            get: function() {
                return k
            },
            set: function(e) {
                k = e,
                zot(b) || zot(w) || (h.color = kt.colorRange(b, w, e))
            }
        }),
        Object.defineProperty(h, "borderColor", {
            get: function() {
                return p
            },
            set: function(e) {
                p = e,
                v ? v.style = p : C()
            }
        }),
        Object.defineProperty(h, "borderWidth", {
            get: function() {
                return f
            },
            set: function(e) {
                0 < e || (e = 0),
                f = e,
                y && 0 != f ? (y.width = f,
                a && (borderDashedObj.segments = [20, 10],
                borderDashedObj.offset = 5)) : C()
            }
        }),
        !1 !== l && Me(this, u),
        this.clone = function() {
            return h.cloneProps(new kt.Rectangle(e,t,h.color,h.borderColor,h.borderWidth,i,a,l,this.group,c))
        }
    }
    ,
    kt.extend(kt.Rectangle, kt.Container, "clone", "zimContainer", !1),
    kt.Triangle = function(s, c, e, t, o, n, d, u, h, r, i, a) {
        var l;
        if (l = zob(kt.Triangle, arguments, "a, b, c, color, borderColor, borderWidth, center, adjust, dashed, style, group, inherit", this))
            return l;
        z_d("53"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Triangle",
        this.group = i;
        var g = !1 === r ? {} : kt.getStyle(this.type, this.group, a);
        zot(s) && (s = null != g.a ? g.a : 100),
        zot(c) && (c = null != g.b ? g.b : s),
        zot(e) && (e = null != g.c ? g.c : c),
        -1 == e && (e = Math.sqrt(Math.pow(s, 2) + Math.pow(c, 2))),
        zot(d) && (d = null == g.center || g.center),
        zot(u) && (u = null != g.adjust ? g.adjust : 0),
        zot(o) && (o = null != g.borderColor ? g.borderColor : null),
        zot(n) && (n = null != g.borderWidth ? g.borderWidth : null),
        o < 0 || n < 0 ? o = n = null : null != o && null == n && (n = 1),
        zot(t) && (t = null != g.color ? g.color : 0 < n ? "rgba(0,0,0,0)" : "black");
        var p = this
          , f = t
          , m = o
          , z = n;
        this.mouseChildren = !1;
        var v = [s, c, e];
        v.sort(function(e, t) {
            return t - e
        });
        var y = v[0]
          , b = v[1]
          , w = v[2]
          , x = [v.indexOf(s), v.indexOf(c), v.indexOf(e)];
        if (b + w < y)
            zog("zim display - Triangle(): invalid triangle lengths");
        else {
            var C = this.shape = new createjs.Shape;
            this.addChild(C);
            var k, T, A, B, S, P = C.graphics;
            M(),
            Object.defineProperty(p, "color", {
                get: function() {
                    return f
                },
                set: function(e) {
                    zot(e) && (e = "black"),
                    f = e,
                    k.style = f
                }
            }),
            this.setColorRange = function(e, t) {
                return zot(t) ? (B = p.color,
                S = e) : (B = zot(e) ? p.color : e,
                S = t),
                p
            }
            ;
            var E = 0;
            Object.defineProperty(p, "colorRange", {
                get: function() {
                    return E
                },
                set: function(e) {
                    E = e,
                    zot(B) || zot(S) || (p.color = kt.colorRange(B, S, e))
                }
            }),
            Object.defineProperty(p, "borderColor", {
                get: function() {
                    return m
                },
                set: function(e) {
                    m = e,
                    T ? T.style = m : M()
                }
            }),
            Object.defineProperty(p, "borderWidth", {
                get: function() {
                    return z
                },
                set: function(e) {
                    0 < e || (e = 0),
                    z = e,
                    A && 0 != z ? (A.width = z,
                    h && (borderDashedObj.segments = [20, 10],
                    borderDashedObj.offset = 5)) : M()
                }
            }),
            !1 !== r && Me(this, g),
            this.clone = function() {
                return p.cloneProps(new kt.Triangle(s,c,e,p.color,p.borderColor,p.borderWidth,d,u,h,r,this.group,a))
            }
        }
        function M() {
            P.c(),
            p.colorCommand = k = P.f(f).command,
            (zot(z) || 0 < z) && (zot(m) && zot(z) || (zot(m) && (m = "black"),
            p.borderColorCommand = T = P.s(m).command,
            p.borderWidthCommand = A = P.ss(z).command,
            h && (p.borderDashedCommand = borderDashedObj = P.sd([10, 10], 5).command))),
            P.mt(0, 0),
            p.one = {
                x: 0,
                y: 0
            },
            P.lt(s, 0),
            p.two = {
                x: s,
                y: 0
            };
            var e = 180 * Math.acos((Math.pow(b, 2) + Math.pow(w, 2) - Math.pow(y, 2)) / (2 * b * w)) / Math.PI
              , t = 180 * Math.asin(b * Math.sin(e * Math.PI / 180) / y) / Math.PI
              , o = [e, t, 180 - e - t];
            p.angles = [o[x[1]], o[x[2]], o[x[0]]];
            var n = p.angles[1]
              , r = Math.cos(n * Math.PI / 180) * c
              , i = Math.sin(n * Math.PI / 180) * c
              , a = Math.max(s, s - r)
              , l = i;
            p.setBounds(0, 0, a, l),
            C.y = l,
            P.lt(s - r, 0 - i),
            p.three = {
                x: s - r,
                y: 0 - i
            },
            P.cp(),
            d && (p.regX = a / 2,
            p.regY = l / 2),
            u && (p.shape.y += u)
        }
    }
    ,
    kt.extend(kt.Triangle, kt.Container, "clone", "zimContainer"),
    kt.Squiggle = function(e, k, T, A, B, S, P, E, M, I, t, j, O, Y, L, D, o, n, r, X, i, R) {
        var a;
        if (a = zob(kt.Squiggle, arguments, "color, thickness, points, length, controlLength, controlType, lockControlType, showControls, lockControls, handleSize, allowToggle, move, dashed, onTop, stickColor, selectColor, selectPoints, editPoints, interactive, style, group, inherit", this))
            return a;
        z_d("53.2"),
        this.group = i;
        var _ = !1 === X ? {} : kt.getStyle("Squiggle", this.group, R);
        zot(k) && (k = null != _.thickness ? _.thickness : 6),
        zot(A) && (A = null != _.length ? _.length : 300),
        zot(T) && (T = null != _.points ? _.points : 5);
        var W = "number" == typeof T ? T : T.length;
        if (0 != W) {
            zot(B) && (B = null != _.controlLength ? _.controlLength : A / W),
            this.zimContainer_constructor(A, B, null, null, !1),
            this.type = "Squiggle",
            zot(O) && (O = null != _.dashed && _.dashed),
            zot(e) && (e = null != _.color ? _.color : blue),
            e.style && (this.colorCommand = e,
            e = "black"),
            zot(S) && (S = null != _.controlType ? _.controlType : "mirror"),
            zot(P) && (P = null != _.lockControlType && _.lockControlType),
            zot(E) && (E = null == _.showControls || _.showControls);
            var H = E;
            zot(M) && (M = null != _.lockControls && _.lockControls),
            zot(I) && (I = null != _.handleSize ? _.handleSize : kt.mobile() ? 20 : 10),
            zot(t) && (t = null == _.allowToggle || _.allowToggle),
            zot(j) && (j = null == _.move || _.move),
            zot(L) && (L = null != _.stickColor ? _.stickColor : "#111"),
            zot(D) && (D = null != _.selectColor ? _.selectColor : "#fff"),
            zot(o) && (o = null == _.selectPoints || _.selectPoints),
            this.stickColor = L,
            zot(Y) && (Y = null == _.onTop || _.onTop),
            zot(n) && (n = null == _.editPoints || _.editPoints),
            zot(r) && (r = null == _.interactive || _.interactive),
            r || (j = o = n = t = E = !1);
            var V, F, N, G = this;
            this.types = ["mirror", "straight", "free", "none"];
            this.interactive = r,
            this.num = W,
            this.onTop = Y,
            this.move = j,
            this.editPoints = n,
            this.allowToggle = t,
            this.lockControlType = P,
            this.selectPoints = o,
            this.lockControls = M;
            var U, K, Z, q, Q, J, $, ee, te, oe, ne = e, re = k, l = G.move, ie = 2;
            h(),
            G.selectionManager.on("keydown", function(e) {
                if (G.selectPoints && G.keyFocus && 37 <= e.keyCode && e.keyCode <= 40) {
                    var t = ae();
                    if (0 < t.length) {
                        for (var o = 0; o < t.length; o++) {
                            var n = t[o];
                            37 == e.keyCode ? n.x -= G.selectionManager.shiftKey ? 10 : 1 : 39 == e.keyCode ? n.x += G.selectionManager.shiftKey ? 10 : 1 : 38 == e.keyCode ? n.y -= G.selectionManager.shiftKey ? 10 : 1 : 40 == e.keyCode && (n.y += G.selectionManager.shiftKey ? 10 : 1),
                            ee(n)
                        }
                        te(),
                        G.stage && G.stage.update()
                    }
                }
            }),
            G.selectionManager.on("keyup", function(e) {
                if (G.selectPoints && G.keyFocus && 37 <= e.keyCode && e.keyCode <= 40) {
                    var t = ae();
                    if (0 < t.length)
                        for (var o = 0; o < t.length; o++)
                            le(t[o])
                }
            }),
            G.selectionManager.on("undo", function() {
                if (G.selectPoints && G.keyFocus && G.lastPoints) {
                    var e = kt.copy(G.lastPoints);
                    G.lastPoints = kt.copy(G.points),
                    G.points = e,
                    G.stage && G.stage.update()
                }
            }),
            ee = function(e) {
                if (!G.lockControls)
                    if (e.rect1) {
                        var t = (n = e).x - n.startX
                          , o = n.y - n.startY;
                        n.rect1.x = n.rect1.startX + t,
                        n.rect1.y = n.rect1.startY + o,
                        n.rect2.x = n.rect2.startX + t,
                        n.rect2.y = n.rect2.startY + o
                    } else {
                        var n, r = e, i = r.other, a = (n = r.ball).index, l = S;
                        if (zot(V[a][4]) || (l = V[a][4]),
                        "straight" == l || "mirror" == l) {
                            var s = r.x - n.x
                              , c = r.y - n.y;
                            if ("mirror" == l)
                                i.x = n.x - s,
                                i.y = n.y - c;
                            else {
                                var d = Math.atan2(c, s)
                                  , u = -i.stickLength * Math.cos(d + Math.PI)
                                  , h = -i.stickLength * Math.sin(d + Math.PI);
                                i.x = n.x - u,
                                i.y = n.y - h
                            }
                        }
                    }
            }
            ,
            Object.defineProperty(G, "move", {
                get: function() {
                    return j
                },
                set: function(e) {
                    j != e && ((j = e) ? se() : ce())
                }
            }),
            Object.defineProperty(G, "interactive", {
                get: function() {
                    return r
                },
                set: function(e) {
                    r = e,
                    G.showControls = r,
                    G.allowToggle = r,
                    G.editPoints = r,
                    G.lockControls = !r,
                    G.selectPoints = r,
                    G.move = r,
                    G.points = G.points
                }
            }),
            Object.defineProperty(G, "allowToggle", {
                get: function() {
                    return t
                },
                set: function(e) {
                    t != e && ((t = e) ? G.move && se() : !H && G.move && ce())
                }
            });
            var s, c, d = M;
            Object.defineProperty(G, "lockControls", {
                get: function() {
                    return d
                },
                set: function(e) {
                    (d = e) ? (G.controls.mouseChildren = !1,
                    G.controls.mouseEnabled = !1) : (G.controls.mouseChildren = !0,
                    G.controls.mouseEnabled = !0)
                }
            }),
            G.lockControls = d,
            Object.defineProperty(G, "controlsVisible", {
                get: function() {
                    return H
                },
                set: function(e) {
                    (H = e) ? G.showControls() : G.hideControls()
                }
            }),
            Object.defineProperty(G, "color", {
                get: function() {
                    return ne
                },
                set: function(e) {
                    zot(e) && (e = "black"),
                    ne = e,
                    U.style = ne
                }
            }),
            this.setColorRange = function(e, t) {
                return zot(t) ? (s = G.color,
                c = e) : (s = zot(e) ? G.color : e,
                c = t),
                G
            }
            ;
            var u = 0;
            Object.defineProperty(G, "colorRange", {
                get: function() {
                    return u
                },
                set: function(e) {
                    u = e,
                    zot(s) || zot(c) || (G.color = kt.colorRange(s, c, e))
                }
            }),
            Object.defineProperty(G, "thickness", {
                get: function() {
                    return re
                },
                set: function(e) {
                    0 < e || (e = 0),
                    re = e,
                    K && 0 != re ? (K.width = re,
                    O && (Z.segments = [20, 10],
                    Z.offset = 5)) : te()
                }
            }),
            "undefined" != typeof KEYFOCUS && (kt.KEYFOCUS = KEYFOCUS),
            Object.defineProperty(this, "keyFocus", {
                get: function() {
                    return kt.KEYFOCUS == G
                },
                set: function(e) {
                    kt.KEYFOCUS = G
                }
            }),
            kt.KEYFOCUS || function() {
                if (!G.selectPoints)
                    return;
                G.keyFocus = !0;
                var e = document.activeElement;
                e && e.blur()
            }(),
            Object.defineProperty(G, "points", {
                get: function() {
                    for (var e, t, o = [], n = 0; n < V.length; n++)
                        t = V[n],
                        e = [kt.decimals(t[0].x), kt.decimals(t[0].y), kt.decimals(t[1].x), kt.decimals(t[1].y), kt.decimals(t[2].x), kt.decimals(t[2].y), kt.decimals(t[3].x), kt.decimals(t[3].y)],
                        t[4] && "mirror" !== t[4] && e.push(t[4]),
                        o.push(e);
                    return o
                },
                set: function(e) {
                    G.dispose(!0),
                    T = e,
                    G.shape && (G.shape.graphics.clear(),
                    G.sticks.graphics.clear(),
                    G.controls.noDrag(),
                    G.removeAllChildren(),
                    delete G.shape,
                    delete G.sticks,
                    delete G.controls),
                    h(),
                    G.lockControls = d
                }
            }),
            Object.defineProperty(G, "pointsAdjusted", {
                get: function() {
                    var r, i, a = [], l = G.pointObjects;
                    return kt.loop(l.length, function(e, t) {
                        if (po = l[e],
                        i = V[e],
                        0 == po[0].rotation)
                            r = [kt.decimals(i[0].x), kt.decimals(i[0].y), kt.decimals(i[1].x), kt.decimals(i[1].y), kt.decimals(i[2].x), kt.decimals(i[2].y), kt.decimals(i[3].x), kt.decimals(i[3].y)];
                        else {
                            var o = po[0].localToLocal(po[2].x, po[2].y, po[0].parent)
                              , n = po[0].localToLocal(po[3].x, po[3].y, po[0].parent);
                            r = [kt.decimals(i[0].x), kt.decimals(i[0].y), kt.decimals(i[1].x), kt.decimals(i[1].y), kt.decimals(o.x - i[0].x), kt.decimals(o.y - i[0].y), kt.decimals(n.x - i[0].x), kt.decimals(n.y - i[0].y)]
                        }
                        i[4] && "mirror" !== i[4] && r.push(i[4]),
                        a.push(r)
                    }),
                    a
                },
                set: function(e) {
                    zon && zog("Squiggle() - pointsAdjusted is read only")
                }
            }),
            Object.defineProperty(G, "pointObjects", {
                get: function() {
                    return V
                },
                set: function(e) {
                    zon && zog("Squiggle() - pointObjects is read only - but its contents can be manipulated - use squiggle.update() after changes")
                }
            }),
            Object.defineProperty(G, "pointControls", {
                get: function() {
                    return N
                },
                set: function(e) {
                    zon && zog("Squiggle() - pointControls is read only - but its contents can be manipulated - use blob.update() after changes")
                }
            }),
            Object.defineProperty(G, "pointCircles", {
                get: function() {
                    return F
                },
                set: function(e) {
                    zon && zog("Squiggle() - pointCircles is read only - but its contents can be manipulated - use blob.update() after changes")
                }
            }),
            Object.defineProperty(G, "segmentPoints", {
                get: function() {
                    var n = []
                      , r = G.pointsAdjusted;
                    return kt.loop(r.length - 1, function(e, t) {
                        var o = G.getSegmentPoint(r[e], r[e + 1]);
                        n.push(o)
                    }),
                    n
                },
                set: function(e) {
                    zon && zog("Squiggle() - segmentPoints is read only")
                }
            }),
            Object.defineProperty(G, "segmentRatios", {
                get: function() {
                    var o = []
                      , n = 0;
                    kt.loop(G.segmentPoints, function(e) {
                        var t = kt.distanceAlongCurve(e);
                        o.push(t),
                        n += t
                    });
                    var t = []
                      , r = 0;
                    return kt.loop(o, function(e) {
                        r += e / n,
                        t.push(r)
                    }),
                    t
                },
                set: function(e) {
                    zon && zog("Squiggle() - segmentRatios is read only")
                }
            }),
            G.getPointAngle = function(e) {
                var t = G.pointObjects[e][0]
                  , o = G.pointObjects[e][2]
                  , n = G.pointObjects[e][3]
                  , r = t.localToGlobal(o.x, o.y)
                  , i = t.localToGlobal(n.x, n.y);
                return kt.angle(r.x, r.y, i.x, i.y)
            }
            ,
            G.getSegmentPoint = function(e, t) {
                if (!zot(e) && !zot(t)) {
                    0 == e[2] && 0 == e[3] || (e[4] -= e[2],
                    e[5] -= e[3],
                    e[6] -= e[2],
                    e[7] -= e[3],
                    e[0] += e[2],
                    e[1] += e[3],
                    e[2] = 0,
                    e[3] = 0),
                    0 == t[2] && 0 == t[3] || (t[4] -= t[2],
                    t[5] -= t[3],
                    t[6] -= t[2],
                    t[7] -= t[3],
                    t[0] += t[2],
                    t[1] += t[3],
                    t[2] = 0,
                    t[3] = 0);
                    var o = {
                        x: e[0],
                        y: e[1]
                    }
                      , n = {
                        x: e[0] + e[6],
                        y: e[1] + e[7]
                    }
                      , r = {
                        x: t[0] + t[4],
                        y: t[1] + t[5]
                    }
                      , i = {
                        x: t[0],
                        y: t[1]
                    };
                    return 0 == oe.x && 0 == oe.y || (o.x += oe.x,
                    n.x += oe.x,
                    r.x += oe.x,
                    i.x += oe.x,
                    o.y += oe.y,
                    n.y += oe.y,
                    r.y += oe.y,
                    i.y += oe.y),
                    [o, n, r, i]
                }
            }
            ,
            G.getAdjacentSegmentData = function(e) {
                zot(e) && (e = 0);
                var t = G.pointsAdjusted;
                return 2 == G.num ? [[G.getSegmentPoint(t[0], t[1])], [0]] : 0 == e ? [[G.getSegmentPoint(t[0], t[1]), G.getSegmentPoint(t[1], t[2])], [0, 1]] : e >= G.num - 2 ? [[G.getSegmentPoint(t[G.num - 3], t[G.num - 2]), G.getSegmentPoint(t[G.num - 2], t[G.num - 1])], [G.num - 3, G.num - 2]] : [[G.getSegmentPoint(t[e - 1], t[e]), G.getSegmentPoint(t[e], t[e + 1]), G.getSegmentPoint(t[e + 1], t[e + 2])], [e - 1, e, e + 1]]
            }
            ,
            G.getCurvePoint = function(o, e, t, n) {
                (zot(o) || isNaN(o)) && (o = 0),
                zot(e) && (e = G.segmentRatios),
                zot(t) && (t = G.segmentPoints),
                zot(n) && (n = !1);
                var r = e
                  , i = t
                  , a = kt.loop(r, function(e, t) {
                    if (o <= e)
                        return t
                })
                  , l = 0 < a ? r[a - 1] : 0
                  , s = 0 < a ? r[a] - r[a - 1] : r[a];
                if (s) {
                    var c = (o - l) / s
                      , d = kt.pointAlongCurve(i[a], c, n)
                      , u = G.localToGlobal(d.x, d.y);
                    return u.angle = d.angle,
                    u.z = a,
                    zot(u) ? void 0 : u
                }
            }
            ,
            this.dispose = function(e) {
                if (G.shape) {
                    G.shape.cursor = "default";
                    for (var t = 0; t < G.points.length; t++)
                        G.pointObjects[t][1].removeAllEventListeners();
                    for (t = 0; t < F.length; t++)
                        F[t].removeAllEventListeners();
                    G.sticks.removeFrom(G),
                    G.controls.removeFrom(G),
                    G.shape.removeAllEventListeners(),
                    G.controls.removeAllEventListeners(),
                    G.off("mousedown", G.toggleEvent),
                    G.off("click", G.clickEvent),
                    G.toggleStageEvent && G.stage.off("stagemousedown", G.toggleStageEvent),
                    !e && G.selectPoints && G.selectionManager.removeAllEventListeners()
                }
            }
        }
        function h() {
            oe && oe.removeAllEventListeners(),
            G.num = W = "number" == typeof T ? T : T.length,
            W = Math.max(2, W),
            B = A / W,
            q = G.shape = new kt.Shape({
                style: !1
            }).addTo(G);
            var n = G.sticks = new kt.Shape({
                style: !1
            }).addTo(G);
            I <= 0 && n.removeFrom();
            var m = q.graphics;
            m.c();
            var z = n.graphics;
            z.c();
            var e = I / 10 * 8
              , t = I;
            G.selectPoints ? (G.selectedBalls = new kt.SelectionSet,
            G.selectedRect1s = new kt.SelectionSet,
            G.selectedRect2s = new kt.SelectionSet,
            G.selectionManager = new kt.SelectionManager([G.selectedBalls, G.selectedRect1s, G.selectedRect2s],"ctrl",!1)) : G.selectionManager = new kt.SelectionManager(null,"ctrl");
            var o, r, i, a, l, s, c, d, u = kt.mobile();
            oe = G.controls = new kt.Container({
                style: !1
            }).addTo(G),
            G.move && G.interactive && oe.drag({
                onTop: !u
            }),
            V = [],
            N = [],
            F = [];
            for (var h = 0; h < W; h++) {
                if ((i = new kt.Container({
                    style: !1
                }).addTo(oe)).num = h,
                "number" == typeof T) {
                    var g = zik(B);
                    r = new kt.Container(g,k,null,null,!1).addTo(G).loc({
                        x: h * A / (W - 1) - g / 2,
                        y: h % 2 * g
                    }),
                    s = new kt.Circle(e,G.selectPoints && G.selectedBalls.isSelected(h) ? D : light,dark,2,null,!1).centerReg(r).loc({
                        x: g / 2,
                        y: 0
                    }),
                    a = new kt.Rectangle(t,t,G.selectPoints && G.selectedRect1s.isSelected(h) ? D : C(S),0 == I ? null : dark,0 == I ? null : 2,null,null,!1).centerReg(r).loc({
                        x: 0,
                        y: 0
                    }),
                    l = new kt.Rectangle(t,t,G.selectPoints && G.selectedRect2s.isSelected(h) ? D : C(S),0 == I ? null : dark,0 == I ? null : 2,null,null,!1).centerReg(r).loc({
                        x: g,
                        y: 0
                    });
                    var p = r.localToLocal(s.x, s.y, oe);
                    s.x = p.x,
                    s.y = p.y,
                    s.addTo(i, null, !1);
                    var f = r.localToLocal(a.x, a.y, oe);
                    a.x = "none" == S ? 0 : f.x - s.x,
                    a.y = "none" == S ? 0 : f.y - s.y,
                    a.addTo(i, null, !1);
                    var v = r.localToLocal(l.x, l.y, oe);
                    l.x = "none" == S ? 0 : v.x - s.x,
                    l.y = "none" == S ? 0 : v.y - s.y,
                    l.addTo(i, null, !1),
                    i.x = s.x,
                    i.y = s.y,
                    s.x = 0,
                    s.y = 0,
                    "none" == S && s.addTo(i, null, !1)
                } else
                    c = (d = T[h])[8] ? d[8] : S,
                    i.loc({
                        x: d[0],
                        y: d[1]
                    }),
                    s = new kt.Circle(e,light,dark,2,null,!1).centerReg(i).loc({
                        x: d[2],
                        y: d[3]
                    }),
                    a = new kt.Rectangle(t,t,C(c),0 == I ? null : dark,0 == I ? null : 2,null,null,!1).centerReg(i, 0).loc({
                        x: d[4],
                        y: d[5]
                    }),
                    l = new kt.Rectangle(t,t,C(c),0 == I ? null : dark,0 == I ? null : 2,null,null,!1).centerReg(i, 0).loc({
                        x: d[6],
                        y: d[7]
                    });
                s.mySet = i,
                s.rect1 = a,
                s.rect2 = l,
                s.index = h,
                u ? s.on("mousedown", w) : s.on("dblclick", x),
                a.ball = s,
                (a.other = l).ball = s,
                l.other = a,
                0 == I && (s.expand(10),
                a.expand(10),
                l.expand(10)),
                u && (s.expand(),
                a.expand(),
                l.expand()),
                o = [i, s, a, l, d ? d[8] : S],
                V.push(o),
                F.push(s),
                N.push(i)
            }
            var y, b = !1;
            function w(e) {
                b ? (e.preventDefault(),
                x(e)) : (b = !0,
                setTimeout(function() {
                    b = !1
                }, 300))
            }
            function x(e) {
                if (!G.lockControlType) {
                    var t = e.target
                      , o = V[t.index][4] ? V[t.index][4] : S;
                    Math.abs(t.rect1.x) <= 2 && Math.abs(t.rect1.y) <= 2 && Math.abs(t.rect2.x) <= 2 && Math.abs(t.rect2.y) <= 2 && (o = "none"),
                    "none" == o && t.parent.addChildAt(t, 0),
                    "none" == (o = G.types[(G.types.indexOf(o) + (G.shiftKey ? -1 : 1) + G.types.length) % G.types.length]) && (t.rect1.x = t.rect1.y = t.rect2.x = t.rect2.y = 0,
                    t.parent.addChild(t),
                    e.stopImmediatePropagation()),
                    V[t.index][4] = o,
                    t.rect1.color = C(o),
                    t.rect2.color = C(o),
                    te();
                    var n = new createjs.Event("change");
                    n.controlType = "bezierSwitch",
                    G.dispatchEvent(n),
                    t.stage.update()
                }
            }
            function C(e) {
                var t = {
                    straight: pink,
                    free: yellow,
                    none: blue
                };
                return t[e] ? t[e] : purple
            }
            (te = function() {
                m.c();
                var e = kt.mobile() ? 10 : 6;
                if (k < e) {
                    m.s("rgba(0,0,0,.01)").ss(e);
                    var t = (i = V[0][0]).localToLocal(V[0][1].x, V[0][1].y, q);
                    m.mt(t.x, t.y);
                    for (var o = 0; o < V.length; o++) {
                        var n = o
                          , r = (o + 1) % V.length
                          , i = V[n][0]
                          , a = V[n][1]
                          , l = V[n][2]
                          , s = V[n][3]
                          , c = V[r][0]
                          , d = V[r][1]
                          , u = V[r][2]
                          , h = (V[r][3],
                        i.localToLocal(s.x, s.y, q))
                          , g = c.localToLocal(u.x, u.y, q)
                          , p = c.localToLocal(d.x, d.y, q);
                        o != V.length - 1 && m.bt(h.x, h.y, g.x, g.y, p.x, p.y)
                    }
                }
                G.colorCommand || (G.colorCommand = U = m.s(ne).command),
                G.thicknessCommand || (G.thicknessCommand = K = m.ss(re).command),
                O && (G.dashedCommand || (G.dashedCommand = Z = m.sd([10, 10], 5).command)),
                t = (i = V[0][0]).localToLocal(V[0][1].x, V[0][1].y, q),
                m.mt(t.x, t.y),
                z.c().s(G.stickColor).ss(1);
                for (o = 0; o < V.length; o++) {
                    n = o,
                    r = (o + 1) % V.length,
                    i = V[n][0],
                    a = V[n][1],
                    l = V[n][2],
                    s = V[n][3],
                    c = V[r][0],
                    d = V[r][1],
                    u = V[r][2],
                    V[r][3],
                    h = i.localToLocal(s.x, s.y, q),
                    g = c.localToLocal(u.x, u.y, q),
                    p = c.localToLocal(d.x, d.y, q);
                    o != V.length - 1 && m.bt(h.x, h.y, g.x, g.y, p.x, p.y);
                    t = i.localToLocal(a.x, a.y, q);
                    var f = i.localToLocal(l.x, l.y, q);
                    0 == o && (l.visible = 0),
                    0 != o && z.mt(t.x, t.y).lt(f.x, f.y),
                    o != V.length - 1 && z.mt(t.x, t.y).lt(h.x, h.y),
                    o == V.length - 1 && (s.visible = 0)
                }
                O && m.append(G.dashedCommand),
                m.append(G.thicknessCommand),
                m.append(G.colorCommand)
            }
            )(),
            oe.on("mousedown", function(e) {
                if (!G.lockControls) {
                    if (G.selectPoints && (G.keyFocus = !0),
                    y = {
                        x: e.target.x,
                        y: e.target.y
                    },
                    e.target.rect1) {
                        (o = e.target).startX = o.x,
                        o.startY = o.y,
                        o.rect1.startX = o.rect1.x,
                        o.rect1.startY = o.rect1.y,
                        o.rect2.startX = o.rect2.x,
                        o.rect2.startY = o.rect2.y
                    } else {
                        var t = e.target;
                        t.startX = t.x,
                        t.startY = t.y;
                        var o, n = (o = t.ball).index, r = S;
                        if (zot(V[n][4]) || (r = V[n][4]),
                        "straight" == r) {
                            var i = t.other
                              , a = i.x - o.x
                              , l = i.y - o.y;
                            i.stickLength = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2))
                        }
                    }
                    if (G.selectPoints) {
                        var s = G.selectionManager.currentSet;
                        if (s && s.selections && 0 < s.selections.length)
                            for (var c = 0; c < s.selections.length; c++) {
                                var d = G.pointObjects[s.selections[c]];
                                d[1].startX = d[1].x,
                                d[1].startY = d[1].y,
                                d[2].startX = d[2].x,
                                d[2].startY = d[2].y,
                                d[3].startX = d[3].x,
                                d[3].startY = d[3].y
                            }
                    }
                }
            }),
            G.selectPoints && oe.tap(function(e) {
                if (e.target.rect1) {
                    var t = e.target;
                    G.selectedBalls.toggle(t.parent.num)
                } else {
                    var o = e.target;
                    o.color = "white",
                    (t = o.ball).rect1 == o ? G.selectedRect1s.toggle(t.parent.num) : G.selectedRect2s.toggle(t.parent.num)
                }
                for (var n = 0; n < G.pointObjects.length; n++) {
                    var r = G.pointObjects[n];
                    r[1].color = G.selectedBalls.isSelected(n) ? white : light,
                    r[2].color = G.selectedRect1s.isSelected(n) ? white : C(r[4]),
                    r[3].color = G.selectedRect2s.isSelected(n) ? white : C(r[4])
                }
                e.target.stage.update()
            }),
            oe.on("pressmove", function(e) {
                if (!G.lockControls)
                    if (G.selectPoints) {
                        var t = ae();
                        if (-1 == t.indexOf(e.target))
                            ee(e.target),
                            te();
                        else if (0 < t.length) {
                            diffX = e.target.x - e.target.startX,
                            diffY = e.target.y - e.target.startY;
                            for (var o = 0; o < t.length; o++) {
                                var n = t[o];
                                n.x = n.startX + diffX,
                                n.y = n.startY + diffY,
                                ee(n)
                            }
                            te()
                        }
                    } else
                        ee(e.target),
                        te()
            }),
            oe.on("pressup", function(e) {
                if (!G.lockControls) {
                    var t = e.target.x != y.x || e.target.y != y.y
                      , o = new createjs.Event("change");
                    e.target.rect1 ? (o.controlType = "bezierPoint",
                    function(e) {
                        if (G.selectPoints) {
                            var t = ae();
                            if (t && -1 == t.indexOf(e))
                                le(e);
                            else if (t && 0 < t.length)
                                for (var o = 0; o < t.length; o++)
                                    le(t[o]);
                            else
                                le(e)
                        } else
                            le(e)
                    }(e.target)) : o.controlType = "bezierHandle",
                    t && G.dispatchEvent(o)
                }
            }),
            G.changeControl = function(e, t, o, n, r, i, a, l, s) {
                var c;
                if (c = zob(G.changeControl, arguments, "index, type, rect1X, rect1Y, rect2X, rect2Y, circleX, circleY, update"))
                    return c;
                if (zot(e))
                    for (var d = 0; d < V.length; d++)
                        G.changeControl(d, t, o, n, r, i, a, l);
                else {
                    var u = V[e];
                    "none" == (u[4] = t) ? (zot(a) || (u[2].x = a),
                    zot(l) || (u[2].y = l),
                    u[2].x = u[1].x,
                    u[2].y = u[1].y,
                    u[3].x = u[1].x,
                    u[3].y = u[1].y,
                    u[1].parent.addChild(u[1])) : (zot(o) || (u[2].x = o),
                    zot(n) || (u[2].y = n),
                    zot(r) || (u[3].x = r),
                    zot(i) || (u[3].y = i),
                    zot(a) || (u[1].x = a),
                    zot(l) || (u[1].y = l),
                    u[1].parent.addChildAt(u[1], 0)),
                    s && (G.update(),
                    G.stage && G.stage.update())
                }
            }
            ,
            G.transformPoints = function(e, t, o, n) {
                return G.points = kt.transformPoints(G.points, e, t, o, n),
                G
            }
            ,
            G.update = function() {
                return te(),
                G
            }
            ,
            G.interactive && (j && q.drag({
                onTop: !1
            }),
            Q = q.on("mousedown", function() {
                y = {
                    x: q.x,
                    y: q.y
                },
                G.selectPoints && (G.keyFocus = !0),
                function() {
                    if (G.onTop) {
                        var e = G.parent.numChildren - 1;
                        "Keyboard" == G.parent.getChildAt(e).type && e--,
                        G.parent.setChildIndex(G, e)
                    }
                }()
            }),
            J = q.on("pressmove", function() {
                oe.x = q.x,
                oe.y = q.y,
                n.x = q.x,
                n.y = q.y
            }),
            $ = q.on("pressup", function() {
                var e = q.x != y.x || q.y != y.y
                  , t = q.localToLocal(0, 0, G.parent);
                if (G.x = t.x,
                G.y = t.y,
                oe.x = oe.y = n.x = n.y = q.x = q.y = 0,
                e) {
                    var o = new createjs.Event("change");
                    o.controlType = "move",
                    G.dispatchEvent(o)
                }
                G.stage.update()
            }),
            G.move || ce(!0)),
            G.toggleEvent = G.on("mousedown", function() {
                G.allowToggle && (H || (G.showControls(),
                G.dispatchEvent("controlsshow")))
            }),
            G.added(function() {
                G.toggleStageEvent = G.stage.on("stagemousedown", function(e) {
                    G.allowToggle && G.stage && H && !G.hitTestPoint(e.stageX, e.stageY, !1) && (G.hideControls(),
                    G.dispatchEvent("controlshide"))
                })
            }),
            G.clickEvent = G.on("click", function() {
                G.ctrlKey && setTimeout(function() {
                    G.clone(!0).addTo(G.stage).mov(0, 100),
                    G.allowToggle && (G.hideControls(),
                    G.dispatchEvent("controlshide"));
                    var e = new createjs.Event("change");
                    e.controlType = "move",
                    G.dispatchEvent(e),
                    G.stage.update()
                }, 50)
            }),
            G.hideControls = function() {
                return G.toggled = !1,
                oe.visible = !1,
                n.visible = !1,
                H = !1,
                G.stage && G.stage.update(),
                !G.allowToggle && G.move && ce(),
                G
            }
            ,
            E || G.hideControls(),
            G.showControls = function() {
                return G.toggled = !0,
                oe.visible = !0,
                n.visible = !0,
                H = !0,
                oe.x = q.x,
                oe.y = q.y,
                n.x = q.x,
                n.y = q.y,
                G.addChildAt(q, 0),
                G.move && !G.allowToggle && se(),
                G.stage && G.stage.update(),
                G
            }
            ,
            G.toggle = function(e) {
                return !0 === e ? G.showControls() : !1 === e ? G.hideControls() : H ? G.hideControls() : G.showControls(),
                G
            }
            ,
            G.recordData = function(e) {
                zot(e) && (e = !1);
                var t = {
                    type: "Blob",
                    index: G.parent ? G.parent.getChildIndex(G) : -1,
                    x: G.x,
                    y: G.y,
                    points: G.recordPoints(),
                    color: G.color,
                    thickness: G.thickness,
                    move: G.move,
                    toggle: G.allowToggle,
                    controlsVisible: H
                };
                return e ? JSON.stringify(t) : t
            }
            ,
            G.setData = function(e, t) {
                if (!zot(e)) {
                    if (t)
                        try {
                            e = JSON.parse(e)
                        } catch (e) {
                            return
                        }
                    var o = e.index;
                    zot(o) && (o = -1),
                    delete e.index;
                    var n = e.points;
                    for (var r in zot(n) || G.setPoints(n),
                    delete e.points,
                    G.num = n.length,
                    e)
                        G[r] = e[r];
                    return G.parent && G.parent.setChildIndex(G, o),
                    G.update(),
                    G
                }
            }
            ,
            G.recordPoints = function(e) {
                zot(e) && (e = !1);
                var t = G.points;
                if (e) {
                    if (!G.pane) {
                        var o = G.pane = new kt.Pane({
                            container: G.stage,
                            width: Math.min(500, G.stage.width - 20),
                            height: Math.min(500, G.stage.height - 20),
                            draggable: !0
                        });
                        (G.textArea = new kt.TextArea(Math.min(400, G.stage.width - 70),Math.min(400, G.stage.height - 70))).centerReg(o)
                    }
                    G.textArea.text = JSON.stringify(t),
                    G.pane.show()
                }
                return t
            }
            ,
            !(G.setPoints = function(e) {
                for (var t, o, n = 0; n < e.length; n++)
                    t = V[n],
                    o = e[n],
                    zot(t) || (t[0].x = o[0],
                    t[0].y = o[1],
                    t[1].x = o[2],
                    t[1].y = o[3],
                    t[2].x = o[4],
                    t[2].y = o[5],
                    t[3].x = o[6],
                    t[3].y = o[7],
                    t[4] = o[8]);
                return G.update(),
                G
            }
            ) !== X && Me(G, _),
            G.clone = function(e) {
                e ? G.colorCommand : G.color,
                e ? G.colorCommand : G.color;
                return G.cloneProps(new kt.Squiggle(e ? G.colorCommand : G.color,G.thickness,G.recordPoints(),A,B,S,P,oe.visible,M,I,G.allowToggle,G.move,O,Y,L,G.editPoints,X,G.group,R))
            }
            ,
            G.shape.on("mousedown", function(e) {
                G.editPoints && (G.controlsVisible ? (G.pressX = e.stageX,
                G.pressY = e.stageY) : (G.pressX = null,
                G.pressY = null))
            }),
            G.shape.on("pressup", function(e) {
                if (G.editPoints && G.pressX && Math.abs(G.pressX - e.stageX) < ie && Math.abs(G.pressY - e.stageY) < ie) {
                    G.selectPoints && (G.lastPoints = kt.copy(G.points));
                    var t = G.points
                      , o = G.globalToLocal(e.stageX, e.stageY)
                      , n = kt.closestPointAlongCurve(o, G.segmentPoints);
                    t.splice(n + 1, 0, [o.x, o.y, 0, 0, 0, 0, 0, 0]),
                    G.points = t,
                    G.changeControl({
                        index: n + 1,
                        type: "mirror",
                        update: !0
                    }),
                    G.lastSelectedIndex = n + 1,
                    G.lastSelected = G.controls.getChildAt(G.lastSelectedIndex),
                    G.stage.update()
                }
            }),
            G.controls.on("click", function(e) {
                G.lastSelected = e.target.parent;
                var t = G.lastSelectedIndex = G.controls.getChildIndex(e.target.parent);
                if (G.editPoints && G.selectionManager.shiftKey && "Circle" == e.target.type) {
                    if (G.controls.numChildren <= 2)
                        return;
                    var o = G.points;
                    G.selectPoints && (G.lastPoints = kt.copy(o)),
                    o.splice(t, 1),
                    G.points = o,
                    G.stage.update(),
                    G.lastSelected = G.lastSelectedIndex = null
                }
            }),
            H || G.hideControls(),
            G.dispatchEvent("update")
        }
        function ae() {
            var e = []
              , t = G.selectionManager.currentSet;
            if (t && t.selections && 0 < t.selections.length)
                for (var o = 0; o < t.selections.length; o++) {
                    var n = G.pointObjects[t.selections[o]];
                    if (t == G.selectedBalls)
                        e.push(n[1]);
                    else if (t == G.selectedRect1s)
                        e.push(n[2]);
                    else {
                        if (t != G.selectedRect2s)
                            continue;
                        e.push(n[3])
                    }
                }
            return e
        }
        function le(e) {
            if ("Circle" == e.type) {
                var t = e
                  , o = t.mySet
                  , n = t.rect1
                  , r = t.rect2;
                n.x -= t.x,
                n.y -= t.y,
                r.x -= t.x,
                r.y -= t.y,
                o.x += t.x,
                o.y += t.y,
                t.x = 0,
                t.y = 0
            }
        }
        function se() {
            l || (l = !0,
            q.drag({
                onTop: !1
            }),
            Q = q.on("mousedown", Q),
            J = q.on("pressmove", J),
            $ = q.on("pressup", $))
        }
        function ce(e) {
            (e || l) && (l = !1,
            q.noDrag(),
            q.off("mousedown", Q),
            q.off("pressmove", J),
            q.off("pressup", $))
        }
    }
    ,
    kt.extend(kt.Squiggle, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Blob = function(e, t, o, k, T, A, B, S, P, E, M, n, I, j, O, Y, L, r, i, a, D, l, X) {
        var s;
        if (s = zob(kt.Blob, arguments, "color, borderColor, borderWidth, points, radius, controlLength, controlType, lockControlType, showControls, lockControls, handleSize, allowToggle, move, dashed, onTop, stickColor, selectColor, selectPoints, editPoints, interactive, style, group, inherit", this))
            return s;
        z_d("53.5"),
        this.group = l;
        var R = !1 === D ? {} : kt.getStyle("Blob", this.group, X);
        zot(T) && (T = null != R.radius ? R.radius : 100),
        this.zimContainer_constructor(-T, -T, 2 * T, 2 * T, !1),
        this.type = "Blob",
        zot(j) && (j = null != R.dashed && R.dashed),
        zot(t) && (t = null != R.borderColor ? R.borderColor : null),
        zot(o) && (o = null != R.borderWidth ? R.borderWidth : null),
        t < 0 || o < 0 ? t = o = null : null != t && null == o && (o = 1),
        zot(e) && (e = null != R.color ? R.color : 0 < o ? "rgba(0,0,0,0)" : green),
        e.style && (this.colorCommand = e,
        e = "black"),
        t && t.style && (this.borderColorCommand = t,
        t = "black"),
        zot(k) && (k = null != R.points ? R.points : 4);
        var _ = "number" == typeof k ? k : k.length;
        zot(A) && (A = null != R.controlLength ? R.controlLength : 4 * T / _),
        zot(B) && (B = null != R.controlType ? R.controlType : "straight"),
        zot(S) && (S = null != R.lockControlType && R.lockControlType),
        zot(P) && (P = null == R.showControls || R.showControls);
        var W = P;
        zot(E) && (E = null != R.lockControls && R.lockControls),
        zot(M) && (M = null != R.handleSize ? R.handleSize : kt.mobile() ? 20 : 10),
        zot(n) && (n = null == R.allowToggle || R.allowToggle),
        zot(I) && (I = null == R.move || R.move),
        zot(Y) && (Y = null != R.stickColor ? R.stickColor : "#111"),
        zot(L) && (L = null != R.selectColor ? R.selectColor : "#fff"),
        zot(r) && (r = null == R.selectPoints || R.selectPoints),
        this.stickColor = Y,
        zot(O) && (O = null == R.onTop || R.onTop),
        zot(i) && (i = null == R.editPoints || R.editPoints),
        zot(a) && (a = null == R.interactive || R.interactive),
        a || (I = !(E = !(r = i = n = P = !1)));
        var H = this;
        this.interactive = a,
        this.num = _,
        this.editPoints = i,
        this.selectPoints = r,
        this.lockControls = E,
        this.onTop = O,
        this.move = I,
        this.allowToggle = n,
        this.lockControlType = S;
        this.types = ["mirror", "straight", "free", "none"];
        var V, F, N, G, U, K, Z, q, Q, J, $, ee, te, oe, ne = e, re = t, ie = o, c = H.move, ae = 2;
        function d() {
            if (oe && oe.removeAllEventListeners(),
            H.selectPoints ? (H.selectedBalls = new kt.SelectionSet,
            H.selectedRect1s = new kt.SelectionSet,
            H.selectedRect2s = new kt.SelectionSet,
            H.selectionManager = new kt.SelectionManager([H.selectedBalls, H.selectedRect1s, H.selectedRect2s],"ctrl",!1)) : H.selectionManager = new kt.SelectionManager(null,"ctrl"),
            !((_ = "number" == typeof k ? k : k.length) <= 0)) {
                A = 4 * T / _,
                q = H.shape = new kt.Shape({
                    style: !1
                }).addTo(H);
                var n = H.sticks = new kt.Shape({
                    style: !1
                }).addTo(H);
                M <= 0 && n.removeFrom();
                var f = q.graphics;
                f.c();
                var m = n.graphics;
                m.c();
                var e, t, o, r, i, a, l, s, c = M / 10 * 8, d = M, u = kt.mobile();
                oe = H.controls = new kt.Container({
                    style: !1
                }).addTo(H),
                H.move && H.interactive && oe.drag({
                    onTop: !u
                }),
                V = [],
                N = [],
                F = [];
                for (var h = 0; h < _; h++) {
                    if ((o = new kt.Container({
                        style: !1
                    }).addTo(oe)).num = h,
                    "number" == typeof k) {
                        var g = zik(A);
                        (t = new kt.Container(g,T,null,null,!1).reg(g / 2, T).addTo(H)).rotation = h / _ * 360,
                        a = new kt.Circle(c,H.selectPoints && H.selectedBalls.isSelected(h) ? L : light,dark,2,null,!1).centerReg(t).loc({
                            x: g / 2,
                            y: 0
                        }),
                        r = new kt.Rectangle(d,d,H.selectPoints && H.selectedRect1s.isSelected(h) ? L : C(B),0 == M ? null : dark,0 == M ? null : 2,null,null,!1).centerReg(t).loc({
                            x: 0,
                            y: 0
                        }),
                        i = new kt.Rectangle(d,d,H.selectPoints && H.selectedRect2s.isSelected(h) ? L : C(B),0 == M ? null : dark,0 == M ? null : 2,null,null,!1).centerReg(t).loc({
                            x: g,
                            y: 0
                        });
                        var p = t.localToLocal(a.x, a.y, oe);
                        a.x = p.x,
                        a.y = p.y,
                        a.addTo(o, null, !1);
                        var z = t.localToLocal(r.x, r.y, oe);
                        r.x = "none" == B ? 0 : z.x - a.x,
                        r.y = "none" == B ? 0 : z.y - a.y,
                        r.addTo(o, null, !1);
                        var v = t.localToLocal(i.x, i.y, oe);
                        i.x = "none" == B ? 0 : v.x - a.x,
                        i.y = "none" == B ? 0 : v.y - a.y,
                        i.addTo(o, null, !1),
                        o.x = a.x,
                        o.y = a.y,
                        a.x = 0,
                        a.y = 0,
                        "none" == B && a.addTo(o, null, !1)
                    } else
                        l = (s = k[h])[8] ? s[8] : B,
                        o.loc({
                            x: s[0],
                            y: s[1]
                        }),
                        a = new kt.Circle(c,light,dark,2,null,!1).centerReg(o).loc({
                            x: s[2],
                            y: s[3]
                        }),
                        r = new kt.Rectangle(d,d,C(l),0 == M ? null : dark,0 == M ? null : 2,null,null,!1).centerReg(o, 0).loc({
                            x: s[4],
                            y: s[5]
                        }),
                        i = new kt.Rectangle(d,d,C(l),0 == M ? null : dark,0 == M ? null : 2,null,null,!1).centerReg(o, 0).loc({
                            x: s[6],
                            y: s[7]
                        });
                    a.mySet = o,
                    a.rect1 = r,
                    a.rect2 = i,
                    a.index = h,
                    0 == M && (a.expand(10),
                    r.expand(10),
                    i.expand(10)),
                    u ? a.on("mousedown", w) : a.on("dblclick", x),
                    r.ball = a,
                    (r.other = i).ball = a,
                    i.other = r,
                    u && (a.expand(),
                    r.expand(),
                    i.expand()),
                    e = [o, a, r, i, s ? s[8] : B],
                    V.push(e),
                    F.push(a),
                    N.push(o)
                }
                var y, b = !1;
                (te = function() {
                    f.c(),
                    H.colorCommand || (H.colorCommand = G = f.f(ne).command),
                    (zot(ie) || 0 < ie) && (zot(re) && zot(ie) || (zot(re) && (re = "black"),
                    H.borderColorCommand || (H.borderColorCommand = U = f.s(re).command),
                    H.borderWidthCommand || (H.borderWidthCommand = K = f.ss(ie).command),
                    j && (H.borderDashedCommand || (H.borderDashedCommand = Z = f.sd([10, 10], 5).command))));
                    var e = (r = V[0][0]).localToLocal(V[0][1].x, V[0][1].y, q);
                    f.mt(e.x, e.y),
                    m.c().s(H.stickColor).ss(1);
                    for (var t = 0; t < V.length; t++) {
                        var o = t
                          , n = (t + 1) % V.length
                          , r = V[o][0]
                          , i = V[o][1]
                          , a = V[o][2]
                          , l = V[o][3]
                          , s = V[n][0]
                          , c = V[n][1]
                          , d = V[n][2]
                          , u = (V[n][3],
                        r.localToLocal(l.x, l.y, q))
                          , h = s.localToLocal(d.x, d.y, q)
                          , g = s.localToLocal(c.x, c.y, q);
                        f.bt(u.x, u.y, h.x, h.y, g.x, g.y);
                        e = r.localToLocal(i.x, i.y, q);
                        var p = r.localToLocal(a.x, a.y, q);
                        m.mt(e.x, e.y).lt(p.x, p.y),
                        m.mt(e.x, e.y).lt(u.x, u.y)
                    }
                    f.append(H.colorCommand),
                    j && f.append(H.borderDashedCommand),
                    H.borderWidthCommand && f.append(H.borderWidthCommand),
                    H.borderColorCommand && f.append(H.borderColorCommand)
                }
                )(),
                oe.on("mousedown", function(e) {
                    if (!H.lockControls) {
                        if (H.selectPoints && (H.keyFocus = !0),
                        y = {
                            x: e.target.x,
                            y: e.target.y
                        },
                        e.target.rect1) {
                            (o = e.target).startX = o.x,
                            o.startY = o.y,
                            o.rect1.startX = o.rect1.x,
                            o.rect1.startY = o.rect1.y,
                            o.rect2.startX = o.rect2.x,
                            o.rect2.startY = o.rect2.y
                        } else {
                            var t = e.target;
                            t.startX = t.x,
                            t.startY = t.y;
                            var o, n = (o = t.ball).index, r = B;
                            if (zot(V[n][4]) || (r = V[n][4]),
                            "straight" == r) {
                                var i = t.other
                                  , a = i.x - o.x
                                  , l = i.y - o.y;
                                i.stickLength = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2))
                            }
                        }
                        if (H.selectPoints) {
                            var s = H.selectionManager.currentSet;
                            if (s && s.selections && 0 < s.selections.length)
                                for (var c = 0; c < s.selections.length; c++) {
                                    var d = H.pointObjects[s.selections[c]];
                                    d[1].startX = d[1].x,
                                    d[1].startY = d[1].y,
                                    d[2].startX = d[2].x,
                                    d[2].startY = d[2].y,
                                    d[3].startX = d[3].x,
                                    d[3].startY = d[3].y
                                }
                        }
                    }
                }),
                H.selectPoints && oe.tap(function(e) {
                    if (e.target.rect1) {
                        var t = e.target;
                        H.selectedBalls.toggle(t.parent.num)
                    } else {
                        var o = e.target;
                        o.color = "white",
                        (t = o.ball).rect1 == o ? H.selectedRect1s.toggle(t.parent.num) : H.selectedRect2s.toggle(t.parent.num)
                    }
                    for (var n = 0; n < H.pointObjects.length; n++) {
                        var r = H.pointObjects[n];
                        r[1].color = H.selectedBalls.isSelected(n) ? white : light,
                        r[2].color = H.selectedRect1s.isSelected(n) ? white : C(r[4]),
                        r[3].color = H.selectedRect2s.isSelected(n) ? white : C(r[4])
                    }
                    e.target.stage.update()
                }),
                oe.on("pressmove", function(e) {
                    if (!H.lockControls)
                        if (H.selectPoints) {
                            var t = le();
                            if (-1 == t.indexOf(e.target))
                                ee(e.target),
                                te();
                            else if (0 < t.length) {
                                diffX = e.target.x - e.target.startX,
                                diffY = e.target.y - e.target.startY;
                                for (var o = 0; o < t.length; o++) {
                                    var n = t[o];
                                    n.x = n.startX + diffX,
                                    n.y = n.startY + diffY,
                                    ee(n)
                                }
                                te()
                            }
                        } else
                            ee(e.target),
                            te()
                }),
                oe.on("pressup", function(e) {
                    if (!H.lockControls) {
                        var t = e.target.x != y.x || e.target.y != y.y
                          , o = new createjs.Event("change");
                        e.target.rect1 ? (o.controlType = "bezierPoint",
                        function(e) {
                            if (H.selectPoints) {
                                var t = le();
                                if (t && -1 == t.indexOf(e))
                                    se(e);
                                else if (t && 0 < t.length)
                                    for (var o = 0; o < t.length; o++)
                                        se(t[o]);
                                else
                                    se(e)
                            } else
                                se(e)
                        }(e.target)) : o.controlType = "bezierHandle",
                        t && H.dispatchEvent(o)
                    }
                }),
                H.changeControl = function(e, t, o, n, r, i, a, l, s) {
                    var c;
                    if (c = zob(H.changeControl, arguments, "index, type, rect1X, rect1Y, rect2X, rect2Y, circleX, circleY, update"))
                        return c;
                    if (zot(e)) {
                        for (var d = 0; d < V.length; d++)
                            H.changeControl(d, t, o, n, r, i, a, l);
                        return H
                    }
                    var u = V[e];
                    return "none" == (u[4] = t) ? (zot(a) || (u[1].x = a),
                    zot(l) || (u[1].y = l),
                    u[2].x = u[1].x,
                    u[2].y = u[1].y,
                    u[3].x = u[1].x,
                    u[3].y = u[1].y,
                    u[1].parent.addChild(u[1])) : (zot(a) || (u[1].x = a),
                    zot(l) || (u[1].y = l),
                    zot(o) || (u[2].x = o),
                    zot(n) || (u[2].y = n),
                    zot(r) || (u[3].x = r),
                    zot(i) || (u[3].y = i),
                    u[1].parent.addChildAt(u[1], 0)),
                    u[2].color = C(t),
                    u[3].color = C(t),
                    s && (H.update(),
                    H.stage && H.stage.update()),
                    H
                }
                ,
                H.transformPoints = function(e, t, o, n) {
                    return H.points = kt.transformPoints(H.points, e, t, o, n),
                    H
                }
                ,
                H.update = function() {
                    return te(),
                    H
                }
                ,
                H.move && H.interactive && q.drag({
                    onTop: !1
                }),
                Q = q.on("mousedown", function() {
                    y = {
                        x: q.x,
                        y: q.y
                    },
                    H.selectPoints && (H.keyFocus = !0),
                    function() {
                        if (H.onTop) {
                            var e = H.parent.numChildren - 1;
                            "Keyboard" == H.parent.getChildAt(e).type && e--,
                            H.parent.setChildIndex(H, e)
                        }
                    }()
                }),
                J = q.on("pressmove", function() {
                    oe.x = q.x,
                    oe.y = q.y,
                    n.x = q.x,
                    n.y = q.y
                }),
                $ = q.on("pressup", function() {
                    var e = q.x != y.x || q.y != y.y
                      , t = q.localToLocal(0, 0, H.parent);
                    if (H.x = t.x,
                    H.y = t.y,
                    oe.x = oe.y = n.x = n.y = q.x = q.y = 0,
                    e) {
                        var o = new createjs.Event("change");
                        o.controlType = "move",
                        H.dispatchEvent(o)
                    }
                    H.stage.update()
                }),
                I || de(!0),
                H.toggleEvent = H.on("mousedown", function() {
                    H.allowToggle && (W || (H.showControls(),
                    H.dispatchEvent("controlsshow")))
                }),
                H.added(function() {
                    H.toggleStageEvent = H.stage.on("stagemousedown", function(e) {
                        H.allowToggle && H.stage && W && !H.hitTestPoint(e.stageX, e.stageY, !1) && (H.hideControls(),
                        H.dispatchEvent("controlshide"))
                    })
                }),
                H.clickEvent = H.on("click", function() {
                    H.ctrlKey && setTimeout(function() {
                        H.clone(!0).addTo(H.stage).mov(100),
                        H.allowToggle && (H.hideControls(),
                        H.dispatchEvent("controlshide"));
                        var e = new createjs.Event("change");
                        e.controlType = "move",
                        H.dispatchEvent(e),
                        H.stage.update()
                    }, 50)
                }),
                H.hideControls = function() {
                    return H.toggled = !1,
                    oe.visible = !1,
                    n.visible = !1,
                    W = !1,
                    H.stage && H.stage.update(),
                    !H.allowToggle && H.move && de(),
                    H
                }
                ,
                P || H.hideControls(),
                H.showControls = function() {
                    return H.toggled = !0,
                    oe.visible = !0,
                    n.visible = !0,
                    W = !0,
                    oe.x = q.x,
                    oe.y = q.y,
                    n.x = q.x,
                    n.y = q.y,
                    H.addChildAt(q, 0),
                    H.move && !H.allowToggle && ce(),
                    H.stage && H.stage.update(),
                    H
                }
                ,
                H.toggle = function(e) {
                    return !0 === e ? H.showControls() : !1 === e ? H.hideControls() : W ? H.hideControls() : H.showControls(),
                    H
                }
                ,
                H.recordData = function(e) {
                    zot(e) && (e = !1);
                    var t = {
                        type: "Blob",
                        index: H.parent ? H.parent.getChildIndex(H) : -1,
                        x: H.x,
                        y: H.y,
                        points: H.recordPoints(),
                        color: H.color,
                        borderColor: H.borderColor,
                        borderWidth: H.borderWidth,
                        move: H.move,
                        toggle: H.allowToggle,
                        controlsVisible: W
                    };
                    return e ? JSON.stringify(t) : t
                }
                ,
                H.setData = function(e, t) {
                    if (!zot(e)) {
                        if (t)
                            try {
                                e = JSON.parse(e)
                            } catch (e) {
                                return
                            }
                        var o = e.index;
                        zot(o) && (o = -1),
                        delete e.index;
                        var n = e.points;
                        for (var r in zot(n) || H.setPoints(n),
                        delete e.points,
                        this.num = n.length,
                        e)
                            H[r] = e[r];
                        return H.parent && H.parent.setChildIndex(H, o),
                        H
                    }
                }
                ,
                H.recordPoints = function(e) {
                    zot(e) && (e = !1);
                    var t = H.points;
                    if (e) {
                        if (!o) {
                            var o = H.pane = new kt.Pane({
                                displayClose: !1,
                                container: H.stage,
                                width: Math.min(500, H.stage.width - 20),
                                height: Math.min(500, H.stage.height - 20),
                                draggable: !0
                            })
                              , n = H.textArea = new kt.TextArea(Math.min(400, H.stage.width - 70),Math.min(400, H.stage.height - 70));
                            n.centerReg(o)
                        }
                        n.text = JSON.stringify(t),
                        o.show()
                    }
                    return t
                }
                ,
                !(H.setPoints = function(e) {
                    for (var t, o, n = 0; n < e.length; n++)
                        t = V[n],
                        o = e[n],
                        zot(t) || (t[0].x = o[0],
                        t[0].y = o[1],
                        t[1].x = o[2],
                        t[1].y = o[3],
                        t[2].x = o[4],
                        t[2].y = o[5],
                        t[3].x = o[6],
                        t[3].y = o[7],
                        t[4] = o[8],
                        t[2].color = C(t[4]),
                        t[3].color = C(t[4]));
                    return H.update(),
                    H
                }
                ) !== D && Me(H, R),
                H.clone = function(e) {
                    e ? H.colorCommand : H.color,
                    e ? H.colorCommand : H.color;
                    return H.cloneProps(new kt.Blob(e ? H.colorCommand : H.color,e ? H.borderColorCommand : H.borderColor,H.borderWidth,H.recordPoints(),T,A,B,S,oe.visible,E,M,H.allowToggle,H.move,j,O,Y,H.editPoints,D,H.group,X))
                }
                ,
                H.shapeMousedownEvent = H.shape.on("mousedown", function(e) {
                    H.editPoints && (H.controlsVisible ? (H.pressX = e.stageX,
                    H.pressY = e.stageY) : (H.pressX = null,
                    H.pressY = null))
                }),
                H.shapePressupEvent = H.shape.on("pressup", function(e) {
                    if (H.editPoints && H.pressX && Math.abs(H.pressX - e.stageX) < ae && Math.abs(H.pressY - e.stageY) < ae) {
                        H.selectPoints && (H.lastPoints = kt.copy(H.points));
                        var t = H.points
                          , o = H.globalToLocal(e.stageX, e.stageY)
                          , n = kt.closestPointAlongCurve(o, H.segmentPoints);
                        t.splice(n + 1, 0, [o.x, o.y, 0, 0, 0, 0, 0, 0]),
                        H.points = t,
                        H.changeControl({
                            index: n + 1,
                            type: "mirror",
                            update: !0
                        }),
                        H.lastSelectedIndex = n + 1,
                        H.lastSelected = H.controls.getChildAt(H.lastSelectedIndex),
                        H.stage.update()
                    }
                }),
                H.controlsClickEvent = H.controls.on("click", function(e) {
                    H.lastSelected = e.target.parent;
                    var t = H.lastSelectedIndex = H.controls.getChildIndex(e.target.parent);
                    if (zog(t),
                    H.editPoints && H.selectionManager.shiftKey && "Circle" == e.target.type) {
                        if (H.controls.numChildren <= 2)
                            return;
                        var o = H.points;
                        H.selectPoints && (H.lastPoints = kt.copy(o)),
                        o.splice(t, 1),
                        H.points = o,
                        H.stage.update()
                    }
                }),
                W || H.hideControls(),
                H.dispatchEvent("update")
            }
            function w(e) {
                b ? (e.preventDefault(),
                x(e)) : (b = !0,
                setTimeout(function() {
                    b = !1
                }, 300))
            }
            function x(e) {
                if (!H.lockControlType) {
                    var t = e.target
                      , o = V[t.index][4] ? V[t.index][4] : B;
                    Math.abs(t.rect1.x) <= 2 && Math.abs(t.rect1.y) <= 2 && Math.abs(t.rect2.x) <= 2 && Math.abs(t.rect2.y) <= 2 && (o = "none"),
                    "none" == o && t.parent.addChildAt(t, 0),
                    "none" == (o = H.types[(H.types.indexOf(o) + (H.shiftKey ? -1 : 1) + H.types.length) % H.types.length]) && (t.rect1.x = t.rect1.y = t.rect2.x = t.rect2.y = 0,
                    t.parent.addChild(t),
                    e.stopImmediatePropagation()),
                    V[t.index][4] = o,
                    t.rect1.color = C(o),
                    t.rect2.color = C(o),
                    te();
                    var n = new createjs.Event("change");
                    n.controlType = "bezierSwitch",
                    H.dispatchEvent(n),
                    t.stage.update()
                }
            }
            function C(e) {
                var t = {
                    mirror: purple,
                    free: yellow,
                    none: blue
                };
                return t[e] ? t[e] : pink
            }
        }
        function le() {
            var e = []
              , t = H.selectionManager.currentSet;
            if (t && t.selections && 0 < t.selections.length)
                for (var o = 0; o < t.selections.length; o++) {
                    var n = H.pointObjects[t.selections[o]];
                    if (t == H.selectedBalls)
                        e.push(n[1]);
                    else if (t == H.selectedRect1s)
                        e.push(n[2]);
                    else {
                        if (t != H.selectedRect2s)
                            continue;
                        e.push(n[3])
                    }
                }
            return e
        }
        function se(e) {
            if (H.selectPoints && "Circle" == e.type) {
                var t = e
                  , o = t.mySet
                  , n = t.rect1
                  , r = t.rect2;
                n.x -= t.x,
                n.y -= t.y,
                r.x -= t.x,
                r.y -= t.y,
                o.x += t.x,
                o.y += t.y,
                t.x = 0,
                t.y = 0
            }
        }
        function ce() {
            c || (c = !0,
            q.drag({
                onTop: !1
            }),
            Q = q.on("mousedown", Q),
            J = q.on("pressmove", J),
            $ = q.on("pressup", $))
        }
        function de(e) {
            (e || c) && (c = !1,
            q.noDrag(),
            q.off("mousedown", Q),
            q.off("pressmove", J),
            q.off("pressup", $))
        }
        d(),
        H.selectionManager.on("keydown", function(e) {
            if (H.selectPoints && H.keyFocus && 37 <= e.keyCode && e.keyCode <= 40) {
                var t = le();
                if (0 < t.length) {
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o];
                        37 == e.keyCode ? n.x -= H.selectionManager.shiftKey ? 10 : 1 : 39 == e.keyCode ? n.x += H.selectionManager.shiftKey ? 10 : 1 : 38 == e.keyCode ? n.y -= H.selectionManager.shiftKey ? 10 : 1 : 40 == e.keyCode && (n.y += H.selectionManager.shiftKey ? 10 : 1),
                        ee(n)
                    }
                    te(),
                    H.stage && H.stage.update()
                }
            }
        }),
        H.selectionManager.on("keyup", function(e) {
            if (H.selectPoints && H.keyFocus && 37 <= e.keyCode && e.keyCode <= 40) {
                var t = le();
                if (0 < t.length)
                    for (var o = 0; o < t.length; o++)
                        se(t[o])
            }
        }),
        H.selectionManager.on("undo", function() {
            if (H.selectPoints && H.keyFocus && H.lastPoints) {
                var e = kt.copy(H.lastPoints);
                H.lastPoints = kt.copy(H.points),
                H.points = e,
                H.stage && H.stage.update()
            }
        }),
        ee = function(e) {
            if (!H.lockControls)
                if (e.rect1) {
                    var t = (n = e).x - n.startX
                      , o = n.y - n.startY;
                    n.rect1.x = n.rect1.startX + t,
                    n.rect1.y = n.rect1.startY + o,
                    n.rect2.x = n.rect2.startX + t,
                    n.rect2.y = n.rect2.startY + o
                } else {
                    var n, r = e, i = r.other, a = (n = r.ball).index, l = B;
                    if (zot(V[a][4]) || (l = V[a][4]),
                    "straight" == l || "mirror" == l) {
                        var s = r.x - n.x
                          , c = r.y - n.y;
                        if ("mirror" == l)
                            i.x = n.x - s,
                            i.y = n.y - c;
                        else {
                            var d = Math.atan2(c, s)
                              , u = -i.stickLength * Math.cos(d + Math.PI)
                              , h = -i.stickLength * Math.sin(d + Math.PI);
                            i.x = n.x - u,
                            i.y = n.y - h
                        }
                    }
                }
        }
        ,
        Object.defineProperty(H, "move", {
            get: function() {
                return I
            },
            set: function(e) {
                I != e && ((I = e) ? ce() : de())
            }
        }),
        Object.defineProperty(H, "interactive", {
            get: function() {
                return a
            },
            set: function(e) {
                a = e,
                H.showControls = a,
                H.allowToggle = a,
                H.editPoints = a,
                H.lockControls = !a,
                H.selectPoints = a,
                H.move = a,
                H.points = H.points
            }
        }),
        Object.defineProperty(H, "allowToggle", {
            get: function() {
                return n
            },
            set: function(e) {
                n != e && ((n = e) ? H.move && ce() : !W && H.move && de())
            }
        }),
        Object.defineProperty(H, "controlsVisible", {
            get: function() {
                return W
            },
            set: function(e) {
                (W = e) ? H.showControls() : H.hideControls()
            }
        });
        var u, h, g = E;
        Object.defineProperty(H, "lockControls", {
            get: function() {
                return g
            },
            set: function(e) {
                (g = e) ? (H.controls.mouseChildren = !1,
                H.controls.mouseEnabled = !1) : (H.controls.mouseChildren = !0,
                H.controls.mouseEnabled = !0)
            }
        }),
        H.lockControls = g,
        Object.defineProperty(H, "color", {
            get: function() {
                return ne
            },
            set: function(e) {
                zot(e) && (e = "black"),
                ne = e,
                G.style = ne
            }
        }),
        this.setColorRange = function(e, t) {
            return zot(t) ? (u = H.color,
            h = e) : (u = zot(e) ? H.color : e,
            h = t),
            H
        }
        ;
        var p = 0;
        Object.defineProperty(H, "colorRange", {
            get: function() {
                return p
            },
            set: function(e) {
                p = e,
                zot(u) || zot(h) || (H.color = kt.colorRange(u, h, e))
            }
        }),
        Object.defineProperty(H, "borderColor", {
            get: function() {
                return re
            },
            set: function(e) {
                zot(e) || (re = e,
                U ? U.style = re : te())
            }
        }),
        Object.defineProperty(H, "borderWidth", {
            get: function() {
                return ie
            },
            set: function(e) {
                zot(e) || (0 < e || (e = 0),
                ie = e,
                K && 0 != ie ? (K.width = ie,
                j && (Z.segments = [20, 10],
                Z.offset = 5)) : te())
            }
        }),
        "undefined" != typeof KEYFOCUS && (kt.KEYFOCUS = KEYFOCUS),
        Object.defineProperty(this, "keyFocus", {
            get: function() {
                return kt.KEYFOCUS == H
            },
            set: function(e) {
                kt.KEYFOCUS = H
            }
        }),
        H.selectPoints && !kt.KEYFOCUS && function() {
            H.keyFocus = !0;
            var e = document.activeElement;
            e && e.blur()
        }(),
        Object.defineProperty(H, "points", {
            get: function() {
                for (var e, t, o = [], n = 0; n < V.length; n++)
                    t = V[n],
                    e = [kt.decimals(t[0].x), kt.decimals(t[0].y), kt.decimals(t[1].x), kt.decimals(t[1].y), kt.decimals(t[2].x), kt.decimals(t[2].y), kt.decimals(t[3].x), kt.decimals(t[3].y)],
                    t[4] && "straight" !== t[4] && e.push(t[4]),
                    o.push(e);
                return o
            },
            set: function(e) {
                H.dispose(!0),
                k = e,
                H.shape && (H.shape.graphics.clear(),
                H.sticks.graphics.clear(),
                H.controls.noDrag(),
                H.removeAllChildren(),
                delete H.shape,
                delete H.sticks,
                delete H.controls),
                d(),
                H.lockControls = g
            }
        }),
        Object.defineProperty(H, "pointsAdjusted", {
            get: function() {
                var r, i, a = [], l = H.pointObjects;
                return kt.loop(l.length, function(e, t) {
                    if (po = l[e],
                    i = V[e],
                    0 == po[0].rotation)
                        r = [kt.decimals(i[0].x), kt.decimals(i[0].y), kt.decimals(i[1].x), kt.decimals(i[1].y), kt.decimals(i[2].x), kt.decimals(i[2].y), kt.decimals(i[3].x), kt.decimals(i[3].y)];
                    else {
                        var o = po[0].localToLocal(po[2].x, po[2].y, po[0].parent)
                          , n = po[0].localToLocal(po[3].x, po[3].y, po[0].parent);
                        r = [kt.decimals(i[0].x), kt.decimals(i[0].y), kt.decimals(i[1].x), kt.decimals(i[1].y), kt.decimals(o.x - i[0].x), kt.decimals(o.y - i[0].y), kt.decimals(n.x - i[0].x), kt.decimals(n.y - i[0].y)]
                    }
                    i[4] && "mirror" !== i[4] && r.push(i[4]),
                    a.push(r)
                }),
                a
            },
            set: function(e) {
                zon && zog("Blob() - pointsAdjusted is read only")
            }
        }),
        Object.defineProperty(H, "pointObjects", {
            get: function() {
                return V
            },
            set: function(e) {
                zon && zog("Blob() - pointObjects is read only - but its contents can be manipulated - use blob.update() after changes")
            }
        }),
        Object.defineProperty(H, "pointControls", {
            get: function() {
                return N
            },
            set: function(e) {
                zon && zog("Blob() - pointControls is read only - but its contents can be manipulated - use blob.update() after changes")
            }
        }),
        Object.defineProperty(H, "pointCircles", {
            get: function() {
                return F
            },
            set: function(e) {
                zon && zog("Blob() - pointCircles is read only - but its contents can be manipulated - use blob.update() after changes")
            }
        }),
        Object.defineProperty(H, "segmentPoints", {
            get: function() {
                var n = H.pointsAdjusted
                  , r = [];
                return kt.loop(n.length, function(e, t) {
                    var o = H.getSegmentPoint(n[e], n[e < t - 1 ? e + 1 : 0]);
                    r.push(o)
                }),
                r
            },
            set: function(e) {
                zon && zog("Blob() - segmentPoints is read only")
            }
        }),
        Object.defineProperty(H, "segmentRatios", {
            get: function() {
                var o = []
                  , n = 0;
                kt.loop(H.segmentPoints, function(e) {
                    var t = kt.distanceAlongCurve(e);
                    o.push(t),
                    n += t
                });
                var t = []
                  , r = 0;
                return kt.loop(o, function(e) {
                    r += e / n,
                    t.push(r)
                }),
                t
            },
            set: function(e) {
                zon && zog("Blob() - segmentRatios is read only")
            }
        }),
        H.getPointAngle = function(e) {
            var t = H.pointObjects[e][0]
              , o = H.pointObjects[e][2]
              , n = H.pointObjects[e][3]
              , r = t.localToGlobal(o.x, o.y)
              , i = t.localToGlobal(n.x, n.y);
            return kt.angle(r.x, r.y, i.x, i.y)
        }
        ,
        H.getSegmentPoint = function(e, t) {
            if (!zot(e) && !zot(t)) {
                0 == e[2] && 0 == e[3] || (e[4] -= e[2],
                e[5] -= e[3],
                e[6] -= e[2],
                e[7] -= e[3],
                e[0] += e[2],
                e[1] += e[3],
                e[2] = 0,
                e[3] = 0),
                0 == t[2] && 0 == t[3] || (t[4] -= t[2],
                t[5] -= t[3],
                t[6] -= t[2],
                t[7] -= t[3],
                t[0] += t[2],
                t[1] += t[3],
                t[2] = 0,
                t[3] = 0);
                var o = {
                    x: e[0],
                    y: e[1]
                }
                  , n = {
                    x: e[0] + e[6],
                    y: e[1] + e[7]
                }
                  , r = {
                    x: t[0] + t[4],
                    y: t[1] + t[5]
                }
                  , i = {
                    x: t[0],
                    y: t[1]
                };
                return 0 == oe.x && 0 == oe.y || (o.x += oe.x,
                n.x += oe.x,
                r.x += oe.x,
                i.x += oe.x,
                o.y += oe.y,
                n.y += oe.y,
                r.y += oe.y,
                i.y += oe.y),
                [o, n, r, i]
            }
        }
        ,
        H.getAdjacentSegmentData = function(e) {
            zot(e) && (e = 0);
            var t = H.pointsAdjusted;
            if (2 == H.num)
                return [[H.getSegmentPoint(t[0], t[1]), H.getSegmentPoint(t[1], t[0])], [0, 1]];
            if (0 == e)
                return [[H.getSegmentPoint(t[H.num - 1], t[0]), H.getSegmentPoint(t[0], t[1]), H.getSegmentPoint(t[1], t[2])], [H.num - 1, 0, 1]];
            if (e >= H.num - 1)
                return [[H.getSegmentPoint(t[H.num - 2], t[H.num - 1]), H.getSegmentPoint(t[H.num - 1], t[0]), H.getSegmentPoint(t[0], t[1])], [H.num - 2, H.num - 1, 0]];
            var o = e + 2 >= H.num ? 0 : e + 2;
            return [[H.getSegmentPoint(t[e - 1], t[e]), H.getSegmentPoint(t[e], t[e + 1]), H.getSegmentPoint(t[e + 1], t[o])], [e - 1, e, e + 1]]
        }
        ,
        H.getCurvePoint = function(o, e, t, n) {
            zot(e) && (e = H.segmentRatios),
            zot(t) && (t = H.segmentPoints),
            zot(n) && (n = !1);
            var r = e
              , i = t
              , a = kt.loop(r, function(e, t) {
                if (o <= e)
                    return t
            })
              , l = 0 < a ? r[a - 1] : 0
              , s = 0 < a ? r[a] - r[a - 1] : r[a]
              , c = (o - l) / s
              , d = kt.pointAlongCurve(i[a], c, n)
              , u = H.localToGlobal(d.x, d.y);
            return u.angle = d.angle,
            u.z = a,
            zot(u) ? void 0 : u
        }
        ,
        this.dispose = function(e) {
            if (H.shape) {
                H.shape.cursor = "default";
                for (var t = 0; t < H.pointObjects.length; t++)
                    H.pointObjects[t][1].removeAllEventListeners();
                for (t = 0; t < F.length; t++)
                    F[t].removeAllEventListeners();
                return H.sticks.removeFrom(H),
                H.controls.removeFrom(H),
                H.shape.removeAllEventListeners(),
                H.controls.removeAllEventListeners(),
                H.off("mousedown", H.toggleEvent),
                H.off("click", H.clickEvent),
                H.toggleStageEvent && H.stage.off("stagemousedown", H.toggleStageEvent),
                !e && H.selectPoints && H.selectionManager.removeAllEventListeners(),
                !0
            }
        }
    }
    ,
    kt.extend(kt.Blob, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Label = function(e, n, t, o, r, i, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, S, P, E, M) {
        var I;
        if (I = zob(kt.Label, arguments, "text, size, font, color, rollColor, shadowColor, shadowBlur, align, valign, lineWidth, lineHeight, fontOptions, backing, outlineColor, outlineWidth, backgroundColor, backgroundBorderColor, backgroundBorderWidth, corner, backgroundDashed, padding, paddingHorizontal, paddingVertical, shiftHorizontal, shiftVertical, rollPersist, labelWidth, labelHeight, maxSize, style, group, inherit", this))
            return I;
        z_d("54"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Label",
        this.group = E;
        var j = !1 === P ? {} : kt.getStyle(this.type, this.group, M);
        zot(e) && (e = null != j.text ? j.text : "LABEL");
        var O = !1;
        "" === e && (e = " ",
        O = !0),
        zot(n) && (n = null != j.size ? j.size : 36),
        zot(t) && (t = null != j.font ? j.font : "arial"),
        zot(o) && (o = null != j.color ? j.color : "black"),
        zot(r) && (r = null != j.rollColor ? j.rollColor : o),
        (zot(i) || "ignore" == i) && (i = null != j.shadowColor && "ignore" != i ? j.shadowColor : -1),
        (zot(a) || "ignore" == a) && (a = null != j.shadowBlur && "ignore" != a ? j.shadowBlur : 14),
        zot(l) && (l = null != j.align ? j.align : "left"),
        zot(s) && (s = null != j.valign ? j.valign : "top"),
        zot(u) && (u = null != j.fontOptions ? j.fontOptions : ""),
        zot(g) && zot(j.outlineColor) || !zot(p) || (p = null != j.outlineWidth ? j.outlineWidth : Math.round(.2 * n)),
        zot(p) && zot(j.outlineWidth) || !zot(g) || (g = null != j.outlineColor ? j.outlineColor : "#000000"),
        zot(p) && (p = null != j.outlineWidth ? j.outlineWidth : 0),
        (zot(f) || "ignore" == f) && (f = null != j.backgroundColor && "ignore" != f ? j.backgroundColor : null),
        (zot(b) || "ignore" == b) && (b = null != j.padding && "ignore" != b ? j.padding : 10),
        zot(w) && (w = null != j.paddingHorizontal ? j.paddingHorizontal : b),
        zot(x) && (x = null != j.paddingVertical ? j.paddingVertical : b),
        zot(C) && (C = null != j.shiftHorizontal ? j.shiftHorizontal : 0),
        zot(k) && (k = null != j.shiftVertical ? j.shiftVertical : 0),
        zot(c) && (c = null != j.lineWidth ? j.lineWidth : null),
        zot(d) && (d = null != j.lineHeight ? j.lineHeight : null),
        (zot(h) || "ignore" == h) && (h = null != j.backing && "ignore" != h ? j.backing : null),
        zot(T) && null != j.rollPersist && j.rollPersist,
        null != j.labelWidth && (c = j.labelWidth),
        zot(A) || (c = A),
        "middle" == l && (l = "center"),
        zot(S) && null != j.maxSize && j.maxSize,
        n = S ? Math.min(n, S) : n;
        var Y = this;
        this.mouseChildren = !1,
        this.paddingVertical = x,
        this.paddingHorizontal = w;
        var L, D, X = this.label = new createjs.Text(String(e),u + " " + n + "px " + t,o);
        if (X.textAlign = l,
        X.lineWidth = c,
        X.lineHeight = d,
        X.textBaseline = "alphabetic",
        0 < p) {
            var R = this.outlineLabel = X.clone();
            R.color = g,
            R.outline = p,
            this.addChild(R)
        }
        function _() {
            var e, t = X.getBounds();
            if ("baseline" == s ? e = t.y : "top" == s ? (X.y = n - n / 6,
            R && (R.y = n - n / 6),
            e = 0) : "center" == s || "middle" == s ? (e = -t.height / 2,
            X.y = .3 * n,
            R && (R.y = .3 * n)) : e = -t.height,
            h)
                if ("Pattern" == h.type)
                    Y.setBounds(t.x - w, e - x, t.width + 2 * w, t.height + 2 * x);
                else {
                    var o = h.getBounds();
                    Y.setBounds(o.x, o.y, o.width, o.height)
                }
            else
                zot(f) ? (Y.setBounds(t.x, e, t.width, t.height),
                W.graphics.c().f("black").r(Y.getBounds().x, Y.getBounds().y, Y.getBounds().width, Y.getBounds().height)) : (Y.setBounds(t.x, e, t.width, t.height),
                Y.removeChild(Y.background),
                Y.background = new kt.Rectangle(Y.getBounds().width + 2 * w,Y.getBounds().height + 2 * x,f,m,z,v,y,!1),
                kt.center(Y.background, Y, 0),
                Y.setBounds(Y.background.x, Y.background.y, Y.background.width, Y.background.height));
            kt.center(X, Y),
            kt.pos(X, "left" == l || "right" == l ? h || Y.background ? w : 0 : null, "top" == s || "baseline" == s || "bottom" == s ? h || Y.background ? x : 0 : null, "right" == l, "bottom" == s),
            "baseline" != s && (X.y += n / 32),
            X.x += C,
            X.y += k,
            R && (kt.center(R, Y, Y.numChildren - 2),
            "baseline" != s && (R.y += n / 32),
            R.x += C,
            R.y += k)
        }
        if (-1 != i && 0 < a && (X.shadow = new createjs.Shadow(i,3,3,a)),
        this.addChild(X),
        zot(h) && zot(f)) {
            var W = new createjs.Shape;
            Y.hitArea = W
        }
        if (_(),
        !zot(h)) {
            if ("Pattern" == h.type) {
                if (Y.backing = new kt.Container(Y.width,Y.height,null,null,!1).centerReg(null, null, !1),
                -1 != i && 0 < a)
                    new kt.Rectangle(Y.width - 2,Y.height - 2,"#666",null,null,null,null,!1).center(Y.backing).shadow = new createjs.Shadow(i,3,3,a);
                var H = Y.backing.mask = new kt.Rectangle(Y.width,Y.height,f,null,null,null,null,!1).addTo(Y.backing);
                h.centerReg(H),
                h.setMask(H.shape),
                Y.backing.pattern = h
            } else
                Y.backing = h;
            h.center(Y, 0)
        }
        Object.defineProperty(Y, "text", {
            get: function() {
                return " " == X.text && O ? "" : X.text
            },
            set: function(e) {
                O = !1,
                "" === e && (e = " ",
                O = !0),
                X.text = String(e),
                R && (R.text = String(e)),
                _(),
                zot(c) || zot(B) || F()
            }
        }),
        Object.defineProperty(Y, "size", {
            get: function() {
                return n
            },
            set: function(e) {
                n = S ? Math.min(e, S) : e;
                var t = this.label.font.match(/^(.*\s)(\d*\.?\d*)+px(.*)$/i);
                t && (this.label.font = t[1] + e + "px" + t[3],
                _())
            }
        }),
        Object.defineProperty(Y, "color", {
            get: function() {
                return o
            },
            set: function(e) {
                r == o && (r = e),
                o = e,
                X.color = o,
                kt.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
            }
        }),
        this.setColorRange = function(e, t) {
            return zot(t) ? (L = Y.color,
            D = e) : (L = zot(e) ? Y.color : e,
            D = t),
            Y
        }
        ;
        var V = 0;
        function F() {
            for (Y.size = 200; Y.height > B || Y.width > c; )
                Y.size = Y.size / 2;
            for (var e = 0; Y.height <= B && Y.width <= c && (e++,
            Y.size = Math.ceil(Y.size + 1),
            !(50 < e)); )
                ;
            Y.size = Y.size - 1
        }
        Object.defineProperty(Y, "colorRange", {
            get: function() {
                return V
            },
            set: function(e) {
                V = e,
                zot(L) || zot(D) || (Y.color = kt.colorRange(L, D, e))
            }
        }),
        Object.defineProperty(Y, "outlineColor", {
            get: function() {
                return g
            },
            set: function(e) {
                g = e,
                R && (R.color = g),
                kt.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
            }
        }),
        Object.defineProperty(Y, "rollColor", {
            get: function() {
                return r
            },
            set: function(e) {
                r = e
            }
        }),
        this._enabled = !0,
        Object.defineProperty(Y, "enabled", {
            get: function() {
                return Y._enabled
            },
            set: function(e) {
                Se(Y, e),
                X.color = o,
                Y.mouseChildren = !1,
                kt.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
            }
        }),
        this.showRollColor = function(e) {
            return zot(e) && (e = !0),
            X.color = e ? r : o,
            Y.stage && Y.stage.update(),
            Y
        }
        ,
        this.mouseoverEvent = this.on("mouseover", function(e) {
            Y.showRollColor && Y.showRollColor()
        }),
        this.mouseoutEvent = this.on("mouseout", function(e) {
            Y.rollPersist || Y.showRollColor(!1)
        }),
        this.pressupEvent = this.on("pressup", function(e) {
            Y.rollPersist && Y.showRollColor(!1)
        }),
        Object.defineProperty(Y, "labelWidth", {
            get: function() {
                return c
            },
            set: function(e) {
                0 < e && (c = e,
                Y.label.lineWidth = e),
                B && F(),
                kt.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
            }
        }),
        Object.defineProperty(Y, "labelHeight", {
            get: function() {
                return B
            },
            set: function(e) {
                0 < e && (B = e),
                c && F(),
                kt.OPTIMIZE || !zns && OPTIMIZE || !Y.stage || Y.stage.update()
            }
        }),
        zot(c) || zot(B) || F(),
        Me(this, j),
        this.clone = function() {
            return Y.cloneProps(new kt.Label(Y.text,n,t,o,r,i,a,l,s,c,d,u,zot(h) ? null : h.clone(),g,p,f,m,z,v,y,b,w,x,C,k,T,A,B,S,P,this.group,M))
        }
    }
    ,
    kt.extend(kt.Label, kt.Container, "clone", "zimContainer"),
    kt.LabelOnPath = function(o, i, a, l, e, t, n, r, s, c, d) {
        var u;
        if (u = zob(kt.LabelOnPath, arguments, "label, path, percentAngle, percents, showPath, allowToggle, interactive, onTop, style, group, inherit", this))
            return u;
        z_d("54.5"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "LabelOnPath",
        this.group = c;
        var h = !1 === s ? {} : kt.getStyle(this.type, this.group, d);
        zot(o) && (o = null != h.label ? h.label : new kt.Label("Label on Path")),
        zot(i) && (i = null != h.path ? h.path : new kt.Squiggle({
            points: [[0, 0, 0, 0, -86, 57, 86, -57], [300, 150, 0, 0, -133, 21, 133, -21]]
        })),
        zot(a) && (a = null != h.percentAngle ? h.percentAngle : 100),
        zot(l) && (l = null != h.percents ? h.percents : null),
        zot(e) && (e = null == h.showPath || h.showPath),
        zot(t) && (t = null == h.allowToggle || h.allowToggle),
        zot(n) && (n = null == h.interactive || h.interactive),
        zot(r) && (r = null != h.onTop && h.onTop),
        i.addTo(this);
        var g = this;
        this.path = i,
        this.allowToggle = t,
        i.interactive = n,
        "string" == typeof o && (o = new Label(o));
        var p = i.alpha;
        e || i.alp(0),
        i.onTop = r;
        var f = this.letters = (new Container).addTo(this);
        if (!l) {
            l = [];
            for (var m = 0; m < o.text.length; m++)
                l.push(kt.decimals(1 / (o.text.length - ("Blob" == i.type ? 0 : 1)) * 100 * m))
        }
        function z() {
            for (var e = f.numChildren - 1; 0 <= e; e--)
                f.getChildAt(e).dispose();
            g.numLetters = o.text.length;
            for (e = 0; e < g.numLetters; e++) {
                var t = o.clone();
                t.text = o.text[e],
                t.centerReg(f).reg(null, t.height),
                "" != t.text && " " != t.text && t.expand(0),
                g.allowToggle && (t.cursor = "pointer"),
                t.on("mousedown", function() {
                    g.allowToggle && g.toggle()
                })
            }
            g.resize()
        }
        this.percents = l,
        this.resize = function() {
            for (var e = i.segmentRatios, t = i.segmentPoints, o = 0; o < this.numLetters; o++) {
                var n = i.getCurvePoint(l[o] / 100, e, t, !0);
                if (n) {
                    var r = this.globalToLocal(n.x, n.y);
                    r && f.getChildAt(o).loc(r).rot((180 < n.angle ? n.angle - 360 : n.angle) * a / 100)
                }
            }
            return this
        }
        ,
        z(),
        this.showPath = function(e) {
            return this.toggle(!0),
            i.toggle(e),
            this
        }
        ,
        this.hidePath = function() {
            return this.toggle(!1),
            this
        }
        ,
        Object.defineProperty(g, "text", {
            get: function() {
                return o.text
            },
            set: function(e) {
                o.text = e,
                l = [];
                for (var t = 0; t < o.text.length; t++)
                    l.push(kt.decimals(1 / (o.text.length - ("Blob" == i.type ? 0 : 1)) * 100 * t));
                z()
            }
        }),
        Object.defineProperty(g, "interactive", {
            get: function() {
                return n
            },
            set: function(e) {
                n = e,
                i.interactive = e,
                this.ticker && Ticker.remove(this.ticker),
                n && (this.ticker = Ticker.add(function() {
                    g.resize()
                }))
            }
        }),
        this.interactive && (this.ticker = Ticker.add(function() {
            g.resize()
        }));
        var v = g.toggled = e;
        this.toggle = function(e) {
            if (this.allowToggle)
                return (v = zot(e) ? !v : !!e) ? (i.alp(p),
                this.interactive && (i.showControls(),
                f.mouseEnabled = !1,
                f.mouseChildren = !1,
                f.cursor = "default",
                this.controlHideEvent && i.off("controlshide", this.controlHideEvent),
                this.controlHideEvent = i.on("controlshide", function() {
                    f.mouseEnabled = !0,
                    f.mouseChildren = !0,
                    f.cursor = "pointer",
                    p = i.alpha,
                    i.alp(0),
                    v = !1,
                    g.toggled = v
                }, null, !0))) : (p = i.alpha,
                i.alp(0),
                f.mouseEnabled = !0,
                f.mouseChildren = !0,
                f.cursor = "pointer"),
                g.toggled = v,
                g.stage.update(),
                g
        }
        ,
        Me(this, h),
        this.clone = function() {
            return g.cloneProps(new kt.LabelOnPath(g.label.clone(),g.path.clone(),a,kt.copy(l),e,t,n,r,s,this.group,d))
        }
        ,
        this.dispose = function() {
            return this.ticker && Ticker.remove(this.ticker),
            this.zimContainer_dispose(),
            !0
        }
    }
    ,
    kt.extend(kt.LabelOnPath, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Button = function(n, r, t, i, a, o, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, S, P, E, M, I, j, O, Y, L, D, X, R, _, W, H, V, F, N, G, e, U) {
        var K;
        if (K = zob(kt.Button, arguments, "width, height, label, backgroundColor, rollBackgroundColor, color, rollColor, borderColor, borderRollColor, borderWidth, corner, shadowColor, shadowBlur, hitPadding, gradient, gloss, dashed, backing, rollBacking, rollPersist, icon, rollIcon, toggle, toggleBacking, rollToggleBacking, toggleIcon, rollToggleIcon, toggleEvent, wait, waitTime, waitBackgroundColor, rollWaitBackgroundColor, waitColor, rollWaitColor, waitModal, waitEnabled, waitBacking, rollWaitBacking, waitIcon, rollWaitIcon, align, valign, indent, indentHorizontal, indentVertical, style, group, inherit", this))
            return K;
        z_d("55"),
        this.group = e;
        var Z = !1 === G ? {} : kt.getStyle("Button", e, U);
        zot(n) && (n = null != Z.width ? Z.width : 200),
        zot(r) && (r = null != Z.height ? Z.height : 60),
        this.zimContainer_constructor(n, r, null, null, !1),
        this.type = "Button",
        zot(i) && (i = null != Z.backgroundColor ? Z.backgroundColor : "#C60"),
        zot(a) && (a = null != Z.rollBackgroundColor ? Z.rollBackgroundColor : "#F93"),
        zot(o) && (o = null != Z.color ? Z.color : "white"),
        zot(l) && (l = null != Z.rollColor ? Z.rollColor : "white"),
        zot(M) && (M = null != Z.waitBackgroundColor ? Z.waitBackgroundColor : i),
        zot(I) && (I = null != Z.rollWaitBackgroundColor ? Z.rollWaitBackgroundColor : a),
        zot(s) && (s = null != Z.borderColor ? Z.borderColor : null),
        zot(d) && (d = null != Z.borderWidth ? Z.borderWidth : null),
        s < 0 || d < 0 ? s = d = null : null != s && null == d && (d = 1),
        zot(c) && (c = null != Z.borderRollColor ? Z.borderRollColor : s),
        zot(u) && (u = null != Z.corner ? Z.corner : 20),
        zot(h) && (h = null != Z.shadowColor ? Z.shadowColor : "rgba(0,0,0,.3)"),
        zot(g) && (g = null != Z.shadowBlur ? Z.shadowBlur : 14),
        zot(p) && (p = null != Z.hitPadding ? Z.hitPadding : 0),
        zot(W) && (W = null != Z.align ? Z.align : "center"),
        zot(H) && (H = null != Z.valign ? Z.valign : "center"),
        zot(V) && (V = null != Z.indent ? Z.indent : 10),
        zot(F) && (F = null != Z.indentHorizontal ? Z.indentHorizontal : V),
        zot(N) && (N = null != Z.indentVertical ? Z.indentVertical : V),
        zot(f) && (f = null != Z.gradient ? Z.gradient : 0),
        zot(m) && (m = null != Z.gloss ? Z.gloss : 0),
        zot(t) && (t = zot(w) ? null != Z.label ? Z.label : "PRESS" : "");
        var q = (!zot(C) || !zot(k) || !zot(T) || !zot(A) || !zot(B)) && zot(P) && zot(D) && zot(X);
        q && zot(S) && (S = kt.mobile() ? "mousedown" : "click"),
        "string" != typeof t && "number" != typeof t || (t = new kt.Label({
            text: t,
            size: null != Z.size ? Z.size : 36,
            font: null != Z.font ? Z.font : "arial",
            color: null != Z.color ? Z.color : o,
            rollColor: null != Z.rollColor ? Z.rollColor : l,
            align: W,
            valign: H,
            rollPersist: null != Z.rollPersist && Z.rollPersist,
            backing: "ignore",
            shadowColor: "ignore",
            shadowBlur: "ignore",
            padding: "ignore",
            backgroundColor: "ignore",
            style: !1,
            group: this.group
        })),
        zot(b) && (b = null != Z.rollPersist && Z.rollPersist),
        this.rollPersist = b,
        zot(z) && (z = null != Z.dashed && Z.dashed),
        zot(C) || "Label" != C.type || zon && zog("ZIM Button() - do not pass Label to toggle parameter - just pass a String");
        var Q = this;
        this.mouseChildren = !1,
        this.cursor = "pointer",
        Q.focus = !1,
        Q.rolled = !1,
        zot(v) && (v = null != Z.backing ? Z.backing.clone() : null),
        zot(v) ? Q.backing = new kt.Rectangle(n,r,i,null,null,u,z,!1).centerReg(null, null, !1) : Q.backing = v,
        Q.rollBacking = zot(y) ? null != Z.rollBacking ? Z.rollBacking.clone() : null : y,
        Q.waitBacking = zot(D) ? null != Z.waitBacking ? Z.waitBacking.clone() : null : D,
        Q.rollWaitBacking = zot(X) ? null != Z.rollWaitBacking ? Z.rollWaitBacking.clone() : null : X,
        Q.toggleBacking = zot(k) ? null != Z.toggleBacking ? Z.toggleBacking.clone() : null : k,
        Q.rollToggleBacking = zot(T) ? null != Z.rollToggleBacking ? Z.rollToggleBacking.clone() : null : T;
        for (var J, $, ee = ["backing", "rollBacking", "toggleBacking", "rollToggleBacking", "waitBacking", "rollWaitBacking"], te = 0; te < ee.length; te++)
            J = ee[te],
            ($ = Q[J]) && ("Pattern" == $.type ? $ = oe(J, $) : -1 != h && 0 < g && ($.shadow = new createjs.Shadow(h,3,3,g)),
            $.x = n / 2,
            $.y = r / 2);
        function oe(e, t) {
            (Q[e] = new kt.Container(n,r,null,null,!1).centerReg(null, null, !1),
            -1 != h && 0 < g) && (new kt.Rectangle(n - 2,r - 2,"#666",null,null,u,null,!1).center(Q[e]).shadow = new createjs.Shadow(h,3,3,g));
            var o = Q[e].mask = new kt.Rectangle(n,r,0 <= e.indexOf("roll") ? a : i,null,null,u,null,!1).addTo(Q[e]);
            return t.centerReg(o),
            t.setMask(o.shape),
            Q[e].pattern = t,
            Q[e]
        }
        Q.addChild(Q.backing),
        d && (Q.border = new kt.Rectangle(n,r,"rgba(0,0,0,0)",s,d,u,null,!1),
        Q.addChild(Q.border)),
        Q.icon = zot(w) ? null != Z.icon ? Z.icon.clone() : null : w,
        Q.rollIcon = zot(x) ? null != Z.rollIcon ? Z.rollIcon.clone() : null : x,
        Q.waitIcon = zot(R) ? null != Z.waitIcon ? Z.waitIcon.clone() : null : R,
        Q.rollWaitIcon = zot(_) ? null != Z.rollWaitIcon ? Z.rollWaitIcon.clone() : null : _,
        Q.toggleIcon = zot(A) ? null != Z.toggleIcon ? Z.toggleIcon.clone() : null : A,
        Q.rollToggleIcon = zot(B) ? null != Z.rollToggleIcon ? Z.rollToggleIcon.clone() : null : B;
        var ne, re, ie = ["icon", "rollIcon", "toggleIcon", "rollToggleIcon", "waitIcon", "rollWaitIcon"];
        for (te = 0; te < ie.length; te++) {
            var ae = ie[te]
              , le = Q[ae];
            le && (le.x = n / 2,
            le.y = r / 2)
        }
        if (Q.icon && Q.addChild(Q.icon),
        Array.isArray(u) || (u = [u, u, u, u]),
        0 < f) {
            var se = new createjs.Shape;
            se.graphics.lf(["rgba(255,255,255," + f + ")", "rgba(0,0,0," + f + ")"], [0, 1], 0, 0, 0, r - d),
            se.graphics.rc(d / 2, d / 2, n - d, r - d, u[0], u[1], u[2], u[3]),
            this.addChild(se)
        }
        if (0 < m) {
            var ce = new createjs.Shape;
            ce.graphics.f("rgba(255,255,255," + m + ")"),
            ce.graphics.rc(d / 2, d / 2, n - d, (r - d) / 2, u[0], u[1], 0, 0),
            ce.graphics.f("rgba(0,0,0," + m + ")"),
            ce.graphics.rc(d / 2, r / 2, n - d, (r - d) / 2, 0, 0, u[2], u[3]),
            this.addChild(ce)
        }
        function de() {
            (re = new createjs.Shape).graphics.f("#000").r(-p, -p, n + 2 * p, r + 2 * p),
            Q.hitArea = ne = re
        }
        if (0 < p && de(),
        this.addChild(t),
        t.center(this),
        t.y += 1,
        this.label = t,
        kt.pos(t, "left" == W || "right" == W ? F : null, "top" == H || "bottom" == H ? N : null, "right" == W, "bottom" == H),
        this.toggled = !1,
        q) {
            var ue = t.text;
            this.on(S, function() {
                Q.toggled = !Q.toggled,
                he()
            })
        }
        function he() {
            Q.toggled ? (zot(C) || (Q.text = C),
            Q.rolled ? (Q.rollToggleBacking ? ke("rollToggleBacking", Q.rollToggleBacking) : Q.toggleBacking && ke("toggleBacking", Q.toggleBacking),
            Q.rollToggleIcon ? ke("rollToggleIcon", Q.rollToggleIcon) : Q.toggleIcon && ke("toggleIcon", Q.toggleIcon)) : (Q.toggleBacking && ke("toggleBacking", Q.toggleBacking),
            Q.toggleIcon && ke("toggleIcon", Q.toggleIcon))) : (Q.text = ue,
            ge()),
            Q.stage && Q.stage.update()
        }
        function ge() {
            Q.rolled ? (zot(v) && !Q.rollBacking && (Q.backing.color = a),
            Q.rollBacking ? ke("rollBacking", Q.rollBacking) : Q.backing && ke("backing", Q.backing),
            Q.rollIcon ? ke("rollIcon", Q.rollIcon) : Q.icon ? ke("icon", Q.icon) : ke("icon", null)) : (zot(v) && (Q.backing.color = i),
            Q.backing && ke("backing", Q.backing),
            Q.icon ? ke("icon", Q.icon) : ke("icon", null))
        }
        var pe, fe, me, ze, ve = !(this.toggle = function(e) {
            return q ? (zot(e) ? Q.toggled = !Q.toggled : Q.toggled = e,
            he()) : zon && zog("zim.Button() - can't toggle with wait parameters provided"),
            Q
        }
        ), ye = Q.waiting = !1, be = Q.label.color, we = Q.label.rollColor, xe = this.on("mousedown", function() {
            ve = !0,
            Ce()
        });
        function Ce() {
            zot(P) && zot(D) && zot(X) || Q.waiting || (ye = !0,
            zot(L) && (L = !0),
            Y && (ze = Q.stage.on("stagemousedown", function(e) {
                Q.hitTestPoint(e.stageX, e.stageY) || Q.clearWait()
            }, null, !0)),
            setTimeout(function() {
                Q.waiting = !0
            }, 50),
            fe = t.text,
            zot(j) || (Q.label.color = j),
            zot(O) || (Q.label.rollColor = O),
            me = Q.enabled,
            !L && Q.enabled && (Q.enabled = !1),
            zot(P) || (Q.text = P),
            Q.rolled ? (zot(v) && !Q.rollWaitBacking && (Q.backing.color = I),
            Q.rollWaitBacking ? ke("rollWaitBacking", Q.rollWaitBacking) : Q.waitBacking && ke("waitBacking", Q.waitBacking),
            Q.rollWaitIcon ? ke("rollWaitIcon", Q.rollWaitIcon) : Q.waitIcon && ke("waitIcon", Q.waitIcon)) : (zot(v) && !Q.waitBacking && (Q.backing.color = M),
            Q.waitBacking && ke("waitBacking", Q.waitBacking),
            Q.waitIcon && ke("waitIcon", Q.waitIcon)),
            zot(E) && (E = 3e4),
            pe && pe.clear(),
            pe = timeout(E, function() {
                Q.enabled || (Q.enabled = me),
                Q.clearWait(),
                Q.dispatchEvent("waited")
            }),
            Q.stage && Q.stage.update())
        }
        function ke(e, t) {
            if (0 <= e.indexOf("con")) {
                for (var o = 0; o < ie.length; o++) {
                    var n = ie[o]
                      , r = Q[n];
                    Q.removeChild(r)
                }
                Q[e] && Q.addChildAt(Q[e], 1)
            } else {
                if (!Q[e])
                    return;
                for (o = 0; o < ee.length; o++) {
                    var i = ee[o]
                      , a = Q[i];
                    Q.removeChild(a)
                }
                Q[e] && Q.addChildAt(Q[e], 0)
            }
        }
        this.wait = function() {
            Ce()
        }
        ,
        this.clearWait = function() {
            return pe && (ze && Q.stage.off("stagemousedown", ze),
            pe.clear(),
            Q.text = fe,
            ge(),
            Q.label.color = be,
            Q.label.rollColor = we,
            setTimeout(function() {
                Q.waiting = !1
            }, 55),
            ye = !1,
            Q.stage && Q.stage.update()),
            Q
        }
        ,
        this.removeWait = function() {
            return Q.clearWait(),
            P = null,
            Q.waitBacking = null,
            Q.rollWaitBacking = null,
            Q.off("mousedown", xe),
            Q
        }
        ,
        this.on("pressup", function() {
            ve = !1,
            Q.rollPersist && !Te && Ae()
        });
        var Te = !1;
        function Ae() {
            Q.rolled = !1,
            ye || Q.waiting ? (zot(v) && zot(Q.waitBacking) && (Q.backing.color = zot(M) ? i : M),
            Q.waitBacking ? ke("waitBacking", Q.waitBacking) : ke("backing", Q.backing),
            Q.waitIcon ? ke("waitIcon", Q.waitIcon) : Q.icon ? ke("icon", Q.icon) : ke("icon")) : Q.toggled && q ? (zot(v) && zot(Q.toggleBacking) && (Q.backing.color = i),
            Q.toggleBacking ? ke("toggleBacking", Q.toggleBacking) : ke("backing", Q.backing),
            Q.toggleIcon ? ke("toggleIcon", Q.toggleIcon) : Q.icon ? ke("icon", Q.icon) : ke("icon")) : (zot(v) ? Q.backing.color = i : zot(v.mask) || (Q.backing.mask.color = i),
            ke("backing", Q.backing),
            Q.icon ? ke("icon", Q.icon) : ke("icon")),
            Q.border && (Q.border.borderColor = s),
            Q.label.showRollColor && Q.label.showRollColor(!1),
            Q.stage && Q.stage.update()
        }
        function Be(e, t) {
            return zot(e) || (Q.contains(Q[e]) && (Q.removeChild(Q[e]),
            t && Q.addChildAt(t, 0 <= e.indexOf("con") ? Q.numChildren - 1 : 0),
            Q.stage && Q.stage.update()),
            t ? (zot(v) && "backing" == e && (v = t),
            "Pattern" == t.type && (t = oe(e, t)),
            Q[e] = t,
            Q[e].x = n / 2,
            Q[e].y = r / 2) : Q[e] = null),
            Q
        }
        this.on("mouseover", function(e) {
            Q.rolled = !0,
            Te = !0,
            ye ? (zot(v) && zot(Q.rollWaitBacking) && (Q.backing.color = zot(I) ? a : I),
            ke("rollWaitBacking", Q.rollWaitBacking),
            Q.rollWaitIcon && ke("rollWaitIcon", Q.rollWaitIcon)) : q && Q.toggled ? (zot(v) && zot(Q.rollToggleBacking) && (Q.backing.color = a),
            ke("rollToggleBacking", Q.rollToggleBacking),
            Q.rollToggleIcon && ke("rollToggleIcon", Q.rollToggleIcon)) : (zot(v) ? Q.backing.color = a : zot(v.mask) || (Q.backing.mask.color = a),
            ke("rollBacking", Q.rollBacking),
            Q.rollIcon && ke("rollIcon", Q.rollIcon));
            Q.border && (Q.border.borderColor = c);
            Q.label.showRollColor && Q.label.showRollColor();
            Q.stage && Q.stage.update()
        }),
        this.on("mouseout", function e(t) {
            Te = !1;
            Q.off("mouseout", e);
            Q.rollPersist && ve || Ae()
        }),
        Object.defineProperty(Q, "text", {
            get: function() {
                return " " == t.text ? "" : t.text
            },
            set: function(e) {
                t.text = e,
                t.center(this),
                t.y += 1
            }
        }),
        Object.defineProperty(Q, "color", {
            get: function() {
                return o
            },
            set: function(e) {
                o = e,
                Q.label && Q.label.color && (Q.label.color = o),
                kt.OPTIMIZE || !zns && OPTIMIZE || !Q.stage || Q.stage.update()
            }
        }),
        Object.defineProperty(Q, "rollColor", {
            get: function() {
                return l
            },
            set: function(e) {
                l = e,
                Q.label && Q.label.color && (Q.label.color = l)
            }
        }),
        Object.defineProperty(Q, "backgroundColor", {
            get: function() {
                return i
            },
            set: function(e) {
                i = e,
                Q.backing.color ? Q.backing.color = i : Q.backing.mask && (Q.backing.mask.color = i),
                kt.OPTIMIZE || !zns && OPTIMIZE || !Q.stage || Q.stage.update()
            }
        }),
        Object.defineProperty(Q, "rollBackgroundColor", {
            get: function() {
                return a
            },
            set: function(e) {
                a = e,
                Q.rollBacking.color ? Q.rollBacking.color = a : Q.rollBacking.mask && (Q.rollBacking.mask.color = a)
            }
        }),
        Object.defineProperty(Q, "borderColor", {
            get: function() {
                return s
            },
            set: function(e) {
                s = e,
                Q.backing.borderColor && (Q.backing.borderColor = e,
                Q.border && (Q.border.borderColor = e))
            }
        }),
        Object.defineProperty(Q, "borderRollColor", {
            get: function() {
                return c
            },
            set: function(e) {
                c = e
            }
        }),
        Object.defineProperty(Q, "hitPadding", {
            get: function() {
                return p
            },
            set: function(e) {
                0 == (p = e) ? ne && (this.hitArea = null) : de()
            }
        }),
        this._enabled = !0,
        this.startMouseChildren = this.mouseChildren,
        Object.defineProperty(Q, "enabled", {
            get: function() {
                return Q._enabled
            },
            set: function(e) {
                Q._enabled && (Q.startMouseChildren = Q.mouseChildren),
                e ? (Se(Q, e),
                Q.mouseChildren = Q.startMouseChildren) : (Ae(),
                Se(Q, e)),
                t.color = t.color,
                kt.OPTIMIZE || !zns && OPTIMIZE || !Q.stage || Q.stage.update()
            }
        }),
        this.setBacking = function(e, t) {
            Be(e, t)
        }
        ,
        !(this.setIcon = function(e, t) {
            Be(e, t)
        }
        ) !== G && !1 !== G && Me(this, Z),
        this.clone = function() {
            var e = new kt.Button(n,r,t.clone(),i,a,o,l,s,c,d,u,h,g,p,f,m,z,zot(v) ? null : Q.backing.clone(),zot(y) ? null : Q.rollBacking.clone(),b,zot(w) ? null : w.clone(),zot(x) ? null : x.clone(),C,zot(k) ? null : k.clone(),zot(T) ? null : T.clone(),zot(A) ? null : A.clone(),zot(B) ? null : B.clone(),S,P,E,M,I,j,O,Y,L,zot(D) ? null : D.clone(),zot(X) ? null : X.clone(),zot(R) ? null : R.clone(),zot(_) ? null : _.clone(),W,H,V,F,N,G,this.group);
            return Q.cloneProps(e)
        }
    }
    ,
    kt.extend(kt.Button, kt.Container, "clone", "zimContainer", !1),
    kt.CheckBox = function(t, o, e, n, r, i, a, l, s, c, d, u, h, p) {
        var f;
        if (f = zob(kt.CheckBox, arguments, "size, label, startChecked, color, backgroundColor, borderColor, borderWidth, corner, margin, indicatorType, indicatorColor, style, group, inherit", this))
            return f;
        z_d("56"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "CheckBox",
        this.group = h;
        var m = !1 === u ? {} : kt.getStyle(this.type, this.group, p);
        zot(t) && (t = null != m.size ? m.size : 60),
        zot(o) && (o = null != m.label ? m.label : null),
        zot(e) && (e = null != m.startChecked && m.startChecked);
        var z = e;
        zot(n) && (n = null != m.color ? m.color : "#111"),
        zot(r) && (r = null != m.backgroundColor ? m.backgroundColor : "rgba(255,255,255,.5)"),
        zot(i) && (i = null != m.borderColor ? m.borderColor : "#111"),
        zot(a) && (a = null != m.borderWidth ? m.borderWidth : t / 10),
        i < 0 || a < 0 ? i = a = null : null != i && null == a && (a = t / 10),
        zot(l) && (l = null != m.corner ? m.corner : 0),
        "string" != typeof o && "number" != typeof o || (o = new kt.Label({
            text: o,
            size: 5 * t / 6,
            color: n,
            valign: "center",
            backing: "ignore",
            shadowColor: "ignore",
            shadowBlur: "ignore",
            padding: "ignore",
            backgroundColor: "ignore",
            group: this.group
        })),
        zot(s) && (s = null != m.margin ? m.margin : 10),
        "box" != c && "square" != c && "x" != c && (c = null != m.indicatorType ? m.indicatorType : "check"),
        zot(d) && (d = null != m.indicatorColor ? m.indicatorColor : n),
        this.setBounds(-s, -s, t + 2 * s, t + 2 * s);
        var v = this;
        this.cursor = "pointer";
        var y = new kt.Rectangle(t,t,r,i,a,l);
        this.addChild(y);
        var b = t;
        o && (this.addChild(o),
        o.x = t + s,
        o.y = t / 2,
        this.label = o,
        this.setBounds(-s, -s, t + 3 * s + o.getBounds().width, Math.max(t + 2 * s, o.getBounds().height)),
        b = o.x + o.width);
        var w = new kt.Shape({
            style: !1
        });
        g = w.graphics,
        g.f("rgba(0,0,0,.01)").r(this.getBounds().x, this.getBounds().y, b + 2 * s, this.getBounds().height),
        this.hitArea = w;
        var x = new kt.Shape({
            style: !1
        })
          , C = x.graphics;
        "check" == c ? C.f(d).p("AnQAdICBiaIEEDZIF8nfICfB4In/KPg") : "box" == c || "square" == c ? C.f(d).dr(-35, -35, 70, 70) : C.f(d).p("AmJEVIEUkTIkXkWIB4h5IEWEYIETkTIB4B3IkTESIEQERIh4B4IkRkRIkSEVg");
        x.setBounds(-47.5, -47.5, 95, 95);
        var k = t / 161;
        x.scaleX = x.scaleY = k,
        x.alpha = .9,
        x.x = t / 2,
        x.y = t / 2,
        z && this.addChild(x),
        this.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function(e) {
            z = !z,
            v.setChecked(z),
            v.dispatchEvent("change")
        }),
        Object.defineProperty(v, "checked", {
            get: function() {
                return z
            },
            set: function(e) {
                v.setChecked(e)
            }
        }),
        Object.defineProperty(v, "text", {
            get: function() {
                if (o)
                    return o.text
            },
            set: function(e) {
                o && (o.text = e,
                kt.OPTIMIZE || !zns && OPTIMIZE || !v.stage || v.stage.update())
            }
        }),
        Object.defineProperty(x, "indicatorColor", {
            get: function() {
                return d
            },
            set: function(e) {
                z && v.removeChild(x),
                x = new createjs.Shape,
                C = x.graphics,
                d = e,
                C.f(d).p("AnQAdICBiaIEEDZIF8nfICfB4In/KPg"),
                x.scaleX = x.scaleY = k,
                x.alpha = .9,
                x.x = t / 2,
                x.y = t / 2,
                z && v.addChild(x),
                kt.OPTIMIZE || !zns && OPTIMIZE || !v.stage || v.stage.update()
            }
        }),
        Object.defineProperty(v, "indicator", {
            get: function() {
                return x
            },
            set: function(e) {
                zog("ZIM CheckBox - check is read only")
            }
        }),
        this._enabled = !0,
        Object.defineProperty(v, "enabled", {
            get: function() {
                return v._enabled
            },
            set: function(e) {
                Se(v, e)
            }
        }),
        !(this.setChecked = function(e) {
            return zot(e) && (e = !0),
            (z = e) ? v.addChild(x) : v.removeChild(x),
            kt.OPTIMIZE || !zns && OPTIMIZE || !v.stage || v.stage.update(),
            v
        }
        ) !== u && Me(this, m),
        this.clone = function() {
            return v.cloneProps(new kt.CheckBox(t,o ? o.clone() : "",e,n,r,i,a,l,s,c,d,u,this.group,p))
        }
    }
    ,
    kt.extend(kt.CheckBox, kt.Container, "clone", "zimContainer", !1),
    kt.RadioButtons = function(s, a, l, c, d, u, h, o, g, n, e, r) {
        var t;
        if (t = zob(kt.RadioButtons, arguments, "size, buttons, vertical, color, backgroundColor, spacing, margin, always, indicatorColor, style, group, inherit", this))
            return t;
        z_d("57"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "RadioButtons",
        this.group = e;
        var p = !1 === n ? {} : kt.getStyle(this.type, this.group, r);
        zot(s) && (s = null != p.size ? p.size : 60),
        s = Math.max(5, s),
        zot(a) && (a = null != p.buttons ? p.buttons : ["A", "B", "C"]),
        zot(l) && (l = null == p.vertical || p.vertical),
        zot(c) && (c = null != p.color ? p.color : "#111"),
        zot(d) && (d = null != p.backgroundColor ? p.backgroundColor : "#111"),
        zot(u) && (u = l ? null != p.spacing ? p.spacing : .2 * s : null != p.spacing ? p.spacing : s),
        zot(h) && (h = null != p.margin ? p.margin : s / 5),
        zot(g) && (g = null != p.indicatorColor ? p.indicatorColor : c);
        var f, m = this;
        if (this.cursor = "pointer",
        this.labels = [],
        this.indicators = [],
        "string" == typeof a) {
            var i = a;
            a = [];
            for (var z = 0; z < i.length; z++)
                a.push({
                    label: i[z]
                })
        }
        var v = new kt.Container({
            style: !1
        });
        function y(e) {
            var t = v.getChildIndex(e.target);
            o && m.selectedIndex == t || (m.setSelected(t),
            m.dispatchEvent("change"))
        }
        this.addChild(v),
        function() {
            for (var e, t, o = !1, n = a.length - 1; 0 <= n; n--)
                (e = a[n]).selected && !0 === e.selected && (o ? e.selected = "false" : (o = !0,
                m.id = e.id));
            v.removeAllChildren(),
            m.buttons = [];
            for (var r = 0, n = 0; n < a.length; n++) {
                if ("string" == typeof (e = a[n]) || "number" == typeof e) {
                    var i = {
                        selected: !1,
                        label: new kt.Label({
                            text: e,
                            size: 5 * s / 6,
                            color: null != p.color ? p.color : c,
                            valign: "center",
                            backing: "ignore",
                            shadowColor: "ignore",
                            shadowBlur: "ignore",
                            padding: "ignore",
                            backgroundColor: "ignore",
                            group: m.group
                        })
                    };
                    e = i
                }
                (e.label && "string" == typeof e.label || "number" == typeof e.label) && (e.label = new kt.Label({
                    text: e.label,
                    size: null != p.size ? p.size : 5 * s / 6,
                    color: null != p.color ? p.color : c,
                    valign: "center"
                })),
                m.labels.push(e.label),
                e.index = n,
                a[n] = e,
                (t = w(e.selected, e.label)).type = "RadioButton",
                (t.obj = e).selected && (f = t.obj),
                v.addChild(t),
                l ? (t.y = r,
                r += t.getBounds().height + u) : (t.x = r,
                r += t.getBounds().width + u)
            }
        }();
        for (var b = 0; b < v.numChildren; b++)
            v.getChildAt(b).on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", y);
        function w(e, t) {
            var o = new kt.Container({
                style: !1
            });
            m.buttons.push(o),
            o.mouseChildren = !1,
            o.setBounds(-h, -h, s + 2 * h, s + 2 * h);
            var n = new kt.Shape({
                style: !1
            })
              , r = n.graphics;
            r.f("rgba(255,255,255,.5)").dc(s / 2, s / 2, s / 1.85),
            r.s(d).ss(s / 9).dc(s / 2, s / 2, s / 2 - s / 2 / 5),
            o.addChild(n);
            var i = o.check = new kt.Circle(s / 5.2,g,null,null,null,!1);
            m.indicators.push(i),
            i.mouseEnabled = !1,
            i.alpha = .95,
            i.regX = i.regY = -s / 2;
            var a = s;
            t && (o.addChild(t),
            t.x = o.getBounds().width,
            t.y = s / 2,
            o.setBounds(-h, -h, s + 2 * h + t.getBounds().width, Math.max(s + 2 * h, t.getBounds().height)),
            a = t.x + t.width,
            o.text = t.text),
            e && (o.addChild(i),
            m.label = t,
            m.label && (m.text = t.text));
            var l = new kt.Shape({
                style: !1
            });
            return (r = l.graphics).f("rgba(0,0,0,.01)").r(o.getBounds().x, o.getBounds().y, a + 2 * h, o.getBounds().height),
            o.hitArea = l,
            o
        }
        this.getBounds() || this.setBounds(0, 0, s, s),
        this.setBounds(-h, -h, this.getBounds().width + 2 * h, this.getBounds().height),
        this.setSelected = function(e) {
            if (zot(e) && (e = -1),
            -1 == e || v.getChildAt(e)) {
                for (var t, o = 0; o < v.numChildren; o++)
                    (t = v.getChildAt(o)).removeChild(t.check);
                if (0 <= e) {
                    t = v.getChildAt(e);
                    var n = -2;
                    f && (n = f.index),
                    f = t.obj
                }
                return -1 == e || n == f.index ? (f = null,
                m.id = null,
                m.label = null,
                m.text = "") : (t.addChild(t.check),
                m.id = f.id,
                m.label = f.label,
                m.label && (m.text = m.label.text)),
                kt.OPTIMIZE || !zns && OPTIMIZE || !m.stage || m.stage.update(),
                m
            }
        }
        ,
        Object.defineProperty(m, "selected", {
            get: function() {
                return f
            },
            set: function(e) {
                zog("ZIM RadioButton - selected is read only")
            }
        }),
        Object.defineProperty(m, "selectedIndex", {
            get: function() {
                return f ? f.index : -1
            },
            set: function(e) {
                var t = e;
                o && m.selectedIndex == t || m.setSelected(t)
            }
        }),
        this._enabled = !0,
        Object.defineProperty(m, "enabled", {
            get: function() {
                return m._enabled
            },
            set: function(e) {
                Se(m, e)
            }
        }),
        Me(this, p),
        this.clone = function() {
            for (var e = kt.copy(a), t = 0; t < e.length; t++)
                e[t].label = e[t].label.clone();
            return m.cloneProps(new kt.RadioButtons(s,e,l,c,d,u,h,o,g,n,this.group,r))
        }
    }
    ,
    kt.extend(kt.RadioButtons, kt.Container, "clone", "zimContainer", !1),
    kt.Toggle = function(o, r, t, e, i, n, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b) {
        var w;
        if (w = zob(kt.Toggle, arguments, "width, height, label, startToggled, backgroundColor, margin, indicatorType, indicatorColor, toggleBackgroundColor, color, borderColor, borderWidth, corner, indicatorCorner, shadowColor, shadowBlur, time, labelLeft, style, group, inherit", this))
            return w;
        z_d("57.5"),
        this.group = y;
        var x = !1 === v ? {} : kt.getStyle("Toggle", this.group, b);
        zot(o) && (o = null != x.width ? x.width : 80),
        zot(r) && (r = null != x.height ? x.height : 50),
        this.zimContainer_constructor(o, r, null, null, !1),
        this.type = "Toggle",
        zot(i) && (i = null != x.backgroundColor ? x.backgroundColor : "#C60"),
        zot(n) && (n = null != x.margin ? x.margin : 10),
        zot(a) && (a = null != x.indicatorType ? x.indicatorType : "circle"),
        zot(l) && (l = null != x.indicatorColor ? x.indicatorColor : "#fff"),
        zot(s) && (s = null != x.toggleBackgroundColor ? x.toggleBackgroundColor : "#F93"),
        zot(c) && (c = null != x.color ? x.color : "#111"),
        zot(d) && (d = null != x.borderColor ? x.borderColor : null),
        zot(u) && (u = null != x.borderWidth ? x.borderWidth : null),
        d < 0 || u < 0 ? d = u = null : null != d && null == u && (u = 1),
        zot(h) && (h = null != x.corner ? x.corner : "circle" != a ? 0 : 25),
        zot(g) && (g = null != x.indicatorCorner ? x.indicatorCorner : 0),
        zot(p) && (p = null != x.shadowColor ? x.shadowColor : "rgba(0,0,0,.3)"),
        zot(f) && (f = null != x.shadowBlur ? x.shadowBlur : 14),
        zot(e) && (e = null != x.startToggled && x.startToggled),
        zot(m) && (m = null != x.time ? x.time : 100);
        var C = this;
        function k(e) {
            var t = C.indicator.x
              , o = m;
            if (!0 === e && (o = 0),
            "rectangle" == a || "square" == a ? C.indicator.pos(.2 * r, null, C.toggled) : C.indicator.pos(.175 * r, null, C.toggled),
            0 < m && C.indicator.animate({
                props: {
                    x: t
                },
                from: !0,
                time: o
            }),
            C.background.color = C.toggled ? s : i,
            C.zimAccessibility) {
                var n = "Toggle set to " + (C.toggled ? C.label ? C.label.text + "." : "on." : C.labelLeft ? C.labelLeft.text + "." : "off.");
                setTimeout(function() {
                    C.zimAccessibility.talk(n)
                }, 50)
            }
        }
        C.cursor = "pointer",
        "string" != typeof t && "number" != typeof t || (t = this.label = new kt.Label({
            text: t,
            size: 5 * r / 6,
            color: c,
            valign: "center",
            backing: "ignore",
            shadowColor: "ignore",
            shadowBlur: "ignore",
            padding: "ignore",
            backgroundColor: "ignore",
            group: this.group
        })),
        "string" != typeof z && "number" != typeof z || (z = this.labelLeft = new kt.Label({
            text: z,
            size: 5 * r / 6,
            color: c,
            valign: "center",
            backing: "ignore",
            shadowColor: "ignore",
            shadowBlur: "ignore",
            padding: "ignore",
            backgroundColor: "ignore",
            group: this.group
        })),
        this.background = new kt.Rectangle(o,r,i,d,u,h).addTo(this),
        this.indicator = "rectangle" == a || "square" == a ? new kt.Rectangle(.65 * r,.65 * r,l,null,null,g).center(this.background).pos(.2 * r, null, e) : new kt.Circle(.35 * r,l).center(this.background).pos(.175 * r, null, e),
        this.toggled = e,
        C.background.color = C.toggled ? s : i,
        -1 != p && 0 < f && (this.background.shadow = new createjs.Shadow(p,3,3,f)),
        t && (this.addChild(t),
        t.x = o + 2 + n + u,
        t.y = r / 2,
        this.label = t,
        this.setBounds(-n, -n, o + 3 * n + u + t.getBounds().width, Math.max(r + 2 * n, t.getBounds().height))),
        z && (this.addChild(z),
        z.x = 0,
        C.background.x += z.width + 3 + n + u,
        C.label.x += z.width + 3 + n + u,
        z.y = r / 2,
        this.labelLeft = z,
        this.setBounds(-n, -n, C.getBounds().width + z.width + 3 + n + u, C.getBounds().height)),
        this.expand(kt.mobile() ? 20 : 10),
        this.tap(function(e) {
            if (z) {
                var t = C.localToGlobal(z.width + 3 + n + u + o / 2, 0);
                if (e.stageX < t.x - o / 2 && !C.toggled || e.stageX >= t.x + o / 2 && C.toggled)
                    return
            }
            C.toggled = !C.toggled,
            k(),
            C.dispatchEvent("change")
        }, kt.mobile() ? 20 : 10),
        new kt.Swipe(this).on("swipe", function(e) {
            0 != e.swipeX && (1 == e.swipeX && C.toggled || (-1 != e.swipeX || C.toggled) && (C.toggled = !C.toggled,
            k(),
            C.dispatchEvent("change")))
        }),
        Object.defineProperty(C, "text", {
            get: function() {
                if (t)
                    return t.text
            },
            set: function(e) {
                t && (t.text = e,
                kt.OPTIMIZE || !zns && OPTIMIZE || !C.stage || C.stage.update())
            }
        }),
        Object.defineProperty(C, "textLeft", {
            get: function() {
                if (z)
                    return z.text
            },
            set: function(e) {
                z && (z.text = e,
                kt.OPTIMIZE || !zns && OPTIMIZE || !C.stage || C.stage.update())
            }
        }),
        C.toggle = function(e, t) {
            var o = C.toggled;
            return zot(e) && (e = !0),
            C.toggled = e,
            o != C.toggled && k(t),
            C
        }
        ,
        this._enabled = !0,
        Object.defineProperty(C, "enabled", {
            get: function() {
                return C._enabled
            },
            set: function(e) {
                Se(C, e)
            }
        }),
        !1 !== v && Me(this, x),
        this.clone = function() {
            return C.cloneProps(new kt.Toggle(o,r,t ? t.clone() : "",e,i,n,a,l,s,c,d,u,h,g,p,f,m,z ? z.clone() : "",v,this.group,b))
        }
    }
    ,
    kt.extend(kt.Toggle, kt.Container, "clone", "zimContainer", !1),
    kt.Panel = function(e, t, o, l, s, n, c, d, r, i, a, u, h, g, p, f, m, z, v, y) {
        var b;
        if (b = zob(kt.Panel, arguments, "width, height, titleBar, titleBarColor, titleBarBackgroundColor, titleBarHeight, backgroundColor, borderColor, borderWidth, corner, arrow, align, shadowColor, shadowBlur, draggable, boundary, extraButton, style, group, inherit", this))
            return b;
        z_d("57.7"),
        this.group = v;
        var w = !1 === z ? {} : kt.getStyle("Panel", this.group, y);
        zot(e) && (e = null != w.width ? w.width : 250),
        zot(t) && (t = null != w.height ? w.height : 300),
        this.zimContainer_constructor(e, t, null, null, !1),
        this.type = "Panel",
        zot(o) && (o = null != w.titleBar ? w.titleBar : "PANEL"),
        zot(l) && (l = null != w.titleBarColor ? w.titleBarColor : "#fff"),
        zot(s) && (s = null != w.titleBarBackgroundColor ? w.titleBarBackgroundColor : "#555"),
        zot(n) && (n = null != w.titleBarHeight ? w.titleBarHeight : 30),
        zot(c) && (c = null != w.backgroundColor ? w.backgroundColor : "#eee"),
        zot(d) && (d = null != w.borderColor ? w.borderColor : "#888"),
        zot(r) && (r = null != w.borderWidth ? w.borderWidth : null),
        d < 0 || r < 0 ? d = r = null : null != d && null == r && (r = 1),
        zot(i) && (i = null != w.corner ? w.corner : 5),
        zot(u) && (u = null != w.align ? w.align : "left"),
        zot(h) && (h = null != w.shadowColor ? w.shadowColor : "rgba(0,0,0,.3)"),
        zot(g) && (g = null != w.shadowBlur ? w.shadowBlur : 14),
        zot(p) && (p = null != w.draggable && w.draggable),
        zot(f) && (f = null != w.boundary ? w.boundary : null),
        zot(a) && (a = null != w.arrow ? w.arrow : kt.vee(o)),
        Array.isArray(i) || (i = [i, i, i, i]);
        var x = this;
        this.background = new kt.Rectangle(e,t,c,d,r,i).addTo(this);
        -1 != h && 0 < g && (this.background.shadow = new createjs.Shadow(h,3,3,g));
        var C = o
          , k = zik(C)
          , T = zik(l)
          , A = zik(s);
        zik(c),
        zik(d);
        "string" == typeof k && (k = new kt.Label({
            text: k,
            color: T,
            size: null != w.size ? w.size : 20,
            backing: "ignore",
            shadowColor: "ignore",
            shadowBlur: "ignore",
            padding: "ignore",
            backgroundColor: "ignore",
            group: this.group
        }));
        var B = x.titleBarLabel = k;
        zot(A) && (A = "rgba(0,0,0,.2)"),
        x.titleBar = o = new kt.Container(e,n,null,null,!1).loc(0, 0, x);
        var S = x.titleBar.backing = new kt.Rectangle(e + r,n,A,null,null,[.95 * i[0], .95 * i[1], 0, 0],!0,!1).center(o);
        function P() {
            "right" == u ? B.center(o).pos(Math.max(i[0] / 2, 10), null, !0) : "center" == u || "middle" == u ? B.center(o) : B.center(o).loc(Math.max(i[0] / 2, 10))
        }
        if (P(),
        x.label = k,
        x.text = k.text,
        this.nextPanel = function(e, t) {
            var o = zot(e) || zot(C.array) ? zik(C) : C.array[e]
              , n = zot(e) || zot(l.array) ? zik(l) : l.array[e]
              , r = zot(e) || zot(s.array) ? zik(s) : s.array[e]
              , i = zot(e) || zot(c.array) ? zik(c) : c.array[e]
              , a = zot(e) || zot(d.array) ? zik(d) : d.array[e];
            "string" == typeof o && (o = new kt.Label({
                text: o,
                color: n,
                size: null != w.size ? w.size : 20,
                backing: "ignore",
                shadowColor: "ignore",
                shadowBlur: "ignore",
                padding: "ignore",
                backgroundColor: "ignore",
                group: this.group
            })),
            x.label = o,
            x.text = o.text,
            B.removeFrom(),
            B = x.titleBarLabel = o,
            P(),
            S.color = r,
            x.background.color = i,
            x.background.borderColor = a,
            t && x.dispatchEvent("change"),
            !OPTIMIZE && x.stage && x.stage.update()
        }
        ,
        p && (o.cursor = "pointer",
        o.on("mousedown", function() {
            x.drag({
                rect: f,
                currentTarget: !0
            })
        }),
        o.on("pressup", function() {
            x.noDrag()
        })),
        0 < a) {
            var E = x.arrow = new kt.Shape(-20,-20,40,40,null,!1);
            E.graphics.f(l).p("AiJieIETCeIkTCfg"),
            E.centerReg(o).scaleTo(o, null, 70).alp(.8).hov(1).expand(),
            "right" == u ? E.pos(Math.max(i[1] / 2, 10)) : E.pos(Math.max(i[1] / 2, 10), null, !0),
            E.cursor = "pointer",
            E.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
                x.nextPanel(),
                x.dispatchEvent("change")
            })
        }
        if (!zot(m)) {
            m = x.extraButton = new Button({
                label: "R",
                width: 50,
                height: 50,
                group: "PanelExtra"
            }).scaleTo(o, null, 70).centerReg(o).expand();
            "left" == u ? m.pos(0 < a ? E.x - E.width - 15 : Math.max(i[1] / 2, 10)) : m.pos(0 < a && "center" != u ? E.x + E.width : Math.max(i[1] / 2, 10))
        }
        x.overlay = new Rectangle(e,t).alp(.7);
        this._enabled = !0,
        Object.defineProperty(x, "enabled", {
            get: function() {
                return x._enabled
            },
            set: function(e) {
                Se(x, e),
                e ? x.overlay.removeFrom() : x.overlay.addTo(x),
                !OPTIMIZE && x.stage && x.stage.update()
            }
        }),
        !1 !== z && Me(this, w),
        this.clone = function() {
            return x.cloneProps(new kt.Toggle(e,t,o ? o.clone() : "",l,s,n,c,d,r,i,a,u,h,g,p,f,m,z,this.group,y))
        }
    }
    ,
    kt.extend(kt.Panel, kt.Container, "clone", "zimContainer", !1),
    kt.Pane = function(a, l, n, r, i, s, c, d, u, h, g, p, f, m, z, v, y, e, b, w, x, C, k, T, A, t, B) {
        var o;
        if (o = zob(kt.Pane, arguments, "width, height, label, backgroundColor, color, draggable, resets, modal, corner, backdropColor, shadowColor, shadowBlur, center, displayClose, backdropClose, backing, fadeTime, container, titleBar, titleBarColor, titleBarBackgroundColor, titleBarHeight, close, closeColor, style, group, inherit", this))
            return o;
        z_d("58"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Pane";
        var S = "zim display - Pane(): Please pass in a reference to a container with bounds set as first parameter";
        if (zot(e)) {
            if (!Tt)
                return void zog(S);
            e = Tt.stage
        } else {
            if (!e.getBounds)
                return void zog(S);
            if (zot(e.getStage))
                return void zog("zim display - Pane(): The container must have a stage property")
        }
        this.group = t;
        var P = !1 === A ? {} : kt.getStyle(this.type, this.group, B);
        zot(a) && (a = null != P.width ? P.width : 200),
        zot(l) && (l = null != P.height ? P.height : 200),
        zot(n) && (n = null != P.label ? P.label : null),
        "string" != typeof n && "number" != typeof n || (n = new kt.Label({
            text: n,
            size: null != P.size ? P.size : 40,
            color: null != P.color ? P.color : i,
            backing: "ignore",
            shadowColor: "ignore",
            shadowBlur: "ignore",
            padding: "ignore",
            backgroundColor: "ignore",
            group: this.group
        })),
        zot(r) && (r = null != P.backgroundColor ? P.backgroundColor : "white"),
        zot(s) && (s = null != P.draggable && P.draggable),
        zot(c) && (c = null == P.resets || P.resets),
        zot(d) && (d = null == P.modal || P.modal),
        zot(u) && (u = null != P.corner ? P.corner : 20),
        zot(b) && (b = null != P.titleBar ? P.titleBar : null),
        zot(w) && (w = null != P.titleBarColor ? P.titleBarColor : null),
        zot(x) && (x = null != P.titleBarBackgroundColor ? P.titleBarBackgroundColor : null),
        zot(C) && (C = null != P.titleBarHeight ? P.titleBarHeight : null),
        zot(h) && (h = null != P.backdropColor ? P.backdropColor : "rgba(0,0,0,.2)"),
        zot(g) && (g = null != P.shadowColor ? P.shadowColor : "rgba(0,0,0,.3)"),
        zot(p) && (p = null != P.shadowBlur ? P.shadowBlur : 20),
        zot(f) && (f = null == P.center || P.center),
        zot(m) && (m = null == P.displayClose || P.displayClose),
        s && (m = !1),
        zot(z) && (z = null == P.backdropClose || P.backdropClose),
        zot(y) && (y = null != P.fadeTime ? P.fadeTime : 0);
        var E = this.backdrop = new kt.Shape({
            style: !1
        });
        E.type = "CreateJS_Shape";
        var M = E.graphics;
        M.f(h),
        M.drawRect(-5e3, -5e3, 1e4, 1e4),
        this.setBounds(-a / 2, -l / 2, a, l);
        var I = this;
        I.container = e,
        E.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", z ? X : function(e) {
            e.stopImmediatePropagation()
        }
        );
        var j, O, Y, L, D = new kt.Dictionary(!0);
        function X(e) {
            _(),
            I.container.stage.update(),
            I.dispatchEvent("close"),
            e.stopImmediatePropagation()
        }
        if (E.on("mousedown", function(e) {
            e.stopImmediatePropagation()
        }),
        d && this.addChild(E),
        zot(v))
            j = this.backing = this.display = new kt.Rectangle({
                width: a,
                height: l,
                color: r,
                corner: u,
                style: !1
            });
        else {
            if ("Pattern" == v.type) {
                var R = v;
                j = new kt.Rectangle(a,l,i,null,null,u,null,null,!1),
                R.centerReg(j),
                R.setMask(j.shape)
            } else
                j = v;
            I.display = I.backing = j
        }
        (m && (j.cursor = "pointer",
        j.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", X)),
        -1 != g && 0 < p && (j.shadow = new createjs.Shadow(g,8,8,p)),
        j.on("click", function(e) {
            e.stopImmediatePropagation()
        }),
        this.resetX,
        this.resetY,
        s) && (j.cursor = "pointer",
        j.on("mousedown", function(e) {
            isNaN(I.resetX) && (I.resetX = I.x),
            isNaN(I.resetY) && (I.resetY = I.y),
            O = e.stageX - I.x,
            Y = e.stageY - I.y,
            j.cursor = "pointer"
        }),
        j.on("pressmove", function(e) {
            var t, o, n, r = (t = e.stageX - O,
            o = e.stageY - Y,
            t = Math.max(a / 2, Math.min(I.container.getBounds().width - a / 2, t)),
            o = Math.max(l / 2, Math.min(I.container.getBounds().height - l / 2, o)),
            {
                x: t,
                y: o
            });
            I.x = r.x,
            I.y = r.y;
            for (var i = 0; i < I.numChildren; i++)
                "TextArea" != (n = I.getChildAt(i)).type && "Loader" != n.type && "Tag" != n.type || n.resize();
            I.container.stage.update()
        }),
        this.on("pressup", function(e) {
            j.cursor = "pointer",
            I.container.stage.update()
        }));
        if (j.centerReg(this),
        n && (this.addChild(n),
        kt.center(n, this),
        this.label = n,
        this.text = n.text,
        n.mouseEnabled = !1),
        !zot(b)) {
            "string" == typeof b && (b = new kt.Label(b,null,null,w)),
            titleBarLabel = I.titleBarLabel = b,
            zot(C) && (C = 1.5 * titleBarLabel.height),
            zot(w) && (w = "black"),
            zot(x) && (x = "rgba(0,0,0,.2)"),
            I.titleBar = b = new kt.Container(a,C,null,null,!1).centerReg(I).mov(0, -l / 2 + C / 2),
            b.mouseEnabled = !1,
            b.mouseChildren = !1;
            I.titleBar.backing = new kt.Rectangle(a,C,x,null,null,[.95 * u, .95 * u, 0, 0],null,!1).addTo(b);
            titleBarLabel.center(b).pos({
                x: Math.max(u / 2, 10),
                reg: !0
            })
        }
        k && (zot(T) && (T = "#555"),
        (k = I.close = new kt.Shape(-40,-40,80,80,null,!1)).graphics.f(T).p("AmJEVIEUkTIkXkWIB4h5IEWEYIETkTIB4B3IkTESIEQERIh4B4IkRkRIkSEVg"),
        b ? k.addTo(I).scaleTo(b, null, 50).mov(a / 2 - Math.max(u / 2, 10) - k.width / 2, -l / 2 + C / 2).expand(40) : k.addTo(I).sca(.3).mov(a / 2 - k.width - 3, -l / 2 + k.height).expand(40),
        k.cursor = "pointer",
        k.expand(),
        k.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", X));
        function _() {
            function e() {
                var e;
                I.container.removeChild(I);
                for (var t = 0; t < I.numChildren; t++)
                    if ("TextArea" == (e = I.getChildAt(t)).type || "Loader" == e.type || "Tag" == e.type) {
                        var o = {
                            obj: e,
                            depth: I.getChildIndex(e)
                        };
                        D.add(e, o)
                    }
                for (t = I.numChildren - 1; 0 <= t; t--)
                    "TextArea" != (e = I.getChildAt(t)).type && "Loader" != e.type && "Tag" != e.type || I.removeChild(e);
                if (kt.OPTIMIZE || !zns && OPTIMIZE || I.container.stage.update(),
                c && (isNaN(I.resetX) || (I.x = I.resetX),
                isNaN(I.resetY) || (I.y = I.resetY)),
                I.zimAccessibility) {
                    var n = I.zimAccessibility;
                    n.resize(I),
                    L ? L.focus() : I.zimTabTag.nextSibling.focus(),
                    setTimeout(function() {
                        n.talk("Pane has been closed.")
                    }, 50)
                }
            }
            0 < y ? I.animate({
                obj: {
                    alpha: 0
                },
                time: y,
                call: e
            }) : e()
        }
        Object.defineProperty(I, "text", {
            get: function() {
                return " " == n.text ? "" : n.text
            },
            set: function(e) {
                n.text = e
            }
        }),
        this._enabled = !0,
        Object.defineProperty(I, "enabled", {
            get: function() {
                return I._enabled
            },
            set: function(e) {
                Se(I, e)
            }
        }),
        this.hide = function() {
            return _(),
            I.toggled = !1,
            I
        }
        ,
        this.show = function() {
            f && isNaN(I.resetX) && (I.x = I.container.getBounds().width / 2,
            I.y = I.container.getBounds().height / 2),
            I.container.addChild(I);
            for (var e = 0; e < D.length; e++)
                I.addChildAt(D.values[e].obj, D.values[e].depth);
            if (0 < y ? (I.alpha = 0,
            I.animate({
                alpha: 1
            }, y)) : I.container.stage && I.container.stage.update(),
            I.zimAccessibility) {
                var t = I.zimAccessibility;
                setTimeout(function() {
                    t.activatedObject && (L = t.activatedObject.zimTabTag)
                }, 50),
                t.resize(I),
                t.tabIndex = I.zimTabIndex
            }
            return I.toggled = !0,
            I
        }
        ,
        !(this.toggle = function(e) {
            return !0 === e ? I.show() : !1 === e ? I.hide() : I.container.contains(I) ? I.hide() : I.show(),
            I
        }
        ) !== A && Me(this, P),
        this.clone = function() {
            var e = n.x
              , t = n.y
              , o = I.cloneProps(new kt.Pane(a,l,n.clone(),r,i,s,c,d,u,h,g,p,f,m,z,zot(v) ? v.clone() : null,y,I.container,b,w,x,C,k,T,A,this.group,B));
            return o.label.x = e,
            o.label.y = t,
            o
        }
    }
    ,
    kt.extend(kt.Pane, kt.Container, "clone", "zimContainer", !1),
    kt.Window = function(d, u, o, n, h, r, g, p, f, m, e, i, a, z, v, l, s, c, y, b, w, x, C, t, k, T, A, B, S, P, E, M, I, j, O, Y) {
        var L;
        if (L = zob(kt.Window, arguments, "width, height, backgroundColor, borderColor, borderWidth, padding, corner, swipe, scrollBarActive, scrollBarDrag, scrollBarColor, scrollBarAlpha, scrollBarFade, scrollBarH, scrollBarV, slide, slideDamp, slideSnap, interactive, shadowColor, shadowBlur, paddingHorizontal, paddingVertical, scrollWheel, damp, titleBar, titleBarColor, titleBarBackgroundColor, titleBarHeight, draggable, boundary, close, closeColor, style, group, inherit", this))
            return L;
        z_d("58.1"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Window",
        this.group = O;
        var D = !1 === j ? {} : kt.getStyle(this.type, this.group, Y);
        zot(d) && (d = null != D.width ? D.width : 300),
        zot(u) && (u = null != D.height ? D.height : 200),
        zot(o) && (o = null != D.backgroundColor ? D.backgroundColor : "#333"),
        zot(n) && (n = null != D.borderColor ? D.borderColor : "#999"),
        zot(h) && (h = null != D.borderWidth ? D.borderWidth : 1),
        zot(r) && (r = null != D.padding ? D.padding : 0),
        zot(g) && (g = null != D.corner ? D.corner : 0),
        zot(p) && (p = null == D.swipe || D.swipe),
        zot(f) && (f = null == D.scrollBarActive || D.scrollBarActive),
        zot(m) && (m = null != D.scrollBarDrag && D.scrollBarDrag),
        zot(e) && (e = null != D.scrollBarColor ? D.scrollBarColor : n),
        zot(i) && (i = null != D.scrollBarAlpha ? D.scrollBarAlpha : .3),
        zot(a) && (a = null == D.scrollBarFade || D.scrollBarFade),
        zot(z) && (z = null == D.scrollBarH || D.scrollBarH),
        zot(v) && (v = null == D.scrollBarV || D.scrollBarV),
        m && (a = null != D.scrollBarFade && D.scrollBarFade),
        zot(l) && (l = null == D.slide || D.slide),
        zot(s) && (s = null != D.slideDamp ? D.slideDamp : .6),
        zot(c) && (c = null != D.slideSnap ? D.slideSnap : "vertical"),
        zot(y) && (y = null == D.interactive || D.interactive),
        zot(b) && (b = null != D.shadowColor ? D.shadowColor : "rgba(0,0,0,.3)"),
        zot(w) && (w = null != D.shadowBlur ? D.shadowBlur : 20),
        zot(C) && (C = null != D.paddingVertical ? D.paddingVertical : r),
        zot(x) && (x = null != D.paddingHorizontal ? D.paddingHorizontal : r),
        zot(t) && (t = null == D.scrollWheel || D.scrollWheel),
        zot(T) && (T = null != D.titleBar ? D.titleBar : null),
        zot(A) && (A = null != D.titleBarColor ? D.titleBarColor : null),
        zot(B) && (B = null != D.titleBarBackgroundColor ? D.titleBarBackgroundColor : null),
        zot(S) && (S = null != D.titleBarHeight ? D.titleBarHeight : null),
        zot(P) && (P = null != D.draggable ? D.draggable : null),
        zot(E) && (E = null != D.boundary ? D.boundary : null),
        zot(M) && (M = null != D.close ? D.close : null),
        zot(I) && (I = null != D.closeColor ? D.closeColor : null),
        !1 === T && (T = null),
        zot(T) || (zot(S) && (S = 30),
        u -= S);
        var X = this;
        this.scrollX = this.scrollY = this.scrollXMax = this.scrollYMax = 0;
        var R = this.backing = new kt.Shape({
            style: !1
        });
        this.addChild(R);
        var _ = new createjs.Shape;
        _.type = "WindowBacking";
        var W = _.graphics;
        this.addChild(_);
        var H = this.content = new kt.Container({
            style: !1
        });
        if (this.addChild(H),
        H.mask = _,
        !y)
            var V = new createjs.Shape;
        if (0 < h) {
            var F = new createjs.Shape;
            this.addChild(F)
        }
        var N = T ? 0 : g;
        function G() {
            X.setBounds(0, 0, d, u),
            R.graphics.c().f(o).rc(0, 0, d, u, N, N, g, g),
            -1 != b && 0 < w && (R.shadow = new createjs.Shadow(b,4,4,w)),
            0 < h && (g ? F.graphics.c().s(n).ss(h, "square", "miter").rc(0, 0, d, u, N, N, g, g) : F.graphics.c().s(n).ss(h, "square", "miter").dr(0, 0, d, u))
        }
        G();
        var U, K, Z, q, Q, J, $, ee, te, oe = this.scrollBar = {};
        if (oe.color = e,
        oe.size = 6,
        oe.minSize = 2 * oe.size,
        oe.spacing = 3.5 + h / 2,
        oe.margin = 0,
        oe.corner = oe.size / 2,
        oe.showTime = 500,
        oe.fadeTime = 3e3,
        f) {
            var ne = oe.horizontal = new kt.Shape({
                style: !1
            })
              , re = ne.graphics;
            ne.alpha = i,
            this.addChild(ne),
            m && ne.drag({
                localBounds: !0
            });
            var ie = oe.vertical = new kt.Shape({
                style: !1
            })
              , ae = ie.graphics;
            ie.alpha = i,
            this.addChild(ie),
            m && ie.drag({
                localBounds: !0
            })
        }
        if (this.update = function() {
            f && (re.clear(),
            ae.clear()),
            Q = f ? oe.size + 2 * oe.spacing : 0,
            J = H.getBounds() ? H.getBounds().width : 0,
            $ = H.getBounds() ? H.getBounds().height : 0,
            Z = z && d - x < J && (f || !0 === p || "auto" == p || "horizontal" == p),
            q = v && u - C < $ && (f || !0 === p || "auto" == p || "vertical" == p),
            X.scrollXMax = J + 2 * x - d + (q ? Q + oe.margin : 0),
            X.scrollYMax = $ + 2 * C - u + (Z ? Q + oe.margin : 0),
            W.clear();
            var e = h / 2
              , t = h / 2
              , o = d - (q && f ? oe.size + 2 * oe.spacing : 0) - (q ? 0 : h)
              , n = u - (Z && f ? oe.size + 2 * oe.spacing : 0) - (Z ? 0 : h);
            W.f("rgba(0,0,0,.01)").rc(e, t, o, n, N, N, q && f ? 0 : g, Z && f ? 0 : g),
            y || (V.graphics.c().f("red").dr(e, t, o, n),
            H.hitArea = V);
            var r = Math.max(g, Math.min(oe.corner, oe.spacing))
              , i = r + h / 2
              , a = r + (q ? Q : 0) + h / 2
              , l = r + h / 2
              , s = r + (Z ? Q : 0) + h / 2;
            if (Z && f && (scrollBarLength = Math.max(oe.minSize, (d - i - a) * (d - i - a) / (J + x + oe.margin)),
            re.f(oe.color).rr(0, 0, scrollBarLength, oe.size, oe.corner),
            ne.x = i,
            ne.y = u - oe.size - oe.spacing,
            U = new kt.Proportion(-X.scrollXMax,0,i,d - scrollBarLength - a,-1),
            m)) {
                ne.setBounds(0, 0, scrollBarLength, oe.size);
                var c = new createjs.Rectangle(i,ne.y,d - scrollBarLength - i - a,0);
                ne.dragBoundary(c),
                ne.proportion = new kt.Proportion(c.x,c.x + c.width,0,-X.scrollXMax),
                ne.off("pressmove", ee),
                ee = ne.on("pressmove", function() {
                    X.dispatchEvent("scrolling"),
                    H.x = ne.proportion.convert(ne.x)
                })
            }
            if (q && f && (scrollBarLength = Math.max(oe.minSize, (u - l - s) * (u - l - s) / ($ + C + oe.margin)),
            ae.f(oe.color).rr(0, 0, oe.size, scrollBarLength, oe.corner),
            ie.x = d - oe.size - oe.spacing,
            ie.y = l,
            K = new kt.Proportion(-X.scrollYMax,0,l,u - scrollBarLength - s,-1),
            m)) {
                ie.setBounds(0, 0, oe.size, scrollBarLength);
                c = new createjs.Rectangle(ie.x,l,0,u - scrollBarLength - l - s);
                ie.dragBoundary(c),
                ie.proportion = new kt.Proportion(c.y,c.y + c.height,0,-X.scrollYMax),
                ie.off("pressmove", te),
                te = ie.on("pressmove", function() {
                    X.dispatchEvent("scrolling"),
                    Ae = H.y = ie.proportion.convert(ie.y)
                })
            }
            ge(),
            clearTimeout(X.dTimeout),
            X.dTimeout = setTimeout(function() {
                le()
            }, 300)
        }
        ,
        this.resize = function(e, t) {
            return zot(e) && (e = d),
            zot(t) && (t = u),
            d = e,
            u = t,
            G(),
            X.update(),
            Ae = H.y,
            k && Se.immediate(Ae),
            X
        }
        ,
        !zot(T)) {
            zot(P) && (P = !0),
            "string" == typeof T && (T = new kt.Label({
                text: T,
                color: A,
                size: null != D.size ? D.size : 20,
                backing: "ignore",
                shadowColor: "ignore",
                shadowBlur: "ignore",
                padding: "ignore",
                backgroundColor: "ignore",
                group: this.group
            })),
            titleBarLabel = X.titleBarLabel = T,
            zot(B) && (B = "rgba(0,0,0,.2)"),
            X.titleBar = T = new kt.Container(d,S,null,null,!1).centerReg(X).mov(0, -u / 2 - S / 2);
            X.titleBar.backing = new kt.Rectangle(d + h,S,B,null,null,[.95 * g, .95 * g, 0, 0],!0,!1).center(T);
            titleBarLabel.center(T).pos({
                x: Math.max(g / 2, Math.max(10, r)),
                reg: !0
            }),
            X.regX = 0,
            X.regY = -S,
            X.setBounds(0, -S, d, u + S),
            P ? (T.cursor = "pointer",
            T.on("mousedown", function() {
                X.drag({
                    rect: E,
                    currentTarget: !0
                })
            }),
            T.on("pressup", function() {
                X.noDrag()
            })) : T.on("mousedown", function() {})
        }
        M && (zot(I) && (I = "#555"),
        (M = X.close = new kt.Shape(-40,-40,80,80,null,!1)).graphics.f(I).p("AmJEVIEUkTIkXkWIB4h5IEWEYIETkTIB4B3IkTESIEQERIh4B4IkRkRIkSEVg"),
        T ? M.centerReg(X).scaleTo(T, null, 50).pos({
            x: d - Math.max(g / 2, Math.max(10, r)) - M.width / 2,
            y: S / 2,
            reg: !0
        }).expand(40) : M.sca(.3).pos(Math.max(g / 2, Math.max(10, r)) / 2, M.height / 2, !0, !1, X).expand(40),
        M.cursor = "pointer",
        M.expand(),
        M.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
            X.removeFrom(),
            X.dispatchEvent("close")
        }));
        function le() {
            kt.dragBoundary(H, new createjs.Rectangle(0,0,Z ? -X.scrollXMax : 0,q ? -X.scrollYMax : 0))
        }
        this.add = function(e, t) {
            if (Ee(e),
            e.getBounds())
                return t && X.removeAll(),
                H.addChild(e),
                0 == e.x && (e.x = x),
                0 == e.y && (e.y = C),
                X.update(),
                X;
            zog("SwipeBox.add() - please add content with bounds set")
        }
        ,
        this.remove = function(e) {
            return H.removeChild(e),
            X.update(),
            X
        }
        ;
        var se, ce, de, ue = !(this.removeAll = function() {
            return H.removeAllChildren(),
            X.update(),
            X
        }
        );
        function he() {
            Ae = H.y,
            k && Se.immediate(Ae),
            f && ge()
        }
        function ge() {
            X.dispatchEvent("scrolling"),
            V && (V.x = -H.x,
            V.y = -H.y),
            Z && f && (ne.x = U.convert(H.x)),
            q && f && (ie.y = K.convert(H.y))
        }
        function pe(e) {
            kt.Ticker.remove(he),
            ue = !1,
            Z && a && kt.animate(ne, {
                alpha: 0
            }, oe.fadeTime),
            q && a && kt.animate(ie, {
                alpha: 0
            }, oe.fadeTime)
        }
        if (p && H.on("mousedown", function() {
            ue || kt.Ticker.add(he, H.stage),
            ue = !0,
            Z && f && a && kt.animate(ne, {
                alpha: i
            }, oe.showTime),
            q && f && a && kt.animate(ie, {
                alpha: i
            }, oe.showTime)
        }),
        this.on("added", function() {
            if (Ee(X),
            !p)
                return;
            kt.drag({
                obj: H,
                currentTarget: !0,
                localBounds: !0,
                slide: l,
                slideDamp: s,
                slideSnap: !((!z || !0 !== p && "auto" != p && "horizontal" != p) && (!v || !0 !== p && "auto" != p && "vertical" != p)) && c
            }),
            H.getBounds() && 0 < H.getBounds().width && setTimeout(function() {
                le()
            }, 300)
        }, null, !0),
        y && this.added(function(e) {
            e.on("stagemousemove", function(e) {
                X.windowMouseX = e.stageX,
                X.windowMouseY = e.stageY
            })
        }),
        l ? H.on("slidestop", pe) : H.on("mousedown", function() {
            H.stage.on("stagemouseup", pe, null, !0)
        }),
        y) {
            var fe, me, ze;
            H.on("mousedown", function(e) {
                fe = e.stageX,
                me = Date.now()
            }),
            H.on("click", function(e) {
                Date.now() - me < 600 && Math.abs(e.stageX - fe) < 5 && (X.contentMouse = H.globalToLocal(e.stageX, e.stageY),
                X.dispatchEvent("select"))
            }),
            H.on("mouseover", function() {
                ze = Date.now(),
                kt.Ticker.add(Te, H.stage)
            }),
            H.on("mouseout", function() {
                ke || (X.dispatchEvent("hoverout"),
                ke = !0);
                kt.Ticker.remove(Te)
            });
            var ve = 0
              , ye = 0
              , be = 0
              , we = 0
              , xe = 300
              , Ce = 2
              , ke = !1;
            function Te() {
                if (!H.stage)
                    return ke || (X.dispatchEvent("hoverout"),
                    ke = !0),
                    void kt.Ticker.remove(Te);
                Math.abs(ve - X.windowMouseX) > Ce || Math.abs(ye - X.windowMouseY) > Ce ? (ke || (X.dispatchEvent("hoverout"),
                ke = !0),
                ze = Date.now(),
                ve = X.windowMouseX,
                ye = X.windowMouseY) : Date.now() - ze > xe && ((Math.abs(be - X.windowMouseX) > Ce || Math.abs(we - X.windowMouseY) > Ce) && (X.contentMouse = H.globalToLocal(X.windowMouseX, X.windowMouseY),
                X.dispatchEvent("hoverover"),
                be = X.windowMouseX,
                we = X.windowMouseY,
                ke = !1),
                ze = Date.now())
            }
        }
        var Ae = X.scrollY;
        if (t) {
            function Be(e) {
                if (q && X.stage && X.hitTestPoint(X.stage.mouseX, X.stage.mouseY) && X.contains(X.stage.getObjectUnderPoint(X.stage.mouseX, X.stage.mouseY))) {
                    zot(e) && (e = event);
                    var t = e.detail ? -19 * e.detail : e.wheelDelta;
                    zot(t) && (t = -19 * e.deltaY),
                    Ae += t,
                    Ae = Math.max(-X.scrollYMax, Math.min(0, Ae)),
                    k || (X.scrollY = Ae,
                    H.stage.update())
                }
            }
            se = window.addEventListener("mousewheel", Be),
            ce = window.addEventListener("wheel", Be),
            de = window.addEventListener("DOMMouseScroll", Be)
        }
        var Se, Pe = !1;
        function Ee(e) {
            k && !Pe && e.stage && (Pe = !0,
            Se = new kt.Damp(X.scrollY,k),
            kt.Ticker.add(function() {
                ue || zot(Ae) || (X.scrollY = Se.convert(Ae))
            }, e.stage))
        }
        Object.defineProperty(X, "scrollX", {
            get: function() {
                return H.x
            },
            set: function(e) {
                H.x = e,
                H.zimDragImmediate && H.zimDragImmediate(H.x, H.y),
                ge()
            }
        }),
        Object.defineProperty(X, "scrollY", {
            get: function() {
                return H.y
            },
            set: function(e) {
                H.y = e,
                H.zimDragImmediate && H.zimDragImmediate(H.x, H.y),
                ge()
            }
        }),
        !1 !== j && Me(this, D),
        this.clone = function(e) {
            zot(e) && (e = !0);
            var t = X.cloneProps(new kt.Window(d,u,o,n,h,r,g,p,f,m,oe.color,i,a,z,v,l,s,c,y,b,w,x,C,T,A,B,S,P,E,M,I,j,O,Y));
            return e && (X.content.cloneChildren(t.content),
            t.update()),
            t
        }
        ,
        this.dispose = function() {
            return t && (window.removeEventListener("mousewheel", se),
            window.removeEventListener("wheel", ce),
            window.removeEventListener("DOMMouseScroll", de)),
            kt.Ticker.remove(Te),
            kt.Ticker.remove(he),
            this.zimContainer_dispose(),
            !0
        }
    }
    ,
    kt.extend(kt.Window, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Waiter = function(i, a, e, t, o, n, r, l, s, c, d) {
        var u;
        if (u = zob(kt.Waiter, arguments, "container, speed, foregroundColor, backgroundColor, corner, shadowColor, shadowBlur, fadeTime, style, group, inherit", this))
            return u;
        z_d("59"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Waiter",
        this.group = c;
        var h = !1 === s ? {} : kt.getStyle(this.type, this.group, d);
        zot(a) && (a = null != h.speed ? h.speed : 600),
        zot(e) && (e = null != h.foregroundColor ? h.foregroundColor : "white"),
        zot(t) && (t = null != h.backgroundColor ? h.backgroundColor : "orange"),
        zot(o) && (o = null != h.corner ? h.corner : 16),
        zot(n) && (n = null != h.shadowColor ? h.shadowColor : "rgba(0,0,0,.3)"),
        zot(r) && (r = null != h.shadowBlur ? h.shadowBlur : 14),
        zot(l) && (l = null != h.fadeTime ? h.fadeTime : 0);
        this.setBounds(-52, -20, 104, 40);
        var g = this
          , p = this.display = new kt.Shape({
            style: !1
        });
        this.addChild(p),
        p.setBounds(0, 0, 104, 40),
        p.regX = 52,
        p.regY = 20;
        var f = p.graphics;
        f.f(t);
        var m = o;
        Array.isArray(m) || (m = [o, o, o, o]),
        f.rc(0, 0, 104, 40, m[0], m[1], m[2], m[3]),
        -1 != n && 0 < r && (p.shadow = new createjs.Shadow(n,3,3,r)),
        p.on("click", function(e) {
            e.stopImmediatePropagation()
        });
        var z, v, y = new kt.Container({
            style: !1
        });
        this.addChild(y);
        for (var b = 0; b < 3; b++)
            (z = new createjs.Shape).graphics.f(e).dc(0, 0, 12),
            z.x = 32 * (b - 1),
            y.addChild(z),
            z.cache(-12, -12, 24, 24),
            z.alpha = 0;
        this.hide = function() {
            function e() {
                g.parent && g.parent.removeChild(g);
                var e = g.stage;
                if (e && e.update(),
                g.zimAccessibility) {
                    var t = g.zimAccessibility;
                    t.resize(g),
                    v ? v.focus() : g.zimTabTag.nextSibling.focus(),
                    setTimeout(function() {
                        t.talk("Waiter has finished.")
                    }, 50)
                }
            }
            return 0 < l ? g.animate({
                obj: {
                    alpha: 0
                },
                time: l,
                call: e
            }) : e(),
            g.toggled = !1,
            g
        }
        ;
        var w = [];
        this.show = function() {
            var e, t = "zim display - Waiter(): Please pass in a reference to a container with bounds set as first parameter to Waiter";
            if (zot(i)) {
                if (!Tt)
                    return void zog(t);
                i = Tt.stage
            } else {
                if (!i.getBounds)
                    return void zog(t);
                if (zot(i.stage))
                    return void zog("zim display - Waiter(): The container must have a stage property")
            }
            for (var o = 0, n = 0; n < y.numChildren; n++)
                y && w.push(setTimeout(function() {
                    e = y.getChildAt(o),
                    createjs.Tween.get(e, {
                        loop: !0
                    }).to({
                        alpha: 1
                    }, a / 3 / 2).wait(a / 3).to({
                        alpha: 0
                    }, a / 3).wait(a - a / 3 - a / 3 / 2),
                    o++
                }, n * a / 3));
            if (g.ticker = createjs.Ticker.on("tick", function() {
                i.stage.update()
            }),
            g.x = i.getBounds().width / 2,
            g.y = i.getBounds().height / 2,
            i.addChild(g),
            0 < l && (g.alpha = 0,
            g.animate({
                alpha: 1
            }, l)),
            g.zimAccessibility) {
                var r = g.zimAccessibility;
                setTimeout(function() {
                    r.activatedObject && (v = r.activatedObject.zimTabTag)
                }, 50),
                r.resize(g),
                r.talk(g.zimTabTag.getAttribute("aria-label"))
            }
            return g.toggled = !0,
            g
        }
        ,
        !(g.toggle = function(e) {
            return !0 === e ? g.show() : !1 === e ? g.hide() : g.parent ? g.hide() : g.show(),
            g
        }
        ) !== s && Me(this, h),
        this.clone = function() {
            return g.cloneProps(new kt.Waiter(i,a,e,t,o,n,r,l,s,this.group,d))
        }
        ,
        this.dispose = function() {
            g.ticker && createjs.Ticker.off("tick", g.ticker),
            createjs.Tween.removeTweens(g);
            for (var e = 0; e < y.numChildren; e++) {
                var t = y.getChildAt(e);
                clearInterval(w[e]),
                createjs.Tween.removeTweens(t)
            }
            return this.zimContainer_dispose(),
            !0
        }
    }
    ,
    kt.extend(kt.Waiter, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.ProgressBar = function(t, o, n, r, i, a, l, e, s, c, d, u, h, g, p, f, m, z, v, y, b) {
        var w;
        if (w = zob(kt.ProgressBar, arguments, "barType, foregroundColor, backgroundColor, borderColor, borderWidth, padding, label, color, labelPosition, percentage, corner, shadowColor, shadowBlur, backing, delay, fastClose, container, autoHide, style, group, inherit", this))
            return w;
        z_d("59.5"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "ProgressBar",
        this.group = y;
        var x = !1 === v ? {} : kt.getStyle(this.type, this.group, b);
        zot(o) && (o = null != x.foregroundColor ? x.foregroundColor : "#acd241"),
        zot(n) && (n = null != x.backgroundColor ? x.backgroundColor : "#444"),
        zot(r) && (r = null != x.borderColor ? x.borderColor : n),
        zot(i) && (i = null != x.borderWidth ? x.borderWidth : null),
        zot(s) && (s = null != x.labelPosition ? x.labelPosition : "bottom"),
        zot(t) && (t = null != x.barType ? x.barType : "circle"),
        zot(a) && (a = null != x.padding ? x.padding : "circle" == t ? 2 : -.5),
        zot(d) && (d = null != x.corner ? x.corner : 15),
        zot(u) && (u = null != x.shadowColor ? x.shadowColor : "rgba(0,0,0,.3)"),
        zot(h) && (h = null != x.shadowBlur ? x.shadowBlur : 14),
        zot(g) && (g = null != x.backing ? x.backing : null),
        zot(f) && (f = null == x.fastClose || x.fastClose),
        r < 0 || i < 0 ? r = i = null : null != r && null == i && (i = "circle" == t ? 10 : 2),
        zot(p) && (p = null != x.delay ? x.delay : 100),
        zot(z) && (z = null == x.autoHide || x.autoHide),
        zot(l) && (l = null != x.label ? x.label : null),
        zot(e) && (e = null != x.color ? x.color : o),
        "string" != typeof l && "number" != typeof l || (l = new kt.Label({
            text: l,
            color: e,
            backing: "ignore",
            shadowColor: "ignore",
            shadowBlur: "ignore",
            padding: "ignore",
            backgroundColor: "ignore",
            group: this.group
        }));
        l && l.text,
        !zot(c) && zot(l) && (l = new kt.Label("")),
        this.label = l;
        var C, k = 30, T = this, A = 0;
        if (T.visible = !1,
        setTimeout(function() {
            T.visible = !0,
            T.stage && T.stage.update()
        }, p),
        "circle" == t)
            var B = 20
              , S = (g = this.backing = new kt.Circle(B,"rgba(0,0,0,0)",n,i,null,!1).addTo(this),
            this.bar = new kt.Shape({
                style: !1
            }).addTo(T).pos({
                x: g.x,
                y: g.y,
                reg: !0
            }).rot(-90));
        else {
            B = 200;
            if (-1 != u && 0 < h)
                new kt.Rectangle(B - 2,k - 2,n,null,null,d,null,!1).addTo(this).shadow = new createjs.Shadow(u,3,3,h);
            g = I(g);
            var P = d;
            Array.isArray(P) || (P = [d, d, d, d]);
            var E = 1.2 * (a + i / 2)
              , M = (S = this.bar = new kt.Rectangle(B - 1.8 * (a + i / 2),k - 1.8 * (a + i / 2),o,null,null,[P[0] - E, P[1] - E, P[2] - E, P[3] - E],null,!1).center(this),
            this.mask = new kt.Rectangle(B - 1.8 * (a + i / 2),k - 1.8 * (a + i / 2),null,null,null,null,null,!1).center(this).alp(0).sca(0, 1));
            S.setMask(M)
        }
        function I(e) {
            if (T.backing) {
                var t = T.getChildIndex(T.backing);
                T.removeChild(T.backing)
            } else
                t = T.numChildren;
            if (T.border && T.removeChild(T.border),
            zot(e) || "Pattern" != e.type)
                e = T.backing = zot(e) ? new kt.Rectangle(B,k,n,r,i,d,null,!1).addTo(T, t) : g.addTo(T, t);
            else {
                var o = e;
                ((e = T.backing = new kt.Rectangle(B,k,n,null,null,d,null,!1).addTo(T, t)).pattern = o).center(e);
                e.getBounds();
                if (o.setMask(e.shape),
                i)
                    T.border = new kt.Rectangle(B,k,"rgba(0,0,0,0)",r,i,d,null,!1).addTo(T, t + 1)
            }
            return e
        }
        function j(e) {
            "circle" == t ? S.graphics.c().mt(0, 0).s(o).ss(i - 2 * a + .5).a(0, 0, B, 0, 360 * e / 100 * Math.PI / 180) : (M.sca(e / 100, 1),
            S.setMask(M)),
            zot(c) || (l.text = l.startText + " " + Math.min(Math.round(e), 100) + "%"),
            z && f && 100 <= Math.round(e) && (T.timeOut = setTimeout(function() {
                T.hide()
            }, 200)),
            T.stage && T.stage.update()
        }
        T.setBacking = function(e) {
            I(e),
            T.stage && T.stage.update()
        }
        ,
        g.on("click", function(e) {
            e.stopImmediatePropagation()
        }),
        zot(l) || (l.scaleX = l.scaleY = .8,
        l.startText = l.text,
        zot(c) || (l.text = l.startText + "  0%"),
        l.center(T),
        "above" == s ? l.y -= 60 : l.y += 60,
        l.alpha = .8),
        this.hide = function() {
            var e = T.stage;
            if (T.parent && T.parent.removeChild(T),
            "Pattern" == T.backing.type && T.backing.pauseInterval && T.backing.pauseInterval(),
            e && e.update(),
            T.zimAccessibility) {
                var t = T.zimAccessibility;
                t.resize(T),
                C ? C.focus() : T.zimTabTag.nextSibling.focus(),
                setTimeout(function() {
                    t.talk("Progress Bar has finished.")
                }, 50)
            }
            return T.toggled = !1,
            T
        }
        ,
        this.show = function() {
            var e = "zim display - ProgressBar(): Please pass in a reference to a container with bounds set as first parameter of the ProgressBar";
            if (zot(m)) {
                if (!Tt)
                    return void zog(e);
                m = Tt.stage
            } else {
                if (!m.getBounds)
                    return void zog(e);
                if (zot(m.stage))
                    return void zog("zim display - Waiter(): The container must have a stage property")
            }
            if (T.timeOut && clearTimeout(T.timeOut),
            j(0),
            T.zimActiveLoader && T.zimActiveLoader.on("progress", function(e) {
                j(A = 100 * e.progress)
            }),
            T.center(m),
            "Pattern" == T.backing.type && T.backing.pauseInterval && T.backing.pauseInterval(!1),
            T.zimAccessibility) {
                var t = T.zimAccessibility;
                setTimeout(function() {
                    t.activatedObject && (C = t.activatedObject.zimTabTag)
                }, 50),
                t.resize(T),
                t.talk(T.zimTabTag.getAttribute("aria-label"))
            }
            return T.toggled = !0,
            T
        }
        ,
        T.toggle = function(e) {
            return !0 === e ? T.show() : !1 === e ? T.hide() : T.parent ? T.hide() : T.show(),
            T
        }
        ,
        Object.defineProperty(T, "percent", {
            get: function() {
                return A
            },
            set: function(e) {
                j(A = e)
            }
        }),
        !1 !== v && Me(this, x),
        this.clone = function() {
            return T.cloneProps(new kt.ProgressBar(t,o,n,r,i,a,l,e,s,c,d,u,h,g,p,f,m,z,v,this.group,b))
        }
        ,
        this.dispose = function() {
            return "Pattern" == T.backing.type && T.backing.clearInterval && T.backing.clearInterval(),
            this.zimContainer_dispose(),
            !0
        }
    }
    ,
    kt.extend(kt.ProgressBar, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Indicator = function(e, t, n, r, i, o, a, l, s, c, d, u, h, g, p, f, m, z, v) {
        var y;
        if (y = zob(kt.Indicator, arguments, "width, height, num, foregroundColor, backgroundColor, borderColor, borderWidth, backdropColor, corner, indicatorType, fill, scale, lightScale, press, shadowColor, shadowBlur, style, group, inherit", this))
            return y;
        z_d("60"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Indicator",
        this.group = z;
        var b = !1 === m ? {} : kt.getStyle(this.type, this.group, v);
        zot(e) && (e = null != b.width ? b.width : 300),
        zot(t) && (t = null != b.height ? b.height : 50),
        zot(n) && (n = null != b.num ? b.num : 6),
        zot(r) && (r = null != b.foregroundColor ? b.foregroundColor : "#f58e25"),
        zot(i) && (i = null != b.backgroundColor ? b.backgroundColor : "#666"),
        i < 0 && (i = null != b.backgroundColor ? b.backgroundColor : "rgba(0,0,0,.01)"),
        zot(o) && (o = null != b.borderColor ? b.borderColor : null),
        zot(a) && (a = null != b.borderWidth ? b.borderWidth : null),
        o < 0 || a < 0 ? o = a = null : null != o && null == a && (a = 1),
        zot(l) && (l = null != b.backdropColor ? b.backdropColor : -1),
        zot(s) && (s = null != b.corner ? b.corner : 0),
        zot(c) && (c = null != b.indicatorType ? b.indicatorType : "dot"),
        zot(d) && (d = null != b.fill && b.fill),
        zot(u) && (u = null != b.scale ? b.scale : 1),
        zot(h) && (h = null != b.lightScale ? b.lightScale : 1),
        zot(g) && (g = null != b.press && b.press),
        zot(p) && (p = null != b.shadowColor ? b.shadowColor : "rgba(0,0,0,.3)"),
        zot(f) && (f = null != b.shadowBlur ? b.shadowBlur : 5);
        var w, x = (zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", C = this;
        this.lights = [];
        new kt.Container({
            style: !1
        });
        if (-1 != l) {
            var k = C.backdrop = new kt.Rectangle(e,t,l,o,a,s,null,!1);
            this.addChild(k)
        }
        var T, A = this.lightsContainer = new kt.Container({
            style: !1
        });
        this.addChild(A);
        var B = .5 * t
          , S = e / (n + 1)
          , P = new createjs.Shape;
        "square" == c || "box" == c ? P.graphics.f("black").dr(-S / 2 / h + B / 2, -t / 2 + B / 2, S / h, t) : P.graphics.f("black").dr(-S / 2 / h, -t / 2, S / h, t);
        for (var E = 0; E < n; E++)
            "square" == c || "box" == c ? ((T = new kt.Rectangle(B,B,i,o,a,null,null,!1)).regX = T.width / 2,
            T.regY = T.height / 2) : T = new kt.Circle(B / 2,i,o,a,null,!1),
            this.lights.push(T),
            T.znum = E,
            T.scaleX = T.scaleY = h,
            T.hitArea = P,
            T.x = S + S * E,
            T.y = t / 2,
            A.addChild(T);
        if (A.setBounds(0, 0, e, t),
        A.regX = A.x = e / 2,
        A.regY = A.y = t / 2,
        this.addChild(A),
        -1 != p && 0 < f && (A.shadow = new createjs.Shadow(p,2,2,f)),
        g) {
            A.cursor = "pointer";
            A.on(x, function(e) {
                w != e.target.znum && (M(w = e.target.znum),
                C.dispatchEvent("change"))
            })
        }
        function M(e) {
            var t;
            n <= e && (e = -1);
            for (var o = 0; o < n; o++)
                t = d && o < e ? r : i,
                o == e && (t = r),
                A.getChildAt(o).color = t;
            C.zimAccessibility && C.zimAccessibility.changeTitle(C),
            kt.OPTIMIZE || !zns && OPTIMIZE || !C.stage || C.stage.update()
        }
        A.scaleX = A.scaleY = u,
        Object.defineProperty(this, "selectedIndex", {
            get: function() {
                return w
            },
            set: function(e) {
                w = Math.floor(e),
                M(w = kt.constrain(w, -1, n - 1))
            }
        }),
        Object.defineProperty(this, "num", {
            get: function() {
                return n
            },
            set: function(e) {
                zon && zog("num is read only")
            }
        }),
        this._enabled = !0,
        Object.defineProperty(C, "enabled", {
            get: function() {
                return C._enabled
            },
            set: function(e) {
                Se(C, e)
            }
        }),
        !1 !== m && Me(this, b),
        this.clone = function() {
            return C.cloneProps(new kt.Indicator(e,t,n,r,i,o,a,l,s,c,d,u,h,g,p,f,m,this.group,v))
        }
    }
    ,
    kt.extend(kt.Indicator, kt.Container, "clone", "zimContainer", !1),
    kt.List = function(n, r, e, t, i, o, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, S, P, E, M, I, j, O, Y, L, D, X, R, _, W, H, V, F, N, G, U, K, Z, q, Q, J, $, ee, te, oe, ne) {
        var re;
        if (re = zob(kt.List, arguments, "width, height, list, viewNum, vertical, currentSelected, align, valign, labelAlign, labelValign, labelIndent, labelIndentHorizontal, labelIndentVertical, indent, spacing, backgroundColor, rollBackgroundColor, selectedBackgroundColor, backdropColor, color, selectedColor, rollColor, borderColor, borderWidth, padding, corner, swipe, scrollBarActive, scrollBarDrag, scrollBarColor, scrollBarAlpha, scrollBarFade, scrollBarH, scrollBarV, scrollBarOverlay, slide, slideDamp, slideSnap, shadowColor, shadowBlur, paddingHorizontal, paddingVertical, scrollWheel, damp, titleBar, titleBarColor, titleBarBackgroundColor, titleBarHeight, draggable, boundary, close, closeColor, excludeCustomTap, organizer, clone, style, group, inherit", this))
            return re;
        z_d("60.5"),
        this.group = oe;
        var ie = !1 === te ? {} : kt.getStyle("List", this.group, ne);
        zot(n) && (n = null != ie.width ? ie.width : 300),
        zot(r) && (r = null != ie.height ? ie.height : zot($) ? 200 : 200 + $.height),
        zot(e) && (e = e = null != ie.list ? ie.list : ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10"]),
        0 == e.length && (e = ["%-&"]),
        zot(t) && (t = null != ie.viewNum ? ie.viewNum : 5),
        zot(i) && (i = null == ie.vertical || ie.vertical),
        zot(o) && (o = null == ie.currentSelected || ie.currentSelected),
        zot(a) && (a = null != ie.align ? ie.align : "center"),
        zot(l) && (l = null != ie.valign ? ie.valign : "center"),
        zot(s) && (s = null != ie.labelAlign ? ie.labelAlign : a),
        zot(c) && (c = null != ie.labelValign ? ie.labelValign : l),
        zot(g) && (g = null != ie.indent ? ie.indent : 10),
        zot(d) && (d = null != ie.labelIndent ? ie.labelIndent : g),
        zot(u) && (u = null != ie.labelIndentHorizontal ? ie.labelIndentHorizontal : d),
        zot(h) && (h = null != ie.labelIndentVertical ? ie.labelIndentVertical : d),
        zot(p) && (p = null != ie.spacing ? ie.spacing : 2),
        zot(v) && (v = null != ie.backdropColor ? ie.backdropColor : "#333"),
        zot(f) && (f = null != ie.backgroundColor ? ie.backgroundColor : "#777"),
        zot(m) && (m = null != ie.rollBackgroundColor ? ie.rollBackgroundColor : "#555"),
        zot(z) && (z = null != ie.selectedBackgroundColor ? ie.selectedBackgroundColor : "#444"),
        zot(y) && (y = null != ie.color ? ie.color : "white"),
        zot(w) && (w = null != ie.rollColor ? ie.rollColor : y),
        zot(b) && (b = null != ie.selectedColor ? ie.selectedColor : y),
        zot(v) && (v = null != ie.backdropColor ? ie.backdropColor : v),
        zot(x) && (x = null != ie.borderColor ? ie.borderColor : "#999"),
        zot(C) && (C = null != ie.borderWidth ? ie.borderWidth : 1),
        zot(k) && (k = null != ie.padding ? ie.padding : p),
        zot(T) && (T = null != ie.corner ? ie.corner : 0),
        zot(A) && (A = null == ie.swipe || ie.swipe),
        zot(B) && (B = null == ie.scrollBarActive || ie.scrollBarActive),
        zot(S) && (S = null == ie.scrollBarDrag || ie.scrollBarDrag),
        zot(P) && (P = null != ie.scrollBarColor ? ie.scrollBarColor : x),
        zot(E) && (E = null != ie.scrollBarAlpha ? ie.scrollBarAlpha : .3),
        zot(M) && (M = null == ie.scrollBarFade || ie.scrollBarFade),
        zot(I) && (I = null != ie.scrollBarH ? ie.scrollBarH : !i),
        zot(j) && (j = null != ie.scrollBarV ? ie.scrollBarV : i),
        S && (M = null != ie.scrollBarFade && ie.scrollBarFade),
        zot(O) && (O = null == ie.scrollBarOverlay || ie.scrollBarOverlay),
        zot(Y) && (Y = null == ie.slide || ie.slide),
        zot(L) && (L = null != ie.slideDamp ? ie.slideDamp : .6),
        zot(D) && (D = null != ie.slideSnap ? ie.slideSnap : i ? "vertical" : "horizontal"),
        zot(X) && (X = null != ie.shadowColor ? ie.shadowColor : "rgba(0,0,0,.3)"),
        zot(R) && (R = null != ie.shadowBlur ? ie.shadowBlur : 20),
        zot(W) && (W = null != ie.paddingVertical ? ie.paddingVertical : k),
        zot(_) && (_ = null != ie.paddingHorizontal ? ie.paddingHorizontal : k),
        zot(H) && (H = null == ie.scrollWheel || ie.scrollWheel),
        zot(F) && (F = null != ie.titleBar ? ie.titleBar : null),
        zot(N) && (N = null != ie.titleBarColor ? ie.titleBarColor : null),
        zot(G) && (G = null != ie.titleBarBackgroundColor ? ie.titleBarBackgroundColor : null),
        zot(U) && (U = null != ie.titleBarHeight ? ie.titleBarHeight : 35),
        zot(K) && (K = null != ie.draggable ? ie.draggable : null),
        zot(Z) && (Z = null != ie.boundary ? ie.boundary : null),
        zot(q) && (q = null != ie.close ? ie.close : null),
        zot(Q) && (Q = null != ie.closeColor ? ie.closeColor : null),
        zot(J) && (J = null != ie.excludeCustomTap && ie.excludeCustomTap),
        zot(ee) && (ee = null != ie.clone && ie.clone),
        !1 === F && (F = null),
        this.vertical = i;
        var ae, le, se, ce = this, de = r;
        function ue(e) {
            if (i) {
                var t = -(ce.itemHeight + p) * e + r / 2 - ce.itemHeight / 2;
                return (ce.itemHeight + p) * ce.length < r && (t = 0),
                0 < t && (t = 0),
                (ce.itemHeight + p) * ce.length > r && t < -ce.tabs.height + r - 2 * W && (t = -ce.tabs.height + r - 2 * W),
                t
            }
            var o = -(ce.itemWidth + p) * e + n / 2 - ce.itemWidth / 2;
            return (ce.itemWidth + p) * ce.length < n && (o = 0),
            0 < o && (o = 0),
            (ce.itemWidth + p) * ce.length > n && o < -ce.tabs.width + n - 2 * _ && (o = -ce.tabs.width + n - 2 * _),
            o
        }
        zot($) || (r -= $.height,
        $.list = ce,
        $.setButtons(),
        U += $.height),
        this.zimWindow_constructor(n, r, v, x, C, k, T, A, B, S, P, E, M, I, j, Y, L, D, !0, X, R, _, W, H, V, F, N, G, U, K, Z, q, Q, te, oe, ie),
        this.type = "List",
        zot(F) || (this.titleBarLabel.pos(null, U - 30, null, !0),
        zot(U) && (U = 30),
        r -= U),
        zot($) || $.addTo(ce).loc(0, -$.height),
        ce.itemWidth = i ? n - 2 * _ - (B ? O ? 0 : 6 : 0) : (n - 2 * _) / t,
        ce.itemHeight = i ? (r - 2 * W) / t : r - 2 * W - (B ? O ? 0 : 6 : 0),
        le = kt.copy(e, ee),
        ae = ce.tabs = new Tabs({
            width: i ? ce.itemWidth : ce.itemWidth * e.length,
            height: i ? ce.itemHeight * e.length : ce.itemHeight,
            tabs: le,
            spacing: p,
            vertical: i,
            backgroundColor: f,
            rollBackgroundColor: m,
            selectedBackgroundColor: z,
            color: y,
            backdropColor: v,
            rollColor: w,
            selectedColor: b,
            currentEnabled: !0,
            currentSelected: o,
            align: a,
            valign: l,
            labelAlign: s,
            labelValign: c,
            labelIndent: d,
            labelIndentHorizontal: u,
            labelIndentVertical: h,
            indent: g,
            useTap: !0,
            excludeCustomTap: J,
            style: te,
            group: oe,
            inherit: ie
        }).mov(i ? 0 : _, i ? W : 0),
        ce.add(ae),
        ae.tap(function(e) {
            e.target.selectedIndex != ce.selectedIndex && (ce.selectedIndex = ae.selectedIndex,
            ce.dispatchEvent("change"),
            e.preventDefault())
        }),
        this.animateTo = function(e, t) {
            zot(e) && (e = 0),
            zot(t) && (t = 50);
            var o = ue(ce.selectedIndex = e);
            if (i) {
                var n = Math.abs(ce.scrollY - o) / ce.itemHeight;
                ce.animate({
                    scrollY: o
                }, n * t),
                ce.scrollY = o
            } else {
                n = Math.abs(ce.scrollX - o) / ce.itemWidth;
                ce.animate({
                    scrollX: o
                }, n * t),
                ce.scrollX = o
            }
            return ce
        }
        ,
        this.addAt = function(e, t, o) {
            return ce.tabs.addAt(copy(e, o), t),
            ce.content.x = 0,
            ce.content.y = 0,
            ce.update(),
            ce
        }
        ,
        this.removeAt = function(e, t) {
            ce.tabs.removeAt(e, t);
            var o = ae.getBounds();
            return ae.setBounds(0, 0, i ? o.width : o.width + 2 * p + 4, i ? o.height + 2 * p + 4 : o.height),
            ce.content.x = 0,
            ce.content.y = 0,
            ce.update(),
            ce
        }
        ,
        "%-&" == e[0] && 1 == e.length && ce.removeAt(1, 0),
        this.clear = function() {
            return ce.tabs.removeAt(ce.length, 0),
            ce.content.x = 0,
            ce.content.y = 0,
            ce.update(),
            ce
        }
        ,
        Object.defineProperty(ce, "items", {
            get: function() {
                return ce.tabs.buttons
            },
            set: function(e) {
                zon && zog("List() - items is read only - use addAt() and removeAt() to change")
            }
        }),
        Object.defineProperty(ce, "list", {
            get: function() {
                return ce.tabs.buttons
            },
            set: function(e) {
                zon && zog("List() - list is read only - use addAt() and removeAt() to change")
            }
        }),
        Object.defineProperty(ce, "length", {
            get: function() {
                return ce.tabs.buttons.length
            },
            set: function(e) {
                zon && zog("List() - length is read only")
            }
        }),
        Object.defineProperty(ce, "selectedIndex", {
            get: function() {
                return se
            },
            set: function(e) {
                ae.selectedIndex = e,
                ce.label = ae.label,
                ce.selected = ae.selected,
                se = e,
                kt.OPTIMIZE || !zns && OPTIMIZE || !ce.stage || ce.stage.update()
            }
        }),
        o && (ce.selectedIndex = 0),
        Object.defineProperty(ce, "selectedIndexPlusPosition", {
            get: function() {
                return se
            },
            set: function(e) {
                ce.selectedIndex = e,
                se = e,
                i ? ce.scrollY = ue(e) : ce.scrollX = ue(e),
                kt.OPTIMIZE || !zns && OPTIMIZE || !ce.stage || ce.stage.update()
            }
        }),
        Object.defineProperty(ce, "text", {
            get: function() {
                if (ce.label)
                    return ce.label.text
            },
            set: function(e) {
                ce.label && (ce.label.text = e)
            }
        }),
        Object.defineProperty(ce, "itemsText", {
            get: function() {
                for (var e = [], t = 0; t < ce.tabs.buttons.length; t++) {
                    var o = ce.tabs.buttons[t].label;
                    o && !zot(o.text) ? e.push(o.text) : e.push(null)
                }
                return e
            },
            set: function(e) {
                zon && zog("List() - itemsText is read only")
            }
        }),
        o && (ce.selectedIndex = 0),
        this.last = function() {
            return this.selectedIndexPlusPosition = this.length - 1,
            this
        }
        ,
        !(this.first = function() {
            return this.selectedIndexPlusPosition = 0,
            this
        }
        ) !== te && Me(this, ie),
        this.clone = function() {
            return ce.cloneProps(new kt.List(n,de,kt.copy(e),t,i,o,a,l,s,c,d,u,h,g,p,f,m,z,v,y,b,w,x,C,k,kt.copy(T),A,B,S,P,E,M,I,j,O,Y,L,D,X,R,_,W,H,V,F,N,G,U,K,Z,q,Q,J,$,ee,te,this.group,ne))
        }
    }
    ,
    kt.extend(kt.List, kt.Window, "clone", "zimWindow", !1),
    kt.Stepper = function(n, e, o, t, r, l, i, s, a, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, S, P, E, M, I, j, O) {
        var Y;
        if (Y = zob(kt.Stepper, arguments, "list, width, backgroundColor, borderColor, borderWidth, label, color, vertical, arrows, corner, shadowColor, shadowBlur, continuous, display, press, hold, holdDelay, holdSpeed, draggable, dragSensitivity, dragRange, stepperType, min, max, step, step2, arrows2, arrows2Scale, keyEnabled, keyArrows, rightForward, downForward, style, group, inherit", this))
            return Y;
        z_d("61"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Stepper",
        this.group = j;
        var L = !1 === I ? {} : kt.getStyle(this.type, this.group, O);
        zot(n) && (n = null != L.list ? L.list : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        zot(e) && (e = null != L.width ? L.width : 200),
        zot(o) && (o = null != L.backgroundColor ? L.backgroundColor : "white"),
        zot(t) && (t = null != L.borderColor ? L.borderColor : null),
        zot(r) && (r = null != L.borderWidth ? L.borderWidth : null),
        t < 0 || r < 0 ? t = r = null : null != t && null == r && (r = 1),
        zot(i) && (i = null != L.color ? L.color : "#555"),
        zot(l) && (l = null != L.label ? L.label : ""),
        "string" != typeof l && "number" != typeof l || (l = new kt.Label({
            text: l,
            size: null != L.size ? 2 * L.size : 64,
            color: i,
            align: null != L.align ? L.align : "center",
            backing: "ignore",
            shadowColor: "ignore",
            shadowBlur: "ignore",
            padding: "ignore",
            backgroundColor: "ignore",
            group: this.group
        })),
        zot(s) && (s = null != L.vertical && L.vertical),
        zot(a) && (a = null == L.arrows || L.arrows),
        zot(c) && (c = null != L.corner ? L.corner : 16),
        zot(d) && (d = null != L.shadowColor ? L.shadowColor : "rgba(0,0,0,.3)"),
        zot(u) && (u = null != L.shadowBlur ? L.shadowBlur : 14),
        zot(h) && (h = null != L.continuous && L.continuous),
        zot(g) && (g = null == L.display || L.display),
        zot(p) && (p = null == L.press || L.press),
        zot(f) && (f = null == L.hold || L.hold),
        zot(m) && (m = null != L.holdDelay ? L.holdDelay : 400),
        zot(z) && (z = null != L.holdSpeed ? L.holdSpeed : 200),
        zot(v) && (v = null == L.draggable || L.draggable),
        (zot(y) || y <= 0) && (y = null != L.dragSensitivity ? L.dragSensitivity : .1),
        zot(b) && (b = null != L.dragRange ? L.dragRange : 200),
        zot(w) && (w = null != L.stepperType ? L.stepperType : "list"),
        zot(x) && (x = null != L.min ? L.min : 0),
        zot(C) && (C = null != L.max ? L.max : 100),
        zot(k) && (k = null != L.step ? L.step : 1),
        zot(T) && (T = null != L.step2 ? L.step2 : k),
        zot(A) && T != k && "number" == w && (A = null == L.arrows2 || L.arrows2),
        zot(B) && (B = null != L.arrows2Scale ? L.arrows2Scale : .5),
        zot(S) && (S = null == L.keyEnabled || L.keyEnabled),
        zot(P) && (P = null == L.keyArrows || L.keyArrows),
        zot(E) && (E = null == L.rightForward || L.rightForward),
        zot(M) && (M = null != L.downForward ? L.downForward : "number" != w);
        var D, X, R, _, W = this, H = 100, V = k, F = 1;
        if ("number" == w) {
            if (x = Number(x),
            C = Number(C),
            NaN == x && (x = 0),
            NaN == C && (C = 100),
            C < x) {
                F = -1;
                var N = C;
                C = x,
                x = N,
                X = C
            } else
                X = x;
            this.min = x,
            this.max = C,
            x < 0 && 0 < C && (X = 0),
            k = Math.abs(k),
            R = Math.max(K(k), K(T))
        } else if ("letter" == w) {
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
            "string" != typeof x && (x = "A"),
            "string" != typeof C && (C = "Z"),
            x = x.substr(0, 1).toUpperCase(),
            C = C.substr(0, 1).toUpperCase();
            var G = n.indexOf(x);
            G < 0 && (x = "A",
            G = 0);
            var U = n.indexOf(C);
            U < 0 && (C = "Z",
            U = n.length),
            U < G && (n.reverse(),
            G = n.length - 1 - G,
            U = n.length - 1 - U),
            n = n.splice(G, U - G + 1)
        } else
            w = "list";
        function K(e) {
            var t = String(e).split(".")[1];
            return t = t ? t.length : 0
        }
        var Z = 0
          , q = 0;
        v && this.on("mousedown", function(e) {
            W.zimAccessibility && W.zimAccessibility.aria || (this.stage.mouseMoveOutside = !0,
            Z = e.rawX,
            q = e.rawY,
            _ = this.stage.on("stagemousemove", function(e) {
                Z = e.rawX,
                q = e.rawY
            }))
        }, null, !0),
        (this.label = l).mouseChildren = !1;
        l.mouseEnabled = !1;
        var Q, J, $, ee, te, oe, ne, re, ie, ae, le, se, ce, de = !1;
        if (a || A) {
            var ue = new createjs.Shape;
            ue.graphics.ss(t).s(r).f("rgba(255,255,255,.11)").r(0, 0, 150, 150),
            ue.regX = 75,
            ue.regY = 87.5
        }
        if (a && (ee = this.containerPrev = new kt.Container({
            style: !1
        }),
        this.addChild(ee),
        ee.hitArea = ue,
        te = this.arrowPrev = new kt.Triangle(H,80,80,o,null,null,null,null,null,!1),
        -1 != d && 0 < u && (ee.shadow = new createjs.Shadow(d,3,3,u)),
        ee.addChild(te),
        ee.cursor = "pointer",
        ee.on("mousedown", function(e) {
            if (!W.zimAccessibility || !W.zimAccessibility.aria) {
                V = k;
                var t = s ? M ? 1 : -1 : E ? -1 : 1;
                ze(t),
                fe(t, null, null, e.stageX, e.stageY)
            }
        }),
        f && ee.on("pressup", me),
        s ? (ee.rotation = 180,
        ee.x = e / 2,
        ee.y = g ? ee.height + 25 + H + ee.height / 2 + 25 : 2 * ee.height) : (ee.rotation = -90,
        ee.x = ee.height / 2,
        ee.y = ee.width / 2)),
        g) {
            var he = this.textBox = new kt.Shape({
                style: !1
            });
            he.cursor = "pointer",
            this.addChild(he),
            he.setBounds(0, 0, e, H),
            null != t && he.graphics.s(t).ss(r);
            var ge, pe = c;
            Array.isArray(pe) || (pe = [c, c, c, c]),
            he.graphics.f(o).rc(0, 0, e, H, pe[0], pe[1], pe[2], pe[3]),
            -1 != d && 0 < u && (he.shadow = new createjs.Shadow(d,3,3,u)),
            a && (s ? a && (he.y = te.height + 25) : a && (he.x = te.height + 25)),
            this.addChild(l),
            0 < n.length && (D = 0,
            l.text = n[D]),
            l.x = 50 + he.x + he.getBounds().width / 2,
            l.y = he.y + (he.getBounds().height - l.getBounds().height) / 2,
            he.on("mousedown", function(e) {
                W.zimAccessibility && W.zimAccessibility.aria || (ge = W.currentValue,
                p && ze(1),
                fe(1, !0, null, e.stageX, e.stageY),
                "number" == w && (clearTimeout($),
                de = !0,
                $ = setTimeout(function() {
                    de = !1
                }, 200)))
            }),
            he.on("pressup", function() {
                W.zimAccessibility && W.zimAccessibility.aria || de && (ye(X = Math.round(X), X),
                W.currentValue != ge && W.dispatchEvent("change"),
                ge = W.currentValue)
            })
        } else
            0 < n.length && (D = 0);
        function fe(r, i, a, e, t) {
            if (f) {
                se = e,
                holdY = t,
                0 == se && (se = 1),
                0 == holdY && (holdY = 1),
                v || (y = 1),
                ce = new kt.Proportion(0,b,z,z * y);
                var l = z;
                Q = setTimeout(function() {
                    !0,
                    function n() {
                        J = setTimeout(function() {
                            var e = r;
                            if (v) {
                                var t = Math.abs(Z - se)
                                  , o = Math.abs(q - holdY);
                                s ? (i || a || (t = 0),
                                a && (o = 0)) : (i || a || (o = 0),
                                a && (t = 0)),
                                (10 <= t || 10 <= o) && (o < t ? (V = s ? T : k,
                                e = 0 < Z - se ? 1 : -1,
                                l = ce.convert(Math.abs(se - Z))) : (V = s ? k : T,
                                e = 0 < q - holdY ? 1 : -1,
                                "number" != w && M || (e *= -1),
                                l = ce.convert(Math.abs(holdY - q))))
                            }
                            ze(e),
                            n()
                        }, l)
                    }()
                }, m)
            }
        }
        function me() {
            W.zimAccessibility && W.zimAccessibility.aria || (!1,
            clearTimeout(Q),
            clearTimeout(J))
        }
        function ze(e) {
            var t;
            if ("number" == w) {
                var o = X;
                X += V * e * F,
                X = kt.decimals(X, R),
                h ? X > W.max ? X = W.min : X < W.min && (X = W.max) : (X > W.max ? (X = 1 == k ? W.max : o,
                g && (he.cursor = "default")) : g && (he.cursor = "pointer"),
                X < W.min && (X = 1 == k ? W.min : o))
            } else {
                if (t = D + e,
                h)
                    t > n.length - 1 && (t = 0),
                    t < 0 && (t = n.length - 1);
                else {
                    if (t > n.length - 1)
                        return void (g && (he.cursor = "default"));
                    if (g && (he.cursor = "pointer"),
                    t < 0)
                        return
                }
                D = t
            }
            ye("number" == w ? X : n[D], "number" == w ? X : D),
            W.currentValue != ge && W.dispatchEvent("change"),
            ge = W.currentValue
        }
        function ve() {
            W.keyFocus = !0;
            var e = document.activeElement;
            e && e.blur()
        }
        function ye(e, t) {
            D = t,
            g && ("number" == w && 0 != e && 0 < R && (e = kt.decimals(e, R, !0)),
            l.text = e,
            l.x = he.x + he.getBounds().width / 2,
            l.y = he.y + (he.getBounds().height - l.getBounds().height) / 2),
            a && (ee.alpha = 1,
            te.color = o,
            ee.cursor = "pointer",
            oe.alpha = 1,
            ne.color = o,
            oe.cursor = "pointer",
            h || ("number" == w ? (D == W.min && (0 < F ? be() : we()),
            D == W.max && (0 < F ? we() : be())) : (0 == D && (s ? we() : be()),
            D == n.length - 1 && (s ? be() : we())))),
            !oe || kt.OPTIMIZE || !zns && OPTIMIZE || !oe.stage ? !l || kt.OPTIMIZE || !zns && OPTIMIZE || !l.stage || l.stage.update() : oe.stage.update(),
            W.zimAccessibility && W.zimAccessibility.changeTitle(W, null, !0)
        }
        function be() {
            a && (ee.alpha = .8,
            te.color = "#aaa",
            ee.cursor = "default")
        }
        function we() {
            a && (oe.alpha = .8,
            ne.color = "#aaa",
            oe.cursor = "default")
        }
        a && (oe = this.containerNext = new kt.Container({
            style: !1
        }),
        this.addChild(oe),
        oe.hitArea = ue.clone(),
        ne = this.arrowNext = new kt.Triangle(H,80,80,o,null,null,null,null,null,!1),
        -1 != d && 0 < u && (oe.shadow = new createjs.Shadow(d,3,3,u)),
        oe.addChild(ne),
        oe.cursor = "pointer",
        oe.on("mousedown", function(e) {
            if (!W.zimAccessibility || !W.zimAccessibility.aria) {
                V = k;
                var t = s ? M ? -1 : 1 : E ? 1 : -1;
                ze(t),
                fe(t, null, null, e.stageX, e.stageY)
            }
        }),
        f && oe.on("pressup", me),
        s ? (oe.rotation = 0,
        oe.x = e / 2,
        oe.y = oe.getBounds().height / 2) : (oe.rotation = 90,
        oe.x = g ? he.x + he.getBounds().width + oe.getBounds().height / 2 + 25 : ee.x + ee.getBounds().width,
        oe.y = oe.getBounds().width / 2)),
        f && g && he.on("pressup", me),
        A && ((re = this.prev2 = new kt.Container({
            style: !1
        })).hitArea = ue.clone(),
        ie = this.arrowPrev2 = new kt.Triangle(H,80,80,"rgba(0,0,0,.2)",o,2,null,null,null,!1),
        re.addChild(ie),
        re.cursor = "pointer",
        re.sca(B),
        re.alpha = .5,
        re.on("mousedown", function(e) {
            if (!W.zimAccessibility || !W.zimAccessibility.aria) {
                V = T;
                var t = s ? E ? -1 : 1 : M ? 1 : -1;
                ze(t),
                fe(t, null, !0, e.stageX, e.stageY)
            }
        }),
        f && re.on("pressup", me),
        (ae = this.next2 = new kt.Container({
            style: !1
        })).hitArea = ue.clone(),
        le = this.arrowNext2 = new kt.Triangle(H,80,80,"rgba(0,0,0,.2)",o,2,null,null,null,!1),
        ae.addChild(le),
        ae.cursor = "pointer",
        ae.sca(B),
        ae.alpha = .5,
        ae.on("mousedown", function(e) {
            if (!W.zimAccessibility || !W.zimAccessibility.aria) {
                V = T;
                var t = s ? E ? 1 : -1 : M ? -1 : 1;
                ze(t),
                fe(t, null, !0, e.stageX, e.stageY)
            }
        }),
        f && ae.on("pressup", me),
        s ? (re.y = this.height / 2,
        re.x = -re.width / 2 - 25 * Math.max(.2, Math.min(1, B)),
        re.rotation = 270,
        ae.y = this.height / 2,
        ae.x = this.width + ae.width / 2 + 25 * Math.max(.2, Math.min(1, B)),
        ae.rotation = 90) : (ae.x = this.width / 2,
        ae.y = -ae.height / 2 - 25 * Math.max(.2, Math.min(1, B)),
        ae.rotation = 0,
        re.x = this.width / 2,
        re.y = this.height + re.height / 2 + 25 * Math.max(.2, Math.min(1, B)),
        re.rotation = 180),
        this.addChild(re, ae)),
        Object.defineProperty(this, "stepperArray", {
            get: function() {
                if ("number" == w) {
                    n = [];
                    for (var e = W.min; e <= W.max; e += Math.min(k, T))
                        n.push(kt.decimals(e, R, null, !1))
                }
                return n
            },
            set: function(e) {
                n = e,
                W.selectedIndex = W.selectedIndex
            }
        }),
        Object.defineProperty(this, "min", {
            get: function() {
                return x
            },
            set: function(e) {
                "number" == w ? (W.currentValue < e && (W.currentValue = e),
                x = e,
                W.selectedIndex = W.selectedIndex) : x = e
            }
        }),
        Object.defineProperty(this, "max", {
            get: function() {
                return C
            },
            set: function(e) {
                "number" == w ? (W.currentValue > e && (W.currentValue = e),
                C = e,
                W.selectedIndex = W.selectedIndex) : C = e
            }
        }),
        ye("number" == w ? X : n[D], "number" == w ? X : D),
        Object.defineProperty(this, "selectedIndex", {
            get: function() {
                return "number" == w ? W.stepperArray.indexOf(W.currentValue) : D
            },
            set: function(e) {
                zot(e) || ("number" == w ? (D = Math.min(W.stepperArray.length - 1, Math.max(0, e)),
                ye(X = W.stepperArray[D], X)) : (e = Math.min(n.length - 1, Math.max(0, e)),
                ye(n[D = e], D)))
            }
        }),
        Object.defineProperty(this, "currentValue", {
            get: function() {
                return "number" == w ? X : n[D]
            },
            set: function(e) {
                if (!zot(e))
                    if ("number" == w) {
                        if (e = Number(e),
                        W.max > W.min) {
                            if (e > W.max || e < W.min)
                                return
                        } else if (e < W.max || e > W.min)
                            return;
                        if (newIndex = W.stepperArray.indexOf(e),
                        newIndex < 0)
                            return;
                        D = newIndex,
                        ye(X = W.stepperArray[D], X)
                    } else {
                        if (!(-1 < n.indexOf(e)))
                            return;
                        if ((e = n.indexOf(e)) == W.selectedIndex)
                            return;
                        ye(n[D = e], D)
                    }
            }
        }),
        Object.defineProperty(this, "currentValueEvent", {
            get: function() {
                return W.currentValue
            },
            set: function(e) {
                String(e) != String(W.currentValue) && (W.currentValue = e,
                W.dispatchEvent("change"))
            }
        }),
        Object.defineProperty(this, "continuous", {
            get: function() {
                return h
            },
            set: function(e) {
                h = e,
                "number" == w ? ye(X, X) : ye(n[W.selectedIndex], W.selectedIndex)
            }
        }),
        this._enabled = !0,
        Object.defineProperty(W, "enabled", {
            get: function() {
                return W._enabled
            },
            set: function(e) {
                Se(W, e),
                e ? ("number" == w ? ye(X, X) : ye(n[W.selectedIndex], W.selectedIndex),
                window.addEventListener("keydown", W.keyDownEvent)) : (be(),
                we(),
                window.removeEventListener("keydown", W.keyDownEvent),
                g && (l.mouseChildren = !1),
                g && (l.mouseEnabled = !1)),
                !oe || kt.OPTIMIZE || !zns && OPTIMIZE || !oe.stage ? !l || kt.OPTIMIZE || !zns && OPTIMIZE || !l.stage || l.stage.update() : oe.stage.update()
            }
        }),
        "undefined" != typeof KEYFOCUS && (kt.KEYFOCUS = KEYFOCUS),
        Object.defineProperty(this, "keyFocus", {
            get: function() {
                return kt.KEYFOCUS == W
            },
            set: function(e) {
                kt.KEYFOCUS = W
            }
        }),
        kt.KEYFOCUS || ve(),
        this.on("mousedown", function() {
            ve()
        });
        var xe = !1
          , Ce = !1
          , ke = !1;
        this.on("mousedown", function() {
            W.zimAccessibility && W.zimAccessibility.aria || (W.focus = !0,
            ke = Ce = !(xe = !0))
        }),
        this.keyDownEvent = function(e) {
            if (W.stage && (W.zimAccessibility && W.focus || !W.zimAccessibility && W.keyFocus)) {
                e || (e = event);
                var t, o = e.keyCode;
                if (P && 37 <= o && o <= 40) {
                    var n = M ? 40 : 38
                      , r = E ? 39 : 37
                      , i = M ? 38 : 40
                      , a = E ? 37 : 39;
                    o == n || o == r ? (V = s && o == n || !s && o == r ? k : T,
                    ze(1)) : o != i && o != a || (V = s && o == i || !s && o == a ? k : T,
                    ze(-1))
                }
                if (S)
                    if ("number" == w)
                        !e.shiftKey && 48 <= o && o <= 57 ? t = o - 48 : 96 <= o && o <= 105 ? t = o - 96 : 190 == o ? Ce = !0 : 173 == o || 189 == o ? (W.currentValue = -1 * W.currentValue,
                        W.currentValue != ge && W.dispatchEvent("change"),
                        ge = W.currentValue,
                        ke = !ke) : 46 == o && (Ce = !(xe = !0)),
                        xe && !zot(t) ? (Ce && (t /= 10),
                        ke && (t *= -1),
                        W.currentValue = t,
                        xe = !1,
                        W.currentValue != ge && W.dispatchEvent("change"),
                        ge = W.currentValue) : zot(t) || (Ce && (t = String(t / 10).substr(1)),
                        W.currentValue = Number(Math.floor(Number(l.text)) + String(t)),
                        W.currentValue != ge && W.dispatchEvent("change"),
                        ge = W.currentValue);
                    else
                        W.currentValue = String.fromCharCode(e.keyCode),
                        W.currentValue != ge && W.dispatchEvent("change"),
                        ge = W.currentValue
            }
        }
        ,
        window.addEventListener("keydown", this.keyDownEvent),
        this.next = function() {
            ze(1)
        }
        ,
        !(this.prev = function() {
            ze(-1)
        }
        ) !== I && Me(this, L),
        this.clone = function() {
            return W.cloneProps(new kt.Stepper(n,e,o,t,r,l.clone(),i,s,a,c,d,u,h,g,p,f,m,z,v,y,b,w,x,C,k,T,A,B,S,P,E,M,I,this.group,O))
        }
        ,
        this.dispose = function() {
            return window.removeEventListener("keydown", W.keyDownEvent),
            W.stage && W.stage.off(_),
            this.zimContainer_dispose(),
            !0
        }
    }
    ,
    kt.zut = function(e) {
        if (zot(e) || !e.key)
            return !0;
        kt.async("https://zimjs.com/gamdata.php?id=" + e.key + "&player=" + e.player + "&score=" + e.score + "&reverse=" + e.info.reverse + "&total=" + e.info.total + "&allowZero=" + e.info.allowZero, e.info.type)
    }
    ,
    kt.extend(kt.Stepper, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Slider = function(a, l, t, s, e, o, n, c, r, i, d, u, h, g, p, f, m, z) {
        var v;
        if (v = zob(kt.Slider, arguments, "min, max, step, button, barLength, barWidth, barColor, vertical, useTicks, inside, keyArrows, keyArrowsStep, keyArrowsH, keyArrowsV, damp, style, group, inherit", this))
            return v;
        z_d("62"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Slider",
        this.group = m;
        var y = !1 === f ? {} : kt.getStyle(this.type, this.group, z);
        if (zot(a) && (a = null != y.min ? y.min : 0),
        zot(l) && (l = null != y.max ? y.max : 10),
        l - a != 0) {
            zot(t) && (t = null != y.step ? y.step : 0),
            zot(e) && (e = null != y.barLength ? y.barLength : 300),
            zot(o) && (o = null != y.barWidth ? y.barWidth : 3),
            zot(n) && (n = null != y.barColor ? y.barColor : "#666"),
            zot(c) && (c = null != y.vertical && y.vertical),
            zot(r) && (r = null != y.useTicks && y.useTicks),
            zot(i) && (i = null != y.inside && y.inside),
            zot(d) && (d = null == y.keyArrows || y.keyArrows),
            zot(h) && (h = null == y.keyArrowsH || y.keyArrowsH),
            zot(g) && (g = null == y.keyArrowsV || y.keyArrowsV),
            zot(u) && (u = null != y.keyArrowsStep ? y.keyArrowsStep : (l - a) / 100),
            zot(p) && (p = null != y.damp && y.damp);
            var b, w, x = !(!zot(y.backing) && "Pattern" != y.backing.type);
            if (zot(s)) {
                var C = 30
                  , k = 40;
                c && (C = 50,
                k = 40),
                s = null != y.button ? y.button : new kt.Button({
                    width: null != y.width ? y.width : C,
                    height: null != y.height ? y.height : k,
                    label: "",
                    backgroundColor: null != y.backgroundColor ? y.backgroundColor : "#fff",
                    rollBackgroundColor: null != y.rollBackgroundColor ? y.rollBackgroundColor : "#ddd",
                    borderColor: null != y.borderColor ? y.borderColor : x ? "#666" : null,
                    borderWidth: null != y.borderWidth ? y.borderWidth : x ? 1 : null,
                    corner: null != y.corner ? y.corner : 0,
                    backing: null != y.backing ? y.backing : null,
                    rollBacking: null != y.rollBacking ? y.rollBacking : null,
                    hitPadding: 30,
                    style: !1
                })
            }
            s.rollPersist = !0,
            c ? (b = s.width,
            i ? (w = e,
            this.setBounds(0, 0, b, w)) : (w = e + s.height,
            this.setBounds(-s.width / 2, -s.height / 2, b, w))) : (w = Math.max(s.height, o),
            i ? (b = e,
            this.setBounds(0, 0, b, w)) : (b = e + s.width,
            this.setBounds(-s.width / 2, -s.height / 2, b, w)));
            var T, A, B, S, P, E, M, I, j, O = this, Y = a, L = 0;
            if (this.button = s,
            this.cursor = "pointer",
            r && 0 != t) {
                S = this.ticks = new kt.Shape({
                    style: !1
                }),
                this.addChild(S),
                (P = S.graphics).ss(1).s(n);
                var D = Math.round((l - a) / t)
                  , X = (l - a) / D;
                if (X != t && zon && zog("zim.Slider() : non-divisible step (" + t + ") adjusted"),
                t = X,
                i)
                    var R = (e - (c ? s.height : s.width)) / Math.abs(D);
                else
                    R = e / Math.abs(D)
            }
            if (c) {
                var _ = i ? s.height / 2 : 0;
                if ((T = this.bar = new kt.Rectangle(o,e,n,null,null,null,null,!1)).expand(20, 0),
                T.centerReg(this),
                s.centerReg(this),
                B = T.getBounds(),
                A = new createjs.Rectangle(T.x,B.y + _,0,B.height - 2 * _),
                r && 0 != t) {
                    for (var W = 0; W <= Math.abs(D); W++)
                        P.mt(0, _ + R * W).lt(20, _ + R * W);
                    S.x = T.x + 15
                }
            } else {
                _ = i ? s.width / 2 : 0;
                if ((T = this.bar = new kt.Rectangle(e,o,n,null,null,null,null,!1)).expand(0, 20),
                T.centerReg(this),
                s.centerReg(this),
                B = T.getBounds(),
                A = new createjs.Rectangle(B.x + _,T.y,B.width - 2 * _,0),
                r && 0 != t) {
                    for (W = 0; W <= Math.abs(D); W++)
                        P.mt(_ + R * W, 0).lt(_ + R * W, -20);
                    S.y = T.y - 10
                }
            }
            s.x = A.x,
            s.y = A.y,
            s.on("mousedown", function(e) {
                O.focus = !0;
                var t = O.globalToLocal(e.stageX, e.stageY);
                E = t.x - s.x,
                M = t.y - s.y,
                O.stage && (O.stage.mouseMoveOutside = !0)
            }),
            s.on("pressmove", function(e) {
                U(e)
            }),
            T.on("mousedown", function(e) {
                M = E = 0,
                O.zimAccessibility && O.zimAccessibility.aria || U(e)
            }),
            p && (I = a,
            j = new kt.Damp(I,p),
            O.ticker = Ticker.add(function() {
                I = j.convert(Y)
            })),
            Object.defineProperty(this, "currentValue", {
                get: function() {
                    return p ? I : Y
                },
                set: function(e) {
                    zot(e) || (a < l ? (e < a && (e = a),
                    l < e && (e = l)) : (a < e && (e = a),
                    e < l && (e = l)),
                    Y = e = G(e),
                    j && j.immediate(Y),
                    c ? (s.y = (e - l) / (a - l) * A.height + _,
                    L = s.y) : (s.x = (e - a) / (l - a) * A.width + _,
                    L = s.x),
                    Z(),
                    kt.OPTIMIZE || !zns && OPTIMIZE || !O.stage || O.stage.update())
                }
            }),
            Object.defineProperty(this, "currentValueEvent", {
                get: function() {
                    return p ? I : Y
                },
                set: function(e) {
                    e != O.currentValue && (O.currentValue = e,
                    O.dispatchEvent("change"))
                }
            }),
            Object.defineProperty(this, "min", {
                get: function() {
                    return a
                },
                set: function(e) {
                    zon && zog("min is read only")
                }
            }),
            Object.defineProperty(this, "max", {
                get: function() {
                    return l
                },
                set: function(e) {
                    zon && zog("max is read only")
                }
            }),
            Object.defineProperty(this, "step", {
                get: function() {
                    return t
                },
                set: function(e) {
                    zon && zog("step is read only")
                }
            }),
            Object.defineProperty(this, "keyArrowsH", {
                get: function() {
                    return h
                },
                set: function(e) {
                    h = e
                }
            }),
            Object.defineProperty(this, "keyArrowsV", {
                get: function() {
                    return g
                },
                set: function(e) {
                    g = e
                }
            }),
            "undefined" != typeof KEYFOCUS && (kt.KEYFOCUS = KEYFOCUS),
            Object.defineProperty(this, "keyFocus", {
                get: function() {
                    return kt.KEYFOCUS == O
                },
                set: function(e) {
                    kt.KEYFOCUS = O
                }
            }),
            d && !kt.KEYFOCUS && q(),
            this.on("mousedown", function() {
                d && q()
            });
            var H = !1
              , V = !1
              , F = !1
              , N = !1;
            this.keyDownEvent = function(e) {
                O.stage && (O.zimAccessibility && O.focus || !O.zimAccessibility && O.keyFocus) && (37 == e.keyCode && h ? H = !0 : 40 == e.keyCode && g ? V = !0 : 39 == e.keyCode && h ? F = !0 : 38 == e.keyCode && g && (N = !0),
                null == O.keyInterval && (H || V || F || N) && (Q(),
                O.keyTimeout = setTimeout(function() {
                    null == O.keyInterval && (H || V || F || N) && (O.keyInterval = setInterval(Q, 40))
                }, 140)))
            }
            ,
            window.addEventListener("keydown", this.keyDownEvent),
            O.keyUpEvent = function(e) {
                37 == e.keyCode ? H = !1 : 40 == e.keyCode ? V = !1 : 39 == e.keyCode ? F = !1 : 38 == e.keyCode && (N = !1),
                null == O.keyInterval || H || V || F || N || (clearInterval(O.keyInterval),
                O.keyInterval = null)
            }
            ,
            window.addEventListener("keyup", this.keyUpEvent),
            this._enabled = !0,
            Object.defineProperty(O, "enabled", {
                get: function() {
                    return O._enabled
                },
                set: function(e) {
                    Se(O, e),
                    e ? (window.addEventListener("keydown", O.keyDownEvent),
                    window.addEventListener("keyup", O.keyUpEvent)) : (window.removeEventListener("keydown", O.keyDownEvent),
                    window.removeEventListener("keyup", O.keyUpEvent))
                }
            }),
            !1 !== f && Me(this, y),
            this.clone = function() {
                return O.cloneProps(new kt.Slider(a,l,t,s.clone(),e,o,n,c,r,i,d,u,h,g,p,f,this.group,z))
            }
            ,
            this.dispose = function() {
                return window.removeEventListener("keydown", O.keyDownEvent),
                window.removeEventListener("keyup", O.keyUpEvent),
                this.zimContainer_dispose(),
                !0
            }
        } else
            zog("ZIM Slider range must not be 0");
        function G(e) {
            return 0 == t ? e : Math.round(e / t) * t
        }
        function U(e) {
            var t, o, n, r = O.globalToLocal(e.stageX, e.stageY), i = (t = r.x - E,
            o = r.y - M,
            n = A,
            t = Math.max(n.x, Math.min(n.x + n.width, t)),
            o = Math.max(n.y, Math.min(n.y + n.height, o)),
            {
                x: t,
                y: o
            });
            c ? (s.x = i.x,
            Y = G((i.y - A.y) / A.height * (a - l)),
            s.y = A.y + Y * A.height / (a - l),
            Y += l,
            s.y != L && O.dispatchEvent("change"),
            L = s.y) : (Y = G((i.x - A.x) / A.width * (l - a)),
            s.x = A.x + Y * A.width / (l - a),
            Y += a,
            s.y = i.y,
            s.x != L && O.dispatchEvent("change"),
            L = s.x),
            Z(),
            kt.OPTIMIZE || !zns && OPTIMIZE || !O.stage || O.stage.update()
        }
        function K(e) {
            return 0 < e ? 1 : -1
        }
        function Z() {
            O.zimAccessibility && O.zimAccessibility.changeTitle(O, null, !0)
        }
        function q() {
            O.keyFocus = !0;
            var e = document.activeElement;
            e && e.blur()
        }
        function Q() {
            (H || V) && (O.currentValueEvent -= 0 < t ? t * K(l - a) : u * K(l - a)),
            (F || N) && (O.currentValueEvent += 0 < t ? t * K(l - a) : u * K(l - a))
        }
    }
    ,
    kt.extend(kt.Slider, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Dial = function(n, r, i, e, t, o, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k) {
        var T;
        if (T = zob(kt.Dial, arguments, "min, max, step, width, backgroundColor, indicatorColor, indicatorScale, indicatorType, innerCircle, innerScale, useTicks, innerTicks, tickColor, limit, keyArrows, keyArrowsStep, keyArrowsH, keyArrowsV, continuous, continuousMin, continuousMax, damp, style, group, inherit", this))
            return T;
        z_d("63"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Dial",
        this.group = C;
        var A = !1 === x ? {} : kt.getStyle(this.type, this.group, k);
        if (zot(n) && (n = null != A.min ? A.min : 0),
        zot(r) && (r = null != A.max ? A.max : 10),
        r - n != 0) {
            zot(i) && (i = null != A.step ? A.step : 1),
            zot(e) && (e = null != A.width ? A.width : 100),
            zot(t) && (t = null != A.backgroundColor ? A.backgroundColor : "#666"),
            zot(o) && (o = null != A.indicatorColor ? A.indicatorColor : "#222"),
            zot(a) && (a = null != A.indicatorScale ? A.indicatorScale : 1),
            zot(l) && (l = null != A.indicatorType ? A.indicatorType : "arrow"),
            zot(s) && (s = null == A.innerCircle || A.innerCircle),
            zot(c) && (c = null != A.innerScale ? A.innerScale : .5),
            zot(d) && (d = null == A.useTicks || A.useTicks),
            zot(u) && (u = null != A.innerTicks && A.innerTicksinnerTicks),
            zot(h) && (h = null != A.tickColor ? A.tickColor : o),
            zot(g) && (g = null == A.limit || A.limit),
            zot(p) && (p = null == A.keyArrows || A.keyArrows),
            zot(f) && (f = null != A.keyArrowsStep ? A.keyArrowsStep : (r - n) / 100),
            zot(m) && (m = null == A.keyArrowsH || A.keyArrowsH),
            zot(z) && (z = null == A.keyArrowsV || A.keyArrowsV),
            zot(v) && (v = null != A.continuous && A.continuous),
            v && (g = null != A.limit && A.limit),
            zot(w) && (w = null != A.damp && A.damp),
            0 == g && (w = null);
            var B = this;
            this.cursor = "pointer";
            var S = e / 2
              , P = n
              , E = 0
              , M = this.backing = new kt.Circle(S,t,null,null,null,!1);
            if (this.addChild(M),
            s) {
                var I = u ? "rgba(0,0,0,.2)" : "rgba(0,0,0,.1)";
                "black" != t && "#000" != t && "#000000" != t && "#111" != t && "#111111" != t || (I = "#222");
                var j = this.inner = new kt.Circle(S * c,I,null,null,null,!1);
                if (this.addChild(j),
                !u) {
                    var O = this.inner2 = new kt.Circle(S * (c - .1),"rgba(0,0,0,.1)",null,null,null,!1);
                    this.addChild(O)
                }
            }
            var Y, L, D, X, R = Math.abs(r - n) / i;
            if (d && 0 != i) {
                var _ = this.ticks = new kt.Container({
                    style: !1
                });
                this.addChild(_);
                for (var W = 0; W < (v ? R : R + 1); W++) {
                    var H;
                    (H = new kt.Rectangle(1,.2 * S,h,null,null,null,null,!1)).regY = S * (u ? c - .05 : 1.28),
                    H.regX = .5,
                    H.rotation = 360 / (v ? R : R + 1) * W,
                    _.addChild(H)
                }
            }
            if (this.setBounds(-S, -S, e, e),
            "dot" == l || "circle" == l) {
                var V = this.indicator = new kt.Container({
                    style: !1
                })
                  , F = this.indicatorShape = new kt.Circle(.19 * S,o,null,null,null,!1);
                V.addChild(F),
                kt.sca(V, a),
                V.regY = S - V.getBounds().width * a / 2 - .07 * S
            } else if ("line" == l || "rectangle" == l) {
                V = this.indicator = new kt.Container({
                    style: !1
                }),
                F = this.indicatorShape = new kt.Rectangle(.1 * S,.3 * S,o,null,null,null,null,!1);
                V.addChild(F),
                kt.sca(V, a),
                V.regY = S - V.getBounds().width * a / 2 - .07 * S,
                V.regX = .05 * S
            } else {
                V = this.indicator = new kt.Container({
                    style: !1
                }),
                F = this.indicatorShape = new kt.Triangle(.4 * S,.4 * S,.4 * S,o,null,null,null,null,!1);
                V.addChild(F),
                kt.sca(V, a),
                V.regY = S - V.getBounds().height * a * (u ? .85 : .75),
                u && (F.rotation = 180)
            }
            V.regY /= a,
            this.addChild(V);
            var N, G, U = 0;
            if (v)
                var K = 0
                  , Z = 0
                  , q = 0
                  , Q = !1
                  , J = !1
                  , $ = !0;
            else
                n;
            this.on("mousedown", function(e) {
                if (!B.zimAccessibility || !B.zimAccessibility.aria) {
                    Y = V.rotation;
                    var t = B.parent.globalToLocal(e.stageX, e.stageY)
                      , o = t.x - B.x
                      , n = B.y - t.y;
                    L = 180 * Math.atan2(o, n) / Math.PI;
                    var r = (new Date).getTime();
                    D = B.on("pressmove", function(e) {
                        if (Q) {
                            var t = B.parent.globalToLocal(e.stageX, e.stageY)
                              , o = t.x - B.x
                              , n = B.y - t.y;
                            L = 180 * Math.atan2(o, n) / Math.PI,
                            Y = V.rotation
                        }
                        o = (t = B.parent.globalToLocal(e.stageX, e.stageY)).x - B.x,
                        n = B.y - t.y;
                        var r = 180 * Math.atan2(o, n) / Math.PI
                          , i = Y + r - L;
                        i = (i + 36e5) % 360,
                        g && 180 < Math.abs(i - U) || (le(i),
                        U = i)
                    }),
                    X = this.on("pressup", function(e) {
                        (new Date).getTime() - r < 200 && (t = B.parent.globalToLocal(e.stageX, e.stageY),
                        o = t.x - B.x,
                        n = B.y - t.y,
                        le(180 * Math.atan2(o, n) / Math.PI));
                        Y = V.rotation,
                        B.off("pressmove", D),
                        B.off("pressup", X)
                    })
                }
            }),
            w && (N = n,
            G = new kt.Damp(N,w),
            B.ticker = Ticker.add(function() {
                N = G.convert(P)
            })),
            Object.defineProperty(this, "currentValue", {
                get: function() {
                    return w ? N : P
                },
                set: function(e) {
                    zot(e) || (v ? (Q = !1,
                    zot(y) || zot(b) ? zot(y) ? zot(b) || b < e && (e = b,
                    Q = !0) : e < y && (e = y,
                    Q = !0) : y < b ? (e < y && (e = y,
                    Q = !0),
                    b < e && (e = b,
                    Q = !0)) : (y < e && (e = y,
                    Q = !0),
                    e < b && (e = b,
                    Q = !0)),
                    $ && (J = !0,
                    q = 360 * Math.floor(e / (r - n)))) : n < r ? (e < n && (e = g ? n : r),
                    r < e && (e = g ? r : n)) : (n < e && (e = g ? n : r),
                    e < r && (e = g ? r : n)),
                    e = re(P = e),
                    w && w.immediate(P),
                    V.rotation = 360 * (e - n) / (r - n + (v ? 0 : ie(r - n) * i)),
                    V.rotation = (V.rotation + 36e5) % 360,
                    E = e - n,
                    U = V.rotation,
                    ae(),
                    kt.OPTIMIZE || !zns && OPTIMIZE || !B.stage || B.stage.update())
                }
            }),
            Object.defineProperty(this, "currentValueEvent", {
                get: function() {
                    return w ? N : P
                },
                set: function(e) {
                    e != B.currentValue && (B.currentValue = e,
                    B.dispatchEvent("change"))
                }
            }),
            Object.defineProperty(this, "min", {
                get: function() {
                    return n
                },
                set: function(e) {
                    v ? n = e : zon && zog("min is read only")
                }
            }),
            Object.defineProperty(this, "max", {
                get: function() {
                    return r
                },
                set: function(e) {
                    v ? r = e : zon && zog("max is read only")
                }
            }),
            Object.defineProperty(this, "continuous", {
                get: function() {
                    return v
                },
                set: function(e) {
                    zon && zog("continuous is read only")
                }
            }),
            Object.defineProperty(this, "continuousMin", {
                get: function() {
                    return y
                },
                set: function(e) {
                    y = e,
                    B.currentValue < y && (B.currentValue = y)
                }
            }),
            Object.defineProperty(this, "continuousMax", {
                get: function() {
                    return b
                },
                set: function(e) {
                    b = e,
                    B.currentValue > b && (B.currentValue = b)
                }
            }),
            Object.defineProperty(this, "step", {
                get: function() {
                    return i
                },
                set: function(e) {
                    zon && zog("step is read only")
                }
            }),
            Object.defineProperty(this, "keyArrowsH", {
                get: function() {
                    return m
                },
                set: function(e) {
                    m = e
                }
            }),
            Object.defineProperty(this, "keyArrowsV", {
                get: function() {
                    return z
                },
                set: function(e) {
                    z = e
                }
            }),
            "undefined" != typeof KEYFOCUS && (kt.KEYFOCUS = KEYFOCUS),
            Object.defineProperty(this, "keyFocus", {
                get: function() {
                    return kt.KEYFOCUS == B
                },
                set: function(e) {
                    kt.KEYFOCUS = B
                }
            }),
            p && !kt.KEYFOCUS && se(),
            this.on("mousedown", function() {
                p && se()
            });
            var ee = !1
              , te = !1
              , oe = !1
              , ne = !1;
            this.keyDownEvent = function(e) {
                B.stage && (B.zimAccessibility && B.focus || !B.zimAccessibility && B.keyFocus) && (37 == e.keyCode && m ? ee = !0 : 40 == e.keyCode && z ? te = !0 : 39 == e.keyCode && m ? oe = !0 : 38 == e.keyCode && z && (ne = !0),
                null == B.keyInterval && (ee || te || oe || ne) && (ce(),
                B.keyTimeout = setTimeout(function() {
                    null == B.keyInterval && (ee || te || oe || ne) && (B.keyInterval = setInterval(ce, 40))
                }, 140)))
            }
            ,
            window.addEventListener("keydown", this.keyDownEvent),
            B.keyUpEvent = function(e) {
                37 == e.keyCode ? ee = !1 : 40 == e.keyCode ? te = !1 : 39 == e.keyCode ? oe = !1 : 38 == e.keyCode && (ne = !1),
                null == B.keyInterval || ee || te || oe || ne || (clearInterval(B.keyInterval),
                B.keyInterval = null)
            }
            ,
            window.addEventListener("keyup", this.keyUpEvent),
            this._enabled = !0,
            Object.defineProperty(B, "enabled", {
                get: function() {
                    return B._enabled
                },
                set: function(e) {
                    Se(B, e),
                    e ? (B.keyDownEvent = window.addEventListener("keydown", B.keyDownEvent),
                    B.keyUpEvent = window.addEventListener("keyup", B.keyUpEvent)) : (window.removeEventListener("keydown", B.keyDownEvent),
                    window.removeEventListener("keyup", B.keyUpEvent))
                }
            }),
            !1 !== x && Me(this, A),
            this.clone = function() {
                return B.cloneProps(new kt.Dial(n,r,i,e,t,o,a,l,s,c,d,u,h,g,p,f,m,z,v,y,b,w,x,this.group,k))
            }
            ,
            this.dispose = function() {
                return window.removeEventListener("keydown", B.keyDownEvent),
                window.removeEventListener("keyup", B.keyUpEvent),
                this.zimContainer_dispose(),
                !0
            }
        } else
            zog("ZIM Dial range must not be 0");
        function re(e) {
            return 0 == i ? e : Math.round(e / i) * i
        }
        function ie(e) {
            return 0 < e ? 1 : -1
        }
        function ae() {
            B.zimAccessibility && B.zimAccessibility.changeTitle(B, null, !0)
        }
        function le(e) {
            if (v) {
                J && (J = !1),
                K + 180 < e ? q -= 360 : e < K - 180 && (q += 360),
                Z = q + e,
                $ = !1;
                var t = B.currentValue;
                return B.currentValue = re(Z * (r - n) / 360),
                t != B.currentValue && B.dispatchEvent("change"),
                K = e,
                $ = !0
            }
            var o;
            e < 0 && (e += 360),
            e %= 360,
            0 != i ? (o = re((e = Math.min(e, 360 - 360 / (R + 1))) / (360 - 360 / (R + 1)) * (r - n)),
            V.rotation = o * (360 - 360 / (R + 1)) / (r - n)) : o = (V.rotation = e) / 360 * (r - n),
            o != E && (P = (E = o) + n,
            B.dispatchEvent("change"),
            kt.OPTIMIZE || !zns && OPTIMIZE || !B.stage || B.stage.update()),
            ae()
        }
        function se() {
            B.keyFocus = !0;
            var e = document.activeElement;
            e && e.blur()
        }
        function ce() {
            (ee || te) && (B.currentValueEvent -= 0 < i ? i * ie(r - n) : f * ie(r - n)),
            (oe || ne) && (B.currentValueEvent += 0 < i ? i * ie(r - n) : f * ie(r - n))
        }
    }
    ,
    kt.extend(kt.Dial, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Tabs = function(i, a, o, l, s, c, d, u, g, p, r, f, m, z, n, v, y, b, x, C, k, T, A, B, S, P, E, M, I, j, O, Y, L, D, X, R, _, W, H, V, e, F) {
        var t;
        if (t = zob(kt.Tabs, arguments, "width, height, tabs, backgroundColor, rollBackgroundColor, selectedBackgroundColor, color, rollColor, selectedColor, vertical, spacing, currentEnabled, currentSelected, corner, base, keyEnabled, gradient, gloss, backing, rollBacking, wait, waitTime, waitBackgroundColor, rollWaitBackgroundColor, waitColor, rollWaitColor, waitModal, waitEnabled, backdropColor, align, valign, labelAlign, labelValign, labelIndent, labelIndentHorizontal, labelIndentVertical, indent, useTap, excludeCustomTap, style, group, inherit", this))
            return t;
        z_d("65");
        var N = !1 === V ? {} : kt.getStyle("Tabs", this.group, F);
        zot(p) && (p = null != N.vertical && N.vertical);
        var G = !zot(i);
        if (zot(i) && (i = null != N.width ? N.width : p ? 60 : 240),
        zot(a) && (a = null != N.height ? N.height : p ? 240 : 60),
        this.zimContainer_constructor(null, null, null, null, !0),
        this.type = "Tabs",
        this.group = e,
        (zot(o) || o.length <= 0) && (o = null != N.tabs ? N.tabs : [1, 2, 3, 4]),
        zot(l) && (l = null != N.backgroundColor ? N.backgroundColor : "#777"),
        zot(s) && (s = null != N.rollBackgroundColor ? N.rollBackgroundColor : "#555"),
        zot(c) && (c = null != N.selectedBackgroundColor ? N.selectedBackgroundColor : "#333"),
        zot(d) && (d = null != N.color ? N.color : "white"),
        zot(u) && (u = null != N.rollColor ? N.rollColor : d),
        zot(x) && (x = null != N.backing ? N.backing : null),
        zot(C) && (C = null != N.rollBacking ? N.rollBacking : null),
        zot(g) && (g = null != N.selectedColor ? N.selectedColor : d),
        zot(j) && (j = null != N.align ? N.align : "center"),
        zot(O) && (O = null != N.valign ? N.valign : "center"),
        zot(Y) && (Y = null != N.labelAlign ? N.labelAlign : j),
        zot(L) && (L = null != N.labelValign ? N.labelValign : O),
        zot(_) && (_ = null != N.indent ? N.indent : 10),
        zot(D) && (D = null != N.labelIndent ? N.labelIndent : _),
        zot(X) && (X = null != N.labelIndentHorizontal ? N.labelIndentHorizontal : D),
        zot(R) && (R = null != N.labelIndentVertical ? N.labelIndentVertical : D),
        zot(f) && (f = null != N.currentEnabled && N.currentEnabled),
        zot(m) && (m = null == N.currentSelected || N.currentSelected),
        m || (f = !0),
        zot(r) && (r = null != N.spacing ? N.spacing : 1),
        zot(z) && (z = null != N.corner ? N.corner : 0),
        zot(y) && (y = null != N.gradient ? N.gradient : null),
        zot(b) && (b = null != N.gloss ? N.gloss : null),
        zot(n) && (n = null != N.base ? N.base : 0 != z || Array.isArray(z) ? p ? "left" : "bottom" : "none"),
        zot(v) && (v = null == N.keyEnabled || N.keyEnabled),
        zot(W) && (W = null != N.useTap && N.useTap),
        zot(H) && (H = null != N.excludeCustomTap && N.excludeCustomTap),
        zot(I) && (I = null != N.backdropColor ? N.backdropColor : null),
        "none" == n || 0 == z || Array.isArray(z))
            Array.isArray(z) || (z = [z, z, z, z]);
        else
            switch (n) {
            case "bottom":
                z = [z, z, 0, 0];
                break;
            case "left":
                z = [0, z, z, 0];
                break;
            case "top":
                z = [0, 0, z, z];
                break;
            case "right":
                z = [z, 0, 0, z]
            }
        var U = this;
        this.keyEnabled = v;
        var K, Z = 0, q = [], Q = [], J = o.length, $ = (i - r * (J - 1)) / J, ee = (a - r * (J - 1)) / J;
        if (!zot(I)) {
            var te = this.backdrop = new kt.Rectangle(i,a,I,null,null,null,null,!1);
            this.addChild(te)
        }
        var oe = !1;
        function ne(e) {
            for (var t, o = 0; o < e.length; o++) {
                var n = e[o];
                n.constructor !== {}.constructor ? "string" == typeof n || "number" == typeof n || "Label" == n.type ? (e[o] = {
                    type: "TabObject",
                    label: String(null != n) || "Label" == n.type ? n : "1"
                },
                t && "TabObject" != t && (oe = !0),
                t = "TabObject") : (t && "TabObject" == t && (oe = !0),
                t = "Other") : (t && "TabObject" != t && (oe = !0),
                t = "TabObject")
            }
        }
        ne(o);
        for (var re, ie, ae = 0, le = 0, se = 0; se < o.length; se++)
            re = o[se],
            p ? G && (re.width = re.width ? re.width : i) : (zot(re.width) && le++,
            ae += zot(re.width) ? $ : re.width);
        if (!p)
            if (i - r * (J - 1) < ae)
                for (se = 0; se < o.length; se++)
                    (re = o[se]).width = (i - r * (J - 1)) / ae * (zot(re.width) ? $ : re.width);
            else if (Math.round(ae) < Math.round(i - r * (J - 1)) && 0 < le)
                for (ie = (J * $ - (ae - le * $)) / le,
                se = 0; se < o.length; se++)
                    (re = o[se]).width = zot(re.width) ? ie : re.width;
        function ce(e) {
            for (se = 0; se < e.length; se++)
                "" != (re = e[se]) && "TabObject" == re.type && (zot(re.label) && (re.label = " "),
                "string" != typeof re.label && "number" != typeof re.label || (re.label = new kt.Label({
                    text: re.label,
                    size: null != N.size ? N.size : p ? ee / 2 : a / 2,
                    font: null != N.font ? N.font : null,
                    style: !1
                })))
        }
        ce(o);
        var de = 0;
        for (se = 0; se < o.length; se++)
            !(re = o[se]).width && p && re.label.width > de && (de = re.label.width);
        var ue = 0;
        function he(e) {
            var t, o, n = [], r = [];
            for (se = 0; se < e.length; se++)
                "TabObject" == (re = e[se]).type ? (t = zot(re.backgroundColor) ? l : re.backgroundColor,
                o = zot(re.labelColor) ? d : re.labelColor,
                tRollColor = zot(re.rollColor) ? u : re.rollColor,
                re.label.color = o,
                re.label.rollColor = tRollColor,
                (K = new kt.Button({
                    width: p ? zot(re.width) ? G ? i : de + ee / 2 + z[0] / 2 : re.width : zot(re.width) ? $ : re.width,
                    height: p ? ee : a,
                    label: re.label,
                    borderColor: null != N.borderColor ? N.borderColor : null,
                    borderWidth: null != N.borderWidth ? N.borderWidth : null,
                    backgroundColor: t,
                    rollBackgroundColor: zot(re.rollBackgroundColor) ? s : re.rollBackgroundColor,
                    corner: z,
                    shadowColor: -1,
                    gradient: y,
                    gloss: b,
                    backing: x ? x.clone() : null,
                    rollBacking: C ? C.clone() : null,
                    wait: zot(re.wait) ? k : re.wait,
                    waitTime: zot(re.waitTime) ? T : re.waitTime,
                    waitBackgroundColor: zot(re.waitBackgroundColor) ? A : re.waitBackgroundColor,
                    rollWaitBackgroundColor: zot(re.rollWaitBackgroundColor) ? B : re.rollWaitBackgroundColor,
                    waitColor: zot(re.waitColor) ? S : re.waitColor,
                    rollWaitColor: zot(re.rollWaitBackgroundColor) ? P : re.rollWaitColor,
                    waitModal: zot(re.waitModal) ? E : re.waitModal,
                    waitEnabled: zot(re.waitEnabled) ? M : re.waitEnabled,
                    align: Y,
                    valign: L,
                    indentHorizontal: X,
                    indentVertical: R,
                    inherit: N
                })).type = "TabsButton",
                K.originalWait = zot(re.wait) ? k : re.wait,
                K.originalColor = zot(re.color) ? d : re.color,
                K.originalBackgroundColor = zot(re.backgroundColor) ? l : re.backgroundColor,
                K.originalSelectedColor = zot(re.selectedColor) ? g : re.selectedColor,
                K.originalSelectedBackgroundColor = zot(re.selectedBackgroundColor) ? c : re.selectedBackgroundColor) : (K = re,
                H && (K.excludeTap = !0),
                K.originalColor = zot(re.color) ? d : re.color,
                K.originalBackgroundColor = zot(re.backgroundColor) ? l : re.backgroundColor),
                K.width > ue && (ue = K.width),
                W ? K.tap(function(e) {
                    fe(e.currentTarget.znum),
                    U.dispatchEvent("change"),
                    kt.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
                }) : K.zimTabEvent = K.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function(e) {
                    fe(e.currentTarget.znum),
                    U.dispatchEvent("change"),
                    kt.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
                }),
                r.push(re.label),
                n.push(K);
            return [n, r]
        }
        var ge = he(o);
        function pe() {
            var e, t = 0, o = 0;
            for (se = 0; se < Q.length; se++)
                (e = Q[se]).znum = se,
                e.selectedIndex = se,
                e.selectedIndex == Z && m && (e.backgroundColor = c),
                q[se] && (q[se].znum = se),
                U.addChild(e),
                p && !G || (e.x = (i - e.width) / 2,
                e.y = (a - e.height) / 2),
                p ? (e.y = o,
                o = e.y + e.height + r,
                "left" == j ? e.x = "TabsButton" != e.type || oe ? _ : 0 : "right" == j && (e.x = (G ? i : ue) - e.width - ("TabsButton" != e.type || oe ? _ : 0))) : (e.x = t,
                t = e.x + e.width + r,
                "top" == O ? e.y = "TabsButton" != e.type || oe ? _ : 0 : "bottom" == O && (e.y = a - e.height - ("TabsButton" != e.type || oe ? _ : 0))),
                0 != se || f || (e.enabled = !1),
                e.enabled = !0;
            zot(I) || U.removeChild(te),
            U.setBounds();
            var n = U.getBounds();
            if (n ? (w = p && G ? i : n.width,
            h = p ? n.height : a) : w = h = 0,
            U.setBounds(w, h),
            zot(I) || (te.widthOnly = w,
            te.heightOnly = h,
            U.addChildAt(te, 0)),
            p && !G)
                for (se = 0; se <= Q.length; se++)
                    "center" != j && "middle" != j || (e.x = (w - e.width) / 2)
        }
        function fe(e) {
            var t = Q[Z];
            t && m && (zot(t.originalWait) && (t.originalBackgroundColor && (t.backgroundColor = t.originalBackgroundColor),
            t.originalColor && t.label && (t.label.color = t.originalColor)),
            f || (t.enabled = !0)),
            (t = Q[Z = e]) && (zot(t.originalWait) && m && (t.backgroundColor = zot(re.selectedBackgroundColor) ? c : re.selectedBackgroundColor,
            t.label && (t.label.color = zot(re.selectedColor) ? g : re.selectedColor)),
            f || (t.enabled = !1))
        }
        function me() {
            U.keyFocus = !0;
            var e = document.activeElement;
            e && e.blur()
        }
        Q = ge[0],
        q = ge[1],
        pe(),
        this.addAt = function(e, t) {
            zot(t) && (t = Q.length),
            t = kt.constrain(t, 0, Q.length),
            Array.isArray(e) || (e = [e]),
            ne(e),
            ce(e);
            var o = he(e)
              , n = o[0]
              , r = o[1];
            t <= Z && (Z += n.length);
            var i = [t, 0].concat(n);
            return Array.prototype.splice.apply(Q, i),
            i = [t, 0].concat(r),
            Array.prototype.splice.apply(q, i),
            pe(),
            U
        }
        ,
        this.removeAt = function(e, t) {
            if (0 == Q.length)
                return U;
            for (zot(e) && (e = 1),
            zot(t) && (t = Q.length - e),
            (t = kt.constrain(t, 0, Q.length - e)) <= Z && Z <= t + e && (Z = -1),
            t + e < Z && (Z -= e),
            se = t; se < t + e; se++)
                Q[se].originalBackgroundColor && (Q[se].backgroundColor = Q[se].originalBackgroundColor),
                Q[se].originalColor && Q[se].label && (Q[se].label.color = Q[se].originalColor),
                W ? Q[se].noTap() : Q[se].off((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", Q[se].zimTabEvent),
                Q[se].removeFrom();
            return Q.splice(t, e),
            q.splice(t, e),
            pe(),
            U
        }
        ,
        window.addEventListener("keydown", function(e) {
            if (U.keyEnabled && U.keyFocus && !U.zimAccessibility && 9 == e.keyCode) {
                var t = Z;
                e.shiftKey ? fe(--t < 0 ? o.length - 1 : t) : fe(++t > o.length - 1 ? 0 : t),
                U.dispatchEvent("change"),
                kt.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update(),
                e.preventDefault()
            }
        }),
        Object.defineProperty(this, "selected", {
            get: function() {
                return Q[Z]
            },
            set: function(e) {
                zon && zog("selected is read only - try selectedIndex")
            }
        }),
        Object.defineProperty(this, "selectedIndex", {
            get: function() {
                return Z
            },
            set: function(e) {
                fe(e),
                kt.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
            }
        }),
        this.last = function() {
            return this.selectedIndex = this.buttons.length - 1,
            this
        }
        ,
        this.first = function() {
            return this.selectedIndex = 0,
            this
        }
        ,
        Object.defineProperty(this, "tabs", {
            get: function() {
                return Z
            },
            set: function(e) {
                fe(Math.min(Math.max(e, 0), o.length - 1)),
                kt.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
            }
        }),
        Object.defineProperty(this, "color", {
            get: function() {
                return d
            },
            set: function(e) {
                d = e,
                zot(o[Z].color) && (Q[Z].color = d,
                kt.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update())
            }
        }),
        Object.defineProperty(this, "rollColor", {
            get: function() {
                return u
            },
            set: function(e) {
                u = e;
                for (var t = 0; t < o.length; t++)
                    zot(o[Z].rollColor) && (Q[t].rollColor = u)
            }
        }),
        Object.defineProperty(this, "selectedColor", {
            get: function() {
                return g
            },
            set: function(e) {
                g = e;
                for (var t = 0; t < o.length; t++)
                    zot(o[Z].color) && (Q[t].color = g);
                kt.OPTIMIZE || !zns && OPTIMIZE || !U.stage || U.stage.update()
            }
        }),
        Object.defineProperty(this, "label", {
            get: function() {
                return q[Z]
            },
            set: function(e) {
                zon && zog("selected is read only - try selectedIndex")
            }
        }),
        Object.defineProperty(this, "text", {
            get: function() {
                return null != q[Z] ? q[Z].text : void 0
            },
            set: function(e) {
                zon && zog("selected is read only - try selectedIndex")
            }
        }),
        Object.defineProperty(this, "buttons", {
            get: function() {
                return Q
            },
            set: function(e) {
                zon && zog("buttons is read only")
            }
        }),
        Object.defineProperty(this, "labels", {
            get: function() {
                return q
            },
            set: function(e) {
                zon && zog("labels is read only")
            }
        }),
        this._enabled = !0,
        Object.defineProperty(U, "enabled", {
            get: function() {
                return U._enabled
            },
            set: function(e) {
                Se(U, e)
            }
        }),
        "undefined" != typeof KEYFOCUS && (kt.KEYFOCUS = KEYFOCUS),
        Object.defineProperty(this, "keyFocus", {
            get: function() {
                return kt.KEYFOCUS == U
            },
            set: function(e) {
                kt.KEYFOCUS = U
            }
        }),
        v && kt.KEYFOCUS && me(),
        this.on("mousedown", function() {
            v && me()
        }),
        U.width = i,
        !1 !== V && Me(this, N),
        this.clone = function() {
            for (var e = kt.copy(o, !0), t = 0; t < e.length; t++)
                e[t].label = e[t].label.clone();
            return U.cloneProps(new kt.Tabs(i,a,e,l,s,c,d,u,g,p,r,f,m,z,n,v,y,b,x,C,k,T,A,B,S,P,E,M,I,j,O,Y,L,D,X,R,_,W,H,V,this.group,F))
        }
    }
    ,
    kt.extend(kt.Tabs, kt.Container, "clone", "zimContainer", !1),
    kt.Pad = function(e, r, t, o, n, i, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, S) {
        var P;
        if (P = zob(kt.Pad, arguments, "width, cols, rows, keys, backgroundColor, rollBackgroundColor, selectedBackgroundColor, color, rollColor, selectedColor, spacing, currentEnabled, corner, labelColor, gradient, gloss, backing, rollBacking, wait, waitTime, waitBackgroundColor, rollWaitBackgroundColor, waitColor, rollWaitColor, waitModal, waitEnabled, style, group, inherit", this))
            return P;
        z_d("66"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Pad",
        this.group = B;
        var E = !1 === A ? {} : kt.getStyle(this.type, this.group, S);
        if (zot(e) && (e = null != E.width ? E.width : 150),
        zot(r) && (r = null != E.cols ? E.cols : 3),
        zot(t) && (t = null != E.rows ? E.rows : r),
        zot(o))
            if (null != E.keys)
                o = E.keys;
            else {
                o = [];
                for (var M = 1; M <= t * r; M++)
                    o.push(M)
            }
        zot(u) && (u = null == E.currentEnabled || E.currentEnabled),
        zot(d) && (d = null != E.spacing ? E.spacing : 1);
        var I, j = this;
        this.cols = r,
        this.rows = t;
        var O, Y = e / r - d, L = [], D = 0;
        this.labels = [],
        this.buttons = [];
        for (M = 0; M < t; M++) {
            for (var X = [], R = 0; R < r; R++)
                X.push(null != o[D] ? o[D] : ""),
                D++;
            var _ = null != E.corner ? E.corner : h;
            _ && !Array.isArray(_) && (_ = [_, _, _, _]),
            O = L[M] = new kt.Tabs({
                width: e,
                height: Y,
                tabs: X,
                backgroundColor: null != E.backgroundColor ? E.backgroundColor : n,
                rollBackgroundColor: null != E.rollBackgroundColor ? E.rollBackgroundColor : i,
                selectedBackgroundColor: null != E.selectedBackgroundColor ? E.selectedBackgroundColor : a,
                color: null != E.color ? E.color : l,
                rollColor: null != E.rollColor ? E.rollColor : s,
                selectedColor: null != E.selectedColor ? E.selectedColor : c,
                spacing: null != E.spacing ? E.spacing : d,
                currentEnabled: null != E.currentEnabled ? E.currentEnabled : u,
                corner: _,
                backing: null != E.backing ? E.backing.clone() : m,
                rollBacking: null != E.rollBacking ? E.rollBacking.clone() : z,
                base: null,
                keyEnabled: !1,
                gradient: null != E.gradient ? E.gradient : p,
                gloss: null != E.gloss ? E.gloss : f,
                wait: null != E.wait ? E.wait : v,
                waitTime: null != E.waitTime ? E.waitTime : y,
                waitBackgroundColor: null != E.waitBackgroundColor ? E.waitBackgroundColor : b,
                rollWaitBackgroundColor: null != E.rollWaitBackgroundColor ? E.rollWaitBackgroundColor : w,
                waitColor: null != E.waitColor ? E.waitColor : x,
                rollWaitColor: null != E.rollWaitColor ? E.rollWaitColor : C,
                waitModal: null != E.waitModal ? E.waitModal : k,
                waitEnabled: null != E.waitEnabled ? E.waitEnabled : T,
                group: B,
                style: !1
            }),
            this.labels = this.labels.concat(O.labels),
            this.buttons = this.buttons.concat(O.buttons),
            this.addChild(O),
            O.selectedIndex = -1,
            O.y = (Y + d) * M,
            O.znum = M,
            O.on("change", W)
        }
        function W(e) {
            var t = e.target;
            j.selected = t.selected,
            j.text = t.text,
            j.label = t.label;
            for (var o = t.selectedIndex, n = 0; n < L.length; n++)
                L[n].selectedIndex = -1;
            t.selectedIndex = o,
            I = t.znum * r + o,
            j.dispatchEvent("change"),
            kt.OPTIMIZE || !zns && OPTIMIZE || !j.stage || j.stage.update()
        }
        this.tabs = L,
        Object.defineProperty(this, "selectedIndex", {
            get: function() {
                return I
            },
            set: function(e) {
                I = e;
                for (var t = 0; t < L.length; t++)
                    L[t].selectedIndex = -1;
                var o = Math.floor(I / r);
                0 <= o && o < j.tabs.length && (j.tabs[o].selectedIndex = I % r)
            }
        }),
        this._enabled = !0,
        Object.defineProperty(j, "enabled", {
            get: function() {
                return j._enabled
            },
            set: function(e) {
                Se(j, e)
            }
        }),
        !1 !== A && Me(this, E),
        this.clone = function() {
            return j.cloneProps(new kt.Pad(e,r,t,o,n,i,a,l,s,c,d,u,h,g,p,f,m,z,v,y,b,w,x,C,k,T,A,this.group,S))
        }
    }
    ,
    kt.extend(kt.Pad, kt.Container, "clone", "zimContainer", !1),
    kt.ColorPicker = function(e, o, n, r, i, t, a, l, s, c, d, u, h, g, p, f, m, z, v) {
        var y;
        if (y = zob(kt.ColorPicker, arguments, "width, colors, cols, spacing, greyPicker, alphaPicker, startBackgroundColor, draggable, shadowColor, shadowBlur, buttonBar, circles, indicator, backgroundColor, keyArrows, container, style, group, inherit", this))
            return y;
        z_d("67"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "ColorPicker",
        this.group = z;
        var b = !1 === m ? {} : kt.getStyle(this.type, this.group, v);
        zot(e) && (e = null != b.width ? b.width : 500),
        zot(o) && (o = null != b.colors ? b.colors : null),
        zot(o) && (E = !0),
        zot(n) && (n = null != b.cols ? b.cols : 10),
        zot(r) && (r = null != b.spacing ? b.spacing : 2);
        var w = !E && 0 < o.length && o.length <= n;
        zot(t) && (t = null != b.alphaPicker ? b.alphaPicker : !w),
        zot(i) && (i = null != b.greyPicker ? b.greyPicker : !w),
        zot(s) && (s = null != b.shadowColor ? b.shadowColor : "rgba(0,0,0,.3)"),
        zot(c) && (c = null != b.shadowBlur ? b.shadowBlur : 14),
        zot(d) && (d = null != b.buttonBar ? b.buttonBar : !w),
        zot(l) && (l = d ? null == b.draggable || b.draggable : null != b.draggable && b.draggable),
        zot(u) && (u = null != b.circles && b.circles),
        zot(h) && (h = null != b.indicator && b.indicator,
        d || (h = null == b.indicator || b.indicator)),
        zot(g) && (g = null != b.backgroundColor ? b.backgroundColor : "black"),
        zot(p) && (p = null == b.keyArrows || b.keyArrows);
        var x = this;
        if (zot(f)) {
            if (!Tt)
                return;
            f = Tt.stage
        } else {
            if (!f.getBounds)
                return;
            if (zot(f.getStage))
                return
        }
        x.container = f;
        var C = "#e472c4"
          , k = "#50c4b7"
          , T = 1
          , A = 1
          , B = new createjs.Shape;
        this.addChild(B),
        B.x += r,
        B.y += r;
        var S, P, E = !1, M = [];
        if (zot(o)) {
            E = !0;
            var I = 6
              , j = I * I * I;
            I = Math.ceil(Math.pow(j, .5)),
            P = (e - r) / 18 - r;
            var O = Math.floor(Math.pow(I * I, 1 / 3));
            S = [];
            for (var Y = 0; Y < 6; Y++)
                for (var L = 0; L < 6; L++)
                    for (var D = 0; D < 6; D++)
                        S.push("#" + W(3 * Y) + W(3 * L) + W(3 * D));
            for (o = [],
            Y = 0; Y < S.length; Y++)
                V = Math.floor(Y / 6),
                o[18 * ((H = Y % 6) + 6 * (O = 18 <= V ? 1 : 0)) + (V - 6 * O * 3)] = S[Y];
            n = 18,
            M = [k, C]
        } else
            P = (e - r) / n - r;
        var X, R = Math.ceil(o.length / n), _ = String(o[o.length - 1]);
        function W(e) {
            return (e = Math.floor(e).toString(16)) + "" + e
        }
        zot(a) || (_ = String(a)),
        E && (X = k);
        var H, V, F, N, G = B.graphics, U = (O = 0,
        null != b.borderColor ? b.borderColor : null), K = null != b.borderWidth ? b.borderWidth : null;
        for (!zot(U) && zot(K) && (K = 1),
        K && zot(U) && (U = "#333"),
        K && G.s(U).ss(K),
        Y = 0; Y < o.length; Y++)
            V = Y % n,
            H = Math.floor(Y / n),
            F = V * (P + r),
            N = H * (P + r),
            u ? G.f(o[Y]).dc(F + P / 2, N + P / 2, P / 2) : G.f(o[Y]).r(F, N, P, P);
        var Z = N + P + r;
        x.colors = o;
        var q = Z;
        if (i) {
            for (Y = 0; Y < 16; Y++)
                M.push("#" + W(Y) + W(Y) + W(Y));
            for (Y = 0; Y < M.length; Y++)
                V = Math.floor(Y / n),
                F = (H = Y % n) * (P + r),
                N = V * (P + r) + Z,
                u ? G.f(M[Y]).dc(F + P / 2, N + P / 2, P / 2) : G.f(M[Y]).r(F, N, P, P);
            Z = N + P + r;
            var Q = n
              , J = Math.ceil(M.length / n)
        }
        if (x.greys = M,
        h) {
            function $(e) {
                zot(e) || e < 0 ? h.visible = !1 : (h.visible = !0,
                "#000" == _ || "#000000" == _ || "black" == _ ? (h.color = "#222",
                h.alpha = 1) : (h.color = "black",
                h.alpha = .5),
                h.x = B.x + e % n * (P + r) + P / 2,
                h.y = B.x + Math.floor(e / n) * (P + r) + P / 2)
            }
            (h = this.indicator = u ? new kt.Circle(P / 2 * .5,null,null,null,null,!1) : new kt.Rectangle(.5 * P,.5 * P,null,null,null,null,null,!1)).alpha = .5,
            h.centerReg(),
            this.addChild(h),
            $(o.indexOf(_))
        }
        if (t) {
            var ee = new kt.Container({
                style: !1
            });
            ee.setBounds(0, 0, 600, 70),
            this.addChild(ee),
            ee.x = 0,
            ee.y = Z;
            var te = this.alphaBacking = new kt.Rectangle(580,50,"#222",null,null,0,null,!1);
            ee.addChild(te),
            kt.centerReg(te, ee);
            var oe = this.alphaBut = new kt.Button({
                width: 20,
                height: 30,
                backgroundColor: "darkorange",
                rollBackgroundColor: "orange",
                label: "",
                corner: 0,
                hitPadding: 20,
                style: !1
            })
              , ne = this.alphaSlider = new kt.Slider({
                min: 0,
                max: 1,
                step: .05,
                button: oe,
                barLength: 330,
                barWidth: 2,
                barColor: "#999",
                vertical: !1,
                useTicks: !1,
                inside: !1,
                style: !1
            });
            ne.currentValue = 1,
            ee.addChild(ne),
            ne.x = 40,
            ne.y = ee.height / 2;
            var re = this.alphaText = new kt.Label({
                text: "Alpha: 1",
                size: 30,
                color: "orange",
                backing: "ignore",
                shadowColor: "ignore",
                shadowBlur: "ignore",
                backgroundColor: "ignore",
                rollColor: "orange",
                group: this.group
            });
            ee.addChild(re),
            re.x = ne.x + ne.bar.width + 40,
            re.y = ee.height / 2 - re.height / 2,
            ee.scaleX = ee.scaleY = e / 600,
            ne.on("change", function() {
                re.text = "Alpha: " + ke(ne.currentValue),
                ue && (ue.alpha = A = ne.currentValue),
                d ? x.dispatchEvent("set") : x.dispatchEvent("change"),
                x.stage && x.stage.update()
            }),
            Z += ee.height - 10
        }
        if (d) {
            var ie = new kt.Container({
                style: !1
            });
            ie.setBounds(0, 0, 600, 100),
            this.addChild(ie),
            ie.x = 0,
            ie.y = Z + 10;
            var ae = this.swatchText = new kt.Label({
                align: "center",
                text: _.toUpperCase().substr(0, 7),
                size: 30,
                color: "orange",
                rollColor: "orange",
                backing: "ignore",
                shadowColor: "ignore",
                shadowBlur: "ignore",
                backgroundColor: "ignore",
                group: this.group
            });
            if (ie.addChild(ae),
            kt.centerReg(ae),
            ae.x = 90,
            ae.y = 48,
            l) {
                var le = this.grip = new kt.Shape({
                    style: !1
                });
                ie.addChild(le),
                le.graphics.f("rgba(256,256,256,.25)").r(0, 0, 5, 20).r(10, 0, 5, 20).r(20, 0, 5, 20).r(30, 0, 5, 20),
                le.x = 70,
                le.y = 65,
                ae.y = 40,
                le.mouseEnabled = !1
            }
            var se = this.closeBut = new kt.Button({
                width: 90,
                height: 90,
                label: "X",
                backgroundColor: "#222",
                rollBackgroundColor: "#444",
                corner: 0,
                style: !1
            });
            ie.addChild(se),
            se.x = 600 - se.width - 10,
            se.y = 0,
            se.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
                x.dispatchEvent("close")
            });
            var ce = this.okBut = new kt.Button({
                width: 150,
                height: 90,
                label: "OK",
                backgroundColor: "#222",
                rollBackgroundColor: "#444",
                corner: 0,
                style: !1
            });
            ie.addChild(ce),
            ce.x = se.x - ce.width - 10,
            ce.y = 0,
            ce.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", me);
            var de = this.swatchBacking = new kt.Shape({
                style: !1
            });
            ie.addChild(de),
            (G = de.graphics).f("black").r(.5, .5, 50, 89).f("#666").r(50, .5, 50, 89).f("white").r(100, .5, 49.5, 89),
            de.x = ce.x - 150 - 10,
            de.y = 0;
            var ue = this.swatch = new kt.Rectangle(150,90,_,null,null,null,null,!1);
            ie.addChild(ue),
            ue.x = de.x,
            ue.y = 0,
            ue.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", me),
            ue.cursor = "pointer",
            ie.scaleX = ie.scaleY = e / 600,
            Z += ie.height
        } else
            B.cursor = "pointer";
        t || d || (Z -= 10 - r);
        var he = Z + 10;
        this.setBounds(0, 0, e, he);
        var ge, pe, fe = this.background = new kt.Rectangle(e,he,g,null,null,null,null,!1);
        function me() {
            if (_ != X || A != T) {
                if (E && i) {
                    var e = [k = C, C = X];
                    for (Y = 0; Y < 2; Y++) {
                        var t = B.graphics;
                        V = Math.floor(Y / n),
                        F = (H = Y % n) * (P + r),
                        N = V * (P + r) + q,
                        M[Y] = e[Y],
                        t.f(fe.color).r(F - 1, N - 1, P + 2, P + 2).f(e[Y]).r(F, N, P, P)
                    }
                    kt.OPTIMIZE || !zns && OPTIMIZE || !x.stage || x.stage.update()
                }
                X = _,
                T = A,
                x.dispatchEvent("change")
            } else
                x.dispatchEvent("close")
        }
        (this.addChildAt(fe, 0),
        -1 != s && 0 < c && (fe.shadow = new createjs.Shadow(s,8,8,c)),
        l) && (fe.on("mousedown", function(e) {
            ge = e.stageX - x.x,
            pe = e.stageY - x.y,
            fe.cursor = "move"
        }),
        fe.on("pressmove", function(e) {
            x.x = e.stageX - ge,
            x.y = e.stageY - pe,
            x.stage && x.stage.update()
        }),
        fe.on("pressup", function(e) {
            fe.cursor = "default",
            x.stage && x.stage.update()
        }));
        var ze, ve = n * (P + r), ye = R * (P + r);
        if (i)
            var be = Q * (P + r)
              , we = J * (P + r);
        function xe() {
            x.keyFocus = !0;
            var e = document.activeElement;
            e && e.blur()
        }
        function Ce() {
            x.zimAccessibility && x.zimAccessibility.changeTitle(x, null, !0)
        }
        function ke(e) {
            return Math.round(e * Math.pow(10, 2)) / Math.pow(10, 2)
        }
        B.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function(e) {
            var t = kt.hitTestGrid(B, ve, ye, n, R, e.stageX, e.stageY, 0, 0, r, r);
            zot(t) || (_ = o[t],
            d ? (ue.color = _,
            ae.text = String(o[t]).toUpperCase().substr(0, 7),
            _ != X && x.dispatchEvent("set")) : me()),
            i && (t = null,
            zot(t = kt.hitTestGrid(B, be, we, Q, J, e.stageX, e.stageY, 0, ye, r, r)) || (_ = M[t],
            d ? (ue.color = _,
            ae.text = M[t].toUpperCase(),
            _ != X && x.dispatchEvent("set")) : me())),
            h && $(o.indexOf(_)),
            d ? x.stage && x.stage.update() : h && x.stage && x.stage.update(),
            Ce()
        }),
        Object.defineProperty(this, "selectedColor", {
            get: function() {
                return _
            },
            set: function(e) {
                X = _ = e,
                d && (ue.color = _,
                ae.text = _,
                x.stage && x.stage.update()),
                h && $(o.indexOf(_)),
                Ce()
            }
        }),
        Object.defineProperty(this, "currentValue", {
            get: function() {
                return _
            },
            set: function(e) {
                x.selectedColor = e
            }
        }),
        Object.defineProperty(this, "currentValueEvent", {
            get: function() {
                return _
            },
            set: function(e) {
                e != x.selectedColor && (x.selectedColor = e,
                x.dispatchEvent("change"))
            }
        }),
        Object.defineProperty(this, "selectedIndex", {
            get: function() {
                return o.indexOf(_)
            },
            set: function(e) {
                X = _ = o[e],
                d && (ue.color = _,
                ae.text = _,
                x.stage && x.stage.update()),
                h && $(o.indexOf(_)),
                Ce()
            }
        }),
        Object.defineProperty(this, "selectedAlpha", {
            get: function() {
                return t ? ke(ne.currentValue) : 1
            },
            set: function(e) {
                t && (T = ne.currentValue = e,
                ue && (ue.alpha = T),
                re && (re.text = "Alpha: " + ke(ne.currentValue)),
                x.stage && x.stage.update())
            }
        }),
        Object.defineProperty(this, "colors", {
            get: function() {
                return i ? o.concat(M) : o
            },
            set: function(e) {
                zon && zog("Display - ColorPicker() colors is read only - make a new ColorPicker to change")
            }
        }),
        "undefined" != typeof KEYFOCUS && (kt.KEYFOCUS = KEYFOCUS),
        Object.defineProperty(this, "keyFocus", {
            get: function() {
                return kt.KEYFOCUS == x
            },
            set: function(e) {
                zns ? kt.KEYFOCUS = x : KEYFOCUS = x
            }
        }),
        p && kt.KEYFOCUS && xe(),
        this.on("mousedown", function() {
            p && xe()
        }),
        this.keyDownEvent = function(e) {
            if (x.stage && (x.zimAccessibility && x.focus || !x.zimAccessibility && x.keyFocus)) {
                var t = x.selectedIndex;
                function o() {
                    t < 0 && (t = x.colors.length - 1),
                    t > x.colors.length - 1 && (t = 0),
                    x.selectedIndex = t,
                    x.dispatchEvent("change"),
                    x.stage && x.stage.update()
                }
                37 == e.keyCode || 40 == e.keyCode ? (t--,
                o()) : 38 != e.keyCode && 39 != e.keyCode || (t++,
                o())
            }
        }
        ,
        window.addEventListener("keydown", this.keyDownEvent),
        this.hide = function() {
            if (x.removeFrom(),
            x.toggled = !1,
            x.zimAccessibility) {
                var e = x.zimAccessibility;
                e.resize(x),
                ze ? ze.focus() : x.zimTabTag.nextSibling.focus(),
                setTimeout(function() {
                    e.talk("ColorPicker has been closed.")
                }, 50)
            }
            return x
        }
        ,
        this.show = function() {
            if (x.center(x.container),
            x.zimAccessibility) {
                var e = x.zimAccessibility;
                setTimeout(function() {
                    e.activatedObject && (ze = e.activatedObject.zimTabTag)
                }, 50),
                e.resize(x),
                e.tabIndex = x.zimTabIndex
            }
            return x.toggled = !0,
            x
        }
        ,
        !(this.toggle = function(e) {
            return !0 === e ? x.show() : !1 === e ? x.hide() : x.container.contains(x) ? x.hide() : x.show(),
            x
        }
        ) !== m && Me(this, b),
        this.clone = function() {
            return x.cloneProps(new kt.ColorPicker(e,E ? null : o,n,r,i,t,a,l,s,c,d,u,h,g,p,f,m,this.group,v))
        }
        ,
        this.dispose = function() {
            return window.removeEventListener("keydown", x.keyDownEvent),
            ne && ne.dispose(),
            this.zimContainer_dispose(),
            !0
        }
    }
    ,
    kt.extend(kt.ColorPicker, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Keyboard = function(n, f, m, r, i, a, l, t, z, v, y, o, b, s, c, d, u, h, g, p, w, x, C, e, k) {
        var T;
        if (T = zob(kt.Keyboard, arguments, "labels, backgroundColor, color, shiftBackgroundColor, shiftHoldBackgroundColor, placeBackgroundColor, placeColor, cursorColor, shadeAlpha, borderColor, borderWidth, margin, corner, draggable, placeClose, shadowColor, shadowBlur, container, data, place, special, rtl, style, group, inherit", this))
            return T;
        z_d("67.2"),
        this.zimContainer_constructor(1e3, 400, null, null, !1),
        this.type = "Keyboard",
        this.group = e;
        var A = !1 === C ? {} : kt.getStyle(this.type, this.group, k);
        zot(n) && (n = null != A.labels ? A.labels : []),
        Array.isArray(n) || (n = [n]),
        zot(f) && (f = null != A.backgroundColor ? A.backgroundColor : "#333"),
        zot(m) && (m = null != A.color ? A.color : "white"),
        zot(r) && (r = null != A.shiftBackgroundColor ? A.shiftBackgroundColor : "orange"),
        zot(i) && (i = null != A.shiftHoldBackgroundColor ? A.shiftHoldBackgroundColor : "red"),
        zot(a) && (a = null != A.placeBackgroundColor ? A.placeBackgroundColor : "#50c4b7"),
        zot(l) && (l = null != A.placeColor ? A.placeColor : m),
        zot(t) && (t = null != A.cursorColor ? A.cursorColor : "#50c4b7"),
        zot(z) && (z = null != A.shadeAlpha ? A.shadeAlpha : .2),
        zot(v) && (v = null != A.borderColor ? A.borderColor : "rgba(0,0,0,.1)"),
        zot(y) && (y = null != A.borderWidth ? A.borderWidth : null),
        v < 0 || y < 0 ? v = y = null : null != v && null == y && (y = 1),
        zot(o) && (o = null != A.margin ? A.margin : 5),
        zot(b) && (b = null != A.corner ? A.corner : 30),
        zot(s) && (s = null != A.draggable && A.draggable),
        zot(c) && (c = null == A.placeClose || A.placeClose),
        zot(d) && (d = null != A.shadowColor ? A.shadowColor : "rgba(0,0,0,.2)"),
        zot(u) && (u = null != A.shadowBlur ? A.shadowBlur : 14),
        zot(g) && (g = null != A.data ? A.data : [[["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["a", "s", "d", "f", "g", "h", "j", "k", "l"], ["shift", "z", "x", "c", "v", "b", "n", "m", "backspace"], ["?123"]], [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], ["!", "@", "#", "$", "/", "^", "&", "*", "(", ")"], ["1/2", "-", "'", '"', ":", ";", ",", "?", "backspace"], ["ABC"]], [["+", "x", "%", "=", "<", ">", "{", "}", "[", "]"], ["â‚¬", "Â£", "Â¥", "$", "ï¿¦", "~", "`", "Â¤", "â™¡", "â˜†"], ["2/2", "_", "\\", "|", "ã€Š", "ã€‹", "Â¡", "Â¿", "backspace"], ["ABC"]]]);
        var B = this;
        B.data = g,
        zot(p) && (p = null == A.place || A.place),
        zot(x) && (x = null != A.rtl && A.rtl);
        var S = "zim display - Keyboard(): Please pass in a reference to a container with bounds set";
        if (zot(h)) {
            if (!Tt)
                return void zog(S);
            h = Tt.stage
        } else {
            if (!h.getBounds)
                return void zog(S);
            if (zot(h.stage))
                return void zog("zim display - Keyboard(): The container must have a stage property")
        }
        -1 != d && 0 < u && (B.shadow = new createjs.Shadow(d,3,3,u));
        var P, E = Tt ? Tt.stage : null;
        B.labels = n;
        var M = ["@", "", ".", "/", "away"];
        zot(w) || M.splice(1, 0, w);
        var I = kt.copy(g[0]);
        I[3] = I[3].concat(M);
        var j = kt.copy(g[1]);
        j[3] = j[3].concat(M);
        var O = kt.copy(g[2]);
        O[3] = O[3].concat(M);
        var Y, L, D, X, R, _, W, H, V, F, N, G, U = ["Ä—", "Ä“", "Ä™", "Ãª", "Ã©", "Ã«", "Ã¨"], K = ["Å«", "Ã»", "Ãº", "Ã¼", "Ã¹"], Z = ["Ä«", "Ä¯", "Ã¬", "Ã­", "Ã¯", "Ã®"], q = ["Å", "Å“", "Ã¸", "Ãµ", "Ã´", "Ã³", "Ã¶", "Ã²"], Q = ["Ä", "Ã£", "Ã¥", "Ã¢", "Ã¡", "Ã¤", "Ã ", "Ã¦"], J = ["Ã±", "Å„"], $ = [], ee = 95.5, te = {
            def: "default",
            shift: "shift",
            number1: "number1",
            number2: "number2"
        }, oe = te.def, ne = !1, re = 0, ie = [];
        function ae(e) {
            var t, o = !1;
            if (oe === te.def) {
                for (X.color = e ? i : r,
                t = 0; t < $.length - 6 - (zot(w) ? 0 : 1); t++) {
                    0 < (n = $[t]).label.text.length && (1 === n.name.length ? (n.label.text = n.label.text.toUpperCase(),
                    n.label.centerReg(n).mov(0, 6)) : n.label.centerReg(n))
                }
                e || (o = !0,
                kt.timeout(500, function() {
                    o && (ne = !0,
                    X.color = i,
                    Y.updateCache(),
                    B.stage.update())
                }),
                G = B.on("pressup", function(e) {
                    B.off("pressup", G),
                    o = !1
                })),
                oe = te.shift
            } else {
                for (X.color = f,
                ne = !1,
                t = 0; t < $.length - 6; t++) {
                    var n;
                    0 < (n = $[t]).label.text.length && (1 === n.name.length ? (n.label.text = n.label.text.toLowerCase(),
                    n.label.centerReg(n).mov(0, 3)) : n.label.centerReg(n))
                }
                oe = te.def
            }
            Y.updateCache(),
            B.stage.update()
        }
        function le(e) {
            var t, o, n, r, i, a, l, s = 0, c = 0, d = !1, u = !1;
            zot(e) && (e = te.def),
            e === te.def ? t = I : e === te.number1 ? t = j : e === te.number2 && (t = O),
            Y = new kt.Container(1e3,430,null,null,!1).addTo(B);
            for (var h = 0; h < t.length; h++) {
                (h <= 1 || e == te.def && 2 == h && "shift" != t[2][0]) && (s = (ee / 2 + 2.5) * (10 - t[h].length));
                for (var g = 0; g < t[h].length; g++) {
                    if (a = null,
                    u = d = !1,
                    "backspace" == t[h][g] ? (a = H,
                    u = i = !0) : "shift" == t[h][g] ? (i = !0,
                    a = W) : (3 == h || e != te.def && 2 == h) && 0 == g ? u = i = !0 : "" == t[h][g] ? d = !(i = !1) : "away" == t[h][g] ? (a = V,
                    u = i = !0) : i = !1,
                    r = i ? 1.5 * ee + 2.5 : d ? (ee + 5) * (zot(w) ? 4 : 3) - 5 : ee,
                    n = new kt.Rectangle(r,ee,f,v,y,b,null,!1).cur().addTo(Y),
                    u && n.addChild(new kt.Rectangle(r,ee,"black",null,null,b,null,!1).alp(z)),
                    n.label = o = a ? new kt.Label({
                        text: "",
                        backgroundColor: "ignore",
                        font: null != A.font ? A.font : null,
                        style: !1
                    }) : new kt.Label({
                        lineWidth: 10,
                        lineHeight: 25,
                        font: null != A.font ? A.font : null,
                        text: t[h][g],
                        color: m,
                        align: "center",
                        style: !1
                    }),
                    a) {
                        var p = a.clone();
                        p.scaleTo(n, 70, 70),
                        p.centerReg(n)
                    }
                    l ? (l = !1,
                    s += 67.33) : (o.centerReg(n).mov(0, isNaN(o.text) ? 3 : 7),
                    n.x = s,
                    n.y = c,
                    n.name = t[h][g],
                    2 == h && 0 == g && e == te.number1 && (n.toggle = "1/2"),
                    2 == h && 0 == g && e == te.number2 && (n.toggle = "2/2"),
                    3 == h && 0 == g && e == te.def && (n.toggle = "?123"),
                    3 == h && 0 == g && e != te.def && (n.toggle = "ABC"),
                    n.toggle && o.mov(0, 3),
                    $.push(n),
                    "shift" == n.name && (X = n),
                    s = n.x + n.width + 5)
                }
                c += ee + 5,
                s = 0
            }
            Y.cache(y ? -y : 0, y ? -y : 0, y ? Y.width + 2 * y : Y.width, y ? Y.height + 2 * y : Y.height)
        }
        function se() {
            B.mouseYAmount && (B.y = B.parent.globalToLocal(0, B.mouseYAmount - N).y)
        }
        function ce() {
            E.off("pressmousemove", B.tickerMouseEvent),
            Ticker.remove(se)
        }
        function de() {
            if (R) {
                for (var e = 0, t = 0; t < re; t++)
                    e += R.widthArray[t];
                D.heightOnly = R.getBounds().height - (R.paddingVertical && R.background ? 2 * R.paddingVertical : 0),
                D.center(R),
                D.x = e
            }
        }
        function ue() {
            if (_)
                return B;
            var e, t, o, n = c ? ["<", ">", "x"] : ["<", ">"];
            ie = [],
            o = R.localToLocal(0, 0, B),
            _ = new kt.Container({
                style: !1
            }).addTo(B).pos({
                x: o.x,
                y: o.y + R.height + 15,
                reg: !0
            }).cur();
            for (var r = 0; r < n.length; r++)
                e = new kt.Rectangle(ee,ee,a,v,y,b,null,!1),
                "x" == n[r] && new kt.Rectangle(ee,ee,"black",null,null,b,null,!1).alp(z).addTo(e),
                (t = new kt.Label({
                    lineWidth: 10,
                    lineHeight: 25,
                    text: n[r],
                    backing: e,
                    font: null != A.font ? A.font : null,
                    color: l,
                    align: "center",
                    valign: "center",
                    style: !1
                }).addTo(_).cache()).x = r * (ee + 5),
                ie.push(t);
            o = R.localToLocal(0, 0, B),
            _.x = o.x,
            _.y = o.y + R.height + 15,
            _.on("click", function(e) {
                0 == ie.indexOf(e.target) ? 0 < re && re-- : 1 == ie.indexOf(e.target) ? re < R.text.length && re++ : he();
                de()
            }),
            B.stage.update()
        }
        function he() {
            if (!_)
                return B;
            _.removeAllEventListeners(),
            B.removeChild(_),
            _ = null
        }
        function ge(e) {
            var t, o;
            "del" === e ? (R && (R.text = [R.text.slice(0, re - 1), R.text.slice(re)].join("")),
            re--,
            fe()) : (oe === te.shift && (e = e.toUpperCase()),
            R && R.width < P && ((t = R.clone().removeFrom()).text = e,
            o = t.label.getMeasuredWidth(),
            R.widthArray ? R.widthArray.splice(re, 0, o) : R.widthArray = [R.breedte],
            re < R.text.length ? R.text = [R.text.slice(0, re), e, R.text.slice(re)].join("") : R.text += e,
            re++,
            de())),
            oe !== te.shift || ne || (B.removeChild(Y),
            le(),
            oe = te.def),
            de();
            var n = new createjs.Event("keydown");
            n.letter = e,
            B.dispatchEvent(n),
            B.stage.update()
        }
        function pe(e) {
            if (B.stage) {
                var t, o = 0, n = !1;
                (R = e.target).widthArrayCheck || fe(),
                P = R.label.lineWidth ? R.label.lineWidth : 1e4,
                t = R.globalToLocal(e.stageX, e.stageY);
                for (var r = 0; r < R.widthArray.length; r++)
                    if (o += R.widthArray[r],
                    t.x < o - R.widthArray[r] / 2) {
                        re = r,
                        n = !0;
                        break
                    }
                n || (re = R.text.length),
                de(),
                p && !_ && 0 < R.text.length && ue(),
                _ && R && (0 < R.text.length ? (t = R.localToLocal(0, 0, B),
                _.x = t.x,
                _.y = t.y + R.height + 15) : he())
            }
        }
        function fe() {
            if (R) {
                var e;
                R.widthArray = [];
                for (var t = 0; t < R.text.length; t++)
                    (e = R.clone().removeFrom()).text = R.text[t],
                    R.widthArray.push(e.label.getMeasuredWidth());
                R.widthArrayCheck = !0,
                de()
            }
        }
        function me() {
            for (var e = 0; e < n.length; e++)
                n[e].clickEvent = n[e].on("click", pe)
        }
        function ze() {
            if (1 < n.length)
                for (var e = 0; e < n.length; e++)
                    n[e].off("click", n[e].clickEvent)
        }
        function ve() {
            if (!D && (R = n[0],
            P = R && R.label.lineWidth ? R.label.lineWidth : 1e4,
            R)) {
                (D = new kt.Rectangle(3,R.height - (R.paddingVertical && R.background ? 2 * R.paddingVertical : 0),t,null,null,null,null,!1).center(R)).x = 0,
                D.visible = !1,
                D.animate({
                    obj: {
                        alpha: 0
                    },
                    rewind: !0,
                    loop: !0,
                    loopWait: 750,
                    time: 250,
                    id: "knipperTekst"
                });
                for (var e = 0; e < n.length; e++)
                    n[e].widthArray = [0];
                fe()
            }
        }
        function ye() {
            kt.stopAnimate("knipperTekst"),
            R && R.removeChild(D),
            R = D = null
        }
        !function() {
            (W = new kt.Shape({
                style: !1
            })).graphics.f(m).p("AhIFoIAAjYIixAAID5n3ID6H3IixAAIAADYgAjHBxICeAAIAADYIBTAAIAAjYICeAAIjImSg"),
            W.setBounds(-25.5, -36, 51, 72),
            H = new kt.Container({
                style: !1
            });
            var e = new kt.Shape({
                style: !1
            });
            e.graphics.f(m).p("ACgC+IigigIifCgQgGAGgJAAQgJAAgGgGQgGgGgBgJQABgJAGgGICgigIigifQgGgGgBgJQABgJAGgGQAGgGAJAAQAIAAAHAGICfCgICgigQAGgGAJAAQAJAAAGAGQAGAGABAJQgBAJgGAGIigCfICgCgQAGAGABAJQgBAJgGAGQgGAGgJAAQgJAAgGgGg"),
            e.setTransform(82.6, 32),
            e.addTo(H);
            var t = new kt.Shape({
                style: !1
            });
            t.graphics.f(m).s().p("AkhFAQgcAAgUgUIkHj6QgVgUAAgeQAAgdAVgVIEHj6QAUgTAcAAINKAAQAdAAAUAUQAUAUAAAdIAAH1QAAAdgUATQgUAVgdAAgAk0kOIkGD8QgIAHAAALQAAALAIAIIEGD7QAIAHALAAINKAAQALAAAIgIQAHgHAAgLIAAn1QAAgLgHgIQgIgIgLAAItKAAQgLAAgIAHg"),
            t.setTransform(62.2, 32),
            t.addTo(H),
            H.setBounds(0, 0, 125, 64),
            (V = new kt.Container({
                style: !1
            })).setBounds(0, 0, 147, 86);
            for (var o, n = [{
                p: "Ai+heIF9AAIi/C9g",
                transform: [73.4, 76]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [128.4, 43.2]
            }, {
                p: "AnNAzIAAhlIObAAIAABlg",
                transform: [73, 43.2]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [18.8, 43.2]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [128.2, 29.5]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [114.5, 29.5]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [100.8, 29.5]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [87.1, 29.5]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [73.4, 29.5]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [59.7, 29.5]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [46, 29.5]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [32.3, 29.5]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [18.6, 29.5]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [128, 15.8]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [114.3, 15.8]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [100.6, 15.8]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [86.9, 15.8]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [73.2, 15.8]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [59.5, 15.8]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [45.8, 15.8]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [32.1, 15.8]
            }, {
                p: "AgyAzIAAhlIBlAAIAABlg",
                transform: [18.4, 15.8]
            }, {
                p: "AphEnQgzAAgkgkQglglAAgzIAAlVQAAgzAlglQAkgkAzAAITDAAQAzAAAkAkQAlAlAAAzIAAFVQAAAzglAlQgkAkgzAAgAqjjtQgcAcAAAnIAAFVQAAAnAcAbQAbAcAnAAITDAAQAnAAAcgcQAbgbAAgnIAAlVQAAgngbgcQgcgcgnAAIzDAAQgnAAgbAcg",
                transform: [73.4, 29.5]
            }], r = 0; r < n.length; r++)
                (o = new kt.Shape({
                    style: !1
                })).graphics.f(m).s().p(n[r].p),
                o.setTransform(n[r].transform[0], n[r].transform[1]),
                o.addTo(V)
        }(),
        le(oe),
        s && function() {
            F = new kt.Rectangle(1.5 * ee + 2.5 + 2.5,ee,f,v,y,b,null,!1).addTo(B, 0).cur();
            for (var e = 0; e < 4; e++)
                new kt.Rectangle(.4 * F.width,4,m,null,null,null,null,!1).centerReg(F).alp(.2).y -= 15 * e - 22;
            F.x = 8.5 * ee + 40,
            F.y = -ee - 5,
            F.name = "drag"
        }(),
        this.on("mousedown", function(e) {
            E = B.stage,
            L && B.removeChild(L);
            _ && ie.indexOf(e.target) < 0 && he();
            zot(e.target.name) || (s && e.target === F ? (B.tickerMouseEvent = E.on("stagemousemove", function(e) {
                B.mouseYAmount = e.stageY
            }),
            Ticker.add(se),
            B.on("pressup", ce),
            N = e.stageY - B.localToGlobal(0, 0).y) : zot(w) || e.target.name !== w ? "shift" === e.target.name ? ae() : "?123" === e.target.toggle ? (B.removeChild(Y),
            le(te.number1)) : "ABC" === e.target.toggle ? (B.removeChild(Y),
            oe = te.def,
            le(),
            ne && ae(!0)) : "1/2" === e.target.toggle ? (B.removeChild(Y),
            le(te.number2)) : "2/2" === e.target.toggle ? (B.removeChild(Y),
            le(te.number1)) : "away" === e.target.name ? (B.hide(),
            B.dispatchEvent("close")) : "e" === e.target.name || "u" === e.target.name || "i" === e.target.name || "o" === e.target.name || "a" === e.target.name || "n" === e.target.name ? function(t) {
                var a, l, s = !1, c = !1;
                switch (t) {
                case "e":
                    a = U;
                    break;
                case "u":
                    a = K;
                    break;
                case "i":
                    a = Z;
                    break;
                case "o":
                    a = q;
                    break;
                case "a":
                    a = Q;
                    break;
                case "n":
                    a = J
                }
                l = kt.timeout(500, function() {
                    var e, t, o, n, r = 0;
                    if (l.clear(),
                    !s) {
                        c = !0,
                        (L = new kt.Container(1e3,ee,null,null,!1).addTo(B, 0)).y = -ee - 5;
                        for (var i = 0; i < a.length; i++)
                            n = oe === te.shift ? a[i].toUpperCase() : a[i],
                            e = new kt.Label({
                                lineWidth: 10,
                                lineHeight: 25,
                                text: n,
                                font: null != A.font ? A.font : null,
                                color: m,
                                align: "center",
                                style: !1
                            }),
                            t = new kt.Rectangle(ee,ee,f,v,y,b,null,!1).addTo(L),
                            o = new kt.Rectangle(ee,ee,"white",null,null,b,null,!1).alp(.2),
                            t.addChild(o),
                            e.center(t),
                            t.name = a[i],
                            t.x = r,
                            r += ee + 5;
                        B.stage.update()
                    }
                });
                var o = B.on("pressup", function(e) {
                    s = !0,
                    B.off("pressup", o),
                    c || ge(t)
                })
            }(e.target.name) : "return" === e.target.name ? ge("\n") : "backspace" === e.target.name ? function() {
                var t, o = !0;
                function n() {
                    R && 0 < R.text.length ? (0 < B.selectedIndex && ge("del"),
                    B.on("pressup", r)) : ge("del")
                }
                function r() {
                    o = !1,
                    t.clear(),
                    B.off("pressup", r)
                }
                n(),
                t = kt.timeout(300, function e() {
                    (!R || R.text.length < 1 || 0 == B.currentIndex) && (o = !1);
                    o && (n(),
                    t = kt.timeout(200, e));
                    R.text.length < 1 && r()
                }),
                B.stage.update()
            }() : "" === e.target.name ? ge(" ") : ge(e.target.name) : B.dispatchEvent("special"),
            E.update())
        }),
        me(),
        ve(),
        Object.defineProperty(this, "selectedLabel", {
            get: function() {
                return R
            },
            set: function(e) {
                pe({
                    target: e
                }),
                B.hidePlace()
            }
        }),
        Object.defineProperty(this, "selectedIndex", {
            get: function() {
                return re
            },
            set: function(e) {
                re = e,
                de()
            }
        }),
        this.show = function(e) {
            (B.addTo(h),
            B.resize(),
            zot(e)) || pe({
                target: n[e]
            });
            return D && (D.visible = !0),
            B.toggled = !0,
            B
        }
        ,
        this.hide = function() {
            return B.removeFrom(h),
            D && (D.visible = !1),
            E.update(),
            B.toggled = !1,
            B
        }
        ,
        this.toggle = function(e) {
            return !0 === e ? B.show() : !1 === e ? B.hide() : B.parent ? B.hide() : B.show(),
            B
        }
        ,
        this.showPlace = function() {
            return ue(),
            B
        }
        ,
        this.hidePlace = function() {
            return he(),
            B
        }
        ,
        this.addLabels = function(e) {
            Array.isArray(e) || (e = [e]);
            for (var t = e.length - 1; 0 <= t; t--) {
                0 <= n.indexOf(e[t]) || "Label" != e[t].type ? e.splice(t, 1) : e[t].widthArray = [0]
            }
            return ze(),
            n = n.concat(e),
            me(),
            ve(),
            B
        }
        ,
        this.removeLabels = function(e) {
            Array.isArray(e) || (e = [e]),
            ze();
            for (var t = 0; t < e.length; t++) {
                var o = n.indexOf(e[t]);
                0 <= o && n.splice(o, 1)
            }
            return me(),
            0 == n.length ? R && ye() : R && -1 == n.indexOf(R) && (ye(),
            ve()),
            B
        }
        ;
        var be = new kt.Rectangle(this.width,this.height,kt.clear,null,null,null,null,!1).addTo(this).expand().bot();
        be.on("mousedown", function() {}),
        be.on("click", function() {}),
        this.resize = function() {
            return B.scaleTo(E, 100 - 2 * o / E.width * 100, 50 - 2 * o / E.height * 100),
            B.y = E.height - B.height - o,
            B.x = E.width / 2 - B.width / 2,
            _ && (point = R.localToLocal(0, 0, B),
            _.x = point.x,
            _.y = point.y + R.height + 15),
            B.stage && B.stage.update(),
            B
        }
        ,
        B.selectedLabel && (B.selectedIndex = B.selectedLabel.text.length),
        !1 !== C && Me(this, A),
        this.clone = function() {
            var e = new kt.Keyboard(n,f,m,r,i,a,t,z,o,b,s,c,d,u,h,g,p,w,x,C,this.group,k);
            return B.cloneProps(e)
        }
    }
    ,
    kt.extend(kt.Keyboard, kt.Container, "clone", "zimContainer", !1),
    kt.Organizer = function(e, t, r, o, i, a, l, s, n, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k) {
        var T;
        if (T = zob(kt.Organizer, arguments, "width, list, useAdd, useRemove, usePosition, autoAdd, autoRemove, autoPosition, addForward, removeForward, backgroundColor, rollBackgroundColor, selectedBackgroundColor, color, rollColor, selectedColor, spacing, corner, keyEnabled, gradient, gloss, backdropColor, style, group, inherit", this))
            return T;
        z_d("67.3"),
        this.group = C;
        var A = !1 === x ? {} : kt.getStyle("Organizer", this.group, k);
        zot(e) && (e = null != A.width ? A.width : t && t.vertical ? t.width : 300),
        zot(r) && (r = null == A.useAdd || A.useAdd),
        zot(o) && (o = null == A.useRemove || A.useRemove),
        zot(i) && (i = null == A.usePosition || A.usePosition),
        zot(a) && (a = null != A.autoAdd ? A.autoAdd : r),
        zot(l) && (l = null != A.autoRemove ? A.autoRemove : o),
        zot(s) && (s = null != A.autoPosition ? A.autoPosition : i),
        zot(n) && (n = null == A.addForward || A.addForward),
        zot(c) && (c = null == A.removeForward || A.removeForward),
        zot(d) && (d = null != A.backgroundColor ? A.backgroundColor : "#777"),
        zot(u) && (u = null != A.rollBackgroundColor ? A.rollBackgroundColor : "#555"),
        zot(h) && (h = null != A.selectedBackgroundColor ? A.selectedBackgroundColor : "#333"),
        zot(g) && (g = null != A.color ? A.color : "white"),
        zot(p) && (p = null != A.rollColor ? A.rollColor : g),
        zot(f) && (f = null != A.selectedColor ? A.selectedColor : g),
        zot(m) && (m = null != A.spacing ? A.spacing : 1),
        zot(z) && (z = null != A.corner ? A.corner : 0),
        zot(y) && (y = null != A.gradient ? A.gradient : .2),
        zot(b) && (b = null != A.gloss ? A.gloss : null),
        zot(w) && (w = null != A.backdropColor ? A.backdropColor : null),
        Array.isArray(z) || (z = [z, z, z, z]);
        var B = {
            width: 50,
            height: 50,
            label: "",
            shadowColor: -1,
            gradient: y,
            corner: z,
            backgroundColor: d,
            rollBackgroundColor: u
        }
          , S = this.buttons = []
          , P = new Shape;
        if (P.graphics.f(g).p("AAAA4Ih6B8Ig5g4IB8h8Ih7h6IA4g5IB6B8IB7h8IA5A5Ih8B6IB8B7Ig5A5g"),
        r && S.push(new Button({
            icon: P.sca(.55).rot(-45).reg(1),
            inherit: B
        })),
        i) {
            var E = new Shape;
            E.graphics.f(g).p("AiJieIETCeIkTCfg"),
            S.push(new Button({
                icon: E.sca(.6).rot(t && !t.vertical ? 180 : -90).reg(-2),
                inherit: B
            })),
            S.push(new Button({
                icon: E.clone().sca(.6).rot(t && !t.vertical ? 0 : 90).reg(-2),
                inherit: B
            }));
            var M = new Shape;
            M.graphics.f(g).p("AiFCLIAAkVIBXAAIAAEVgAgiAAICoiHIAAEQg"),
            S.push(new Button({
                icon: M.sca(.62).rot(t && !t.vertical ? 0 : 90).reg(0),
                inherit: B
            })),
            S.push(new Button({
                icon: M.clone().sca(.62).rot(t && !t.vertical ? 180 : -90).reg(0),
                inherit: B
            }))
        }
        o && S.push(new Button({
            icon: P.clone().rot(0).sca(.55),
            inherit: B
        })),
        0 == S.length && (S = [""]),
        this.zimTabs_constructor(e, e / S.length, S, d, u, h, g, p, f, !1, m, !0, !1, z, null, !0, y, b, null, null, null, null, null, null, null, null, null, null, w);
        var I = this;
        I.list = t,
        I.type = "Organizer";
        var j = !(I.setButtons = function() {
            i && (I.buttons[1].icon.rotation = I.list && !I.list.vertical ? 180 : -90,
            I.buttons[2].icon.rotation = I.list && !I.list.vertical ? 0 : 90,
            I.buttons[3].icon.rotation = I.list && !I.list.vertical ? 0 : 90,
            I.buttons[4].icon.rotation = I.list && !I.list.vertical ? 180 : -90)
        }
        )
          , O = t;
        I.change(function(e) {
            (!j && I.list || I.list && I.list != O) && (I.list != O && O && O.noChange(),
            I.list.change(function(e) {
                I.orgItem = I.list.selected,
                I.orgIndex = I.list.selectedIndex
            }),
            j = !0,
            O = I.list);
            var t = e.target.selectedIndex;
            r || t++,
            i || r && !(0 < t) || (t = 5);
            var o = zot(I.list.selectedIndex) || I.list.selectedIndex < 0;
            switch (o && (I.currentValue = null),
            I.lastIndex = I.list.selectedIndex,
            t) {
            case 0:
                if (a) {
                    var n = Math.max(0, I.list.selectedIndex);
                    I.add(n)
                }
                I.orgType = "add";
                break;
            case 1:
                if (o)
                    break;
                if (s) {
                    n = I.list.selectedIndex;
                    I.up(n)
                }
                I.orgType = "up";
                break;
            case 2:
                if (o)
                    break;
                if (s) {
                    n = I.list.selectedIndex;
                    I.down(n)
                }
                I.orgType = "down";
                break;
            case 3:
                if (o)
                    break;
                if (s) {
                    n = I.list.selectedIndex;
                    I.toTop(n)
                }
                I.orgType = "top";
                break;
            case 4:
                if (o)
                    break;
                if (s) {
                    n = I.list.selectedIndex;
                    I.toBottom(n)
                }
                I.orgType = "bottom";
                break;
            case 5:
                if (o)
                    break;
                if (l) {
                    n = I.list.selectedIndex;
                    I.remove(n)
                }
                I.orgType = "remove"
            }
        }),
        this.add = function(e, t, o) {
            if (zot(e) && (e = I.lastIndex),
            zot(t) && (t = ""),
            n)
                e = Math.min(I.list.length, Math.max(0, I.list.selectedIndex) + 1);
            else
                e = Math.max(0, I.list.selectedIndex);
            I.list.addAt(t, e, o),
            I.list.selectedIndexPlusPosition = e,
            I.orgItem = I.list.selected,
            I.orgIndex = I.list.selectedIndex
        }
        ,
        this.up = function(e) {
            zot(e) && (e = I.lastIndex);
            var t = I.list.items[e];
            zot(t) || (I.list.removeAt(1, e),
            I.list.addAt(t, e - 1),
            I.list.selectedIndexPlusPosition = Math.max(0, e - 1),
            I.orgItem = I.list.selected,
            I.orgIndex = I.list.selectedIndex)
        }
        ,
        this.down = function(e) {
            zot(e) && (e = I.lastIndex);
            var t = I.list.items[e];
            zot(t) || (I.list.removeAt(1, e),
            I.list.addAt(t, e + 1),
            I.list.selectedIndexPlusPosition = Math.min(I.list.length - 1, e + 1),
            I.orgItem = I.list.selected,
            I.orgIndex = I.list.selectedIndex)
        }
        ,
        this.toTop = function(e) {
            zot(e) && (e = I.lastIndex);
            var t = I.list.items[e];
            zot(t) || (I.list.removeAt(1, e),
            I.list.addAt(t, 0),
            I.list.first(),
            I.orgItem = I.list.selected,
            I.orgIndex = I.list.selectedIndex)
        }
        ,
        this.toBottom = function(e) {
            zot(e) && (e = I.lastIndex);
            var t = I.list.items[e];
            zot(t) || (I.list.removeAt(1, e),
            I.list.addAt(t, I.list.length),
            I.list.last(),
            I.orgItem = I.list.selected,
            I.orgIndex = I.list.selectedIndex)
        }
        ,
        !(this.remove = function(e) {
            zot(e) && (e = I.lastIndex),
            I.removedItem = I.list.selected;
            e = Math.max(0, I.list.selectedIndex);
            if (I.list.removeAt(1, e),
            c)
                e = Math.max(0, I.list.selectedIndex);
            else
                e = Math.max(0, I.list.selectedIndex - 1);
            I.list.selectedIndexPlusPosition = Math.min(I.list.length - 1, e),
            I.orgItem = I.list.selected,
            I.orgIndex = I.list.selectedIndex
        }
        ) !== x && Me(this, A),
        this.clone = function() {
            return I.cloneProps(new kt.Organizer(e,t,r,o,i,a,l,s,n,c,d,u,h,g,p,f,m,z,v,y,b,w,x,I.group,k))
        }
    }
    ,
    kt.extend(kt.Organizer, kt.Tabs, "clone", "zimTabs", !1),
    kt.Loader = function(t, o, n, r, i, a, l, s, e, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, S, P, E, M) {
        var I;
        if (I = zob(kt.Loader, arguments, "width, height, label, backgroundColor, rollBackgroundColor, color, rollColor, borderColor, borderRollColor, borderWidth, corner, shadowColor, shadowBlur, hitPadding, gradient, gloss, dashed, backing, rollBacking, rollPersist, icon, rollIcon, toggle, toggleBacking, rollToggleBacking, toggleIcon, rollToggleIcon, toggleEvent, frame, style, group, inherit", this))
            return I;
        z_d("67.5"),
        this.group = E;
        var j = !1 === P ? {} : kt.getStyle("Loader", this.group, M);
        if (zot(t) && (t = null != j.width ? j.width : 250),
        zot(o) && (o = null != j.height ? j.height : 70),
        zot(r) && (r = null != j.backgroundColor ? j.backgroundColor : "rgba(0,0,0,.05)"),
        zot(i) && (i = null != j.rollBackgroundColor ? j.rollBackgroundColor : "rgba(0,0,0,.1)"),
        zot(a) && (a = null != j.color ? j.color : "rgba(0,0,0,.5)"),
        zot(l) && (l = null != j.rollColor ? j.rollColor : a),
        zot(s) && (s = null != j.borderColor ? j.borderColor : "rgba(0,0,0,.3)"),
        zot(c) && (c = null != j.borderWidth ? j.borderWidth : 1),
        zot(m) && (m = null == j.dashed || j.dashed),
        zot(d) && (d = null != j.corner ? j.corner : 0),
        zot(n) && (n = null != j.label ? j.label : new kt.Label({
            text: "UPLOAD PIC",
            color: a,
            rollColor: l,
            valign: "center",
            align: "center",
            backing: "ignore",
            shadowColor: "ignore",
            shadowBlur: "ignore",
            backgroundColor: "ignore",
            group: this.group
        })),
        zot(S)) {
            if (!Tt)
                return void (zon && zog("zim.Loader - please provide a reference to zim Frame"));
            S = Tt
        }
        this.zimButton_constructor(t, o, n, r, i, a, l, s, e, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, null, null, null, null, null, null, null, null, null, null, null, null, !1),
        this.type = "Loader";
        var O = this
          , Y = S.stage;
        n = O.label;
        var L = O.tag = document.createElement("input");
        document.body.appendChild(L),
        L.setAttribute("type", "file"),
        L.setAttribute("multiple", "multiple"),
        L.setAttribute("aria-hidden", !0),
        L.hidden = !0,
        L.style.cssText = "border:thin solid grey; z-index:2; width:" + t + "px; height:" + o + "px; overflow:hidden; outline:none;position:absolute; left:0px; top:0px; display:none; cursor:pointer; opacity: 0; filter: alpha(opacity=0);",
        this.addEventListener("mousedown", function() {
            L.click()
        }),
        L.addEventListener("change", X);
        var D = new createjs.DOMElement(L);
        function X(e) {
            var n;
            n = e.dataTransfer && e.dataTransfer.files && 0 < e.dataTransfer.files.length ? e.dataTransfer.files : e.target.files;
            for (var r, t, o, i = [], a = 0; a < n.length; a++)
                t = n[a],
                o = void 0,
                (o = new FileReader).onload = function(e) {
                    var o = new Image;
                    o.onload = function() {
                        var e = new kt.Bitmap(o);
                        if (i.push(e),
                        1 == i.length && (r = e),
                        i.length == n.length) {
                            var t = new createjs.Event("loaded");
                            t.bitmaps = i,
                            t.bitmap = r,
                            t.lastBitmap = e,
                            t.total = i.length,
                            O.dispatchEvent(t),
                            L.value = ""
                        }
                    }
                    ,
                    o.src = e.target.result
                }
                ,
                o.readAsDataURL(t)
        }
        Y.addChild(D),
        D.alpha = 0,
        this.resize = function() {
            return O.stage ? (L.setAttribute("aria-hidden", !1),
            L.hidden = !1,
            L.style.display = "block",
            setTimeout(function() {
                var e = O.localToGlobal(0, 0);
                D.x = S.x + e.x * S.scale,
                D.y = S.y + e.y * S.scale,
                kt.sca(D, S.scale * O.scaleX, S.scale * O.scaleY),
                Y.update()
            }, 50),
            O) : (L.setAttribute("aria-hidden", !0),
            L.hidden = !0,
            void (L.style.display = "none"))
        }
        ,
        this.resize(),
        O.on("added", function() {
            L.style.display = "block",
            L.hidden = !1,
            L.style.display = "block",
            O.resize()
        }),
        O.added(function e() {
            O.resize();
            setTimeout(function() {
                L.style.display = "block",
                L.hidden = !1,
                L.style.display = "block"
            }, 50);
            O.on("added", e, null, !0)
        }),
        O.on("removed", function() {
            L.style.display = "none",
            L.hidden = !0,
            L.style.display = "none"
        }),
        S.on("resize", O.resize),
        (new XMLHttpRequest).upload && L.addEventListener("drop", function(e) {
            L.removeEventListener("change", X),
            X(e),
            setInterval(function() {
                L.addEventListener("change", X)
            }, 100)
        }),
        !(this.save = function(e, t, o, n, r, i, a, l, s) {
            var c;
            if (c = zob(O.save, arguments, "content, filename, x, y, width, height, cached, cachedBounds, type"))
                return c;
            if (zot(e) && (e = S.stage),
            zot(s) && (s = "png"),
            zot(t))
                t = "saved_" + String(kt.makeID("numbers", 5)) + "." + s;
            else {
                var d = t.split(".");
                if (1 == d.length)
                    t += "." + s;
                else {
                    var u = ["png", "jpg", "jpeg"]
                      , h = u.indexOf(d[d.length - 1].toLowerCase());
                    -1 == h ? t += "." + s : s = u[h]
                }
            }
            if (zot(o) && (o = 0),
            zot(n) && (n = 0),
            zot(r) && (r = e.getBounds && e.getBounds() ? e.getBounds().width : S.width),
            zot(i) && (i = e.getBounds && e.getBounds() ? e.getBounds().height : S.height),
            e.cache(o, n, r, i),
            /Edge\/(\d)+/.test(navigator.userAgent)) {
                var g = window.open();
                g.document.write("<html><head><title>saved</title></head><body style='margin:0px;padding:0px;overflow:hidden'><img src=" + e.cacheCanvas.toDataURL("image/" + s) + "></body></html>"),
                g.document.close()
            } else {
                var p = document.createElement("a");
                p.setAttribute("download", t),
                p.setAttribute("href", e.cacheCanvas.toDataURL("image/" + s)),
                document.body.appendChild(p),
                p.click(),
                document.body.removeChild(p)
            }
            return a ? l && e.cache(cashedBound.x, cashedBound.y, cashedBound.width, cashedBound.height) : e.uncache(),
            O
        }
        ) !== P && Me(this, j),
        this.clone = function() {
            var e = new kt.Loader(t,o,zot(n) ? null : n.clone(),r,i,a,l,s,c,d,u,h,g,p,f,zot(z) ? null : z.clone(),zot(v) ? null : v.clone(),y,zot(b) ? null : b.clone(),zot(w) ? null : w.clone(),x,zot(C) ? null : C.clone(),zot(k) ? null : k.clone(),zot(T) ? null : T.clone(),zot(A) ? null : A.clone(),B,S,P,this.group);
            return O.cloneProps(e)
        }
        ,
        this.dispose = function() {
            return document.body.removeChild(L),
            this.zimButton_dispose(),
            !0
        }
    }
    ,
    kt.extend(kt.Loader, kt.Button, ["clone", "dispose"], "zimButton", !1),
    kt.TextArea = function(t, o, n, r, i, a, l, s, c, d, u, h, g, p, f, m, z, v, y, b, w, e, x) {
        var C;
        if (C = zob(kt.TextArea, arguments, "width, height, size, padding, color, backgroundColor, borderColor, borderWidth, corner, shadowColor, shadowBlur, dashed, id, placeholder, readOnly, spellCheck, password, inputType, frame, expand, style, group, inherit", this))
            return C;
        z_d("67.6"),
        this.group = e;
        var k = !1 === w ? {} : kt.getStyle("TextArea", this.group, x);
        if (zot(t) && (t = null != k.width ? k.width : 250),
        zot(o) && (o = null != k.height ? k.height : 70),
        zot(n) && (n = null != k.size ? k.size : 20),
        zot(r) && (r = null != k.padding ? k.padding : 5),
        zot(i) && (i = null != k.color ? k.color : "#666"),
        zot(a) && (a = null != k.backgroundColor ? k.backgroundColor : "rgba(256,256,256,.1)"),
        zot(l) && (l = null != k.borderColor ? k.borderColor : "rgba(0,0,0,.1)"),
        zot(s) && (s = null != k.borderWidth ? k.borderWidth : null),
        l < 0 || s < 0 ? l = s = null : null != l && null == s && (s = 1),
        zot(c) && (c = null != k.corner ? k.corner : 0),
        !zot(u) && zot(d) && (d = null != k.shadowColor ? k.shadowColor : "rgba(0,0,0,.3)"),
        !zot(d) && zot(u) && (u = null != k.shadowBlur ? k.shadowBlur : 10),
        zot(z) && (z = null != k.password && k.password),
        zot(v) && (v = null != k.inputType && k.inputType),
        zot(b) && (b = null != k.expand ? k.expand : 20),
        !0 === b && (b = 20),
        zot(y)) {
            if (!Tt)
                return void (zon && zog("zim.TextArea - please provide a reference to zim Frame"));
            y = Tt
        }
        this.zimContainer_constructor(t, o, null, null, !1),
        this.type = "TextArea";
        var T = this
          , A = y.stage
          , B = this.background = new kt.Rectangle(t,o,a,l,s,c,h,!1).expand(b);
        -1 != d && 0 < u && (B.shadow = new createjs.Shadow(d,3,3,u)),
        T.addChild(B);
        var S = T.tag = v || z ? document.createElement("input") : document.createElement("textarea");
        document.body.appendChild(S),
        zot(g) || (S.setAttribute("id", g),
        S.setAttribute("name", g)),
        z ? S.setAttribute("type", "password") : v && S.setAttribute("type", v),
        f && (S.readOnly = !0),
        m || (S.spellcheck = !1),
        zot(p) || S.setAttribute("placeholder", p),
        S.style.cssText = "background-color:rgba(0,0,0,.01); color:" + i + "; resize:none; z-index:3; width:" + (t - 2 * r) + "px; height:" + (o - 2 * r) + "px; overflow:hidden; outline:none;font-size:" + n + "px; font-family:" + (null != k.font ? k.font : "arial") + "; border:none; position:absolute; left:0px; top:0px; display:none;",
        S.addEventListener("change", function() {
            T.dispatchEvent("change")
        }),
        S.addEventListener("input", function() {
            T.dispatchEvent("input")
        }),
        S.addEventListener("focus", function() {
            y.zil && window.removeEventListener("keydown", y.zil[0]),
            T.dispatchEvent("focus")
        }),
        S.addEventListener("blur", function() {
            y.zil && window.addEventListener("keydown", y.zil[0]),
            T.dispatchEvent("blur")
        });
        var P = new createjs.DOMElement(S);
        P.alpha = 0,
        this.on("mousedown", function() {
            setTimeout(function() {
                S.focus()
            }, 100)
        }),
        this.setFocus = function(e) {
            return zot(e) && (e = !0),
            e ? S.focus() : S.blur(),
            T
        }
        ,
        this.resize = function() {
            return setTimeout(function() {
                var e = T.localToGlobal(r, r);
                P.x = y.x + e.x * y.scale,
                P.y = y.y + e.y * y.scale,
                kt.sca(P, y.scale * T.scaleX, y.scale * T.scaleY),
                P.alpha = 1,
                T.stage && A.update()
            }, 50),
            T
        }
        ,
        this.resize(),
        T.added(function e() {
            A.addChild(P);
            setTimeout(function() {
                S.style.display = "block"
            }, 50);
            T.resize();
            T.on("added", e, null, !0)
        }),
        T.on("removed", function() {
            A.removeChild(P),
            S.style.display = "none"
        }),
        y.on("resize", T.resize),
        Object.defineProperty(this, "currentValue", {
            get: function() {
                return S.value
            },
            set: function(e) {
                S.value = e
            }
        }),
        Object.defineProperty(this, "text", {
            get: function() {
                return S.value
            },
            set: function(e) {
                S.value = e
            }
        }),
        Object.defineProperty(this, "focus", {
            get: function() {
                return document.activeElement == S
            },
            set: function(e) {
                T.setFocus(e)
            }
        }),
        Object.defineProperty(this, "readOnly", {
            get: function() {
                return S.readOnly
            },
            set: function(e) {
                S.readOnly = e
            }
        }),
        "undefined" != typeof KEYFOCUS && (kt.KEYFOCUS = KEYFOCUS),
        Object.defineProperty(this, "keyFocus", {
            get: function() {
                return kt.KEYFOCUS == T
            },
            set: function(e) {
                kt.KEYFOCUS = T
            }
        }),
        kt.KEYFOCUS || (T.keyFocus = !0),
        S.addEventListener("mousedown", function() {
            T.keyFocus = !0
        }),
        !1 !== w && Me(this, k),
        this.clone = function() {
            var e = new kt.TextArea(t,o,n,r,i,a,l,s,c,d,u,h,g,p,f,m,z,v,y,b,w,this.group,x);
            return T.cloneProps(e)
        }
        ,
        this.dispose = function() {
            return document.body.removeChild(S),
            this.zimContainer_dispose(),
            !0
        }
    }
    ,
    kt.extend(kt.TextArea, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.Tag = function(t, o, n, r, i, a, l, s, c, d, e, u) {
        var h;
        if (h = zob(kt.Tag, arguments, "width, height, id, frame, backgroundColor, padding, paddingHorizontal, paddingVertical, expand, style, group, inherit", this))
            return h;
        z_d("67.7"),
        this.group = e;
        var g = !1 === d ? {} : kt.getStyle("Tag", this.group, u);
        if (zot(t) && (t = null != g.width ? g.width : 250),
        zot(o) && (o = null != g.height ? g.height : 70),
        zot(n) && (n = null != g.id ? g.id : "zimTag_" + rand(1e4)),
        zot(r)) {
            if (!Tt)
                return void (zon && zog("zim.TextArea - please provide a reference to zim Frame"));
            r = Tt
        }
        zot(i) && (i = null != g.backgroundColor ? g.backgroundColor : "rgba(0,0,0,0)"),
        zot(a) && (a = null != g.padding ? g.padding : 10),
        zot(l) && (l = null != g.paddingHorizontal ? g.paddingHorizontal : a),
        zot(s) && (s = null != g.paddingVertical ? g.paddingVertical : a),
        zot(c) && (c = null != g.expand ? g.expand : 20),
        !0 === c && (c = 20),
        this.zimContainer_constructor(t, o, null, null, !1),
        this.type = "Tag",
        this.tagID = n,
        this.id = n;
        var p = this
          , f = r.stage
          , m = (p.background = new kt.Rectangle(t + l,o + s,i).center(this).expand(c || 0),
        p.tag = document.createElement("div"));
        document.body.appendChild(m),
        m.setAttribute("id", n),
        m.setAttribute("name", n),
        m.style.cssText = "resize:none; z-index:3; width:" + t + "px; height:" + o + "px; overflow:hidden; outline:none;position:absolute; left:0px; top:0px; display:none;";
        var z = new createjs.DOMElement(m);
        z.alpha = 0,
        this.resize = function() {
            return setTimeout(function() {
                var e = p.localToGlobal(0, 0);
                z.x = r.x + e.x * r.scale,
                z.y = r.y + e.y * r.scale,
                kt.sca(z, r.scale * p.scaleX, r.scale * p.scaleY),
                z.alpha = 1,
                p.stage && f.update()
            }, 50),
            p
        }
        ,
        this.resize(),
        p.added(function e() {
            f.addChild(z);
            setTimeout(function() {
                m.style.display = "block"
            }, 50);
            p.resize();
            p.on("added", e, null, !0)
        }),
        p.on("removed", function() {
            f.removeChild(z),
            m.style.display = "none"
        }),
        r.on("resize", p.resize),
        this.add = function(e) {
            return m.innerHTML += e,
            p
        }
        ,
        Object.defineProperty(this, "innerHTML", {
            get: function() {
                return m.innerHTML
            },
            set: function(e) {
                m.innerHTML = e
            }
        }),
        Object.defineProperty(this, "style", {
            get: function() {
                return m.style
            },
            set: function(e) {
                m.style = e
            }
        }),
        !1 !== d && Me(this, g),
        this.clone = function() {
            var e = new kt.Tag(t,o,n,r,i,a,l,s,c,d,this.group,u);
            return p.cloneProps(e)
        }
        ,
        this.dispose = function() {
            return document.body.removeChild(m),
            this.zimContainer_dispose(),
            !0
        }
    }
    ,
    kt.extend(kt.Tag, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.addTo = function(e, t, o, n) {
        var r;
        if (r = zob(kt.addTo, arguments, "obj, container, index, localToLocal"))
            return r;
        if (z_d("47.5"),
        !zot(e)) {
            if (zot(t)) {
                if (!Tt)
                    return void zog("zim methods - addTo(): please provide container");
                t = Tt.stage
            }
            if (zot(n) && (n = !0),
            e.parent || (n = !1),
            n)
                var i = e.parent.localToLocal(e.x, e.y, t);
            return zot(o) || isNaN(o) ? t.addChild(e) : t.addChildAt(e, o),
            n && (e.x = i.x,
            e.y = i.y),
            e
        }
        zog("zim methods - addTo(): please provide object")
    }
    ,
    kt.removeFrom = function(e, t) {
        if (z_d("47.6"),
        !zot(e))
            return zot(t) ? e.parent && e.parent.removeChild(e) : t.removeChild(e),
            e;
        zog("zim methods - removeFrom(): please provide object")
    }
    ,
    kt.added = function(e, t, o, n) {
        if (z_d("47.7"),
        !zot(e) && !zot(t) && "function" == typeof t) {
            if (zot(o) && (o = 100),
            !e.stage) {
                var r = Date.now()
                  , i = 0
                  , a = setInterval(function() {
                    5 < i ? clearInterval(a) : (i++,
                    e.stage && (t(e.stage, e),
                    clearInterval(a),
                    clearInterval(l)))
                }, 10)
                  , l = setInterval(function() {
                    0 < n && r - Date.now() > n && clearInterval(l),
                    e.stage && (t(e.stage, e),
                    clearInterval(l))
                }, o);
                return l
            }
            t(e.stage, e)
        }
    }
    ,
    kt.centerReg = function(e, t, o, n) {
        var r;
        if (r = zob(kt.centerReg, arguments, "obj, container, index, add"))
            return r;
        if (z_d("48"),
        zot(e) || !e.getBounds || !e.getBounds())
            return zog("zim methods - centerReg(): please provide object with bounds set"),
            e;
        zot(n) && (n = !0),
        zot(t) && e.parent && n && (t = e.parent,
        zot(o) && (o = e.parent.getChildIndex(e)),
        e.parent.removeChild(e)),
        zot(t) || t != e.parent || (zot(o) && (o = e.parent.getChildIndex(e)),
        e.parent.removeChild(e));
        var i = e.getBounds();
        return e.regX = i.x + i.width / 2,
        e.regY = i.y + i.height / 2,
        n ? kt.center(e, t, o) : e
    }
    ,
    kt.centerCheck = !1,
    kt.center = function(e, t, o, n) {
        var r;
        if (r = zob(kt.center, arguments, "obj, container, index, add"))
            return r;
        if (kt.centerCheck || (z_d("48.1"),
        kt.centerCheck = !0),
        !zot(e) && e.getBounds) {
            if (zot(t) && (e.parent ? t = e.parent : Tt && (t = Tt.stage)),
            !zot(t) && t.getBounds) {
                var i = e.getBounds()
                  , a = t.getBounds();
                if (zot(n) && (n = !0),
                n && t.addChild && (zot(o) || "number" == typeof o && isNaN(o) ? t.contains(e) || t.addChild(e) : t.addChildAt(e, o)),
                zot(a))
                    return e;
                if (zot(i))
                    return e.x = t.getBounds().width / 2,
                    e.y = t.getBounds().height / 2,
                    e;
                var l = e.localToLocal(e.regX, e.regY, t)
                  , s = kt.boundsToGlobal(e)
                  , c = kt.boundsToGlobal(t, s, !0);
                if (e.x = a.x + a.width / 2 - c.width / 2 + (l.x - c.x),
                e.y = a.y + a.height / 2 - c.height / 2 + (l.y - c.y),
                !n && t.getStage && t.stage && e.parent) {
                    var d = t.localToLocal(e.x, e.y, e.parent);
                    e.x = d.x,
                    e.y = d.y
                }
                return e
            }
            zog("zim.center(): please provide container with bounds")
        } else
            zog("zim.center(): please provide object with bounds")
    }
    ,
    kt.place = function(e, t) {
        if (z_d("49"),
        !zot(e))
            return zot(t) && (t = "obj"),
            kt.drag({
                obj: e,
                currentTarget: !0,
                dragCursor: "crosshair"
            }),
            zog("place " + t + " - to get new position"),
            e.on("click", function() {
                zog(t + ".x = " + Math.round(e.x) + "; " + t + ".y = " + Math.round(e.y) + ";"),
                zog(t + ".loc(" + Math.round(e.x) + ", " + Math.round(e.y) + ");")
            }),
            e
    }
    ,
    kt.placeReg = function(t, o) {
        if (z_d("49.5"),
        !zot(t)) {
            var e = t.stage;
            if (zot(e))
                return zog("zim.placeReg() - add object to stage before calling placeReg()"),
                t;
            zot(o) && (o = "obj");
            var n = t.parent.localToGlobal(t.x, t.y)
              , r = new kt.Shape(-25,-25,50,50,null,!1).addTo(e).pos({
                x: n.x,
                y: n.y,
                reg: !0
            });
            return r.graphics.s("white").mt(-25, 0).lt(25, 0).mt(0, -25).lt(0, 20),
            r.compositeOperation = "difference",
            r.expand(0),
            kt.drag({
                obj: r
            }),
            zog("place cursor to get new registration point location"),
            e.on("stagemouseup", function() {
                var e = t.globalToLocal(r.x, r.y);
                zog(o + ".regX = " + Math.round(e.x) + "; " + o + ".regY = " + Math.round(e.y) + ";"),
                zog(o + ".reg(" + Math.round(e.x) + ", " + Math.round(e.y) + ");")
            }),
            t
        }
    }
    ,
    kt.pos = function(e, t, o, n, r, i, a, l, s, c, d) {
        var u;
        if (u = zob(kt.pos, arguments, "obj, x, y, right, bottom, container, index, add, reg, regX, regY"))
            return u;
        z_d("41.5");
        var h = kt.POSREG;
        if ("undefined" != typeof POSREG && (h = POSREG),
        zot(s) && (s = h),
        !zot(e)) {
            if (zot(s) && zot(c) && (c = !1),
            zot(s) && zot(d) && (d = !1),
            !zot(s) && zot(c) && (c = s),
            !zot(s) && zot(d) && (d = s),
            !0 !== n && (n = !1),
            !0 !== r && (r = !1),
            zot(l) && (l = !0),
            zot(i) || i.addChild || (i = null),
            e.getBounds || object.getBounds() || (c = d = !1),
            zot(i) && (e.parent ? i = e.parent : Tt && (i = Tt.stage)),
            !e.parent && zot(t) && (t = 0),
            !e.parent && zot(o) && (o = 0),
            !zot(i) && i.addChild && l && (zot(a) || "number" == typeof a && isNaN(a) ? i.contains(e) || i.addChild(e) : i.addChildAt(e, a)),
            e.parent && e.parent.getBounds) {
                if (i = e.parent,
                zot(t) && 1 == n && (t = 0),
                zot(o) && 1 == r && (o = 0),
                zot(t) || (e.x = t),
                zot(o) || (e.y = o),
                zot(t) && zot(o) && !n && !r)
                    return e;
                var g = 0
                  , p = 0;
                if (e.getBounds()) {
                    var f = e.getTransformedBounds();
                    if (!zot(t)) {
                        if (n)
                            m = new kt.Point(f.x + f.width,f.y + f.height);
                        else
                            var m = new kt.Point(f.x,f.y);
                        g = m.x - t
                    }
                    if (!zot(o)) {
                        if (r)
                            m = new kt.Point(f.x + f.width,f.y + f.height);
                        else
                            var m = new kt.Point(f.x,f.y);
                        p = m.y - o
                    }
                    var z = i.getBounds();
                    zot(t) || (n ? e.x = c ? z.width + z.x - t : z.width + z.x - t - g : (e.x = c ? t : t - g,
                    e.x += z.x)),
                    zot(o) || (r ? e.y = d ? z.height + z.y - o : z.height + z.y - o - p : (e.y = d ? o : o - p,
                    e.y += z.y))
                }
            }
            return e
        }
    }
    ,
    kt.loc = function(e, t, o, n, r, i, a, l) {
        var s;
        if (s = zob(kt.loc, arguments, "obj, target, y, container, index, add, localToLocal, x"))
            return s;
        if (z_d("41.55"),
        !zot(e)) {
            if ("number" == typeof t && (l = t,
            t = null),
            zot(t) || (zot(t.x) || (l = t.x),
            zot(t.y) || (o = t.y)),
            zot(l) && zot(t) && (l = e.x),
            zot(o) && zot(t) && (o = e.y),
            zot(i) && (i = !0),
            zot(n) && (e.parent ? n = e.parent : Tt && (n = Tt.stage)),
            i && n && (e.parent && n == e.parent || (zot(r) || isNaN(r) ? n.addChild(e) : n.addChildAt(e, r))),
            zot(a) && (a = !0),
            t && t.parent && e.parent && a) {
                var c = t.parent.localToLocal(l, o, e.parent);
                l = c.x,
                o = c.y
            }
            return e.x = l,
            e.y = o,
            e
        }
    }
    ,
    kt.mov = function(e, t, o) {
        var n;
        return (n = zob(kt.mov, arguments, "obj, x, y")) ? n : (z_d("41.6"),
        zot(e) ? void 0 : (zot(t) || (e.x += t),
        zot(o) || (e.y += o),
        e))
    }
    ,
    kt.sca = function(e, t, o) {
        if (z_d("41.97"),
        !zot(e) && !zot(e.scaleX))
            return zot(t) && (t = e.scaleX),
            zot(o) && (o = t),
            e.scaleX = t,
            e.scaleY = o,
            e
    }
    ,
    kt.alp = function(e, t) {
        if (z_d("41.7"),
        !zot(e))
            return zot(t) || (e.alpha = e.hovOriginal = t),
            e
    }
    ,
    kt.hov = function(e, t, o) {
        if (z_d("41.75"),
        !zot(e))
            return zot(t) && (t = 1),
            zot(o) && (o = "number" == typeof t ? "alpha" : "color"),
            e.hovMouseover && (e.off(e.hovMouseover),
            e.off(e.hovMouseout)),
            -1 == t ? (e.off("mouseover", e.hovMouseover),
            e.off("mouseout", e.hovMouseout)) : (e.hovOld = e[o],
            e.hovNew = t,
            e.hovMouseover = e.on("mouseover", function() {
                e[o] = e.hovNew,
                e.stage.update()
            }),
            e.cursor && (e.cursor = "pointer"),
            e.hovMouseout = e.on("mouseout", function() {
                e[o] = e.hovOld,
                e.stage.update()
            })),
            e
    }
    ,
    kt.rot = function(e, t) {
        if (z_d("41.8"),
        !zot(e))
            return zot(t) || (e.rotation = t),
            e
    }
    ,
    kt.siz = function(e, t, o, n) {
        if (z_d("41.85"),
        !zot(e))
            return zot(n) && (n = !1),
            zot(t) || zot(o) ? zot(t) ? zot(o) || (n ? e.heightOnly = o : e.height = o) : n ? e.widthOnly = t : e.width = t : (e.widthOnly = t,
            e.heightOnly = o),
            e
    }
    ,
    kt.ske = function(e, t, o) {
        if (z_d("41.9"),
        !zot(e))
            return zot(t) || (e.skewX = t),
            zot(o) || (e.skewY = o),
            e
    }
    ,
    kt.reg = function(e, t, o) {
        if (z_d("41.95"),
        !zot(e))
            return zot(t) || (e.regX = t),
            zot(o) || (e.regY = o),
            e
    }
    ,
    kt.top = function(e) {
        if (z_d("41.62"),
        !zot(e) && e.parent)
            return e.parent.setChildIndex(e, e.parent.numChildren - 1),
            e
    }
    ,
    kt.bot = function(e) {
        if (z_d("41.63"),
        !zot(e) && e.parent)
            return e.parent.setChildIndex(e, 0),
            e
    }
    ,
    kt.ord = function(e, t) {
        if (z_d("41.64"),
        !zot(e) && e.parent)
            return zot(t) && (t = 0),
            e.parent.setChildIndex(e, e.parent.getChildIndex(e) + t),
            e
    }
    ,
    kt.cur = function(e, t) {
        return z_d("41.1"),
        zot(e) ? zog("zim methods - cur(): please provide object") : (zot(t) && (t = "pointer"),
        e.cursor = t),
        e
    }
    ,
    kt.sha = function(e, t, o, n, r) {
        return z_d("41.2"),
        zot(e) ? (zog("zim methods - sha(): please provide object"),
        e) : (zot(t) && (t = "rgba(0,0,0,.3)"),
        t.blur ? e.shadow = t : (zot(o) && (o = e.width ? .08 * e.width : 5),
        zot(n) && (n = e.height ? .08 * e.height : 5),
        zot(r) && (r = e.width ? .16 * e.width : 10),
        e.shadow = new createjs.Shadow(t,o,n,r)),
        e)
    }
    ,
    kt.dep = function(e, t) {
        if (z_d("41.65"),
        !zot(e))
            return zot(t) && (t = 0),
            e.depth = t,
            e
    }
    ,
    kt.tap = function(r, i, a, l, e) {
        if (z_d("47.8"),
        !zot(r) && !zot(i) && "function" == typeof i)
            return zot(a) && (a = 5),
            zot(l) && (l = 1e4),
            zot(e) && (e = !1),
            r.pointer && (r.cursor = "pointer"),
            r.zimClickDownEvent = r.on("mousedown", function(e) {
                if ("List" == e.currentTarget.type) {
                    if ("WindowBacking" == e.target.type)
                        return;
                    if (e.currentTarget.globalToLocal(e.stageX, e.stageY).y <= 0)
                        return
                }
                var t = e.stageX
                  , o = e.stageY
                  , n = Date.now();
                r.zimClickUpEvent = r.on("pressup", function(e) {
                    if (Math.abs(t + o - e.stageX - e.stageY) < a && Date.now() - n < l) {
                        if (r.excludeTap)
                            return;
                        i(e)
                    }
                }, null, !0)
            }, null, e),
            r
    }
    ,
    kt.noTap = function(e) {
        if (z_d("47.9"),
        !zot(e))
            return e.cursor && (e.cursor = "default"),
            e.off("mousedown", e.zimClickDownEvent),
            e.off("pressup", e.zimClickUpEvent),
            e
    }
    ,
    kt.change = function(e, t, o) {
        if (z_d("47.85"),
        !zot(e) && !zot(t) && "function" == typeof t)
            return zot(o) && (o = !1),
            e.zimChangeEvent = e.on("change", function(e) {
                t(e)
            }, null, o),
            e
    }
    ,
    kt.noChange = function(e) {
        if (z_d("47.95"),
        !zot(e))
            return e.off("mousedown", e.zimChangeEvent),
            e
    }
    ,
    kt.drag = function(a, e, i, r, t, o, l, s, c, d, n, u, h, g, p, f, m) {
        var z;
        if (z = zob(kt.drag, arguments, "obj, boundary, overCursor, dragCursor, all, swipe, localBounds, onTop, surround, slide, slideDamp, slideSnap, reg, removeTweens, startBounds, rect, currentTarget"))
            return z;
        if (z_d("31"),
        !zot(a) && a.on) {
            var v = kt.DRAGALL;
            "undefined" != typeof DRAGALL && (v = DRAGALL),
            zot(t) && zot(m) && (t = v),
            a.zimDown && a.noDrag(),
            a.cursor = zot(i) ? "pointer" : i,
            zot(t) && zot(m) ? m = !1 : zot(t) ? zot(m) && (m = !1) : m = t,
            "Tag" != a.type && "TextArea" != a.type && "Loader" != a.type || (m = !0),
            zot(o) && (o = !1),
            zot(l) && (l = !1),
            zot(s) && (s = !0),
            zot(c) && (c = !1),
            zot(d) && (d = !1),
            zot(n) && (n = .3),
            zot(u) && (u = !0);
            if (!0 !== u && ["horizontal", "vertical", "auto"].indexOf(u) < 0 && (u = !1),
            zot(h) && (h = !1),
            zot(g) && (g = !0),
            zot(p) && (p = !0),
            zot(e) && !zot(f) && (e = f),
            d)
                var y, b, w, x, C, k, T, A, B, S, P, E, M, I;
            kt.setSwipe(a, o),
            a.zimBoundary = e,
            a.zimLocalBounds = l;
            var j, O, Y, L, D, X, R = !1, _ = !1;
            return a.zimAdded = a.on("added", W, null, !0),
            a.zimRemoved = a.on("removed", function() {
                a.zimDragTicker && kt.Ticker.remove(a.zimDragTicker)
            }, null, !0),
            a.parent && W(),
            a.pointers = {},
            a.zimDown = a.on("mousedown", function(e) {
                if (a.stage) {
                    a.dragMouseX = Math.round(e.stageX),
                    a.dragMouseY = Math.round(e.stageY);
                    var t = "id" + Math.abs(e.pointerID + 1);
                    if (a.pointers[t] = !0,
                    X = m ? e.currentTarget : e.target,
                    !a.zimBoundary || X.getBounds()) {
                        if (R = !0,
                        a.stage.mouseMoveOutside = !0,
                        d || (a.zimDragTicker && kt.Ticker.remove(a.zimDragTicker),
                        a.zimDragTicker = kt.Ticker.add(function() {}, a.stage)),
                        g && createjs.Tween.removeTweens(X),
                        X.parent) {
                            if (s) {
                                var o = X.parent.numChildren - 1;
                                "Keyboard" == X.parent.getChildAt(o).type && o--,
                                X.parent.setChildIndex(X, o),
                                X.ZIMoutlineShape && X.outline()
                            }
                            var n = X.parent.globalToLocal(e.stageX, e.stageY);
                            h && (X.x = n.x,
                            X.y = n.y),
                            j = n.x - X.x,
                            O = n.y - X.y,
                            a.zimBoundary && (l ? (L = kt.boundsToGlobal(X.parent, a.zimBoundary),
                            c && (D = a.zimBoundary)) : (L = a.zimBoundary,
                            c && (D = kt.boundsToGlobal(X.parent, a.zimBoundary, !0)))),
                            a.cursor = zot(r) ? "pointer" : r,
                            d && (x = 0,
                            C = [n.x],
                            k = [n.y],
                            I = M = -1e4,
                            a.zimDragMoving = !0),
                            "Pen" == a.type && (a.zimDragCheck = !0,
                            _ = !1)
                        }
                    } else
                        zog("zim.drag() - drag object needs bounds set")
                }
            }, !0),
            a.zimMove = a.on("pressmove", function(e) {
                R && (a.dragMouseX = Math.round(e.stageX),
                a.dragMouseY = Math.round(e.stageY),
                H(X, e.stageX, e.stageY),
                X.ZIMoutlineShape && X.outline(),
                "Pen" == a.type && !_ && a.drawing ? _ = !0 : "Tag" != a.type && "TextArea" != a.type && "Loader" != a.type || a.resize())
            }, !0),
            a.zimPosition = H,
            a.zimUp = a.on("pressup", function(e) {
                var t = "id" + Math.abs(e.pointerID + 1);
                if (delete a.pointers[t],
                R) {
                    if (a.cursor = zot(i) ? "pointer" : i,
                    d) {
                        var o = X.parent.globalToLocal(e.stageX, e.stageY);
                        R = !1,
                        T = o.x,
                        A = o.y,
                        B = X.x,
                        S = X.y,
                        y.immediate(X.x),
                        b.immediate(X.y)
                    } else {
                        var n = 0;
                        for (var r in a.pointers)
                            n++;
                        0 == n && kt.Ticker.remove(a.zimDragTicker),
                        "Pen" == a.type && (a.zimDragCheck = !1,
                        _ && a.stopCheck())
                    }
                    a.stage && a.stage.update()
                }
            }, !0),
            a
        }
        function W() {
            O = j = 0,
            a.zimBoundary && (l ? (L = kt.boundsToGlobal(a.parent, a.zimBoundary),
            c && (D = a.zimBoundary)) : (L = a.zimBoundary,
            c && (D = kt.boundsToGlobal(a.parent, a.zimBoundary, !0)))),
            L && p && (Y = a.parent.localToGlobal(a.x, a.y),
            H(a, Y.x, Y.y)),
            d && setTimeout(function() {
                y = new kt.Damp(a.x,n),
                b = new kt.Damp(a.y,n),
                a.zimDragImmediate = function(e, t) {
                    S = t,
                    T = P = A = E = 0,
                    zot(B = e) || y.immediate(e),
                    zot(t) || b.immediate(t)
                }
                ,
                w = 3,
                x = 0,
                C = [],
                k = [],
                T = a.x,
                A = a.y,
                B = a.x,
                S = a.y,
                P = a.x,
                E = a.y,
                I = M = -1e4,
                a.zimDragMoving = !0,
                function() {
                    var e = a.stage;
                    function r(e, t, o, n, r) {
                        Math.abs(e.x - M) < .1 && Math.abs(e.y - I) < .1 ? (a.zimDragMoving = !1,
                        e.x = n,
                        e.y = r,
                        e.dispatchEvent("slidestop"),
                        "Pen" == a.type && (a.zimDragCheck = !1,
                        _ && a.stopCheck())) : (M = t,
                        I = o)
                    }
                    a.zimDragTicker = function() {
                        if (X || (X = a),
                        R) {
                            var e = X.parent.globalToLocal(a.dragMouseX, a.dragMouseY);
                            x++,
                            C.push(e.x),
                            k.push(e.y),
                            w <= x ? (P = C.shift(),
                            E = k.shift()) : (P = C[0],
                            E = k[0])
                        } else {
                            if (!a.zimDragMoving)
                                return;
                            var t = B + T - P
                              , o = S + A - E;
                            if (L) {
                                var n = V(X, t, o);
                                t = n.x,
                                o = n.y
                            }
                            if (u)
                                X.x = y.convert(t),
                                X.y = b.convert(o),
                                r(X, X.x, X.y, t, o);
                            else {
                                var n = V(X, y.convert(t), b.convert(o));
                                X.x = n.x,
                                X.y = n.y,
                                r(X, X.x, X.y, X.x, X.y)
                            }
                        }
                    }
                    ,
                    kt.Ticker.add(a.zimDragTicker, e)
                }()
            }, 50),
            zot(a.zimMaskDynamic) || a.zimMaskApply()
        }
        function H(e, t, o) {
            if (zot(e) && (e = X || a),
            e.parent) {
                if (zot(t) || zot(o)) {
                    var n = e.parent.localToGlobal(e.x, e.y);
                    j = O = 0,
                    a.zimBoundary && (l ? (L = kt.boundsToGlobal(e.parent, a.zimBoundary),
                    c && (D = e.zimBoundary)) : (L = a.zimBoundary,
                    c && (D = kt.boundsToGlobal(e.parent, a.zimBoundary, !0)))),
                    t = n.x,
                    o = n.y,
                    d && (B = e.x,
                    S = e.y,
                    X = e,
                    y && y.immediate(B),
                    b && b.immediate(S))
                }
                var r, i = e.parent.globalToLocal(t, o);
                d && u ? "vertical" == u ? (r = V(e, i.x - j, i.y - O),
                e.x = r.x,
                e.y = i.y - O) : "horizontal" == u ? (r = V(e, i.x - j, i.y - O),
                e.x = i.x - j,
                e.y = r.y) : (e.x = i.x - j,
                e.y = i.y - O) : (r = V(e, i.x - j, i.y - O),
                e.x = r.x,
                e.y = r.y)
            }
        }
        function V(e, t, o) {
            if (L)
                if (c) {
                    var n = e.getBounds().width
                      , r = e.getBounds().height
                      , i = e.getBounds().x
                      , a = e.getBounds().y;
                    n < D.width ? t = D.x + (D.width - n) / 2 + (e.regX - i) : (t - (e.regX - i) > D.x && (t = D.x + (e.regX - i)),
                    t - (e.regX - i) + n < D.x + D.width && (t = D.x + D.width + (e.regX - i) - n)),
                    e.height < D.height ? o = D.y + (D.height - r) / 2 + (e.regY - a) : (o - (e.regY - a) > D.y && (o = D.y + (e.regY - a)),
                    o - (e.regY - a) + r < D.y + D.height && (o = D.y + D.height + (e.regY - a) - r))
                } else {
                    var l = e.parent.localToGlobal(t, o);
                    t = Math.max(L.x, Math.min(L.x + L.width, l.x)),
                    o = Math.max(L.y, Math.min(L.y + L.height, l.y)),
                    t = (l = e.parent.globalToLocal(t, o)).x,
                    o = l.y
                }
            return {
                x: t,
                y: o
            }
        }
    }
    ,
    kt.noDrag = function(e) {
        if (z_d("32"),
        !zot(e) && e.on)
            return e.cursor = "default",
            kt.setSwipe(e, !0),
            e.off("added", e.zimAdded),
            e.off("removed", e.zimRemoved),
            e.off("mousedown", e.zimDown),
            e.off("pressmove", e.zimMove),
            e.off("pressup", e.zimUp),
            kt.Ticker && e.zimDragSlide && kt.Ticker.remove(e.zimDragSlide),
            e.zimDragMoving = e.zimAdded = e.zimRemoved = e.zimDown = e.zimMove = e.zimUp = e.zimBoundary = e.zimDragSlide = null,
            e
    }
    ,
    kt.dragBoundary = function(e, t, o) {
        if (z_d("33"),
        !zot(e) && e.on && !zot(t))
            return e.zimBoundary = t,
            e.zimDragMoving = !0,
            e.zimPosition && e.zimPosition(),
            e
    }
    ,
    kt.dragRect = kt.dragBoundary,
    kt.transform = function(l, e, t, o, n, r, i, a, s, c, d, u, h, g, p, f, m, z, v, y, b, w, x) {
        var C;
        if (C = zob(kt.transform, arguments, "obj, move, stretchX, stretchY, scale, rotate, allowToggle, visible, onTop, showStretch, showRotate, showScale, showReg, showBorder, borderColor, borderWidth, dashed, customCursors, handleSize, regSize, snapDistance, snapRotation, cache"))
            return C;
        if (z_d("33.5"),
        zot(l) || !l.getBounds)
            return zog("zim methods - transform(): please provide object with bounds set"),
            l;
        if (!l.getBounds())
            return zog("zim methods - transform(): please setBounds() on object"),
            l;
        if (!l.parent)
            return zog("zim methods - transform(): object should be on stage first"),
            l;
        zot(e) && (e = !0),
        zot(t) && (t = !0),
        zot(o) && (o = !0),
        zot(n) && (n = !0),
        zot(r) && (r = !0);
        var k, T = kt.mobile();
        if (zot(i) && (i = !0),
        zot(a) && (a = !0),
        zot(s) && (s = !0),
        zot(c) && (c = !!T),
        zot(d) && (d = !!T),
        zot(u) && (u = !0),
        zot(h) && (h = !0),
        zot(g) && (g = !0),
        zot(p) && (p = "brown"),
        zot(f) && (f = 1),
        zot(z) && (z = !T),
        zot(v) && (v = kt.mobile() ? 20 : 10),
        zot(y) && (y = 16),
        zot(b) && (b = 10),
        zot(w) && (w = 5),
        zot(x) && (x = !0),
        l.mouseChildren = !1,
        l.stage)
            k = l.stage;
        else {
            if (!Tt)
                return l;
            k = Tt.stage
        }
        if (!frame) {
            if (!Tt)
                return l;
            frame = Tt
        }
        var A = l.getBounds()
          , B = new kt.Shape({
            style: !1
        })
          , S = new kt.Shape({
            style: !1
        });
        S.controlType = "reg";
        var P, E, M, I, j, O, Y, L = l.parent, D = B.graphics, X = S.graphics, R = new kt.Container({
            style: !1
        });
        R.type = "TransformControls";
        var _, W, H, V, F, N = new kt.Container({
            style: !1
        }), G = new kt.Container({
            style: !1
        }), U = new kt.Container({
            style: !1
        }), K = new kt.Container({
            style: !1
        });
        if (zot(l.zimMaskDynamic) || l.zimMaskApply(),
        z) {
            var Z = new kt.Container({
                style: !1
            })
              , q = new kt.Container({
                style: !1
            });
            function Q(e) {
                e == Z && new Triangle(16,12,12,"white").addTo(e).mov(0, -13.5),
                new Triangle(16,12,12,"white").addTo(e).mov(13.5).rot(90),
                e == Z && new Triangle(16,12,12,"white").addTo(e).mov(0, 13.5).rot(180),
                new Triangle(16,12,12,"white").addTo(e).mov(-13.5).rot(-90),
                e == Z && new Triangle(10,7,7,"black").addTo(e).mov(0, -13),
                new Triangle(10,7,7,"black").addTo(e).mov(13).rot(90),
                e == Z && new Triangle(10,7,7,"black").addTo(e).mov(0, 13).rot(180),
                new Triangle(10,7,7,"black").addTo(e).mov(-13).rot(-90),
                x && e.cache(-20, -20, 40, 40)
            }
            Q(Z),
            Q(q);
            var J = {
                "nw-resize": 45,
                "ne-resize": -45,
                "n-resize": 90,
                "e-resize": 0
            }
        }
        function $() {
            var e = l;
            for (H = W = 1,
            F = V = _ = 0; e.parent; )
                _ += e.rotation,
                W *= e.scaleX,
                H *= e.scaleY,
                V += e.skewX,
                F += e.skewY,
                e = e.parent
        }
        $();
        for (var ee = _, te = ["nw-resize", "ne-resize", "nw-resize", "ne-resize"], oe = [2, 3, 0, 1], ne = 0; ne < 4; ne++) {
            var re = new kt.Rectangle(v,v,u ? "#e472c4" : "rgba(0,0,0,0)",u ? "#333" : "rgba(0,0,0,0)",2,null,null,!1);
            x && re.cache(-1, -1, v + 2, v + 2),
            re.centerReg(N),
            re.expand(0),
            re.rotation = _,
            O = z ? "none" : te[ne],
            re.drag({
                overCursor: O,
                dragCursor: O,
                onTop: !1
            }),
            re.controlType = "corner",
            re.cu = te[ne]
        }
        for (ne = 0; ne < oe.length; ne++)
            N.getChildAt(ne).op = N.getChildAt(oe[ne]);
        var ie = ["n-resize", "e-resize", "n-resize", "e-resize"];
        oe = [1, 1, 0, 0];
        for (ne = 0; ne < 4; ne++) {
            var ae = ne % 2 == 0 ? l.width / 2 : v
              , le = ne % 2 == 0 ? v : l.height / 2;
            if (c) {
                re = new kt.Rectangle(v,v,"#AAA","#333",2,null,null,!1);
                x && re.cache(-1, -1, v + 2, v + 2)
            } else
                re = new kt.Rectangle(ae,le,"rgba(0,0,0,0)",null,null,null,null,!1);
            re.centerReg(ne % 2 == 0 ? U : G),
            re.rotation = _,
            re.expand(0),
            O = z ? "none" : ie[ne],
            re.drag({
                overCursor: O,
                dragCursor: O,
                onTop: !1
            }),
            re.controlType = "side",
            re.cu = ie[ne]
        }
        for (ne = 0; ne < oe.length; ne++) {
            var se = ne % 2 == 0 ? U : G;
            se.getChildAt(Math.floor(ne / 2)).op = se.getChildAt(oe[ne])
        }
        var ce = ["ne-resize", "nw-resize", "ne-resize", "nw-resize"];
        for (ne = 0; ne < 4; ne++) {
            (re = new kt.Circle(v,d ? "#e472c4" : "rgba(0,0,0,0)",null,null,null,!1)).addTo(K),
            x && re.cache(-v, -v, 2 * v, 2 * v),
            re.expand(0),
            O = z ? "none" : ce[ne],
            re.drag({
                overCursor: O,
                dragCursor: O,
                onTop: !1
            }),
            re.controlType = "rotate",
            re.cu = ce[ne]
        }
        var de = 1.8;
        function ue() {
            var e = v * de * kt.sign(W)
              , t = v * de * kt.sign(H);
            K.getChildAt(0).reg(e, t),
            K.getChildAt(1).reg(-e, t),
            K.getChildAt(2).reg(-e, -t),
            K.getChildAt(3).reg(e, -t),
            k.update()
        }
        function he() {
            D.c(),
            X.c(),
            P = l.localToGlobal(A.x, A.y),
            E = l.localToGlobal(A.x + A.width, A.y),
            M = l.localToGlobal(A.x + A.width, A.y + A.height),
            I = l.localToGlobal(A.x, A.y + A.height),
            pTM = l.localToGlobal(A.x + A.width / 2, A.y),
            pRM = l.localToGlobal(A.x + A.width, A.y + A.height / 2),
            pBM = l.localToGlobal(A.x + A.width / 2, A.y + A.height),
            pLM = l.localToGlobal(A.x, A.y + A.height / 2),
            j = l.localToGlobal(l.regX, l.regY),
            pMid = l.localToGlobal(A.x + A.width / 2, A.y + A.height / 2),
            Y = [P, E, M, I],
            mids = [pTM, pRM, pBM, pLM],
            g && (D.s(p),
            m && D.sd([10, 5], 0),
            D.ss(f).mt(P.x, P.y).lt(E.x, E.y).lt(M.x, M.y).lt(I.x, I.y).lt(P.x, P.y).cp()),
            B.setBounds(P.x, P.y, E.x - P.x, I.y - P.y),
            h && (X.s("#eee").ss(f).f("rgba(0,0,0,.1)").dc(0, 0, y),
            X.s("#222").ss(f).dc(0, 0, .3 * y)),
            $();
            for (var e = Math.min(50, Math.abs(V)) * kt.sign(V), t = Math.min(50, Math.abs(F)) * kt.sign(F), o = _ * kt.sign(W * H) * kt.sign(l.scaleX * l.scaleY), n = 0; n < Y.length; n++) {
                var r = Y[n];
                N.getChildAt(n).loc(r.x, r.y).ske(e, t).rot(o),
                K.getChildAt(n).loc(r.x, r.y).rot(o);
                var i = mids[n]
                  , a = n % 2 == 0 ? U : G;
                a.getChildAt(Math.floor(n / 2)).loc(i.x, i.y).ske(e, t).rot(o),
                c || a.getChildAt(Math.floor(n / 2)).sca(n % 2 == 0 ? W / 2 : 1, n % 2 == 0 ? 1 : H / 2)
            }
            S.x = j.x,
            S.y = j.y
        }
        K.alpha = .5,
        ue(),
        he();
        var ge = new kt.Shape(1e3,1e3,null,null,null,!1);
        function pe() {
            ge.x = 0,
            ge.y = 0,
            ge.graphics.c().f("rgba(0,0,0,.01)").mt(P.x, P.y).lt(E.x, E.y).lt(M.x, M.y).lt(I.x, I.y).lt(P.x, P.y).cp(),
            ge.reg(j.x, j.y),
            ge.x = j.x,
            ge.y = j.y
        }
        pe(),
        R.on("dblclick", function(e) {
            frame.ctrlKey && l.transformControls.visible && (l.scaleX = 1,
            l.scaleY = 1,
            l.rotation = 0,
            he(),
            pe(),
            k.update()),
            _e(e, !0)
        });
        var fe = R.on("mousedown", ze)
          , me = l.on("mousedown", ze);
        function ze(e) {
            l.hitTestPoint(e.stageX, e.stageY) ? l.transformControls.visible || (z ? (Ne = !1,
            ge.mouseEnabled = !1) : frame.canvas.style.cursor = "move",
            l.transformControls.show(),
            l.dispatchEvent("transformshow")) : l.transformControls.visible && !R.hitTestPoint(e.stageX, e.stageY) && (l.transformControls.hide(),
            l.dispatchEvent("transformhide"))
        }
        var ve, ye, be, we, xe, Ce, ke, Te, Ae, Be, Se, Pe = k.on("stagemousedown", function(e) {
            l.transformControls.visible && !R.hitTestPoint(e.stageX, e.stageY) && (l.transformControls.hide(),
            l.dispatchEvent("transformhide"))
        });
        i || (R.off("mousedown", fe),
        l.off("mousedown", me),
        k.off("stagemousedown", Pe));
        var Ee, Me, Ie, je = !1, Oe = !1, Ye = l.cursor, Le = new kt.Circle(30,"rgba(0,0,0,0)",null,null,null,!1).expand(20);
        if (z) {
            Le.mouseEnabled = !1,
            Le.mouseChildren = !1,
            Le.addChild(q),
            N.on("mouseover", We),
            N.on("mouseout", He),
            G.on("mouseover", We),
            G.on("mouseout", He),
            U.on("mouseover", We),
            U.on("mouseout", He),
            K.on("mouseover", We),
            K.on("mouseout", He);
            var De = new kt.Circle(30,"rgba(0,0,0,0)",null,null,null,!1).expand(20);
            De.cursor = "none"
        }
        function Xe(e) {
            if (Oe = !0,
            s && Ve(),
            Ee && k.off("stagemousemove", Ee),
            ve = e.target.x,
            ye = e.target.y,
            Te = l.x,
            Ae = l.y,
            startSX = l.scaleX,
            startSY = l.scaleY,
            "rotate" == e.target.controlType) {
                je = !0,
                be = l.rotation;
                var t = e.stageX
                  , o = e.stageY
                  , n = L.localToGlobal(Te, Ae);
                Be = n.x,
                Se = n.y,
                we = 180 * Math.atan2(o - Se, t - Be) / Math.PI
            }
            frame.ctrlKey || "rotate" == e.target.controlType ? (xe = Math.abs(ve - l.x),
            Ce = Math.abs(ye - l.y)) : (xe = Math.abs(ve - e.target.op.x),
            Ce = Math.abs(ye - e.target.op.y)),
            "rotate" != e.target.controlType && (ke = {
                x: e.target.op.x,
                y: e.target.op.y
            }),
            Le.stage ? k.setChildIndex(Le, k.getChildIndex(R)) : Le.addTo(k, k.getChildIndex(R) + 1),
            Le.x = e.stageX,
            Le.y = e.stageY,
            Le.cursor = z ? "none" : e.target.cu,
            z && (q.rotation = l.rotation * kt.sign(W * H) * kt.sign(l.scaleX * l.scaleY) + J[e.target.cu] + ee,
            "side" != e.target.controlType && W * H < 0 && (q.rotation += 90),
            De.addTo(k, 1).pos({
                x: e.stageX,
                y: e.stageY,
                reg: !0
            })),
            ge.visible = !1,
            l.cursor = "none"
        }
        function Re(e) {
            var t;
            if (t = frame.ctrlKey && "corner" == e.target.controlType ? Ce < xe ? (e.target.x - Te) / (ve - Te) : (e.target.y - Ae) / (ye - Ae) : Ce < xe ? (e.target.x - e.target.op.x) / (ve - e.target.op.x) : (e.target.y - e.target.op.y) / (ye - e.target.op.y),
            "corner" == e.target.controlType ? (l.scaleX = t * startSX,
            l.scaleY = t * startSY) : (l.scaleX = "e-resize" == e.target.cu ? t * startSX : startSX,
            l.scaleY = "n-resize" == e.target.cu ? t * startSY : startSY),
            he(),
            Le.x = e.stageX,
            Le.y = e.stageY,
            z && (De.x = e.stageX,
            De.y = e.stageY),
            !frame.ctrlKey || "side" == e.target.controlType) {
                var o = e.target.op.x
                  , n = e.target.op.y;
                l.x -= (o - ke.x) * kt.sign(W) * kt.sign(l.scaleX),
                l.y -= (n - ke.y) * kt.sign(H) * kt.sign(l.scaleY)
            }
            he()
        }
        function _e(e, t) {
            ue();
            var o = e ? e.target.controlType : "move";
            t && (o = "reset"),
            z && De.removeFrom(k);
            var n = !1;
            Ie = null,
            "move" == o ? (l.x == Ge.x && l.y == Ge.y || ((Ie = new createjs.Event("transformed")).transformType = "move"),
            n = ge.hitTestPoint(e.stageX, e.stageY)) : "corner" == o ? (l.scaleX == Ge.scaleX && l.scaleY == Ge.scaleY || ((Ie = new createjs.Event("transformed")).transformType = "size"),
            n = N.hitTestPoint(e.stageX, e.stageY)) : "side" == o ? (l.scaleX == Ge.scaleX && l.scaleY == Ge.scaleY || ((Ie = new createjs.Event("transformed")).transformType = "stretch"),
            n = G.hitTestPoint(e.stageX, e.stageY) || U.hitTestPoint(e.stageX, e.stageY)) : "rotate" == o ? (l.rotation != Ge.rotation && ((Ie = new createjs.Event("transformed")).transformType = "rotate"),
            n = K.hitTestPoint(e.stageX, e.stageY)) : "reg" == o ? l.regX == Ge.regX && l.regY == Ge.regY || ((Ie = new createjs.Event("transformed")).transformType = "reg") : (Ie = new createjs.Event("transformed")).transformType = "reset" == o ? "reset" : "unknown",
            n || (Le.removeFrom(k),
            frame.canvas.style.cursor = "default",
            l.cursor = Ye),
            k.update(),
            Ie && l.dispatchEvent(Ie)
        }
        function We(e) {
            Oe || (Le.stage ? k.setChildIndex(Le, k.getChildIndex(R)) : Le.addTo(k, k.getChildIndex(R) + 1),
            De.addTo(k, 1),
            Le.x = e.stageX,
            Le.y = e.stageY,
            De.x = e.stageX,
            De.y = e.stageY,
            q.rotation = l.rotation * kt.sign(W * H) * kt.sign(l.scaleX * l.scaleY) + J[e.target.cu] + ee,
            "side" != e.target.controlType && W * H < 0 && (q.rotation += 90),
            k.update(),
            Ee && k.off("stagemousemove", Ee),
            Ee = k.on("stagemousemove", function(e) {
                Le.x = e.stageX,
                Le.y = e.stageY,
                k.update()
            }))
        }
        function He(e) {
            k.off("stagemousemove", Ee),
            Oe || (l.cursor = Ye,
            Le.removeFrom(k),
            De.removeFrom(k),
            k.update())
        }
        function Ve() {
            if (s) {
                var e = L.numChildren - 1;
                "Keyboard" == L.getChildAt(e).type && e--,
                L.setChildIndex(l, e),
                Fe()
            }
        }
        function Fe() {
            if (L == k)
                if (R.stage) {
                    var e = k.getChildIndex(l);
                    k.setChildIndex(R, e)
                } else
                    k.addChildAt(R, k.getChildIndex(l) + 1);
            else {
                for (var t = L; t.parent != k; )
                    t = t.parent;
                R.stage ? k.setChildIndex(R, k.getChildIndex(t) + 1) : k.addChildAt(R, k.getChildIndex(t) + 1)
            }
        }
        N.on("mousedown", Xe),
        N.on("pressmove", Re),
        N.on("pressup", _e),
        G.on("mousedown", Xe),
        G.on("pressmove", Re),
        G.on("pressup", _e),
        U.on("mousedown", Xe),
        U.on("pressmove", Re),
        U.on("pressup", _e),
        K.on("mousedown", Xe),
        K.on("pressmove", function(e) {
            var t = 180 * Math.atan2(e.stageY - Se, e.stageX - Be) / Math.PI;
            frame.shiftKey ? l.rot(45 * Math.round((be + (t - we) * kt.sign(W) * kt.sign(l.scaleX)) / 45)) : l.rot(be + (t - we) * kt.sign(W) * kt.sign(l.scaleX));
            he(),
            Le.x = e.stageX,
            Le.y = e.stageY,
            z && (q.rotation = l.rotation * kt.sign(W * H) * kt.sign(l.scaleX * l.scaleY) + J[e.target.cu] + ee,
            "side" != e.target.controlType && W * H < 0 && (q.rotation += 90),
            De.x = e.stageX,
            De.y = e.stageY);
            he()
        }),
        K.on("pressup", _e),
        S.drag(),
        S.on("mousedown", Ve),
        S.on("pressup", function(e) {
            if (!frame.ctrlKey) {
                for (var t = 0; t < Y.length; t++)
                    if (kt.dist(S.x, S.y, Y[t].x, Y[t].y) < b) {
                        S.x = Y[t].x,
                        S.y = Y[t].y;
                        break
                    }
                kt.dist(S.x, S.y, pMid.x, pMid.y) < b && (S.x = pMid.x,
                S.y = pMid.y)
            }
            var o = l.rotation
              , n = l.globalToLocal(S.x, S.y)
              , r = L.globalToLocal(S.x, S.y);
            l.reg(n.x, n.y),
            l.rotation = 0,
            l.x = l.x + r.x - l.x,
            l.y = l.y + r.y - l.y,
            l.rotation = o,
            he(),
            pe(),
            _e(e),
            k.update()
        });
        var Ne = !0;
        O = z ? "none" : "move",
        ge.drag({
            overCursor: O,
            dragCursor: O,
            onTop: !1
        }),
        ge.controlType = "move",
        z && (ge.on("mouseover", function(e) {
            if (Oe || !z || !Ne)
                return;
            Z.addTo(R).pos({
                x: e.stageX,
                y: e.stageY,
                reg: !0
            }),
            k.update(),
            Me && k.off("stagemousemove", Me);
            Me = k.on("stagemousemove", function(e) {
                Z.x = e.stageX,
                Z.y = e.stageY,
                k.update()
            })
        }),
        ge.on("mouseout", function() {
            if (k.off("stagemousemove", Me),
            Oe)
                return;
            Z.removeFrom(R),
            k.update()
        })),
        ge.on("mousedown", Ve),
        ge.on("pressmove", function() {
            var e = L.globalToLocal(ge.x, ge.y);
            l.x = e.x,
            l.y = e.y,
            he()
        }),
        ge.on("pressup", _e);
        var Ge, Ue = k.on("stagemouseup", function() {
            Oe = !1,
            ge.mouseEnabled = !0,
            Ne || l.x == Ge.x && l.y == Ge.y || ((Ie = new createjs.Event("transformed")).transformType = "move",
            l.dispatchEvent(Ie)),
            Ne = !0,
            ge.visible = !0,
            je && !frame.ctrlKey && 1 < w && (l.rotation = Math.round(l.rotation / w) * w,
            he()),
            pe(),
            ge.mouseEnabled = !0,
            je = !1,
            k.update()
        });
        function Ke() {
            Ge = {
                x: l.x,
                y: l.y,
                rotation: l.rotation,
                regX: l.regX,
                regY: l.regY,
                scaleX: l.scaleX,
                scaleY: l.scaleY
            }
        }
        Ke();
        var Ze, qe = l.on("mousedown", Ke);
        R.on("mousedown", Ke);
        R.addChild(B),
        e && R.addChild(ge),
        n && R.addChild(N),
        t && R.addChild(G),
        o && R.addChild(U),
        r && R.addChild(K),
        R.addChild(S),
        e && (l.drag({
            overCursor: "pointer",
            dragCursor: "pointer",
            onTop: !1,
            removeTweens: !1
        }),
        Ze = l.on("pressmove", function() {
            he(),
            pe(),
            ue()
        }));
        var Qe = i;
        return l.transformControls = {
            visible: a,
            show: function() {
                return s ? Ve() : Fe(),
                l.toggled = !0,
                l.transformControls.visible = !0,
                k.update(),
                l
            },
            hide: function() {
                return k.removeChild(R),
                l.toggled = !1,
                l.transformControls.visible = !1,
                z && (Ee && k.off("stagemousemove", Ee),
                Me && k.off("stagemousemove", Me),
                Oe = !1,
                Le.removeFrom(k),
                De.removeFrom(k)),
                e || (l.cursor = Ye),
                k.update(),
                l
            },
            remove: function() {
                l.transformControls.hide(),
                toggle = !1,
                e && (l.noDrag(),
                l.off("pressmove", Ze))
            },
            add: function() {
                l.transformControls.show(),
                toggle = Qe,
                e && (l.drag({
                    overCursor: "pointer",
                    dragCursor: "pointer",
                    onTop: !1,
                    removeTweens: !1
                }),
                Ze = l.on("pressmove", Ze))
            },
            allowToggleOn: function() {
                toggle = Qe = !0,
                fe = R.on("mousedown", fe),
                me = l.on("mousedown", me),
                Pe = k.on("stagemousedown", Pe)
            },
            allowToggleOff: function() {
                toggle = Qe = !1,
                R.off("mousedown", fe),
                l.off("mousedown", me),
                k.off("stagemousedown", Pe)
            },
            disable: function() {
                R.mouseChildren = !1,
                R.mouseEnabled = !1,
                e && (l.noDrag(),
                l.off("pressmove", Ze))
            },
            enable: function() {
                R.mouseChildren = !0,
                R.mouseEnabled = !0,
                e && (l.drag({
                    overCursor: "pointer",
                    dragCursor: "pointer",
                    onTop: !1,
                    removeTweens: !1
                }),
                Ze = l.on("pressmove", Ze))
            },
            recordData: function(e) {
                var t = {
                    type: l.type,
                    index: L.getChildIndex(l),
                    x: l.x,
                    y: l.y,
                    scaleX: l.scaleX,
                    scaleY: l.scaleY,
                    rotation: l.rotation,
                    skewX: l.skewX,
                    skewY: l.skewY,
                    regX: l.regX,
                    regY: l.regY,
                    controls: l.transformControls.visible
                };
                return e ? JSON.stringify(t) : t
            },
            setData: function(e, t) {
                if (!zot(e)) {
                    t && (e = JSON.parse(e));
                    var o = e.controls;
                    delete e.controls;
                    var n = e.index;
                    for (var r in zot(n) && (n = 0),
                    delete e.index,
                    e)
                        l[r] = e[r];
                    return he(),
                    pe(),
                    ue(),
                    L.setChildIndex(l, n),
                    o ? l.transformControls.show() : l.transformControls.hide(),
                    l
                }
            },
            resize: function() {
                return L = l.parent,
                he(),
                pe(),
                ue(),
                a && l.transformControls.show(),
                l
            },
            dispose: function() {
                l.transformControls.hide(),
                toggle = !1,
                e && (l.noDrag(),
                l.off("pressmove", Ze)),
                R.removeAllEventListeners(),
                me && l.off("mousedown", me),
                fe && l.off("mousedown", fe),
                Pe && k.off("stagemousedown", Pe),
                Ee && k.off("stagemousemove", Ee),
                Me && k.off("stagemousemove", Me),
                Ue && k.off("stagemouseup", Ue),
                qe && l.off("mousedown", qe),
                Ze && l.off("pressmove", Ze),
                R = Le = De = null,
                l.transformControls = null
            },
            scaleControls: N,
            stretchXControls: G,
            stretchYControls: U,
            rotateControls: K
        },
        l.toggle = function(e) {
            return !0 === e ? l.transformControls.show() : !1 === e ? l.transformControls.hide() : l.transformControls.visible ? l.transformControls.hide() : l.transformControls.show(),
            l
        }
        ,
        a && l.transformControls.show(),
        l
    }
    ,
    kt.gesture = function(C, e, t, s, o, k, T, c, n, d, u, A, r, i, a, l) {
        var h;
        if (h = zob(kt.gesture, arguments, "obj, move, scale, rotate, boundary, minScale, maxScale, snapRotate, localBounds, slide, slideEffect, regControl, onTop, surround, circularBounds, rect"))
            return h;
        if (z_d("34.5"),
        !zot(C) && C.on) {
            var g, p;
            if (zot(e) && (e = !0),
            zot(t) && (t = !0),
            zot(s) && (s = !0),
            zot(n) && (n = !1),
            zot(c) && (c = 1),
            zot(d) && (d = !1),
            zot(u) && (u = 5),
            zot(A) && (A = !1),
            zot(r) && (r = !0),
            zot(i) && (i = !1),
            i && s && (i = l = null,
            zon && zog("ZIM Gesture() - does not support surround when rotate is true")),
            zot(a) && (a = !1),
            zot(o) && !zot(l) && (o = l),
            zot(C.zimMaskDynamic) || C.zimMaskApply(),
            !C.zimTouch) {
                var B, S, P, E, M, I, j, f, O = new kt.Damp(C.scaleX,.05), Y = new kt.Damp(C.scaleY,.05), L = C.scaleX / C.scaleY;
                if (C.zimTouch = {
                    move: e,
                    scale: t,
                    rotate: s,
                    pointers: {},
                    checkBounds: function(e, t) {
                        if (C.zimTouch.boundary) {
                            var o = C.zimTouch.boundary
                              , n = C.parent.localToLocal(e, t, C.parent);
                            i ? (e = Math.min(o.x, Math.max(o.x + o.width, n.x)),
                            t = Math.min(o.y, Math.max(o.y + o.height, n.y))) : (e = Math.max(o.x, Math.min(o.x + o.width, n.x)),
                            t = Math.max(o.y, Math.min(o.y + o.height, n.y))),
                            e = (n = C.parent.globalToLocal(e, t)).x,
                            t = n.y
                        }
                        return {
                            x: e,
                            y: t
                        }
                    }
                },
                o) {
                    C.zimTouch.boundary = o,
                    n && (C.zimTouch.boundary = kt.boundsToGlobal(C.parent, o)),
                    C.zimTouch.boundaryStartX = C.zimTouch.boundary.x,
                    C.zimTouch.boundaryStartY = C.zimTouch.boundary.y,
                    C.zimTouch.boundaryStartW = C.zimTouch.boundary.width,
                    C.zimTouch.boundaryStartH = C.zimTouch.boundary.height;
                    var m = C.zimTouch.checkBounds(C.x, C.y);
                    C.x = m.x,
                    C.y = m.y
                }
                d && (slideSlice = 10,
                slideTotal = 5,
                p = 0,
                g = [],
                C.zimTouch.slideInterval = kt.interval(slideSlice, function() {
                    g[p++ % slideTotal] = [C.x, C.y]
                }),
                C.zimTouch.slideInterval.pause(),
                C.animate({
                    x: C.x,
                    y: C.y
                }, 10, "quadOut")),
                C.zimTouch.mousedown = C.on("mousedown", function(e) {
                    if (zot(f) ? f = 1 : f++,
                    r) {
                        var t = C.parent.numChildren - 1;
                        "Keyboard" == C.parent.getChildAt(t).type && t--,
                        C.parent.setChildIndex(C, t),
                        C.ZIMoutlineShape && C.outline()
                    }
                    A || (j = null,
                    S = C.scaleX,
                    P = C.scaleY,
                    E = C.rotation,
                    M = C.regX,
                    I = C.regY,
                    C.reg(0, 0),
                    B = C.getMatrix(),
                    C.regX = M,
                    C.regY = I);
                    var o = "id" + Math.abs(e.pointerID + 1)
                      , n = C.parent.globalToLocal(e.stageX, e.stageY);
                    C.zimTouch.pointers[o] = {
                        startX: n.x,
                        startY: n.y,
                        x: n.x,
                        y: n.y
                    },
                    (C.zimTouch.move || C.zimTouch.rotate) && (C.zimTouch.total = 0,
                    kt.loop(C.zimTouch.pointers, function(e) {
                        C.zimTouch.total++
                    })),
                    d && 1 == C.zimTouch.total && C.zimTouch.slideInterval.pause(!1),
                    z()
                }),
                C.zimTouch.pressmove = C.on("pressmove", function(e) {
                    var t = "id" + Math.abs(e.pointerID + 1)
                      , o = C.parent.globalToLocal(e.stageX, e.stageY);
                    C.zimTouch.pointers[t].x = o.x,
                    C.zimTouch.pointers[t].y = o.y;
                    var n, r, i = 0, a = 0, l = 0, s = 0;
                    kt.loop(C.zimTouch.pointers, function(e, t) {
                        i += t.x - t.startX,
                        a += t.y - t.startY,
                        l += t.x,
                        s += t.y
                    }),
                    n = i / C.zimTouch.total,
                    r = a / C.zimTouch.total,
                    i = C.zimTouch.startX + n,
                    a = C.zimTouch.startY + r,
                    l /= C.zimTouch.total,
                    s /= C.zimTouch.total;
                    var c = {
                        x: C.x,
                        y: C.y,
                        scaleX: C.scaleX,
                        scaleY: C.scaleY,
                        rotation: C.rotation
                    };
                    if (C.zimTouch.move) {
                        var d = C.zimTouch.checkBounds(i, a);
                        c.x = d.x,
                        c.y = d.y
                    }
                    if (2 == C.zimTouch.pair.length) {
                        var u = C.zimTouch.pair[0]
                          , h = C.zimTouch.pair[1];
                        if (C.zimTouch.scale) {
                            var g = Math.sqrt(Math.pow(h.startX - u.startX, 2) + Math.pow(h.startY - u.startY, 2))
                              , p = Math.sqrt(Math.pow(h.x - u.x, 2) + Math.pow(h.y - u.y, 2))
                              , f = C.zimTouch.startSX + (p / g - 1)
                              , m = C.zimTouch.startSY + (p / g - 1);
                            c.scaleX = f,
                            c.scaleY = m,
                            c.scaleX = O.convert(f),
                            c.scaleY = Y.convert(m);
                            var z = !zot(k) && Math.min(f, m) < k
                              , v = !zot(T) && Math.max(f, m) > T;
                            (z || v) && (z ? 1 < L ? (c.scaleY = k,
                            c.scaleX = k * L) : (c.scaleX = k,
                            c.scaleY = k / L) : v && (1 < L ? (c.scaleX = T,
                            c.scaleY = T / L) : (c.scaleY = T,
                            c.scaleX = T * L)),
                            O.immediate(c.scaleX),
                            Y.immediate(c.scaleY))
                        }
                        if (C.zimTouch.rotate) {
                            var y = Math.atan2(u.startY - h.startY, u.startX - h.startX) * (180 / Math.PI)
                              , b = Math.atan2(u.y - h.y, u.x - h.x) * (180 / Math.PI) - y;
                            c.rotation = C.zimTouch.startR + b
                        }
                        if (A)
                            C.scaleX = c.scaleX,
                            C.scaleY = c.scaleY,
                            C.rotation = c.rotation,
                            C.zimTouch.move && (C.x = c.x,
                            C.y = c.y);
                        else {
                            C.reg(0, 0);
                            var w = C.parent.localToGlobal(l, s);
                            l = w.x,
                            s = w.y;
                            var x = zot(j) ? C.globalToLocal(l, s) : C.globalToLocal(j.x, j.y);
                            B.clone().translate(x.x, x.y).rotate(c.rotation - E).scale(c.scaleX / S, c.scaleY / P).translate(-x.x, -x.y).decompose(C),
                            C.zimTouch.move && (C.x += n,
                            C.y += r),
                            j = C.localToGlobal(x.x, x.y),
                            C.reg(M, I)
                        }
                        C.zimTouch.scale && C.dispatchEvent("scale"),
                        C.zimTouch.rotate && C.dispatchEvent("rotate"),
                        C.zimTouch.move && C.dispatchEvent("move")
                    } else
                        C.x = c.x,
                        C.y = c.y,
                        C.zimTouch.move && C.dispatchEvent("move");
                    "Tag" != C.type && "TextArea" != C.type && "Loader" != C.type || C.resize(),
                    C.ZIMoutlineShape && C.outline(),
                    C.getStage && C.stage && C.stage.update()
                });
                function z() {
                    C.zimTouch.pair = [],
                    kt.loop(C.zimTouch.pointers, function(e, t, o) {
                        t.startX = t.x,
                        t.startY = t.y,
                        o <= 1 && C.zimTouch.pair.push(t)
                    }),
                    C.zimTouch.startX = C.x,
                    C.zimTouch.startY = C.y,
                    C.zimTouch.startSX = C.scaleX,
                    C.zimTouch.startSY = C.scaleY,
                    C.zimTouch.startR = C.rotation
                }
                function v() {
                    var e = C.localToGlobal(C.regX, C.regY);
                    if (a)
                        var t = C.parent.localToGlobal(C.x - C.width / 2, C.y - C.height / 2)
                          , o = C.parent.localToGlobal(C.x + C.width / 2, C.y + C.height / 2)
                          , n = {
                            x: t.x,
                            y: t.y,
                            width: o.x - t.x,
                            height: o.y - t.y
                        };
                    else
                        n = C.boundsToGlobal();
                    var r = {
                        x: C.zimTouch.boundaryStartX + e.x - n.x,
                        y: C.zimTouch.boundaryStartY + e.y - n.y,
                        width: C.zimTouch.boundaryStartW - n.width,
                        height: C.zimTouch.boundaryStartH - n.height
                    };
                    C.gestureBoundary(r, !1)
                }
                C.on("mousedown", function() {
                    var e = 1;
                    C.stage.on("stagemousedown", function() {
                        e++
                    }),
                    C.stage.on("stagemouseup", function() {
                        0 == --e && setTimeout(function() {
                            C.zimTouch && (C.zimTouch.total = 0),
                            C.zimTouch && (C.zimTouch.pointers = {}),
                            f = null
                        }, 50)
                    })
                }, null, !0),
                C.zimTouch.pressup = C.on("pressup", function(e) {
                    var t = "id" + Math.abs(e.pointerID + 1);
                    if (delete C.zimTouch.pointers[t],
                    (C.zimTouch.move || C.zimTouch.rotate) && C.zimTouch.total--,
                    s && !zot(c) && 0 == C.zimTouch.total && (0 < c ? C.rotation = Math.round(C.rotation / c) * c : 0 == c && (C.rotation = Math.round(C.rotation))),
                    d && 0 == C.zimTouch.total && 1 == f) {
                        C.zimTouch.slideInterval.pause();
                        var o = g[(p + 1) % g.length]
                          , n = g[p % g.length]
                          , r = C.x + (o[0] - n[0]) * u
                          , i = C.y + (o[1] - n[1]) * u
                          , a = C.zimTouch.checkBounds(r, i)
                          , l = slideTotal * slideSlice * u * Math.min((C.x - a.x) / (C.x - r) || 1, (C.y - a.y) / (C.y - i) || 1);
                        C.animate({
                            x: a.x,
                            y: a.y
                        }, l, "quadOut", function() {
                            C.dispatchEvent("slidestop")
                        })
                    }
                    0 == C.zimTouch.total && (f = null),
                    C.getStage && C.stage && C.stage.update(),
                    z()
                }),
                o && (v(),
                C.on("move", v))
            }
            return C
        }
    }
    ,
    kt.noGesture = function(e, t, o, n) {
        var r;
        return (r = zob(kt.noGesture, arguments, "obj, move, scale, rotate")) ? r : (z_d("34.6"),
        !zot(e) && e.on && e.zimTouch ? (zot(t) && (t = !0),
        zot(o) && (o = !0),
        zot(n) && (n = !0),
        e.zimTouch.move = !t,
        e.zimTouch.scale = !o,
        e.zimTouch.rotate = !n,
        e.zimTouch.move || e.zimTouch.scale || e.zimTouch.rotate || (e.off("mousedown", e.zimTouch.mousedown),
        e.off("pressmove", e.zimTouch.pressmove),
        e.off("pressup", e.zimTouch.pressup),
        delete e.zimTouch),
        e) : void 0)
    }
    ,
    kt.gestureBoundary = function(e, t, o) {
        if (z_d("34.7"),
        !zot(e) && e.on && !zot(t) && e.zimTouch) {
            e.zimTouch.localBounds && e.parent ? e.zimTouch.boundary = kt.boundsToGlobal(e.parent, t) : e.zimTouch.boundary = t,
            zot(o) && (o = !0),
            o && (e.zimTouch.boundaryStartX = t.x,
            e.zimTouch.boundaryStartY = t.y,
            e.zimTouch.boundaryStartW = t.width,
            e.zimTouch.boundaryStartH = t.height);
            var n = e.zimTouch.checkBounds(e.x, e.y);
            return e.x = n.x,
            e.y = n.y,
            e
        }
    }
    ,
    kt.hitTestPoint = function(e, t, o, n) {
        if (z_d("35"),
        !e.stage)
            return !1;
        if (!zot(e) && e.globalToLocal) {
            zot(n) && (n = !0);
            var r = e.globalToLocal(t, o)
              , i = e.getBounds();
            if (n && i) {
                if (r.x > i.x + i.width || r.x < i.x)
                    return !1;
                if (r.y > i.y + i.height || r.y < i.y)
                    return !1
            }
            return e.hitTest(r.x, r.y)
        }
    }
    ,
    kt.hitTestReg = function(e, t, o) {
        if (z_d("36"),
        !e.stage || !t.stage)
            return !1;
        if (!zot(e) && !zot(t) && e.localToLocal && t.localToLocal) {
            zot(o) && (o = !0);
            var n = t.localToLocal(t.regX, t.regY, e)
              , r = e.getBounds();
            if (o && r) {
                if (n.x > r.x + r.width || n.x < r.x)
                    return !1;
                if (n.y > r.y + r.height || n.y < r.y)
                    return !1
            }
            return e.hitTest(n.x, n.y)
        }
    }
    ,
    kt.hitTestRect = function(e, t, o, n) {
        if (z_d("37"),
        !e.stage || !t.stage)
            return !1;
        if (!zot(e) && !zot(t) && e.hitTest && t.getBounds) {
            zot(o) && (o = 0),
            zot(n) && (n = !0);
            var r = t.getBounds();
            if (r) {
                var i = e.getBounds();
                if (n && i && !kt.hitTestBounds(e, t))
                    return !1;
                var a, l, s = r.x + r.width / 2, c = r.y + r.height / 2, d = t.localToLocal(s, c, e);
                if (e.hitTest(d.x, d.y))
                    return !0;
                for (var u = 0; u <= o; u++) {
                    if (a = r.width * (u + 1) / (o + 1),
                    l = r.height * (u + 1) / (o + 1),
                    d = t.localToLocal(r.x + a, r.y, e),
                    e.hitTest(d.x, d.y))
                        return !0;
                    if (d = t.localToLocal(r.x + r.width, r.y + l, e),
                    e.hitTest(d.x, d.y))
                        return !0;
                    if (d = t.localToLocal(r.x + r.width - a, r.y + r.height, e),
                    e.hitTest(d.x, d.y))
                        return !0;
                    if (d = t.localToLocal(r.x, r.y + r.height - l, e),
                    e.hitTest(d.x, d.y))
                        return !0
                }
            } else
                zog("zim methods - hitTestRect():\n please setBounds() on param b object")
        }
    }
    ,
    kt.hitTestCircle = function(e, t, o, n) {
        if (z_d("38"),
        e.stage && t.stage && !zot(e) && !zot(t) && e.hitTest && t.getBounds) {
            zot(o) && (o = 8),
            zot(n) && (n = !0);
            var r = t.getBounds();
            if (r) {
                var i = e.getBounds();
                if (n && i && !kt.hitTestBounds(e, t))
                    return !1;
                var a = r.x + r.width / 2
                  , l = r.y + r.height / 2
                  , s = t.localToLocal(a, l, e);
                if (e.hitTest(s.x, s.y))
                    return !0;
                for (var c, d, u, h = (r.width + r.height) / 2 / 2, g = 0; g < o; g++)
                    if (c = g / o * 2 * Math.PI,
                    d = a + h * Math.cos(c),
                    u = l + h * Math.sin(c),
                    s = t.localToLocal(d, u, e),
                    e.hitTest(s.x, s.y))
                        return !0
            } else
                zog("zim methods - hitTestCircle():\n please setBounds() on param b object")
        }
    }
    ,
    kt.hitTestCircles = function(e, t, o) {
        if (z_d("38.5"),
        e.stage && t.stage && !zot(e) && !zot(t) && e.hitTest && e.getBounds && t.getBounds) {
            var n = e.getBounds()
              , r = t.getBounds();
            if (n && r) {
                zot(o) && (o = 0);
                var i = e.localToGlobal(n.x + n.width / 2, n.y + n.height / 2)
                  , a = t.localToGlobal(r.x + r.width / 2, r.y + r.height / 2)
                  , l = e.getConcatenatedMatrix()
                  , s = t.getConcatenatedMatrix();
                scale1X = Math.sqrt(l.a * l.a + l.c * l.c),
                scale1Y = Math.sqrt(l.b * l.b + l.d * l.d),
                scale2X = Math.sqrt(s.a * s.a + s.c * s.c),
                scale2Y = Math.sqrt(s.b * s.b + s.d * s.d);
                var c = Math.sqrt(Math.abs(Math.pow(i.x - a.x, 2) + Math.pow(i.y - a.y, 2)));
                return n.width * Math.max(scale1X, scale1Y) / 2 + r.width * Math.max(scale2X, scale2Y) / 2 >= c - o
            }
            zog("zim methods - hitTestCircles():\n please setBounds() on both objects")
        }
    }
    ,
    kt.hitTestBounds = function(e, t, o, n) {
        if (z_d("39"),
        e.stage && t.stage && !zot(e) && !zot(t) && e.getBounds && t.getBounds) {
            var r = !1;
            n && n.graphics && (r = !0);
            var i = e.getBounds()
              , a = t.getBounds();
            if (i && a) {
                zot(o) && (o = 0);
                var l, s, c = kt.boundsToGlobal(e), d = kt.boundsToGlobal(t);
                if (r) {
                    var u = n.graphics;
                    u.c(),
                    u.ss(1).s("blue"),
                    u.r(c.x, c.y, c.width, c.height),
                    u.s("green"),
                    u.r(d.x, d.y, d.width, d.height),
                    n.stage.update()
                }
                return s = d,
                !((l = c).x >= s.x + s.width + o || l.x + l.width + o <= s.x || l.y >= s.y + s.height + o || l.y + l.height + o <= s.y)
            }
            zog("zim methods - hitTestBounds():\n please setBounds() on both objects")
        }
    }
    ,
    kt.hitTestGrid = function(e, t, o, n, r, i, a, l, s, c, d, u, h) {
        if (z_d("41"),
        !e.stage)
            return !1;
        if (!zot(e) && !u) {
            var g = e.globalToLocal(i, a);
            i = g.x,
            a = g.y
        }
        zot(l) && (l = 0),
        zot(s) && (s = 0),
        zot(c) && (c = 0),
        zot(d) && (d = 0);
        var p = t / n
          , f = o / r
          , m = Math.min(n - 1, Math.max(0, Math.floor((i - l) / p)))
          , z = Math.min(r - 1, Math.max(0, Math.floor((a - s) / f)));
        if (!(p * (m + 1) - c < i - l || i - l < p * m || f * (z + 1) - d < a - s || a - s < f * z)) {
            var v = z * n + m;
            return zot(h) || "index" == h ? v : "col" == h ? m : "row" == h ? z : "array" == h ? [v, m, z] : void 0
        }
    }
    ,
    kt.animate = function(s, e, n, c, r, i, a, t, o, l, d, u, h, g, p, f, m, z, v, y, b, w, x, C, k, T, A, B, S, P, E, M, I, j, O, Y, L, D, X, R, _) {
        var W;
        if (W = zob(kt.animate, arguments, "target, props, time, ease, call, params, wait, waitedCall, waitedParams, loop, loopCount, loopWait, loopCall, loopParams, loopWaitCall, loopWaitParams, rewind, rewindWait, rewindCall, rewindParams, rewindWaitCall, rewindWaitParams, sequence, sequenceCall, sequenceParams, sequenceReverse, ticker, cjsProps, css, protect, override, from, set, id, events, sequenceTarget, dynamic, drag, clamp, startPaused, obj"))
            return W;
        if (z_d("45"),
        0 == kt.ANIMATE || !window.zns && !ANIMATE)
            return s;
        if (zot(e) && !zot(_) && (e = _),
        zot(_ = e))
            return zon && zog("animate() - need props"),
            s;
        s = zik(s),
        n = zik(n),
        c = zik(c),
        a = zik(a),
        d = zik(d),
        u = zik(u),
        m = zik(m),
        z = zik(z),
        T = zik(T),
        M = zik(M),
        I = zik(I);
        var H = {
            override: !zot(s) && !zot(s.zimX) && !zot(_.x) || !zot(s) && !zot(s.zimY) && !zot(_.y)
        };
        if (zot(l) || (H.loop = l),
        zot(d) || (H.count = d),
        zot(u) || (H.loopWait = u),
        zot(h) || (H.loopCall = h),
        zot(f) || (H.loopWaitParams = f),
        zot(p) || (H.loopWaitCall = p),
        zot(g) || (H.loopParams = g),
        zot(m) || (H.rewind = m),
        zot(z) || (H.rewindWait = z),
        zot(v) || (H.rewindCall = v),
        zot(y) || (H.rewindParams = y),
        zot(b) || (H.rewindWaitCall = b),
        zot(w) || (H.rewindWaitParams = w),
        zot(e) || (H = kt.merge(H, B)),
        B = H,
        zot(x) && (x = 0),
        0 < x && s.addChild) {
            for (var V = [], F = 0; F < s.numChildren; F++)
                V.push(s.getChildAt(F));
            Y = s,
            s = V
        }
        if (s instanceof Array) {
            T && s.reverse();
            var N = 0;
            for (F = 0; F < s.length; F++)
                !function() {
                    var e, o = F;
                    if (M)
                        for (var t in s[o].zimObj = {},
                        _)
                            e = zik(_[t]),
                            s[o].zimObj[t] = s[o][t],
                            s[o][t] = e;
                    else
                        for (var t in s[o].zimObj = {},
                        _)
                            s[o].zimObj[t] = zik(_[t]);
                    setTimeout(function() {
                        var e = s[N];
                        if (N++,
                        kt.animate(e, e.zimObj, n, c, r, i, a, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, A, kt.copy(B), S, P, E, null, I, j, O, Y, L, D, X, R, _),
                        o == s.length - 1 && C) {
                            var t = (n || 1e3) + (a || 0);
                            B && B.rewind && (t += (n || 1e3) + (B.rewindWait ? B.rewindWait : 0)),
                            B && B.loop && B.loopWait && (t += B.loopWait),
                            setTimeout(function() {
                                C(k)
                            }, t)
                        }
                    }, x * F)
                }();
            return Y
        }
        var G, U, K, Z = n;
        if (zot(Z) && (Z = 1e3),
        zot(c) && (c = "quadInOut"),
        zot(a) && (a = 0),
        zot(B) && (B = {
            override: !zot(s.zimX) && !zot(_.x) || !zot(s.zimY) && !zot(_.y)
        }),
        zot(i) && (i = s),
        zot(A) && (A = !0),
        zot(S) && (S = !1),
        zot(P) && (P = !1),
        zot(M) && (M = !1),
        zot(I) && (I = {}),
        I.scale && (I.scaleX = I.scaleY = I.scale,
        delete I.scale),
        zot(E) || (B.override = E),
        zot(D) && (D = !1),
        zot(R) && (R = !!D),
        zot(L) && (L = !1),
        zot(X) && (X = !0),
        _ instanceof Array) {
            var q, Q = 1;
            if (0 == _.length)
                return this;
            function J() {
                for (var e, t, o = a, n = 0, r = 0; r < _.length; r++)
                    if (!zot((e = _[r]).target)) {
                        zot(e.time) && (e.time = Z),
                        o += e.wait ? e.wait : 0,
                        t = e.time,
                        e.rewind && (t = 2 * t + (e.rewindWait ? e.rewindWait : 0)),
                        e.loop && (t *= e.loopCount,
                        t += (e.loopCount - 1) * (e.loopWait ? e.loopWait : 0));
                        var i = {
                            target: e.target,
                            obj: kt.copy(e.obj),
                            wait: n + o,
                            waitedCall: e.waitedCall,
                            waitedParams: e.waitedParams,
                            time: e.time,
                            ease: e.ease,
                            from: e.from,
                            rewind: e.rewind,
                            call: e.call,
                            params: e.params,
                            loop: e.loop,
                            loopCount: e.loopCount,
                            loopWait: e.loopWait,
                            loopCall: e.loopCall,
                            loopParams: e.loopParams,
                            loopWaitCall: e.loopWaitCall,
                            loopWaitParams: e.loopWaitParams,
                            rewind: e.rewind,
                            rewindWait: e.rewindWait,
                            rewindCall: e.rewindCall,
                            rewindParams: e.rewindParams,
                            rewindWaitCall: e.rewindWaitCall,
                            rewindWaitParams: e.rewindWaitParams,
                            set: kt.copy(e.masterSet),
                            override: !1,
                            id: j
                        };
                        r == _.length - 1 && $(i),
                        kt.animate(i),
                        n += o + t,
                        o = 0
                    }
            }
            function $(e) {
                B.loop && (!B.count || Q < B.count) ? e.call = function() {
                    function e() {
                        for (var e = 0; e < q.objects.length; e++)
                            q.objects[e].set && q.objects[e].set(q.values[e]);
                        B.loopWaitCall && "function" == typeof B.loopWaitCall && B.loopWaitCall(B.loopWaitParams),
                        J()
                    }
                    B.loopCall && "function" == typeof B.loopCall && B.loopCall(B.loopParams),
                    B.loopWait ? (zot(s.zimTweens) && (s.zimTweens = {}),
                    G = s.zimTweens[j] = s.zimTween = createjs.Tween.get(s, {
                        override: B.override
                    }).wait(B.loopWait, !0).call(e)) : e()
                }
                : e.call = function() {
                    r && "function" == typeof r && r(i),
                    yt(j)
                }
                ,
                Q++
            }
            return function() {
                var e = new kt.Dictionary;
                q = new kt.Dictionary;
                for (var t = 0; t < _.length; t++)
                    if (oe = _[t],
                    s || (s = oe.target),
                    zot(oe.target) && (oe.target = s),
                    zot(oe.ease) && (oe.ease = c),
                    !zot(oe.target)) {
                        if (zot(oe.props) && !zot(oe.obj) && (oe.props = oe.obj),
                        oe.obj = oe.props,
                        oe.loop && (zot(oe.loopCount) || oe.loopCount <= 0) && (oe.loopCount = 0,
                        _.splice(t + 1, _.length)),
                        zot(oe.obj.scale) || (oe.obj.scaleX = oe.obj.scaleY = oe.obj.scale,
                        delete oe.obj.scale),
                        oe.from) {
                            var o = e.at(oe.target);
                            if (o) {
                                if (oe.set) {
                                    var n = kt.copy(oe.obj)
                                      , r = kt.merge(o, oe.set);
                                    oe.obj = ht(oe.target, oe.obj, r),
                                    oe.set = kt.merge(oe.set, n)
                                } else
                                    oe.set = kt.copy(oe.obj),
                                    oe.obj = ht(oe.target, oe.obj, o);
                                oe.from = !1
                            } else
                                e.add(oe.target, ht(oe.target, oe.obj, oe.set))
                        }
                        var i = {};
                        for (var a in oe.obj)
                            i[a] = oe.set && oe.set[a] ? oe.set[a] : oe.target[a];
                        zot(q.at(oe.target)) && q.add(oe.target, {});
                        var l = kt.merge(q.at(oe.target), i);
                        q.remove(oe.target),
                        q.add(oe.target, l),
                        oe.masterSet = kt.copy(oe.set)
                    }
                zot(s.zimTweens) && (s.zimTweens = {})
            }(),
            ut(),
            J(),
            s
        }
        if (_ && (_.x && (s.zimX = !0),
        _.y && (s.zimY = !0)),
        !zot(s)) {
            var ee;
            if (S && (A = !1),
            zot(s.zimTweens) && (s.zimTweens = {}),
            !S)
                if (s.stage)
                    ee = s.stage;
                else {
                    if (!Tt)
                        return;
                    ee = Tt.stage
                }
            if (zot(_.scale) || (_.scaleX = _.scaleY = zik(_.scale),
            delete _.scale),
            s.setColorRange && !zot(_.color)) {
                var te = _.color;
                delete _.color,
                _.colorRange = 1,
                s.setColorRange(s.color, te),
                s.colorRange = 0
            }
            for (var oe in _) {
                if (!s.zimBusy)
                    break;
                s.zimBusy[oe] && delete _[oe]
            }
            if (!kt.isEmpty(_)) {
                s.paused = !1;
                var ne = s.mouseEnabled;
                (P || B.loop || B.rewind) && (s.mouseEnabled = !1,
                setTimeout(function() {
                    for (var e in s.zimBusy || (s.zimBusy = {}),
                    _)
                        s.zimBusy[e] = !0;
                    s.mouseEnabled = ne
                }, 70)),
                ut();
                var re, ie = ["extra", "zoom", "speed", "layer", "fade"], ae = {
                    zoom: "Pen" == s.type ? "size" : "scale",
                    speed: "percentSpeed",
                    layer: "layer",
                    fade: "alpha"
                };
                for (var F in _)
                    0 <= ie.indexOf(F) || (_[F] = zik(_[F]));
                for (F in ie.shift(),
                I)
                    I[F] = zik(I[F]);
                for (F in B)
                    "waitedCall" != F && "waitedParams" != F && "loopCall" != F && "rewindCall" != F && "loopWaitCall" != F && "rewindWaitCall" != F && (B[F] = zik(B[F]));
                for (F in _)
                    "string" == typeof _[F] && (_[F] = s[F] + Number(_[F].replace(/\s/g, "")));
                for (F in I)
                    "string" == typeof I[F] && (I[F] = s[F] + Number(I[F].replace(/\s/g, "")));
                if (s.getBounds && zot(s.percentCompleteCheck) && (s.percentCompleteCheck = !0,
                Object.defineProperty(s, "percentComplete", {
                    get: function() {
                        return this.zimTween && this.zimTween.duration ? this.zimTween.position / this.zimTween.duration * 100 : 0
                    },
                    set: function(e) {
                        this.zimTween && (this.zimTween.startPaused = !1,
                        L ? zot(this.zimTween.currentTime) || (this.zimTween.currentTime = this.zimTween.currentTime - this.zimTween.position + e * this.zimTween.duration / 100) : this.zimTween.setPosition(Math.round(e * this.zimTween.duration / 100)),
                        ft())
                    }
                })),
                !zot(_.path) && _.path.segmentPoints) {
                    "Pen" == s.type && (s.infinite = !0),
                    s.zimOnPath = !0,
                    zot(s.pathRatio) && (s.pathRatio = 0),
                    zot(_.orient) && (_.orient = _.path);
                    var le = !(re = _.path).lockControls;
                    delete _.path,
                    _.pathRatio = 1
                }
                M && (_ = ht(s, _, I, !0));
                s.percentComplete;
                var se, ce, de, ue, he, ge = !0, pe = !1, fe = !0, me = 0, ze = !0;
                if (zot(_.redirect) || (ze = _.redirect,
                delete _.redirect),
                re) {
                    var ve, ye;
                    le || (ve = kt.copy(re.segmentPoints),
                    ye = kt.copy(re.segmentRatios));
                    var be = re.getCurvePoint(s.pathRatio, ye, ve);
                    if (s.parent && be) {
                        var we = s.parent.globalToLocal(be.x, be.y);
                        s.x = we.x,
                        s.y = we.y
                    }
                    if (D) {
                        s.cursor = "pointer";
                        var xe, Ce = s.percentComplete;
                        R || s.paused;
                        function ke(e) {
                            var t = re.getAdjacentSegmentData(me)
                              , o = t[0]
                              , n = t[1]
                              , r = re.globalToLocal(e.stageX, e.stageY)
                              , i = closestPointAlongCurve(r, o, 20, !1, !0);
                            i /= 100;
                            var a = re.segmentRatios;
                            a.unshift(0);
                            for (var l = [], s = a.length - 2; 0 <= s; s--)
                                l.unshift(a[s + 1] - a[s]);
                            var c = 0;
                            for (s = 0; s < n.length; s++)
                                c += l[n[s]];
                            var d = i * c
                              , u = a[n[0]];
                            newPP = 1 < u + d ? u + d - 1 : u + d,
                            newPP *= 100,
                            m && (newPP /= 2,
                            G.position > G.duration / 2 && (newPP = 100 - newPP)),
                            Ce = constrain(newPP, 0, 99.5)
                        }
                        s.zimAnimateDragDown = s.on("mousedown", function(e) {
                            fe = !(ge = !1),
                            setTimeout(function() {
                                ge = !0
                            }, 50),
                            xe = G.forward,
                            pe = !0,
                            ke(e),
                            Te.immediate(Ce)
                        }),
                        s.zimAnimateDragPress = s.on("pressmove", ke),
                        s.zimAnimateDragUp = s.on("pressup", function() {
                            0 == s.paused && (pe = !1),
                            ge = !1,
                            setTimeout(function() {
                                ge = !0
                            }, 50),
                            !s.paused && m && xe != G.forward && ze && (s.percentComplete = 100 - s.percentComplete)
                        });
                        var Te = new kt.Damp(Ce,.2)
                          , Ae = 0;
                        s.zimDragAnimateTicker = kt.Ticker.add(function() {
                            if (D)
                                if (pe || fe && 1 == s.paused) {
                                    if ("Blob" == re.type && Math.abs(Ae - Ce) > (m ? 45 : 90)) {
                                        var e = Ce;
                                        Te.immediate(e)
                                    } else
                                        e = Te.convert(Ce);
                                    .1 < Math.abs(Ae - e) ? (s.percentComplete = e,
                                    Ae = e) : (s.percentComplete = Ae,
                                    fe = !1)
                                } else
                                    fe = !1
                        }, ee)
                    }
                }
                if (_.orient) {
                    if (!0 === _.orient) {
                        var Be = s.parent.localToGlobal(zot(_.x) ? s.x : _.x, zot(_.y) ? s.y : _.y);
                        _.orient = {
                            x: Be.x,
                            y: Be.y
                        }
                    }
                    se = _.orient,
                    delete _.orient;
                    var Se, Pe = s.rotation;
                    if (se != re)
                        Se = se.parent ? se.parent.localToLocal(se.x, se.y, s.parent) : s.parent.globalToLocal(se.x, se.y),
                        s.rotation = kt.angle(s.x, s.y, Se.x, Se.y) + Pe
                }
                _.flip && (ce = _.flip,
                delete _.flip,
                de = s.scaleX),
                _.flipVertical && (ue = _.flipVertical,
                delete _.flipVertical,
                he = s.scaleY);
                var Ee = s.x
                  , Me = s.y
                  , Ie = 0;
                if (B.loop && !zot(B.count)) {
                    Ie = B.count,
                    delete B.count;
                    Q = 1
                }
                var je, Oe = 0;
                B.loopWait && (Oe = B.loopWait,
                delete B.loopWait),
                B.loopCall && (je = B.loopCall,
                delete B.loopCall);
                var Ye, Le = s;
                B.loopParams && (Le = B.loopParams,
                delete B.loopParams),
                B.loopWaitCall && (Ye = B.loopWaitCall,
                delete B.loopWaitCall);
                var De, Xe = s;
                if (B.loopWaitParams && (Xe = B.loopWaitParams,
                delete B.loopWaitParams),
                B.rewind) {
                    if (c) {
                        var Re = c;
                        -1 == Re.indexOf("InOut") && (-1 != Re.indexOf("Out") ? Re = Re.replace("Out", "In") : -1 != Re.indexOf("In") && (Re = Re.replace("In", "Out")))
                    }
                    var _e, We, He = 0;
                    if (delete B.rewind,
                    B.rewindWait && (He = B.rewindWait,
                    delete B.rewindWait),
                    B.rewindCall) {
                        _e = B.rewindCall;
                        var Ve = B.rewindParams;
                        zot(Ve) && (Ve = s),
                        delete B.rewindCall,
                        delete B.rewindParams
                    }
                    function Fe() {
                        _e && "function" == typeof _e && _e(Ve)
                    }
                    if (B.rewindWaitCall) {
                        We = B.rewindWaitCall;
                        var Ne = B.rewindWaitParams;
                        zot(Ne) && (Ne = s),
                        delete B.rewindWaitCall,
                        delete B.rewindWaitParams
                    }
                    function Ge() {
                        We && "function" == typeof We && We(Ne)
                    }
                    function Ue() {
                        var e = zt();
                        s.set && !M && s.set(I),
                        G = s.zimTweens[j] = s.zimTween = createjs.Tween.get(s, B).to(_, Z, createjs.Ease[c]).call(Ge).wait(He, !0).call(Fe).to(e, Z, createjs.Ease[Re]).call(mt).wait(Oe, !0).call(gt),
                        vt()
                    }
                    0 < a ? G = s.zimTweens[j] = s.zimTween = createjs.Tween.get(s, {
                        override: B.override
                    }).wait(a, !0).call(function() {
                        t && "function" == typeof t && t(zot(o) ? s : o),
                        Ue()
                    }) : Ue()
                } else {
                    function Ke() {
                        s.set && !M && s.set(I),
                        G = s.zimTweens[j] = s.zimTween = createjs.Tween.get(s, B).to(_, Z, createjs.Ease[c]).call(mt).wait(Oe, !0).call(gt),
                        vt()
                    }
                    0 < a ? G = s.zimTweens[j] = s.zimTween = createjs.Tween.get(s, {
                        override: B.override
                    }).wait(a, !0).call(function() {
                        t && "function" == typeof t && t(zot(o) ? s : o),
                        Ke()
                    }) : Ke()
                }
                G.startPaused = R,
                G.rewinding = !1,
                !S && A && (De = O && !zot(Y) && Y.dispatchEvent ? kt.Ticker.add(function() {
                    (re || se || ce || ue) && ft(),
                    Y.dispatchEvent("animation")
                }, ee) : O && s.dispatchEvent ? kt.Ticker.add(function() {
                    (re || se || ce || ue) && ft(),
                    s.dispatchEvent("animation")
                }, ee) : kt.Ticker.add(function() {
                    (re || se || ce || ue) && ft()
                }, ee));
                var Ze = [1, 1, 1];
                zot(s.zimMaskDynamic) || s.zimMaskApply();
                var qe, Qe, Je = !1;
                vt(),
                s.stopAnimate && s.stopAnimate.real || (s.stopAnimate = function(e, t) {
                    if (s.paused = null,
                    "Pen" == s.type && s.zimOnPath && (s.stop(),
                    s.zimOnPath = !1),
                    zot(t) && (t = !0),
                    zot(e)) {
                        if (!t)
                            return s;
                        for (var o in s.zimBusy = null,
                        createjs.Tween.removeTweens(s),
                        s.zimTweens)
                            bt(o);
                        s.zimTweens = null,
                        s.zimIdSets = null,
                        kt.idSets && kt.idSets[U || o] && (delete kt.idSets[U || o],
                        kt.isEmpty(kt.idSets) && delete kt.idSets),
                        kt.animatedObjects.remove(s)
                    } else {
                        Array.isArray(e) || (e = [e]);
                        var n = xt(e);
                        for (var o in s.zimTweens)
                            s.zimTweens[o].requestID && cancelAnimationFrame(s.zimTweens[o].requestID),
                            t && 0 <= n.indexOf(o) && yt(o),
                            !t && n.indexOf(o) < 0 && yt(o)
                    }
                    return s
                }
                ,
                s.stopAnimate.real = !0,
                s.pauseAnimate = function(e, t, o, n) {
                    if ("Pen" == s.type && (!1 === e ? s.zimOnPath && (s.infinite = !0) : s.stop()),
                    Qe && !n)
                        return s.pause(e, t),
                        s;
                    if (zot(e) && (e = !0),
                    pe = !1,
                    s.paused = e,
                    zot(o) && (o = !0),
                    zot(t) && !o)
                        return s;
                    if (zot(t))
                        for (var r in s.zimTweens)
                            wt(r, e);
                    else {
                        Array.isArray(t) || (t = [t]);
                        var i = xt(t);
                        for (var r in s.zimTweens)
                            o && 0 <= i.indexOf(r) && wt(r, e),
                            !o && i.indexOf(r) < 0 && wt(r, e)
                    }
                    return s
                }
                ),
                R && s.pauseAnimate(!0, j, null, !0),
                _.extra && (qe = _.extra,
                delete _.extra,
                Array.isArray(qe) || (qe = [qe]));
                for (F = 0; F < ie.length; F++) {
                    var $e = ie[F];
                    _[$e] && (zot(qe) && (qe = []),
                    Ct($e, _[$e]),
                    delete _[$e])
                }
                if (qe) {
                    var et;
                    G.extraTickers = [];
                    for (F = 0; F < qe.length; F++) {
                        var tt = qe[F];
                        for (var ot in zot(tt.inputObj) && (tt.inputObj = s),
                        zot(tt.inputProp) && (tt.inputProp = "y"),
                        zot(tt.inputMin) && (tt.inputMin = 0),
                        zot(tt.inputMax) && (tt.inputMax = "x" == tt.inputProp ? ee.width : ee.height),
                        zot(tt.outputObj) && (tt.outputObj = s),
                        zot(tt.outputProp) && (tt.outputProp = "scale"),
                        zot(tt.outputMin) && (tt.outputMin = 0),
                        zot(tt.outputMax) && (tt.outputMax = tt.outputMin + 1),
                        zot(tt.constrain) && (tt.constrain = !0),
                        tt)
                            _[ot] = zik(_[ot]);
                        "percentSpeed" == tt.outputProp && (L = !0),
                        et = new kt.Proportion(tt.inputMin,tt.inputMax,tt.outputMin,tt.outputMax,tt.factor,tt.outputRound);
                        var nt = function() {
                            var n = tt
                              , r = et;
                            return function() {
                                var e, t = n.outputObj;
                                if (e = n.constrain ? kt.constrain(r.convert(n.inputObj[n.inputProp]), n.outputMin, n.outputMax) : r.convert(n.inputObj[n.inputProp]),
                                "scale" == n.outputProp)
                                    t.scaleX = kt.sign(t.scaleX) * e,
                                    t.scaleY = kt.sign(t.scaleY) * e;
                                else if ("scaleX" == n.outputProp)
                                    t.scaleX = kt.sign(t.scaleX) * e;
                                else if ("scaleY" == n.outputProp)
                                    t.scaleY = kt.sign(t.scaleY) * e;
                                else if ("layer" == n.outputProp) {
                                    if (!t.parent)
                                        return;
                                    var o = kt.constrain(Math.round(e), 0, t.parent.numChildren - 1);
                                    o != t.parent.getChildIndex(t) && t.parent.setChildIndex(t, o)
                                } else
                                    t[n.outputProp] = e
                            }
                        }();
                        nt(),
                        G.extraTickers.push(kt.Ticker.add(nt, ee))
                    }
                }
                if (L || s.zimAnimateDragDown) {
                    if (L) {
                        Qe = !0,
                        s.pauseAnimate(!0, j, null, !0),
                        s.paused = !1,
                        G.currentTime = 0;
                        var rt = G;
                        zot(s.percentSpeed) && (s.percentSpeed = G.startPaused ? 0 : 100);
                        var it = 1e3 / 60;
                        G.currentTime = 0;
                        var at = !a && zot(d) && l;
                        X && l && zot(d) && (X = !1);
                        var lt, st = n + (m ? n : 0) + (z || 0) + (u || 0), ct = 1;
                        l && d && (ct = d),
                        X && (lt = st * ct),
                        function e() {
                            if (G.requestID = requestAnimationFrame(e),
                            L && (!G.startPaused || 0 != s.percentSpeed)) {
                                G.startPaused = !1,
                                0 < a && G != rt && (a = 0,
                                G.currentTime = 0,
                                s.pauseAnimate(!0, j),
                                s.paused = !1,
                                at = zot(d) && l),
                                at && (G.currentTime += 1e4 * st,
                                G.setPosition(G.currentTime, !0),
                                at = !1);
                                var t = G.currentTime + it * s.percentSpeed / 100;
                                lt && 0 == a && (t = kt.constrain(t, 0, lt)),
                                G.currentTime = t,
                                G.setPosition(G.currentTime),
                                (re || se || ce || ue) && ft(),
                                ee.update()
                            }
                        }()
                    }
                    var dt;
                    s.pause = function(e, t) {
                        if (zot(e) && (e = !0),
                        zot(t) && (t = 0),
                        e) {
                            if (s.zimAnimateDragDown && (D = !1,
                            s.cursor = "default",
                            s.off("mousedown", s.zimAnimateDragDown),
                            s.off("pressmove", s.zimAnimateDragPress),
                            s.off("pressup", s.zimAnimateDragUp),
                            !L))
                                return;
                            dt = s.percentSpeed,
                            0 < t ? (!0,
                            kt.animate({
                                target: s,
                                props: {
                                    percentSpeed: 0
                                },
                                override: !1,
                                ticker: !1,
                                time: t,
                                call: function() {
                                    !1,
                                    s.percentSpeed = 0,
                                    s.paused = !0,
                                    L = !1,
                                    s.dispatchEvent("pause")
                                }
                            })) : (G.startPaused = !1,
                            !1,
                            s.percentSpeed = 0,
                            s.paused = !0,
                            L = !1,
                            setTimeout(function() {
                                s.dispatchEvent("pause")
                            }, 10))
                        } else {
                            if (s.zimAnimateDragDown && (D = !0,
                            s.cursor = "pointer",
                            s.zimAnimateDragDown = s.on("mousedown", s.zimAnimateDragDown),
                            s.zimAnimateDragPress = s.on("pressmove", s.zimAnimateDragPress),
                            s.zimAnimateDragUp = s.on("pressup", s.zimAnimateDragUp),
                            !L))
                                return;
                            pe = !1,
                            G.currentTime = G.position,
                            0 < t ? (!0,
                            kt.animate({
                                target: s,
                                props: {
                                    percentSpeed: dt
                                },
                                override: !1,
                                ticker: !1,
                                time: t,
                                call: function() {
                                    !1,
                                    s.percentSpeed = dt,
                                    s.paused = !1,
                                    L = !0
                                }
                            })) : (!1,
                            s.percentSpeed = dt,
                            s.paused = !1,
                            L = !0)
                        }
                        return s
                    }
                }
                return s
            }
        }
        function ut() {
            zot(j) ? j = kt.makeID(10) : (j = String(j),
            K = j),
            zot(s.zimIdSets) && (s.zimIdSets = {}),
            zot(s.zimIdSets[j]) ? zot(s.zimTweens[j]) || (U = j,
            j = kt.makeID(10),
            s.zimIdSets[U] = [U],
            s.zimTweens[U].zimIdSet = U,
            s.zimIdSets[U].push(j)) : (U = j,
            j = kt.makeID(10),
            s.zimIdSets[U].push(j))
        }
        function ht(e, t, o, n) {
            re && (!zot(e.percentComplete) || o && !zot(o.percentComplete)) && (o || (o = {}),
            zot(o.pathRatio) && (o.pathRatio = zot(o.percentComplete) ? e.percentComplete / 100 : o.percentComplete / 100));
            var r = {};
            for (F in t)
                o && !zot(o[F]) ? r[F] = o[F] : r[F] = e[F],
                n && (e[F] = t[F]);
            return r
        }
        function gt() {
            je && "function" == typeof je && je(Le)
        }
        function pt() {
            Ye && "function" == typeof Ye && Ye(Xe)
        }
        function ft() {
            if (s.parent && !G.passive && !G.startPaused) {
                if (re) {
                    le && (ve = re.segmentPoints,
                    ye = re.segmentRatios);
                    var e = re.getCurvePoint(s.pathRatio, ye, ve);
                    if (e) {
                        me = e.z;
                        var t = s.parent.globalToLocal(e.x, e.y);
                        s.x = t.x,
                        s.y = t.y
                    }
                }
                var o;
                if (ce && ge && (Ee > s.x && kt.sign(s.scaleX) == kt.sign(de) && (s.scaleX *= -1),
                Ee < s.x && kt.sign(s.scaleX) != kt.sign(de) && (s.scaleX *= -1)),
                ue && ge && (Me > s.y && kt.sign(s.scaleY) == kt.sign(he) && (s.scaleY *= -1),
                Me < s.y && kt.sign(s.scaleY) != kt.sign(he) && (s.scaleY *= -1)),
                se) {
                    var n;
                    if (re == se)
                        o = kt.angle(Ee, Me, s.x, s.y) + Pe;
                    else
                        n = se.parent ? se.parent.localToLocal(se.x, se.y, s.parent) : s.parent.globalToLocal(se.x, se.y),
                        o = kt.angle(s.x, s.y, n.x, n.y) + Pe;
                    0 != o && (ce && 0 < Ee - s.x && (o += 180),
                    s.rotation = o == Pe ? s.rotation : o)
                }
                if (D) {
                    var r = s.x - Ee + s.y - Me;
                    2 < Math.abs(r) && (Ze.push(sign(r)),
                    Ze.shift(),
                    G.forward = function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, o = 0, n = e.length; o < n; o++)
                                t += e[o];
                            return t
                        }
                    }(Ze))
                }
                Ee = s.x,
                Me = s.y
            }
        }
        function mt() {
            if (s.paused)
                r && "function" == typeof r && r(i);
            else {
                if (B.loop) {
                    if (!(0 < Ie))
                        return void pt();
                    if (Q < Ie)
                        return pt(),
                        void Q++;
                    m ? s.set && s.set(zt()) : s.set && s.set(_)
                }
                yt(j),
                s.paused = null,
                s.zimX = null,
                s.zimY = null,
                r && "function" == typeof r && r(i)
            }
        }
        function zt() {
            var e = {};
            for (var t in _)
                S ? zot(I[t]) || M ? e[t] = s.style[t] : e[t] = I[t] : zot(I[t]) || M ? e[t] = s[t] : e[t] = I[t];
            return e
        }
        function vt() {
            G.zimObj = _,
            G.zimTicker = De,
            G.zimPaused = Je,
            U && (G.zimIdSet = U),
            K && (zot(kt.idSets) && (kt.idSets = {}),
            zot(kt.idSets[K]) ? kt.idSets[K] = [s] : kt.idSets[K].indexOf(s) < 0 && kt.idSets[K].push(s)),
            kt.animatedObjects || (kt.animatedObjects = new kt.Dictionary(!0)),
            kt.animatedObjects.add(s, !0)
        }
        function yt(e) {
            if (!zot(s.zimTweens) && !zot(s.zimTweens[e])) {
                !function(e) {
                    if (s.zimBusy) {
                        for (var t in e)
                            delete s.zimBusy[t];
                        kt.isEmpty(s.zimBusy) && (s.zimBusy = null)
                    }
                }(s.zimTweens[e].zimObj),
                s.zimTweens[e].paused = !0,
                bt(e);
                var t = s.zimTweens[e].zimIdSet;
                if (!zot(t) && s.zimIdSets) {
                    var o = s.zimIdSets[t];
                    o && o.splice(o.indexOf(e), 1),
                    o && 0 == o.length && (delete s.zimIdSets[t],
                    kt.isEmpty(s.zimIdSets) && delete s.zimIdSets)
                }
                if (s.pathRatio = null,
                "Pen" == s.type && s.zimOnPath && (s.stop(),
                s.zimOnPath = !1),
                delete s.zimTweens[e],
                kt.isEmpty(s.zimTweens) && s.stopAnimate(),
                s.zimTweens && s.zimTweens[e] || s.zimIdSets && s.zimIdSets[t || e])
                    ;
                else if (kt.idSets && kt.idSets[t || e]) {
                    kt.idSets[t || e];
                    var n = kt.idSets[t || e].indexOf(s);
                    0 <= n && kt.idSets[t || e].splice(n, 1),
                    kt.idSets[t || e].length <= 0 && (delete kt.idSets[t || e],
                    kt.isEmpty(kt.idSets) && delete kt.idSets)
                }
            }
        }
        function bt(o) {
            !function() {
                var e = s.zimTweens[o].zimTicker;
                if (s.zimTweens[o].extraTickers)
                    for (var t = 0; t < s.zimTweens[o].extraTickers.length; t++)
                        kt.Ticker.remove(s.zimTweens[o].extraTickers[t]);
                setTimeout(function() {
                    e && kt.Ticker.remove(e),
                    e = null
                }, 200)
            }()
        }
        function wt(e, t) {
            var o = s.zimTweens[e];
            (o.paused = t) != o.zimPaused && ((o.zimPaused = t) ? o.zimTicker && (o.zimAnimateTimeout = setTimeout(function() {
                kt.Ticker.remove(o.zimTicker)
            }, 200)) : (o.startPaused = !1,
            clearTimeout(o.zimAnimateTimeout),
            o.zimTicker && (o.zimTicker = kt.Ticker.add(o.zimTicker, ee))))
        }
        function xt(e) {
            for (var t = [], o = 0; o < e.length; o++)
                s.zimIdSets && !zot(s.zimIdSets[e[o]]) ? t = t.concat(s.zimIdSets[e[o]]) : t.push(e[o]);
            return t
        }
        function Ct(e, t) {
            !0 === t ? qe.push({
                outputProp: ae[e]
            }) : Array.isArray(t) ? qe.push({
                outputProp: ae[e],
                outputMin: t[0],
                outputMax: t[1],
                inputMin: t[2],
                inputMax: t[3]
            }) : qe.push({
                outputProp: ae[e],
                outputMax: t
            })
        }
    }
    ,
    kt.stopAnimate = function(e) {
        if (z_d("45.12"),
        zot(e)) {
            if (kt.animatedObjects)
                for (var t = kt.animatedObjects.length - 1; 0 <= t; t--)
                    kt.animatedObjects.objects[t].stopAnimate()
        } else if (Array.isArray(e) || (e = [e]),
        kt.idSets)
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                if (kt.idSets[n])
                    for (t = kt.idSets[n].length - 1; 0 <= t; t--)
                        kt.idSets[n][t].stopAnimate(n)
            }
    }
    ,
    kt.stopZimAnimate = function(e) {
        z_d("45.1"),
        kt.stopAnimate(e)
    }
    ,
    kt.pauseAnimate = function(e, t) {
        if (z_d("45.22"),
        zot(e) && (e = !0),
        zot(t)) {
            if (kt.animatedObjects)
                for (var o = kt.animatedObjects.length - 1; 0 <= o; o--)
                    kt.animatedObjects.objects[o].pauseAnimate(e)
        } else if (Array.isArray(t) || (t = [t]),
        kt.idSets)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (kt.idSets[r])
                    for (o = kt.idSets[r].length - 1; 0 <= o; o--)
                        kt.idSets[r][o].pauseAnimate(e, r)
            }
    }
    ,
    kt.pauseZimAnimate = function(e, t) {
        z_d("45.2"),
        kt.pauseAnimate(e, t)
    }
    ,
    kt.wiggle = function(i, a, l, s, c, d, u, e, h, g, p, f, m, t) {
        var o;
        if (o = zob(kt.wiggle, arguments, "target, property, baseAmount, minAmount, maxAmount, minTime, maxTime, totalTime, type, ease, integer, id, startType, ticker"))
            return o;
        if (z_d("45.25"),
        zot(i) || zot(l) || zot(s))
            return i;
        zot(c) && (c = s),
        zot(d) && (d = 1e3),
        zot(u) && (u = d),
        zot(g) && (g = "quadInOut"),
        zot(p) && (p = !1),
        zot(f) && (f = kt.makeID()),
        zot(h) && (h = "both"),
        zot(m) && (m = "both"),
        zot(t) && (t = !0),
        zot(e) || (i.wiggleTimeout = setTimeout(function() {
            i.stopAnimate(f),
            i.dispatchEvent("wigglestop")
        }, e));
        var z, v = 0;
        return function e() {
            var t = kt.rand(zik(d), zik(u))
              , o = {}
              , n = {};
            if (n[a] = zik(l),
            "negative" == h || 0 == v && "negative" == m)
                var r = -kt.rand(zik(s), zik(c), p);
            else
                r = "positive" == h || 0 == v && "positive" == m ? kt.rand(zik(s), zik(c), p) : 0 == v ? kt.rand(zik(s), zik(c), p, !0) : kt.rand(zik(s), zik(c), p) * kt.sign(z) * -1;
            o[a] = zik(l) + r,
            0 == v && (t /= 2),
            z = r,
            v++,
            "negative" == h || "positive" == h ? kt.animate({
                target: i,
                obj: o,
                set: n,
                ease: g,
                time: 2 * t,
                rewind: !0,
                override: !1,
                call: e,
                id: f,
                ticker: !!i.stage
            }) : kt.animate({
                target: i,
                obj: o,
                ease: g,
                time: t,
                override: !1,
                call: e,
                id: f,
                ticker: !!i.stage
            })
        }(),
        i
    }
    ,
    kt.zimLoopCheck = !1,
    kt.loop = function(e, t, o, n, r, i) {
        var a;
        if (a = zob(kt.loop, arguments, "obj, call, reverse, step, start, end"))
            return a;
        if (kt.zimLoopCheck || z_d("45.3"),
        kt.zimLoopCheck = !0,
        !zot(e) && !zot(t)) {
            zot(o) && (o = !1),
            (zot(n) || n <= 0) && (n = 1);
            var l = "number" == typeof e ? "number" : e.constructor === Array ? "array" : e.constructor === {}.constructor ? "object" : e instanceof NodeList ? "nodelist" : "container";
            if ("container" != l || e.addChild)
                if ("number" == l || "array" == l || "nodelist" == l) {
                    if (0 == (h = g((d = "number" == l ? e : e.length) - 1)))
                        return;
                    if (o)
                        for (var s = r; i <= s; s -= n) {
                            if ("number" == l)
                                var c = t(s, h, r, i, e);
                            else if ("array" == l)
                                c = t(e[s], s, h, r, i, e);
                            else
                                c = t(e.item(s), s, h, r, i, e);
                            if (void 0 !== c)
                                return c
                        }
                    else
                        for (s = r; s <= i; s += n) {
                            if ("number" == l)
                                c = t(s, h, r, i, e);
                            else if ("array" == l)
                                c = t(e[s], s, h, r, i, e);
                            else
                                c = t(e.item(s), s, h, r, i, e);
                            if (void 0 !== c)
                                return c
                        }
                } else if ("object" == l) {
                    var d = 0
                      , u = [];
                    for (var s in e)
                        d++,
                        u.push(s);
                    if (0 == (h = g(d - 1)))
                        return;
                    if (o)
                        for (s = r; i <= s; s -= n) {
                            if (void 0 !== (c = t(u[s], e[u[s]], s, h, r, i, e)))
                                return c
                        }
                    else
                        for (s = r; s <= i; s += n) {
                            if (void 0 !== (c = t(u[s], e[u[s]], s, h, r, i, e)))
                                return c
                        }
                } else {
                    var h;
                    if (0 == (h = g(e.numChildren - 1)))
                        return;
                    if (o)
                        for (s = r; i <= s; s -= n) {
                            if (void 0 !== (c = t(e.getChildAt(s), s, h, r, i, e)))
                                return c
                        }
                    else
                        for (s = r; s <= i; s += n) {
                            if (void 0 !== (c = t(e.getChildAt(s), s, h, r, i, e)))
                                return c
                        }
                }
        }
        function g(e) {
            return zot(r) && (r = o ? e : 0),
            zot(i) && (i = o ? 0 : e),
            o && r < i || !o && i < r ? 0 : (r < 0 && i) < 0 || e < r && e < i ? 0 : (r = Math.max(0, Math.min(r, e)),
            i = Math.max(0, Math.min(i, e)),
            Math.floor((o ? r - i : i - r) / n) + 1)
        }
    }
    ,
    kt.scaleTo = function(e, t, o, n, r, i) {
        var a;
        if (a = zob(kt.scaleTo, arguments, "obj, boundObj, percentX, percentY, type, boundsOnly"))
            return a;
        if (z_d("43"),
        !zot(e) && e.getBounds && e.getBounds()) {
            if (!zot(t) && t.getBounds && t.getBounds()) {
                zot(o) && (o = -1),
                zot(n) && (n = -1),
                -1 == o && -1 == n && (o = n = 100),
                zot(r) && (r = "smallest"),
                zot(i) && (i = !1);
                var l = t.getBounds().width * o / 100 * (i ? 1 : t.scaleX)
                  , s = t.getBounds().height * n / 100 * (i ? 1 : t.scaleY);
                if ((-1 == o || -1 == n) && "both" != r && "stretch" != r)
                    return -1 == o ? kt.sca(e, s / e.getBounds().height) : kt.sca(e, l / e.getBounds().width),
                    e;
                if ("both" == r || "stretch" == r)
                    return e.scaleX = -1 != o ? l / e.getBounds().width : e.scaleX,
                    e.scaleY = -1 != n ? s / e.getBounds().height : e.scaleY,
                    e;
                if ("biggest" == r || "largest" == r || "outside" == r)
                    var c = Math.max(l / e.getBounds().width, s / e.getBounds().height);
                else
                    c = Math.min(l / e.getBounds().width, s / e.getBounds().height);
                return kt.sca(e, c),
                e
            }
            zog("zim methods - scaleTo(): please provide a boundObject (with setBounds) to scale to")
        } else
            zog("zim methods - scaleTo(): please provide an object (with setBounds) to scale")
    }
    ,
    kt.fit = function(e, t, o, n, r, i) {
        var a;
        if (a = zob(kt.fit, arguments, "obj, left, top, width, height, inside"))
            return a;
        if (z_d("46"),
        !zot(e) && e.getBounds) {
            if (e.getBounds()) {
                if (zot(t)) {
                    if (!e.stage)
                        return void zog("zim methods - fit(): please add boundary dimensions or add obj to stage first");
                    if (!e.stage.getBounds())
                        return void zog("zim methods - fit(): please add boundary dimensions or add obj with bounds to stage first");
                    o = t = 0,
                    n = e.stage.getBounds().width,
                    r = e.stage.getBounds().height
                }
                zot(i) && (i = !0),
                e.scaleX = e.scaleY = 1;
                var l, s = n, c = r, d = e.getBounds().width, u = e.getBounds().height;
                l = i ? d / u <= s / c ? c / u : s / d : d / u <= s / c ? s / d : c / u,
                e.scaleX = e.scaleY = l;
                var h = d * l
                  , g = u * l;
                return e.x = (e.regX - e.getBounds().x) * l + t + (s - h) / 2,
                e.y = (e.regY - e.getBounds().y) * l + o + (c - g) / 2,
                {
                    x: e.x,
                    y: e.y,
                    width: h,
                    height: g,
                    scale: l,
                    bX: t,
                    bY: o,
                    bWidth: n,
                    bHeight: r
                }
            }
            zog("zim methods - fit(): please setBounds() on object")
        }
    }
    ,
    kt.boundsCheck = !1,
    kt.boundsToGlobal = function(e, t, o) {
        if (kt.boundsCheck || (z_d("40"),
        kt.boundsCheck = !0),
        !zot(e) && e.getBounds) {
            zot(o) && (o = !1);
            var n = e.getBounds();
            if (n || !zot(t)) {
                if (t && (n = t),
                o)
                    var r = e.globalToLocal(n.x, n.y)
                      , i = e.globalToLocal(n.x + n.width, n.y)
                      , a = e.globalToLocal(n.x + n.width, n.y + n.height)
                      , l = e.globalToLocal(n.x, n.y + n.height);
                else
                    r = e.localToGlobal(n.x, n.y),
                    i = e.localToGlobal(n.x + n.width, n.y),
                    a = e.localToGlobal(n.x + n.width, n.y + n.height),
                    l = e.localToGlobal(n.x, n.y + n.height);
                var s = Math.min(r.x, i.x, a.x, l.x)
                  , c = Math.min(r.y, i.y, a.y, l.y)
                  , d = Math.max(r.x, i.x, a.x, l.x)
                  , u = Math.max(r.y, i.y, a.y, l.y);
                return new createjs.Rectangle(s,c,d - s,u - c)
            }
            zog("zim methods - boundsToGlobal():\n please setBounds() on object (or a rectangle)")
        }
    }
    ,
    kt.resetBounds = function(e, t, o, n, r) {
        if (z_d("40.5"),
        zot(n))
            i = 0,
            a = t,
            l = 0,
            s = o;
        else
            var i = t
              , a = n
              , l = o
              , s = r;
        return zot(s) && (s = a),
        zot(t) ? e.setBounds(null) : e.setBounds(i, l, a, s),
        e
    }
    ,
    kt.copyMatrix = function(e, t) {
        return z_d("45.5"),
        e.x = t.x,
        e.y = t.y,
        e.scaleX = t.scaleX,
        e.scaleY = t.scaleY,
        e.regX = t.regX,
        e.regY = t.regY,
        e.rotation = t.rotation,
        e.skewX = t.skewX,
        e.skewY = t.skewY,
        e
    }
    ,
    kt.expand = function(e, t, o) {
        if (z_d("50"),
        zot(e) || !e.getBounds || !e.getBounds())
            return zog("zim methods - expand(): please provide object with bounds set"),
            e;
        zot(t) && (t = 20),
        zot(o) && (o = t);
        var n = e.getBounds()
          , r = new createjs.Shape;
        return r.graphics.f("0").r(n.x - t, n.y - o, n.width + 2 * t, n.height + 2 * o),
        e.hitArea = r,
        e
    }
    ,
    kt.setSwipe = function(i, e) {
        if (z_d("34"),
        !zot(i) && i.on)
            return i.zimNoSwipe = !e || null,
            i instanceof createjs.Container && function e(t) {
                var o = t.numChildren;
                var n;
                for (var r = 0; r < o; r++)
                    (n = t.getChildAt(r)).zimNoSwipe = i.zimNoSwipe,
                    n instanceof createjs.Container && e(n)
            }(i),
            i
    }
    ,
    kt.setMask = function(e, t, o) {
        if (z_d("50.1"),
        zot(e) && zog("zim methods - setMask(): please provide obj"),
        zot(t))
            return n(),
            e;
        function n() {
            e.zimMask && e.zimMask.parent && e.zimMask.parent.removeChild(e.zimMask),
            e.zimMask = null,
            e.zimMaskTicker && Ticker.remove(e.zimMaskTicker),
            e.mask = null
        }
        var r;
        function i() {
            if (o && (!e.stage || !t.stage))
                return e;
            r = null,
            e.zimMask = t.zimMask = r = t.shape.clone(),
            kt.copyMatrix(r, t),
            r.regX = t.regX,
            r.regY = t.regY,
            t.addChildAt(r, 0),
            r.alpha = 0,
            r.x = t.x + t.shape.x,
            r.y = t.y + t.shape.y,
            e.mask = r
        }
        return e.zimMaskOriginal && e.zimMaskOriginal != t && n(),
        zot(o) && (o = !("Blob" != t.type && zot(t.zimDown) && zot(t.transformControls) && zot(t.zimTouch) && zot(t.zimTweens)),
        t.zimMaskDynamic = o),
        (e.zimMaskOriginal = t).zimMaskApply = function() {
            e.zimMaskTicker && Ticker.remove(e.zimMaskTicker),
            e.zimMaskTicker = Ticker.add(i)
        }
        ,
        t && t.shape ? (i(),
        o && t.zimMaskApply()) : (r = t,
        e.mask = r),
        e
    }
    ,
    kt.outline = function(t, e, o) {
        var n;
        if (n = zob(kt.outline, arguments, "obj, color, size"))
            return n;
        if (z_d("47"),
        t.type && "zimOultineShape" == t.type)
            return zon && zog("zim.outline() - warning, you are trying to outline an outline - do not outline in a loop"),
            t;
        if (zot(t) || !t.getBounds)
            return zog("zim methods - outline(): please provide object with bounds set"),
            t;
        if (!t.getBounds())
            return zog("zim methods - outline(): please setBounds() on object"),
            t;
        if (!t.parent)
            return zog("zim methods - outline(): object should be on stage first"),
            t;
        if (zot(e) && (e = "brown"),
        zot(o) && (o = 2),
        o <= 0)
            return t.ZIMoutlineShape && t.ZIMoutlineShape.parent.removeChild(t.ZIMoutlineShape),
            t.ZIMoutlineShapeC && t.ZIMoutlineShapeC.parent.removeChild(t.ZIMoutlineShapeC),
            void (t.ZIMoutlineShape = t.ZIMoutlineShapeC = null);
        var r = t.getBounds()
          , i = t.ZIMoutlineShape = t.ZIMoutlineShape ? t.ZIMoutlineShape : new kt.Shape;
        i.type = "zimOutlineShape";
        var a = t.ZIMoutlineShapeC = t.ZIMoutlineShapeC ? t.ZIMoutlineShapeC : new kt.Shape;
        a.type = "zimOutlineShape";
        var l = t.parent;
        t.outlineToggled = !0,
        t.outlineToggle = function(e) {
            return !0 === e ? (t.ZIMoutlineShape.visible = !0,
            t.ZIMoutlineShapeC.visible = !0) : !1 === e ? (t.ZIMoutlineShape.visible = !1,
            t.ZIMoutlineShapeC.visible = !1) : (t.ZIMoutlineShape.visible = !t.ZIMoutlineShape.visible,
            t.ZIMoutlineShapeC.visible = !t.ZIMoutlineShapeC.visible),
            t.outlineToggled = t.ZIMoutlineShape.visible,
            t
        }
        ;
        var s = t.localToLocal(r.x, r.y, l)
          , c = t.localToLocal(r.x + r.width, r.y, l)
          , d = t.localToLocal(r.x + r.width, r.y + r.height, l)
          , u = t.localToLocal(r.x, r.y + r.height, l)
          , h = t.localToLocal(0, 0, l)
          , g = i.graphics.c()
          , p = a.graphics.c();
        g.s(e).ss(o).mt(s.x, s.y).lt(c.x, c.y).lt(d.x, d.y).lt(u.x, u.y).lt(s.x, s.y).cp();
        p.s("white").ss(o + 2),
        p.mt(-11, 0).lt(11, 0),
        p.mt(0, -11).lt(0, 11),
        p.s(e).ss(o),
        p.mt(-10, 0).lt(10, 0),
        p.mt(0, -10).lt(0, 10),
        a.x = h.x,
        a.y = h.y,
        a.rotation = t.rotation,
        g.s("white").ss(o + 2).dc(t.x, t.y, 16),
        g.s(e).ss(o).dc(t.x, t.y, 16),
        t.parent.removeChild(i),
        t.parent.removeChild(a);
        var f = t.parent.getChildIndex(t);
        return t.parent.addChildAt(a, f + 1),
        t.parent.addChildAt(i, f + 1),
        i.mouseEnabled = !1,
        a.mouseEnabled = !1,
        t
    }
    ,
    kt.STYLE = null,
    kt.STYLECHECK = !1,
    kt.ignore = "ignore",
    kt.getStyle = function(e, t, o) {
        kt.STYLECHECK || (z_d("50.34"),
        kt.STYLECHECK = !0);
        var n = ["pos", "addTo", "center", "centerReg", "mov", "drag", "transform", "gesture", "outline", "bounds", "animate", "wiggle"]
          , r = kt.STYLE;
        if ("undefined" != typeof STYLE && (r = STYLE),
        r = zot(r) ? {} : kt.copy(r),
        zot(o))
            o = {};
        else
            for (var i = 0; i < n.length; i++)
                delete o[n[i]];
        var a, l = o, s = r.type;
        if (s && delete r.type,
        !zot(t) && !zot(r.group)) {
            var c = t.split(",")
              , d = {};
            for (i = 0; i < c.length; i++) {
                var u = c[i].trim();
                zot(r.group[u]) || (d = kt.merge(d, r.group[u]))
            }
            delete r.group
        }
        for (var h in zot(e) || zot(s) || zot(s[e]) || (r = kt.merge(r, s[e])),
        zot(t) || zot(d) || (r = kt.merge(r, d)),
        r)
            l[h] ? delete r[h] : "ignore" != (a = -1 == n.indexOf(h) ? zik(r[h]) : r[h]) ? (a && a.clone && a.type != e ? a = a.clone() : a && a.constructor === {}.constructor && (a = kt.copy(a, !0, !1)),
            r[h] = a) : delete r[h];
        return !1 === (r = kt.merge(r, l)).style ? {} : r
    }
    ;
    var r = ["visible", "x", "y", "scale", "scaleX", "scaleY", "rotation", "alpha", "skewX", "skewY", "regX", "regY"]
      , Me = function(t, o) {
        if (o) {
            o.add && ("Button" == t.type && zog("add"),
            t.addTo()),
            o.addTo && t.addTo(o.addTo.constructor === {}.constructor ? o.addTo : null),
            o.center && t.center(o.center.constructor === {}.constructor ? o.center : null),
            o.centerReg && t.centerReg(o.centerReg.constructor === {}.constructor ? o.centerReg : null);
            for (var n = 0; n < r.length; n++)
                null != o[r[n]] && (t[r[n]] = zik(o[r[n]]));
            if (o.bounds && o.bounds.constructor === {}.constructor && t.setBounds(o.bounds.x ? o.bounds.x : 0, o.bounds.y ? o.bounds.y : 0, o.bounds.width ? o.bounds.width : 100, o.bounds.height ? o.bounds.height : 100),
            (o.mov || o.move) && (o.move && (o.mov = o.move),
            o.mov.constructor === {}.constructor ? t.mov(zik(o.mov.x), zik(o.mov.y)) : t.mov(zik(o.mov))),
            o.pos)
                if (o.pos.constructor === {}.constructor)
                    t.pos(zik(o.pos.x), zik(o.pos.y), zik(o.pos.right), zik(o.pos.bottom), zik(o.pos.index), o.pos.add, zik(o.pos.reg), zik(o.pos.regX), zik(o.pos.regY));
                else {
                    var e = zik(o.pos);
                    "left" != e && "top" != e || t.pos(),
                    "right" == e && t.pos({
                        right: !0
                    }),
                    "bottom" == e && t.pos({
                        bottom: !0
                    }),
                    "rightbottom" != e && "bottomright" != e || t.pos({
                        right: !0,
                        bottom: !0
                    }),
                    "center" == e && t.center()
                }
            if (o.outline && setTimeout(function() {
                t.outline(o.outline.constructor === {}.constructor ? o.outline : null),
                t.stage && t.stage.update()
            }, 20),
            o.drag && t.drag(o.drag.constructor === {}.constructor ? o.drag : {
                currentTarget: !0
            }),
            o.gesture && t.gesture(o.gesture.constructor === {}.constructor ? o.gesture : null),
            o.transform && setTimeout(function() {
                t.transform(o.transform.constructor === {}.constructor ? o.transform : null)
            }, 20),
            o.animate) {
                Array.isArray(o.animate) || (o.animate = [o.animate]);
                for (n = 0; n < o.animate.length; n++)
                    !function() {
                        var e = o.animate[n];
                        e.constructor === {}.constructor && setTimeout(function() {
                            t.animate(e)
                        }, 20)
                    }()
            }
            if (o.wiggle) {
                Array.isArray(o.wiggle) || (o.wiggle = [o.wiggle]);
                for (n = 0; n < o.wiggle.length; n++)
                    !function() {
                        var e = o.wiggle[n];
                        e.constructor === {}.constructor && setTimeout(function() {
                            t.wiggle(e)
                        }, 20)
                    }()
            }
        }
    };
    kt.ANIMATE = !0,
    kt.OPTIMIZE = !1,
    kt.ACTIONEVENT = "mousedown",
    kt.KEYFOCUS = null,
    kt.POSREG = !1,
    kt.DRAGALL = !1,
    kt.Ticker = {
        stages: null,
        myUpdate: null,
        alwaysList: new kt.Dictionary,
        list: new kt.Dictionary,
        setFPS: function(e, t) {
            zot(e) && zot(t) ? (e = 30,
            t = 60) : zot(e) ? e = 30 : zot(t) && (t = e),
            kt.Ticker.framerate = createjs.Ticker.framerate = kt.mobile() ? e : t
        },
        setTimingMode: function(e) {
            createjs.Ticker.timingMode = createjs.Ticker.RAF,
            "synched" == e && (createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED),
            "timeout" == e && (createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT)
        },
        add: function(e, t) {
            z_d("30");
            var o = kt.Ticker;
            return o.has(e, t) ? e : (o.framerate || o.setFPS(),
            !zot(t) && t.update || (t = Tt.stage),
            zot(e) || "function" != typeof e ? void zog("zim.Ticker.add() - only add functions") : (o.ticker || (o.ticker = createjs.Ticker.on("tick", o.call)),
            o.list.at(t) ? o.list.at(t).push(e) : o.list.add(t, [e]),
            e))
        },
        rawID: {},
        raw: function(t) {
            z_d("30");
            var o = kt.makeID(7, "letters");
            return function e() {
                t(),
                kt.Ticker.rawID[o] = requestAnimationFrame(e)
            }(),
            o
        },
        removeRaw: function(e) {
            cancelAnimationFrame(kt.Ticker.rawID[e]),
            delete kt.Ticker.rawID[e]
        },
        call: function(e) {
            for (var t, o, n = kt.Ticker, r = 0; r < n.list.length; r++) {
                t = n.list.objects[r],
                o = n.list.values[r];
                for (var i = 0; i < o.length; i++)
                    o[i]();
                n.alwaysList.at(t) ? t.update() : 0 < o.length && (!zot(n.update) || kt.OPTIMIZE || !zns && OPTIMIZE ? n.update && t.update() : t.update())
            }
            for (r = 0; r < n.alwaysList.length; r++)
                t = n.alwaysList.objects[r],
                null == n.list[t] && t.update()
        },
        always: function(e) {
            z_d("30");
            var t = kt.Ticker;
            t.framerate || t.setFPS(),
            !zot(e) && e.update || (e = Tt.stage),
            t.alwaysList.add(e, !0),
            t.ticker || (t.ticker = createjs.Ticker.on("tick", t.call))
        },
        alwaysOff: function(e) {
            var t = kt.Ticker;
            !zot(e) && e.update || (e = Tt.stage),
            t.alwaysList.remove(e)
        },
        remove: function(e) {
            var t = kt.Ticker;
            if (zot(e) || "function" != typeof e)
                zog("zim.Ticker - only remove functions");
            else {
                for (var o = 0, n = 0; n < t.list.length; n++) {
                    t.list.objects[n];
                    var r = t.list.values[n].indexOf(e);
                    -1 < r && t.list.values[n].splice(r, 1),
                    o += t.list.values[n].length
                }
                0 < t.alwaysList.length || 0 == o && (createjs.Ticker.off("tick", t.ticker),
                t.ticker = null)
            }
        },
        removeAll: function(e) {
            for (var t, o = kt.Ticker, n = 0, r = 0; r < o.list.length; r++)
                t = o.list.objects[r],
                (zot(e) || e === t) && (o.list.values[r] = []),
                n += o.list.values[r].length;
            0 < o.alwaysList.length || 0 == n && (createjs.Ticker.off("tick", o.ticker),
            o.ticker = null)
        },
        has: function(e, t) {
            return !zot(t) && t.update || (t = Tt.stage),
            kt.Ticker.list && kt.Ticker.list.at(t) && 0 <= kt.Ticker.list.at(t).indexOf(e)
        },
        dispose: function(e) {
            for (var t, o = kt.Ticker, n = 0, r = o.list.length - 1; 0 <= r; r--)
                t = o.list.objects[r],
                zot(e) || e === t ? (o.list.remove(e),
                o.alwaysList.remove(e)) : n += o.list.values[r].length;
            if (!(0 < o.alwaysList.length))
                return 0 == n && (createjs.Ticker.off("tick", o.ticker),
                o.ticker = null),
                !0
        }
    },
    Object.defineProperty(kt.Ticker, "update", {
        get: function() {
            return kt.Ticker.myUpdate
        },
        set: function(e) {
            var t = kt.Ticker;
            "boolean" != typeof e && (e = null),
            t.myUpdate = e,
            !1 === t.myUpdate && (cancelAnimationFrame(t.ticker),
            t.alwaysList = new kt.Dictionary)
        }
    }),
    kt.Pages = function(o, p, f, e, m) {
        var t;
        if (t = zob(kt.Pages, arguments, "pages, transition, speed, transitionTable, holder", this))
            return t;
        if (z_d("71"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Pages",
        zot(o) && (o = []),
        this.pages = o,
        zot(p) && (p = "none"),
        zot(f) && (f = 200),
        zot(e) && (e = []),
        this.transitionTable = e,
        zot(m) && Tt && (m = Tt.stage),
        m.getBounds && m.getBounds()) {
            this.speed = f,
            this.active = !0;
            var z = this;
            z.transitioning = !1;
            var v, y, b = m.getBounds().width, w = m.getBounds().height;
            "none" == p && e == [] || s();
            for (var n, r, x = ["left", "right", "up", "down"], i = 0; i < o.length; i++)
                (n = o[i]).constructor !== {}.constructor && (n = o[i] = {
                    page: o[i]
                }),
                c(n.page, n.swipe);
            var a, C = this.page = o[0] ? o[0].page : null;
            this.addChild(C),
            A(C),
            this.swipe = new kt.Swipe(m);
            var k = !1
              , l = this.swipe.on("swipe", function(e) {
                if (z.active) {
                    var t = e.currentTarget.direction;
                    if ("none" != t) {
                        var o = "";
                        "left" == t ? o = "right" : "right" == t ? o = "left" : "up" == t ? o = "down" : "down" == t && (o = "up"),
                        t = o;
                        var n = x.indexOf(t);
                        r = C.zimSwipeArray[n],
                        a = [r, t, null, null, !0],
                        z.page = C,
                        z.nextPage = r,
                        z.direction = t,
                        z.dispatchEvent("swipe"),
                        setTimeout(function() {
                            k || z.go(r, t, null, null, !0)
                        }, 50)
                    }
                }
            });
            this.addPage = function(e, t) {
                c(e, t),
                C ? e.parent && e.parent.removeChild(e) : (C = z.page = e,
                z.addChild(C))
            }
            ,
            this.removePage = function(e) {
                B(e),
                z.currentPage == e && (z.removeChild(e),
                m.stage && m.stage.update()),
                e.zimSwipeArray = null
            }
            ,
            this.setSwipeArray = function(e, t) {
                zot(t) && (t = []);
                var o = {
                    page: e,
                    swipe: t
                };
                o.page.zimSwipeArray = o.swipe ? o.swipe : []
            }
            ,
            this.pause = function() {
                k = !0
            }
            ,
            this.unpause = function() {
                k && z.go(a[0], a[1], a[2], a[3], a[4])
            }
            ;
            var T = !0;
            this.go = function(e, t, o, n, r) {
                if ("number" == typeof e) {
                    var i = z.pages[e];
                    if (zot(i))
                        return;
                    e = i.page
                }
                setTimeout(function() {
                    k = !1
                }, 200);
                for (var a = [{
                    x: b
                }, {
                    x: -b
                }, {
                    y: w
                }, {
                    y: -w
                }], l = [{
                    x: b / 2,
                    alpha: 0
                }, {
                    x: -b / 2,
                    alpha: 0
                }, {
                    y: w / 2,
                    alpha: 0
                }, {
                    y: -w / 2,
                    alpha: 0
                }], s = p, c = f, d = 0; d < z.transitionTable.length; d++)
                    if (z.transitionTable[d][0] == C && z.transitionTable[d][1] == e) {
                        s = z.transitionTable[d][2],
                        c = z.transitionTable[d][3];
                        break
                    }
                if (zot(o) && (o = s),
                zot(n) && (n = c),
                z.speed = n,
                z.direction = t,
                "" == e || null == e)
                    z.page = C,
                    z.dispatchEvent("nothing");
                else if ("string" == typeof e)
                    z.page = C,
                    z.dispatchEvent(e);
                else {
                    if (e == C)
                        return;
                    zot(t) && (t = "right");
                    var u = x.indexOf(t);
                    if (!T)
                        return;
                    function h(e) {
                        e[0].uncache(),
                        e[1].uncache(),
                        z.transitioning = !1,
                        z.dispatchEvent("pagetransitioned"),
                        z.removeChild(z.lastPage),
                        z.removeChild(v),
                        z.removeChild(y),
                        A(C),
                        T = !0
                    }
                    function g(e) {
                        z.removeChild(z.lastPage),
                        kt.animate(e.shift(), {
                            alpha: 0
                        }, z.speed / 2, null, h, e)
                    }
                    T = !1,
                    e.x = 0,
                    e.y = 0,
                    e.alpha = e.zimOriginalAlpha,
                    z.transitioning = !0,
                    "slide" == o ? (e.x = -(0 | a[u].x),
                    e.y = -(0 | a[u].y),
                    e.cache(0, 0, (b + 1) / e.scaleX, (w + 1) / e.scaleY),
                    C.cache(0, 0, (b + 1) / C.scaleX, (w + 1) / C.scaleY),
                    z.addChild(e),
                    z.addChild(C),
                    kt.animate(C, a[u], z.speed, null, h, [C, e]),
                    kt.animate(e, [{
                        x: 0
                    }, {
                        x: 0
                    }, {
                        y: 0
                    }, {
                        y: 0
                    }][u], z.speed)) : "reveal" == o ? (e.cache(0, 0, (b + 1) / e.scaleX, (w + 1) / e.scaleY),
                    C.cache(0, 0, (b + 1) / C.scaleX, (w + 1) / C.scaleY),
                    z.addChild(e),
                    z.addChild(C),
                    kt.animate(C, l[u], z.speed, null, h, [C, e])) : "fade" == o ? (e.cache(0, 0, (b + 1) / e.scaleX, (w + 1) / e.scaleY),
                    C.cache(0, 0, (b + 1) / C.scaleX, (w + 1) / C.scaleY),
                    e.alpha = 1,
                    z.addChild(e),
                    z.addChild(C),
                    kt.animate(C, {
                        alpha: 0
                    }, z.speed, null, h, [C, e])) : "black" == o ? (e.cache(0, 0, (b + 1) / e.scaleX, (w + 1) / e.scaleY),
                    C.cache(0, 0, (b + 1) / C.scaleX, (w + 1) / C.scaleY),
                    e.alpha = 1,
                    z.addChild(e),
                    z.addChild(C),
                    v.alpha = 0,
                    z.addChild(v),
                    kt.animate(v, {
                        alpha: 1
                    }, z.speed / 2, null, g, [v, C, e])) : "clear" == o ? (e.cache(0, 0, (b + 1) / e.scaleX, (w + 1) / e.scaleY),
                    C.cache(0, 0, (b + 1) / C.scaleX, (w + 1) / C.scaleY),
                    e.alpha = 0,
                    z.addChild(e),
                    z.addChild(C),
                    kt.animate(C, {
                        alpha: 0
                    }, z.speed / 2),
                    kt.animate(e, {
                        alpha: 1
                    }, z.speed / 2, null, h, [C, e], z.speed / 2)) : "white" == o ? (e.cache(0, 0, (b + 1) / e.scaleX, (w + 1) / e.scaleY),
                    C.cache(0, 0, (b + 1) / C.scaleX, (w + 1) / C.scaleY),
                    e.alpha = 1,
                    z.addChild(e),
                    z.addChild(C),
                    y.alpha = 0,
                    z.addChild(y),
                    kt.animate(y, {
                        alpha: 1
                    }, z.speed / 2, null, g, [y, C, e])) : (z.transitioning = !1,
                    z.addChild(e),
                    z.removeChild(C),
                    T = !0),
                    B(C),
                    z.lastPage = C,
                    z.page = e,
                    "none" == o && A(e),
                    zot(r) && (r = !1),
                    z.fromSwipe = r,
                    z.dispatchEvent("page"),
                    C = e,
                    m.stage && m.stage.update()
                }
            }
            ,
            this.resize = function() {
                b = m.getBounds().width,
                w = m.getBounds().height,
                "none" == p && e == [] || s()
            }
            ,
            this.puff = function(e) {
                for (var t = 0; t < o.length; t++)
                    z.addChild(o[t].page);
                z.addChild(C),
                0 < e && setTimeout(function() {
                    z.settle()
                }, e)
            }
            ,
            this.settle = function() {
                z.removeAllChildren(),
                z.addChild(C),
                z.dispatchEvent("puffed")
            }
            ,
            this.disable = function() {
                z.active = !1
            }
            ,
            this.enable = function() {
                z.active = !0
            }
            ,
            this.dispose = function() {
                return z.swipe.off("swipe", l),
                this.zimContainer_dispose(),
                !0
            }
        } else
            zog("zim controls - Pages():\nholder object must have bounds set");
        function s() {
            (v = new createjs.Shape).graphics.f("black").r(0, 0, b, w + 1),
            (y = new createjs.Shape).graphics.f("white").r(0, 0, b, w + 1)
        }
        function c(e, t) {
            e.zimHTMLList = new kt.Dictionary,
            B(e),
            e.zimSwipeArray = t || [],
            e.zimOriginalAlpha = e.alpha,
            e.parent && e.parent.removeChild(n.page)
        }
        function A(e) {
            for (var t = 0; t < e.zimHTMLList.length; t++)
                e.addChildAt(e.zimHTMLList.values[t].obj, e.zimHTMLList.values[t].depth)
        }
        function B(e) {
            e.zimHTMLList.clear();
            for (var t = 0; t < e.numChildren; t++)
                if (ch = e.getChildAt(t),
                "TextArea" == ch.type || "Loader" == ch.type || "Tag" == ch.type) {
                    var o = {
                        obj: ch,
                        depth: e.getChildIndex(ch)
                    };
                    e.zimHTMLList.add(ch, o)
                }
            for (t = e.numChildren - 1; 0 <= t; t--)
                ch = e.getChildAt(t),
                "TextArea" != ch.type && "Loader" != ch.type && "Tag" != ch.type || e.removeChild(ch)
        }
    }
    ,
    kt.extend(kt.Pages, kt.Container, ["clone", "dispose"], "zimContainer", !1),
    kt.HotSpots = function(n, o, r) {
        var e;
        if (e = zob(kt.HotSpots, arguments, "spots, local, mouseDowns", this))
            return e;
        if (z_d("72"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "HotSpots",
        !zot(n) && Array.isArray(n)) {
            zot(o) && (o = !0),
            zot(r) && (r = !1);
            for (var i, a, l = (zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", s = [], t = 0; t < n.length; t++)
                c(n[t]);
            this.addHotSpot = function(e, t, o) {
                i = {
                    page: e,
                    rect: t,
                    call: o
                },
                n.push(i),
                c(i)
            }
            ,
            this.show = function() {
                for (var e = 0; e < s.length; e++)
                    (a = s[e]).button || a.show()
            }
            ,
            this.hide = function() {
                for (var e = 0; e < s.length; e++)
                    (a = s[e]).hide()
            }
            ,
            this.removeHotSpots = function(e, t) {
                for (var o = n.length - 1; 0 <= o; o--)
                    i = n[o],
                    a = s[o],
                    t && !Array.isArray(t) && (t = [t.x, t.y, t.getBounds().width, t.getBounds().height]),
                    (zot(e) && zot(t) || zot(t) && e == i.page || zot(e) && kt.arraysEqual(t, i.rect) || e == i.page && kt.arraysEqual(t, i.rect)) && (n.splice(o, 1),
                    a.button && (a.button.off(l, a.button.zimHSEvent),
                    a.button.zimHSEvent = null,
                    r || (a.button.off("mousedown", a.button.zimHSMDEvent),
                    a.button.zimHSMDEvent = null)),
                    a.off(l, d),
                    a.dispose(),
                    s.splice(o, 1))
            }
            ,
            this.dispose = function() {
                for (var e = 0; e < s.length; e++)
                    (a = s[e]).button && (a.button.off(l, a.button.zimHSEvent),
                    a.button.zimHSCall = null,
                    a.button.zimHSEvent = null,
                    r || (a.button.off("mousedown", a.button.zimHSMDEvent),
                    a.button.zimHSMDEvent = null)),
                    a.off(l, d),
                    a.dispose();
                return !0
            }
        } else
            zog("zim controls - HotSpots():\nplease provide an array of HotSpot data");
        function c(e) {
            var t = null;
            if (!Array.isArray(e.rect)) {
                if (!(t = e.rect))
                    return void zog("zim controls - HotSpots(): HotSpot " + e.page + " " + e.rect + " button does not exist");
                e.rect = [t.x, t.y, 1, 1]
            }
            (a = new kt.HotSpot(e.page,e.rect[0],e.rect[1],e.rect[2],e.rect[3],e.call,o)).zimHSpage = e.page,
            a.button = t,
            s.push(a),
            a.on(l, d),
            t && (a.spot.mouseEnabled = !1,
            a.spot.mouseChildren = !1,
            t.zimHScall = e.call,
            t.zimHSEvent = t.on(l, d, !0),
            r || (t.zimHSMDEvent = t.on("mousedown", function(e) {
                e.stopImmediatePropagation()
            })),
            t.cursor = "pointer")
        }
        function d(e) {
            e.stopImmediatePropagation && e.stopImmediatePropagation(),
            window.event && (window.event.cancelBubble = !0),
            "function" == typeof e.currentTarget.zimHScall && e.currentTarget.zimHScall(e)
        }
    }
    ,
    kt.extend(kt.HotSpots, kt.Container, "clone", "zimContainer", !1),
    kt.HotSpot = function(e, t, o, n, r, i, a) {
        var l;
        if (l = zob(kt.HotSpot, arguments, "obj, x, y, width, height, call, local", this))
            return l;
        if (z_d("73"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "HotSpot",
        !zot(e) && e.addChild)
            if (e instanceof createjs.Container != 0)
                if (zot(t) || zot(o) || zot(n) || zot(r))
                    zog("zim controls - HotSpot():\nPlease pass in x, y, width, height");
                else {
                    zot(a) && (a = !0),
                    eventType = (zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click";
                    var s = n
                      , c = r
                      , d = new createjs.Shape
                      , u = new createjs.Shape;
                    if (a)
                        d.graphics.f("#999999").dr(t, o, s, c),
                        u.graphics.f("#999999").dr(t, o, 1, 1);
                    else {
                        var h = e.globalToLocal(t, o)
                          , g = e.globalToLocal(t + s, o + c)
                          , p = g.x - h.x
                          , f = g.y - h.y;
                        d.graphics.f("#999999").dr(h.x, h.y, p, f),
                        u.graphics.f("#999999").dr(h.x, h.y, 1, 1)
                    }
                    d.alpha = .4,
                    d.mouseEnabled = !1,
                    u.alpha = .01,
                    u.cursor = "pointer";
                    var m = (this.spot = u).on(eventType, function(e) {
                        "function" == typeof i && i()
                    });
                    e.addChild(u),
                    u.hitArea = d,
                    this.show = function() {
                        e.addChild(d)
                    }
                    ,
                    this.hide = function() {
                        e.removeChild(d)
                    }
                    ,
                    this.dispose = function() {
                        return u.off(eventType, m),
                        e.removeChild(u),
                        !(u = null)
                    }
                }
            else
                zog("zim controls - HotSpot():\nObjects passed in should be Containers");
        else
            zog("zim controls - HotSpot():\nPlease pass in container object for obj")
    }
    ,
    kt.extend(kt.HotSpot, kt.Container, "clone", "zimContainer", !1),
    kt.Guide = function(n, r, i, t, o) {
        var e;
        if (e = zob(kt.Guide, arguments, "obj, vertical, percent, hideKey, pixelKey", this))
            return e;
        if (z_d("76"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Guide",
        zot(n) && (n = Tt ? Tt.stage : "stage"),
        zot(r) && (r = !0),
        "stage" == n || n.addChild && n.getBounds && n.getBounds()) {
            zot(i) && (i = !0),
            zot(t) && (t = "G"),
            zot(o) && (o = "P");
            var a, l, s, c, d, u = this, h = 80, g = 26, p = h / 6 + h / 2, f = 2 * g;
            r ? ((c = C("#00c5af", "white", "white")).shape.regX = h + h / 6,
            c.shape.regY = g / 2,
            c.label.x = -h / 2 - h / 6) : ((c = C("#d61fa0", "white", "white")).shape.regX = h / 2,
            c.shape.regY = g + g / 4,
            c.label.y = 3 * -g / 4),
            "stage" != n && n.addChild(u);
            var m, z, v, y, b = kt.added(u, function() {
                "stage" == n ? (d = u.stage,
                n = d) : d = n.stage;
                n.addChild(u),
                m = n.getBounds().width,
                z = n.getBounds().height,
                r ? (c.y = z / 2,
                c.label.text = "y:" + (u.pixels ? Math.round(70 * m / 100) : "70%")) : (c.x = m / 2,
                c.label.text = "x:" + (u.pixels ? Math.round(70 * z / 100) : "70%"));
                v = new createjs.Shape,
                u.addChild(v),
                r ? v.x = .7 * m : v.y = .7 * z,
                w || (n.addChild(u),
                T());
                d.off("stagemousemove", a),
                a = d.on("stagemousemove", k),
                d.update()
            }), w = !1, x = {
                x: 0,
                y: 0
            };
            Object.defineProperty(this, "pixels", {
                get: function() {
                    return !i
                },
                set: function(e) {
                    i = !e,
                    u.resize()
                }
            }),
            window.addEventListener("keydown", A),
            this.toggled = !0,
            this.toggle = function(e) {
                return !0 === e ? u.visible = u.toggled = !0 : !1 === e ? u.visible = u.toggled = !1 : (u.visible = !u.visible,
                u.toggled = u.visible),
                d.off("stagemousemove", a),
                u.visible && (a = d.on("stagemousemove", k, u)),
                u
            }
            ,
            this.resize = function() {
                return !!u && (d && (T(),
                k()),
                !0)
            }
            ,
            this.dispose = function() {
                return !!u && (kt.noDrag(v),
                clearInterval(b),
                u.removeAllChildren(),
                window.removeEventListener("keydown", A),
                u.parent && u.parent.removeChild(u),
                !(u = null))
            }
        } else
            zog("zim controls - Guide(): Please provide container with bounds for the obj (setBounds())");
        function C(e, t, o) {
            var n = new kt.Container({
                style: !1
            });
            return n.shape = new createjs.Shape,
            n.shape.graphics.s(t).ss(1).f(e).r(0, 0, h, g),
            n.shape.alpha = .9,
            n.addChild(n.shape),
            n.label = new createjs.Text("10","16px arial",o),
            n.label.textAlign = "center",
            n.label.textBaseline = "middle",
            n.addChild(n.label),
            n.mouseChildren = !1,
            n.mouseEnabled = !1,
            n
        }
        function k(e) {
            var t, o;
            e ? (t = n.globalToLocal(e.rawX, e.rawY),
            x = t) : t = {
                x: x.x,
                y: x.y
            },
            i ? r ? (o = Math.round(Math.abs(t.x - v.x) / m * 100),
            c.label.text = "x:" + Math.max(0, Math.min(o, 100)) + "%",
            c.y = Math.max(f, Math.min(t.y, s))) : (o = Math.round(Math.abs(t.y - v.y) / z * 100),
            c.label.text = "y:" + Math.max(0, Math.min(o, 100)) + "%",
            c.x = Math.max(p, Math.min(t.x, l))) : r ? (o = Math.round(Math.abs(t.x - v.x)),
            c.label.text = "x:" + Math.max(0, Math.min(o, Math.round(m))),
            c.y = Math.max(f, Math.min(t.y, s))) : (o = Math.round(Math.abs(t.y - v.y)),
            c.label.text = "y:" + Math.max(0, Math.min(o, Math.round(z))),
            c.x = Math.max(p, Math.min(t.x, l))),
            d && d.update()
        }
        function T() {
            var e;
            w = !0,
            m = n.getBounds().width,
            z = n.getBounds().height,
            r ? (e = "ew-resize",
            y = new createjs.Rectangle(0,0,m,0)) : (e = "ns-resize",
            y = new createjs.Rectangle(0,0,0,z)),
            kt.noDrag(v),
            setTimeout(function() {
                kt.drag(v, y, e, e, null, null, !0)
            }, 500),
            d.mouseMoveOutside = !0,
            d.enableMouseOver(10),
            l = m - 2 * h / 3,
            s = z - g - g,
            v.uncache();
            var t = v.graphics;
            r ? (t.c().s("rgba(0,255,255,.1)").ss(20).mt(0, 0).lt(0, z),
            t.f().s("white").ss(2).mt(0, 0).lt(0, z),
            t.s("#00c5af").sd([20, 20]).mt(0, 0).lt(0, z).sd(),
            v.cache(-10, 0, 20, z)) : (t.c().s("rgba(255,0,255,.1)").ss(20).mt(0, 0).lt(m, 0),
            t.f().s("white").ss(2).mt(0, 0).lt(m, 0),
            t.s("#d61fa0").sd([20, 20]).mt(0, 0).lt(m, 0).sd(),
            v.cache(0, -10, m, 20)),
            r ? c.x = m : c.y = z,
            u.addChild(c)
        }
        function A(e) {
            e || (e = event),
            d && (String.fromCharCode(e.keyCode) == t.toUpperCase() && u.toggle(),
            String.fromCharCode(e.keyCode) == o.toUpperCase() && (u.pixels = !u.pixels))
        }
    }
    ,
    kt.extend(kt.Guide, kt.Container, "clone", "zimContainer", !1),
    kt.Grid = function(r, i, a, t, o) {
        var e;
        if (e = zob(kt.Grid, arguments, "obj, color, percent, hideKey, pixelKey", this))
            return e;
        if (z_d("78"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Grid",
        zot(r) && (r = Tt ? Tt.stage : "stage"),
        zot(i) && (i = "black"),
        "stage" == r || r.addChild && r.getBounds && r.getBounds()) {
            zot(a) && (a = !0),
            zot(t) && (t = "G"),
            zot(o) && (o = "P");
            var n, l = this, s = 10;
            this.mouseChildren = !1,
            this.mouseEnabled = !1;
            var c = 80
              , d = 26
              , u = k("#dddddd", i, "#333333");
            u.shape.regX = c / 2,
            u.shape.regY = -d / 4,
            u.label.y = 3 * d / 4;
            var h = k("#dddddd", i, "#333333");
            h.shape.regX = -c / 6,
            h.shape.regY = d / 2,
            h.label.x = c / 2 + c / 6;
            var g, p, f, m = c / 6 + c / 2, z = 2 * d;
            u.x = m,
            h.y = z,
            u.label.text = "x:0",
            h.label.text = "y:0",
            "stage" != r && r.addChild(l);
            var v, y, b, w = kt.added(l, function() {
                "stage" == r ? (f = l.stage,
                r = f) : f = r.stage;
                x || (A(),
                r.addChild(l));
                f.off("stagemousemove", n),
                n = f.on("stagemousemove", T),
                f.update()
            }), x = !1, C = {
                x: 0,
                y: 0
            };
            Object.defineProperty(this, "pixels", {
                get: function() {
                    return !a
                },
                set: function(e) {
                    a = !e,
                    l.resize()
                }
            }),
            window.addEventListener("keydown", B),
            this.toggled = !0,
            this.toggle = function(e) {
                return !0 === e ? l.visible = l.toggled = !0 : !1 === e ? l.visible = l.toggled = !1 : (l.visible = !l.visible,
                l.toggled = l.visible),
                f.off("stagemousemove", n),
                l.visible && (n = f.on("stagemousemove", T, l)),
                l
            }
            ,
            this.resize = function() {
                return !!l && (l.removeChild(b),
                b = null,
                f && (A(),
                T(),
                setTimeout(function() {
                    l.removeChild(b),
                    b = null,
                    A()
                }, 200)),
                !0)
            }
            ,
            this.dispose = function() {
                return clearInterval(w),
                l.removeAllChildren(),
                window.removeEventListener("keydown", B),
                l.parent && l.parent.removeChild(l),
                !(l = null)
            }
        } else
            zog("zim controls - Grid(): Please provide container with bounds for the obj (setBounds())");
        function k(e, t, o) {
            var n = new kt.Container({
                style: !1
            });
            return n.shape = new createjs.Shape,
            n.shape.graphics.s(t).ss(1).f(e).r(0, 0, c, d),
            n.shape.alpha = .9,
            n.addChild(n.shape),
            n.label = new createjs.Text("10","16px arial",o),
            n.label.textAlign = "center",
            n.label.textBaseline = "middle",
            n.addChild(n.label),
            n.mouseChildren = !1,
            n.mouseEnabled = !1,
            n
        }
        function T(e) {
            var t;
            e ? (t = r.globalToLocal(e.rawX, e.rawY),
            C = t) : t = {
                x: C.x,
                y: C.y
            },
            a ? (u.label.text = "x:" + Math.max(0, Math.min(Math.round(t.x / v * 100), 100)) + "%",
            u.x = Math.max(m, Math.min(t.x, g)),
            h.label.text = "y:" + Math.max(0, Math.min(Math.round(t.y / y * 100), 100)) + "%") : (u.label.text = "x:" + Math.max(0, Math.min(Math.round(t.x), Math.round(v))),
            u.x = Math.max(m, Math.min(t.x, g)),
            h.label.text = "y:" + Math.max(0, Math.min(Math.round(t.y), Math.round(y)))),
            h.y = Math.max(z, Math.min(t.y, p)),
            f && f.update()
        }
        function A() {
            x = !0,
            r && r.getBounds && (v = r.getBounds().width,
            y = r.getBounds().height),
            f && (f.mouseMoveOutside = !0,
            f.enableMouseOver(10)),
            g = v - 2 * c / 3,
            p = y - d - d,
            b = new kt.Container({
                style: !1
            }),
            l.addChild(b);
            var e = new createjs.Shape;
            b.addChild(e);
            var t = e.graphics;
            t.s(i).ss(1);
            var o = new createjs.Shape;
            if (b.addChild(o),
            a) {
                for (n = 1; n < 22; n++)
                    t.mt(n * v / 20, 0).lt(n * v / 20, y);
                for (n = 1; n < 20; n++)
                    t.mt(0, n * y / 20).lt(v, n * y / 20);
                e.alpha = .3,
                (t = o.graphics).s(i).ss(1);
                for (n = 1; n < 10; n++)
                    t.mt(n * v / 10, 0).lt(n * v / 10, y);
                for (n = 1; n < 10; n++)
                    t.mt(0, n * y / 10).lt(v, n * y / 10)
            } else {
                for (var n = 0; n < v / s; n++)
                    t.mt(n * s, 0).lt(n * s, y);
                for (var n = 0; n < y / s; n++)
                    t.mt(0, n * s).lt(v, n * s);
                e.alpha = .3,
                (t = o.graphics).s(i).ss(1);
                for (var n = 0; n < v / (10 * s); n++)
                    t.mt(n * (10 * s), 0).lt(n * (10 * s), y);
                for (var n = 0; n < y / (10 * s); n++)
                    t.mt(0, n * (10 * s)).lt(v, n * (10 * s))
            }
            t.s("#FFFFFF").ss(8),
            t.mt(v / 2, y / 2 - 40).lt(v / 2, y / 2 + 40),
            t.mt(v / 2 - 40, y / 2).lt(v / 2 + 40, y / 2),
            t.s("#000000").ss(4),
            t.mt(v / 2, y / 2 - 40).lt(v / 2, y / 2 + 40),
            t.mt(v / 2 - 40, y / 2).lt(v / 2 + 40, y / 2),
            t.s(i).ss(3),
            t.dr(0, 0, v, y),
            o.alpha = .5,
            b.cache(0, 0, v, y),
            l.addChild(u),
            l.addChild(h),
            f && f.update()
        }
        function B(e) {
            e || (e = event),
            f && (String.fromCharCode(e.keyCode) == t.toUpperCase() && l.toggle(),
            String.fromCharCode(e.keyCode) == o.toUpperCase() && (l.removeChild(b),
            b = null,
            l.pixels = !l.pixels))
        }
    }
    ,
    kt.extend(kt.Grid, kt.Container, "clone", "zimContainer", !1),
    kt.Tile = function(e, t, o, n, r, i, a, l, s, c, d, p, f, u, g, m, z, v) {
        var y;
        if (y = zob(kt.Tile, arguments, "obj, cols, rows, spacingH, spacingV, width, height, squeezeH, squeezeV, colSize, rowSize, align, valign, count, mirrorH, mirrorV, snapToPixel, clone", this))
            return y;
        z_d("66.5"),
        this.zimContainer_constructor(null, null, null, null, !1),
        this.type = "Tile",
        zot(t) && (t = 1),
        zot(o) && (o = 1),
        zot(i) || (c = null),
        zot(a) || (d = null),
        !zot(n) && zot(c) || (n = 0),
        !zot(r) && zot(d) || (r = 0),
        zot(l) && (l = !1),
        zot(s) && (s = !1),
        zot(p) && (p = "left"),
        zot(f) && (f = "top"),
        0 == u && (u = null,
        zon && zog("ZIM Tile() - count parameter of 0 is ignored - see docs")),
        zot(g) && (g = !1),
        zot(m) && (m = !1),
        zot(z) && (z = !0),
        z && (e && e.stage ? e.stage.snapToPixelEnabled = !0 : "undefined" != typeof elem && Tt && (Tt.stage.snapToPixelEnabled = !0)),
        zot(v) && (v = !0);
        var b = this;
        b.cols = t,
        b.rows = o,
        b.spacingH = n,
        b.spacingV = r,
        b.squeezeH = l,
        b.squeezeV = s;
        var x, C = "function" == typeof p, k = "function" == typeof f;
        b.align = C ? "left" : p,
        b.valign = k ? "top" : f,
        b.mirrorH = g,
        b.mirrorV = m,
        b.items = [];
        var T, A, B, S, P, E, M, I, j, O, Y, L, D, X, R = 0;
        e: for (var _ = 0; _ < o; _++)
            for (var W = 0; W < t; W++) {
                if (R++,
                !zot(u) && u < R)
                    break e;
                zot(x = zik(e)) && (x = new kt.Container(0,0,0,0)),
                v && (x = x.clone()),
                b.items.push(x)
            }
        function H() {
            b.removeAllChildren(),
            T = [],
            A = [],
            B = [],
            S = [],
            P = [],
            j = I = M = E = 0,
            O = [],
            Y = [],
            L = [],
            X = [],
            D = [],
            b.items && b.items.length || (b.items = []),
            u = b.items.length;
            for (var e, t = 0, o = 0, n = 0, r = 0; r < u; r++)
                o = Math.floor(r / b.cols),
                n = r % b.cols,
                zot(T[o]) && (T[o] = []),
                zot(b.items[r]) && (b.items[r] = new Container(0,0,0,0)),
                T[o][n] = b.items[r];
            b.rows = Math.max(1, T.length),
            b.cols = Math.max(1, zot(T[0]) ? 0 : T[0].length);
            e: for (o = 0; o < b.rows; o++) {
                O.push([]),
                Y.push([]),
                X.push([]),
                d && zot(a) && (h = zik(d));
                for (r = 0; r < b.cols; r++) {
                    if (t++,
                    !zot(u) && u < t)
                        break e;
                    (e = T[o][r]).snapToPixel = z,
                    b.addChild(e),
                    O[o].push(e.scaleX),
                    Y[o].push(e.scaleY),
                    0 == o && c && zot(i) && (w = zik(c)),
                    0 == o && D.push(zik(p)),
                    c && zot(i) || (w = e.width),
                    d && zot(a) || (h = e.height),
                    X[o][r] = [w, h],
                    zot(S[r]) && (S[r] = 0),
                    zot(P[o]) && (P[o] = 0),
                    w > S[r] && (S[r] = w),
                    h > P[o] && (P[o] = h),
                    zot(A[o]) && (A[o] = 0),
                    zot(B[r]) && (B[r] = 0),
                    A[o] += w,
                    B[r] += h,
                    A[o] > E && (E = A[o]),
                    B[r] > M && (M = B[r]),
                    zot(L[r]) && (L[r] = 0),
                    L[r]++
                }
            }
            !1 === b.squeezeH && loop(S, function(e) {
                I += e
            }),
            !1 === b.squeezeV && loop(P, function(e) {
                j += e
            })
        }
        function V(e, t) {
            var o, n, r, i;
            e <= 0 && (e = null),
            t <= 0 && (t = null),
            o = zot(e) || "full" != b.squeezeH ? zot(e) ? 0 < I ? I + (b.cols - 1) * b.spacingH : E + (b.cols - 1) * b.spacingH : Math.max(E + (b.cols - 1) * b.spacingH, e) : e,
            n = zot(t) || "full" != b.squeezeV ? zot(t) ? 0 < j ? j + (b.rows - 1) * b.spacingV : M + (b.rows - 1) * b.spacingV : Math.max(M + (b.rows - 1) * b.spacingV, t) : t,
            b.setBounds(0, 0, o, n);
            var a = []
              , l = []
              , s = [];
            for (_ = 0; _ < T.length; _++)
                for (r = T[_],
                i = 0,
                zot(e) || 0,
                W = 0; W < r.length; W++) {
                    var c, d, u;
                    x = r[W],
                    0 == _ && (a[W] = 0,
                    zot(t) || ("full" == b.squeezeV ? l[W] = 1 < L[W] ? (t - B[W]) / (L[W] - 1) : 0 : b.squeezeV ? l[W] = 1 < L[W] ? Math.max(b.spacingV, (t - B[W]) / (L[W] - 1)) : 0 : l[W] = 1 < L[W] ? Math.max(b.spacingV, (n - B[W]) / (L[W] - 1)) : 0),
                    b.squeezeV ? "center" == b.valign || "middle" == b.valign ? s[W] = (n - (B[W] + (L[W] - 1) * (zot(t) ? b.spacingV : l[W]))) / 2 : "bottom" == b.valign ? s[W] = n - (B[W] + (L[W] - 1) * (zot(t) ? b.spacingV : l[W])) : s[W] = 0 : s[W] = 0),
                    c = x.getBounds(),
                    0 == W && (zot(e) || (u = "full" == b.squeezeH ? 1 < r.length ? (e - A[_]) / (r.length - 1) : 0 : b.squeezeH ? 1 < r.length ? Math.max(b.spacingH, (e - A[_]) / (r.length - 1)) : 0 : 1 < r.length ? Math.max(b.spacingH, (o - A[_]) / (r.length - 1)) : 0),
                    d = b.squeezeH ? "center" == b.align || "middle" == b.align ? (o - (A[_] + (r.length - 1) * (zot(e) ? b.spacingH : u))) / 2 : "right" == b.align ? o - (A[_] + (r.length - 1) * (zot(e) ? b.spacingH : u)) : 0 : 0,
                    finalVAlign = zik(f)),
                    p = D[W];
                    var h = X[_][W][0]
                      , g = X[_][W][1];
                    b.mirrorH && W % 2 == 1 ? (x.scaleX = -O[_][W],
                    x.x = i + h - 2 * c.x * x.scaleX) : x.x = i + x.regX - c.x,
                    !b.squeezeH && C ? !zot(e) || "center" != p && "middle" != p ? zot(e) && "right" == p && (x.x += S[W] - x.width) : x.x += (S[W] - x.width) / 2 : b.squeezeH ? !zot(e) || "center" != b.align && "middle" != b.align ? zot(e) && "right" == b.align && (x.x += h - x.width) : x.x += (h - x.width) / 2 : !zot(e) || "center" != b.align && "middle" != b.align ? zot(e) && "right" == b.align && (x.x += S[W] - x.width) : x.x += (S[W] - x.width) / 2,
                    b.mirrorV && _ % 2 == 1 ? (x.scaleY = -Y[_][W],
                    x.y = a[W] + g - 2 * c.y * x.scaleY) : x.y = a[W] + x.regY - c.y,
                    !b.squeezeV && k ? !zot(t) || "center" != finalVAlign && "middle" != finalVAlign ? zot(t) && "bottom" == finalVAlign && (x.y += P[_] - x.height) : x.y += (P[_] - x.height) / 2 : b.squeezeV ? !zot(t) || "center" != b.valign && "middle" != b.valign ? zot(t) && "bottom" == b.valign && (x.y += g - x.height) : x.y += (g - x.height) / 2 : !zot(t) || "center" != b.valign && "middle" != b.valign ? zot(t) && "bottom" == b.valign && (x.y += P[_] - x.height) : x.y += (P[_] - x.height) / 2,
                    !0 !== b.squeezeH && zot(e) ? i += S[W] + (zot(e) ? b.spacingH : u) : i += h + (zot(e) ? b.spacingH : u),
                    x.x += d,
                    x.y += s[W],
                    !0 !== b.squeezeV && zot(t) ? a[W] += P[_] + (zot(t) ? b.spacingV : l[W]) : a[W] += g + (zot(t) ? b.spacingV : l[W])
                }
        }
        H(),
        V(i, a),
        this.remake = function(e) {
            return zot(e) || (b.items = e),
            H(),
            V(i, a),
            b
        }
        ,
        this.resize = function(e, t) {
            return zot(e) && (e = i),
            zot(t) && (t = a),
            V(i = e, a = t),
            b
        }
        ,
        this.clone = function() {
            return b.cloneProps(new kt.Tile(e,b.cols,b.rows,b.spacingH,b.spacingV,i,a,b.squeezeH,b.squeezeV,c,d,p,f,b.items.length,b.mirrorH,b.mirrorV,z,this.style,this.group))
        }
    }
    ,
    kt.extend(kt.Tile, kt.Container, "clone", "zimContainer", !1),
    kt.Layout = function(y, b, w, x, C, k, T, t) {
        var e;
        if (e = zob(kt.Layout, arguments, "holder, regions, lastMargin, backgroundColor, vertical, regionShape, scalingObject, hideKey", this))
            return e;
        if (z_d("80"),
        this.cjsEventDispatcher_constructor(),
        this.type = "Layout",
        !zot(y) && y.getBounds)
            if ((T = zot(T) ? y : T).getBounds && T.getBounds()) {
                var A = T.getBounds();
                y.setBounds(0, 0, A.width, A.height),
                zot(w) && (w = 0),
                zot(C) && (C = !0),
                zot(x) && (x = ""),
                zot(t) && (t = "B");
                var B, S = new createjs.Shape, P = this;
                this.active = !0,
                this.regions = b;
                var E = 0
                  , M = "minWidth"
                  , I = "width"
                  , j = "height"
                  , O = "marginLeft"
                  , Y = "maxHeight";
                C && (M = "minHeight",
                I = "height",
                j = "width",
                O = "marginTop",
                Y = "maxWidth",
                "y",
                "x");
                for (var o = 0; o < b.length; o++) {
                    if (!(B = b[o]).object || !B.object.getBounds())
                        return void zog("zim controls - Layout(): each region object must have an object with setBounds() set");
                    B[M] || (B[M] = 0),
                    B[I] || (B[I] = 0),
                    B.backgroundColor || (B.backgroundColor = ""),
                    B.given = 0,
                    B.maxGiven = 0,
                    zot(B[O]) && (B[O] = 1e-4),
                    B[Y] || (B[Y] = 100),
                    C ? (B.align || (B.align = "middle"),
                    B.valign || (0 == o ? B.valign = "top" : o == b.length - 1 ? B.valign = "bottom" : B.valign = "middle",
                    1 == b.length && (B.valign = "middle"))) : (B.valign || (B.valign = "top"),
                    B.align || (0 == o ? B.align = "left" : o == b.length - 1 ? B.align = "right" : B.align = "middle",
                    1 == b.length && (B.align = "middle"))),
                    B[I] && (B[M] = 0),
                    E += B[I] + B[O]
                }
                if (100 < (E += w))
                    zog("zim controls - Layout(): cannot fit regions into 100% bounds");
                else {
                    var L = 100 - E;
                    D(),
                    this.resize = function() {
                        if (P.active) {
                            A = T.getBounds(),
                            y.setBounds(0, 0, A.width, A.height),
                            S.graphics.clear(),
                            "" != x && S.graphics.f(x).r(0, 0, A.width, A.height);
                            for (var e = 0; e < b.length; e++)
                                (B = b[e]).maxGiven = 0,
                                B.marginGiven = 0;
                            for (var t, o, n, r = !0, i = L; r; ) {
                                t = !(r = !1);
                                for (e = 0; e < b.length; e++)
                                    0 < (B = b[e]).given && 0 == B.maxGiven && (u = B.object.getBounds()[I],
                                    h = B.object.getBounds()[j],
                                    o = B.given * A[I] / 100,
                                    (n = B[Y] * A[j] / 100) < h / u * o ? (B.maxGiven = u / h * n * 100 / A[I],
                                    B.given - B.maxGiven,
                                    i -= B.maxGiven) : t = !1);
                                if (t)
                                    break;
                                for (e = totalPrimaries = 0; e < b.length; e++)
                                    0 == (B = b[e])[I] && 0 == B.maxGiven && (totalPrimaries += B.object.getBounds()[I]);
                                for (e = 0; e < b.length; e++)
                                    0 == (B = b[e])[I] && 0 == B.maxGiven && (B.given = B.object.getBounds()[I] / totalPrimaries * i)
                            }
                            var a = !0;
                            if (0 < (B = b[0]).maxGiven ? B.maxGiven < B[M] && (B[I] = B[M],
                            a = !1) : 0 < B.given && B.given < B[M] && (B[I] = B[M],
                            a = !1),
                            0 < (B = b[b.length - 1]).maxGiven ? B.maxGiven < B[M] && (B[I] = B[M],
                            a = !1) : 0 < B.given && B.given < B[M] && (B[I] = B[M],
                            a = !1),
                            !a) {
                                for (e = E = 0; e < b.length; e++)
                                    B = b[e],
                                    E += B[I] + B[O];
                                return 100 < (E += w) ? void zog("zim display - Layout(): cannot fit regions into 100% bounds") : (L = 100 - E,
                                D(),
                                void P.resize())
                            }
                            var l = !0
                              , s = 0
                              , c = 0;
                            for (e = 0; e < b.length; e++)
                                s += (B = b[e])[O],
                                0 < B[I] ? c += B[I] : 0 < B.maxGiven ? c += B.maxGiven : 0 < B.given && (c += B.given),
                                0 == B[I] && (l = !1);
                            if (l || t) {
                                var d = 100 - c - (s += w);
                                if (s -= w + b[0][O],
                                0 != d && 0 != s)
                                    for (e = 0; e < b.length; e++)
                                        0 != e && ((B = b[e]).marginGiven = B[O] / s * (s + d))
                            }
                            var u, h, g, p, f, m = 0, z = 0;
                            if (k && k.graphics) {
                                var v = k.graphics;
                                v.c()
                            }
                            for (e = 0; e < b.length; e++)
                                0 < (B = b[e]).marginGiven ? m += B.marginGiven * A[I] / 100 : m += B[O] * A[I] / 100,
                                u = (u = 0 < B[I] ? B[I] : 0 < B.maxGiven ? B.maxGiven : 0 < B.given ? B.given : 0) * A[I] / 100,
                                h = B[Y] * A[j] / 100,
                                z = (A[j] - h) / 2,
                                g = C ? kt.fit(B.object, z, m, h, u) : kt.fit(B.object, m, z, u, h),
                                "top" == B.valign ? B.object.y = g.bY : "bottom" == B.valign && (B.object.y = g.bY + g.bHeight - g.height),
                                "left" == B.align ? B.object.x = g.bX : "right" == B.align && (B.object.x = g.bX + g.bWidth - g.width),
                                k && k.graphics && (v.s("white").ss(2).r(g.bX, g.bY, g.bWidth, g.bHeight),
                                v.s("#ff8203").sd([20, 20]).r(g.bX, g.bY, g.bWidth, g.bHeight).sd()),
                                f = p = 0,
                                0 != m && m + u != A[I] || (C ? f = 1 : p = 1),
                                h == A[j] && (C ? p = 1 : f = 1),
                                "" != B.backgroundColor && S.graphics.f(B.backgroundColor).r(g.bX, g.bY, g.bWidth + p, g.bHeight + f),
                                m += u
                        }
                    }
                    ,
                    this.resize(),
                    k && y.addChild(k),
                    y.addChildAt(S, 0),
                    window.addEventListener("keydown", n),
                    this.disable = function() {
                        P.active = !1,
                        window.removeEventListener("keydown", n),
                        k && (k.alpha = 0)
                    }
                    ,
                    this.enable = function() {
                        P.active = !0,
                        window.addEventListener("keydown", n),
                        P.resize(),
                        k && (k.alpha = 1)
                    }
                    ,
                    this.removeShape = function() {
                        k && (k.graphics.clear(),
                        y.removeChild(k),
                        k = null,
                        k = !1),
                        window.removeEventListener("keydown", n)
                    }
                    ,
                    this.toggled = !0,
                    this.toggle = function(e) {
                        return k.visible = !0 === e || !1 !== e && !k.visible,
                        P.toggled = k.visible,
                        P
                    }
                    ,
                    this.addShape = function(e, t) {
                        P.removeShape(),
                        k = e,
                        window.addEventListener("keydown", n),
                        y.addChild(k),
                        P.resize()
                    }
                    ,
                    this.dispose = function() {
                        return P.removeShape(),
                        !0
                    }
                }
            } else
                zog("zim controls - Layout(): holder must have bounds set or provide a scalingObject with bounds");
        else
            zog("zim controls - Layout(): please provide an object with bounds set that holds the objects being laid out");
        function D() {
            for (var e = 0, t = 0; t < b.length; t++)
                ((B = b[t]).given = 0) == B[I] && (e += B.object.getBounds()[I]);
            for (t = 0; t < b.length; t++)
                0 == (B = b[t])[I] && (B.given = B.object.getBounds()[I] / e * L)
        }
        function n(e) {
            e || (e = event),
            k && String.fromCharCode(e.keyCode) == t.toUpperCase() && (P.toggle(),
            k.stage && k.stage.update())
        }
    }
    ,
    kt.extend(kt.Layout, createjs.EventDispatcher, null, "cjsEventDispatcher", !1),
    kt.Accessibility = function(u, e, o, t, n, g, r, i, a, l, s, c, d, h) {
        var p;
        if (p = zob(kt.Accessibility, arguments, "appName, tabOrder, tabIndex, cycle, decimals, frame, alwaysHighlight, AHTime, AHColor, AHBorderWidth, AHBorderPadding, AHAlpha, AHObject, AHObjectScale", this))
            return p;
        if (z_d("30.5"),
        this.cjsEventDispatcher_constructor(),
        this.type = "Accessibility",
        zot(u) && (u = "application"),
        zot(t) && (t = !1),
        zot(n) && (n = 2),
        zot(g) && (g = Tt),
        zot(r) && (r = !1),
        zot(i) && (i = 700),
        zot(a) && (a = "brown"),
        zot(l) && (l = 3),
        zot(s) && (s = 5),
        zot(c) && (c = .8),
        zot(h) && (h = .8),
        zot(d)) {
            var f = new kt.Shape({
                style: !1
            });
            f.mouseEnabled = !1
        } else
            d.mouseEnabled && (d.mouseEnabled = !1);
        var m = this;
        m.cycle = t,
        m.decimals = n,
        m.alwaysHighlight = r,
        m.AHTime = i,
        m.AHColor = a,
        m.AHBorderWidth = l,
        m.AHBorderPadding = s,
        m.AHAlpha = c,
        m.AHObjectScale = h;
        var z, v, y, b, w, x, C, k, T = -1, A = -1, B = [], S = [], P = {
            RadioButtons: "option",
            Tabs: "tab",
            Pad: "key"
        }, E = g.canvas.id, M = kt.mobile(), I = !1, j = null, O = [];
        function Y(e) {
            var t = e.currentTarget.boundsToGlobal()
              , o = t.x + t.width / 2
              , n = t.y + t.height / 2;
            e.stageX < o - 5 || e.stageX > o + 5 || e.stageY < n - 5 || e.stageY > n + 5 ? X() : D()
        }
        function L() {
            b && (b.innerHTML = "")
        }
        function D() {
            var e, t;
            j = !0,
            H(),
            b && b.setAttribute("aria-hidden", !1),
            kt.ACTIONEVENT = "click",
            zns || (ACTIONEVENT = "click"),
            g.stage.removeChild(z),
            m.alwaysHighlight = !1,
            g.stage.update();
            for (var o = 0; o < T.length; o++)
                (t = (e = T[o]).obj.zimTabTag).disabled = !1,
                e.title = e.title.replace(/\s\(use arrow keys\)/, ""),
                t.setAttribute("aria-label", e.title),
                t.addEventListener("focus", R)
        }
        function X() {
            j = !1;
            for (var e = 0; e < T.length; e++)
                T[e].obj.zimTabTag.disabled = !1;
            H(),
            r && function() {
                for (var e = 0; e < B.length; e++) {
                    var t = B[e];
                    (!t.zimObject || "Loader" != t.zimObject.type && "TextArea" != t.zimObject.type && "Tag" != t.zimObject.type) && (B[e].style.left = "-2000px")
                }
            }()
        }
        function R(e) {
            var t = e.currentTarget
              , o = t.zimObject;
            A = o.zimTabIndex,
            o.focus = !0;
            var n = new createjs.Event("change");
            n.title = t.getAttribute("aria-label"),
            m.dispatchEvent(n)
        }
        function _(e) {
            j = !1,
            e.target.focusTab.focus()
        }
        function W() {
            zot(j) || j ? D() : X()
        }
        function H() {
            I = !0,
            v.removeEventListener("focus", W),
            y.removeEventListener("focus", W),
            w.removeEventListener("focus", _),
            x.removeEventListener("focus", _),
            w.parentNode.removeChild(w),
            x.parentNode.removeChild(x),
            C.removeEventListener("focus", _),
            k.removeEventListener("focus", _),
            C.parentNode.removeChild(C),
            k.parentNode.removeChild(k);
            for (var e = 0; e < O.length; e++)
                O[e][0].off("mousedown", O[e][1])
        }
        function V(e) {
            var t = e.currentTarget;
            if ("RadioButton" == t.type || "TabsButton" == t.type || "PadButton" == t.type)
                for (var o = 0; o < t.zimTabParent.buttons.length; o++) {
                    var n = t.zimTabParent.buttons[o];
                    n.zimTabTag.setAttribute("aria-label", n.zimTabTag.getAttribute("aria-label").split(" - currently")[0] + (t.zimTabParent.selectedIndex == n.tabIndex ? " - currently selected." : " - currently not selected."))
                }
            m.tabIndex = e.currentTarget.zimTabIndex,
            m.activatedObject = t
        }
        function F(e) {
            return "TextArea" == e.type || "RadioButtons" == e.type || "Tabs" == e.type || "Pad" == e.type ? e.type : "Waiter" == e.type ? "Waiter active - please wait" : e.text ? e.type + " - " + ("a" == e.text || "A" == e.text ? "eh" : e.text) : e.type + ("Dial" == e.type || "Slider" == e.type || "ColorPicker" == e.type || "Stepper" == e.type ? " (use arrow keys)" : "") + ("TextArea" == e.type ? " (press ENTER to edit)" : "")
        }
        function N(e) {
            var t = e.obj;
            e.title = e.title.replace(/\.$/, ""),
            "RadioButton" == t.type || "TabsButton" == t.type || "PadButton" == t.type ? e.title = e.title + (t.tabIndex == t.zimTabParent.selectedIndex ? " - currently selected" : " - currently not selected") : "CheckBox" == t.type ? e.title = e.title + (t.checked ? " - currently checked" : " - currently not checked") : "Stepper" == t.type ? e.title = e.title + " - currently displaying " + t.currentValue : "Slider" == t.type || "Dial" == t.type ? e.title = e.title + " - currently at " + kt.decimals(t.currentValue, m.decimals) : "ColorPicker" == t.type ? e.title = e.title + " - currently at " + t.selectedColor : "TextArea" == t.type ? e.title = e.title + ("" != t.tag.value ? "" : " - placeholder: " + t.tag.placeholder) : "Indicator" == t.type && (e.title = e.title + " - currently " + (0 <= t.selectedIndex ? "at " + (t.selectedIndex + 1) + " of " + t.num : "not indicating")),
            e.title += "."
        }
        function G(e, t, o, n, r) {
            var i;
            if (n && (u = n.obj),
            n && ("TextArea" == u.type || "Loader" == u.type))
                return (i = u.tag).setAttribute("aria-label", t),
                u && i.setAttribute("aria-hidden", !u.stage),
                "before" == r ? o.parentNode.insertBefore(i, o) : o.parentNode.insertBefore(i, o.nextSibling),
                i.style.zIndex = -5,
                i.zimObject = u,
                n.obj.zimTabTag = i,
                B.push(i),
                i;
            if (!n || "Dial" != u.type && "Slider" != u.type && "Stepper" != u.type && "ColorPicker" != u.type)
                i = document.createElement("div"),
                u && (i.zimObject = u),
                i.innerHTML = "tag",
                i.setAttribute("role", "button");
            else {
                var a, l, s = [];
                if ("Dial" == u.type || "Slider" == u.type)
                    for (var c = u.step <= 0 ? (u.max - u.min) / 20 : u.step, d = u.min; d < u.max; d += c)
                        s.push(u.min + d);
                else
                    "Stepper" == u.type ? s = u.stepperArray : "ColorPicker" == u.type && (s = u.colors);
                (i = document.createElement("select")).disabled = !0,
                i.zimObject = u,
                i.addEventListener("change", function(e) {
                    j && (e.currentTarget.zimObject.zimTabParent.currentValueEvent = e.target.value,
                    g.stage.update())
                }),
                i.size = 1;
                for (d = 0; d < s.length; d++)
                    a = s[d],
                    (l = document.createElement("option")).setAttribute("aria-label", a),
                    l.innerHTML = a,
                    i.add(l),
                    a == u.zimTabParent.currentValue && l.setAttribute("selected", "selected");
                i.setAttribute("role", "button")
            }
            if (i.setAttribute("id", e),
            i.setAttribute("tabindex", 0),
            i.setAttribute("aria-label", t),
            u && i.setAttribute("aria-hidden", !u.stage),
            "before" == r ? o.parentNode.insertBefore(i, o) : o.parentNode.insertBefore(i, o.nextSibling),
            i.style.position = "absolute",
            n) {
                var u, h = (u = n.obj).boundsToGlobal();
                i.style.left = g.x + h.x * g.scale + "px",
                i.style.top = g.y + h.y * g.scale + "px",
                i.style.width = h.width * g.scale + "px",
                i.style.height = h.height * g.scale + "px",
                n.obj.zimTabTag = i
            } else
                i.style.left = "-1000px",
                i.style.top = g.y + "px";
            return i.style.overflow = "hidden",
            i.style.zIndex = -5,
            i.style.fontSize = "20px",
            B.push(i),
            i
        }
        Object.defineProperty(this, "tabOrder", {
            get: function() {
                return T
            },
            set: function(e) {
                v && v.removeEventListener("focus", L),
                y && y.removeEventListener("focus", L);
                for (var t = 0; t < B.length; t++)
                    B[t].parentElement && (B[t].outerHTML = "");
                var o, n;
                for (B = [],
                t = 0; t < S.length; t++)
                    (o = T[t]) && S[t][0].off("mousedown", S[t][1]);
                S = [],
                T = [];
                var r = []
                  , i = g.canvas
                  , a = 0;
                for (t = 0; t < e.length; t++) {
                    if ((o = e[t]).constructor == {}.constructor) {
                        if (!(n = o.obj) || !n.getStage)
                            continue;
                        o.title || (o.title = F(n))
                    } else
                        o = {
                            obj: n = o,
                            title: F(o)
                        };
                    if ("RadioButtons" == n.type || "Tabs" == n.type || "Pad" == n.type) {
                        var l = [];
                        a--;
                        for (var s = 0; s < n.buttons.length; s++) {
                            a++;
                            var c = n.buttons[s]
                              , d = {
                                obj: c,
                                title: o.title + " - " + P[n.type] + ": " + ("a" == c.text || "A" == c.text ? "eh" : c.text)
                            };
                            l.push(d),
                            c.zimTabParent = n,
                            c.zimTabParent.zimAccessibility = m,
                            c.zimTabIndex = t + a,
                            c.tabIndex = s,
                            c.zimAccessibility = m,
                            N(d),
                            i = G(E + "Tab" + (t + a), d.title, i, d),
                            S.push([c, c.on("mousedown", V)]),
                            I || O.push([c, c.on("mousedown", Y)])
                        }
                        r = r.concat(l)
                    } else
                        n.zimTabIndex = t + a,
                        n.zimTabParent = n,
                        N(o),
                        n.zimAccessibility = m,
                        S.push([n, n.on("mousedown", V)]),
                        I || O.push([n, n.on("mousedown", Y)]),
                        r.push(o),
                        i = G(E + "Tab" + (t + a), o.title, i, o)
                }
                (v = m.startAppTag = G(E + "PrefixTab", u + " start", g.canvas, null, "before")).addEventListener("focus", L),
                I || (v.addEventListener("focus", W),
                (w = G(E + "noAriaTab", "", v, null, "before")).setAttribute("aria-hidden", !0),
                w.focusTab = v,
                w.addEventListener("focus", _),
                (C = G(E + "noAriaTab", "", v)).setAttribute("aria-hidden", !0),
                C.focusTab = v,
                C.addEventListener("focus", _)),
                i = G(E + "BufferTab", "", i),
                M && i.setAttribute("aria-hidden", !0),
                i = y = m.endAppTag = G(E + "SuffixTab", u + " end", i),
                y.addEventListener("focus", L),
                I || (y.addEventListener("focus", W),
                i = x = G(E + "noAriaTab", "", y),
                x.setAttribute("aria-hidden", !0),
                x.focusTab = y,
                x.addEventListener("focus", _),
                (k = G(E + "noAriaTab", "", y, null, "before")).setAttribute("aria-hidden", !0),
                k.focusTab = y,
                k.addEventListener("focus", _)),
                T = r
            }
        }),
        Object.defineProperty(this, "tabIndex", {
            get: function() {
                return A
            },
            set: function(e) {
                if (_state)
                    if (e < 0 || e >= T.length)
                        d();
                    else {
                        e != A && c();
                        var t = T[e].obj;
                        if (t.stage) {
                            if (A = e,
                            t.focus = !0,
                            Z = !(K = !0),
                            m.changeTitle(t),
                            t.zimTabTag.focus(),
                            setTimeout(function() {
                                t.zimTabTag.focus();
                                var e = new createjs.Event("change");
                                e.title = t.zimTabTag.getAttribute("aria-label"),
                                m.dispatchEvent(e)
                            }, 150),
                            m.alwaysHighlight && !j) {
                                if (m.AHObject) {
                                    z = m.AHObject;
                                    var o = kt.boundsToGlobal(t);
                                    m.AHObject.alp(m.AHAlpha).addTo(g.stage, null, !1),
                                    m.AHObject.fit(o.x, o.y, o.width, o.height),
                                    m.AHObject.sca(m.AHObject.scaleX * m.AHObjectScale),
                                    0 < m.AHTime && (U = setTimeout(function() {
                                        g.stage.removeChild(m.AHObject),
                                        g.stage.update()
                                    }, m.AHTime))
                                } else {
                                    z = f;
                                    var n = t.getBounds()
                                      , r = t.localToGlobal(n.x - 5, n.y - 5)
                                      , i = t.localToGlobal(n.x + n.width + 5, n.y - 5)
                                      , a = t.localToGlobal(n.x + n.width + 5, n.y + n.height + 5)
                                      , l = t.localToGlobal(n.x - 5, n.y + n.height + 5)
                                      , s = f.graphics;
                                    s.clear(),
                                    s.s(m.AHColor).ss(m.AHBorderWidth).mt(r.x, r.y).lt(i.x, i.y).lt(a.x, a.y).lt(l.x, l.y).lt(r.x, r.y).cp(),
                                    f.alpha = m.AHAlpha,
                                    0 < m.AHTime && (U = setTimeout(function() {
                                        g.stage.removeChild(f),
                                        g.stage.update()
                                    }, m.AHTime))
                                }
                                g.stage.addChild(z),
                                g.stage.update()
                            }
                        } else
                            d()
                    }
                function c() {
                    if (A && -1 < A)
                        T[A].obj.focus = !1;
                    else
                        for (var e = 0; e < T.length; e++)
                            T[e].obj.focus = !1
                }
                function d() {
                    c(),
                    K = !1,
                    m.AHObject && g.stage.removeChild(m.AHObject),
                    m.alwaysHighlightShape && g.stage.removeChild(m.alwaysHighlightShape),
                    g.stage.update(),
                    A = -1
                }
            }
        }),
        Object.defineProperty(this, "aria", {
            get: function() {
                return j
            },
            set: function(e) {
                (j = e) && D()
            }
        }),
        zot(e) ? setTimeout(function() {
            if (-1 == T) {
                T = [];
                var t = [];
                kt.loop(g.stage, function(e) {
                    e.type && t.push(e)
                }),
                m.tabOrder = t,
                zot(o) || (m.tabIndex = o)
            }
        }, 50) : (T = [],
        m.tabOrder = e,
        zot(o) || (m.tabIndex = o));
        var U, K = !1, Z = !0, q = g.on("keydown", function(e) {
            var t;
            if (9 == e.keyCode && (function() {
                for (var e = !1, t = 0; t < B.length; t++)
                    if (document.activeElement == B[t]) {
                        e = !0;
                        break
                    }
                return !(document.activeElement != g.canvas && !e)
            }() || (K = !1,
            -1 != m.tabIndex && (m.tabIndex = -1)),
            K ? Q(e) : (t = e,
            g.shiftKey || zid(E + "PrefixTab") != document.activeElement && g.canvas != document.activeElement ? !g.shiftKey || zid(E + "SuffixTab") != document.activeElement && zid(E + "BufferTab") != document.activeElement || (0 < T.length && (T[0].obj.focus = !0),
            K = Z = !0,
            Q(t)) : (0 < T.length && (T[T.length - 1].obj.focus = !0),
            K = Z = !0,
            Q(t)))),
            K && 0 < T.length && 0 <= m.tabIndex && 13 == e.keyCode) {
                var o = T[m.tabIndex]
                  , n = o.obj;
                if (o && n.stage) {
                    var r = new createjs.Event("mousedown")
                      , i = new createjs.Event("click");
                    r.fromEnter = i.fromEnter = !0,
                    "Pane" == n.type ? (n.backdrop.dispatchEvent(r),
                    n.backdrop.dispatchEvent(i)) : (n.dispatchEvent(r),
                    n.dispatchEvent(i))
                }
            }
        });
        function Q(e) {
            e.ctrlKey ? J(e.shiftKey ? -1 : 1) : (e.shiftKey ? m.tab(-1) : m.tab(1),
            e.preventDefault())
        }
        function J(e) {
            K = !1,
            zid(E + (1 == e ? "SuffixTab" : "PrefixTab")).focus(),
            g.stage.removeChild(d),
            g.stage.update(),
            m.tabIndex = -1
        }
        this.tab = function(e) {
            if (clearTimeout(U),
            z && g.stage.removeChild(z),
            zot(e) && (e = 1),
            0 != T.length)
                for (var t = 0; t < T.length; t++) {
                    var o = T[t].obj;
                    if (o.focus) {
                        o.focus = !1;
                        var n = t + e
                          , r = (n + 1e4 * T.length) % T.length
                          , i = T[r];
                        o = i.obj;
                        for (var a = 0, l = !1; !o.stage || !(!o.zimTabParent && (zot(o.enabled) || o.enabled) || o.zimTabParent && (zot(o.zimTabParent.enabled) || o.zimTabParent.enabled)); )
                            if (a++,
                            r = ((n += e) + 100 * T.length) % T.length,
                            o = (i = T[r]).obj,
                            a == T.length) {
                                l = !0;
                                break
                            }
                        if (l || !m.cycle && n != r && !Z)
                            return void J(e);
                        Z = !1,
                        m.tabIndex = r;
                        break
                    }
                }
            else
                J(e)
        }
        ;
        var $ = !(this.changeTitle = function(e, t, o) {
            if ("number" != typeof e && (e = e.zimTabIndex),
            !zot(e))
                if (o && zot(t))
                    m.tabIndex = e;
                else {
                    var n = T[e]
                      , r = n.obj;
                    zot(t) && (t = r.zimTabTag.getAttribute("aria-label").split(" - currently")[0]),
                    n.title = t,
                    N(n),
                    r.zimTabTag.setAttribute("aria-label", n.title),
                    o && (m.tabIndex = e)
                }
        }
        );
        this.talk = function(e) {
            $ || ((b = G(E + "TalkTab", "", y)).setAttribute("role", "alert"),
            $ = !0),
            b.setAttribute("aria-label", e),
            b.innerHTML = " ",
            b.innerHTML = e,
            zog(b.innerHTML);
            var t = new createjs.Event("change");
            t.title = e,
            m.dispatchEvent(t)
        }
        ,
        this.resize = function(e) {
            if (zot(e)) {
                if (m.alwaysHighlight && !zot(j))
                    return;
                for (var t = 0; t < T.length; t++)
                    n(T[t].obj)
            } else {
                if ("number" != typeof e && (e = e.zimTabIndex),
                e < 0)
                    return;
                var o = T[e].obj;
                if (!o.stage && z && o == m.currentObject && (g.stage.removeChild(z),
                g.stage.update()),
                m.alwaysHighlight && !zot(j))
                    return;
                n(o)
            }
            function n(e) {
                if ("TextArea" != e.type && "Loader" != e.type) {
                    var t = e.boundsToGlobal()
                      , o = e.zimTabTag;
                    o.style.left = g.x + t.x * g.scale + "px",
                    o.style.top = g.y + t.y * g.scale + "px",
                    o.style.width = t.width * g.scale + "px",
                    o.style.height = t.height * g.scale + "px",
                    o.setAttribute("aria-hidden", !e.stage),
                    o.hidden = !e.stage
                } else
                    e.resize()
            }
        }
        ,
        Object.defineProperty(this, "currentObject", {
            get: function() {
                return T[A] && T[A].obj ? T[A].obj : null
            },
            set: function(e) {
                for (var t = 0; t < T.length; t++)
                    if (T[t].obj == e) {
                        m.tabIndex = t;
                        break
                    }
            }
        }),
        _state = !0,
        Object.defineProperty(this, "enabled", {
            get: function() {
                return _state
            },
            set: function(e) {
                _state = e
            }
        }),
        this.dispose = function() {
            m.tabOrder = [];
            for (var e = 0; e < B.length; e++)
                B[e].parentElement && (B[e].outerHTML = "");
            m.removeAllEventListeners(),
            g.off("keydown", q)
        }
    }
    ,
    kt.extend(kt.Accessibility, createjs.EventDispatcher, null, "cjsEventDispatcher", !1),
    kt.Manager = function(e) {
        z_d("75");
        var r = this;
        this.type = e,
        this.items = [],
        this.add = function(e) {
            Array.isArray(e) ? r.items = r.items.concat(e) : r.items.push(e)
        }
        ,
        this.remove = function(e) {
            if (zot(e))
                r.items = [];
            else {
                var t;
                Array.isArray(e) || (e = [e]);
                for (var o = 0; o < e.length; o++) {
                    t = e[o];
                    var n = r.items.indexOf(t);
                    -1 != n && r.items.splice(n, 1)
                }
            }
        }
        ,
        this.resize = function() {
            if (r)
                for (var e = 0; e < r.items.length; e++)
                    r.items[e].resize ? r.items[e].resize() : r.items.splice(e)
        }
        ,
        this.toggle = function(e) {
            if (r)
                for (var t = 0; t < r.items.length; t++)
                    r.items[t].toggle ? r.items[t].toggle(e) : r.items.splice(t)
        }
        ,
        this.dispose = function() {
            for (var e = r.items.length - 1; 0 <= e; e--)
                r.items[e].dispose();
            return r.items = [],
            !(r = null)
        }
    }
    ,
    kt.ResizeManager = function() {
        z_d("75.5"),
        kt.Manager.call(this, "ResizeManager")
    }
    ,
    kt.ResizeManager.prototype = new kt.Manager,
    kt.ResizeManager.prototype.constructor = kt.ResizeManager,
    kt.TransformManager = function(e, r) {
        z_d("75.7");
        var i = this;
        function a() {
            localStorage && i.savePersist()
        }
        this.type = "TransformManager",
        this.items = [],
        this.add = function(e) {
            var t, o = [];
            o = Array.isArray(e) ? e : [e];
            for (var n = !1, r = 0; r < o.length; r++)
                t = o[r],
                0 == i.items.length && 0 == r && (n = !0),
                "Blob" == t.type || "Squiggle" == t.type ? (i.persistID || (n ? (n = !1,
                t.controlsVisible = !0,
                i.currentObject = t) : t.controlsVisible = !1),
                t.on("change", function(e) {
                    var t = new createjs.Event("transformed");
                    t.transformObject = e.target,
                    t.transformType = e.controlType,
                    i.dispatchEvent(t)
                }),
                t.on("controlsshow", function(e) {
                    var t = new createjs.Event("transformshow");
                    i.currentObject = t.transformObject = e.target,
                    i.dispatchEvent(t)
                }),
                t.on("controlshide", function(e) {
                    var t = new createjs.Event("transformhide");
                    t.transformObject = e.target,
                    i.currentObject = null,
                    i.dispatchEvent(t)
                }),
                t.on("update", function(e) {
                    var t = new createjs.Event("transformed");
                    t.transformObject = e.target,
                    t.transformType = e.controlType,
                    i.dispatchEvent(t)
                })) : (transObj = t.transformControls,
                i.persistID || (n ? (n = !1,
                transObj.show(),
                i.currentObject = t) : transObj.hide()),
                t.on("transformed", function(e) {
                    var t = new createjs.Event("transformed");
                    t.transformObject = e.target,
                    t.transformType = e.transformType,
                    i.dispatchEvent(t)
                }),
                t.on("transformshow", function(e) {
                    var t = new createjs.Event("transformshow");
                    i.currentObject = t.transformObject = e.target,
                    i.dispatchEvent(t)
                }),
                t.on("transformhide", function(e) {
                    var t = new createjs.Event("transformhide");
                    t.transformObject = e.target,
                    i.currentObject = null,
                    i.dispatchEvent(t)
                }));
            i.items = i.items.concat(e)
        }
        ,
        this.remove = function(e) {
            if (zot(e))
                i.items = [];
            else {
                var t;
                Array.isArray(e) || (e = [e]);
                for (var o = 0; o < e.length; o++) {
                    t = e[o],
                    i.currentObject == t && (i.currentObject = null),
                    t.transformedEvent && (t.off("transformed", t.transformedEvent),
                    t.transformedEvent = null),
                    "Blob" == t.type || "Squiggle" == t.type ? t.controlsVisible = !1 : t.transformControls.remove();
                    var n = i.items.indexOf(t);
                    -1 != n && i.items.splice(n, 1)
                }
                r && i.savePersist()
            }
        }
        ,
        this.show = function(e) {
            if (!zot(e)) {
                if ("Blob" == e.type || "Squiggle" == e.type)
                    e.controlsVisible || (e.controlsVisible = !0);
                else {
                    var t = e.transformControls;
                    if (!t || t.visible)
                        return;
                    t.show()
                }
                i.currentObject = e
            }
        }
        ,
        this.hide = function(e) {
            if (!zot(e))
                if (i.currentObject == e && (i.currentObject = null),
                "Blob" == e.type || "Squiggle" == e.type)
                    e.controlsVisible && (e.controlsVisible = !1);
                else {
                    var t = e.transformControls;
                    if (!t || t.visible)
                        return;
                    t.hide()
                }
        }
        ,
        this.hideAll = function(e) {
            for (var t, o, n = 0; n < i.items.length; n++)
                if ((o = i.items[n]) && (o.transformControls || o.update)) {
                    if (i.items[n] == e)
                        continue;
                    "Blob" == o.type || "Squiggle" == o.type ? o.controlsVisible && (o.controlsVisible = !1) : (t = i.items[n].transformControls).visible && t.hide()
                } else
                    i.items.splice(n);
            i.currentObject = null
        }
        ,
        this.resize = function() {
            if (i) {
                for (var e, t = 0; t < i.items.length; t++)
                    (e = i.items[t]) && (e.transformControls || e.update) ? "Blob" == e.type || "Squiggle" == e.type ? e.update() : e.transformControls.resize() : i.items.splice(t);
                r && i.savePersist()
            }
        }
        ,
        zot(e) || i.add(e);
        var l = "TransformManager persist(persistID) - sorry, must provide id";
        this.persist = function(e) {
            if (zot(e) && zon)
                zog(l);
            else {
                if (i.persistID = e,
                localStorage && localStorage[e]) {
                    var t = i.persistData = JSON.parse(localStorage[e]);
                    if (t.length == i.items.length)
                        for (var o = 0; o < i.items.length; o++)
                            t[o].controlsVisible && (i.currentObject = i.items[o]),
                            !t[o] || "Blob" != t[o].type && "Squiggle" != t[o].type ? t[o] && i.items[o].transformControls.setData(t[o]) : (i.items[o].points.length != t[o].points.length && (i.items[o].points = t[o].points),
                            i.items[o].setData(t[o]))
                }
                var n;
                for (o = 0; o < i.items.length; o++)
                    (n = i.items[o]).transformedEvent || ("Blob" == n.type || "Squiggle" == n.type ? (n.transformedEvent = n.on("change", a),
                    n.transformedEvent = n.on("update", a),
                    n.transformedEvent = n.on("controlsshow", a),
                    n.transformedEvent = n.on("controlshide", a)) : (n.transformedEvent = n.on("transformed", a),
                    n.transformedEvent = n.on("transformshow", a),
                    n.transformedEvent = n.on("transformhide", a)))
            }
        }
        ,
        this.savePersist = function() {
            for (var e = [], t = 0; t < i.items.length; t++)
                it = i.items[t],
                "Blob" == it.type || "Squiggle" == it.type ? it.recordData && e.push(it.recordData()) : it.transformControls && it.transformControls.recordData && e.push(it.transformControls.recordData());
            i.persistData = e,
            localStorage[i.persistID] = JSON.stringify(e)
        }
        ,
        this.clearPersist = function(e) {
            zot(e) && zon ? zog(l) : (i.persistData = null,
            localStorage && localStorage.removeItem(e))
        }
        ,
        this.stopPersist = function() {
            for (var e = 0; e < i.items.length; e++)
                it = i.items[e],
                it.transformedEvent && ("Blob" == it.type || "Squiggle" == it.type ? it.off("change", it.transformedEvent) : it.off("transformed", it.transformedEvent),
                it.transformedEvent = null);
            i.persistData = null
        }
        ,
        zot(r) || i.persist(r),
        this.dispose = function(e, t) {
            if (zot(e) && (e = !0),
            i.removeAllEventListeners(),
            i.persistID && e && i.stopPersist(),
            t)
                for (var n = 0; n < i.items.length; n++)
                    o = i.items[n],
                    "Blob" == o.type || "Squiggle" == o.type ? o.dispose() : o.transformControls.dispose()
        }
    }
    ,
    kt.extend(kt.TransformManager, createjs.EventDispatcher, null, "cjsEventDispatcher", !1),
    kt.GuideManager = function() {
        z_d("77"),
        kt.Manager.call(this, "GuideManager")
    }
    ,
    kt.GuideManager.prototype = new kt.Manager,
    kt.GuideManager.prototype.constructor = kt.GuideManager,
    kt.GridManager = function() {
        z_d("79"),
        kt.Manager.call(this, "GridManager")
    }
    ,
    kt.GridManager.prototype = new kt.Manager,
    kt.GridManager.prototype.constructor = kt.GridManager,
    kt.LayoutManager = function() {
        z_d("81"),
        this.type = "LayoutManager";
        var t = this;
        this.items = [],
        this.add = function(e) {
            t.items.push(e)
        }
        ,
        this.resize = function() {
            for (var e = 0; e < t.items.length; e++)
                t.items[e].resize()
        }
        ,
        this.disable = function() {
            for (var e = 0; e < t.items.length; e++)
                t.items[e].disable()
        }
        ,
        this.enable = function() {
            for (var e = 0; e < t.items.length; e++)
                t.items[e].enable()
        }
        ,
        this.dispose = function() {
            for (var e = 0; e < t.items.length; e++)
                t.items[e].removeShape();
            return !0
        }
    }
    ,
    kt.SelectionSet = function(e) {
        z_d("81.5"),
        this.type = "SelectionSet",
        zot(e) && (e = []),
        this.selections = e,
        this.clear = function() {
            this.selections = []
        }
        ,
        this.isSelected = function(e) {
            return 0 <= this.selections.indexOf(e)
        }
        ,
        this.add = function(e, t, o, n) {
            if (!zot(e) && (zot(t) && (zot(this.selectionManager) || (t = this.selectionManager.multiple)),
            zot(this.selectionManager) || (this.selectionManager.setCurrent(this),
            !t && this.selectionManager.multipleSets && this.selectionManager.clear()),
            t || this.clear(),
            !(0 <= this.selections.indexOf(e)))) {
                if (this.selections.push(e),
                !zot(o)) {
                    Array.isArray(o) || (o = [o]);
                    for (var r = 0; r <= o.length; r++)
                        o[r].add(e, t)
                }
                if (!zot(n))
                    for (Array.isArray(n) || (n = [n]),
                    r = 0; r <= n.length; r++)
                        n[r].remove(e, t)
            }
        }
        ,
        this.remove = function(e, t, o, n) {
            if (!zot(e)) {
                zot(t) && (zot(this.selectionManager) || (t = this.selectionManager.multiple)),
                zot(this.selectionManager) || this.selectionManager.setCurrent(this),
                t || this.clear();
                var r = this.selections.indexOf(e);
                if (zot(this.selectionManager) || (this.selectionManager.setCurrent(this),
                !t && this.selectionManager.multipleSets && this.selectionManager.clear()),
                t || this.clear(),
                t ? 0 <= r && this.selections.splice(r, 1) : this.clear(),
                !zot(o)) {
                    Array.isArray(o) || (o = [o]);
                    for (var i = 0; i <= o.length; i++)
                        o[i].remove(e, t)
                }
                if (!zot(n))
                    for (Array.isArray(n) || (n = [n]),
                    i = 0; i <= n.length; i++)
                        n[i].add(e, t)
            }
        }
        ,
        this.toggle = function(e, t, o, n) {
            this.isSelected(e) ? this.remove(e, t, o, n) : this.add(e, t, o, n)
        }
        ,
        this.dispose = function() {
            return this.clear(),
            !(this.selections = null)
        }
    }
    ,
    kt.SelectionManager = function(o, e, t) {
        z_d("81.6"),
        this.cjsEventDispatcher_constructor(),
        this.type = "SelectionManager",
        zot(o) && (o = []),
        zot(t) && (t = !0),
        Array.isArray(o) || (o = [o]),
        this.sets = o,
        this.multipleKey = e,
        this.multipleSets = t,
        this.multiple = !1;
        for (var n = this, r = 0; r < o.length; r++)
            o[r].selectionManager = this;
        this.clear = function() {
            this.currentSet = null;
            for (var e = 0; e < o.length; e++)
                o[e].clear()
        }
        ,
        this.setCurrent = function(e) {
            this.currentSet = e;
            for (var t = 0; t < o.length; t++)
                o[t] != e && (this.multipleSets || o[t].clear())
        }
        ;
        var i = new createjs.Event("keydown");
        this.eventRemove = i.remove,
        this.keydownEvent = window.addEventListener("keydown", function(e) {
            e.remove = n.eventRemove,
            n.multipleKey && (n.multiple = e[n.multipleKey + "Key"]),
            n.ctrlKey = e.ctrlKey,
            n.shiftKey = e.shiftKey,
            n.metaKey = e.metaKey,
            n.dispatchEvent(e),
            90 == e.keyCode && (n.ctrlKey || n.metaKey) && n.dispatchEvent("undo")
        }),
        this.keyupEvent = window.addEventListener("keyup", function(e) {
            n.multipleKey && (n.multiple = e[n.multipleKey + "Key"]),
            n.ctrlKey = e.ctrlKey,
            n.shiftKey = e.shiftKey,
            n.metaKey = e.metaKey,
            e.remove = n.eventRemove,
            n.dispatchEvent(e)
        }),
        this.dispose = function() {
            window.removeEventListener("keydown", this.keydownEvent),
            window.removeEventListener("keyup", this.keyupEvent)
        }
    }
    ,
    kt.extend(kt.SelectionManager, createjs.EventDispatcher, null, "cjsEventDispatcher", !1),
    kt.Swipe = function(e, t, o) {
        var n;
        if (n = zob(kt.Swipe, arguments, "obj, distance, duration", this))
            return n;
        if (z_d("70"),
        this.cjsEventDispatcher_constructor(),
        this.type = "Swipe",
        !zot(e) && e.on) {
            var r, i, a, l, s, c;
            zot(t) && (t = 30),
            zot(o) && (o = 80),
            this.distance = t,
            this.duration = o,
            this.active = !0;
            var d = this;
            e.on("mousedown", function(t) {
                function o() {
                    var e = new createjs.Event("swipe");
                    e.obj = d.obj,
                    e.stageX = t.stageX,
                    e.stageY = t.stageY,
                    e.rawX = t.rawX,
                    e.rawY = t.rawY,
                    e.swipeX = e.swipeY = 0,
                    d.direction = "none",
                    Math.abs(a - r) > Math.abs(l - i) ? (a - r > d.distance && (e.swipeX = 1,
                    d.direction = "right"),
                    r - a > d.distance && (e.swipeX = -1,
                    d.direction = "left")) : (l - i > d.distance && (e.swipeY = 1,
                    d.direction = "down"),
                    i - l > d.distance && (e.swipeY = -1,
                    d.direction = "up")),
                    d.dispatchEvent(e)
                }
                d.active && !t.target.zimNoSwipe && (d.obj = t.target,
                a = r = t.stageX,
                l = i = t.stageY,
                s = !0,
                d.dispatchEvent("swipedown"),
                clearTimeout(c),
                c = setTimeout(function() {
                    s && (o(),
                    s = !1)
                }, d.duration),
                e.on("pressmove", function(e) {
                    a = e.stageX,
                    l = e.stageY
                }),
                e.on("pressup", function(e) {
                    s && (o(),
                    s = !1,
                    clearTimeout(c))
                }))
            }),
            this.disable = function() {
                d.active = !1
            }
            ,
            this.enable = function() {
                d.active = !0
            }
        } else
            zog("zim controls - Swipe():\nPlease pass in object")
    }
    ,
    kt.extend(kt.Swipe, createjs.EventDispatcher, null, "cjsEventDispatcher", !1),
    kt.Swiper = function(e, t, o, n, r, i, a, l, s, c, d) {
        var u;
        if (u = zob(kt.Swiper, arguments, "swipeOn, target, property, sensitivity, horizontal, min, max, damp, integer, factor, pauseTime", this))
            return u;
        if (z_d("69.5"),
        this.cjsEventDispatcher_constructor(),
        this.type = "Swiper",
        !zot(e) && e.getStage && e.stage) {
            if (!zot(t)) {
                zot(n) && (n = 1),
                zot(r) && (r = !0),
                zot(l) && (l = .1),
                zot(s) && (s = !1),
                zot(c) && (c = 1),
                zot(d) && (d = 200);
                var h, g, p, f, m, z, v = this, y = e, b = v.desiredValue = t[o];
                this.target = t,
                this.property = o;
                var w = !1;
                y.canvas ? (f = y.on("stagemousedown", function(e) {
                    w = !0,
                    A(e),
                    m = y.on("stagemousemove", B),
                    z = y.on("stagemouseup", function() {
                        w = !1,
                        y.off("stagemousemove", m),
                        y.off("stagemouseup", z),
                        v.dispatchEvent("swipeup")
                    })
                }),
                p = y) : (p = y.stage,
                S(),
                f = y.on("mousedown", A),
                m = y.on("pressmove", B),
                z = y.on("pressup", function() {
                    w = !1,
                    v.dispatchEvent("swipeup")
                }));
                var x = new kt.Damp(v.target[v.property],l)
                  , C = (v.target[v.property],
                0)
                  , k = null;
                v.target.swiperTicker = kt.Ticker.add(function() {
                    b == C ? b != k && (v.pauseTimeout && v.pauseTimeout.clear(),
                    k = b,
                    v.pauseTimeout = kt.timeout(d, function() {
                        v.dispatchEvent("swipepause"),
                        v.pauseTimeout = null
                    })) : (k = null,
                    C = b,
                    v.pauseTimeout && v.pauseTimeout.clear()),
                    v.swiperMoving && (v.target[v.property] = s ? Math.round(x.convert(b)) : x.convert(b),
                    !w && Math.abs(v.target[v.property] - b) < (zot(i) || zot(a) ? 1 : Math.abs(a - i) / 1e3) ? (v.swiperMoving = !1,
                    v.target[v.property] = b,
                    v.immediate(v.target[v.property]),
                    v.dispatchEvent("swipestop")) : v.target[v.property])
                }, p),
                this.immediate = function(e) {
                    x.immediate(e),
                    v.target[v.property] = s ? Math.round(e) : e,
                    v.desiredValue = b = e
                }
                ;
                var T = !0;
                Object.defineProperty(v, "enabled", {
                    get: function() {
                        return T
                    },
                    set: function(e) {
                        T != e && (e ? function() {
                            y.canvas ? f = y.on("stagemousedown", f) : (f = y.on("mousedown", f),
                            m = y.on("pressmove", m),
                            z = y.on("pressup", z));
                            v.immediate(v.target[v.property]),
                            v.target.swiperTicker = kt.Ticker.add(v.target.swiperTicker, p)
                        }() : P(),
                        T = Boolean(e))
                    }
                }),
                this.dispose = function() {
                    P(),
                    x = null
                }
            }
        } else
            zog("zim.Swiper() - please provide container on stage");
        function A(e) {
            w = !0,
            h = r ? e.stageX : e.stageY,
            g = v.target[v.property],
            v.dispatchEvent("swipedown")
        }
        function B(e) {
            var t = h - (r ? e.stageX : e.stageY);
            0 < Math.abs(t) && (v.swiperMoving = !0),
            b = g - t * n * c,
            zot(i) || (b = Math.max(b, i)),
            zot(a) || (b = Math.min(b, a)),
            v.desiredValue = b,
            v.dispatchEvent("swipemove")
        }
        function S() {
            y.off("mousedown", f),
            y.off("pressmove", m),
            y.off("pressup", z)
        }
        function P() {
            y.canvas ? (y.off("stagemousedown", f),
            y.off("stagemousemove", m),
            y.off("stagemouseup", z)) : S(),
            kt.Ticker.remove(v.target.swiperTicker)
        }
    }
    ,
    kt.extend(kt.Swiper, createjs.EventDispatcher, null, "cjsEventDispatcher", !1),
    kt.MotionController = function(a, r, e, t, o, i, l, n, s, c, d, u, h, g, p, f, m, z, v, y, b) {
        var w, x;
        if (w = zob(kt.MotionController, arguments, "target, type, speed, axis, boundary, map, diagonal, damp, flip, rotate, constant, firstPerson, turnSpeed, moveThreshold, stickThreshold, container, localBounds, mouseMoveOutside, mousedownIncludes, minPercentSpeed, maxPercentSpeed", this))
            return w;
        z_d("69.7"),
        this.cjsEventDispatcher_constructor(),
        this.type = "MotionController";
        var C = "zim MotionController(): Please pass in a reference to the stage or a container on the stage";
        if (zot(f)) {
            if (!Tt)
                return void zog(C);
            x = f = Tt.stage
        } else if (zot(f.stage)) {
            if (!Tt)
                return void zog(C);
            x = Tt.stage
        } else
            x = f.stage;
        zot(a) && (a = new kt.Container(1,1,null,null,!1));
        var k = "Accelerator" == a.type;
        zot(e) && (e = 7),
        (zot(r) || "mousemove" != r && "pressmove" != r && "keydown" != r && "gamebutton" != r && "gamestick" != r && "swipe" != r && "manual" != r) && (r = "mousedown"),
        zot(t) && (t = k ? "horizontal" : "both"),
        "keydown" == r && zot(i) && (i = [[65, 37], [68, 39], [87, 38], [83, 40]]),
        "gamebutton" == r && zot(i) && (i = u ? [14, 15, kt.GamePad.RT, kt.GamePad.LT] : [14, 15, 12, 13]),
        "gamestick" == r && zot(i) && (i = u ? [[0, 2], [0, 2], [1], [1]] : [0, 0, 1, 1]),
        "gamestick" == r && zot(i) && (i = [0, 0, 1, 1]),
        zot(l) && (l = !0),
        "horizontal" != t && "vertical" != t || (l = !1),
        zot(n) && (n = "keydown" == r || "gamebutton" == r ? 1 : "pressmove" == r ? .2 : .1),
        zot(u) && (u = !1),
        zot(h) && (h = .4 * e),
        zot(g) && (g = 4),
        zot(p) && (p = .2),
        zot(z) && (z = !1),
        x.mouseMoveOutside = z,
        zot(v) && (v = []),
        Array.isArray(v) || (v = [v]),
        "Pen" != a.type || a.draggable ? v.push(a) : v.push(a, a.paper),
        this.mousedownIncludes = v;
        var T = this;
        this.dirX = 0,
        this.dirY = 0,
        this.speed = e,
        this.turnSpeed = h,
        this.axis = t,
        this.target = a,
        this.moveThreshold = g,
        this.stickThreshold = p,
        this.boundary = o;
        var A, B, S, P = T.speed, E = T.speed, M = 0;
        (T.rotation = 0,
        k) ? (S = !(B = f.getBounds()) || "vertical" == t && !B.height || "vertical" != t && !B.width ? 1e3 : "vertical" == t ? B.height : B.width,
        zot(y) && (y = 0),
        zot(b) && (b = 100),
        zot(this.target.percentSpeed) && (this.target.percentSpeed = (b - y) / 2),
        T.x = S / 2,
        T.y = S / 2,
        A = new kt.Proportion(0,S,y,b)) : (T.x = this.target.x,
        T.y = this.target.y);
        var I, j, O, Y = T.scaleX = a.scaleX, L = (T.scaleY = a.scaleY,
        !1), D = !1;
        if ("keydown" == r || "gamebutton" == r) {
            for (var X = 0; X < 4; X++)
                Array.isArray(i[X]) || (i[X] = [i[X]]);
            var R = [0, 0, 0, 0]
              , _ = []
              , W = ["X", "X", "Y", "Y"]
              , H = [-1, 1, -1, 1]
              , V = {
                dirX: 0,
                dirY: 0
            };
            if ("keydown" == r)
                var F = frame.on("keydown", G);
            else
                var N = (J = T.gamepad = new kt.GamePad).on("buttondown", G);
            function G(e) {
                var t, o = "keydown" == r ? e.keyCode : e.buttonCode;
                for (X = 0; X < 4; X++)
                    if (-1 < i[X].indexOf(o)) {
                        if (l || "both" != T.axis || (V.dirX = V.dirY = 0),
                        V["dir" + W[X]] = H[X],
                        R[X] = 1,
                        0 == (t = _.indexOf(X)))
                            return;
                        return 0 < t && _.splice(t, 1),
                        void _.unshift(X)
                    }
            }
            if (zot(d))
                if ("keydown" == r)
                    var U = frame.on("keyup", Z);
                else
                    var K = J.on("buttonup", Z);
            function Z(e) {
                var t, o = "keydown" == r ? e.keyCode : e.buttonCode;
                for (X = 0; X < 4; X++)
                    if (-1 < i[X].indexOf(o)) {
                        if ((R[X] = 0) <= (t = _.indexOf(X)) && _.splice(t, 1),
                        "both" != T.axis || l)
                            V["dir" + W[X]] = -R[2 * Math.floor(X / 2)] + R[2 * Math.floor(X / 2) + 1];
                        else if (0 < _.length) {
                            V["dir" + W[X]] = 0;
                            var n = _[0];
                            V["dir" + W[n]] = H[n]
                        } else
                            V.dirX = V.dirY = 0;
                        return
                    }
            }
            var q = {
                rotation: 0,
                speedX: T.speed,
                speedY: T.speed
            }
              , Q = kt.Ticker.add(function() {
                if (u)
                    ne(V);
                else {
                    var e = T.speed
                      , t = T.speed;
                    if ("both" == T.axis && 0 != V.dirX && 0 != V.dirY) {
                        var o = ae(V.dirX, V.dirY);
                        e = o.speedX,
                        t = o.speedY
                    }
                    "horizontal" != T.axis && "both" != T.axis || (T.x += e * V.dirX),
                    "vertical" != T.axis && "both" != T.axis || (T.y += t * V.dirY),
                    re()
                }
            }, x)
        } else if ("mousedown" == r || "mousemove" == r)
            I = x.on("stage" + r, function(e) {
                if ("mousedown" == r) {
                    if (Array.isArray(T.mousedownIncludes) || (T.mousedownIncludes = [T.mousedownIncludes]),
                    T.mousedownIncludes.indexOf(f) < 0)
                        for (var t = 0; t < f.numChildren; t++) {
                            var o = f.getChildAt(t);
                            if (-1 == T.mousedownIncludes.indexOf(o) && o.mouseEnabled && o.hitTestPoint && o.hitTestPoint(e.stageX, e.stageY))
                                return
                        }
                    T.dispatchEvent("mousedown")
                }
                var n = f.globalToLocal(z ? e.rawX : e.stageX, z ? e.rawY : e.stageY);
                T.x = n.x,
                T.y = n.y,
                re()
            });
        else if ("pressmove" == r)
            "Pen" == a.type && (a.write = !1),
            I = x.on("stagemousedown", function(e) {
                D = !1,
                Array.isArray(T.mousedownIncludes) || (T.mousedownIncludes = [T.mousedownIncludes]);
                for (var t = !1, o = x.getObjectUnderPoint(e.stageX, e.stageY), n = 0; n < T.mousedownIncludes.length; n++)
                    T.mousedownIncludes[n].hitTestPoint && T.mousedownIncludes[n].hitTestPoint(e.stageX, e.stageY) && T.mousedownIncludes[n].contains(o) && (t = !0);
                if (!t)
                    for (n = 0; n < f.numChildren; n++) {
                        var r = f.getChildAt(n);
                        if (-1 == T.mousedownIncludes.indexOf(r) && r.mouseEnabled && r.hitTestPoint && r.hitTestPoint(e.stageX, e.stageY))
                            return
                    }
                var i = f.globalToLocal(z ? e.rawX : e.stageX, z ? e.rawY : e.stageY);
                T.immediate(i.x, i.y),
                re(),
                T.dispatchEvent("mousedown"),
                L = !0,
                j = x.on("stagemousemove", function(e) {
                    var t = f.globalToLocal(z ? e.rawX : e.stageX, z ? e.rawY : e.stageY);
                    T.x = t.x,
                    T.y = t.y,
                    re(),
                    "Pen" == a.type && !D && a.drawing && (D = !0)
                }),
                "Pen" == a.type && (a.write = !0,
                a.zimDragCheck = !0)
            }),
            O = x.on("stagemouseup", function(e) {
                "Pen" == a.type && (a.write = !1,
                a.zimDragCheck = !1,
                D && a.stopCheck()),
                x.off("stagemousemove", j),
                L = !1
            });
        else if ("gamestick" == r) {
            var J = this.gamepad = new kt.GamePad;
            for (X = 0; X < 4; X++)
                Array.isArray(i[X]) || (i[X] = [i[X]]);
            q = {
                rotation: 0,
                speedX: T.speed,
                speedY: T.speed
            };
            var $ = J.on("data", function(e) {
                for (var t = {
                    dirX: 0,
                    dirY: 0
                }, o = 0; o < i[0].length; o++) {
                    var n = e.axes[i[0][o]];
                    if (Math.abs(n) > T.stickThreshold) {
                        t.dirX = n;
                        break
                    }
                }
                for (o = 0; o < i[2].length; o++) {
                    n = e.axes[i[2][o]];
                    if (Math.abs(n) > T.stickThreshold) {
                        t.dirY = n;
                        break
                    }
                }
                u ? ne(t) : (T.x += T.speed * t.dirX,
                T.y += T.speed * t.dirY,
                re())
            })
        } else if ("swipe" == r)
            var ee = new kt.Swiper(x,T,"x",.8)
              , te = new kt.Swiper(x,T,"y",.8,!1)
              , oe = ee.on("swipemove", function() {
                re()
            });
        function ne(e) {
            q.rotation += e.dirX * T.turnSpeed,
            T.rotation = q.rotation,
            q.speedX = Math.sin(q.rotation * Math.PI / 180) * T.speed * -e.dirY,
            q.speedY = -Math.cos(q.rotation * Math.PI / 180) * T.speed * -e.dirY,
            T.x += q.speedX,
            T.y += q.speedY
        }
        function re() {
            var e = ae(T.x - (k ? T.target.percentSpeed : T.target.x), T.y - (k ? T.target.percentSpeed : T.target.y));
            if (P = e.speedX,
            E = e.speedY,
            c)
                if (T.rotation = e.angle,
                zot(T.rotation))
                    T.rotation = T.target.rotation;
                else {
                    T.rotation += M;
                    var t = ie(T.rotation)
                      , o = T.target.rotation = ie(T.target.rotation);
                    180 < Math.abs(t - o) && (t < o ? o -= 360 : t -= 360),
                    T.dampR.immediate(o),
                    T.target.rotation = o,
                    T.rotation = t
                }
        }
        function ie(e) {
            return (e % 360 + 360) % 360
        }
        function ae(e, t) {
            var o, n = T.speed, r = T.speed, i = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
            return 0 < i && (n = Math.abs(e) / i * T.speed,
            r = Math.abs(t) / i * T.speed,
            o = 90 - 180 * Math.atan2(e, t) / Math.PI),
            {
                speedX: n,
                speedY: r,
                angle: o
            }
        }
        var le = this.x = k ? S / 2 : this.target.x
          , se = this.y = k ? S / 2 : this.target.y;
        this.dampX = new kt.Damp(le,n),
        this.dampY = new kt.Damp(se,n),
        this.dampR = new kt.Damp(this.target.rotation,n);
        var ce = 0
          , de = 0
          , ue = kt.Ticker.add(function() {
            if ("manual" == r && re(),
            T.boundary && (T.x = kt.constrain(T.x, T.boundary.x, T.boundary.x + T.boundary.width),
            T.y = kt.constrain(T.y, T.boundary.y, T.boundary.y + T.boundary.height)),
            "horizontal" != T.axis && "both" != T.axis || (T.dirX = kt.sign(T.x - le),
            Math.abs(T.x - le) < P ? le = T.x : le += T.dirX * P,
            k && B && B.width ? T.target.percentSpeed = A.convert(T.dampX.convert(le)) : T.target.x = T.dampX.convert(le)),
            "vertical" != T.axis && "both" != T.axis || (T.dirY = kt.sign(T.y - se),
            Math.abs(T.y - se) < E ? se = T.y : se += kt.sign(T.y - se) * E,
            k && B && B.height ? T.target.percentSpeed = A.convert(T.dampY.convert(se)) : T.target.y = T.dampY.convert(se)),
            "pressmove" == r && L && T.dispatchEvent("pressing"),
            T.movingX = Math.abs(le - (k ? T.target.percentSpeed : T.target.x)) > T.moveThreshold,
            T.movingY = Math.abs(se - (k ? T.target.percentSpeed : T.target.y)) > T.moveThreshold,
            !T.moving || T.movingX || T.movingY ? T.moving || !T.movingX && !T.movingY || T.dispatchEvent("startmoving") : T.dispatchEvent("stopmoving"),
            T.moving = T.movingX || T.movingY,
            T.moving && T.dispatchEvent("moving"),
            T.dirX != ce || T.dirY != de) {
                var e = new createjs.Event("change");
                if (T.dirX != ce) {
                    var t = ["left", null, "right"];
                    e.dir = t[T.dirX + 1],
                    ce = T.dirX,
                    "horizontal" != s && "both" != s || (T.scaleX = a.scaleX = T.dirX ? Math.abs(a.scaleX) * T.dirX : a.scaleX,
                    M = 0 != Y && -1 == Math.round(T.scaleX / Y) ? 180 : 0)
                } else {
                    t = ["up", null, "down"];
                    e.dir = t[T.dirY + 1],
                    de = T.dirY,
                    "vertical" != s && "both" != s || (T.scaleY = a.scaleY = T.dirY ? Math.abs(a.scaleY) * -T.dirY : a.scaleY)
                }
                T.dispatchEvent(e)
            }
            c && !zot(T.rotation) && (T.target.rotation = T.dampR.convert(T.rotation))
        }, x);
        this.immediate = function(e, t, o) {
            return !zot(e) && T.dampX && (T.dampX.immediate(e),
            T.x = k ? T.target.percentSpeed = le = e : T.target.x = le = e,
            ee && ee.immediate(e)),
            !zot(t) && T.dampY && (T.dampY.immediate(t),
            T.y = k ? T.target.percentSpeed = se = t : T.target.y = se = t,
            te && te.immediate(t)),
            !zot(o) && T.dampR && (T.dampR.immediate(o),
            T.rotation = T.target.rotation = o),
            T
        }
        ,
        this.convert = function(e, t) {
            zot(e) || (T.x = e),
            zot(t) || (T.y = t),
            re()
        }
        ;
        var he = !0;
        function ge() {
            "keydown" == r ? (frame.off("keydown", F),
            frame.off("keyup", U),
            kt.Ticker.remove(Q)) : "gamebutton" == r ? (J.off("buttondown", N),
            J.off("buttonup", K),
            kt.Ticker.remove(Q)) : "gamestick" == r ? J.off("data", $) : "swipe" == r ? (ee.enabled = !1,
            te.enabled = !1,
            ee.off("swipemove", oe)) : "mousedown" == r || "mousemove" == r ? x.off("stage" + r, I) : "pressmove" == r && (x.off("stagemousedown", I),
            x.off("stagemousemove", j),
            x.off("stagemouseup", O)),
            kt.Ticker.remove(ue)
        }
        Object.defineProperty(T, "enabled", {
            get: function() {
                return he
            },
            set: function(e) {
                he != e && (e ? function() {
                    "keydown" == r ? (F = frame.on("keydown", F),
                    U = frame.on("keyup", U),
                    Q = kt.Ticker.add(Q, x)) : "gamebutton" == r ? (N = J.on("buttondown", N),
                    K = J.on("buttonup", K),
                    Q = kt.Ticker.add(Q, x)) : "gamestick" == r ? $ = J.on("data", $) : "swipe" == r ? (ee.enabled = !0,
                    te.enabled = !0,
                    oe = ee.on("swipemove", oe)) : "mousedown" == r || "mousemove" == r ? I = x.on("stage" + r, I) : "pressmove" == r && (I = x.on("stagemousedown", I),
                    j = x.on("stagemousemove", j),
                    O = x.on("stagemouseup", O));
                    ue = kt.Ticker.add(ue, x)
                }() : ge(),
                he = Boolean(e))
            }
        }),
        this.dispose = function() {
            ge(),
            J && J.dispose(),
            ee && ee.dispose(),
            te && ee.dispose()
        }
    }
    ,
    kt.extend(kt.MotionController, createjs.EventDispatcher, "enabled", "cjsEventDispatcher"),
    kt.GamePad = function() {
        if (z_d("69.8"),
        this.type = "GamePad",
        this.cjsEventDispatcher_constructor(),
        !navigator.getGamepads)
            return this.error = !0,
            void (zon && zog("zim.GamePad() - no browswer support"));
        var a;
        window.addEventListener("gamepadconnected", e),
        this.currentIndex = 0;
        var l = this;
        function e(e) {
            var t, o, n;
            l.connected = !0,
            t = "gamepadconnected",
            o = e,
            (n = new createjs.Event(t)).index = o.gamepad.index,
            n.id = o.gamepad.id,
            n.buttons = o.gamepad.buttons,
            n.axes = o.gamepad.axes,
            l.dispatchEvent(n);
            var r = navigator.getGamepads()[l.currentIndex];
            l.lastData = [];
            for (var i = 0; i < r.buttons.length; i++)
                l.lastData[i] = r.buttons[i].pressed;
            !function e() {
                if (a = requestAnimationFrame(e),
                l.data = navigator.getGamepads()[l.currentIndex],
                l.data) {
                    for (var t = l.buttons = [], o = 0; o < l.data.buttons.length; o++)
                        if (t[o] = l.data.buttons[o].pressed,
                        t[o] != l.lastData[o]) {
                            if (l.lastData[o] = t[o],
                            t[o])
                                var n = new createjs.Event("buttondown");
                            else
                                n = new createjs.Event("buttonup");
                            n.buttonCode = o,
                            n.button = s[o],
                            l.dispatchEvent(n)
                        }
                    (n = new createjs.Event("data")).axes = l.axes = l.data.axes,
                    n.buttons = l.buttons,
                    l.dispatchEvent(n)
                }
            }()
        }
        var t = setInterval(function() {
            navigator.getGamepads && navigator.getGamepads()[0] && (l.connected || e(),
            clearInterval(t))
        }, 500);
        var o = window.addEventListener("gamepaddisconnected", function(e) {
            e.gamepad.index == l.currentIndex && (cancelAnimationFrame(a),
            connected = !1,
            l.dispatchEvent("gamepaddisconnected"))
        });
        this.dispose = function() {
            window.removeEventListener("gamepadconnected", e),
            window.addEventListener("gamepaddisconnected", o),
            cancelAnimationFrame(a),
            clearInterval(t),
            l.connected = !1
        }
    }
    ;
    for (var s = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START", "LS", "RS", "DPAD_UP", "DPAD_DOWN", "DPAD_LEFT", "DPAD_RIGHT"], l = 0; l < s.length; l++)
        kt.GamePad[s[l]] = l;
    var Tt, e = ["LSX", "LSY", "RSX", "RSY"];
    for (l = 0; l < e.length; l++)
        kt.GamePad[e[l]] = l;
    kt.extend(kt.GamePad, createjs.EventDispatcher, null, "cjsEventDispatcher"),
    kt.Portal = function(t, o) {
        var e;
        if (e = zob(kt.Portal, arguments, "obj, lands", this))
            return e;
        if (z_d("69.96"),
        !zot(t) && t.stage) {
            this.type = "Portal";
            var n = this
              , r = o && o.numChildren && 0 < o.numChildren;
            if (r) {
                var i = o.getChildAt(o.numChildren - 1)
                  , a = o.getChildAt(o.numChildren - 2);
                o.setChildIndex(a, o.numChildren - 1),
                a.setMask(t)
            }
            t.on(mobile() ? "mousedown" : "mouseover", function() {
                n._enabled && (r && l(),
                n.dispatchEvent("enter"))
            }),
            t.on(mobile() ? "pressup" : "mouseout", function() {
                n._enabled && n.dispatchEvent("exit")
            }),
            Object.defineProperty(this, "portal", {
                get: function() {
                    return t
                },
                set: function(e) {
                    !zot(e) && e.stage || !zon ? a.setMask(t) : zog("zim.Portal() - please provide a Display Object to act as the portal")
                }
            }),
            Object.defineProperty(this, "currentLand", {
                get: function() {
                    return i
                },
                set: function(e) {
                    if (o.contains(e))
                        for (; e != i; )
                            l()
                }
            }),
            Object.defineProperty(this, "nextLand", {
                get: function() {
                    return a
                },
                set: function(e) {
                    zon && zog("zim.Portal() - nextLand is read only - remake Portal to change")
                }
            }),
            this._enabled = !0,
            Object.defineProperty(n, "enabled", {
                get: function() {
                    return n._enabled
                },
                set: function(e) {
                    n._enabled = e
                }
            }),
            this.dispose = function() {}
        }
        function l() {
            o.setChildIndex(i, 0),
            i = a,
            a = o.getChildAt(o.numChildren - 2),
            o.setChildIndex(a, o.numChildren - 1),
            i.setMask(null),
            a.setMask(t),
            t.stage.update()
        }
    }
    ,
    kt.extend(kt.Portal, createjs.EventDispatcher, null, "cjsEventDispatcher", !1),
    kt.Parallax = function(e, t, a, o) {
        var n;
        if (n = zob(kt.Parallax, arguments, "layers, damp, auto, stage", this))
            return n;
        if (z_d("68"),
        this.type = "Parallax",
        zot(o))
            if (e && e[0] && e[0].obj && e[0].obj.stage)
                o = e[0].obj.stage;
            else {
                if (!Tt)
                    return;
                o = Tt.stage
            }
        a = !!zot(a);
        var l = o.getBounds().width
          , s = o.getBounds().height
          , r = this;
        o.on("stagemousemove", function(e) {
            r.mouseX = e.stageX,
            r.mouseY = e.stageY
        });
        var c = zot(t) ? .1 : t;
        this.addLayer = function(e) {
            if (!(zot(e.obj) || zot(e.prop) || zot(e.propChange))) {
                var t = {
                    obj: e.obj,
                    prop: e.prop
                };
                t[t.prop] = e.propChange,
                zot(e.input) && (e.input = "mouseX"),
                t.input = e.input,
                t.split = zot(e.split) ? !("mouseX" != e.input || !a) : e.split;
                var o = zot(e.inMin) ? 0 : e.inMin
                  , n = zot(e.inMax) ? "mouseX" == e.input || "scrollX" == e.input ? l : s : e.inMax
                  , r = zot(e.factor) ? 1 : e.factor
                  , i = !zot(e.integer) && e.integer;
                return t["p_" + t.prop] = new kt.ProportionDamp(o,n,0,t[t.prop],c,r,i),
                "scale" == t.prop ? t["s_" + t.prop] = t.obj.scaleX : "frame" == t.prop ? t["s_" + t.prop] = t.obj.currentFrame : t["s_" + t.prop] = t.obj[t.prop],
                zot(e.immediate) || t["p_" + t.prop].immediate(e.immediate),
                d.push(t),
                d.length - 1
            }
        }
        ,
        this.removeLayer = function(e) {
            if (!zot(e)) {
                var t = d[e];
                t["p_" + t.prop].dispose(),
                d.splice(e, 1)
            }
        }
        ,
        this.immediate = function(e) {
            for (var t, o = 0; o < d.length; o++)
                (t = d[o])["p_" + t.prop].immediate(e[o])
        }
        ,
        this.dispose = function() {
            return d = null,
            a && kt.Ticker.remove(u),
            !0
        }
        ,
        e = zot(e) ? [] : e;
        for (var d = [], i = 0; i < e.length; i++)
            this.addLayer(e[i]);
        if (a)
            var u = kt.Ticker.add(function(e) {
                r.step()
            }, o);
        this.step = function(e) {
            for (var t, o, n = 0; n < d.length; n++)
                t = d[n],
                zot(e) ? "mouseX" == t.input ? o = r.mouseX : "mouseY" == t.input ? o = r.mouseY : "scrollX" == t.input ? o = kt.scrollX() : "scrollY" == t.input && (o = kt.scrollY()) : o = e,
                "scale" == t.prop ? t.obj.scaleX = t.obj.scaleY = t["s_" + t.prop] + t["p_" + t.prop].convert(o) : "frame" == t.prop ? t.obj.gotoAndStop(t["s_" + t.prop] + t["p_" + t.prop].convert(o)) : (t.obj[t.prop] = t["s_" + t.prop] + t["p_" + t.prop].convert(o),
                t.split && (t.obj[t.prop] -= t[t.prop] / 2))
        }
        ,
        Object.defineProperty(r, "damp", {
            get: function() {
                return c
            },
            set: function(e) {
                var t;
                c = e;
                for (var o = 0; o < d.length; o++)
                    (t = d[o])["p_" + t.prop].damp = c
            }
        })
    }
    ,
    kt.Scroller = function(e, t, o, n, r, i, a) {
        var l;
        if (l = zob(kt.Scroller, arguments, "backing, speed, direction, horizontal, gapFix, stage, container", this))
            return l;
        z_d("69"),
        this.cjsEventDispatcher_constructor(),
        this.type = "Scroller";
        var s = this.backing1 = e;
        if (!zot(s) && s.getBounds) {
            var c = this.backing2 = e.clone();
            zot(n) && (n = !0),
            zot(r) && (r = 0);
            var d = this;
            this.speed = zot(t) ? 1 : t;
            var u = this.baseSpeed = this.speed;
            this.direction = zot(o) ? 1 : o;
            var h = n ? s.scaleX : s.scaleY;
            if (s.getBounds())
                if (i || s.stage)
                    if (s.parent)
                        if (s.parent.addChildAt(c, s.parent.getChildIndex(s)),
                        i = i || s.stage,
                        zot(a) && (a = i),
                        a.getBounds()) {
                            var g, p, f = s.getBounds().width * h - r, m = s.getBounds().height * h - r;
                            n ? c.x = f : c.y = m;
                            var z = !1
                              , v = kt.Ticker.add(function(e) {
                                g || (g = a.getBounds().width,
                                p = a.getBounds().height);
                                if (0 == d.speed || 0 == d.direction)
                                    return;
                                n ? (s.x -= d.speed * d.direction,
                                s.x < c.x ? c.x = s.x + f : c.x = s.x - f,
                                0 < d.direction * d.speed ? c.x < 0 && s.x < c.x ? s.x = c.x + f : s.x < 0 && c.x < s.x && (c.x = s.x + f) : c.x > g && c.x > s.x ? c.x = s.x - f : s.x > g && s.x > c.x && (s.x = c.x - f)) : (s.y -= d.speed * d.direction,
                                s.y < c.y ? c.y = s.y + m : c.y = s.y - m,
                                0 < d.direction * d.speed ? c.y < 0 && s.y < c.y ? s.y = c.y + m : s.y < 0 && c.y < s.y && (c.y = s.y + m) : c.y > p && c.y > s.y ? c.y = s.y - m : s.y > p && s.y > c.y && (s.y = c.y - m))
                            }, i);
                            this.paused = !1,
                            this.pause = function(e, t) {
                                return zot(e) && (e = !0),
                                zot(t) && (t = 0),
                                e ? (u = d.speed,
                                0 < t ? (z = !0,
                                kt.animate({
                                    target: d,
                                    obj: {
                                        pausingSpeed: 0
                                    },
                                    ticker: !1,
                                    time: t,
                                    call: function() {
                                        d.speed = 0,
                                        d.paused = !0,
                                        z = !1,
                                        d.dispatchEvent("pause")
                                    }
                                })) : (z = !1,
                                d.speed = 0,
                                d.paused = !0,
                                setTimeout(function() {
                                    d.dispatchEvent("pause")
                                }, 10))) : (z = !1,
                                0 < t ? kt.animate({
                                    target: d,
                                    obj: {
                                        pausingSpeed: u
                                    },
                                    ticker: !1,
                                    time: t,
                                    call: function() {
                                        d.speed = u,
                                        d.paused = !1,
                                        z = !1
                                    }
                                }) : (d.speed = u,
                                d.paused = !1)),
                                d
                            }
                            ,
                            Object.defineProperty(d, "percentSpeed", {
                                get: function() {
                                    return 0 == d.baseSpeed ? NaN : d.speed / d.baseSpeed * 100
                                },
                                set: function(e) {
                                    z || d.paused || (d.speed = d.baseSpeed * e / 100)
                                }
                            }),
                            Object.defineProperty(d, "pausingSpeed", {
                                get: function() {
                                    return 0 == d.baseSpeed ? NaN : d.speed / d.baseSpeed * 100
                                },
                                set: function(e) {
                                    d.speed = d.baseSpeed * e / 100
                                }
                            }),
                            this.dispose = function() {
                                return zon && zog("bye from Scroller"),
                                kt.Ticker.remove(v),
                                !0
                            }
                        } else
                            zog("zim display - Scroller(): please setBounds() on container or stage if no container");
                    else
                        zog("zim display - Scroller(): please add object to container or stage before adding to Scroller");
                else
                    zog("zim display - Scroller(): please pass in stage parameter or add backing objects to stage to start");
            else
                zog("zim display - Scroller(): please setBounds() on backing objects")
        }
    }
    ,
    kt.extend(kt.Scroller, createjs.EventDispatcher, null, "cjsEventDispatcher"),
    kt.Dynamo = function(n, e, t, o, r, i, a, l, s) {
        var c;
        if (c = zob(kt.Dynamo, arguments, "sprite, speed, label, startFrame, endFrame, update, reversible, flip, flipVertical", this))
            return c;
        z_d("69.2"),
        this.cjsEventDispatcher_constructor(),
        this.type = "Dynamo";
        var d = this.frames = n.parseFrames(t, o, r, !0);
        if (0 != d.length) {
            this.totalFrames = d.length;
            var u = 0;
            zot(e) && (e = 30),
            zot(a) && (a = !0);
            var h = this.baseSpeed = this.speed = e;
            zot(i) && (i = !1),
            zot(l) && 0 == a && (l = !0);
            var g, p, f, m, z, v = this, y = Date.now(), b = !1;
            v.scaleX = n.scaleX,
            v.scaleY = n.scaleY,
            function e() {
                if (g = requestAnimationFrame(e),
                p = d[u].s,
                0 != v.speed && 0 != p && (m = 1e3 / Math.abs(v.speed) * p,
                f = Date.now(),
                m < f - y)) {
                    y = f;
                    var t = v.frame + (0 < v.speed || !a ? 1 : -1)
                      , o = !1;
                    t >= d.length && (o = !0,
                    t = 0),
                    t < 0 && (o = !0,
                    t = d.length - 1),
                    v.frame = t,
                    l && (v.speed < 0 ? n.scaleX = -v.scaleX : n.scaleX = v.scaleX),
                    s && (v.speed < 0 ? n.scaleY = -v.scaleY : n.scaleY = v.scaleY),
                    o && v.dispatchEvent("loop"),
                    v.dispatchEvent("change"),
                    i && n.stage && n.stage.update(),
                    zot(z) || z != v.frame || (b = !1,
                    v.speed = 0,
                    v.paused = !0,
                    v.dispatchEvent("pause"))
                }
            }(),
            this.paused = !1,
            this.pause = function(e, t, o) {
                return zot(e) && (e = !0),
                zot(t) && (t = 0),
                e ? (h = v.speed,
                zot(o) ? 0 < t ? (b = !0,
                kt.animate({
                    target: v,
                    obj: {
                        pausingSpeed: 0
                    },
                    ticker: !1,
                    time: t,
                    call: function() {
                        b = !1,
                        v.speed = 0,
                        v.paused = !0,
                        v.dispatchEvent("pause")
                    }
                })) : (b = !1,
                v.speed = 0,
                v.paused = !0,
                setTimeout(function() {
                    v.dispatchEvent("pause")
                }, 10)) : (b = !0,
                z = o)) : (z = null,
                0 < t ? (b = !0,
                kt.animate({
                    target: v,
                    obj: {
                        pausingSpeed: h
                    },
                    ticker: !1,
                    time: t,
                    call: function() {
                        b = !1,
                        v.speed = h,
                        v.paused = !1
                    }
                })) : (b = !1,
                v.speed = h,
                v.paused = !1)),
                v
            }
            ,
            Object.defineProperty(v, "frame", {
                get: function() {
                    return u
                },
                set: function(e) {
                    u = Math.round(e) % d.length;
                    var t = d[u];
                    zot(t) || (n.frame = t.f)
                }
            }),
            Object.defineProperty(v, "percentSpeed", {
                get: function() {
                    return 0 == v.baseSpeed ? NaN : v.speed / v.baseSpeed * 100
                },
                set: function(e) {
                    b || v.paused || (v.speed = v.baseSpeed * e / 100)
                }
            }),
            Object.defineProperty(v, "pausingSpeed", {
                get: function() {
                    return 0 == v.baseSpeed ? NaN : v.speed / v.baseSpeed * 100
                },
                set: function(e) {
                    v.speed = v.baseSpeed * e / 100
                }
            }),
            this.dispose = function() {
                cancelAnimationFrame(g)
            }
        }
    }
    ,
    kt.extend(kt.Dynamo, createjs.EventDispatcher, null, "cjsEventDispatcher"),
    kt.Accelerator = function(e) {
        z_d("69.3"),
        this.cjsEventDispatcher_constructor();
        var l = this;
        this.type = "Accelerator",
        this.paused = !1,
        this.items = [],
        this.paused = !1,
        this._percentSpeed = 100,
        this.add = function(e) {
            var t;
            t = Array.isArray(e) ? e : [e];
            for (var o = 0; o < t.length; o++)
                l.items.indexOf(t[o]) < 0 && l.items.push(t[o]);
            return l
        }
        ,
        e && this.add(e),
        this.remove = function(e) {
            var t, o;
            t = Array.isArray(e) ? e : [e];
            for (var n = 0; n < t.length; n++)
                0 <= (o = l.items.indexOf(t[n])) && l.items.splice(o, 1);
            return l
        }
        ,
        this.pause = function(o, e, t) {
            zot(o) && (o = !0);
            var n = [];
            if (o) {
                zot(t) || (e = null);
                for (var r = !1, i = 0; i < l.items.length; i++)
                    (zot(e) || !zot(t) || l.items[i].totalFrames) && (!l.items[i].totalFrames || zot(e) && zot(t)) || (l.items[i].pause(!0, e, t),
                    r = !0,
                    n[i] = 1,
                    l.items[i].on("pause", function() {
                        l.paused || (a(!0),
                        l.paused = !0,
                        l.dispatchEvent("pause"))
                    }, null, !0));
                r || (a(),
                l.paused = !0,
                setTimeout(function() {
                    l.dispatchEvent("pause")
                }, 10))
            } else
                l.paused = !1,
                a();
            function a(e) {
                for (var t = 0; t < l.items.length; t++)
                    1 != n[t] && l.items[t].pause(o)
            }
        }
        ,
        Object.defineProperty(l, "percentSpeed", {
            get: function() {
                return l._percentSpeed
            },
            set: function(e) {
                l._percentSpeed = e;
                for (var t = 0; t < l.items.length; t++)
                    l.items[t].percentSpeed = e
            }
        }),
        this.dispose = function() {
            for (var e = 0; e < l.items.length; e++)
                l.items[e].dispose();
            return !0
        }
    }
    ,
    kt.extend(kt.Accelerator, createjs.EventDispatcher, null, "cjsEventDispatcher"),
    kt.Emitter = function(f, m, z, t, e, o, n, r, i, a, l, s, v, y, c, d, u, h, g, p, b, w, x, C, k, T, A, B, S, P) {
        var E;
        if (E = zob(kt.Emitter, arguments, "obj, width, height, interval, num, life, fade, shrink, decayTime, decayStart, trace, traceFadeTime, traceShiftX, traceShiftY, angle, force, gravity, wind, layers, animation, random, horizontal, vertical, sink, sinkForce, cache, events, startPaused, pool, poolMin", this))
            return E;
        z_d("69.9"),
        this.type = "Emitter",
        zot(f) && (f = [new Circle(20,"#e472c4"), new Circle(20,"#acd241"), new Circle(20,"#50c4b7")]),
        zot(m) && (m = 300),
        zot(z) && (z = 300),
        zot(t) && (t = 20),
        "number" == typeof t && (t = Math.max(10, t)),
        zot(e) && (e = 1),
        zot(l) && (l = !1),
        zot(s) && (s = i),
        zot(v) && (v = 0),
        zot(y) && (y = 0),
        zot(o) && (o = 1e3),
        zot(n) && (n = !0),
        zot(r) && (r = !l),
        zot(i) && (i = 1e3),
        zot(c) && (c = {
            min: 0,
            max: 360
        }),
        zot(d) && (d = 5),
        zot(u) && (u = 9.8),
        zot(h) && (h = 0),
        zot(g) && (g = "top"),
        zot(m) && (m = 100),
        zot(z) && (z = 100),
        zot(w) && (w = !1),
        zot(x) && (x = !1),
        !zot(C) && zot(k) && (k = 10),
        zot(A) && (A = !1),
        zot(B) && (B = !1),
        zot(S) && (S = !0),
        zot(P) && (P = 0),
        this.zimContainer_constructor(m, z, null, null, !1),
        this.type = "Emitter";
        var M = this;
        M.obj = f,
        M.interval = t,
        M.num = e,
        M.life = o,
        M.fade = n,
        M.shrink = r,
        M.decayTime = i,
        M.decayStart = a,
        M.trace = l,
        M.traceFadeTime = s,
        M.traceShiftX = v,
        M.traceShiftY = y,
        M.angle = c,
        M.force = d,
        M.gravity = u,
        M.wind = h,
        M.layers = g,
        M.animation = p,
        M.random = b,
        M.horizontal = w,
        M.vertical = x,
        M.sink = C,
        M.sinkForce = k,
        M.events = A,
        M.startEmitterPaused = B,
        M.pool = S,
        M.poolMin = P,
        M.particlesEmitted = 0;
        var I, j, O = [], Y = 0, L = 0;
        function D(e) {
            if (M.events && X("fizzed", e),
            (e.trace ? e.getChildAt(0).endSpurt : e.endSpurt) && (X("spurtfizzed", e),
            M.spurting = !1),
            M.pool && "end" != e.pooled)
                return e.pooled || (e.pooled = !0,
                O.push(e)),
                void (e.visible = !1);
            M.removeChild(e),
            M.trace && e.uncache(),
            e = null
        }
        function X(e, t) {
            var o = new createjs.Event(e);
            o.particle = t.trace ? t.getChildAt(0) : t,
            M.dispatchEvent(o)
        }
        function R(e) {
            M.pauseEmitter(),
            M.spurtCount = M.spurtNum = null,
            X("spurted", e),
            e.endSpurt = !0
        }
        kt.added(M, function(e) {
            j = e,
            zot(T) && (T = !j.isWebGL && kt.mobile());
            T && (j.snapToPixelEnabled = !0);
            if (j) {
                w || x || M.centerReg(null, null, !1),
                M.zimInterval = kt.interval(M.interval, function() {
                    var g, p;
                    M.startEmitterPaused ? M.pauseEmitter() : (f = Array.isArray(M.obj) ? M.obj : [M.obj]).length <= 0 || (Array.isArray(M.interval) ? (M.interval.sort(e),
                    g = M.interval[0]) : g = M.interval.constructor == {}.constructor ? M.interval.min : M.interval,
                    Array.isArray(M.num) ? (M.num.sort(e),
                    p = M.num[M.num.length - 1]) : p = M.num.constructor == {}.constructor ? M.num.max : M.num,
                    kt.loop(zik(M.num), function() {
                        if (0 < M.decayTime) {
                            var e = {};
                            M.shrink && (e.scale = 0),
                            M.fade && (e.alpha = 0)
                        }
                        if (M.pool && 0 < O.length && L >= Math.max(M.poolMin, (M.life / g + 5) * p)) {
                            var o = O[Y++ % O.length];
                            o.visible = !0;
                            var n = o.trace ? o.getChildAt(0) : o;
                            if (n.emitShape) {
                                var t = n.template;
                                n.graphics.c().s(t.s ? zik(t.s) : null).ss(t.ss ? zik(t.ss) : null).sd(t.sd ? zik(t.sd) : null, t.offset ? zik(t.offset) : null)
                            }
                            o.trace && o.updateCache(),
                            "top" == M.layers ? n.emitShape ? o.addTo(M, null, !1) : o.centerReg(M) : n.emitShape ? o.addTo(M, "bottom" == M.layers ? 0 : kt.rand(M.numChildren), !1) : o.centerReg(M, "bottom" == M.layers ? 0 : kt.rand(M.numChildren)),
                            o.alpha = 1,
                            o.scaleX = 1,
                            o.scaleY = 1,
                            n.alpha = n.originalAlpha,
                            n.scaleX = n.originalScaleX,
                            n.scaleY = n.originalScaleY,
                            n.endSpurt = !1
                        } else {
                            L++,
                            M.trace && ((o = new kt.Container(m,z,null,null,!1)).trace = !0);
                            var r = zik(kt.shuffle(f)[0]);
                            if ("shape" == r.type) {
                                var t = r
                                  , n = new kt.Shape(1,1,null,null,null,!1);
                                n.emitShape = !0,
                                n.template = t,
                                n.graphics.s(t.s ? zik(t.s) : null).ss(t.ss ? zik(t.ss) : null).sd(t.sd ? zik(t.sd) : null, t.offset ? zik(t.offset) : null),
                                M.trace ? n.addTo(o, null, !1) : "top" == M.layers ? n.addTo(M, null, !1) : n.addTo(M, "bottom" == M.layers ? 0 : kt.rand(M.numChildren), null, !1)
                            } else {
                                var n = r.clone();
                                n.centerReg || zimify(n),
                                M.trace ? n.centerReg(o).pos({
                                    x: -1e3,
                                    y: -1e3,
                                    reg: !0
                                }) : "top" == M.layers ? n.centerReg(M) : n.centerReg(M, "bottom" == M.layers ? 0 : kt.rand(M.numChildren))
                            }
                            M.trace && ("top" == M.layers ? o.addTo(M, null, !1) : o.addTo(M, "bottom" == M.layers ? 0 : kt.rand(M.numChildren), !1),
                            o.cache(v, y, m, z)),
                            M.trace || (o = n),
                            (o.particle = n).originalAlpha = n.alpha,
                            n.originalScaleX = n.scaleX,
                            n.originalScaleY = n.scaleY
                        }
                        M.currentParticle = n,
                        M.particlesEmitted++,
                        o.particleNormal = !0,
                        o.particleDecaying = !1,
                        o.particleFizzing = !1;
                        var i = zik(M.angle)
                          , a = zik(M.force)
                          , l = a * Math.cos(i * Math.PI / 180)
                          , s = a * Math.sin(i * Math.PI / 180);
                        n.info = {
                            position: {
                                x: m / 2,
                                y: z / 2
                            },
                            velocity: {
                                x: l,
                                y: s
                            }
                        },
                        M.horizontal && (n.info.position = {
                            x: kt.rand(0, m),
                            y: M.vertical ? z / 2 : 0
                        }),
                        M.vertical && (n.info.position = {
                            x: M.horizontal ? m / 2 : 0,
                            y: kt.rand(0, z)
                        }),
                        n.emitShape ? n.graphics.mt(n.info.position.x, n.info.position.y) : (n.x = n.info.position.x,
                        n.y = n.info.position.y),
                        M.random && kt.loop(M.random, function(e, t) {
                            val = zik(t),
                            "scale" == e ? n.sca(val) : ("x" == e ? n.info.position.x = M.horizontal || M.vertical ? val : val + m / 2 : "y" == e && (n.info.position.y = M.horizontal || M.vertical ? val : val + z / 2),
                            "x" != e && "y" != e || !n.emitShape || n.graphics.mt(n.info.position.x, n.info.position.y),
                            n[e] = val,
                            n.emitShape && (n.x = 0,
                            n.y = 0))
                        }),
                        T && !n.emitShape && n.cache(n.getBounds().x - 10, n.getBounds().y - 10, n.getBounds().width + 20, n.getBounds().height + 20);
                        var c, d = !n.emitShape && M.shrink;
                        if (0 < M.decayTime && (M.fade || d || M.trace && 0 < M.traceFadeTime)) {
                            if (M.trace && 0 < M.traceFadeTime && o.animate({
                                obj: {
                                    alpha: 0
                                },
                                time: M.traceFadeTime,
                                wait: M.life - M.traceFadeTime,
                                waitedCall: function(e) {
                                    e.particleNormal = !1,
                                    e.particleFizzing = !0
                                },
                                call: D,
                                override: !1,
                                id: "decay"
                            }),
                            M.fade || d) {
                                var u = {};
                                M.fade && (u.alpha = 0),
                                d && (u.scaleX = 0,
                                u.scaleY = 0),
                                n.animate({
                                    obj: u,
                                    time: M.decayTime,
                                    wait: zot(M.decayStart) ? M.life - M.decayTime : M.decayStart,
                                    waitedCall: function(e) {
                                        e.parent != M && (e = e.parent),
                                        e.particleNormal = !1,
                                        e.particleDecaying = !0
                                    },
                                    call: function(e) {
                                        var t;
                                        M.events && X("decayed", e),
                                        e.endSpurt && X("spurtdecayed", e),
                                        M.trace && 0 < M.traceFadeTime || (zot(M.decayStart) || M.decayStart + M.decayTime > M.life ? e.parent && D(e.parent.trace ? e.parent : e) : (t = o,
                                        kt.timeout(M.life - (M.decayStart + M.decayTime), function() {
                                            D(t)
                                        })))
                                    },
                                    override: !1,
                                    id: "decay"
                                })
                            }
                        } else
                            0 < M.life && ((c = o).timeOut = kt.timeout(M.life, function() {
                                D(c)
                            }));
                        if (M.events && X("emitted", o),
                        function(e) {
                            if (zot(M.spurtCount) && zot(M.spurtNum))
                                return;
                            M.spurtCount++,
                            M.spurtCount >= M.spurtNum && R(e)
                        }(n),
                        M.animation) {
                            var h = zik(M.animation);
                            zot(h.override) && (h.override = !1),
                            n.animate(kt.copy(h))
                        }
                    }));
                    function e(e, t) {
                        return e - t
                    }
                }, null, !0);
                I = M.emitterTicker = kt.Ticker.add(function() {
                    kt.loop(M, function(e) {
                        if (e.trace) {
                            var t = e;
                            e = e.getChildAt(0)
                        }
                        var o = e.info
                          , n = 0
                          , r = 0;
                        if (!zot(M.sink)) {
                            var i = M.localToGlobal(o.position.x, o.position.y);
                            if (M.sink.parent && M.sink.parent.localToGlobal)
                                var a = M.sink.parent.localToGlobal(M.sink.x, M.sink.y);
                            else
                                a = new createjs.Point(zik(M.sink.x),zik(M.sink.y));
                            var l = kt.angle(i.x, i.y, a.x, a.y)
                              , n = M.sinkForce * Math.cos(l * Math.PI / 180)
                              , r = M.sinkForce * Math.sin(l * Math.PI / 180)
                        }
                        var s = M.wind + n
                          , c = M.gravity + r;
                        o.velocity.x += s * frameRate,
                        o.velocity.y += c * frameRate,
                        o.position.x += o.velocity.x * frameRate * 100,
                        o.position.y += o.velocity.y * frameRate * 100,
                        e.emitShape ? e.graphics.lt(o.position.x, o.position.y) : (e.x = o.position.x,
                        e.y = o.position.y),
                        M.trace && t && t.updateCache(e.emitShape ? null : "source-over")
                    })
                }, j),
                frameRate = 1 / kt.Ticker.framerate
            }
        }),
        Object.defineProperty(M, "interval", {
            get: function() {
                return t
            },
            set: function(e) {
                t = e,
                M.zimInterval && (M.zimInterval.time = t)
            }
        }),
        this.spurting = !1,
        this.spurt = function(e, t, o) {
            var n;
            if (n = zob(M.spurt, arguments, "num, time, restart"))
                return n;
            zot(t) || (kt.timeout(zik(t), function() {
                R(M.currentParticle)
            }),
            M.spurting = !0),
            zot(e) || (M.spurtNum = zik(e),
            M.spurtCount = 0,
            M.spurting = !0),
            M.pauseEmitter(!1, o, null, !0)
        }
        ,
        this.clearPool = function() {
            kt.loop(M, function(e) {
                e.pooled = "end",
                e.visible || M.removeChild(e)
            }, !0),
            Y = L = 0,
            O = []
        }
        ,
        M.startEmitterPaused || (this.emitterPaused = !1),
        this.pauseEmitter = function(e, t, o, n) {
            if (M.startEmitterPaused = null,
            zot(e) && (e = !0),
            zot(t) && (t = !1),
            zot(o) && (o = !1),
            e) {
                if (M.emitterPaused)
                    return M;
                o && (I && kt.Ticker.remove(I),
                kt.loop(M, function(e) {
                    e.pauseAnimate(),
                    e.trace && e.getChildAt(0).pauseAnimate(),
                    e.timeOut && e.timeOut.pause()
                })),
                M.zimInterval.pause(),
                M.emitterPaused = !0
            } else {
                if (!M.emitterPaused)
                    return M;
                t && (kt.loop(M, function(e) {
                    e.stopAnimate(),
                    e.timeOut && e.timeOut.clear(),
                    e.trace && e.getChildAt(0).pauseAnimate()
                }),
                M.removeAllChildren()),
                j && I && !kt.Ticker.has(j, I) && (kt.Ticker.add(I, j),
                kt.loop(M, function(e) {
                    e.pauseAnimate(!1),
                    e.timeOut && e.timeOut.pause(!1),
                    e.trace && e.getChildAt(0).pauseAnimate(!1)
                })),
                M.zimInterval.pause(!1, n),
                M.emitterPaused = !1
            }
            return M
        }
        ,
        this.resize = function(e, t) {
            zot(e) || (m = e),
            zot(t) || (z = t),
            M.setBounds(0, 0, m, z),
            w || x || M.centerReg(),
            M.clearPool()
        }
        ,
        this.clone = function() {
            var e;
            return e = Array.isArray(M.obj) || M.obj.constructor == {}.constructor ? kt.copy(M.obj) : M.obj.clone ? M.obj.clone() : M.obj,
            M.cloneProps(new kt.Emitter(e,m,z,M.interval,M.num,M.life,M.fade,M.shrink,M.decayTime,M.decayStart,M.trace,M.traceFadeTime,M.traceShiftX,M.traceShiftY,M.angle,M.force,M.gravity,M.wind,M.layers,M.animation,kt.copy(M.random),M.horizontal,M.vertical,M.sink,M.sinkForce,T,M.events,B,M.pool,M.poolMin))
        }
        ,
        this.dispose = function() {
            return I && kt.Ticker.remove(I),
            kt.loop(M, function(e) {
                e.stopAnimate()
            }),
            M.zimInterval && M.zimInterval.clear(),
            !0
        }
    }
    ,
    kt.extend(kt.Emitter, kt.Container, "clone", "zimContainer", !1),
    kt.Pen = function(f, m, z, t, v, y, b, w, x, o, r, e, i, a, n, l, s, c, d, u, h, g) {
        var p;
        if (p = zob(kt.Pen, arguments, "size, color, penType, damp, spread, borderColor, borderWidth, end, paper, nib, cache, ctrlKey, cropScale, undo, undoKeys, draggable, onTop, deleteable, doubleClickDelete, immediateStop, lineAlpha, lineBlendMode", this))
            return p;
        z_d("69.93"),
        this.zimContainer_constructor(),
        this.type = "Pen",
        zot(z) && (z = "line");
        var C = {
            size: 2,
            color: "#333",
            spread: {
                min: 5,
                max: 20
            },
            borderColor: "#111",
            borderWidth: 0
        }
          , k = {
            line: {
                size: 2
            },
            kitetail: {
                size: {
                    min: 5,
                    max: 20
                },
                color: kt.series(pink, blue, green),
                borderColor: "rgba(0,0,0,.5)",
                borderWidth: 1
            },
            grass: {
                color: "#acd241",
                size: 3,
                spread: {
                    min: 10,
                    max: 30
                }
            },
            hair: {
                color: ["#e472c4", "#50c4b7"],
                size: 3,
                spread: {
                    min: 20,
                    max: 50
                }
            },
            city: {
                size: {
                    min: 30,
                    max: 70
                },
                spread: {
                    min: 50,
                    max: 200
                },
                color: ["#333", "#111", "#555"]
            },
            barbwire: {},
            splatter: {
                size: {
                    min: 5,
                    max: 20
                },
                color: "rgba(0,0,0,.5)"
            }
        };
        zot(k[z]) && (z = "line"),
        zot(f) && (f = zot(k[z].size) ? C.size : k[z].size),
        zot(m) && (m = zot(k[z].color) ? C.color : k[z].color),
        zot(t) && (t = .1),
        !1 === t && (t = 1),
        zot(z) && (z = "line"),
        zot(v) && (v = zot(k[z].spread) ? C.spread : k[z].spread),
        zot(y) && (y = zot(k[z].borderColor) ? C.borderColor : k[z].borderColor),
        zot(b) && (b = zot(k[z].borderWidth) ? C.borderWidth : k[z].borderWidth),
        zot(w) && (w = "butt"),
        zot(i) && (i = 1),
        zot(r) && (r = !0),
        zot(a) && (a = 0),
        zot(n) && (n = !0),
        zot(l) && (l = !0),
        zot(c) && (c = !0),
        zot(d) && (d = !0),
        zot(s) && (s = !0),
        zot(u) && (u = "both"),
        zot(h) && (h = 1),
        zot(g) && (g = "normal");
        var T = this;
        this.dampX = new kt.Damp(null,t),
        this.dampY = new kt.Damp(null,t);
        var A = !0;
        this.drawing = !1,
        this.immediateStop = u,
        this.undoLevels = a,
        this.undoKeys = n,
        this.draggable = l,
        this.lineAlpha = h,
        this.lineBlendMode = g;
        var B, S, P, E, M = new kt.Shape, I = Tt ? Tt.stage.width : 1024, j = Tt ? Tt.stage.height : 768;
        T.paperNum = 0,
        T.sizeScale = 1,
        T.spreadScale = 1,
        T.sizeFactor = 1,
        T.spreadFactor = 1,
        T.stop = function() {}
        ,
        zot(x) ? x = new Container : M.addTo(x),
        this.added(function() {
            if (T.paper = x,
            !zot(o))
                if (T.zimDown)
                    T.nib = o.addTo(T);
                else {
                    function t(e) {
                        T.nib.x = e.stageX,
                        T.nib.y = e.stageY
                    }
                    T.nib = o.addTo(T.parent, T.parent.getChildIndex(T)),
                    T.nib.x = T.x,
                    T.nib.y = T.y,
                    T.nib.mouseEnabled = !1,
                    T.stage.on("stagemousedown", function(e) {
                        T.nibEvent = T.stage.on("stagemousemove", t)
                    }),
                    T.stage.on("stagemouseup", function(e) {
                        T.stage.off("stagemousemove", T.nibEvent)
                    })
                }
            T.zimDragCheck = !1,
            T.stop = function() {
                T.stopCheck(!0)
            }
            ,
            T.infinite = !1,
            T.stopCheck = function(e) {
                if (e)
                    T.drawing = !1,
                    T.infinite = !1;
                else {
                    if (T.infinite)
                        return;
                    if (T.zimDragCheck)
                        return;
                    if (!T.immediateStop && T.drawing)
                        return
                }
                T.immediate(T.x, T.y),
                setTimeout(function() {
                    if (!T.drawing) {
                        if (r) {
                            M.cache(-(I * i - I) / 2, -(j * i - j) / 2, I * i, j * i);
                            var e = x.bitmap = new Bitmap(M.cacheCanvas).reg((I * i - I) / 2, (j * i - j) / 2).addTo(x);
                            M.graphics.clear(),
                            M.uncache(),
                            M.top()
                        } else
                            e = M;
                        if (0 < T.undoLevels) {
                            var t = {
                                paper: x,
                                line: e
                            };
                            a.push(t),
                            a.length > T.undoLevels && a.unshift(),
                            T.dispatchEvent("recordUndo")
                        }
                        r || (M = (new Shape).clone().addTo(x)),
                        T.lastSegment = e,
                        (T.lastSelected = e).alpha = T.lineAlpha,
                        e.blendMode = T.lineBlendMode,
                        e.paper = x,
                        T.dispatchEvent("stop"),
                        T.dispatchEvent("change")
                    }
                }, T.immediateStop || e ? 0 : 50)
            }
            ;
            var p = 0;
            T.dampX.immediate(T.x),
            T.dampY.immediate(T.y),
            T.lastX = T.x,
            T.lastY = T.y,
            T.ticker = Ticker.add(function() {
                var e = T.dampX.convert(A ? T.x : T.finishX)
                  , t = T.dampY.convert(A ? T.y : T.finishY)
                  , o = T.parent.localToLocal(e, t, M)
                  , n = zik(f) * T.sizeScale * T.sizeFactor
                  , r = zik(v) * T.spreadScale * T.spreadFactor;
                if (Math.abs(T.lastX - e) + Math.abs(T.lastY - t) < 1)
                    return T.drawing && (T.drawing = !1,
                    T.zimDown ? (T.x = T.lastX = A ? T.x : T.finishX,
                    T.y = T.lastY = A ? T.y : T.finishY,
                    T.dampX.immediate(T.x),
                    T.dampY.immediate(T.y)) : (T.x = T.finishX = T.lastX = e,
                    T.y = T.finishY = T.lastY = t),
                    T.stopCheck()),
                    T.lastX = e,
                    void (T.lastY = t);
                if (T.drawing || (O = [],
                x.getChildIndex(M) != x.numChildren - 1 && M.top()),
                T.drawing = !0,
                T.dispatchEvent("drawing"),
                "splatter" == z)
                    for (var i = 0; i <= 3; i++) {
                        var a = rand(360) * Math.PI / 180
                          , l = r
                          , s = {
                            x: e + l * Math.cos(a),
                            y: t + l * Math.sin(a)
                        }
                          , c = T.parent.localToLocal(s.x, s.y, M);
                        M.graphics.mt(c.x, c.y).f(zik(m)).dc(c.x, c.y, n / 2)
                    }
                else if ("grass" == z || "hair" == z || "city" == z) {
                    if ("grass" == z || "hair" == z) {
                        var d = T.lastX + (e - T.lastX) / 2
                          , u = T.lastY + (t - T.lastY) / 2
                          , h = T.parent.localToLocal(d, u, M);
                        M.graphics.s(zik(m)).ss(n, w).mt(h.x, h.y).lt(h.x + rand(-r / 4, r / 4), "hair" == z ? h.y + r : h.y - r)
                    }
                    ("grass" == z || "hair" == z || "city" == z && p % 3 == 0) && M.graphics.s(zik(m)).ss(n, w).mt(o.x, o.y).lt(o.x + ("city" == z ? 0 : rand(-r / 4, r / 4)), "hair" == z ? h.y + r : o.y - r),
                    p++
                } else {
                    if ("kitetail" == z && M.graphics.s(zik(m)).ss(n, w),
                    "barbwire" == z) {
                        M.graphics.s(zik(m)).ss(n, w);
                        d = T.lastX + (e - T.lastX) / 2 + rand(-r, r),
                        u = T.lastY + (t - T.lastY) / 2 + rand(-r, r)
                    } else
                        d = T.lastX + (e - T.lastX) / 2,
                        u = T.lastY + (t - T.lastY) / 2;
                    h = T.parent.localToLocal(d, u, M);
                    M.graphics.qt(h.x, h.y, o.x, o.y)
                }
                var g = T.parent.localToLocal(T.lastX, T.lastY, M);
                if (0 < b && "line" != z) {
                    d = T.lastX + (e - T.lastX) / 2,
                    u = T.lastY + (t - T.lastY) / 2,
                    h = T.parent.localToLocal(d, u, M);
                    M.graphics.s(zik(y)).ss(zik(b)).mt(g.x, g.y).qt(h.x, h.y, o.x, o.y),
                    "splatter" == z && M.graphics.es()
                }
                "splatter" == z ? M.graphics.f(zik(m)) : "kitetail" == z || M.graphics.s(zik(m)).ss(n, w),
                "grass" != z && "hair" != z && "city" != z && "splatter" != z && M.graphics.mt(g.x, g.y).qt(h.x, h.y, o.x, o.y),
                T.lastX = e,
                T.lastY = t
            }),
            T.stage.on("stagemouseup", function() {
                !1
            })
        }),
        T.mouseChildren = !1;
        a = [];
        var O = [];
        this.saveState = function(e, t, o) {
            var n = "Container" == e.type ? "paper" : "line"
              , r = {
                paper: T.paper
            };
            r[n] = e,
            r[n + "Transform"] = {
                x: e.x,
                y: e.y,
                r: e.rotation,
                a: e.alpha,
                rX: e.regX,
                rY: e.regY,
                sX: e.scaleX,
                sY: e.scaleY,
                skX: e.skewX,
                skY: e.skewY,
                v: e.visible
            },
            zot(t) || zot(o) || t == o || (r.startLayer = t,
            r.endLayer = o),
            a.push(r),
            T.dispatchEvent("recordUndo"),
            a.length > T.undoLevels && a.unshift()
        }
        ;
        var Y, L, D = {
            x: 0,
            y: 0,
            r: 0,
            a: 1,
            rX: 0,
            rY: 0,
            sX: 1,
            sY: 1,
            skX: 0,
            skY: 0,
            v: !0
        };
        function X(e, t) {
            for (var o, n = a.length - 1; 0 <= n; n--)
                if (a[n][e] == t && a[n][e + "Transform"]) {
                    o = a[n][e + "Transform"];
                    break
                }
            o || (o = kt.copy(D)),
            t.x = o.x,
            t.y = o.y,
            t.alpha = o.a,
            t.rotation = o.r,
            t.regX = o.rX,
            t.regY = o.rY,
            t.scaleX = o.sX,
            t.scaleY = o.sY,
            t.skewX = o.skX,
            t.skewY = o.skY,
            t.visible = o.v,
            "line" == e && r && (t.regX = (I * i - I) / 2,
            t.regY = (j * i - j) / 2)
        }
        this.undo = function() {
            var e = a.pop();
            if (e) {
                if (O.push(e),
                e.clear) {
                    for (var t = 0; t < e.clear.length; t++)
                        e.paper.addChild(e.clear[t]);
                    e.paper.addChild(M)
                } else
                    e.line && e.lineTransform ? (zot(e.startLayer) || (M.top(),
                    e.paper.setChildIndex(e.line, P)),
                    X("line", e.line)) : e.line ? e.line.removeFrom() : e.paperTransform && X("paper", e.paper);
                T.lastPaper = T.paper,
                e.paper != T.paper && (T.paper = e.paper,
                T.dispatchEvent("paperChange")),
                T.dispatchEvent("change"),
                !OPTIMIZE && T.stage && T.stage.update()
            }
        }
        ,
        this.redo = function() {
            var e = O.pop();
            if (e) {
                if (a.push(e),
                e.clear)
                    e.paper.removeAllChildren(),
                    e.paper.addChild(M);
                else if (e.line && e.lineTransform) {
                    zot(e.endLayer) || (M.top(),
                    e.paper.setChildIndex(e.line, E));
                    var t = e.lineTransform
                      , o = e.line
                } else if (e.line)
                    e.line.addTo(e.paper);
                else if (e.paperTransform)
                    t = e.paperTransform,
                    o = e.paper;
                o && (o.x = t.x,
                o.y = t.y,
                o.alpha = t.a,
                o.rotation = t.r,
                o.regX = t.rX,
                o.regY = t.rY,
                o.scaleX = t.sX,
                o.scaleY = t.sY,
                o.skewX = t.skX,
                o.skewY = t.skY,
                o.visible = t.v),
                T.lastPaper = T.paper,
                e.paper != T.paper && (T.paper = e.paper,
                T.dispatchEvent("paperChange")),
                T.dispatchEvent("change"),
                !OPTIMIZE && T.stage && T.stage.update()
            }
        }
        ,
        T.ctrlKey = !1,
        T.shiftKey = !1,
        T.ctrlKeyCheck = !1,
        T.zimkeydownEvent = window.addEventListener("keydown", function(e) {
            T.ctrlKey = e.ctrlKey,
            T.shiftKey = e.shiftKey,
            17 == e.keyCode && l && !T.ctrlKeyCheck && (T.ctrlKeyCheck = !0,
            x.noDrag(),
            x.drag({
                onTop: s,
                all: !0
            })),
            T.undoLevels <= 0 || T.undoKeys && (e.ctrlKey && (e.shiftKey && 90 == e.keyCode || 89 == e.keyCode) ? T.redo() : e.ctrlKey && 90 == e.keyCode && T.undo())
        }),
        T.zimkeyupEvent = window.addEventListener("keyup", function(e) {
            17 == e.keyCode && l && T.ctrlKeyCheck && (T.ctrlKeyCheck = !1,
            x.noDrag(),
            x.drag({
                onTop: s
            })),
            e.ctrlKey || (T.ctrlKey = !1),
            e.shiftKey || (T.shiftKey = !1)
        }),
        Object.defineProperty(this, "paper", {
            get: function() {
                return x
            },
            set: function(e) {
                "Container" == e.type && (x = e,
                M.addTo(x, 0, !1),
                x.shape = M,
                T.dampX.immediate(T.x),
                T.dampY.immediate(T.y),
                T.lastX = T.finishX = T.x,
                T.lastY = T.finishY = T.y,
                "barbwire" == z && M.graphics.s(zik(m)).ss(zik(f) * T.sizeScale * T.sizeFactor, w),
                M.graphics.mt(T.x, T.y),
                x.parent || x.addTo(T.parent, T.parent.getChildIndex(T)),
                zot(x.paperNum) && (x.paperNum = ++T.paperNum,
                c && x.on("mousedown", function(e) {
                    T.lastSelected = e.target,
                    T.nibEvent && T.stage.off("stagemousemove", T.nibEvent);
                    var t = e.target.paper;
                    t && (t != T.paper && (T.paper = t,
                    T.dispatchEvent("paperChange")),
                    T.shiftKey && (T.ctrlKey ? T.clear() : (e.target.visible = !1,
                    0 < T.undoLevels && T.saveState(e.target),
                    T.dispatchEvent("change"))))
                }),
                d && x.on("dblclick", function(e) {
                    e.target.visible = !1,
                    0 < T.undoLevels && T.saveState(e.target)
                }),
                l && (x.on("mousedown", function(e) {
                    !0,
                    T.shiftKey && c || (B = e.stageX,
                    S = e.stageY,
                    M.top(),
                    P = x.getChildIndex(e.target))
                }),
                x.drag({
                    onTop: s
                }),
                x.on("pressup", function(e) {
                    c && T.shiftKey || 0 != e.target.visible && (T.undoLevels <= 0 || (Math.abs(e.stageX - B) < 1 && Math.abs(e.stageY - S) < 1 ? s && (M.top(),
                    E = x.getChildIndex(e.target),
                    P != E && T.saveState(e.target, P, E)) : (T.ctrlKey ? (T.saveState(x),
                    T.dispatchEvent("paperChange")) : (M.top(),
                    E = x.getChildIndex(e.target),
                    T.saveState(e.target, P, E)),
                    T.dispatchEvent("change"),
                    M.top())))
                }))))
            }
        }),
        Object.defineProperty(this, "write", {
            get: function() {
                return A
            },
            set: function(e) {
                A && !1 === e && (T.finishX = T.x,
                T.finishY = T.y),
                !A && e && (M.graphics.es(),
                M.graphics.ef(),
                T.dampX.immediate(T.x),
                T.dampY.immediate(T.y),
                T.lastX = T.x,
                T.lastY = T.y),
                A = e
            }
        }),
        Object.defineProperty(this, "size", {
            get: function() {
                return f
            },
            set: function(e) {
                M.graphics.es(),
                M.graphics.ef(),
                f = e,
                "splatter" != z && M.graphics.ss(zik(f) * T.sizeScale * T.sizeFactor, w)
            }
        }),
        Object.defineProperty(this, "color", {
            get: function() {
                return m
            },
            set: function(e) {
                m = e,
                M.graphics.es(),
                M.graphics.ef(),
                "splatter" != z && M.graphics.s(zik(m))
            }
        }),
        Object.defineProperty(this, "penType", {
            get: function() {
                return z
            },
            set: function(e) {
                z = e,
                M.graphics.ef().es(),
                "splatter" != z ? M.graphics.s(zik(m)) : M.graphics.s(zik(m)).ss(zik(f) * T.sizeScale * T.sizeFactor, w)
            }
        }),
        Object.defineProperty(this, "damp", {
            get: function() {
                return t
            },
            set: function(e) {
                t = e,
                T.dampX.damp = t,
                T.dampY.damp = t
            }
        }),
        Object.defineProperty(this, "spread", {
            get: function() {
                return v
            },
            set: function(e) {
                v = e
            }
        }),
        this.setColorRange = function(e, t) {
            return zot(t) ? (Y = T.color,
            L = e) : (Y = zot(e) ? T.color : e,
            L = t),
            T
        }
        ;
        var R = 0;
        Object.defineProperty(T, "colorRange", {
            get: function() {
                return R
            },
            set: function(e) {
                R = e,
                zot(Y) || zot(L) || (T.color = kt.colorRange(Y, L, e))
            }
        }),
        Object.defineProperty(this, "borderColor", {
            get: function() {
                return y
            },
            set: function(e) {
                y = e
            }
        }),
        Object.defineProperty(this, "borderWidth", {
            get: function() {
                return b
            },
            set: function(e) {
                b = e
            }
        }),
        Tt && (Tt.on("keydown", function() {
            frame.ctrlKey && T.write && (T.lastWrite = T.write,
            T.write = !1)
        }),
        Tt.on("keyup", function() {
            frame.ctrlKey || 0 != T.write || (T.write = T.lastWrite)
        })),
        T.setPen = function(e) {
            T.dampX.immediate(T.x),
            T.dampY.immediate(T.y),
            T.lastX = T.finishX = T.x,
            T.lastY = T.finishY = T.y,
            zot(e) && (e = z),
            zot(k[e]) && (e = "line"),
            T.penType = z = e;
            var t = kt.merge(C, k[e]);
            for (var o in t)
                T[o] != t[o] && (T[o] = t[o]);
            return T
        }
        ,
        T.immediate = function(e, t) {
            return zot(e) || (T.x = e,
            T.dampX.immediate(T.x),
            T.lastX = T.finishX = T.x),
            zot(t) || (T.y = t,
            T.dampY.immediate(T.y),
            T.lastY = T.finishY = T.y),
            T
        }
        ,
        T.clear = function() {
            if (!(x.numChildren <= 1)) {
                for (var e = [], t = 0; t < x.numChildren - 1; t++)
                    e.push(x.getChildAt(t));
                return a.push({
                    paper: x,
                    clear: e
                }),
                a.length > T.undoLevels && a.unshift(),
                T.dispatchEvent("recordUndo"),
                x.removeAllChildren(),
                M.graphics.clear(),
                x.addChild(M),
                T.dispatchEvent("change"),
                T.stage && T.stage.update(),
                T
            }
        }
        ,
        this.delete = function(e) {
            x.getChildAt(e).visible = !1,
            0 < T.undoLevels && T.saveState(x.getChildAt(e))
        }
        ,
        this.deleteSegment = function(e) {
            e.visible = !1,
            0 < T.undoLevels && T.saveState(e)
        }
        ,
        T.dispose = function(e) {
            return zot(e) ? (window.removeEventListener("keydown", T.zimkeydownEvent),
            window.removeEventListener("keyup", T.zimkeyupEvent),
            Ticker.remove(T.Ticker),
            T.removeAllEventListeners(),
            e.removeAllEventListeners(),
            M.graphics.clear(),
            r ? T.bitmap.removeFrom() : M.removeFrom(),
            o.removeFrom(),
            !0) : (e.removeAllEventListeners(),
            e.shape.graphics.clear(),
            void (r ? e.bitmap.removeFrom() : e.shape.removeFrom()))
        }
    }
    ,
    kt.extend(kt.Pen, kt.Container, "clone", "zimContainer", !1),
    kt.SoundWave = function(e, i, a, t, o, n, l, r, s, c) {
        var d;
        if (d = zob(kt.SoundWave, arguments, "num, input, include, smoothing, min, max, operation, baseline, magnify, reduce", this))
            return d;
        z_d("69.95"),
        this.type = "SoundWave",
        zot(e) && (e = 120),
        zot(i) && (i = "mic"),
        zot(a) && (a = .1171875),
        zot(t) && (t = .85),
        zot(o) && (o = "mic" == i ? -80 : -100),
        zot(n) && (n = "mic" == i ? -40 : -10),
        zot(l) && (l = function(e, t) {
            return e * (.5 + 1 * t / Math.pow(kt.SoundWave.bufferLength, .95))
        }
        ),
        zot(r) && (r = "mic" == i ? 0 : 30),
        zot(s) && (s = "mic" == i ? 1 : 10),
        zot(c) && (c = 0),
        kt.SoundWave.bufferLength = 1024,
        _num = e;
        var u = this;
        u.baseline = r,
        u.magnify = s,
        u.reduce = c;
        var h = new (window.AudioContext || window.webkitAudioContext)
          , g = u.analyser = h.createAnalyser();
        if (g.minDecibels = o,
        g.maxDecibels = n,
        g.smoothingTimeConstant = t,
        Object.defineProperty(this, "smoothing", {
            get: function() {
                return g.smoothingTimeConstant
            },
            set: function(e) {
                g.smoothingTimeConstant = e
            }
        }),
        Object.defineProperty(this, "num", {
            get: function() {
                return _num
            },
            set: function(e) {
                _num = e,
                (m = Math.floor(a * kt.SoundWave.bufferLength / _num)) < 1 && zog("ZIM SoundWave: num is too big")
            }
        }),
        "mic" == i)
            return navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia,
            void (navigator.getUserMedia ? navigator.getUserMedia({
                audio: !0
            }, function(e) {
                z(u.source = h.createMediaStreamSource(e))
            }, function(e) {
                zog("ZIM SoundWave: Error occured: " + e)
            }) : zog("ZIM SoundWave: Sorry, mic not supported"));
        if (i.type && "sound" == i.type)
            zog("ZIM SoundWave: pass in the result of a zim.asset('somesound').play() for the input");
        else {
            if (i.playbackResource)
                var p = i.playbackResource
                  , f = h.createMediaElementSource(p);
            else
                p = i,
                f = h.createMediaElementSource(p);
            var m;
            z(f)
        }
        function z(e) {
            if (e.connect(g),
            "mic" != i && g.connect(h.destination),
            g.fftSize = 2 * kt.SoundWave.bufferLength,
            (m = Math.floor(a * kt.SoundWave.bufferLength / _num)) < 1)
                zog("ZIM SoundWave: include param is too small or num param is too big");
            else {
                var t = g.frequencyBinCount
                  , r = new Uint8Array(t);
                u.calculate = function() {
                    g.getByteFrequencyData(r);
                    var e = r.map(l);
                    if (1 == m)
                        return e;
                    for (var t = [], o = 0, n = 0; n <= a * kt.SoundWave.bufferLength; n++)
                        o += e[n],
                        0 != n && n % m == 0 && (t.push(Math.max(0, (o / m - u.baseline) * u.magnify - u.reduce)),
                        o = 0);
                    return "mic" != i && (t[0] *= .75,
                    t[1] *= .85,
                    t[2] *= .9,
                    t[t.length - 2] *= .8,
                    t[t.length - 1] *= .75),
                    t[t.length - 1] *= 1.3,
                    t[t.length - 2] *= 1.2,
                    t[t.length - 3] *= 1.1,
                    t
                }
                ,
                setTimeout(function() {
                    u.dispatchEvent("ready")
                }, 50)
            }
        }
    }
    ,
    kt.extend(kt.SoundWave, createjs.EventDispatcher, null, "cjsEventDispatcher", !1),
    kt.VR = function(o, n, r, i, a, e, l, t, s, c, d, u) {
        var h;
        if (h = zob(kt.VR, arguments, "content, angle, distance, parallax, parallaxAngle, damp, parallaxDamp, startAngle, negativeParallax, boundaryMarkers, swiper, holder", this))
            return h;
        if (z_d("69.98"),
        this.type = "VR",
        Tt) {
            var g = Tt;
            if (zot(u) || !u.getBounds || !u.getBounds().width)
                u = g.stage;
            zot(n) && (n = 0),
            zot(r) && (r = 100),
            zot(e) && (e = .5),
            zot(i) && (i = 0),
            zot(a) && (a = 60),
            zot(l) && (l = .1),
            zot(t) && (t = 0),
            zot(s) && (s = !1),
            zot(c) && (c = !0),
            zot(d) && (d = !0),
            this.angle = n,
            this.currentAngle = t,
            kt.mobile() && (d = !1);
            var p = this
              , f = u.width
              , m = u.height;
            p.zimContainer_constructor();
            var z = p.left = new kt.Container(f / 2,m,null,null,!1)
              , v = new kt.Rectangle(f / 2,m,"rgba(0,0,0,.01)",null,null,null,null,!1);
            z.addChild(v);
            var y = p.right = z.clone();
            p.addChild(z, y),
            y.x = f / 2;
            var b = p.contentLeft = p.content = o
              , w = p.contentRight = o.clone();
            if (0 != t)
                var x = setTimeout(N, 100);
            else
                N();
            var C = []
              , k = [];
            if (G(b, w),
            U(C, "left"),
            U(k, "right"),
            0 != n && 0 != r) {
                var T = new kt.Damp(180 + t,e);
                T.immediate(180 + t);
                var A = !1
                  , B = !1;
                function S(e) {
                    p.currentAngle = e;
                    var t = -p.currentAngle * r / n;
                    if (p.contentLeft.x = t,
                    p.contentRight.x = t,
                    Math.round(p.currentAngle) <= -n / 2 && !A)
                        (o = new createjs.Event("boundaryout")).boundary = "left",
                        A = !0,
                        p.dispatchEvent(o);
                    else if (Math.round(p.currentAngle) >= n / 2 && !B) {
                        (o = new createjs.Event("boundaryout")).boundary = "right",
                        B = !0,
                        p.dispatchEvent(o)
                    } else if (Math.round(p.currentAngle) > -n / 2 && Math.round(p.currentAngle) < n / 2) {
                        var o = new createjs.Event("boundaryin");
                        A ? (o.boundary = "left",
                        p.dispatchEvent(o),
                        A = !1) : B && (o.boundary = "right",
                        p.dispatchEvent(o),
                        B = !1)
                    }
                }
                function P(e) {
                    var t = e.parent.localToLocal(e.vrStartX, 0, u)
                      , o = e.vrParallaxDamp.convert("left" == e.vrChannel ? p.contentLeft.x + t.x - f / 4 : p.contentRight.x + t.x - f / 2 - f / 4);
                    e.depth <= 0 && !s && (o = 0),
                    e.vrParallaxDistance = Math.max(-r / n * a / 2, Math.min(r / n * a / 2, o)),
                    e.dep(e.depth)
                }
                g.on("deviceorientation", function(e) {
                    S(T.convert((180 < e.rotation.z ? -180 : 180) + e.rotation.z + t) - 180)
                }),
                kt.Ticker.always()
            }
            if (0 != i && 0 != r) {
                var E = new ProportionDamp(180 - a / 2,180 + a / 2,-a / 2,a / 2,l);
                if (E.immediate(180),
                0 == n)
                    function M(e, t) {
                        e.vrParallaxDistance = e.depth <= 0 && !s ? 0 : t,
                        e.dep(e.depth)
                    }
                function I(t) {
                    0 != n && 0 != r ? (loop(C, P),
                    loop(k, P)) : (loop(C, function(e) {
                        M(e, t)
                    }),
                    loop(k, function(e) {
                        M(e, t)
                    }))
                }
                g.on("deviceorientation", function(e) {
                    var t = 0;
                    0 == n && 0 != i && 0 != r && (t = E.convert((180 < e.rotation.z ? -180 : 180) + e.rotation.z)),
                    I(t)
                }),
                kt.Ticker.always()
            }
            !d || 0 == r || 0 == n && 0 == i || p.added(function() {
                var e = {
                    swipeAngle: 0
                };
                p.swiper = new kt.Swiper({
                    swipeOn: p,
                    target: e,
                    property: "swipeAngle",
                    sensitivity: .2,
                    damp: .05,
                    factor: -1,
                    min: -330,
                    max: 330
                });
                Ticker.add(function() {
                    0 != n && 0 != r && S(e.swipeAngle),
                    0 != i && 0 != r && I(E.convert(e.swipeAngle + 180))
                })
            });
            var j = localStorage && localStorage.zimEyeAdjust ? Number(localStorage.zimEyeAdjust) : 0
              , O = j
              , Y = !1;
            b.startRegX = b.regX,
            w.startRegX = w.regX;
            var L = this.adjuster = new kt.Container(800,300,null,null,!1)
              , D = (v = L.backing = new kt.Rectangle(L.width,L.height,lighter,null,null,null,null,!1).center(L).alp(1).sha("rgba(0,0,0,.2)", 0, 0, 30),
            L.strip = new kt.Rectangle(L.width,L.height / 3,white,null,null,null,null,!1).center(L).alp(1),
            L.label = new kt.Label({
                text: "slide to adjust center of left and right",
                size: 28,
                color: dark,
                align: "center",
                valign: "center"
            }).center(L).pos({
                y: 50,
                reg: !0
            }),
            L.close = new kt.Rectangle(50,50,light,null,null,null,null,!1).addTo(L).mov(L.width - 70, 26))
              , X = new kt.Shape(-40,-40,80,80,null,!1);
            X.graphics.f(dark).p("AmJEVIEUkTIkXkWIB4h5IEWEYIETkTIB4B3IkTESIEQERIh4B4IkRkRIkSEVg"),
            X.center(D).sca(.3),
            D.cursor = "pointer",
            D.on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
                p.hideAdjuster(),
                W.currentValue = (W.max - W.min) / 2 + O,
                p.dispatchEvent("closed")
            });
            var R = new kt.Circle(30,dark,null,null,null,!1).center(L).pos({
                x: L.width / 4,
                reg: !0
            });
            R.shape.alpha = .2,
            new kt.Circle(12,dark).center(R);
            var _ = new kt.Circle(30,dark,null,null,null,!1).center(L).pos({
                x: L.width / 4 * 3,
                reg: !0
            });
            _.shape.alpha = .2,
            new kt.Circle(12,dark,null,null,null,!1).center(_);
            var W = L.slider = new kt.Slider({
                min: 0,
                max: 30,
                step: 1,
                useTicks: !0,
                style: !1
            }).centerReg(L).pos({
                y: L.height - 40,
                reg: !0
            });
            W.currentValue = (W.max - W.min) / 2 + j;
            var H = new kt.Proportion(W.min,W.max,R.x - L.width / 4,R.x + L.width / 4,-1)
              , V = new kt.Proportion(W.min,W.max,_.x - L.width / 4,_.x + L.width / 4);
            W.on("change", function() {
                R.x = H.convert(W.currentValue),
                _.x = V.convert(W.currentValue)
            }),
            new kt.Label("closer",24,null,silver).centerReg(L).pos({
                x: W.x - 220,
                y: W.y,
                reg: !0
            }),
            new kt.Label("farther",24,null,silver).centerReg(L).pos({
                x: W.x + 220,
                y: W.y,
                reg: !0
            }),
            (p.ok = new kt.Button({
                label: "OK",
                width: 90,
                height: 60,
                corner: 0,
                backgroundColor: blue,
                rollBackgroundColor: green,
                shadowColor: -1,
                style: !1
            }).centerReg(L).sca(.8).pos({
                x: L.width - 58,
                y: W.y,
                reg: !0
            })).on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
                localStorage && (localStorage.zimEyeAdjust = W.currentValue - (W.max - W.min) / 2),
                K(),
                p.hideAdjuster(),
                p.dispatchEvent("saved"),
                p.dispatchEvent("closed")
            }),
            (p.zero = new kt.Button({
                label: ">|<",
                width: 90,
                height: 60,
                corner: 0,
                backgroundColor: yellow,
                rollBackgroundColor: green,
                shadowColor: -1,
                style: !1
            }).centerReg(L).sca(.8).pos({
                x: 58,
                y: W.y,
                reg: !0
            })).on((zns ? "mousedown" == kt.ACTIONEVENT : "mousedown" == ACTIONEVENT) ? "mousedown" : "click", function() {
                W.currentValue = (W.max - W.min) / 2,
                R.x = H.convert(W.currentValue),
                _.x = V.convert(W.currentValue)
            });
            var F = new Proportion(0,30,-u.width / 4,u.width / 4);
            K(),
            this.showAdjuster = function() {
                if (Y)
                    return p;
                Y = !0,
                R.x = H.convert(W.currentValue),
                _.x = V.convert(W.currentValue),
                O = W.currentValue - (W.max - W.min) / 2,
                L.scaleTo(u).center(this),
                u.stage.update()
            }
            ,
            this.hideAdjuster = function() {
                if (!Y)
                    return p;
                Y = !1,
                L.removeFrom(this),
                u.stage.update()
            }
            ,
            this.position = function(e, t, o) {
                function n(e) {
                    e.vrStartX = t,
                    e.vrParallaxDamp && e.vrParallaxDamp.immediate(t),
                    e.mov(t, o)
                }
                return n(e),
                n(e.vrMatch),
                e
            }
            ,
            this.register = function(e) {
                if (!e.parent || !e.parent.vrMatch)
                    return zon && zog("ZIM VR() - please only register objects already inside content container"),
                    e;
                var t = []
                  , o = [];
                return G(e, e.clone().addTo(e.parent.vrMatch), t, o),
                U(t, "left"),
                U(o, "right"),
                e
            }
            ,
            0 != n && 0 != r && c && (p.boundaryRight = new kt.Container({
                style: !1
            }),
            new kt.Circle(24,light,null,null,null,!1).addTo(p.boundaryRight).dep(-2),
            new kt.Triangle(16,16,16,yellow,grey,null,null,-3,null,!1).rot(-90).center(p.boundaryRight).dep(-6),
            p.boundaryRight.center(o).mov(r / 2 + 24),
            p.boundaryLeft = new kt.Container({
                style: !1
            }),
            new kt.Circle(24,light,null,null,null,!1).addTo(p.boundaryLeft).dep(-2),
            new kt.Triangle(16,16,16,yellow,grey,null,null,-3,null,!1).rot(90).center(p.boundaryLeft).dep(-6),
            p.boundaryLeft.center(o).mov(-r / 2 - 24),
            p.register(p.boundaryRight),
            p.register(p.boundaryLeft)),
            this.remove = function(e) {
                return loop(arguments, function(e, t) {
                    o.contains(t) && (!function t(e) {
                        var o = C.indexOf(e);
                        0 <= C.indexOf(e) && (C.splice(o, 1),
                        k.splice(o, 1)),
                        loop(e, function(e) {
                            t(e)
                        })
                    }(t),
                    t.parent.removeChild(t),
                    t.vrMatch.parent.removeChild(t.vrMatch))
                }),
                p
            }
            ,
            this.resize = function() {
                f = u.width,
                m = u.height,
                z.getChildAt(0).widthOnly = y.getChildAt(0).widthOnly = f / 2,
                z.getChildAt(0).heightOnly = y.getChildAt(0).heightOnly = m,
                y.x = f / 2,
                z.setBounds(0, 0, f / 2, m),
                y.setBounds(0, 0, f / 2, m),
                0 != t ? (clearTimeout(x),
                x = setTimeout(N, 100)) : N(),
                L.scaleTo(u).center(this, null, !1)
            }
        } else
            zon && zog("zim.VR() - please use ZIM Frame");
        function N() {
            b.addTo(z, null, !1).setMask(z.getChildAt(0)).pos({
                y: (u.height - b.height) / 2,
                reg: !0
            }),
            w.addTo(y, null, !1).setMask(y.getChildAt(0)).pos({
                y: (u.height - b.height) / 2,
                reg: !0
            })
        }
        function G(e, o, n, r) {
            ((e.vrMatch = o).vrMatch = e).cacheCanvas && o.cache(),
            e.dep && !zot(e.depth) && (C.push(e),
            k.push(o),
            zot(n) || n.push(e),
            zot(r) || r.push(o),
            o.dep(e.depth)),
            loop(e, function(e, t) {
                G(e, o.getChildAt(t), n, r)
            })
        }
        function U(e, t) {
            loop(e, function(e) {
                e.vrChannel = t,
                e.vrStartX = e.x,
                0 != n && 0 != r && (e.vrAngle = n,
                e.vrDistance = r),
                0 != i && 0 != r && (e.vrParallax = i / 100,
                (e.vrParallaxDistance = 0) != n && (e.vrParallaxDamp = new kt.Damp(0,l))),
                e.dep(e.depth)
            })
        }
        function K() {
            var e = F.convert(W.currentValue);
            b.regX = b.startRegX + e,
            w.regX = w.startRegX - e
        }
    }
    ,
    kt.extend(kt.VR, kt.Container, "clone", "zimContainer", !1),
    zon && zog("ZIM FRAME"),
    kt.Frame = function(a, t, o, n, r, i, l, s, e, c, d, u, h, g, p, f, m, z, v, y, b, w, x, C) {
        var k;
        if (k = zob(kt.Frame, arguments, "scaling, width, height, color, outerColor, assets, path, progress, rollover, touch, scrollTop, align, valign, canvasID, rollPerSecond, delay, canvasCheck, gpu, gpuObj, nextFrame, nextStage, allowDefault, loadFailObj, sensors", this))
            return k;
        z_d("83"),
        this.cjsEventDispatcher_constructor(),
        this.type = "Frame";
        var X = this;
        if (void 0 === Tt && (Tt = this),
        zot(m) && (m = !0),
        !!window.HTMLCanvasElement || !m) {
            var T = kt.mobile();
            zot(a) && (a = "full"),
            zot(e) && (e = !T),
            zot(c) && (c = !0),
            zot(d) && (d = !0),
            zot(u) && (u = "center"),
            zot(h) && (h = "center");
            var A = "";
            zot(g) && (Tt != this ? (A = kt.makeID(5),
            g = "myCanvas" + A) : g = "myCanvas"),
            zot(p) && (p = 20),
            zot(f) && (f = 0),
            zot(z) && (z = !1),
            zot(w) && (w = !1),
            zot(x) && (x = "circles"),
            this.loadFailObj = x,
            zot(C) && (C = !1);
            var R, B = !1, S = ["fit", "outside", "full"];
            this.scale = 1,
            this.x = 0,
            this.y = 0;
            var P, E, M, I, j, O = t, Y = o, L = !1, D = !1;
            "interactive" === document.readyState || "complete" === document.readyState ? setTimeout(function() {
                K()
            }, 200) : document.addEventListener("DOMContentLoaded", K);
            var _, W = !1, H = "full" == a && "undefined" != typeof InstallTrigger;
            window.addEventListener("resize", U),
            this.loadAssets = function(e, l, t, o, n, r, i, a, s, c) {
                if (!zot(e)) {
                    if (zot(e.src)) {
                        var d;
                        if (d = zob(X.loadAssets, arguments, "assets, path, progress, xhr, time, loadTimeout, outputAudioSprite, crossOrigin, fileType, queueOnly"))
                            return d
                    }
                    if (!zot(t) && "ProgressBar" == t.type && zot(o) && (o = !0),
                    Array.isArray(e) || (e = [e]),
                    0 != e.length) {
                        zot(n) && (n = 0),
                        zot(r) && (r = 8e3),
                        zot(i) && (i = !1),
                        zot(a) && (a = "anonymous"),
                        zot(c) && (c = !1);
                        var u, h, g, p = !1, f = [], m = /\.([^.]+)$/i, z = [], v = [], y = 0, b = !0;
                        for (E = 0; E < e.length; E++) {
                            if ((u = e[E]).constructor == {}.constructor)
                                if (u.audioSprite) {
                                    Y(u = (C = kt.copy(u)).src);
                                    var w, x = [];
                                    for (g = 0; g < C.audioSprite.length; g++)
                                        w = C.audioSprite[g],
                                        x.push({
                                            id: w[0],
                                            startTime: Math.round(1e3 * w[1]),
                                            duration: Math.round(1e3 * (w[2] - w[1]))
                                        });
                                    delete C.audioSprite,
                                    C.data = {
                                        audioSprite: x
                                    },
                                    i && zog(JSON.stringify(C)),
                                    f.push(C)
                                } else if (u.data && u.data.audioSprite) {
                                    var C;
                                    Y(u = (C = kt.copy(u)).src),
                                    f.push(C)
                                } else if (u.id) {
                                    X.assetIDs[u.id] = u.src,
                                    Y(u = u.src);
                                    var k = {
                                        src: u,
                                        loadTimeout: r
                                    };
                                    zot(s) || (k.type = s),
                                    f.push(k)
                                } else
                                    u.src.match(/fonts\.googleapis\.com/) ? v.push(u) : z.push(u);
                            else {
                                Y(u);
                                k = {
                                    src: u,
                                    loadTimeout: r
                                };
                                zot(s) || (k.type = s),
                                f.push(k)
                            }
                            if (p && b) {
                                var T = document.createElement("audio");
                                T.setAttribute("src", (zot(l) ? "" : l) + u),
                                document.body.appendChild(T),
                                b = !1
                            }
                        }
                        X.loadAssetsCount++,
                        X.isLoading = !0;
                        var A = new kt.Queue;
                        if (A.isLoading = !0,
                        A.loadAssetsCount = 0,
                        !zot(t) && t.show && (t.zimActiveLoader = A,
                        t.show()),
                        0 < z.length) {
                            for (var B, S, P = [], E = 0; E < z.length; E++)
                                B = {
                                    src: "url(" + ((S = z[E]).src.match(/^http/i) ? "" : l || "") + S.src + ")" + (S.type ? " format('" + S.type + "')" : ""),
                                    family: S.font
                                },
                                S.weight && (B.weight = S.weight),
                                S.style && (B.style = S.style),
                                P.push(B);
                            (M = new createjs.FontLoader({
                                src: P
                            },!0)).on("complete", L),
                            M.on("error", L),
                            M.load(),
                            A.loadAssetsCount++
                        }
                        if (0 < v.length) {
                            var M;
                            for (E = 0; E < v.length; E++)
                                B = {
                                    src: (S = v[E]).src,
                                    type: "fontcss"
                                },
                                A.loadAssetsCount++,
                                (M = new createjs.FontLoader(B,!0)).on("complete", L),
                                M.on("error", L),
                                M.load()
                        }
                        var I = Date.now()
                          , j = new createjs.Event("complete");
                        if (0 < y) {
                            A.loadAssetsCount++;
                            var O = A.preload = X.preload = new createjs.LoadQueue(o,l,a);
                            p && O.installPlugin(createjs.Sound),
                            O.on("progress", function(e) {
                                A.dispatchEvent(e),
                                c || X.dispatchEvent(e)
                            }),
                            O.on("error", function(e) {
                                A.dispatchEvent(e),
                                c || X.dispatchEvent(e)
                            }),
                            O.on("fileload", function(e) {
                                var t, o = e.item, n = e.item.type;
                                o.id.match(m);
                                if (n && "sound" == n) {
                                    var r = [];
                                    if (o.data && o.data.audioSprite)
                                        for (var i = 0; i < o.data.audioSprite.length; i++)
                                            r.push(o.data.audioSprite[i].id);
                                    else
                                        r.push(o.id);
                                    for (i = 0; i < r.length; i++)
                                        !function() {
                                            var o = r[i];
                                            t = X.assets[r[i]] = {
                                                type: "sound",
                                                path: l,
                                                id: o,
                                                play: function(e) {
                                                    e && !0 === e.loop && (e.loop = -1),
                                                    e && e.loopCount && (e.loop = e.loopCount);
                                                    var t = createjs.Sound.play(o, e);
                                                    return t.getStage = function() {
                                                        return R
                                                    }
                                                    ,
                                                    t
                                                }
                                            }
                                        }()
                                } else
                                    t = X.assets[o.id] = "image" == n ? new kt.Bitmap(e.result,e.result.width,e.result.height,o.id) : e.result;
                                var a = new createjs.Event("assetload");
                                a.item = o,
                                a.asset = t,
                                A.dispatchEvent(e),
                                c || X.dispatchEvent(a)
                            }),
                            X.preloadEvent = O.on("complete", function(e) {
                                j = e,
                                A.loadAssetsCount--,
                                0 == A.loadAssetsCount && D()
                            });
                            try {
                                O.loadManifest(f)
                            } catch (e) {}
                        }
                        return A
                    }
                }
                function Y(e) {
                    y++,
                    (h = e.match(m)) && 0 <= createjs.Sound.SUPPORTED_EXTENSIONS.indexOf(h[1]) && (p = !0)
                }
                function L() {
                    A.loadAssetsCount--,
                    0 == A.loadAssetsCount && D()
                }
                function D() {
                    var e = Date.now();
                    n = Math.max(0, n - (e - I)),
                    setTimeout(function() {
                        X.loadAssetsCount--,
                        X.loadAssetsCount <= 0 && (X.isLoading = !1),
                        A.isLoading = !1,
                        A.dispatchEvent(j),
                        c || X.dispatchEvent(j)
                    }, n)
                }
            }
            ,
            this.asset = function(e) {
                if (!zot(e)) {
                    var t = X.assetIDs[e];
                    if (t && (e = t),
                    X.assets[e])
                        return X.assets[e];
                    if ("circles" == X.loadFailObj)
                        var o = frame.makeCircles(14);
                    else
                        o = X.loadFailObj;
                    return o && (o.type = "EmptyAsset",
                    o.id = e,
                    o.play = function() {
                        if (zon)
                            return zog("zim.Frame - asset(" + e + ") not found"),
                            {}
                    }
                    ),
                    o
                }
            }
            ,
            Object.defineProperty(X, "stage", {
                get: function() {
                    return R
                },
                set: function(e) {
                    zog("zim.Frame(): stage is read only - see remakeCanvas(), perhaps")
                }
            }),
            Object.defineProperty(X, "width", {
                get: function() {
                    return O
                },
                set: function(e) {
                    zog("zim.Frame(): width is read only - see remakeCanvas(), perhaps")
                }
            }),
            Object.defineProperty(X, "height", {
                get: function() {
                    return Y
                },
                set: function(e) {
                    zog("zim.Frame(): height is read only - see remakeCanvas(), perhaps")
                }
            }),
            Object.defineProperty(this, "color", {
                get: function() {
                    return n
                },
                set: function(e) {
                    zot(n = e) ? zid(g).style.backgroundColor = "default" : !zot(zid(g).style.backgroundColor = n) && z && R.setClearColor(kt.convertColor(n))
                }
            }),
            Object.defineProperty(this, "outerColor", {
                get: function() {
                    return _
                },
                set: function(e) {
                    _ = e,
                    zet("body").css({
                        backgroundColor: _
                    })
                }
            });
            var V = w;
            Object.defineProperty(X, "allowDefault", {
                get: function() {
                    return V
                },
                set: function(e) {
                    e ? (R.preventSelection = !1,
                    document.body.style.overflow = "visible",
                    X.zil && (window.removeEventListener("keydown", X.zil[0]),
                    window.removeEventListener("wheel", X.zil[1]),
                    window.removeEventListener("DOMMouseScroll", X.zil[2]),
                    X.zil = null)) : (R.preventSelection = !0,
                    document.body.style.overflow = "hidden",
                    zot(X.zil) && (X.zil = zil())),
                    V = e
                }
            });
            var F = new createjs.Event("keydown");
            if (this.eventRemove = F.remove,
            window.addEventListener("keydown", te),
            window.addEventListener("keyup", oe),
            window.addEventListener("wheel", ne),
            C && window.DeviceMotionEvent && window.addEventListener("devicemotion", re),
            C && window.DeviceOrientationEvent) {
                var N = 0
                  , G = 0;
                window.addEventListener("deviceorientation", ie)
            }
            this.remakeCanvas = function(e, t) {
                "full" != a && (zot(e) && (e = O),
                zot(t) && (t = Y),
                zid(g) && zid(g).parentNode.removeChild(zid(g)),
                O = e,
                Y = t,
                q(),
                Q())
            }
            ,
            this.dispose = function() {
                return window.removeEventListener("resize", U),
                window.removeEventListener("keydown", te),
                window.removeEventListener("keyup", oe),
                window.removeEventListener("wheel", ne),
                window.removeEventListener("devicemotion", re),
                window.removeEventListener("deviceorientation", ie),
                function e(t) {
                    t.removeAllEventListeners();
                    if (t.numChildren)
                        for (var o = t.numChildren - 1; 0 <= o; o--)
                            e(t.getChildAt(o));
                    t.parent && t.parent.removeChild(t)
                }(R),
                zid(g) && zid(g).parentNode.removeChild(zid(g)),
                !(X = R = null)
            }
            ,
            this.orange = "#f58e25",
            this.green = "#acd241",
            this.pink = "#e472c4",
            this.blue = "#50c4b7",
            this.brown = "#d1a170",
            this.yellow = "#ebcb35",
            this.purple = "#993399",
            this.red = "#fb4758",
            this.silver = "#999999",
            this.tin = "#777777",
            this.grey = "#555555",
            this.gray = "#555555",
            this.lighter = "#eeeeee",
            this.moon = "#dddddd",
            this.light = "#cccccc",
            this.dark = "#333333",
            this.darker = "#111111",
            this.black = "#000000",
            this.white = "#ffffff",
            this.clear = "rgba(0,0,0,0)",
            this.faint = "rgba(0,0,0,.01)",
            this.makeCircles = function(e, t) {
                zot(e) && (e = 100);
                var o = [X.orange, X.green, X.pink, X.blue, X.brown, X.dark];
                if (t) {
                    (r = new kt.Container({
                        style: !1
                    })).radius = e;
                    for (var n = 0; n < o.length; n++)
                        r.addChild(new kt.Circle(r.radius / o.length * (o.length - n),o[n],null,null,null,!1))
                } else {
                    var r, i = (r = new kt.Shape({
                        style: !1
                    })).graphics;
                    r.radius = e;
                    for (n = 0; n < o.length; n++)
                        i.f(o[n]).dc(0, 0, r.radius / o.length * (o.length - n));
                    r.setBounds(-r.radius, -r.radius, 2 * r.radius, 2 * r.radius)
                }
                return r
            }
        } else
            setTimeout(function() {
                X.dispatchEvent("failed")
            }, 100);
        function U() {
            H ? W || (W = !0,
            j = kt.Ticker.update,
            kt.Ticker.update = !1,
            setTimeout(function() {
                W = !1,
                R == Tt.stage && (kt.Ticker.update = j)
            }, 40),
            setTimeout(function() {
                J(),
                ee()
            }, 20)) : (J(),
            ee(),
            0 < f && T && setTimeout(function() {
                J(),
                ee()
            }, f))
        }
        function K() {
            if (!D) {
                if (D = !0,
                -1 == S.indexOf(a)) {
                    if (zot(zid(M = a)))
                        return void zog("zim.Frame - scaling: HTML tag with id=" + a + " must exist");
                    I = this.tag = zid(M),
                    a = zot(t) || zot(o) ? "tag" : "inline",
                    0 == g.indexOf("myCanvas") && (g = M + "Canvas")
                }
                var e;
                if (X.canvasID = g,
                zot(t) && (t = 500),
                zot(o) && (o = 500),
                zot(r) || (X.outerColor = r),
                q(),
                Q(),
                T ? (d && setTimeout(function() {
                    window.scrollTo(0, 0)
                }, 50),
                setTimeout(function() {
                    J(),
                    Z()
                }, 100),
                100 < f && setTimeout(function() {
                    J(),
                    Z()
                }, f)) : Z(),
                X.loadAssetsCount = 0,
                X.assets = {},
                X.assetIDs = {},
                zot(i))
                    Z();
                else
                    zot(e = i.constructor != {}.constructor || i.audioSprite || i.id || i.data || i.src ? X.loadAssets({
                        assets: i,
                        path: l,
                        progress: s,
                        queueOnly: !0
                    }) : X.loadAssets(kt.merge(i, {
                        progress: s,
                        queueOnly: !0
                    }))) || !e.on ? (zon && zog("ZIM Frame - load failed"),
                    Z()) : e.on("complete", function() {
                        Z()
                    })
            }
        }
        function Z() {
            B ? (!zot(s) && s.show && s.hide(),
            X.dispatchEvent("ready"),
            L = !0,
            ee()) : B = !0
        }
        function q() {
            var e = X.canvas = document.createElement("canvas");
            e.setAttribute("id", g),
            e.setAttribute("tabindex", 0),
            "full" == a || "tag" == a ? (e.setAttribute("width", kt.windowWidth()),
            e.setAttribute("height", kt.windowHeight())) : (e.setAttribute("width", O),
            e.setAttribute("height", Y)),
            "tag" == a || "inline" == a ? I.appendChild(e) : document.body.appendChild(e),
            zot(n) || (e.style.backgroundColor = n),
            "full" != a && "fit" != a && "outside" != a || (e.style.position = "absolute",
            w || (document.body.style.overflow = "hidden"))
        }
        function Q() {
            J(),
            -1 == S.indexOf(a) || w || (X.zil = zil()),
            R = z ? new kt.StageGL(g,v) : new kt.Stage(g),
            !zot(n) && z && R.setClearColor(kt.convertColor(n)),
            R.setBounds(0, 0, O, Y),
            R.width = O,
            R.height = Y,
            e && R.enableMouseOver(10),
            c && createjs.Touch.enable(R, !1, w),
            w && (R.preventSelection = !1),
            y && (R.nextStage = y.stage),
            b && (R.nextStage = b)
        }
        function J() {
            if (X) {
                var e, t, o = zid(g), n = kt.windowWidth(), r = kt.windowHeight();
                if ((P = X.orientation = r < n ? "horizontal" : "vertical") != E && (E = P,
                X.dispatchEvent("orientation")),
                T && d && setTimeout(function() {
                    window.scrollTo(0, 0)
                }, 100),
                o) {
                    if ("fit" == a)
                        X.scale = O / Y <= n / r ? r / Y : n / O;
                    else if ("outside" == a)
                        X.scale = O / Y <= n / r ? n / O : r / Y;
                    else {
                        if ("full" == a)
                            return o.style.left = o.style.top = "0px",
                            o.width = O = n,
                            o.height = Y = r,
                            R && (R.setBounds(0, 0, O, Y),
                            R.width = O,
                            R.height = Y,
                            z && R.updateViewport(O, Y)),
                            void $();
                        if ("tag" == a) {
                            O = "" == I.style.width ? I.getAttribute("width") || I.offsetWidth : I.style.width,
                            Y = "" == I.style.height ? I.getAttribute("height") || I.offsetHeight : I.style.height,
                            R && (R.setBounds(0, 0, O, Y),
                            R.width = O,
                            R.height = Y,
                            z && R.updateViewport(O, Y)),
                            I.style.overflow = "hidden",
                            o.width = O,
                            o.height = Y,
                            o.style.left = o.style.top = "0px";
                            var i = o.getBoundingClientRect();
                            return X.x = i.x + kt.scrollX(),
                            X.y = i.y + kt.scrollY(),
                            void $()
                        }
                        if ("inline" == a) {
                            R && (R.setBounds(0, 0, O, Y),
                            R.width = O,
                            R.height = Y,
                            z && R.updateViewport(O, Y)),
                            o.style.left = o.style.top = "0px";
                            i = o.getBoundingClientRect();
                            return X.x = i.x + kt.scrollX(),
                            X.y = i.y + kt.scrollY(),
                            void $()
                        }
                    }
                    t = Y * X.scale,
                    e = O * X.scale,
                    o.style.width = e + "px",
                    o.style.height = t + "px",
                    X.x = "left" == u ? 0 : "right" == u ? n - e : (n - e) / 2,
                    X.y = "top" == h ? 0 : "bottom" == h ? r - t : (r - t) / 2,
                    o.style.left = X.x + "px",
                    o.style.top = X.y + "px",
                    $()
                }
            }
        }
        function $() {
            if ("outside" == a) {
                var e = (zum(frame.canvas.style.width) - windowWidth()) / 2;
                "left" == u ? (X.visibleLeft = 0,
                X.visibleRight = windowWidth() / (windowWidth() + 2 * e) * O) : "right" == u ? (X.visibleLeft = 2 * e / (windowWidth() + 2 * e) * O,
                X.visibleRight = O) : (X.visibleLeft = e / (windowWidth() + 2 * e) * O,
                X.visibleRight = (windowWidth() + e) / (windowWidth() + 2 * e) * O);
                var t = (zum(frame.canvas.style.height) - windowHeight()) / 2;
                "top" == h ? (X.visibleTop = 0,
                X.visibleBottom = windowHeight() / (windowHeight() + 2 * t) * Y) : "bottom" == h ? (X.visibleTop = 2 * t / (windowHeight() + 2 * t) * Y,
                X.visibleBottom = Y) : (X.visibleTop = t / (windowHeight() + 2 * t) * Y,
                X.visibleBottom = (windowHeight() + t) / (windowHeight() + 2 * t) * Y)
            } else
                X.visibleLeft = X.visibleTop = 0,
                X.visibleRight = O,
                X.visibleBottom = Y
        }
        function ee() {
            L && X && (X.dispatchEvent("resize"),
            kt.OPTIMIZE || !zns && OPTIMIZE || !R || "full" != a && "tag" != a || R.update())
        }
        function te(e) {
            e.remove = X.eventRemove,
            X.altKey = e.altKey,
            X.ctrlKey = e.ctrlKey,
            X.metaKey = e.metaKey,
            X.shiftKey = e.shiftKey,
            X.dispatchEvent(e)
        }
        function oe(e) {
            X.altKey = e.altKey,
            X.ctrlKey = e.ctrlKey,
            X.metaKey = e.metaKey,
            X.shiftKey = e.shiftKey,
            e.remove = X.eventRemove,
            X.dispatchEvent(e)
        }
        function ne(e) {
            X.dispatchEvent(e)
        }
        function re(e) {
            e.remove = X.eventRemove,
            X.dispatchEvent(e)
        }
        function ie(e) {
            e.remove = X.eventRemove;
            var t = 360 - e.alpha;
            135 < Math.abs(t - N) && Math.abs(t - N) < 225 && (G = 0 == G ? 180 : 0),
            N = t,
            e.rotation = {
                x: e.beta,
                y: e.gamma,
                z: (t + G) % 360
            },
            X.dispatchEvent(e)
        }
    }
    ,
    kt.extend(kt.Frame, createjs.EventDispatcher, null, "cjsEventDispatcher", !1),
    kt.Queue = function() {
        this.cjsEventDispatcher_constructor(),
        this.isLoading = !0
    }
    ,
    kt.extend(kt.Queue, createjs.EventDispatcher, null, "cjsEventDispatcher");
    return kt.distillery = [],
    kt.distill = function() {
        !window.zns && kt && (kt.DISTILL || window.DISTILL) && kt.distillery.push("83.3", "83.35"),
        zog("zim.distill() - go to https://zimjs.com/distill and enter the following:"),
        zog(0 < kt.distillery.length ? kt.distillery.join(" ") : "must set zim.DISTILL = true;")
    }
    ,
    kt.parseAudioSprite = function(e, t) {
        if (z_d("83.25"),
        !(zot(e) || zot(e.resources) || zot(e.spritemap))) {
            var o, n = e.resources[0], r = e.spritemap, i = [], a = {
                src: n,
                data: {}
            };
            for (l in r)
                o = r[l],
                i.push({
                    id: l,
                    startTime: Math.round(1e3 * o.start),
                    duration: Math.round(1e3 * (o.end - o.start))
                });
            return a.data.audioSprite = i,
            t && zog(JSON.stringify(a)),
            a
        }
    }
    ,
    kt.previewAudioSprite = function(e, t, o) {
        if (z_d("83.26"),
        !zot(e)) {
            if (zot(t) && (t = 3),
            zot(o)) {
                if (zot(Tt))
                    return;
                o = Tt,
                stage = o.stage
            }
            var n = e
              , r = []
              , i = [];
            if (n.constructor == {}.constructor) {
                n.resources && (n = kt.parseAudioSprite(n)),
                n.audioSprite ? loop(n.audioSprite, function(e) {
                    r.push(e[0].substr(0, t)),
                    i.push(e[0])
                }) : n.data && n.data.audioSprite && loop(n.data.audioSprite, function(e) {
                    r.push(e.id.substr(0, t)),
                    i.push(e.id)
                });
                var a = new Tabs({
                    tabs: r,
                    width: stageW,
                    currentEnabled: !0
                }).addTo(stage);
                return a.on("change", function() {
                    o.asset(i[a.selectedIndex]).play()
                }),
                a
            }
        }
    }
    ,
    kt.svgToBitmap = function(e, t) {
        if (z_d("83.27"),
        XMLSerializer || !zon) {
            var o = "string" == typeof e ? e : (new XMLSerializer).serializeToString(e);
            o.match(/xmlns/i) || (o = o.replace(/svg /i, "svg  xmlns='http://www.w3.org/2000/svg' "));
            var n = self.URL || self.webkitURL || self
              , r = new Image;
            r.onload = function() {
                var e = new Bitmap(r);
                t(e)
            }
            ,
            r.src = n.createObjectURL(new document.Blob([o],{
                type: "image/svg+xml;charset=utf-8"
            }))
        } else
            zog("ZIM svgToBitmap() - sorry, not supported in Browser")
    }
    ,
    kt
}(zim || {})) || {});
window.zns || zimplify();
