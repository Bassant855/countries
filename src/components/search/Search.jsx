import './search.css'

const Search = ({valueSearch, getInputValue, getSelectValue}) => {
  return (
    <div className='serch-filter container'>
        <div className="search">
            <input type="search" placeholder='Search for a country...' 
            value={valueSearch} 
            onChange={getInputValue} />
        </div>
        <div className="filter">
            <select defaultValue="no" name="filter" id="" onChange={getSelectValue}>
                <option value="no" disabled >Filter by Region</option>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Aisa">Aisa</option>
                <option value="Europ">Europ</option>
                <option value="Oceania">Oceania</option>
            </select>

        </div>
    </div>
  )
}

export default Search