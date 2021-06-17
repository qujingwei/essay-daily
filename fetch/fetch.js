const isObject = function(o){
    return Object.prototype.toString(o) === "[object Object]"
}

function runStack (n) { 
    if (n === 0) return 100; 
    return runStack( n- 2);
}
runStack(50000)

class FetchRequest {
    constructor(baseUrl = ''){
        this.baseUrl = baseUrl
    }

    getInstanceConfig(){
        const config = {
            baseConfig: this.baseUrl,
            headers: {
                
            },
            withCredentials: true 
        }
        return config
    }
    setOption(options){
        options = Object.assign(this.getInsideConfig(), options)
        let url = this.baseUrl + options.url;
        options.method = options.method ? options.method.toUpperCase() : 'GET'
        if(options.params && isObject(options.params)){
            if(/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.method)){
                params._timeStamp = new Date().getTime()
                url += url.includes('?') ? '' : '?'
                params.keys.forEach((key, i) => {
                    url += `${i > 0 ? '&' : ''}${key}=${params[key]}`
                });
            }else if(/^(POST|PUT)$/i.test(options.method)){
                if(options.headers && options.headers["Content-Type"] === "application/json"){
                    try {
                        options.body = JSON.stringify(options.body)
                    } catch (error) {}
                }
            }
            delete options.params
        }
        return options
    }
    instance(options){
        return fetch(options.url, options).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return Promise.reject(response.statusText)
            }
        }).catch(error => {

        })
    }

    request(options = {}){
        options = this.setOption(options)
        
        return this.instance(options)
    }
}
