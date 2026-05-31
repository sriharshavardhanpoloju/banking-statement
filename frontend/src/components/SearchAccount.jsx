import {useState} from "react";

function SearchAccount(){

const [search,setSearch]=
useState("");

return(

<div>

<input

placeholder="Search"

onChange={(e)=>
setSearch(e.target.value)}

 />

<p>{search}</p>

</div>

)

}

export default SearchAccount;