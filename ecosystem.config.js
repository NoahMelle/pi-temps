module.exports = {
    apps: [{
        name: "temps",
        script: "bun",
        args: "run dev",
        env: {
            NODE_ENV: "production",
            PORT: 3001,
        },
    }]
}
