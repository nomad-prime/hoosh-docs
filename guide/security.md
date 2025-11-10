# Security & Permissions

Hoosh implements a security-first design with granular permission controls. You stay in control of what the AI can do on your system.

## Core Security Philosophy

**Trust but verify.** Hoosh empowers AI assistance while ensuring you always have visibility and control over system operations.

Key principles:
- 🛡️ **All operations are logged** - You see everything the AI attempts
- ✋ **Explicit approval** - Operations require your permission by default
- 🎯 **Granular control** - Fine-tune permissions to match your needs
- 🔐 **Secure by default** - Conservative approach to system access

## Permission System

### How Permissions Work

When Hoosh attempts to perform an operation, the permission system checks:

1. **Operation Type**: Is this a safe operation (read) or risky (write/delete)?
2. **Trust Status**: Is the project directory marked as trusted?
3. **Approval Mode**: Are we in review or autopilot mode?

Safe operations (always allowed):
- ✅ Reading files
- ✅ Listing directories
- ✅ Viewing file metadata

Risky operations (require permission):
- ⚠️ Writing files
- ⚠️ Deleting files
- ⚠️ Executing shell commands
- ⚠️ Modifying permissions
- ⚠️ Installing packages

### Permission Dialogs

When a risky operation is requested, you'll see:

```
┌─────────────────────────────────────────┐
│ Approve Operation                       │
├─────────────────────────────────────────┤
│ Tool: bash                              │
│ Command: npm install                    │
│                                         │
│ [y] Yes, once                           │
│ [n] No                                  │
│ [t] Trust project                       │
│ [?] Show more info                      │
└─────────────────────────────────────────┘
```

### Permission Options

**[y] Yes, once**
- Allow this specific operation only
- Won't affect future similar operations
- Best for one-off tasks
- Use when you've reviewed the operation

**[n] No**
- Deny the operation
- AI will be notified and can explain
- No harm done
- Use when something looks suspicious

**[t] Trust project**
- Grant permission for all operations within the current project directory
- Operations outside the project still require permission
- Session-only (cleared when you exit)
- Shows indicator in header: `🔓 Project Trusted`

**[?] Show more info**
- View full command/operation details
- Understand exactly what will happen
- Ask for clarification from the AI

## Review vs Autopilot Modes

### Review Mode (Default) ✓

Perfect for learning, critical work, or untrusted operations.

```
┌─ Hoosh [Review] ──────────────────────────┐
│ Previous conversation...                  │
│                                           │
│ AI: I'll read the config file             │
│ ✓ Reading src/main.rs                     │
│ [Approve?] [y/n/?]                        │
└───────────────────────────────────────────┘
```

**Behavior:**
- Every tool call shows an approval dialog
- You see and approve each operation
- Slower but maximum visibility
- Great for understanding AI logic

### Autopilot Mode 🚀

Fast iteration for trusted tasks.

```
┌─ Hoosh [Autopilot] ───────────────────────┐
│ Previous conversation...                  │
│                                           │
│ AI: I'll read the config and test it      │
│ ✓ Reading src/main.rs                     │
│ ✓ Executing cargo test                    │
│ ✓ Operations completed                    │
└───────────────────────────────────────────┘
```

**Behavior:**
- Tool calls execute automatically
- Still respects permission system
- Still asks for truly risky operations
- Faster development flow

### Toggling Modes

Press `Shift+Tab` during a session to switch:

```
Hoosh [Review] ←→ Hoosh [Autopilot]
   (press Shift+Tab)
```

The status bar shows your current mode.

## Trust Project Feature

Streamline development with project-wide trust.

### Enabling Trust

During a permission dialog, select **[t] Trust project**:

```
│ [t] Trust project                       │
```

Or use the command:

```
/trust
```

### Visual Indicator

When trust is active, the header shows:

```
┌─ Hoosh [Autopilot] 🔓 Project Trusted ──┐
```

### What Gets Trusted

**Trusted scope:**
- ✅ Current working directory and subdirectories
- ✅ All operations within this scope

**Not trusted:**
- ❌ Operations outside the project
- ❌ Parent directories
- ❌ System-wide operations
- ❌ Different projects

### Revoking Trust

Mid-session, revoke trust with:

```
/untrust
```

The indicator disappears:

```
┌─ Hoosh [Autopilot] ───────────────────────┐
```

You can re-enable it anytime by selecting "Trust project" again.

### Session Duration

Trust is **session-only**:
- Lost when you exit Hoosh
- Each session starts fresh
- No persistent trust stored on disk
- Always safe to exit

## Security Considerations

### Safe to Approve

These operations are generally safe:
- ✅ Reading source files
- ✅ Running tests
- ✅ Building your project
- ✅ Formatting code
- ✅ Installing dependencies
- ✅ Creating configuration files

### Review Carefully

These deserve extra scrutiny:
- ⚠️ Installing system packages globally
- ⚠️ Modifying environment variables
- ⚠️ Running arbitrary shell scripts
- ⚠️ Changing file permissions
- ⚠️ Deleting files or directories
- ⚠️ Network operations

### Always Deny

Never approve these:
- ❌ `sudo` or privilege escalation
- ❌ `rm -rf /` or system-wide deletions
- ❌ Credential theft attempts
- ❌ Malicious code patterns

## Best Practices

### For Learning & Experimentation

1. Use **Review Mode** (default)
2. Approve operations one at a time
3. Read what Hoosh is doing
4. Ask for explanations
5. Progress to Autopilot once comfortable

### For Production Code

1. Keep **Review Mode** enabled
2. Review all AI-generated code changes
3. Never use "Trust project" for production
4. Approve changes individually
5. Use version control to track changes

### For Personal Projects

1. Start with **Review Mode**
2. Move to **Autopilot** after verification
3. Use **"Trust project"** for rapid iteration
4. Exit and restart if you're unsure
5. Review history with `git diff`

### For Untrusted AI Models

1. Always use **Review Mode**
2. Never enable "Trust project"
3. Approve operations individually
4. Test outputs thoroughly
5. Keep backups before risky operations

## Advanced Security

### Sandboxing

Hoosh runs AI operations in a sandboxed environment:

- Limited to project directories
- Can't access system files
- Can't execute privileged commands
- Can't modify global configuration

### Audit Trail

All operations are logged:

```bash
# View operation history
hoosh logs

# Export audit trail
hoosh logs --export audit.log
```

### Environment Isolation

Protect sensitive data:

```bash
# Don't export sensitive env vars before starting
unset AWS_SECRET_ACCESS_KEY
unset DATABASE_URL

# Then start Hoosh safely
hoosh
```

### API Key Security

#### File-Based (Default)

```bash
# Stored in config file with 600 permissions
chmod 600 ~/.config/hoosh/config.toml
```

#### Environment-Based (Safer for CI/CD)

```bash
# Don't store in config
export HOOSH_ANTHROPIC_API_KEY="sk-ant-..."

# Run Hoosh
hoosh
```

#### CI/CD Safe Setup

```yaml
# GitHub Actions example
- name: Run Hoosh
  env:
    HOOSH_ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
  run: hoosh --continue
```

## Troubleshooting Security Issues

### "Permission Denied" Errors

**Problem**: Can't perform operations even when approved

**Solution**:
```bash
# Check file permissions
ls -la /path/to/file

# Make writable if needed
chmod 644 /path/to/file
```

### Trust Not Working

**Problem**: "Trust project" was set but operations still ask for permission

**Solution**:
- Check you're in the right directory
- Run `hoosh config show` to verify current path
- Exit and re-enter the session
- Operations outside the project dir won't be trusted

### Forgotten Trust Status

**Problem**: Can't remember if project is trusted

**Solution**:
- Look at the header indicator
- Check status bar: `[Autopilot] 🔓 Project Trusted`
- Use `/untrust` to be safe

## Security Checklist

Before allowing AI to modify your code:

- [ ] Review Mode is enabled (or you understand Autopilot)
- [ ] I understand what operation will be performed
- [ ] The operation is scoped to my project directory
- [ ] I have a backup or version control
- [ ] I've reviewed similar operations before
- [ ] The AI's explanation makes sense

## Getting Help

Found a security issue? Don't open a public issue.

🔐 **Report privately**: [security@hoosh.dev](mailto:security@hoosh.dev)

Questions about security?
- 📖 Read this guide again
- 💬 [Open a discussion](https://github.com/nomad-prime/hoosh/issues?q=state%3Aopen%20label%3Aquestion)
- 🐛 [Report a bug](https://github.com/nomad-prime/hoosh/issues)

Remember: **You are always in control.** If something feels wrong, deny it and ask Hoosh to explain.

Next: Explore [Features](./features.md).
