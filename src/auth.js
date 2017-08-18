import Api from './api';

class auth {

  login(email, pass) {
    if (localStorage.token) {
      throw new Error('Already logged in')
    }
    else {
      return Api.requestLogin(email, pass)
      .then(res => {
		  console.log(res, 'this is it')
		  localStorage.token = res.body.token;
		  return true;
	  })
	  .catch(err => {
		  return false;
	  })
    }
  }

  getToken() {
    return localStorage.token
  }

  logout() {
    return Api.deleteSession(localStorage.token)
    .then(res => delete localStorage.token)
  }

  isLoggedIn() {
	return !!localStorage.token
  }

}

export default new auth();
