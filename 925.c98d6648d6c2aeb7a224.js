(self.webpackChunkbarbershop=self.webpackChunkbarbershop||[]).push([[925],{2925:(e,t,i)=>{"use strict";i.r(t),i.d(t,{HomeModule:()=>H});var r=i(3679),s=i(4466),n=i(4762),o=i(9761),a=i(8002),c=i(7716),l=i(7409),u=i(8446),m=i(3831),p=i(1954),d=i(7001),h=i(7779),g=i(3738),Z=i(5939),f=i(8583),v=i(1095),b=i(4885),T=i(8295),q=i(7441),A=i(9983),_=i(1554),x=i(2458),w=i(7539),k=i(1552);let S=(()=>{class e{constructor(){this.newItemEvent=new c.vpe,this.myFormGroup=new r.cw({formField:new r.NI}),this._value=0,this._step=1,this._min=0,this._max=1/0,this._wrap=!1,this.color="default"}set inputValue(e){this._value=this.parseNumber(e),this.newItemEvent.emit(this._value)}set step(e){this._step=this.parseNumber(e)}set min(e){this._min=this.parseNumber(e)}set max(e){this._max=this.parseNumber(e)}set wrap(e){this._wrap=this.parseBoolean(e)}parseNumber(e){return+e}parseBoolean(e){return!!e}setColor(e){this.color=e}getColor(){return this.color}incrementValue(e=1){let t=this._value+e;this._wrap&&(t=this.wrappedValue(t)),this._value=t,this.newItemEvent.emit(this._value)}wrappedValue(e){return e>this._max?this._min+e-this._max:e<this._min?this._max===1/0?0:this._max+e:e}shouldDisableDecrement(e){return!this._wrap&&e<=this._min}shouldDisableIncrement(e){return!this._wrap&&e>=this._max}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["increment-input"]],inputs:{inputValue:["value","inputValue"],step:"step",min:"min",max:"max",wrap:"wrap"},outputs:{newItemEvent:"newItemEvent"},decls:8,vars:5,consts:[["mat-button","","mat-icon-button","","matPrefix","","aria-label","Remove",3,"color","disabled","click"],["matInput","","type","number",3,"ngModel","ngModelChange","focus","blur"],["mat-button","","mat-icon-button","","matSuffix","","aria-label","Add",3,"color","disabled","click"]],template:function(e,t){1&e&&(c.TgZ(0,"mat-form-field"),c.TgZ(1,"button",0),c.NdJ("click",function(){return t.incrementValue(-t._step)}),c.TgZ(2,"mat-icon"),c._uU(3,"remove"),c.qZA(),c.qZA(),c.TgZ(4,"input",1),c.NdJ("ngModelChange",function(e){return t._value=e})("focus",function(){return t.setColor("primary")})("blur",function(){return t.setColor("default")}),c.qZA(),c.TgZ(5,"button",2),c.NdJ("click",function(){return t.incrementValue(t._step)}),c.TgZ(6,"mat-icon"),c._uU(7,"add"),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(1),c.Q6J("color",t.getColor())("disabled",t.shouldDisableDecrement(t._value)),c.xp6(3),c.Q6J("ngModel",t._value),c.xp6(1),c.Q6J("color",t.getColor())("disabled",t.shouldDisableIncrement(t._value)))},directives:[T.KE,v.lW,T.qo,k.Hw,A.Nt,r.wV,r.Fj,r.JJ,r.On,T.R9],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%;text-align:center;-moz-appearance:textfield}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{display:none}"]}),e})();function J(e,t){1&e&&(c.TgZ(0,"div"),c._UZ(1,"mat-spinner"),c.qZA())}function I(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"mat-option",20),c.NdJ("click",function(){const t=c.CHM(e).$implicit;return c.oxw(3).selectClient(t)}),c._uU(1),c.qZA()}if(2&e){const e=t.$implicit;c.Q6J("value",e.name),c.xp6(1),c.AsE(" ",e.name," [",e.id,"] ")}}function U(e,t){if(1&e&&(c.TgZ(0,"mat-form-field",15),c.TgZ(1,"mat-label"),c._uU(2,"Name"),c.qZA(),c._UZ(3,"input",16),c.TgZ(4,"mat-autocomplete",17,18),c.YNc(6,I,2,3,"mat-option",19),c.ALo(7,"async"),c.qZA(),c.qZA()),2&e){const e=c.MAs(5),t=c.oxw(2);c.xp6(3),c.Q6J("matAutocomplete",e),c.xp6(3),c.Q6J("ngForOf",c.lcZ(7,2,t.filteredOptions))}}function N(e,t){if(1&e&&(c.TgZ(0,"div"),c.TgZ(1,"div"),c.TgZ(2,"strong"),c._uU(3,"Visitas"),c.qZA(),c.TgZ(4,"p"),c._uU(5),c.qZA(),c.qZA(),c.TgZ(6,"div"),c.TgZ(7,"strong"),c._uU(8,"Puntos"),c.qZA(),c.TgZ(9,"p"),c._uU(10),c.qZA(),c.qZA(),c.TgZ(11,"div"),c.TgZ(12,"strong"),c._uU(13,"Gastado"),c.qZA(),c.TgZ(14,"p"),c._uU(15),c.qZA(),c.qZA(),c.qZA()),2&e){const e=c.oxw(2);c.xp6(5),c.Oqu(e.user.visits),c.xp6(5),c.Oqu(e.user.points),c.xp6(5),c.hij("$",e.user.spent.toFixed(2),"")}}function C(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div"),c.TgZ(1,"mat-checkbox",21),c.NdJ("change",function(t){const i=c.CHM(e).$implicit;return c.oxw(2).addService(t,i.name)}),c._uU(2),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit;c.xp6(2),c.hij(" ",e.name," ")}}function O(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",22),c.TgZ(1,"div",23),c._uU(2),c.qZA(),c.TgZ(3,"increment-input",24),c.NdJ("newItemEvent",function(t){const i=c.CHM(e).$implicit;return c.oxw(2).addItem(t,i)}),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit,i=c.oxw(2);c.xp6(2),c.Oqu(e.name),c.xp6(1),c.Q6J("value",i._value||0)("step",i._step)("min",i._min)("max",e.stock)("wrap",i._wrap)}}function M(e,t){if(1&e&&(c.TgZ(0,"mat-option",25),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.Q6J("value",e.id),c.xp6(1),c.AsE(" [",e.id,"] ",e.name," ")}}function F(e,t){if(1&e&&(c.TgZ(0,"form",6),c.YNc(1,U,8,4,"mat-form-field",7),c.YNc(2,N,16,3,"div",2),c.TgZ(3,"div",8),c.TgZ(4,"div",9),c.TgZ(5,"h3"),c._uU(6,"Services"),c.qZA(),c.TgZ(7,"div"),c.YNc(8,C,3,1,"div",10),c.qZA(),c.qZA(),c.TgZ(9,"div",9),c.TgZ(10,"h3"),c._uU(11,"Products"),c.qZA(),c.TgZ(12,"div"),c.YNc(13,O,4,6,"div",11),c.qZA(),c.qZA(),c.qZA(),c.TgZ(14,"h2"),c._uU(15),c.qZA(),c.TgZ(16,"mat-form-field",12),c.TgZ(17,"mat-label"),c._uU(18,"Barber"),c.qZA(),c.TgZ(19,"mat-select",13),c.YNc(20,M,2,3,"mat-option",14),c.qZA(),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.Q6J("formGroup",e.formVisiter),c.xp6(1),c.Q6J("ngIf",e.filteredOptions),c.xp6(1),c.Q6J("ngIf",e.user),c.xp6(6),c.Q6J("ngForOf",e.services),c.xp6(5),c.Q6J("ngForOf",e.products),c.xp6(2),c.hij("Total: $",e.total,".00"),c.xp6(5),c.Q6J("ngForOf",e.barbers)}}function Q(e,t){1&e&&(c.TgZ(0,"div"),c._UZ(1,"mat-spinner"),c.qZA())}function V(e,t){1&e&&(c.TgZ(0,"mat-form-field",15),c.TgZ(1,"mat-label"),c._uU(2,"Client ID (Scanning bar Code)"),c.qZA(),c._UZ(3,"input",27),c.qZA())}function y(e,t){if(1&e&&(c.TgZ(0,"div",8),c.TgZ(1,"div",9),c.TgZ(2,"strong"),c._uU(3,"Name"),c.qZA(),c.TgZ(4,"p"),c._uU(5),c.qZA(),c.qZA(),c.TgZ(6,"div",9),c.TgZ(7,"strong"),c._uU(8,"Visits"),c.qZA(),c.TgZ(9,"p"),c._uU(10),c.qZA(),c.qZA(),c.TgZ(11,"div",9),c.TgZ(12,"strong"),c._uU(13,"Points"),c.qZA(),c.TgZ(14,"p"),c._uU(15),c.qZA(),c.qZA(),c.TgZ(16,"div",9),c.TgZ(17,"strong"),c._uU(18,"Spent"),c.qZA(),c.TgZ(19,"p"),c._uU(20),c.qZA(),c.qZA(),c.qZA()),2&e){const e=c.oxw(2);c.xp6(5),c.Oqu(e.settings.clientSelected.name),c.xp6(5),c.Oqu(e.settings.clientSelected.visits.length),c.xp6(5),c.Oqu(e.settings.clientSelected.points),c.xp6(5),c.hij("$",e.settings.clientSelected.spent.toFixed(2),"")}}function Y(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div"),c.TgZ(1,"mat-checkbox",21),c.NdJ("change",function(t){const i=c.CHM(e).$implicit;return c.oxw(2).addService(t,i.name)}),c._uU(2),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit;c.xp6(2),c.hij(" ",e.name," ")}}function E(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",22),c.TgZ(1,"div",23),c._uU(2),c.qZA(),c.TgZ(3,"increment-input",24),c.NdJ("newItemEvent",function(t){const i=c.CHM(e).$implicit;return c.oxw(2).addItem(t,i)}),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit,i=c.oxw(2);c.xp6(2),c.Oqu(e.name),c.xp6(1),c.Q6J("value",i._value||0)("step",i._step)("min",i._min)("max",e.stock)("wrap",i._wrap)}}function $(e,t){if(1&e&&(c.TgZ(0,"mat-option",25),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.Q6J("value",e.id),c.xp6(1),c.AsE(" [",e.id,"] ",e.name," ")}}function P(e,t){if(1&e&&(c.TgZ(0,"form",6),c.YNc(1,V,4,0,"mat-form-field",7),c.YNc(2,y,21,4,"div",26),c.TgZ(3,"div",8),c.TgZ(4,"div",9),c.TgZ(5,"h3"),c._uU(6,"Services"),c.qZA(),c.TgZ(7,"div"),c.YNc(8,Y,3,1,"div",10),c.qZA(),c.qZA(),c.TgZ(9,"div",9),c.TgZ(10,"h3"),c._uU(11,"Products"),c.qZA(),c.TgZ(12,"div"),c.YNc(13,E,4,6,"div",11),c.qZA(),c.qZA(),c.qZA(),c.TgZ(14,"h2"),c._uU(15),c.qZA(),c.TgZ(16,"mat-form-field",12),c.TgZ(17,"mat-label"),c._uU(18,"Barber"),c.qZA(),c.TgZ(19,"mat-select",13),c.YNc(20,$,2,3,"mat-option",14),c.qZA(),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.Q6J("formGroup",e.formMember),c.xp6(1),c.Q6J("ngIf",e.filteredOptions),c.xp6(1),c.Q6J("ngIf",e.settings.clientSelected),c.xp6(6),c.Q6J("ngForOf",e.services),c.xp6(5),c.Q6J("ngForOf",e.products),c.xp6(2),c.hij("Total: $",e.total,".00"),c.xp6(5),c.Q6J("ngForOf",e.barbers)}}let B=(()=>{class e{constructor(e,t,i,s,n,o,a){this.clientsService=e,this.barbersService=t,this.productsServices=i,this.servicesServices=s,this.formBuilder=n,this.snackBar=o,this.settings=a,this._value=0,this._step=1,this._min=0,this._max=1/0,this._wrap=!1,this.load=!0,this.myControl=new r.NI,this.options=["One","Two","Three"],this.total=0,this.loadTables(),this.initForm()}ngOnInit(){this.filteredOptions=this.formVisiter.controls.clientId.valueChanges.pipe((0,o.O)(""),(0,a.U)(e=>this._filter(e))),setTimeout(()=>{this.load=!1},1e3)}initForm(){this.formVisiter=this.formBuilder.group({clientId:[,[r.kI.required]],services:[[]],products:[[]],barber:["",[r.kI.required]]}),this.formMember=this.formBuilder.group({clientId:[,[r.kI.required]],services:[[]],products:[[]],barber:["",[r.kI.required]]}),this.formMember.controls.clientId.valueChanges.subscribe(e=>{console.log(e),12345==e&&this.selectClient(e)})}loadTables(){this.clientsService.getClients().then(e=>{this.clients=e;let t=e;setTimeout(()=>{this.options=t,console.log(this.options)},2e3)}),this.barbersService.getBarbers().then(e=>{this.barbers=e,this.options=this.barbers.map(e=>e.name)}),this.productsServices.getProducts().then(e=>{this.products=e,this.options=this.products.map(e=>e.name)}),this.servicesServices.getServices().then(e=>{this.services=e,this.options=this.services.map(e=>e.name)})}selectClient(e){return(0,n.mG)(this,void 0,void 0,function*(){this.clientsService.getClient(e),console.log(this.settings.clientSelected)})}_filter(e){const t=e.name;return this.options.filter(e=>0===e.name.indexOf(t))}addService(e,t){this.servicesServices.getService(t),setTimeout(()=>{if(e.checked)return this.formMember.value.services.push(t),this.total+=this.servicesServices.service.price,!0;{let e=this.formMember.value.services.indexOf(t);return-1!==e&&(this.formMember.value.services.splice(e,1),this.total-=this.servicesServices.service.price),!1}},1e3)}addProduct(e,t){return(0,n.mG)(this,void 0,void 0,function*(){this.productsServices.getProduct(t),setTimeout(()=>{if(e.checked)return this.formMember.value.products.push(t),this.total+=this.productsServices.product.price,!0;{let e=this.formMember.value.products.indexOf(t);return-1!==e&&(this.formMember.value.products.splice(e,1),this.total-=this.productsServices.product.price),!1}},1e3)})}addItem(e,t){return(0,n.mG)(this,void 0,void 0,function*(){this.productsServices.getProduct(t.name),setTimeout(()=>{if(0!=e)return this.formMember.value.products.push(t),this.total+=this.productsServices.product.price,!0;{let e=this.formMember.value.products.indexOf(t);return-1!==e&&(this.formMember.value.products.splice(e,1),this.total-=this.productsServices.product.price),!1}},1e3)})}cobrar(){}chargueTheMenber(){return(0,n.mG)(this,void 0,void 0,function*(){let e={};if(e.work=this.formMember.value,e.work.date=new Date,e.work.priceTotal=this.total,console.log(e),this.clientsService.getClient(this.formMember.value.clientId)){this.snackBar.open("Visita registrada correctamente","Ok!"),this.load=!0,this.barbersService.addWork(e),this.clientsService.addVisit(e);for(let t=0;t<e.work.products.length;t++)yield this.productsServices.updateProduct(e.work.products[t].name,{stock:e.work.products[t].stock-1});this.formMember.reset(),this.initForm(),this.total=0,setTimeout(()=>{this.load=!1},1e3)}})}chargueTheVisiter(){let e={};e.work=this.formVisiter.value,e.work.date=new Date,e.work.priceTotal=this.total,console.log(e),this.clientsService.getClient(this.formVisiter.value.clientId)&&(this.snackBar.open("Visita registrada correctamente","Ok!"),this.load=!0,this.barbersService.addWork(e),this.clientsService.addVisit(e),this.formVisiter.reset(),this.initForm(),this.total=0,setTimeout(()=>{this.load=!1},1e3))}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.a),c.Y36(u.v),c.Y36(m.s),c.Y36(p.r),c.Y36(r.qu),c.Y36(d.ux),c.Y36(h.g))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-home"]],decls:19,vars:6,consts:[[1,"example-card"],["label","Visiter"],[4,"ngIf"],[3,"formGroup",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click"],["label","Member"],[3,"formGroup"],["class","example-full-width","appearance","outline","style","width: 100%;",4,"ngIf"],[2,"display","flex"],[2,"flex","1"],[4,"ngFor","ngForOf"],["style","display: flex;align-items: center;",4,"ngFor","ngForOf"],["appearance","outline",2,"width","100%"],["formControlName","barber"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"example-full-width",2,"width","100%"],["type","text","placeholder","Pick one","aria-label","Name","matInput","","formControlName","clientId",3,"matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value","click",4,"ngFor","ngForOf"],[3,"value","click"],[3,"change"],[2,"display","flex","align-items","center"],[2,"margin-right","8px","flex","1"],[3,"value","step","min","max","wrap","newItemEvent"],[3,"value"],["style","display: flex;",4,"ngIf"],["type","number","placeholder","Scanning bar code","aria-label","Name","matInput","","formControlName","clientId"]],template:function(e,t){1&e&&(c.TgZ(0,"mat-card",0),c.TgZ(1,"mat-card-header"),c.TgZ(2,"mat-card-title"),c._uU(3,"Calculate price"),c.qZA(),c.qZA(),c.TgZ(4,"mat-tab-group"),c.TgZ(5,"mat-tab",1),c.TgZ(6,"mat-card-content"),c.YNc(7,J,2,0,"div",2),c.YNc(8,F,21,7,"form",3),c.qZA(),c.TgZ(9,"mat-card-actions"),c.TgZ(10,"button",4),c.NdJ("click",function(){return t.chargueTheVisiter()}),c._uU(11,"Cobrar"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(12,"mat-tab",5),c.TgZ(13,"mat-card-content"),c.YNc(14,Q,2,0,"div",2),c.YNc(15,P,21,7,"form",3),c.qZA(),c.TgZ(16,"mat-card-actions"),c.TgZ(17,"button",4),c.NdJ("click",function(){return t.chargueTheMenber()}),c._uU(18,"Cobrar"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(7),c.Q6J("ngIf",t.load),c.xp6(1),c.Q6J("ngIf",!t.load),c.xp6(2),c.Q6J("disabled",!t.formVisiter.valid),c.xp6(4),c.Q6J("ngIf",t.load),c.xp6(1),c.Q6J("ngIf",!t.load),c.xp6(2),c.Q6J("disabled",!t.settings.clientSelected&&!t.formMember.valid))},directives:[g.a8,g.dk,g.n5,Z.SP,Z.uX,g.dn,f.O5,g.hq,v.lW,b.$g,r._Y,r.JL,r.sg,f.sg,T.KE,T.hX,q.gD,r.JJ,r.u,A.Nt,r.Fj,_.ZL,_.XC,x.ey,w.oG,S,r.wV],pipes:[f.Ov],styles:[".example-card[_ngcontent-%COMP%]{margin:auto;width:50%}"]}),e})();var G=i(4655);const j=[{path:"",component:B}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[G.Bz.forChild(j)],G.Bz]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[f.ez,D,r.u5,r.UX,s.m]]}),e})()}}]);