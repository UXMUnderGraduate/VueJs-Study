// 각 속성들은 더 쉽게 사용하는 방법 - Helper
// mutations : state 값을 변경하는 이벤트 로직/메서드
// state : 여러 컴포넌트에 공유되는 데이터
//getters : 연산된 state 값에 접근하는 속성
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);

const storage = {
	fetch() {
		const arr = [];
		if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
		return arr;
	}
}

export const store = new Vuex.Store({
	state: {
		todoItems: storage.fetch()
	},
	getters: getters,
	mutations: mutations
});