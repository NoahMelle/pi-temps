module.exports = {
    apps: [{
        name: "temps",
        script: "bun",
        args: "run start",
        env: {
            PORT: 3001,
        },
    }]
}
