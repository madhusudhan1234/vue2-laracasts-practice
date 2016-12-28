Vue.component('message', {

	props: ['title', 'body'],

	data() {
		return {
			isVisible : true 
		};
	},

	template: `

		<article class="message">

		  <div class="message-header">

		    {{ title}}

		    <button type="button" v-on:click="isVisible = !isVisible">X</button>

		  </div>

		  <div class="message-body" v-show="isVisible">
		    {{ body }}
		  </div>

		</article>
	`,

});


new Vue({
	el: '#root'
});