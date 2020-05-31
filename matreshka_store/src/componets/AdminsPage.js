import React from "react";


class AdminsPage extends React.Component{
constructor(props){
    super(props);

        this.state = {russianBooks: [], russianOrders:[], subscribe:[], requests:[]};
        this.remove = this.remove.bind(this);

    }
  componentDidMount() {

  }

  async getGiftsInfo(){
 
    try{
        let giftsData= await axios.get(`https://matreshka-database.herokuapp.com/book_store/v1/gifts`)
        this.setState({russianGiftList:giftsData.data})
    }
    catch(error){
        console.log(error)
    }
}

  async remove(id) {
    await fetch(`/niecey_api/v1/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedEmployees = [...this.state.employees].filter(i => i.id !== id);
      this.setState({employees: updatedEmployees});
    });
  }

  render() {
    const {employees, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const employeeList = employees.map(employee => {
      return <tr key={employee.id}>
        <td style={{whiteSpace: 'nowrap'}}>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.email}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/employee/" + employee.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(employee.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/employee/new">Add Group</Button>
          </div>
          <h3>My Employees List</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th>Email</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {employeeList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
}
}

export default AdminsPage;


