(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{hfNI:function(l,n,u){"use strict";u.r(n);var i=u("CcnG"),t=function(){return function(){}}(),e=u("pMnS"),a=u("oBZk"),o=u("ZZ/e"),s=u("gIcY"),b=u("Ip0R"),r=u("ZYCi"),c=u("mrSG"),d=u("52oS"),h=u("E2f4"),g=u("ewvd"),m=u("IV2E"),p=u("CFL1"),f=u("vx/u"),k=function(){function l(l,n,u,i){this.storageService=l,this.utilMensagemService=n,this.userService=u,this.utilDataService=i,this.usuario=new g.a}return l.prototype.ngOnInit=function(){this.usuario=this.storageService.getLocalUser(),this.usuario.birthday=this.utilDataService.getData(this.usuario.birthday.seconds)},l.prototype.ngOnDestroy=function(){},l.prototype.showConfirmPassword=function(){return c.__awaiter(this,void 0,void 0,(function(){var l=this;return c.__generator(this,(function(n){return this.utilMensagemService.showConfirm("Alerta","Voc\xea deseja alterar sua senha ?",(function(){return c.__awaiter(l,void 0,void 0,(function(){var l=this;return c.__generator(this,(function(n){switch(n.label){case 0:return[4,this.utilMensagemService.presentLoading("Enviando e-mail para altera\xe7\xe3o de senha, por favor aguarde...")];case 1:return n.sent(),this.userService.recuperarSenha(this.usuario.email).then((function(){l.utilMensagemService.showAlertOk("Sucesso","Foi enviado um e-mail para alterar sua senha.")})).catch((function(n){l.utilMensagemService.showToastError(d.a[n.code])})).finally((function(){l.utilMensagemService.dismissLoading()})),[2]}}))}))})),[2]}))}))},l}(),C=i.rb({encapsulation:0,styles:[[""]],data:{}});function v(l){return i.Ob(0,[(l()(),i.tb(0,0,null,null,5,"ion-item",[],null,null,null,a.hb,a.t)),i.sb(1,49152,null,0,o.I,[i.h,i.k,i.z],null,null),(l()(),i.tb(2,0,null,0,1,"ion-icon",[["name","ribbon"],["slot","start"]],null,null,null,a.cb,a.r)),i.sb(3,49152,null,0,o.D,[i.h,i.k,i.z],{name:[0,"name"]},null),(l()(),i.tb(4,0,null,0,1,"p",[["style","color:#a9a9a9"]],null,null,null,null,null)),(l()(),i.Mb(-1,null,["Qual a\u0155ea tem mais afinidade e deseja colaborar?"]))],(function(l,n){l(n,3,0,"ribbon")}),null)}function E(l){return i.Ob(0,[(l()(),i.tb(0,0,null,null,6,"ion-item",[],null,null,null,a.hb,a.t)),i.sb(1,49152,null,0,o.I,[i.h,i.k,i.z],null,null),(l()(),i.tb(2,0,null,0,1,"ion-icon",[["name","trophy"],["slot","start"],["style","margin: 0px 29px 5px 0px;"]],null,null,null,a.cb,a.r)),i.sb(3,49152,null,0,o.D,[i.h,i.k,i.z],{name:[0,"name"]},null),(l()(),i.tb(4,0,null,0,2,"ion-label",[["style","color:#a9a9a9"]],null,null,null,a.ib,a.x)),i.sb(5,49152,null,0,o.O,[i.h,i.k,i.z],null,null),(l()(),i.Mb(6,0,["",""]))],(function(l,n){l(n,3,0,"trophy")}),(function(l,n){l(n,6,0,n.context.$implicit.descricao)}))}function z(l){return i.Ob(0,[(l()(),i.tb(0,0,null,null,11,"ion-header",[],null,null,null,a.bb,a.q)),i.sb(1,49152,null,0,o.C,[i.h,i.k,i.z],null,null),(l()(),i.tb(2,0,null,0,9,"ion-toolbar",[],null,null,null,a.vb,a.K)),i.sb(3,49152,null,0,o.Db,[i.h,i.k,i.z],null,null),(l()(),i.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.P,a.e)),i.sb(5,49152,null,0,o.m,[i.h,i.k,i.z],null,null),(l()(),i.tb(6,0,null,0,2,"ion-back-button",[["defaultHref","/home"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==i.Eb(l,8).onClick(u)&&t),t}),a.N,a.c)),i.sb(7,49152,null,0,o.h,[i.h,i.k,i.z],{defaultHref:[0,"defaultHref"]},null),i.sb(8,16384,null,0,o.i,[[2,o.jb],o.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),i.tb(9,0,null,0,2,"ion-title",[],null,null,null,a.tb,a.I)),i.sb(10,49152,null,0,o.Bb,[i.h,i.k,i.z],null,null),(l()(),i.Mb(-1,0,["Perfil"])),(l()(),i.tb(12,0,null,null,100,"ion-content",[["class","background-app-image"]],null,null,null,a.V,a.k)),i.sb(13,49152,null,0,o.v,[i.h,i.k,i.z],null,null),(l()(),i.tb(14,0,null,0,98,"ion-card",[["class","card-panel-top"]],null,null,null,a.S,a.f)),i.sb(15,49152,null,0,o.n,[i.h,i.k,i.z],null,null),(l()(),i.tb(16,0,null,0,8,"ion-card-header",[["class","card-panel-header"]],null,null,null,a.R,a.h)),i.sb(17,49152,null,0,o.p,[i.h,i.k,i.z],null,null),(l()(),i.tb(18,0,null,0,6,"ion-item",[],null,null,null,a.hb,a.t)),i.sb(19,49152,null,0,o.I,[i.h,i.k,i.z],null,null),(l()(),i.tb(20,0,null,0,1,"ion-icon",[["name","contact"],["slot","start"]],null,null,null,a.cb,a.r)),i.sb(21,49152,null,0,o.D,[i.h,i.k,i.z],{name:[0,"name"]},null),(l()(),i.tb(22,0,null,0,2,"ion-label",[],null,null,null,a.ib,a.x)),i.sb(23,49152,null,0,o.O,[i.h,i.k,i.z],null,null),(l()(),i.Mb(24,0,["",""])),(l()(),i.tb(25,0,null,0,87,"ion-card-content",[["class","ion-margin-top"]],null,null,null,a.Q,a.g)),i.sb(26,49152,null,0,o.o,[i.h,i.k,i.z],null,null),(l()(),i.tb(27,0,null,0,2,"ion-avatar",[["class","center"],["style","height: 124px; width: 124px;"]],null,null,null,a.M,a.b)),i.sb(28,49152,null,0,o.g,[i.h,i.k,i.z],null,null),(l()(),i.tb(29,0,null,0,0,"img",[["src","assets/imgs/user.svg"]],null,null,null,null,null)),(l()(),i.tb(30,0,null,0,13,"ion-item",[],null,null,null,a.hb,a.t)),i.sb(31,49152,null,0,o.I,[i.h,i.k,i.z],null,null),(l()(),i.tb(32,0,null,0,1,"ion-icon",[["name","call"],["slot","start"]],null,null,null,a.cb,a.r)),i.sb(33,49152,null,0,o.D,[i.h,i.k,i.z],{name:[0,"name"]},null),(l()(),i.tb(34,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.ib,a.x)),i.sb(35,49152,null,0,o.O,[i.h,i.k,i.z],{position:[0,"position"]},null),(l()(),i.Mb(-1,0,["Telefone:"])),(l()(),i.tb(37,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==i.Eb(l,38)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Eb(l,38)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(e.usuario.phoneNumber=u)&&t),t}),a.db,a.s)),i.sb(38,16384,null,0,o.Ob,[i.k],null,null),i.Jb(1024,null,s.i,(function(l){return[l]}),[o.Ob]),i.sb(40,671744,null,0,s.m,[[8,null],[8,null],[8,null],[6,s.i]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),i.Jb(2048,null,s.j,null,[s.m]),i.sb(42,16384,null,0,s.k,[[4,s.j]],null,null),i.sb(43,49152,null,0,o.H,[i.h,i.k,i.z],{disabled:[0,"disabled"]},null),(l()(),i.tb(44,0,null,0,13,"ion-item",[],null,null,null,a.hb,a.t)),i.sb(45,49152,null,0,o.I,[i.h,i.k,i.z],null,null),(l()(),i.tb(46,0,null,0,1,"ion-icon",[["name","map"],["slot","start"]],null,null,null,a.cb,a.r)),i.sb(47,49152,null,0,o.D,[i.h,i.k,i.z],{name:[0,"name"]},null),(l()(),i.tb(48,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.ib,a.x)),i.sb(49,49152,null,0,o.O,[i.h,i.k,i.z],{position:[0,"position"]},null),(l()(),i.Mb(-1,0,["Endere\xe7o:"])),(l()(),i.tb(51,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==i.Eb(l,52)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Eb(l,52)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(e.usuario.address=u)&&t),t}),a.db,a.s)),i.sb(52,16384,null,0,o.Ob,[i.k],null,null),i.Jb(1024,null,s.i,(function(l){return[l]}),[o.Ob]),i.sb(54,671744,null,0,s.m,[[8,null],[8,null],[8,null],[6,s.i]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),i.Jb(2048,null,s.j,null,[s.m]),i.sb(56,16384,null,0,s.k,[[4,s.j]],null,null),i.sb(57,49152,null,0,o.H,[i.h,i.k,i.z],{disabled:[0,"disabled"]},null),(l()(),i.tb(58,0,null,0,13,"ion-item",[],null,null,null,a.hb,a.t)),i.sb(59,49152,null,0,o.I,[i.h,i.k,i.z],null,null),(l()(),i.tb(60,0,null,0,1,"ion-icon",[["name","calendar"],["slot","start"]],null,null,null,a.cb,a.r)),i.sb(61,49152,null,0,o.D,[i.h,i.k,i.z],{name:[0,"name"]},null),(l()(),i.tb(62,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.ib,a.x)),i.sb(63,49152,null,0,o.O,[i.h,i.k,i.z],{position:[0,"position"]},null),(l()(),i.Mb(-1,0,["Data de Nascimento:"])),(l()(),i.tb(65,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==i.Eb(l,66)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Eb(l,66)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(e.usuario.birthday=u)&&t),t}),a.db,a.s)),i.sb(66,16384,null,0,o.Ob,[i.k],null,null),i.Jb(1024,null,s.i,(function(l){return[l]}),[o.Ob]),i.sb(68,671744,null,0,s.m,[[8,null],[8,null],[8,null],[6,s.i]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),i.Jb(2048,null,s.j,null,[s.m]),i.sb(70,16384,null,0,s.k,[[4,s.j]],null,null),i.sb(71,49152,null,0,o.H,[i.h,i.k,i.z],{disabled:[0,"disabled"]},null),(l()(),i.tb(72,0,null,0,9,"ion-item",[],null,null,null,a.hb,a.t)),i.sb(73,49152,null,0,o.I,[i.h,i.k,i.z],null,null),(l()(),i.tb(74,0,null,0,1,"ion-icon",[["name","trophy"],["slot","start"],["style","margin: 0px 29px 5px 0px;"]],null,null,null,a.cb,a.r)),i.sb(75,49152,null,0,o.D,[i.h,i.k,i.z],{name:[0,"name"]},null),(l()(),i.tb(76,0,null,0,2,"ion-label",[["style","color:#a9a9a9"]],null,null,null,a.ib,a.x)),i.sb(77,49152,null,0,o.O,[i.h,i.k,i.z],null,null),(l()(),i.Mb(-1,0,["\xc9 batizado?"])),(l()(),i.tb(79,0,null,0,2,"ion-label",[["style","color:#a9a9a9"]],null,null,null,a.ib,a.x)),i.sb(80,49152,null,0,o.O,[i.h,i.k,i.z],null,null),(l()(),i.Mb(81,0,["",""])),(l()(),i.tb(82,0,null,0,13,"ion-item",[],null,null,null,a.hb,a.t)),i.sb(83,49152,null,0,o.I,[i.h,i.k,i.z],null,null),(l()(),i.tb(84,0,null,0,1,"ion-icon",[["name","mail"],["slot","start"]],null,null,null,a.cb,a.r)),i.sb(85,49152,null,0,o.D,[i.h,i.k,i.z],{name:[0,"name"]},null),(l()(),i.tb(86,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.ib,a.x)),i.sb(87,49152,null,0,o.O,[i.h,i.k,i.z],{position:[0,"position"]},null),(l()(),i.Mb(-1,0,["E-mail:"])),(l()(),i.tb(89,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==i.Eb(l,90)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Eb(l,90)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(e.usuario.email=u)&&t),t}),a.db,a.s)),i.sb(90,16384,null,0,o.Ob,[i.k],null,null),i.Jb(1024,null,s.i,(function(l){return[l]}),[o.Ob]),i.sb(92,671744,null,0,s.m,[[8,null],[8,null],[8,null],[6,s.i]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),i.Jb(2048,null,s.j,null,[s.m]),i.sb(94,16384,null,0,s.k,[[4,s.j]],null,null),i.sb(95,49152,null,0,o.H,[i.h,i.k,i.z],{disabled:[0,"disabled"]},null),(l()(),i.ib(16777216,null,0,1,null,v)),i.sb(97,16384,null,0,b.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.tb(98,0,null,0,3,"ion-list",[],null,null,null,a.jb,a.y)),i.sb(99,49152,null,0,o.P,[i.h,i.k,i.z],null,null),(l()(),i.ib(16777216,null,0,1,null,E)),i.sb(101,278528,null,0,b.i,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(l()(),i.tb(102,0,null,0,10,"ion-item",[],null,null,null,a.hb,a.t)),i.sb(103,49152,null,0,o.I,[i.h,i.k,i.z],null,null),(l()(),i.tb(104,0,null,0,2,"ion-button",[["color","secondary"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.showConfirmPassword()&&i),i}),a.O,a.d)),i.sb(105,49152,null,0,o.l,[i.h,i.k,i.z],{color:[0,"color"],size:[1,"size"]},null),(l()(),i.Mb(-1,0,["Trocar senha"])),(l()(),i.tb(107,0,null,0,5,"ion-button",[["color","warning"],["routerDirection","forward"],["size","small"],["slot","end"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==i.Eb(l,109).onClick()&&t),"click"===n&&(t=!1!==i.Eb(l,111).onClick(u)&&t),t}),a.O,a.d)),i.sb(108,49152,null,0,o.l,[i.h,i.k,i.z],{color:[0,"color"],routerDirection:[1,"routerDirection"],size:[2,"size"]},null),i.sb(109,16384,null,0,r.n,[r.m,r.a,[8,null],i.D,i.k],{routerLink:[0,"routerLink"]},null),i.Fb(110,1),i.sb(111,737280,null,0,o.Mb,[b.h,o.Jb,i.k,r.m,[2,r.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),i.Mb(-1,0,["Alterar"]))],(function(l,n){var u=n.component;l(n,7,0,"/home"),l(n,8,0,"/home"),l(n,21,0,"contact"),l(n,33,0,"call"),l(n,35,0,"floating"),l(n,40,0,!0,u.usuario.phoneNumber),l(n,43,0,!0),l(n,47,0,"map"),l(n,49,0,"floating"),l(n,54,0,!0,u.usuario.address),l(n,57,0,!0),l(n,61,0,"calendar"),l(n,63,0,"floating"),l(n,68,0,!0,u.usuario.birthday),l(n,71,0,!0),l(n,75,0,"trophy"),l(n,85,0,"mail"),l(n,87,0,"floating"),l(n,92,0,!0,u.usuario.email),l(n,95,0,!0),l(n,97,0,u.usuario.affinity),l(n,101,0,u.usuario.affinity),l(n,105,0,"secondary","small"),l(n,108,0,"warning","forward","small");var i=l(n,110,0,"/perfil-edit");l(n,109,0,i),l(n,111,0,"forward")}),(function(l,n){var u=n.component;l(n,24,0,u.usuario.displayName),l(n,37,0,i.Eb(n,42).ngClassUntouched,i.Eb(n,42).ngClassTouched,i.Eb(n,42).ngClassPristine,i.Eb(n,42).ngClassDirty,i.Eb(n,42).ngClassValid,i.Eb(n,42).ngClassInvalid,i.Eb(n,42).ngClassPending),l(n,51,0,i.Eb(n,56).ngClassUntouched,i.Eb(n,56).ngClassTouched,i.Eb(n,56).ngClassPristine,i.Eb(n,56).ngClassDirty,i.Eb(n,56).ngClassValid,i.Eb(n,56).ngClassInvalid,i.Eb(n,56).ngClassPending),l(n,65,0,i.Eb(n,70).ngClassUntouched,i.Eb(n,70).ngClassTouched,i.Eb(n,70).ngClassPristine,i.Eb(n,70).ngClassDirty,i.Eb(n,70).ngClassValid,i.Eb(n,70).ngClassInvalid,i.Eb(n,70).ngClassPending),l(n,81,0,u.usuario.baptism?"Sim":"N\xe3o"),l(n,89,0,i.Eb(n,94).ngClassUntouched,i.Eb(n,94).ngClassTouched,i.Eb(n,94).ngClassPristine,i.Eb(n,94).ngClassDirty,i.Eb(n,94).ngClassValid,i.Eb(n,94).ngClassInvalid,i.Eb(n,94).ngClassPending)}))}function y(l){return i.Ob(0,[(l()(),i.tb(0,0,null,null,1,"app-perfil",[],null,null,null,z,C)),i.sb(1,245760,null,0,k,[h.a,m.a,p.a,f.a],null,null)],(function(l,n){l(n,1,0)}),null)}var M=i.pb("app-perfil",k,y,{},{},[]),D=function(){return function(){}}();u.d(n,"PerfilPageModuleNgFactory",(function(){return O}));var O=i.qb(t,[],(function(l){return i.Bb([i.Cb(512,i.j,i.bb,[[8,[e.a,M]],[3,i.j],i.x]),i.Cb(4608,b.l,b.k,[i.u,[2,b.r]]),i.Cb(4608,s.q,s.q,[]),i.Cb(4608,o.b,o.b,[i.z,i.g]),i.Cb(4608,o.Ib,o.Ib,[o.b,i.j,i.q]),i.Cb(4608,o.Lb,o.Lb,[o.b,i.j,i.q]),i.Cb(1073742336,b.b,b.b,[]),i.Cb(1073742336,s.p,s.p,[]),i.Cb(1073742336,s.f,s.f,[]),i.Cb(1073742336,o.Fb,o.Fb,[]),i.Cb(1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),i.Cb(1073742336,D,D,[]),i.Cb(1073742336,t,t,[]),i.Cb(1024,r.k,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);