import '@mdi/font/css/materialdesignicons.min.css';
import '../src/styles/index.scss';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
