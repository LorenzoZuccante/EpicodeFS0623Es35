
const MyFooter = () => {
    return(
        
        <footer class="bg-dark text-light pb-3">
            <div class="container d-flex justify-content-center">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-youtube"></i>
            </div>
            <div class="d-flex justify-content-center">
                <ul>
                    <li> <a href="#">Audio and Subtitles</a></li>
                    <li><a href="#">Audio Description</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Gift Cards</a></li>
                </ul>
            </div>
            <div class="container d-flex justify-content-center">
                <ul>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">terms of Use</a></li>
                </ul>
            </div>
            <div class="container d-flex justify-content-center">
                <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Legal Notices</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                    <li><a href="#">Corporate Information</a></li>
                </ul>
            </div>
            <div class="d-flex justify-content-center">
                <button class="bg-dark" id="btn-footer">Service Code</button>
                <p id="pFooter">&copy; 1997-2019 Netflix, Inc.</p>
            </div>
        </footer>
    )
}

export default MyFooter