<template>
	<div>
		<form>
			<double-input
				labelTxt="氏名"
				firstPlace="姓"
				firstName="lastName"
				secondPlace="名"
				secondName="firstName"
			/>
			<double-input
				labelTxt="氏名かな"
				firstPlace="せい"
				firstName="lastNameKana"
				secondPlace="めい"
				secondName="firstNameKana"
			/>
			<triple-select labelTxt="生年月日" :items="birthdayCol" />
			<single-input
				labelTxt="電話番号"
				inputType="tel"
				inputName="phone"
				inputPlaceholder="例）08012345678 ※携帯電話のご入力を推奨"
			/>
			<single-input
				labelTxt="メールアドレス"
				inputType="email"
				inputName="email"
				inputPlaceholder="例）levtech-rookie@levtech.jp"
			/>
			<single-select labelTxt="お住まい" name="prefectures" :data="prefData" />
		</form>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import DoubleInput from "@/components/molecules/Forms/Input/DoubleInput.vue";
import SingleInput from "@/components/molecules/Forms/Input/SingleInput.vue";
import TripleSelect from "@/components/molecules/Forms/Select/TripleSelect.vue";
import SingleSelect from "@/components/molecules/Forms/Select/SingleSelect.vue";

type Birthday = {
	id: number;
	value: number;
};

export default Vue.extend({
	name: "EntryForm",
	components: {
		DoubleInput,
		SingleInput,
		TripleSelect,
		SingleSelect,
	},
	data() {
		return {
			birthdayCol: [
				{
					name: "years",
					options: [{ id: 1, value: 1920 }] as Birthday[],
				},
				{
					name: "months",
					options: [{ id: 1, value: 1 }] as Birthday[],
				},
				{
					name: "days",
					options: [{ id: 1, value: 1 }] as Birthday[],
				},
			],
		};
	},
	props: {
		prefData: {
			type: Array,
			required: true,
		},
	},
});
</script>
