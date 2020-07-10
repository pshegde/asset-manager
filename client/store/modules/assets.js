import { assets } from '../../utils/create-assets.js'
import { Observable } from 'rxjs/Observable'
import Rx from 'rxjs/Rx'
import { formatDate } from '../../utils/utils.js'

// initial state
const state = () => ({
  assets: []
})

// getters
const getters = {
  assets(state) {
    return state.assets
  }
}

var createMock = (assets) => {
  const timeObservable = Rx.Observable.interval(1000)
  let mock = Observable.create((ob) => {
    const timeSubscriptionObj = timeObservable.subscribe(() => {
      Rx.Observable.from(assets)
        .map(val => {
          const randomPlusMinus = parseInt(Math.random() * 2) //get between 0 and 1
          const randomAmt = Math.random() //value bet 0 and 0.9
          val.price = randomPlusMinus >= 0.5 ? val.price + randomAmt : val.price - randomAmt
          val.lastUpdate = formatDate(new Date())
          return val
        })
        .subscribe(val => ob.next(val))
    })
    setTimeout(() => { alert("stop updating as ten mins have elapsed"); timeSubscriptionObj.unsubscribe(); }, 600000)
    return () => null
  })
  return mock
}

// actions
const actions = {
  async getAllAssets({ commit }) {
    //mock.subscribe(val => commit('setAssets', val))
    await commit('setAssets', assets)
    createMock(assets).subscribe();
  }
}

// mutations
const mutations = {
  async setAssets(state, assets) {
    // let ind = state.assets.findIndex(e => e.id == asset.id)
    // if (ind > -1) {
    //   state.assets[ind].lastUpdate = asset.lastUpdate
    //   state.assets[ind].price = asset.price
    // } else
    state.assets = assets
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}