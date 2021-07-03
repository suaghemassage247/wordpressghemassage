
$(document).ready(function(){
  //khi click vào nút xóa sẽ tự động reload trang
  $('.delete-nsx').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/nsx/'+id,
      success:function(data){
        location.reload();
      }

    })
  });

  $('.delete-camera').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/camera/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-user').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/user/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-order').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/order/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-danhmuc').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/danhmuc/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-laptop').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/laptop/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-desktop').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/desktop/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-posts').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/post/'+id,
      success:function(data){
        location.reload();
      }
    })
  });

  $('.delete-typepost').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/typepost/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-slidehome').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/slide/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-bannerfix').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/bannerfix/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-nhucau').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/nhucau/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
  $('.delete-phanloai').on('click',function(e){
    $target =$(e.target);
    const id = $target.attr('data-id');
      console.log(id);
    $.ajax({
      type:"DELETE",
      url:'/phanloai/'+id,
      success:function(data){
        location.reload();
      }
    })
  });
});

$(document).ready(function(){
  $(window).scroll(function() {
    if($(document).scrollTop() >= 130) {
    $('.aside-right-postdetail').animate({
      top:"10px"
    },0)
  }
  else if($(document).scrollTop() < 130){
    $('.aside-right-postdetail').animate({
      top:"170px"
    },0)
  }
})
})
$(document).ready(function(){

  CKEDITOR.config.extraPlugins = 'filebrowser';
  CKEDITOR.config.language = 'en';
  CKEDITOR.config.fillEmptyBlocks = false;
  CKEDITOR.config.entities = false;
  CKEDITOR.replace('shortdescription' , {
    filebrowserBrowseUrl: '/javascripts/ckeditor/plugins/filemanager/browser/default/browser.html?Connector=/browser/browse',
    filebrowserUploadUrl: '/uploader/upload?Type=File',
    filebrowserImageUploadUrl: '/uploader/upload?Type=Image',
    filebrowserFlashUploadUrl: '/uploader/upload?Type=Flash'
  });
  CKEDITOR.replace('description' , {
    filebrowserBrowseUrl: '/javascripts/ckeditor/plugins/filemanager/browser/default/browser.html?Connector=/browser/browse',
    filebrowserUploadUrl: '/uploader/upload?Type=File',
    filebrowserImageUploadUrl: '/uploader/upload?Type=Image',
    filebrowserFlashUploadUrl: '/uploader/upload?Type=Flash'
  });

})
$(document).ready(function() {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });
  sync2.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall     : [979,3],
    itemsTablet       : [768,2],
    itemsMobile       : [479,1.2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 sync1.trigger('owl.play',5000);
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
  }
});
$(document).ready(function(){
  $('.list-item>li').on('click',function(){
    $('.list-item>li').removeClass('active');
    $(this).addClass('active');
  })
  $('.item-tab').on('click',function(){
    $('.item-tab').removeClass('active');
    $(this).addClass('active');
  })
})
$(document).ready(function() {
  var owl = $(".owl-slide-tintuc");
  owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2.5], // betweem 900px and 601px
      itemsTablet: [600,2.5], //1 items between 600 and 0
      itemsMobile : [320,1.2] // itemsMobile disabled - inherit from itemsTablet option
  });
})
$(document).ready(function() {
    var owl = $(".owl-danhmuc-mb");
    owl.owlCarousel({
        items : 1, //10 items above 1000px browser width
        itemsDesktop : [1000,1], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [600,1], //1 items between 600 and 0
        itemsMobile : [320,1] // itemsMobile disabled - inherit from itemsTablet option
    });
    owl.trigger('owl.play',4000);
});
$(document).ready(function() {
    var owl = $(".owl-timkiemhangdau-mb");
    owl.owlCarousel({
        items : 1, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2.5], // betweem 900px and 601px
        itemsTablet: [600,1.8], //1 items between 600 and 0
        itemsMobile : [320,1.8] // itemsMobile disabled - inherit from itemsTablet option
    });
    owl.trigger('owl.play',4000);
});
$(document).ready(function() {
    var owl = $(".lt-nhucau");
    owl.owlCarousel({
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,4], // betweem 900px and 601px
        itemsTablet: [600,2.5], //1 items between 600 and 0
        itemsMobile : [320,2.5] // itemsMobile disabled - inherit from itemsTablet option
    });
    owl.trigger('owl.play',8000);
});
$(document).ready(function() {
    var owl = $(".lt-hang");
    owl.owlCarousel({
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,4.2], // betweem 900px and 601px
        itemsTablet: [600,3.5], //1 items between 600 and 0
        itemsMobile : [320,3.5] // itemsMobile disabled - inherit from itemsTablet option
    });
    owl.trigger('owl.play',8000);
});
function removeAccents(strAccents){
  strAccents = strAccents.split('');
  strAccentsOut = new Array();
  strAccentsLen = strAccents.length;
  var accents = 'ÀÁÂÃÄÅàáâãäåạÒÓÔÕÕÖØòóôõöộọøếÈÉÊËèéêëễðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  var accentsOut = ['A','A','A','A','A','A','a','a','a','a','a','a','O','O','O','O','O','O','O','o','o','o','o','o','o','E','E','E','E','e','e','e','e','e','C','c','D','I','I','I','I','i','i','i','i','U','U','U','U','u','u','u','u','N','n','S','s','Y','y','y','Z','z'];
  for (var y = 0; y < strAccentsLen; y++) {
      if (accents.indexOf(strAccents[y]) != -1) {
          strAccentsOut[y] = accentsOut[accents.indexOf(strAccents[y])];
      }
      else
          strAccentsOut[y] = strAccents[y];
  }
  strAccentsOut = strAccentsOut.join('');
   strAccentsOut = strAccentsOut.toLowerCase();
  return strAccentsOut;
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

$(document).ready(function(){
  var commas=document.getElementsByClassName('commas');
  for(var i=0;i<commas.length;i++){
    commas[i].innerHTML=numberWithCommas(commas[i].innerHTML);
  }
})
$(document).ready(function() {
        $("#lightgallery").lightGallery();
});
$(document).ready(function(){
  $("#zoom_easing").elevateZoom({easing : true});
});
