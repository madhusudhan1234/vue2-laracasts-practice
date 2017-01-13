window.Event = new class {

	constructor() {
		this.Vue = new Vue();
	}

	fire(event, data=null) {
		this.Vue.$emit(event, data);
	}

	listen(event, callback) {
		this.Vue.$on(event, callback);
	}
}

Vue.component('coupon', {
	template: '<input placeholder="Enter Your Message" @blur="onCouponApplied">',

	methods: {
		onCouponApplied() {
			Event.fire('applied');
		}
	}
});
new Vue({
	el: '#root',

	data: {
		couponApplied: false
	},

	created() {
		Event.listen('applied', () => alert("Handling It"));
	}
})