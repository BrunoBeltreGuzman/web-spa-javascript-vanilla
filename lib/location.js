function getLocation() {
       console.log(window.location.href);
       const page = window.location.href;
       let tempage = "";
       let boo = false;
       let thepage = "";
       for (let i = 0; i < page.length; i++) {
              const element = page[i];
              if (element === "#" || boo == true) {
                     tempage = thepage;
                     thepage = tempage + element;
                     boo = true;
              }
       }
       console.log("page: " + thepage);
       return thepage;
}

function verifyPage() {
       const page = getLocation();
       console.log(page);
}

//verifyPage();
