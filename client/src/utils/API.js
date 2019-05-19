import axios from "axios";


export default {

  setQuery: function (s) {
    let searchParams="";
    if ( s.isbn){
     searchParams += "+intitle:" + s.isbn;
      console.log("You are looking by  4");
    } if( s.publisher){
      searchParams += "+intitle:" + s.publisher;
      console.log("You are looking by  3");
    }  if( s.bookTitle ){
      searchParams += "+intitle:" + s.bookTitle;
      console.log("You are looking by  2");
    }  if(s.author ){
      searchParams += "+intitle:" + s.author;
      console.log("You are looking by  1");
    }
    let searchValue = "q=" + searchParams + "&key=";
      console.log(searchValue);
      return axios.get("/api/search",{ params: { q: searchValue }});
  },
  search: function(query) {
    console.log("I am line 6 of API.js");
      let searchValue = "q=" + query + "&key=";
      console.log(searchValue);
      return axios.get("/api/search",{ params: { q: searchValue }});
       
  }
};

