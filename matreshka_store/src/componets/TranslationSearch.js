import React from "react";
import axios from "axios";
import "../styles/NYTimesPage.scss"

 let translation="";

function TranslationSearch(props){
        const key=process.env.REACT_APP_TRANSLATION_API_KEY;
       
         axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${props.language}&text=${props.text}&key=${key}`)
           .then(res=>{ 
               translation=res.data.text;
           })
           .catch(error=>{
            console.log(error);
        })

        return <div>{translation}</div>
    }

export default TranslationSearch;
