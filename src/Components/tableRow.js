function TableRow({ field }){

    const deleteUser = data =>{
        var res = window.confirm("Are You sure want to delete "+data.firstName +" Data");
        if(res){
            fetch('http://localhost:3001/deleteUser', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:data.id})
            }).then(res => res.json())
            .then(res => alert(res));
        }
    }
    return(
        
        <tr>
            <td>{field.id}</td>
            <td>{field.firstName}</td>
            <td>{field.lastName}</td>
            <td>{field.emailId}</td>
            <td>{field.mobileNumber}</td>
            <td> <a href='/editUser'>Edit</a> </td>
            <td> <button onClick={deleteUser.bind(this, field)}>Delete</button> </td>
        </tr>
    )
}

export default TableRow;