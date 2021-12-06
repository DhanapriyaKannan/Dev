try
{
    var tdata = [];
    var productname = "";
    var productprice = "";
    var quantity = "";
    var totdata = [];
    totdata = JSON.parse(localStorage.getItem('cartdata'));
    

    Subtotal = document.getElementsByClassName('order-sub-total')[0].textContent.trim().substr(1);
    if(document.getElementsByClassName('order-shipping-cost')[1].textContent.trim() == "FREE")
    {
       Shipping = "0";
    }
    else
    {
       Shipping = document.getElementsByClassName('order-shipping-cost')[1].textContent.trim().substr(1);
    }
   
    Tax = document.getElementsByClassName('summary-label text-right tax-total body-text-lg')[1].textContent.trim().substr(1);
    Total = document.getElementsByClassName('text-right grand-total total-value')[1].textContent.trim().substr(1);

    var obj = {
       "ProductName": "0",
       "ProductCost": "0",
       "ProductSKU": "0",
       "ProductCategory": "0",
       "ProductQuantity": "0",
       "ProductTax":Tax ,
       "ProductSubItemsTotal": Subtotal,
       "ProductShippingCharges": Shipping,
       "ProductDiscount": "0",
       "ProductGrandTotal": Total,
       "ProductDeliveryDate": "0"

   };
   totdata.push(obj);
   invokeCSharpAction("CH" + JSON.stringify(totdata));

}

catch(ex)
{
   invokeCSharpAction("ERR|"+window.location.href+"|CheckoutPageJSContent.js|"+ex);
}