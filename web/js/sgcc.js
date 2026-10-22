function setMenu(open)
{
  document.getElementById("navigation").classList.toggle("open", open);
  document.getElementById("menu").setAttribute("aria-expanded", open ? "true" : "false");
}

function toggleMenu()
{
  setMenu(!document.getElementById("navigation").classList.contains("open"));
}

document.addEventListener("keydown", function (event)
{
  if (event.key === "Escape")
  {
    setMenu(false);
  }
});

document.addEventListener("click", function (event)
{
  if (!event.target.closest("#header"))
  {
    setMenu(false);
  }
});

document.addEventListener("DOMContentLoaded", function ()
{
  document.getElementById("year").textContent = new Date().getFullYear();
});
