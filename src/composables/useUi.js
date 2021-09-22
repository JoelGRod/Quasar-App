import { useStore } from "vuex";
import { computed } from "vue";

const useUi = () => {

    const store = useStore();

    return {
        // Side Menu Options
        isSidenavOpen: computed( 
            () => store.getters['ui/getIsSidenavOpen'] 
        ),
        toggleSidenavOpen() {
            store.commit('ui/toggleSideMenu')
        },
    }
}

export default useUi