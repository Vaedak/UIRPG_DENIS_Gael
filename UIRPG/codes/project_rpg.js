
//mes variables de points de vies de base de personnages mp compris//

var wagner_hp_html = document.getElementById("character_1_hp");
var donta_hp_html = document.getElementById("character_2_hp");
var pass_hp_html = document.getElementById("character_3_hp");
var gobarnof_hp_html = document.getElementById("character_4_hp");

var demon_hp_html = document.getElementById("enemy_1_hp");
var golem_hp_html = document.getElementById("enemy_2_hp");
var pig_thief_hp_html = document.getElementById("enemy_3_hp");

var wagner_mp = document.getElementById("character_1_mp");
var donta_mp = document.getElementById("character_2_mp");
var pass_mp = document.getElementById("character_3_mp");
var gobarnof_mp = document.getElementById("character_4_mp");

var demon_mp = document.getElementById("enemy_1_mp");
var golem_mp = document.getElementById("enemy_2_mp");
var pig_thief_mp = document.getElementById("enemy_3_mp");

var base_attack = document.querySelector(".base") ;


var wagner_attack_base = 10 ;
var donta_base = 10 ;
var pass_base = 10 ;
var gobarnof_base = 10 ; 

var demon_attack = 10 ;
var golem_attack = 10 ;
var pig_thief_attack = 10 ;

var dialogue_box = document.getElementById("ui_2")

var player_turn_name = document.getElementById("ui_3")


var wagner_mp_origin = 100
var donta_mp_origin = 100
var pass_mp_origin = 120
var gobarnof_mp_origin = 300

var wagner_hp_origin = 200
var donta_hp_origin = 60
var pass_hp_origin = 40
var gobarnof_hp_origin = 10

var wagner_mp_origin = 100
var donta_mp_origin = 100
var pass_mp_origin = 120
var gobarnof_mp_origin = 300

var demon_hp_origin = 500 ;
var golem_hp_origin = 50 ;
var pig_thief_hp_origin = 400 ;
var death_floor = 0
//permet de compter les tours , si les quatres personnages joueurs ou les trois personnages monstres ont joués on lui ajoute 1//
var turn = 0 ;


//permet de compter combien de persos joueurs ont joués//
var inside_turn = 0;


var enemy_selector = 0;
var player_selector = 0;
//la partie des fonctions //







//action d'attaque basique du personnage 1 , wagner, qui prends les points de vies initiaux du monstre contre l'attaque de wagner et change le résultat dans l'HTML //
function base_attack_1(){

    enemy_selector =(Math.floor(Math.random() *3)+1);

    if(inside_turn == 0){
        if (enemy_selector == 1){

            demon_hp_html.innerHTML = demon_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Wagner attacked the monster for 10 damage points!";
        }
        if (enemy_selector == 2){
            golem_hp_html.innerHTML = golem_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Wagner attacked the monster for 10 damage points!";
        }
        if (enemy_selector == 3){
            pig_thief_hp_html.innerHTML = pig_thief_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Wagner attacked the monster for 10 damage points!";
        }
    }
    if(inside_turn == 1){
        if (enemy_selector == 1){

            demon_hp_html.innerHTML = demon_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Donta attacked the monster for 10 damage points!";
        }
        if (enemy_selector == 2){
            golem_hp_html.innerHTML = golem_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Donta attacked the monster for 10 damage points!";
        }
        if (enemy_selector == 3){
            pig_thief_hp_html.innerHTML = pig_thief_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Donta attacked the monster for 10 damage points!";
        }
    }
    if(inside_turn == 2){
        if (enemy_selector == 1){

            demon_hp_html.innerHTML = demon_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Pass attacked the monster for 10 damage points!";
        }
        if (enemy_selector == 2){
            golem_hp_html.innerHTML = golem_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Pass attacked the monster for 10 damage points!";
        }
        if (enemy_selector == 3){
            pig_thief_hp_html.innerHTML = pig_thief_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Pass attacked the monster for 10 damage points!";
        }
    }
    if(inside_turn == 3){
        if (enemy_selector == 1){

            demon_hp_html.innerHTML = demon_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Gobarnof attacked the monster for 10 damage points!";
        }
        if (enemy_selector == 2){
            golem_hp_html.innerHTML = golem_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Gobarnof attacked the monster for 10 damage points!";
        }
        if (enemy_selector == 3){
            pig_thief_hp_html.innerHTML = pig_thief_hp_origin -= wagner_attack_base;

            dialogue_box.innerHTML = "Gobarnof attacked the monster for 10 damage points!";
        }
    }





    inside_turn += 1;

    player_turn();
    monster_death_demon();
    monster_death_golem();
    monster_death_pig_thief();

}

//la même chose en gros , sauf que les dégâts ne sont pas fixes et sont sur base 30 , j'ai mis le -1 car sinon mon attaque avait la facheuse tendance à régénerer le monstre par fois//
function special_attack_1(){ 


    enemy_selector =(Math.floor(Math.random() *3)+1);
  

    if (enemy_selector == 1){
        if(turn%2== 0){
            if(inside_turn == 0){
                if (wagner_mp_origin > 20){
                    wagner_mp_origin = wagner_mp_origin -10 ;
                    wagner_mp.innerHTML = wagner_mp_origin -10 ;
                    demon_hp_html.innerHTML = demon_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Wagner attacked the monster for "+ demon_hp_origin +" damage points!";
                }
            }
            if(inside_turn == 1){
                if (donta_mp_origin > 20){
                    donta_mp_origin = donta_mp_origin - 10 ;
                    donta_mp.innerHTML = donta_mp_origin -10 ;
                    demon_hp_html.innerHTML = demon_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Donta attacked the monster for "+ demon_hp_origin +" damage points!";
                }
            }
            if(inside_turn == 2){
                if (pass_mp_origin > 20){
                    pass_mp_origin = pass_mp_origin -10;
                    pass_mp.innerHTML = pass_mp_origin -10 ;
                    demon_hp_html.innerHTML = demon_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Pass attacked the monster for "+ demon_hp_origin +" damage points!";
                }
            }
            if(inside_turn == 3){
                if (gobarnof_mp_origin > 20){
                    gobarnof_mp_origin = gobarnof_mp_origin - 10;
                    gobarnof_mp.innerHTML = gobarnof_mp_origin -10 ;
                    demon_hp_html.innerHTML = demon_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Gorbanof attacked the monster for "+ demon_hp_origin +" damage points!";
                }
            }
        }
    }
    if (enemy_selector == 2){
        if(turn%2== 0){
            if(inside_turn == 0){
                if (wagner_mp_origin > 20){
                    wagner_mp_origin = wagner_mp_origin -10 ;
                    wagner_mp.innerHTML = wagner_mp_origin ;
                    golem_hp_html.innerHTML = golem_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Wagner attacked the monster for "+ golem_hp_origin +" damage points!";
                }
            }
            if(inside_turn == 1){
                if (donta_mp_origin > 20){
                    donta_mp_origin = donta_mp_origin - 10 ;
                    donta_mp.innerHTML = donta_mp_origin -10 ;
                    golem_hp_html.innerHTML = golem_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Donta attacked the monster for "+ golem_hp_origin +" damage points!";
                }
            }
            if(inside_turn == 2){
                if (pass_mp_origin > 20){
                    pass_mp_origin = pass_mp_origin -10;
                    pass_mp.innerHTML = pass_mp_origin -10 ;
                    golem_hp_html.innerHTML = golem_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Pass attacked the monster for "+ golem_hp_origin +" damage points!";
                }
            }
            if(inside_turn == 3){
                if (gobarnof_mp_origin > 20){
                    gobarnof_mp_origin = gobarnof_mp_origin - 10;
                    gobarnof_mp.innerHTML = gobarnof_mp_origin -10 ;
                    golem_hp_html.innerHTML = golem_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Gorbanof attacked the monster for "+ golem_hp_origin +" damage points!";
                }
            }
        }
    }
    if (enemy_selector == 3){
        if(turn%2== 0){
            if(inside_turn == 0){
                if (wagner_mp_origin > 20){
                    wagner_mp_origin = wagner_mp_origin -10 ;
                    wagner_mp.innerHTML = wagner_mp_origin -10 ;
                    pig_thief_hp_html.innerHTML = pig_thief_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Wagner attacked the monster for "+ pig_thief_hp_origin +" damage points!";
                }
            }
            if(inside_turn == 1){
                if (donta_mp_origin > 20){
                    donta_mp_origin = donta_mp_origin - 10 ;
                    donta_mp.innerHTML = donta_mp_origin -10 ;
                    pig_thief_hp_html.innerHTML = pig_thief_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Donta attacked the monster for "+ pig_thief_hp_origin +" damage points!";
                }
            }
            if(inside_turn == 2){
                if (pass_mp_origin > 20){
                    pass_mp_origin = pass_mp_origin -10;
                    pass_mp.innerHTML = pass_mp_origin -10 ;
                    pig_thief_hp_html.innerHTML = pig_thief_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Pass attacked the monster for "+ pig_thief_hp_origin +" damage points!";
                }
            }
            if(inside_turn == 3){
                if (gobarnof_mp_origin > 20){
                    gobarnof_mp_origin = gobarnof_mp_origin - 10;
                    gobarnof_mp.innerHTML = gobarnof_mp_origin -10 ;
                    pig_thief_hp_html.innerHTML = pig_thief_hp_origin -=(Math.floor(Math.random() *60) -1);  
                    dialogue_box.innerHTML = "Gorbanof attacked the monster for "+ pig_thief_hp_origin +" damage points!";
                }
            }

        }
    }
    inside_turn +=1;
    
    player_turn();
    monster_death_demon();
    monster_death_golem();
    monster_death_pig_thief();


}
function player_turn(){
    

    if(turn%2 == 0 ){
        if (inside_turn ==0){
            player_turn_name.innerHTML = "Wagner";
        }
        if (inside_turn ==1){
            player_turn_name.innerHTML = "Donta";
        }
        if (inside_turn ==2){
            player_turn_name.innerHTML = "Pass";
        }
        if (inside_turn ==3){
            player_turn_name.innerHTML = "Gorbarnof";
        }
        if (inside_turn >5){
            inside_turn= (-1);
        
        }  
    }
    
}

function enemy_turn(){
    if (inside_turn == 4){
        player_selector =(Math.floor(Math.random() *4)+1);
        if (player_selector == 1){
            wagner_hp_origin = wagner_hp_origin -10;
            wagner_hp_html.innerHTML = wagner_hp_origin - 10;
        }
        if (player_selector == 2){
            donta_hp_origin = donta_hp_origin -10;
            donta_hp_html.innerHTML = donta_hp_origin - 10;
        }
        if (player_selector == 3){
            pass_hp_origin = pass_hp_origin -10;
            pass_hp_html.innerHTML = pass_hp_origin - 10;
        }
        if (player_selector == 4){
            gobarnof_hp_origin = gobarnof_hp_origin -10;
            gobarnof_hp_html.innerHTML = gobarnof_hp_origin - 10;
        }
        inside_turn += 1;
    }
    if (inside_turn == 5){
        player_selector =(Math.floor(Math.random() *4)+1);
        if (player_selector == 1){
            wagner_hp_origin = wagner_hp_origin -10;
            wagner_hp_html.innerHTML = wagner_hp_origin - 10;
        }
        if (player_selector == 2){
            donta_hp_origin = donta_hp_origin -10;
            donta_hp_html.innerHTML = donta_hp_origin - 10;
        }
        if (player_selector == 3){
            pass_hp_origin = pass_hp_origin -10;
            pass_hp_html.innerHTML = pass_hp_origin - 10;
        }
        if (player_selector == 4){
            gobarnof_hp_origin = gobarnof_hp_origin -10;
            gobarnof_hp_html.innerHTML = gobarnof_hp_origin - 10;
        }
        inside_turn += 1;

    }
    if (inside_turn == 6){
        player_selector =(Math.floor(Math.random() *4)+1);
        if (player_selector == 1){
            wagner_hp_origin = wagner_hp_origin -10;
            wagner_hp_html.innerHTML = wagner_hp_origin - 10;
        }
        if (player_selector == 2){
            donta_hp_origin = donta_hp_origin -10;
            donta_hp_html.innerHTML = donta_hp_origin - 10;
        }
        if (player_selector == 3){
            pass_hp_origin = pass_hp_origin -10;
            pass_hp_html.innerHTML = pass_hp_origin - 10;
        }
        if (player_selector == 4){
            gobarnof_hp_origin = gobarnof_hp_origin -10;
            gobarnof_hp_html.innerHTML = gobarnof_hp_origin - 10;
        }
        inside_turn += 1;

    }
}
//function enemy_turn(){
//    if(turn%2 == 1 ){
//        if (inside_turn ==0){
//            player_turn_name.innerHTML = "Demon";
//        }
//        if (inside_turn ==1){
//            player_turn_name.innerHTML = "Golem";
//        }
//        if (inside_turn ==2){
//            player_turn_name.innerHTML = "Pig thief";
//        }
//        if (inside_turn >3){
//            inside_turn= (-3);
//            turn= (+1);
//        }
//    }
//} 





function monster_death_demon(){
    if(demon_hp_origin <= 0){
        demon_hp_html.innerHTML = "0";
        dialogue_box.innerHTML = "The demon was killed!";
    }
}
function monster_death_golem(){
    if(golem_hp_origin <= 0){
        golem_hp_html.innerHTML  = "0";
        dialogue_box.innerHTML = "The golem was killed!";
    }
}
function monster_death_pig_thief(){
    if(pig_thief_hp_origin <= 0){
        pig_thief_hp_html.innerHTML = "0";
        dialogue_box.innerHTML = "The Pig Thief was killed!";
    }
}



