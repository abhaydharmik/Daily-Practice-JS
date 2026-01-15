// TASK 7: Debugging Task (Nested Objects)
// Buggy Code
// let user = { profile: { name: "Abhay" } };
// console.log(user.profile.age.toString());

let user = { profile: { name: "Abhay" } };
if (user.profile.age !== undefined) {
  console.log(user.profile.age.toString());
}
