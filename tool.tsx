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














const mimeTypes: Record<string, string> = {
  "txt": "text/plain",
  "pdf": "application/pdf",
  "doc": "application/msword",
  "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "xls": "application/vnd.ms-excel",
  "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "png": "image/png",
  "jpg": "image/jpeg",
  "jpeg": "image/jpeg",
  "gif": "image/gif",
  "csv": "text/csv",
  "json": "application/json",
  "zip": "application/zip",
  // Add more as needed
};


    function downloadFromBase64(base64: string, fileName = "download.txt", mimeType = "text/plain") {
  // Convert base64 to raw binary
  const byteCharacters = atob(base64);
  const byteNumbers = Array.from(byteCharacters, c => c.charCodeAt(0));
  const byteArray = new Uint8Array(byteNumbers);

  // Create blob and URL
  const blob = new Blob([byteArray], { type: mimeType });
  const url = URL.createObjectURL(blob);

  // Create and trigger download link
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();

  // Optional: revoke the object URL
  URL.revokeObjectURL(url);
}


<button onClick={() => downloadFromBase64(resource.blob, "report.pdf", "application/pdf")}>
  Download Attachment
</button>

