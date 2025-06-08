import { fetchWithProxy } from '@/utils/request'
import { createOpenAICompatible, OpenAICompatibleImageModel } from '@ai-sdk/openai-compatible'
import { extractReasoningMiddleware, wrapLanguageModel } from 'ai'
import AbstractAISDKModel from './abstract-ai-sdk'
import { normalizeOpenAIApiHostAndPath } from './llm_utils'
import { ModelHelpers } from './types'

const helpers: ModelHelpers = {
  isModelSupportVision: (model: string) => {
    // TODO: 需要由用户设置,
    return false
  },
  isModelSupportToolUse: (model: string) => {
    // TODO: 需要由用户设置
    return false
  },
}

interface Options {
  apiKey: string
  apiHost: string
  apiPath: string
  model: string
  useProxy?: boolean
  temperature?: number
  topP?: number
  
}

type FetchFunction = typeof globalThis.fetch

export default class CustomOpenAI extends AbstractAISDKModel {
  public name = 'Custom'
  public static helpers = helpers
  public options: Options

  constructor(options: Options) {
    super()
    const { apiHost, apiPath } = normalizeOpenAIApiHostAndPath({ apiHost: options.apiHost, apiPath: options.apiPath })
    this.options = { ...options, apiHost, apiPath }
  }

  protected getCallSettings() {
    console.log("calling cutom options"+JSON.stringify(this.options))
    return {
      temperature: this.options.temperature,
      topP: this.options.topP,
      customP: this.options.topP,
    }
  }

  private getProvider(fetchFunction?: FetchFunction) {
    console.log("calling cutom options"+JSON.stringify(this.options))
    return createOpenAICompatible({
      name: this.name,
      apiKey: this.options.apiKey,
      baseURL: this.options.apiHost,
      fetch: fetchFunction,
      headers: {
            'X-Title': 'Cortex',
            'X-Custom-Krishna': 'Cortex',
          },
    })
  }

  protected getChatModel() {
    const fetcher = this.options.useProxy ? fetchWithProxy : fetch
    const provider = this.getProvider(async (_input, init) => {
      return fetcher(`${this.options.apiHost}${this.options.apiPath}`, init)
    })
    return wrapLanguageModel({
      model: provider.chatModel(this.options.model),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    })
  }

  protected getImageModel() {
    const fetcher = this.options.useProxy ? fetchWithProxy : fetch
    const provider = this.getProvider(fetcher)
    return provider.imageModel('dall-e-3', {
      maxImagesPerCall: 1,
    })
  }

  public isSupportToolUse() {
    return helpers.isModelSupportToolUse(this.options.model)
  }
}
