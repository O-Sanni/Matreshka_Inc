import React from "react";
import axios from "axios";
import { Container} from 'reactstrap';
import Navigation from "./Navigation";
import Translation from "./TranslationComponent";
import Footer from "./Footer";


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

//get gifts information
    async getGifts(){
        try{
            let giftsData= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/gifts`)
            // book_store/v1/gifts
            this.setState({russianGiftList:giftsData.data})
        }
        catch(error){
            console.log(error)
        }
    }

//if gift information is received and this.state.russianGiftList is not undefined the information will return to the page
    checkIfExist(){ 
        if(this.state.russianGiftList===undefined){}
        else{
            let gifts=this.state.russianGiftList.map(res=> {
                return (
                    <div className="russian-gifts-div-list">
                        <h3 className="title-russian-gifts">Name: {res.giftName}</h3> 
                        <p className="p-russian-gifts"><span class="span-russian-gifts">Description: </span>{res.giftDescription}</p>
                        <p className="p-russian-gifts"><span class="span-russian-gifts">Price: </span>${res.giftPrice}</p>
                        <p className="p-russian-gifts"><span class="span-russian-gifts">Order:</span> Contact us to place an order </p>
                        <img className="p-russian-gifts" src={res.giftPicture} alt="gift image" />
                    </div>
                )})
            return gifts;
        }  
    }
        
    render(){
        return(
                <div id="main-div-russian-gifts">
                    <Navigation />
                    <div id="second-div-russian-gifts">
                        <h1 id="russian-gifts-h1">Russian Gifts</h1>
                        <div id="russian-gifts-list">
                            {this.checkIfExist()} 
                        </div>
                        {/* <div className="russian-pages-translations-div">
                            <p className="p-translation">Translation</p>
                            <Translation />
                        </div> */}
                    </div> 
                    <div className="footer-div">
                        <Footer />       
                    </div>
               </div>
            )
        }
    }

export default RussianGifts;