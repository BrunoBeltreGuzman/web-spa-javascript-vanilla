# Requests Ajax HTTP ReactJS

Example about application web Single-page application (spa) with Javascript Vanilla.

**Advantage**

```
- No nodejs
- No Dependencies
- No libs
- Any Server
- Use XMLHttpRequest
```

**Router:**

```javascript
function goToRoute(htmlName) {
       let url = "path/" + htmlName;
       xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
              if (this.readyState === 4 && this.status === 200) {
                     scope.rootElem.innerHTML = this.responseText;
              }
       };
       xhttp.open("GET", url, true);
       xhttp.send();
}
```

**Libs:**

```javascript
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
```

**Screenshot:**

![Image](https://github.com/BrunoBeltreGuzman/web-spa-javascript-vanilla/blob/master/screenshot/Captura%20de%20pantalla_2021-03-21_10-35-24.png)

![Image](https://github.com/BrunoBeltreGuzman/web-spa-javascript-vanilla/blob/master/screenshot/Captura%20de%20pantalla_2021-03-21_10-35-53.png)

![Image](https://github.com/BrunoBeltreGuzman/web-spa-javascript-vanilla/blob/master/screenshot/Captura%20de%20pantalla_2021-03-21_10-36-11.png)
