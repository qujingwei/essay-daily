



function setProps(element, props) {
    for (let key in props) {
        element.setAttribute(key,props[key])
    }
}

function createElement(vDom){
    if(typeof vDom === 'string' || typeof vDom === 'number'){
        return document.createTextNode(vDom)
    }

    let { tag, props, children } = vDom

    let element = document.createElement(tag)

    if(props){
        setProps(element,props)
    }

    if(children){
        children.map(createElement).forEach(element.appendChild.bind(element));
    }
    return element
}




