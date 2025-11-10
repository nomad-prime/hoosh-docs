# Quick Start Guide

Get your first Hoosh conversation running in under 5 minutes.

## 1. Initial Setup

Run the interactive setup wizard:

```bash
hoosh setup
```

The wizard will guide you through:
- **Select your AI backend** (Anthropic, OpenAI, Together AI, or Ollama)
- **Configure API credentials** (paste your API key or use environment variables)
- **Choose your default model** (e.g., Claude Sonnet, GPT-4, Llama 3)

You can re-run `hoosh setup` anytime to reconfigure.

## 2. Start a Conversation

Launch Hoosh in interactive mode:

```bash
hoosh
```

You'll see the Hoosh TUI interface with:
- **Message input area** at the bottom
- **Conversation history** above
- **Status bar** showing mode and configuration
- **Tool execution feedback** when AI uses tools

## 3. Have Your First Conversation

Type a message and press Enter. For example:

```
> How do I sort an array in Rust?
```

Hoosh will respond with detailed explanations and code examples. If it needs to execute tools (like running a command or reading a file), it will ask for permission first.

## 4. Key Commands

While chatting, use these commands:

| Command | Effect |
|---------|--------|
| `Shift+Tab` | Toggle between Review and Autopilot modes |
| `/untrust` | Revoke project-wide permissions |
| `Ctrl+C` | Exit Hoosh |

## Common Use Cases

### Get Code Help
```
> Write me a Rust function that validates email addresses
```

### Debug Issues
```
> I'm getting this error: [paste error]. What's wrong?
```

### Generate Documentation
```
> Create a comprehensive README for my project in ./src
```

### Refactor Code
```
> Refactor the login function for better readability and performance
```

### File Operations
Grant Hoosh access to your project:
```bash
hoosh --add-dir ./src
```

Then ask it to:
```
> Review the code in src/ and suggest improvements
```

## Review vs Autopilot Mode

### Review Mode (Default) ✓
- You approve each tool execution before it runs
- Maximum control and transparency
- Perfect for learning or critical operations

### Autopilot Mode 🚀
- Tool calls execute automatically
- Still respects the permission system
- Ideal for trusted tasks
- Toggle with `Shift+Tab`

## Continuing Conversations

Resume where you left off:

```bash
hoosh --continue
```

This loads your last conversation and maintains full context.

## Specifying a Backend

Use a specific backend for this session:

```bash
# Use Anthropic (Claude)
hoosh --backend anthropic

# Use OpenAI (GPT-4)
hoosh --backend openai

# Use local Ollama
hoosh --backend ollama

# Use Together AI
hoosh --backend together_ai
```

## Tips for Best Results

✅ **Be specific** - "Create a binary search function in Rust" works better than "write code"

✅ **Grant permissions wisely** - Use "Trust project" for trusted codebases, one-by-one for others

✅ **Review tool calls** - Especially at first, watch what Hoosh does before approving

✅ **Use context** - Reference files and directories to give Hoosh more information

✅ **Ask for explanations** - "Explain this code" helps you learn

## Next Steps

- 🎨 [Customize configuration](./configuration.md)
- 🔐 [Understand security model](./security.md)
- 💻 [Explore all backends](./backends.md)
- ⚙️ [Advanced features](./features.md)

## Troubleshooting

**"No API key configured"**
- Run `hoosh setup` to add your API key
- Or set it manually: `hoosh config set anthropic_api_key sk-ant-...`

**"Permission denied"**
- This is working as intended! Review the operation and approve if it looks correct
- Or use "Trust project" to auto-approve operations in your project directory

**"Connection error"**
- Check your internet connection
- Verify your API key is valid
- Try a different backend

Still stuck? [Open an issue](https://github.com/nomad-prime/hoosh/issues) on GitHub.
