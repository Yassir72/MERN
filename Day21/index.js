function isSolved(board) { let empty =0;
    let vertical = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    for (let i = 0; i < board.length; i++) {
        let k = 0;
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 0) empty++;
            vertical[j][i] = board[i][j];
            if (board[i][j] != 0 && board[i][j] == board[i][0])
                k++;
            if (k == 3) { console.log('here 1');
                return board[i][0];}
        }

    }
    if (board[0][0] != 0 && board[0][0] == board[1][1] && board[0][0] == board[2][2])
        return board[0][0];
    if (board[0][2] != 0 && board[0][2] == board[1][1] && board[2][0] == board[1][1])
    
    return board[0][2];
    console.log(vertical);
    for (let i = 0; i < vertical.length; i++) {
        let k = 0;
        for (let j = 0; j < vertical[i].length; j++) {
            if (vertical[i][j] != 0 && vertical[i][j] == vertical[i][0])
                k++;
            if (k == 3) return vertical[i][0];
        }

    }   if(empty>0) return -1;
        return 0;
}


console.log(isSolved([[1,2,1],[1,1,2],[2,1,2]]));