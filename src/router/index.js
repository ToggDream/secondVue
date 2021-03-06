import Vue from 'vue'
import Router from 'vue-router'
//top
import project from '@/components/topComponents/project.vue'
import scoreCharts from '@/components/topComponents/scoreCharts.vue'
import papers from '@/components/topComponents/papers.vue'
import interviewers from '@/components/topComponents/interviewers.vue'
import flexStudy from '@/components/topComponents/flexStudy'
import es6 from '@/components/topComponents/es6'
import componentSendData from '@/components/topComponents/componentSendData'
//project child
import model_1 from '@/components/leftComponents/model_1'
import model_2 from '@/components/leftComponents/model_2'

import count from '@/components/count'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/project',
      name: 'project',
      component: project,
      children:[
        {
          path:'/project/model_1',
          name:'model_1',
          component: model_1
        },
        {
          path:'/project/model_2',
          name:'model_2',
          component: model_2
        }
      ]
    },
    {
      path: '/scoreCharts',
      name: 'scoreCharts',
      component: scoreCharts
    },
    {
      path: '/papers',
      name: 'papers',
      component: papers
    },
    {
      path: '/interviewers',
      name: 'interviewers',
      component: interviewers,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/flexStudy',
      name: 'flexStudy',
      component: flexStudy,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/es6',
      name: 'es6',
      component: es6,
    },
    {
        path: '/componentSendData',
        name:'componentSendData' ,
        component:componentSendData
    },
   {
      path: '/count',
      name: 'count',
      component: count
   }
  ]
})
