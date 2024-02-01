const { build, context } = require('esbuild');

const config = {
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'public/index.js',
  format: 'iife',
  logLevel: 'info',
  platform: 'browser',
  loader: { '.js': 'jsx' },
  sourcemap: 'inline',
}

const run = async () => {
  if (process.argv.indexOf('--watch') >= 0) {
    const ctx = await context(config);
    await ctx.watch();
  } else {
    build(config);
  }
}

run();