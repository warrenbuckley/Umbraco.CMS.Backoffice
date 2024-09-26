import { UMB_DOCUMENT_TYPE_FOLDER_ENTITY_TYPE } from '../../../entity.js';
import { UMB_DOCUMENT_TYPE_FOLDER_WORKSPACE_ALIAS } from './constants.js';

export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'workspace',
		kind: 'routable',
		alias: UMB_DOCUMENT_TYPE_FOLDER_WORKSPACE_ALIAS,
		name: 'Document Type Folder Workspace',
		api: () => import('./document-type-folder-workspace.context.js'),
		meta: {
			entityType: UMB_DOCUMENT_TYPE_FOLDER_ENTITY_TYPE,
		},
	},
];
