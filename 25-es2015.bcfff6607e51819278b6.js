(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{TH88:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var e=u("pMnS"),a=u("oBZk"),s=u("ZZ/e"),b=u("mrSG"),o=u("6+K6"),r=u("dcnn"),c=u("IV2E"),h=u("6Z4i");class d{constructor(l,n,u,t,i){this.navCtrl=l,this.utilMensagemService=n,this.googleMapService=u,this.agendaService=t,this.activatedRoute=i,this.MAP_NAME="map-full"}ngOnInit(){this.loadData()}ngOnDestroy(){this.agendaSubscription.unsubscribe()}loadData(){return b.__awaiter(this,void 0,void 0,(function*(){yield this.utilMensagemService.presentLoading("Buscando pela agenda, aguarde..."),this.id=this.activatedRoute.snapshot.params.id,this.id||this.navCtrl.pop(),this.agendaSubscription=this.agendaService.findById(this.id).subscribe(l=>{this.item=l,this.refreshMap(),this.utilMensagemService.dismissLoading()},l=>{this.utilMensagemService.showToastError(h.a[l.code])})}))}refreshMap(){this.googleMapService.loadMapMarker(this.MAP_NAME,this.item.grupo.sigla,this.item.coordenadas)}}var p=u("iInd"),g=t.pb({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,11,"ion-header",[],null,null,null,a.bb,a.q)),t.qb(1,49152,null,0,s.C,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,9,"ion-toolbar",[],null,null,null,a.vb,a.K)),t.qb(3,49152,null,0,s.Db,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.P,a.e)),t.qb(5,49152,null,0,s.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Cb(l,8).onClick(u)&&i),i}),a.N,a.c)),t.qb(7,49152,null,0,s.h,[t.h,t.k,t.x],{text:[0,"text"]},null),t.qb(8,16384,null,0,s.i,[[2,s.jb],s.Jb],null,null),(l()(),t.rb(9,0,null,0,2,"ion-title",[],null,null,null,a.tb,a.I)),t.qb(10,49152,null,0,s.Bb,[t.h,t.k,t.x],null,null),(l()(),t.Kb(11,0,[""," - ",""])),(l()(),t.rb(12,0,null,null,2,"ion-content",[],null,null,null,a.V,a.k)),t.qb(13,49152,null,0,s.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(14,0,null,0,0,"div",[["id","map-full"]],null,null,null,null,null))],(function(l,n){l(n,7,0,"")}),(function(l,n){var u=n.component;l(n,11,0,null==u.item?null:null==u.item.grupo?null:u.item.grupo.sigla,null==u.item?null:u.item.nome)}))}function m(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"app-full",[],null,null,null,v,g)),t.qb(1,245760,null,0,d,[s.Jb,c.a,r.a,o.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=t.nb("app-full",d,m,{},{},[]),A=u("SVse"),M=u("s7LF");class k{}u.d(n,"FullPageModuleNgFactory",(function(){return S}));var S=t.ob(i,[],(function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[e.a,f]],[3,t.j],t.v]),t.Ab(4608,A.l,A.k,[t.s,[2,A.s]]),t.Ab(4608,M.q,M.q,[]),t.Ab(4608,s.b,s.b,[t.x,t.g]),t.Ab(4608,s.Ib,s.Ib,[s.b,t.j,t.p]),t.Ab(4608,s.Lb,s.Lb,[s.b,t.j,t.p]),t.Ab(1073742336,A.b,A.b,[]),t.Ab(1073742336,M.p,M.p,[]),t.Ab(1073742336,M.f,M.f,[]),t.Ab(1073742336,s.Fb,s.Fb,[]),t.Ab(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Ab(1073742336,k,k,[]),t.Ab(1073742336,i,i,[]),t.Ab(1024,p.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);