function set(op) {

    document.getElementById("display").value += op;

}

function setOp() {
    alert("gf");
    //document.getElementById("display").value += op;
}

function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    //alert(result);
    Exp.value = result;
}

function ce() {

    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);

    // document.getElementById("display").value="";
    //for(var i=0;i<length-1;i++)
    //{
    document.getElementById("display").value = a;
    // }
    //alert(length);
}