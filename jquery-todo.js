$(document).ready(function() {
  
    $('#todos').on('submit', function(event) {
       event.preventDefault();
       const chore = $('#item');
       const val = chore.val();
       todoList(val);
     });
    
    $('#list').on('click', '.button1', function(event)
     {
      {
        $(this).parent().detach();
     }
     });

    $('#list').on('click', '.button2', function(event)
     {
        $(this).parent().toggleClass('is-complete');
     }
    );

    function todoList(val) {
      const list = $('#list');
      list.append('<li>' + '<button class="button1">"X"</button>' + "  " + val + "  " + '<button class="button2">"✓"</button>' + '</li>');
    }
    
  });
  
  
  