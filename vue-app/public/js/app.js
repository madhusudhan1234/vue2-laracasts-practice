new Vue({
	el: '#app',

	data: {
		skills: [],
	},
	created() {
		axios.get('/skills')
		  .then(response => this.skills = response.data );
	}
});