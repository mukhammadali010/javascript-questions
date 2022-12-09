const initialInput = prompt(
  "Parol kiritsh ichun oldin tasdiqlovchi so`zni kiriting !!!"
);

const keyUp = (e) => {
  if (e.key === "Escape" || initialInput === "") {
    alert("Canceled");
  }
};

const confirm = () => {
  if (initialInput === "") {
    return alert("Canceled");
  }
  if (initialInput !== "Admin") {
    alert("I don't know you ");
  }
  if (initialInput === "Admin") {
    let secondInput;
    var count = 5;
    const pass = "TheMaster";
    do {
      secondInput = prompt("Parolni kiriting (" + count + ")");
      count--;
    } while (pass !== secondInput && count !== 0);

    if (secondInput === pass) {
      return alert("Welcome !");
    }
    if (secondInput === "") {
      return alert("Canceled");
    }
    else {
      return alert("Wrong password");
    }
  }
};
confirm();
