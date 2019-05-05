import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key="
;

export default {
  search: function(query) {
    return alert("Searching" + query);
  }
};

