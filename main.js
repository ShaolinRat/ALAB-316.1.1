// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];
  
  const mainEl = document.getElementsByTagName("main")[0];
  mainEl.style.backgroundColor = "grey";
  
  const mainElHeader = document.createElement("h1");
  mainElHeader.innerHTML = "DOM Manipulation";
  
  mainEl.appendChild(mainElHeader);
  mainEl.classList.add("flex-ctr");
  
  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  for (let i = 0; i < menuLinks.length; i++) {
    const aEl = document.createElement("a");
    aEl.setAttribute("href", menuLinks[i].href);
    aEl.textContent = menuLinks[i].text;
    topMenuEl.appendChild(aEl);
  }