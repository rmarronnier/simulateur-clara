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
import Questions from './views/Questions.vue'

Vue.use(Router)


export default new Router({

  routes: [
    {
      path: '/',
      redirect: '/questions/etes-vous-inscrit'
    },
    {
      path: '/questions',
      //redirect: '/etes-vous-inscrit',
      component: Questions, children: [
        {
          path: '/questions/votre-adresse',
          name: 'address',
          component: Address
        },
        {
          path: '/questions/votre-age',
          name: 'age',
          component: Age
        },
        {
          path: '/questions/votre-allocation',
          name: 'allocation',
          component: Allocation
        },
        {
          path: '/questions/montant-ARE',
          name: 'ARE',
          component: ARE
        },
        {
          path: '/questions/categorie',
          name: 'category',
          component: Category
        },
        {
          path: '/questions/votre-diplome',
          name: 'grade',
          component: Grade
        },
        {
          path: '/questions/etes-vous-inscrit',
          name: 'inscription',
          component: Inscription
        },
        {
          path: '/questions/autres-situations',
          name: 'other',
          component: Other
        },
      ]
    },
    {
      path: '/aides-possibles',
      name: 'results',
      component: Results
    },

  ]
})
