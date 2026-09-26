---
title: "Salesforce in Claude: What Ships, How to Turn It On, What to Fix First"
date: "2026-09-26"
author: "Allen Arani"
excerpt: "Claudeforce puts 37 Salesforce-built sales skills inside Claude with one admin setup. Here's how to get into the beta, and why the state of your org decides how good the answers are."
tags: ["CRM", "MCP", "AI", "Integrations"]
---

# Salesforce in Claude: What Ships, How to Turn It On, What to Fix First

On August 26, 2026, Salesforce and Anthropic announced Claudeforce, an expanded partnership that runs in both directions. Claude is available inside Agentforce as a reasoning model for the Atlas Reasoning Engine, and Salesforce data is available inside Claude through a plugin. For most sales teams the second part is the one to pay attention to right now: as of September 15, Salesforce in Claude is in beta on all paid Claude plans.

## What ships in the plugin

Salesforce in Claude is a plugin built with Salesforce. It bundles a Salesforce connector (read and write), a Slack connector for deal channels and team threads, and 37 sales skills written by Salesforce. The skills cover the work reps already do by hand: account research, call prep, deal scoring, close planning, pipeline review, summarizing call transcripts, updating the CRM after a meeting, and building pipeline dashboards. Salesforce's product page also lists a morning briefing drawn from live pipeline, stakeholder mapping, and objection handling based on call and email history.

Salesforce stays the system of record. Each seller signs in with their own Salesforce credentials, Claude reads only what that user's permissions allow, and by default Claude asks the user to approve each proposed change before it writes anything back.

## Why setup is simpler than it was

Connecting Claude to Salesforce was possible before this. Salesforce published a guide in May for connecting Claude to its hosted MCP servers, and the route was a custom connector: configure the server, create an External Client App with the right OAuth scopes, then paste the server URL and credentials into Claude. It worked, but each team that set up its own connection added one more integration for someone to govern.

The plugin replaces that with a two-admin setup, per Anthropic's Help Center guide:

1. A Salesforce admin requests access through AgentExchange, receives an acceptance email with setup instructions, and enables the Salesforce MCP server in the org.
2. A Claude Primary Owner or Owner opens Organization settings, turns on the plugin (installed by default, available to install, or required), then enters the consumer key and secret from the Salesforce External Client App under Connectors.
3. Members turn the plugin on and start using it in Claude.

The org gets connected once, and every user inherits access scoped to their own Salesforce permissions. No per-user connector configuration.

## How to sign up

Go to [salesforce.com/claudeforce](https://www.salesforce.com/claudeforce/) and use the "Join the beta" button, which leads to the [AgentExchange beta access page](https://agentexchange.salesforce.com/sales-cloud-in-claude-beta-access). Anthropic's guide, [Set up Salesforce in Claude for your organization](https://support.claude.com/en/articles/16952184-set-up-salesforce-in-claude-for-your-organization), lists the Salesforce edition and role requirements. Confirm those before you plan a rollout.

Two caveats. This is a beta, so don't put a revenue process on it that can't tolerate change. And pricing wasn't published in the announcement, so ask about usage costs before you turn it on for the whole sales floor.

## What to fix before you turn it on

The skills read your org as it is. If three reps log the same company three different ways, the account research skill finds three companies. If "Negotiation" means a signed LOI to one manager and a first pricing call to another, deal scoring inherits that disagreement and reports it with confidence. Writes from Claude also run through your existing validation rules, Flows, and Apex triggers, so a misfiring trigger fires just as readily when Claude makes the update.

The list we usually work through:

- Merge duplicate accounts and contacts, and decide which system owns each field that syncs in from billing or marketing tools.
- Write down stage definitions and exit criteria. Put them in field help text and in a skill Claude reads.
- Close or reassign opportunities that haven't moved in months. They distort every pipeline review.
- Start with read-only permission sets for a pilot group, then widen write access once you've watched a few weeks of proposed changes.

Tool design matters too. In a Capgemini Salesforce Architects post on Medium, Christopher Ramm described a demo where the standard MCP tools needed six queries to prepare a customer briefing and got the picture slightly wrong about every third time. One Apex method that assembled the briefing server-side, exposed as a custom MCP tool with a clear description, got it right and used a fraction of the context. Custom MCP servers in Salesforce are built from `@InvocableMethod` Apex, and the method description is what Claude reads when it decides which tool to call.

## Where 6A Logic fits

We do three kinds of work around this launch.

The first is shaping CRM data so the tool calls return something useful: deduplication, field ownership, stage definitions, and custom Apex tools that answer your team's common questions in one call instead of six.

The second is connecting the rest of the stack. Salesforce and Slack come bundled with the plugin. Your accounting system, support desk, project tracker, and data warehouse don't. We build MCP servers and connectors for those so Claude can see an overdue invoice or an open escalation while it preps a renewal call, and act across systems with the same approval gates the plugin uses. That's the practical path to a business where routine work runs on its own and people approve the decisions that matter.

The third is customization. The 37 skills are Salesforce's defaults. Your stages, territories, approval thresholds, and report formats are yours, and a skill is a markdown file that encodes them. We write and version those skills against your actual org and your actual business case, so Claude's answers follow the rules your team already works by.

---

[Schedule a call](https://calendar.app.google/xPb4454AYtz4CARJA)
