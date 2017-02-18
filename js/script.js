<button type="button" id="myButton" data-loading-text="Loading..." class="btn btn-primary" autocomplete="off">
  Loading state
</button>

<script>
  $('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
  })
</script>

$(document).ready(function() {
        $("p").click(function() {
          $(".words").toggle();
          $(".words").toggle();
        });
      });
