import { render } from '@testing-library/react';
import React, { Component } from 'react';
import TableRow from './tableRow';

class Table extends Component{
    constructor(props){
        super(props);
        this.state = { apiResponse:" "};
    }
    callAPI(){
        fetch('http://localhost:3001/getAllUsers')
        .then( res => res.json() )
        .then( (data) => {
          this.setState({ apiResponse: data })
          //console.log(data)
        })
    }
    componentDidMount(){
        this.callAPI();
    }


    render(){
    
        
        var dataFromNode = this.state.apiResponse;
        var empData = [];

        for(var i=0;i<dataFromNode.length;i++){
            empData.push(dataFromNode[i]);
        }
        
        return(
            <div>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Firse Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empData.map((element) => (
                                <TableRow field={element} />
                            ))

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;