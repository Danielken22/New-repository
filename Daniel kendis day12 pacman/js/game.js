'use strict'

const WALL = '&#8251;'
const FOOD = '&middot;'
const EMPTY = ' '
var gFoods
const gGame = {
    score: 0,
    isOn: false,
    foodCount:0
}
var gBoard

function init() {
    var modal = document.querySelector('.modal')
    modal.classList.add('hide')

    gBoard = buildBoard()
    createPacman(gBoard)
    createGhosts(gBoard)
    isWin()

    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
    
}

function buildBoard() {
    const size = 10
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])

        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD
            gGame.foodCount++
            if (i === 0 || i === size - 1 ||
                j === 0 || j === size - 1 ||
                (j === 3 && i > 4 && i < size - 2)) {
                board[i][j] = WALL
                gGame.foodCount--
            }
        }
    }
    return board
}
// check why the fountcount does not match the actual food count on the table and fix it.
// update the foodcount each time the pacman eats food. and check if there is more food available. if not - declare victory(call gameover function and send the right argument)

function updateScore(diff) {
    // TODO: update model and dom
    gGame.score += diff


    const elScore = document.querySelector('.score span')
    elScore.innerText = gGame.score
    var score=gGame.score
    foodCount(score)
}

function gameOver(isWin) {
    var modal = document.querySelector('.modal')
    modal.classList.remove('hide')
    clearInterval(gGhostsInterval)
    var p =modal.querySelector('p')
    console.log(p)
    const text = isWin ?'you won': 'you lost'
    p.innerText = text
    
    // TODO Show game-over modal with ‘play again’ button. (When 
    // the game is finished). 
    gGame.isOn = false
}

function foodCount(){
    var score= 1
    if(FOOD=== score){
        var victory =document.querySelector('.modal1')
        modal1.classList.remove('hide')
        console.log(victory)
    }
}

function isWin(score) {
 var finalScore=59 
if (score=== finalScore)return true
} 
   



