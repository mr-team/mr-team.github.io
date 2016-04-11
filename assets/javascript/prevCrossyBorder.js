$.ajax({
    type: "GET",
    url: "https://api.github.com/repos/mr-team/mr-team.github.io/contents/crossyborder",
    dataType: "json",
    success: function (result) {
        $("#previousBuilds").html("");
        $("#previousBuilds").append("<option value=\"/\">Current Build</option>");
        for (var i in result) {
            if (result[i].name == "index.html" || result[i].name == "crossyborder.unity3d")
                continue;
            $("#previousBuilds").append("<option value=\"/" + result[i].name + "/\">" + result[i].name + "</option>");
        }
    }
});

$("#selectBuild").click(function () {
    var link = $("#previousBuilds").val();
    window.open("http://denbestelag.com/crossyborder" + link, "_self");
});