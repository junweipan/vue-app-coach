export default {
    registerCoach(context, data){
        const coachData = {
            id: 'c1',
            firstName: data.first,
            lastName:data.last,
            description:data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        //call the 'registerCoach' methods in mutation
        context.commit('registerCoach', coachData);
    }
}