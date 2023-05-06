//<![CDATA[
var divOfPosts = ".grid-post-home",
    do7a = !0;
$("#btn-7a").click(function(a) {
    if (a.preventDefault(), 1 == do7a) {
        let a = $(this).attr("data-url");
        $(this).hide(), $("#loader-7a").show(), $.ajax({
            url: a,
            success: function(a) {
                let t = $(a).find("#Blog1 " + divOfPosts).html(),
                    o = $(a).find("#btn-7a").attr("data-url");
                $("#Blog1 " + divOfPosts).append(t), o.length > 1 ? $("#btn-7a").attr("data-url", o) : ($("#btn-7a").html("لا يوجد المزيد"), do7a = !1, $("#btn-7a").css("background-color", "#aaa"))
            },
            complete: function() {
                $("#loader-7a").hide(), $("#btn-7a").fadeIn()
            }
        })
    }
});
//]]>
