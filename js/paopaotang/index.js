function Player(name,teamColor) {
    this.enemies = []; //对手
    this.partners = []; //队友
    this.name = name;
    this.teamColor = teamColor;
    this.state = 'live';
    
}
Player.prototype.win = function() {
    //kill all
    console.log(`${this.name} win`);
}
Player.prototype.lose = function() {
    //ace
    console.log(`${this.name} lose`);
}
Player.prototype.die = function() {
    console.log(`${this.name} die`);
    this.state = 'die';
    let all_dead = true; //都死了
    for (var i = 0, partner; partner = this.partners[i++];){
        if(partner.state === 'live'){
            all_dead = false;
            break;
        }
    }
    if(all_dead) {
        for (var i = 0, partner; partner = this.partners[i++];){
            partner.lose();
        }
        this.lose();
        for (var i = 0,enemy; enemy = this.enemies[i++];){
            enemy.win();
        }
    }
}

//组队 生成玩家，工厂类来负责
var players = [];
var playerFactory = function(name,teamColor) {
    var newPlayer = new Player(name,teamColor);
    for(var i=0, player; player = players[i++];){
        if (player.teamColor === newPlayer.teamColor){
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        }else{
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}
var player1 = playerFactory('壹','red');
var player2 = playerFactory('贰','red');
var player3 = playerFactory('叁','red');
var player4 = playerFactory('肆','red');
var player5 = playerFactory('伍','blue');
var player6 = playerFactory('陆','blue');
var player7 = playerFactory('柒','blue');
var player8 = playerFactory('捌','blue');
console.log(player1.partners,player1.enemies);
// 队友是谁？敌人是谁，交给工厂去做

player1.die();
player2.die();
player3.die();
player4.die();
