
insertFeatureBanner = function(image, text) {

  var ua = navigator.userAgent;
  var target = checkPC(ua)?'.pageTitle':'.FS2_Sort';
  var banner = '<div class="banner_feature" style="max-width:600px;"><img src="' + image + '" alt="" style="width:100%;display:block;margin:0 auto;">' + '<p style="padding-top: 12px">' +  text + '</p>'  ;
    
    $(target).before(banner);
};

checkFeature = function(current_url, feature) {
  if (current_url.indexOf(feature) == -1){
    return false;
  } else {
    return true;
  }
};

checkPC = function(ua) {
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    return false;
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    return true;
  } else {
    return true;
  }
};


window.onload = function() {

  var current_url = location.href;

  var arr = [
    { 
      feature:'feature_180117',
      image: '/img/banner_bag1801.jpg',
      text: 'バッグの小型化はこの春夏物も継続。ということで5つのキーワードをもとに、スタメン間違いなしのバッグ達をピックアップ。サコッシュの次にくるアイテムは果たして…。'
    },
    { 
      feature:'feature_180129',
      image: '/img/banner_backpack1802.jpg',
      text: 'ビジネスシーンでもすっかり市民権を得た【バックパック】。とは言え、実際探してみるとシックリくるのが見つからないとお悩みの方も多いのでは？'
    }
  ];

  $.each(arr, function(i, val) {
    var feature = val['feature'];
    var image = val['image'];
    var text = val['text'];
    if (checkFeature(current_url, feature)) {
      insertFeatureBanner(image, text);
    }
  });
};