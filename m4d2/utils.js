export const createEl = (type, attributes, ...children)=>{
    const element = document.createElement(type) ;
    Object.keys(attributes).forEach((key)=>{
        element.setAttribute(key, attributes[key])
    })
    children.forEach((child)=>{
        typeof child === "string"
        ? element.appenChild(document.createTextNode(child)) : element.appenChild(child)
    })
    return element;
}