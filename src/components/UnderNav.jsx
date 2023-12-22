import Container from 'react-bootstrap/Container';


const UnderNav = () => {
    return(
        <div className='w-100 d-flex justify-content-between bg-dark'>
            <div className='d-flex'>
                <h1 className='text-light'>TV Shows</h1>
                <select className='bg-dark text-light' name="Genres" id="selectGenres">
                <option value="0">Genres</option>
                    <option value="1">Horror</option>
                    <option value="2">Thriller</option>
                    <option value="3">Drama</option>
                </select>
            </div>
            <div>
            <i class="bi bi-grid"></i>
            <i class="bi bi-grid-3x3"></i>
            </div>
        </div>
    )
}

export default UnderNav