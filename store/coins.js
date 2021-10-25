import { interestedCoins } from 'static/interestedCoins';

export const state = () => ({
    coins: []
  })
  
export const mutations = {
    setCoins(state, coins){
        state.coins = coins;
    }
}

export const getters = {
    coinsArray: (state) => state.coins,
    getCoin: (state) => (symbol) => {
        return state.coins.find(c=> c.symbol === symbol)    
    }
}

export const actions = {
    async getCoins({commit}){
        const coins = await this.$axios.$get('https://api2.binance.com/api/v3/ticker/24hr');
        const coinsFilter = coins.filter(c => interestedCoins.includes(c.symbol));
        commit('setCoins', coinsFilter);        
    }
}