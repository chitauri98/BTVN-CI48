const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); //không cho load lại trang

  //Lưu dữ liệu người dùng nhập vào 1 object
  const data = {
    firstName: registerForm.firstName.value,
    lastName: registerForm.lastName.value,
    email: registerForm.email.value,
    phoneNumber: registerForm.phoneNumber.value,
    password: registerForm.password.value,
    confirmPassword: registerForm.confirmPassword.value,
  };
  // In ra dữ liệu người dùng nhập vào
  console.log("Bạn vừa thêm 1 user :");
  console.log(data);
  console.log("Để in ra các users : readData(); ");
  console.log("Để update SDT về đầu 84 : updatePhoneNumber(); ");
  console.log("Để xoá các lastName giống nhau : deleteLastNameSame(); ");

  //Tạo User
  function addData(data) {
    firebase.firestore().collection("Users").add({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  }
  addData(data);
});

//In ra cac User
async function readData() {
  let result = await firebase.firestore().collection("Users").get();
  for (let doc of result.docs) {
    console.log(doc.data());
  }
}
//   readData();

//Update tất cả 2 số đầu của phoneNumber = +84
async function updatePhoneNumber() {
  let result = await firebase.firestore().collection("Users").get();
  for (let doc of result.docs) {
    let temp = "84" + doc.data().phoneNumber.slice(2);
    await firebase.firestore().collection("Users").doc(doc.id).update({
      phoneNumber: temp,
    });
  }
}
// updatePhoneNumber();

//Xoa lastName giong nhau
async function deleteLastNameSame(name) {
  let result = await firebase
    .firestore()
    .collection("Users")
    .where("lastName", "==", name)
    .get();
  for (let doc of result.docs) {
    await firebase.firestore().collection("Users").doc(doc.id).delete();
  }
}
//   deleteLastNameSame(); //Biến nhập vào nhớ để trong dấu '' =)))) 
