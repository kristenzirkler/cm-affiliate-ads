/*! oi 0.9.5 | domReady module by @ryanve | @link github.com/ryanve/oi | @license MIT */
(function(e,g,d){"undefined"!=typeof module&&module.exports?module.exports=d():e[g]=d()})(this,"oi",function(){function e(a){function b(b){m(b,a);if(this!==u)return this}a=v.call(arguments);b.remix=e;b.relay=g;return b}function g(a){return a?e(a):e()}function d(a,b,h){var c,d;if(null!=a){h=g(h||a);d={domReady:h,addEvent:n,removeEvent:p};b=!0===b;for(c in d)(b||null==a[c])&&(a[c]=d[c]);(c=a.fn)&&(b||null==c.ready)&&(c.ready=h);return a}}var u=window,c=document,q=c.documentElement,r=!!c.addEventListener,
n=r?function(a,b,c){a.addEventListener(b,c,!1)}:function(a,b,c){a.attachEvent("on"+b,c)},p=r?function(a,b,c){a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent("on"+b,c)},f=[],v=f.slice,s=/^loade|c/.test(c.readyState),w=/^c/,l=!!q.doScroll,t=l?"onreadystatechange":"DOMContentLoaded",k=function(a,b,d){s||d?a.apply(c,b):f.push([a,b])},m=l?function(a,b){if(self!=top)k(a,b);else try{q.doScroll("left"),k(a,b,1)}catch(c){return setTimeout(function(){m(a,b)},50)}}:k;n(c,t,f[0]=function(){var a;
if(!l||w.test(c.readyState))for(p(c,t,f.shift()),s=1;a=f.shift();)k(a[0],a[1])});d.relay=!1;return d({fn:{},bridge:d},!0)});

/* this is where we call the function */
oi.domReady(function () {

// Get Data from Page
    var el,
        adSlot = 'cmProductAd0',
        dataTarget = 'cmProductAd',
        apiCall = '',
        productID = '';

// Get Product Data ------------------------------------------------
    // ProductID from Element
    // Additional Product Information from API
    if (1 == 2) {
        // API
        productID = '1353'; //TEMP
        var thisApiCall = apiCall + productID;
        var x = new XMLHttpRequest();
        x.open('GET', thisApiCall, true);
        x.onreadystatechange = function () {
          if (x.readyState == 4 && x.status == 200)
          {
            var doc = x.responseXML;
            // …
          }
        };
        x.send(null);

    } else {
        // SAMPLE DATA FOR TESTING
        var apiProductData = '<xmldata><Products><ProductCode>CM-4001HD</ProductCode><ProductID>1353</ProductID><ProductName>&lt;em&gt;FLAT&lt;/em&gt;enna 35 (Black)</ProductName><ProductDescriptionShort>&lt;font class="text colors_text"&gt;Ultra-thin, flexible indoor antenna up to 35 miles&lt;/font&gt;</ProductDescriptionShort></Products></xmldata>';
    }

    // Parse XML
    if (window.DOMParser) {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(apiProductData, 'text/xml');
    } else {
        // Internet Explorer
        xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
        xmlDoc.async = false;
        xmlDoc.loadXML(apiProductData);
    }
    // Load Variables
    var productCode = xmlDoc.getElementsByTagName('ProductCode')[0].childNodes[0].nodeValue;
    var productID = xmlDoc.getElementsByTagName('ProductID')[0].childNodes[0].nodeValue;

    var productName = xmlDoc.getElementsByTagName('ProductName')[0].childNodes[0].nodeValue;
    var productDescriptionShort = xmlDoc.getElementsByTagName('ProductDescriptionShort')[0].childNodes[0].nodeValue;

    var productAdHTML = 'productCode:'+productCode+'; productID:'+productID+'; productName:'+productName+'; productDescriptionShort:'+productDescriptionShort+'; ';

    if (productID) {
        document.getElementById(adSlot).innerHTML = productAdHTML;
    } else {
        document.getElementById(adSlot).innerHTML = '<div style="background:#ffe1e1;color:#ff9797;font-size:12px;text-align:center;padding:10px;">ERROR: no productID</div>';
    }
    

//console.log('productCode:'+productCode+'; productID:'+productID+'; productName:'+productName+'; productDescriptionShort:'+productDescriptionShort+'; ')

});








