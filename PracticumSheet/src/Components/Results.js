// Author:Sreeevidya

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Row,Col} from 'react-bootstrap';
import TableScrollbar from 'react-table-scrollbar';
import { For } from 'react-loops';
import NewLine from '../utils/NewLine';
import FetchData from "../utils/FetchData";

function Results(props) {

  const [showResults, setShowResults] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isFillupExist, setIsFillupExist] = useState(false);

  // Fetching the answer data.
  const {data,isLoading} = FetchData({url: 'https://raw.githubusercontent.com/parayathamsreevidya/PublicRepository/main/Answers.json'});
 
  // This code is used to prepare result data to display in the table.
  if(!isLoading && !showResults){
    let tableData = [];
    for(let i =0; i < props.questions.length; i++){
      if(props.questions[i].type === "Fillup" ){
        setIsFillupExist(true);
        let tdData = {
          key: props.questions[i].key,
          question: props.questions[i].question,
          answer: data.answers[i].answer
        }
        tableData.push(tdData);
      }
    }
    setTableData(tableData);
    setShowResults(true);
  }


  return (
    <div className="my-instructions">
      
    {showResults &&
      <div>
        <h2 className="text-center my-resultspg">Results</h2>
        <div className="report">
          <Row>
            <Col sm="6" className="text-center"><b>Score:</b></Col>
            <Col sm="6" className="text-center"><b>Time:{props.timer[0] < 10 ? '0'+ props.timer[0] : props.timer[0]}:{props.timer[1] < 10 ? '0'+ props.timer[1] : props.timer[1]}:{props.timer[2] < 10 ? '0'+ props.timer[2] : props.timer[2]}</b></Col>
          </Row>
          <Row>
            <Col sm="6" className="text-center"><b>Percentage</b>:</Col>
            <Col sm="6" className="text-center"><b>Status:</b></Col>
          </Row>
        </div>

        {isFillupExist &&<div className="results">
        <TableScrollbar  height="406px">
            <Table striped bordered hover variant="light" className="results-table">
              <thead className="results-thead">
                <tr>
                  <th>#</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Correctness</th>
                </tr>
              </thead>
              <tbody className="results-tbody">
                <For of={tableData} as={tdData =>
                <tr>
                  <td>{tdData.key}</td>
                  <td><NewLine text={tdData.question}></NewLine></td>
                  <td>{tdData.answer}</td>
                  <td></td>
                </tr>
               }/>
              </tbody>
            </Table>
          </TableScrollbar>
        </div>}
      </div>}
    </div>
  );
}

export default Results;
