import './navbar.css'

const Navbar = () => {
    const handleClick = () => {
        document.body.classList.toggle('dark')
        
    }
  return (
    <nav className='navbar container'>
        
        <h2 className='logo'>Where In The World?</h2>
        <button className='dark-mood' onClick={handleClick}>
         
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon"
             viewBox="0 0 512 512" width="25px">
                <path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" 
                className="path-color" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path></svg>
            <p>Dark Mood</p>
        </button>

    </nav>
  )
}

export default Navbar