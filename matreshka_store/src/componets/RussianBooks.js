import React from "react";
import axios from "axios";

let books=[];

function TranslationSearch(props){

         axios.get(`/book_store/v1/books`)
           .then(res=>{ 
               translation=res.data.text;
           })
           .catch(error=>{
            console.log(error);
        })

        return <div>{translation}</div>
    }

export default TranslationSearch;