var storage = sessionStorage;
var newItem;
function doFirst(){
	var total = 0;
    var itemString = storage.getItem('addItemList');
    var items = itemString.substr(0,itemString.length-2).split(', ');
    
    newItem = document.createElement('div');
    /* newItem.setAttribute('class' , 'item'); */
    newItemTable = document.createElement('table');
    for(var key in items){
        var itemInfo = storage[items[key]];
        createCartList(itemInfo, items[key]);
    }
    /* subtotal(); */
}
function createCartList(itemInfo,itemkey){  //itemkey的k是小寫
//    alert(itemkey);
    var total = 0;
    var itemTitle = itemInfo.split('|')[0];
    var image = itemInfo.split('|')[1];
    var price = parseInt(itemInfo.split('|')[2]);
    total += price;
    
    //建立商品清單區域
    var trItemList = document.createElement('tr');
    trItemList.setAttribute('class' , 'item');
    //trItemList.className = 'item';
    newItemTable.appendChild(trItemList);
    
    //商品圖片
    var tdImage = document.createElement('td');
    tdImage.style.width = '120px';
    
    var img = document.createElement('img');
    img.src = 'imgs/'+image;
    img.width = 60;
    
    tdImage.appendChild(img);
    trItemList.appendChild(tdImage);
    
    //建立商品名稱即刪除按鈕
    var tdTitle=document.createCartList('td');
    
    
    newItem.appendChild(newItemTable);
    document.getElementById('cartList').appendChild(newItem);
}
window.addEventListener('load', doFirst, false);