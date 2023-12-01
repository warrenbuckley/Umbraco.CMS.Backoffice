import { UmbDocumentTypeItemModel } from './types.js';
import { UmbDocumentTypeItemServerDataSource } from './document-type-item.server.data.js';
import { UMB_DOCUMENT_TYPE_ITEM_STORE_CONTEXT } from './document-type-item.store.js';
import { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UmbItemRepositoryBase } from '@umbraco-cms/backoffice/repository';

export class UmbDocumentTypeItemRepository extends UmbItemRepositoryBase<UmbDocumentTypeItemModel> {
	constructor(host: UmbControllerHost) {
		super(host, UmbDocumentTypeItemServerDataSource, UMB_DOCUMENT_TYPE_ITEM_STORE_CONTEXT);
	}
}