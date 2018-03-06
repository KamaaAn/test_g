$(function() {

  var myStorage = window.localStorage;
  //var cartItem = JSON.parse(myStorage.getItem('cart'));

    var games = {
        oddworld: {price: 9.99, title: 'oddworld: stranger\’s wrath', img: 'images/oddwolrd.png' },
        settlers: {price: 5.99, title: 'The settlers 2: gold edition', img: 'images/settlers.png' },
        neverwinter: {price: 4.99, title: 'neverwinter nights', img: 'images/neverwinter.png' },
        assassin: {price: 19.99, title: 'assassin’s creed: director\’s cut', img: 'images/assassins.png' }
    }

    var cartGames = [];

    $('.btn-primary' ).on( 'click', function( event ) {
        myStorage.setItem('cart', JSON.stringify(games[this.value]));
        if (cartGames.indexOf(this.value)===-1){
        var item = $('<tr class="cartitems">');
        var img = $('<img>').attr('src', games[this.value].img);
        img.appendTo(item);
        var title = $('<td class="cartitems-title">').text(games[this.value].title);
        title.appendTo(item);
        var price = $('<td class="price">').text('$' + games[this.value].price);
        price.appendTo(item);
        item.appendTo('.shopping-cart');
        cartGames.push(this.value);
        $('span:first').text(cartGames.length);
        var sum = 0;
        cartGames.forEach(function(element){return sum = sum + element})
        };
        $('#stotal').text(sum);

      });

      $('#empty-cart' ).on( 'click', function( event ) {
        myStorage.setItem('cart', JSON.stringify(games[this.value]));
        if (cartGames.indexOf(this.value)===-1){
        $('<tr class="cartitems">').remove();
        $('.carticon').text(cartGames.length);
        }

      });
    
     // $( '.navbar-toggler' ).on( 'click', function( event ) {
          
     // });
    
});