document.onreadystatechange = function () {
   if (document.readyState === 'complete') {
      document.querySelectorAll('.irc_c').forEach(function (elm) {
         var btn = document.createElement('td');
         btn.innerHTML = '<a class="view-image" role="button"><span>View Image</span></a>';
         var firstBtn = elm.querySelector('.irc_but_r tbody tr td:first-child');
         firstBtn.parentNode.insertBefore(btn, firstBtn.nextSibling)
         elm.querySelector('.view-image').onclick = function () {
            window.open(elm.querySelector('.irc_mi').getAttribute('src'));
         }
      })
   }
}
