import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
        if(i > 0) {      
            return <Square value={i} />;
        }
        else {
            return <Square value="" />;
        }
    }
  
    render() {
      const status = 'Solve the puzzle!';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(15)}
            {this.renderSquare(2)}
            {this.renderSquare(1)}
            {this.renderSquare(12)}
          </div>
          <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(11)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(7)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(14)}
            {this.renderSquare(13)}
            {this.renderSquare(0)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );