import * as api from './ApiCall'
import * as mock from './dataMocked'

export const API = process.env.REACT_APP_ENVIRONMENT === 'mock' ? mock : api


