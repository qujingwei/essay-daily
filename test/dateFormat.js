function dateFormat (time, format = 'YYYY-mm-DD HHH:MM:SS') {
    if (!time){
        return ''
    }
    let t = new Date(time)
    let tf = t => {
        return (t > 10 ? '' : '0') + t
    }

    return format.replace(/YYYY|mm|DD|HHH|MM|SS/g,function(s){
        switch (s) {
            case 'YYYY':
                return tf(t.getFullYear())
                break;
            case 'mm':
                return tf(t.getMonth())
                break;
            case 'DD':
                return tf(t.getDate())
                break;
            case 'HHH':
                return tf(t.getHours())
                break;
            case 'MM':
                return tf(t.getMinutes())
                break;
            case 'SS':
                return tf(t.getSeconds())
                break;
            default:
                break;
        }
    })
}

console.log(dateFormat(new Date()));
