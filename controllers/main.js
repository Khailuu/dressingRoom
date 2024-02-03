function getEle(id) {
  return document.getElementById(id);
}

let callData = new CallData();
let listItem = new ListChosen();

function renderNavPill(navPlillsList) {
  let contentNavPill = "";
  navPlillsList.forEach((v, i) => {
    let active = v.tabName === "tabTopClothes" ? "active" : "";
    contentNavPill += `
            <li class="nav-item">
                <a class="nav-link ${active}" data-toggle="pill" href="#${v.tabName}"> 
                    ${v.showName}
                </a>
            </li>
        `;
    return contentNavPill;
  });
  getEle("nav").innerHTML = contentNavPill;
}

function getTypeArr(type, tabPaneList) {
  // debugger
  let arr = [];
  tabPaneList.forEach((item) => {
    if (item.type === type) {
      arr.push(item);
    }
  });
  return arr;
}

function getElementTabPanes(arr) {
  let elementTabPanes = "";
  arr.forEach((v) => {
    elementTabPanes += `
            <div class="col-3">
                <div class="card text-center">
                    <img src="${v.imgSrc_jpg}" />
                    <h4><b>${v.name}</b></h4>
                    <button id="thuDo" onclick="tryClothes(event)" data-id="${v.id}" class="btn btn-success">Thử đồ</button>
                </div>
            </div>
        `;
  });
  return elementTabPanes;
  // getEle("tab").innerHTML = elementTabPanes;
}

const tryClothes = (e) => {
  // console.log(e);
  let id = e.target.getAttribute("data-id");
  let value = null;
  let promise = callData.getData();

  promise.then((res) => {
    res.data.tabPanes.forEach((v, i) => {
      if (v.id === id) {
        value = v;
      }
      return value;
    });
    let index = -1;
    listItem.listItem.forEach((v, i) => {
      if (v.type === value.type) {
        index = i;
      }
    });
    if (index === -1) {
      listItem.addItem(value);
    } else {
      listItem.listItem[index] = value;
    }
    renderContain(listItem.listItem);
    localStorage.setItem("list", JSON.stringify(listItem.listItem));
  });

  promise.catch((err) => {
    console.log(err);
  });
};

// data-name="${v.name}" data-type="${v.type}" data-desc="${v.desc}" data-imgJpg="${v.imgSrc_jpg}" data-imgPng="${v.imgSrc_png}"

// function tryClothes(event, id) {
//     let { name, type, desc, imgjpg, imgpng } = event.currentTarget.dataset;

// }

function renderTapPanes(tabName, arrTabPanes) {
  let arr = null;
  let element = null;
  switch (tabName) {
    case "tabTopClothes":
      arr = getTypeArr("topclothes", arrTabPanes);
      element = getElementTabPanes(arr);
      break;
    case "tabBotClothes":
      arr = getTypeArr("botclothes", arrTabPanes);
      element = getElementTabPanes(arr);
      break;
    case "tabShoes":
      arr = getTypeArr("shoes", arrTabPanes);
      element = getElementTabPanes(arr);
      break;
    case "tabHandBags":
      arr = getTypeArr("handbags", arrTabPanes);
      element = getElementTabPanes(arr);
      break;
    case "tabNecklaces":
      arr = getTypeArr("necklaces", arrTabPanes);
      element = getElementTabPanes(arr);
      break;
    case "tabHairStyle":
      arr = getTypeArr("hairstyle", arrTabPanes);
      element = getElementTabPanes(arr);
      break;
    case "tabBackground":
      arr = getTypeArr("background", arrTabPanes);
      element = getElementTabPanes(arr);
      break;
    default:
      break;
  }
  return element;
}

function renderContain(choseItems) {
  if (choseItems && choseItems.length > 0) {
    choseItems.forEach((v) => {
      switch (v.type) {
        case "topclothes":
          renderBikiniTop(v.imgSrc_png);
          break;
        case "botclothes":
          renderBikiniBot(v.imgSrc_png);
          break;
        case "shoes":
          renderShoe(v.imgSrc_png);
          break;
        case "handbags":
          renderhandbags(v.imgSrc_png);
          break;
        case "necklaces":
          rendernecklaces(v.imgSrc_png);
          break;
        case "hairstyle":
          renderhairstyle(v.imgSrc_png);
          break;
        case "background":
          renderbackground(v.imgSrc_png);
          break;
      }
    });
  }
}
function renderBikiniTop(img) {
  document.querySelector(".bikinitop").style.cssText = `
    width: 500px;
    height: 500px;
    background: url('${img}');
    position: absolute;
    top: -9%;
    left: -5%;
    transform: scale(0.5);
    z-index: 3;
`;
}

function renderBikiniBot(img) {
  document.querySelector(".bikinibottom").style.cssText = `
    width: 500px;
    height: 1000px;
    background: url('${img}');
    position: absolute;
    top: -30%;
    left: -5%;
    transform: scale(0.5);
    z-index: 2;
`;
}
function renderShoe(img) {
  document.querySelector(".feet").style.cssText = `
    width: 500px;
    height: 1000px;
    background: url('${img}');
    position: absolute;
    bottom: -40%;
    right: -3.5%;
    transform: scale(0.5);
    z-index: 1;
`;
}
function renderhandbags(img) {
  document.querySelector(".handbag").style.cssText = `
    width: 500px;
    height: 1000px;
    background: url('${img}');
    position: absolute;
    bottom: -39%;
    right: -3.5%;
    transform: scale(0.5);
    z-index: 2;
`;
}
function rendernecklaces(img) {
  document.querySelector(".necklace").style.cssText = `
    width: 500px;
    height: 1000px;
    background: url('${img}');
    position: absolute;
    bottom: -40%;
    right: -3.5%;
    transform: scale(0.5);
    z-index: 4;
`;
}
function renderhairstyle(img) {
  document.querySelector(".hairstyle").style.cssText = `
    width: 1000px;
    height: 1000px;
    background: url('${img}');
    position: absolute;
    top: -75%;
    right: -57%;
    transform: scale(0.15);
    z-index: 4;
`;
}
function renderbackground(img) {
  document.querySelector(".background").style.backgroundImage = `url('${img}')`;
}

// function renderAccessory(img, selector, width, height, position, transform, zIndex, top, right, bottom, left) {
//     const element = document.querySelector(selector);
//     if (element) {
//         element.style.cssText = `
//             width: ${width};
//             height: ${height};
//             background: url('${img}');
//             position: absolute;
//             ${position ? `position: ${position};` : ''}
//             ${top ? `top: ${top};` : ''}
//             ${right ? `right: ${right};` : ''}
//             ${bottom ? `bottom: ${bottom};` : ''}
//             ${left ? `left: ${left};` : ''}
//             ${transform ? `transform: ${transform};` : ''}
//             z-index: ${zIndex};
//         `;
//     }
// }

// function renderBikiniTop(img) {
//     renderAccessory(img, ".bikinitop", "500px", "500px", "absolute", "scale(0.5)", 3, "-9%", "-5%", null, null);
// }

// function renderBikiniBot(img) {
//     renderAccessory(img, ".bikinibottom", "500px", "1000px", "absolute", "scale(0.5)", 2, "-30%", "-5%", null, null);
// }

// function renderShoe(img) {
//     renderAccessory(img, ".feet", "500px", "1000px", "absolute", "scale(0.5)", 1, null, null, "-40%", "-3.5%");
// }

// function renderhandbags(img) {
//     renderAccessory(img, ".handbag", "500px", "1000px", "absolute", "scale(0.5)", 2, null, null, "-39%", "-3.5%");
// }

// function rendernecklaces(img) {
//     renderAccessory(img, ".necklace", "500px", "1000px", "absolute", "scale(0.5)", 4, null, null, "-40%", "-3.5%");
// }

// function renderhairstyle(img) {
//     renderAccessory(img, ".hairstyle", "1000px", "1000px", "absolute", "scale(0.15)", 4, "-75%", "-57%", null, null);
// }

function getDataList() {
  let promise = callData.getData();

  promise.then((res) => {
    renderNavPill(res.data.navPills);
    let contentTabPanes = "";

    res.data.navPills.forEach((v, i) => {
      let active = v.tabName === "tabTopClothes" ? "active" : "";
      contentTabPanes += `
           <div class="tab-pane container ${active}" id="${v.tabName}">
               <div class="row">
               ${renderTapPanes(v.tabName, res.data.tabPanes)}
               </div>
           </div>
          `;
    });
    getEle("tab").innerHTML = contentTabPanes;
  });

  promise.catch((err) => {
    console.log(err);
  });
}
getDataList();

function getLocalStorage() {
  let data = localStorage.getItem("list");
  let parseData = null;
  if (data) {
    parseData = JSON.parse(data);
    listItem.listItem = parseData;
  }
  renderContain(parseData);
}

getLocalStorage();
