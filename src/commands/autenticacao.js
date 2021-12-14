export default {
  token(to, from, next) {
    let login = JSON.parse(localStorage.getItem("login"));
    const token = login["token"];
    if (!token) {
      next("/Login");
    }
    next();
  }
};
