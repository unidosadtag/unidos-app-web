(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4CcO":function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t("gIcY"),a=function(){return function(){this.type="alfa",this.decimal=2,this.decimalCaracter=",",this.userCaracters=!1,this.numberAndTousand=!1,this.moneyInitHasInt=!0}}(),i=function(){function e(e,r){this.controlContainer=e,this.elementRef=r,this.brmasker=new a}return e.prototype.inputKeyup=function(e){var r=this.returnValue(e.target.value);this.setValueInFormControl(r)},e.prototype.ngOnInit=function(){this.brmasker.type||(this.brmasker.type="all"),this.brmasker.decimal||(this.brmasker.decimal=2),void 0===this.brmasker.moneyInitHasInt&&(this.brmasker.moneyInitHasInt=!0),this.brmasker.decimalCaracter||(this.brmasker.decimalCaracter=","),this.controlContainer?this.formControlName?this.brmasker.form=this.controlContainer.control.get(this.formControlName):console.warn("Missing FormControlName directive from host element of the component"):console.warn("Can't find parent FormGroup directive"),this.initialValue()},e.prototype.initialValue=function(){var e=this.returnValue(this.elementRef.nativeElement.value);this.setValueInFormControl(e)},e.prototype.verifyFormControl=function(){return this.brmasker.form instanceof n.c},e.prototype.setValueInFormControl=function(e){this.verifyFormControl()?(this.brmasker.form.setValue(e),this.brmasker.form.updateValueAndValidity()):this.elementRef.nativeElement.value=e},e.prototype.writeCreateValue=function(e,r){return void 0===r&&(r=new a),e&&r.phone?e.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi,"$1 ($2) $3-$4"):e&&r.phoneNotDDD?this.phoneNotDDDMask(e):e&&r.money?this.writeValueMoney(e,r):e&&r.person?this.writeValuePerson(e):e&&r.percent?this.writeValuePercent(e):this.brmasker.userCaracters?this.usingSpecialCharacters(e,this.brmasker.mask,this.brmasker.len):e&&r.mask?(this.brmasker.mask=r.mask,r.len&&(this.brmasker.len=r.len),this.onInput(e)):e},e.prototype.writeValuePercent=function(e){return e.replace(/\D/gi,""),e.replace(/%/gi,""),e.replace(/([0-9]{0})$/gi,"%$1")},e.prototype.writeValuePerson=function(e){return e.length<=11?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi,"$1.$2.$3-$4"):e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi,"$1.$2.$3/$4-$5")},e.prototype.writeValueMoney=function(e,r){return void 0===r&&(r=new a),this.moneyMask(e,r)},e.prototype.returnValue=function(e){if(this.brmasker.mask||(this.brmasker.mask=""),e){var r=e;return"alfa"===this.brmasker.type&&(r=r.replace(/\d/gi,"")),"num"===this.brmasker.type&&(r=r.replace(/\D/gi,"")),this.brmasker.money?this.moneyMask(this.onInput(r),this.brmasker):this.brmasker.phone?this.phoneMask(r):this.brmasker.phoneNotDDD?this.phoneNotDDDMask(r):this.brmasker.person?this.peapollMask(r):this.brmasker.percent?this.percentMask(r):this.brmasker.numberAndTousand?this.thousand(r):this.brmasker.userCaracters?this.usingSpecialCharacters(r,this.brmasker.mask,this.brmasker.len):this.onInput(r)}return""},e.prototype.percentMask=function(e){return e.replace(/\D/gi,"").replace(/%/gi,"").replace(/([0-9]{0})$/gi,"%$1")},e.prototype.phoneMask=function(e){var r=e;return r.length>14||11===r.length?(this.brmasker.len=15,this.brmasker.mask="(99) 99999-9999",r=(r=(r=(r=r.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=14,this.brmasker.mask="(99) 9999-9999",r=(r=(r=(r=r.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1 $2")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(r)},e.prototype.phoneNotDDDMask=function(e){var r=e;return r.length>9?(this.brmasker.len=10,this.brmasker.mask="99999-9999",r=(r=(r=r.replace(/\D/gi,"")).replace(/(\d{5})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")):(this.brmasker.len=9,this.brmasker.mask="9999-9999",r=(r=(r=r.replace(/\D/gi,"")).replace(/(\d{4})(\d)/gi,"$1-$2")).replace(/(\d{4})(\d)/gi,"$1$2")),this.onInput(r)},e.prototype.peapollMask=function(e){var r=e;return r.length>14?(this.brmasker.len=18,this.brmasker.mask="99.999.999/9999-99",r=(r=(r=(r=(r=(r=r.replace(/\D/gi,"")).replace(/(\d{2})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1/$2")).replace(/(\d{4})(\d{1,4})$/gi,"$1-$2")).replace(/(\d{2})(\d{1,2})$/gi,"$1$2")):(this.brmasker.len=14,this.brmasker.mask="999.999.999-99",r=(r=(r=(r=r.replace(/\D/gi,"")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d)/gi,"$1.$2")).replace(/(\d{3})(\d{1,2})$/gi,"$1-$2")),this.onInput(r)},e.prototype.moneyMask=function(e,r){var t=r.decimal||this.brmasker.decimal;if(1===(e=e.replace(/\D/gi,"").replace(new RegExp("([0-9]{"+t+"})$","g"),r.decimalCaracter+"$1")).length&&!this.brmasker.moneyInitHasInt){var n=Array(t-1).fill(0);return"0"+r.decimalCaracter+n.join("")+e}return e.length===t+1?"0"+e:e.length>t+2&&"0"===e.charAt(0)?e.substr(1):(r.thousand&&e.length>Number(4)+Number(r.decimal)&&(e=e.replace(new RegExp("([0-9]{3})"+r.decimalCaracter+"([0-9]{"+r.decimal+"}$)","g"),r.thousand+"$1"+r.decimalCaracter+"$2")),r.thousand&&e.length>Number(8)+Number(r.decimal)&&(e=e.replace(new RegExp("([0-9]{3})"+r.thousand+"([0-9]{3})"+r.decimalCaracter+"([0-9]{"+r.decimal+"}$)","g"),r.thousand+"$1"+r.thousand+"$2"+r.decimalCaracter+"$3")),e)},e.prototype.onInput=function(e){return this.formatField(e,this.brmasker.mask,this.brmasker.len)},e.prototype.usingSpecialCharacters=function(e,r,t){t||(t=99999999999);for(var n=e.toString().replace(/\-|\.|\,| /gi,""),a=0,i="",o=n.length,s=0;s<o;s++)s<t&&("-"===r.charAt(s)||"."===r.charAt(s)||","===r.charAt(s)?(i+=r.charAt(s),o++):(i+=n.charAt(a),a++));return i},e.prototype.thousand=function(e){var r=e.replace(/\D/gi,"").toString().split("").reverse().join("").match(/\d{1,3}/g);if(r)return r.join(""+(this.brmasker.thousand||".")).split("").reverse().join("")},e.prototype.formatField=function(e,r,t){t||(t=99999999999);for(var n=e.toString().replace(/\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi,""),a=0,i="",o=n.length,s=0;s<o;s++)s<t&&("-"===r.charAt(s)||"."===r.charAt(s)||"/"===r.charAt(s)||"_"===r.charAt(s)||"("===r.charAt(s)||")"===r.charAt(s)||" "===r.charAt(s)||","===r.charAt(s)||"*"===r.charAt(s)||"+"===r.charAt(s)||"@"===r.charAt(s)||"#"===r.charAt(s)||":"===r.charAt(s)||"$"===r.charAt(s)||"&"===r.charAt(s)||"%"===r.charAt(s)?(i+=r.charAt(s),o++):(i+=n.charAt(a),a++));return i},e}()},"52oS":function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n={"auth/app-deleted":{header:"auth/app-deleted",message:"Lan\xe7ada se a inst\xe2ncia do FirebaseApp tiver sido exclu\xedda."},"auth/app-not-authorized":{header:"auth/app-deleted",message:"Lan\xe7ada se a inst\xe2ncia do FirebaseApp tiver sido exclu\xedda."},"auth/app-not-authorize":{header:"auth/app-deleted",message:"Thrown if the app identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console."},"auth/argument-error":{header:"Error",message:"Lan\xe7ado se um m\xe9todo \xe9 chamado com argumento incorreto"},"auth/invalid-api-key":{header:"Error",message:"Lan\xe7ada se a chave da API fornecida for inv\xe1lida. Verifique se voc\xea o copiou corretamente do Firebase Console."},"auth/invalid-user-token":{header:"Error",message:"Lan\xe7ada se a credencial do usu\xe1rio n\xe3o for mais v\xe1lida. O usu\xe1rio deve entrar novamente"},"auth/invalid-tenant-id":{header:"Error",message:"Lan\xe7ada se o ID do inquilino fornecido for inv\xe1lido."},"auth/network-request-failed":{header:"Error",message:"Lan\xe7ado se ocorrer um erro de rede (como tempo limite, conex\xe3o interrompida ou host inacess\xedvel)."},"auth/operation-not-allowed":{header:"Error",message:"Lan\xe7ado se voc\xea n\xe3o tiver ativado o provedor no Firebase Console. Acesse o Firebase Console do seu projeto, na se\xe7\xe3o Auth e na guia Sign in Method e configure o provedor."},"auth/requires-recent-login":{header:"Error",message:"Lan\xe7ado se o \xfaltimo hor\xe1rio de entrada do usu\xe1rio n\xe3o atingir o limite de seguran\xe7a. Use firebase.User.reauthenticateWithCredential para resolver. Isso n\xe3o se aplica se o usu\xe1rio for an\xf4nimo."},"auth/too-many-requests":{header:"Error",message:"Lan\xe7ada se as solicita\xe7\xf5es forem bloqueadas de um dispositivo devido a atividades incomuns. Tentar novamente ap\xf3s algum atraso seria desbloqueado."},"auth/unauthorized-domain":{header:"Error",message:"Lan\xe7ado se o dom\xednio do aplicativo n\xe3o estiver autorizado para opera\xe7\xf5es OAuth para o seu projeto Firebase. Edite a lista de dom\xednios autorizados no console do Firebase"},"auth/user-disabled":{header:"Error",message:"Lan\xe7ada se a conta do usu\xe1rio tiver sido desativada por um administrador. As contas podem ser ativadas ou desativadas no Firebase Console, na se\xe7\xe3o Auth e na subse\xe7\xe3o Users."},"auth/user-token-expired":{header:"Error",message:"Lan\xe7ada se a credencial do usu\xe1rio expirou. Isso tamb\xe9m pode ser lan\xe7ado se um usu\xe1rio tiver sido exclu\xeddo. Solicitar que o usu\xe1rio entre novamente deve resolver isso nos dois casos."},"auth/web-storage-unsupported":{header:"Error",message:"Lan\xe7ado se o navegador n\xe3o suportar armazenamento na web ou se o usu\xe1rio os desabilitar."},"auth/invalid-email":{header:"Error",message:"O endere\xe7o de email est\xe1 mal formatado."},"auth/wrong-password":{header:"Error",message:"A senha \xe9 inv\xe1lida ou o usu\xe1rio n\xe3o tem uma senha."},"auth/email-already-in-use":{header:"Error",message:"O endere\xe7o de email j\xe1 est\xe1 sendo usado por outra conta."},"auth/user-not-found":{header:"Error",message:"N\xe3o h\xe1 registro de usu\xe1rio correspondente a esse identificador. O usu\xe1rio pode ter sido exclu\xeddo."}}},"6Z4i":function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n={"auth/app-deleted":{header:"auth/app-deleted",message:"Lan\xe7ada se a inst\xe2ncia do FirebaseApp tiver sido exclu\xedda."}}},CPFe:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=function(){return function(){}}()},CbX2:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t("4CcO");var n=function(){return function(){}}()},"DK3/":function(e,r,t){"use strict";t.d(r,"a",(function(){return a})),t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return o})),t.d(r,"d",(function(){return n}));var n=function(){var e=window.TapticEngine;e&&e.selection()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}},Jky2:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return a})),t.d(r,"d",(function(){return u}));var n=t("mrSG"),a=function(e,r){return null!==r.closest(e)},i=function(e){var r;return"string"==typeof e&&e.length>0?((r={"ion-color":!0})["ion-color-"+e]=!0,r):void 0},o=function(e){var r={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return r[e]=!0})),r},s=/^[a-z][a-z0-9+\-.]*:/,u=function(e,r,t){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var a;return Object(n.__generator)(this,(function(n){return null!=e&&"#"!==e[0]&&!s.test(e)&&(a=document.querySelector("ion-router"))?(null!=r&&r.preventDefault(),[2,a.push(e,t)]):[2,!1]}))}))}},NTBD:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"b",(function(){return n}));var n=function(e,r,t){var n=new MutationObserver((function(e){t(a(e,r))}));return n.observe(e,{childList:!0,subtree:!0}),n},a=function(e,r){var t;return e.forEach((function(e){for(var n=0;n<e.addedNodes.length;n++)t=i(e.addedNodes[n],r)||t})),t},i=function(e,r){if(1===e.nodeType)return(e.tagName===r.toUpperCase()?[e]:Array.from(e.querySelectorAll(r))).find((function(e){return!0===e.checked}))}},YNVt:function(e,r,t){"use strict";t.d(r,"a",(function(){return w})),t.d(r,"b",(function(){return E})),t.d(r,"c",(function(){return b})),t.d(r,"d",(function(){return y})),t.d(r,"e",(function(){return o}));var n=t("mrSG"),a=t("Twl7"),i=t("ocqh"),o=function(e){return new Promise((function(r,t){Object(a.m)((function(){s(e),u(e).then((function(t){t.animation&&t.animation.destroy(),c(e),r(t)}),(function(r){c(e),t(r)}))}))}))},s=function(e){var r=e.enteringEl,t=e.leavingEl;$(r,t,e.direction),e.showGoBack?r.classList.add("can-go-back"):r.classList.remove("can-go-back"),y(r,!1),t&&y(t,!1)},u=function(e){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var r;return Object(n.__generator)(this,(function(t){switch(t.label){case 0:return[4,d(e)];case 1:return[2,(r=t.sent())?l(r,e):h(e)]}}))}))},c=function(e){var r=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==r&&r.classList.remove("ion-page-invisible")},d=function(e){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var r;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,t.e(110).then(t.bind(null,"xxD1"))]:[2,void 0];case 1:return r=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,t.e(111).then(t.bind(null,"v1ax"))];case 3:r=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,r]}}))}))},l=function(e,r){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var a,i;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return[4,m(r,!0)];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,5,,6]),[4,t.e(12).then(t.bind(null,"5QBn"))];case 3:return[4,n.sent().create(e,r.baseEl,r)];case 4:return a=n.sent(),[3,6];case 5:return n.sent(),a=e(r.baseEl,r),[3,6];case 6:return v(r.enteringEl,r.leavingEl),[4,f(a,r)];case 7:return i=n.sent(),r.progressCallback&&r.progressCallback(void 0),i&&g(r.enteringEl,r.leavingEl),[2,{hasCompleted:i,animation:a}]}}))}))},h=function(e){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var r,t;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return r=e.enteringEl,t=e.leavingEl,[4,m(e,!1)];case 1:return n.sent(),v(r,t),g(r,t),[2,{hasCompleted:!0}]}}))}))},m=function(e,r){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var t;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:return t=(void 0!==e.deepWait?e.deepWait:r)?[w(e.enteringEl),w(e.leavingEl)]:[k(e.enteringEl),k(e.leavingEl)],[4,Promise.all(t)];case 1:return n.sent(),[4,p(e.viewIsReady,e.enteringEl)];case 2:return n.sent(),[2]}}))}))},p=function(e,r){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){return Object(n.__generator)(this,(function(t){switch(t.label){case 0:return e?[4,e(r)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},f=function(e,r){var t=r.progressCallback,n=new Promise((function(r){e.onFinish((function(t){"number"==typeof t?r(1===t):void 0!==e.hasCompleted&&r(e.hasCompleted)}))}));return t?(e.progressStart(!0),t(e)):e.play(),n},v=function(e,r){b(r,i.c),b(e,i.a)},g=function(e,r){b(e,i.b),b(r,i.d)},b=function(e,r){if(e){var t=new CustomEvent(r,{bubbles:!1,cancelable:!1});e.dispatchEvent(t)}},k=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},w=function(e){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var r;return Object(n.__generator)(this,(function(t){switch(t.label){case 0:return(r=e)?null==r.componentOnReady?[3,2]:[4,r.componentOnReady()]:[3,4];case 1:if(null!=t.sent())return[2];t.label=2;case 2:return[4,Promise.all(Array.from(r.children).map(w))];case 3:t.sent(),t.label=4;case 4:return[2]}}))}))},y=function(e,r){r?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},$=function(e,r,t){void 0!==e&&(e.style.zIndex="back"===t?"99":"101"),void 0!==r&&(r.style.zIndex="100")},E=function(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}},ewvd:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=function(){return function(){}}()},"u+Wz":function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=function(){return function(){}}()},uYVq:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"b",(function(){return a}));var n=function(){return function(e,r){this.x=e,this.y=r}}(),a=function(e,r,t,n,a){var s=o(e.y,r.y,t.y,n.y,a);return i(e.x,r.x,t.x,n.x,s[0])},i=function(e,r,t,n,a){return a*(3*r*Math.pow(a-1,2)+a*(-3*t*a+3*t+n*a))-e*Math.pow(a-1,3)},o=function(e,r,t,n,a){return s((n-=a)-3*(t-=a)+3*(r-=a)-(e-=a),3*t-6*r+3*e,3*r-3*e,e).filter((function(e){return e>=0&&e<=1}))},s=function(e,r,t,n){if(0===e)return function(e,r,t){var n=r*r-4*e*t;return n<0?[]:[(-r+Math.sqrt(n))/(2*e),(-r-Math.sqrt(n))/(2*e)]}(r,t,n);var a=(3*(t/=e)-(r/=e)*r)/3,i=(2*r*r*r-9*r*t+27*(n/=e))/27;if(0===a)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-a),-Math.sqrt(-a)];var o=Math.pow(i/2,2)+Math.pow(a/3,3);if(0===o)return[Math.pow(i/2,.5)-r/3];if(o>0)return[Math.pow(-i/2+Math.sqrt(o),1/3)-Math.pow(i/2+Math.sqrt(o),1/3)-r/3];var s=Math.sqrt(Math.pow(-a/3,3)),u=Math.acos(-i/(2*Math.sqrt(Math.pow(-a/3,3)))),c=2*Math.pow(s,1/3);return[c*Math.cos(u/3)-r/3,c*Math.cos((u+2*Math.PI)/3)-r/3,c*Math.cos((u+4*Math.PI)/3)-r/3]}},"v7+D":function(e,r,t){"use strict";t.d(r,"a",(function(){return a})),t.d(r,"b",(function(){return i}));var n=t("mrSG"),a=function(e,r,t,a,i){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var o;return Object(n.__generator)(this,(function(n){switch(n.label){case 0:if(e)return[2,e.attachViewToDom(r,t,i,a)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return o="string"==typeof t?r.ownerDocument&&r.ownerDocument.createElement(t):t,a&&a.forEach((function(e){return o.classList.add(e)})),i&&Object.assign(o,i),r.appendChild(o),o.componentOnReady?[4,o.componentOnReady()]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,o]}}))}))},i=function(e,r){if(r){if(e)return e.removeViewFromDom(r.parentElement,r);r.remove()}return Promise.resolve()}},zwjO:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n=function(e){try{if("string"!=typeof e||""===e)return e;var r=document.createDocumentFragment(),t=document.createElement("div");r.appendChild(t),t.innerHTML=e,s.forEach((function(e){for(var t=r.querySelectorAll(e),n=t.length-1;n>=0;n--){var o=t[n];o.parentNode?o.parentNode.removeChild(o):r.removeChild(o);for(var s=i(o),u=0;u<s.length;u++)a(s[u])}}));for(var n=i(r),o=0;o<n.length;o++)a(n[o]);var u=document.createElement("div");u.appendChild(r);var c=u.querySelector("div");return null!==c?c.innerHTML:u.innerHTML}catch(d){return console.error(d),""}},a=function(e){if(!e.nodeType||1===e.nodeType){for(var r=e.attributes.length-1;r>=0;r--){var t=e.attributes.item(r),n=t.name;if(o.includes(n.toLowerCase())){var s=t.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(n)}else e.removeAttribute(n)}var u=i(e);for(r=0;r<u.length;r++)a(u[r])}},i=function(e){return null!=e.children?e.children:e.childNodes},o=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);