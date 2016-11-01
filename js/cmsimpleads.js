/*! oi 0.9.5 | domReady module by @ryanve | @link github.com/ryanve/oi | @license MIT */
(function(e,g,d){"undefined"!=typeof module&&module.exports?module.exports=d():e[g]=d()})(this,"oi",function(){function e(a){function b(b){m(b,a);if(this!==u)return this}a=v.call(arguments);b.remix=e;b.relay=g;return b}function g(a){return a?e(a):e()}function d(a,b,h){var c,d;if(null!=a){h=g(h||a);d={domReady:h,addEvent:n,removeEvent:p};b=!0===b;for(c in d)(b||null==a[c])&&(a[c]=d[c]);(c=a.fn)&&(b||null==c.ready)&&(c.ready=h);return a}}var u=window,c=document,q=c.documentElement,r=!!c.addEventListener,
n=r?function(a,b,c){a.addEventListener(b,c,!1)}:function(a,b,c){a.attachEvent("on"+b,c)},p=r?function(a,b,c){a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent("on"+b,c)},f=[],v=f.slice,s=/^loade|c/.test(c.readyState),w=/^c/,l=!!q.doScroll,t=l?"onreadystatechange":"DOMContentLoaded",k=function(a,b,d){s||d?a.apply(c,b):f.push([a,b])},m=l?function(a,b){if(self!=top)k(a,b);else try{q.doScroll("left"),k(a,b,1)}catch(c){return setTimeout(function(){m(a,b)},50)}}:k;n(c,t,f[0]=function(){var a;
if(!l||w.test(c.readyState))for(p(c,t,f.shift()),s=1;a=f.shift();)k(a[0],a[1])});d.relay=!1;return d({fn:{},bridge:d},!0)});

/* this is where we call the function */
oi.domReady(function () {

    var el,
        dataTarget = 'cmSimpleAd',
        adWidthDefault = '100%',
        adHeightDefault = '',
        adCampaignDefault = '000',
        adSlot = '',
        adCampaign = '',
        adImageUrl = ''
        adLink = '';

    for(var i = 0; el = document.getElementById(dataTarget + i); i++) {
        adSlot = dataTarget+i;
        adWidth = el.getAttribute('data-width');
        if (!adWidth) { adWidth = adWidthDefault; }
        adHeight = el.getAttribute('data-height');
        if (!adHeight) { adHeight = adHeightDefault; }
        adCampaign = el.getAttribute('data-campaign');
        if (!adCampaign) { adCampaign = adCampaignDefault; }
        adImage = el.getAttribute('data-imagepath');
        adLink = el.getAttribute('data-url');
        
        if (adImage) {
            document.getElementById(adSlot).innerHTML = '<div style="width:'+adWidth+'px;height:'+adHeight+'px;"><a href="'+adLink+'"><img style="width:100%" src="'+adImage+'" alt="Channel Master" /></a></div>';
        } else {
            document.getElementById(adSlot).innerHTML = '<div style="background:#ffe1e1;color:#ff9797;font-size:12px;width:'+adWidth+'px;height:'+adHeight+'px;text-align:center;">ERROR: no affiliateID</div>';
        }
        
    }
});