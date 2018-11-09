/* eslint-disable */

export const ConvertNumberToString = (data) => {
    var str = String(data)
    var len = str.split('.')[0].length
    var retData = []
    for (len; len > 0;) {
        var start = len - 3
        retData.push(str.split('.')[0].substring(start, len))
        len = len - 3
    }
    var retDatalen = retData.length
    var final = []
    retData.forEach(function (val) {
        retDatalen = retDatalen - 1
        final.push(retData[retDatalen])
    })
    return str.split('.')[1] === undefined || str.split('.')[1] === null ? final.join() : (final.join() + '.' + str.split('.')[1])
}

export const SerializeDateTime = (data) => {
    let date = new Date(data)
    let monthData = month[date.getMonth()]
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    let ampm = date.getHours() > 12 ? 'PM' : 'AM'
    return monthData + ' ' + date.getDate() + ', ' + date.getFullYear() + ' - ' +  hours + ':' + date.getMinutes() + ' ' + ampm 
}

let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']