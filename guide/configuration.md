# Configuration Guide

Hoosh is highly configurable to match your preferences and workflow. Learn how to customize everything.

## Configuration File Location

Your Hoosh configuration is stored at:

```
~/.config/hoosh/config.toml
```

This TOML file contains all your settings, from API keys to model preferences.

### Security Warning ⚠️

Your config file contains sensitive API keys. Ensure proper permissions:

```bash
# Set permissions to owner read/write only
chmod 600 ~/.config/hoosh/config.toml

# Verify permissions
ls -la ~/.config/hoosh/config.toml
# Should show: -rw------- (600)
```

**Never commit this file to version control!** Add to your `.gitignore`:
```
~/.config/hoosh/config.toml
```

## Configuration Methods

### Method 1: Interactive Setup Wizard (Recommended for Beginners)

```bash
hoosh setup
```

This guides you through all essential configuration step-by-step.

### Method 2: CLI Commands

View or modify settings directly:

```bash
# View all configuration
hoosh config show

# View specific backend config
hoosh config show --backend anthropic
```

### Method 3: Edit the TOML File Directly

```bash
# Open in your preferred editor
nano ~/.config/hoosh/config.toml
# or
vim ~/.config/hoosh/config.toml
```

## Common Configuration Tasks

### Set Default Backend

```bash
hoosh config set default_backend anthropic
```

Supported backends: `anthropic`, `openai`, `together_ai`, `ollama`

### Configure API Keys

**OpenAI:**
```bash
hoosh config set openai_api_key sk-...
```

**Anthropic:**
```bash
hoosh config set anthropic_api_key sk-ant-...
```

**Together AI:**
```bash
hoosh config set together_ai_api_key tgp_...
```

**Ollama:**
No API key needed! Runs locally.

### Set Default Model

**OpenAI:**
```bash
hoosh config set openai_model gpt-4
```

**Anthropic:**
```bash
hoosh config set anthropic_model claude-sonnet-4.5
```

**Together AI:**
```bash
hoosh config set together_ai_model Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8
```

**Ollama:**
```bash
hoosh config set ollama_model llama3
```

### Configure Model Temperature

Adjust creativity vs consistency (0.0-2.0):

```bash
# More consistent/focused (lower = more predictable)
hoosh config set anthropic_temperature 0.3

# More creative (higher = more variety)
hoosh config set openai_temperature 1.5
```

### Custom API Endpoints

For self-hosted or alternative endpoints:

```bash
# OpenAI-compatible endpoint
hoosh config set openai_base_url https://api.openai.com/v1

# Ollama running on different host
hoosh config set ollama_base_url http://192.168.1.100:11434
```

### Set Verbosity Level

Control logging output:

```bash
hoosh config set verbosity quiet      # Minimal output
hoosh config set verbosity normal     # Standard output (default)
hoosh config set verbosity verbose    # Detailed output
hoosh config set verbosity debug      # Full debugging info
```

### Enable/Disable Review Mode

```bash
# Require approval for every tool call (default)
hoosh config set review_mode true

# Automatically execute tools (with permission checks)
hoosh config set review_mode false
```

## Configuration File Example

Here's what your config might look like:

```toml
# Default settings
default_backend = "anthropic"
default_agent = "hoosh_coder"
verbosity = "normal"
review_mode = true

# Anthropic (Claude) Configuration
[backends.anthropic]
api_key = "sk-ant-..."
model = "claude-sonnet-4.5"
temperature = 1.0
base_url = "https://api.anthropic.com"

# OpenAI Configuration
[backends.openai]
api_key = "sk-..."
model = "gpt-4"
temperature = 0.7
base_url = "https://api.openai.com/v1"

# Together AI Configuration
[backends.together_ai]
api_key = "tgp_..."
model = "Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8"
temperature = 0.7
base_url = "https://api.together.xyz/v1"

# Ollama Configuration
[backends.ollama]
model = "llama3"
base_url = "http://localhost:11434"

# Custom agents with system prompts
[agents.code_reviewer]
system_prompt = "You are an expert code reviewer..."
tags = ["review", "quality"]

[agents.documentation_writer]
system_prompt = "You are a technical writer..."
tags = ["docs", "writing"]
```

Hoosh will use environment variables if set, falling back to the config file.

## Project-Specific Configurations

You can have different configs per project:

```bash
# Create project-specific config
mkdir -p ./.hoosh
cp ~/.config/hoosh/config.toml ./.hoosh/config.toml

# Edit the project config
nano ./.hoosh/config.toml
```

When running Hoosh from that directory, it will prefer the local `.hoosh/config.toml`.

## Advanced: Custom Agents

Define custom AI agents with specific system prompts:

```toml
[agents.my_rust_expert]
system_prompt = """
You are an expert Rust developer with 20+ years of experience.
Focus on idiomatic Rust, performance, and safety.
Always explain why you're making specific recommendations.
"""
tags = ["rust", "expert", "architecture"]
```

Use your custom agent:
```bash
hoosh --agent my_rust_expert
```

## Troubleshooting Configuration

### "Invalid configuration"
Check TOML syntax with:
```bash
cat ~/.config/hoosh/config.toml
```

Make sure keys and values are properly quoted.

### "API key not found"
Ensure you've set it:
```bash
hoosh config show | grep api_key
```

### Changes not taking effect
Configuration is loaded at startup. Exit and restart Hoosh:
```bash
# Exit current session
Ctrl+C

# Restart
hoosh
```

### Reset to Defaults

Remove your config file and re-run setup:
```bash
rm ~/.config/hoosh/config.toml
hoosh setup
```

## Tips & Best Practices

✅ **Use environment variables** for API keys in CI/CD environments

✅ **Start with defaults** - Only customize what you need

✅ **Test backends** - Try each one to see which works best for you

✅ **Monitor permissions** - Keep review mode on until you're comfortable

✅ **Back up config** - Keep a backup of your working configuration

✅ **Use source control** - Keep `.hoosh` directory in your repo, exclude `config.toml`

Next: Learn about [Security and Permissions](./security.md).
