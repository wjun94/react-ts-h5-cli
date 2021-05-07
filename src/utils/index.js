/**
 *  @todo 设备环境
 */
export const environment = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isAndroid = userAgent.indexOf('android') !== -1
    const isIos = userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1
    const isWeixin = userAgent.indexOf('micromessenger') !== -1
    const isDidi = userAgent.indexOf('didi') !== -1 || userAgent.indexOf('ddudriver') !== -1
    const isApp = userAgent.indexOf('mgoapp') !== -1
    return {
        isAndroid,
        isIos,
        isWeixin,
        isDidi,
        isApp,
    }
}

/**
 * @todo 车牌号校验
 * @param str 车牌号
 */
export function isLicenseNo(str) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    return /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(str) || xreg.test(str);
}

/**
 * @todo 设置storage
 * @param {string} name
 * @param {string | string[]} value
 */
export function setStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

/**
 * @todo 读取storage
 * @param {string} name
 * @param {string} value
 * @returns {Array}
 */
export function getStorage(name) {
    let target = []
    const result = localStorage.getItem(name)
    if (result) {
        target = JSON.parse(result)
    }
    return target;
}

/**
 * 默认时间30天
 * @param {*} key
 * @param {*} value
 */
export function setCookie(key, value) {
    const Days = 30
    const exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = `${key}=${escape(value)};expires=${exp.toGMTString()}`
}

/**
 * 获取cookie
 * @param {*} key
 */
export function getCookie(key) {
    let arr
    const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`) // 正则匹配
    /* eslint-disable no-cond-assign */
    if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2])
    }
    return null
}

/**
 * 删除cookie
 * @param {*} key
 */
export function delCookies(key) {
    const self = this
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = self.getCookie(key)
    if (cval != null) {
        document.cookie = `${key}=${cval};expires=${exp.toGMTString()}`
    }
}

/**
 * 获取url search参数
 * @param {*} name
 */
export function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return (false);
}

/**
 * 获取hash路由 url search参数
 * @param {*} name
 */
export function getHashQuery(val) {
    const w = window.location.hash.indexOf('?');
    const query = window.location.hash.substring(w + 1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] === val) {
            return pair[1];
        }
    }

    return (false);
}