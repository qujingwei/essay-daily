class Emmieter {
    constructor(){
        this.events = {}
    }

    $on(name, fn){
        if(!this.events[name]){
            this.events[name] = []
        }
        this.events[name].push(fn)
    }

    $emmit(name, arg){
        if(this.events[name] && this.events[name].length){
            this.events[name].forEach(fn => {
                fn.call(null, arg)
            })
        }
    }

    $off(name, fn){
        if(this.events[name]){
            let index = this.events[name].findIndex(item => {
                return item === fn
            })
            if(index > -1){
                this.events.splice(index , 1)
            }
        }
    }

    $once(name, fn){
        let _fn = function(...args){
            fn.call(null, args)
            this.$off(name, _fn)
        }
        this.$on(name, _fn)
    }
}

let myEmmiter = new Emmieter()

let fn = function(val) {
    console.log(this);
    console.log(val);
}

myEmmiter.$on('event', fn)

myEmmiter.$emmit('event', {a:111})














