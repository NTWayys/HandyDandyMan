const listelements = document.getElementsByClassName("services-list-item");
const listelementsPic = document.getElementsByClassName(
  "handy-dandy-services-list-info"
);

const makeActive = (event) => {
  var current = document.getElementsByClassName("active");

  current[0].className = current[0].className.replace(" active", "");
  current[0].className = current[0].className.replace(" active", "");

  targetId = event.target.id;
  targetIdEles = document.getElementsByClassName(targetId);
  console.log(current);
  activate(targetIdEles);
};

const activate = (targetIdEles) => {
  for (item of targetIdEles) {
    item.classList.add("active");
  }
};
