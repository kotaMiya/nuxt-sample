import { storiesOf } from "@storybook/vue";
import SeminarCardList from "@/components/organisms/Seminar/SeminarCardList.vue";

storiesOf("organisms/seminar", module).add("seminar card list", () => ({
	components: { SeminarCardList },
	data() {
		return {
			seminars: [
				{
					id: 1,
					title:
						"【ITエンジニア採用セミナー】メスライオン × レバックマ 採用成功のための『人事とエンジニアで創る面接』を一挙大公開",
					place: "東京都",
					date: "2020/8/14",
					graduate: "2020年卒",
					capacity: 10,
				},
				{
					id: 2,
					title:
						"【ITエンジニア採用セミナー】メスライオン × レバックマ 採用成功のための『人事とエンジニアで創る面接』を一挙大公開",
					place: "東京都",
					date: "2020/8/14",
					graduate: "2020年卒",
					capacity: 10,
				},
				{
					id: 3,
					title:
						"【ITエンジニア採用セミナー】メスライオン × レバックマ 採用成功のための『人事とエンジニアで創る面接』を一挙大公開",
					place: "東京都",
					date: "2020/8/14",
					graduate: "2020年卒",
					capacity: 10,
				},
				{
					id: 4,
					title:
						"【ITエンジニア採用セミナー】メスライオン × レバックマ 採用成功のための『人事とエンジニアで創る面接』を一挙大公開",
					place: "東京都",
					date: "2020/8/14",
					graduate: "2020年卒",
					capacity: 10,
				},
				{
					id: 5,
					title:
						"【ITエンジニア採用セミナー】メスライオン × レバックマ 採用成功のための『人事とエンジニアで創る面接』を一挙大公開",
					place: "東京都",
					date: "2020/8/14",
					graduate: "2020年卒",
					capacity: 10,
				},
			],
		};
	},
	template: `
    <div>
      <seminar-card-list :seminars="seminars" />
    </div> 
  `,
}));
