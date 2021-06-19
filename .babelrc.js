function getPresets() {
    const env = process.env.NODE_ENV
    if(env === 'test')
        return ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
    return ["@babel/preset-typescript", "@babel/preset-react"]
}

module.exports = {
    presets: getPresets()
}