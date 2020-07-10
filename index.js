import React,{ Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class App extends Component {
  constructor(props1) {
    super(props1);
    this.state1 = {
    columnDefs: [
        { headerName: "Name", field: "name" },
        { headerName: "Surname", field: "surname",checkboxSelection: true }],
      rowData: [
        { name: "Mahi", surname: "Swami" },
        { name: "Santosh", surname: "Kul" },
        { name: "Basu", surname: "Desh" }]
     
    }
  }
   
  
   componentDidMount() {
   fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json')
 .then(result => result.json())
 .then(rowData => this.setState({rowData}))
 }


  render() {
    return (
      <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
        <AgGridReact
            columnDefs={this.state1.columnDefs}
            rowData={this.state1.rowData} 
            rowSelection="multiple">
        </AgGridReact>
                
      </div>
     
      
    );
  }
}

render(<App />, document.getElementById('root'));

