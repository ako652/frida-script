function dumpSourceCode(){
    var doc=document.documentElement.outerHTML
    console.log('source code of the web app', doc)
}

setTimeout(dumpSourceCode, 5000)