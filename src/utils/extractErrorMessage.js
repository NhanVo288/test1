import { t } from 'i18next';

const extractErrorMessage = (error) => error?.msg || error?.code || t('common_003');

export default extractErrorMessage;
