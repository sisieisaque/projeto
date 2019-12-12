$(document).ready(function(){
    $("#notification").click(function (event) {
      if ($("#notification").attr("aria-expanded") == "false"){
        $(this).attr("aria-expanded",true);
        $("#not").addClass("show");
        $("#divnot").addClass("show");
        $("#profile").attr("aria-expanded",false);
        $("#pro").removeClass("show");
        $("#divprofile").removeClass("show");
          event.stopPropagation();
      }
    });

    $("#profile").click(function (event) {
      if ($("#profile").attr("aria-expanded") == "false"){
        $(this).attr("aria-expanded",true);
        $("#pro").addClass("show");
        $("#divprofile").addClass("show");
        $("#notification").attr("aria-expanded",false);
        $("#not").removeClass("show");
        $("#divnot").removeClass("show");
          event.stopPropagation();
      }
    });

        $('html').click(function(){
         $("#notification").attr("aria-expanded",false);
         $("#not").removeClass("show");
         $("#divnot").removeClass("show");
         $("#profile").attr("aria-expanded",false);
         $("#pro").removeClass("show");
         $("#divprofile").removeClass("show");
    });
  });