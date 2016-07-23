(function($){
  $.fn.animateRotate = function(fromAngle, ToAngle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.queue = false;
    args.step = function(now) {
      $.style(e, 'transform', 'rotateY(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };
    $({deg: fromAngle}).animate({deg: ToAngle}, args);
  });
    
  $.fn.refresh = function() {
      var elems = $(this.selector);
      this.splice(0, this.length);
      this.push.apply( this, elems );
      return this;
  };
};
})(jQuery);

$( document ).ready(function() {
  
  var images = ['images/01.jpg', 'images/02.jpg', 'images/03.jpg', 'images/04.jpg', 'images/05.jpg', 'images/06.jpg', 'images/07.jpg', 'images/08.jpg', 'images/09.jpg', 'images/10.jpg'];
  var index = 0;
  $('.page-center').css('background-image', "url(" + images[0] + ")");
  $('.page-right1').css('background-image', "url(" + images[1] + ")");
  $('.page-right2').css('background-image', "url(" + images[2] + ")");
  $('.page-no').text( index+1 + ' / ' + images.length);
  
  $(".left-page").click(function(){
    
    if(index > 0){
      $(".page-right2").animateRotate(-80, -90, 500, 'linear');
      $(".page-right2").remove();
      $(".page-right1").animateRotate(-55, -80, 500, 'linear');
      $(".page-right1").addClass("page-right2").removeClass("page-right1");
      $(".page-center").animateRotate(0, -55, 500, 'linear');
      $(".page-center").addClass("page-right1").removeClass("page-center");
      $(".page-left1").animateRotate(55, 0, 500, 'linear');
      $(".page-left1").addClass("page-center").removeClass("page-left1");
      $(".page-left2").animateRotate(80, 55, 500, 'linear');
      $(".page-left2").addClass("page-left1").removeClass("page-left2");

      
      if(index-3 >= 0){
        var $newPage = $("<div></div>").addClass("page page-left2");
        $newPage.css('background-image', "url(" + images[index-3] + ")");
        $newPage.insertBefore(".page-left1");
      }
      index -= 1;
      $('.page-no').text( index+1 + ' / ' + images.length);

    }
    
    
  });
  
  $(".right-page").click(function(){ 
    
    if(index < images.length-1){
      $(".page-left2").animateRotate(80, 90, 500, 'linear');
      $(".page-left2").remove();
      $(".page-left1").animateRotate(55, 80, 500, 'linear');
      $(".page-left1").addClass("page-left2").removeClass("page-left1");
      $(".page-center").animateRotate(0, 55, 500, 'linear');
      $(".page-center").addClass("page-left1").removeClass("page-center");
      $(".page-right1").animateRotate(-55, 0, 500, 'linear');
      $(".page-right1").addClass("page-center").removeClass("page-right1");
      $(".page-right2").animateRotate(-80, -55, 500, 'linear');
      $(".page-right2").addClass("page-right1").removeClass("page-right2");

      if(index+3 <= images.length-1){
        var $newPage = $("<div></div>").addClass("page page-right2");
        $newPage.css('background-image', "url(" + images[index+3] + ")");
        $newPage.insertBefore(".page-right1");
      }
      index += 1;
      $('.page-no').text( index+1 + ' / ' + images.length);
      
    }
  });
  
  
});