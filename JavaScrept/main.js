const userToken = localStorage.getItem("userToken");

if (!userToken) {
  window.open("./login.html", "_parent");
}

// hello test again
