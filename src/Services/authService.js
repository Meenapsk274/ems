// import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

// const apiEndpoint = apiUrl + "/auth";
// const tokenKey = "token";

// export async function checkUser(email, password) {
//   const { data: jwt } = await http.post(apiEndpoint, { email, password });
//   localStorage.setItem(tokenKey, jwt);
// }

export async function checkUser(user) {
  return http.post(`${apiUrl}login.php`, {
    email: user.email,
    password: user.password,
  });
}
export async function sendEmail(user) {
  return http.post(`${apiUrl}check_email.php`, {
    email: user.email,
  });
}
export async function checkEmailAlreadyExist(user) {
  return http.post(`${apiUrl}validation.php`, {
    email: user,
  });
}
export async function checkUsernameAlreadyExist(user) {
  return http.post(`${apiUrl}user_name_validation.php`, {
    username: user,
  });
}
export async function savePassword(user) {
  return http.post(`${apiUrl}reset_password.php`, {
    id: user.id,
    password: user.password,
  });
}
export async function changePassword(user) {
  return http.post(`${apiUrl}change_password.php`, {

    old_password: user.old_password,
    password: user.password,
    userid: user.userid,
  });
}
export async function sendSubscriberEmail(user) {
  return http.post(`${apiUrl}subscribe.php`, {
    email: user.email,
  });
}

// export function getCurrentUser() {
//   try {
//     const jwt = localStorage.getItem(tokenKey);
//     return jwtDecode(jwt);
//   } catch (ex) {
//     return null;
//   }
// }

// export function logout() {
//   localStorage.removeItem(tokenKey);
// }
export function saveUser(user) {
  // console.log("User services log:", data);
  return http.post(`${apiUrl}register.php`, {
    
    alternateNo: user.alternateNo,
    contactNo: user.contactNo,
    bloodGroup: user.bloodGroup,
    country: user.country,
    state: user.state,
    city: user.city,
    dateOfBirth: user.dateOfBirth,
    dateOfBaiyath: user.dateOfBaiyath,
    email: user.email,
    fatherName: user.fatherName,
    gender: user.gender,
    name: user.name,
    password: user.password,
    permanentAddress: user.permanentAddress,
    presentAddress: user.presentAddress,
    ug: user.ug,
    pg: user.pg,
    qualification: user.qualification,
    yaseeni: user.yaseeni,
    username: user.username,
  });
}
export function editUser(user) {
  // console.log("User services log:", data);
  return http.post(`${apiUrl}edit_user.php`, {
    userid: user.userid,
    alternateNo: user.alternateNo,
    contactNo: user.contactNo,
    bloodGroup: user.bloodGroup,
    country: user.country,
    state: user.state,
    city: user.city,
    dateOfBirth: user.dateOfBirth,
    dateOfBaiyath: user.dateOfBaiyath,
    fatherName: user.fatherName,
    gender: user.gender,
    permanentAddress: user.permanentAddress,
    presentAddress: user.presentAddress,
    ug: user.ug,
    pg: user.pg,
    qualification: user.qualification,
    yaseeni: user.yaseeni,
  });
}

// export default {
//   // login,
//   // getCurrentUser,
//   // logout,
// };
