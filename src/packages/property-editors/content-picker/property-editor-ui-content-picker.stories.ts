import type { Meta, Story } from '@storybook/web-components';
import type { UmbPropertyEditorUIContentPickerElement } from './property-editor-ui-content-picker.element.js';
import { html } from '@umbraco-cms/backoffice/external/lit';

import './property-editor-ui-content-picker.element.js';

export default {
	title: 'Property Editor UIs/Content Picker',
	component: 'umb-property-editor-ui-content-picker',
	id: 'umb-property-editor-ui-content-picker',
} as Meta;

export const AAAOverview: Story<UmbPropertyEditorUIContentPickerElement> = () =>
	html`<umb-property-editor-ui-content-picker></umb-property-editor-ui-content-picker>`;
AAAOverview.storyName = 'Overview';
