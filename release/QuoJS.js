/*
    QuoJS 2.0.3
    http://quojs.tapquo.com

    Copyright (C) 2011,2012 Javi Jiménez Villar (@soyjavi)

    Permission is hereby granted, free of charge, to any person obtaining a
    copy of this software and associated documentation files (the "Software"),
    to deal in the Software without restriction, including without limitation
    the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    DEALINGS IN THE SOFTWARE.
*/

(function(){var a;a=function(){var e,l,h;l=[];h=function(i,f){i=i||l;i.__proto__=h.prototype;i.selector=f||"";return i};e=function(i){var f;if(i){f=e.getDomainSelector(i);return h(f,i)}else return h()};e.extend=function(i){Array.prototype.slice.call(arguments,1).forEach(function(f){var j,k;k=[];for(j in f)k.push(i[j]=f[j]);return k});return i};h.prototype=e.fn={};return e}();window.Quo=a;"$$"in window||(window.$$=a)}).call(this);(function(){(function(a){var e,l,h,i;e=[];l=Object.prototype;a.toType=function(f){return l.toString.call(f).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};a.isOwnProperty=function(f,j){return l.hasOwnProperty.call(f,j)};a.getDomainSelector=function(f){var j,k,n;j=null;k=[1,9,11];n=a.toType(f);if(n==="array")j=h(f);else if(n==="string")j=a.query(document,f);else if(k.indexOf(f.nodeType)>=0||f===window)j=[f];return j};a.map=function(f,j){var k,n,o;o=[];k=void 0;if(a.toType(f)==="array")for(k=0;k<f.length;){n=
j(f[k],k);n!=null&&o.push(n);k++}else for(k in f){n=j(f[k],k);n!=null&&o.push(n)}return i(o)};a.each=function(f,j){var k;k=void 0;if(a.toType(f)==="array")for(k=0;k<f.length;){if(j.call(f[k],k,f[k])===false)break;k++}else for(k in f)if(j.call(f[k],k,f[k])===false)break;return f};a.mix=function(){var f,j,k,n,o;k={};f=0;for(n=arguments.length;f<n;){j=arguments[f];for(o in j)if(a.isOwnProperty(j,o)&&j[o]!==undefined)k[o]=j[o];f++}return k};a.fn.map=function(f){return a.map(this,function(j,k){return f.call(j,
k,j)})};a.fn.instance=function(f){return this.map(function(){return this[f]})};a.fn.filter=function(f){return a([].filter.call(this,function(j){return j.parentNode&&a.query(j.parentNode,f).indexOf(j)>=0}))};a.fn.forEach=e.forEach;a.fn.indexOf=e.indexOf;h=function(f){return f.filter(function(j){return j!==void 0&&j!==null})};i=function(f){return f.length>0?[].concat.apply([],f):f}})(Quo)}).call(this);(function(){(function(a){a.fn.attr=function(e,l){return a.toType(e)==="string"&&l===void 0?this[0].getAttribute(e):this.each(function(){return this.setAttribute(e,l)})};a.fn.data=function(e,l){return this.attr("data-"+e,l)};a.fn.val=function(e){return a.toType(e)==="string"?this.each(function(){return this.value=e}):this.length>0?this[0].value:null};a.fn.show=function(){return this.style("display","block")};a.fn.hide=function(){return this.style("display","none")};a.fn.height=function(){return this.offset().height};
a.fn.width=function(){return this.offset().width};a.fn.offset=function(){var e;e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}};a.fn.remove=function(){return this.each(function(){if(this.parentNode!=null)return this.parentNode.removeChild(this)})}})(Quo)}).call(this);(function(){(function(a){var e,l,h,i,f,j,k;h=null;e=/WebKit\/([\d.]+)/;l={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,blackberry:/(BlackBerry).*Version\/([\d.]+)/,webos:/(webOS|hpwOS)[\s\/]([\d.]+)/};a.isMobile=function(){h=h||f();return h.isMobile};a.environment=function(){return h=h||f()};a.isOnline=function(){return navigator.onLine};f=function(){var n,o;o=navigator.userAgent;n={};n.browser=i(o);n.os=j(o);n.isMobile=n.os?true:false;n.screen=k();return n};
i=function(n){var o;return(o=n.match(e))?o[0]:n};j=function(n){var o,q,r;o=void 0;for(q in l)if(r=n.match(l[q])){o={name:q==="iphone"||q==="ipad"?"ios":q,version:r[2].replace("_",".")};break}return o};k=function(){return{width:window.innerWidth,height:window.innerHeight}}})(Quo)}).call(this);(function(){(function(a){a.fn.text=function(e){return e?this.each(function(){return this.textContent=e}):this[0].textContent};a.fn.html=function(e){var l;l=a.toType(e);return l==="string"||l==="number"?this.each(function(){return this.innerHTML=e}):this[0].innerHTML};a.fn.append=function(e){return this.each(function(){var l;if(a.toType(e)==="string"){if(e){l=document.createElement("div");l.innerHTML=e;return this.appendChild(l.firstChild)}}else return this.insertBefore(e)})};a.fn.prepend=function(e){return this.each(function(){var l;
if(a.toType(e)==="string")return this.innerHTML=e+this.innerHTML;else{l=this.parentNode;return l.insertBefore(e,l.firstChild)}})};a.fn.empty=function(){return this.each(function(){this.innerHTML=null})}})(Quo)}).call(this);(function(){(function(a){var e,l;a.query=function(h,i){var f;f=h.querySelectorAll(i);return f=Array.prototype.slice.call(f)};a.fn.find=function(h){var i;i=void 0;i=this.length===1?Quo.query(this[0],h):this.map(function(){return Quo.query(this,h)});return a(i)};a.fn.parent=function(h){var i;i=h?l(this):this.instance("parentNode");return e(i,h)};a.fn.siblings=function(h){var i;i=this.map(function(f,j){return Array.prototype.slice.call(j.parentNode.children).filter(function(k){return k!==j})});return e(i,
h)};a.fn.children=function(h){var i;i=this.map(function(){return Array.prototype.slice.call(this.children)});return e(i,h)};a.fn.get=function(h){return h===undefined?this:this[h]};a.fn.first=function(){return a(this[0])};a.fn.last=function(){return a(this[this.length-1])};a.fn.closest=function(h,i){var f,j;j=this[0];f=a(h);for(f.length||(j=null);j&&f.indexOf(j)<0;)j=j!==i&&j!==document&&j.parentNode;return a(j)};a.fn.each=function(h){this.forEach(function(i,f){return h.call(i,f,i)});return this};
l=function(h){var i;for(i=[];h.length>0;)h=a.map(h,function(f){if((f=f.parentNode)&&f!==document&&i.indexOf(f)<0){i.push(f);return f}});return i};e=function(h,i){return i===undefined?a(h):a(h).filter(i)}})(Quo)}).call(this);(function(){(function(a){var e,l;a.fn.addClass=function(h){return this.each(function(){if(!l(h,this.className)){this.className+=" "+h;return this.className=this.className.trim()}})};a.fn.removeClass=function(h){return this.each(function(){if(l(h,this.className))return this.className=this.className.replace(h," ").replace(/\s+/g," ").trim()})};a.fn.toggleClass=function(h){return this.each(function(){if(l(h,this.className))return this.className=this.className.replace(h," ");else{this.className+=" "+
h;return this.className=this.className.trim()}})};a.fn.hasClass=function(h){return l(h,this[0].className)};a.fn.style=function(h,i){return i?this.each(function(){return this.style[h]=i}):this[0].style[h]||e(this[0],h)};l=function(h,i){return i.split(/\s+/g).indexOf(h)>=0};e=function(h,i){return document.defaultView.getComputedStyle(h,"")[i]}})(Quo)}).call(this);(function(){(function(a){var e,l,h,i,f,j,k,n,o,q,r;e={TYPE:"GET",MIME:"json"};h={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"};l=0;a.ajaxSettings={type:e.TYPE,async:true,success:{},error:{},context:null,dataType:e.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:false,timeout:0};a.ajax=function(d){var c,b,g;b=a.mix(a.ajaxSettings,d);if(b.type===e.TYPE)b.url+=a.serializeParameters(b.data,
"?");else b.data=a.serializeParameters(b.data);if(i(b.url))return a.jsonp(b);g=b.xhr();g.onreadystatechange=function(){if(g.readyState===4){clearTimeout(c);return o(g,b)}};g.open(b.type,b.url,b.async);n(g,b);if(b.timeout>0)c=setTimeout(function(){return r(g,b)},b.timeout);g.send(b.data);return b.async?g:f(g,b)};a.jsonp=function(d){var c,b,g,m;if(d.async){b="jsonp"+ ++l;g=document.createElement("script");m={abort:function(){a(g).remove();if(b in window)return window[b]={}}};c=void 0;window[b]=function(p){clearTimeout(c);
a(g).remove();delete window[b];return q(p,m,d)};g.src=d.url.replace(/=\?/,"="+b);a("head").append(g);if(d.timeout>0)c=setTimeout(function(){return r(m,d)},d.timeout);return m}else return console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")};a.get=function(d,c,b,g){return a.ajax({url:d,data:c,success:b,dataType:g})};a.post=function(d,c,b,g){return k("POST",d,c,b,g)};a.put=function(d,c,b,g){return k("PUT",d,c,b,g)};a["delete"]=function(d,c,b,g){return k("DELETE",d,c,b,g)};a.json=function(d,
c,b){return a.ajax({url:d,data:c,success:b,dataType:e.MIME})};a.serializeParameters=function(d,c){var b,g;if(c==null)c="";g=c;for(b in d)if(d.hasOwnProperty(b)){if(g!==c)g+="&";g+=b+"="+d[b]}return g===c?"":g};o=function(d,c){if(d.status===200||d.status===0)c.async&&q(f(d,c),d,c);else j("QuoJS.ajax: Unsuccesful request",d,c)};q=function(d,c,b){b.success.call(b.context,d,c)};j=function(d,c,b){b.error.call(b.context,d,c,b)};n=function(d,c){var b;if(c.contentType)c.headers["Content-Type"]=c.contentType;
if(c.dataType)c.headers.Accept=h[c.dataType];for(b in c.headers)d.setRequestHeader(b,c.headers[b])};r=function(d,c){d.onreadystatechange={};d.abort();j("QuoJS.ajax: Timeout exceeded",d,c)};k=function(d,c,b,g,m){return a.ajax({type:d,url:c,data:b,success:g,dataType:m,contentType:"application/x-www-form-urlencoded"})};f=function(d,c){var b;if(b=d.responseText)if(c.dataType===e.MIME)try{b=JSON.parse(b)}catch(g){b=g;j("QuoJS.ajax: Parse Error",d,c)}else if(c.dataType==="xml")b=d.responseXML;return b};
i=function(d){return/=\?/.test(d)}})(Quo)}).call(this);(function(){(function(a){var e,l;e=/complete|loaded|interactive/;l={touch:"touchstart",tap:"tap"};["touch","tap"].forEach(function(h){a.fn[h]=function(i){return a(document.body).delegate(this.selector,l[h],i)};return this});a.fn.on=function(h,i,f){return i===undefined||a.toType(i)==="function"?this.bind(h,i):this.delegate(i,h,f)};a.fn.off=function(h,i,f){return i===undefined||a.toType(i)==="function"?this.unbind(h,i):this.undelegate(i,h,f)};a.fn.ready=function(h){e.test(document.readyState)?h(a):
a.fn.addEvent(document,"DOMContentLoaded",function(){return h(a)});return this}})(Quo)}).call(this);(function(){(function(a){var e,l,h,i,f,j,k,n,o,q,r;e=1;i={};h={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};l={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",tap:"click",doubletap:"dblclick",orientationchange:"resize"};a.Event=function(d,c){var b;b=document.createEvent("Events");b.initEvent(d,true,true,null,null,null,null,null,null,null,null,null,null,null,null);if(c){b.pageX=c.x1;b.pageY=c.y1;
b.toX=c.x2;b.toY=c.y2;b.fingers=c.fingers}return b};a.fn.bind=function(d,c){return this.each(function(){q(this,d,c)})};a.fn.unbind=function(d,c){return this.each(function(){r(this,d,c)})};a.fn.delegate=function(d,c,b){return this.each(function(g,m){q(m,c,b,d,function(p){return function(s){var u,t;if(t=a(s.target).closest(d,m).get(0)){u=a.extend(f(s),{currentTarget:t,liveFired:m});return p.apply(t,[u].concat([].slice.call(arguments,1)))}}})})};a.fn.undelegate=function(d,c,b){return this.each(function(){r(this,
c,b,d)})};a.fn.trigger=function(d,c){if(a.toType(d)==="string")d=a.Event(d,c);return this.each(function(){this.dispatchEvent(d)})};a.fn.addEvent=function(d,c,b){return d.addEventListener?d.addEventListener(c,b,false):d.attachEvent?d.attachEvent("on"+c,b):d["on"+c]=b};a.fn.removeEvent=function(d,c,b){return d.removeEventListener?d.removeEventListener(c,b,false):d.detachEvent?d.detachEvent("on"+c,b):d["on"+c]=null};q=function(d,c,b,g,m){var p;c=k(c);p=o(d);p=i[p]||(i[p]=[]);m=m&&m(b,c);c={event:c,callback:b,
selector:g,proxy:j(m,b,d),delegate:m,index:p.length};p.push(c);return a.fn.addEvent(d,c.event,c.proxy)};r=function(d,c,b,g){var m;c=k(c);m=o(d);return n(m,c,b,g).forEach(function(p){delete i[m][p.index];return a.fn.removeEvent(d,p.event,p.proxy)})};o=function(d){return d._id||(d._id=e++)};k=function(d){return(a.isMobile()?d:l[d])||d};j=function(d,c,b){c=d||c;return function(g){var m;m=c.apply(b,[g].concat(g.data));m===false&&g.preventDefault();return m}};n=function(d,c,b,g){return(i[d]||[]).filter(function(m){return m&&
(!c||m.event===c)&&(!b||m.fn===b)&&(!g||m.selector===g)})};f=function(d){var c;c=a.extend({originalEvent:d},d);a.each(h,function(b,g){c[b]=function(){this[g]=function(){return true};return d[b].apply(d,arguments)};return c[g]=function(){return false}});return c}})(Quo)}).call(this);(function(){(function(a){var e,l,h,i,f,j,k,n,o,q,r,d,c,b;e={};l=void 0;["doubleTap","hold","swipe","swiping","swipeLeft","swipeRight","swipeUp","swipeDown","drag"].forEach(function(g){a.fn[g]=function(m){return this.on(g,m)}});a(document).ready(function(){return n()});n=function(){var g;g=a(document.body);g.bind("touchstart",r);g.bind("touchmove",q);g.bind("touchend",o);return g.bind("touchcancel",i)};r=function(g){var m,p,s;p=Date.now();m=p-(e.last||p);s=h(g);l&&clearTimeout(l);e={el:a(d(s.target)),
x1:s.pageX,y1:s.pageY,isDoubleTap:m>0&&m<=250?true:false,last:p,fingers:f(g)};return setTimeout(j,650)};q=function(g){var m;m=h(g);e.x2=m.pageX;e.y2=m.pageY;if(k(g))return e.el.trigger("swiping",e)};o=function(g){if(e.isDoubleTap)return b("doubleTap",true);else if(e.x2>0||e.y2>0){if(k(g))if(e.fingers===1){b("swipe",false);g=c(e.x1,e.x2,e.y1,e.y2);b(g,false)}else b("drag",false);return i()}else{e.el&&b("tap");return l=setTimeout(i,250)}};b=function(g,m){e.el.trigger(g,e);return m&&i()};i=function(){e=
{};return clearTimeout(l)};k=function(){return e.el&&(Math.abs(e.x1-e.x2)>30||Math.abs(e.y1-e.y2)>30)};h=function(g){return a.isMobile()?g.touches[0]:g};d=function(g){return"tagName"in g?g:g.parentNode};c=function(g,m,p,s){return Math.abs(g-m)>=Math.abs(p-s)?g-m>0?"swipeLeft":"swipeRight":p-s>0?"swipeUp":"swipeDown"};j=function(){if(e.last&&Date.now()-e.last>=650){b("hold");i()}};f=function(g){return g.touches?g.touches.length:1}})(Quo)}).call(this);
