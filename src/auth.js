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
		  localStorage.user = res.body.user
		  localStorage.language = res.body.language
		  return true;
	  })
	  .catch(err => {
		  return Promise.reject({errors: "Username or password is incorrect"});
	  })
    }
  }

  getToken() {
    return localStorage.token
  }

  logout() {
    return Api.deleteSession(localStorage.token)
    .then(res => {
		delete localStorage.token
		delete localStorage.user
	})
  }

  isLoggedIn() {
	return !!localStorage.token
  }

}

export default new auth();
