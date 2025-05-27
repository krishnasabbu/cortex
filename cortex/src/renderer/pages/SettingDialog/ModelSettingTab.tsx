import { Box, Divider } from '@mui/material'
import { ModelProvider, ModelSettings } from '../../../shared/types'
import AIProviderSelect from '../../components/AIProviderSelect'
import CustomProviderSetting from './CustomProviderSetting'

interface ModelConfigProps {
  settingsEdit: ModelSettings
  setSettingsEdit: (settings: ModelSettings) => void
}

export default function ModelSettingTab(props: ModelConfigProps) {
  const { settingsEdit, setSettingsEdit } = props
  return (
    <Box>
      <AIProviderSelect
        aiProvider={settingsEdit.aiProvider}
        onSwitchAIProvider={(v) => setSettingsEdit({ ...settingsEdit, aiProvider: v })}
        selectedCustomProviderId={settingsEdit.selectedCustomProviderId}
        onSwitchCustomProvider={(v) =>
          setSettingsEdit({
            ...settingsEdit,
            aiProvider: ModelProvider.Custom,
            selectedCustomProviderId: v,
          })
        }
      />
      <Divider sx={{ marginTop: '10px', marginBottom: '24px' }} />
      {settingsEdit.aiProvider === ModelProvider.Custom && (
        <CustomProviderSetting settingsEdit={settingsEdit} setSettingsEdit={setSettingsEdit} />
      )}
    </Box>
  )
}
