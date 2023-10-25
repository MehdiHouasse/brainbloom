function decodeHtmlEntities(input) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = input;
    return textarea.value;
}

function decodeAllHtmlEntities(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.nodeValue = decodeHtmlEntities(node.nodeValue);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(decodeAllHtmlEntities);
    }
}

export { decodeHtmlEntities, decodeAllHtmlEntities };
