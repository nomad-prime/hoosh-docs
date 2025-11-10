# Supported AI Backends

Hoosh supports multiple LLM backends, giving you the flexibility to choose the provider that best fits your needs. Switch between them anytime.

## OpenAI

Use GPT-4 and other OpenAI models for high-quality, reliable responses.
This backend can be used for any OpenAI Compatible API (e.g. OpenRouter)

### Setup

```bash
# Get your API key from: https://platform.openai.com/api-keys
hoosh config set openai_api_key sk-...
hoosh config set openai_model gpt-4
hoosh config set default_backend openai
```

### Available Models

- `gpt-4-turbo` - Latest, fastest, best value
- `gpt-4` - Most capable, higher latency
- `gpt-3.5-turbo` - Budget option, decent quality

### Configuration

```bash
# Set temperature (0.0-2.0, default 0.7)
hoosh config set openai_temperature 0.3

# Use custom endpoint
hoosh config set openai_base_url https://api.openai.com/v1
```

### Best For

- ✅ Production code
- ✅ Complex reasoning
- ✅ When you need reliability
- ✅ Teams with budgets

### Cost Estimate

Input: $0.01/1K tokens  
Output: $0.03/1K tokens

[Visit OpenAI](https://openai.com)

---

## Anthropic (Claude)

Essential for self-improvement and advanced coding tasks. Claude excels at understanding and writing code.

### Setup

```bash
# Get your API key from: https://console.anthropic.com/settings/keys
hoosh config set anthropic_api_key sk-ant-...
hoosh config set anthropic_model claude-sonnet-4.5
hoosh config set default_backend anthropic
```

### Available Models

- `claude-sonnet-4.5` - **Recommended** - Best balance of speed and quality for coding
- `claude-opus-4` - Most capable, handles complex tasks better
- `claude-haiku-3` - Budget option, lighter tasks

### Configuration

```bash
# Set temperature (0.0-1.0, default 1.0)
hoosh config set anthropic_temperature 0.7

# Use custom endpoint
hoosh config set anthropic_base_url https://api.anthropic.com
```

### Best For

- ✅ Code generation and refactoring
- ✅ Documentation
- ✅ Advanced reasoning
- ✅ When you value code quality
- ✅ Extended context windows

### Cost Estimate

Input: $0.003/1K tokens  
Output: $0.015/1K tokens  
(Usually cheapest cloud option)

### Why Claude for Coding?

Claude has demonstrated exceptional ability to:
- Write clean, idiomatic code
- Understand complex codebases
- Provide thorough explanations
- Handle long context windows
- Maintain conversation consistency

[Visit Anthropic](https://anthropic.com)

---

## Together AI

Access 200+ open-source models including Llama, Qwen, Mistral, and more at competitive prices.

### Setup

```bash
# Get your API key from: https://api.together.xyz/settings/api-keys
hoosh config set together_ai_api_key tgp_...
hoosh config set together_ai_model Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8
hoosh config set default_backend together_ai
```

### Recommended Models for Coding

- `Qwen/Qwen3-Coder-480B` - Excellent code generation
- `meta-llama/Llama-3-70b-chat-hf` - Reliable all-rounder
- `mistralai/Mistral-7B-Instruct-v0.2` - Fast and efficient
- `NousResearch/Nous-Hermes-2-Mixtral-8x7B` - Good reasoning

### Configuration

```bash
# Set temperature (0.0-2.0, default 0.7)
hoosh config set together_ai_temperature 0.8

# Use custom endpoint
hoosh config set together_ai_base_url https://api.together.xyz/v1
```

### Best For

- ✅ Budget-conscious development
- ✅ Trying different models
- ✅ Open-source model fans
- ✅ Custom fine-tuned models
- ✅ Privacy-conscious with model choice

### Cost Estimate

Most models: $0.0005-0.002/1K tokens  
(Significantly cheaper than commercial options)

### Why Together AI?

- **Cost Effective**: Most models are 5-10x cheaper than GPT-4
- **Variety**: 200+ models to choose from
- **Quality**: Open-source models are surprisingly good at coding
- **Flexibility**: Mix and match different models

[Visit Together AI](https://together.ai)

---

## Ollama

Run models locally for complete privacy, offline operation, and zero API costs.

### Setup

1. **Install Ollama**:
   ```bash
   # macOS/Linux
   curl https://ollama.ai/install.sh | sh
   
   # Windows: Download from https://ollama.ai
   ```

2. **Pull a model**:
   ```bash
   ollama pull llama3
   # or
   ollama pull mistral
   # or
   ollama pull neural-chat
   ```

3. **Configure Hoosh**:
   ```bash
   hoosh config set ollama_model llama3
   hoosh config set default_backend ollama
   ```

### Recommended Models for Coding

- `llama3` - Excellent all-rounder
- `mistral` - Fast and capable
- `neural-chat` - Specifically trained for conversations
- `codellama` - Specialized for code (slower)

### Running Ollama Server

```bash
# Start the Ollama server (runs on localhost:11434)
ollama serve

# In another terminal, check it's running
curl http://localhost:11434/api/tags
```

### Configuration

```bash
# Ensure server is on default port
hoosh config set ollama_base_url http://localhost:11434

# Use remote Ollama server
hoosh config set ollama_base_url http://192.168.1.100:11434
```

### Best For

- ✅ Complete privacy (no API calls)
- ✅ Offline development
- ✅ Learning and experimentation
- ✅ Low latency (local)
- ✅ No API costs
- ✅ Sensitive projects

### Cost Estimate

Free (one-time model download, uses local compute)

### Hardware Requirements

- **Minimum**: 8GB RAM, modern CPU
- **Recommended**: 16GB+ RAM, GPU support (NVIDIA/Apple Silicon)
- **Ideal**: 32GB+ RAM, modern GPU

### Why Ollama?

- **Privacy**: Nothing leaves your machine
- **Cost**: Completely free
- **Speed**: Local latency is unbeatable
- **Learning**: Perfect for experimentation

[Visit Ollama](https://ollama.ai)

---

## Choosing a Backend

### Decision Tree

**Do you need maximum privacy?**
→ **Use Ollama**

**Do you prioritize cost?**
→ **Use Together AI** or **Ollama**

**Do you need the best code quality?**
→ **Use Anthropic** or **OpenAI**

**Do you want maximum flexibility?**
→ **Use Together AI** (200+ models)

**Are you just getting started?**
→ **Use Anthropic** (good balance) or **OpenAI** (most familiar)

### Multi-Backend Strategy

Use different backends for different tasks:

```bash
# Code generation - Use Anthropic (best quality)
hoosh --backend anthropic

# Quick questions - Use Ollama locally (fast, free)
hoosh --backend ollama

# Experimentation - Use Together AI (cheap, variety)
hoosh --backend together_ai
```

## Switching Backends

Change on a per-session basis:

```bash
hoosh --backend openai
```

Or set as default:

```bash
hoosh config set default_backend ollama
```

## API Key Management

### Storing Keys Securely

Option 1: **Config file** (encrypted, file permissions)
```bash
hoosh config set anthropic_api_key sk-ant-...
```

Option 2: **Environment variables** (temporary, CI/CD safe)
```bash
export HOOSH_ANTHROPIC_API_KEY="sk-ant-..."
hoosh
```

Option 3: **Environment file** (.env)
```bash
# Create .env
echo "HOOSH_OPENAI_API_KEY=sk-..." > .env

# Source it
source .env
hoosh
```

### Getting API Keys

| Backend | URL | Time |
|---------|-----|------|
| OpenAI | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) | 2 min |
| Anthropic | [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys) | 2 min |
| Together AI | [api.together.xyz/settings/api-keys](https://api.together.xyz/settings/api-keys) | 2 min |
| Ollama | [ollama.ai](https://ollama.ai) | Install only |

## Troubleshooting

### "Connection refused"
- Ensure your backend is accessible
- For Ollama: Is the server running? (`ollama serve`)
- For cloud: Check internet connection and API endpoint

### "Invalid API key"
- Verify the key is correct
- Check it's for the right backend
- Test on the provider's website

### "Rate limit exceeded"
- Try a different backend
- Reduce request frequency
- Use cheaper models

### "Model not found"
- For Ollama: Pull the model (`ollama pull llama3`)
- For others: Verify model name in documentation

Next: Learn about [Security & Permissions](./security.md).
