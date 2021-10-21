import './component.css';

function Navbar(){
    return <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
    <a class="navbar-brand" href="#">BHM - IIT Delhi</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav navbar-nav-scroll mx-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
        <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hostel
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Aravali Hostel</a>
            <a class="dropdown-item" href="#">Girnar Hostel</a>
            <a class="dropdown-item" href="#">Jwalamukhi Hostel</a>
            <a class="dropdown-item" href="#">Karakoram Hostel</a>
            <a class="dropdown-item" href="#">Nilgiri Hostel</a>
            <a class="dropdown-item" href="#">Shivalik Hostel</a>
            <a class="dropdown-item" href="#">Satpura Hostel</a>
            <a class="dropdown-item" href="#">Udaigiri Hostel</a>
            <a class="dropdown-item" href="#">Vindhyachal Hostel</a>
            <a class="dropdown-item" href="#">Zanskar Hostel</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Kailash Hostel</a>
            <a class="dropdown-item" href="#">Himadri Hostel</a>
            <a class="dropdown-item" href="#">New Kailash Hostel</a>
          </div>
        </li>
        
        <li class="nav-item">
        <a class="nav-link" href="#">Notices</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Resources
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Resource 1</a>
            <a class="dropdown-item" href="#">Resource 2</a>
            <a class="dropdown-item" href="#">Resource 3</a>
            <a class="dropdown-item" href="#">Resource 4</a>
            <a class="dropdown-item" href="#">Resource 5</a>
            <a class="dropdown-item" href="#">Resource 6</a>
            <a class="dropdown-item" href="#">Resource 7</a>
          </div>
        </li>


        <li class="nav-item">
        <a class="nav-link" href="#">FAQs</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Important Links
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
            <a class="dropdown-item" href="#">Link 3</a>
            <a class="dropdown-item" href="#">Link 4</a>
            <a class="dropdown-item" href="#">Link 5</a>
          </div>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="#">Initiatives</a>
        </li>
      </ul>
      <form class="d-inline-flex">
        <button class="btn btn-outline" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" color="rgb(100,100,100)">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
      <input class="form-control" type="Search" placeholder="Search" aria-label="Search"></input>
      </form>
      </div>
      </div>
  </nav> 
}

export default Navbar 

