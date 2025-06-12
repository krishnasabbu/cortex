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
