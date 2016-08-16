var View = function(ticTacToe){
	this.ticTacToe = ticTacToe;
	viewObj = this;

	$('.gameboard').click(function(event) {
			 viewObj.play(event);
   	});
	 this.play = function(event){
	 	var selectedCell = event.target.id;		
		if(this.ticTacToe.board[selectedCell]!==''){
			$('.message').html('Invalid Move');
		}else{
			$('#'+selectedCell).html(this.ticTacToe.currentPlayer);
			this.ticTacToe.board[selectedCell] = this.ticTacToe.currentPlayer; 
			var checkForWin = this.ticTacToe.nextMove();
			if(checkForWin!==''){
				$('.message').html(checkForWin + ' won!');
			}
		}
	};
};