try{
if(document.getElementsByClassName('AcimaCheckoutBtn')[0]==undefined){
    if (document.querySelector("#dynamic-media-viewer_swatches")!=undefined){
document.getElementsByClassName('button add-to-cart-btn')[1].style.display='none';
var btn = document.createElement('button');
var btnTxt = document.createTextNode('ADD TO CART');
var bodybtn = document.querySelector(".pdp-tray__cta");
btn.classList.add('AcimaCheckoutBtn');
btn.appendChild(btnTxt);
bodybtn.insertBefore(btn, bodybtn.firstChild);

document.querySelector('.AcimaCheckoutBtn').addEventListener('click',function(event){
    try{
    var totdata = [];
    if (document.documentElement.getElementsByClassName("product-details").length > 0) {
       
        productname = document.documentElement.getElementsByClassName("product-details")[0].getElementsByTagName("span")[0].innerText;
        productname += "" + document.documentElement.getElementsByClassName("product-details")[0].getElementsByTagName("span")[1].innerText;
        productname += "" + document.documentElement.getElementsByClassName("product-details")[0].getElementsByTagName("span")[2].innerText;
        price = (document.documentElement.getElementsByClassName("product-details-price")[0].innerText).split("$")[1].replaceAll(',','');
        categorylength = document.documentElement.getElementsByClassName("breadcrumbs")[0].getElementsByTagName("li").length;
        for (var i = 0; i < categorylength; i++) {
            if (i == 0) {
                category = document.documentElement.getElementsByClassName("breadcrumbs")[0].getElementsByTagName("li")[i].innerText.trim();
            }
            else {
                category += ":" + document.documentElement.getElementsByClassName("breadcrumbs")[0].getElementsByTagName("li")[i].innerText.trim();
            }
        }
      

    }
    else {
        
        if (document.documentElement.getElementsByClassName("pdp-tray__price single-price-line").length > 0) {
            price = (document.documentElement.getElementsByClassName("pricing-container pricing-container--with-savings")[0].getElementsByClassName("pdp-tray__price single-price-line")[0].innerText).split("$")[1].replaceAll(',','');
        }
        else {
            price = (document.documentElement.getElementsByClassName("pdp-tray__price")[0].innerText).split("$")[1].replaceAll(',','');
        }
        if (document.documentElement.getElementsByClassName("pdp-tray-header g-container").length > 0) {
            productname = document.documentElement.getElementsByClassName("desktop image-name-wrapper")[0].getElementsByClassName("product-name")[0].innerText.replaceAll('"',' Inch');;
        }
        else {
            productname = document.documentElement.getElementsByClassName("product-name")[0].innerText.replaceAll('"',' Inch');;
        }
        sku = (document.documentElement.getElementsByClassName("pdp-tray__detail pdp-tray__detail--model")[0].innerText).trim();
        categorylength = document.documentElement.getElementsByClassName("breadcrumbs")[0].getElementsByTagName("li").length;


        for (var i = 0; i < categorylength; i++) {
            if (i == 0) {
                category = document.documentElement.getElementsByClassName("breadcrumbs")[0].getElementsByTagName("li")[i].innerText.trim();
            }
            else {
                category += ":" + document.documentElement.getElementsByClassName("breadcrumbs")[0].getElementsByTagName("li")[i].innerText.trim();
            }
        }


    }
    var obj = {
            "ProductName": productname,
            "ProductCost": price,
            "ProductSKU": sku,
            "ProductCategory": category,
            "ProductQuantity": "0",
            "ProductTax": "0",
            "ProductSubItemsTotal": "0",
            "ProductShippingCharges": "0",
            "ProductDiscount": "0",
            "ProductGrandTotal": "0",
            "ProductDeliveryDate": "0"
        };

        totdata.push(obj);
        invokeCSharpAction("PD" + JSON.stringify(totdata));
    }
    catch(ex){
        if(location.hostname === 'www.kitchenaid.com'){
        invokeCSharpAction("ERR|"+window.location.href+"|PDPPageJSContent.js|"+ex);
        }
    }
    })
}
}
}
catch(ex){
    if(location.hostname === 'www.kitchenaid.com'){
    invokeCSharpAction("ERR|"+window.location.href+"|PDPPageJSContent.js|"+ex);
    }
}