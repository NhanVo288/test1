import { enUS as enUSAdapter, ja as jaJPAdapter, ko as koKRAdapter, vi as viVNAdapter, zhCN as zhCNAdapter } from 'date-fns/locale';
import merge from 'lodash/merge';

// core
import { enUS as enUSCore, jaJP as jaJPCore, koKR as koKRCore, viVN as viVNCore, zhCN as zhCNCore } from '@mui/material/locale';

// date-pickers
import { enUS as enUSDate, jaJP as jaJPDate, koKR as koKRDate, viVN as viVNDate, zhCN as zhCNDate } from '@mui/x-date-pickers/locales';

// data-grid
import { enUS as enUSDataGrid, jaJP as jaJPDataGrid, koKR as koKRDataGrid, viVN as viVNDataGrid, zhCN as zhCNDataGrid } from '@mui/x-data-grid';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: merge(enUSDate, enUSDataGrid, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:gb-nir',
  },
  {
    label: 'Korean',
    value: 'ko',
    systemValue: merge(koKRDate, koKRDataGrid, koKRCore),
    adapterLocale: koKRAdapter,
    icon: 'flagpack:kr',
  },
  {
    label: 'Japanese',
    value: 'ja',
    systemValue: merge(jaJPDate, jaJPDataGrid, jaJPCore),
    adapterLocale: jaJPAdapter,
    icon: 'flagpack:jp',
  },
  {
    label: 'Thai',
    value: 'th',
    systemValue: merge(enUSDate, enUSDataGrid, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:th',
  },
  {
    label: 'Chinese',
    value: 'zh',
    systemValue: merge(zhCNDate, zhCNDataGrid, zhCNCore),
    adapterLocale: zhCNAdapter,
    icon: 'flagpack:cn',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
    systemValue: merge(viVNDate, viVNDataGrid, viVNCore),
    adapterLocale: viVNAdapter,
    icon: 'flagpack:vn',
  },
];

export const defaultLang = allLangs[0]; // English
