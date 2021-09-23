import { useStore } from "vuex";
import { computed } from "vue";

const useUi = () => {

    const store = useStore();

    const toggleSidenavOpen = () => {
        store.commit('ui/toggleSideMenu')
    }

    return {
        // Side Menu Options
        // isSidenavOpen: computed( 
        //     () => store.getters['ui/getIsSidenavOpen'] 
        // ),
        isSidenavOpen: computed({
            get() {
                return store.getters['ui/getIsSidenavOpen'];
            },
            set( value ) {
                toggleSidenavOpen();
            }
        }),
        toggleSidenavOpen,
    }
}

export default useUi