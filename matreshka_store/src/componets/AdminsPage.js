import React from "react";
import axios from "axios";

let headersConfig={
    "Access-Control-Allow-Origin": "http://localhost:3000"
}
class AdminsPage extends React.Component{
constructor(props){
    super(props);

        this.state = {russianBooks: [], russianGifts:[], subscribe:[], requests:[]};
        // this.remove = this.remove.bind(this);

    }
  componentDidMount() {
this.getGiftsInfo();
this.getBooksInfo();
this.getRequests();
this.getSubscribe();
  }

  async getGiftsInfo(){
    try{
        let giftsData= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/gifts`,headersConfig )
        this.setState({russianGifts:giftsData.data})
        console.log(this.state.russianGifts)
    }
    catch(error){
        console.log(error)
    }
}
async getBooksInfo(){
    try{
        let booksData= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books`)
        this.setState({russianBooks:booksData.data})
        console.log(this.state.russianBooks)
    }
    catch(error){
        console.log(error)
    }
}
async getSubscribe(){
    try{
        let subscribeData= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/subscribe`)
        this.setState({subscribe:subscribeData.data})
        console.log(this.state.subscribe)
    }
    catch(error){
        console.log(error)
    }
}
async getRequests(){
    try{
        let requestsData= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/requests`)
        this.setState({requests:requestsData.data})
        console.log(this.state.requests)
    }
    catch(error){
        console.log(error)
    }
}

//   async remove(id) {
//     await fetch(`/niecey_api/v1/employees/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then(() => {
//       let updatedEmployees = [...this.state.employees].filter(i => i.id !== id);
//       this.setState({employees: updatedEmployees});
//     });
//   }

  render() {
      return(<div>

      </div>)
//     const {employees, isLoading} = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     const employeeList = employees.map(employee => {
//       return <tr key={employee.id}>
//         <td style={{whiteSpace: 'nowrap'}}>{employee.firstName}</td>
//         <td>{employee.lastName}</td>
//         <td>{employee.email}</td>
//         <td>
//           <ButtonGroup>
//             <Button size="sm" color="primary" tag={Link} to={"/employee/" + employee.id}>Edit</Button>
//             <Button size="sm" color="danger" onClick={() => this.remove(employee.id)}>Delete</Button>
//           </ButtonGroup>
//         </td>
//       </tr>
//     });

//     return (
//       <div>
//         <AppNavbar/>
//         <Container fluid>
//           <div className="float-right">
//             <Button color="success" tag={Link} to="/employee/new">Add Group</Button>
//           </div>
//           <h3>My Employees List</h3>
//           <Table className="mt-4">
//             <thead>
//             <tr>
//               <th width="20%">First Name</th>
//               <th width="20%">Last Name</th>
//               <th>Email</th>
//               <th width="10%">Actions</th>
//             </tr>
//             </thead>
//             <tbody>
//             {employeeList}
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//     );
//   }
// }
}
}

export default AdminsPage;


