import { Profile, User } from './../models.d'
import { VuexModule, Module, getModule } from 'vuex-module-decorators'
import store from '@/store/index.ts'

@Module({
  namespaced: true,
  name: 'users',
  store
})

class UsersModule extends VuexModule {
  user: User | null = null
  profile: Profile | null = null
}

export default getModule(UsersModule)
