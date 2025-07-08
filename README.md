# Figma MCP Demo 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment
- nodeJS https://nodejs.org/en/download
- Cursor 
- TODO VSCode instructions
- Figma 

## Prerequisites

Used Create React App (deprecated) to genereate this project (you don't need it)
- `npm install -g create-react-app`
- `npx create-react-app figma-mcp-demo`

## Installation

Install dependencies
- `npm install`

Start local web server
- `npm run start` 

## Setup

Configure Figma MCP server following these instructions https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server

### Cursor

- Cursor Settings > Add new MCP tool

```
{
    "mcpServers": {
        "Figma": {
            "url": "http://127.0.0.1:3845/sse"
        }
    }
}
```
<details>
<summary>Expand to view screenshots</summary>
    ![figma-mcp-demo-cursor-settings-0](screenshots/figma-mcp-demo-cursor-settings-0.png)
    ![figma-mcp-demo-cursor-settings-1](screenshots/figma-mcp-demo-cursor-settings-1.png)
    ![figma-mcp-demo-cursor-settings-2](screenshots/figma-mcp-demo-cursor-settings-2.png)
</details>

### Figma 
- Enable MCP Dev Server (Note. not available on Free plans (only Team or Enterprise) Also Dev or Full seat )

<details>
<summary>Expand to view screenshots</summary>
    ![figma-mcp-figma-settings](screenshots/figma-mcp-figma-settings.png)
</details>

## Usage


### Figma
- Copy URL to Figma component (or node)  
    - e.g. Using a sample PrimaryButton component from personal pproject @https://www.figma.com/design/kQSjh7sw77rH4jNflXpKX2/MCP-Demo?node-id=1-6&m=dev

### Cursor
-   Ask Cursor (or agent) to generate code 
    - e.g. `Create React component for @https://www.figma.com/design/kQSjh7sw77rH4jNflXpKX2/MCP-Demo?node-id=1-6&m=dev`

## Demo

Creating React component for a Figma PrimaryButton component 

![figma-mcp-demo1](demo/figma-mcp-demo1.gif)

<details>
    <summary>Expand to view screenshots</summary>
    ![figma-mcp-demo1](demo/figma-mcp-demo1.gif)
    ![figma-mcp-demo2](demo/figma-mcp-demo2.gif)
</details>

## Screenshots

<details>
    <summary>Expand to view screenshots</summary>
    
![figma-mcp-demo-figma-component-0](screenshots/figma-mcp-demo-figma-component-0.png)
![figma-mcp-demo-figma-component-1](screenshots/figma-mcp-demo-figma-component-1.png)
![figma-mcp-demo-figma-button-component-on-web](screenshots/figma-mcp-demo-figma-button-component-on-web.png)
![figma-mcp-demo-cursor-settings-0](screenshots/figma-mcp-demo-cursor-settings-0.png)
![figma-mcp-demo-cursor-settings-1](screenshots/figma-mcp-demo-cursor-settings-1.png)
![figma-mcp-demo-cursor-settings-2](screenshots/figma-mcp-demo-cursor-settings-2.png)
![figma-mcp-demo-prompt-1](screenshots/figma-mcp-demo-prompt-1.png)
![figma-mcp-demo-prompt-2](screenshots/figma-mcp-demo-prompt-2.png)

</details>

## Demo

<details>
    <summary>Expand to view demos</summary>
        ![figma-mcp-demo1](demo/figma-mcp-demo1.gif)
        ![figma-mcp-demo2](demo/figma-mcp-demo2.gif)
</details>

## Troubleshooting

- Getting 403 errors on prompt?
    - Ensure you have a non Free account (Pro or Enterprise) and a Full or Dev Seat
    - Ensure your Figma file is in your Figma project
- After adding the MCP to Cursor, restart Figma after
- Check the MCP server is running in your browser http://127.0.0.1:3845/sse

