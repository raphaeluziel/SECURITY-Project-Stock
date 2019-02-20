document.addEventListener('DOMContentLoaded',function(){
  
  document.getElementById('getPrice').onclick = function(){
    
    var stock = document.getElementById('stock').value;
    var like = document.getElementById('like').checked;
    var response = document.getElementById('response');
    
    var link = 'https://security-stock.glitch.me/api/stock-prices?stock=' +
        stock + '&like=' + like;
    
    fetch(link)
      .then(response => response.json())
      .then(data => {
        response.innerHTML = '<div>Stock: ' + 
          data.stockData.stock +
          '</div><div>Price: ' +
          data.stockData.price +
          '</div><div>Likes: ' +
          data.stockData.likes +
          '</div>';
      })
      .catch(error => console.error(error));
    
    document.getElementById('stock').value = '';
    document.getElementById('like').checked = false;

  }
  
  
  document.getElementById('getPrices').onclick = function(){
    
    var stock1 = document.getElementById('stock1').value;
    var stock2 = document.getElementById('stock2').value;
    var like = document.getElementById('likes').checked;
    var responses = document.getElementById('responses');
    
    var link = 'https://security-stock.glitch.me/api/stock-prices?stock=' +
        stock1 + '&stock=' + stock2 + '&like=' + like;
    
    fetch(link)
      .then(responses => responses.json())
      .then(data => {
        responses.innerHTML = '<div>Stock1: ' + 
          data.stockData[0].stock +
          '</div><div>Price: ' +
          data.stockData[0].price +
          '</div><div>Relative Likes1: ' +
          data.stockData[0].rel_likes +
          '</div><div>Stock2: ' +
          data.stockData[1].stock +
          '</div><div>Price: ' +
          data.stockData[1].price +
          '</div><div>Relative Likes2: ' +
          data.stockData[1].rel_likes +
          '</div>';
      })
      .catch(error => console.error(error));
    
    document.getElementById('stock1').value = '';
    document.getElementById('stock2').value = '';
    document.getElementById('likes').checked = false;

  }

})
