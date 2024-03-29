var WIDTH = 960;
var HEIGHT = 640;
var game;

window.onload = function(){
	//create a new game and run it
	game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game');

	//add the game states
	game.state.add('StartupState', new StartupState());
	game.state.add('LoadState', new LoadState());
	game.state.add('MainState', new MainState());
	game.state.add('CreditState', new CreditState());

	//kickoff the starting state
    if(window.location.href.indexOf('localhost') == -1){
	    game.state.start('StartupState');
    }else{
        game.state.start('LoadState');
    }
}
