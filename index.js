$(document).ready(function(){
      // 
      $(".animate").hover(function(){
            // alert('hello')
            $(this).children().eq(1).animate({'font-size':'1.7rem'})
            $(this).children().eq(2).animate({'font-size':'1.2rem'})
      },function(){
            $(this).children().eq(1).animate({'font-size':'1.5rem'})
            $(this).children().eq(2).animate({'font-size':'1rem'})
      })
})