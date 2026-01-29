// /home/ubuntu/server/ecosystem.config.js
module.exports = {
  apps: [{
    name: "server",
    script: "npm",
    args: "start",
    // This explicitly tells PM2 the correct directory
    cwd: "/home/ubuntu/server",
    watch: false,
    env: {
      "NODE_ENV": "production",
    }
  }]
}