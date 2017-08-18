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
		  localStorage.token = res.body.token
	  })
    }
  }

  getToken() {
    return localStorage.token
  }

  logout() {
    return Api.requestLogout(localStorage.token)
    .then(res => delete localStorage.token)
  }

  isLoggedIn() {
	return !!localStorage.token
  }

}

export default new auth();
