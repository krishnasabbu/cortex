import { useEffect, useMemo, useState, useRef } from 'react'
import { ModelOptionGroup, Settings, ModelProvider } from '../../shared/types'
import { getModelSettingUtil } from '../packages/model-setting-utils'
import { mode } from 'd3'

export default function useModelConfig(settings: Settings, aiProvider?: ModelProvider) {
  console.log("aiprovider ==== 1234"+settings.aiProvider)
  const modelConfig = getModelSettingUtil(aiProvider || settings.aiProvider)

  console.log("model config ===== "+JSON.stringify(modelConfig))

  const [optionGroups, setOptionGroups] = useState<ModelOptionGroup[]>(modelConfig.getLocalOptionGroups(settings))

  const latestRequestId = useRef(0)
  const refreshWithRemoteOptionGroups = async () => {
    const requestId = ++latestRequestId.current
    const mergedOptions = await modelConfig.getMergeOptionGroups(settings)
    console.log("model mergedOptions config ===== "+JSON.stringify(mergedOptions))
    if (requestId === latestRequestId.current) {
      setOptionGroups(mergedOptions)
    }
  }
  console.log("model settings ===== "+JSON.stringify(optionGroups))
  useEffect(() => {
    console.log("Use Effect is calling *******"+JSON.stringify(optionGroups))
    setOptionGroups(modelConfig.getLocalOptionGroups(settings))
    refreshWithRemoteOptionGroups()
  }, [settings])
  
  const currentModelOptionValue = modelConfig.getCurrentModelOptionValue(settings)
  console.log("model currentModelOptionValue ===== "+JSON.stringify(currentModelOptionValue))
  const currentModelOptionLabel = useMemo(() => {
    for (const optionGroup of optionGroups) {
      const option = optionGroup.options.find((option) => option.value === currentModelOptionValue)
      if (option) {
        return option.label
      }
    }
    return currentModelOptionValue
  }, [optionGroups, currentModelOptionValue])

  return {
    optionGroups,
    currentOption: {
      label: currentModelOptionLabel,
      value: currentModelOptionValue,
    },
    refreshWithRemoteOptionGroups,
  }
}
