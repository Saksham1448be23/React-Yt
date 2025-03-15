function customRender(reactElement, container) {
    // const domElement= document.createElement
    // (reactElement.type)
    //domElement.innerHTML=reactElement.children

    /* (This is not good practice as we have to writ again and agina and it might cause error in the case of more elemnets)
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */
    // container.appendChild(domElement);

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://www.google.com',
        target: '_blank',
    },
    children: 'Click me to vist google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)