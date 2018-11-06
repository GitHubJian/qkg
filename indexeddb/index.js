;define("disk-system:widget/system/util/fileSystem/fileSystem.js", function(e, r, t) {
    function n() {
        z("shareDir", IDBKeyRange.only([1, 1])).then(function(e) {
            e.length && (p = e.map(function(e) {
                return console.log("[SHARE DIR DEBUG] get share dir path:", e.path),
                new RegExp("^" + e.path + "/?")
            }))
        })
    }
    function i(e, r) {
        if ("[object Array]" === Object.prototype.toString.call(e)) {
            var t = null;
            switch (r) {
            case !0:
                t = function(e) {
                    e.share = 1
                }
                ;
                break;
            case void 0:
                t = function(e) {
                    o(e.path) && (e.share = 1)
                }
                ;
                break;
            default:
                return
            }
            e.forEach(t)
        }
    }
    function o(e) {
        for (var r = 0, t = p.length; t > r; r++)
            if (p[r].test(e))
                return !0;
        return !1
    }
    function a() {
        var e = d.db.transaction(h.fileList, "readonly")
          , r = e.objectStore(h.fileList);
        try {
            r.index("shareDir")
        } catch (t) {
            return !1
        }
        return !0
    }
    var s = e("base:widget/libs/jquerypacket.js")
      , u = e("base:widget/tools/tools.js")
      , c = e("disk-system:widget/data/yunData.js").get()
      , l = e("system-core:context/context.js").instanceForSystem
      , f = e("base:widget/storage/storage.js")
      , d = {
        name: "FileSystem",
        version: 1,
        db: null,
        isAvailable: !1,
        isOpen: !1,
        ajaxApi: "/api/filediff",
        throttleTime: 100,
        syncTime: 3e5,
        fileLimit: 4e4
    }
      , h = {
        fileList: "fileList",
        cursor: "cursor",
        owner: "owner"
    }
      , m = {
        path: ["path", ["parent_path", "isdir", "server_mtime"], {
            unique: !1
        }],
        pathAndFileName: ["pathAndFileName", ["parent_path", "isdir", "server_filename"], {
            unique: !1
        }],
        pathAndSize: ["pathAndSize", ["parent_path", "isdir", "size"], {
            unique: !1
        }],
        category: ["category", ["category", "isdir", "server_mtime"], {
            unique: !1
        }],
        categoryAndFileName: ["categoryAndFileName", ["category", "isdir", "server_filename"], {
            unique: !1
        }],
        categoryAndSize: ["categoryAndSize", ["category", "isdir", "size"], {
            unique: !1
        }],
        shareDir: ["shareDir", ["share", "isdir"], {
            unique: !1
        }]
    }
      , p = []
      , v = function(e, r, t) {
        return new Promise(function(n, i) {
            r ? e[r] = function(e) {
                n(e)
            }
            : e.onsuccess = function(e) {
                n(e)
            }
            ,
            t ? e[t] = function(e) {
                i(e)
            }
            : e.onerror = function(e) {
                i(e)
            }
        }
        )
    }
      , g = function(e, r) {
        var t = indexedDB.open(e, r);
        return t.onupgradeneeded = function(e) {
            var r, t = e.target.result, n = e.target.transaction;
            r = t.objectStoreNames.contains(h.fileList) ? n.objectStore(h.fileList) : t.createObjectStore(h.fileList, {
                keyPath: "path"
            });
            for (var i in m)
                m.hasOwnProperty(i) && !r.indexNames.contains(i) && r.createIndex.apply(r, m[i]);
            t.objectStoreNames.contains(h.cursor) || t.createObjectStore(h.cursor, {
                keyPath: "cursor"
            }),
            t.objectStoreNames.contains(h.owner) || t.createObjectStore(h.owner, {
                keyPath: "uk"
            })
        }
        ,
        v(t)
    }
      , y = function(e) {
        var r = e.lastIndexOf("/");
        return r > 0 ? e.slice(0, r) : "/"
    }
      , b = function(e, r) {
        var t = d.db.transaction(e, "readwrite")
          , n = t.objectStore(e);
        for (var i in r)
            if (r.hasOwnProperty(i)) {
                var o = r[i];
                o.path && (o.parent_path = y(o.path)),
                o.isdelete ? n["delete"](o.path) : n.put(o)
            }
        return v(t, "oncomplete")
    }
      , S = function(e) {
        var r = d.db.transaction(e, "readonly")
          , t = r.objectStore(e)
          , n = t.openCursor();
        return v(n)
    }
      , A = function(e) {
        var r = d.db.transaction(e, "readonly")
          , t = r.objectStore(e)
          , n = t.count();
        return v(n)
    }
      , j = function(e) {
        var r = d.db.transaction(e, "readwrite")
          , t = r.objectStore(e)
          , n = t.clear();
        return v(n)
    }
      , _ = function(e, r) {
        return j(e).then(function() {
            return b(e, r)
        })
    }
      , P = function() {
        return S(h.owner).then(function(e) {
            var r = e.target.result;
            return r && r.value.uk === c.uk ? void 0 : Promise.all([j(h.fileList), j(h.cursor)])
        }).then(function() {
            return _(h.owner, {
                uk: {
                    uk: c.uk
                }
            })
        })
    }
      , w = function(e, r) {
        return new Promise(function(t, n) {
            s.getJSON(e, r, function(e) {
                e && 0 === e.errno ? t(e) : n(e)
            }).error(function(e) {
                n(e)
            })
        }
        )
    }
      , k = !0
      , x = u.throttle(function() {
        d.isAvailable || localStorage.getItem("block_uk_" + c.uk) || A(h.fileList).then(function(e) {
            var r = e.target.result;
            return r > d.fileLimit || a() === !1 ? (localStorage.setItem("block_uk_" + c.uk, 1),
            indexedDB.deleteDatabase("FileSystem"),
            Promise.reject(r)) : Promise.resolve(r)
        }).then(function() {
            return S(h.cursor)
        }).then(function(e) {
            var r = {
                cursor: "null"
            }
              , t = e.target.result;
            if (t)
                r.cursor = t.value.cursor;
            else {
                if (!k)
                    return Promise.reject(!1);
                k = !1
            }
            return l.log.send({
                name: "filediff",
                sendServerLog: !1
            }),
            w(d.ajaxApi, r)
        }).then(function(e) {
            var r = Promise.resolve(!0);
            return e.reset && (r = j(h.fileList)),
            r.then(function() {
                return Promise.resolve(e)
            })
        }).then(function(e) {
            return new Promise(function(r) {
                setTimeout(function() {
                    for (var t in e.entries)
                        if (e.entries.hasOwnProperty(t)) {
                            var n = e.entries[t];
                            1 === n.isdir && 1 === n.share && (n.is_root = 1)
                        }
                    r(e)
                }, 0)
            }
            )
        }).then(function(e) {
            return Promise.all([b(h.fileList, e.entries), _(h.cursor, {
                cursor: {
                    cursor: e.cursor
                }
            })]).then(function() {
                return Promise.resolve(e)
            })
        }).then(function(e) {
            e.has_more ? x() : (d.isAvailable = !0,
            N(),
            n())
        }, function() {})
    }, d.throttleTime, d.throttleTime)
      , D = function() {
        return "object" != typeof indexedDB ? !1 : "function" != typeof Promise ? !1 : "yun.baidu.com" === location.hostname ? !1 : navigator.userAgent.indexOf("Edge") > -1 ? !1 : f.overwrite && !f.indexedDBCall ? !1 : !0
    }
      , L = function() {
        D() && g(d.name, d.version).then(function(e) {
            d.db = e.target.result,
            d.isOpen = !0
        }, function() {
            d.isOpen = !1,
            d.isAvailable = !1
        }).then(function() {
            return P()
        }).then(function() {
            x()
        }, function() {})
    }
      , z = function(e, r) {
        var t = d.db.transaction(h.fileList, "readonly")
          , n = t.objectStore(h.fileList)
          , i = n.index(e)
          , o = i.openCursor(r, "next");
        return new Promise(function(e, r) {
            var t = [];
            o.onsuccess = function(r) {
                var n = r.target.result;
                n ? (t.push(n.value),
                n["continue"]()) : e(t)
            }
            ,
            o.onerror = function(e) {
                r(e)
            }
        }
        )
    }
      , O = function(e, r) {
        var t = d.db.transaction(h.fileList, "readonly")
          , n = t.objectStore(h.fileList)
          , i = n.index(e)
          , o = i.count(IDBKeyRange.bound([r, 1, -1 / 0], [r, 1, String.fromCharCode(65535)]));
        return v(o).then(function(e) {
            return Promise.resolve(e.target.result)
        })
    }
      , C = function(e, r) {
        return e && r ? e[0] === r[0] ? C(e.slice(1), r.slice(1)) : /[a-zA-Z]/.test(e[0]) && /[a-zA-Z]/.test(r[0]) || /\W/.test(e[0]) && /\W/.test(r[0]) ? e[0].localeCompare(r[0]) : indexedDB.cmp(e[0], r[0]) : e.localeCompare(r)
    }
      , I = function(e) {
        var r = function(e) {
            var r = 100
              , t = location.protocol + "//pcs.baidu.com/rest/2.0/pcs/thumbnail?method=generate&app_id=250528"
              , n = {
                path: e,
                quality: r
            };
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    var o = encodeURIComponent(n[i]);
                    t += "&" + i + "=" + o
                }
            return t
        };
        if ("[object Array]" === Object.prototype.toString.call(e))
            for (var t = e.length, n = 0; t > n; n++)
                if (e[n].category && (1 === e[n].category || 3 === e[n].category) && e[n].path) {
                    var i = r(e[n].path);
                    e[n].thumbs = {
                        icon: i + "&size=c60_u60",
                        url1: i + "&size=c140_u90",
                        url2: i + "&size=c360_u270",
                        url3: i + "&size=c850_u580"
                    }
                }
        return e
    }
      , B = {
        "/api/list": function(e, r) {
            var t = m.path[0];
            t = "name" === r.order ? m.pathAndFileName[0] : "size" === r.order ? m.pathAndSize[0] : m.path[0];
            var n = o(r.dir)
              , a = [z(t, IDBKeyRange.bound([r.dir, 1, -1 / 0], [r.dir, 1, String.fromCharCode(65535)]))];
            return r.folder || a.push(z(t, IDBKeyRange.bound([r.dir, 0, -1 / 0], [r.dir, 0, String.fromCharCode(65535)]))),
            Promise.all(a).then(function(e) {
                var o = []
                  , a = [];
                o = e[0],
                e.length > 1 && (a = e[1]),
                "name" === r.order && (o.sort(function(e, r) {
                    return C(e.server_filename, r.server_filename)
                }),
                a.sort(function(e, r) {
                    return C(e.server_filename, r.server_filename)
                })),
                r.desc ? (o.reverse(),
                a.reverse()) : "size" === r.order && o.reverse();
                var s = [0];
                if (r.folder)
                    for (var u = 0; u < o.length; u++) {
                        var c = o[u];
                        s.push(O(t, c.path))
                    }
                return Promise.all(s).then(function(e) {
                    for (var t = 1; t < e.length; t++)
                        o[t - 1].dir_empty = e[t] > 0 ? 0 : 1;
                    var s = o.concat(a);
                    return r.page && r.page > 1 && (s = s.slice((r.page - 1) * r.num + 1)),
                    i(s, n),
                    s = I(s),
                    Promise.resolve({
                        errno: 0,
                        list: s,
                        has_more: !1
                    })
                })
            })
        },
        "/api/categorylist": function(e, r) {
            var t = m.category[0];
            return t = "name" === r.order ? m.categoryAndFileName[0] : "size" === r.order ? m.categoryAndSize[0] : m.category[0],
            z(t, IDBKeyRange.bound([parseInt(r.category, 10), 0, -1 / 0], [parseInt(r.category, 10), 0, String.fromCharCode(65535)])).then(function(e) {
                var t = e;
                return "name" === r.order && t.sort(function(e, r) {
                    return C(e.server_filename, r.server_filename)
                }),
                r.desc && t.reverse(),
                r.page && r.page > 1 && (t = t.slice((r.page - 1) * r.num + 1)),
                i(t),
                t = I(t),
                Promise.resolve({
                    errno: 0,
                    info: t,
                    has_more: !1
                })
            })
        }
    }
      , N = u.throttle(function() {
        x()
    }, d.syncTime, d.syncTime)
      , q = {
        isAvailable: function() {
            return d.isAvailable && d.isOpen
        },
        invalidCache: function() {
            q.isAvailable() && N(),
            d.isAvailable = !1
        },
        hasApi: function(e) {
            return q.isAvailable() && B.hasOwnProperty(e)
        },
        getApi: function(e, r) {
            return q.hasApi(e) ? B[e](e, r) : Promise.reject({})
        }
    };
    L(),
    t.exports = q
});