import React from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input, ButtonGroup }  from 'reactstrap';

class AddOrUpdateRussianBooks extends React.Component{
  emptyBooks={bookName:"",
    bookEnglishName:"",
    bookAuthor:"",
    bookDescription:"",
    bookCategory:"",
    bookPrice:"",
    bookWebsite:"",
    bookPicture:""}

constructor(props){
super(props)
this.state={
    book:this.emptyBooks
}
this.handleChange=this.handleChange.bind(this);
this.submitButtonHandler=this.submitButtonHandler.bind(this);
}

async componentDidMount(){
    if(this.match.params.id!=="new"){
        
    }
}



handleChange(event){
    const value=event.target.value;
    const name=event.target.name;
    let item={...this.state.item};
    item[name]=value;
    this.setState({item});
    
}

async submitButtonHandler(event){
    event.preventDefault();
    axios.post('/book_store/v1/subscribe', {
        email: this.state.email,
        fullName: this.state.fullName,
        age: this.state.age
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({email:"", fullName: "", age:""})
    const {item}=this.state;
    if(this.state.put===true){ 
    await fetch(`/my_recipes_book/v1/users_recipes/${item.id}`,{
        method:'PUT',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
        });
        this.props.history.push('/users_recipes/');
    }
    else{
        await fetch(`/my_recipes_book/v1/users_recipes/`,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(item)
            });
            this.props.history.push('/users_recipes');

    }
}


render(){
    const {item}=this.state
    const updateOrAdd=<h1>{item.id? "Edit recipe":"Add new recipe"}</h1>;
    return(
        <Container id="main-div-search-page">
        {updateOrAdd}
            <Container id="search-page-form-div">
                <Form onSubmit={this.submitButtonHandler}>
                    <FormGroup id="form-inputs-div">
                    <FormGroup className="form-mini-divs">
                            <p className="update-recipe-display-p">Enter your user name</p>
                            <Input   type="text" name="userName" id="userName" value={item.userName || ""} onChange={this.handleChange} autoComplete="userName"/>
                        </FormGroup>
                        <FormGroup className="form-mini-divs">
                            <p className="update-recipe-display-p">Enter recipe name</p>
                            <Input   type="text" name="recipesName" id="recipesName" value={item.recipesName || ""} onChange={this.handleChange} autoComplete="recipesName"/>
                        </FormGroup>
                        <FormGroup className="form-mini-divs">
                            <p className="update-recipe-display-p">Enter receipt ingredients</p>
                            <textarea  name="recipesIngredients" value={item.recipesIngredients} onChange={this.handleChange} autoComplete="recipesIngredients" ></textarea>
                        </FormGroup>
                        <FormGroup className="form-mini-divs">
                        <p className="update-recipe-display-p">Enter receipt cooking process</p>
                            <textarea  name="recipesCooking" value={item.recipesCooking} onChange={this.handleChange} autoComplete="recipesCooking" ></textarea>
                            </FormGroup>
                        <FormGroup className="form-mini-divs">
                            <p className="update-recipe-display-p">Add dish picture url</p>
                            <Input   type="text" name="recipesPicture" value={item.recipesPicture || ""} onChange={this.handleChange} autoComplete="recipesPicture"/>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup id="form-buttons-divs">
                    <Button color="primary" class="btn btn-primary" type="submit">Save</Button>{' '}
                    <Button id="clear-button-search-page" type="button" onClick={()=>{this.setState({item: this.epmtyReceipts})}}>Clear</Button>
                    
                    <Button class="btn btn-secondary" tag={Link} to="/food_search_info">Exit</Button>
                        </FormGroup>
                </Form>
            </Container>  
            </Container>
        )
    }

}

export default AddRussianBooks;