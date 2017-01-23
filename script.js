var jsonUrl = "https://shopicruit.myshopify.com/admin/orders.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6";
var sum  = 0;
$.getJSON(jsonUrl, function(data)
{
	$.each(data.orders, function(idx, obj)
	{
	sum += parseFloat(variant.price);
	};
};
    alert("The sum of the prices is: " + sum.toFixed(2));
});