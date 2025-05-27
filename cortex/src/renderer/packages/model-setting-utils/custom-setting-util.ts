import { ModelSettings, Session, SessionType, Settings } from 'src/shared/types'
import { ModelSettingUtil } from './interface'
import * as settingActions from '../../stores/settingActions'
import BaseConfig from './base-config'

export default class CustomModelSettingUtil extends BaseConfig implements ModelSettingUtil {
  async getCurrentModelDisplayName(settings: Settings, sessionType: SessionType): Promise<string> {
    const customProvider = settings.customProviders?.find(
      (provider) => provider.id === settings.selectedCustomProviderId
    )
    if (!customProvider) {
      return 'unknown'
    }
    return `${customProvider.name}(${customProvider.model})`
  }

  getCurrentModelOptionValue(settings: Settings) {
    console.log("current modle option value ==== "+JSON.stringify(settings.customProviders))
    const customProvider = settings.customProviders?.find(
      (provider) => provider.id === settings.selectedCustomProviderId
    )
    if (!customProvider) {
      return 'unknown'
    }
    return customProvider.model
  }

  public getLocalOptionGroups(settings: ModelSettings) {
    console.log("Custom Gorup is calling ===================================================== ")
    // const customProvider = settings.customProviders?.find(
    //   (provider) => provider.id === settings.selectedCustomProviderId
    // )
    // if (!customProvider) {
    //   return []
    // }
    // const models = customProvider.modelOptions || []
    // if (!models.includes(customProvider.model)) {
    //   models.push(customProvider.model)
    // }
    // return [
    //   {
    //     options: models.map((model) => ({
    //       label: model,
    //       value: model,
    //     })),
    //   },
    // ]
    return [
          {
            options: settings.customProviders.map((value) => ({
              label: value.model,
              value: value.model,
            })),
          },
        ]
  }

  protected async listProviderModels(settings: ModelSettings) {
    return []
  }

  selectSessionModel(settings: Session['settings'], selected: string): Session['settings'] {
    const globalSettings = settingActions.getSettings()
  
    const customProviders = globalSettings.customProviders
  
    // Find the provider whose model matches the selected model
    const matchingProvider = customProviders.find(provider => provider.model === selected)
  
    // Get the ID of the matching provider, or fallback to undefined
    const selectedCustomProviderId = matchingProvider?.id
  
    return {
      ...settings,
      customProviders,
      selectedCustomProviderId,
    }
  }

  isCurrentModelSupportImageInput(settings: ModelSettings) {
    return true
  }

  isCurrentModelSupportToolUse(settings: ModelSettings) {
    return false
  }
}
