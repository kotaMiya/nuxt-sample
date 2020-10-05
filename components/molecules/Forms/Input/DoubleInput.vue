<template>
	<div class="double-input_container">
		<label class="double-input_label">
			{{ labelTxt }}
			<div class="double-input_input">
				<base-input
					type="text"
					:placeholder="firstPlace"
					:inputName="firstName"
				/>
				<base-input
					type="text"
					:placeholder="secondPlace"
					:inputName="secondName"
				/>
			</div>
		</label>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseInput from "@/components/atoms/Input/BaseInput.vue";

export default Vue.extend({
	name: "DoubleInput",
	components: {
		BaseInput,
	},
	props: {
		labelTxt: {
			type: String,
			required: true,
		},
		firstPlace: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		secondPlace: {
			type: String,
			required: true,
		},
		secondName: {
			type: String,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.double-input_container {
	display: flex;
}
.double-input_label {
	background-color: #f5f5f5;
}

.double-input_input {
	float: right;
	margin-left: 40px;
}
</style>
