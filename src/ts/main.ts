!function($){

  $(document).ready(function(){
    $('.subdiv').on('click', subdivOnClick);
  })

  function subdivOnClick(event: any){
    let root: any = '.competition';
    if ($(event.target).attr('class') === 'subdiv__title') {
      if($(".subdiv__date", this).hasClass('subdiv__date_hidden')) {
        $(".subdiv__date", root).addClass('subdiv__date_hidden');
        $(".subdiv__date", this).removeClass('subdiv__date_hidden')
      }
    }
  }


}(jQuery);
