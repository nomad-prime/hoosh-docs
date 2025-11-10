# Advanced Features

Explore Hoosh's powerful capabilities for maximizing productivity and integration with your workflow.

## Multi-Backend Architecture

### Dynamic Backend Switching

Switch between AI providers without any setup:

```bash
# Try a quick question with local Ollama
hoosh --backend ollama

# Solve complex problem with Claude
hoosh --backend anthropic

# Experiment with new models via Together AI
hoosh --backend together_ai
```

### Per-Session Configuration

Override defaults for a single session:

```bash
# Use GPT-4 just for this conversation
hoosh --backend openai

# Run with verbose logging
hoosh --verbosity debug

# Use a specific agent
hoosh --agent code_reviewer
```

### Context Preservation

Each backend maintains independent conversation history:

```bash
# Start with Anthropic
hoosh --backend anthropic
> Implement a binary search function in Rust

# Later, continue with same backend
hoosh --continue --backend anthropic

# Switch backends and start fresh
hoosh --backend openai
```

## Tool Integration

Let Hoosh help you execute complex workflows.

### Supported Tool Categories

#### File Operations
- ✅ Reading files
- ✅ Writing files
- ✅ Creating directories
- ✅ Listing directory contents
- ✅ File permissions management

#### Shell Commands
- ✅ Running cargo build/test
- ✅ Git operations
- ✅ Package management
- ✅ Custom scripts

#### Custom Tools
- ✅ Define project-specific tools
- ✅ Integrate with build systems
- ✅ Automate workflows

### Using Directory Access

Grant Hoosh access to specific directories:

```bash
# Add directory in current session
hoosh --add-dir ./src
hoosh --add-dir ./tests
hoosh --add-dir ./docs

# Or multiple at once
hoosh --add-dir ./src --add-dir ./tests

# Now ask Hoosh to analyze your code
> Review the code in src/ and suggest improvements
```

### Tool Execution Flow

```
User Request
    ↓
AI Analyzes Request
    ↓
AI Decides Tool(s) Needed
    ↓
Permission Check
    ↓
Review Mode: Show Approval Dialog → User Approves → Execute
Autopilot Mode: Check Trust → Execute if Allowed
    ↓
Execute Tool(s)
    ↓
Return Results to AI
    ↓
AI Synthesizes Response
    ↓
Display Response to User
```

### Example: Code Review Workflow

```bash
# Grant access and enable autopilot
hoosh --add-dir ./src --backend anthropic

# Toggle to autopilot (Shift+Tab)

# Request code review
> Review all files in src/ and create a detailed report with suggestions

# Hoosh will:
# 1. List directory contents (src/)
# 2. Read each file
# 3. Analyze code patterns
# 4. Generate comprehensive review
# 5. Present findings
```

## Conversation Management

### Continue Previous Conversations

Resume exactly where you left off:

```bash
# See available conversations
hoosh --list-conversations

# Continue the most recent
hoosh --continue

# Continue a specific conversation
hoosh --continue --conversation "2024-01-15-14:30"
```

### Persistent Context

Hoosh maintains:
- ✅ Full conversation history
- ✅ File access permissions
- ✅ Backend preference
- ✅ Model selection
- ✅ Custom settings

### Context Window Management

Hoosh intelligently manages context:
- **Automatic summarization** of long conversations
- **Relevant context preservation** for continuity
- **Token optimization** to stay within model limits
- **Graceful degradation** if context exceeds limits

### Search Conversations

Find previous conversations:

```bash
hoosh --search "database migration"
hoosh --search "performance optimization"
```

## Review/Autopilot Modes Deep Dive

### Review Mode Workflow

Perfect for learning and critical operations:

```
┌──────────────────────────────────────┐
│ You: Fix the login bug                │
├──────────────────────────────────────┤
│ AI: I'll examine the auth module      │
│ ✓ Tool: read_file src/auth.rs         │
│ [Review] ← Waiting for approval       │
│                                       │
│ [y] approve [n] deny [?] info         │
└──────────────────────────────────────┘
```

**Advantages:**
- See every operation before execution
- Understand AI's thought process
- Educational for learning workflows
- Maximum control

**Disadvantages:**
- Slower workflow
- Requires constant attention
- Not ideal for rapid iteration

### Autopilot Mode Workflow

Fast iteration for trusted tasks:

```
┌──────────────────────────────────────┐
│ You: Fix the login bug                │
├──────────────────────────────────────┤
│ AI: I'll examine the auth module      │
│ ✓ Tool: read_file src/auth.rs         │
│ ✓ Tool: read_file src/models/user.rs  │
│ ✓ Tool: write_file src/auth.rs        │
│ ✓ Operations completed                │
│                                       │
│ I found the bug in the token...       │
└──────────────────────────────────────┘
```

**Advantages:**
- Faster workflow
- Fewer interruptions
- Good for rapid development
- Still respects permissions

**Disadvantages:**
- Less visibility
- Operations happen automatically
- Trust is necessary

### Mode Selection Strategy

Use **Review Mode** for:
- ✅ First time with Hoosh
- ✅ Unfamiliar code
- ✅ Critical projects
- ✅ Learning
- ✅ Large refactors
- ✅ Untrusted AI models

Use **Autopilot Mode** for:
- ✅ Personal projects
- ✅ Rapid iteration
- ✅ Code generation
- ✅ Repeated patterns
- ✅ After trusting the process
- ✅ Time-sensitive work

### Hybrid Approach

Combine both strategically:

```bash
# Start reviewing to understand
hoosh --backend anthropic

# After approving 10 similar operations, toggle to autopilot
# (Press Shift+Tab)

# Later, switch back to review for something new
# (Press Shift+Tab)
```

## Custom Agents

### Creating Custom Agents

Define agents with specific personalities and capabilities:

```toml
# In ~/.config/hoosh/config.toml

[agents.rust_expert]
system_prompt = """
You are an expert Rust developer with deep knowledge of:
- The Rust standard library and ecosystem
- Performance optimization techniques
- Memory safety patterns
- Concurrent programming

Always explain your reasoning and suggest alternatives.
"""
tags = ["rust", "expert", "performance"]

[agents.documentation_writer]
system_prompt = """
You are a technical writer specializing in software documentation.
Write clear, concise documentation that beginners can understand.
Use examples and code snippets where helpful.
"""
tags = ["docs", "writing", "clarity"]

[agents.security_auditor]
system_prompt = """
You are a security-focused code reviewer.
Check for common vulnerabilities, injection attacks, and unsafe patterns.
Always prioritize security over convenience.
"""
tags = ["security", "review", "audit"]
```

### Using Custom Agents

```bash
# List available agents
hoosh --list-agents

# Use a custom agent
hoosh --agent rust_expert
hoosh --agent documentation_writer
hoosh --agent security_auditor

# Agent preferences persist in config
hoosh config set default_agent rust_expert
```

### Agent Composition

Use multiple agents in sequence:

```bash
# Generate code
hoosh --agent code_generator
> Implement JWT authentication in Rust

# Then review security
hoosh --agent security_auditor
> Review the code I just generated for security issues

# Then write docs
hoosh --agent documentation_writer
> Create comprehensive documentation for the JWT module
```

## Error Handling & Resilience

### Graceful Retry Logic

Hoosh automatically handles transient failures:

```
Request to AI backend
    ↓
Failed (rate limit, timeout, etc.)
    ↓
Wait with exponential backoff:
  1st retry: 1 second
  2nd retry: 2 seconds
  3rd retry: 4 seconds
  4th retry: 8 seconds
    ↓
Max retries reached?
    ↓
Report to user with recommendation
```

### User Feedback

Real-time feedback during retries:

```
Sending request to Anthropic...
⏳ Request failed (rate limited)
   Waiting 2 seconds before retry...
⏳ Request failed (timeout)
   Waiting 4 seconds before retry...
✓ Request succeeded!
```

### Recovery Strategies

If operations fail:

```bash
# Try a different backend
hoosh --backend together_ai

# Check your internet connection
ping api.anthropic.com

# Verify API key
hoosh config show

# Try after a few minutes (rate limits)
sleep 60 && hoosh
```

## Performance Optimization

### Token Management

Hoosh optimizes to stay within token limits:

```bash
# Check your conversation size
hoosh --conversation-stats

# Archive old conversations
hoosh --archive-before 2024-01-01

# Clear conversation history
hoosh --clear-history
```

### Caching & Context

Hoosh intelligently caches:
- Repeated file contents
- System information
- Build outputs
- Previous analyses

This speeds up future operations without re-reading files.

### Backend Selection for Speed

| Backend | Speed | Best For |
|---------|-------|----------|
| Ollama (local) | ⚡⚡⚡ | Fastest responses |
| Together AI | ⚡⚡ | Good balance |
| Anthropic | ⚡⚡ | Quality + speed |
| OpenAI | ⚡ | Higher latency |

## Integrations

### Git Integration

Automatic version control awareness:

```bash
# Hoosh sees your git history
> Explain the changes in the last 5 commits

# Review uncommitted changes
> What did I change in src/main.rs?

# Create meaningful commit messages
> Create a commit message for these changes
```

### Build System Integration

Works with your build tools:

```bash
# Hoosh sees your Cargo.toml
hoosh --add-dir ./

# Request build analysis
> Why is the build failing? Fix it.

# Optimize dependencies
> Reduce build time by optimizing dependencies
```

### IDE-Like Features

```bash
# Jump to definitions
> Where is the User struct defined?

# Find usages
> Find all calls to the validate_email function

# Refactor safely
> Rename all occurrences of 'old_name' to 'new_name'
```

## Scripting & Automation

### Batch Operations

```bash
# Process multiple files
for file in *.rs; do
  echo "> Review $file" | hoosh --backend anthropic --continue
done
```

### CI/CD Integration

```bash
# GitHub Actions example
- name: Code Review
  env:
    HOOSH_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
  run: |
    hoosh --backend anthropic --add-dir ./src
    hoosh --continue
```

### Piping Operations

```bash
# Generate code from requirements
echo "Create a login API endpoint" | hoosh

# Analyze error messages
cargo test 2>&1 | hoosh
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Shift+Tab` | Toggle Review/Autopilot mode |
| `Ctrl+C` | Exit Hoosh |
| `Ctrl+L` | Clear screen |
| `Up/Down` | Navigate history |
| `Tab` | Auto-complete |

## Tips for Advanced Users

✅ **Create agents for different contexts** - One for security, one for performance, one for docs

✅ **Use Together AI for experimentation** - Fast, cheap, many models

✅ **Keep Review Mode for learning** - Understand patterns before automating

✅ **Archive conversations regularly** - Keeps history manageable

✅ **Use environment variables** - Safer than storing keys in config

✅ **Combine multiple backends** - Try each for different strengths

✅ **Create project-local configs** - Share team standards

✅ **Monitor token usage** - Understand your API costs

Next: Explore [Backends](./backends.md) or return to [Documentation](./index.md).
