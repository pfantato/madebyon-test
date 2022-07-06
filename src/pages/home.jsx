import * as React from "react";
import "./homeStyles.css";
import { byRegister, byName } from "../utils/filters";

export default function Home() {
	const [myData, setMyData] = React.useState([]);
  const [filterName, setFilterName] = React.useState("");
  
	const getData = async () => {
		const res = await fetch("https://randomuser.me/api?results=100&nat=us,dk,fr,gb,br");
		const data = await res.json();
		return data;
	};
  
  React.useEffect(async () => {
    const { info, results: data } = await getData();
    if(info && data) {
      const results = data.filter(byRegister);
      // setMyData({ info, results, filtered: results })
    }
  }, []);
  
  React.useEffect(() => {
    setMyData(filterUsers());
  }, [filterName, myData.results])
  
  const updateFilter = (event) => setFilterName(event.target.value);
  
  const filterUsers = React.useCallback(() => {
    if(!filterName) return Object.assign({}, myData, { filtered: myData.results })
    
    const filtered = myData.results.filter(user => byName(user, filterName));
    
    return Object.assign({}, myData, { filtered })
  }, [filterName, myData.results])
  
  return (
    <>
      <ul className="list">
        {myData?.filtered?.map(user => 
          <li>
            <figure>
              <img src={user.picture.thumbnail || "https://bulma.io/images/placeholders/64x64.png"} />
            </figure>
            <p><span>{`${user.first}, ${user.last}`}</span></p>
          </li>
        )}
      </ul>
      <div>
        <p>Filter users by name:</p>
        
        <input 
          type="text" 
          onChange={updateFilter} 
        />
      </div>
    </>
  );
}
