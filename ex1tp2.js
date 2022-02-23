var persone ={
    rempperso:function(nom,sante,force){
        this.nom=nom;
        this.sante=sante;
        this.force=force;
    decrire=function() {
      var desc=this.nom+ ' '+this.sante+' '+'points de vie'+' '+this.force +' '+'en force';
    return desc;}
    
     joueur.rempjoueur=function(nom,sante,force,xp){
      this.rempperso(nom,sante,force);
      this.xp=xp;}
      joueur.decrire=function(){
    return 'le joueur '+this.decrire+' '+ this.xp + 'points d experience';}
    
    
      adversaire.rempadv=function(nom,sante,force,race,val){
        this.rempperso(nom,sante,force);
            this.race=race;
            this.val=val;}
        adversaire.decrire=function(){
          return 'l adversaire '+this.decrire+' '+'race :'+ this.race + 'valeur : '+this.val;
        } }
    };
    function verif(){
    var jou1=object.create(persone);
    jou1.rempjoueur('ayoub',8,70,4);
    console.log(jou1.decrire());
    var jou2=object.create(persone);
    jou2.rempjoueur('amin',8,70,4);
    var adv1=object.create(persone);
    adv1.rempadv('waston',7,66,'india',30);
    var adv1=object.create(persone);
    adv1.rempadv('alex',7,66,'frnace',30);
    if(document.getElementById('r1').checked){
      var p=jou1.decrire()+jou2.decrire();
    
    }
    if(document.getElementById('r2').checked){
      var p=adv1.decrire()+adv2.decrire();
    }
    document.getElementById('para').innerHTML=p;
    }
  