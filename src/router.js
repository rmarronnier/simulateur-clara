import Vue from 'vue'
import Router from 'vue-router'
import Address from './views/questions/Address.vue'
import Age from './views/questions/Age.vue'
import Allocation from './views/questions/Allocation.vue'
import ARE from './views/questions/ARE.vue'
import Category from './views/questions/Category.vue'
import Grade from './views/questions/Grade.vue'
import Inscription from './views/questions/Inscription.vue'
import Other from './views/questions/Other.vue'
import Results from './views/Results.vue'

Vue.use(Router)


export default new Router({

  routes: [
    {
      path: '/aides-possibles',
      name: 'results',
      component: Results
    },
  ]
})
