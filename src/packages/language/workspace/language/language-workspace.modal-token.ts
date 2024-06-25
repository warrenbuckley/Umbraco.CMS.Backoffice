import type { UmbWorkspaceModalData, UmbWorkspaceModalValue } from '@umbraco-cms/backoffice/modal';
import { UmbModalToken } from '@umbraco-cms/backoffice/modal';
import type { UmbLanguageDetailModel } from '../../types.js';

export const UMB_LANGUAGE_WORKSPACE_MODAL = new UmbModalToken<
	UmbWorkspaceModalData<UmbLanguageDetailModel>,
	UmbWorkspaceModalValue
>('Umb.Modal.Workspace', {
	modal: {
		type: 'sidebar',
		size: 'large',
	},
	data: { entityType: 'language', preset: {} },
	// Recast the type, so the entityType data prop is not required:
}) as UmbModalToken<Omit<UmbWorkspaceModalData<UmbLanguageDetailModel>, 'entityType'>, UmbWorkspaceModalValue>;
