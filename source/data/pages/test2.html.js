export default ({ getImages }) => ({
	aboutContent: {
		heading: 'Yamaguchi Voice Control',
		image1: getImages('statuette', { alt: 'Статуэтка.' }),
		image2: getImages('phone', { alt: 'Телефон.' }),
		label: 'Окей Ямагучи',
		text: `<p>Вы&nbsp;pможете управлять программами массажа или самим креслом с&nbsp;pпомощью голосовых команд, приведённых ниже.
		Коснитесь кратковременно кнопки голосового управления, расположенной на&nbsp;pлевом подлокотнике, для запуска сеанса голосового управления.
		Произнесите одну из&nbsp;pдоступных команд</p>.
		<p>.Если произнесённая команда распознана, вы&nbsp;pуслышите ответ и&nbsp;pкресло приступит к&nbsp;pвыполнению запроса</p>.`
	},
	pageHeading: 'Тестовое 2'
});