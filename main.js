function add_user(){
    player1_name = document.getElementById("user_one").value;
    player2_name = document.getElementById("user_two").value;
    localStorage.setItem("player1_name ", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location.replace("game_page.html");
}