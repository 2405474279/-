window.onload = function () {
  // 大屏幕动画
  $("#cdpl_md").addClass("animated rubberBand");
  $("#cdpl_sm").addClass("animated bounceInDown");
  $("#cdpl_xs").addClass("animated fadeInDownBig");
  $("#cdpl_lg").addClass("animated flip");
  //二排设计动画
  $("#er_da_1").addClass("animated fadeInLeft");
  $("#er_da_2").addClass("animated fadeInRight");
  $("#er_da_yi").addClass("animated fadeInUp");
  $("#cdpl_lg").animate(
    {
      left: "1000px",
      opacity: "0.5",
    },
    300
  );
  setTimeout(() => {
    $("#cdpl_lg").animate(
      {
        left: "600px",
        top: "150px",
        opacity: "1",
      },
      300
    );
  }, 300);
};
new fairyDustCursor();
td = function () {
  $("#san_left_img_1").animate(
    {
      width: "105%",
      height: "90%",
    },
    200
  );
};

td_f = function () {
  $("#san_left_img_1").animate(
    {
      width: "100%",
      height: "88%",
    },
    200
  );
};

td_1 = function () {
  $("#san_left_img_2").animate(
    {
      width: "105%",
      height: "90%",
    },
    200
  );
};

td_f_1 = function () {
  $("#san_left_img_2").animate(
    {
      width: "100%",
      height: "88%",
    },
    200
  );
};

td_2 = function () {
  $("#san_left_img_3").animate(
    {
      width: "105%",
      height: "90%",
    },
    200
  );
};

td_f_2 = function () {
  $("#san_left_img_3").animate(
    {
      width: "100%",
      height: "88%",
    },
    200
  );
};

// 跳转到入门网页
tz_rm = function () {
  window.location.href = "入门网页\\index.html";
};
// 跳转到建党百年网页
tz_jdbn = function () {
  window.location.href = "建党一百年\\index.html";
};
