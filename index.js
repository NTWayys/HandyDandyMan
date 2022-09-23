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

document.getElementById("submit-btn").addEventListener("click", function () {
  const userEmailPhone = document.getElementById("user-email").value;
  if (userEmailPhone) {
    console.log("click");

    // emailjs
    //   .send("service_evc9c99", "template_75fwo6f", {
    //     from_name: userEmailPhone,
    //   })
    //   .then(
    //     function (response) {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     function (error) {
    //       console.log("FAILED...", error);
    //     }
    //   );
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("submited-text").style.display = "block";
  }
});
