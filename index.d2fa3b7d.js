document.addEventListener("DOMContentLoaded",function(){var n=function(){for(var n=0;n<C.length;n++)C[n].innerHTML=0;B=0,k.innerHTML=B,b.innerHTML="Join the numbers and get to the <b>2048</b> tile!",r(),r()},e=function(){for(var n=0;n<C.length;n++)C[n].style.backgroundColor="#afa192"},r=function(){var n=C.filter(function(n){return"0"===n.innerHTML});if(0===n.length){d(),l();return}var e=Math.floor(Math.random()*n.length);n[e].innerHTML=.9>Math.random()?"2":"4",d()},t=function(){for(var n=0;n<j*w;n++)if(n%4==0){var e=C[n].innerHTML,r=C[n+1].innerHTML,t=C[n+2].innerHTML,i=C[n+3].innerHTML,a=[parseInt(e),parseInt(r),parseInt(t),parseInt(i)].filter(function(n){return n}),o=Array(w-a.length).fill(0).concat(a);C[n].innerHTML=o[0],C[n+1].innerHTML=o[1],C[n+2].innerHTML=o[2],C[n+3].innerHTML=o[3]}},i=function(){for(var n=0;n<j*w;n++)if(n%w==0){var e=C[n].innerHTML,r=C[n+1].innerHTML,t=C[n+2].innerHTML,i=C[n+3].innerHTML,a=[parseInt(e),parseInt(r),parseInt(t),parseInt(i)].filter(function(n){return n}),o=Array(w-a.length).fill(0),u=a.concat(o);C[n].innerHTML=u[0],C[n+1].innerHTML=u[1],C[n+2].innerHTML=u[2],C[n+3].innerHTML=u[3]}},a=function(){for(var n=0;n<w;n++){var e=C[n].innerHTML,r=C[n+j].innerHTML,t=C[n+2*j].innerHTML,i=C[n+3*j].innerHTML,a=[parseInt(e),parseInt(r),parseInt(t),parseInt(i)].filter(function(n){return n}),o=Array(w-a.length).fill(0),u=a.concat(o);C[n].innerHTML=u[0],C[n+j].innerHTML=u[1],C[n+2*j].innerHTML=u[2],C[n+3*j].innerHTML=u[3]}},o=function(){for(var n=0;n<w;n++){var e=C[n].innerHTML,r=C[n+j].innerHTML,t=C[n+2*j].innerHTML,i=C[n+3*j].innerHTML,a=[parseInt(e),parseInt(r),parseInt(t),parseInt(i)].filter(function(n){return n}),o=Array(4-a.length).fill(0).concat(a);C[n].innerHTML=o[0],C[n+j].innerHTML=o[1],C[n+2*j].innerHTML=o[2],C[n+3*j].innerHTML=o[3]}},u=function(){for(var n=0;n<j*w-1;n++)if(C[n].innerHTML===C[n+1].innerHTML){var e=parseInt(C[n].innerHTML)+parseInt(C[n+1].innerHTML);C[n].innerHTML=e,C[n+1].innerHTML="0",B+=e,k.innerHTML=B}l()},f=function(){for(var n=0;n<j*(w-1);n++)if(C[n].innerHTML===C[n+j].innerHTML){var e=parseInt(C[n].innerHTML)+parseInt(C[n+j].innerHTML);C[n].innerHTML=e,C[n+j].innerHTML="0",B+=e,k.innerHTML=B}l()},c=function(n){switch(n.keyCode){case 37:M();break;case 38:T();break;case 39:L();break;case 40:H()}},L=function(){var n=I();t(),u(),t(),g(n,I())||r()},M=function(){var n=I();i(),u(),i(),g(n,I())||r()},T=function(){var n=I();a(),f(),a(),g(n,I())||r()},H=function(){var n=I();o(),f(),o(),g(n,I())||r()},l=function(){for(var n=0;n<C.length;n++)if(parseInt(C[n].innerHTML)>=2048){b.innerHTML="You WIN",document.removeEventListener("keyup",c),setTimeout(function(){return v()},3e3);break}},d=function(){for(var n=0,e=0;e<C.length;e++)"0"===C[e].innerHTML&&n++;0!==n||s()||(b.innerHTML="You LOSE, try again!",document.removeEventListener("keyup",c))},s=function(){for(var n=0;n<C.length;n++){var e=C[n].innerHTML,r=n%A<A-1?C[n+1].innerHTML:null,t=n%A>0?C[n-1].innerHTML:null,i=n>=A?C[n-A].innerHTML:null,a=n<A*(A-1)?C[n+A].innerHTML:null;if(e===r||e===t||e===i||e===a)return!0}return!1},v=function(){clearInterval(myTimer)},p=function(){for(var n=0;n<C.length;n++){var e=C[n].innerHTML;C[n].style.backgroundColor=m(e),C[n].style.color="0"===e?"transparent":"black"}},m=function(n){return({2:"#eee4da",4:"#ede0c8",8:"#f2b179",16:"#ffcea4",32:"#e8c064",64:"#ffab6e",128:"#fd9982",256:"#ead79c",512:"#76daff",1024:"#beeaa5",2048:"#d7d4f0"})[n]||"#afa192"},I=function(){return C.map(function(n){return n.innerHTML})},g=function(n,e){return n.join()===e.join()},h=function(){p();var n=I();g(I(),n)||setTimeout(function(){r(),p()},200)},y=document.querySelector(".grid"),k=document.getElementById("score"),b=document.getElementById("result"),E=document.getElementById("new-game"),C=[],A=4,B=0;E.addEventListener("click",function(){n(),e(),p(),document.addEventListener("keyup",c)}),function(){for(var n=0;n<A*A;n++){var e=document.createElement("div");e.innerHTML="0",y.appendChild(e),C.push(e)}r(),r()}();var j=4,w=4;document.addEventListener("keyup",c),p(),document.addEventListener("keyup",function(){h()}),E.addEventListener("click",function(){h()}),h()});
//# sourceMappingURL=index.d2fa3b7d.js.map