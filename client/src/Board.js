import "./css/Board.css";
import { Chessboard } from 'react-chessboard';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
// Displaying the board
function Board() {
    return (
        <div className="page">
            <div id="backgroundImg">
                <h1>FRENCH DEFENCE</h1>
                <hr/>
                <h2>This is a really really really really cool opening that is so amazing because blah blah blah and blah. Try it out on the mini board below!</h2>
                <hr/>
            </div>
            <div id="container">
                <Chessboard id="BasicBoard" />
            </div>

            <div id="moveList">
                <Table responsive>
                    <thead>
                        <tr>
                            <th></th>
                            <th>White</th>
                            <th>Black</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Table cell</td>
                            <td>Table cell</td> 
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div id="tryitButton">
                <Button variation="primary">
                    TEST YOUR KNOWLEDGE
                </Button>
            </div>

            
        </div>



    );
}

export default Board;