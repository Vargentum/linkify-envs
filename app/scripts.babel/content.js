const linkifyEnvs = () => {
    document
        .querySelectorAll('#projectstatus [title^=http')
        .forEach((node) => {
            const link = document.createElement('a')
            link.setAttribute('target', '_blank')
            link.setAttribute('rel', 'noopener noreferrer')
            link.setAttribute('href', node.innerHTML)
            link.innerHTML = node.innerHTML
            node.parentNode.replaceChild(link, node)
        })
}

//on init perform based on chrome strorage value
window.onload=function(){
    linkifyEnvs()
}