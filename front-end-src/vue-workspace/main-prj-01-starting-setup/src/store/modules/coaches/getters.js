export default {
    coaches(state){
        console.log('Getter coaches');
        return state.coaches;
    },

    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    },
};