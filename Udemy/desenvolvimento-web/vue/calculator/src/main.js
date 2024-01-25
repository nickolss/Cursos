import Vue from 'vue';
import App from './App';

new Vue({
  render: element => element(App)

  /*render(createElement){
    return createElement(App)
  }
  */

  //Uma outra forma de fazer é: 
  /*
    el: "#app",
    render(createElement){
      return createElement(App)
    }
  */
}).$mount("#app")
