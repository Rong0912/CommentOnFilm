!function (e) {
    function t(n) {
        if (a[n]) return a[n].exports;
        var r = a[n] = {i: n, l: !1, exports: {}};
        return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }

    var n = window.webpackJsonp;
    window.webpackJsonp = function (a, s, i) {
        for (var o, d, u, l = 0, _ = []; l < a.length; l++) d = a[l], r[d] && _.push(r[d][0]), r[d] = 0;
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
        for (n && n(a, s, i); _.length;) _.shift()();
        if (i) for (l = 0; l < i.length; l++) u = t(t.s = i[l]);
        return u
    };
    var a = {}, r = {common: 0};
    t.m = e, t.c = a, t.d = function (e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: a})
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t.oe = function (e) {
        throw console.error(e), e
    }, t(t.s = 1170)
}
({
    1014: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日Ah点mm分",
                    LLLL: "YYYY年M月D日ddddAh点mm分",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function (e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"d":
                        case"D":
                        case"DDD":
                            return e + "日";
                        case"M":
                            return e + "月";
                        case"w":
                        case"W":
                            return e + "周";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    ss: "%d 秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1016: function (e, t, n) {
        var a, r, s;
        /*!
 * jQuery Placeholder Plugin v2.3.1
 * https://github.com/mathiasbynens/jquery-placeholder
 *
 * Copyright 2011, 2015 Mathias Bynens
 * Released under the MIT license
 */
        !function (i) {
            r = [n(68)], a = i, void 0 !== (s = "function" == typeof a ? a.apply(t, r) : a) && (e.exports = s)
        }
        (function (e) {
            function t(t) {
                var n = {}, a = /^jQuery\d+$/;
                return e.each(t.attributes, function (e, t) {
                    t.specified && !a.test(t.name) && (n[t.name] = t.value)
                }), n
            }

            function n(t, n) {
                var a = this, s = e(this);
                if (a.value === s.attr(o ? "placeholder-x" : "placeholder") && s.hasClass(m.customClass)) if (a.value = "", s.removeClass(m.customClass), s.data("placeholder-password")) {
                    if (s = s.hide().nextAll('input[type="password"]:first').show().attr("id", s.removeAttr("id").data("placeholder-id")), !0 === t) return s[0].value = n, n;
                    s.focus()
                } else a == r() && a.select()
            }

            function a(a) {
                var r, s = this, i = e(this), d = s.id;
                if (!a || "blur" !== a.type || !i.hasClass(m.customClass)) if ("" === s.value) {
                    if ("password" === s.type) {
                        if (!i.data("placeholder-textinput")) {
                            try {
                                r = i.clone().prop({type: "text"})
                            } catch (n) {
                                r = e("<input>").attr(e.extend(t(this), {type: "text"}))
                            }
                            r.removeAttr("name").data({
                                "placeholder-enabled": !0,
                                "placeholder-password": i,
                                "placeholder-id": d
                            }).bind("focus.placeholder", n), i.data({
                                "placeholder-textinput": r,
                                "placeholder-id": d
                            }).before(r)
                        }
                        s.value = "", i = i.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", i.data("placeholder-id")).show()
                    } else {
                        var u = i.data("placeholder-password");
                        u && (u[0].value = "", i.attr("id", i.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                    }
                    i.addClass(m.customClass), i[0].value = i.attr(o ? "placeholder-x" : "placeholder")
                } else i.removeClass(m.customClass)
            }

            function r() {
                try {
                    return document.activeElement
                } catch (e) {
                }
            }

            var s, i, o = !1, d = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
                u = "placeholder" in document.createElement("input") && !d && !o,
                l = "placeholder" in document.createElement("textarea") && !d && !o, _ = e.valHooks, c = e.propHooks,
                m = {};
            u && l ? (i = e.fn.placeholder = function () {
                return this
            }, i.input = !0, i.textarea = !0) : (i = e.fn.placeholder = function (t) {
                var r = {customClass: "placeholder"};
                return m = e.extend({}, r, t), this.filter((u ? "textarea" : ":input") + "[" + (o ? "placeholder-x" : "placeholder") + "]").not("." + m.customClass).not(":radio, :checkbox, [type=hidden]").bind({
                    "focus.placeholder": n,
                    "blur.placeholder": a
                }).data("placeholder-enabled", !0).trigger("blur.placeholder")
            }, i.input = u, i.textarea = l, s = {
                get: function (t) {
                    var n = e(t), a = n.data("placeholder-password");
                    return a ? a[0].value : n.data("placeholder-enabled") && n.hasClass(m.customClass) ? "" : t.value
                }, set: function (t, s) {
                    var i, o, d = e(t);
                    return "" !== s && (i = d.data("placeholder-textinput"), o = d.data("placeholder-password"), i ? (n.call(i[0], !0, s) || (t.value = s), i[0].value = s) : o && (n.call(t, !0, s) || (o[0].value = s), t.value = s)), d.data("placeholder-enabled") ? ("" === s ? (t.value = s, t != r() && a.call(t)) : (d.hasClass(m.customClass) && n.call(t), t.value = s), d) : (t.value = s, d)
                }
            }, u || (_.input = s, c.value = s), l || (_.textarea = s, c.value = s), e(function () {
                e(document).delegate("form", "submit.placeholder", function () {
                    var t = e("." + m.customClass, this).each(function () {
                        n.call(this, !0, "")
                    });
                    setTimeout(function () {
                        t.each(a)
                    }, 10)
                })
            }), e(window).bind("beforeunload.placeholder", function () {
                var t = !0;
                try {
                    "javascript:void(0)" === document.activeElement.toString() && (t = !1)
                } catch (e) {
                }
                t && e("." + m.customClass).each(function () {
                    this.value = ""
                })
            }))
        })
    }, 1029: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function (e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    ss: "%d sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1030: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"}, n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                }, a = function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                }, r = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                }, s = function (e) {
                    return function (t, n, s, i) {
                        var o = a(t), d = r[e][a(t)];
                        return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            return e.defineLocale("ar", {
                months: i,
                monthsShort: i,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function (e) {
                    return "م" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: s("s"),
                    ss: s("s"),
                    m: s("m"),
                    mm: s("m"),
                    h: s("h"),
                    hh: s("h"),
                    d: s("d"),
                    dd: s("d"),
                    M: s("M"),
                    MM: s("M"),
                    y: s("y"),
                    yy: s("y")
                },
                preparse: function (e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {dow: 6, doy: 12}
            })
        })
    }, 1031: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ar-dz", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {dow: 0, doy: 4}
            })
        })
    }, 1032: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {dow: 0, doy: 12}
            })
        })
    }, 1033: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0"}, n = function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                }, a = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                }, r = function (e) {
                    return function (t, r, s, i) {
                        var o = n(t), d = a[e][n(t)];
                        return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            return e.defineLocale("ar-ly", {
                months: s,
                monthsShort: s,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function (e) {
                    return "م" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: r("s"),
                    ss: r("s"),
                    m: r("m"),
                    mm: r("m"),
                    h: r("h"),
                    hh: r("h"),
                    d: r("d"),
                    dd: r("d"),
                    M: r("M"),
                    MM: r("M"),
                    y: r("y"),
                    yy: r("y")
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {dow: 6, doy: 12}
            })
        })
    }, 1034: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {dow: 6, doy: 12}
            })
        })
    }, 1035: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"}, n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
            return e.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function (e) {
                    return "م" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function (e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1036: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1037: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            };
            return e.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "birneçə saniyə",
                    ss: "%d saniyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function (e) {
                    return /^(gündüz|axşam)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function (e) {
                    if (0 === e) return e + "-ıncı";
                    var n = e % 10, a = e % 100 - n, r = e >= 100 ? 100 : null;
                    return e + (t[n] || t[a] || t[r])
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1038: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var r = {
                    ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                };
                return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(r[a], +e)
            }

            return e.defineLocale("be", {
                months: {
                    format: "студзеня_лютага_сакавік_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                    standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                },
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: {
                    format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                    standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                    isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
                },
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function () {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "дзень",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function (e) {
                    return /^(дня|вечара)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"M":
                        case"d":
                        case"DDD":
                        case"w":
                        case"W":
                            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                        case"D":
                            return e + "-га";
                        default:
                            return e
                    }
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1039: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[В изминалата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[В изминалия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    ss: "%d секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дни",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function (e) {
                    var t = e % 10, n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1040: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("bm", {
                months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
                monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
                weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
                weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
                weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "MMMM [tile] D [san] YYYY",
                    LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                    LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
                },
                calendar: {
                    sameDay: "[Bi lɛrɛ] LT",
                    nextDay: "[Sini lɛrɛ] LT",
                    nextWeek: "dddd [don lɛrɛ] LT",
                    lastDay: "[Kunu lɛrɛ] LT",
                    lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s kɔnɔ",
                    past: "a bɛ %s bɔ",
                    s: "sanga dama dama",
                    ss: "sekondi %d",
                    m: "miniti kelen",
                    mm: "miniti %d",
                    h: "lɛrɛ kelen",
                    hh: "lɛrɛ %d",
                    d: "tile kelen",
                    dd: "tile %d",
                    M: "kalo kelen",
                    MM: "kalo %d",
                    y: "san kelen",
                    yy: "san %d"
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1041: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"}, n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
            return e.defineLocale("bn", {
                months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    ss: "%d সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function (e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1042: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠"}, n = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
            return e.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    ss: "%d སྐར་ཆ།",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function (e) {
                    return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1043: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n) {
                return e + " " + r({mm: "munutenn", MM: "miz", dd: "devezh"}[n], e)
            }

            function n(e) {
                switch (a(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }

            function a(e) {
                return e > 9 ? a(e % 10) : e
            }

            function r(e, t) {
                return 2 === t ? s(e) : e
            }

            function s(e) {
                var t = {m: "v", b: "v", d: "z"};
                return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
            }

            return e.defineLocale("br", {
                months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h[e]mm A",
                    LTS: "h[e]mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY h[e]mm A",
                    LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warc'hoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Dec'h da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s 'zo",
                    s: "un nebeud segondennoù",
                    ss: "%d eilenn",
                    m: "ur vunutenn",
                    mm: t,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: t,
                    M: "ur miz",
                    MM: t,
                    y: "ur bloaz",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function (e) {
                    return e + (1 === e ? "añ" : "vet")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1044: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case"ss":
                        return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                    case"m":
                        return t ? "jedna minuta" : "jedne minute";
                    case"mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case"h":
                        return t ? "jedan sat" : "jednog sata";
                    case"hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case"dd":
                        return a += 1 === e ? "dan" : "dana";
                    case"MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case"yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }

            return e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    }, lastDay: "[jučer u] LT", lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 7}
            })
        })
    }, 1045: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, nextDay: function () {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, nextWeek: function () {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, lastDay: function () {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, lastWeek: function () {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "uns segons",
                    ss: "%d segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function (e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (n = "a"), e + n
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1046: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5 && 1 != ~~(e / 10)
            }

            function n(e, n, a, r) {
                var s = e + " ";
                switch (a) {
                    case"s":
                        return n || r ? "pár sekund" : "pár sekundami";
                    case"ss":
                        return n || r ? s + (t(e) ? "sekundy" : "sekund") : s + "sekundami";
                    case"m":
                        return n ? "minuta" : r ? "minutu" : "minutou";
                    case"mm":
                        return n || r ? s + (t(e) ? "minuty" : "minut") : s + "minutami";
                    case"h":
                        return n ? "hodina" : r ? "hodinu" : "hodinou";
                    case"hh":
                        return n || r ? s + (t(e) ? "hodiny" : "hodin") : s + "hodinami";
                    case"d":
                        return n || r ? "den" : "dnem";
                    case"dd":
                        return n || r ? s + (t(e) ? "dny" : "dní") : s + "dny";
                    case"M":
                        return n || r ? "měsíc" : "měsícem";
                    case"MM":
                        return n || r ? s + (t(e) ? "měsíce" : "měsíců") : s + "měsíci";
                    case"y":
                        return n || r ? "rok" : "rokem";
                    case"yy":
                        return n || r ? s + (t(e) ? "roky" : "let") : s + "lety"
                }
            }

            var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
                s = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
                i = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
            return e.defineLocale("cs", {
                months: a,
                monthsShort: r,
                monthsRegex: i,
                monthsShortRegex: i,
                monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
                monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
                monthsParse: s,
                longMonthsParse: s,
                shortMonthsParse: s,
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    }, lastDay: "[včera v] LT", lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: n,
                    ss: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1047: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    ss: "%d ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {dow: 1, doy: 7}
            })
        })
    }, 1048: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    ss: "%d eiliad",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function (e) {
                    var t = e, n = "",
                        a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]), e + n
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1049: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "på dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    ss: "%d sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1050: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }

            return e.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1051: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }

            return e.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1052: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }

            return e.defineLocale("de-ch", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1053: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
                n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
            return e.defineLocale("dv", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /މކ|މފ/,
                isPM: function (e) {
                    return "މފ" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "މކ" : "މފ"
                },
                calendar: {
                    sameDay: "[މިއަދު] LT",
                    nextDay: "[މާދަމާ] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[އިއްޔެ] LT",
                    lastWeek: "[ފާއިތުވި] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ތެރޭގައި %s",
                    past: "ކުރިން %s",
                    s: "ސިކުންތުކޮޅެއް",
                    ss: "d% ސިކުންތު",
                    m: "މިނިޓެއް",
                    mm: "މިނިޓު %d",
                    h: "ގަޑިއިރެއް",
                    hh: "ގަޑިއިރު %d",
                    d: "ދުވަހެއް",
                    dd: "ދުވަސް %d",
                    M: "މަހެއް",
                    MM: "މަސް %d",
                    y: "އަހަރެއް",
                    yy: "އަހަރު %d"
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "،")
                },
                week: {dow: 7, doy: 12}
            })
        })
    }, 1054: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            return e.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function (e, t) {
                    return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function (e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                },
                isPM: function (e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 6:
                                return "[το προηγούμενο] dddd [{}] LT";
                            default:
                                return "[την προηγούμενη] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function (e, n) {
                    var a = this._calendarEl[e], r = n && n.hours();
                    return t(a) && (a = a.apply(n)), a.replace("{}", r % 12 == 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    ss: "%d δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                dayOfMonthOrdinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1055: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("en-SG", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1056: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1057: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            })
        })
    }, 1058: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1059: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1060: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("en-il", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            })
        })
    }, 1061: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1062: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
                weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
                weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
                weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D[-a de] MMMM, YYYY",
                    LLL: "D[-a de] MMMM, YYYY HH:mm",
                    LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function (e) {
                    return "p" === e.charAt(0).toLowerCase()
                },
                meridiem: function (e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd [je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasinta] dddd [je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "post %s",
                    past: "antaŭ %s",
                    s: "sekundoj",
                    ss: "%d sekundoj",
                    m: "minuto",
                    mm: "%d minutoj",
                    h: "horo",
                    hh: "%d horoj",
                    d: "tago",
                    dd: "%d tagoj",
                    M: "monato",
                    MM: "%d monatoj",
                    y: "jaro",
                    yy: "%d jaroj"
                },
                dayOfMonthOrdinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {dow: 1, doy: 7}
            })
        })
    }, 1063: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            return e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, nextDay: function () {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, nextWeek: function () {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, lastDay: function () {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, lastWeek: function () {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1064: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            return e.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, nextDay: function () {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, nextWeek: function () {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, lastDay: function () {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, lastWeek: function () {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1065: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            return e.defineLocale("es-us", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "MM/DD/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, nextDay: function () {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, nextWeek: function () {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, lastDay: function () {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, lastWeek: function () {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 0, doy: 6}
            })
        })
    }, 1066: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    ss: [e + "sekundi", e + "sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1]
            }

            return e.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: "%d päeva",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1067: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    ss: "%d segundo",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 7}
            })
        })
    }, 1068: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"}, n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
            return e.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function (e) {
                    return /بعد از ظهر/.test(e)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چند ثانیه",
                    ss: "ثانیه d%",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function (e) {
                    return e.replace(/[۰-۹]/g, function (e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                dayOfMonthOrdinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {dow: 6, doy: 12}
            })
        })
    }, 1069: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, a, r) {
                var s = "";
                switch (a) {
                    case"s":
                        return r ? "muutaman sekunnin" : "muutama sekunti";
                    case"ss":
                        return r ? "sekunnin" : "sekuntia";
                    case"m":
                        return r ? "minuutin" : "minuutti";
                    case"mm":
                        s = r ? "minuutin" : "minuuttia";
                        break;
                    case"h":
                        return r ? "tunnin" : "tunti";
                    case"hh":
                        s = r ? "tunnin" : "tuntia";
                        break;
                    case"d":
                        return r ? "päivän" : "päivä";
                    case"dd":
                        s = r ? "päivän" : "päivää";
                        break;
                    case"M":
                        return r ? "kuukauden" : "kuukausi";
                    case"MM":
                        s = r ? "kuukauden" : "kuukautta";
                        break;
                    case"y":
                        return r ? "vuoden" : "vuosi";
                    case"yy":
                        s = r ? "vuoden" : "vuotta"
                }
                return s = n(e, r) + " " + s
            }

            function n(e, t) {
                return e < 10 ? t ? r[e] : a[e] : e
            }

            var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
            return e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1070: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    ss: "%d sekundir",
                    m: "ein minuttur",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaður",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1071: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"D":
                            return e + (1 === e ? "er" : "");
                        default:
                        case"M":
                        case"Q":
                        case"DDD":
                        case"d":
                            return e + (1 === e ? "er" : "e");
                        case"w":
                        case"W":
                            return e + (1 === e ? "re" : "e")
                    }
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1072: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function (e, t) {
                    switch (t) {
                        default:
                        case"M":
                        case"Q":
                        case"D":
                        case"DDD":
                        case"d":
                            return e + (1 === e ? "er" : "e");
                        case"w":
                        case"W":
                            return e + (1 === e ? "re" : "e")
                    }
                }
            })
        })
    }, 1073: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function (e, t) {
                    switch (t) {
                        default:
                        case"M":
                        case"Q":
                        case"D":
                        case"DDD":
                        case"d":
                            return e + (1 === e ? "er" : "e");
                        case"w":
                        case"W":
                            return e + (1 === e ? "re" : "e")
                    }
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1074: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            return e.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function (e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    ss: "%d sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1075: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Méitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deaireadh Fómhair", "Samhain", "Nollaig"],
                n = ["Eaná", "Feab", "Márt", "Aibr", "Beal", "Méit", "Iúil", "Lúna", "Meán", "Deai", "Samh", "Noll"],
                a = ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Satharn"],
                r = ["Dom", "Lua", "Mái", "Céa", "Déa", "hAo", "Sat"], s = ["Do", "Lu", "Má", "Ce", "Dé", "hA", "Sa"];
            return e.defineLocale("ga", {
                months: t,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: a,
                weekdaysShort: r,
                weekdaysMin: s,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Inniu ag] LT",
                    nextDay: "[Amárach ag] LT",
                    nextWeek: "dddd [ag] LT",
                    lastDay: "[Inné aig] LT",
                    lastWeek: "dddd [seo caite] [ag] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i %s",
                    past: "%s ó shin",
                    s: "cúpla soicind",
                    ss: "%d soicind",
                    m: "nóiméad",
                    mm: "%d nóiméad",
                    h: "uair an chloig",
                    hh: "%d uair an chloig",
                    d: "lá",
                    dd: "%d lá",
                    M: "mí",
                    MM: "%d mí",
                    y: "bliain",
                    yy: "%d bliain"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function (e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1076: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
                n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
                a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], s = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
            return e.defineLocale("gd", {
                months: t,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: a,
                weekdaysShort: r,
                weekdaysMin: s,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-màireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dè aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    ss: "%d diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mìos",
                    MM: "%d mìosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function (e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1077: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    }, nextDay: function () {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    }, nextWeek: function () {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    }, lastDay: function () {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    }, lastWeek: function () {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        return 0 === e.indexOf("un") ? "n" + e : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1078: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    s: ["thodde secondanim", "thodde second"],
                    ss: [e + " secondanim", e + " second"],
                    m: ["eka mintan", "ek minute"],
                    mm: [e + " mintanim", e + " mintam"],
                    h: ["eka voran", "ek vor"],
                    hh: [e + " voranim", e + " voram"],
                    d: ["eka disan", "ek dis"],
                    dd: [e + " disanim", e + " dis"],
                    M: ["eka mhoinean", "ek mhoino"],
                    MM: [e + " mhoineanim", e + " mhoine"],
                    y: ["eka vorsan", "ek voros"],
                    yy: [e + " vorsanim", e + " vorsam"]
                };
                return t ? r[n][0] : r[n][1]
            }

            return e.defineLocale("gom-latn", {
                months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
                weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [vazta]",
                    LTS: "A h:mm:ss [vazta]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [vazta]",
                    LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                    llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                },
                calendar: {
                    sameDay: "[Aiz] LT",
                    nextDay: "[Faleam] LT",
                    nextWeek: "[Ieta to] dddd[,] LT",
                    lastDay: "[Kal] LT",
                    lastWeek: "[Fatlo] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s adim",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"D":
                            return e + "er";
                        default:
                        case"M":
                        case"Q":
                        case"DDD":
                        case"d":
                        case"w":
                        case"W":
                            return e
                    }
                },
                week: {dow: 1, doy: 4},
                meridiemParse: /rati|sokalli|donparam|sanje/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                }
            })
        })
    }, 1079: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦"}, n = {
                "૧": "1",
                "૨": "2",
                "૩": "3",
                "૪": "4",
                "૫": "5",
                "૬": "6",
                "૭": "7",
                "૮": "8",
                "૯": "9",
                "૦": "0"
            };
            return e.defineLocale("gu", {
                months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
                monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
                monthsParseExact: !0,
                weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
                weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
                weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
                longDateFormat: {
                    LT: "A h:mm વાગ્યે",
                    LTS: "A h:mm:ss વાગ્યે",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                    LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
                },
                calendar: {
                    sameDay: "[આજ] LT",
                    nextDay: "[કાલે] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ગઇકાલે] LT",
                    lastWeek: "[પાછલા] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s મા",
                    past: "%s પેહલા",
                    s: "અમુક પળો",
                    ss: "%d સેકંડ",
                    m: "એક મિનિટ",
                    mm: "%d મિનિટ",
                    h: "એક કલાક",
                    hh: "%d કલાક",
                    d: "એક દિવસ",
                    dd: "%d દિવસ",
                    M: "એક મહિનો",
                    MM: "%d મહિનો",
                    y: "એક વર્ષ",
                    yy: "%d વર્ષ"
                },
                preparse: function (e) {
                    return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1080: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    ss: "%d שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function (e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function (e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function (e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function (e) {
                        return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function (e) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            })
        })
    }, 1081: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}, n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
            return e.defineLocale("hi", {
                months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    ss: "%d सेकंड",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function (e) {
                    return e.replace(/[१२३४५६७८९०]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1082: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case"ss":
                        return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                    case"m":
                        return t ? "jedna minuta" : "jedne minute";
                    case"mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case"h":
                        return t ? "jedan sat" : "jednog sata";
                    case"hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case"dd":
                        return a += 1 === e ? "dan" : "dana";
                    case"MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case"yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }

            return e.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    }, lastDay: "[jučer u] LT", lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 7}
            })
        })
    }, 1083: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = e;
                switch (n) {
                    case"s":
                        return a || t ? "néhány másodperc" : "néhány másodperce";
                    case"ss":
                        return r + (a || t) ? " másodperc" : " másodperce";
                    case"m":
                        return "egy" + (a || t ? " perc" : " perce");
                    case"mm":
                        return r + (a || t ? " perc" : " perce");
                    case"h":
                        return "egy" + (a || t ? " óra" : " órája");
                    case"hh":
                        return r + (a || t ? " óra" : " órája");
                    case"d":
                        return "egy" + (a || t ? " nap" : " napja");
                    case"dd":
                        return r + (a || t ? " nap" : " napja");
                    case"M":
                        return "egy" + (a || t ? " hónap" : " hónapja");
                    case"MM":
                        return r + (a || t ? " hónap" : " hónapja");
                    case"y":
                        return "egy" + (a || t ? " év" : " éve");
                    case"yy":
                        return r + (a || t ? " év" : " éve")
                }
                return ""
            }

            function n(e) {
                return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
            }

            var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
            return e.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function (e) {
                    return "u" === e.charAt(1).toLowerCase()
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                        return n.call(this, !0)
                    }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                        return n.call(this, !1)
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1084: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () {
                        return "dddd [օրը ժամը] LT"
                    }, lastWeek: function () {
                        return "[անցած] dddd [օրը ժամը] LT"
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    ss: "%d վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function (e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e)
                },
                meridiem: function (e) {
                    return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                },
                dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"DDD":
                        case"w":
                        case"W":
                        case"DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e
                    }
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1085: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    ss: "%d detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1086: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e) {
                return e % 100 == 11 || e % 10 != 1
            }

            function n(e, n, a, r) {
                var s = e + " ";
                switch (a) {
                    case"s":
                        return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case"ss":
                        return t(e) ? s + (n || r ? "sekúndur" : "sekúndum") : s + "sekúnda";
                    case"m":
                        return n ? "mínúta" : "mínútu";
                    case"mm":
                        return t(e) ? s + (n || r ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
                    case"hh":
                        return t(e) ? s + (n || r ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                    case"d":
                        return n ? "dagur" : r ? "dag" : "degi";
                    case"dd":
                        return t(e) ? n ? s + "dagar" : s + (r ? "daga" : "dögum") : n ? s + "dagur" : s + (r ? "dag" : "degi");
                    case"M":
                        return n ? "mánuður" : r ? "mánuð" : "mánuði";
                    case"MM":
                        return t(e) ? n ? s + "mánuðir" : s + (r ? "mánuði" : "mánuðum") : n ? s + "mánuður" : s + (r ? "mánuð" : "mánuði");
                    case"y":
                        return n || r ? "ár" : "ári";
                    case"yy":
                        return t(e) ? s + (n || r ? "ár" : "árum") : s + (n || r ? "ár" : "ári")
                }
            }

            return e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: n,
                    ss: n,
                    m: n,
                    mm: n,
                    h: "klukkustund",
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1087: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1088: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("it-ch", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1089: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ja", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日 dddd HH:mm",
                    l: "YYYY/MM/DD",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日(ddd) HH:mm"
                },
                meridiemParse: /午前|午後/i,
                isPM: function (e) {
                    return "午後" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: function (e) {
                        return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
                    }, lastDay: "[昨日] LT", lastWeek: function (e) {
                        return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
                    }, sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}日/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"d":
                        case"D":
                        case"DDD":
                            return e + "日";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    ss: "%d秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            })
        })
    }, 1090: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    ss: "%d detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1091: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ka", {
                months: {
                    standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                    format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                },
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                    },
                    past: function (e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                    },
                    s: "რამდენიმე წამი",
                    ss: "%d წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function (e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1092: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            };
            return e.defineLocale("kk", {
                months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    ss: "%d секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function (e) {
                    var n = e % 10, a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1093: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "១", 2: "២", 3: "៣", 4: "៤", 5: "៥", 6: "៦", 7: "៧", 8: "៨", 9: "៩", 0: "០"}, n = {
                "១": "1",
                "២": "2",
                "៣": "3",
                "៤": "4",
                "៥": "5",
                "៦": "6",
                "៧": "7",
                "៨": "8",
                "៩": "9",
                "០": "0"
            };
            return e.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /ព្រឹក|ល្ងាច/,
                isPM: function (e) {
                    return "ល្ងាច" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ព្រឹក" : "ល្ងាច"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    ss: "%d វិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                dayOfMonthOrdinalParse: /ទី\d{1,2}/,
                ordinal: "ទី%d",
                preparse: function (e) {
                    return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1094: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦"}, n = {
                "೧": "1",
                "೨": "2",
                "೩": "3",
                "೪": "4",
                "೫": "5",
                "೬": "6",
                "೭": "7",
                "೮": "8",
                "೯": "9",
                "೦": "0"
            };
            return e.defineLocale("kn", {
                months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
                monthsParseExact: !0,
                weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[ಇಂದು] LT",
                    nextDay: "[ನಾಳೆ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ನಿನ್ನೆ] LT",
                    lastWeek: "[ಕೊನೆಯ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ನಂತರ",
                    past: "%s ಹಿಂದೆ",
                    s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                    ss: "%d ಸೆಕೆಂಡುಗಳು",
                    m: "ಒಂದು ನಿಮಿಷ",
                    mm: "%d ನಿಮಿಷ",
                    h: "ಒಂದು ಗಂಟೆ",
                    hh: "%d ಗಂಟೆ",
                    d: "ಒಂದು ದಿನ",
                    dd: "%d ದಿನ",
                    M: "ಒಂದು ತಿಂಗಳು",
                    MM: "%d ತಿಂಗಳು",
                    y: "ಒಂದು ವರ್ಷ",
                    yy: "%d ವರ್ಷ"
                },
                preparse: function (e) {
                    return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                ordinal: function (e) {
                    return e + "ನೇ"
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1095: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h:mm",
                    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                    l: "YYYY.MM.DD.",
                    ll: "YYYY년 MMMM D일",
                    lll: "YYYY년 MMMM D일 A h:mm",
                    llll: "YYYY년 MMMM D일 dddd A h:mm"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "1분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"d":
                        case"D":
                        case"DDD":
                            return e + "일";
                        case"M":
                            return e + "월";
                        case"w":
                        case"W":
                            return e + "주";
                        default:
                            return e
                    }
                },
                meridiemParse: /오전|오후/,
                isPM: function (e) {
                    return "오후" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "오전" : "오후"
                }
            })
        })
    }, 1096: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"}, n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                },
                a = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
            return e.defineLocale("ku", {
                months: a,
                monthsShort: a,
                weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
                weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /ئێواره‌|به‌یانی/,
                isPM: function (e) {
                    return /ئێواره‌/.test(e)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "به‌یانی" : "ئێواره‌"
                },
                calendar: {
                    sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                    nextDay: "[به‌یانی كاتژمێر] LT",
                    nextWeek: "dddd [كاتژمێر] LT",
                    lastDay: "[دوێنێ كاتژمێر] LT",
                    lastWeek: "dddd [كاتژمێر] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "له‌ %s",
                    past: "%s",
                    s: "چه‌ند چركه‌یه‌ك",
                    ss: "چركه‌ %d",
                    m: "یه‌ك خوله‌ك",
                    mm: "%d خوله‌ك",
                    h: "یه‌ك كاتژمێر",
                    hh: "%d كاتژمێر",
                    d: "یه‌ك ڕۆژ",
                    dd: "%d ڕۆژ",
                    M: "یه‌ك مانگ",
                    MM: "%d مانگ",
                    y: "یه‌ك ساڵ",
                    yy: "%d ساڵ"
                },
                preparse: function (e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {dow: 6, doy: 12}
            })
        })
    }, 1097: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {
                0: "-чү",
                1: "-чи",
                2: "-чи",
                3: "-чү",
                4: "-чү",
                5: "-чи",
                6: "-чы",
                7: "-чи",
                8: "-чи",
                9: "-чу",
                10: "-чу",
                20: "-чы",
                30: "-чу",
                40: "-чы",
                50: "-чү",
                60: "-чы",
                70: "-чи",
                80: "-чи",
                90: "-чу",
                100: "-чү"
            };
            return e.defineLocale("ky", {
                months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгүн саат] LT",
                    nextDay: "[Эртең саат] LT",
                    nextWeek: "dddd [саат] LT",
                    lastDay: "[Кечээ саат] LT",
                    lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ичинде",
                    past: "%s мурун",
                    s: "бирнече секунд",
                    ss: "%d секунд",
                    m: "бир мүнөт",
                    mm: "%d мүнөт",
                    h: "бир саат",
                    hh: "%d саат",
                    d: "бир күн",
                    dd: "%d күн",
                    M: "бир ай",
                    MM: "%d ай",
                    y: "бир жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                ordinal: function (e) {
                    var n = e % 10, a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1098: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? r[n][0] : r[n][1]
            }

            function n(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
            }

            function a(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
            }

            function r(e) {
                if (e = parseInt(e, 10), isNaN(e)) return !1;
                if (e < 0) return !0;
                if (e < 10) return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10, n = e / 10;
                    return r(0 === t ? n : t)
                }
                if (e < 1e4) {
                    for (; e >= 10;) e /= 10;
                    return r(e)
                }
                return e /= 1e3, r(e)
            }

            return e.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: n,
                    past: a,
                    s: "e puer Sekonnen",
                    ss: "%d Sekonnen",
                    m: t,
                    mm: "%d Minutten",
                    h: t,
                    hh: "%d Stonnen",
                    d: t,
                    dd: "%d Deeg",
                    M: t,
                    MM: "%d Méint",
                    y: t,
                    yy: "%d Joer"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1099: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function (e) {
                    return "ຕອນແລງ" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    ss: "%d ວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function (e) {
                    return "ທີ່" + e
                }
            })
        })
    }, 1100: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
            }

            function n(e, t, n, a) {
                return t ? r(n)[0] : a ? r(n)[1] : r(n)[2]
            }

            function a(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }

            function r(e) {
                return i[e].split("_")
            }

            function s(e, t, s, i) {
                var o = e + " ";
                return 1 === e ? o + n(e, t, s[0], i) : t ? o + (a(e) ? r(s)[1] : r(s)[0]) : i ? o + r(s)[1] : o + (a(e) ? r(s)[1] : r(s)[2])
            }

            var i = {
                ss: "sekundė_sekundžių_sekundes",
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            };
            return e.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: t,
                    ss: s,
                    m: n,
                    mm: s,
                    h: n,
                    hh: s,
                    d: n,
                    dd: s,
                    M: n,
                    MM: s,
                    y: n,
                    yy: s
                },
                dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                ordinal: function (e) {
                    return e + "-oji"
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1101: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n) {
                return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
            }

            function n(e, n, a) {
                return e + " " + t(s[a], e, n)
            }

            function a(e, n, a) {
                return t(s[a], e, n)
            }

            function r(e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm"
            }

            var s = {
                ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            };
            return e.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s: r,
                    ss: n,
                    m: a,
                    mm: n,
                    h: a,
                    hh: n,
                    d: a,
                    dd: n,
                    M: a,
                    MM: n,
                    y: a,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1102: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {
                words: {
                    ss: ["sekund", "sekunda", "sekundi"],
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mjesec", "mjeseca", "mjeseci"],
                    yy: ["godina", "godine", "godina"]
                }, correctGrammaticalCase: function (e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                }, translate: function (e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("me", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    }, lastDay: "[juče u] LT", lastWeek: function () {
                        return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    ss: t.translate,
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mjesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 7}
            })
        })
    }, 1103: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("mi", {
                months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [i] HH:mm",
                    LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                },
                calendar: {
                    sameDay: "[i teie mahana, i] LT",
                    nextDay: "[apopo i] LT",
                    nextWeek: "dddd [i] LT",
                    lastDay: "[inanahi i] LT",
                    lastWeek: "dddd [whakamutunga i] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i roto i %s",
                    past: "%s i mua",
                    s: "te hēkona ruarua",
                    ss: "%d hēkona",
                    m: "he meneti",
                    mm: "%d meneti",
                    h: "te haora",
                    hh: "%d haora",
                    d: "he ra",
                    dd: "%d ra",
                    M: "he marama",
                    MM: "%d marama",
                    y: "he tau",
                    yy: "%d tau"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1104: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "после %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    ss: "%d секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    M: "месец",
                    MM: "%d месеци",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function (e) {
                    var t = e % 10, n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1105: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                monthsParseExact: !0,
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    ss: "%d സെക്കൻഡ്",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            })
        })
    }, 1106: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                switch (n) {
                    case"s":
                        return t ? "хэдхэн секунд" : "хэдхэн секундын";
                    case"ss":
                        return e + (t ? " секунд" : " секундын");
                    case"m":
                    case"mm":
                        return e + (t ? " минут" : " минутын");
                    case"h":
                    case"hh":
                        return e + (t ? " цаг" : " цагийн");
                    case"d":
                    case"dd":
                        return e + (t ? " өдөр" : " өдрийн");
                    case"M":
                    case"MM":
                        return e + (t ? " сар" : " сарын");
                    case"y":
                    case"yy":
                        return e + (t ? " жил" : " жилийн");
                    default:
                        return e
                }
            }

            return e.defineLocale("mn", {
                months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
                monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
                monthsParseExact: !0,
                weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
                weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
                weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY оны MMMMын D",
                    LLL: "YYYY оны MMMMын D HH:mm",
                    LLLL: "dddd, YYYY оны MMMMын D HH:mm"
                },
                meridiemParse: /ҮӨ|ҮХ/i,
                isPM: function (e) {
                    return "ҮХ" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ҮӨ" : "ҮХ"
                },
                calendar: {
                    sameDay: "[Өнөөдөр] LT",
                    nextDay: "[Маргааш] LT",
                    nextWeek: "[Ирэх] dddd LT",
                    lastDay: "[Өчигдөр] LT",
                    lastWeek: "[Өнгөрсөн] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s дараа",
                    past: "%s өмнө",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"d":
                        case"D":
                        case"DDD":
                            return e + " өдөр";
                        default:
                            return e
                    }
                }
            })
        })
    }, 1107: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = "";
                if (t) switch (n) {
                    case"s":
                        r = "काही सेकंद";
                        break;
                    case"ss":
                        r = "%d सेकंद";
                        break;
                    case"m":
                        r = "एक मिनिट";
                        break;
                    case"mm":
                        r = "%d मिनिटे";
                        break;
                    case"h":
                        r = "एक तास";
                        break;
                    case"hh":
                        r = "%d तास";
                        break;
                    case"d":
                        r = "एक दिवस";
                        break;
                    case"dd":
                        r = "%d दिवस";
                        break;
                    case"M":
                        r = "एक महिना";
                        break;
                    case"MM":
                        r = "%d महिने";
                        break;
                    case"y":
                        r = "एक वर्ष";
                        break;
                    case"yy":
                        r = "%d वर्षे"
                } else switch (n) {
                    case"s":
                        r = "काही सेकंदां";
                        break;
                    case"ss":
                        r = "%d सेकंदां";
                        break;
                    case"m":
                        r = "एका मिनिटा";
                        break;
                    case"mm":
                        r = "%d मिनिटां";
                        break;
                    case"h":
                        r = "एका तासा";
                        break;
                    case"hh":
                        r = "%d तासां";
                        break;
                    case"d":
                        r = "एका दिवसा";
                        break;
                    case"dd":
                        r = "%d दिवसां";
                        break;
                    case"M":
                        r = "एका महिन्या";
                        break;
                    case"MM":
                        r = "%d महिन्यां";
                        break;
                    case"y":
                        r = "एका वर्षा";
                        break;
                    case"yy":
                        r = "%d वर्षां"
                }
                return r.replace(/%d/i, e)
            }

            var n = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}, a = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
            return e.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm वाजता",
                    LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमध्ये",
                    past: "%sपूर्वी",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                preparse: function (e) {
                    return e.replace(/[१२३४५६७८९०]/g, function (e) {
                        return a[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return n[e]
                    })
                },
                meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1108: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1109: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1110: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("mt", {
                months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
                monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
                weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
                weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
                weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Illum fil-]LT",
                    nextDay: "[Għada fil-]LT",
                    nextWeek: "dddd [fil-]LT",
                    lastDay: "[Il-bieraħ fil-]LT",
                    lastWeek: "dddd [li għadda] [fil-]LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "f’ %s",
                    past: "%s ilu",
                    s: "ftit sekondi",
                    ss: "%d sekondi",
                    m: "minuta",
                    mm: "%d minuti",
                    h: "siegħa",
                    hh: "%d siegħat",
                    d: "ġurnata",
                    dd: "%d ġranet",
                    M: "xahar",
                    MM: "%d xhur",
                    y: "sena",
                    yy: "%d sni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1111: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"}, n = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
            return e.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    ss: "%d စက္ကန့်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function (e) {
                    return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1112: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    ss: "%d sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1113: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}, n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
            return e.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                monthsParseExact: !0,
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aको h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                },
                preparse: function (e) {
                    return e.replace(/[१२३४५६७८९०]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोलि] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडि",
                    s: "केही क्षण",
                    ss: "%d सेकेण्ड",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1114: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function (e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1115: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function (e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1116: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    ss: "%d sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1117: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦"}, n = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            };
            return e.defineLocale("pa-in", {
                months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                longDateFormat: {
                    LT: "A h:mm ਵਜੇ",
                    LTS: "A h:mm:ss ਵਜੇ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                },
                calendar: {
                    sameDay: "[ਅਜ] LT",
                    nextDay: "[ਕਲ] LT",
                    nextWeek: "[ਅਗਲਾ] dddd, LT",
                    lastDay: "[ਕਲ] LT",
                    lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ਵਿੱਚ",
                    past: "%s ਪਿਛਲੇ",
                    s: "ਕੁਝ ਸਕਿੰਟ",
                    ss: "%d ਸਕਿੰਟ",
                    m: "ਇਕ ਮਿੰਟ",
                    mm: "%d ਮਿੰਟ",
                    h: "ਇੱਕ ਘੰਟਾ",
                    hh: "%d ਘੰਟੇ",
                    d: "ਇੱਕ ਦਿਨ",
                    dd: "%d ਦਿਨ",
                    M: "ਇੱਕ ਮਹੀਨਾ",
                    MM: "%d ਮਹੀਨੇ",
                    y: "ਇੱਕ ਸਾਲ",
                    yy: "%d ਸਾਲ"
                },
                preparse: function (e) {
                    return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1118: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
            }

            function n(e, n, a) {
                var r = e + " ";
                switch (a) {
                    case"ss":
                        return r + (t(e) ? "sekundy" : "sekund");
                    case"m":
                        return n ? "minuta" : "minutę";
                    case"mm":
                        return r + (t(e) ? "minuty" : "minut");
                    case"h":
                        return n ? "godzina" : "godzinę";
                    case"hh":
                        return r + (t(e) ? "godziny" : "godzin");
                    case"MM":
                        return r + (t(e) ? "miesiące" : "miesięcy");
                    case"yy":
                        return r + (t(e) ? "lata" : "lat")
                }
            }

            var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
            return e.defineLocale("pl", {
                months: function (e, t) {
                    return e ? "" === t ? "(" + r[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? r[e.month()] : a[e.month()] : a
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[W niedzielę o] LT";
                            case 2:
                                return "[We wtorek o] LT";
                            case 3:
                                return "[W środę o] LT";
                            case 6:
                                return "[W sobotę o] LT";
                            default:
                                return "[W] dddd [o] LT"
                        }
                    }, lastDay: "[Wczoraj o] LT", lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    ss: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: n,
                    y: "rok",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1119: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("pt", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function () {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1120: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("pt-br", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function () {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "poucos segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº"
            })
        })
    }, 1121: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n) {
                var a = {ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani"}, r = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + a[n]
            }

            return e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    ss: t,
                    m: "un minut",
                    mm: t,
                    h: "o oră",
                    hh: t,
                    d: "o zi",
                    dd: t,
                    M: "o lună",
                    MM: t,
                    y: "un an",
                    yy: t
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1122: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var r = {
                    ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                return "m" === a ? n ? "минута" : "минуту" : e + " " + t(r[a], +e)
            }

            var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
            return e.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., H:mm",
                    LLLL: "dddd, D MMMM YYYY г., H:mm"
                },
                calendar: {
                    sameDay: "[Сегодня, в] LT",
                    nextDay: "[Завтра, в] LT",
                    lastDay: "[Вчера, в] LT",
                    nextWeek: function (e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В следующее] dddd, [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В следующий] dddd, [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В следующую] dddd, [в] LT"
                        }
                    },
                    lastWeek: function (e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd, [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd, [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd, [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    ss: n,
                    m: n,
                    mm: n,
                    h: "час",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function (e) {
                    return /^(дня|вечера)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"M":
                        case"d":
                        case"DDD":
                            return e + "-й";
                        case"D":
                            return e + "-го";
                        case"w":
                        case"W":
                            return e + "-я";
                        default:
                            return e
                    }
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1123: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
                n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
            return e.defineLocale("sd", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function (e) {
                    return "شام" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[اڄ] LT",
                    nextDay: "[سڀاڻي] LT",
                    nextWeek: "dddd [اڳين هفتي تي] LT",
                    lastDay: "[ڪالهه] LT",
                    lastWeek: "[گزريل هفتي] dddd [تي] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s پوء",
                    past: "%s اڳ",
                    s: "چند سيڪنڊ",
                    ss: "%d سيڪنڊ",
                    m: "هڪ منٽ",
                    mm: "%d منٽ",
                    h: "هڪ ڪلاڪ",
                    hh: "%d ڪلاڪ",
                    d: "هڪ ڏينهن",
                    dd: "%d ڏينهن",
                    M: "هڪ مهينو",
                    MM: "%d مهينا",
                    y: "هڪ سال",
                    yy: "%d سال"
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "،")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1124: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("se", {
                months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    ss: "%d sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mánnu",
                    MM: "%d mánut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1125: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    ss: "තත්පර %d",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
                ordinal: function (e) {
                    return e + " වැනි"
                },
                meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                isPM: function (e) {
                    return "ප.ව." === e || "පස් වරු" === e
                },
                meridiem: function (e, t, n) {
                    return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
                }
            })
        })
    }, 1126: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5
            }

            function n(e, n, a, r) {
                var s = e + " ";
                switch (a) {
                    case"s":
                        return n || r ? "pár sekúnd" : "pár sekundami";
                    case"ss":
                        return n || r ? s + (t(e) ? "sekundy" : "sekúnd") : s + "sekundami";
                    case"m":
                        return n ? "minúta" : r ? "minútu" : "minútou";
                    case"mm":
                        return n || r ? s + (t(e) ? "minúty" : "minút") : s + "minútami";
                    case"h":
                        return n ? "hodina" : r ? "hodinu" : "hodinou";
                    case"hh":
                        return n || r ? s + (t(e) ? "hodiny" : "hodín") : s + "hodinami";
                    case"d":
                        return n || r ? "deň" : "dňom";
                    case"dd":
                        return n || r ? s + (t(e) ? "dni" : "dní") : s + "dňami";
                    case"M":
                        return n || r ? "mesiac" : "mesiacom";
                    case"MM":
                        return n || r ? s + (t(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                    case"y":
                        return n || r ? "rok" : "rokom";
                    case"yy":
                        return n || r ? s + (t(e) ? "roky" : "rokov") : s + "rokmi"
                }
            }

            var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            return e.defineLocale("sk", {
                months: a,
                monthsShort: r,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    }, lastDay: "[včera o] LT", lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                        }
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: n,
                    ss: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1127: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = e + " ";
                switch (n) {
                    case"s":
                        return t || a ? "nekaj sekund" : "nekaj sekundami";
                    case"ss":
                        return r += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
                    case"m":
                        return t ? "ena minuta" : "eno minuto";
                    case"mm":
                        return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
                    case"h":
                        return t ? "ena ura" : "eno uro";
                    case"hh":
                        return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
                    case"d":
                        return t || a ? "en dan" : "enim dnem";
                    case"dd":
                        return r += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
                    case"M":
                        return t || a ? "en mesec" : "enim mesecem";
                    case"MM":
                        return r += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
                    case"y":
                        return t || a ? "eno leto" : "enim letom";
                    case"yy":
                        return r += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
                }
            }

            return e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    }, lastDay: "[včeraj ob] LT", lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[prejšnjo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejšnjo] [sredo] [ob] LT";
                            case 6:
                                return "[prejšnjo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                        }
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 7}
            })
        })
    }, 1128: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function (e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    ss: "%d sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1129: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {
                words: {
                    ss: ["sekunda", "sekunde", "sekundi"],
                    m: ["jedan minut", "jedne minute"],
                    mm: ["minut", "minute", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mesec", "meseca", "meseci"],
                    yy: ["godina", "godine", "godina"]
                }, correctGrammaticalCase: function (e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                }, translate: function (e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    }, lastDay: "[juče u] LT", lastWeek: function () {
                        return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    ss: t.translate,
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 7}
            })
        })
    }, 1130: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {
                words: {
                    ss: ["секунда", "секунде", "секунди"],
                    m: ["један минут", "једне минуте"],
                    mm: ["минут", "минуте", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    dd: ["дан", "дана", "дана"],
                    MM: ["месец", "месеца", "месеци"],
                    yy: ["година", "године", "година"]
                }, correctGrammaticalCase: function (e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                }, translate: function (e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("sr-cyrl", {
                months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                monthsParseExact: !0,
                weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                        }
                    }, lastDay: "[јуче у] LT", lastWeek: function () {
                        return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                    }, sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    ss: t.translate,
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "дан",
                    dd: t.translate,
                    M: "месец",
                    MM: t.translate,
                    y: "годину",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 7}
            })
        })
    }, 1131: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    ss: "%d mzuzwana",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function (e, t, n) {
                    return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                },
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1132: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    ss: "%d sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1133: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    ss: "sekunde %d",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "masiku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1134: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"}, n = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            };
            return e.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    ss: "%d விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                dayOfMonthOrdinalParse: /\d{1,2}வது/,
                ordinal: function (e) {
                    return e + "வது"
                },
                preparse: function (e) {
                    return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function (e, t, n) {
                    return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
                },
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1135: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                monthsParseExact: !0,
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    ss: "%d సెకన్లు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                dayOfMonthOrdinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {dow: 0, doy: 6}
            })
        })
    }, 1136: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("tet", {
                months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
                weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
                weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ohin iha] LT",
                    nextDay: "[Aban iha] LT",
                    nextWeek: "dddd [iha] LT",
                    lastDay: "[Horiseik iha] LT",
                    lastWeek: "dddd [semana kotuk] [iha] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "iha %s",
                    past: "%s liuba",
                    s: "minutu balun",
                    ss: "minutu %d",
                    m: "minutu ida",
                    mm: "minutu %d",
                    h: "oras ida",
                    hh: "oras %d",
                    d: "loron ida",
                    dd: "loron %d",
                    M: "fulan ida",
                    MM: "fulan %d",
                    y: "tinan ida",
                    yy: "tinan %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1137: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {
                0: "-ум",
                1: "-ум",
                2: "-юм",
                3: "-юм",
                4: "-ум",
                5: "-ум",
                6: "-ум",
                7: "-ум",
                8: "-ум",
                9: "-ум",
                10: "-ум",
                12: "-ум",
                13: "-ум",
                20: "-ум",
                30: "-юм",
                40: "-ум",
                50: "-ум",
                60: "-ум",
                70: "-ум",
                80: "-ум",
                90: "-ум",
                100: "-ум"
            };
            return e.defineLocale("tg", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
                weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
                weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Имрӯз соати] LT",
                    nextDay: "[Пагоҳ соати] LT",
                    lastDay: "[Дирӯз соати] LT",
                    nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                    lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "баъди %s",
                    past: "%s пеш",
                    s: "якчанд сония",
                    m: "як дақиқа",
                    mm: "%d дақиқа",
                    h: "як соат",
                    hh: "%d соат",
                    d: "як рӯз",
                    dd: "%d рӯз",
                    M: "як моҳ",
                    MM: "%d моҳ",
                    y: "як сол",
                    yy: "%d сол"
                },
                meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
                ordinal: function (e) {
                    var n = e % 10, a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1138: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function (e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    ss: "%d วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            })
        })
    }, 1139: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function (e) {
                    return e
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1140: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
            }

            function n(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
            }

            function a(e, t, n, a) {
                var s = r(e);
                switch (n) {
                    case"ss":
                        return s + " lup";
                    case"mm":
                        return s + " tup";
                    case"hh":
                        return s + " rep";
                    case"dd":
                        return s + " jaj";
                    case"MM":
                        return s + " jar";
                    case"yy":
                        return s + " DIS"
                }
            }

            function r(e) {
                var t = Math.floor(e % 1e3 / 100), n = Math.floor(e % 100 / 10), a = e % 10, r = "";
                return t > 0 && (r += s[t] + "vatlh"), n > 0 && (r += ("" !== r ? " " : "") + s[n] + "maH"), a > 0 && (r += ("" !== r ? " " : "") + s[a]), "" === r ? "pagh" : r
            }

            var s = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
            return e.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                monthsParseExact: !0,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: t,
                    past: n,
                    s: "puS lup",
                    ss: a,
                    m: "wa’ tup",
                    mm: a,
                    h: "wa’ rep",
                    hh: a,
                    d: "wa’ jaj",
                    dd: a,
                    M: "wa’ jar",
                    MM: a,
                    y: "wa’ DIS",
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1141: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            };
            return e.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[gelecek] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    ss: "%d saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                ordinal: function (e, n) {
                    switch (n) {
                        case"d":
                        case"D":
                        case"Do":
                        case"DD":
                            return e;
                        default:
                            if (0 === e) return e + "'ıncı";
                            var a = e % 10, r = e % 100 - a, s = e >= 100 ? 100 : null;
                            return e + (t[a] || t[r] || t[s])
                    }
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1142: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    s: ["viensas secunds", "'iensas secunds"],
                    ss: [e + " secunds", e + " secunds"],
                    m: ["'n míut", "'iens míut"],
                    mm: [e + " míuts", e + " míuts"],
                    h: ["'n þora", "'iensa þora"],
                    hh: [e + " þoras", e + " þoras"],
                    d: ["'n ziua", "'iensa ziua"],
                    dd: [e + " ziuas", e + " ziuas"],
                    M: ["'n mes", "'iens mes"],
                    MM: [e + " mesen", e + " mesen"],
                    y: ["'n ar", "'iens ar"],
                    yy: [e + " ars", e + " ars"]
                };
                return a ? r[n][0] : t ? r[n][0] : r[n][1]
            }

            return e.defineLocale("tzl", {
                months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiemParse: /d\'o|d\'a/i,
                isPM: function (e) {
                    return "d'o" === e.toLowerCase()
                },
                meridiem: function (e, t, n) {
                    return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
                },
                calendar: {
                    sameDay: "[oxhi à] LT",
                    nextDay: "[demà à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[ieiri à] LT",
                    lastWeek: "[sür el] dddd [lasteu à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1143: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    ss: "%d ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {dow: 6, doy: 12}
            })
        })
    }, 1144: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    ss: "%d imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {dow: 6, doy: 12}
            })
        })
    }, 1145: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("ug-cn", {
                months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
                weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                    LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                    LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
                },
                meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function (e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "يېرىم كېچە" : a < 900 ? "سەھەر" : a < 1130 ? "چۈشتىن بۇرۇن" : a < 1230 ? "چۈش" : a < 1800 ? "چۈشتىن كېيىن" : "كەچ"
                },
                calendar: {
                    sameDay: "[بۈگۈن سائەت] LT",
                    nextDay: "[ئەتە سائەت] LT",
                    nextWeek: "[كېلەركى] dddd [سائەت] LT",
                    lastDay: "[تۆنۈگۈن] LT",
                    lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s كېيىن",
                    past: "%s بۇرۇن",
                    s: "نەچچە سېكونت",
                    ss: "%d سېكونت",
                    m: "بىر مىنۇت",
                    mm: "%d مىنۇت",
                    h: "بىر سائەت",
                    hh: "%d سائەت",
                    d: "بىر كۈن",
                    dd: "%d كۈن",
                    M: "بىر ئاي",
                    MM: "%d ئاي",
                    y: "بىر يىل",
                    yy: "%d يىل"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"d":
                        case"D":
                        case"DDD":
                            return e + "-كۈنى";
                        case"w":
                        case"W":
                            return e + "-ھەپتە";
                        default:
                            return e
                    }
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "،")
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1146: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var r = {
                    ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                    mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: n ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                };
                return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(r[a], +e)
            }

            function a(e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            }

            function r(e) {
                return function () {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }

            return e.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: a,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: r("[Сьогодні "),
                    nextDay: r("[Завтра "),
                    lastDay: r("[Вчора "),
                    nextWeek: r("[У] dddd ["),
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return r("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return r("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    ss: n,
                    m: n,
                    mm: n,
                    h: "годину",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "місяць",
                    MM: n,
                    y: "рік",
                    yy: n
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function (e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"M":
                        case"d":
                        case"DDD":
                        case"w":
                        case"W":
                            return e + "-й";
                        case"D":
                            return e + "-го";
                        default:
                            return e
                    }
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1147: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
                n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
            return e.defineLocale("ur", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function (e) {
                    return "شام" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[آج بوقت] LT",
                    nextDay: "[کل بوقت] LT",
                    nextWeek: "dddd [بوقت] LT",
                    lastDay: "[گذشتہ روز بوقت] LT",
                    lastWeek: "[گذشتہ] dddd [بوقت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s بعد",
                    past: "%s قبل",
                    s: "چند سیکنڈ",
                    ss: "%d سیکنڈ",
                    m: "ایک منٹ",
                    mm: "%d منٹ",
                    h: "ایک گھنٹہ",
                    hh: "%d گھنٹے",
                    d: "ایک دن",
                    dd: "%d دن",
                    M: "ایک ماہ",
                    MM: "%d ماہ",
                    y: "ایک سال",
                    yy: "%d سال"
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "،")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1148: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    ss: "%d фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1149: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("uz-latn", {
                months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Bugun soat] LT [da]",
                    nextDay: "[Ertaga] LT [da]",
                    nextWeek: "dddd [kuni soat] LT [da]",
                    lastDay: "[Kecha soat] LT [da]",
                    lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Yaqin %s ichida",
                    past: "Bir necha %s oldin",
                    s: "soniya",
                    ss: "%d soniya",
                    m: "bir daqiqa",
                    mm: "%d daqiqa",
                    h: "bir soat",
                    hh: "%d soat",
                    d: "bir kun",
                    dd: "%d kun",
                    M: "bir oy",
                    MM: "%d oy",
                    y: "bir yil",
                    yy: "%d yil"
                },
                week: {dow: 1, doy: 7}
            })
        })
    }, 1150: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function (e) {
                    return /^ch$/i.test(e)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    ss: "%d giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function (e) {
                    return e
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1151: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("x-pseudo", {
                months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                monthsParseExact: !0,
                weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~ódá~ý át] LT",
                    nextDay: "[T~ómó~rró~w át] LT",
                    nextWeek: "dddd [át] LT",
                    lastDay: "[Ý~ést~érdá~ý át] LT",
                    lastWeek: "[L~ást] dddd [át] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "í~ñ %s",
                    past: "%s á~gó",
                    s: "á ~féw ~sécó~ñds",
                    ss: "%d s~écóñ~ds",
                    m: "á ~míñ~úté",
                    mm: "%d m~íñú~tés",
                    h: "á~ñ hó~úr",
                    hh: "%d h~óúrs",
                    d: "á ~dáý",
                    dd: "%d d~áýs",
                    M: "á ~móñ~th",
                    MM: "%d m~óñt~hs",
                    y: "á ~ýéár",
                    yy: "%d ý~éárs"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {dow: 1, doy: 4}
            })
        })
    }, 1152: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("yo", {
                months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Ònì ni] LT",
                    nextDay: "[Ọ̀la ni] LT",
                    nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                    lastDay: "[Àna ni] LT",
                    lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ní %s",
                    past: "%s kọjá",
                    s: "ìsẹjú aayá die",
                    ss: "aayá %d",
                    m: "ìsẹjú kan",
                    mm: "ìsẹjú %d",
                    h: "wákati kan",
                    hh: "wákati %d",
                    d: "ọjọ́ kan",
                    dd: "ọjọ́ %d",
                    M: "osù kan",
                    MM: "osù %d",
                    y: "ọdún kan",
                    yy: "ọdún %d"
                },
                dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                ordinal: "ọjọ́ %d",
                week: {dow: 1, doy: 4}
            })
        })
    }, 1153: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("zh-hk", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"d":
                        case"D":
                        case"DDD":
                            return e + "日";
                        case"M":
                            return e + "月";
                        case"w":
                        case"W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        })
    }, 1154: function (e, t, n) {
        !function (e, t) {
            t(n(9))
        }(0, function (e) {
            "use strict";
            return e.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天] LT",
                    nextDay: "[明天] LT",
                    nextWeek: "[下]dddd LT",
                    lastDay: "[昨天] LT",
                    lastWeek: "[上]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case"d":
                        case"D":
                        case"DDD":
                            return e + "日";
                        case"M":
                            return e + "月";
                        case"w":
                        case"W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        })
    }, 1170: function (e, t, n) {
        n(1171), e.exports = n(1172)
    }, 1171: function (e, t, n) {
        "use strict";
        void 0 === window.console && (window.console = {
            log: function () {
            }, error: function () {
            }
        })
    }, 1172: function (e, t, n) {
        "use strict";
        (function (e) {
            var t = n(212), a = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(t);
            n(1173), n(1016), n(1174), n(1175), n(1179), n(1181), e.$ = e.jQuery = n(68);
            var r = $(window), s = $(".header"), i = ["hos", "tna", "me"];
            e.z = ["loc", "at", "ion"], e.x = ["hr", "ef"];
            var o = e[z.join("")][i.join("")].split("").map(function (e) {
                return e.charCodeAt().toString(16)
            }).join("");
            e.v = function (e) {
                for (var t = [], n = 0; n < e.length; n += 2) t.push(String.fromCharCode(parseInt(e.substr(n, 2), 16)));
                return t.join("")
            }, ["6c6f63616c686f7374", "772e66652e73742e6d616f79616e2e636f6d", "6d616f79616e2e636f6d", "696d6f7669652e6577616e672e636f6d", "6d797777772e6d6f7669652e746573742e6d616f79616e2e636f6d"].indexOf(o) < 0 && setTimeout("var g = (function() { return this })();g[z.join('')][x.join('')]=g.v('68747470733a2f2f6d616f79616e2e636f6d')", 0), (0, a.default)(), $(".search-form").on("submit", function () {
                analytics("event", {nm: "mge", val: {act: $(this).data("actform"), val: null}})
            }), $("input, textarea").placeholder(), $(".city-container").city(), $(".search, .kw").searchSuggest(), $("body").on("click", "[data-query]", function () {
                var e = this.href, t = "?";
                e.indexOf("?") >= 0 && (t = "&"), this.getAttribute("data-query") && (this.href += t + this.getAttribute("data-query")), this.removeAttribute("data-query")
            }), $("body").on("click", "a[target=_blank]", function (e) {
                var t = this;
                e.preventDefault(), $('<div style="display:none;"></div>').appendTo("body").each(function (e, n) {
                    n.contentWindow.open($(t).attr("href"))
                }).remove()
            });
            var d = function () {
                s.css("left", "-" + r.scrollLeft() + "px")
            };
            document.body.clientWidth < 1200 && r.scroll(d), $(window).resize(function () {
                document.body.clientWidth < 1200 ? r.on("scroll", d) : r.off("scroll", d)
            }), n(1182)
        }).call(t, n(23))
    }, 1173: function (e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var s = n(68), i = a(s), o = n(398), d = a(o), u = n(395), l = function () {
            function e(t) {
                r(this, e), this.$elem = t, this.$list = t.find(".city-list"), this.$body = (0, i.default)("body"), this.isLoaded = !1, this.isLoading = !1, this.closeTimer = null, this.bindEvents(), this.fetch()
            }

            return e.prototype.bindEvents = function () {
                var e = this;
                this.$elem.on("mouseenter", function (t) {
                    clearTimeout(e.closeTimer), e.open()
                }).on("mouseleave", function (t) {
                    e.closeTimer = setTimeout(function () {
                        e.close()
                    }, 200)
                }).on("click", ".js-city-name", function (t) {
                    t.stopPropagation(), e.selectCity((0, i.default)(t.target).data("ci"))
                }).on("click", ".js-geo-city", function (t) {
                    t.stopPropagation(), e.clearSelectedCity()
                }).on("mousewheel", ".city-list", function (t) {
                    e.$list.scrollTop(e.$list.scrollTop() - t.originalEvent.wheelDelta)
                })
            }, e.prototype.fetch = function () {
                var e = this;
                this.isLoading = !0;
                var t = JSON.parse(localStorage.getItem("cities")), n = function (t) {
                    var n = "";
                    if (t.letterMap) {
                        var a = t.letterMap;
                        e.isLoaded = !0;
                        n = "<ul>" + Object.keys(a).map(function (e, t) {
                            return "\n              <li>\n                <span>" + e + "</span>\n                <div>\n                  " + a[e].map(function (e) {
                                return '<a class="js-city-name" data-ci="' + e.id + '" data-val="{ choosecityid:' + e.id + ' }"  data-act="cityChange-click">' + e.nm + "</a>"
                            }).join("") + "\n                </div>\n              </li>\n            "
                        }).join("") + "</ul>"
                    }
                    e.$list.append(n), e.isLoading = !1
                };
                return t ? jQuery.Deferred().resolve(n(t)) : i.default.getJSON("/ajax/cities").then(function (e) {
                    n(e), localStorage.setItem("cities", JSON.stringify(e))
                })
            }, e.prototype.toggle = function () {
                this.$elem.hasClass("active") ? this.close() : this.open()
            }, e.prototype.open = function () {
                var e = this;
                this.isLoading || (this.isLoaded ? (this.$elem.addClass("active"), (0, u.disableScroll)()) : this.fetch().then(function () {
                    e.open()
                }))
            }, e.prototype.close = function () {
                (0, u.enableScroll)(), this.$elem.removeClass("active")
            }, e.prototype.selectCity = function (e) {
                this.clearSelectedCity();
                var t = [];
                t.length >= 2 && isNaN(t[t.length - 1]) ? d.default.set("ci", e, {domain: t.slice(-2).join(".")}) : d.default.set("ci", e)
            }, e.prototype.clearSelectedCity = function () {
            }, e
        }();
        i.default.fn.city = function () {
            (0, i.default)(this).data("city", new l((0, i.default)(this)))
        }
    }, 1174: function (e, t, n) {
        "use strict";
        var a = n(68);
        a(function () {
            var e = a(".footer"), t = function () {
                var t = a("body").height();
                "fixed" === e.css("position") && (t += e.outerHeight(!0));
                var n = t < a(window).height();
                e.css({position: n ? "fixed" : "", bottom: n ? 0 : "", width: n ? "100%" : "", visibility: "visible"})
            };
            t(), a(window).load(t).resize(t)
        })
    }, 1175: function (e, t, n) {
        "use strict";

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var r = n(68), s = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(r), i = n(1176), o = function () {
            function e(t) {
                a(this, e);
                for (var n = t.length, r = 0; r < n; r++) this.bindEvents((0, s.default)(t[r]))
            }

            return e.prototype.bindEvents = function (e) {
                var t = this, n = this.request(e), a = [37, 38, 39, 40];
                e.on("keyup", function (e) {
                    t.include(a, e.keyCode) || n()
                }).on("blur", function () {
                    setTimeout(function () {
                        e.siblings(".suggest-container").hide()
                    }, 150)
                }).on("focus", function () {
                    var t = e.siblings(".suggest-container");
                    t.length ? t.show() : n()
                })
            }, e.prototype.request = function (e) {
                var t = this, n = void 0, a = void 0;
                return function () {
                    var r = a = Math.random();
                    n && clearTimeout(n), n = setTimeout(function () {
                        var n = e.val().trim();
                        n ? s.default.get("/ajax/suggest", {kw: n}).then(function (n) {
                            r === a && t.destroy().render(n, e)
                        }) : t.destroy()
                    }, 200)
                }
            }, e.prototype.render = function (e, t) {
                3 !== e.type && t.after(i.render({res: e}))
            }, e.prototype.destroy = function () {
                return (0, s.default)(".suggest-container").remove(), this
            }, e.prototype.include = function (e, t) {
                for (var n = e.length, a = 0; a < n; a++) if (e[a] === t) return !0;
                return !1
            }, e
        }();
        s.default.fn.searchSuggest = function () {
            (0, s.default)(this).data("searchSuggest", new o((0, s.default)(this)))
        }
    }, 1176: function (e, t, n) {
        var a, r = n(123);
        a = r.currentEnv ? r.currentEnv : r.currentEnv = new r.Environment([], void 0);
        var s = (n(124)(a), r.webpackDependencies || (r.webpackDependencies = {})), i = n(125);
        !function () {
            (r.nunjucksPrecompiled = r.nunjucksPrecompiled || {})["pages/_common/search-suggest.html"] = function () {
                function e(e, t, n, a, r) {
                    var s = null, i = null, o = "";
                    try {
                        var d, u = null;
                        d = {
                            movies: "影视剧",
                            celebritys: "影人",
                            cinemas: "影院"
                        }, n.set("typeMap", d, !0), n.topLevel && t.setVariable("typeMap", d), n.topLevel && t.addExport("typeMap", d), o += "\n";
                        var l;
                        l = 4, n.set("limit", l, !0), n.topLevel && t.setVariable("limit", l), n.topLevel && t.addExport("limit", l), o += "\n\n";
                        var _ = a.makeMacro(["data", "type"], [], function (r, s, i) {
                            n = n.push(!0), i = i || {}, i.hasOwnProperty("caller") && n.set("caller", i.caller), n.set("data", r), n.set("type", s);
                            var o = "";
                            o += '\n<div class="suggest-body">\n  <span class="suggest-name">', o += a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t, n, "typeMap"), s), e.opts.autoescape), o += '</span>\n  <div class="suggest-detail-list">\n    ', n = n.push();
                            var d = r;
                            if (d) for (var u = d.length, l = 0; l < d.length; l++) {
                                var _ = d[l];
                                n.set("item", _), n.set("loop.index", l + 1), n.set("loop.index0", l), n.set("loop.revindex", u - l), n.set("loop.revindex0", u - l - 1), n.set("loop.first", 0 === l), n.set("loop.last", l === u - 1), n.set("loop.length", u), o += "\n      ", a.memberLookup(a.contextOrFrameLookup(t, n, "loop"), "index") < a.contextOrFrameLookup(t, n, "limit") && (o += '\n        <a class="suggest-detail"\n           href="/films/', o += a.suppressValue(a.memberLookup(_, "id"), e.opts.autoescape), o += '"\n           target="_blank"\n           data-act="movies-click"\n           data-val="{movieId:', o += a.suppressValue(a.memberLookup(_, "id"), e.opts.autoescape), o += '}"\n        >\n          <img class="detail-img" src="', o += a.suppressValue(e.getFilter("venus").call(t, e.getFilter("defaultAvatar").call(t, a.memberLookup(_, "img")), 36, 50), e.opts.autoescape), o += '">\n          <span class="detail-name">', o += a.suppressValue(a.memberLookup(_, "nm"), e.opts.autoescape), o += "</span>\n        </a>\n      "), o += "\n    "
                            }
                            return n = n.pop(), o += "\n  </div>\n</div>\n", n = n.pop(), new a.SafeString(o)
                        });
                        t.addExport("movies"), t.setVariable("movies", _), o += "\n\n";
                        var c = a.makeMacro(["data", "type"], [], function (r, s, i) {
                            n = n.push(!0), i = i || {}, i.hasOwnProperty("caller") && n.set("caller", i.caller), n.set("data", r), n.set("type", s);
                            var o = "";
                            o += '\n<div class="suggest-body">\n  <span class="suggest-name">', o += a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t, n, "typeMap"), s), e.opts.autoescape), o += '</span>\n  <div class="suggest-detail-list">\n    ', n = n.push();
                            var d = r;
                            if (d) for (var u = d.length, l = 0; l < d.length; l++) {
                                var _ = d[l];
                                n.set("item", _), n.set("loop.index", l + 1), n.set("loop.index0", l), n.set("loop.revindex", u - l), n.set("loop.revindex0", u - l - 1), n.set("loop.first", 0 === l), n.set("loop.last", l === u - 1), n.set("loop.length", u), o += "\n      ", a.memberLookup(a.contextOrFrameLookup(t, n, "loop"), "index") < a.contextOrFrameLookup(t, n, "limit") && (o += '\n        <a class="suggest-detail"\n           href="/films/celebrity/', o += a.suppressValue(a.memberLookup(_, "id"), e.opts.autoescape), o += '"\n           target="_blank"\n           data-act="celebrity-click"\n           data-val="{celebrityId:', o += a.suppressValue(a.memberLookup(_, "id"), e.opts.autoescape), o += '}"\n        >\n          <img class="detail-img" src="', o += a.suppressValue(e.getFilter("venus").call(t, e.getFilter("defaultAvatar").call(t, a.memberLookup(_, "img")), 36, 50), e.opts.autoescape), o += '">\n          <span class="detail-name">', o += a.suppressValue(a.memberLookup(_, "nm"), e.opts.autoescape), o += "</span>\n        </a>\n      "), o += "\n    "
                            }
                            return n = n.pop(), o += "\n  </div>\n</div>\n", n = n.pop(), new a.SafeString(o)
                        });
                        t.addExport("celebrities"), t.setVariable("celebrities", c), o += "\n\n";
                        var m = a.makeMacro(["data", "type"], [], function (r, s, i) {
                            n = n.push(!0), i = i || {}, i.hasOwnProperty("caller") && n.set("caller", i.caller), n.set("data", r), n.set("type", s);
                            var o = "";
                            o += '\n<div class="suggest-body">\n  <span class="suggest-name suggest-name-small">', o += a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t, n, "typeMap"), s), e.opts.autoescape), o += '</span>\n  <div class="suggest-detail-list">\n    ', n = n.push();
                            var d = r;
                            if (d) for (var u = d.length, l = 0; l < d.length; l++) {
                                var _ = d[l];
                                n.set("item", _), n.set("loop.index", l + 1), n.set("loop.index0", l), n.set("loop.revindex", u - l), n.set("loop.revindex0", u - l - 1), n.set("loop.first", 0 === l), n.set("loop.last", l === u - 1), n.set("loop.length", u), o += "\n      ", a.memberLookup(a.contextOrFrameLookup(t, n, "loop"), "index") < a.contextOrFrameLookup(t, n, "limit") && (o += '\n        <a class="suggest-detail"\n           href="/cinema/', o += a.suppressValue(a.memberLookup(_, "id"), e.opts.autoescape), o += "?poi=", o += a.suppressValue(a.memberLookup(_, "poiId"), e.opts.autoescape), o += '"\n           target="_blank"\n           data-act="cinema-click"\n           data-val="{cinemaId:', o += a.suppressValue(a.memberLookup(_, "id"), e.opts.autoescape), o += '}"\n        >\n          <span class="detail-name detail-name-small">', o += a.suppressValue(a.memberLookup(_, "nm"), e.opts.autoescape), o += "</span>\n        </a>\n      "), o += "\n    "
                            }
                            return n = n.pop(), o += "\n  </div>\n</div>\n", n = n.pop(), new a.SafeString(o)
                        });
                        t.addExport("cinemas"), t.setVariable("cinemas", m), o += '\n\n<div class="suggest-container">\n  ', n = n.push();
                        var h = a.contextOrFrameLookup(t, n, "res");
                        if (h) {
                            var f;
                            if (a.isArray(h)) {
                                var p = h.length;
                                for (f = 0; f < h.length; f++) {
                                    var y = h[f][0];
                                    n.set("key", h[f][0]);
                                    var M = h[f][1];
                                    n.set("value", h[f][1]), n.set("loop.index", f + 1), n.set("loop.index0", f), n.set("loop.revindex", p - f), n.set("loop.revindex0", p - f - 1), n.set("loop.first", 0 === f), n.set("loop.last", f === p - 1), n.set("loop.length", p), o += "\n    ", "movies" == y ? (o += "\n      ", o += a.suppressValue((s = 68, i = 13, a.callWrap(_, "movies", t, [a.memberLookup(M, "list"), y])), e.opts.autoescape), o += "\n    ") : "celebritys" == y ? (o += "\n      ", o += a.suppressValue((s = 70, i = 18, a.callWrap(c, "celebrities", t, [a.memberLookup(M, "list"), y])), e.opts.autoescape), o += "\n    ") : "cinemas" == y && (o += "\n      ", o += a.suppressValue((s = 72, i = 14, a.callWrap(m, "cinemas", t, [a.memberLookup(M, "list"), y])), e.opts.autoescape), o += "\n    "), o += "\n  "
                                }
                            } else {
                                f = -1;
                                var p = a.keys(h).length;
                                for (var L in h) {
                                    f++;
                                    var g = h[L];
                                    n.set("key", L), n.set("value", g), n.set("loop.index", f + 1), n.set("loop.index0", f), n.set("loop.revindex", p - f), n.set("loop.revindex0", p - f - 1), n.set("loop.first", 0 === f), n.set("loop.last", f === p - 1), n.set("loop.length", p), o += "\n    ", "movies" == L ? (o += "\n      ", o += a.suppressValue((s = 68, i = 13, a.callWrap(_, "movies", t, [a.memberLookup(g, "list"), L])), e.opts.autoescape), o += "\n    ") : "celebritys" == L ? (o += "\n      ", o += a.suppressValue((s = 70, i = 18, a.callWrap(c, "celebrities", t, [a.memberLookup(g, "list"), L])), e.opts.autoescape), o += "\n    ") : "cinemas" == L && (o += "\n      ", o += a.suppressValue((s = 72, i = 14, a.callWrap(m, "cinemas", t, [a.memberLookup(g, "list"), L])), e.opts.autoescape), o += "\n    "), o += "\n  "
                                }
                            }
                        }
                        n = n.pop(), o += "\n</div>", u ? u.rootRenderFunc(e, t, n, a, r) : r(null, o)
                    } catch (e) {
                        r(a.handleError(e, s, i))
                    }
                }

                return {root: e}
            }()
        }(), e.exports = i(r, a, r.nunjucksPrecompiled["pages/_common/search-suggest.html"], s)
    }, 1177: function (e, t, n) {
        function a(e) {
            return n(r(e))
        }

        function r(e) {
            var t = s[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }

        var s = {
            "./af": 1029,
            "./af.js": 1029,
            "./ar": 1030,
            "./ar-dz": 1031,
            "./ar-dz.js": 1031,
            "./ar-kw": 1032,
            "./ar-kw.js": 1032,
            "./ar-ly": 1033,
            "./ar-ly.js": 1033,
            "./ar-ma": 1034,
            "./ar-ma.js": 1034,
            "./ar-sa": 1035,
            "./ar-sa.js": 1035,
            "./ar-tn": 1036,
            "./ar-tn.js": 1036,
            "./ar.js": 1030,
            "./az": 1037,
            "./az.js": 1037,
            "./be": 1038,
            "./be.js": 1038,
            "./bg": 1039,
            "./bg.js": 1039,
            "./bm": 1040,
            "./bm.js": 1040,
            "./bn": 1041,
            "./bn.js": 1041,
            "./bo": 1042,
            "./bo.js": 1042,
            "./br": 1043,
            "./br.js": 1043,
            "./bs": 1044,
            "./bs.js": 1044,
            "./ca": 1045,
            "./ca.js": 1045,
            "./cs": 1046,
            "./cs.js": 1046,
            "./cv": 1047,
            "./cv.js": 1047,
            "./cy": 1048,
            "./cy.js": 1048,
            "./da": 1049,
            "./da.js": 1049,
            "./de": 1050,
            "./de-at": 1051,
            "./de-at.js": 1051,
            "./de-ch": 1052,
            "./de-ch.js": 1052,
            "./de.js": 1050,
            "./dv": 1053,
            "./dv.js": 1053,
            "./el": 1054,
            "./el.js": 1054,
            "./en-SG": 1055,
            "./en-SG.js": 1055,
            "./en-au": 1056,
            "./en-au.js": 1056,
            "./en-ca": 1057,
            "./en-ca.js": 1057,
            "./en-gb": 1058,
            "./en-gb.js": 1058,
            "./en-ie": 1059,
            "./en-ie.js": 1059,
            "./en-il": 1060,
            "./en-il.js": 1060,
            "./en-nz": 1061,
            "./en-nz.js": 1061,
            "./eo": 1062,
            "./eo.js": 1062,
            "./es": 1063,
            "./es-do": 1064,
            "./es-do.js": 1064,
            "./es-us": 1065,
            "./es-us.js": 1065,
            "./es.js": 1063,
            "./et": 1066,
            "./et.js": 1066,
            "./eu": 1067,
            "./eu.js": 1067,
            "./fa": 1068,
            "./fa.js": 1068,
            "./fi": 1069,
            "./fi.js": 1069,
            "./fo": 1070,
            "./fo.js": 1070,
            "./fr": 1071,
            "./fr-ca": 1072,
            "./fr-ca.js": 1072,
            "./fr-ch": 1073,
            "./fr-ch.js": 1073,
            "./fr.js": 1071,
            "./fy": 1074,
            "./fy.js": 1074,
            "./ga": 1075,
            "./ga.js": 1075,
            "./gd": 1076,
            "./gd.js": 1076,
            "./gl": 1077,
            "./gl.js": 1077,
            "./gom-latn": 1078,
            "./gom-latn.js": 1078,
            "./gu": 1079,
            "./gu.js": 1079,
            "./he": 1080,
            "./he.js": 1080,
            "./hi": 1081,
            "./hi.js": 1081,
            "./hr": 1082,
            "./hr.js": 1082,
            "./hu": 1083,
            "./hu.js": 1083,
            "./hy-am": 1084,
            "./hy-am.js": 1084,
            "./id": 1085,
            "./id.js": 1085,
            "./is": 1086,
            "./is.js": 1086,
            "./it": 1087,
            "./it-ch": 1088,
            "./it-ch.js": 1088,
            "./it.js": 1087,
            "./ja": 1089,
            "./ja.js": 1089,
            "./jv": 1090,
            "./jv.js": 1090,
            "./ka": 1091,
            "./ka.js": 1091,
            "./kk": 1092,
            "./kk.js": 1092,
            "./km": 1093,
            "./km.js": 1093,
            "./kn": 1094,
            "./kn.js": 1094,
            "./ko": 1095,
            "./ko.js": 1095,
            "./ku": 1096,
            "./ku.js": 1096,
            "./ky": 1097,
            "./ky.js": 1097,
            "./lb": 1098,
            "./lb.js": 1098,
            "./lo": 1099,
            "./lo.js": 1099,
            "./lt": 1100,
            "./lt.js": 1100,
            "./lv": 1101,
            "./lv.js": 1101,
            "./me": 1102,
            "./me.js": 1102,
            "./mi": 1103,
            "./mi.js": 1103,
            "./mk": 1104,
            "./mk.js": 1104,
            "./ml": 1105,
            "./ml.js": 1105,
            "./mn": 1106,
            "./mn.js": 1106,
            "./mr": 1107,
            "./mr.js": 1107,
            "./ms": 1108,
            "./ms-my": 1109,
            "./ms-my.js": 1109,
            "./ms.js": 1108,
            "./mt": 1110,
            "./mt.js": 1110,
            "./my": 1111,
            "./my.js": 1111,
            "./nb": 1112,
            "./nb.js": 1112,
            "./ne": 1113,
            "./ne.js": 1113,
            "./nl": 1114,
            "./nl-be": 1115,
            "./nl-be.js": 1115,
            "./nl.js": 1114,
            "./nn": 1116,
            "./nn.js": 1116,
            "./pa-in": 1117,
            "./pa-in.js": 1117,
            "./pl": 1118,
            "./pl.js": 1118,
            "./pt": 1119,
            "./pt-br": 1120,
            "./pt-br.js": 1120,
            "./pt.js": 1119,
            "./ro": 1121,
            "./ro.js": 1121,
            "./ru": 1122,
            "./ru.js": 1122,
            "./sd": 1123,
            "./sd.js": 1123,
            "./se": 1124,
            "./se.js": 1124,
            "./si": 1125,
            "./si.js": 1125,
            "./sk": 1126,
            "./sk.js": 1126,
            "./sl": 1127,
            "./sl.js": 1127,
            "./sq": 1128,
            "./sq.js": 1128,
            "./sr": 1129,
            "./sr-cyrl": 1130,
            "./sr-cyrl.js": 1130,
            "./sr.js": 1129,
            "./ss": 1131,
            "./ss.js": 1131,
            "./sv": 1132,
            "./sv.js": 1132,
            "./sw": 1133,
            "./sw.js": 1133,
            "./ta": 1134,
            "./ta.js": 1134,
            "./te": 1135,
            "./te.js": 1135,
            "./tet": 1136,
            "./tet.js": 1136,
            "./tg": 1137,
            "./tg.js": 1137,
            "./th": 1138,
            "./th.js": 1138,
            "./tl-ph": 1139,
            "./tl-ph.js": 1139,
            "./tlh": 1140,
            "./tlh.js": 1140,
            "./tr": 1141,
            "./tr.js": 1141,
            "./tzl": 1142,
            "./tzl.js": 1142,
            "./tzm": 1143,
            "./tzm-latn": 1144,
            "./tzm-latn.js": 1144,
            "./tzm.js": 1143,
            "./ug-cn": 1145,
            "./ug-cn.js": 1145,
            "./uk": 1146,
            "./uk.js": 1146,
            "./ur": 1147,
            "./ur.js": 1147,
            "./uz": 1148,
            "./uz-latn": 1149,
            "./uz-latn.js": 1149,
            "./uz.js": 1148,
            "./vi": 1150,
            "./vi.js": 1150,
            "./x-pseudo": 1151,
            "./x-pseudo.js": 1151,
            "./yo": 1152,
            "./yo.js": 1152,
            "./zh-cn": 1014,
            "./zh-cn.js": 1014,
            "./zh-hk": 1153,
            "./zh-hk.js": 1153,
            "./zh-tw": 1154,
            "./zh-tw.js": 1154
        };
        a.keys = function () {
            return Object.keys(s)
        }, a.resolve = r, e.exports = a, a.id = 1177
    }, 1178: function (e, t, n) {
        "use strict";
        e.exports = {
            defaultUserAvatar: function (e) {
                return e
            }, parseSeconds: function (e) {
                function t(e) {
                    return (e < 10 ? "0" : "") + e
                }

                var n = e / 60;
                e %= 60;
                var a = n / 60;
                return n %= 60, [a, n, e].filter(function (e, t) {
                    return e >= 1 || 0 !== t
                }).map(function (e) {
                    return t(parseInt(e, 10))
                }).join(":")
            }
        }
    }, 1179: function (e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = n(399), s = a(r), i = n(1180), o = a(i), d = n(68), u = (0, o.default)("page.image.");
        d(function () {
            var e = d(document), t = d(window);
            t.on("scroll loadImg resize", function () {
                var n = void 0;
                return function () {
                    clearTimeout(n), n = setTimeout(function () {
                        var n = e.scrollTop(), a = n + t.height();
                        (0, s.default)(function (e) {
                            d("[data-src]").each(function () {
                                var t = d(this);
                                if (!t.attr("src") && t.is(":visible") && n - t.offset().top - t.height() < 300 && t.offset().top - a < 300) {
                                    var r = u();
                                    t.on("load", function () {
                                        r.done()
                                    }), t.on("error", function () {
                                        r.error()
                                    }), t.attr("src", e(t.data("src"))), t.removeAttr("data-src")
                                }
                            })
                        })
                    }, 300)
                }
            }()), t.trigger("loadImg")
        })
    }, 1180: function (e, t, n) {
        "use strict";

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            var t = 0 | localStorage.getItem(e);
            localStorage.setItem(e, ++t)
        }

        function s(e, t, n) {
            i(e + t, n), n > 3e3 && i(e + "timeout", n)
        }

        function i(e, t) {
            var n = localStorage.getItem(e);
            n = n ? n + "," + t : t, localStorage.setItem(e, n)
        }

        function o(e) {
            function t(e) {
                var t = localStorage.getItem(e);
                t && (t = t.split(","), t.forEach(function (t) {
                    mta("timing", e, t)
                }), localStorage.removeItem(e))
            }

            function n(e) {
                var t = 0 | localStorage.getItem(e);
                parseInt(t) > 0 && mta("count", e, t), localStorage.removeItem(e)
            }

            return d(function () {
                n(e + "imgCount"), t(e + "done"), t(e + "error"), t(e + "unload"), t(e + "timeout")
            }), u = [], d(window).on("beforeunload", function () {
                for (var e = 0; e < u.length; e++) u[e].unload()
            }), function () {
                var t = new l(e);
                return u.push(t), t
            }
        }

        t.__esModule = !0, t.default = o;
        var d = n(68), u = void 0, l = function () {
            function e(t) {
                a(this, e), this.metricPrefix = t, this.start = new Date, this.status = "", r(this.metricPrefix + "imgCount")
            }

            return e.prototype.done = function () {
                this.status || (this.status = "done", s(this.metricPrefix, "done", new Date - this.start))
            }, e.prototype.error = function () {
                this.status || (this.status = "error", s(this.metricPrefix, "error", new Date - this.start))
            }, e.prototype.unload = function () {
                this.status || (this.status = "unload", s(this.metricPrefix, "unload", new Date - this.start))
            }, e
        }()
    }, 1181: function (e, t, n) {
        "use strict";

        function a(e) {
            e = (0, s.default)(e);
            var t = e.add(e.parents("[data-val]")).map(function (e, t) {
                return i((0, s.default)(t).data("val"))
            }).get().concat((0, s.default)("[data-state-val]").map(function (e, t) {
                return i((0, s.default)(t).data("state-val"))
            }).get()).concat(window.val || {}).reduceRight(function (e, t) {
                return s.default.extend(e, t)
            }), n = e.add(e.parents("[data-bid]")).data("bid");
            e.add(e.parents("[data-cid]")).data("cid") ? analytics("event", {
                nm: "mge",
                val_bid: "b_z3wg6f7b",
                val_cid: "c_vwmiv52u",
                val_lab: {custom: t},
                event_type: "click"
            }) : analytics("event", {nm: "mge", val: {act: e.data("act"), val: t, bid: n || ""}})
        }

        t.__esModule = !0, t.default = a;
        var r = n(68), s = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(r), i = function (e) {
            if ("string" == typeof e && "{" === e[0]) try {
                e = new Function("return (" + e + ")")()
            } catch (e) {
                Raven.captureException(e)
            }
            return e || {}
        };
        (0, s.default)("body").on("mousedown", "[data-act]", function () {
            a((0, s.default)(this))
        })
    }, 1182: function (e, t) {
    }, 123: function (e, t, n) {
        !function (t, n) {
            e.exports = n()
        }(0, function () {
            return function (e) {
                function t(a) {
                    if (n[a]) return n[a].exports;
                    var r = n[a] = {exports: {}, id: a, loaded: !1};
                    return e[a].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.p = "", t(0)
            }([function (e, t, n) {
                "use strict";
                var a = n(1), r = n(2), s = n(11), i = n(3), o = n(3);
                e.exports = {}, e.exports.Environment = r.Environment, e.exports.Template = r.Template, e.exports.Loader = s, e.exports.FileSystemLoader = i.FileSystemLoader, e.exports.PrecompiledLoader = i.PrecompiledLoader, e.exports.WebLoader = i.WebLoader, e.exports.compiler = n(3), e.exports.parser = n(3), e.exports.lexer = n(3), e.exports.runtime = n(8), e.exports.lib = a, e.exports.nodes = n(3), e.exports.installJinjaCompat = n(12);
                var d;
                e.exports.configure = function (e, t) {
                    t = t || {}, a.isObject(e) && (t = e, e = null);
                    var n;
                    return i.FileSystemLoader ? n = new i.FileSystemLoader(e, {
                        watch: t.watch,
                        noCache: t.noCache
                    }) : i.WebLoader && (n = new i.WebLoader(e, {
                        useCache: t.web && t.web.useCache,
                        async: t.web && t.web.async
                    })), d = new r.Environment(n, t), t && t.express && d.express(t.express), d
                }, e.exports.compile = function (t, n, a, r) {
                    return d || e.exports.configure(), new e.exports.Template(t, n, a, r)
                }, e.exports.render = function (t, n, a) {
                    return d || e.exports.configure(), d.render(t, n, a)
                }, e.exports.renderString = function (t, n, a) {
                    return d || e.exports.configure(), d.renderString(t, n, a)
                }, o && (e.exports.precompile = o.precompile, e.exports.precompileString = o.precompileString)
            }, function (e, t) {
                "use strict";
                var n = Array.prototype, a = Object.prototype,
                    r = {"&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;"}, s = /[&"'<>]/g,
                    i = function (e) {
                        return r[e]
                    }, t = e.exports = {};
                t.prettifyError = function (e, n, a) {
                    if (a.Update || (a = new t.TemplateError(a)), a.Update(e), !n) {
                        var r = a;
                        a = new Error(r.message), a.name = r.name
                    }
                    return a
                }, t.TemplateError = function (e, t, n) {
                    var a = this;
                    if (e instanceof Error) {
                        a = e, e = e.name + ": " + e.message;
                        try {
                            a.name = ""
                        } catch (e) {
                            a = this
                        }
                    } else Error.captureStackTrace && Error.captureStackTrace(a);
                    return a.name = "Template render error", a.message = e, a.lineno = t, a.colno = n, a.firstUpdate = !0, a.Update = function (e) {
                        var t = "(" + (e || "unknown path") + ")";
                        return this.firstUpdate && (this.lineno && this.colno ? t += " [Line " + this.lineno + ", Column " + this.colno + "]" : this.lineno && (t += " [Line " + this.lineno + "]")), t += "\n ", this.firstUpdate && (t += " "), this.message = t + (this.message || ""), this.firstUpdate = !1, this
                    }, a
                }, t.TemplateError.prototype = Error.prototype, t.escape = function (e) {
                    return e.replace(s, i)
                }, t.isFunction = function (e) {
                    return "[object Function]" === a.toString.call(e)
                }, t.isArray = Array.isArray || function (e) {
                    return "[object Array]" === a.toString.call(e)
                }, t.isString = function (e) {
                    return "[object String]" === a.toString.call(e)
                }, t.isObject = function (e) {
                    return "[object Object]" === a.toString.call(e)
                }, t.groupBy = function (e, n) {
                    for (var a = {}, r = t.isFunction(n) ? n : function (e) {
                        return e[n]
                    }, s = 0; s < e.length; s++) {
                        var i = e[s], o = r(i, s);
                        (a[o] || (a[o] = [])).push(i)
                    }
                    return a
                }, t.toArray = function (e) {
                    return Array.prototype.slice.call(e)
                }, t.without = function (e) {
                    var n = [];
                    if (!e) return n;
                    for (var a = -1, r = e.length, s = t.toArray(arguments).slice(1); ++a < r;) -1 === t.indexOf(s, e[a]) && n.push(e[a]);
                    return n
                }, t.extend = function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e
                }, t.repeat = function (e, t) {
                    for (var n = "", a = 0; a < t; a++) n += e;
                    return n
                }, t.each = function (e, t, a) {
                    if (null != e) if (n.each && e.each === n.each) e.forEach(t, a); else if (e.length === +e.length) for (var r = 0, s = e.length; r < s; r++) t.call(a, e[r], r, e)
                }, t.map = function (e, t) {
                    var a = [];
                    if (null == e) return a;
                    if (n.map && e.map === n.map) return e.map(t);
                    for (var r = 0; r < e.length; r++) a[a.length] = t(e[r], r);
                    return e.length === +e.length && (a.length = e.length), a
                }, t.asyncIter = function (e, t, n) {
                    function a() {
                        r++, r < e.length ? t(e[r], r, a, n) : n()
                    }

                    var r = -1;
                    a()
                }, t.asyncFor = function (e, n, a) {
                    function r() {
                        o++;
                        var t = s[o];
                        o < i ? n(t, e[t], o, i, r) : a()
                    }

                    var s = t.keys(e), i = s.length, o = -1;
                    r()
                }, t.indexOf = Array.prototype.indexOf ? function (e, t, n) {
                    return Array.prototype.indexOf.call(e, t, n)
                } : function (e, t, n) {
                    var a = this.length >>> 0;
                    for (n = +n || 0, Math.abs(n) === 1 / 0 && (n = 0), n < 0 && (n += a) < 0 && (n = 0); n < a; n++) if (e[n] === t) return n;
                    return -1
                }, Array.prototype.map || (Array.prototype.map = function () {
                    throw new Error("map is unimplemented for this js engine")
                }), t.keys = function (e) {
                    if (Object.prototype.keys) return e.keys();
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(n);
                    return t
                }, t.inOperator = function (e, n) {
                    if (t.isArray(n)) return -1 !== t.indexOf(n, e);
                    if (t.isObject(n)) return e in n;
                    if (t.isString(n)) return -1 !== n.indexOf(e);
                    throw new Error('Cannot use "in" operator to search for "' + e + '" in unexpected types.')
                }
            }, function (e, t, n) {
                "use strict";

                function a(e, t, n) {
                    i(function () {
                        e(t, n)
                    })
                }

                var r, s = n(3), i = n(4), o = n(1), d = n(6), u = n(3), l = n(7), _ = n(3), c = n(8), m = n(9),
                    h = c.Frame;
                _.PrecompiledLoader = n(10);
                var f = d.extend({
                    init: function (e, t) {
                        t = this.opts = t || {}, this.opts.dev = !!t.dev, this.opts.autoescape = null == t.autoescape || t.autoescape, this.opts.throwOnUndefined = !!t.throwOnUndefined, this.opts.trimBlocks = !!t.trimBlocks, this.opts.lstripBlocks = !!t.lstripBlocks, this.loaders = [], e ? this.loaders = o.isArray(e) ? e : [e] : _.FileSystemLoader ? this.loaders = [new _.FileSystemLoader("views")] : _.WebLoader && (this.loaders = [new _.WebLoader("/views")]), window.nunjucksPrecompiled && this.loaders.unshift(new _.PrecompiledLoader(window.nunjucksPrecompiled)), this.initCache(), this.globals = m(), this.filters = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [];
                        for (var n in l) this.addFilter(n, l[n])
                    }, initCache: function () {
                        o.each(this.loaders, function (e) {
                            e.cache = {}, "function" == typeof e.on && e.on("update", function (t) {
                                e.cache[t] = null
                            })
                        })
                    }, addExtension: function (e, t) {
                        return t._name = e, this.extensions[e] = t, this.extensionsList.push(t), this
                    }, removeExtension: function (e) {
                        var t = this.getExtension(e);
                        t && (this.extensionsList = o.without(this.extensionsList, t), delete this.extensions[e])
                    }, getExtension: function (e) {
                        return this.extensions[e]
                    }, hasExtension: function (e) {
                        return !!this.extensions[e]
                    }, addGlobal: function (e, t) {
                        return this.globals[e] = t, this
                    }, getGlobal: function (e) {
                        if (void 0 === this.globals[e]) throw new Error("global not found: " + e);
                        return this.globals[e]
                    }, addFilter: function (e, t, n) {
                        var a = t;
                        return n && this.asyncFilters.push(e), this.filters[e] = a, this
                    }, getFilter: function (e) {
                        if (!this.filters[e]) throw new Error("filter not found: " + e);
                        return this.filters[e]
                    }, resolveTemplate: function (e, t, n) {
                        return !(e.isRelative && t && e.isRelative(n) && e.resolve) ? n : e.resolve(t, n)
                    }, getTemplate: function (e, t, n, a, s) {
                        var i = this, d = null;
                        if (e && e.raw && (e = e.raw), o.isFunction(n) && (s = n, n = null, t = t || !1), o.isFunction(t) && (s = t, t = !1), e instanceof r) d = e; else {
                            if ("string" != typeof e) throw new Error("template names must be a string: " + e);
                            for (var u = 0; u < this.loaders.length; u++) {
                                var l = this.resolveTemplate(this.loaders[u], n, e);
                                if (d = this.loaders[u].cache[l]) break
                            }
                        }
                        if (!d) {
                            var _, c = this, m = function (n, i) {
                                if (i || n || a || (n = new Error("template not found: " + e)), n) {
                                    if (!s) throw n;
                                    s(n)
                                } else {
                                    var o;
                                    i ? (o = new r(i.src, c, i.path, t), i.noCache || (i.loader.cache[e] = o)) : o = new r("", c, "", t), s ? s(null, o) : _ = o
                                }
                            };
                            return o.asyncIter(this.loaders, function (t, a, r, s) {
                                function o(e, n) {
                                    e ? s(e) : n ? (n.loader = t, s(null, n)) : r()
                                }

                                e = i.resolveTemplate(t, n, e), t.async ? t.getSource(e, o) : o(null, t.getSource(e))
                            }, m), _
                        }
                        return t && d.compile(), s ? void s(null, d) : d
                    }, express: function (e) {
                        function t(e, t) {
                            if (this.name = e, this.path = e, this.defaultEngine = t.defaultEngine, this.ext = s.extname(e), !this.ext && !this.defaultEngine) throw new Error("No default engine was specified and no extension was provided.");
                            this.ext || (this.name += this.ext = ("." !== this.defaultEngine[0] ? "." : "") + this.defaultEngine)
                        }

                        var n = this;
                        return t.prototype.render = function (e, t) {
                            n.render(this.name, e, t)
                        }, e.set("view", t), e.set("nunjucksEnv", this), this
                    }, render: function (e, t, n) {
                        o.isFunction(t) && (n = t, t = null);
                        var r = null;
                        return this.getTemplate(e, function (e, s) {
                            if (e && n) a(n, e); else {
                                if (e) throw e;
                                r = s.render(t, n)
                            }
                        }), r
                    }, renderString: function (e, t, n, a) {
                        return o.isFunction(n) && (a = n, n = {}), n = n || {}, new r(e, this, n.path).render(t, a)
                    }
                }), p = d.extend({
                    init: function (e, t, n) {
                        this.env = n || new f, this.ctx = {};
                        for (var a in e) e.hasOwnProperty(a) && (this.ctx[a] = e[a]);
                        this.blocks = {}, this.exported = [];
                        for (var r in t) this.addBlock(r, t[r])
                    }, lookup: function (e) {
                        return e in this.env.globals && !(e in this.ctx) ? this.env.globals[e] : this.ctx[e]
                    }, setVariable: function (e, t) {
                        this.ctx[e] = t
                    }, getVariables: function () {
                        return this.ctx
                    }, addBlock: function (e, t) {
                        return this.blocks[e] = this.blocks[e] || [], this.blocks[e].push(t), this
                    }, getBlock: function (e) {
                        if (!this.blocks[e]) throw new Error('unknown block "' + e + '"');
                        return this.blocks[e][0]
                    }, getSuper: function (e, t, n, a, r, s) {
                        var i = o.indexOf(this.blocks[t] || [], n), d = this.blocks[t][i + 1], u = this;
                        if (-1 === i || !d) throw new Error('no super block available for "' + t + '"');
                        d(e, u, a, r, s)
                    }, addExport: function (e) {
                        this.exported.push(e)
                    }, getExported: function () {
                        for (var e = {}, t = 0; t < this.exported.length; t++) {
                            var n = this.exported[t];
                            e[n] = this.ctx[n]
                        }
                        return e
                    }
                });
                r = d.extend({
                    init: function (e, t, n, a) {
                        if (this.env = t || new f, o.isObject(e)) switch (e.type) {
                            case"code":
                                this.tmplProps = e.obj;
                                break;
                            case"string":
                                this.tmplStr = e.obj
                        } else {
                            if (!o.isString(e)) throw new Error("src must be a string or an object describing the source");
                            this.tmplStr = e
                        }
                        if (this.path = n, a) {
                            var r = this;
                            try {
                                r._compile()
                            } catch (e) {
                                throw o.prettifyError(this.path, this.env.opts.dev, e)
                            }
                        } else this.compiled = !1
                    }, render: function (e, t, n) {
                        "function" == typeof e ? (n = e, e = {}) : "function" == typeof t && (n = t, t = null);
                        var r = !0;
                        t && (r = !1);
                        var s = this;
                        try {
                            s.compile()
                        } catch (e) {
                            var i = o.prettifyError(this.path, this.env.opts.dev, e);
                            if (n) return a(n, i);
                            throw i
                        }
                        var d = new p(e || {}, s.blocks, s.env), u = t ? t.push(!0) : new h;
                        u.topLevel = !0;
                        var l = null;
                        return s.rootRenderFunc(s.env, d, u || new h, c, function (e, t) {
                            if (e && (e = o.prettifyError(s.path, s.env.opts.dev, e)), n) r ? a(n, e, t) : n(e, t); else {
                                if (e) throw e;
                                l = t
                            }
                        }), l
                    }, getExported: function (e, t, n) {
                        "function" == typeof e && (n = e, e = {}), "function" == typeof t && (n = t, t = null);
                        try {
                            this.compile()
                        } catch (e) {
                            if (n) return n(e);
                            throw e
                        }
                        var a = t ? t.push() : new h;
                        a.topLevel = !0;
                        var r = new p(e || {}, this.blocks, this.env);
                        this.rootRenderFunc(this.env, r, a, c, function (e) {
                            e ? n(e, null) : n(null, r.getExported())
                        })
                    }, compile: function () {
                        this.compiled || this._compile()
                    }, _compile: function () {
                        var e;
                        if (this.tmplProps) e = this.tmplProps; else {
                            var t = u.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts);
                            e = new Function(t)()
                        }
                        this.blocks = this._getBlocks(e), this.rootRenderFunc = e.root, this.compiled = !0
                    }, _getBlocks: function (e) {
                        var t = {};
                        for (var n in e) "b_" === n.slice(0, 2) && (t[n.slice(2)] = e[n]);
                        return t
                    }
                }), e.exports = {Environment: f, Template: r}
            }, function (e, t) {
            }, function (e, t, n) {
                "use strict";

                function a() {
                    if (d.length) throw d.shift()
                }

                function r(e) {
                    var t;
                    t = o.length ? o.pop() : new s, t.task = e, i(t)
                }

                function s() {
                    this.task = null
                }

                var i = n(5), o = [], d = [], u = i.makeRequestCallFromTimer(a);
                e.exports = r, s.prototype.call = function () {
                    try {
                        this.task.call()
                    } catch (e) {
                        r.onerror ? r.onerror(e) : (d.push(e), u())
                    } finally {
                        this.task = null, o[o.length] = this
                    }
                }
            }, function (e, t) {
                (function (t) {
                    "use strict";

                    function n(e) {
                        i.length || (s(), o = !0), i[i.length] = e
                    }

                    function a() {
                        for (; d < i.length;) {
                            var e = d;
                            if (d += 1, i[e].call(), d > u) {
                                for (var t = 0, n = i.length - d; t < n; t++) i[t] = i[t + d];
                                i.length -= d, d = 0
                            }
                        }
                        i.length = 0, d = 0, o = !1
                    }

                    function r(e) {
                        return function () {
                            function t() {
                                clearTimeout(n), clearInterval(a), e()
                            }

                            var n = setTimeout(t, 0), a = setInterval(t, 50)
                        }
                    }

                    e.exports = n;
                    var s, i = [], o = !1, d = 0, u = 1024, l = t.MutationObserver || t.WebKitMutationObserver;
                    s = "function" == typeof l ? function (e) {
                        var t = 1, n = new l(e), a = document.createTextNode("");
                        return n.observe(a, {characterData: !0}), function () {
                            t = -t, a.data = t
                        }
                    }(a) : r(a), n.requestFlush = s, n.makeRequestCallFromTimer = r
                }).call(t, function () {
                    return this
                }())
            }, function (e, t) {
                "use strict";

                function n(e, t, a) {
                    var r = function () {
                    };
                    r.prototype = e.prototype;
                    var s = new r, i = /xyz/.test(function () {
                        xyz
                    }) ? /\bparent\b/ : /.*/;
                    a = a || {};
                    for (var o in a) {
                        var d = a[o], u = s[o];
                        "function" == typeof u && "function" == typeof d && i.test(d) ? s[o] = function (e, t) {
                            return function () {
                                var n = this.parent;
                                this.parent = t;
                                var a = e.apply(this, arguments);
                                return this.parent = n, a
                            }
                        }(d, u) : s[o] = d
                    }
                    s.typename = t;
                    var l = function () {
                        s.init && s.init.apply(this, arguments)
                    };
                    return l.prototype = s, l.prototype.constructor = l, l.extend = function (e, t) {
                        return "object" == typeof e && (t = e, e = "anonymous"), n(l, e, t)
                    }, l
                }

                e.exports = n(Object, "Object", {})
            }, function (e, t, n) {
                "use strict";

                function a(e, t) {
                    return null === e || void 0 === e || !1 === e ? t : e
                }

                var r = n(1), s = n(8), i = {
                    abs: function (e) {
                        return Math.abs(e)
                    },
                    batch: function (e, t, n) {
                        var a, r = [], s = [];
                        for (a = 0; a < e.length; a++) a % t == 0 && s.length && (r.push(s), s = []), s.push(e[a]);
                        if (s.length) {
                            if (n) for (a = s.length; a < t; a++) s.push(n);
                            r.push(s)
                        }
                        return r
                    },
                    capitalize: function (e) {
                        e = a(e, "");
                        var t = e.toLowerCase();
                        return s.copySafeness(e, t.charAt(0).toUpperCase() + t.slice(1))
                    },
                    center: function (e, t) {
                        if (e = a(e, ""), t = t || 80, e.length >= t) return e;
                        var n = t - e.length, i = r.repeat(" ", n / 2 - n % 2), o = r.repeat(" ", n / 2);
                        return s.copySafeness(e, i + e + o)
                    },
                    default: function (e, t, n) {
                        return n ? e || t : void 0 !== e ? e : t
                    },
                    dictsort: function (e, t, n) {
                        if (!r.isObject(e)) throw new r.TemplateError("dictsort filter: val must be an object");
                        var a = [];
                        for (var s in e) a.push([s, e[s]]);
                        var i;
                        if (void 0 === n || "key" === n) i = 0; else {
                            if ("value" !== n) throw new r.TemplateError("dictsort filter: You can only sort by either key or value");
                            i = 1
                        }
                        return a.sort(function (e, n) {
                            var a = e[i], s = n[i];
                            return t || (r.isString(a) && (a = a.toUpperCase()), r.isString(s) && (s = s.toUpperCase())), a > s ? 1 : a === s ? 0 : -1
                        }), a
                    },
                    dump: function (e) {
                        return JSON.stringify(e)
                    },
                    escape: function (e) {
                        return e instanceof s.SafeString ? e : (e = null === e || void 0 === e ? "" : e, s.markSafe(r.escape(e.toString())))
                    },
                    safe: function (e) {
                        return e instanceof s.SafeString ? e : (e = null === e || void 0 === e ? "" : e, s.markSafe(e.toString()))
                    },
                    first: function (e) {
                        return e[0]
                    },
                    groupby: function (e, t) {
                        return r.groupBy(e, t)
                    },
                    indent: function (e, t, n) {
                        if ("" === (e = a(e, ""))) return "";
                        t = t || 4;
                        for (var i = "", o = e.split("\n"), d = r.repeat(" ", t), u = 0; u < o.length; u++) i += 0 !== u || n ? d + o[u] + "\n" : o[u] + "\n";
                        return s.copySafeness(e, i)
                    },
                    join: function (e, t, n) {
                        return t = t || "", n && (e = r.map(e, function (e) {
                            return e[n]
                        })), e.join(t)
                    },
                    last: function (e) {
                        return e[e.length - 1]
                    },
                    length: function (e) {
                        var t = a(e, "");
                        return void 0 !== t ? "function" == typeof Map && t instanceof Map || "function" == typeof Set && t instanceof Set ? t.size : !r.isObject(t) || t instanceof s.SafeString ? t.length : Object.keys(t).length : 0
                    },
                    list: function (e) {
                        if (r.isString(e)) return e.split("");
                        if (r.isObject(e)) {
                            var t = [];
                            if (Object.keys) t = Object.keys(e); else for (var n in e) t.push(n);
                            return r.map(t, function (t) {
                                return {key: t, value: e[t]}
                            })
                        }
                        if (r.isArray(e)) return e;
                        throw new r.TemplateError("list filter: type not iterable")
                    },
                    lower: function (e) {
                        return e = a(e, ""), e.toLowerCase()
                    },
                    random: function (e) {
                        return e[Math.floor(Math.random() * e.length)]
                    },
                    rejectattr: function (e, t) {
                        return e.filter(function (e) {
                            return !e[t]
                        })
                    },
                    selectattr: function (e, t) {
                        return e.filter(function (e) {
                            return !!e[t]
                        })
                    },
                    replace: function (e, t, n, a) {
                        var r = e;
                        if (t instanceof RegExp) return e.replace(t, n);
                        void 0 === a && (a = -1);
                        var i = "";
                        if ("number" == typeof t) t += ""; else if ("string" != typeof t) return e;
                        if ("number" == typeof e && (e += ""), "string" != typeof e && !(e instanceof s.SafeString)) return e;
                        if ("" === t) return i = n + e.split("").join(n) + n, s.copySafeness(e, i);
                        var o = e.indexOf(t);
                        if (0 === a || -1 === o) return e;
                        for (var d = 0, u = 0; o > -1 && (-1 === a || u < a);) i += e.substring(d, o) + n, d = o + t.length, u++, o = e.indexOf(t, d);
                        return d < e.length && (i += e.substring(d)), s.copySafeness(r, i)
                    },
                    reverse: function (e) {
                        var t;
                        return t = r.isString(e) ? i.list(e) : r.map(e, function (e) {
                            return e
                        }), t.reverse(), r.isString(e) ? s.copySafeness(e, t.join("")) : t
                    },
                    round: function (e, t, n) {
                        t = t || 0;
                        var a = Math.pow(10, t);
                        return ("ceil" === n ? Math.ceil : "floor" === n ? Math.floor : Math.round)(e * a) / a
                    },
                    slice: function (e, t, n) {
                        for (var a = Math.floor(e.length / t), r = e.length % t, s = 0, i = [], o = 0; o < t; o++) {
                            var d = s + o * a;
                            o < r && s++;
                            var u = s + (o + 1) * a, l = e.slice(d, u);
                            n && o >= r && l.push(n), i.push(l)
                        }
                        return i
                    },
                    sum: function (e, t, n) {
                        var a = 0;
                        "number" == typeof n && (a += n), t && (e = r.map(e, function (e) {
                            return e[t]
                        }));
                        for (var s = 0; s < e.length; s++) a += e[s];
                        return a
                    },
                    sort: s.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function (e, t, n, a) {
                        return e = r.map(e, function (e) {
                            return e
                        }), e.sort(function (e, s) {
                            var i, o;
                            return a ? (i = e[a], o = s[a]) : (i = e, o = s), !n && r.isString(i) && r.isString(o) && (i = i.toLowerCase(), o = o.toLowerCase()), i < o ? t ? 1 : -1 : i > o ? t ? -1 : 1 : 0
                        }), e
                    }),
                    string: function (e) {
                        return s.copySafeness(e, e)
                    },
                    striptags: function (e, t) {
                        e = a(e, ""), t = t || !1;
                        var n = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, r = i.trim(e.replace(n, "")), o = "";
                        return o = t ? r.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, "\n").replace(/\n\n\n+/g, "\n\n") : r.replace(/\s+/gi, " "), s.copySafeness(e, o)
                    },
                    title: function (e) {
                        e = a(e, "");
                        for (var t = e.split(" "), n = 0; n < t.length; n++) t[n] = i.capitalize(t[n]);
                        return s.copySafeness(e, t.join(" "))
                    },
                    trim: function (e) {
                        return s.copySafeness(e, e.replace(/^\s*|\s*$/g, ""))
                    },
                    truncate: function (e, t, n, r) {
                        var i = e;
                        if (e = a(e, ""), t = t || 255, e.length <= t) return e;
                        if (n) e = e.substring(0, t); else {
                            var o = e.lastIndexOf(" ", t);
                            -1 === o && (o = t), e = e.substring(0, o)
                        }
                        return e += void 0 !== r && null !== r ? r : "...", s.copySafeness(i, e)
                    },
                    upper: function (e) {
                        return e = a(e, ""), e.toUpperCase()
                    },
                    urlencode: function (e) {
                        var t = encodeURIComponent;
                        if (r.isString(e)) return t(e);
                        var n;
                        if (r.isArray(e)) n = e.map(function (e) {
                            return t(e[0]) + "=" + t(e[1])
                        }); else {
                            n = [];
                            for (var a in e) e.hasOwnProperty(a) && n.push(t(a) + "=" + t(e[a]))
                        }
                        return n.join("&")
                    },
                    urlize: function (e, t, n) {
                        isNaN(t) && (t = 1 / 0);
                        var a = !0 === n ? ' rel="nofollow"' : "", r = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,
                            s = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, i = /^https?:\/\/.*$/,
                            o = /^www\./, d = /\.(?:org|net|com)(?:\:|\/|$)/;
                        return e.split(/(\s+)/).filter(function (e) {
                            return e && e.length
                        }).map(function (e) {
                            var n = e.match(r), u = n && n[1] || e;
                            return i.test(u) ? '<a href="' + u + '"' + a + ">" + u.substr(0, t) + "</a>" : o.test(u) ? '<a href="http://' + u + '"' + a + ">" + u.substr(0, t) + "</a>" : s.test(u) ? '<a href="mailto:' + u + '">' + u + "</a>" : d.test(u) ? '<a href="http://' + u + '"' + a + ">" + u.substr(0, t) + "</a>" : e
                        }).join("")
                    },
                    wordcount: function (e) {
                        e = a(e, "");
                        var t = e ? e.match(/\w+/g) : null;
                        return t ? t.length : null
                    },
                    float: function (e, t) {
                        var n = parseFloat(e);
                        return isNaN(n) ? t : n
                    },
                    int: function (e, t) {
                        var n = parseInt(e, 10);
                        return isNaN(n) ? t : n
                    }
                };
                i.d = i.default, i.e = i.escape, e.exports = i
            }, function (e, t, n) {
                "use strict";

                function a(e, t, n) {
                    return function () {
                        var a, r, o = i(arguments), d = s(arguments);
                        if (o > e.length) {
                            a = Array.prototype.slice.call(arguments, 0, e.length);
                            var u = Array.prototype.slice.call(arguments, a.length, o);
                            for (r = 0; r < u.length; r++) r < t.length && (d[t[r]] = u[r]);
                            a.push(d)
                        } else if (o < e.length) {
                            for (a = Array.prototype.slice.call(arguments, 0, o), r = o; r < e.length; r++) {
                                var l = e[r];
                                a.push(d[l]), delete d[l]
                            }
                            a.push(d)
                        } else a = arguments;
                        return n.apply(this, a)
                    }
                }

                function r(e) {
                    return e.__keywords = !0, e
                }

                function s(e) {
                    var t = e.length;
                    if (t) {
                        var n = e[t - 1];
                        if (n && n.hasOwnProperty("__keywords")) return n
                    }
                    return {}
                }

                function i(e) {
                    var t = e.length;
                    if (0 === t) return 0;
                    var n = e[t - 1];
                    return n && n.hasOwnProperty("__keywords") ? t - 1 : t
                }

                function o(e) {
                    return "string" != typeof e ? e : (this.val = e, void(this.length = e.length))
                }

                function d(e, t) {
                    return e instanceof o ? new o(t) : t.toString()
                }

                function u(e) {
                    var t = typeof e;
                    return "string" === t ? new o(e) : "function" !== t ? e : function () {
                        var t = e.apply(this, arguments);
                        return "string" == typeof t ? new o(t) : t
                    }
                }

                function l(e, t) {
                    return e = void 0 !== e && null !== e ? e : "", !t || e instanceof o || (e = M.escape(e.toString())), e
                }

                function _(e, t, n) {
                    if (null === e || void 0 === e) throw new M.TemplateError("attempted to output null or undefined value", t + 1, n + 1);
                    return e
                }

                function c(e, t) {
                    return e = e || {}, "function" == typeof e[t] ? function () {
                        return e[t].apply(e, arguments)
                    } : e[t]
                }

                function m(e, t, n, a) {
                    if (!e) throw new Error("Unable to call `" + t + "`, which is undefined or falsey");
                    if ("function" != typeof e) throw new Error("Unable to call `" + t + "`, which is not a function");
                    return e.apply(n, a)
                }

                function h(e, t, n) {
                    var a = t.lookup(n);
                    return void 0 !== a && null !== a ? a : e.lookup(n)
                }

                function f(e, t, n) {
                    return e.lineno ? e : new M.TemplateError(e, t, n)
                }

                function p(e, t, n, a) {
                    if (M.isArray(e)) {
                        var r = e.length;
                        M.asyncIter(e, function (e, a, s) {
                            switch (t) {
                                case 1:
                                    n(e, a, r, s);
                                    break;
                                case 2:
                                    n(e[0], e[1], a, r, s);
                                    break;
                                case 3:
                                    n(e[0], e[1], e[2], a, r, s);
                                    break;
                                default:
                                    e.push(a, s), n.apply(this, e)
                            }
                        }, a)
                    } else M.asyncFor(e, function (e, t, a, r, s) {
                        n(e, t, a, r, s)
                    }, a)
                }

                function y(e, t, n, a) {
                    function r(e, t) {
                        d++, o[e] = t, d === s && a(null, o.join(""))
                    }

                    var s, i, o, d = 0;
                    if (M.isArray(e)) if (s = e.length, o = new Array(s), 0 === s) a(null, ""); else for (i = 0; i < e.length; i++) {
                        var u = e[i];
                        switch (t) {
                            case 1:
                                n(u, i, s, r);
                                break;
                            case 2:
                                n(u[0], u[1], i, s, r);
                                break;
                            case 3:
                                n(u[0], u[1], u[2], i, s, r);
                                break;
                            default:
                                u.push(i, r), n.apply(this, u)
                        }
                    } else {
                        var l = M.keys(e);
                        if (s = l.length, o = new Array(s), 0 === s) a(null, ""); else for (i = 0; i < l.length; i++) {
                            var _ = l[i];
                            n(_, e[_], i, s, r)
                        }
                    }
                }

                var M = n(1), L = n(6), g = L.extend({
                    init: function (e, t) {
                        this.variables = {}, this.parent = e, this.topLevel = !1, this.isolateWrites = t
                    }, set: function (e, t, n) {
                        var a = e.split("."), r = this.variables, s = this;
                        if (n && (s = this.resolve(a[0], !0))) return void s.set(e, t);
                        for (var i = 0; i < a.length - 1; i++) {
                            var o = a[i];
                            r[o] || (r[o] = {}), r = r[o]
                        }
                        r[a[a.length - 1]] = t
                    }, get: function (e) {
                        var t = this.variables[e];
                        return void 0 !== t && null !== t ? t : null
                    }, lookup: function (e) {
                        var t = this.parent, n = this.variables[e];
                        return void 0 !== n && null !== n ? n : t && t.lookup(e)
                    }, resolve: function (e, t) {
                        var n = t && this.isolateWrites ? void 0 : this.parent, a = this.variables[e];
                        return void 0 !== a && null !== a ? this : n && n.resolve(e)
                    }, push: function (e) {
                        return new g(this, e)
                    }, pop: function () {
                        return this.parent
                    }
                });
                o.prototype = Object.create(String.prototype, {
                    length: {
                        writable: !0,
                        configurable: !0,
                        value: 0
                    }
                }), o.prototype.valueOf = function () {
                    return this.val
                }, o.prototype.toString = function () {
                    return this.val
                }, e.exports = {
                    Frame: g,
                    makeMacro: a,
                    makeKeywordArgs: r,
                    numArgs: i,
                    suppressValue: l,
                    ensureDefined: _,
                    memberLookup: c,
                    contextOrFrameLookup: h,
                    callWrap: m,
                    handleError: f,
                    isArray: M.isArray,
                    keys: M.keys,
                    SafeString: o,
                    copySafeness: d,
                    markSafe: u,
                    asyncEach: p,
                    asyncAll: y,
                    inOperator: M.inOperator
                }
            }, function (e, t) {
                "use strict";

                function n(e) {
                    var t = -1;
                    return {
                        current: null, reset: function () {
                            t = -1, this.current = null
                        }, next: function () {
                            return t++, t >= e.length && (t = 0), this.current = e[t], this.current
                        }
                    }
                }

                function a(e) {
                    e = e || ",";
                    var t = !0;
                    return function () {
                        var n = t ? "" : e;
                        return t = !1, n
                    }
                }

                function r() {
                    return {
                        range: function (e, t, n) {
                            void 0 === t ? (t = e, e = 0, n = 1) : n || (n = 1);
                            var a, r = [];
                            if (n > 0) for (a = e; a < t; a += n) r.push(a); else for (a = e; a > t; a += n) r.push(a);
                            return r
                        }, cycler: function () {
                            return n(Array.prototype.slice.call(arguments))
                        }, joiner: function (e) {
                            return a(e)
                        }
                    }
                }

                e.exports = r
            }, function (e, t, n) {
                "use strict";
                var a = n(11), r = a.extend({
                    init: function (e) {
                        this.precompiled = e || {}
                    }, getSource: function (e) {
                        return this.precompiled[e] ? {src: {type: "code", obj: this.precompiled[e]}, path: e} : null
                    }
                });
                e.exports = r
            }, function (e, t, n) {
                "use strict";
                var a = n(3), r = n(6), s = n(1), i = r.extend({
                    on: function (e, t) {
                        this.listeners = this.listeners || {}, this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t)
                    }, emit: function (e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        this.listeners && this.listeners[e] && s.each(this.listeners[e], function (e) {
                            e.apply(null, t)
                        })
                    }, resolve: function (e, t) {
                        return a.resolve(a.dirname(e), t)
                    }, isRelative: function (e) {
                        return 0 === e.indexOf("./") || 0 === e.indexOf("../")
                    }
                });
                e.exports = i
            }, function (e, t) {
                function n() {
                    "use strict";
                    var e = this.runtime, t = this.lib, n = e.contextOrFrameLookup;
                    e.contextOrFrameLookup = function (e, t, a) {
                        var r = n.apply(this, arguments);
                        if (void 0 === r) switch (a) {
                            case"True":
                                return !0;
                            case"False":
                                return !1;
                            case"None":
                                return null
                        }
                        return r
                    };
                    var a = e.memberLookup, r = {
                        pop: function (e) {
                            if (void 0 === e) return this.pop();
                            if (e >= this.length || e < 0) throw new Error("KeyError");
                            return this.splice(e, 1)
                        }, remove: function (e) {
                            for (var t = 0; t < this.length; t++) if (this[t] === e) return this.splice(t, 1);
                            throw new Error("ValueError")
                        }, count: function (e) {
                            for (var t = 0, n = 0; n < this.length; n++) this[n] === e && t++;
                            return t
                        }, index: function (e) {
                            var t;
                            if (-1 === (t = this.indexOf(e))) throw new Error("ValueError");
                            return t
                        }, find: function (e) {
                            return this.indexOf(e)
                        }, insert: function (e, t) {
                            return this.splice(e, 0, t)
                        }
                    }, s = {
                        items: function () {
                            var e = [];
                            for (var t in this) e.push([t, this[t]]);
                            return e
                        }, values: function () {
                            var e = [];
                            for (var t in this) e.push(this[t]);
                            return e
                        }, keys: function () {
                            var e = [];
                            for (var t in this) e.push(t);
                            return e
                        }, get: function (e, t) {
                            var n = this[e];
                            return void 0 === n && (n = t), n
                        }, has_key: function (e) {
                            return this.hasOwnProperty(e)
                        }, pop: function (e, t) {
                            var n = this[e];
                            if (void 0 === n && void 0 !== t) n = t; else {
                                if (void 0 === n) throw new Error("KeyError");
                                delete this[e]
                            }
                            return n
                        }, popitem: function () {
                            for (var e in this) {
                                var t = this[e];
                                return delete this[e], [e, t]
                            }
                            throw new Error("KeyError")
                        }, setdefault: function (e, t) {
                            return e in this ? this[e] : (void 0 === t && (t = null), this[e] = t)
                        }, update: function (e) {
                            for (var t in e) this[t] = e[t];
                            return null
                        }
                    };
                    s.iteritems = s.items, s.itervalues = s.values, s.iterkeys = s.keys, e.memberLookup = function (e, n, i) {
                        return e = e || {}, t.isArray(e) && r.hasOwnProperty(n) ? function () {
                            return r[n].apply(e, arguments)
                        } : t.isObject(e) && s.hasOwnProperty(n) ? function () {
                            return s[n].apply(e, arguments)
                        } : a.apply(this, arguments)
                    }
                }

                e.exports = n
            }])
        })
    }, 124: function (e, t, n) {
        "use strict";
        var a = n(9), r = n(1178);
        e.exports = function (e) {
            function t(e, t) {
                return e = encodeURIComponent(e), t = encodeURIComponent(t), e + "=" + t
            }

            Object.keys(r).forEach(function (t) {
                e.addFilter(t, r[t])
            }), e.addGlobal("assignQuery", function (e, n, a, r, s) {
                var i = !0, o = [];
                return r ? "string" == typeof r ? r += " offset" : "[object Array]" === Object.prototype.toString.call(r) && r.push("offset") : r = ["offset"], s = s || "", Object.keys(e).forEach(function (s) {
                    (!r || r.indexOf(s) < 0) && (n === s ? (i = !1, a && o.push(t(n, a))) : o.push(t(s, e[s])))
                }), i && a && o.push(t(n, a)), s && o.push(s), "?" + o.join("&")
            }), e.addFilter("venus", function (e, t, n) {
                return t = t || 160, n = n || 220, null == e ? e : (e = e.replace(/^http:/, "https:"), e = e.replace("/w.h/", "/"), (e = e.split("@")[0]) + "@" + t + "w_" + n + "h_1e_1c")
            }), e.addFilter("timeAgo", function (e) {
                var t = new Date - new Date(e), n = t / 1e3, r = n / 60, s = r / 60, i = s / 24;
                return i / 30 / 12 > 1 ? a(e).format("YYYY-MM-DD") : i > 5 ? a(e).format("MM-DD") : i > 1 ? parseInt(i, 10) + "天之前" : s > 1 ? parseInt(s, 10) + "小时前" : r > 1 ? parseInt(r, 10) + "分钟前" : "刚刚"
            }), e.addFilter("numcut", function (e) {
                return e >= 1e8 ? (e / 1e8).toFixed(2) + "亿" : e >= 1e5 ? (e / 1e4).toFixed(1) + "万" : e
            }), e.addFilter("defaultAvatar", function (e) {
                return e
            })
        }
    }, 125: function (e, t) {
        e.exports = function (e, t, n, a) {
            var r = n.root;
            n.root = function (e, t, n, s, i, o) {
                var d = e.getTemplate;
                e.getTemplate = function (e, t, r, s, i) {
                    "function" == typeof t && (i = t = !1);
                    var o = function (e) {
                        try {
                            return a[e]
                        } catch (t) {
                            if (n.get("_require")) return n.get("_require")(e);
                            console.warn('Could not load template "%s"', e)
                        }
                    }, d = o(e);
                    n.set("_require", o), t && d.compile(), i(null, d)
                }, r(e, t, n, s, i, function (t, n) {
                    e.getTemplate = d, o(t, n)
                })
            };
            var s = {obj: n, type: "code"};
            return new e.Template(s, t)
        }
    }, 1304: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA70lEQVQ4y6XPvUoDURDF8d/GVVD8KlRICm23Tq+diC8haGchdtr5AtZWPoK+hXVK4VoJ2ijigopiMCQ2N7CGXUnYU907c85/ZhIlCiHANE5wig4OcJ9l2R9vQ7U2sI8FbGK7zPQfoI1WfE9hbSxAXH8GO5iN5QHeJtmgjd3C/wuPZca0ZPocDtEstH7isFYIYTi0hzyJocVYfMceLjBfAPSR4zv+E3ziMsVyDMAZjkfCw1NXSi44SrGErVhYrTBWqdmYwFym17qAh7qAuzqALjp1AM+4GQUMxgz3cI3bFB8IsZHjBesVwT6ecIVzdH8BMa00dXqIgwUAAAAASUVORK5CYII="
    }, 210: function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0, get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, 212: function (e, t, n) {
        "use strict";

        function a() {
        }

        function r(e) {
            return function () {
                window.system && window.system.user ? e.apply(this, arguments) : a()
            }
        }

        function s(e) {
        }

        function i() {
        }

        t.__esModule = !0, t.login = a, t.checkLogin = r, t.logout = s, t.profile = i;
        var o = n(68), d = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(o), u = "", l = "/passport/login",
            _ = "", c = "/passport/logout";
        var m = function (e, t) {
            return 1
        };
        t.default = function (e, t) {
            (0, d.default)(".J-login").click(a), (0, d.default)(".J-logout").click(s), (0, d.default)(".has-login").click(i)
        }
    }, 23: function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            //n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, 395: function (e, t, n) {
        "use strict";

        function a(e) {
            e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1
        }

        function r(e) {
            if (d[e.keyCode]) return a(e), !1
        }

        function s() {
            window.onwheel = a, window.onmousewheel = document.onmousewheel = a, window.ontouchmove = a, document.onkeydown = r
        }

        function i() {
            window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
        }

        function o(e) {
            e.on("mousewheel", function (e) {
                var t = $(this);
                t.scrollTop(t.scrollTop() - e.originalEvent.wheelDelta)
            })
        }

        t.__esModule = !0, t.disableScroll = s, t.enableScroll = i, t.scrollItself = o;
        var d = {37: 1, 38: 1, 39: 1, 40: 1}
    }, 398: function (e, t, n) {
        "use strict";
        var a = {
            createCookieString: function (e, t, n) {
                n = n || {};
                var a = [e, encodeURIComponent(t)].join("="), r = n, s = r.expires, i = r.path, o = r.domain,
                    d = r.secure;
                return "number" == typeof s && (s = new Date((new Date).getTime() + 1e3 * s)), s instanceof Date && (a += "; expires=" + s.toUTCString()), i && (a += "; path=" + i), o && (a += "; domain=" + o), d && (a += "; secure"), a
            }, parseCookieString: function (e) {
                return e ? e.split(";").reduce(function (e, t) {
                    var n = t.split("=");
                    return e[n[0].trim()] = n[1].trim(), e
                }, {}) : {}
            }, get: function (e) {
                var t = this.parseCookieString(document.cookie);
                return decodeURIComponent(t[e])
            }, remove: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t.expires = t.expires || new Date(0), t.path = t.path || "/", this.set(e, "", t)
            }, removeFromAllDomain: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = []
                if (n.length >= 2 && isNaN(n[n.length - 1])) for (var r = 2; r <= n.length; r++) t.domain = n.slice(-r).join("."), a.remove(e, t);
                delete t.domain, a.remove(e, t)
            }, set: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                n.path = n.path || "/";
                var a = this.createCookieString(e, t, n);
                return document.cookie = a, a
            }
        };
        e.exports = a
    }, 399: function (e, t, n) {
        "use strict";

        function a(e) {
            var t, n = u.default.get("isWebp");
            null != n ? e(n) : (t = new Image, t.onload = function () {
                n = 1 === t.width ? 1 : 0, u.default.set("isWebp", n, {expires: 31536e3, domain: ""}), e(n)
            }, t.onerror = function () {
                u.default.set("isWebp", 0, {expires: 31536e3, domain: ""}), e(0)
            }, t.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=")
        }

        function r(e) {
            return null != o ? void(e && e(o)) : null != i ? void(e && i.push(e)) : (i = e ? [e] : [], void a(function (e) {
                if (o = 1 == e, null != i) {
                    for (var t = 0; t < i.length; t++) i[t](o);
                    i = null
                }
            }))
        }

        function s(e) {
            r(function (t) {
                function n(e) {
                    if (t) if (null == e || "" == e) e = ""; else {
                        var n = /\.(jpg|png|jpeg)/;
                        e = e.replace("/w.h/", "/"), -1 === e.indexOf(".webp") && (e.indexOf("p1.a.net") > -1 || e.indexOf("p0.a.net") > -1) && n.test(e) && (e = e.indexOf("@") > -1 ? e.replace("@", ".webp@") : e.concat(".webp"))
                    }
                    return e
                }

                e(n)
            })
        }

        t.__esModule = !0, t.detectQueue = r, t.default = s;
        var i, o, d = n(398), u = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(d)
    }, 68: function (e, t, n) {
        var a, r;
        /*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
        !function (t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function (n, s) {
            function i(e) {
                var t = !!e && "length" in e && e.length, n = pe.type(e);
                return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function o(e, t, n) {
                if (pe.isFunction(t)) return pe.grep(e, function (e, a) {
                    return !!t.call(e, a, e) !== n
                });
                if (t.nodeType) return pe.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (Te.test(t)) return pe.filter(t, e, n);
                    t = pe.filter(t, e)
                }
                return pe.grep(e, function (e) {
                    return pe.inArray(e, t) > -1 !== n
                })
            }

            function d(e, t) {
                do {
                    e = e[t]
                } while (e && 1 !== e.nodeType);
                return e
            }

            function u(e) {
                var t = {};
                return pe.each(e.match(je) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function l() {
                oe.addEventListener ? (oe.removeEventListener("DOMContentLoaded", _), n.removeEventListener("load", _)) : (oe.detachEvent("onreadystatechange", _), n.detachEvent("onload", _))
            }

            function _() {
                (oe.addEventListener || "load" === n.event.type || "complete" === oe.readyState) && (l(), pe.ready())
            }

            function c(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var a = "data-" + t.replace(We, "-$1").toLowerCase();
                    if ("string" == typeof(n = e.getAttribute(a))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Pe.test(n) ? pe.parseJSON(n) : n)
                        } catch (e) {
                        }
                        pe.data(e, t, n)
                    } else n = void 0
                }
                return n
            }

            function m(e) {
                var t;
                for (t in e) if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }

            function h(e, t, n, a) {
                if (Ae(e)) {
                    var r, s, i = pe.expando, o = e.nodeType, d = o ? pe.cache : e, u = o ? e[i] : e[i] && i;
                    if (u && d[u] && (a || d[u].data) || void 0 !== n || "string" != typeof t) return u || (u = o ? e[i] = ie.pop() || pe.guid++ : i), d[u] || (d[u] = o ? {} : {toJSON: pe.noop}), "object" != typeof t && "function" != typeof t || (a ? d[u] = pe.extend(d[u], t) : d[u].data = pe.extend(d[u].data, t)), s = d[u], a || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[pe.camelCase(t)] = n), "string" == typeof t ? null == (r = s[t]) && (r = s[pe.camelCase(t)]) : r = s, r
                }
            }

            function f(e, t, n) {
                if (Ae(e)) {
                    var a, r, s = e.nodeType, i = s ? pe.cache : e, o = s ? e[pe.expando] : pe.expando;
                    if (i[o]) {
                        if (t && (a = n ? i[o] : i[o].data)) {
                            pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in a ? t = [t] : (t = pe.camelCase(t), t = t in a ? [t] : t.split(" ")), r = t.length;
                            for (; r--;) delete a[t[r]];
                            if (n ? !m(a) : !pe.isEmptyObject(a)) return
                        }
                        (n || (delete i[o].data, m(i[o]))) && (s ? pe.cleanData([e], !0) : fe.deleteExpando || i != i.window ? delete i[o] : i[o] = void 0)
                    }
                }
            }

            function p(e, t, n, a) {
                var r, s = 1, i = 20, o = a ? function () {
                        return a.cur()
                    } : function () {
                        return pe.css(e, t, "")
                    }, d = o(), u = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                    l = (pe.cssNumber[t] || "px" !== u && +d) && Ce.exec(pe.css(e, t));
                if (l && l[3] !== u) {
                    u = u || l[3], n = n || [], l = +d || 1;
                    do {
                        s = s || ".5", l /= s, pe.style(e, t, l + u)
                    } while (s !== (s = o() / d) && 1 !== s && --i)
                }
                return n && (l = +l || +d || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], a && (a.unit = u, a.start = l, a.end = r)), r
            }

            function y(e) {
                var t = Ve.split("|"), n = e.createDocumentFragment();
                if (n.createElement) for (; t.length;) n.createElement(t.pop());
                return n
            }

            function M(e, t) {
                var n, a, r = 0,
                    s = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                if (!s) for (s = [], n = e.childNodes || e; null != (a = n[r]); r++) !t || pe.nodeName(a, t) ? s.push(a) : pe.merge(s, M(a, t));
                return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], s) : s
            }

            function L(e, t) {
                //for (var n, a = 0; null != (n = e[a]); a++) pe._data(n, "globalEval", !t || pe._data(t[a], "globalEval"))
            }

            function g(e) {
                Re.test(e.type) && (e.defaultChecked = e.checked)
            }

            function Y(e, t, n, a, r) {
                for (var s, i, o, d, u, l, _, c = e.length, m = y(t), h = [], f = 0; f < c; f++) if ((i = e[f]) || 0 === i) if ("object" === pe.type(i)) pe.merge(h, i.nodeType ? [i] : i); else if (Ge.test(i)) {
                    for (d = d || m.appendChild(t.createElement("div")), u = (Je.exec(i) || ["", ""])[1].toLowerCase(), _ = Be[u] || Be._default, d.innerHTML = _[1] + pe.htmlPrefilter(i) + _[2], s = _[0]; s--;) d = d.lastChild;
                    if (!fe.leadingWhitespace && Ue.test(i) && h.push(t.createTextNode(Ue.exec(i)[0])), !fe.tbody) for (i = "table" !== u || $e.test(i) ? "<table>" !== _[1] || $e.test(i) ? 0 : d : d.firstChild, s = i && i.childNodes.length; s--;) pe.nodeName(l = i.childNodes[s], "tbody") && !l.childNodes.length && i.removeChild(l);
                    for (pe.merge(h, d.childNodes), d.textContent = ""; d.firstChild;) d.removeChild(d.firstChild);
                    d = m.lastChild
                } else h.push(t.createTextNode(i));
                for (d && m.removeChild(d), fe.appendChecked || pe.grep(M(h, "input"), g), f = 0; i = h[f++];) if (a && pe.inArray(i, a) > -1) r && r.push(i); else if (o = pe.contains(i.ownerDocument, i), d = M(m.appendChild(i), "script"), o && L(d), n) for (s = 0; i = d[s++];) qe.test(i.type || "") && n.push(i);
                return d = null, m
            }

            function v() {
                return !0
            }

            function k() {
                return !1
            }

            function D() {
                try {
                    return oe.activeElement
                } catch (e) {
                }
            }

            function w(e, t, n, a, r, s) {
                var i, o;
                if ("object" == typeof t) {
                    "string" != typeof n && (a = a || n, n = void 0);
                    for (o in t) w(e, o, n, a, t[o], s);
                    return e
                }
                if (null == a && null == r ? (r = n, a = n = void 0) : null == r && ("string" == typeof n ? (r = a, a = void 0) : (r = a, a = n, n = void 0)), !1 === r) r = k; else if (!r) return e;
                return 1 === s && (i = r, r = function (e) {
                    return pe().off(e), i.apply(this, arguments)
                }, r.guid = i.guid || (i.guid = pe.guid++)), e.each(function () {
                    pe.event.add(this, t, r, a, n)
                })
            }

            function T(e, t) {
                return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function b(e) {
                return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
            }

            function S(e) {
                var t = it.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function x(e, t) {
                if (1 === t.nodeType && pe.hasData(e)) {
                    var n, a, r, s = pe._data(e), i = pe._data(t, s), o = s.events;
                    if (o) {
                        delete i.handle, i.events = {};
                        for (n in o) for (a = 0, r = o[n].length; a < r; a++) pe.event.add(t, n, o[n][a])
                    }
                    i.data && (i.data = pe.extend({}, i.data))
                }
            }

            function H(e, t) {
                var n, a, r;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !fe.noCloneEvent && t[pe.expando]) {
                        r = pe._data(t);
                        for (a in r.events) pe.removeEvent(t, a, r.handle);
                        t.removeAttribute(pe.expando)
                    }
                    "script" === n && t.text !== e.text ? (b(t).text = e.text, S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), fe.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Re.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
            }

            function j(e, t, n, a) {
                t = ue.apply([], t);
                var r, s, i, o, d, u, l = 0, _ = e.length, c = _ - 1, m = t[0], h = pe.isFunction(m);
                if (h || _ > 1 && "string" == typeof m && !fe.checkClone && st.test(m)) return e.each(function (r) {
                    var s = e.eq(r);
                    h && (t[0] = m.call(this, r, s.html())), j(s, t, n, a)
                });
                if (_ && (u = Y(t, e[0].ownerDocument, !1, e, a), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || a)) {
                    for (o = pe.map(M(u, "script"), b), i = o.length; l < _; l++) s = u, l !== c && (s = pe.clone(s, !0, !0), i && pe.merge(o, M(s, "script"))), n.call(e[l], s, l);
                    //if (i) for (d = o[o.length - 1].ownerDocument, pe.map(o, S), l = 0; l < i; l++) s = o[l], qe.test(s.type || "") && !pe._data(s, "globalEval") && pe.contains(d, s) && (s.src ? pe._evalUrl && pe._evalUrl(s.src) : pe.globalEval((s.text || s.textContent || s.innerHTML || "").replace(ot, "")));
                    u = r = null
                }
                return e
            }

            function E(e, t, n) {
                for (var a, r = t ? pe.filter(t, e) : e, s = 0; null != (a = r[s]); s++) n || 1 !== a.nodeType || pe.cleanData(M(a)), a.parentNode && (n && pe.contains(a.ownerDocument, a) && L(M(a, "script")), a.parentNode.removeChild(a));
                return e
            }

            function O(e, t) {
                var n = pe(t.createElement(e)).appendTo(t.body), a = pe.css(n[0], "display");
                return n.detach(), a
            }

            function A(e) {
                var t = oe, n = _t[e];
                return n || (n = O(e, t), "none" !== n && n || (lt = (lt || pe("<div frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), n = O(e, t), lt.detach()), _t[e] = n), n
            }

            function P(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function W(e) {
                if (e in Tt) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = wt.length; n--;) if ((e = wt[n] + t) in Tt) return e
            }

            function F(e, t) {
                for (var n, a, r, s = [], i = 0, o = e.length; i < o; i++) a = e[i], a.style && (s[i] = pe._data(a, "olddisplay"), n = a.style.display, t ? (s[i] || "none" !== n || (a.style.display = ""), "" === a.style.display && ze(a) && (s[i] = pe._data(a, "olddisplay", A(a.nodeName)))) : (r = ze(a), (n && "none" !== n || !r) && pe._data(a, "olddisplay", r ? n : pe.css(a, "display"))));
                for (i = 0; i < o; i++) a = e[i], a.style && (t && "none" !== a.style.display && "" !== a.style.display || (a.style.display = t ? s[i] || "" : "none"));
                return e
            }

            function C(e, t, n) {
                var a = vt.exec(t);
                return a ? Math.max(0, a[1] - (n || 0)) + (a[2] || "px") : t
            }

            function N(e, t, n, a, r) {
                for (var s = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, i = 0; s < 4; s += 2) "margin" === n && (i += pe.css(e, n + Ne[s], !0, r)), a ? ("content" === n && (i -= pe.css(e, "padding" + Ne[s], !0, r)), "margin" !== n && (i -= pe.css(e, "border" + Ne[s] + "Width", !0, r))) : (i += pe.css(e, "padding" + Ne[s], !0, r), "padding" !== n && (i += pe.css(e, "border" + Ne[s] + "Width", !0, r)));
                return i
            }

            function z(e, t, n) {
                var a = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, s = pt(e),
                    i = fe.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, s);
                if (r <= 0 || null == r) {
                    if (r = yt(e, t, s), (r < 0 || null == r) && (r = e.style[t]), mt.test(r)) return r;
                    a = i && (fe.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
                }
                return r + N(e, t, n || (i ? "border" : "content"), a, s) + "px"
            }

            function I(e, t, n, a, r) {
                return new I.prototype.init(e, t, n, a, r)
            }

            function R() {
                return n.setTimeout(function () {
                    bt = void 0
                }), bt = pe.now()
            }

            function J(e, t) {
                var n, a = {height: e}, r = 0;
                for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ne[r], a["margin" + n] = a["padding" + n] = e;
                return t && (a.opacity = a.width = e), a
            }

            function q(e, t, n) {
                for (var a, r = (B.tweeners[t] || []).concat(B.tweeners["*"]), s = 0, i = r.length; s < i; s++) if (a = r[s].call(n, t, e)) return a
            }

            function U(e, t, n) {
                var a, r, s, i, o, d, u, l = this, _ = {}, c = e.style, m = e.nodeType && ze(e),
                    h = pe._data(e, "fxshow");
                n.queue || (o = pe._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, d = o.empty.fire, o.empty.fire = function () {
                    o.unqueued || d()
                }), o.unqueued++, l.always(function () {
                    l.always(function () {
                        o.unqueued--, pe.queue(e, "fx").length || o.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], u = pe.css(e, "display"), "inline" === ("none" === u ? pe._data(e, "olddisplay") || A(e.nodeName) : u) && "none" === pe.css(e, "float") && (fe.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? c.zoom = 1 : c.display = "inline-block")), n.overflow && (c.overflow = "hidden", fe.shrinkWrapBlocks() || l.always(function () {
                    c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
                }));
                for (a in t) if (r = t[a], xt.exec(r)) {
                    if (delete t[a], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !h || void 0 === h[a]) continue;
                        m = !0
                    }
                    _[a] = h && h[a] || pe.style(e, a)
                } else u = void 0;
                if (pe.isEmptyObject(_)) "inline" === ("none" === u ? A(e.nodeName) : u) && (c.display = u); else {
                    h ? "hidden" in h && (m = h.hidden) : h = pe._data(e, "fxshow", {}), s && (h.hidden = !m), m ? pe(e).show() : l.done(function () {
                        pe(e).hide()
                    }), l.done(function () {
                        var t;
                        pe._removeData(e, "fxshow");
                        for (t in _) pe.style(e, t, _[t])
                    });
                    for (a in _) i = q(m ? h[a] : 0, a, l), a in h || (h[a] = i.start, m && (i.end = i.start, i.start = "width" === a || "height" === a ? 1 : 0))
                }
            }

            function V(e, t) {
                var n, a, r, s, i;
                for (n in e) if (a = pe.camelCase(n), r = t[a], s = e[n], pe.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== a && (e[a] = s, delete e[n]), (i = pe.cssHooks[a]) && "expand" in i) {
                    s = i.expand(s), delete e[a];
                    for (n in s) n in e || (e[n] = s[n], t[n] = r)
                } else t[a] = r
            }

            function B(e, t, n) {
                var a, r, s = 0, i = B.prefilters.length, o = pe.Deferred().always(function () {
                    delete d.elem
                }), d = function () {
                    if (r) return !1;
                    for (var t = bt || R(), n = Math.max(0, u.startTime + u.duration - t), a = n / u.duration || 0, s = 1 - a, i = 0, d = u.tweens.length; i < d; i++) u.tweens[i].run(s);
                    return o.notifyWith(e, [u, s, n]), s < 1 && d ? n : (o.resolveWith(e, [u]), !1)
                }, u = o.promise({
                    elem: e,
                    props: pe.extend({}, t),
                    opts: pe.extend(!0, {specialEasing: {}, easing: pe.easing._default}, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: bt || R(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var a = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(a), a
                    },
                    stop: function (t) {
                        var n = 0, a = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < a; n++) u.tweens[n].run(1);
                        return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this
                    }
                }), l = u.props;
                for (V(l, u.opts.specialEasing); s < i; s++) if (a = B.prefilters[s].call(u, e, l, u.opts)) return pe.isFunction(a.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(a.stop, a)), a;
                return pe.map(l, q, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), pe.fx.timer(pe.extend(d, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function G(e) {
                return pe.attr(e, "class") || ""
            }

            function $(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var a, r = 0, s = t.toLowerCase().match(je) || [];
                    if (pe.isFunction(n)) for (; a = s[r++];) "+" === a.charAt(0) ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
                }
            }

            function K(e, t, n, a) {
                function r(o) {
                    var d;
                    return s[o] = !0, pe.each(e[o] || [], function (e, o) {
                        var u = o(t, n, a);
                        return "string" != typeof u || i || s[u] ? i ? !(d = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                    }), d
                }

                var s = {}, i = e === en;
                return r(t.dataTypes[0]) || !s["*"] && r("*")
            }

            function Q(e, t) {
                var n, a, r = pe.ajaxSettings.flatOptions || {};
                for (a in t) void 0 !== t[a] && ((r[a] ? e : n || (n = {}))[a] = t[a]);
                return n && pe.extend(!0, e, n), e
            }

            function X(e, t, n) {
                for (var a, r, s, i, o = e.contents, d = e.dataTypes; "*" === d[0];) d.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r) for (i in o) if (o[i] && o[i].test(r)) {
                    d.unshift(i);
                    break
                }
                if (d[0] in n) s = d[0]; else {
                    for (i in n) {
                        if (!d[0] || e.converters[i + " " + d[0]]) {
                            s = i;
                            break
                        }
                        a || (a = i)
                    }
                    s = s || a
                }
                if (s) return s !== d[0] && d.unshift(s), n[s]
            }

            function Z(e, t, n, a) {
                var r, s, i, o, d, u = {}, l = e.dataTypes.slice();
                if (l[1]) for (i in e.converters) u[i.toLowerCase()] = e.converters[i];
                for (s = l.shift(); s;) if (e.responseFields[s] && (n[e.responseFields[s]] = t), !d && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = s, s = l.shift()) if ("*" === s) s = d; else if ("*" !== d && d !== s) {
                    if (!(i = u[d + " " + s] || u["* " + s])) for (r in u) if (o = r.split(" "), o[1] === s && (i = u[d + " " + o[0]] || u["* " + o[0]])) {
                        !0 === i ? i = u[r] : !0 !== u[r] && (s = o[0], l.unshift(o[1]));
                        break
                    }
                    if (!0 !== i) if (i && e.throws) t = i(t); else try {
                        t = i(t)
                    } catch (e) {
                        return {state: "parsererror", error: i ? e : "No conversion from " + d + " to " + s}
                    }
                }
                return {state: "success", data: t}
            }

            function ee(e) {
                return e.style && e.style.display || pe.css(e, "display")
            }

            function te(e) {
                if (!pe.contains(e.ownerDocument || oe, e)) return !0;
                for (; e && 1 === e.nodeType;) {
                    if ("none" === ee(e) || "hidden" === e.type) return !0;
                    e = e.parentNode
                }
                return !1
            }

            function ne(e, t, n, a) {
                var r;
                if (pe.isArray(t)) pe.each(t, function (t, r) {
                    n || sn.test(e) ? a(e, r) : ne(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, a)
                }); else if (n || "object" !== pe.type(t)) a(e, t); else for (r in t) ne(e + "[" + r + "]", t[r], n, a)
            }

            function ae() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {
                }
            }

            function re() {
                try {
                    return new n.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }

            function se(e) {
                return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
            }

            var ie = [], oe = n.document, de = ie.slice, ue = ie.concat, le = ie.push, _e = ie.indexOf, ce = {},
                me = ce.toString, he = ce.hasOwnProperty, fe = {}, pe = function (e, t) {
                    return new pe.fn.init(e, t)
                }, ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Me = /^-ms-/, Le = /-([\da-z])/gi, ge = function (e, t) {
                    return t.toUpperCase()
                };
            pe.fn = pe.prototype = {
                jquery: "1.12.4", constructor: pe, selector: "", length: 0, toArray: function () {
                    return de.call(this)
                }, get: function (e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : de.call(this)
                }, pushStack: function (e) {
                    var t = pe.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                }, each: function (e) {
                    return pe.each(this, e)
                }, map: function (e) {
                    return this.pushStack(pe.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, slice: function () {
                    return this.pushStack(de.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: le, sort: ie.sort, splice: ie.splice
            }, pe.extend = pe.fn.extend = function () {
                var e, t, n, a, r, s, i = arguments[0] || {}, o = 1, d = arguments.length, u = !1;
                for ("boolean" == typeof i && (u = i, i = arguments[o] || {}, o++), "object" == typeof i || pe.isFunction(i) || (i = {}), o === d && (i = this, o--); o < d; o++) if (null != (r = arguments[o])) for (a in r) e = i[a], n = r[a], i !== n && (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, s = e && pe.isArray(e) ? e : []) : s = e && pe.isPlainObject(e) ? e : {}, i[a] = pe.extend(u, s, n)) : void 0 !== n && (i[a] = n));
                return i
            }, pe.extend({
                expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {
                },
                isFunction: function (e) {
                    return "function" === pe.type(e)
                },
                isArray: Array.isArray || function (e) {
                    return "array" === pe.type(e)
                },
                isWindow: function (e) {
                    return null != e && e == e.window
                },
                isNumeric: function (e) {
                    var t = e && e.toString();
                    return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                isPlainObject: function (e) {
                    var t;
                    if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    if (!fe.ownFirst) for (t in e) return he.call(e, t);
                    for (t in e) ;
                    return void 0 === t || he.call(e, t)
                },
                type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ce[me.call(e)] || "object" : typeof e
                },
                globalEval: function (e) {
                    e && pe.trim(e) && (n.execScript || function (e) {
                        //n.eval.call(n, e)
                    })(e)
                },
                camelCase: function (e) {
                    return e.replace(Me, "ms-").replace(Le, ge)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t) {
                    var n, a = 0;
                    if (i(e)) for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++) ; else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
                    return e
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(ye, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    var a;
                    if (t) {
                        if (_e) return _e.call(t, e, n);
                        for (a = t.length, n = n ? n < 0 ? Math.max(0, a + n) : n : 0; n < a; n++) if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function (e, t) {
                    for (var n = +t.length, a = 0, r = e.length; a < n;) e[r++] = t[a++];
                    if (n !== n) for (; void 0 !== t[a];) e[r++] = t[a++];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    for (var a = [], r = 0, s = e.length, i = !n; r < s; r++) !t(e[r], r) !== i && a.push(e[r]);
                    return a
                },
                map: function (e, t, n) {
                    var a, r, s = 0, o = [];
                    if (i(e)) for (a = e.length; s < a; s++) null != (r = t(e[s], s, n)) && o.push(r); else for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
                    return ue.apply([], o)
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, a, r;
                    if ("string" == typeof t && (r = e[t], t = e, e = r), pe.isFunction(e)) return n = de.call(arguments, 2), a = function () {
                        return e.apply(t || this, n.concat(de.call(arguments)))
                    }, a.guid = e.guid = e.guid || pe.guid++, a
                },
                now: function () {
                    return +new Date
                },
                support: fe
            }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ie[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                ce["[object " + t + "]"] = t.toLowerCase()
            });
            var Ye = /*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
                function (e) {
                    function t(e, t, n, a) {
                        var r, s, i, o, u, _, c, m, h = t && t.ownerDocument, f = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
                        if (!a && ((t ? t.ownerDocument || t : C) !== H && x(t), t = t || H, E)) {
                            if (11 !== f && (_ = fe.exec(e))) if (r = _[1]) {
                                if (9 === f) {
                                    if (!(i = t.getElementById(r))) return n;
                                    if (i.id === r) return n.push(i), n
                                } else if (h && (i = h.getElementById(r)) && W(t, i) && i.id === r) return n.push(i), n
                            } else {
                                if (_[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = _[3]) && L.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                            }
                            if (L.qsa && !J[e + " "] && (!O || !O.test(e))) {
                                if (1 !== f) h = t, m = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((o = t.getAttribute("id")) ? o = o.replace(ye, "\\$&") : t.setAttribute("id", o = F), c = k(e), s = c.length, u = le.test(o) ? "#" + o : "[id='" + o + "']"; s--;) c[s] = u + " " + l(c[s]);
                                    m = c.join(","), h = pe.test(e) && d(t.parentNode) || t
                                }
                                if (m) try {
                                    return K.apply(n, h.querySelectorAll(m)), n
                                } catch (e) {
                                } finally {
                                    o === F && t.removeAttribute("id")
                                }
                            }
                        }
                        return w(e.replace(se, "$1"), t, n, a)
                    }

                    function n() {
                        function e(n, a) {
                            return t.push(n + " ") > g.cacheLength && delete e[t.shift()], e[n + " "] = a
                        }

                        var t = [];
                        return e
                    }

                    function a(e) {
                        return e[F] = !0, e
                    }

                    function r(e) {
                        var t = H.createElement("div");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function s(e, t) {
                        for (var n = e.split("|"), a = n.length; a--;) g.attrHandle[n[a]] = t
                    }

                    function i(e, t) {
                        var n = t && e,
                            a = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
                        if (a) return a;
                        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function o(e) {
                        return a(function (t) {
                            return t = +t, a(function (n, a) {
                                for (var r, s = e([], n.length, t), i = s.length; i--;) n[r = s[i]] && (n[r] = !(a[r] = n[r]))
                            })
                        })
                    }

                    function d(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }

                    function u() {
                    }

                    function l(e) {
                        for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
                        return a
                    }

                    function _(e, t, n) {
                        var a = t.dir, r = n && "parentNode" === a, s = z++;
                        return t.first ? function (t, n, s) {
                            for (; t = t[a];) if (1 === t.nodeType || r) return e(t, n, s)
                        } : function (t, n, i) {
                            var o, d, u, l = [N, s];
                            if (i) {
                                for (; t = t[a];) if ((1 === t.nodeType || r) && e(t, n, i)) return !0
                            } else for (; t = t[a];) if (1 === t.nodeType || r) {
                                if (u = t[F] || (t[F] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), (o = d[a]) && o[0] === N && o[1] === s) return l[2] = o[2];
                                if (d[a] = l, l[2] = e(t, n, i)) return !0
                            }
                        }
                    }

                    function c(e) {
                        return e.length > 1 ? function (t, n, a) {
                            for (var r = e.length; r--;) if (!e[r](t, n, a)) return !1;
                            return !0
                        } : e[0]
                    }

                    function m(e, n, a) {
                        for (var r = 0, s = n.length; r < s; r++) t(e, n[r], a);
                        return a
                    }

                    function h(e, t, n, a, r) {
                        for (var s, i = [], o = 0, d = e.length, u = null != t; o < d; o++) (s = e[o]) && (n && !n(s, a, r) || (i.push(s), u && t.push(o)));
                        return i
                    }

                    function f(e, t, n, r, s, i) {
                        return r && !r[F] && (r = f(r)), s && !s[F] && (s = f(s, i)), a(function (a, i, o, d) {
                            var u, l, _, c = [], f = [], p = i.length, y = a || m(t || "*", o.nodeType ? [o] : o, []),
                                M = !e || !a && t ? y : h(y, c, e, o, d), L = n ? s || (a ? e : p || r) ? [] : i : M;
                            if (n && n(M, L, o, d), r) for (u = h(L, f), r(u, [], o, d), l = u.length; l--;) (_ = u[l]) && (L[f[l]] = !(M[f[l]] = _));
                            if (a) {
                                if (s || e) {
                                    if (s) {
                                        for (u = [], l = L.length; l--;) (_ = L[l]) && u.push(M[l] = _);
                                        s(null, L = [], u, d)
                                    }
                                    for (l = L.length; l--;) (_ = L[l]) && (u = s ? X(a, _) : c[l]) > -1 && (a[u] = !(i[u] = _))
                                }
                            } else L = h(L === i ? L.splice(p, L.length) : L), s ? s(null, i, L, d) : K.apply(i, L)
                        })
                    }

                    function p(e) {
                        for (var t, n, a, r = e.length, s = g.relative[e[0].type], i = s || g.relative[" "], o = s ? 1 : 0, d = _(function (e) {
                            return e === t
                        }, i, !0), u = _(function (e) {
                            return X(t, e) > -1
                        }, i, !0), m = [function (e, n, a) {
                            var r = !s && (a || n !== T) || ((t = n).nodeType ? d(e, n, a) : u(e, n, a));
                            return t = null, r
                        }]; o < r; o++) if (n = g.relative[e[o].type]) m = [_(c(m), n)]; else {
                            if (n = g.filter[e[o].type].apply(null, e[o].matches), n[F]) {
                                for (a = ++o; a < r && !g.relative[e[a].type]; a++) ;
                                return f(o > 1 && c(m), o > 1 && l(e.slice(0, o - 1).concat({value: " " === e[o - 2].type ? "*" : ""})).replace(se, "$1"), n, o < a && p(e.slice(o, a)), a < r && p(e = e.slice(a)), a < r && l(e))
                            }
                            m.push(n)
                        }
                        return c(m)
                    }

                    function y(e, n) {
                        var r = n.length > 0, s = e.length > 0, i = function (a, i, o, d, u) {
                            var l, _, c, m = 0, f = "0", p = a && [], y = [], M = T, L = a || s && g.find.TAG("*", u),
                                Y = N += null == M ? 1 : Math.random() || .1, v = L.length;
                            for (u && (T = i === H || i || u); f !== v && null != (l = L[f]); f++) {
                                if (s && l) {
                                    for (_ = 0, i || l.ownerDocument === H || (x(l), o = !E); c = e[_++];) if (c(l, i || H, o)) {
                                        d.push(l);
                                        break
                                    }
                                    u && (N = Y)
                                }
                                r && ((l = !c && l) && m--, a && p.push(l))
                            }
                            if (m += f, r && f !== m) {
                                for (_ = 0; c = n[_++];) c(p, y, i, o);
                                if (a) {
                                    if (m > 0) for (; f--;) p[f] || y[f] || (y[f] = G.call(d));
                                    y = h(y)
                                }
                                K.apply(d, y), u && !a && y.length > 0 && m + n.length > 1 && t.uniqueSort(d)
                            }
                            return u && (N = Y, T = M), p
                        };
                        return r ? a(i) : i
                    }

                    var M, L, g, Y, v, k, D, w, T, b, S, x, H, j, E, O, A, P, W, F = "sizzle" + 1 * new Date,
                        C = e.document, N = 0, z = 0, I = n(), R = n(), J = n(), q = function (e, t) {
                            return e === t && (S = !0), 0
                        }, U = 1 << 31, V = {}.hasOwnProperty, B = [], G = B.pop, $ = B.push, K = B.push, Q = B.slice,
                        X = function (e, t) {
                            for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n;
                            return -1
                        },
                        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                        ae = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                        re = new RegExp(ee + "+", "g"),
                        se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                        ie = new RegExp("^" + ee + "*," + ee + "*"),
                        oe = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                        de = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ae),
                        le = new RegExp("^" + te + "$"), _e = {
                            ID: new RegExp("^#(" + te + ")"),
                            CLASS: new RegExp("^\\.(" + te + ")"),
                            TAG: new RegExp("^(" + te + "|[*])"),
                            ATTR: new RegExp("^" + ne),
                            PSEUDO: new RegExp("^" + ae),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + Z + ")$", "i"),
                            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                        }, ce = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
                        fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, pe = /[+~]/, ye = /'|\\/g,
                        Me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                        Le = function (e, t, n) {
                            var a = "0x" + t - 65536;
                            return a !== a || n ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
                        }, ge = function () {
                            x()
                        };
                    try {
                        K.apply(B = Q.call(C.childNodes), C.childNodes), B[C.childNodes.length].nodeType
                    } catch (e) {
                        K = {
                            apply: B.length ? function (e, t) {
                                $.apply(e, Q.call(t))
                            } : function (e, t) {
                                for (var n = e.length, a = 0; e[n++] = t[a++];) ;
                                e.length = n - 1
                            }
                        }
                    }
                    L = t.support = {}, v = t.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, x = t.setDocument = function (e) {
                        var t, n, a = e ? e.ownerDocument || e : C;
                        return a !== H && 9 === a.nodeType && a.documentElement ? (H = a, j = H.documentElement, E = !v(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ge, !1) : n.attachEvent && n.attachEvent("onunload", ge)), L.attributes = r(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), L.getElementsByTagName = r(function (e) {
                            return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
                        }), L.getElementsByClassName = he.test(H.getElementsByClassName), L.getById = r(function (e) {
                            return j.appendChild(e).id = F, !H.getElementsByName || !H.getElementsByName(F).length
                        }), L.getById ? (g.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && E) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }, g.filter.ID = function (e) {
                            var t = e.replace(Me, Le);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete g.find.ID, g.filter.ID = function (e) {
                            var t = e.replace(Me, Le);
                            return function (e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), g.find.TAG = L.getElementsByTagName ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : L.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, a = [], r = 0, s = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = s[r++];) 1 === n.nodeType && a.push(n);
                                return a
                            }
                            return s
                        }, g.find.CLASS = L.getElementsByClassName && function (e, t) {
                            if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                        }, A = [], O = [], (L.qsa = he.test(H.querySelectorAll)) && (r(function (e) {
                            j.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + F + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || O.push(".#.+[+~]")
                        }), r(function (e) {
                            var t = H.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                        })), (L.matchesSelector = he.test(P = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function (e) {
                            L.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), A.push("!=", ae)
                        }), O = O.length && new RegExp(O.join("|")), A = A.length && new RegExp(A.join("|")), t = he.test(j.compareDocumentPosition), W = t || he.test(j.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e, a = t && t.parentNode;
                            return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
                        } : function (e, t) {
                            if (t) for (; t = t.parentNode;) if (t === e) return !0;
                            return !1
                        }, q = t ? function (e, t) {
                            if (e === t) return S = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !L.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === C && W(C, e) ? -1 : t === H || t.ownerDocument === C && W(C, t) ? 1 : b ? X(b, e) - X(b, t) : 0 : 4 & n ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return S = !0, 0;
                            var n, a = 0, r = e.parentNode, s = t.parentNode, o = [e], d = [t];
                            if (!r || !s) return e === H ? -1 : t === H ? 1 : r ? -1 : s ? 1 : b ? X(b, e) - X(b, t) : 0;
                            if (r === s) return i(e, t);
                            for (n = e; n = n.parentNode;) o.unshift(n);
                            for (n = t; n = n.parentNode;) d.unshift(n);
                            for (; o[a] === d[a];) a++;
                            return a ? i(o[a], d[a]) : o[a] === C ? -1 : d[a] === C ? 1 : 0
                        }, H) : H
                    }, t.matches = function (e, n) {
                        return t(e, null, null, n)
                    }, t.matchesSelector = function (e, n) {
                        if ((e.ownerDocument || e) !== H && x(e), n = n.replace(de, "='$1']"), L.matchesSelector && E && !J[n + " "] && (!A || !A.test(n)) && (!O || !O.test(n))) try {
                            var a = P.call(e, n);
                            if (a || L.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
                        } catch (e) {
                        }
                        return t(n, H, null, [e]).length > 0
                    }, t.contains = function (e, t) {
                        return (e.ownerDocument || e) !== H && x(e), W(e, t)
                    }, t.attr = function (e, t) {
                        (e.ownerDocument || e) !== H && x(e);
                        var n = g.attrHandle[t.toLowerCase()],
                            a = n && V.call(g.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                        return void 0 !== a ? a : L.attributes || !E ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
                    }, t.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, t.uniqueSort = function (e) {
                        var t, n = [], a = 0, r = 0;
                        if (S = !L.detectDuplicates, b = !L.sortStable && e.slice(0), e.sort(q), S) {
                            for (; t = e[r++];) t === e[r] && (a = n.push(r));
                            for (; a--;) e.splice(n[a], 1)
                        }
                        return b = null, e
                    }, Y = t.getText = function (e) {
                        var t, n = "", a = 0, r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += Y(e)
                            } else if (3 === r || 4 === r) return e.nodeValue
                        } else for (; t = e[a++];) n += Y(t);
                        return n
                    }, g = t.selectors = {
                        cacheLength: 50,
                        createPseudo: a,
                        match: _e,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {dir: "parentNode", first: !0},
                            " ": {dir: "parentNode"},
                            "+": {dir: "previousSibling", first: !0},
                            "~": {dir: "previousSibling"}
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(Me, Le), e[3] = (e[3] || e[4] || e[5] || "").replace(Me, Le), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            }, CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                            }, PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return _e.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(Me, Le).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            }, CLASS: function (e) {
                                var t = I[e + " "];
                                return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && I(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            }, ATTR: function (e, n, a) {
                                return function (r) {
                                    var s = t.attr(r, e);
                                    return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === a : "!=" === n ? s !== a : "^=" === n ? a && 0 === s.indexOf(a) : "*=" === n ? a && s.indexOf(a) > -1 : "$=" === n ? a && s.slice(-a.length) === a : "~=" === n ? (" " + s.replace(re, " ") + " ").indexOf(a) > -1 : "|=" === n && (s === a || s.slice(0, a.length + 1) === a + "-"))
                                }
                            }, CHILD: function (e, t, n, a, r) {
                                var s = "nth" !== e.slice(0, 3), i = "last" !== e.slice(-4), o = "of-type" === t;
                                return 1 === a && 0 === r ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, d) {
                                    var u, l, _, c, m, h, f = s !== i ? "nextSibling" : "previousSibling",
                                        p = t.parentNode, y = o && t.nodeName.toLowerCase(), M = !d && !o, L = !1;
                                    if (p) {
                                        if (s) {
                                            for (; f;) {
                                                for (c = t; c = c[f];) if (o ? c.nodeName.toLowerCase() === y : 1 === c.nodeType) return !1;
                                                h = f = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [i ? p.firstChild : p.lastChild], i && M) {
                                            for (c = p, _ = c[F] || (c[F] = {}), l = _[c.uniqueID] || (_[c.uniqueID] = {}), u = l[e] || [], m = u[0] === N && u[1], L = m && u[2], c = m && p.childNodes[m]; c = ++m && c && c[f] || (L = m = 0) || h.pop();) if (1 === c.nodeType && ++L && c === t) {
                                                l[e] = [N, m, L];
                                                break
                                            }
                                        } else if (M && (c = t, _ = c[F] || (c[F] = {}), l = _[c.uniqueID] || (_[c.uniqueID] = {}), u = l[e] || [], m = u[0] === N && u[1], L = m), !1 === L) for (; (c = ++m && c && c[f] || (L = m = 0) || h.pop()) && ((o ? c.nodeName.toLowerCase() !== y : 1 !== c.nodeType) || !++L || (M && (_ = c[F] || (c[F] = {}), l = _[c.uniqueID] || (_[c.uniqueID] = {}), l[e] = [N, L]), c !== t));) ;
                                        return (L -= r) === a || L % a == 0 && L / a >= 0
                                    }
                                }
                            }, PSEUDO: function (e, n) {
                                var r,
                                    s = g.pseudos[e] || g.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                return s[F] ? s(n) : s.length > 1 ? (r = [e, e, "", n], g.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function (e, t) {
                                    for (var a, r = s(e, n), i = r.length; i--;) a = X(e, r[i]), e[a] = !(t[a] = r[i])
                                }) : function (e) {
                                    return s(e, 0, r)
                                }) : s
                            }
                        },
                        pseudos: {
                            not: a(function (e) {
                                var t = [], n = [], r = D(e.replace(se, "$1"));
                                return r[F] ? a(function (e, t, n, a) {
                                    for (var s, i = r(e, null, a, []), o = e.length; o--;) (s = i[o]) && (e[o] = !(t[o] = s))
                                }) : function (e, a, s) {
                                    return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                                }
                            }), has: a(function (e) {
                                return function (n) {
                                    return t(e, n).length > 0
                                }
                            }), contains: a(function (e) {
                                return e = e.replace(Me, Le), function (t) {
                                    return (t.textContent || t.innerText || Y(t)).indexOf(e) > -1
                                }
                            }), lang: a(function (e) {
                                return le.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Me, Le).toLowerCase(), function (t) {
                                    var n;
                                    do {
                                        if (n = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            }), target: function (t) {
                                return false
                            }, root: function (e) {
                                return e === j
                            }, focus: function (e) {
                                return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            }, enabled: function (e) {
                                return !1 === e.disabled
                            }, disabled: function (e) {
                                return !0 === e.disabled
                            }, checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            }, selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            }, empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0
                            }, parent: function (e) {
                                return !g.pseudos.empty(e)
                            }, header: function (e) {
                                return me.test(e.nodeName)
                            }, input: function (e) {
                                return ce.test(e.nodeName)
                            }, button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            }, text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            }, first: o(function () {
                                return [0]
                            }), last: o(function (e, t) {
                                return [t - 1]
                            }), eq: o(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }), even: o(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }), odd: o(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }), lt: o(function (e, t, n) {
                                for (var a = n < 0 ? n + t : n; --a >= 0;) e.push(a);
                                return e
                            }), gt: o(function (e, t, n) {
                                for (var a = n < 0 ? n + t : n; ++a < t;) e.push(a);
                                return e
                            })
                        }
                    }, g.pseudos.nth = g.pseudos.eq;
                    for (M in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) g.pseudos[M] = function (e) {
                        return function (t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }(M);
                    for (M in{submit: !0, reset: !0}) g.pseudos[M] = function (e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }(M);
                    return u.prototype = g.filters = g.pseudos, g.setFilters = new u, k = t.tokenize = function (e, n) {
                        var a, r, s, i, o, d, u, l = R[e + " "];
                        if (l) return n ? 0 : l.slice(0);
                        for (o = e, d = [], u = g.preFilter; o;) {
                            a && !(r = ie.exec(o)) || (r && (o = o.slice(r[0].length) || o), d.push(s = [])), a = !1, (r = oe.exec(o)) && (a = r.shift(), s.push({
                                value: a,
                                type: r[0].replace(se, " ")
                            }), o = o.slice(a.length));
                            for (i in g.filter) !(r = _e[i].exec(o)) || u[i] && !(r = u[i](r)) || (a = r.shift(), s.push({
                                value: a,
                                type: i,
                                matches: r
                            }), o = o.slice(a.length));
                            if (!a) break
                        }
                        return n ? o.length : o ? t.error(e) : R(e, d).slice(0)
                    }, D = t.compile = function (e, t) {
                        var n, a = [], r = [], s = J[e + " "];
                        if (!s) {
                            for (t || (t = k(e)), n = t.length; n--;) s = p(t[n]), s[F] ? a.push(s) : r.push(s);
                            s = J(e, y(r, a)), s.selector = e
                        }
                        return s
                    }, w = t.select = function (e, t, n, a) {
                        var r, s, i, o, u, _ = "function" == typeof e && e, c = !a && k(e = _.selector || e);
                        if (n = n || [], 1 === c.length) {
                            if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (i = s[0]).type && L.getById && 9 === t.nodeType && E && g.relative[s[1].type]) {
                                if (!(t = (g.find.ID(i.matches[0].replace(Me, Le), t) || [])[0])) return n;
                                _ && (t = t.parentNode), e = e.slice(s.shift().value.length)
                            }
                            for (r = _e.needsContext.test(e) ? 0 : s.length; r-- && (i = s[r], !g.relative[o = i.type]);) if ((u = g.find[o]) && (a = u(i.matches[0].replace(Me, Le), pe.test(s[0].type) && d(t.parentNode) || t))) {
                                if (s.splice(r, 1), !(e = a.length && l(s))) return K.apply(n, a), n;
                                break
                            }
                        }
                        return (_ || D(e, c))(a, t, !E, n, !t || pe.test(e) && d(t.parentNode) || t), n
                    }, L.sortStable = F.split("").sort(q).join("") === F, L.detectDuplicates = !!S, x(), L.sortDetached = r(function (e) {
                        return 1 & e.compareDocumentPosition(H.createElement("div"))
                    }), r(function (e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    }) || s("type|href|height|width", function (e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }), L.attributes && r(function (e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }) || s("value", function (e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    }), r(function (e) {
                        return null == e.getAttribute("disabled")
                    }) || s(Z, function (e, t, n) {
                        var a;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
                    }), t
                }(n);
            pe.find = Ye, pe.expr = Ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = Ye.uniqueSort, pe.text = Ye.getText, pe.isXMLDoc = Ye.isXML, pe.contains = Ye.contains;
            var ve = function (e, t, n) {
                for (var a = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                    if (r && pe(e).is(n)) break;
                    a.push(e)
                }
                return a
            }, ke = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }, De = pe.expr.match.needsContext, we = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Te = /^.[^:#\[\.,]*$/;
            pe.filter = function (e, t, n) {
                var a = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? pe.find.matchesSelector(a, e) ? [a] : [] : pe.find.matches(e, pe.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, pe.fn.extend({
                find: function (e) {
                    var t, n = [], a = this, r = a.length;
                    if ("string" != typeof e) return this.pushStack(pe(e).filter(function () {
                        for (t = 0; t < r; t++) if (pe.contains(a[t], this)) return !0
                    }));
                    for (t = 0; t < r; t++) pe.find(e, a[t], n);
                    return n = this.pushStack(r > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                }, filter: function (e) {
                    return this.pushStack(o(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(o(this, e || [], !0))
                }, is: function (e) {
                    return !!o(this, "string" == typeof e && De.test(e) ? pe(e) : e || [], !1).length
                }
            });
            var be, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (pe.fn.init = function (e, t, n) {
                var a, r;
                if (!e) return this;
                if (n = n || be, "string" == typeof e) {
                    if (!(a = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (a[1]) {
                        if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : oe, !0)), we.test(a[1]) && pe.isPlainObject(t)) for (a in t) pe.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                        return this
                    }
                    if ((r = oe.getElementById(a[2])) && r.parentNode) {
                        if (r.id !== a[2]) return be.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = oe, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
            }).prototype = pe.fn, be = pe(oe);
            var xe = /^(?:parents|prev(?:Until|All))/, He = {children: !0, contents: !0, next: !0, prev: !0};
            pe.fn.extend({
                has: function (e) {
                    var t, n = pe(e, this), a = n.length;
                    return this.filter(function () {
                        for (t = 0; t < a; t++) if (pe.contains(this, n[t])) return !0
                    })
                }, closest: function (e, t) {
                    for (var n, a = 0, r = this.length, s = [], i = De.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; a < r; a++) for (n = this[a]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
                    return this.pushStack(s.length > 1 ? pe.uniqueSort(s) : s)
                }, index: function (e) {
                    return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), pe.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return ve(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return ve(e, "parentNode", n)
                }, next: function (e) {
                    return d(e, "nextSibling")
                }, prev: function (e) {
                    return d(e, "previousSibling")
                }, nextAll: function (e) {
                    return ve(e, "nextSibling")
                }, prevAll: function (e) {
                    return ve(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return ve(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return ve(e, "previousSibling", n)
                }, siblings: function (e) {
                    return ke((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return ke(e.firstChild)
                }, contents: function (e) {
                    return pe.nodeName(e, "div") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
                }
            }, function (e, t) {
                pe.fn[e] = function (n, a) {
                    var r = pe.map(this, t, n);
                    return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (r = pe.filter(a, r)), this.length > 1 && (He[e] || (r = pe.uniqueSort(r)), xe.test(e) && (r = r.reverse())), this.pushStack(r)
                }
            });
            var je = /\S+/g;
            pe.Callbacks = function (e) {
                e = "string" == typeof e ? u(e) : pe.extend({}, e);
                var t, n, a, r, s = [], i = [], o = -1, d = function () {
                    for (r = e.once, a = t = !0; i.length; o = -1) for (n = i.shift(); ++o < s.length;) !1 === s[o].apply(n[0], n[1]) && e.stopOnFalse && (o = s.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
                }, l = {
                    add: function () {
                        return s && (n && !t && (o = s.length - 1, i.push(n)), function t(n) {
                            pe.each(n, function (n, a) {
                                pe.isFunction(a) ? e.unique && l.has(a) || s.push(a) : a && a.length && "string" !== pe.type(a) && t(a)
                            })
                        }(arguments), n && !t && d()), this
                    }, remove: function () {
                        return pe.each(arguments, function (e, t) {
                            for (var n; (n = pe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= o && o--
                        }), this
                    }, has: function (e) {
                        return e ? pe.inArray(e, s) > -1 : s.length > 0
                    }, empty: function () {
                        return s && (s = []), this
                    }, disable: function () {
                        return r = i = [], s = n = "", this
                    }, disabled: function () {
                        return !s
                    }, lock: function () {
                        return r = !0, n || l.disable(), this
                    }, locked: function () {
                        return !!r
                    }, fireWith: function (e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], i.push(n), t || d()), this
                    }, fire: function () {
                        return l.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!a
                    }
                };
                return l
            }, pe.extend({
                Deferred: function (e) {
                    var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]],
                        n = "pending", a = {
                            state: function () {
                                return n
                            }, always: function () {
                                return r.done(arguments).fail(arguments), this
                            }, then: function () {
                                var e = arguments;
                                return pe.Deferred(function (n) {
                                    pe.each(t, function (t, s) {
                                        var i = pe.isFunction(e[t]) && e[t];
                                        r[s[1]](function () {
                                            var e = i && i.apply(this, arguments);
                                            e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === a ? n.promise() : this, i ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            }, promise: function (e) {
                                return null != e ? pe.extend(e, a) : a
                            }
                        }, r = {};
                    return a.pipe = a.then, pe.each(t, function (e, s) {
                        var i = s[2], o = s[3];
                        a[s[1]] = i.add, o && i.add(function () {
                            n = o
                        }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function () {
                            return r[s[0] + "With"](this === r ? a : this, arguments), this
                        }, r[s[0] + "With"] = i.fireWith
                    }), a.promise(r), e && e.call(r, r), r
                }, when: function (e) {
                    var t, n, a, r = 0, s = de.call(arguments), i = s.length,
                        o = 1 !== i || e && pe.isFunction(e.promise) ? i : 0, d = 1 === o ? e : pe.Deferred(),
                        u = function (e, n, a) {
                            return function (r) {
                                n[e] = this, a[e] = arguments.length > 1 ? de.call(arguments) : r, a === t ? d.notifyWith(n, a) : --o || d.resolveWith(n, a)
                            }
                        };
                    if (i > 1) for (t = new Array(i), n = new Array(i), a = new Array(i); r < i; r++) s[r] && pe.isFunction(s[r].promise) ? s[r].promise().progress(u(r, n, t)).done(u(r, a, s)).fail(d.reject) : --o;
                    return o || d.resolveWith(a, s), d.promise()
                }
            });
            var Ee;
            pe.fn.ready = function (e) {
                return pe.ready.promise().done(e), this
            }, pe.extend({
                isReady: !1, readyWait: 1, holdReady: function (e) {
                    e ? pe.readyWait++ : pe.ready(!0)
                }, ready: function (e) {
                    (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (Ee.resolveWith(oe, [pe]), pe.fn.triggerHandler && (pe(oe).triggerHandler("ready"), pe(oe).off("ready"))))
                }
            }), pe.ready.promise = function (e) {
                if (!Ee) if (Ee = pe.Deferred(), "complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll) n.setTimeout(pe.ready); else if (oe.addEventListener) oe.addEventListener("DOMContentLoaded", _), n.addEventListener("load", _); else {
                    oe.attachEvent("onreadystatechange", _), n.attachEvent("onload", _);
                    var t = !1;
                    try {
                        t = null == n.frameElement && oe.documentElement
                    } catch (e) {
                    }
                    t && t.doScroll && function e() {
                        if (!pe.isReady) {
                            try {
                                t.doScroll("left")
                            } catch (t) {
                                return n.setTimeout(e, 50)
                            }
                            l(), pe.ready()
                        }
                    }()
                }
                return Ee.promise(e)
            }, pe.ready.promise();
            var Oe;
            for (Oe in pe(fe)) break;
            fe.ownFirst = "0" === Oe, fe.inlineBlockNeedsLayout = !1, pe(function () {
                var e, t, n, a;
                (n = oe.getElementsByTagName("body")[0]) && n.style && (t = oe.createElement("div"), a = oe.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(a).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", fe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(a))
            }), function () {
                var e = oe.createElement("div");
                fe.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    fe.deleteExpando = !1
                }
                e = null
            }();
            var Ae = function (e) {
                var t = pe.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            }, Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, We = /([A-Z])/g;
            pe.extend({
                cache: {},
                noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
                hasData: function (e) {
                    return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !m(e)
                },
                data: function (e, t, n) {
                    return h(e, t, n)
                },
                removeData: function (e, t) {
                    return f(e, t)
                },
                _data: function (e, t, n) {
                    return h(e, t, n, !0)
                },
                _removeData: function (e, t) {
                    return f(e, t, !0)
                }
            }), pe.fn.extend({
                data: function (e, t) {
                    var n, a, r, s = this[0], i = s && s.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = pe.data(s), 1 === s.nodeType && !pe._data(s, "parsedAttrs"))) {
                            for (n = i.length; n--;) i[n] && (a = i[n].name, 0 === a.indexOf("data-") && (a = pe.camelCase(a.slice(5)), c(s, a, r[a])));
                            pe._data(s, "parsedAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each(function () {
                        pe.data(this, e)
                    }) : arguments.length > 1 ? this.each(function () {
                        pe.data(this, e, t)
                    }) : s ? c(s, e, pe.data(s, e)) : void 0
                }, removeData: function (e) {
                    return this.each(function () {
                        pe.removeData(this, e)
                    })
                }
            }), pe.extend({
                queue: function (e, t, n) {
                    var a;
                    if (e) return t = (t || "fx") + "queue", a = pe._data(e, t), n && (!a || pe.isArray(n) ? a = pe._data(e, t, pe.makeArray(n)) : a.push(n)), a || []
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = pe.queue(e, t), a = n.length, r = n.shift(), s = pe._queueHooks(e, t), i = function () {
                        pe.dequeue(e, t)
                    };
                    "inprogress" === r && (r = n.shift(), a--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, i, s)), !a && s && s.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return pe._data(e, n) || pe._data(e, n, {
                        empty: pe.Callbacks("once memory").add(function () {
                            pe._removeData(e, t + "queue"), pe._removeData(e, n)
                        })
                    })
                }
            }), pe.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = pe.queue(this, e, t);
                        pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                    })
                }, dequeue: function (e) {
                    return this.each(function () {
                        pe.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, a = 1, r = pe.Deferred(), s = this, i = this.length, o = function () {
                        --a || r.resolveWith(s, [s])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;) (n = pe._data(s[i], e + "queueHooks")) && n.empty && (a++, n.empty.add(o));
                    return o(), r.promise(t)
                }
            }), function () {
                var e;
                fe.shrinkWrapBlocks = function () {
                    if (null != e) return e;
                    e = !1;
                    var t, n, a;
                    return (n = oe.getElementsByTagName("body")[0]) && n.style ? (t = oe.createElement("div"), a = oe.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(a).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(oe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(a), e) : void 0
                }
            }();
            var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ce = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"), Ne = ["Top", "Right", "Bottom", "Left"],
                ze = function (e, t) {
                    return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
                }, Ie = function (e, t, n, a, r, s, i) {
                    var o = 0, d = e.length, u = null == n;
                    if ("object" === pe.type(n)) {
                        r = !0;
                        for (o in n) Ie(e, t, o, n[o], !0, s, i)
                    } else if (void 0 !== a && (r = !0, pe.isFunction(a) || (i = !0), u && (i ? (t.call(e, a), t = null) : (u = t, t = function (e, t, n) {
                        return u.call(pe(e), n)
                    })), t)) for (; o < d; o++) t(e[o], n, i ? a : a.call(e[o], o, t(e[o], n)));
                    return r ? e : u ? t.call(e) : d ? t(e[0], n) : s
                }, Re = /^(?:checkbox|radio)$/i, Je = /<([\w:-]+)/, qe = /^$|\/(?:java|ecma)script/i, Ue = /^\s+/,
                Ve = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            !function () {
                var e = oe.createElement("div"), t = oe.createDocumentFragment(), n = oe.createElement("input");
                e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", fe.leadingWhitespace = 3 === e.firstChild.nodeType, fe.tbody = !e.getElementsByTagName("tbody").length, fe.htmlSerialize = !!e.getElementsByTagName("link").length, fe.html5Clone = "<:nav></:nav>" !== oe.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), fe.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = oe.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, fe.attributes = !e.getAttribute(pe.expando)
            }();
            var Be = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: fe.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td;
            var Ge = /<|&#?\w+;/, $e = /<tbody/i;
            !function () {
                var e, t, a = oe.createElement("div");
                for (e in{
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (fe[e] = t in n) || (a.setAttribute(t, "t"), fe[e] = !1 === a.attributes[t].expando);
                a = null
            }();
            var Ke = /^(?:input|select|textarea)$/i, Qe = /^key/, Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ze = /^(?:focusinfocus|focusoutblur)$/, et = /^([^.]*)(?:\.(.+)|)/;
            pe.event = {
                global: {},
                add: function (e, t, n, a, r) {
                    var s, i, o, d, u, l, _, c, m, h, f, p = pe._data(e);
                    if (p) {
                        for (n.handler && (d = n, n = d.handler, r = d.selector), n.guid || (n.guid = pe.guid++), (i = p.events) || (i = p.events = {}), (l = p.handle) || (l = p.handle = function (e) {
                            return void 0 === pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(l.elem, arguments)
                        }, l.elem = e), t = (t || "").match(je) || [""], o = t.length; o--;) s = et.exec(t[o]) || [], m = f = s[1], h = (s[2] || "").split(".").sort(), m && (u = pe.event.special[m] || {}, m = (r ? u.delegateType : u.bindType) || m, u = pe.event.special[m] || {}, _ = pe.extend({
                            type: m,
                            origType: f,
                            data: a,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && pe.expr.match.needsContext.test(r),
                            namespace: h.join(".")
                        }, d), (c = i[m]) || (c = i[m] = [], c.delegateCount = 0, u.setup && !1 !== u.setup.call(e, a, h, l) || (e.addEventListener ? e.addEventListener(m, l, !1) : e.attachEvent && e.attachEvent("on" + m, l))), u.add && (u.add.call(e, _), _.handler.guid || (_.handler.guid = n.guid)), r ? c.splice(c.delegateCount++, 0, _) : c.push(_), pe.event.global[m] = !0);
                        e = null
                    }
                },
                remove: function (e, t, n, a, r) {
                    var s, i, o, d, u, l, _, c, m, h, f, p = pe.hasData(e) && pe._data(e);
                    if (p && (l = p.events)) {
                        for (t = (t || "").match(je) || [""], u = t.length; u--;) if (o = et.exec(t[u]) || [], m = f = o[1], h = (o[2] || "").split(".").sort(), m) {
                            for (_ = pe.event.special[m] || {}, m = (a ? _.delegateType : _.bindType) || m, c = l[m] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), d = s = c.length; s--;) i = c[s], !r && f !== i.origType || n && n.guid !== i.guid || o && !o.test(i.namespace) || a && a !== i.selector && ("**" !== a || !i.selector) || (c.splice(s, 1), i.selector && c.delegateCount--, _.remove && _.remove.call(e, i));
                            d && !c.length && (_.teardown && !1 !== _.teardown.call(e, h, p.handle) || pe.removeEvent(e, m, p.handle), delete l[m])
                        } else for (m in l) pe.event.remove(e, m + t[u], n, a, !0);
                        pe.isEmptyObject(l) && (delete p.handle, pe._removeData(e, "events"))
                    }
                },
                trigger: function (e, t, a, r) {
                    var s, i, o, d, u, l, _, c = [a || oe], m = he.call(e, "type") ? e.type : e,
                        h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (o = l = a = a || oe, 3 !== a.nodeType && 8 !== a.nodeType && !Ze.test(m + pe.event.triggered) && (m.indexOf(".") > -1 && (h = m.split("."), m = h.shift(), h.sort()), i = m.indexOf(":") < 0 && "on" + m, e = e[pe.expando] ? e : new pe.Event(m, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = a), t = null == t ? [e] : pe.makeArray(t, [e]), u = pe.event.special[m] || {}, r || !u.trigger || !1 !== u.trigger.apply(a, t))) {
                        if (!r && !u.noBubble && !pe.isWindow(a)) {
                            for (d = u.delegateType || m, Ze.test(d + m) || (o = o.parentNode); o; o = o.parentNode) c.push(o), l = o;
                            l === (a.ownerDocument || oe) && c.push(l.defaultView || l.parentWindow || n)
                        }
                        for (_ = 0; (o = c[_++]) && !e.isPropagationStopped();) e.type = _ > 1 ? d : u.bindType || m, s = (pe._data(o, "events") || {})[e.type] && pe._data(o, "handle"), s && s.apply(o, t), (s = i && o[i]) && s.apply && Ae(o) && (e.result = s.apply(o, t), !1 === e.result && e.preventDefault());
                        if (e.type = m, !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(c.pop(), t)) && Ae(a) && i && a[m] && !pe.isWindow(a)) {
                            l = a[i], l && (a[i] = null), pe.event.triggered = m;
                            try {
                                a[m]()
                            } catch (e) {
                            }
                            pe.event.triggered = void 0, l && (a[i] = l)
                        }
                        return e.result
                    }
                },
                dispatch: function (e) {
                    e = pe.event.fix(e);
                    var t, n, a, r, s, i = [], o = de.call(arguments),
                        d = (pe._data(this, "events") || {})[e.type] || [], u = pe.event.special[e.type] || {};
                    if (o[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                        for (i = pe.event.handlers.call(this, e, d), t = 0; (r = i[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (a = ((pe.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, o)) && !1 === (e.result = a) && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var n, a, r, s, i = [], o = t.delegateCount, d = e.target;
                    if (o && d.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; d != this; d = d.parentNode || this) if (1 === d.nodeType && (!0 !== d.disabled || "click" !== e.type)) {
                        for (a = [], n = 0; n < o; n++) s = t[n], r = s.selector + " ", void 0 === a[r] && (a[r] = s.needsContext ? pe(r, this).index(d) > -1 : pe.find(r, this, null, [d]).length), a[r] && a.push(s);
                        a.length && i.push({elem: d, handlers: a})
                    }
                    return o < t.length && i.push({elem: this, handlers: t.slice(o)}), i
                },
                fix: function (e) {
                    if (e[pe.expando]) return e;
                    var t, n, a, r = e.type, s = e, i = this.fixHooks[r];
                    for (i || (this.fixHooks[r] = i = Xe.test(r) ? this.mouseHooks : Qe.test(r) ? this.keyHooks : {}), a = i.props ? this.props.concat(i.props) : this.props, e = new pe.Event(s), t = a.length; t--;) n = a[t], e[n] = s[n];
                    return e.target || (e.target = s.srcElement || oe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, s) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, a, r, s = t.button, i = t.fromElement;
                        return null == e.pageX && null != t.clientX && (a = e.target.ownerDocument || oe, r = a.documentElement, n = a.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && i && (e.relatedTarget = i === e.target ? t.toElement : i), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                    }
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== D() && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {
                            }
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            if (this === D() && this.blur) return this.blur(), !1
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                        }, _default: function (e) {
                            return pe.nodeName(e.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n) {
                    var a = pe.extend(new pe.Event, n, {type: e, isSimulated: !0});
                    pe.event.trigger(a, null, t), a.isDefaultPrevented() && n.preventDefault()
                }
            }, pe.removeEvent = oe.removeEventListener ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            } : function (e, t, n) {
                var a = "on" + t;
                e.detachEvent && (void 0 === e[a] && (e[a] = null), e.detachEvent(a, n))
            }, pe.Event = function (e, t) {
                if (!(this instanceof pe.Event)) return new pe.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? v : k) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0
            }, pe.Event.prototype = {
                constructor: pe.Event,
                isDefaultPrevented: k,
                isPropagationStopped: k,
                isImmediatePropagationStopped: k,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, pe.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                pe.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var n, a = this, r = e.relatedTarget, s = e.handleObj;
                        return r && (r === a || pe.contains(a, r)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), fe.submit || (pe.event.special.submit = {
                setup: function () {
                    if (pe.nodeName(this, "form")) return !1;
                    pe.event.add(this, "click._submit keypress._submit", function (e) {
                        var t = e.target,
                            n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                        n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function (e) {
                            e._submitBubble = !0
                        }), pe._data(n, "submit", !0))
                    })
                }, postDispatch: function (e) {
                    e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
                }, teardown: function () {
                    if (pe.nodeName(this, "form")) return !1;
                    pe.event.remove(this, "._submit")
                }
            }), fe.change || (pe.event.special.change = {
                setup: function () {
                    if (Ke.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function (e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                    }), pe.event.add(this, "click._change", function (e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
                    })), !1;
                    pe.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        Ke.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function (e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                        }), pe._data(t, "change", !0))
                    })
                }, handle: function (e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
                }, teardown: function () {
                    return pe.event.remove(this, "._change"), !Ke.test(this.nodeName)
                }
            }), fe.focusin || pe.each({focus: "focusin", blur: "focusout"}, function (e, t) {
                var n = function (e) {
                    pe.event.simulate(t, e.target, pe.event.fix(e))
                };
                pe.event.special[t] = {
                    setup: function () {
                        var a = this.ownerDocument || this, r = pe._data(a, t);
                        r || a.addEventListener(e, n, !0), pe._data(a, t, (r || 0) + 1)
                    }, teardown: function () {
                        var a = this.ownerDocument || this, r = pe._data(a, t) - 1;
                        r ? pe._data(a, t, r) : (a.removeEventListener(e, n, !0), pe._removeData(a, t))
                    }
                }
            }), pe.fn.extend({
                on: function (e, t, n, a) {
                    return w(this, e, t, n, a)
                }, one: function (e, t, n, a) {
                    return w(this, e, t, n, a, 1)
                }, off: function (e, t, n) {
                    var a, r;
                    if (e && e.preventDefault && e.handleObj) return a = e.handleObj, pe(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                    if ("object" == typeof e) {
                        for (r in e) this.off(r, t, e[r]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = k), this.each(function () {
                        pe.event.remove(this, e, n, t)
                    })
                }, trigger: function (e, t) {
                    return this.each(function () {
                        pe.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return pe.event.trigger(e, t, n, !0)
                }
            });
            var tt = / jQuery\d+="(?:null|\d+)"/g, nt = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"),
                at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                rt = /123/i, it = /^true\/(.*)/,
                ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, dt = y(oe),
                ut = dt.appendChild(oe.createElement("div"));
            pe.extend({
                htmlPrefilter: function (e) {
                    return e.replace(at, "<$1></$2>")
                }, clone: function (e, t, n) {
                    var a, r, s, i, o, d = pe.contains(e.ownerDocument, e);
                    if (fe.html5Clone || pe.isXMLDoc(e) || !nt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(s = ut.firstChild)), !(fe.noCloneEvent && fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (a = M(s), o = M(e), i = 0; null != (r = o[i]); ++i) a[i] && H(r, a[i]);
                    if (t) if (n) for (o = o || M(e), a = a || M(s), i = 0; null != (r = o[i]); i++) x(r, a[i]); else x(e, s);
                    //return a = M(s, "script"), a.length > 0 && L(a, !d && M(e, "script")), a = o = r = null, s
                }, cleanData: function (e, t) {
                    for (var n, a, r, s, i = 0, o = pe.expando, d = pe.cache, u = fe.attributes, l = pe.event.special; null != (n = e[i]); i++) if ((t || Ae(n)) && (r = n[o], s = r && d[r])) {
                        if (s.events) for (a in s.events) l[a] ? pe.event.remove(n, a) : pe.removeEvent(n, a, s.handle);
                        d[r] && (delete d[r], u || void 0 === n.removeAttribute ? n[o] = void 0 : n.removeAttribute(o), ie.push(r))
                    }
                }
            }), pe.fn.extend({
                domManip: j, detach: function (e) {
                    return E(this, e, !0)
                }, remove: function (e) {
                    return E(this, e)
                }, text: function (e) {
                    return Ie(this, function (e) {
                        return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oe).createTextNode(e))
                    }, null, e, arguments.length)
                }, append: function () {
                    return j(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            T(this, e).appendChild(e)
                        }
                    })
                }, prepend: function () {
                    return j(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = T(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return j(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return j(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && pe.cleanData(M(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && pe.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return pe.clone(this, e, t)
                    })
                }, html: function (e) {
                    return Ie(this, function (e) {
                        var t = this[0] || {}, n = 0, a = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(tt, "") : void 0;
                        if ("string" == typeof e && !rt.test(e) && (fe.htmlSerialize || !nt.test(e)) && (fe.leadingWhitespace || !Ue.test(e)) && !Be[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = pe.htmlPrefilter(e);
                            try {
                                for (; n < a; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(M(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var e = [];
                    return j(this, arguments, function (t) {
                        var n = this.parentNode;
                        pe.inArray(this, e) < 0 && (pe.cleanData(M(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), pe.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                pe.fn[e] = function (e) {
                    for (var n, a = 0, r = [], s = pe(e), i = s.length - 1; a <= i; a++) n = a === i ? this : this.clone(!0), pe(s[a])[t](n), le.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var lt, _t = {HTML: "block", BODY: "block"}, ct = /^margin/,
                mt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"), ht = function (e, t, n, a) {
                    var r, s, i = {};
                    for (s in t) i[s] = e.style[s], e.style[s] = t[s];
                    r = n.apply(e, a || []);
                    for (s in t) e.style[s] = i[s];
                    return r
                }, ft = oe.documentElement;
            !function () {
                function e() {
                    var e, l, _ = oe.documentElement;
                    _.appendChild(d), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = r = o = !1, a = i = !0, n.getComputedStyle && (l = n.getComputedStyle(u), t = "1%" !== (l || {}).top, o = "2px" === (l || {}).marginLeft, r = "4px" === (l || {width: "4px"}).width, u.style.marginRight = "50%", a = "4px" === (l || {marginRight: "4px"}).marginRight, e = u.appendChild(oe.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", i = !parseFloat((n.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", s = 0 === u.getClientRects().length, s && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", s = 0 === e[0].offsetHeight)), _.removeChild(d)
                }

                var t, a, r, s, i, o, d = oe.createElement("div"), u = oe.createElement("div");
                u.style && (u.style.cssText = "float:left;opacity:.5", fe.opacity = "0.5" === u.style.opacity, fe.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === u.style.backgroundClip, d = oe.createElement("div"), d.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", d.appendChild(u), fe.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pe.extend(fe, {
                    reliableHiddenOffsets: function () {
                        return null == t && e(), s
                    }, boxSizingReliable: function () {
                        return null == t && e(), r
                    }, pixelMarginRight: function () {
                        return null == t && e(), a
                    }, pixelPosition: function () {
                        return null == t && e(), t
                    }, reliableMarginRight: function () {
                        return null == t && e(), i
                    }, reliableMarginLeft: function () {
                        return null == t && e(), o
                    }
                }))
            }();
            var pt, yt, Mt = /^(top|right|bottom|left)$/;
            n.getComputedStyle ? (pt = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            }, yt = function (e, t, n) {
                var a, r, s, i, o = e.style;
                return n = n || pt(e), i = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== i && void 0 !== i || pe.contains(e.ownerDocument, e) || (i = pe.style(e, t)), n && !fe.pixelMarginRight() && mt.test(i) && ct.test(t) && (a = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = a, o.minWidth = r, o.maxWidth = s), void 0 === i ? i : i + ""
            }) : ft.currentStyle && (pt = function (e) {
                return e.currentStyle
            }, yt = function (e, t, n) {
                var a, r, s, i, o = e.style;
                return n = n || pt(e), i = n ? n[t] : void 0, null == i && o && o[t] && (i = o[t]), mt.test(i) && !Mt.test(t) && (a = o.left, r = e.runtimeStyle, s = r && r.left, s && (r.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = a, s && (r.left = s)), void 0 === i ? i : i + "" || "auto"
            });
            var Lt = /alpha\([^)]*\)/i, gt = /opacity\s*=\s*([^)]*)/i, Yt = /^(none|table(?!-c[ea]).+)/,
                vt = new RegExp("^(" + Fe + ")(.*)$", "i"),
                kt = {position: "absolute", visibility: "hidden", display: "block"},
                Dt = {letterSpacing: "0", fontWeight: "400"}, wt = ["Webkit", "O", "Moz", "ms"],
                Tt = oe.createElement("div").style;
            pe.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = yt(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {float: fe.cssFloat ? "cssFloat" : "styleFloat"},
                style: function (e, t, n, a) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, s, i, o = pe.camelCase(t), d = e.style;
                        if (t = pe.cssProps[o] || (pe.cssProps[o] = W(o) || o), i = pe.cssHooks[t] || pe.cssHooks[o], void 0 === n) return i && "get" in i && void 0 !== (r = i.get(e, !1, a)) ? r : d[t];
                        if (s = typeof n, "string" === s && (r = Ce.exec(n)) && r[1] && (n = p(e, t, r), s = "number"), null != n && n === n && ("number" === s && (n += r && r[3] || (pe.cssNumber[o] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), !(i && "set" in i && void 0 === (n = i.set(e, n, a))))) try {
                            d[t] = n
                        } catch (e) {
                        }
                    }
                },
                css: function (e, t, n, a) {
                    var r, s, i, o = pe.camelCase(t);
                    return t = pe.cssProps[o] || (pe.cssProps[o] = W(o) || o), i = pe.cssHooks[t] || pe.cssHooks[o], i && "get" in i && (s = i.get(e, !0, n)), void 0 === s && (s = yt(e, t, a)), "normal" === s && t in Dt && (s = Dt[t]), "" === n || n ? (r = parseFloat(s), !0 === n || isFinite(r) ? r || 0 : s) : s
                }
            }), pe.each(["height", "width"], function (e, t) {
                pe.cssHooks[t] = {
                    get: function (e, n, a) {
                        if (n) return Yt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ht(e, kt, function () {
                            return z(e, t, a)
                        }) : z(e, t, a)
                    }, set: function (e, n, a) {
                        var r = a && pt(e);
                        return C(e, n, a ? N(e, t, a, fe.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0)
                    }
                }
            }), fe.opacity || (pe.cssHooks.opacity = {
                get: function (e, t) {
                    return gt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                }, set: function (e, t) {
                    var n = e.style, a = e.currentStyle, r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        s = a && a.filter || n.filter || "";
                    n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(s.replace(Lt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || a && !a.filter) || (n.filter = Lt.test(s) ? s.replace(Lt, r) : s + " " + r)
                }
            }), pe.cssHooks.marginRight = P(fe.reliableMarginRight, function (e, t) {
                if (t) return ht(e, {display: "inline-block"}, yt, [e, "marginRight"])
            }), pe.cssHooks.marginLeft = P(fe.reliableMarginLeft, function (e, t) {
                if (t) return (parseFloat(yt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {marginLeft: 0}, function () {
                    return e.getBoundingClientRect().left
                }) : 0)) + "px"
            }), pe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
                pe.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var a = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) r[e + Ne[a] + t] = s[a] || s[a - 2] || s[0];
                        return r
                    }
                }, ct.test(e) || (pe.cssHooks[e + t].set = C)
            }), pe.fn.extend({
                css: function (e, t) {
                    return Ie(this, function (e, t, n) {
                        var a, r, s = {}, i = 0;
                        if (pe.isArray(t)) {
                            for (a = pt(e), r = t.length; i < r; i++) s[t[i]] = pe.css(e, t[i], !1, a);
                            return s
                        }
                        return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
                    }, e, t, arguments.length > 1)
                }, show: function () {
                    return F(this, !0)
                }, hide: function () {
                    return F(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        ze(this) ? pe(this).show() : pe(this).hide()
                    })
                }
            }), pe.Tween = I, I.prototype = {
                constructor: I, init: function (e, t, n, a, r, s) {
                    this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = s || (pe.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = I.propHooks[this.prop];
                    return e && e.get ? e.get(this) : I.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = I.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
                }
            }, I.prototype.init.prototype = I.prototype, I.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    }, set: function (e) {
                        pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, pe.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, _default: "swing"
            }, pe.fx = I.prototype.init, pe.fx.step = {};
            var bt, St, xt = /^(?:toggle|show|hide)$/, Ht = /queueHooks$/;
            pe.Animation = pe.extend(B, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return p(n.elem, e, Ce.exec(t), n), n
                    }]
                }, tweener: function (e, t) {
                    pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je);
                    for (var n, a = 0, r = e.length; a < r; a++) n = e[a], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
                }, prefilters: [U], prefilter: function (e, t) {
                    t ? B.prefilters.unshift(e) : B.prefilters.push(e)
                }
            }), pe.speed = function (e, t, n) {
                var a = e && "object" == typeof e ? pe.extend({}, e) : {
                    complete: n || !n && t || pe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !pe.isFunction(t) && t
                };
                return a.duration = pe.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in pe.fx.speeds ? pe.fx.speeds[a.duration] : pe.fx.speeds._default, null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function () {
                    pe.isFunction(a.old) && a.old.call(this), a.queue && pe.dequeue(this, a.queue)
                }, a
            }, pe.fn.extend({
                fadeTo: function (e, t, n, a) {
                    return this.filter(ze).css("opacity", 0).show().end().animate({opacity: t}, e, n, a)
                }, animate: function (e, t, n, a) {
                    var r = pe.isEmptyObject(e), s = pe.speed(t, n, a), i = function () {
                        var t = B(this, pe.extend({}, e), s);
                        (r || pe._data(this, "finish")) && t.stop(!0)
                    };
                    return i.finish = i, r || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
                }, stop: function (e, t, n) {
                    var a = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                        var t = !0, r = null != e && e + "queueHooks", s = pe.timers, i = pe._data(this);
                        if (r) i[r] && i[r].stop && a(i[r]); else for (r in i) i[r] && i[r].stop && Ht.test(r) && a(i[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
                        !t && n || pe.dequeue(this, e)
                    })
                }, finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each(function () {
                        var t, n = pe._data(this), a = n[e + "queue"], r = n[e + "queueHooks"], s = pe.timers,
                            i = a ? a.length : 0;
                        for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                        for (t = 0; t < i; t++) a[t] && a[t].finish && a[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), pe.each(["toggle", "show", "hide"], function (e, t) {
                var n = pe.fn[t];
                pe.fn[t] = function (e, a, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(J(t, !0), e, a, r)
                }
            }), pe.each({
                slideDown: J("show"),
                slideUp: J("hide"),
                slideToggle: J("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (e, t) {
                pe.fn[e] = function (e, n, a) {
                    return this.animate(t, e, n, a)
                }
            }), pe.timers = [], pe.fx.tick = function () {
                var e, t = pe.timers, n = 0;
                for (bt = pe.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || pe.fx.stop(), bt = void 0
            }, pe.fx.timer = function (e) {
                pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
            }, pe.fx.interval = 13, pe.fx.start = function () {
                St || (St = n.setInterval(pe.fx.tick, pe.fx.interval))
            }, pe.fx.stop = function () {
                n.clearInterval(St), St = null
            }, pe.fx.speeds = {slow: 600, fast: 200, _default: 400}, pe.fn.delay = function (e, t) {
                return e = pe.fx ? pe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, a) {
                    var r = n.setTimeout(t, e);
                    a.stop = function () {
                        n.clearTimeout(r)
                    }
                })
            }, function () {
                var e, t = oe.createElement("input"), n = oe.createElement("div"), a = oe.createElement("select"),
                    r = a.appendChild(oe.createElement("option"));
                n = oe.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", fe.getSetAttribute = "t" !== n.className, fe.style = /top/.test(e.getAttribute("style")), fe.hrefNormalized = "/a" === e.getAttribute("href"), fe.checkOn = !!t.value, fe.optSelected = r.selected, fe.enctype = !!oe.createElement("form").enctype, a.disabled = !0, fe.optDisabled = !r.disabled, t = oe.createElement("input"), t.setAttribute("value", ""), fe.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), fe.radioValue = "t" === t.value
            }();
            var jt = /\r/g, Et = /[\x20\t\r\n\f]+/g;
            pe.fn.extend({
                val: function (e) {
                    var t, n, a, r = this[0];
                    {
                        if (arguments.length) return a = pe.isFunction(e), this.each(function (n) {
                            var r;
                            1 === this.nodeType && (r = a ? e.call(this, n, pe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function (e) {
                                return null == e ? "" : e + ""
                            })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                        });
                        if (r) return (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(jt, "") : null == n ? "" : n)
                    }
                }
            }), pe.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = pe.find.attr(e, "value");
                            return null != t ? t : pe.trim(pe.text(e)).replace(Et, " ")
                        }
                    }, select: {
                        get: function (e) {
                            for (var t, n, a = e.options, r = e.selectedIndex, s = "select-one" === e.type || r < 0, i = s ? null : [], o = s ? r + 1 : a.length, d = r < 0 ? o : s ? r : 0; d < o; d++) if (n = a[d], (n.selected || d === r) && (fe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pe(n).val(), s) return t;
                                i.push(t)
                            }
                            return i
                        }, set: function (e, t) {
                            for (var n, a, r = e.options, s = pe.makeArray(t), i = r.length; i--;) if (a = r[i], pe.inArray(pe.valHooks.option.get(a), s) > -1) try {
                                a.selected = n = !0
                            } catch (e) {
                                a.scrollHeight
                            } else a.selected = !1;
                            return n || (e.selectedIndex = -1), r
                        }
                    }
                }
            }), pe.each(["radio", "checkbox"], function () {
                pe.valHooks[this] = {
                    set: function (e, t) {
                        if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
                    }
                }, fe.checkOn || (pe.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var Ot, At, Pt = pe.expr.attrHandle, Wt = /^(?:checked|selected)$/i, Ft = fe.getSetAttribute, Ct = fe.input;
            pe.fn.extend({
                attr: function (e, t) {
                    return Ie(this, pe.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        pe.removeAttr(this, e)
                    })
                }
            }), pe.extend({
                attr: function (e, t, n) {
                    var a, r, s = e.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === s && pe.isXMLDoc(e) || (t = t.toLowerCase(), r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? At : Ot)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (a = r.get(e, t)) ? a : (a = pe.find.attr(e, t), null == a ? void 0 : a))
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!fe.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }, removeAttr: function (e, t) {
                    var n, a, r = 0, s = t && t.match(je);
                    if (s && 1 === e.nodeType) for (; n = s[r++];) a = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Ct && Ft || !Wt.test(n) ? e[a] = !1 : e[pe.camelCase("default-" + n)] = e[a] = !1 : pe.attr(e, n, ""), e.removeAttribute(Ft ? n : a)
                }
            }), At = {
                set: function (e, t, n) {
                    return !1 === t ? pe.removeAttr(e, n) : Ct && Ft || !Wt.test(n) ? e.setAttribute(!Ft && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = Pt[t] || pe.find.attr;
                Ct && Ft || !Wt.test(t) ? Pt[t] = function (e, t, a) {
                    var r, s;
                    return a || (s = Pt[t], Pt[t] = r, r = null != n(e, t, a) ? t.toLowerCase() : null, Pt[t] = s), r
                } : Pt[t] = function (e, t, n) {
                    if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            }), Ct && Ft || (pe.attrHooks.value = {
                set: function (e, t, n) {
                    if (!pe.nodeName(e, "input")) return Ot && Ot.set(e, t, n);
                    e.defaultValue = t
                }
            }), Ft || (Ot = {
                set: function (e, t, n) {
                    var a = e.getAttributeNode(n);
                    if (a || e.setAttributeNode(a = e.ownerDocument.createAttribute(n)), a.value = t += "", "value" === n || t === e.getAttribute(n)) return t
                }
            }, Pt.id = Pt.name = Pt.coords = function (e, t, n) {
                var a;
                if (!n) return (a = e.getAttributeNode(t)) && "" !== a.value ? a.value : null
            }, pe.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    if (n && n.specified) return n.value
                }, set: Ot.set
            }, pe.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    Ot.set(e, "" !== t && t, n)
                }
            }, pe.each(["width", "height"], function (e, t) {
                pe.attrHooks[t] = {
                    set: function (e, n) {
                        if ("" === n) return e.setAttribute(t, "auto"), n
                    }
                }
            })), fe.style || (pe.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || void 0
                }, set: function (e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var Nt = /^(?:input|select|textarea|button|object)$/i, zt = /^(?:a|area)$/i;
            pe.fn.extend({
                prop: function (e, t) {
                    return Ie(this, pe.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return e = pe.propFix[e] || e, this.each(function () {
                        try {
                            this[e] = void 0, delete this[e]
                        } catch (e) {
                        }
                    })
                }
            }), pe.extend({
                prop: function (e, t, n) {
                    var a, r, s = e.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return 1 === s && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : e[t] = n : r && "get" in r && null !== (a = r.get(e, t)) ? a : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = pe.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Nt.test(e.nodeName) || zt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }, propFix: {for: "htmlFor", class: "className"}
            }), fe.hrefNormalized || pe.each(["href", "src"], function (e, t) {
                pe.propHooks[t] = {
                    get: function (e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }), fe.optSelected || (pe.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }, set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                pe.propFix[this.toLowerCase()] = this
            }), fe.enctype || (pe.propFix.enctype = "encoding");
            var It = /[\t\r\n\f]/g;
            pe.fn.extend({
                addClass: function (e) {
                    var t, n, a, r, s, i, o, d = 0;
                    if (pe.isFunction(e)) return this.each(function (t) {
                        pe(this).addClass(e.call(this, t, G(this)))
                    });
                    if ("string" == typeof e && e) for (t = e.match(je) || []; n = this[d++];) if (r = G(n), a = 1 === n.nodeType && (" " + r + " ").replace(It, " ")) {
                        for (i = 0; s = t[i++];) a.indexOf(" " + s + " ") < 0 && (a += s + " ");
                        o = pe.trim(a), r !== o && pe.attr(n, "class", o)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, n, a, r, s, i, o, d = 0;
                    if (pe.isFunction(e)) return this.each(function (t) {
                        pe(this).removeClass(e.call(this, t, G(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e) for (t = e.match(je) || []; n = this[d++];) if (r = G(n), a = 1 === n.nodeType && (" " + r + " ").replace(It, " ")) {
                        for (i = 0; s = t[i++];) for (; a.indexOf(" " + s + " ") > -1;) a = a.replace(" " + s + " ", " ");
                        o = pe.trim(a), r !== o && pe.attr(n, "class", o)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function (n) {
                        pe(this).toggleClass(e.call(this, n, G(this), t), t)
                    }) : this.each(function () {
                        var t, a, r, s;
                        if ("string" === n) for (a = 0, r = pe(this), s = e.match(je) || []; t = s[a++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || (t = G(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
                    })
                }, hasClass: function (e) {
                    var t, n, a = 0;
                    for (t = " " + e + " "; n = this[a++];) if (1 === n.nodeType && (" " + G(n) + " ").replace(It, " ").indexOf(t) > -1) return !0;
                    return !1
                }
            }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                pe.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), pe.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
            var Rt = n.location, Jt = pe.now(), qt = /\?/
                Ut = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            pe.parseJSON = function (e) {
                if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
                var t, a = null, r = pe.trim(e + "");
                return r && !pe.trim(r.replace(Ut, function (e, n, r, s) {
                    return t && n && (a = 0), 0 === a ? e : (t = r || n, a += !s - !r, "")
                })) ? Function("return " + r)() : pe.error("Invalid JSON: " + e)
            }, pe.parseXML = function (e) {
                var t, a;
                if (!e || "string" != typeof e) return null;
                try {
                    n.DOMParser ? (a = new n.DOMParser, t = a.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
                } catch (e) {
                    t = void 0
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + e), t
            };
            var Vt = /#.*$/, Bt = /([?&])_=[^&]*/, Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                $t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Kt = /^(?:GET|HEAD)$/, Qt = /^\/\//,
                Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Zt = {}, en = {},
                tn = "*/".concat("*"), nn = Rt.href, an = Xt.exec(nn.toLowerCase()) || [];
            pe.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: nn,
                    type: "GET",
                    isLocal: $t.test(an[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": tn,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": pe.parseJSON, "text xml": pe.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? Q(Q(e, pe.ajaxSettings), t) : Q(pe.ajaxSettings, e)
                },
                ajaxPrefilter: $(Zt),
                ajaxTransport: $(en),
                ajax: function (e, t) {
                    function a(e, t, a, r) {
                        var s, _, M, L, Y, k = t;
                        2 !== g && (g = 2, d && n.clearTimeout(d), l = void 0, o = r || "", v.readyState = e > 0 ? 4 : 0, s = e >= 200 && e < 300 || 304 === e, a && (L = X(c, v, a)), L = Z(c, L, v, s), s ? (c.ifModified && (Y = v.getResponseHeader("Last-Modified"), Y && (pe.lastModified[i] = Y), (Y = v.getResponseHeader("etag")) && (pe.etag[i] = Y)), 204 === e || "HEAD" === c.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = L.state, _ = L.data, M = L.error, s = !M)) : (M = k, !e && k || (k = "error", e < 0 && (e = 0))), v.status = e, v.statusText = (t || k) + "", s ? f.resolveWith(m, [_, k, v]) : f.rejectWith(m, [v, k, M]), v.statusCode(y), y = void 0, u && h.trigger(s ? "ajaxSuccess" : "ajaxError", [v, c, s ? _ : M]), p.fireWith(m, [v, k]), u && (h.trigger("ajaxComplete", [v, c]), --pe.active || pe.event.trigger("ajaxStop")))
                    }

                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, s, i, o, d, u, l, _, c = pe.ajaxSetup({}, t), m = c.context || c,
                        h = c.context && (m.nodeType || m.jquery) ? pe(m) : pe.event, f = pe.Deferred(),
                        p = pe.Callbacks("once memory"), y = c.statusCode || {}, M = {}, L = {}, g = 0, Y = "canceled",
                        v = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (2 === g) {
                                    if (!_) for (_ = {}; t = Gt.exec(o);) _[t[1].toLowerCase()] = t[2];
                                    t = _[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            }, getAllResponseHeaders: function () {
                                return 2 === g ? o : null
                            }, setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return g || (e = L[n] = L[n] || e, M[e] = t), this
                            }, overrideMimeType: function (e) {
                                return g || (c.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e) if (g < 2) for (t in e) y[t] = [y[t], e[t]]; else v.always(e[v.status]);
                                return this
                            }, abort: function (e) {
                                var t = e || Y;
                                return l && l.abort(t), a(0, t), this
                            }
                        };
                    if (f.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, c.url = ((e || c.url || nn) + "").replace(Vt, "").replace(Qt, an[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = pe.trim(c.dataType || "*").toLowerCase().match(je) || [""], null == c.crossDomain && (r = Xt.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === an[1] && r[2] === an[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (an[3] || ("http:" === an[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = pe.param(c.data, c.traditional)), K(Zt, c, t, v), 2 === g) return v;
                    u = pe.event && c.global, u && 0 == pe.active++ && pe.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Kt.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (qt.test(i) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = Bt.test(i) ? i.replace(Bt, "$1_=" + Jt++) : i + (qt.test(i) ? "&" : "?") + "_=" + Jt++)), c.ifModified && (pe.lastModified[i] && v.setRequestHeader("If-Modified-Since", pe.lastModified[i]), pe.etag[i] && v.setRequestHeader("If-None-Match", pe.etag[i])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && v.setRequestHeader("Content-Type", c.contentType), v.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : c.accepts["*"]);
                    for (s in c.headers) v.setRequestHeader(s, c.headers[s]);
                    if (c.beforeSend && (!1 === c.beforeSend.call(m, v, c) || 2 === g)) return v.abort();
                    Y = "abort";
                    for (s in{success: 1, error: 1, complete: 1}) v[s](c[s]);
                    if (l = K(en, c, t, v)) {
                        if (v.readyState = 1, u && h.trigger("ajaxSend", [v, c]), 2 === g) return v;
                        c.async && c.timeout > 0 && (d = n.setTimeout(function () {
                            v.abort("timeout")
                        }, c.timeout));
                        try {
                            g = 1, l.send(M, a)
                        } catch (e) {
                            if (!(g < 2)) throw e;
                            a(-1, e)
                        }
                    } else a(-1, "No Transport");
                    return v
                },
                getJSON: function (e, t, n) {
                    return pe.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    //return pe.get(e, void 0, t, "script")
                }
            }), pe.each(["get", "post"], function (e, t) {
                pe[t] = function (e, n, a, r) {
                    return pe.isFunction(n) && (r = r || a, a = n, n = void 0), pe.ajax(pe.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: a
                    }, pe.isPlainObject(e) && e))
                }
            }), pe._evalUrl = function (e) {
                //return pe.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
            }, pe.fn.extend({
                wrapAll: function (e) {
                    if (pe.isFunction(e)) return this.each(function (t) {
                        pe(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                }, wrapInner: function (e) {
                    return pe.isFunction(e) ? this.each(function (t) {
                        pe(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = pe(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                }, wrap: function (e) {
                    var t = pe.isFunction(e);
                    return this.each(function (n) {
                        pe(this).wrapAll(t ? e.call(this, n) : e)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), pe.expr.filters.hidden = function (e) {
                return fe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : te(e)
            }, pe.expr.filters.visible = function (e) {
                return !pe.expr.filters.hidden(e)
            };
            var rn = /%20/g, sn = /\[\]$/, on = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i,
                un = /^(?:input|select|textarea|keygen)/i;
            pe.param = function (e, t) {
                var n, a = [], r = function (e, t) {
                    t = pe.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function () {
                    r(this.name, this.value)
                }); else for (n in e) ne(n, e[n], t, r);
                return a.join("&").replace(rn, "+")
            }, pe.fn.extend({
                serialize: function () {
                    return pe.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = pe.prop(this, "elements");
                        return e ? pe.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !pe(this).is(":disabled") && un.test(this.nodeName) && !dn.test(e) && (this.checked || !Re.test(e))
                    }).map(function (e, t) {
                        var n = pe(this).val();
                        return null == n ? null : pe.isArray(n) ? pe.map(n, function (e) {
                            return {name: t.name, value: e.replace(on, "\r\n")}
                        }) : {name: t.name, value: n.replace(on, "\r\n")}
                    }).get()
                }
            }), pe.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function () {
                return this.isLocal ? re() : oe.documentMode > 8 ? ae() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ae() || re()
            } : ae;
            var ln = 0, _n = {}, cn = pe.ajaxSettings.xhr();
            n.attachEvent && n.attachEvent("onunload", function () {
                for (var e in _n) _n[e](void 0, !0)
            }), fe.cors = !!cn && "withCredentials" in cn, cn = fe.ajax = !!cn, cn && pe.ajaxTransport(function (e) {
                if (!e.crossDomain || fe.cors) {
                    var t;
                    return {
                        send: function (a, r) {
                            var s, i = e.xhr(), o = ++ln;
                            if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) i[s] = e.xhrFields[s];
                            e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                            for (s in a) void 0 !== a[s] && i.setRequestHeader(s, a[s] + "");
                            i.send(e.hasContent && e.data || null), t = function (n, a) {
                                var s, d, u;
                                if (t && (a || 4 === i.readyState)) if (delete _n[o], t = void 0, i.onreadystatechange = pe.noop, a) 4 !== i.readyState && i.abort(); else {
                                    u = {}, s = i.status, "string" == typeof i.responseText && (u.text = i.responseText);
                                    try {
                                        d = i.statusText
                                    } catch (e) {
                                        d = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                }
                                u && r(s, d, u, i.getAllResponseHeaders())
                            }, e.async ? 4 === i.readyState ? n.setTimeout(t) : i.onreadystatechange = _n[o] = t : t()
                        }, abort: function () {
                            t && t(void 0, !0)
                        }
                    }
                }
            }), pe.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (e) {
                        //return pe.globalEval(e), e
                    }
                }
            }), pe.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), pe.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n = oe.head || pe("head")[0] || oe.documentElement;
                    return {
                        send: function (a, r) {
                            t = oe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                            }, n.insertBefore(t, n.firstChild)
                        }, abort: function () {
                            t && t.onload(void 0, !0)
                        }
                    }
                }
            });
            var mn = [], hn = /(=)\?(?=&|$)|\?\?/;
            pe.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = mn.pop() || pe.expando + "_" + Jt++;
                    return this[e] = !0, e
                }
            }), pe.ajaxPrefilter("json jsonp", function (e, t, a) {
                var r, s, i,
                    o = !1 !== e.jsonp && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
                if (o || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = pe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(hn, "$1" + r) : !1 !== e.jsonp && (e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return i || pe.error(r + " was not called"), i[0]
                }, e.dataTypes[0] = "json", s = n[r], n[r] = function () {
                    i = arguments
                }, a.always(function () {
                    void 0 === s ? pe(n).removeProp(r) : n[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, mn.push(r)), i && pe.isFunction(s) && s(i[0]), i = s = void 0
                }), "script"
            }), pe.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || oe;
                var a = we.exec(e), r = !n && [];
                return a ? [t.createElement(a[1])] : (a = Y([e], t, r), r && r.length && pe(r).remove(), pe.merge([], a.childNodes))
            };
            var fn = pe.fn.load;
            pe.fn.load = function (e, t, n) {
                if ("string" != typeof e && fn) return fn.apply(this, arguments);
                var a, r, s, i = this, o = e.indexOf(" ");
                return o > -1 && (a = pe.trim(e.slice(o, e.length)), e = e.slice(0, o)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), i.length > 0 && pe.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    s = arguments, i.html(a ? pe("<div>").append(pe.parseHTML(e)).find(a) : e)
                }).always(n && function (e, t) {
                    i.each(function () {
                        n.apply(this, s || [e.responseText, t, e])
                    })
                }), this
            }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                pe.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), pe.expr.filters.animated = function (e) {
                return pe.grep(pe.timers, function (t) {
                    return e === t.elem
                }).length
            }, pe.offset = {
                setOffset: function (e, t, n) {
                    var a, r, s, i, o, d, u, l = pe.css(e, "position"), _ = pe(e), c = {};
                    "static" === l && (e.style.position = "relative"), o = _.offset(), s = pe.css(e, "top"), d = pe.css(e, "left"), u = ("absolute" === l || "fixed" === l) && pe.inArray("auto", [s, d]) > -1, u ? (a = _.position(), i = a.top, r = a.left) : (i = parseFloat(s) || 0, r = parseFloat(d) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, o))), null != t.top && (c.top = t.top - o.top + i), null != t.left && (c.left = t.left - o.left + r), "using" in t ? t.using.call(e, c) : _.css(c)
                }
            }, pe.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        pe.offset.setOffset(this, e, t)
                    });
                    var t, n, a = {top: 0, left: 0}, r = this[0], s = r && r.ownerDocument;
                    if (s) return t = s.documentElement, pe.contains(t, r) ? (void 0 !== r.getBoundingClientRect && (a = r.getBoundingClientRect()), n = se(s), {
                        top: a.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: a.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : a
                }, position: function () {
                    if (this[0]) {
                        var e, t, n = {top: 0, left: 0}, a = this[0];
                        return "fixed" === pe.css(a, "position") ? t = a.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - n.top - pe.css(a, "marginTop", !0),
                            left: t.left - n.left - pe.css(a, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                        return e || ft
                    })
                }
            }), pe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
                var n = /Y/.test(t);
                pe.fn[e] = function (a) {
                    return Ie(this, function (e, a, r) {
                        var s = se(e);
                        if (void 0 === r) return s ? t in s ? s[t] : s.document.documentElement[a] : e[a];
                        s ? s.scrollTo(n ? pe(s).scrollLeft() : r, n ? r : pe(s).scrollTop()) : e[a] = r
                    }, e, a, arguments.length, null)
                }
            }), pe.each(["top", "left"], function (e, t) {
                pe.cssHooks[t] = P(fe.pixelPosition, function (e, n) {
                    if (n) return n = yt(e, t), mt.test(n) ? pe(e).position()[t] + "px" : n
                })
            }), pe.each({Height: "height", Width: "width"}, function (e, t) {
                pe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, a) {
                    pe.fn[a] = function (a, r) {
                        var s = arguments.length && (n || "boolean" != typeof a),
                            i = n || (!0 === a || !0 === r ? "margin" : "border");
                        return Ie(this, function (t, n, a) {
                            var r;
                            return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === a ? pe.css(t, n, i) : pe.style(t, n, a, i)
                        }, t, s ? a : void 0, s, null)
                    }
                })
            }), pe.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, a) {
                    return this.on(t, e, n, a)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), pe.fn.size = function () {
                return this.length
            }, pe.fn.andSelf = pe.fn.addBack, a = [], void 0 !== (r = function () {
                return pe
            }.apply(t, a)) && (e.exports = r);
            var pn = n.jQuery, yn = n.$;
            return pe.noConflict = function (e) {
                return n.$ === pe && (n.$ = yn), e && n.jQuery === pe && (n.jQuery = pn), pe
            }, s || (n.jQuery = n.$ = pe), pe
        })
    }, 9: function (e, t, n) {
        (function (e) {
            !function (t, n) {
                e.exports = n()
            }(0, function () {
                "use strict";

                function t() {
                    return Ea.apply(null, arguments)
                }

                function a(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }

                function r(e) {
                    return null != e && "[object Object]" === Object.prototype.toString.call(e)
                }

                function s(e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e) if (e.hasOwnProperty(t)) return !1;
                    return !0
                }

                function i(e) {
                    return void 0 === e
                }

                function o(e) {
                    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                }

                function d(e) {
                    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                }

                function u(e, t) {
                    var n, a = [];
                    for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
                    return a
                }

                function l(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function _(e, t) {
                    for (var n in t) l(t, n) && (e[n] = t[n]);
                    return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function c(e, t, n, a) {
                    return Tt(e, t, n, a, !0).utc()
                }

                function m() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }
                }

                function h(e) {
                    return null == e._pf && (e._pf = m()), e._pf
                }

                function f(e) {
                    if (null == e._isValid) {
                        var t = h(e), n = Oa.call(t.parsedDateParts, function (e) {
                                return null != e
                            }),
                            a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                        if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                        e._isValid = a
                    }
                    return e._isValid
                }

                function p(e) {
                    var t = c(NaN);
                    return null != e ? _(h(t), e) : h(t).userInvalidated = !0, t
                }

                function y(e, t) {
                    var n, a, r;
                    if (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), i(t._i) || (e._i = t._i), i(t._f) || (e._f = t._f), i(t._l) || (e._l = t._l), i(t._strict) || (e._strict = t._strict), i(t._tzm) || (e._tzm = t._tzm), i(t._isUTC) || (e._isUTC = t._isUTC), i(t._offset) || (e._offset = t._offset), i(t._pf) || (e._pf = h(t)), i(t._locale) || (e._locale = t._locale), Aa.length > 0) for (n = 0; n < Aa.length; n++) a = Aa[n], r = t[a], i(r) || (e[a] = r);
                    return e
                }

                function M(e) {
                    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Pa && (Pa = !0, t.updateOffset(this), Pa = !1)
                }

                function L(e) {
                    return e instanceof M || null != e && null != e._isAMomentObject
                }

                function g(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function Y(e) {
                    var t = +e, n = 0;
                    return 0 !== t && isFinite(t) && (n = g(t)), n
                }

                function v(e, t, n) {
                    var a, r = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), i = 0;
                    for (a = 0; a < r; a++) (n && e[a] !== t[a] || !n && Y(e[a]) !== Y(t[a])) && i++;
                    return i + s
                }

                function k(e) {
                    !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function D(e, n) {
                    var a = !0;
                    return _(function () {
                        if (null != t.deprecationHandler && t.deprecationHandler(null, e), a) {
                            for (var r, s = [], i = 0; i < arguments.length; i++) {
                                if (r = "", "object" == typeof arguments[i]) {
                                    r += "\n[" + i + "] ";
                                    for (var o in arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                    r = r.slice(0, -2)
                                } else r = arguments[i];
                                s.push(r)
                            }
                            k(e + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), a = !1
                        }
                        return n.apply(this, arguments)
                    }, n)
                }

                function w(e, n) {
                    null != t.deprecationHandler && t.deprecationHandler(e, n), Wa[e] || (k(n), Wa[e] = !0)
                }

                function T(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function b(e) {
                    var t, n;
                    for (n in e) t = e[n], T(t) ? this[n] = t : this["_" + n] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }

                function S(e, t) {
                    var n, a = _({}, e);
                    for (n in t) l(t, n) && (r(e[n]) && r(t[n]) ? (a[n] = {}, _(a[n], e[n]), _(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
                    for (n in e) l(e, n) && !l(t, n) && r(e[n]) && (a[n] = _({}, a[n]));
                    return a
                }

                function x(e) {
                    null != e && this.set(e)
                }

                function H(e, t, n) {
                    var a = this._calendar[e] || this._calendar.sameElse;
                    return T(a) ? a.call(t, n) : a
                }

                function j(e) {
                    var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
                    return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
                }

                function E() {
                    return this._invalidDate
                }

                function O(e) {
                    return this._ordinal.replace("%d", e)
                }

                function A(e, t, n, a) {
                    var r = this._relativeTime[n];
                    return T(r) ? r(e, t, n, a) : r.replace(/%d/i, e)
                }

                function P(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return T(n) ? n(t) : n.replace(/%s/i, t)
                }

                function W(e, t) {
                    var n = e.toLowerCase();
                    Ra[n] = Ra[n + "s"] = Ra[t] = e
                }

                function F(e) {
                    return "string" == typeof e ? Ra[e] || Ra[e.toLowerCase()] : void 0
                }

                function C(e) {
                    var t, n, a = {};
                    for (n in e) l(e, n) && (t = F(n)) && (a[t] = e[n]);
                    return a
                }

                function N(e, t) {
                    Ja[e] = t
                }

                function z(e) {
                    var t = [];
                    for (var n in e) t.push({unit: n, priority: Ja[n]});
                    return t.sort(function (e, t) {
                        return e.priority - t.priority
                    }), t
                }

                function I(e, t, n) {
                    var a = "" + Math.abs(e), r = t - a.length;
                    return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a
                }

                function R(e, t, n, a) {
                    var r = a;
                    "string" == typeof a && (r = function () {
                        return this[a]()
                    }), e && (Ba[e] = r), t && (Ba[t[0]] = function () {
                        return I(r.apply(this, arguments), t[1], t[2])
                    }), n && (Ba[n] = function () {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function J(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                }

                function q(e) {
                    var t, n, a = e.match(qa);
                    for (t = 0, n = a.length; t < n; t++) Ba[a[t]] ? a[t] = Ba[a[t]] : a[t] = J(a[t]);
                    return function (t) {
                        var r, s = "";
                        for (r = 0; r < n; r++) s += T(a[r]) ? a[r].call(t, e) : a[r];
                        return s
                    }
                }

                function U(e, t) {
                    return e.isValid() ? (t = V(t, e.localeData()), Va[t] = Va[t] || q(t), Va[t](e)) : e.localeData().invalidDate()
                }

                function V(e, t) {
                    function n(e) {
                        return t.longDateFormat(e) || e
                    }

                    var a = 5;
                    for (Ua.lastIndex = 0; a >= 0 && Ua.test(e);) e = e.replace(Ua, n), Ua.lastIndex = 0, a -= 1;
                    return e
                }

                function B(e, t, n) {
                    _r[e] = T(t) ? t : function (e, a) {
                        return e && n ? n : t
                    }
                }

                function G(e, t) {
                    return l(_r, e) ? _r[e](t._strict, t._locale) : new RegExp($(e))
                }

                function $(e) {
                    return K(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, a, r) {
                        return t || n || a || r
                    }))
                }

                function K(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function Q(e, t) {
                    var n, a = t;
                    for ("string" == typeof e && (e = [e]), o(t) && (a = function (e, n) {
                        n[t] = Y(e)
                    }), n = 0; n < e.length; n++) cr[e[n]] = a
                }

                function X(e, t) {
                    Q(e, function (e, n, a, r) {
                        a._w = a._w || {}, t(e, a._w, a, r)
                    })
                }

                function Z(e, t, n) {
                    null != t && l(cr, e) && cr[e](t, n._a, n, e)
                }

                function ee(e) {
                    return te(e) ? 366 : 365
                }

                function te(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }

                function ne() {
                    return te(this.year())
                }

                function ae(e, n) {
                    return function (a) {
                        return null != a ? (se(this, e, a), t.updateOffset(this, n), this) : re(this, e)
                    }
                }

                function re(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function se(e, t, n) {
                    e.isValid() && !isNaN(n) && ("FullYear" === t && te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), ue(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
                }

                function ie(e) {
                    return e = F(e), T(this[e]) ? this[e]() : this
                }

                function oe(e, t) {
                    if ("object" == typeof e) {
                        e = C(e);
                        for (var n = z(e), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
                    } else if (e = F(e), T(this[e])) return this[e](t);
                    return this
                }

                function de(e, t) {
                    return (e % t + t) % t
                }

                function ue(e, t) {
                    if (isNaN(e) || isNaN(t)) return NaN;
                    var n = de(t, 12);
                    return e += (t - n) / 12, 1 === n ? te(e) ? 29 : 28 : 31 - n % 7 % 2
                }

                function le(e, t) {
                    return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Dr).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
                }

                function _e(e, t) {
                    return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Dr.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }

                function ce(e, t, n) {
                    var a, r, s, i = e.toLocaleLowerCase();
                    if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) s = c([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(s, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? (r = vr.call(this._shortMonthsParse, i), -1 !== r ? r : null) : (r = vr.call(this._longMonthsParse, i), -1 !== r ? r : null) : "MMM" === t ? -1 !== (r = vr.call(this._shortMonthsParse, i)) ? r : (r = vr.call(this._longMonthsParse, i), -1 !== r ? r : null) : -1 !== (r = vr.call(this._longMonthsParse, i)) ? r : (r = vr.call(this._shortMonthsParse, i), -1 !== r ? r : null)
                }

                function me(e, t, n) {
                    var a, r, s;
                    if (this._monthsParseExact) return ce.call(this, e, t, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
                        if (r = c([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
                        if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
                        if (!n && this._monthsParse[a].test(e)) return a
                    }
                }

                function he(e, t) {
                    var n;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t) if (/^\d+$/.test(t)) t = Y(t); else if (t = e.localeData().monthsParse(t), !o(t)) return e;
                    return n = Math.min(e.date(), ue(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
                }

                function fe(e) {
                    return null != e ? (he(this, e), t.updateOffset(this, !0), this) : re(this, "Month")
                }

                function pe() {
                    return ue(this.year(), this.month())
                }

                function ye(e) {
                    return this._monthsParseExact ? (l(this, "_monthsRegex") || Le.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = br), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }

                function Me(e) {
                    return this._monthsParseExact ? (l(this, "_monthsRegex") || Le.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Sr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }

                function Le() {
                    function e(e, t) {
                        return t.length - e.length
                    }

                    var t, n, a = [], r = [], s = [];
                    for (t = 0; t < 12; t++) n = c([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
                    for (a.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++) a[t] = K(a[t]), r[t] = K(r[t]);
                    for (t = 0; t < 24; t++) s[t] = K(s[t]);
                    this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
                }

                function ge(e, t, n, a, r, s, i) {
                    var o;
                    return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, a, r, s, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, a, r, s, i), o
                }

                function Ye(e) {
                    var t;
                    if (e < 100 && e >= 0) {
                        var n = Array.prototype.slice.call(arguments);
                        n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
                    } else t = new Date(Date.UTC.apply(null, arguments));
                    return t
                }

                function ve(e, t, n) {
                    var a = 7 + t - n;
                    return -(7 + Ye(e, 0, a).getUTCDay() - t) % 7 + a - 1
                }

                function ke(e, t, n, a, r) {
                    var s, i, o = (7 + n - a) % 7, d = ve(e, a, r), u = 1 + 7 * (t - 1) + o + d;
                    return u <= 0 ? (s = e - 1, i = ee(s) + u) : u > ee(e) ? (s = e + 1, i = u - ee(e)) : (s = e, i = u), {
                        year: s,
                        dayOfYear: i
                    }
                }

                function De(e, t, n) {
                    var a, r, s = ve(e.year(), t, n), i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
                    return i < 1 ? (r = e.year() - 1, a = i + we(r, t, n)) : i > we(e.year(), t, n) ? (a = i - we(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = i), {
                        week: a,
                        year: r
                    }
                }

                function we(e, t, n) {
                    var a = ve(e, t, n), r = ve(e + 1, t, n);
                    return (ee(e) - a + r) / 7
                }

                function Te(e) {
                    return De(e, this._week.dow, this._week.doy).week
                }

                function be() {
                    return this._week.dow
                }

                function Se() {
                    return this._week.doy
                }

                function xe(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }

                function He(e) {
                    var t = De(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }

                function je(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
                }

                function Ee(e, t) {
                    return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                }

                function Oe(e, t) {
                    return e.slice(t, 7).concat(e.slice(0, t))
                }

                function Ae(e, t) {
                    var n = a(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                    return !0 === e ? Oe(n, this._week.dow) : e ? n[e.day()] : n
                }

                function Pe(e) {
                    return !0 === e ? Oe(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }

                function We(e) {
                    return !0 === e ? Oe(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }

                function Fe(e, t, n) {
                    var a, r, s, i = e.toLocaleLowerCase();
                    if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) s = c([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(s, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? (r = vr.call(this._weekdaysParse, i), -1 !== r ? r : null) : "ddd" === t ? (r = vr.call(this._shortWeekdaysParse, i), -1 !== r ? r : null) : (r = vr.call(this._minWeekdaysParse, i), -1 !== r ? r : null) : "dddd" === t ? -1 !== (r = vr.call(this._weekdaysParse, i)) ? r : -1 !== (r = vr.call(this._shortWeekdaysParse, i)) ? r : (r = vr.call(this._minWeekdaysParse, i), -1 !== r ? r : null) : "ddd" === t ? -1 !== (r = vr.call(this._shortWeekdaysParse, i)) ? r : -1 !== (r = vr.call(this._weekdaysParse, i)) ? r : (r = vr.call(this._minWeekdaysParse, i), -1 !== r ? r : null) : -1 !== (r = vr.call(this._minWeekdaysParse, i)) ? r : -1 !== (r = vr.call(this._weekdaysParse, i)) ? r : (r = vr.call(this._shortWeekdaysParse, i), -1 !== r ? r : null)
                }

                function Ce(e, t, n) {
                    var a, r, s;
                    if (this._weekdaysParseExact) return Fe.call(this, e, t, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
                        if (r = c([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
                        if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
                        if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
                        if (!n && this._weekdaysParse[a].test(e)) return a
                    }
                }

                function Ne(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = je(e, this.localeData()), this.add(e - t, "d")) : t
                }

                function ze(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }

                function Ie(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        var t = Ee(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }

                function Re(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Or), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }

                function Je(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ar), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }

                function qe(e) {
                    return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Pr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }

                function Ue() {
                    function e(e, t) {
                        return t.length - e.length
                    }

                    var t, n, a, r, s, i = [], o = [], d = [], u = [];
                    for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), i.push(a), o.push(r), d.push(s), u.push(a), u.push(r), u.push(s);
                    for (i.sort(e), o.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) o[t] = K(o[t]), d[t] = K(d[t]), u[t] = K(u[t]);
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
                }

                function Ve() {
                    return this.hours() % 12 || 12
                }

                function Be() {
                    return this.hours() || 24
                }

                function Ge(e, t) {
                    R(e, 0, 0, function () {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function $e(e, t) {
                    return t._meridiemParse
                }

                function Ke(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }

                function Qe(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }

                function Xe(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function Ze(e) {
                    for (var t, n, a, r, s = 0; s < e.length;) {
                        for (r = Xe(e[s]).split("-"), t = r.length, n = Xe(e[s + 1]), n = n ? n.split("-") : null; t > 0;) {
                            if (a = et(r.slice(0, t).join("-"))) return a;
                            if (n && n.length >= t && v(r, n, !0) >= t - 1) break;
                            t--
                        }
                        s++
                    }
                    return Wr
                }

                function et(t) {
                    var a = null;
                    if (!zr[t] && void 0 !== e && e && e.exports) try {
                        a = Wr._abbr;
                        n(1177)("./" + t), tt(a)
                    } catch (e) {
                    }
                    return zr[t]
                }

                function tt(e, t) {
                    var n;
                    return e && (n = i(t) ? rt(e) : nt(e, t), n ? Wr = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Wr._abbr
                }

                function nt(e, t) {
                    if (null !== t) {
                        var n, a = Nr;
                        if (t.abbr = e, null != zr[e]) w("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = zr[e]._config; else if (null != t.parentLocale) if (null != zr[t.parentLocale]) a = zr[t.parentLocale]._config; else {
                            if (null == (n = et(t.parentLocale))) return Ir[t.parentLocale] || (Ir[t.parentLocale] = []), Ir[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            a = n._config
                        }
                        return zr[e] = new x(S(a, t)), Ir[e] && Ir[e].forEach(function (e) {
                            nt(e.name, e.config)
                        }), tt(e), zr[e]
                    }
                    return delete zr[e], null
                }

                function at(e, t) {
                    if (null != t) {
                        var n, a, r = Nr;
                        a = et(e), null != a && (r = a._config), t = S(r, t), n = new x(t), n.parentLocale = zr[e], zr[e] = n, tt(e)
                    } else null != zr[e] && (null != zr[e].parentLocale ? zr[e] = zr[e].parentLocale : null != zr[e] && delete zr[e]);
                    return zr[e]
                }

                function rt(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Wr;
                    if (!a(e)) {
                        if (t = et(e)) return t;
                        e = [e]
                    }
                    return Ze(e)
                }

                function st() {
                    return Fa(zr)
                }

                function it(e) {
                    var t, n = e._a;
                    return n && -2 === h(e).overflow && (t = n[hr] < 0 || n[hr] > 11 ? hr : n[fr] < 1 || n[fr] > ue(n[mr], n[hr]) ? fr : n[pr] < 0 || n[pr] > 24 || 24 === n[pr] && (0 !== n[yr] || 0 !== n[Mr] || 0 !== n[Lr]) ? pr : n[yr] < 0 || n[yr] > 59 ? yr : n[Mr] < 0 || n[Mr] > 59 ? Mr : n[Lr] < 0 || n[Lr] > 999 ? Lr : -1, h(e)._overflowDayOfYear && (t < mr || t > fr) && (t = fr), h(e)._overflowWeeks && -1 === t && (t = gr), h(e)._overflowWeekday && -1 === t && (t = Yr), h(e).overflow = t), e
                }

                function ot(e, t, n) {
                    return null != e ? e : null != t ? t : n
                }

                function dt(e) {
                    var n = new Date(t.now());
                    return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
                }

                function ut(e) {
                    var t, n, a, r, s, i = [];
                    if (!e._d) {
                        for (a = dt(e), e._w && null == e._a[fr] && null == e._a[hr] && lt(e), null != e._dayOfYear && (s = ot(e._a[mr], a[mr]), (e._dayOfYear > ee(s) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = Ye(s, 0, e._dayOfYear), e._a[hr] = n.getUTCMonth(), e._a[fr] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = i[t] = a[t];
                        for (; t < 7; t++) e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[pr] && 0 === e._a[yr] && 0 === e._a[Mr] && 0 === e._a[Lr] && (e._nextDay = !0, e._a[pr] = 0), e._d = (e._useUTC ? Ye : ge).apply(null, i), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[pr] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (h(e).weekdayMismatch = !0)
                    }
                }

                function lt(e) {
                    var t, n, a, r, s, i, o, d;
                    if (t = e._w, null != t.GG || null != t.W || null != t.E) s = 1, i = 4, n = ot(t.GG, e._a[mr], De(bt(), 1, 4).year), a = ot(t.W, 1), ((r = ot(t.E, 1)) < 1 || r > 7) && (d = !0); else {
                        s = e._locale._week.dow, i = e._locale._week.doy;
                        var u = De(bt(), s, i);
                        n = ot(t.gg, e._a[mr], u.year), a = ot(t.w, u.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : r = s
                    }
                    a < 1 || a > we(n, s, i) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = ke(n, a, r, s, i), e._a[mr] = o.year, e._dayOfYear = o.dayOfYear)
                }

                function _t(e) {
                    var t, n, a, r, s, i, o = e._i, d = Rr.exec(o) || Jr.exec(o);
                    if (d) {
                        for (h(e).iso = !0, t = 0, n = Ur.length; t < n; t++) if (Ur[t][1].exec(d[1])) {
                            r = Ur[t][0], a = !1 !== Ur[t][2];
                            break
                        }
                        if (null == r) return void(e._isValid = !1);
                        if (d[3]) {
                            for (t = 0, n = Vr.length; t < n; t++) if (Vr[t][1].exec(d[3])) {
                                s = (d[2] || " ") + Vr[t][0];
                                break
                            }
                            if (null == s) return void(e._isValid = !1)
                        }
                        if (!a && null != s) return void(e._isValid = !1);
                        if (d[4]) {
                            if (!qr.exec(d[4])) return void(e._isValid = !1);
                            i = "Z"
                        }
                        e._f = r + (s || "") + (i || ""), Lt(e)
                    } else e._isValid = !1
                }

                function ct(e, t, n, a, r, s) {
                    var i = [mt(e), Tr.indexOf(t), parseInt(n, 10), parseInt(a, 10), parseInt(r, 10)];
                    return s && i.push(parseInt(s, 10)), i
                }

                function mt(e) {
                    var t = parseInt(e, 10);
                    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
                }

                function ht(e) {
                    return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                }

                function ft(e, t, n) {
                    if (e) {
                        if (jr.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return h(n).weekdayMismatch = !0, n._isValid = !1, !1
                    }
                    return !0
                }

                function pt(e, t, n) {
                    if (e) return $r[e];
                    if (t) return 0;
                    var a = parseInt(n, 10), r = a % 100;
                    return (a - r) / 100 * 60 + r
                }

                function yt(e) {
                    var t = Gr.exec(ht(e._i));
                    if (t) {
                        var n = ct(t[4], t[3], t[2], t[5], t[6], t[7]);
                        if (!ft(t[1], n, e)) return;
                        e._a = n, e._tzm = pt(t[8], t[9], t[10]), e._d = Ye.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function Mt(e) {
                    var n = Br.exec(e._i);
                    if (null !== n) return void(e._d = new Date(+n[1]));
                    _t(e), !1 === e._isValid && (delete e._isValid, yt(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))
                }

                function Lt(e) {
                    if (e._f === t.ISO_8601) return void _t(e);
                    if (e._f === t.RFC_2822) return void yt(e);
                    e._a = [], h(e).empty = !0;
                    var n, a, r, s, i, o = "" + e._i, d = o.length, u = 0;
                    for (r = V(e._f, e._locale).match(qa) || [], n = 0; n < r.length; n++) s = r[n], a = (o.match(G(s, e)) || [])[0], a && (i = o.substr(0, o.indexOf(a)), i.length > 0 && h(e).unusedInput.push(i), o = o.slice(o.indexOf(a) + a.length), u += a.length), Ba[s] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(s), Z(s, a, e)) : e._strict && !a && h(e).unusedTokens.push(s);
                    h(e).charsLeftOver = d - u, o.length > 0 && h(e).unusedInput.push(o), e._a[pr] <= 12 && !0 === h(e).bigHour && e._a[pr] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[pr] = gt(e._locale, e._a[pr], e._meridiem), ut(e), it(e)
                }

                function gt(e, t, n) {
                    var a;
                    return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n), a && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
                }

                function Yt(e) {
                    var t, n, a, r, s;
                    if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (r = 0; r < e._f.length; r++) s = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Lt(t), f(t) && (s += h(t).charsLeftOver, s += 10 * h(t).unusedTokens.length, h(t).score = s, (null == a || s < a) && (a = s, n = t));
                    _(e, n || t)
                }

                function vt(e) {
                    if (!e._d) {
                        var t = C(e._i);
                        e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                            return e && parseInt(e, 10)
                        }), ut(e)
                    }
                }

                function kt(e) {
                    var t = new M(it(Dt(e)));
                    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                }

                function Dt(e) {
                    var t = e._i, n = e._f;
                    return e._locale = e._locale || rt(e._l), null === t || void 0 === n && "" === t ? p({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), L(t) ? new M(it(t)) : (d(t) ? e._d = t : a(n) ? Yt(e) : n ? Lt(e) : wt(e), f(e) || (e._d = null), e))
                }

                function wt(e) {
                    var n = e._i;
                    i(n) ? e._d = new Date(t.now()) : d(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? Mt(e) : a(n) ? (e._a = u(n.slice(0), function (e) {
                        return parseInt(e, 10)
                    }), ut(e)) : r(n) ? vt(e) : o(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
                }

                function Tt(e, t, n, i, o) {
                    var d = {};
                    return !0 !== n && !1 !== n || (i = n, n = void 0), (r(e) && s(e) || a(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = o, d._l = n, d._i = e, d._f = t, d._strict = i, kt(d)
                }

                function bt(e, t, n, a) {
                    return Tt(e, t, n, a, !1)
                }

                function St(e, t) {
                    var n, r;
                    if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return bt();
                    for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
                    return n
                }

                function xt() {
                    return St("isBefore", [].slice.call(arguments, 0))
                }

                function Ht() {
                    return St("isAfter", [].slice.call(arguments, 0))
                }

                function jt(e) {
                    for (var t in e) if (-1 === vr.call(Zr, t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var n = !1, a = 0; a < Zr.length; ++a) if (e[Zr[a]]) {
                        if (n) return !1;
                        parseFloat(e[Zr[a]]) !== Y(e[Zr[a]]) && (n = !0)
                    }
                    return !0
                }

                function Et() {
                    return this._isValid
                }

                function Ot() {
                    return Xt(NaN)
                }

                function At(e) {
                    var t = C(e), n = t.year || 0, a = t.quarter || 0, r = t.month || 0, s = t.week || t.isoWeek || 0,
                        i = t.day || 0, o = t.hour || 0, d = t.minute || 0, u = t.second || 0, l = t.millisecond || 0;
                    this._isValid = jt(t), this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60, this._days = +i + 7 * s, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = rt(), this._bubble()
                }

                function Pt(e) {
                    return e instanceof At
                }

                function Wt(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function Ft(e, t) {
                    R(e, 0, 0, function () {
                        var e = this.utcOffset(), n = "+";
                        return e < 0 && (e = -e, n = "-"), n + I(~~(e / 60), 2) + t + I(~~e % 60, 2)
                    })
                }

                function Ct(e, t) {
                    var n = (t || "").match(e);
                    if (null === n) return null;
                    var a = n[n.length - 1] || [], r = (a + "").match(es) || ["-", 0, 0], s = 60 * r[1] + Y(r[2]);
                    return 0 === s ? 0 : "+" === r[0] ? s : -s
                }

                function Nt(e, n) {
                    var a, r;
                    return n._isUTC ? (a = n.clone(), r = (L(e) || d(e) ? e.valueOf() : bt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), t.updateOffset(a, !1), a) : bt(e).local()
                }

                function zt(e) {
                    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                }

                function It(e, n, a) {
                    var r, s = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Ct(dr, e))) return this
                        } else Math.abs(e) < 16 && !a && (e *= 60);
                        return !this._isUTC && n && (r = zt(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), s !== e && (!n || this._changeInProgress ? an(this, Xt(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? s : zt(this)
                }

                function Rt(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }

                function Jt(e) {
                    return this.utcOffset(0, e)
                }

                function qt(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(zt(this), "m")), this
                }

                function Ut() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                        var e = Ct(or, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }

                function Vt(e) {
                    return !!this.isValid() && (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }

                function Bt() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function Gt() {
                    if (!i(this._isDSTShifted)) return this._isDSTShifted;
                    var e = {};
                    if (y(e, this), e = Dt(e), e._a) {
                        var t = e._isUTC ? c(e._a) : bt(e._a);
                        this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                }

                function $t() {
                    return !!this.isValid() && !this._isUTC
                }

                function Kt() {
                    return !!this.isValid() && this._isUTC
                }

                function Qt() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function Xt(e, t) {
                    var n, a, r, s = e, i = null;
                    return Pt(e) ? s = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : o(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (i = ts.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = {
                        y: 0,
                        d: Y(i[fr]) * n,
                        h: Y(i[pr]) * n,
                        m: Y(i[yr]) * n,
                        s: Y(i[Mr]) * n,
                        ms: Y(Wt(1e3 * i[Lr])) * n
                    }) : (i = ns.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = {
                        y: Zt(i[2], n),
                        M: Zt(i[3], n),
                        w: Zt(i[4], n),
                        d: Zt(i[5], n),
                        h: Zt(i[6], n),
                        m: Zt(i[7], n),
                        s: Zt(i[8], n)
                    }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = tn(bt(s.from), bt(s.to)), s = {}, s.ms = r.milliseconds, s.M = r.months), a = new At(s), Pt(e) && l(e, "_locale") && (a._locale = e._locale), a
                }

                function Zt(e, t) {
                    var n = e && parseFloat(e.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * t
                }

                function en(e, t) {
                    var n = {};
                    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
                }

                function tn(e, t) {
                    var n;
                    return e.isValid() && t.isValid() ? (t = Nt(t, e), e.isBefore(t) ? n = en(e, t) : (n = en(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function nn(e, t) {
                    return function (n, a) {
                        var r, s;
                        return null === a || isNaN(+a) || (w(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = a, a = s), n = "string" == typeof n ? +n : n, r = Xt(n, a), an(this, r, e), this
                    }
                }

                function an(e, n, a, r) {
                    var s = n._milliseconds, i = Wt(n._days), o = Wt(n._months);
                    e.isValid() && (r = null == r || r, o && he(e, re(e, "Month") + o * a), i && se(e, "Date", re(e, "Date") + i * a), s && e._d.setTime(e._d.valueOf() + s * a), r && t.updateOffset(e, i || o))
                }

                function rn(e, t) {
                    var n = e.diff(t, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }

                function sn(e, n) {
                    var a = e || bt(), r = Nt(a, this).startOf("day"), s = t.calendarFormat(this, r) || "sameElse",
                        i = n && (T(n[s]) ? n[s].call(this, a) : n[s]);
                    return this.format(i || this.localeData().calendar(s, this, bt(a)))
                }

                function on() {
                    return new M(this)
                }

                function dn(e, t) {
                    var n = L(e) ? e : bt(e);
                    return !(!this.isValid() || !n.isValid()) && (t = F(t) || "millisecond", "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
                }

                function un(e, t) {
                    var n = L(e) ? e : bt(e);
                    return !(!this.isValid() || !n.isValid()) && (t = F(t) || "millisecond", "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
                }

                function ln(e, t, n, a) {
                    var r = L(e) ? e : bt(e), s = L(t) ? t : bt(t);
                    return !!(this.isValid() && r.isValid() && s.isValid()) && (a = a || "()", ("(" === a[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === a[1] ? this.isBefore(s, n) : !this.isAfter(s, n)))
                }

                function _n(e, t) {
                    var n, a = L(e) ? e : bt(e);
                    return !(!this.isValid() || !a.isValid()) && (t = F(t) || "millisecond", "millisecond" === t ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
                }

                function cn(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }

                function mn(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }

                function hn(e, t, n) {
                    var a, r, s;
                    if (!this.isValid()) return NaN;
                    if (a = Nt(e, this), !a.isValid()) return NaN;
                    switch (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = F(t)) {
                        case"year":
                            s = fn(this, a) / 12;
                            break;
                        case"month":
                            s = fn(this, a);
                            break;
                        case"quarter":
                            s = fn(this, a) / 3;
                            break;
                        case"second":
                            s = (this - a) / 1e3;
                            break;
                        case"minute":
                            s = (this - a) / 6e4;
                            break;
                        case"hour":
                            s = (this - a) / 36e5;
                            break;
                        case"day":
                            s = (this - a - r) / 864e5;
                            break;
                        case"week":
                            s = (this - a - r) / 6048e5;
                            break;
                        default:
                            s = this - a
                    }
                    return n ? s : g(s)
                }

                function fn(e, t) {
                    var n, a, r = 12 * (t.year() - e.year()) + (t.month() - e.month()), s = e.clone().add(r, "months");
                    return t - s < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - s) / (s - n)) : (n = e.clone().add(r + 1, "months"), a = (t - s) / (n - s)), -(r + a) || 0
                }

                function pn() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function yn(e) {
                    if (!this.isValid()) return null;
                    var t = !0 !== e, n = t ? this.clone().utc() : this;
                    return n.year() < 0 || n.year() > 9999 ? U(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : T(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", U(n, "Z")) : U(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }

                function Mn() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e = "moment", t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                    var n = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        r = t + '[")]';
                    return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + r)
                }

                function Ln(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var n = U(this, e);
                    return this.localeData().postformat(n)
                }

                function gn(e, t) {
                    return this.isValid() && (L(e) && e.isValid() || bt(e).isValid()) ? Xt({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function Yn(e) {
                    return this.from(bt(), e)
                }

                function vn(e, t) {
                    return this.isValid() && (L(e) && e.isValid() || bt(e).isValid()) ? Xt({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function kn(e) {
                    return this.to(bt(), e)
                }

                function Dn(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (t = rt(e), null != t && (this._locale = t), this)
                }

                function wn() {
                    return this._locale
                }

                function Tn(e, t) {
                    return (e % t + t) % t
                }

                function bn(e, t, n) {
                    return e < 100 && e >= 0 ? new Date(e + 400, t, n) - us : new Date(e, t, n).valueOf()
                }

                function Sn(e, t, n) {
                    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - us : Date.UTC(e, t, n)
                }

                function xn(e) {
                    var n;
                    if (void 0 === (e = F(e)) || "millisecond" === e || !this.isValid()) return this;
                    var a = this._isUTC ? Sn : bn;
                    switch (e) {
                        case"year":
                            n = a(this.year(), 0, 1);
                            break;
                        case"quarter":
                            n = a(this.year(), this.month() - this.month() % 3, 1);
                            break;
                        case"month":
                            n = a(this.year(), this.month(), 1);
                            break;
                        case"week":
                            n = a(this.year(), this.month(), this.date() - this.weekday());
                            break;
                        case"isoWeek":
                            n = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                            break;
                        case"day":
                        case"date":
                            n = a(this.year(), this.month(), this.date());
                            break;
                        case"hour":
                            n = this._d.valueOf(), n -= Tn(n + (this._isUTC ? 0 : this.utcOffset() * os), ds);
                            break;
                        case"minute":
                            n = this._d.valueOf(), n -= Tn(n, os);
                            break;
                        case"second":
                            n = this._d.valueOf(), n -= Tn(n, is)
                    }
                    return this._d.setTime(n), t.updateOffset(this, !0), this
                }

                function Hn(e) {
                    var n;
                    if (void 0 === (e = F(e)) || "millisecond" === e || !this.isValid()) return this;
                    var a = this._isUTC ? Sn : bn;
                    switch (e) {
                        case"year":
                            n = a(this.year() + 1, 0, 1) - 1;
                            break;
                        case"quarter":
                            n = a(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                            break;
                        case"month":
                            n = a(this.year(), this.month() + 1, 1) - 1;
                            break;
                        case"week":
                            n = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                            break;
                        case"isoWeek":
                            n = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                            break;
                        case"day":
                        case"date":
                            n = a(this.year(), this.month(), this.date() + 1) - 1;
                            break;
                        case"hour":
                            n = this._d.valueOf(), n += ds - Tn(n + (this._isUTC ? 0 : this.utcOffset() * os), ds) - 1;
                            break;
                        case"minute":
                            n = this._d.valueOf(), n += os - Tn(n, os) - 1;
                            break;
                        case"second":
                            n = this._d.valueOf(), n += is - Tn(n, is) - 1
                    }
                    return this._d.setTime(n), t.updateOffset(this, !0), this
                }

                function jn() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function En() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function On() {
                    return new Date(this.valueOf())
                }

                function An() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }

                function Pn() {
                    var e = this;
                    return {
                        years: e.year(),
                        months: e.month(),
                        date: e.date(),
                        hours: e.hours(),
                        minutes: e.minutes(),
                        seconds: e.seconds(),
                        milliseconds: e.milliseconds()
                    }
                }

                function Wn() {
                    return this.isValid() ? this.toISOString() : null
                }

                function Fn() {
                    return f(this)
                }

                function Cn() {
                    return _({}, h(this))
                }

                function Nn() {
                    return h(this).overflow
                }

                function zn() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function In(e, t) {
                    R(0, [e, e.length], 0, t)
                }

                function Rn(e) {
                    return Vn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function Jn(e) {
                    return Vn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function qn() {
                    return we(this.year(), 1, 4)
                }

                function Un() {
                    var e = this.localeData()._week;
                    return we(this.year(), e.dow, e.doy)
                }

                function Vn(e, t, n, a, r) {
                    var s;
                    return null == e ? De(this, a, r).year : (s = we(e, a, r), t > s && (t = s), Bn.call(this, e, t, n, a, r))
                }

                function Bn(e, t, n, a, r) {
                    var s = ke(e, t, n, a, r), i = Ye(s.year, 0, s.dayOfYear);
                    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
                }

                function Gn(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }

                function $n(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }

                function Kn(e, t) {
                    t[Lr] = Y(1e3 * ("0." + e))
                }

                function Qn() {
                    return this._isUTC ? "UTC" : ""
                }

                function Xn() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function Zn(e) {
                    return bt(1e3 * e)
                }

                function ea() {
                    return bt.apply(null, arguments).parseZone()
                }

                function ta(e) {
                    return e
                }

                function na(e, t, n, a) {
                    var r = rt(), s = c().set(a, t);
                    return r[n](s, e)
                }

                function aa(e, t, n) {
                    if (o(e) && (t = e, e = void 0), e = e || "", null != t) return na(e, t, n, "month");
                    var a, r = [];
                    for (a = 0; a < 12; a++) r[a] = na(e, a, n, "month");
                    return r
                }

                function ra(e, t, n, a) {
                    "boolean" == typeof e ? (o(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, o(t) && (n = t, t = void 0), t = t || "");
                    var r = rt(), s = e ? r._week.dow : 0;
                    if (null != n) return na(t, (n + s) % 7, a, "day");
                    var i, d = [];
                    for (i = 0; i < 7; i++) d[i] = na(t, (i + s) % 7, a, "day");
                    return d
                }

                function sa(e, t) {
                    return aa(e, t, "months")
                }

                function ia(e, t) {
                    return aa(e, t, "monthsShort")
                }

                function oa(e, t, n) {
                    return ra(e, t, n, "weekdays")
                }

                function da(e, t, n) {
                    return ra(e, t, n, "weekdaysShort")
                }

                function ua(e, t, n) {
                    return ra(e, t, n, "weekdaysMin")
                }

                function la() {
                    var e = this._data;
                    return this._milliseconds = ys(this._milliseconds), this._days = ys(this._days), this._months = ys(this._months), e.milliseconds = ys(e.milliseconds), e.seconds = ys(e.seconds), e.minutes = ys(e.minutes), e.hours = ys(e.hours), e.months = ys(e.months), e.years = ys(e.years), this
                }

                function _a(e, t, n, a) {
                    var r = Xt(t, n);
                    return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble()
                }

                function ca(e, t) {
                    return _a(this, e, t, 1)
                }

                function ma(e, t) {
                    return _a(this, e, t, -1)
                }

                function ha(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function fa() {
                    var e, t, n, a, r, s = this._milliseconds, i = this._days, o = this._months, d = this._data;
                    return s >= 0 && i >= 0 && o >= 0 || s <= 0 && i <= 0 && o <= 0 || (s += 864e5 * ha(ya(o) + i), i = 0, o = 0), d.milliseconds = s % 1e3, e = g(s / 1e3), d.seconds = e % 60, t = g(e / 60), d.minutes = t % 60, n = g(t / 60), d.hours = n % 24, i += g(n / 24), r = g(pa(i)), o += r, i -= ha(ya(r)), a = g(o / 12), o %= 12, d.days = i, d.months = o, d.years = a, this
                }

                function pa(e) {
                    return 4800 * e / 146097
                }

                function ya(e) {
                    return 146097 * e / 4800
                }

                function Ma(e) {
                    if (!this.isValid()) return NaN;
                    var t, n, a = this._milliseconds;
                    if ("month" === (e = F(e)) || "quarter" === e || "year" === e) switch (t = this._days + a / 864e5, n = this._months + pa(t), e) {
                        case"month":
                            return n;
                        case"quarter":
                            return n / 3;
                        case"year":
                            return n / 12
                    } else switch (t = this._days + Math.round(ya(this._months)), e) {
                        case"week":
                            return t / 7 + a / 6048e5;
                        case"day":
                            return t + a / 864e5;
                        case"hour":
                            return 24 * t + a / 36e5;
                        case"minute":
                            return 1440 * t + a / 6e4;
                        case"second":
                            return 86400 * t + a / 1e3;
                        case"millisecond":
                            return Math.floor(864e5 * t) + a;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                }

                function La() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * Y(this._months / 12) : NaN
                }

                function ga(e) {
                    return function () {
                        return this.as(e)
                    }
                }

                function Ya() {
                    return Xt(this)
                }

                function va(e) {
                    return e = F(e), this.isValid() ? this[e + "s"]() : NaN
                }

                function ka(e) {
                    return function () {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }

                function Da() {
                    return g(this.days() / 7)
                }

                function wa(e, t, n, a, r) {
                    return r.relativeTime(t || 1, !!n, e, a)
                }

                function Ta(e, t, n) {
                    var a = Xt(e).abs(), r = As(a.as("s")), s = As(a.as("m")), i = As(a.as("h")), o = As(a.as("d")),
                        d = As(a.as("M")), u = As(a.as("y")),
                        l = r <= Ps.ss && ["s", r] || r < Ps.s && ["ss", r] || s <= 1 && ["m"] || s < Ps.m && ["mm", s] || i <= 1 && ["h"] || i < Ps.h && ["hh", i] || o <= 1 && ["d"] || o < Ps.d && ["dd", o] || d <= 1 && ["M"] || d < Ps.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
                    return l[2] = t, l[3] = +e > 0, l[4] = n, wa.apply(null, l)
                }

                function ba(e) {
                    return void 0 === e ? As : "function" == typeof e && (As = e, !0)
                }

                function Sa(e, t) {
                    return void 0 !== Ps[e] && (void 0 === t ? Ps[e] : (Ps[e] = t, "s" === e && (Ps.ss = t - 1), !0))
                }

                function xa(e) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t = this.localeData(), n = Ta(this, !e, t);
                    return e && (n = t.pastFuture(+this, n)), t.postformat(n)
                }

                function Ha(e) {
                    return (e > 0) - (e < 0) || +e
                }

                function ja() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, t, n, a = Ws(this._milliseconds) / 1e3, r = Ws(this._days), s = Ws(this._months);
                    e = g(a / 60), t = g(e / 60), a %= 60, e %= 60, n = g(s / 12), s %= 12;
                    var i = n, o = s, d = r, u = t, l = e, _ = a ? a.toFixed(3).replace(/\.?0+$/, "") : "",
                        c = this.asSeconds();
                    if (!c) return "P0D";
                    var m = c < 0 ? "-" : "", h = Ha(this._months) !== Ha(c) ? "-" : "",
                        f = Ha(this._days) !== Ha(c) ? "-" : "", p = Ha(this._milliseconds) !== Ha(c) ? "-" : "";
                    return m + "P" + (i ? h + i + "Y" : "") + (o ? h + o + "M" : "") + (d ? f + d + "D" : "") + (u || l || _ ? "T" : "") + (u ? p + u + "H" : "") + (l ? p + l + "M" : "") + (_ ? p + _ + "S" : "")
                }

                var Ea, Oa;
                Oa = Array.prototype.some ? Array.prototype.some : function (e) {
                    for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++) if (a in t && e.call(this, t[a], a, t)) return !0;
                    return !1
                };
                var Aa = t.momentProperties = [], Pa = !1, Wa = {};
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
                var Fa;
                Fa = Object.keys ? Object.keys : function (e) {
                    var t, n = [];
                    for (t in e) l(e, t) && n.push(t);
                    return n
                };
                var Ca = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    }, Na = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    }, za = /\d{1,2}/, Ia = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    }, Ra = {}, Ja = {},
                    qa = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    Ua = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Va = {}, Ba = {}, Ga = /\d/, $a = /\d\d/,
                    Ka = /\d{3}/, Qa = /\d{4}/, Xa = /[+-]?\d{6}/, Za = /\d\d?/, er = /\d\d\d\d?/, tr = /\d\d\d\d\d\d?/,
                    nr = /\d{1,3}/, ar = /\d{1,4}/, rr = /[+-]?\d{1,6}/, sr = /\d+/, ir = /[+-]?\d+/,
                    or = /Z|[+-]\d\d:?\d\d/gi, dr = /Z|[+-]\d\d(?::?\d\d)?/gi, ur = /[+-]?\d+(\.\d{1,3})?/,
                    lr = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                    _r = {}, cr = {}, mr = 0, hr = 1, fr = 2, pr = 3, yr = 4, Mr = 5, Lr = 6, gr = 7, Yr = 8;
                R("Y", 0, 0, function () {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), R(0, ["YY", 2], 0, function () {
                    return this.year() % 100
                }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), W("year", "y"), N("year", 1), B("Y", ir), B("YY", Za, $a), B("YYYY", ar, Qa), B("YYYYY", rr, Xa), B("YYYYYY", rr, Xa), Q(["YYYYY", "YYYYYY"], mr), Q("YYYY", function (e, n) {
                    n[mr] = 2 === e.length ? t.parseTwoDigitYear(e) : Y(e)
                }), Q("YY", function (e, n) {
                    n[mr] = t.parseTwoDigitYear(e)
                }), Q("Y", function (e, t) {
                    t[mr] = parseInt(e, 10)
                }), t.parseTwoDigitYear = function (e) {
                    return Y(e) + (Y(e) > 68 ? 1900 : 2e3)
                };
                var vr, kr = ae("FullYear", !0);
                vr = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                    var t;
                    for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                    return -1
                }, R("M", ["MM", 2], "Mo", function () {
                    return this.month() + 1
                }), R("MMM", 0, 0, function (e) {
                    return this.localeData().monthsShort(this, e)
                }), R("MMMM", 0, 0, function (e) {
                    return this.localeData().months(this, e)
                }), W("month", "M"), N("month", 8), B("M", Za), B("MM", Za, $a), B("MMM", function (e, t) {
                    return t.monthsShortRegex(e)
                }), B("MMMM", function (e, t) {
                    return t.monthsRegex(e)
                }), Q(["M", "MM"], function (e, t) {
                    t[hr] = Y(e) - 1
                }), Q(["MMM", "MMMM"], function (e, t, n, a) {
                    var r = n._locale.monthsParse(e, a, n._strict);
                    null != r ? t[hr] = r : h(n).invalidMonth = e
                });
                var Dr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    wr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    Tr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), br = lr, Sr = lr;
                R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), W("week", "w"), W("isoWeek", "W"), N("week", 5), N("isoWeek", 5), B("w", Za), B("ww", Za, $a), B("W", Za), B("WW", Za, $a), X(["w", "ww", "W", "WW"], function (e, t, n, a) {
                    t[a.substr(0, 1)] = Y(e)
                });
                var xr = {dow: 0, doy: 6};
                R("d", 0, "do", "day"), R("dd", 0, 0, function (e) {
                    return this.localeData().weekdaysMin(this, e)
                }), R("ddd", 0, 0, function (e) {
                    return this.localeData().weekdaysShort(this, e)
                }), R("dddd", 0, 0, function (e) {
                    return this.localeData().weekdays(this, e)
                }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), W("day", "d"), W("weekday", "e"), W("isoWeekday", "E"), N("day", 11), N("weekday", 11), N("isoWeekday", 11), B("d", Za), B("e", Za), B("E", Za), B("dd", function (e, t) {
                    return t.weekdaysMinRegex(e)
                }), B("ddd", function (e, t) {
                    return t.weekdaysShortRegex(e)
                }), B("dddd", function (e, t) {
                    return t.weekdaysRegex(e)
                }), X(["dd", "ddd", "dddd"], function (e, t, n, a) {
                    var r = n._locale.weekdaysParse(e, a, n._strict);
                    null != r ? t.d = r : h(n).invalidWeekday = e
                }), X(["d", "e", "E"], function (e, t, n, a) {
                    t[a] = Y(e)
                });
                var Hr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    jr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Er = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Or = lr,
                    Ar = lr, Pr = lr;
                R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, Ve), R("k", ["kk", 2], 0, Be), R("hmm", 0, 0, function () {
                    return "" + Ve.apply(this) + I(this.minutes(), 2)
                }), R("hmmss", 0, 0, function () {
                    return "" + Ve.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
                }), R("Hmm", 0, 0, function () {
                    return "" + this.hours() + I(this.minutes(), 2)
                }), R("Hmmss", 0, 0, function () {
                    return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
                }), Ge("a", !0), Ge("A", !1), W("hour", "h"), N("hour", 13), B("a", $e), B("A", $e), B("H", Za), B("h", Za), B("k", Za), B("HH", Za, $a), B("hh", Za, $a), B("kk", Za, $a), B("hmm", er), B("hmmss", tr), B("Hmm", er), B("Hmmss", tr), Q(["H", "HH"], pr), Q(["k", "kk"], function (e, t, n) {
                    var a = Y(e);
                    t[pr] = 24 === a ? 0 : a
                }), Q(["a", "A"], function (e, t, n) {
                    n._isPm = n._locale.isPM(e), n._meridiem = e
                }), Q(["h", "hh"], function (e, t, n) {
                    t[pr] = Y(e), h(n).bigHour = !0
                }), Q("hmm", function (e, t, n) {
                    var a = e.length - 2;
                    t[pr] = Y(e.substr(0, a)), t[yr] = Y(e.substr(a)), h(n).bigHour = !0
                }), Q("hmmss", function (e, t, n) {
                    var a = e.length - 4, r = e.length - 2;
                    t[pr] = Y(e.substr(0, a)), t[yr] = Y(e.substr(a, 2)), t[Mr] = Y(e.substr(r)), h(n).bigHour = !0
                }), Q("Hmm", function (e, t, n) {
                    var a = e.length - 2;
                    t[pr] = Y(e.substr(0, a)), t[yr] = Y(e.substr(a))
                }), Q("Hmmss", function (e, t, n) {
                    var a = e.length - 4, r = e.length - 2;
                    t[pr] = Y(e.substr(0, a)), t[yr] = Y(e.substr(a, 2)), t[Mr] = Y(e.substr(r))
                });
                var Wr, Fr = /[ap]\.?m?\.?/i, Cr = ae("Hours", !0), Nr = {
                        calendar: Ca,
                        longDateFormat: Na,
                        invalidDate: "Invalid date",
                        ordinal: "%d",
                        dayOfMonthOrdinalParse: za,
                        relativeTime: Ia,
                        months: wr,
                        monthsShort: Tr,
                        week: xr,
                        weekdays: Hr,
                        weekdaysMin: Er,
                        weekdaysShort: jr,
                        meridiemParse: Fr
                    }, zr = {}, Ir = {},
                    Rr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    Jr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    qr = /Z|[+-]\d\d(?::?\d\d)?/,
                    Ur = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
                    Vr = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                    Br = /^\/?Date\((\-?\d+)/i,
                    Gr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                    $r = {
                        UT: 0,
                        GMT: 0,
                        EDT: -240,
                        EST: -300,
                        CDT: -300,
                        CST: -360,
                        MDT: -360,
                        MST: -420,
                        PDT: -420,
                        PST: -480
                    };
                t.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function () {
                }, t.RFC_2822 = function () {
                };
                var Kr = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                        var e = bt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : p()
                    }),
                    Qr = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                        var e = bt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : p()
                    }), Xr = function () {
                        return Date.now ? Date.now() : +new Date
                    }, Zr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                Ft("Z", ":"), Ft("ZZ", ""), B("Z", dr), B("ZZ", dr), Q(["Z", "ZZ"], function (e, t, n) {
                    n._useUTC = !0, n._tzm = Ct(dr, e)
                });
                var es = /([\+\-]|\d\d)/gi;
                t.updateOffset = function () {
                };
                var ts = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    ns = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
                Xt.fn = At.prototype, Xt.invalid = Ot;
                var as = nn(1, "add"), rs = nn(-1, "subtract");
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var ss = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                }), is = 1e3, os = 60 * is, ds = 60 * os, us = 3506328 * ds;
                R(0, ["gg", 2], 0, function () {
                    return this.weekYear() % 100
                }), R(0, ["GG", 2], 0, function () {
                    return this.isoWeekYear() % 100
                }), In("gggg", "weekYear"), In("ggggg", "weekYear"), In("GGGG", "isoWeekYear"), In("GGGGG", "isoWeekYear"), W("weekYear", "gg"), W("isoWeekYear", "GG"), N("weekYear", 1), N("isoWeekYear", 1), B("G", ir), B("g", ir), B("GG", Za, $a), B("gg", Za, $a), B("GGGG", ar, Qa), B("gggg", ar, Qa), B("GGGGG", rr, Xa), B("ggggg", rr, Xa), X(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
                    t[a.substr(0, 2)] = Y(e)
                }), X(["gg", "GG"], function (e, n, a, r) {
                    n[r] = t.parseTwoDigitYear(e)
                }), R("Q", 0, "Qo", "quarter"), W("quarter", "Q"), N("quarter", 7), B("Q", Ga), Q("Q", function (e, t) {
                    t[hr] = 3 * (Y(e) - 1)
                }), R("D", ["DD", 2], "Do", "date"), W("date", "D"), N("date", 9), B("D", Za), B("DD", Za, $a), B("Do", function (e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), Q(["D", "DD"], fr), Q("Do", function (e, t) {
                    t[fr] = Y(e.match(Za)[0])
                });
                var ls = ae("Date", !0);
                R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), W("dayOfYear", "DDD"), N("dayOfYear", 4), B("DDD", nr), B("DDDD", Ka), Q(["DDD", "DDDD"], function (e, t, n) {
                    n._dayOfYear = Y(e)
                }), R("m", ["mm", 2], 0, "minute"), W("minute", "m"), N("minute", 14), B("m", Za), B("mm", Za, $a), Q(["m", "mm"], yr);
                var _s = ae("Minutes", !1);
                R("s", ["ss", 2], 0, "second"), W("second", "s"), N("second", 15), B("s", Za), B("ss", Za, $a), Q(["s", "ss"], Mr);
                var cs = ae("Seconds", !1);
                R("S", 0, 0, function () {
                    return ~~(this.millisecond() / 100)
                }), R(0, ["SS", 2], 0, function () {
                    return ~~(this.millisecond() / 10)
                }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function () {
                    return 10 * this.millisecond()
                }), R(0, ["SSSSS", 5], 0, function () {
                    return 100 * this.millisecond()
                }), R(0, ["SSSSSS", 6], 0, function () {
                    return 1e3 * this.millisecond()
                }), R(0, ["SSSSSSS", 7], 0, function () {
                    return 1e4 * this.millisecond()
                }), R(0, ["SSSSSSSS", 8], 0, function () {
                    return 1e5 * this.millisecond()
                }), R(0, ["SSSSSSSSS", 9], 0, function () {
                    return 1e6 * this.millisecond()
                }), W("millisecond", "ms"), N("millisecond", 16), B("S", nr, Ga), B("SS", nr, $a), B("SSS", nr, Ka);
                var ms;
                for (ms = "SSSS"; ms.length <= 9; ms += "S") B(ms, sr);
                for (ms = "S"; ms.length <= 9; ms += "S") Q(ms, Kn);
                var hs = ae("Milliseconds", !1);
                R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
                var fs = M.prototype;
                fs.add = as, fs.calendar = sn, fs.clone = on, fs.diff = hn, fs.endOf = Hn, fs.format = Ln, fs.from = gn, fs.fromNow = Yn, fs.to = vn, fs.toNow = kn, fs.get = ie, fs.invalidAt = Nn, fs.isAfter = dn, fs.isBefore = un, fs.isBetween = ln, fs.isSame = _n, fs.isSameOrAfter = cn, fs.isSameOrBefore = mn, fs.isValid = Fn, fs.lang = ss, fs.locale = Dn, fs.localeData = wn, fs.max = Qr, fs.min = Kr, fs.parsingFlags = Cn, fs.set = oe, fs.startOf = xn, fs.subtract = rs, fs.toArray = An, fs.toObject = Pn, fs.toDate = On, fs.toISOString = yn, fs.inspect = Mn, fs.toJSON = Wn, fs.toString = pn, fs.unix = En, fs.valueOf = jn, fs.creationData = zn, fs.year = kr, fs.isLeapYear = ne, fs.weekYear = Rn, fs.isoWeekYear = Jn, fs.quarter = fs.quarters = Gn, fs.month = fe, fs.daysInMonth = pe, fs.week = fs.weeks = xe, fs.isoWeek = fs.isoWeeks = He, fs.weeksInYear = Un, fs.isoWeeksInYear = qn, fs.date = ls, fs.day = fs.days = Ne, fs.weekday = ze, fs.isoWeekday = Ie, fs.dayOfYear = $n, fs.hour = fs.hours = Cr, fs.minute = fs.minutes = _s, fs.second = fs.seconds = cs, fs.millisecond = fs.milliseconds = hs, fs.utcOffset = It, fs.utc = Jt, fs.local = qt, fs.parseZone = Ut, fs.hasAlignedHourOffset = Vt, fs.isDST = Bt, fs.isLocal = $t, fs.isUtcOffset = Kt, fs.isUtc = Qt, fs.isUTC = Qt, fs.zoneAbbr = Qn, fs.zoneName = Xn, fs.dates = D("dates accessor is deprecated. Use date instead.", ls), fs.months = D("months accessor is deprecated. Use month instead", fe), fs.years = D("years accessor is deprecated. Use year instead", kr), fs.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Rt), fs.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Gt);
                var ps = x.prototype;
                ps.calendar = H, ps.longDateFormat = j, ps.invalidDate = E, ps.ordinal = O, ps.preparse = ta, ps.postformat = ta, ps.relativeTime = A, ps.pastFuture = P, ps.set = b, ps.months = le, ps.monthsShort = _e, ps.monthsParse = me, ps.monthsRegex = Me, ps.monthsShortRegex = ye, ps.week = Te, ps.firstDayOfYear = Se, ps.firstDayOfWeek = be, ps.weekdays = Ae, ps.weekdaysMin = We, ps.weekdaysShort = Pe, ps.weekdaysParse = Ce, ps.weekdaysRegex = Re, ps.weekdaysShortRegex = Je, ps.weekdaysMinRegex = qe, ps.isPM = Ke, ps.meridiem = Qe, tt("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function (e) {
                        var t = e % 10;
                        return e + (1 === Y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                }), t.lang = D("moment.lang is deprecated. Use moment.locale instead.", tt), t.langData = D("moment.langData is deprecated. Use moment.localeData instead.", rt);
                var ys = Math.abs, Ms = ga("ms"), Ls = ga("s"), gs = ga("m"), Ys = ga("h"), vs = ga("d"), ks = ga("w"),
                    Ds = ga("M"), ws = ga("Q"), Ts = ga("y"), bs = ka("milliseconds"), Ss = ka("seconds"),
                    xs = ka("minutes"), Hs = ka("hours"), js = ka("days"), Es = ka("months"), Os = ka("years"),
                    As = Math.round, Ps = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11}, Ws = Math.abs, Fs = At.prototype;
                return Fs.isValid = Et, Fs.abs = la, Fs.add = ca, Fs.subtract = ma, Fs.as = Ma, Fs.asMilliseconds = Ms, Fs.asSeconds = Ls, Fs.asMinutes = gs, Fs.asHours = Ys, Fs.asDays = vs, Fs.asWeeks = ks, Fs.asMonths = Ds, Fs.asQuarters = ws, Fs.asYears = Ts, Fs.valueOf = La, Fs._bubble = fa, Fs.clone = Ya, Fs.get = va, Fs.milliseconds = bs, Fs.seconds = Ss, Fs.minutes = xs, Fs.hours = Hs, Fs.days = js, Fs.weeks = Da, Fs.months = Es, Fs.years = Os, Fs.humanize = xa, Fs.toISOString = ja, Fs.toString = ja, Fs.toJSON = ja, Fs.locale = Dn, Fs.localeData = wn, Fs.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ja), Fs.lang = ss, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), B("x", ir), B("X", ur), Q("X", function (e, t, n) {
                    n._d = new Date(1e3 * parseFloat(e, 10))
                }), Q("x", function (e, t, n) {
                    n._d = new Date(Y(e))
                }), t.version = "2.24.0", function (e) {
                    Ea = e
                }(bt), t.fn = fs, t.min = xt, t.max = Ht, t.now = Xr, t.utc = c, t.unix = Zn, t.months = sa, t.isDate = d, t.locale = tt, t.invalid = p, t.duration = Xt, t.isMoment = L, t.weekdays = oa, t.parseZone = ea, t.localeData = rt, t.isDuration = Pt, t.monthsShort = ia, t.weekdaysMin = ua, t.defineLocale = nt, t.updateLocale = at, t.locales = st, t.weekdaysShort = da, t.normalizeUnits = F, t.relativeTimeRounding = ba, t.relativeTimeThreshold = Sa, t.calendarFormat = rn, t.prototype = fs, t.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "GGGG-[W]WW",
                    MONTH: "YYYY-MM"
                }, t
            })
        }).call(t, n(210)(e))
    }
});