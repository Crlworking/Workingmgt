var storage = sessionStorage;
function doFirst(){
	if(storage['addItemList'] == null ){
		storage['addItemList'] = '';
		//storage.setItem('addItemList','');
	}
	//幫每個Add Cart建事件聆聽的功能
	var spans = document.querySelectorAll('.addButton');
	for(var i=0; i<spans.length; i++){
		spans[i].addEventListener('click',function(){
			var teddyInfo = document.querySelector('#'+this.id+' input').value; //input前面一定要加空格!!!
			addItem(this.id, teddyInfo);
		},false);
	}
}
function addItem(itemId,itemValue){
	//alert(itemId+' '+itemValue);
	var newItem=document.getElementById('newItem');
	
  //判斷此處是否有新物件，如果有就先刪除再顯示新物件
  if(newItem.hasChildNodes()){
    while(newItem.childNodes.length >= 1){
      newItem.removeChild(newItem.firstChild); 
    }
  }
  
	var img=document.createElement('img');
	img.src='imgs/'+itemValue.split('|')[1];  //split不要打錯字
	img.id='itemImageSelect';
	
	var title=document.createElement('span');
	title.innerHTML=itemValue.split('|')[0];
	title.id='titleSelect';
	
	var price=document.createElement('span');
	price.innerHTML=itemValue.split('|')[2];
	price.id='priceSelect';
	
	newItem.appendChild(img);
	newItem.appendChild(title);
	newItem.appendChild(price);
  
  //存入storage裡面
  if(storage[itemId]){
    alert('您已加入過此項商品');
  }else{
    storage['addItemList'] += itemId + ', ';
    storage[itemId] = itemValue;
    }
  
  //計算購買的數量和小計
  var itemString = storage.getItem('addItemList');
  //alert(itemString);
  var items = itemString.substr(0,itemString.length-2).split(', ');  //substr的第二個s不是大寫
  //alert(items.length);
  
  var total = 0;
  for(key in items){
    var itemInfo = storage[items[key]];
    var sprice = parseInt(itemInfo.split('|')[2]);
    total += sprice;
  }
  document.getElementById('itemCount').innerHTML = items.length; 
  document.getElementById('subtotal').innerHTML = total; 
}
window.addEventListener('load',doFirst,false);