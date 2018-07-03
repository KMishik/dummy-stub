!function($){

  $(document).ready(function(){
    $('.subdiv').on('click', subdivOnClick);
    $('.month').on('click', monthOnClick);
  })

  function subdivOnClick(event: Event){
    let root: String = '.competition';
    if ($(event.target).attr('class') === 'subdiv__title') {
      if($(".subdiv__date", this).hasClass('list_hidden')) {
        $(".list", root).addClass('list_hidden');
        $(".subdiv__date", this).removeClass('list_hidden')
      } else {
        $(".list", this).addClass('list_hidden')
      }
      event.stopPropagation();
    }
  }

  function monthOnClick(event: Event) {
    let root: String = '.competition';
    if ($('.list', this).hasClass('list_hidden')) {
      $('.month__doclinks', root).addClass('list_hidden');
      $(".month__doclinks", this).removeClass('list_hidden');
    } else {
      $(".month__doclinks", this).addClass('list_hidden');
    }
    event.stopPropagation();
  }

}(jQuery);
