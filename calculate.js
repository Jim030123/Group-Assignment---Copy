function price() {
  //Box
  var bsize = document.getElementById("bsize").value
  console.log(bsize);

  if (bsize === "Small") {
    var boxprice = 3.00;

  }
  else if (bsize === "Medium") {
    var boxprice = 4.00;

  }

  else if (bsize === "Large") {
    var boxprice = 5.00;
  }

  else {
    var boxprice = 0.00;
  }

  boxprice = boxprice.toFixed(2);
  document.getElementById("boxprice").value = boxprice;

  var bquantity = document.getElementById("bquantity").value;

  var box = boxprice * bquantity;
  box = box.toFixed(2);

  document.getElementById("box").value = box;

  //Box

  //Parcel
  var psize = document.getElementById("psize").value
  console.log(psize);

  if (psize === "Small") {
    var parcelprice = 3.00;

  }
  else if (psize === "Medium") {
    var parcelprice = 4.00;

  }

  else if (psize === "Large") {
    var parcelprice = 5.00;
  }

  else {
    var parcelprice = 0.00;
  }

  parcelprice = parcelprice.toFixed(2);
  document.getElementById("parcelprice").value = parcelprice;

  var pquantity = document.getElementById("pquantity").value;

  var parcel = parcelprice * pquantity;
  parcel = parcel.toFixed(2);
  document.getElementById("parcel").value = parcel;
  //Parcel

  var subtotal = (+box + +parcel);
  subtotal = subtotal.toFixed(2);
  document.getElementById("subtotal").value = subtotal;
  var sst = subtotal * 0.06;
  sst = sst.toFixed(2)
  document.getElementById("sst").value = sst;

  var bdiscount = (+sst + +subtotal);
  bdiscount = bdiscount.toFixed(2);
  document.getElementById("bdiscount").value = bdiscount;

  promocode = document.getElementById("promocode").value;
  var promovalue
  if (promocode === "CTE666") {
    promovalue = - (bdiscount * 0.05);
    promovalue = promovalue.toFixed(2);
    document.getElementById("promovalue").value = promovalue;
  }
  else {
    promovalue = 0;
    document.getElementById("promovalue").value = promovalue;
  }

  var adiscount = (+bdiscount + +promovalue);
  adiscount = adiscount.toFixed(2);
  document.getElementById("adiscount").value = adiscount;

}






