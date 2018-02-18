jQuery(document).ready(function () {
   console.log(navigator.language || navigator.userLanguage)
   setTimeout(function(){
      jQuery('.irc_but_r').each(function(){
         jQuery(this).find('tbody tr td:first-child').after('<td><a class="i18192 r-iPWUDzUx2UVA see-image" role="button"><span>View Image</span></a></td>');
         jQuery(this).find('.see-image').click(function(){
            window.open(jQuery(this).parents().eq(7).find('.irc_mi').attr('src'));
         })
      })
   },1000)
})
