if (typeof isCalled === 'undefined')
{
	var url = window.location.href;
	var isCalled = false;
	var a = window.setInterval(function ()
	{
		try
		{
			if (!(window.location.href === url))
			{
				if (!isCalled)
				{
					if (location.hostname === 'secure.bluenile.com')
					{
						if (document.getElementsByClassName('offer-with-image')[0] != undefined)
						{
							invokeCSharpAction('Into Interactive State From AJAX|' + window.location.href + document.readyState + '/CartPage/');
							url = window.location.href;
							isCalled = true;
						}
					}
					if (location.hostname === 'secure.bluenile.com')
					{
						if (document.getElementsByClassName('payment-information-drawer')[0] != undefined)
						{
							invokeCSharpAction('Into Interactive State From AJAX|' + window.location.href + document.readyState + '/CheckoutPage/');
							url = window.location.href;
							isCalled = true;
						}
					}
				}
				else
				{
					if (location.hostname === 'secure.bluenile.com')
					{
						if (document.getElementsByClassName('offer-with-image')[0] != undefined)
						{
							invokeCSharpAction('Into Interactive State From AJAX|' + window.location.href + document.readyState + '/CartPage/');
							url = window.location.href;
						}
					}
					if (location.hostname === 'secure.bluenile.com')
					{
						if (document.getElementsByClassName('payment-information-drawer')[0] != undefined)
						{
							invokeCSharpAction('Into Interactive State From AJAX|' + window.location.href + document.readyState + '/CheckoutPage/');
							url = window.location.href;
							isCalled = true;
						}
					}
				}

			}
		}
		catch (ex)
		{
			if (location.hostname === 'secure.bluenile.com')
			{
				invokeCSharpAction("ERR|" + window.location.href + "|InitialJSContent.js|" + ex);
			}
		}
	}, 1000);



	if (!isCalled)
	{
		if (document.readyState === 'interactive' || document.readyState === 'complete')
		{
			check();
		}
		else
		{
			document.addEventListener('readystatechange', (event) =>
			{
				check();
			});
		}
	}


}

function check()
{
	try
	{
		if (!isCalled)
		{

			if (document.readyState === 'interactive' && !isCalled)
			{
				if (location.hostname === 'secure.bluenile.com')
				{
					if (document.getElementsByClassName('offer-with-image')[0] != undefined)
					{
						invokeCSharpAction('Into Interactive State|' + window.location.href + '/CartPage/');
						isCalled = true;
					}
				}
				if (location.hostname === 'secure.bluenile.com')
				{
					if (document.getElementsByClassName('payment-information-drawer')[0] != undefined)
						{
							
							invokeCSharpAction('Into Interactive State From AJAX|' + window.location.href + document.readyState + '/CheckoutPage/');
							url = window.location.href;
							isCalled = true;
							
						}
				}
			}
			else if (document.readyState === 'complete')
			{
				if (location.hostname === 'secure.bluenile.com')
				{
					if (document.getElementsByClassName('offer-with-image')[0] != undefined)
					{
						invokeCSharpAction('Into Complete State|' + window.location.href + '/CartPage/');
						isCalled = true;
					}
				}
				if (location.hostname === 'secure.bluenile.com')
				{
					if (document.getElementsByClassName('payment-information-drawer')[0] != undefined){
					
							invokeCSharpAction('Into Interactive State From AJAX|' + window.location.href + document.readyState + '/CheckoutPage/');
							url = window.location.href;
							isCalled = true;
					}
				}
			}
		}
	}
	catch (ex)
	{
		if (location.hostname === 'www.bluenile.com')
		{
			invokeCSharpAction("ERR|" + window.location.href + "|InitialJSContent.js|" + ex);
		}
	}
}