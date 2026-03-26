const { Command } = require("commander");
const { registerConfigCommand } = require("./commands/config");
const { registerRunCommand } = require("./commands/run");

const program = new Command();

program
  .name("ice-reflection-engine")
  .description("A TypeScript CLI that analyzes an AI agent's daily memory logs and distills them into structured long-term memory entries. Reads YYYY-MM-DD.md files, identifies patterns and decisions, and writes curated summaries to MEMORY.md using semantic scoring.")
  .version("0.1.0");

registerRunCommand(program);
registerConfigCommand(program);

program.parseAsync(process.argv).catch((error: Error) => {
  process.stderr.write(`error: ${error.message}\n`);
  process.exitCode = 1;
});
