import { Settings, Config, ModelProvider } from '../../../shared/types'
import type { ModelInterface } from './types'
import CustomOpenAI from './custom-openai'

export function getModel(setting: Settings, config: Config): ModelInterface {
  switch (setting.aiProvider) {
    case ModelProvider.Custom:
      const customProvider = setting.customProviders.find(
        (provider) => provider.id === setting.selectedCustomProviderId
      )
      if (!customProvider) {
        throw new Error('Cannot find the custom provider')
      }
      return new CustomOpenAI({
        apiKey: customProvider.key,
        apiHost: customProvider.host,
        apiPath: customProvider.path,
        model: customProvider.model,
        temperature: setting.temperature,
        topP: setting.topP,
        useProxy: customProvider.useProxy,
      })
    default:
      throw new Error('Cannot find model with provider: ' + setting.aiProvider)
  }
}

export const aiProviderNameHash: Record<ModelProvider, string> = {
  // [ModelProvider.OpenAI]: 'OpenAI API',
  // [ModelProvider.Azure]: 'Azure OpenAI API',
  // [ModelProvider.ChatGLM6B]: 'ChatGLM API',
  // [ModelProvider.ChatboxAI]: 'Cortex',
  // [ModelProvider.Claude]: 'Claude API',
  // [ModelProvider.Gemini]: 'Google Gemini API',
  // [ModelProvider.Ollama]: 'Ollama API',
  // [ModelProvider.Groq]: 'Groq API',
  // [ModelProvider.DeepSeek]: 'DeepSeek API',
  // [ModelProvider.SiliconFlow]: 'SiliconFlow API',
  // [ModelProvider.LMStudio]: 'LM Studio API',
  // [ModelProvider.Perplexity]: 'Perplexity API',
  // [ModelProvider.XAI]: 'xAI API',
  [ModelProvider.Custom]: 'Custom Provider',
}

export const AIModelProviderMenuOptionList = [
  {
    value: ModelProvider.Custom,
    label: aiProviderNameHash[ModelProvider.Custom],
    featured: true,
    disabled: false,
  },
]

function keepRange(num: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, num))
}
