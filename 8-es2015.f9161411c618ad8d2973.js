(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+nQu":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class a{}var i=u("pMnS"),t=u("SVse"),r=u("oBZk"),o=u("ZZ/e"),s=u("s7LF"),b=u("mrSG"),d=u("u+Wz"),g=u("6+K6"),h=u("dcnn"),c=u("CPFe"),m=u("6Z4i"),p=u("E2f4"),C=u("iyJZ"),v=u("IV2E");class f{constructor(l,n,u,e,a,i,t,r){this.utilMensagemService=l,this.activatedRoute=n,this.presencaService=u,this.agendaService=e,this.formBuilder=a,this.storageService=i,this.googleMapService=t,this.router=r,this.title="Detalhe da presen\xe7a",this.buttonColor="primary",this.item=new c.a,this.agenda=new d.a,this.carona=!1,this.MAP_NAME="map-presenca-form"}ngOnInit(){this.item=new c.a,this.loadData(),this.createFormGroup()}ngOnDestroy(){this.agendaSubscription&&this.agendaSubscription.unsubscribe(),this.formSubscription&&this.formSubscription.unsubscribe(),this.utilMensagemService.dismissLoading()}createFormGroup(){this.formGroup=this.formBuilder.group({id:[this.id],nome:[this.id?this.item.nome:this.user?this.user.displayName:null,[s.o.required,s.o.minLength(2),s.o.maxLength(255)]],endereco:[this.item.endereco,[s.o.maxLength(255)]],visita:[this.item.visita],carona:[this.item.carona],dt_criacao:[new Date],cod_agenda:[this.idAgenda],agenda:[this.agenda],coordenadas:[this.item.coordenadas]})}loadData(){return b.__awaiter(this,void 0,void 0,(function*(){if(yield this.utilMensagemService.presentLoading("Carregando a p\xe1gina, aguarde..."),this.activatedRoute.params.subscribe(l=>{this.id=l.id,this.idAgenda=l.idAgenda}),!this.id)return this.user=this.storageService.getLocalUser(),void this.loadDataAgenda();this.findById(this.id)}))}findById(l){this.formSubscription=this.presencaService.findById(l).subscribe(l=>{this.item=l,this.item.carona&&this.refreshMap(),this.loadDataAgenda()},l=>{this.utilMensagemService.showToastError(m.a[l.code]),this.loadDataAgenda()})}loadDataAgenda(){this.idAgenda||this.router.navigate(["/presenca",this.idAgenda]),this.agendaSubscription=this.agendaService.findById(this.idAgenda).subscribe(l=>{this.agenda=l,this.utilMensagemService.dismissLoading(),this.createFormGroup()},l=>{this.utilMensagemService.showToastError(m.a[l.code]),this.utilMensagemService.dismissLoading(),this.createFormGroup()})}updateCarona(){this.carona=this.formGroup.value.carona}refreshMap(){this.googleMapService.loadMapMarker(this.MAP_NAME,this.item.nome,this.item.coordenadas,!1,null,"cooperative")}enviaGoogleMap(){return this.item&&this.item.coordenadas?`geo:?q=${this.item.coordenadas.latitude},${this.item.coordenadas.longitude}`:""}}var x=u("iInd"),k=e.pb({encapsulation:0,styles:[[""]],data:{}});function q(l){return e.Mb(0,[e.Eb(0,t.d,[e.s]),(l()(),e.rb(1,0,null,null,11,"ion-header",[],null,null,null,r.bb,r.q)),e.qb(2,49152,null,0,o.C,[e.h,e.k,e.x],null,null),(l()(),e.rb(3,0,null,0,9,"ion-toolbar",[],null,null,null,r.vb,r.K)),e.qb(4,49152,null,0,o.Db,[e.h,e.k,e.x],null,null),(l()(),e.rb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.P,r.e)),e.qb(6,49152,null,0,o.m,[e.h,e.k,e.x],null,null),(l()(),e.rb(7,0,null,0,2,"ion-back-button",[["defaultHref","/grupo"],["text",""]],null,[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Cb(l,9).onClick(u)&&a),a}),r.N,r.c)),e.qb(8,49152,null,0,o.h,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.qb(9,16384,null,0,o.i,[[2,o.jb],o.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.rb(10,0,null,0,2,"ion-title",[],null,null,null,r.tb,r.I)),e.qb(11,49152,null,0,o.Bb,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Marcar de Presen\xe7a"])),(l()(),e.rb(13,0,null,null,92,"ion-content",[["class","background-app-image"]],null,null,null,r.V,r.k)),e.qb(14,49152,null,0,o.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(15,0,null,0,90,"ion-card",[["class","card-panel-top"]],null,null,null,r.S,r.f)),e.qb(16,49152,null,0,o.n,[e.h,e.k,e.x],null,null),(l()(),e.rb(17,0,null,0,15,"ion-card-header",[["class","card-panel-header"]],null,null,null,r.R,r.h)),e.qb(18,49152,null,0,o.p,[e.h,e.k,e.x],null,null),(l()(),e.rb(19,0,null,0,13,"ion-grid",[],null,null,null,r.ab,r.p)),e.qb(20,49152,null,0,o.B,[e.h,e.k,e.x],null,null),(l()(),e.rb(21,0,null,0,11,"ion-row",[["class","text-white"]],null,null,null,r.ob,r.D)),e.qb(22,49152,null,0,o.kb,[e.h,e.k,e.x],null,null),(l()(),e.rb(23,0,null,0,3,"ion-col",[["class","border-right font-24"],["size","3"]],null,null,null,r.U,r.j)),e.qb(24,49152,null,0,o.u,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.Kb(25,0,[" "," "])),e.Gb(26,2),(l()(),e.rb(27,0,null,0,5,"ion-col",[],null,null,null,r.U,r.j)),e.qb(28,49152,null,0,o.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(29,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(30,null,["",""])),(l()(),e.rb(31,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(32,null,["",""])),(l()(),e.rb(33,0,null,0,72,"ion-card-content",[["class","ion-margin-top"]],null,null,null,r.Q,r.g)),e.qb(34,49152,null,0,o.o,[e.h,e.k,e.x],null,null),(l()(),e.rb(35,0,null,0,70,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var a=!0;return"submit"===n&&(a=!1!==e.Cb(l,37).onSubmit(u)&&a),"reset"===n&&(a=!1!==e.Cb(l,37).onReset()&&a),a}),null,null)),e.qb(36,16384,null,0,s.s,[],null,null),e.qb(37,540672,null,0,s.e,[[8,null],[8,null]],{form:[0,"form"]},null),e.Hb(2048,null,s.a,null,[s.e]),e.qb(39,16384,null,0,s.l,[[4,s.a]],null,null),(l()(),e.rb(40,0,null,null,15,"ion-item",[],null,null,null,r.hb,r.t)),e.qb(41,49152,null,0,o.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(42,0,null,0,1,"ion-icon",[["name","ios-person"],["slot","start"]],null,null,null,r.cb,r.r)),e.qb(43,49152,null,0,o.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(44,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.ib,r.x)),e.qb(45,49152,null,0,o.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["Nome:*"])),(l()(),e.rb(47,0,null,0,8,"ion-input",[["formControlName","nome"],["maxlength","255"],["name","nome"],["readonly",""]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0;return"ionBlur"===n&&(a=!1!==e.Cb(l,50)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,50)._handleInputEvent(u.target)&&a),a}),r.db,r.s)),e.qb(48,540672,null,0,s.g,[],{maxlength:[0,"maxlength"]},null),e.Hb(1024,null,s.h,(function(l){return[l]}),[s.g]),e.qb(50,16384,null,0,o.Ob,[e.k],null,null),e.Hb(1024,null,s.i,(function(l){return[l]}),[o.Ob]),e.qb(52,671744,null,0,s.d,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"]},null),e.Hb(2048,null,s.j,null,[s.d]),e.qb(54,16384,null,0,s.k,[[4,s.j]],null,null),e.qb(55,49152,null,0,o.H,[e.h,e.k,e.x],{maxlength:[0,"maxlength"],name:[1,"name"],readonly:[2,"readonly"]},null),(l()(),e.rb(56,0,null,null,13,"ion-item",[],null,null,null,r.hb,r.t)),e.qb(57,49152,null,0,o.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(58,0,null,0,1,"ion-icon",[["name","heart"],["slot","start"]],null,null,null,r.cb,r.r)),e.qb(59,49152,null,0,o.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(60,0,null,0,2,"ion-label",[],null,null,null,r.ib,r.x)),e.qb(61,49152,null,0,o.O,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Visitante?"])),(l()(),e.rb(63,0,null,0,6,"ion-checkbox",[["color","primary"],["formControlName","visita"],["name","visita"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0;return"ionBlur"===n&&(a=!1!==e.Cb(l,64)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,64)._handleIonChange(u.target)&&a),a}),r.T,r.i)),e.qb(64,16384,null,0,o.c,[e.k],null,null),e.Hb(1024,null,s.i,(function(l){return[l]}),[o.c]),e.qb(66,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"],isDisabled:[1,"isDisabled"]},null),e.Hb(2048,null,s.j,null,[s.d]),e.qb(68,16384,null,0,s.k,[[4,s.j]],null,null),e.qb(69,49152,null,0,o.s,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],name:[2,"name"]},null),(l()(),e.rb(70,0,null,null,13,"ion-item",[],null,null,null,r.hb,r.t)),e.qb(71,49152,null,0,o.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(72,0,null,0,1,"ion-icon",[["name","car"],["slot","start"]],null,null,null,r.cb,r.r)),e.qb(73,49152,null,0,o.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(74,0,null,0,2,"ion-label",[],null,null,null,r.ib,r.x)),e.qb(75,49152,null,0,o.O,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Carona?"])),(l()(),e.rb(77,0,null,0,6,"ion-checkbox",[["color","primary"],["formControlName","carona"],["name","carona"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var a=!0,i=l.component;return"ionBlur"===n&&(a=!1!==e.Cb(l,78)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,78)._handleIonChange(u.target)&&a),"ionChange"===n&&(a=!1!==i.updateCarona()&&a),a}),r.T,r.i)),e.qb(78,16384,null,0,o.c,[e.k],null,null),e.Hb(1024,null,s.i,(function(l){return[l]}),[o.c]),e.qb(80,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"],isDisabled:[1,"isDisabled"]},null),e.Hb(2048,null,s.j,null,[s.d]),e.qb(82,16384,null,0,s.k,[[4,s.j]],null,null),e.qb(83,49152,null,0,o.s,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],name:[2,"name"]},null),(l()(),e.rb(84,0,null,null,21,"div",[],[[8,"hidden",0]],null,null,null,null)),(l()(),e.rb(85,0,null,null,13,"ion-item",[],null,null,null,r.hb,r.t)),e.qb(86,49152,null,0,o.I,[e.h,e.k,e.x],null,null),(l()(),e.rb(87,0,null,0,1,"ion-icon",[["name","map"],["slot","start"]],null,null,null,r.cb,r.r)),e.qb(88,49152,null,0,o.D,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(89,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.ib,r.x)),e.qb(90,49152,null,0,o.O,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Kb(-1,0,["Informe o endere\xe7o:*"])),(l()(),e.rb(92,0,null,0,6,"ion-input",[["formControlName","endereco"],["id","places"],["readonly",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var a=!0;return"ionBlur"===n&&(a=!1!==e.Cb(l,93)._handleBlurEvent(u.target)&&a),"ionChange"===n&&(a=!1!==e.Cb(l,93)._handleInputEvent(u.target)&&a),a}),r.db,r.s)),e.qb(93,16384,null,0,o.Ob,[e.k],null,null),e.Hb(1024,null,s.i,(function(l){return[l]}),[o.Ob]),e.qb(95,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"]},null),e.Hb(2048,null,s.j,null,[s.d]),e.qb(97,16384,null,0,s.k,[[4,s.j]],null,null),e.qb(98,49152,null,0,o.H,[e.h,e.k,e.x],{readonly:[0,"readonly"],type:[1,"type"]},null),(l()(),e.rb(99,0,[["map",1]],null,0,"div",[["id","map-presenca-form"],["style","height:400px;"]],null,null,null,null,null)),(l()(),e.rb(100,0,null,null,5,"ion-fab",[["class","margin-top-fab"],["horizontal","end"],["slot","fixed"],["vertical","center"]],null,null,null,r.Y,r.l)),e.qb(101,49152,null,0,o.x,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.rb(102,0,null,0,3,"ion-fab-button",[["style","margin-top: -70px;"],["target","_system"]],null,null,null,r.W,r.m)),e.qb(103,49152,null,0,o.y,[e.h,e.k,e.x],{href:[0,"href"],target:[1,"target"]},null),(l()(),e.rb(104,0,null,0,1,"ion-icon",[["name","navigate"]],null,null,null,r.cb,r.r)),e.qb(105,49152,null,0,o.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,8,0,"/grupo",""),l(n,9,0,"/grupo"),l(n,24,0,"3"),l(n,37,0,u.formGroup),l(n,43,0,"ios-person"),l(n,45,0,"floating"),l(n,48,0,"255"),l(n,52,0,"nome"),l(n,55,0,"255","nome",""),l(n,59,0,"heart"),l(n,66,0,"visita",!0),l(n,69,0,"primary",!0,"visita"),l(n,73,0,"car"),l(n,80,0,"carona",!0),l(n,83,0,"primary",!0,"carona"),l(n,88,0,"map"),l(n,90,0,"floating"),l(n,95,0,"endereco"),l(n,98,0,"","text"),l(n,101,0,"end","center"),l(n,103,0,u.enviaGoogleMap(),"_system"),l(n,105,0,"navigate")}),(function(l,n){var u=n.component,a=e.Lb(n,25,0,l(n,26,0,e.Cb(n,0),1e3*(null==u.agenda?null:null==u.agenda.data?null:u.agenda.data.seconds),"dd/MM"));l(n,25,0,a),l(n,30,0,null==u.agenda?null:u.agenda.endereco),l(n,32,0,null==u.agenda?null:null==u.agenda.grupo?null:u.agenda.grupo.lider),l(n,35,0,e.Cb(n,39).ngClassUntouched,e.Cb(n,39).ngClassTouched,e.Cb(n,39).ngClassPristine,e.Cb(n,39).ngClassDirty,e.Cb(n,39).ngClassValid,e.Cb(n,39).ngClassInvalid,e.Cb(n,39).ngClassPending),l(n,47,0,e.Cb(n,48).maxlength?e.Cb(n,48).maxlength:null,e.Cb(n,54).ngClassUntouched,e.Cb(n,54).ngClassTouched,e.Cb(n,54).ngClassPristine,e.Cb(n,54).ngClassDirty,e.Cb(n,54).ngClassValid,e.Cb(n,54).ngClassInvalid,e.Cb(n,54).ngClassPending),l(n,63,0,e.Cb(n,68).ngClassUntouched,e.Cb(n,68).ngClassTouched,e.Cb(n,68).ngClassPristine,e.Cb(n,68).ngClassDirty,e.Cb(n,68).ngClassValid,e.Cb(n,68).ngClassInvalid,e.Cb(n,68).ngClassPending),l(n,77,0,e.Cb(n,82).ngClassUntouched,e.Cb(n,82).ngClassTouched,e.Cb(n,82).ngClassPristine,e.Cb(n,82).ngClassDirty,e.Cb(n,82).ngClassValid,e.Cb(n,82).ngClassInvalid,e.Cb(n,82).ngClassPending),l(n,84,0,!u.carona),l(n,92,0,e.Cb(n,97).ngClassUntouched,e.Cb(n,97).ngClassTouched,e.Cb(n,97).ngClassPristine,e.Cb(n,97).ngClassDirty,e.Cb(n,97).ngClassValid,e.Cb(n,97).ngClassInvalid,e.Cb(n,97).ngClassPending)}))}function y(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"app-presenca-detalhe",[],null,null,null,q,k)),e.qb(1,245760,null,0,f,[v.a,x.a,C.a,g.a,s.b,p.a,h.a,x.m],null,null)],(function(l,n){l(n,1,0)}),null)}var A=e.nb("app-presenca-detalhe",f,y,{},{},[]);class D{}u.d(n,"PresencaDetalhePageModuleNgFactory",(function(){return M}));var M=e.ob(a,[],(function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[i.a,A]],[3,e.j],e.v]),e.Ab(4608,t.l,t.k,[e.s,[2,t.s]]),e.Ab(4608,s.q,s.q,[]),e.Ab(4608,o.b,o.b,[e.x,e.g]),e.Ab(4608,o.Ib,o.Ib,[o.b,e.j,e.p]),e.Ab(4608,o.Lb,o.Lb,[o.b,e.j,e.p]),e.Ab(4608,s.b,s.b,[]),e.Ab(1073742336,t.b,t.b,[]),e.Ab(1073742336,s.p,s.p,[]),e.Ab(1073742336,s.f,s.f,[]),e.Ab(1073742336,o.Fb,o.Fb,[]),e.Ab(1073742336,x.o,x.o,[[2,x.t],[2,x.m]]),e.Ab(1073742336,D,D,[]),e.Ab(1073742336,s.n,s.n,[]),e.Ab(1073742336,a,a,[]),e.Ab(1024,x.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);