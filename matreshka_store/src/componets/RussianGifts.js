import React from "react";
import axios from "axios";
import { Container} from 'reactstrap';



class RussianGifts extends React.Component{
    constructor(props){
        super(props);
            this.state={
                russianGiftList:[]
            }
        }
        componentDidMount(){
        this.getGifts();
        }
        
        async getGifts(){
 
            try{
                let gifts= await axios.get(`/book_store/v1/gifts`)
                this.setState({russianGiftList:gifts.data})
            }
            catch(error){
                console.log(error)
            }
        }
  
        checkIfExist(){ 
            if(this.state.russianGiftList===undefined){}
            else{
                let gifts=this.state.russianGiftList.map(res=> {
                    return (
                        <div className="">
                             <h2 className="">Name: {res.giftName}</h2> 
                             <p className=""><span class="">Description: </span>{res.giftDescription}</p>
                             <p className=""><span class="">Price: </span>${res.giftPrice}</p>
                             <p className=""><span class="">Buy at: </span><a href={res.giftWebsite}>Direct website</a></p>
                            <img className="" src={res.giftPicture} alt="gift image" />
                            </div>
                )})
                return Gifts;
            }
           
        }
        
        render(){
            return(
               <Container>
                    {this.checkIfExist()}   
               </Container>
            )
        }
    }

export default RussianGifts;