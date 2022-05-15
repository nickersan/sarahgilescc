function isMobile()
{
    return navigator.userAgent.match(/Android|BlackBerry|iPad|iPod|iPhone|webOS/);
}

function initializeHeader()
{
  if (isMobile())
  {
    document.getElementById("content").className = "content-mobile";
    document.getElementById("header").className = "header-mobile";
    document.getElementById("header-image").className = "header-image-mobile";
    document.getElementById("navigation").className = "navigation-mobile";
    document.getElementById("menu").style.display = "inline";
    document.getElementById("section").className = "section-mobile";
  }
  else
  {
    document.getElementById("content").className = "content-browser";
    document.getElementById("header").className = "header-browser";
    document.getElementById("header-image").className = "header-image-browser";
    document.getElementById("navigation").className = "navigation-browser";
    document.getElementById("section").className = "section-browser";
  }
}

function toggleMenu()
{
  const navigation = document.getElementById("navigation");
  navigation.style.display = navigation.style.display === "block" ? "none" : "block";
}