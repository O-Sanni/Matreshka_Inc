import React from "react";
import axios from "axios";
import {ListGroup, ListGroupItem, Badge} from 'reactstrap';

class BookSearch extends React.Component{
constructor(props){
super(props);
    this.state={
        bookList:[],
        search: false
    }
}

componentDidMount(){
this.getBooks();
}

async getBooks(){
    const key=process.env.REACT_APP_API_KEY_BOOKS_NYT;
    try{
        let booksData= await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${this.props.typeSearch}.json?api-key=${key}`)
        this.setState({bookList:booksData.data})
        console.log(this.state.bookList);
    }
    catch(error){
        console.log(error)
    }
}
// checkIfExist(){ 
//     if(this.state.foodList!=undefined){console.log(this.state.foodLists)}
//     else{
//         let recipes=this.state.foodLists.map(res=> {
//             let cations=res.recipe.cautions.map(res=>{return <p>{res}</p>})
//             let dietLabels=res.recipe.dietLabels.map(res=>{return <p>{res}</p>})
//             let digest=res.recipe.digest.map(res=>{return <div><p className="p-search-result">Label: {res.label} Total: {Math.round(res.total)}</p>
//             </div>})
//             let healthLabels=res.recipe.healthLabels.map(res=>{return <p className="p-search-result">{res}</p>})
//             let ingredients=res.recipe.ingredients.map(res=>{return <p className="p-search-result">{res.text}, weight: {Math.round(res.weight)}</p>})
            
//             return (
//                 <div className="recipe-search-output-div-class">
//                      <h2 className="recipe-search-output-class-h2">Name: {res.recipe.label}</h2> 
//                      <p className="recipe-search-output-class-p"><span class="span-recipe">Calories: </span>{Math.round(res.recipe.calories)}</p>
//                     <p className="recipe-search-output-class-p"><span class="span-recipe">Cautions: </span>{cations}</p>
//                      <p className="recipe-search-output-class-p"><span class="span-recipe">Total time: </span>{res.recipe.totalTime}</p>
//                     <p className="recipe-search-output-class-p"><span class="span-recipe">Total Weight: </span> {res.recipe.totalWeight}</p>
//                     <img className="dish-img-search" src={res.recipe.image} alt="dish image"/>
//                     <div>
//                     <div>
//                     <p className="p-search-result">Diet Labels: </p>
//                         {dietLabels}
//                     </div>
//                      <div>
//                      <p className="p-search-result">Health Labels: </p>
//                          {healthLabels}
//                     </div>
//                     <div>
//                     <p className="p-search-result">List  of Ingredients: </p>
//                         {ingredients}
//                      </div>
//                     <p className="p-search-result">Total Nutrients: </p>
//                           {digest}
//                      </div>
                    
                  
//                  </div>)
//         })
//         return recipes;
//         }
// }
render(){
    return(
       <div>

       </div>
    )
}
}

export default BookSearch;






