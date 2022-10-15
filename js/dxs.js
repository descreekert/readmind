function duxinshu_1() {
    var b; var a = [9, 18, 27, 36, 45, 54, 63, 72, 81];
    var d = "";
    b = Math.floor(Math.random() * 24) + 1;
    for (var e = 0; e < 100; e++) {
        var g = $("<li><span>" + e + "</sapn></li>");
        var c = $("<img/>");
        var f = 0;
        if ($.inArray(e, a) >= 0) {
            f = b
        } else {
            f = Math.floor(Math.random() * 24 + 1)
        }
        $(c).attr("src", "./img/42_" + f + ".png");
        $(g).append(c); $("#duxinshu_sysm-list").append(g)
    }
    $("#duxinshu_bg").click(
        function () {
            $("#duxinshu_bg").unbind("click");
            $("#duxinshu_bg").stopRotate();
            $("#duxinshu_bg").rotate(
                {
                    angle: 0, duration: 5000, animateTo: 1440,
                    callback: function () {
                        $("#duxinshu_result_img").animate({ opacity: "0.1" }, "slow");
                        $("#duxinshu_result_img").animate({ opacity: "1" }, "slow");
                        $("#duxinshu_result_img").animate({ width: "100px", height: "100px" }, "slow");
                        $("#duxinshu_result_img").attr("src", "./img/42_" + b + ".png");
                        setTimeout(function () {
                            $("#duxinshu_anniu").html(
                                '<input type="button" onclick="duxinshu_2();" value="\u518d\u73a9\u4e00\u6b21" class="all_an_1">')
                        }, 3000)
                    }
                }
            )
        })
}

function duxinshu_2() {
    $("#duxinshu_bg").hide(); $("#duxinshu_shuoming").hide();
    $("#duxinshu_sysm-list").hide();
    $("#duxinshu_anniu").html(
        '<img src="./img/lod.gif" /><br><br><br>\u6b63\u5728\u5904\u7406\u4e2d,\u8bf7\u7a0d\u5019..<br><br><br><br>'
    );
    setTimeout(function () { duxinshu_3() }, 3000)
}

function duxinshu_3() {
    $("#duxinshu_bg").html('<div><img id="duxinshu_result_img" src="./img/round.png"/></div>');
    $("#duxinshu_anniu").html(""); $("#duxinshu_sysm-list").html("");
    $("#duxinshu_bg").show(); $("#duxinshu_shuoming").show();
    $("#duxinshu_sysm-list").show();
    duxinshu_1();
}
