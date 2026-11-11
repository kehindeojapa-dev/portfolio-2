---
title: Leadway Corporate Portal
summary: A multi-tenant portal where companies manage their employees' Leadway Health cover, from members and providers to claims analytics and invoices.
project: Leadway Corporate Portal
role: Frontend · Backend
stack: [React, ASP.NET, MSSQL]
# Set to false once the TODOs below are filled in, to publish this page.
draft: true
---

## The problem

Companies that buy group health cover from Leadway Health need one place to manage who is covered, see how their plan is being used, and keep track of what they owe. **[TODO: how HR teams handled this before the portal, e.g. email and spreadsheets with account managers]**

## Who uses it

- **HR and scheme administrators** at each client organisation sign in to their own organisation's workspace.
- **Leadway staff** use a separate staff sign-in to support the organisations they look after.

## What it does

- **Manage members:** add, update and remove employees on the scheme.
- **Provider network:** find accredited hospitals and providers.
- **Performance analytics:** utilisation, claims and loss ratio for the organisation's plan.
- **Finance and reports:** invoices and scheme performance.

## How it's built

A React single-page app on the frontend, an ASP.NET API on the backend, and Microsoft SQL Server for data.

### Multi-tenancy

Each client organisation is a tenant. A user is tied to their organisation when they sign in, and every request is scoped to it, so one company can never see another company's members, claims or invoices. Leadway staff accounts can work across the organisations they're assigned to.

**[TODO: confirm how tenant isolation works, e.g. one shared database with an organisation ID on every row and a global query filter, a schema per tenant, or a database per tenant]**

**[TODO: how the tenant is resolved on each request, e.g. a claim in the auth token, the subdomain, or a header]**

## My role

I worked across the frontend and the backend. **[TODO: the features you owned end to end, e.g. member bulk upload, analytics dashboards, invoice generation, staff access controls]**

## Outcome

**[TODO: one or two numbers, e.g. organisations onboarded, members managed, or time saved for HR or account managers]**
