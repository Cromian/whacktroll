function $tag(val) {

    return document.getElementsByTagName(val)[0];
}

function $id(val){
    return document.getElementById(val);
}

function $class(val) {
    return document.getElementsByClassName(val);
}

function checkDomain(val) {
    return window.location.href.indexOf(val) != -1;
}

function showDiv() {
    var div = document.createElement('div');
    div.innerHTML = '<div class="troll_well">Troll content discovred!</div>';
    div.setAttribute('class', 'troll_banner'); // and make sure myclass has some styles in css
    document.body.append(div);
}