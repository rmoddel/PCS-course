 $.fn.positionRight = function(child){
  var p = this,  //parent
      offset = p.offset(),height = p.height(),
      width = p.width(),top = offset.top,
      right = offset.left - 15; 
  $(child).css(
      {'position': 'absolute','right': right,'top': top}
  ).appendTo(p);
};
