import React from 'react';

const SidebarMenu = () => {
  return (
   
    
      <body>
        <h1>Sidebar Menu</h1>
        <aside className="sidebar-container">
          <div className="toggle">
            <span className="lines"></span>
            <span className="lines"></span>
            <span className="lines"></span>
          </div>
          <div className="profile-and-links">
            PROFILE
            <div className="profile-card">
              <span className="title"><span>Code</span>Bustler</span>
              <span className="subtitle">All About Coding</span>
            </div>
            MENU LIST
            <ul className="links-list">
              <li className="links">
                <a href=""><i className="fa-solid fa-house"></i>Home</a>
              </li>
              <li className="links">
                <a href=""><i className="fa-solid fa-newspaper"></i>Articles</a>
              </li>
              <li className="links">
                <a href=""><i className="fa-solid fa-bookmark"></i>Bookmarks</a>
              </li>
              <li className="links">
                <a href=""><i className="fa-solid fa-download"></i>Downloads</a>
              </li>
              <li className="links">
                <a href=""><i className="fa-solid fa-address-card"></i>About</a>
              </li>
              <li className="links">
                <a href=""><i className="fa-solid fa-envelope"></i>Contact</a>
              </li>
              <li className="links">
                <a href=""><i className="fa-solid fa-gear"></i>Settings</a>
              </li>
            </ul>
          </div>
          <div className="social-and-signout">
            SOCIAL MEDIA
            <div className="social-media-icons">
              <a href="https://www.instagram.com/codebustler"
                ><i className="fa-brands fa-instagram"></i
              ></a>
              <a href="https://www.youtube.com/@codebustler"
                ><i className="fa-brands fa-youtube"></i
              ></a>
              <a href="https://www.twitter.com/codebustler"
                ><i className="fa-brands fa-twitter"></i
              ></a>
            </div>
            SIGN OUT
            <div className="signout">
              <a href=""><i className="fa-solid fa-right-from-bracket"></i>Sign Out</a>
            </div>
          </div>
        </aside>
        <footer>
          <a href="https://www.instagram.com/codebustler">By CodeBustler</a>
        </footer>
        <script src="script.js"></script>
      </body>
    
  );
};

export default SidebarMenu;
