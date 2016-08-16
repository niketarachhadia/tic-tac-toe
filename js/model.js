var TicTacToe = {
	'x' : 'X',
	'o' : 'O',
	'move' : 0,
	'currentPlayer' : 'X',
	'board' : ['','','','','','','','',''],
	'winCombinations' : [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
	'win': false,
	'nextMove': function(){
		if(this.currentPlayer === 'X'){
			this.currentPlayer = 'Y';
		}else{
			this.currentPlayer = 'X';
			}
		return this.checkForWin()
	},	
	'checkForWin': function(){
		for(index in this.winCombinations){
			var wincombination = this.winCombinations[index];
			var val0=this.board[wincombination[0]];
			var val1=this.board[wincombination[1]];
			var val2=this.board[wincombination[2]];
			if(val0===val1 && val0===val2){
				return val0;
			}
		}
		return '';
	}

};