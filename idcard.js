var str = '141024199607180129';
function newIdcard (str) {
    var birthday = str.substr(6, 8);
    var last = str.substr(14);
    return last;
}
newIdcard(str);