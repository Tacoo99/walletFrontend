import Cookies from 'universal-cookie';

const cookies = new Cookies();

var UserProfile = (function() {
    var full_name = "";
  
    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };

    var getCookie = function() {
      return cookies.get('loggedUser');
    }
  
    var setName = function(name) {
      full_name = name;
      
      cookies.set('loggedUser', name, { path: '/' });
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName,
      getCookie : getCookie
    }
  
  })();
  
  export default UserProfile;