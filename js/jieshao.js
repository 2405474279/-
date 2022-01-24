// 内容——个人博客
$("#dhl_ul_1").click(function () {
  $("#cont_1").show();
  $("#cont_2").hide();
  $("#cont_3").hide();
  $("#cont_4").hide();
  $("#dhl_ul_1").css("background-color", "#FEFFF9");
  $("#dhl_ul_2").css("background-color", "#d3e0c4");
  $("#dhl_ul_3").css("background-color", "#d3e0c4");
  $("#dhl_ul_4").css("background-color", "#d3e0c4");
  window.location.href = ".\\index.html";
});

//内容——个人简介
$("#dhl_ul_2").click(function () {
  $("#cont_1").hide();
  $("#cont_2").show();
  $("#cont_3").hide();
  $("#cont_4").hide();
  $("#dhl_ul_1").css("background-color", "#d3e0c4");
  $("#dhl_ul_2").css("background-color", "#FEFFF9");
  $("#dhl_ul_3").css("background-color", "#d3e0c4");
  $("#dhl_ul_4").css("background-color", "#d3e0c4");
});

// 内容——我的作品
$("#dhl_ul_3").click(function () {
  $("#cont_1").hide();
  $("#cont_2").hide();
  $("#cont_3").show();
  $("#cont_4").hide();
  $("#dhl_ul_1").css("background-color", "#d3e0c4");
  $("#dhl_ul_2").css("background-color", "#d3e0c4");
  $("#dhl_ul_3").css("background-color", "#FEFFF9");
  $("#dhl_ul_4").css("background-color", "#d3e0c4");
});

//内容——我的技能
$("#dhl_ul_4").click(function () {
  $("#cont_1").hide();
  $("#cont_2").hide();
  $("#cont_3").hide();
  $("#cont_4").show();
  $("#dhl_ul_1").css("background-color", "#d3e0c4");
  $("#dhl_ul_2").css("background-color", "#d3e0c4");
  $("#dhl_ul_3").css("background-color", "#d3e0c4");
  $("#dhl_ul_4").css("background-color", "#FEFFF9");
});

// 手机号提醒
sjh = function () {
  alert("手机号码：17607632587");
};

// 邮箱发送连接跳转
yxtz = function () {
  window.open(
    "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=2405474279@qq.com"
  );
};

// 微信二维码显示
wxewm = function () {
  $(".erweima_wx").animate({ top: "+=50px", opacity: "1" }, 100);
};
wxewm_f = function () {
  $(".erweima_wx").animate({ top: "-=50px", opacity: "0" });
};

// 微信公众号二维码显示
wxgzhewm = function () {
  $(".erweima_wxgzh").animate({ top: "+=50px", opacity: "1" }, 100);
};
wxgzhewm_f = function () {
  $(".erweima_wxgzh").animate({ top: "-=50px", opacity: "0" });
};
window.onload = function () {};
