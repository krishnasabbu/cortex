import { USE_LOCAL_API } from '@/variables'
import {
  Config,
  CopilotDetail,
  RemoteConfig,
  ChatboxAILicenseDetail,
  Settings,
  ModelProvider,
  ModelOptionGroup,
  Message,
} from '../../shared/types'
import { ofetch } from 'ofetch'
import { afetch, uploadFile } from './request'
import * as cache from './cache'
import { uniq } from 'lodash'
import platform from '@/platform'

// ========== API ORIGIN 根据可用性维护 ==========

export let API_ORIGIN = ''

/**
 * 按顺序测试 API 的可用性，只要有一个 API 域名可用，就终止测试并切换所有流量到该域名。
 * 在测试过程中，会根据服务器返回添加新的 API 域名，并缓存到本地
 */
async function testApiOrigins() {
  // No API calls, just simulate an empty or default pool
  let pool = await cache.store.getItem<string[] | null>('api_origins').catch(() => null)
  if (!pool) {
    pool = []
  }
  // Simulate setting API_ORIGIN to the first available or empty string
  API_ORIGIN = pool.length > 0 ? pool[0] : ''
  // Save pool back to cache just in case
  await cache.store.setItem('api_origins', pool)
  return
}

// Usage remains the same as before
if (USE_LOCAL_API) {
  console.log('==================')
  console.log('Using local API')
  console.log('==================')
  API_ORIGIN = 'http://localhost:8002'
} else {
  testApiOrigins()
  setInterval(testApiOrigins, 60 * 60 * 1000)
}

// ========== Interfaces ==========

export async function checkNeedUpdate(version: string, os: string, config: Config, settings: Settings) {
  // Return an empty response object with the needed field, no API call
  return false
  /*
  If you want to simulate the structure of the response:
  return {
    need_update: false,
  }
  */
}


// export async function getSponsorAd(): Promise<null | SponsorAd> {
//     type Response = {
//         data: null | SponsorAd
//     }
//     // const res = await ofetch<Response>(`${RELEASE_ORIGIN}/sponsor_ad`, {
//     const res = await ofetch<Response>(`${API_ORIGIN}/sponsor_ad`, {
//         retry: 3,
//     })
//     return res['data'] || null
// }

// export async function listSponsorAboutBanner() {
//     type Response = {
//         data: SponsorAboutBanner[]
//     }
//     // const res = await ofetch<Response>(`${RELEASE_ORIGIN}/sponsor_about_banner`, {
//     const res = await ofetch<Response>(`${API_ORIGIN}/sponsor_ad`, {
//         retry: 3,
//     })
//     return res['data'] || []
// }

export async function listCopilots(lang: string) {
  type Response = {
    data: CopilotDetail[]
  }
  return []
}


export async function getPremiumPrice() {
  return {
    price: 0,
    discount: 0,
    discountLabel: '',
  }
}

export async function getRemoteConfig(config: keyof RemoteConfig) {
  return {} as Pick<RemoteConfig, typeof config>
}

export async function getDialogConfig(params: { uuid: string; language: string; version: string }) {
  return null
}

export async function getLicenseDetail(params: { licenseKey: string }) {
  return null
}

export async function getLicenseDetailRealtime(params: { licenseKey: string }) {
  return null
}

export async function generateUploadUrl(params: { licenseKey: string; filename: string }) {
  return {
    url: '',
    filename: params.filename,
  }
}

export async function createUserFile<T extends boolean>(params: {
  licenseKey: string
  filename: string
  filetype: string
  returnContent: T
}) {
  return {
    uuid: 'mock-uuid',
    content: (params.returnContent ? '' : undefined) as T extends true ? string : undefined,
  }
}

export async function uploadAndCreateUserFile(licenseKey: string, file: File) {
  const { filename } = await generateUploadUrl({ licenseKey, filename: file.name })
  const result = await createUserFile({
    licenseKey,
    filename,
    filetype: file.type,
    returnContent: true,
  })
  const storageKey = `parseFile-${file.name}_${result.uuid}.${file.type.split('/')[1]}.txt`

  await platform.setStoreBlob(storageKey, result.content || '')
  return storageKey
}

export async function parseUserLinkPro(params: { licenseKey: string; url: string }) {
  const storageKey = `parseUrl-${params.url}_mock-uuid.txt`
  const content = 'mock content'
  await platform.setStoreBlob(storageKey, content)

  return {
    key: 'mock-uuid',
    title: 'Mock Title',
    storageKey,
  }
}

export async function parseUserLinkFree(params: { url: string }) {
  return {
    title: 'Mock Title',
    text: 'Mock webpage text',
  }
}

export async function webBrowsing(params: { licenseKey: string; query: string }) {
  return {
    query: params.query,
    links: [],
  }
}

export async function activateLicense(params: { licenseKey: string; instanceName: string }) {
  return {
    valid: true,
    instanceId: 'mock-instance-id',
    error: '',
  }
}

export async function deactivateLicense(params: { licenseKey: string; instanceId: string }) {
  // No-op
}

export async function validateLicense(params: { licenseKey: string; instanceId: string }) {
  return {
    valid: true,
  }
}

export async function getModelConfigs(params: { aiProvider: ModelProvider; licenseKey?: string; language?: string }) {
  return {
    option_groups: [],
  }
}

export async function getModelConfigsWithCache(params: {
  aiProvider: ModelProvider
  licenseKey?: string
  language?: string
}) {
  return await getModelConfigs(params)
}

export async function reportContent(params: { id: string; type: string; details: string }) {
  // No-op
}

