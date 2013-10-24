function replace(){
    var txtArea = document.getElementById('code').value.length;
    document.getElementById('replaceDiv').value = document.getElementById('code').value;
    var backColor = (255-txtArea);
    if (txtArea <= 255) {
        document.getElementById('replaceDiv').style.color = 'rgb(' + txtArea + ',' + txtArea + ',' + txtArea + ')';
        document.getElementById('replaceDiv').style.backgroundColor = 'rgb(' + backColor + ',' + backColor + ',' + backColor + ')';
    }
    else if(txtArea >= 255) {
        var txtArea2 = (txtArea-255)
        var txtColor = (255-txtArea2)
        document.getElementById('replaceDiv').style.color = 'rgb(' + txtColor + ',' + txtColor + ',' + txtColor + ')';
        document.getElementById('replaceDiv').style.backgroundColor = 'rgb(' + txtArea2 + ',' + txtArea2 + ',' + txtArea2 + ')';
    }
}