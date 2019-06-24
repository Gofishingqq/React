import React from 'react';
import '@/components/homeSass/Search.scss';
const SearchBar = () => (
  <div className="SearchBar">
    <form className= "for">
      <input type = "text" placeholder="搜索您想要的东西" className= "text"/>
      <input type = "button" value="消息" className= "button"/>
    </form>
  </div>
)
export default SearchBar;