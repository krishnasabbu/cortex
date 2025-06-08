import React, { useEffect, useState } from 'react';
import CreatableSelect from '@/components/CreatableSelect'
import MaxContextMessageCountSlider, {
  toBeRemoved_getContextMessageCount,
} from '@/components/MaxContextMessageCountSlider'
import PasswordTextField from '@/components/PasswordTextField'
import TemperatureSlider from '@/components/TemperatureSlider'
import TextFieldReset from '@/components/TextFieldReset'
import TopPSlider from '@/components/TopPSlider'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import {
  Alert,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import { CustomProvider, ModelProvider, ModelSettings, ToolInfo } from '@/../shared/types'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'

interface ModelConfigProps {
  settingsEdit: ModelSettings
  setSettingsEdit: (settings: ModelSettings) => void
}

export default function CustomProviderSetting(props: ModelConfigProps) {
  const { settingsEdit, setSettingsEdit } = props
  const { t } = useTranslation()

  const customProvider = settingsEdit.customProviders.find(
    (provider) => provider.id === settingsEdit.selectedCustomProviderId
  )

  const [mcpMode, setMcpMode] = React.useState('STDIO')
  const [pyFilePath, setPyFilePath] = useState('')
  const [mcpTools, setMcpTools] = useState<string[]>([])
  const [toolDetails, setToolDetails] = useState<Record<string, ToolInfo[]>>({});
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  console.log("customsettingedit ===== "+JSON.stringify(settingsEdit))

  
  const setCustomProvider = (update: CustomProvider) => {
    console.log("providerssabbu======== "+JSON.stringify(update))
    setSettingsEdit({
      ...settingsEdit,
      customProviders: settingsEdit.customProviders.map((provider) =>
        provider.id === update.id ? { ...provider, ...update } : provider
      ),
    })
  }

  const handleExecutePy = async () => {
    console.log("pyFilePath == "+pyFilePath)
    if (!customProvider || !customProvider.host || !customProvider.id) return;

    const res = await fetch("http://localhost:8989/mcp-tools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ path: customProvider.host })
    });
    console.log("pyFilePath == data === "+res);
    const data = await res.json();
    console.log("pyFilePath == data ===", data);
    if (Array.isArray(data)) {
      const toolMap = data.reduce((acc, tool) => {
        acc[tool.name] = { arguments: tool.arguments };
        return acc;
      }, {});
      setCustomProvider({
        ...customProvider,
        toolMap: toolMap,
      });
    }

  };

  const switchChatboxAI = () => {
    setSettingsEdit({
      ...settingsEdit,
      aiProvider: ModelProvider.Custom,
      selectedCustomProviderId: '',
    })
  }
  if (!customProvider) {
    return null
  }


  return (
    <Stack spacing={2}>
      <Alert icon={false} severity="info" className="my-4">
        {t(
          "Here you can add and manage various custom model providers. As long as the provider's API is compatible with the selected API mode, you can seamlessly connect and use it within Cortex."
        )}
        <br />
        <Trans
          i18nKey="Please note that as a client tool, Cortex cannot guarantee the quality of service and data privacy of the model providers. If you are looking for a stable, reliable, and privacy-protecting model service, consider <a>Tachyon</a>."
          components={{
            a: <a className="cursor-pointer font-bold" onClick={switchChatboxAI}></a>,
          }}
        />
      </Alert>

      <FormControl>
        <InputLabel>{t('API Mode')}</InputLabel>
        <Select
          value={customProvider.api}
          label={t('API Mode')}
          onChange={(e) => setCustomProvider({ ...customProvider, api: e.target.value as 'openai' })}
          size="small"
          className="mb-1"
        >
          <MenuItem value="openai">{t('OpenAI API Compatible')}</MenuItem>
          <MenuItem value="mcp">{t('MCP Server')}</MenuItem>
          <MenuItem value="tachyon">{t('Tachyon')}</MenuItem>
        </Select>
      </FormControl>

      <TextFieldReset
        margin="dense"
        label={t('name')}
        type="text"
        fullWidth
        variant="outlined"
        value={customProvider.name}
        placeholder={t('Untitled') || 'Untitled'}
        defaultValue={t('Untitled') || 'Untitled'}
        onValueChange={(value) => {
          setCustomProvider({ ...customProvider, name: value })
        }}
      />

      {customProvider.api === 'mcp' && (
        <>
          <FormControl>
            <InputLabel>MCP Mode</InputLabel>
            <Select
              value={customProvider.model}
              label="MCP Mode"
              size="small"
              onChange={(e) => setCustomProvider({ ...customProvider, model: e.target.value as '' })}
            >
              <MenuItem value="STDIO">STDIO</MenuItem>
              <MenuItem value="SSE">SSE</MenuItem>
            </Select>
          </FormControl>

          {mcpMode && (
            <>
              <TextFieldReset
                label="Path"
                value={customProvider.host}
                onValueChange={(value) => {
                  setCustomProvider({ ...customProvider, host: value })
                }}
                fullWidth
                variant="outlined"
                size="small"
              />
              <Button key=""
                      variant="contained" 
                      color="primary"
                      onClick={() => handleExecutePy()}>
                  <DashboardCustomizeIcon /> Get Tools
              </Button>
              <Typography variant="body2" component="div" className="text-sm">
                Tools from script:
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {Object.keys(customProvider.toolMap ?? {}).map((tool) => (
                    <Chip
                      key={tool}
                      label={tool}
                      color="primary"
                      variant="outlined"
                      style={{ fontWeight: 500 }}
                      onClick={() => setSelectedTool(tool)}
                    />
                  ))}
                </div>

                {selectedTool && customProvider.toolMap?.[selectedTool]?.arguments && (
                  <div style={{ marginTop: '16px' }}>
                    <h4>Arguments for "{selectedTool}"</h4>
                    <ul>
                      {customProvider.toolMap[selectedTool].arguments.map((arg, idx) => (
                        <li key={idx}>
                          <strong>{arg.title}</strong>: {arg.type}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Typography>
            </>
          )}
        </>
      )}
      {customProvider.api === 'openai' && (
        <>
          <TextFieldReset
            margin="dense"
            label={t('api host')}
            type="text"
            fullWidth
            variant="outlined"
            value={customProvider.host}
            placeholder="https://api.openai.com/v1"
            defaultValue="https://api.openai.com/v1"
            onValueChange={(value) => {
              value = value.trim()
              if (value.length > 4 && !value.startsWith('http')) {
                value = 'https://' + value
              }
              setCustomProvider({ ...customProvider, host: value })
            }}
          />
          <TextFieldReset
            margin="dense"
            label={t('api path')}
            type="text"
            fullWidth
            variant="outlined"
            value={customProvider.path}
            placeholder="/chat/completions"
            defaultValue="/chat/completions"
            onValueChange={(value) => {
              setCustomProvider({ ...customProvider, path: value.trim() })
            }}
          />
          <FormGroup>
            <FormControlLabel
              className="px-2 mb-2"
              control={<Switch size="small" />}
              label={
                <Typography variant="body2" className="flex items-center justify-center opacity-50">
                  {t('Improve Network Compatibility')}
                  <Tooltip
                    title={t('Use proxy to resolve CORS and other network issues')}
                    className="cursor-pointer"
                    placement="top"
                  >
                    <HelpOutlineIcon className="opacity-60 ml-0.5" fontSize="small" />
                  </Tooltip>
                </Typography>
              }
              checked={customProvider.useProxy}
              onChange={(e, checked) => setCustomProvider({ ...customProvider, useProxy: checked })}
            />
          </FormGroup>
          <PasswordTextField
            label={t('api key')}
            value={customProvider.key}
            setValue={(value) => {
              setCustomProvider({ ...customProvider, key: value })
            }}
          />
          <CreatableSelect
            label={t('model')}
            value={customProvider.model}
            options={customProvider.modelOptions || []}
            onChangeValue={(v) => setCustomProvider({ ...customProvider, model: v })}
            onUpdateOptions={(v) => setCustomProvider({ ...customProvider, modelOptions: v })}
          />
          <MaxContextMessageCountSlider
            value={toBeRemoved_getContextMessageCount(
              settingsEdit.openaiMaxContextMessageCount,
              settingsEdit.maxContextMessageCount
            )}
            onChange={(v) => setSettingsEdit({ ...settingsEdit, maxContextMessageCount: v })}
          />
          <TemperatureSlider
            value={settingsEdit.temperature}
            onChange={(v) => setSettingsEdit({ ...settingsEdit, temperature: v })}
          />
          <TopPSlider topP={settingsEdit.topP} setTopP={(v) => setSettingsEdit({ ...settingsEdit, topP: v })} />
        </>
      )}
      {customProvider.api === 'tachyon' && (
        <>
          <TextFieldReset
            margin="dense"
            label="Consumer Key"
            type="text"
            fullWidth
            variant="outlined"
            value={customProvider.consumerKey || ''}
            onValueChange={(value) => setCustomProvider({ ...customProvider, consumerKey: value })}
          />
          <PasswordTextField
            label="Consumer Secret"
            value={customProvider.consumerSecret || ''}
            setValue={(value) => setCustomProvider({ ...customProvider, consumerSecret: value })}
          />
          <TextFieldReset
            margin="dense"
            label="Use Case ID"
            type="text"
            fullWidth
            variant="outlined"
            value={customProvider.useCaseId || ''}
            onValueChange={(value) => setCustomProvider({ ...customProvider, useCaseId: value })}
          />
          <TextFieldReset
            margin="dense"
            label={t('api host')}
            type="text"
            fullWidth
            variant="outlined"
            value={customProvider.host}
            placeholder="https://api.openai.com/v1"
            defaultValue="https://api.openai.com/v1"
            onValueChange={(value) => {
              value = value.trim()
              if (value.length > 4 && !value.startsWith('http')) {
                value = 'https://' + value
              }
              setCustomProvider({ ...customProvider, host: value })
            }}
          />
          <TextFieldReset
            margin="dense"
            label={t('api path')}
            type="text"
            fullWidth
            variant="outlined"
            value={customProvider.path}
            placeholder="/chat/completions"
            defaultValue="/chat/completions"
            onValueChange={(value) => {
              setCustomProvider({ ...customProvider, path: value.trim() })
            }}
          />
          <FormGroup>
            <FormControlLabel
              className="px-2 mb-2"
              control={<Switch size="small" />}
              label={
                <Typography variant="body2" className="flex items-center justify-center opacity-50">
                  {t('Improve Network Compatibility')}
                  <Tooltip
                    title={t('Use proxy to resolve CORS and other network issues')}
                    className="cursor-pointer"
                    placement="top"
                  >
                    <HelpOutlineIcon className="opacity-60 ml-0.5" fontSize="small" />
                  </Tooltip>
                </Typography>
              }
              checked={customProvider.useProxy}
              onChange={(e, checked) => setCustomProvider({ ...customProvider, useProxy: checked })}
            />
          </FormGroup>
          <PasswordTextField
            label={t('api key')}
            value={customProvider.key}
            setValue={(value) => {
              setCustomProvider({ ...customProvider, key: value })
            }}
          />
          <CreatableSelect
            label={t('model')}
            value={customProvider.model}
            options={customProvider.modelOptions || []}
            onChangeValue={(v) => setCustomProvider({ ...customProvider, model: v })}
            onUpdateOptions={(v) => setCustomProvider({ ...customProvider, modelOptions: v })}
          />
          <MaxContextMessageCountSlider
            value={toBeRemoved_getContextMessageCount(
              settingsEdit.openaiMaxContextMessageCount,
              settingsEdit.maxContextMessageCount
            )}
            onChange={(v) => setSettingsEdit({ ...settingsEdit, maxContextMessageCount: v })}
          />
          <TemperatureSlider
            value={settingsEdit.temperature}
            onChange={(v) => setSettingsEdit({ ...settingsEdit, temperature: v })}
          />
          <TopPSlider topP={settingsEdit.topP} setTopP={(v) => setSettingsEdit({ ...settingsEdit, topP: v })} />
        </>
      )}

      
    </Stack>
  )
}