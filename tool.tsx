const generateJson = () => {
    const json = {
      tools: [
        {
          type: "function",
          function: {
            name: "add_numbers",
            description: "Adds two numbers",
            parameters: {
              type: "object",
              properties: {
                a: { type: "number" },
                b: { type: "number" }
              },
              required: ["a", "b"]
            }
          }
        }
      ],
      tool_choice: "auto"
    };



    <Box sx={{ mt: 2 }}>
                <TextField
                fullWidth
                multiline
                minRows={3}
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                placeholder={t('System prompt')}
                />
                
                  <Typography variant="subtitle1" gutterBottom>Select MCP Tools</Typography>
                  {mcpProviders.map(provider => (
                    <Accordion key={provider.id} disableGutters>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle2">{provider.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {Object.entries(provider.toolMap || {}).map(([key, tool]) => (
                          <FormControlLabel
                            key={key}
                            control={
                              <Checkbox
                                checked={selectedMcpTools.includes(`${provider.id} - ${key}`)}
                                onChange={() => handleToolToggle(`${provider.id} - ${key}`)}
                              />
                            }
                            label={`${key}`}
                          />
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
