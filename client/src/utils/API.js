import axios from "axios";


export default {
  search: function(query) {
    console.log(query.author);
    let searchParams = "q=dickens+inauthor:keyes&key=";
    
    return axios.get("/api/search",{ params: { q: searchParams }});
    
  }
};

