$( document ).ready(function() {
    let d1;                         //premier dé
    let d2;                         //deuxième dé
    let scoregen1 = 0;              //score global du joueur 1
    let scorecur1 = 0;              //score de la manche du joueur 1
    let scoregen2 = 0;              //score global du joueur 2
    let scorecur2 = 0;              //score de la manche du joueur 2
    let joueur1 = true;             //définit le joueur dont c'est le tour (si joueur1 = true, alors c'est le tour du joueur 1)

    $("#new").click(function(){     //lance une nouvelle partie lorsqu'on clique sur le bouton "New Game"
            scorecur1 = 0;
            scorecur2 = 0;                  //Tous les scores sont remis à 0
            scoregen1 = 0;
            scoregen2 = 0;
            joueur1 = true;
            $("#tour1").css('display', '');
            $("#qui").html("C'est le tour du joueur 1 !");
            $("#tour1");
            $("#scoreglob1").html(scoregen1);
            $("#scorecur1").html(scorecur1);
            $("#scorecur2").html(scorecur2);
            $("#scoreglob2").html(scoregen2);
        });

    function rolling() {            //affiche la bonne face des dés lorsqu'ils sont lancés
        let src1;
        let src2;
        src1 = d1 == 1 ? "images/dice-1.png"
            : d1 == 2 ? "images/dice-2.png"
            : d1 == 3 ? "images/dice-3.png"
            : d1 == 4 ? "images/dice-4.png"
            : d1 == 5 ? "images/dice-5.png"
            : "images/dice-6.png";
        $("#de1").attr('src',src1);
        src2 = d2 == 1 ? "images/dice-1.png"
            : d2 == 2 ? "images/dice-2.png"
            : d2 == 3 ? "images/dice-3.png"
            : d2 == 4 ? "images/dice-4.png"
            : d2 == 5 ? "images/dice-5.png"
            : "images/dice-6.png";
        $("#de2").attr('src',src2);
    }


    $("#roll").click(function(){    //effectue un lancer de dés lorsqu'on clique sur le bouton "Roll"
        d1 = Math.floor(Math.random()*6+1);
        d2 = Math.floor(Math.random()*6+1);
        rolling();
        if (joueur1 == true) {      //Si c'est le tour du joueur 1
            if (d1 == 1 && d2 == 1) {
                scorecur1 = 0;
                $("#scorecur1").html(scorecur1);
                joueur1 = false;
                $("#qui").html("C'est le tour du joueur 2 !")
            }
            else{
                scorecur1 += d1+d2;
                $("#scorecur1").html(scorecur1);
            }
        }
        else {                      //si c'est le tour du joueur 2
            if (d1 == 1 && d2 == 1) {
                scorecur2 = 0;
                $("#scorecur2").html(scorecur2);
                joueur1 = true;
                $("#qui").html("C'est le tour du joueur 1 !");
            }
            else{
                scorecur2 += d1+d2;
                $("#scorecur2").html(scorecur2);
            }
        }

           
    })
    $("#hold").click(function(){       //ajoute le score courant au score général du joueur
        if (joueur1 == true) {          //Tour du joueur 1
            scoregen1 += scorecur1;
            scorecur1 = 0;
            $("#scoreglob1").html(scoregen1);
            $("#scorecur1").html(scorecur1);
            joueur1 = false;
            if (scoregen1 >= 100) {
                $("#scoreglob1").html(scoregen1);
                alert("Le joueur 1 a gagné !");
            }    
            else{
                $("#qui").html("C'est le tour du joueur 2 !");
            }
        }
        else {         //tour du joueur 2
            scoregen2 += scorecur2;
            scorecur2 = 0;
            $("#scoreglob2").html(scoregen2);
            $("#scorecur2").html(scorecur2);
            joueur1 = true;
            if (scoregen2 >= 100) {
                $("#scoreglob2").html(scoregen2);
                alert("Le joueur 2 a gagné !");
            }
            else{
                $("#qui").html("C'est le tour du joueur 1 !");
            }
        }
        
    })


})